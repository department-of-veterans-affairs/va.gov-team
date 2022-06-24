# VA.gov Web OAuth Integration

### Version History

| Version Number | Author | Revision Date | Description of Change |
| --- | --- | --- | --- |
| 0.1 | Trevor Bosaw, John Bramley, Alex Garcia, Joe Niquette | 6/24/2022 | Initial creation |

## Description

This document describes how our Web Based OAuth partners can integrate with the Sign in Service.

### Sequence Diagram
![vagovweboauth (1)](https://user-images.githubusercontent.com/71290526/175662350-1ecccfcf-4da3-4370-9483-5b15c263d428.png)
[Source](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Sign%20In%20Service/Diagrams/Web_OAuth.md)

### Technical Diagram
![image](https://user-images.githubusercontent.com/71290526/175662498-2ef90001-845c-400a-945a-5564d24d992c.png)
[Source](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/diagram_sources/Sign%20in%20Service%20-%20Web%20(1).png)

## Sign in service will provide:

- Sign in Page: `staging.va.gov/sign-in/?oauth=true`
- Authorization URL: `staging-api.va.gov/v0/sign_in/authorize`
- Token URL: `staging-api.va.gov/v0/sign_in/token`
- User info/introspect URL: `staging-api.va.gov/v0/sign_in/introspect`
- Refresh URL: `staging-api.va.gov/v0/sign_in/refresh`
- Revocation URL: `staging-api.va.gov/v0/sign_in/revoke`
- Revoke_all_sessions URL: `staging-api.va.gov/v0/sign_in/revoke_all_sessions`
- Logout URL: `staging-api.va.gov/v0/sign_in/logout`

## Oauth Workflow

1. User lands on [VA.gov](http://va.gov/) wanting to sign in via OAuth
2. User clicks on the button to sign in with their service provider **<CSP>**
3. Vets-website calls the vets-api OAuth `/authorize` endpoint with specific query parameters outlined in the Parameters Table below
4. Vets-api redirects to **<CSP>** website for user to enter credentials
5. **<CSP>** calls Sign-in-Service (SiS) API endpoint `/callback` to create an auth code
6. SiS API redirects user to `[environment]/auth/login/callback` with a `code` query parameter and `state` that is verified client side
7. Vets-website makes a POST call to the SiS API `/token` endpoint to get Access Token + Refresh Tokens + Anti-CSRF Token Cookies

| Cookie Name | Description |
| --- | --- |
| vagov_access_token | Access token used to access authenticated pages on va.gov, contains no user information |
| vagov_refresh_token | May contain user information, used to obtain new tokens |
| vagov_anti_csrf_token | Anti CSRF to prevent CSRF |
| vagov_info_token | Token used by the frontend to determine timeout counters |
    
8. Vets-api stores Access Token + Refresh Token + Anti-CSRF Token in cookies
9. Vets-website uses Access Token in Authorization header to hit the `/introspect` endpoint
    1. `Authorization: Bearer <accessTokenHash>`
    
    ```
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
          "vha_facility_ids":[
             "200MH",
             "989",
             "360",
             "200MHS",
             "648"
          ],
          "id_theft_flag": false,
          "verified": true,
          "access_token_ttl": 300
         }
      }
    }
    
    ```
    
10. Uses the Refresh token to get an new Access Token + Refresh Token (when Access token reaches expiry) by hitting the `/refresh` endpoint
    
    ```
    {
      "data": {
    		"access_token": "<accessTokenHash>",
    		"refresh_token": "<refreshTokenHash>",
        "anti_csrf_token": "<antiCsrfTokenHash>"
      }
    }
    
    ```
    

## Parameters

| Name | Description | Value Type |
| --- | --- | --- |
| acr | Values can be ial1, ial2, loa1, loa3,min | String |
| client_id | Must be included, value expected for web version is web | String |
| code_challenge_method | Client specified, most common value is S256 | String |
| oauth | MUST be true, used in backend | Boolean |
| type | Values can be: logingov, dslogon, mhv, idme. All of which will be IAL2 or LOA3 calls, no LOA1 or IAL1 users will be returned to web | String |
| code_challenge | Value created by vets-api and passed in param to login modal | Base64url |
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

## Revoke All Sessions Endpoint

- This endpoint expects a valid access token from the user to be present when calling the `revoke_all_sessions` endpoint. This function will allow a user to logout of all sessions currently associated with the logged in user according to the valid access token being passed into the request. More information about how the endpoint works can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Sign-In%20Service/endpoints/revoke_all.md).
- This endpoint currently is not callable by vets-website but will be released in a future version.

## Logout Endpoint

- This endpoint expects a valid access token from the user to be present when calling the `logout` endpoint. This function will allow a user to logout of the session associated with the access token. More information about how the endpoint works can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Sign-In%20Service/endpoints/revoke_all.md).

## Logging and Monitoring

The following links will provide information about the SiS.

- Applications logs related to the sign in service in Grafana Loki([https://grafana.vfs.va.gov/d/-q9Nn3unz/sign-in-service-logs?orgId=1&var-env=Loki (Staging)](https://grafana.vfs.va.gov/d/-q9Nn3unz/sign-in-service-logs?orgId=1&var-env=Loki%20(Staging)))
    - Switch the environment and timing to your preference
- [Sign in service errors in Sentry](http://sentry.vfs.va.gov/organizations/vsp/issues/?environment=staging&project=3&query=is%3Aunresolved+%22signincontroller%22&statsPeriod=14d)
- [Sign in service metrics](https://app.datadoghq.com/dashboard/97h-d7e-tgr/joeidentitytestboard?from_ts=1655910414991&to_ts=1656083214991&live=true)
