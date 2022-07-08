# VA.gov Web OAuth Integration

### Version History

| Version Number | Author | Revision Date | Description of Change |
| --- | --- | --- | --- |
| 0.1 | Trevor Bosaw, John Bramley, Alex Garcia, Joe Niquette | 6/24/2022 | Initial creation |
| 0.2 | John Bramley | 7/05/2022 | Updates for mobile vs. web authentication |

## Description

This document describes how our Web Based OAuth partners can integrate with the Sign in Service.

### Postman Routes
A Postman collection featuring the routes and variables required for web/cookie-based interaction with the Sign in Service [can be found here](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Sign%20In%20Service/sis_postman_v1.json).

### Sequence Diagram
![vagovweboauth (1)](https://user-images.githubusercontent.com/71290526/175662350-1ecccfcf-4da3-4370-9483-5b15c263d428.png)
[Source](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Sign%20In%20Service/Diagrams/Web_OAuth.md)

### Technical Diagram
![image](https://user-images.githubusercontent.com/71290526/175662498-2ef90001-845c-400a-945a-5564d24d992c.png)
[Source](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/diagram_sources/Sign%20in%20Service%20-%20Web%20(1).png)

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

1. User lands on [VA.gov](http://va.gov/) wanting to sign in via OAuth
2. User clicks on the button to sign in with their credential service provider (CSP)
3. Vets-website calls the vets-api OAuth `/authorize` endpoint with specific query parameters outlined in the Parameters Table below
4. Vets-api redirects to CSP website for user to enter credentials
5. CSP calls Sign-in-Service (SiS) API endpoint `/callback` to create an auth code
6. SiS API redirects user to `[environment]/auth/login/callback` with a `code` query parameter and `state` that is verified client side
7. Vets-website makes a POST call to the SiS API `/token` endpoint to get Access Token + Refresh Tokens + Anti-CSRF Token + Info Token Cookies

| Cookie Name | Description |
| --- | --- |
| vagov_access_token | Access token used to access authenticated pages on va.gov, contains no user information |
| vagov_refresh_token | May contain user information, used to obtain new tokens |
| vagov_anti_csrf_token | Optional, currently disabled feature to preven cross-site request forgery |
| vagov_info_token | Token used by the frontend to determine timeout counters |
    
8. Vets-api stores Access Token + Refresh Token + Anti-CSRF Token in cookies
9. Vets-website uses Access Token cookie to hit the `/introspect` endpoint and other authentication-protected routes:
    - request: `vagov_access_token=<accessTokenHash>`
    - response: `"data": { user_data }`
10. Vets-website uses the Refresh token to get an new Access Token + Refresh Token (when Access token reaches expiry) by hitting the `/refresh` endpoint. New token cookies are stored in the browser with a successful response.
    

## Parameters

| Name | Description | Value Type | Example Values |
| --- | --- | --- | --- |
| access_token | Value returned by /token endpoint | String | [See Postman collection](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Sign%20In%20Service/sis_postman_v1.json) |
| acr | The level of user authentication asked for. Web logins require IAL2/LoA3, no IAL1/LoA1 users will be returned | String | `ial2`, `loa3`, `min` |
| authentication | [Bearer authentication](https://swagger.io/docs/specification/authentication/bearer-authentication) passing an access_token | String | `Authorization: Bearer {{encoded_access_token}}` |
| client_id | Determines cookie-based (web) or API-based (mobile) authentication | String | `web`, `mobile` |
| code_challenge | Value created by vets-api and passed in param to login modal | Base64url | `JNkFflCkxk1K6gQUf23P_5Ctl_T65_xkkOU_y-Cc2XI=` |
| code_challenge_method | Client specified, most common value is S256 | String | `S256` |
| code_verifier | Value created and stored by client | String | `f2413353d83449c501b17e411d09ebb4` |
| grant_type |  Only value allowed at this time is authorization_code | String | `authorization_code` |
| ICN | User identifier from MPI | String | `1012829228V424035` |
| oauth | MUST be true, used in backend | Boolean | `true` |
| refresh_token | Value returned by /token endpoint, must be URI-encoded when passed as URL parameter. | String | [See Postman collection](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Sign%20In%20Service/sis_postman_v1.json) |
| type | Which credential provider is authenticating the user | String | `logingov`, `idme`, `dslogon`, `mhv` |
| user_uuid | Value returned from vets-api that maps the user from the usermodel to the current session | String | `ac899729-5de1-4968-973f-b9dc896f6b03`

## Service Descriptions

### Access Token JWT

- Access token is a JWT encoded and signed with a private key stored on vets-api
    - Eventually the public key associated with this will be published in a well known configuration
- Access token stores the following fields:
    - anti_csrf_token
    - created_time
    - expiration_time
    - last_regeneration_time
    - parent_refresh_token_hash
    - refresh_token_hash
    - session_handle
    - user_uuid
    - version
    - aud
    - Client_id
    - Jti
    - Sub
    - Iat
    
### Anti CSRF Token

- Typically this must be used for /refresh calls, and must match the anti_csrf_token given in the latest /token endpoint call, or latest /refresh call
- Currently this is disabled, and can be safely ignored

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
    
### Logout Endpoint

- This endpoint expects a valid access token from the user to be present when calling the `logout` endpoint. This function will allow a user to logout of the session associated with the access token. More information about how the endpoint works can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Sign-In%20Service/endpoints/revoke_all.md).

### Refresh Token

- Refresh token is encrypted and stored as an opaque string object for client
    - Values stored in refresh token are only relevant for internal sign-in service behavior
    
### Revoke All Sessions Endpoint

- This endpoint expects a valid access token from the user to be present when calling the `revoke_all_sessions` endpoint. This function will allow a user to logout of all sessions currently associated with the logged in user according to the valid access token being passed into the request. More information about how the endpoint works can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Sign-In%20Service/endpoints/revoke_all.md).
- This endpoint currently is not callable by vets-website but will be released in a future version.

### Token Expiration

- `Access_token` = 5 minutes
- `Refresh_token` = 30 minutes

### User Introspect / Information Endpoints

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
- Web-authenticated users can also access the traditional `vets-api/v0/users` endpoint for more extensive user information. This route is covered by SiS authentication and requires the same valid access token as the `introspect` endpoint.

## Logging and Monitoring

- Applications logs related to the sign in service in Grafana Loki([https://grafana.vfs.va.gov/d/-q9Nn3unz/sign-in-service-logs?orgId=1&var-env=Loki (Staging)](https://grafana.vfs.va.gov/d/-q9Nn3unz/sign-in-service-logs?orgId=1&var-env=Loki%20(Staging)))
    - Switch the environment and timing to your preference
- [Sign in service errors in Sentry](http://sentry.vfs.va.gov/organizations/vsp/issues/?environment=staging&project=3&query=is%3Aunresolved+%22signincontroller%22&statsPeriod=14d)
- [Sign in service metrics](https://app.datadoghq.com/dashboard/97h-d7e-tgr/joeidentitytestboard?from_ts=1655910414991&to_ts=1656083214991&live=true)
