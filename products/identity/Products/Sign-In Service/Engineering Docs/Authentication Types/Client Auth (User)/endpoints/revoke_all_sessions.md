# Revoke All Sessions

## Description

Uses the `session_handle` stored in the `access_token` that is included in the call to look up the user's current session, then uses the session's attached user account to locate all of the user's sessions and destroy them - revoking the tokens tied to those sessions.

## Revoke All Sessions Endpoint - GET

```jsx
Staging: 'https://staging-api.va.gov/v0/sign_in/revoke_all_sessions'
Production: 'https://api.va.gov/v0/sign_in/revoke_all_sessions'
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

## Error Responses

For more detailed information on possible error responses see the [SiS Errors Page](../../../../Troubleshooting/errors.md).