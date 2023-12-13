# Private Key JWT Authentication

## Version History

| Version Number | Author | Revision Date | Description of Change |
| --- | --- | --- | --- |
| 0.1 | John Bramley | 9/25/2023 | Initial creation |

## Summary

Private Key JWT Authentication allows a backend client unconnected to the original `/authorize` request to complete authentication and obtain tokens by passing a JWT signed by their pre-registered private key. It differs from PKCE auth only during the initial request for tokens, when the client has not yet obtained SiS credentials. Integrations with the rest of the SiS routes are managed through [API](./mobile_oauth.md) authentication.


## Client Configuration

The usage of Private Key JWT auth vs PKCE auth is controlled in [your client's `Client Config`](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Sign-In%20Service/configuration/client_config.md) via the `pkce` and `certificates` settings.

- `pkce`: false
- `certificates`: ["your-public-cert"]

## Sequence Diagram

## Technical Diagram

## Public Routes

### [Token](../endpoints/token.md)

- `staging-api.va.gov/v0/sign_in/token`
- params: `code`, `grant_type`, `client_assertion`, `client_assertion_type`

| Name | Description | Value Type | Value |
| --- | --- | --- | --- |
| code | authentication code provided by vets-api to be exchanged for tokens | string | `8db56c32-8eec-4efe-8293-9fbbe717f087` |
| grant_type |  specifies authentication type, `authorization_code` is required for Private Key JWT auth | string | `authorization_code` |
| client_assertion |  JWT signed by client key to prove their authenticity | string | `eyJhbGciOiJSUzI1NiJ9...` |
| client_assertion_type |  specifies 'JWT Bearer' assertion type | string | `urn:ietf:params:oauth:client-assertion-type:jwt-bearer` |

#### Creating a Client Assertion

In lieu of sending a `code_verifier` to authenticate your token requestk as in PKCE auth, instead use the private key connected to your registered public certificate to sign a JWT with the following attributes:

| attribute | data type | description | sample value |
| --- | --- | --- | --- |
| `iss` | string | issuer of JWT assertion, must match the saved SiS ClientConfig `client_id` | `sample_client_api` |
| `aud` | string | the SiS token route that is being requested | http://localhost:3000/v0/sign_in/token |
| `sub` | string | subject of token, must match the saved SiS ClientConfig `client_id` (same as `iss`) | `sample_client_api` |

This can be done with a [JWT encoding program](https://dinochiesa.github.io/jwt/) or through the Rails console:

```ruby
  private_key = OpenSSL::PKey::RSA.new(File.read('private_key.pem'))
  token_payload = {
    iss: '<client_id>',
    aud: 'http://127.0.0.1:3000/v0/sign_in/token',
    sub: '<client_id>'
  }
  JWT.encode(token_payload, private_key, 'RS256')
   => "eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJzYW1wbGVfY2xpZW50X2FwaSIsImF1ZCI6Imh0dHA6Ly8xMjcuMC4wLjE6MzAwMC92MC9zaWduX2luL3Rva2VuIiwic3ViIjoic2FtcGxlX2NsaWVudF9hcGkifQ.oYuGeVe-v0Cvk3YixkQNsU_p11Kb2D423ZZr1YlUIPEEAO8sUVw_lHVh3NuopmwxTzGZJE0IXMMG0RjdHebkq_YZhrfHS_mKpYTKOnbUvv0VUaDdpewuPOoHnKhLJ9uFQn_94HD4byj-JT-Ect6eoSYeXqGWKvAEfmCWKK3MUOpHw2URs77mxRndXeSj7PUE9OSy0Za_oeg7XaJxb3A6NU4srjq40zYXs7-lkoKq49pwf7TqHO8r7Lz0EsMQkPp2mxSZSi0JzCtfUHfUwXFAF-hj8dYf9VY-Xf9BF-GBdnzLFSy9GzZWjaRbBdQaX218bcHS8DVglKjBHq215fZM6g" 
```

Include the signed JWT as your `client_assertion` in your POST request to `/token`:

```bash
> curl -X POST localhost:3000/v0/sign_in/token -H 'Content-Type: application/json' -d '{"grant_type": "authorization_code", "code": "09a8cd5b-bfd6-4b70-a447-4d4014063718", "client_assertion_type": "urn:ietf:params:oauth:client-assertion-type:jwt-bearer", "client_assertion": "eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJzYW1wbGVfY2xpZW50X2FwaSIsImF1ZCI6Imh0dHA6Ly8xMjcuMC4wLjE6MzAwMC92MC9zaWduX2luL3Rva2VuIiwic3ViIjoic2FtcGxlX2NsaWVudF9hcGkifQ.oYuGeVe-v0Cvk3YixkQNsU_p11Kb2D423ZZr1YlUIPEEAO8sUVw_lHVh3NuopmwxTzGZJE0IXMMG0RjdHebkq_YZhrfHS_mKpYTKOnbUvv0VUaDdpewuPOoHnKhLJ9uFQn_94HD4byj-JT-Ect6eoSYeXqGWKvAEfmCWKK3MUOpHw2URs77mxRndXeSj7PUE9OSy0Za_oeg7XaJxb3A6NU4srjq40zYXs7-lkoKq49pwf7TqHO8r7Lz0EsMQkPp2mxSZSi0JzCtfUHfUwXFAF-hj8dYf9VY-Xf9BF-GBdnzLFSy9GzZWjaRbBdQaX218bcHS8DVglKjBHq215fZM6g"}'
{"data":{"refresh_token":"v1:insecure+data+A6ZXlKMWMyVnlYM1YxYVdRaU9pSmxZakUzTW1Vek1TMHpObUV3TFRReU5qWXRZV0UzWWkxaU5EUmpPVE01WlRZNE5UQWlMQ0oxZFdsa0lqb2lNak5sWkdJellUUXRNREJsTmkwME0yVTVMV0UzTldVdFltVTJZell5T1RobVpEVmlJaXdpYzJWemMybHZibDlvWVc1a2JHVWlPaUpsWWpVNFl6YzRaUzAxWkdJd0xUUTRPRGt0T0RneFpDMDVOVEl4T0dOaE5HSTBZekFpTENKd1lYSmxiblJmY21WbWNtVnphRjkwYjJ0bGJsOW9ZWE5vSWpvaVlqZzROR1ZqWkRZd016QmhOMlZrWkRNeFpETXlaR0ZsTVdaak9XUXlOV0ZtTkdFMk5UVmtNREJpWWpJd1ptUTFNRE0xTjJZMFlqQTJNbUUwTkdVNE9TSXNJbUZ1ZEdsZlkzTnlabDkwYjJ0bGJpSTZJams0WmpnMVlUWTBaVEZsTm1FelpXWXlOalpqTURoa09ERXlPVGN5TjJFM0lpd2libTl1WTJVaU9pSmtOamRrWkRFek9HRm1PR1ZqTVRZek1EWmhOVFpoWW1VMVpEZzJZV0l3TkNJc0luWmxjbk5wYjI0aU9pSldNQ0lzSW5aaGJHbGtZWFJwYjI1ZlkyOXVkR1Y0ZENJNmJuVnNiQ3dpWlhKeWIzSnpJanA3ZlgwPQ==.d67dd138af8ec16306a56abe5d86ab04.V0","access_token":"eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJ2YS5nb3Ygc2lnbiBpbiIsImF1ZCI6InNhbXBsZV9jbGllbnQiLCJjbGllbnRfaWQiOiJzYW1wbGVfY2xpZW50X2FwaSIsImp0aSI6Ijc5YzRiNDIyLTRkMTctNGU5My04NGUxLTViNzhjZTRjOTQwNyIsInN1YiI6ImViMTcyZTMxLTM2YTAtNDI2Ni1hYTdiLWI0NGM5MzllNjg1MCIsImV4cCI6MTcwMjUwOTM1MywiaWF0IjoxNzAyNTA5MDUzLCJzZXNzaW9uX2hhbmRsZSI6ImViNThjNzhlLTVkYjAtNDg4OS04ODFkLTk1MjE4Y2E0YjRjMCIsInJlZnJlc2hfdG9rZW5faGFzaCI6IjgwZGIwZjQ5ZDlkNTRhZGY0MzM1NWMxNWE2YjY4M2JmYjViNjY0MGZjNDUzZjMyZjYyZjYzZDUyZGEyZWZjM2EiLCJwYXJlbnRfcmVmcmVzaF90b2tlbl9oYXNoIjoiYjg4NGVjZDYwMzBhN2VkZDMxZDMyZGFlMWZjOWQyNWFmNGE2NTVkMDBiYjIwZmQ1MDM1N2Y0YjA2MmE0NGU4OSIsImFudGlfY3NyZl90b2tlbiI6Ijk4Zjg1YTY0ZTFlNmEzZWYyNjZjMDhkODEyOTcyN2E3IiwibGFzdF9yZWdlbmVyYXRpb25fdGltZSI6MTcwMjUwOTA1MywidmVyc2lvbiI6IlYwIiwidXNlcl9hdHRyaWJ1dGVzIjp7fX0.V9wcayRKaH-Vif7oNCh577LWlAAnzlGj-OEWLmGO6vvcMT3D5YpS5xBpOGeWZ9R9q6TGTaZc7OdgGgTsJNCXPPmJz5XEnG-ie7ULWUU8qub1EdgFA6naK74ptcAWoag39VA3i0PcB0AjEsz_JC4jROfEq4_vipthwhrFz9z5Gf0xF4wnhCAOVPWocuOR49HRasbVKE9g6osho_5VxpOeaOnog4D8ZuY8AlrFk5moSbJIrI31r8hyB0tw4lFWb-Ad6UqqjpyQNHJQDjjrvIredjZ8brUeGl1HIKxMDS5HuCwZ3DUSGcDxtSg_AIzwc2tswi2IT-Bhk2jSvb-qbtKTIw"}}
```
