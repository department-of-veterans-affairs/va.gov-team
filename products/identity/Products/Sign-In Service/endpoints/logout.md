# Logout

## Description

Destroys the user session associated with the `access_token` that is included in the call, revoking the usage of all of that session's tokens. This is an authenticated route: an `access_token` must be passed.


## Logout Endpoint

```
Staging: https://staging-api.va.gov/v0/sign_in/logout
Production: https://api.va.gov/v0/sign_in/logout
```

| Client ID | Header key | Value |
| --- | --- | --- |
| mobile | `Authorization` | `Bearer <accessTokenHash>` |
| mobile | `anti_csrf_token` | Optional anti-CSRF token, required if `enable_anti_csrf` is enabled. This feature is currently not available. |
| web | `vagov_access_token` | `<accessTokenHash>` |
| web | `vagov_anti_csrf_token` | Optional anti-CSRF token, required if `enable_anti_csrf` is enabled. This feature is currently not available. |

*Sample request*

```javascript
staging-api.va.gov/v0/sign_in/logout
```

*Sample response*

If all steps are performed successfully the API will respond with a 200 status and no other data.
