# Revoke

### Description
This endpoint destroys the user session associated with the refresh token that is included in the call, revoking the usage of all of that session's tokens.


### Token endpoint

```
Staging: https://staging-api.va.gov/v0/sign_in/revoke
Production: https://api.va.gov/v0/sign_in/revoke
```

| Query parameter | Description |
| --- | --- |
| `refresh_token` | Refresh token obtained from a `token` or previous `refresh` call. Must be URI-encoded. |
| `anti_csrf_token` | Optional anti-CSRF token, required if `enable_anti_csrf` is enabled. This feature is currently not available. |


*Sample request*

```javascript
staging-api.va.gov/v0/sign_in/revoke?refresh_token=v1%3Ainsecure%2Bdata%2BA6ZXlKMWMyVnlY...
```

*Sample response*

If all steps are performed successfully the API will respond with a 200 status and no other data.
