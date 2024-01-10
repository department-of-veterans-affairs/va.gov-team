# Sign in Service (SiS)

## Overview

The Sign in Service was created to solve the shortcomings identified with the current VA.gov authentication solution. The new service provides a more reliable and faster user experience, increases the ability to iterate on enhancing user satisfaction, and provides a more cost-effective solution to VA while increasing transparency for login issues.

### Getting Started with SiS

#### Postman Collection

The VA.gov Identity team maintains a [Postman collection](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Product%20Documentation/va_identity_postman.json) to enable developers to more easily test against SiS routes. Documentation on how to use the SiS Postman collection can be found [here](postman.md).

#### SiS Quickstart

* Make sure your local installation of [vets-api](https://github.com/department-of-veterans-affairs/vets-api) and [vets-api-mockdata](https://github.com/department-of-veterans-affairs/vets-api-mockdata) repository are up to date.
* Decide which of the [four authorization flows supported by SiS](#authorization-flows) your client will implement.
* Register a [Client Config](configuration/client_config.md) with `vets-api` to manage your client's specific configuration. If you are implementing the [Service Account](auth_flows/service_account.md) auth flow you will need to create a [Service Account configuration](configuration/service_account.md) instead.
* Build your client's integration with SiS according to the specifications of the auth flow you have chosen.
* Once you have your SiS integration working locally, or if you are encountering issues, you can contact the Identity team on the [`#vsp-identity`](https://dsva.slack.com/archives/CSFV4QTKN) Slack channel.

## Authorization Flows

Sign in Service provides four distinct methods of authorization, with options for web-based and API integrations and both end user and API auth.

### Proof Key for Code Exchange (PKCE)

The standard SiS authorization flow for end users makes use of the PKCE, or `Proof Key for Code Exchange` OAuth 2.0 standard. PCKE makes use of a dynamically generated client secret to bridge the potential security gap between user authorization and the client's request for an access token; more detail about how the flow works [can be found in this tutorial](https://dropbox.tech/developers/pkce--what-and-why-). This PKCE flow functions with browser-managed cookies to enable web auth, and API request headers for mobile and API auth.

* [Website / Cookie Authorization Guide](auth_flows/cookie_oauth.md)

* [Mobile / API Authorization Guide](auth_flows/api_oauth.md)

### JWT Auth & Service Account Auth

Sign in Service is also configured to handle two types of backend authorization:

* [Private Key JWT](auth_flows/private_key_jwt.md): This flow allows a backend API unconnected to the original `/authorize` request to complete auth and obtain tokens by passing a JWT signed by their pre-registered private key, essentially allowing a different client to complete the user's auth from the one that initiated it.

* [Service Account Auth](auth_flows/service_account.md): This flow allows APIs to register a `Service Account` with which to request a special backend-authentication access_token; this flow is not a replacement for the regular end-user PKCE flow.

## Client Configuration & Service Account

In order to make use of the PKCE and JWT auth flows clients must register a `Client Configuration`. This database object is used by SiS to manage the client's authentication type, URI redirects, token durations, and other configurable options. More information on how to create and configure your application's Client Configuration [can be found here](configuration/client_config.md).

Service Account auth, being API-to-API instead of an end user authentication flow, uses `Service Account` objects to achieve similar configuration options. Information on creating a Service Account configuration [can be found here](configuration/service_account.md).

## Example PKCE Workflow

Most clients will find either the cookie or API PKCE flows to be appropriate to their needs of authenticating end users with SiS. The following is an example of what a succesful authentication, exchange of auth code for tokens, and refresh of tokens/persistance of a session looks like.

1. User opens their client (VA.gov / VA mobile app) to sign in via OAuth.
2. User clicks on the button to sign in with their credential service provider (CSP).
3. Client calls the vets-api Sign-in-Service (SiS) OAuth `/authorize` endpoint with specific query parameters outlined in the [`/authorize`](./endpoints/authorize.md) document.
4. Vets-api redirects to CSP website for user to enter credentials.
5. After the user authenticates with the CSP it calls SiS API endpoint `/callback` to create an auth code.
6. SiS API redirects user to the client with a `code` query parameter.
7. Client makes a call to the SiS API [`/token`](./endpoints/token.md) endpoint to get `Access Token` + `Refresh Token` + `Anti-CSRF Token`, stored in cookies (web authorization) or returned as a JSON payload (API authorization). Web auth will include an additional `Info Token` that tracks the expiry times of the other tokens.

    ```json
    {
      "data": {
        "access_token": "<accessTokenHash>",
        "refresh_token": "<refreshTokenHash",
        "anti_csrf_token": "<antiCsrfTokenHash>"
      }
    }
    ```

8. Client stores access token + refresh token.
9. Client uses access token in cookies (web auth) or Bearer Authorization header (API auth) to call the [`/introspect`](./endpoints/introspect.md) endpoint and receive user information.

    ```json
    "data": {
       "id": "",
       "type": "users",
       "attributes": { 
          "uuid": "876f0f36-6b12-4273-babe-12144eaa2d57",
          "first_name": "FAKEY",
          "last_name": ...
        }
    }
    ```

10. Once the access token reaches expiry client passes their refresh token to the [`/refresh`]((./endpoints/refresh.md)) endpoint to get a new set of tokens: a new `Access Token` + `Refresh Token` will be returned, as well as a new `Anti-CSRF Token` and/or `Info Token` if they are currently in use.

```json
  {
    "data": {
      "access_token": "<accessTokenHash>",
       "refresh_token": "<refreshTokenHash>",
       "anti_csrf_token": "<antiCsrfTokenHash>"
    }
  }
```

## Endpoints

* [`/authorize` - Authorize](endpoints/authorize.md)
* [`/token` - Token](endpoints/token.md)
* [`/refresh` - Refresh](endpoints/refresh.md)
* [`/introspect` - Introspect](endpoints/introspect.md)
* [`/logout` - Logout](endpoints/logout.md)
* [`/revoke` - Revoke (current session)](endpoints/revoke.md)
* [`/revoke_all` - Revoke all sessions](endpoints/revoke_all.md)
