# Private Key JWT Authentication

## Version History

| Version Number | Author | Revision Date | Description of Change |
| --- | --- | --- | --- |
| 0.1 | John Bramley | 9/25/2023 | Initial creation |
| 0.2 | John Bramley | 1/03/24 | `auth_flows` refactor |

## Summary

Private Key JWT Authentication allows a backend client unconnected to the original `/authorize` request to complete authentication and obtain tokens by passing a JWT signed by a private key; the JWT is then validated by Sign in Service (SiS) against the client's pre-registered public certificate connected to that key. It differs from PKCE auth only during the initial request for tokens, when the client has not yet obtained SiS credentials. Integrations with the rest of the SiS routes are managed through [API](./api_oauth.md)  or [cookie](./cookie_oauth.md) authentication.

### Service Account Authentication

The backend JWT flow described here is an alternate way for a client to finish a user authentication that was started by a different application. It is a separate feature from [Service Account Authorization](../auth_flows/service_account.md), an entirely backend-to-backend process meant to authenticate *applications*, not users, with SiS. Both features do rely upon private/public key pairs, and the same public certificate can be registered with both a Client Configuration and a Service Account.

## Client Configuration

The usage of Private Key JWT auth vs PKCE auth is controlled in [your client's `Client Config`](../configuration/client_config.md) via the `pkce` and `certificates` settings.

- `pkce`: false
- `certificates`: ["your-public-cert", "your-second-public-cert"]

### Creating and Registering Public Certificates

A new private key/public certificate pair can be created through your terminal:

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

- Sequence Diagram to be added

## Technical Diagram

- Technical Diagram to be added

## Flow Diagrams

### Unauthenticated request flow
<img width="1363" alt="unauthenticated-new-session" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/20125855/59af0f7f-dac8-45d1-a7c3-f63341eafd7e">

## Public Routes

### [Token](../endpoints/token.md#private-key-jwt-auth)
- provides the client with access & refresh tokens after authentication

### Creating a Client Assertion

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
> curl -X POST localhost:3000/v0/sign_in/token -H 'Content-Type: application/json' -d '{
"grant_type": "authorization_code",
"code": "9e7bd199-4dd7-417a-b8ea-d32e9d4e97a4",
"client_assertion_type": "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
"client_assertion": "eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJkZWUwMWY0Mi1jYTZjLTRmY2UtYjNiNi1jMGJmYWUwODExNTAiLCJhdWQiOiJodHRwOi8vMTI3LjAuMC4xOjMwMDAvdjAvc2lnbl9pbi90b2tlbiIsInN1YiI6ImRlZTAxZjQyLWNhNmMtNGZjZS1iM2I2LWMwYmZhZTA4MTE1MCJ9.ls_WzGiY3fsGQ0t0Ryd_Odk5qlagRP5JWqKpTqizuYo8HW37RKCKgNMdy7-IlJeRycaWGAuU6ZZaXo9pd7d4wX2Q69AqNQMc9c3hY0Ls6gTpbdaCtraLV0wvTnIPbaS5XL_ZQgnBX6jdPx_mBX4kG-Yj8YNSNpLXcGBCaaTmzKrWdx18nErf2nbty3dNyYGL2ha8yg9fa3Rm84yler3FWgueD45UG3Y8t7aoJ2O8EMGDZukVnHdeNxXzS0-vtH3Buaq7lzROXOS0gjHmakasyKwPXaSTuzeRFxVwRVDR-NZw_KvJr0OFsiZ70xfAIPkVyjnWjXZ54lltmY5SmR5pQw"}'

