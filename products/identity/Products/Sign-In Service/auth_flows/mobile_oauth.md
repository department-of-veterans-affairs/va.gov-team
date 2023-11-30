# VA.gov Mobile/API OAuth Integration

## Version History

| Version Number | Author(s)                                              | Revision Date | Description of Change                                                                      |
|----------------|--------------------------------------------------------|---------------|--------------------------------------------------------------------------------------------|
|       0.1      | Trevor Bosaw, John Bramley, Josh Scanish, Joe Niquette |    3/17/22    | Initial creation                                                                           |
|       0.2      |                      Joe Niquette                      |    3/25/22    | Added new introspection response example, moved some sections around for better formatting |
|       0.3      |                      John Bramley                      |    7/05/22    | Updates for mobile vs. web authentication |
| 0.4 | John Bramley | 9/02/22 | Adds links to `vets-api` & `vets-api-mockdata` setup |
| 0.5 | John Bramley | 9/25/23 | Updates with `ClientConfig` information |

## Prerequisites

### Postman Collection

The VSP Identity team maintains a [Postman collection](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Product%20Documentation/Sign%20In%20Service/sis_postman_v1.json) to enable developers to more easily test against SiS routes; this collection is configured to manage API integrations. Documentation on how to use the SiS Postman collection can be found [here](../Sign-in-service_Postman.md).

### `vets-api` & `vets-api-mockdata` Repositories

