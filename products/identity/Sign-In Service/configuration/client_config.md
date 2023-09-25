# Client Config

## Version History

| Version Number | Author | Revision Date | Description of Change |
| --- | --- | --- | --- |
| 0.1 | John Bramley | 9/22/2023 | Initial creation |

## Summary

Sign in Service clients are managed through a `SignIn::ClientConfig` class, API calls to manage Client Configs are handled in the [Client Configs controller](app/controllers/sign_in/client_configs_controller.rb) within Sign in Service.

## Client Config Attributes

The [Client Config model](app/models/sign_in/client_config.rb) has the following attributes:

| Attribute | Data Type | Description | Sample Value |
| --- | --- | --- | --- |
| `client_id` | string | unique string identifier for account connection | `vaweb` |
| `description` | string | description of the SiS client | VA.gov Web Client |
| `authentication` | string | `cookie` for [web (cookie) OAuth](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Sign-In%20Service/auth_flows/web_oauth), `api` for [mobile (JSON) OAuth](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Sign-In%20Service/auth_flows/mobile_oauth) | `cookie` |
| `anti_csrf` | boolean | indicates usage of an [anti-CSRF](https://owasp.org/www-community/attacks/csrf) token | `true` |
| `redirect_uri` | string | URI to redirect to after successful authorization | `http://localhost:3001/auth/login/callback` |
| `access_token_duration` | [Rails duration](https://api.rubyonrails.org/classes/ActiveSupport/Duration.html) | length of time to persist access_token, must be either `5.minutes` or `30.minutes` | 5.minutes |
| `access_token_audience` | string | used to set generated access_token "audience" property | `va.gov` |
| `refresh_token_duration` | [Rails duration](https://api.rubyonrails.org/classes/ActiveSupport/Duration.html) | length of time to persist refresh_token, must be either `30.minutes` or `45.days` | 30.minutes |
| `logout_redirect_uri` | string | URI to redirect to after successful or unsuccessful calls to `/logout` | `http://localhost:3001` |
| `pkce` | boolean | [Proof Key for Code Exchange](https://oauth.net/2/pkce/), `true` for most clients that don't use Private Key JWT flow | `true` |
| `certificates` | array/string | A public certificate registered with SiS for Private Key JWT auth flows | ["your-public-cert-1", "your-public-cert2"] |
| `access_token_attributes` | array/string | CSP-derived user attributes to be included in the access_token. Allowed attributes are: `first_name`, `last_name`, `email` | ['first_name', 'last_name', 'email'] |

## Client Config Registration

### VA Identity Dashboard Client Config UI

The VA Identity Dashboard features an integration to [manage Client Configs](https://github.com/department-of-veterans-affairs/va-identity-dashboard#client-config-setup) on the `vets-api` instance it is connected to. Many of the actions performed in this guide via cURL or the Rails console can also done via this UI.

### Creating a new Client Config

In your Sign in Service root directory (currently `vets-api`), start a rails console session and use the following template to generate a new Client Config:

```ruby
client_config = SignIn::ClientConfig.find_or_initialize_by(client_id: 'your-client-id')
client_config.update!(authentication: 'cookie',
                      anti_csrf: false,
                      redirect_uri: 'http://localhost:3001/auth/login/callback',
                      access_token_duration: 5.minutes,
                      access_token_audience: 'va.gov',
                      refresh_token_duration: 30.minutes,
                      pkce: true,
                      certificates: nil,
                      logout_redirect_uri: 'http://localhost:3001',
                      access_token_attributes: [])
```

### Default `vets-api` Client Configs

The `vets-api` [development configuration](https://github.com/department-of-veterans-affairs/vets-api/blob/master/db/seeds/development.rb) contains Client Configs for a variety of SiS clients, including standard VA.gov web & mobile, mocked authentication, and the [VA Identity Dashboard](https://github.com/department-of-veterans-affairs/va-identity-dashboard).

To generate these Client Configs run `rails db:seed` after your database schema has been loaded. You can verify their existance in the rails console by querying `SignIn::ClientConfig.all`:

```ruby
3.2.2 :008 > SignIn::ClientConfig.all
 =>
[<SignIn::ClientConfig:0x00007fcb58343ca0
  id: 251,
  client_id: "vaweb",
  authentication: "cookie",
  anti_csrf: true,
  redirect_uri: "http://localhost:3001/auth/login/callback",
  access_token_duration: 5 minutes,
  access_token_audience: "va.gov",
  refresh_token_duration: 30 minutes,
  created_at: Mon, 25 Sep 2023 15:51:36.452522000 UTC +00:00,
  updated_at: Mon, 25 Sep 2023 15:51:36.452522000 UTC +00:00,
  logout_redirect_uri: "http://localhost:3001",
  pkce: true,
  certificates: nil,
  description: nil,
  access_token_attributes: []>,
 <SignIn::ClientConfig:0x00007fcb58343c00...
]
```

## JWT Auth Flow

Sign in Service is primarily designed around a PKCE auth flow that requires the same client that called `/authorize` to also request and manage the user's tokens; as such most clients will want `pkce` set to `true` and `certificates` to `nil`. A JWT Auth flow was added to allow a backend client to facilitate authentication with Sign in Service without the need for the original [`code_verifier`](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Sign-In%20Service/endpoints/token.md#token-endpoint) created during `/authorize` to verify the client's authenticity.

### Service Account Authentication

The backend JWT flow described here is an alternate way for a client to finish a user authentication that was started by a different application. It is a separate feature from [Service Account Authorization](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Sign-In%20Service/auth_flows/service_account.md#service-account-authentication), an entirely backend-to-backend process meant to authenticate *applications*, not users, with SiS. Both features do rely upon private/public key pairs, and the same public key can be registered with both a Client Configuration and a Service Account.

### JWT Auth Client Configuration Setup

To enable JWT Auth flow, set the `pkce` setting to `false` and register your client's public certificate(s) in the `certificates` setting.

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

This string can then be copied (within an array) into your Client Config's `certificates`. To utilize your generated `private.pem` key in a `/token` request, see the [Private Key JWT auth documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Sign-In%20Service/auth_flows/private_key_jwt.md).