# 200 Response
{"data":{
  "refresh_token":"v1:insecure+data+A6ZXlKMWMyVnlYM1YxYVdRaU9pSmxORFEwT0RNM1lTMWxPRGhpTFRSbU5Ua3RPRGRrWVMweE1HUXpZemMwWXpjNE4ySWlMQ0oxZFdsa0lqb2laRFJsWmprME1qVXRNR0prWXkwMFptWXlMV0k1WXpFdE9UWTJaVEE0WVdSbFkyVmhJaXdpYzJWemMybHZibDlvWVc1a2JHVWlPaUkyWWpNME16aG1aUzAwTkRRekxUUTNOak10WWpZNU1pMDJabVV6TlRWbU5ETTBaRGNpTENKd1lYSmxiblJmY21WbWNtVnphRjkwYjJ0bGJsOW9ZWE5vSWpvaU1URXpNV1prWWpObVptSXlNVGszTWpBMlpqa3lPV0l6WlRjek9UTTFaakpoTkRjd01qZGxNV1UyTm1VM1lUSTFPR001T0RjNE9EYzBNR0l4TXpnd05TSXNJbUZ1ZEdsZlkzTnlabDkwYjJ0bGJpSTZJbU0yTTJJMk9XUmxOakJoWXpObU4yWmhZbU0xTWpRNVlqbG1ZVFk1Tnpsa0lpd2libTl1WTJVaU9pSmtZbVU0TVRFMU9UQTBOR1ZoWm1NNE5qWXhORE5oWXpRMU1XVTFOREk0TUNJc0luWmxjbk5wYjI0aU9pSldNQ0lzSW5aaGJHbGtZWFJwYjI1ZlkyOXVkR1Y0ZENJNmJuVnNiQ3dpWlhKeWIzSnpJanA3ZlgwPQ==.dbe81159044eafc866143ac451e54280.V0", "access_token":"eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJ2YS5nb3Ygc2lnbiBpbiIsImF1ZCI6InByaXZhdGVfa2V5X2p3dF9jbGllbnQiLCJjbGllbnRfaWQiOiJkZWUwMWY0Mi1jYTZjLTRmY2UtYjNiNi1jMGJmYWUwODExNTAiLCJqdGkiOiIwZTU4ZmZhNC01YTMyLTQzN2EtODYzMy1jNDQ3NzQ0NDIxODEiLCJzdWIiOiJlNDQ0ODM3YS1lODhiLTRmNTktODdkYS0xMGQzYzc0Yzc4N2IiLCJleHAiOjE3MDMyODQxNjksImlhdCI6MTcwMzI4MjM2OSwic2Vzc2lvbl9oYW5kbGUiOiI2YjM0MzhmZS00NDQzLTQ3NjMtYjY5Mi02ZmUzNTVmNDM0ZDciLCJyZWZyZXNoX3Rva2VuX2hhc2giOiI0MTdkYWQzMGE2YzAwZWEzM2I0YWUyNDM4ZDk5ZmE4ZmM2ZGM3MDA0MTcwMjhmNThlZmQ3YzVlM2NmNmY4YmIxIiwicGFyZW50X3JlZnJlc2hfdG9rZW5faGFzaCI6IjExMzFmZGIzZmZiMjE5NzIwNmY5MjliM2U3MzkzNWYyYTQ3MDI3ZTFlNjZlN2EyNThjOTg3ODg3NDBiMTM4MDUiLCJhbnRpX2NzcmZfdG9rZW4iOiJjNjNiNjlkZTYwYWMzZjdmYWJjNTI0OWI5ZmE2OTc5ZCIsImxhc3RfcmVnZW5lcmF0aW9uX3RpbWUiOjE3MDMyODIzNjksInZlcnNpb24iOiJWMCIsInVzZXJfYXR0cmlidXRlcyI6e319.Iv02fXeQsvqRWYzpuQJjeRdPJ-tsTsHHLRbQn96PQFW-bjaTN_PwCf-EdtfEYuXu6i2YwEU23CIc_OX8CNrBHrbW5__N5_5IIVxEOYhYDLKt8sy1_byFqB8ApMuP964CyoRZt1XL3aN-NPUt75OrUfn0WPv81wzMhm0CLW1xAEruvb9cjh2-eEuW6_SSnM4R2jQ_kvmoACNsqz-M6E45qNDLNZRb76UFfuVN7yZAwZXOFmuL_SSiXcZOuLDIsabXFNsnYHalvNIfY_q9RUhlpryk3KCgkkos5ZYSxxpXw0f_hckgEfSWFKlJzFo6iBMjvyrOaKfxekKMfjo-Ri3vpA"}}%                                                                                           ~                                                                                                                                             
```
