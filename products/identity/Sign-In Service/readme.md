# Sign-in-Service (SiS)

## Overview
The VA.gov Sign-in Service was created to solve several shortcomings identified with the existing solutions.  Our new service should reduce the number of redirects users experience, reduce login latency, and provide a more cost-effective solution to th VA while increasing transparency for login issues.

### Our OAuth workflows
Sign-in Service is configured to serve both browser authentication from vets-website and mobile/API authentication for the VA mobile app and other third-party services. The two workflows are largely similar but have key differences on how they handle OAuth authentication.
- [Website / Cookie Authentication Guide](Sign-in-service_Web-OAuth.md)
- [Mobile / API Authentication Guide](Sign-in-service_PKCE-OAuth.md)

### Differences between web & mobile workflows

#### Token_info
The use of the token info endpoint will facilitate automatic logout due to user inactivity on web based versions of the SiS. The intent is the web app will read the `token_info` cookie and extract the refresh token expiration to determine when to display the inactivity modal and subsequent auto logout.

#### Introspection
Web based apps will not require the use of an introspection endpoint because the web based version will use internal user storage mechanisms.

### Example Workflow
1. User opens their client (VA.gov / VA mobile app) to sign in via OAuth
2. User clicks on the button to sign in with their service provider **CSP**
3. Client calls the vets-api Sign-in-Service (SiS) OAuth `/authorize` endpoint with specific query parameters outlined in the [`/authorize`](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Sign-In%20Service/endpoints/authorize.md) document
4. Vets-api redirects to **CSP** website for user to enter credentials
5. The **CSP** calls SiS API endpoint `/callback` to create an auth code
6. SiS API redirects user to to [VA.gov](http://VA.gov) with a `code` query parameter
7. Client makes a call to the SiS API `/token` endpoint to get Access Token + Refresh Tokens + Anti-CSRF Token, stored in cookies (web authentication) or returned as a JSON payload (mobile authentication)

    ```json
    {
      "data": {
        "access_token": "<accessTokenHash>",
        "refresh_token": "<refreshTokenHash",
        "anti_csrf_token": "<antiCsrfTokenHash>"
      }
    }
    ```
8. Client stores Access Token + Refresh Token
    1. Still need to figure out the best secure option outline (Todo: @AGarcia-Clarity)
9. Client uses Access Token in cookies (web authentication) or Bearer Authorization header (mobile) to hit the `/introspect` endpoint and receive user information
    
    ```json
    "data": {
       "id": "",
       "type": "users",
       "attributes": { user_attributes }
    }
    ```
10. Client the Refresh token to get a new Access Token + Refresh Token (when Access token reaches expiry) by hitting the `/refresh` endpoint
    
```json
  {
    "data": {
      "access_token": "<accessTokenHash>",
       "refresh_token": "<refreshTokenHash>",
       "anti_csrf_token": "<antiCsrfTokenHash>"
    }
  }
```

## Postman Collection
- SiS features a [Postman Collection](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Sign%20In%20Service/sis_postman_v1.json) that provides routes for both cookie-based & API-based authentication.

## Endpoints
- [`/authorize` Authorize](endpoints/authorize.md)
- [`/token` Token](endpoints/token.md)
- [`/introspect` Introspect](endpoints/introspect.md)
- [`/signout` Signout/Logout](endpoints/signout.md)
- [`/revoke` Revoke Tokens](endpoints/revocation.md)
- [`/revoke_all` Revoke all sessions](endpoints/revoke_all.md)
