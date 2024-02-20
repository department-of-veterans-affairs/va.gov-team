# VA.gov API OAuth Integration

## Version History

| Version Number | Author(s)                                              | Revision Date | Description of Change                                                                      |
|----------------|--------------------------------------------------------|---------------|--------------------------------------------------------------------------------------------|
|       0.1      | Trevor Bosaw, John Bramley, Josh Scanish, Joe Niquette |    3/17/22    | Initial creation                                                                           |
|       0.2      |                      Joe Niquette                      |    3/25/22    | Added new introspection response example, moved some sections around for better formatting |
|       0.3      |                      John Bramley                      |    7/05/22    | Updates for mobile vs. web authentication |
| 0.4 | John Bramley | 9/02/22 | Adds links to `vets-api` & `vets-api-mockdata` setup |
| 0.5 | John Bramley | 9/25/23 | Updates with `ClientConfig` information |
| 0.6 | John Bramley | 1/03/24 | `auth_flows` refactor |

## Introduction

This is a comprehensive guide to integrating a new end-user authentication client with Sign-in Service via the PKCE OAuth standard and API communication. The [API OAuth Workflow](#api-oauth-workflow) section provides a demonstration of this integration.

## Prerequisites

### Postman Collection

The Identity team maintains a [Postman collection](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Product%20Documentation/va_identity_postman.json) to enable developers to more easily test against Sign in Service (SiS) routes; this collection is configured to manage API integrations. Documentation on how to use the SiS Postman collection can be found [here](../postman.md).

### Local `vets-api` & `vets-api-mockdata` Repositories

In order to successfully develop against a local instance of Sign in Service, [vets-api](https://github.com/department-of-veterans-affairs/vets-api) must be set up, either natively or through Docker.

`vets-api` localhost performs a real authentication with the CSP, but relies on mocked user data from MPI. It must be configured to look for this mocked data from [vets-api-mockdata](https://github.com/department-of-veterans-affairs/vets-api-mockdata). Make sure you have the latest version of `vets-api-mockdata` (including running `ruby make_table.rb` in the mock data repository to populate the mock data tables) before attempting to authenticate with SiS to prevent missing mocked data errors.

### Client Config

In order to make use of the Sign in Service, clients must first [register a `Client Configuration`](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Sign-In%20Service/Engineering%20Docs/configuration/client_config.md).

Below are the ClientConfig attributes that necessary for a successful mobile or API integration with SiS:

- `authentication`: 'api'
- `anti_csrf`: `false`
- `access_token_duration`: 30.minutes
- `refresh_token_duration`: 45.days
- `pkce`: true
- `certificates`: nil

## Sequence Diagram

![pkce_oauth_diagram](https://user-images.githubusercontent.com/71290526/158837072-3e777557-e223-4a9c-948b-dd312f2b88cb.png)[Source](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Product%20Documentation/Sign%20In%20Service/Diagrams/PKCE_Oauth.md)

## Technical Diagram

![image](https://user-images.githubusercontent.com/20125855/177562919-43b99aa7-287b-475b-aa2f-da0e00c05a5c.png)

## Flow Diagrams

### Frontend Client

- [Unauthenticated request flow](../flow%20diagrams/pkce/frontend%20driven/unauthenticated-new-session.png)
- [Authenticated - access_token expired request flow](../flow%20diagrams/pkce/frontend%20driven/authenticated-expired-access-token.png)
- [Previously Authenticated - access_token valid request flow](../flow%20diagrams/pkce/frontend%20driven/authenticated-valid-access-token.png)

### Backend Client

- [Authenticated - access_token expired request flow](../flow%20diagrams/pkce/backend%20driven/authenticated-expired-access-token.png)
- [Authenticated - access_token valid request flow](../flow%20diagrams/pkce/backend%20driven/authenticated-valid-access-token.png)

## Sign in Service Public Routes

The Sign in Service routes necessary for an API integration are listed below. Routes that are authenticated require a valid SiS `access_token` passed through Bearer Auth. Refresh token authenticated routes requires a `refresh_token` request parameter.

### GET Routes

#### [Authorize](../endpoints/authorize.md) 
- initiates a session with SiS and prompts the user to enter credentials

#### [Introspect](../endpoints/introspect.md)
- retrieves user information
- authenticated route

#### [Revoke all Sessions](../endpoints/revoke_all_sessions.md)
- looks up a user and ends all of their sessions
- authenticated route

### POST Routes

#### [Token](../endpoints/token.md#cookie--api-pkce-auth)
- provides the client with access & refresh tokens after authentication

#### [Refresh](../endpoints/refresh.md)
- updates a user session and obtain new tokens
- refresh token authenticated route

##### [Revoke](../endpoints/revoke.md)
- ends the user session
- refresh token authenticated route

## API OAuth Workflow

1. User selects which credential service provider (CSP) they would like to authenticate with in the client application.
2. Client directs user to SiS OAuth `/authorize` endpoint with specific query parameters that conform to their preregistered Client Config.
     ![authorize](https://github.com/department-of-veterans-affairs/va.gov-team/assets/20125855/62cd6d5e-b685-42a1-86b4-68dd5001c632)

3. SiS redirects to CSP website for user to enter credentials.
4. After user successfully authenticates the CSP calls SiS API endpoint `/callback` to create an auth code.
   ![sis_callback](https://github.com/department-of-veterans-affairs/va.gov-team/assets/20125855/60279fd6-6156-4b6b-856e-26be5014ab5c)

5. SiS API redirects user to the client's registered `redirect_uri` with a `code` query parameter and `state` that is verified client side
  ![api_client_callback](https://github.com/department-of-veterans-affairs/va.gov-team/assets/20125855/b9b3ef07-dc6d-4e47-a71d-b5ab544591ab)
   
6. Client makes a POST call to the SiS API `/token` endpoint to get `vagov_access_token` &  `vagov_refresh_token`
   
  | Token Name | Description |
  | --- | --- |
  | access_token | Used to access authenticated pages on VA.gov, contains no user information |
  | refresh_token | May contain user information, used to obtain new tokens |
  
  ![postman_token](https://github.com/department-of-veterans-affairs/va.gov-team/assets/20125855/587bc1fd-5b6c-4d3b-93b9-0efa1d9d32f4)

7. Client uses access token to query the `/introspect` endpoint and other authentication-protected routes:
    - request: `Authorization: Bearer <accessTokenHash>`
    - response: `"data": { user_data }`
   
    ![introspect](https://github.com/department-of-veterans-affairs/va.gov-team/assets/20125855/cddb35f5-78f4-4f15-8891-ca4056d25599)

8. Client uses the refresh token to get a new token pair (when access token reaches expiry) by querying the `/refresh` endpoint. New tokens are returned in a JSON payload identical to those returned from the `/token` endpoint.

  ![api_refresh](https://github.com/department-of-veterans-affairs/va.gov-team/assets/20125855/c0f96083-7669-4ef4-8858-a60886e2a90e)

## Parameters & Return Values

| Name | Description | Value Type | Example Values |
| --- | --- | --- | --- |
| access_token | Encoded token returned by `/token` endpoint | String | `eyJhbGciOiJSUzI1NiJ9...` |
| acr | The level of user authentication asked for. | String | `ial1`, `ial2`, `loa1`, `loa3`, `min` |
| authentication         | [Bearer authentication](https://swagger.io/docs/specification/authentication/bearer-authentication) passing an access token | String | `Bearer eyJhbGciOiJSUzI1NiJ9...` |
| client_id | A unique name identifying your ClientConfig. | String | `sample_client_api` |
| code | Authentication code provided by vets-api to be exchanged for tokens | String | `8db56c32-8eec-4efe-8293-9fbbe717f087` |
| code_challenge | Value created by client, derived from `code_verifier`, and passed to `/authorize` to be saved by vets-api | String | `JNkFflCkxk1K6gQUf23P_5Ctl_T65_xkkOU_y-Cc2XI=` |
| code_challenge_method | Client specified, most common value is S256 | String | `S256` |
| code_verifier | Value created and stored by client during `/authorize`, passed in `/token` to verify against vets-api stored `code_challenge` | String | `f2413353d83449c501b17e411d09ebb4` |
| grant_type |  Specifies authentication type, `authorization_code` is required for PKCE auth | String | `authorization_code` |
| refresh_token | Encoded token returned by `/token` endpoint, must be URI-encoded when passed as URL parameter. | String | `"v1:insecure+data+A6ZXlKMWMyVnlYM1Yx...` |
| type | Which credential provider is authenticating the user | String | `logingov`, `idme`, `dslogon`, `mhv` |
| user_uuid | Value returned from vets-api that maps the user from the user model to the current session | String | `ac899729-5de1-4968-973f-b9dc896f6b03`

## Service Descriptions

### Access Token JWT

- Access token is a JWT encoded and signed with a private key stored on vets-api
  - The public key associated with this can be found at `https://staging-api.va.gov/sign_in/openid_connect/certs`
- API access_token expiration time must be `30.minutes`
- Access token stores the following fields:
  - `iss`: issuer of the token, `va.gov sign in`
  - `aud`: token audience, derived from `ClientConfig`
  - `client_id`: the client's string identifier
  - `jti`: unique identifier for the JWT
  - `sub`: subject of token, vets-api `user_uuid`
  - `exp`: the expiry time of the token
  - `iat`: the creation time of the token
  - `session_handle`: the handle of the session the access token is connected to
  - `refresh_token_hash`: a hash tying the access token to the refresh token that it is connected to
  - `parent_refresh_token_hash`: the refresh_token_hash of the current refresh token's parent, if one exists
  - `anti_csrf_token`: the anti-CSRF token string that corresponds to the session's anti-CSRF token (not used in API auth)
  - `last_regeneration_time`: the time that the session was most recently refreshed
  - `version`: the version of SiS that the access token was generated with
  - `user_attributes`: optional user attributes that can be included for client authentication purposes

### Client Configuration

- Specifies individual client configuration, stored in the vets-api database and used to validate client request parameters and create tokens. More information can be found in the [Client Configuration](../configuration/client_config.md) page.

### Code Verifier / Code Challenge

- Code verifier is a random string value generated and held by the client.
  - `code_verifier = '5787d673fb784c90f0e309883241803d'`
- Code challenge is a hashed urlsafe_encoded value from code_verifier:

  ```ruby
  code_verifier = '5787d673fb784c90f0e309883241803d'
  url_unsafe_code_challenge = Digest::SHA256.digest(code_verifier)
  code_challenge = Base64.urlsafe_encode64(url_unsafe_code_challenge)
  => "1BUpxy37SoIPmKw96wbd6MDcvayOYm3ptT-zbe6L_zM="
  ```

- Clients should generate both values, pass the code *challenge* (as well as code challenge method - `S256`) during `/authorize`, then the code *verifier* along with their received authorization code during `/token`.

### Refresh Token

- Refresh token is encrypted and stored as an opaque string object for client
  - Values stored in refresh token are only relevant for internal sign in service behavior
- API refresh_token expiration time must be `45.days`

## Logging and Monitoring

- [Sign in service errors in Sentry](http://sentry.vfs.va.gov/organizations/vsp/issues/?environment=staging&project=3&query=is%3Aunresolved+%22signincontroller%22&statsPeriod=14d)
- Metrics for Sign in Service in both production and staging environments can be found on the [VSP Identity Monitor Dashboard](https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vsp-identity-monitor-dashboard)
