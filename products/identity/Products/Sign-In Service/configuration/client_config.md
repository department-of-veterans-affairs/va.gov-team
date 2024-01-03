# Client Config

## Version History

| Version Number | Author | Revision Date | Description of Change |
| --- | --- | --- | --- |
| 0.1 | John Bramley | 9/22/2023 | Initial creation |
| 0.2 | John Bramley | 1/03/2024 | `configuration` refactor |

## Summary

Sign in Service [Cookie PKCE](../auth_flows/cookie_oauth.md), [API PKCE](../auth_flows/api_oauth.md), and [Private Key JWT](../auth_flows/private_key_jwt.md) clients are managed through a `ClientConfig` class within vets-api. In order to perform an end-user authentication with SiS a valid ClientConfig must be present. 

Sign in Service is primarily designed around a PKCE auth flow that requires the same client that called [`/authorize`](../endpoints/authorize.md) to also request the user's tokens through [`/token`](../endpoints/token.md); as such most clients will want `pkce` set to `true` and `certificates` to `nil`. A Private Key JWT auth flow was added to allow a backend client to facilitate authentication with Sign in Service without the need for the original `code_verifier` created during `/authorize` to verify the client's authenticity.

When following this guide to create a `ClientConfig` it is recommended to also refer to the specific auth flow guide, which will detail individual settings necessary for that authentication type.

## Client Config Attributes

The Client Config model has the following attributes:

