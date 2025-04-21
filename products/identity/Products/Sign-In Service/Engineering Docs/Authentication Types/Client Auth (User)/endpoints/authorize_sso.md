# Authorize SSO
### `GET /v0/sign_in/authorize_sso`

## Description

This endpoint starts an SSO authorization using the OAuth2 PKCE flow.

- **If the user already has a valid session**, the client will be issued a one‑time authorization `code` which can be used to exchange for an access token.
- **If the user does *not* have a valid session**, the client will be redirected to the USIP (Unified Sign In Page) frontend to sign in.

## Request
GET /v0/sign_in/authorize_sso

Host: staging-api.va.gov

## Query Parameters

| Name                   | In    | Type   | Required | Description                                                                                             |
|------------------------|-------|--------|----------|---------------------------------------------------------------------------------------------------------|
| `client_id`            | query | string | yes      | OAuth client identifier.                                                                |
| `code_challenge`       | query | string | yes      | PKCE code challenge (Base64‑URL‑encoded SHA256 of the original verifier).                                |
| `code_challenge_method`| query | string | yes      | Must be `S256`.                                                                                         |
| `state`                | query | string | no       | An opaque value the client uses to maintain state between request and callback.  |

## Responses

### Existing valid session
#### 302 Found → Authorization Code
- **Headers**
  - `Location`: `<client_redirect_uri>?code=<login_code>&type=<csp_type>&state=<state>`

### No valid session
#### 302 Found → Redirect to USIP
- **Headers**
  - `Location`: `https://stagin.va.gov/sign-in?client_id=<client_id>&code_challenge=<challenge>&code_challenge_method=S256&state=<state>&oauth=true`

### 400 Bad Request
**When** the request is malformed or missing required parameters
- **Body**
```json

{
  "error": "Invalid params: client_id, code_challenge"
}
```
## Diagram
![okta-sso](https://github.com/user-attachments/assets/80061f39-0cf3-4bc3-92ba-e816b26f55cf)
