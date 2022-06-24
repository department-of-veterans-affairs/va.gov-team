VSP Identity Sign in Service - DRAFT
NOTE: This document must be updated to reflect new URLs for web, this is a copypasta of the PKCE version other than the diagram and version history
# [VA.gov](http://VA.gov) OAuth Integration

### Version History

| Version Number | Author | Revision Date | Description of Change |
| --- | --- | --- | --- |
| 0.1 | Trevor Bosaw, John Bramley, Alex Garcia, Joe Niquette | 6/24/2022 | Initial creation |

## Description

This document describes how our Web Based OAuth partners can integrate with the Sign in Service.

![Vagovweboauth](https://user-images.githubusercontent.com/71290526/175567747-37530d92-76c1-4612-b274-8b7e9503b738.png)
[Source](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/teams/vsp/teams/Identity/Sign%20In%20Service/Diagrams)

## Sign in service will provide:

- Unified Sign in Page: `staging.va.gov/sign-in?application=vamobile`
- Authorization URL: `staging-api.va.gov/v0/sign_in/CSP/authorize`
- Token URL: `staging-api.va.gov/v0/sign_in/token`
- User info/introspect URL: `staging-api.va.gov/v0/sign_in/introspect`
- Refresh URL: `staging-api.va.gov/v0/sign_in/refresh`
- Revocation URL: `staging-api.va.gov/v0/sign_in/revoke`
- Revoke_all URL: `staging-api.va.gov/v0/sign_in/revoke_all`

## Sign in Service Well-Known Configurations

- Dev: TBD
- Staging: TBD
- Production: TBD

## Oauth Workflow

1. VA.gov redirects user to: staging.va.gov/sign-in?application=web&oauth=true&code_challenge=xyz&code_challenge_method=xyz
    - code_challenge is a value created from a code_verifier hex that is hashed and encoded:
        - code_verifier = '5787d673fb784c90f0e309883241803d'
        - url_unsafe_code_challenge = Digest::SHA256.digest(code_verifier)
        - code_challenge = Base64.urlsafe_encode64(url_unsafe_code_challenge)
        - => "1BUpxy37SoIPmKw96wbd6MDcvayOYm3ptT-zbe6L_zM="
    - code_verifier is stored on client for future /token call
    - code_challenge_method MUST equal ‘S256’
2. [VA.gov](http://va.gov/) calls vets-api authorization endpoint: staging-api.va.gov/v0/sign_in/CSP/authorize?code_challenge=VALUE=&code_challenge_method=S256
3. User will authenticate with CSP
4. CSP calls [staging-api.va.gov/v0/sign_in/CSP/callback](http://staging-api.va.gov/v0/sign_in/CSP/callback) endpoint, vets-api creates auth code
5. User redirected to vamobile://login-success with auth code in the query param
    - `vamobile://login-success?code=9406c906-1923-4525-adf0-ba63e98ef3f6`
6. Copy the auth code and call /token:

```
curl -X POST <https://staging-api.va.gov/v0/sign_in/token> -H 'Content-Type: application/json'
-d '{"grant_type": "authorization_code", "code_verifier": "5787d673fb784c90f0e309883241803d",
"code": "9406c906-1923-4525-adf0-ba63e98ef3f6"}'

```

1. The /token endpoint will return access tokens and refresh tokens:

```
{"data":{"access_token":"eyJhbGciOi…","refresh_token":"v1:insecure+data+A6ZX…","anti_csrf_token":"be5a…"}}

```

1. Use access token in header to get user data from the /introspect endpoint:

```
curl -X GET  <https://staging-api.va.gov/v0/sign_in/introspect> -H 'Authorization: Bearer eyJhbGciOi…’

```

1. The /introspect endpoint will return user info:
    - Note: only logingov and idme csp is returning data at this time

```
{
    "data":{
       "id":"",
       "type":"users",
       "attributes":{
          "uuid":"876f0f36-6b12-4273-babe-12144eaa2d57",
          "first_name":"FAKEY",
          "middle_name":null,
          "last_name":"MCFAKERSON",
          "birth_date":"1938-10-06",
          "email":"faker.fake@fake.com",
          "gender":"M",
          "ssn":"123456789",
          "birls_id":null,
          "authn_context":"logingov",
          "icn":"1012852978V019884",
          "edipi":"1320002080",
          "active_mhv_ids":[
             "12210827",
             "123456"
          ],
          "sec_id":null,
          "vet360_id":null,
          "participant_id":"600152407",
          "cerner_id":null,
          "cerner_facility_ids":[

          ],
          "vha_facility_ids":[
             "200MH",
             "989",
             "360",
             "200MHS",
             "648"
          ],
          "id_theft_flag":false,
          "verified":true,
          "access_token_ttl":300
       }
    }
 }

```

1. Use refresh token to get new access token and refresh tokens (when access token expires) from the /refresh endpoint:

```
curl -X POST <https://staging-api.va.gov/v0/sign_in/refresh> -H 'Content-Type: application/json' -d '{"refresh_token": "v1:insecure+data+A6ZX…"}'

```

1. The /refresh endpoint will return a new access token and refresh token:

```
{"data":{"access_token":"eyJabCciOi…","refresh_token":"v1:insecure+data+A7XZ…","anti_csrf_token":"be5a…"}}

```

## Parameters

| Name | Description | Value Type |
| --- | --- | --- |
| application | vamobile, partner identifier, must be vamobile no other values work at this time | String |
| code_challenge_method | Client specified, most common value is S256 | String |
| oauth | MUST be true, used in backend | Boolean |
| CSP | Values can be: logingov, dslogon, mhv, idme. All of which will be IAL2 or LOA3 calls, no LOA1 or IAL1 users will be returned to vamobile | String |
| code_challenge | Value created by vamobile client and passed in param to unified sign in page | Base64url |
| grant_type | authorization_code , only value allowed at this time | String |
| authorization | Bearer token also known as access_token | String |
| code_verifier | Value created and stored by client | String |
| access_token | Value returned by /token endpoint | String |
| refresh_token | Value returned by /token endpoint | String |
| user_uuid | Value returned from vets-api that maps the user from the usermodel to the current session | String |
| ICN | User identifier from MPI | Int |

## Service Descriptions

### Code_challenge / Code_verifier

- Code verifier is a random string value
    - code_verifier = '5787d673fb784c90f0e309883241803d'
- Code challenge is a hashed urlsafe_encoded value from code_verifier:
    - url_unsafe_code_challenge = Digest::SHA256.digest(code_verifier)
    - code_challenge = Base64.urlsafe_encode64(url_unsafe_code_challenge)
        - => "1BUpxy37SoIPmKw96wbd6MDcvayOYm3ptT-zbe6L_zM="

### Access Token JWT

- Access token is a JWT encoded and signed with a private key stored on vets-api
    - Eventually the public key associated with this will be published in a well known configuration
- Access token stores the following fields:
    - Iss
    - aud
    - Client_id
    - Jti
    - Sub
    - Exp
    - Iat
    - Session_handle
    - Refresh_token_hash
    - Parent_refresh_token_hash
    - Anti_csrf_token
    - Last_regeneration_time
    - version

### Opaque Refresh Token

- Refresh token is encrypted and stored as an opaque string object for client
    - Values stored in refresh token are only relevant for internal sign-in service behavior

### Token Expiration

- `Access_token` = 5 minutes
- `Refresh_token` = 30 minutes

### Anti CSRF Token

- Typically this must be used for /refresh calls, and must match the anti_csrf_token given in the latest /token endpoint call, or latest /refresh call
- Currently this is disabled, this can be safely ignored

### User Info/Introspect Endpoint

- The introspection endpoint is used to request user data. The introspection endpoint expects the use of the access token to get the user information. The data that is returned is a json formatted string.

```
{
  "data": {
    "id": "",
    "type": "users",
    "attributes": {
      "uuid": "876f0f36-6b12-4273-babe-12144eaa2d57",
      "first_name": "FAKEY",
      "middle_name": null,
      "last_name": "MCFAKERSON",
      "birth_date": "1938-10-06",
      "email": "faker.fake@fake.com",
      "gender": "M",
      "ssn": "123456789",
      "birls_id": null,
      "authn_context": "logingov",
      "icn": "1012852978V019884",
      "edipi": "1320002080",
      "active_mhv_ids": ["12210827", "123456"],
      "sec_id": null,
      "vet360_id": null,
      "participant_id": "600152407",
      "cerner_id": null,
      "cerner_facility_ids": [],
      "vha_facility_ids": ["200MH", "989", "360", "200MHS", "648"],
      "id_theft_flag": false,
      "verified": true,
      "access_token_ttl": 300
    }
  }
}

```

## Revoke All Endpoint

- This endpoint expects a valid access token from the user to be present when calling the `revoke_all` endpoint. This function will allow a user to logout of all sessions currently associated with the logged in user according to the valid access token being passed into the request. More information about how the endpoint works can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Sign-In%20Service/endpoints/revoke_all.md).

## Revocation Endpoint

- This endpoint will allow a user to logout of the current session, not impacting other sessions for the same user on another device. The function should remove the access and refresh tokens from the endpoint and invalidate the refresh token on the backend. More information about how the endpoint works can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Sign-In%20Service/endpoints/revocation.md).

## Logging and Monitoring

The following links will provide information about the SiS.

- Applications logs related to the sign in service in Grafana Loki([https://grafana.vfs.va.gov/d/-q9Nn3unz/sign-in-service-logs?orgId=1&var-env=Loki (Staging)](https://grafana.vfs.va.gov/d/-q9Nn3unz/sign-in-service-logs?orgId=1&var-env=Loki%20(Staging)))
    - Switch the environment and timing to your preference
- [Sign in service errors in Sentry](http://sentry.vfs.va.gov/organizations/vsp/issues/?environment=staging&project=3&query=is%3Aunresolved+%22signincontroller%22&statsPeriod=14d)
- [Sign in service metrics](https://app.datadoghq.com/dashboard/97h-d7e-tgr/joeidentitytestboard?from_ts=1655910414991&to_ts=1656083214991&live=true)
