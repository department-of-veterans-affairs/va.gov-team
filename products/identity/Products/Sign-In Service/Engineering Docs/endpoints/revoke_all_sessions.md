# Revoke All Sessions

## Description

Uses the `user_uuid` stored in the `access_token` that is included in the call to look up all of a user's sessions, then destroys them - revoking all of the tokens tied to those sessions.

## Revoke All Sessions Endpoint - GET

```jsx
Staging: https://staging-api.va.gov/v0/sign_in/revoke_all_sessions
Production: https://api.va.gov/v0/sign_in/revoke_all_sessions
```

## Revoke All Sessions Parameters

| Parameter | Description | Value Type | Example Values |
| --- | --- | --- | --- |
| `access_token` | Sign in Service access token | String | `eyJhbGci0...` |
| `anti_csrf_token` | Optional anti-CSRF token, required if `enable_anti_csrf` is enabled. | String | `efc7b88e5baa009d2cc0e1cf7c6d31b4` |

## Sample Request

```javascript
// API request
GET staging-api.va.gov/v0/sign_in/revoke_all_sessions?access_token=eyJhbGci0...

// Cookie request
// vagov_access_token=eyJhbGci0...
GET staging-api.va.gov/v0/sign_in/revoke_all_sessions
```

## Sample Response

If all steps are performed successfully the API will respond with a 200 status and no other data.
