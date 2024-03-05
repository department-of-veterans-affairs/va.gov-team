# VA.gov Cookie OAuth Integration

## Version History

| Version Number | Author | Revision Date | Description of Change |
| --- | --- | --- | --- |
| 0.1 | Trevor Bosaw, John Bramley, Alex Garcia, Joe Niquette | 6/24/2022 | Initial creation |
| 0.2 | John Bramley | 7/05/2022 | Updates for mobile vs. web authentication |
| 0.4 | John Bramley | 9/02/22 | Adds links to `vets-api` & `vets-api-mockdata` setup |
| 0.5 | John Bramley | 9/25/23 | Updates with `ClientConfig` information |
| 0.6 | John Bramley | 1/03/24 | `auth_flows` refactor |

## Introduction

This is a comprehensive guide to integrating a new end-user authentication client with Sign-in Service via the PKCE OAuth standard and browser cookies. The [Cookie OAuth Workflow](#cookie-oauth-workflow) section provides a demonstration of this integration.

## Prerequisites

### Postman Collection

The VSP Identity team maintains a [Postman collection](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Product%20Documentation/va_identity_postman.json) to enable developers to more easily test against Sign in Service (SiS) routes; this collection is configured to manage cookie integrations. Documentation on how to use the SiS Postman collection can be found [here](../postman.md).

### Local `vets-api` & `vets-api-mockdata` Repositories

In order to successfully develop against a local instance of Sign in Service, [vets-api](https://github.com/department-of-veterans-affairs/vets-api) must be set up, either natively or through Docker.

`vets-api` localhost performs a real authentication with the CSP, but relies on mocked user data from MPI. It must be configured to look for this mocked data from [vets-api-mockdata](https://github.com/department-of-veterans-affairs/vets-api-mockdata). Make sur e you have the latest version of `vets-api-mockdata` (including running `ruby make_table.rb` in the mock data repository to populate the mock data tables) before attempting to authenticate with SiS to prevent missing mocked data errors.

### Client Config

In order to make use of the Sign in Service clients must first [register a `Client Configuration`](../configuration/client_config.md).

When registering a Client Config for a web or cookie integration with SiS, the following attributes as so:

- `authentication`: 'cookie'
- `anti_csrf`: `true`
- `access_token_duration`: 5.minutes
- `refresh_token_duration`: 30.minutes
- `pkce`: true
- `certificates`: nil

## Sequence Diagram

![vagovweboauth (1)](https://user-images.githubusercontent.com/71290526/175662350-1ecccfcf-4da3-4370-9483-5b15c263d428.png)

## Technical Diagram

![image](https://user-images.githubusercontent.com/71290526/175662498-2ef90001-845c-400a-945a-5564d24d992c.png)

## Flow Diagrams

### Frontend Client

- [Unauthenticated request flow](../flow%20diagrams/pkce/frontend%20driven/unauthenticated-new-session.png)
- [Authenticated - access_token expired request flow](../flow%20diagrams/pkce/frontend%20driven/authenticated-expired-access-token.png)
- [Authenticated - access_token expired request flow](../flow%20diagrams/pkce/frontend%20driven/authenticated-valid-access-token.png)

## Sign in Service Public Routes

The Sign in Service routes necessary for a web/cookie-based integration are listed below. The VA.gov staging environment web client integration with SiS is located at `https://staging.va.gov/sign-in/?oauth=true` for web clients that wish to use the [Unified Sign In Page](../../../Unified%20Sign%20In%20Pages/README.md). Routes that are authenticated require a valid SiS `vagov_access_token` cookie, as well as an `vagov_anti_csrf_token` cookie if your Client Config is configured for it. The `/refresh` route requires a `vagov_refresh_token` cookie as well as the optional anti-CSRF token.

### GET Routes

#### [Authorize](../endpoints/authorize.md)
- initiates a session with SiS and prompts the user to enter credentials

#### [Introspect](../endpoints/introspect.md)
- retrieves user information
- authenticated route
- Cookie clients of SiS have access to the serialized User endpoint at `staging-api.va.gov/v0/user`, which provides a more comprehensive set of user attributes than the introspect endpoint.

#### [Revoke all Sessions](../endpoints/revoke_all_sessions.md)
- looks up a user and ends all of their sessions
- authenticated route

#### [Logout](../endpoints/logout.md)
- ends the user session
- authenticated route

### POST Routes

#### [Token](../endpoints/token.md#cookie--api-pkce-auth)
- provides the client with access & refresh tokens after authentication
- Cookie clients of SiS will also receive a `vagov_info_token`, which contains token and session expiration dates for use in inactivity and auto logout components.

#### [Refresh](../endpoints/refresh.md)
- updates a user session and obtain new tokens
- refresh token authenticated route

##### [Revoke](../endpoints/revoke.md)
- ends the user session
- refresh token authenticated route

## Cookie OAuth Workflow

1. User lands on [VA.gov](http://va.gov/) or another web client wanting to sign in via OAuth.
  ![csp_select](https://github.com/department-of-veterans-affairs/va.gov-team/assets/20125855/75878eac-8dce-4fb4-ae6e-0408f0fc443a)

2. User clicks on the button to sign in with their credential service provider (CSP).
3. Client calls the SiS OAuth `/authorize` endpoint with specific query parameters that comport to their preregistered Client Config.
   ![authorize](https://github.com/department-of-veterans-affairs/va.gov-team/assets/20125855/67f7bf53-a368-470c-91d3-fb1126b3e9be)

4. SiS redirects to CSP website for user to enter credentials.
5. After user successfully authenticates the CSP calls SiS API endpoint `/callback` to create an auth code.
  ![sis_callback](https://github.com/department-of-veterans-affairs/va.gov-team/assets/20125855/bd51d8ca-1d8c-4469-a2f4-ba4eaf3d3d33)

6. SiS API redirects user to the client's registered `redirect_uri` with a `code` query parameter and `state` that is verified client side
   ![redirect_uri](https://github.com/department-of-veterans-affairs/va.gov-team/assets/20125855/9c31e41b-2eaa-4449-8f13-811b77a89688)

7. Client makes a POST call to the SiS API `/token` endpoint to get `vagov_access_token`, `vagov_refresh_token`, `vagov_anti_csrf_token`, & `vagov_info_token` cookies, stored in the browser.

  | Cookie Name | Description |
  | --- | --- |
  | vagov_access_token | Used to access authenticated pages on VA.gov, contains no user information |
  | vagov_refresh_token | May contain user information, used to obtain new tokens |
  | vagov_anti_csrf_token | Optional feature to preven cross-site request forgery |
  | vagov_info_token | Used by client to determine timeout counters |

  ![token](https://github.com/department-of-veterans-affairs/va.gov-team/assets/20125855/74a4b852-f5f2-4aee-8317-fbd1818e6c9b)

8. Client uses access token cookie to query the `/introspect` endpoint and other authentication-protected routes:
    - request: `vagov_access_token=<accessTokenHash>`
    - response: `"data": { user_data }`
   
    ![user](https://github.com/department-of-veterans-affairs/va.gov-team/assets/20125855/11eee0a5-c0e0-4044-9152-db974b7de9ed)

9. Client uses the refresh token to get an new token set (when access token reaches expiry) by querying the `/refresh` endpoint. New token cookies are stored in the browser with a successful response.
    ![refresh](https://github.com/department-of-veterans-affairs/va.gov-team/assets/20125855/c4c7ff98-c8ab-48b7-b294-bb784b19124f)


## Parameters & Return Values

| Name | Description | Value Type | Example Values |
| --- | --- | --- | --- |
| acr | The level of user authentication asked for. | String | `ial1`, `ial2`, `loa1`, `loa3`, `min` |
| client_id | A unique name identifying your ClientConfig. | String | `sample_client_web` |
| code | Authentication code provided by vets-api to be exchanged for tokens | String | `8db56c32-8eec-4efe-8293-9fbbe717f087` |
| code_challenge | 	Value created by client, derived from `code_verifier`, and passed to `/authorize` to be saved by vets-api | String | `JNkFflCkxk1K6gQUf23P_5Ctl_T65_xkkOU_y-Cc2XI=` |
| code_challenge_method | Client specified, most common value is S256 | String | `S256` |
| code_verifier | Value created and stored by client during `/authorize`, passed in `/token` to verify against vets-api stored `code_challenge` | String | `f2413353d83449c501b17e411d09ebb4` |
| grant_type |  Specifies authentication type, `authorization_code` is required for PKCE auth | String | `authorization_code` |
| vagov_access_token | Encoded token returned by `/token` endpoint | String | `eyJhbGciOiJSUzI1NiJ9...` |
| vagov_anti_csrf_token | Encoded token returned by `/token` endpoint to prevent CSRF attacks | String | `efc7b88e5baa009d2cc0e1cf7c6d31b4` |
| vagov_info_token | URL-encoded token containing access_token & refresh_token expirations | String | `%7B%22access_token_expiration%22%3A%222023-12-12T17%3A51%3A31.988Z%22%2C%22refresh_token_expiration%22%3A%222023-12-12T18%3A16%3A31.965Z%22%7D` |
| vagov_refresh_token | Encoded token returned by `/token` endpoint, must be URI-encoded when passed as URL parameter. | String | `"v1:insecure+data+A6ZXlKMWMyVnlYM1Yx...` |
| type | Which credential provider is authenticating the user | String | `logingov`, `idme`, `dslogon`, `mhv` |
| user_uuid | Value returned from vets-api that maps the user from the user model to the current session | String | `ac899729-5de1-4968-973f-b9dc896f6b03`

## Service Descriptions

### Access Token JWT

- Access token is a JWT encoded and signed with a private key stored on vets-api
  - The public key associated with this can be found at `https://staging-api.va.gov/sign_in/openid_connect/certs`
- Web/Cookie access_token expiration time must be `5.minutes`
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
  - `anti_csrf_token`: the anti-CSRF token string that corresponds to the session's anti-CSRF token
  - `last_regeneration_time`: the time that the session was most recently refreshed
  - `version`: the version of SiS that the access token was generated with
  - `user_attributes`: optional user attributes that can be included for client authentication purposes

### Anti CSRF Token

- Optional additional protection for `/refresh` and `/revoke` calls to prevent CSRF attacks, this must match the anti_csrf_token given in the latest `/token` endpoint call or latest `/refresh` call

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

- Clients should generate both values, pass the code *challenge* method (as well as code challenge method - `S256`) during `/authorize`, then the code *verifier* along with their received authorization code during `/token`.

### Info Token

- Provides access_token and refresh_token expiration times for ease of clients in managing user sessions.

### Refresh Token

- Refresh token is encrypted and stored as an opaque string object for client
  - Values stored in refresh token are only relevant for internal sign in service behavior
- Web/Cookie refresh_token expiration time must be `30.minutes`

## Logging and Monitoring

- [Sign in service errors in Sentry](http://sentry.vfs.va.gov/organizations/vsp/issues/?environment=staging&project=3&query=is%3Aunresolved+%22signincontroller%22&statsPeriod=14d)
- Metrics for Sign in Service in both production and staging environments can be found on the [VSP Identity Monitor Dashboard](https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vsp-identity-monitor-dashboard)
