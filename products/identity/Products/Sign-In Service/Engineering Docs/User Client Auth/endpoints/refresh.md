# Refresh

## Description

Used to refresh all tokens related to the client's session. This endpoint is called after the Access token has expired, and requires a valid (non-expired) `refresh_token`. API clients will receive a JSON response with the new tokens, cookie clients will have their `vagov_` cookies set to the new token values.

After the refresh is performed the original valid `refresh_token` will be invalidated - a subsequent `/refresh` call will require the use of the new `refresh_token`.

## Refresh Endpoint - POST

```jsx
Staging: https://staging-api.va.gov/v0/sign_in/refresh
Production: https://api.va.gov/v0/sign_in/refresh
```

## Refresh Parameters

| Parameter | Description | Value Type | Example Values |
| --- | --- | --- | --- |
| `refresh_token` | Refresh token obtained from a `/token` or previous `/refresh` call. Must be URI-encoded if passed as a URL parameter for API auth. | String | `v1:insecure+data+A6ZXlKMWMyVnlY...`, `v1%3Ainsecure%2Bdata%2BA6ZXlKMWMyVnlY...` |
| `anti_csrf_token` | Optional anti-CSRF token, required if `enable_anti_csrf` is enabled. | String | `efc7b88e5baa009d2cc0e1cf7c6d31b4` |

## Sample Request

```javascript
// API request
POST staging-api.va.gov/v0/sign_in/refresh?refresh_token=v1%3Ainsecure%2Bdata%2BA6ZXlKMWMyVnlY...

// Cookie request
// vagov_refresh_token=v1:insecure+data+A6ZXlKMWMyVnlY...
POST staging-api.va.gov/v0/sign_in/refresh
```

## Sample Response

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

For more detailed information on possible error responses see the [SiS Errors Page](../errors.md#refresh---sign_inrefresh).
