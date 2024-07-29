# Authorize

## Description

Used to initiate the OAuth authentication process with a specific Credential Service Provider (CSP).

## Authorization Endpoint - GET

```jsx
Staging: 'https://staging-api.va.gov/v0/sign_in/authorize'
Production: 'https://api.va.gov/v0/sign_in/authorize'
```

## Authorization Parameters

| Parameter | Description | Value Type | Example Values |
| --- | --- | --- | --- |
| `type` | Which credential provider is authenticating the user | String | `logingov`, `idme`, `dslogon`, `mhv` |
| `client_id` | A unique name identifying your ClientConfig. | String | `sample_client_web`, `sample_client_api` |
| `acr` | The level of user authentication asked for. Login.gov requests must use `ial1`/`ial2`, ID.me-backed requests must use `loa1`/`loa3`. | String | `ial1`, `ial2`, `loa1`, `loa3`, `min` |
| `code_challenge` | Value created by client, derived from `code_verifier`, and passed to `/authorize` to be saved by vets-api | String | `JNkFflCkxk1K6gQUf23P_5Ctl_T65_xkkOU_y-Cc2XI=` |
| `code_challenge_method` | Client specified, most common value is S256 | String | `S256` |
| `code_verifier` | Value created and stored by client during `/authorize`, passed in `/token` to verify against vets-api stored `code_challenge` | String | `f2413353d83449c501b17e411d09ebb4` |
| `state` | Optional string that can be taken in the `authorize` call and returned with the `callback` redirect for the client's verification purposes. Minimum 22 characters. | String | `kFflCkxk1K6gQUf...` |
| `operation` | Optional parameter to request new account creation with the CSP, defaults to `authorize` otherwise | string | `sign_up`, `authorize` |

### Code Verifier / Code Challenge

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

### Sample Request

```javascript
GET staging-api.va.gov/v0/sign_in/authorize
    ?type=logingov
    &client_id=sample_client_web
    &acr=ial2
    &code_challenge=<CODE_CHALLENGE_VALUE>
    &code_challenge_method=S256
    &state=<CLIENT_STATE>
```

### Sample Responses

#### OAuth Form Responses

A successful `/authorize` response will return an HTML OAuth form element directed at your chosen CSP and configured with the necessary attributes:

```html
<html lang="en">
    <head>
        <meta http-equiv="refresh" content="0;URL=https://idp.int.identitysandbox.gov/openid_connect/authorize?acr_values=http%3A%2F%2Fidmanagement.gov%2Fns%2Fassurance%2Fial%2F2&amp;client_id=https%3A%2F%2Fsqa.eauth.va.gov%2Fisam%2Fsps%2Fsaml20sp%2Fsaml20&amp;nonce=1ba56e82fdeefcc4d9ec15fed3db22a7&amp;prompt=select_account&amp;redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fv0%2Fsign_in%2Fcallback&amp;response_type=code&amp;scope=profile+profile%3Averified_at+address+email+social_security_number+openid&amp;state=eyJhbGciOiJSUzI1NiJ9.eyJhY3IiOiJpYWwyIiwidHlwZSI6ImxvZ2luZ292IiwiY2xpZW50X2lkIjoidmF3ZWIiLCJjb2RlX2NoYWxsZW5nZSI6IkpOa0ZmbENreGsxSzZnUVVmMjNQXzVDdGxfVDY1X3hra09VX3ktQ2MyWEkiLCJjbGllbnRfc3RhdGUiOm51bGwsImNvZGUiOiJmYjlhNmY4YzFhODcyYTQ1NWFlODBkM2E3NWZlMGQzOCIsImNyZWF0ZWRfYXQiOjE3MDMwMjAzNDV9.UGQn58u7ajBcCGDCUstKG7_g0-w35OVGrZXEbniKsYGY9ZLVUPz1yZiXs5APBZV5nzkwR74qWK1IRP7AFbkWJ8n11Q5TOS_Gzvao-Bhl179DgAhFb55yzCCNjk2moLe3daQUAs5t6utcuhJThR7xQz4kJ-aswRdfhq_g-uXo8o7ZTpcB7uf5SVkafnvgjayVk4-2teOK7mRuu8uV-aFUT8UjdwHaoNqRyTOunAmmHavadjdIg8h9b3egG8Ay6fiVkjr_KRgYaDjAjKXVxD9CVH69LoJod_AVMln4WFKteTEHj9EMzRaJFKoKd9v3lEVHt9bHNCVQvVhZQNfaszUOOA" />
    </head>
    <body></body>
</html>
```

#### SiS `callback` Response

Following the user successfully entering their credentials, the CSP will redirect back to the callback endpoint specified in their ClientConfig's `redirect_uri`. Sign in Service will validate the CSP response and obtain key user attributes, then create an authorization `code` and return that to the client, along with their `type` and `state`

```javascript
staging.va.gov/auth/callback
  ?code=9406c906-1923-4525-adf0-ba63e98ef3f6
  &state=<CLIENT_STATE>
  &type=logingov
```

#### Error Responses

For more detailed information on possible error responses see the [SiS Errors Page](../errors.md#authorize---sign_inauthorize).
