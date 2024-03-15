# Sign in Service - Service Accounts

## Overview

The decision, communications between `identity-dashboard` backend and `sign in service` will be facilitated by a new type of `Sign in Service` connection that facilitates ‘Service Accounts’ connections. This will leverage a flow in sign in service similar to the `private key jwt` flow, except the `/authorize` step is skipped entirely here.

- A known backend will call `sign in service` with:

`/token&grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=<private_key_jwt>`

- `sign in service` will return with an `access token` with an expiration of `5 minutes`
- `sign in service` won’t create a session or return other types of tokens for this type of connection
    - For now we are going to use the single endpoint for generating the tokens. We will differentiate the call (per oauth 2.0) based on the grant type.
    - In the future we may make a separate endpoint for service to service token issue from the current user based token issue.
- Each application will determine what applications it accepts with this system to system authentication. To do this, when an application verifies an access token, it will be able to inspect a specific field to see what application the access token is authenticated as
    - Requirement:
        - Something that stores the token in a redis that checks if the user already has an access token issued to them so we dont generate a new one.
- There will be scopes initially.
    - google makes scopes the URL. If you want access to multiple servers you have multiple URLs. The URLs are colon separated.
    - Approved, scopes will be URLs
    - Google example: [https://developers.google.com/identity/protocols/oauth2/scopes](https://developers.google.com/identity/protocols/oauth2/scopes)
        - use .read-only and .admin to specify role

## Service Account Flow

### General flow
![Untitled](https://github.com/department-of-veterans-affairs/va.gov-team/assets/71290526/4cac8550-66cf-4678-a015-12d0b2b03b03)

### The `/token` request
![Untitled 1](https://github.com/department-of-veterans-affairs/va.gov-team/assets/71290526/bceb9a9b-f05b-4f2b-93a2-5b145d3f2d13)

### Access token as a JWT in the response for the `/token` request:
![Untitled 2](https://github.com/department-of-veterans-affairs/va.gov-team/assets/71290526/1566a6d3-eadb-4047-b6f8-7a896359df97)

### Access token to access protected resources on other servers:
![Untitled 3](https://github.com/department-of-veterans-affairs/va.gov-team/assets/71290526/38b522c5-ac29-45af-8938-22202338afdb)

### Overall Journey

- Service Account sets up an integration
- Create a Sign in Service `AccountConfig` object
    - `account_id` is a random uuid describing the integration
    - `scope` is an array of permissions that this integration is allowed to access. Permissions will be a URL and optionally a action (if the resource server is set up to receive it). For example, to access Sign in Service Client Config resources, the scope would be: `[https://api.va.gov/v0/sign_in/client_config](https://api.va.gov/v0/sign_in/client_config)` (or whatever we set as the URL for that route). If we decided we needed granularity for read versus write, the scopes would be: `[[https://api.va.gov/v0/sign_in/client_config:WRITE](https://api.va.gov/v0/sign_in/client_config:WRITE), [https://api.va.gov/v0/sign_in/client_config:READ](https://api.va.gov/v0/sign_in/client_config:READ)]`
    - `description` is just a text description of the integration
    - `certificates` is an array of public certs provided by the service account
    - `access_token_audience` describes the issuer of the assertion
- Service Account makes a request to Sign in Service for an access token
    - Create an Assertion JWT
        - `iss` is the url of the Service Account
        - `scope` is space delimited set of requested permissions. These must be a subset of the `scope` in the `AccountConfig` object
        - `aud` is the url for the Sign in Service `/token` endpoint
        - `exp` is an expiration time set in the future
        - `iat` is JWT creation time
        - `sub` is the unique identifier of the user requesting the delegated access (optional)
        - `account_id` is the `account_id` created in the `AccountConfig`
        - `jti` just a random number
    - Call Sign in Service `/token`
        - `grant_type` is `urn:ietf:params:oauth:grant-type:jwt-bearer`
        - `assertion` is the Assertion JWT described above
        - Sign in Service will validate the Assertion JWT
            - make sure JWT is signed by the Service Account, using the `certificates` in the `AccountConfig`
            - make sure that the JWT is not expired
            - make sure that the requested set of `scope` is a subset of the `scope` in `AccountConfig`
    - Response is an Access Token JWT
        - `iss` is the Sign in Service issuer ‘[va.gov](http://va.gov/) sign in’
        - `aud` is the url of the original Service Account issuer
        - `jti` is a random number
        - `sub` is the unique identifier of the user requesting the delegated access (optional)
        - `exp` is an expiration time set in the future
        - `iat` is the creation time
        - `version` is set to `v0` or `v1` or whatever
        - `scope` is the `scope` from the Assertion JWT, assuming the value(s) matched with `scope` in the `AccountConfig`
    - Service Account makes a request to access a resource on a separate protected server
        - `access_token` is the Access Token JWT described above
        - Protected server will validate the `access_token`
            - make sure JWT is signed by the sign in service
            - make sure that the JWT is not expired
            - make sure that the `scope` matches the expected permissions for the requested resource

### Notes

- This leverages less of the existing Sign in Service than I initially stated:
    - will need a new table for `AccountConfig`
    - the assertion JWT looks different than the `private_key_jwt`
        - we may have to use a different JWT decoder
    - the response `access_token` from Sign in Service is different with this flow
    - there will be no session or `refresh_token` created
