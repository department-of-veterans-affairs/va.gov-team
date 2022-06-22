# Refresh

### Description

Used to refresh a user's session via the Sign in Service OAuth by requesting new tokens

### Authorization endpoint

```
Staging: https://staging-api.va.gov/v0/sign_in/refresh
Production: https://api.va.gov/v0/sign_in/refresh
```

| Query parameter | Description |
| --- | --- |
| `none` | n/a |

*Sample request*

```
staging-api.va.gov/v0/sign_in/refresh
```

*Sample response*

```
vagov_refresh_tokens in cookie
```
