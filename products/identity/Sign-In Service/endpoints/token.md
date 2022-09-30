# Token

### Description

Used to get the tokens associated with a user's session. These tokens are:

* Refresh: Used to refresh the user's session and obtain new tokens.
* Access: Allows access to user information and authenticated pages.
* Anti-CSRF: Prevents cross-site request forgery. Optional feature, currently disabled.
* Info: Web/cookie authentication only, contains the expiry times for Access & Refresh tokens, enabling vets-website to manage auto-logout.

### Token endpoint

```jsx
Staging: https://staging-api.va.gov/v0/sign_in/token
Production: https://api.va.gov/v0/sign_in/token
```

| Query parameter | Description |
| --- | --- |
| `grant_type` | `authorization_code`, static (no other `grant_type` is enabled) |
| `code` | Code passed from vets-api to client after the CSP responds by calling `/callback` at the end of the authentication process.|
| `code_verifier` | Stored client-side for future `/token` calls, used to generate `code_challenge` that is passed as a param in `/authorize` |

*Sample request*

```javascript
/*
  Code received from vets-website:
  staging.va.gov/login/auth/callback?code=12345678-1234-5678-abc9-def77abc9f9f

  Stored `code_verifier`:
  1234abc
*/

staging-api.va.gov/v0/sign_in/token
  ?grant_type=authorization_code
  &code=12345678-1234-5678-abc9-def77abc9f9f
  &code_verifier=1234abc
```

*Sample response*

```javascript
{
  "data": {
    "access_token": "<accessTokenHash>", // JWT eyJhbGci0... etc
    "refresh_token": "<refreshTokenHash>", // v1:secure+data+AZX9...
    "anti_csrf_token": "<antiCsrfTokenHash>" // be5aac9...
  }
}
```
