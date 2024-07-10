# Device SSO Token Exchange
Based on [OpenID Connect Native SSO 1.0](https://openid.net/specs/openid-connect-native-sso-1_0.html)

## Authorize
- When making an authorize request you must include `scope=device_sso`
### Request

**URL:** `/authorize`  
**Method:** `GET`

**Parameters:**

| Parameter               | Description                                                                                                                                                        | Required |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| `type`                  | Which credential provider is authenticating the user (`logingov`, `idme`, `dslogon`, `mhv`)                                                                        | Y        |
| `client_id`             | A unique name identifying your ClientConfig.                                                                                                                       | Y        |
| `acr`                   | The level of user authentication asked for. Login.gov requests must use `ial1`/`ial2`, ID.me-backed requests must use `loa1`/`loa3`.                               | Y        |
| `code_challenge`        | Value created by client, derived from `code_verifier`, and passed to `/authorize` to be saved by vets-api                                                          | Y        |
| `code_challenge_method` | Client specified, most common value is S256                                                                                                                        | Y        |
| `code_verifier`         | Value created and stored by client during `/authorize`, passed in `/token` to verify against vets-api stored `code_challenge`                                      | Y        |
| `state`                 | Optional string that can be taken in the `authorize` call and returned with the `callback` redirect for the client's verification purposes. Minimum 22 characters. | N        |
| `operation`             | Optional parameter to request new account creation with the CSP, defaults to `authorize`. (`sign_up`, `authorize`)                                                 | N        |
| `scope`                 | `device_sso` must be passed in order to receive a `device_secret` for use in token exchange request.                                                               | N        |


**Example Request:**
```bash
curl -G https://api.va.gov.com/v0/sign_in/authorize \
  -d scope=device_sso \
  -d client_id=YOUR_CLIENT_ID \
  -d type=idme \
  -d acr=loa3 \
  -d code_challenge=CODE_CHALLENGE \
  -d code_challenge_method=S256 \
  -d code_verifier=CODE_VERIFIER
  ```

## Token  (Authorize Code Exchange)
- When exchanging authorization code for tokens you will receive a `device_secret` in the response. 
- The `device_secret` should be securely stored and accessible as it will be needed for the token exchange request.

### Request

**URL:** `/token`
**Method:** `POST`

**Parameters:**

| Parameter       | Description                                                                                                                                 | Required |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `grant_type`    | Specifies authentication type, `authorization_code` for PKCE                                                                                | Y        |
| `code`          | Authentication code sent by SiS to the registered ClientConfig's `redirect_uri` after end user authenticates with CSP, exchanged for tokens | Y        |
| `code_verifier` | Value created and stored by client during `/authorize`, passed in `/token` to verify against vets-api stored `code_challenge`               | Y        |

**Example Request:**
```bash
curl -X POST https://api.va.gov/v0/sign_in/token \
  -H "Content-Type: application/json" \
  -d '{
    "grant_type": "authorization_code",
    "code": "AUTH_CODE",
    "code_verifier": "CODE_VERIFIER"
  }'
```

**Example Response:**
```json
{
  "access_token": "ACCESS_TOKEN",
  "refresh_token": "REFRESH_TOKEN",
  "anti_csrf_token": "ANTI_CSRF_TOKEN",
  "device_secret": "DEVICE_SECRET"
}
```

## Token Exchange
- Allows an API client to exchange a given `access_token` and device secret for web cookie tokens.

### Request

**URL:** `/token`
**Method:** `POST`

**Parameters:**

| Parameter            | Description                                                                                        | Required |
| -------------------- | -------------------------------------------------------------------------------------------------- | -------- |
| `grant_type`         | `urn:ietf:params:oauth:grant-type:token-exchange`                                                  | Y        |
| `subject_token`      | The `access_token` to be exchanged                                                                 | Y        |
| `subject_token_type` | `urn:ietf:params:oauth:token-type:access_token`                                                    | Y        |
| `actor_token`        | The `device_secret` associated with the access token                                               | Y        |
| `actor_token_type`   | `urn:x-oath:params:oauth:token-type:device-secret`                                                 | Y        |
| `client_id`          | The `client_id` that the new token will be associated with.  Currently, only `vaweb` is supported. | Y        |

**Example Request:**
```bash
curl -X POST https://api.va.gov/v0/sign_in/token \
  -H "Content-Type: application/json" \
  -d '{
    "grant_type": "urn:ietf:params:oauth:grant-type:token-exchange",
    "subject_token": "ACCESS_TOKEN",
    "subject_token_type": "urn:ietf:params:oauth:token-type:access_token",
    "actor_token": "DEVICE_SECRET",
    "actor_token_type": "urn:x-oath:params:oauth:token-type:device-secret",
    "client_id": "vaweb"
  }'
```

**Example Response Header:**
```json
Set-Cookie: vagov_access_token=eyJhbGciOiJSUzI1NiJ9....; domain=va.gov; path=/; expires=Thu, 06 Jun 2024 18:34:35 GMT; secure; HttpOnly; SameSite=Lax
Set-Cookie: vagov_refresh_token=v1%3AAQICAHjFuWwIOjV...; path=/v0/sign_in/refresh; expires=Thu, 06 Jun 2024 18:34:35 GMT; secure; HttpOnly; SameSite=Lax
Set-Cookie: vagov_anti_csrf_token=88a1ed2c6c16b53233...; path=/; expires=Thu, 06 Jun 2024 18:34:35 GMT; secure; HttpOnly; SameSite=Lax
Set-Cookie: vagov_info_token=%7B%22access_token_expiration%22%3A%222024-06-06T18%3A09%3A35.946Z%22%2C%22refresh_token_expiration%22%3A%222024-06-06T18%3A34%3A35.760Z%22%7D; domain=va.gov; path=/; expires=Thu, 06 Jun 2024 18:34:35 GMT; secure; SameSite=Lax
```

## Revoke
- `device_sso` sessions should be revoked by passing the `refresh_token` AND `device_token`
	-This will tear down the mobile session, as well as any sessions spawned with the `device_secret`.
- Calling revoke with just the `refresh_token` will kill the mobile session, but will NOT kill any sessions spawned by the `device_secret`.

### Request

**URL:** `/revoke`
**Method:** `POST`

**Parameters:**

| Parameter         | Description                                                                                                                        | Required                |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| `refresh_token`   | Refresh token obtained from a `/token` or previous `/refresh` call. Must be URI-encoded if passed as a URL parameter for API auth. | Y                       |
| `anti_csrf_token` | Optional anti-CSRF token, required if `enable_anti_csrf` is enabled.                                                               | If anti_csrf is enabled |
| `device_secret`   | The `device_secret` obtained from initial `/token` call. This will revoke all sessions spawned by this `device_secret`             | N                       |
**Example Request:**
```bash
curl -X POST https://api.va.gov/v0/sign_in/revoke \
  -H "Content-Type: application/json" \
  -d '{
    "refresh_token": "REFRESH_TOKEN",
    "anti_csrf_token": "ANTI_CSRF_TOKEN",
    "device_secret": "DEVICE_SECRET"
  }'
```

**Example Response:**
Status `200`
