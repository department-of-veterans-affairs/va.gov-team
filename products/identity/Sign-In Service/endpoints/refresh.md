# Refresh

### Description

Used to refresh all tokens related to the client's session. This endpoint is called after the Access token has expired, and requires a valid (non-expired) Refresh token. Mobile/API will receive a JSON response with the new tokens, web/cookie will have cookies set to the new token values.

After the refresh is performed the original valid Refresh token will be invalidated - a subsequent `/refresh` call will require the use of the new Refresh token.

### Token endpoint

```
Staging: https://staging-api.va.gov/v0/sign_in/refresh
Production: https://api.va.gov/v0/sign_in/refresh
```

| Query parameter | Description |
| --- | --- |
| `refresh_token` | Refresh token obtained from a `token` or previous `refresh` call. Must be URI-encoded. |

*Sample request*

```javascript
staging-api.va.gov/v0/sign_in/refresh?refresh_token=v1%3Ainsecure%2Bdata%2BA6ZXlKMWMyVnlY...
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
