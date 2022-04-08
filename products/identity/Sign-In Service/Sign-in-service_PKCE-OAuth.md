VSP Identity Sign in Service




# PKCE Oauth Integration
#### Version History
| Version Number | Author(s)                                              | Revision Date | Description of Change                                                                      |
|----------------|--------------------------------------------------------|---------------|--------------------------------------------------------------------------------------------|
|       0.1      | Trevor Bosaw, John Bramley, Josh Scanish, Joe Niquette |    3/17/22    | Initial creation                                                                           |
|       0.2      |                      Joe Niquette                      |    3/25/22    | Added new introspection response example, moved some sections around for better formatting |

## Description
This document describes how our PKCE OAuth partners can integrate with the Sign in Service.

![pkce_oauth_diagram](https://user-images.githubusercontent.com/71290526/158837072-3e777557-e223-4a9c-948b-dd312f2b88cb.png)
 
## Sign in service will provide: 
- Unified Sign in Page: `staging.va.gov/sign-in?application=vamobile`
- Authorization endpoint: `staging-api.va.gov/sign_in/CSP/authorize`
- Token URL: `staging-api.va.gov/sign_in/token`
- User info/introspect URL: `staging-api.va.gov/sign_in/introspect`
- Refresh URL: `staging-api.va.gov/sign_in/refresh`

## Sign in Service Well-Known Configurations
- Dev: TBD
- Staging: TBD
- Production: TBD
## Oauth Workflow
1. VAMobile redirects user to: staging.va.gov/sign-in?application=vamobile&oauth=true&code_challenge=xyz&code_challenge_method=xyz
    - code_challenge is a value created from a code_verifier hex that is hashed and encoded:
        - code_verifier = '5787d673fb784c90f0e309883241803d'
        - url_unsafe_code_challenge = Digest::SHA256.digest(code_verifier)
        - code_challenge = Base64.urlsafe_encode64(url_unsafe_code_challenge)
        - => "1BUpxy37SoIPmKw96wbd6MDcvayOYm3ptT-zbe6L_zM="
    - code_verifier is stored on client for future /token call
    - code_challenge_method MUST equal ‘S256’
2. VA.gov calls vets-api authorization endpoint: staging-api.va.gov/sign_in/CSP/authorize?code_challenge=VALUE=&code_challenge_method=S256
3. User will authenticate with CSP
4. CSP calls staging-api.va.gov/sign_in/CSP/callback endpoint, vets-api creates auth code
5. User redirected to vamobile://login-success with auth code in the query param
    - `vamobile://login-success?code=9406c906-1923-4525-adf0-ba63e98ef3f6`
6. Copy the auth code and call /token: 
``` bash
curl -X POST https://staging-api.va.gov/sign_in/token -H 'Content-Type: application/json' 
-d '{"grant_type": "authorization_code", "code_verifier": "5787d673fb784c90f0e309883241803d",
"code": "9406c906-1923-4525-adf0-ba63e98ef3f6"}'
```
7. The /token endpoint will return access tokens and refresh tokens:
``` erl
{"data":{"access_token":"eyJhbGciOi…","refresh_token":"v1:insecure+data+A6ZX…","anti_csrf_token":"be5a…"}}
```
8. Use access token in header to get user data from the /introspect endpoint:
``` bash
curl -X GET  https://staging-api.va.gov/sign_in/introspect -H 'Authorization: Bearer eyJhbGciOi…’
```
9. The /introspect endpoint will return user info:
    - Note: only logingov and idme csp is returning data at this time
``` json
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
10. Use refresh token to get new access token and refresh tokens (when access token expires) from the /refresh endpoint:
``` bash
curl -X POST https://staging-api.va.gov/sign_in/refresh -H 'Content-Type: application/json' -d '{"refresh_token": "v1:insecure+data+A6ZX…"}'
```
11. The /refresh endpoint will return a new access token and refresh token:
``` json
{"data":{"access_token":"eyJabCciOi…","refresh_token":"v1:insecure+data+A7XZ…","anti_csrf_token":"be5a…"}}
```

## Parameters
| Name                  | Description                                                                                                                                      | Value Type |
|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| application           | `vamobile`, partner identifier, must be vamobile no other values work at this time                                                               | String     |
| code_challenge_method | Client specified, most common value is `S256`                                                                                                    | String     |
| oauth                 | MUST be `true`, used in backend                                                                                                                  | Boolean    |
| CSP                   | Values can be: `logingov`, `dslogon`, `mhv`, `idme`. All of which will be IAL2 or LOA3 calls, no LOA1 or IAL1 users will be returned to vamobile | String     |
| code_challenge        | Value created by vamobile client and passed in param to unified sign in page                                                                     | Base64url  |
| grant_type            | `authorization_code` , only value allowed at this time                                                                                           | String     |
| authorization         | Bearer token also known as access_token                                                                                                          | String     |
| code_verifier         | Value created and stored by client                                                                                                               | String     |
| access_token          | Value returned by /token endpoint                                                                                                                | String     |
| refresh_token         | Value returned by /token endpoint                                                                                                                | String     |
| user_uuid             | Value returned from vets-api that maps the user from the usermodel to the current session                                                        | String     |
| ICN                   | User identifier from MPI                                                                                                                         | Int        |


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
``` json
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
