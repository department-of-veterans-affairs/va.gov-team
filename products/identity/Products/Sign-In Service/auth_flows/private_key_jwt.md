# Private Key JWT Authentication

## Version History

| Version Number | Author | Revision Date | Description of Change |
| --- | --- | --- | --- |
| 0.1 | John Bramley | 9/25/2023 | Initial creation |

## Summary

Private Key JWT Authentication allows a backend client unconnected to the original `/authorize` request to complete authentication and obtain tokens by passing a JWT signed by their pre-registered private key. It differs from PKCE auth only during the initial request for tokens, when the client has not yet obtained SiS credentials. Integrations with the rest of the SiS routes are managed through [API](./api_oauth.md) authentication.

### Service Account Authentication

The backend JWT flow described here is an alternate way for a client to finish a user authentication that was started by a different application. It is a separate feature from [Service Account Authorization](../auth_flows/service_account.md), an entirely backend-to-backend process meant to authenticate *applications*, not users, with SiS. Both features do rely upon private/public key pairs, and the same public certificate can be registered with both a Client Configuration and a Service Account.

## Client Configuration

The usage of Private Key JWT auth vs PKCE auth is controlled in [your client's `Client Config`](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Sign-In%20Service/configuration/client_config.md) via the `pkce` and `certificates` settings.

- `authentication`: api
- `pkce`: false
- `certificates`: ["your-public-cert", "your-second-public-cert"]

### Creating and Registering Public Certificates

A new public/private key pair can be created through your terminal:

```bash
> openssl req -nodes -x509 -days 365 -newkey rsa:2048 -keyout private.pem -out public.crt
# Follow the key creation prompts, ~> private.pem, public.crt
> cat public.crt
-----BEGIN CERTIFICATE-----
MIIDfTCCAmWgAwIBAgIUQZ5wNPDE+Jd10AlihrgvIl9zjPUwDQYJKoZIhvcNAQEL
BQAwTjELMAkGA1UEBhMCVVMxCzAJBgNVBAgMAkNPMQ8wDQYDVQQHDAZEZW52ZXIx
ITAfBgNVBAoMGEludGVybmV0IFdpZGdpdHMgUHR5IEx0ZDAeFw0yMzA5MjUxNTMx
NDZaFw0yNDA5MjQxNTMxNDZaME4xCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJDTzEP
MA0GA1UEBwwGRGVudmVyMSEwHwYDVQQKDBhJbnRlcm5ldCBXaWRnaXRzIFB0eSBM
dGQwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDoLWO32DweS1K/jj0b
sHwaww3lsGOIDMixkE53nAONZywQjl7g6hotkUuX1z58ly+TGCPVOyMVBAH+BMic
V6w6hPCEg3AkTUFcS9Xhxg0xLzxl928aMxfSnIJZqmehH+5HnReGwLw3R66EmBEb
7IygMTTrNoAkJdDMNblqhzMagRiOxNfMG+vaBkLYJG7q/QnOS511v+vfcZKBEgkD
OLWnpScodJgSl4Svj0T14DwAwvQaGnSxjBpNB8hVXfjkdh+PJMJqfXA2CUoLccfs
9hLF/6Pn/6Sp3CAzW3xc7q6Kq49NJRj474LYkgJ47j9fTS9sINOm5BS8o4TmXubw
oaaBAgMBAAGjUzBRMB0GA1UdDgQWBBTekmBo+ZvN8kyaZjFNx3Fnx3Dt+jAfBgNV
HSMEGDAWgBTekmBo+ZvN8kyaZjFNx3Fnx3Dt+jAPBgNVHRMBAf8EBTADAQH/MA0G
CSqGSIb3DQEBCwUAA4IBAQAVsJIc5GYS7Px1T2kFQisBKzFloUePtZ+6I3LPb5UG
aVFh4C6Wa0/xEcBiYkenbRwH4X2ZnblLhp0ZS4dlaFTw4pLMKzQ0YjotDrqUmdnx
pbH5itDSIMD4ChGeRhfXUGxYwaX4Kz7WIpZ5abVx4QYUkZEDDafOMqyWLc/uIzky
FEaoNO98mC8bc3XvkrqFMYHcv9r8zMbKkpZZnYskqiADs60nT7AZ9w+oXieuTwkO
sxS0LKpt5wAnZ/J/my68mHUJLoOLXIeiQwf/6BGzmGIfzKfPmIIyDc2/rG/EXXSi
j7BJ4dDDJsQXB8hIxY+Fq5OyU5q9W0A2oIrvbvRazdoh
-----END CERTIFICATE-----
```

This string can then be copied and inserted (within an array) into your Client Config's `certificates`.

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
