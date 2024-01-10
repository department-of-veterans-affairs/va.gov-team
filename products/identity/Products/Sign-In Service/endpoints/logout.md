# Logout

## Description

Destroys the user session associated with the `access_token` that is included in the call, revoking the usage of all of that session's tokens.

## Logout Endpoint - GET

```jsx
Staging: https://staging-api.va.gov/v0/sign_in/logout
Production: https://api.va.gov/v0/sign_in/logout
```

## Logout Parameters

| Parameter | Description | Value Type | Example Values |
| --- | --- | --- | --- |
| `access_token` | Sign in Service access token | String | `eyJhbGci0...` |
| `anti_csrf_token` | Optional anti-CSRF token, required if `enable_anti_csrf` is enabled. | String | `efc7b88e5baa009d2cc0e1cf7c6d31b4` |

## Sample Request

```javascript
// API request
GET staging-api.va.gov/v0/sign_in/logout?access_token=eyJhbGci0...

// Cookie request
// vagov_access_token=eyJhbGci0...
GET staging-api.va.gov/v0/sign_in/logout
```

## Sample Response

If all steps are performed successfully the API will respond with a 200 status and no other data.
