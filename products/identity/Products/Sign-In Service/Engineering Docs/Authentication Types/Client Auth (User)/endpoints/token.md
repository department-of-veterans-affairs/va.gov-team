# Token

## Description

Used to get the tokens associated with a user's session. This guide is divided into two sections, one each for PKCE and Private Key JWT flows.

The `/token` endpoint is also used to obtain Service Account tokens, the instructions for that usage can be found in the [Service Account Auth documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Sign-In%20Service/Engineering%20Docs/Authentication%20Types/Service%20Account%20Auth%20(STS)/endpoints/token.md).

## Token Endpoint - POST

```jsx
Staging: 'https://staging-api.va.gov/v0/sign_in/token'
Production: 'https://api.va.gov/v0/sign_in/token'
```

## [Cookie](../auth_flows/cookie_oauth.md) & [API](../auth_flows/api_oauth.md) PKCE Auth

PKCE is the standard end-user authentication flow, provisioning an `access_token` & `refresh_token`, as well as an optional `anti_csrf_token` and an `info_token` for cookie auth clients. It requires the `code` returned to the client's specified `redirect_uri` at the end of the `/authorize` flow, as well as the `code_verifier` that matches the `code_challenged` used to authenticate. API clients will receive a JSON response with the new tokens, cookie clients will have cookies set to the new token values.

### Authorization Parameters

| Parameter | Description | Value Type | Example Values |
| --- | --- | --- | --- |
| `grant_type` |  Specifies authentication type, `authorization_code` for PKCE | String | `authorization_code` |
| `code` | Authentication code sent by SiS to the registered ClientConfig's `redirect_uri` after end user authenticates with CSP, exchanged for tokens | String | `8db56c32-8eec-4efe-8293-9fbbe717f087` |
| `code_verifier` | Value created and stored by client during `/authorize`, passed in `/token` to verify against vets-api stored `code_challenge` | String | `f2413353d83449c501b17e411d09ebb4` |

#### Code Verifier / Code Challenge

- Code verifier is a random string value generated and held by the client.
  - `code_verifier = '5787d673fb784c90f0e309883241803d'`
- Code challenge is a hashed urlsafe_encoded value from code_verifier:

  ```ruby
  code_verifier = '5787d673fb784c90f0e309883241803d'
  url_unsafe_code_challenge = Digest::SHA256.digest(code_verifier)
  code_challenge = Base64.urlsafe_encode64(url_unsafe_code_challenge)
  => "1BUpxy37SoIPmKw96wbd6MDcvayOYm3ptT-zbe6L_zM="
  ```

- Clients should generate both values, pass the code *challenge* method (as well as code challenge method - `S256`) during `/authorize`, then the code *verifier* along with their received authorization code during `/token`.

#### Access Token Attributes

Some clients may wish to include identifying user attributes, derived from the CSP, in the returned access token. A Sign in Service [`Client Config`](../configuration/client_config.md) can have its `access_token_attributes` property set to specify one or more of the following user attributes for inclusion:

- `first_name`
- `last_name`
- `email`

### Sample request

```javascript
/*
  Code received from SiS:
  client-api.com/callback?code=12345678-1234-5678-abc9-def77abc9f9f

  Stored `code_verifier`:
  1234abc
*/

POST staging-api.va.gov/v0/sign_in/token
  ?grant_type=authorization_code
  &code=12345678-1234-5678-abc9-def77abc9f9f
  &code_verifier=1234abc
```

### Sample response

```javascript
// API response
{
  "data": {
    "access_token": "<accessTokenHash>", // eyJhbGci0...
    "refresh_token": "<refreshTokenHash>", // v1:secure+data+AZX9...
    "anti_csrf_token": "<antiCsrfTokenHash>" // be5aac9...
  }
}

// Cookie response
vagov_access_token=<accessTokenHash> // eyJhbGci0...
vagov_refresh_token=<refreshTokenHash> // v1:secure+data+AZX9...
vagov_anti_csrf_token=<antiCsrfTokenHash> // be5aac9...
vagov_info_token=<infoToken> // %7B%3Aaccess_token_expiration%3D%3
```

### Error Responses

For more detailed information on possible error responses see the [SiS Errors Page](../errors.md#end-user-tokens).

## [Private Key JWT](../auth_flows/private_key_jwt.md) Auth

Private Key JWT Auth functions identically to PKCE auth except in how tokens are requested. A successful response will return the same `access_token`, `refresh_token`, and optional `anti_csrf_token` as the PKCE auth flow. It also uses the `code` returned by SiS, and a signed JWT to prove the client's authenticity instead of the `code_verifier` linked to the original `code_challenge`. For more information on how to build the JWT payload and sign it, see the [Private Key JWT](../auth_flows/private_key_jwt.md) auth flow guide.

### Authorization Parameters

| Parameter | Description | Value Type | Example Values |
| --- | --- | --- | --- |
| code | Authentication code sent by SiS to the registered ClientConfig's `redirect_uri`, exchanged for tokens  | String | `8db56c32-8eec-4efe-8293-9fbbe717f087` |
| grant_type |  Specifies authentication type, `authorization_code` is required for Private Key JWT auth | String | `authorization_code` |
| client_assertion |  JWT signed by client key to prove their authenticity | String | `eyJhbGciOiJSUzI1NiJ9...` |
| client_assertion_type |  specifies 'JWT Bearer' assertion type | String | `urn:ietf:params:oauth:client-assertion-type:jwt-bearer` |

### Sample request

```ruby
# Code received from SiS:
# client-api.com/callback?code=12345678-1234-5678-abc9-def77abc9f9f

# private_key = OpenSSL::PKey::RSA.new(File.read('private_key.pem'))
# token_payload = {
#   iss: '<client_id>',
#   aud: 'http://127.0.0.1:3000/v0/sign_in/token',
#   sub: '<client_id>'
# }
# JWT.encode(token_payload, private_key, 'RS256')
# => "eyJhbGciOiJSUzI1NiJ9....

staging-api.va.gov/v0/sign_in/token
  ?grant_type=authorization_code
  &code=12345678-1234-5678-abc9-def77abc9f9f
  &client_assertion=eyJhbGciOiJSUzI1NiJ9...
  &client_assertion_type=urn:ietf:params:oauth:client-assertion-type:jwt-bearer
```

### Sample response

```javascript
// API response
{
  "data": {
    "access_token": "<accessTokenHash>", // eyJhbGci0...
    "refresh_token": "<refreshTokenHash>", // v1:secure+data+AZX9...
  }
}
```

### Error Responses

For more detailed information on possible error responses see the [SiS Errors Page](../errors.md#end-user-tokens).
