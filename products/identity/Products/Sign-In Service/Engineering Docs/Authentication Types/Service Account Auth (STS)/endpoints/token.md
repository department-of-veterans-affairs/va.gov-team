# Token

## Description

Used to obtain a Service Account token. The `/token` endpoint is also used to obtain end-user tokens in the PKCE and Private Key JWT flows, the instructions for those uses can be found in the [Client Auth documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Sign-In%20Service/Engineering%20Docs/Authentication%20Types/Client%20Auth%20(User)/endpoints/token.md).

## Token Endpoint - POST

```jsx
Staging: 'https://staging-api.va.gov/v0/sign_in/token'
Production: 'https://api.va.gov/v0/sign_in/token'
```

## Service Account Auth

The Service Account auth flow will return an `access_token` that is distinct from the PKCE/Private Key JWT auth flows. This auth flow is unconnected to any previous SiS calls, and thus only requires a properly formatted signed JWT that is validated against a preregistered `ServiceAccountConfig`. For more information on how to build the JWT payload and sign it, see the [Service Account](../auth_flows/service_account.md#signed-service-account-assertion) auth flow guide.

### Sample request

```ruby
current_time = Time.now.to_i
token = {
  'iss' => 'http://localhost:4000',
  'sub' => 'email_address@gmail.com',
  'aud' => 'http://127.0.0.1/v0/sign_in/token',
  'iat' => current_time,
  'exp' => current_time + 300,
  'scopes' => ['http://localhost:3000/v0/account_controls/credential_index'],
  'service_account_id' => '01b8ebaac5215f84640ade756b645f28',
  'jti' => '2ed8a21d207adf50eb935e32d25a41ff',
  'user_attributes' => { 'icn' => '1012667122V019349' }
}
private_key = OpenSSL::PKey::RSA.new(File.read('private_key.pem'))
JWT.encode(token, private_key, 'RS256')
=> "eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHrw..."

staging-api.va.gov/v0/sign_in/token
  ?grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant%2Dtype%3Ajwt%2Dbearer
  &assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHrw...
```

### Sample response

```javascript
// API response
{
  "data": {
    "access_token": "<accessTokenHash>", // eyJhbGci0...
  }
}
```

### Error Responses

For more detailed information on possible error responses see the [SiS Errors Page](../errors.md#service-account-access-token).
