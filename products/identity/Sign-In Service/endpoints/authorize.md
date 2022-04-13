# Authorize

### Description

Used to authorize a user via the Sign in Service OAuth way

### Authorization endpoint

```jsx
Staging: https://staging-api.va.gov/sign_in/<CSP>/authorize
Production: https://api.va.gov/sign_in/<CSP>/authorize

enum <CSP> { "logingov", "idme", "dslogon", "mhv" }
```

| Query parameter | Description |
| --- | --- |
| `code_challenge` | Used internally by SiS to hash & encode a value to verify good requests |
| `code_challenge_method` | Hashing algorithm, default: S256 |
| `code_verifier` | Required/stored client-side for future /token calls |

*Sample request*

```jsx
staging-api.va.gov/sign_in/logingov/authorize
  ?code_challenge=VALUE=
  &code_challenge_method=S256
```

*Sample response*

```jsx
staging.va.gov/auth/callback
  ?code=9406c906-1923-4525-adf0-ba63e98ef3f6
```
