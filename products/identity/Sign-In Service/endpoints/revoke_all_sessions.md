# Revoke All Sessions

### Description
This endpoint looks up all of a user's sessions using their `user_uuid`, then revokes them. This is an authenticated route: an Access Token must be passed, either through Bearer Authentication for mobile/API or a cookie for web/cookie authentication.

### Token endpoint

```
Staging: https://staging-api.va.gov/v0/sign_in/revoke_all_sessions
Production: https://api.va.gov/v0/sign_in/revoke_all_sessions
```

| Client ID | Header key | Value |
| --- | --- | --- |
| mobile | `Authorization` | `Bearer <accessTokenHash>` |
| web | `vagov_access_token` | `<accessTokenHash>` |

*Sample request*

```javascript
staging-api.va.gov/v0/sign_in/revoke_all_sessions
```

*Sample response*

If all steps are performed successfully the API will respond with a 200 status and no other data.