In order to successfully develop against a local instance of Sign in Service, [vets-api](https://github.com/department-of-veterans-affairs/vets-api) must be set up, either natively or through Docker.

`vets-api` localhost performs a real authentication with the CSP, but relies on mocked user data from MPI. It must be configured to look for this mocked data from [vets-api-mockdata](https://github.com/department-of-veterans-affairs/vets-api-mockdata). Make sure you have the latest version of `vets-api-mockdata` (including running `ruby make_table.rb` in the mock data repository to populate the mock data tables) before attempting to authenticate with SiS to prevent missing mocked data errors.

### Client Config

In order to make use of the Sign in Service clients must first [register a `Client Configuration`](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Sign-In%20Service/configuration/client_config.md).

When registering a Client Config for a mobile or API integration with SiS, set the following attributes:

- `authentication`: 'api'
- `anti_csrf`: `false`
- `access_token_duration`: 30.minutes
- `refresh_token_duration`: 45.days
- `pkce`: true
- `certificates`: nil

## Sequence Diagram

![pkce_oauth_diagram](https://user-images.githubusercontent.com/71290526/158837072-3e777557-e223-4a9c-948b-dd312f2b88cb.png)[Source](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Sign%20In%20Service/Diagrams/PKCE_Oauth.md)

## Technical Diagram

![image](https://user-images.githubusercontent.com/20125855/177562919-43b99aa7-287b-475b-aa2f-da0e00c05a5c.png)
[Source](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/diagram_sources/Sign%20in%20Service%20-%20Mobile.png)

## Sign in Service Public Routes

The Sign in Service routes necessary for a mobile/API integration are listed below. Routes that are authenticated require a valid SiS `access_token` passed through Bearer Auth. Refresh token authenticated routes requires a `refresh_token` request parameter.

### GET Routes

#### [Authorization](../endpoints/authorize.md)

- `staging-api.va.gov/v0/sign_in/authorize`
- params: `acr`, `type`, `code_challenge`, `code_challenge_method`, `client_id`
- optional params: `state`, `operation`

#### [Introspect](../endpoints/introspect.md) - authenticated route

- `staging-api.va.gov/v0/sign_in/introspect`

#### [Revoke all Sessions](../endpoints/revoke_all_sessions.md) - authenticated route

- `staging-api.va.gov/v0/sign_in/revoke_all_sessions`

#### [Logout](../endpoints/logout.md) - authenticated route

- `staging-api.va.gov/v0/sign_in/logout`
- params: `client_id`

### POST Routes

#### [Token](../endpoints/token.md)

- `staging-api.va.gov/v0/sign_in/token`
- params: `code`, `code_verifier`, `grant_type`

#### [Refresh](../endpoints/refresh.md) - refresh token authenticated route

- `staging-api.va.gov/v0/sign_in/refresh`
- params: `refresh_token`

##### [Revoke](../endpoints/revoke.md) - refresh token authenticated route

- `staging-api.va.gov/v0/sign_in/revoke`

## API OAuth Workflow

1. User selects which credential service provider (CSP) they would like to authenticate with in the client application.
2. Client directs user to SiS OAuth `/authorize` endpoint with specific query parameters that comport to their preregistered Client Config.
3. SiS redirects to CSP website for user to enter credentials.
4. After user successfully authenticates the CSP calls SiS API endpoint `/callback` to create an auth code.
5. SiS API redirects user to the client's registered `redirect_uri` with a `code` query parameter and `state` that is verified client side
6. Client makes a POST call to the SiS API `/token` endpoint to get `vagov_access_token`&  `vagov_refresh_token`
  | Token Name | Description |
  | --- | --- |
  | vagov_access_token | Used to access authenticated pages on VA.gov, contains no user information |
  | vagov_refresh_token | May contain user information, used to obtain new tokens |
7. Client uses access token to query the `/introspect` endpoint and other authentication-protected routes:
    - request: `Authorization: Bearer <accessTokenHash>`
    - response: `"data": { user_data }`
8. Client uses the refresh token to get an new tokens (when access token reaches expiry) by querying the `/refresh` endpoint. New tokens are returned in a JSON payload identical to those returned from the `/token` endpoint.

## Parameters

| Name                  | Description                                                                                                                                      | Value Type |
|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| client_id           | partner identifier, for API auth use `vamobile`, `vamobile_test`, or `sample_client_api` | String     |
| code_challenge_method | Client specified, most common value is `S256`                                                                                                    | String     |
| oauth                 | MUST be `true`, used in backend                                                                                                                  | Boolean    |
| CSP                   | Values can be: `logingov`, `dslogon`, `mhv`, `idme`. All of which will be IAL2 or LOA3 calls, no LOA1 or IAL1 users will be returned to vamobile | String     |
| code_challenge        | Value created by vamobile client and passed in param to unified sign in page                                                                     | Base64url  |
| grant_type            | `authorization_code` , only value allowed at this time                                                                                           | String     |
| authentication         | [Bearer authentication](https://swagger.io/docs/specification/authentication/bearer-authentication) passing an access token                                                                                                          | String     |
| code_verifier         | Value created, used to create the client's `code_challenge`, and stored by client                                                                                                             | String     |
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
  - Values stored in refresh token are only relevant for internal sign in service behavior

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

- This endpoint has not yet been implemented to take any action (it will not logout all endpoints) as of 9/28/22. We have the item on the roadmap with the current restriction around how this will feature will be presented to the user.
- This endpoint expects a valid access token from the user to be present when calling the `revoke_all` endpoint. This function will allow a user to logout of all sessions currently associated with the logged in user according to the valid access token being passed into the request. More information about how the endpoint works can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Sign-In%20Service/endpoints/revoke_all.md).

## Revocation Endpoint

- This endpoint will allow a user to logout of the current session, not impacting other sessions for the same user on another device. The function should remove the access and refresh tokens from the endpoint and invalidate the refresh token on the backend. More information about how the endpoint works can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Sign-In%20Service/endpoints/revoke.md).

## Logging and Monitoring

The following links will provide information about the SiS.

- Applications logs related to the sign in service in [Datadog](https://vagov.ddog-gov.com/dashboard/3di-esj-7wy/identity-log-queries?index=%2A&tpl_var_deployment_env%5B0%5D=vagov-staging&from_ts=1664276154825&to_ts=1664290554825&live=true) (includes a few other identity related logs but provides examples of queries that can be run for SiS related information)
- Sign in service [errors in Sentry](http://sentry.vfs.va.gov/organizations/vsp/issues/?groupStatsPeriod=auto&project=4&project=3&query=is%3Aunresolved+assigned%3A%23vsp-identity+controller_name%3Asign_in&statsPeriod=30d)
