# Authorize

### Description

Used to initiate the OAuth authentication process with a specific CSP

### Authorization endpoint

```
Staging: https://staging-api.va.gov/v0/sign_in/authorize
Production: https://api.va.gov/v0/sign_in/authorize
```

| Query parameter | Description |
| --- | --- |
|`type`| CSP type. Values: `logingov`, `idme`, `dslogon`, `mhv` |
| `client_id` | Determines cookie vs. API authentication. Values: `web`, `mobile` |
| `acr` | Level of authentication requested, dependant on CSP. Values: `loa1`, `loa3`, `ial1`, `ial2`, `min` |
| `code_challenge` | Used internally by SiS to hash & encode a value to verify good requests |
| `code_challenge_method` | Hashing algorithm. Values: `S256` |
| `code_verifier` | Required/stored client-side for future /token calls |
| `state` | Optional string that can be taken in the `authorize` call and returned with the `callback` redirect for the client's verification purposes. This feature is currently *not* available. |

*Sample request*

```
staging-api.va.gov/v0/sign_in/authorize
  ?type=logingov
  &client_id=web
  &acr=ial2
  &code_challenge=VALUE=
  &code_challenge_method=S256
```

*Sample response*

```
staging.va.gov/auth/callback
  ?code=9406c906-1923-4525-adf0-ba63e98ef3f6
```
