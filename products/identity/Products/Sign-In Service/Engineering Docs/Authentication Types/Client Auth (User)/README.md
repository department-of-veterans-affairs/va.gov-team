# Client Auth (User)

## Authorization Flows

### Proof Key for Code Exchange (PKCE)

The standard SiS authorization flow for end users makes use of the PKCE, or `Proof Key for Code Exchange` OAuth 2.0 standard. PCKE makes use of a dynamically generated client secret to bridge the potential security gap between user authorization and the client's request for an access token; more detail about how the flow works [can be found in this tutorial](https://dropbox.tech/developers/pkce--what-and-why-). This PKCE flow functions with browser-managed cookies to enable web auth, and API request headers for mobile and API auth.

* [Website / Cookie Authorization Guide](auth_flows/cookie_oauth.md)

* [Mobile / API Authorization Guide](auth_flows/api_oauth.md)

### JWT Auth

Client Auth is also configured to handle backend authorization:

* [Private Key JWT](auth_flows/private_key_jwt.md): This flow allows a backend API unconnected to the original `/authorize` request to complete auth and obtain tokens by passing a JWT signed by their pre-registered private key, essentially allowing a different client to complete the user's auth from the one that initiated it.


## Client Configuration

In order to make use of the PKCE and JWT auth flows clients must register a `Client Configuration`. This database object is used by SiS to manage the client's authentication type, URI redirects, token durations, and other configurable options. More information on how to create and configure your application's Client Configuration [can be found here](configuration/client_config.md).

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
