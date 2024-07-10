# Revoke

## Description

Destroys the user session associated with the `refresh_token`that is included in the call, revoking the usage of all of that session's tokens.

## Revoke Endpoint - POST

```jsx
Staging: https://staging-api.va.gov/v0/sign_in/revoke
Production: https://api.va.gov/v0/sign_in/revoke
```

## Revoke Parameters

| Parameter | Description | Value Type | Example Values |
| --- | --- | --- | --- |
| `refresh_token` | Refresh token obtained from a `/token` or previous `/refresh` call. Must be URI-encoded if passed as a URL parameter for API auth. | String | `v1:insecure+data+A6ZXlKMWMyVnlY...`, `v1%3Ainsecure%2Bdata%2BA6ZXlKMWMyVnlY...` |
| `anti_csrf_token` | Optional anti-CSRF token, required if `enable_anti_csrf` is enabled. | String | `efc7b88e5baa009d2cc0e1cf7c6d31b4` |

## Sample Request

```javascript
// API request
POST staging-api.va.gov/v0/sign_in/revoke?refresh_token=v1%3Ainsecure%2Bdata%2BA6ZXlKMWMyVnlY...

// Cookie request
// vagov_refresh_token=v1:insecure+data+A6ZXlKMWMyVnlY...
POST staging-api.va.gov/v0/sign_in/revoke
```

## Sample Response

If all steps are performed successfully the API will respond with a 200 status and no other data.
