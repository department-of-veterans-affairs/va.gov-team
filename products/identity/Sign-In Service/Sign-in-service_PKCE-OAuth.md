VSP Identity Sign in Service




# PKCE Oauth Integration
#### Version History
| Version Number | Author(s)                                              | Revision Date | Description of Change                                                                      |
|----------------|--------------------------------------------------------|---------------|--------------------------------------------------------------------------------------------|
|       0.1      | Trevor Bosaw, John Bramley, Josh Scanish, Joe Niquette |    3/17/22    | Initial creation                                                                           |
|       0.2      |                      Joe Niquette                      |    3/25/22    | Added new introspection response example, moved some sections around for better formatting |
|       0.3      |                      John Bramley                      |    7/05/22    | Updates for mobile vs. web authentication |
## Description
This document describes how our PKCE OAuth partners can integrate with the Sign in Service.

### Postman Routes
A Postman collection featuring the routes and variables required for PKCE interaction with the Sign in Service [can be found here](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Sign%20In%20Service/sis_postman_v1.json).

### Sequence Diagram
![pkce_oauth_diagram](https://user-images.githubusercontent.com/71290526/158837072-3e777557-e223-4a9c-948b-dd312f2b88cb.png)

### Technical Diagram
![image](https://user-images.githubusercontent.com/71290526/175662498-2ef90001-845c-400a-945a-5564d24d992c.png)
[Source](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/diagram_sources/Sign%20in%20Service%20-%20Mobile.png)

## Sign in Service Public Routes:

### GET Routes
##### Sign in Page 
- `staging.va.gov/sign-in/?oauth=true`
##### [Authorization URL](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Sign-In%20Service/endpoints/authorize.md)
- `staging-api.va.gov/v0/sign_in/authorize`
- params: `acr`, `type`, `code_challenge`, `code_challenge_method`, `client_id`
- optional params: `state`
##### [Introspect URL](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Sign-In%20Service/endpoints/introspect.md)
- `staging-api.va.gov/v0/sign_in/introspect`
- params: `authentication`
##### [Revoke all Sessions URL](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Sign-In%20Service/endpoints/revoke_all_sessions.md)
- `staging-api.va.gov/v0/sign_in/revoke_all_sessions`
- params: `authentication`
##### [Logout URL](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Sign-In%20Service/endpoints/logout.md)
- `staging-api.va.gov/v0/sign_in/logout`
- params: `authentication`
- optional parameters: `anti_csrf_token`

### POST Routes
##### [Token URL](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Sign-In%20Service/endpoints/token.md)
- `staging-api.va.gov/v0/sign_in/token`
- params: `grant_type`, `code_verifier`, `code`
- optional params: `anti_csrf_token`
##### [Refresh URL](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Sign-In%20Service/endpoints/refresh.md)
- `staging-api.va.gov/v0/sign_in/refresh`
- params: `refresh_token`
- optional params: `anti_csrf_token`
##### [Revocation URL](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Sign-In%20Service/endpoints/revoke.md)
- `staging-api.va.gov/v0/sign_in/revoke`
- params: `refresh_token`
- optional params: `anti_csrf_token`

## Oauth Workflow
1. VAMobile redirects user to: `staging.va.gov/sign-in` with the following parameters:
    -  application: `vamobile`
    - oauth: `true`
    -  code_challenge: takes the client-created `code_verifier` and SHA-256 hashes it. The client stores the `code_verifier` and uses it in later SiS calls to validate their requests with vets-api
2. User clicks on the button to sign in with their credential service provider (CSP)
3. VA.gov calls vets-api OAuth `/authorize` endpoint with specific query parameters outlined in the Parameters Table below
4. User authenticates with CSP
5. CSP calls staging-api.va.gov/v0/sign_in/callback endpoint, vets-api creates auth code
6. User redirected to vamobile://login-success with auth code and CSP type in the query params
    - `vamobile://login-success?code=9406c906-1923-4525-adf0-ba63e98ef3f6&type=logingov`
7. VAMobile makes a POST call to the SiS API `/token` endpoint to get Access Token + Refresh Tokens + Anti-CSRF Token
```json
  {
    "data": {
      "access_token": "<accessTokenHash>",
       "refresh_token": "<refreshTokenHash>",
       "anti_csrf_token": "<antiCsrfTokenHash>"
    }
  }
```
8. VAMobile uses Access Token in Authorization header to call the `/introspect` endpoint and other authentication-protected routes:
    - request: `Authorization: Bearer <accessTokenHash>`
    - response: `"data": { user_data }`
9. When access token reaches expiry VAMobile uses the Refresh token to get new Access Token + Refresh Token by calling the `/refresh` endpoint. New token cookies are returned in a JSON payload identical to those returned from the `/token` endpoint.

## Parameters
| Name                  | Description                                                                                                                                      | Value Type |
|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| application           | `vamobile`, partner identifier, must be vamobile no other values work at this time                                                               | String     |
| code_challenge_method | Client specified, most common value is `S256`                                                                                                    | String     |
| oauth                 | MUST be `true`, used in backend                                                                                                                  | Boolean    |
| CSP                   | Values can be: `logingov`, `dslogon`, `mhv`, `idme`. All of which will be IAL2 or LOA3 calls, no LOA1 or IAL1 users will be returned to vamobile | String     |
| code_challenge        | Value created by vamobile client and passed in param to unified sign in page                                                                     | Base64url  |
| grant_type            | `authorization_code` , only value allowed at this time                                                                                           | String     |
| authentication         | [Bearer authentication](https://swagger.io/docs/specification/authentication/bearer-authentication) passing an access)token                                                                                                          | String     |
| code_verifier         | Value created and stored by client                                                                                                               | String     |
| access_token          | Value returned by /token endpoint                                                                                                                | String     |
| refresh_token         | Value returned by /token endpoint                                                                                                                | String     |
| user_uuid             | Value returned from vets-api that maps the user from the usermodel to the current session                                                        | String     |
| ICN                   | User identifier from MPI                                                                                                                         | Int        |


## Service Descriptions
### Code Verifier / Code Challenge
- Code verifier is a random string value
  - `code_verifier = '5787d673fb784c90f0e309883241803d'`
- Code challenge is a hashed urlsafe_encoded value from code_verifier:
  ```ruby
  code_verifier = '5787d673fb784c90f0e309883241803d'
  url_unsafe_code_challenge = Digest::SHA256.digest(code_verifier)
  code_challenge = Base64.urlsafe_encode64(url_unsafe_code_challenge)
  => "1BUpxy37SoIPmKw96wbd6MDcvayOYm3ptT-zbe6L_zM="
  ```
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

## Revoke All Endpoint
- This endpoint expects a valid access token from the user to be present when calling the `revoke_all` endpoint. This function will allow a user to logout of all sessions currently associated with the logged in user according to the valid access token being passed into the request. More information about how the endpoint works can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Sign-In%20Service/endpoints/revoke_all.md).

## Revocation Endpoint
- This endpoint will allow a user to logout of the current session, not impacting other sessions for the same user on another device. The function should remove the access and refresh tokens from the endpoint and invalidate the refresh token on the backend. More information about how the endpoint works can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Sign-In%20Service/endpoints/revoke.md).

## Logging and Monitoring
The following links will provide information about the SiS.

- Applications logs related to the sign in service in Grafana Loki(https://grafana.vfs.va.gov/d/-q9Nn3unz/sign-in-service-logs?orgId=1&var-env=Loki%20(Staging))
  - Switch the environment and timing to your preference
- Sign in service errors in Sentry 
