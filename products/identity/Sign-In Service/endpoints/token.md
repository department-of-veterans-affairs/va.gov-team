# Token

### Description

Used to get the Refresh + Access token

### Token endpoint

```jsx
Staging: https://staging-api.va.gov/sign_in/token
Production: https://api.va.gov/sign_in/token
```

| Query parameter | Description |
| --- | --- |
| `grant_type` | `authorization_code`, static (no other `grant_type` is enabled) |
| `code` | Passed from vets-website when the SiS API hits the `/sign_in/<CSP>/callback` |
| `code_verifier` | Stored client-side for future `/token` calls |

*Sample request*

```javascript
/*
  Code received from vets-website:
  staging.va.gov/login/auth/callback?code=12345678-1234-5678-abc9-def77abc9f9f

  Stored `code_verifier`:
  1234abc
*/

staging-api.va.gov/sign_in/token
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