| Attribute | Data Type | Description | Sample Value | Auth Flow |
| --- | --- | --- | --- | --- |
| `client_id` | string | unique string identifier for client | `ef7294f0-72dd-4b98-9665-f7f05ae033f9` | all |
| `description` | string | human-readable identification/description of the client | "VA Identity Dashboard App"| all |
| `authentication` | string | determines auth type: `cookie` for Cookie PKCE, `api` for API PKCE/Private Key JWT | `cookie` | all|
| `anti_csrf` | boolean | determines optional inclusion of an [anti-CSRF](https://owasp.org/www-community/attacks/csrf) token | `true` | PKCE `cookie`, optional |
| `redirect_uri` | string | client URI to redirect to after successful [`/authorize`](../endpoints/authorize.md) and entering of user credentials | `https://client.gov/callback` | all |
| `access_token_duration` | [Rails duration](https://api.rubyonrails.org/classes/ActiveSupport/Duration.html) | length of time to persist access_token, must be `5.minutes` (`cookie` auth) or `30.minutes` (`api` auth) | `5.minutes` | all|
| `access_token_audience` | string | client descriptor to set generated access_token "audience" property | `va.gov` | all |
| `refresh_token_duration` | [Rails duration](https://api.rubyonrails.org/classes/ActiveSupport/Duration.html) | length of time to persist refresh_token, must be `30.minutes` (`cookie` auth) or `45.days` (`api` auth) | 30.minutes | all |
| `logout_redirect_uri` | string | client URI to redirect to after successful or unsuccessful calls to `/logout` | `http://localhost:3001` | PKCE `cookie` |
| `pkce` | boolean | [Proof Key for Code Exchange](https://oauth.net/2/pkce/) authentication standard, `true` for PKCE `cookie` & `api` flows, `false` for Private Key JWT flow | `true` | all |
| `certificates` | array/string | A public certificate registered with SiS for Private Key JWT auth flows | [`"-----BEGIN CERTIFICATE-----\nMIIDAj..."`] | Private Key JWT |
| `access_token_attributes` | array/string | CSP-derived user attributes to be included in the access_token. Allowed attributes are: `first_name`, `last_name`, `email` | ["first_name", "last_name", "email"], [] | optional |
| `terms_of_use_url` | string | terms of use URL to redirect to after successful `/authorize` if `enforced_terms` is enabled | `http://localhost:3001/terms-of-use`, `nil` | optional |
| `enforced_terms` | string | specifies terms of use type, must be `VA` | `VA`, `nil` | optional |

## Client Config Registration

### VA Identity Dashboard Client Config UI

The VA Identity Dashboard features an integration to [manage Client Configs](https://github.com/department-of-veterans-affairs/va-identity-dashboard#client-config-setup) on the `vets-api` instance it is connected to. Many of the actions performed in this guide via cURL or the Rails console can also be accomplished via this UI.

### Creating a new Client Config

In your Sign in Service root directory (currently `vets-api`), start a rails console session and use the following template to generate a new Client Config:

```ruby
# PKCE Cookie Client
cookie_client_configs = {
  client_id: SecureRandom.uuid,
  authentication: 'cookie',
  anti_csrf: true,
  redirect_uri: 'http://localhost:3001/callback',
  access_token_duration: 5.minutes,
  access_token_audience: 'cookie_client',
  refresh_token_duration: 45.days,
  logout_redirect_uri: 'http://localhost:3001/logout',
  pkce: true,
  certificates: nil,
  description: 'A New PKCE Cookie Client',
  access_token_attributes: ['last_name', 'email'],
  terms_of_use_url: nil,
  enforced_terms: nil
}
cookie_client = SignIn::ClientConfig.new(cookie_client_configs)
cookie_client.save!

# PKCE API Client
api_client_configs = {
  client_id: SecureRandom.uuid,
  authentication: 'api',
  anti_csrf: false,
  redirect_uri: 'http://localhost:3001/callback',
  access_token_duration: 30.minutes,
  access_token_audience: 'api_client',
  refresh_token_duration: 45.days,
  logout_redirect_uri: nil,
  pkce: true,
  certificates: nil,
  description: 'A New PKCE API Client',
  access_token_attributes: ['last_name', 'email'],
  terms_of_use_url: nil,
  enforced_terms: nil
}
api_client = SignIn::ClientConfig.new(api_client_configs)
api_client.save!

# Private Key JWT Client
jwt_client_configs = {
  client_id: SecureRandom.uuid,
  authentication: 'api',
  anti_csrf: false,
  redirect_uri: 'http://localhost:3001/jwt_callback',
  access_token_duration: 30.minutes,
  access_token_audience: 'private_key_jwt_client',
  refresh_token_duration: 45.days,
  logout_redirect_uri: nil,
  pkce: false,
  certificates: ["-----BEGIN CERTIFICATE-----\nMIIDSjCCAjICCQD9k2swjbMG9TANBgkqhkiG9w0BAQsFADBnMQswCQYDVQQGEwJV\nUzEPMA0GA1UECAwGT3JlZ29uMREwDwYDVQQHDAhQb3J0bGFuZDELMAkGA1UECgwC\nVkExETAPBgNVBAsMCElkZW50aXR5MRQwEgYDVQQDDAt2YS1pZGVudGl0eTAeFw0y\nMzA1MTYyMDI3MTJaFw0yNDA1MTUyMDI3MTJaMGcxCzAJBgNVBAYTAlVTMQ8wDQYD\nVQQIDAZPcmVnb24xETAPBgNVBAcMCFBvcnRsYW5kMQswCQYDVQQKDAJWQTERMA8G\nA1UECwwISWRlbnRpdHkxFDASBgNVBAMMC3ZhLWlkZW50aXR5MIIBIjANBgkqhkiG\n9w0BAQEFAAOCAQ8AMIIBCgKCAQEApwue91hNSCpkJA8p92ZI8BGYfNySCBEP99E8\nm0arX3UlNp+WkUtWUlKgIvYfSCKglMw3EuUFv10ZdH7ubC21F9v8nwJS13df+Bn+\neYJxZ/6e/Z4i8gCbbvxuY7r+FhuDZV9zxwETFWIntw9uStkSUFw7dWjHHVDV6vRA\nSDUy4HBS1W80IFBtyOje9k7OfXqn0tDbKmpsRBNxa0JJHQZHCapPgcO/xFSj+pIq\nKwWB3fQ0d7nlvho0SEiOX3QCRdHoFEX3eKc1Q7rQAVcfzOfkqZvGpsHcdgWkjQ0C\ndN3QQz2cO1pJ7e2q0huq3e7UxJK/pjSVApRkkgduR4DhnpjlNQIDAQABMA0GCSqG\nSIb3DQEBCwUAA4IBAQB45w2aYyV4pQ9v6i0tYSPwU3VuZZDQdv2PWeN5sRFy0Dj/\nVyn7mD55eVNWciRByHxUnPdoaRO4NyXyw6KZIgtMyRIfXrDDeMxP4RN9B1moGo7s\nckEa07CtC/Sha5j9DbECJLWSLUoPEzx2Fojjv2AzkwdhBqrNI0UbrgS6qsRm8T9c\nWKEOqC7UVTh0QhQIIYBCYDCD1FSaUsoZhBQanMitRNfrQRjqeFYNj5WMK3eADKDM\nhCMUW5/BYvBS0KKZWfyQL40IJKOmXeAwJquM2/RCSCLjbBmW3DaUsTU9f8w9wXHq\nYnq59LdGJccZqh3kEgaT2yv61X7sQqYv3D4kKFk7\n-----END CERTIFICATE-----\n"],
  description: 'A New PKCE API Client',
  access_token_attributes: [],
  terms_of_use_url: nil,
  enforced_terms: nil
}
jwt_client = SignIn::ClientConfig.new(jwt_client_configs)
jwt_client.save!
```

### Default `vets-api` Client Configs

The `vets-api` [development configuration](https://github.com/department-of-veterans-affairs/vets-api/blob/master/db/seeds/development.rb) contains Client Configs for a variety of SiS clients, including standard VA.gov web & mobile, mocked authentication, and the [VA Identity Dashboard](https://github.com/department-of-veterans-affairs/va-identity-dashboard). It also includes a `sample_client_web` & `sample_client_api` Client Config to serve as boilerplate examples.

To generate these Client Configs run `rails db:seed` in your `vets-api` environment after your database schema has been loaded. You can verify their existance in the rails console by querying `SignIn::ClientConfig.all`:

```ruby
> SignIn::ClientConfig.all
 =>
[<SignIn::ClientConfig:0x00007f7d48850468                                 
  id: 1,                                                                   
  client_id: "vaweb",
  authentication: "cookie",
  anti_csrf: true,
  redirect_uri: "http://localhost:3001/auth/login/callback",
  access_token_duration: 5 minutes,
  access_token_audience: "va.gov",
  refresh_token_duration: 30 minutes,
  created_at: Tue, 19 Dec 2023 16:43:41.878740000 UTC +00:00,
  updated_at: Tue, 19 Dec 2023 16:43:41.878740000 UTC +00:00,
  logout_redirect_uri: "http://localhost:3001",
  pkce: true,
  certificates: nil,
  description: nil,
  access_token_attributes: [],
  terms_of_use_url: "http://localhost:3001/terms-of-use",
  enforced_terms: "VA">,

 <SignIn::ClientConfig:0x00007fcb58343c00...
]
```
