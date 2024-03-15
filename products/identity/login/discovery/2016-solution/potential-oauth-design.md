# Post Veterans Day Work
Most of the material here was written by Shauni before we decided that we were not going to pursue OAuth 2.0 for the Nov 11 release of vets-api.

## Background
Our current implementation of granting "Vets.gov session tokens" to a client based on a valid SAML assertion is very similar to the SAML Bearer flow defined in the [SAML Profile for OAuth 2.0](https://tools.ietf.org/html/draft-ietf-oauth-saml2-bearer-23) draft specification. This design document details the current implementation and lays out the steps required to bring it in line with the specification. Supporting the SAML Profile via an established OAuth 2.0 library provides the following features/benefits:
- Flexibility to add third-party clients on various platforms (web, mobile)
- Flexibility to add other identity providers (including vets.gov managed user accounts)
- More fine-grained control over the session token:
  - the current token is tied only to a user, implementing OAuth would also add associate the token with a client application ID
  - issue tokens with explicit and variable length expiration (current token TTLs are set implicity and uniformly to 1 hour)
  - set scope on tokens with different levels of authorization
  - ability to revoke tokens per application or before they expire
The security profile/implications are not substantially different between the current implementation and an OAuth 2.0 implementation.

### Terms & Roles
For the purposes of this design we are assuming one client and one identity provider.
- **Client [Application]:** The single page JavaScript applications served from `www.vets.gov`. This is a "public" client - since all information is sent to the browser, the code cannot contain any secrets.
- **[End-]User:** The veteran who is logging in to access her information and transact with the VA
- **Identity Provider:** ID.me
- **Authorization Server:** Rails application running at `api.vets.gov`.
- **Resource Server**: Rails application running at `api.vets.gov` (may delegate to other VA internal systems)

### OAuth2 SAML Bearer Flow Proposal
From the client perspective, not much changes with the OAuth2 flow. There is a new token endpoint that conforms to the spec that requires an additional parameter. The returned token now has OAuth2 semantics attached to it and comes with explicit expiration. Since OAuth2 tokens are per client application, we may hardcode one client id for `www.vets.gov` to start and later add the ability for multiple client ids. The diagram below show the steps that change in the new flow:
![Proposed Auth Flow](oauth_saml_flow.png)

The bulk of the changes are in the backend (Vets API) to support OAuth2 and implement the ability to extend to other identity providers and client applications.

### OAuth Request
Once the client app obtains a valid SAML Assertion from ID.me, it can make a request to the API to exchange it for an OAuth token:
```
POST /oauth/token
Host: api.vets.gov
Content-Type: application/x-www-form-urlencoded

grant_type=urn:ietf:params:oauth:grant-type:saml2-bearer&
assertion=XXYZabcd...
```

### OAuth Response
Once the SAML Assertion has been validated, Vets-API will respond with an OAuth 'access_token'. We recommend including the optional `expires_in` field, so the client can intelligently renew their session. A refresh token is not typically included in the SAML flow. The client may issue a new token request with the same assertion, or if the assertion has expired, they will need to re-execute the login/grant flow with the identity provider to obtain a new assertion.

Sample JSON response:
```
{
  "access_token":"exampleAccessTokenValue123",
  "expires_in":3600
}
```
Sample error response:
```
{
  "error":"invalid_grant",
  "error_description":"Audience validation failed"
}
```

The error will always be `invalid_grant`, and the description may contain the specific reason the assertion failed.

### OAuth2 Implementation
We recommend using the [Doorkeeper gem](https://github.com/doorkeeper-gem/doorkeeper/) to implement OAuth2 functionality in Vets API. This requires adding a SAML strategy to doorkeeper which remains an [open issue](https://github.com/doorkeeper-gem/doorkeeper/issues/764). We may decide to fork Doorkeeper and add the required changes to support the SAML bearer flow, so we can pursue contributing our solution back to Doorkeeper in parallel without blocking delivery of our OAuth2 implementation.

We may need some custom code in order to skip or fake the normal AuthZ & AuthN that Doorkeeper expects in order for it to return our access_token once we have validated the SAML Assertion. (See: [skipping application authorization](https://github.com/doorkeeper-gem/doorkeeper/wiki/Skipping-application-authorization)). A cleaner implementation would be to implement the SAML Bearer flow into the Doorkeeper gem.

Doorkeeper expects to integrate with ActiveRecord to access the User model. The current Vets API stores users ephemerally in Redis with ActiveModel. ActiveModel integration may be an additional challenge/risk of the Doorkeeper implementation. It may be a good time to consider storing a small bit of user information with our own vets.gov unique identifier more permananently in a SQL store (more details in [this issue](https://github.com/department-of-veterans-affairs/platform-team/issues/121)).

#### Level of Effort - 2 weeks
The integration with Doorkeeper will be the majority of the work, roughly estimated at 1 week (1 developer). Updating the clients to the new flow should take an additional 2 days, with a few days reserved for integration testing. With a few days of buffer, complete development should take about 2 weeks.

### Security Considerations
The security considerations for this proposal are similar to that of the current design. Specifically, there is one major security concern present with both flows that needs to be mitigated with the user experience design around logout. Since the ID.me session is independent from the vets.gov session (tracked by a separate ID.me browser cookie), it is possible to log out of vets.gov and then log back in without requiring the user to re-enter their username and password (the situation described [here](https://github.com/department-of-veterans-affairs/vets-api/issues/38/#issuecomment-242487727)). One option is to force sign out of ID.me when the user logs out of vets.gov, but that will break single sign on of any other website the veteran uses their ID.me credentials to log into. Note that closing the browser window will not clear the ID.me session cookie (which has an expiration of a day). The most promising option is to send a parameter as part of the SAML request to force the user to re-enter their credentials on ID.me even if the browser has a valid ID.me session cookie (this work is tracked in [issue #123](https://github.com/department-of-veterans-affairs/platform-team/issues/123)).

Similarly, if a veteran signs out of ID.me or their ID.me cookie expires before their Vets.gov session expires, their access to Vets.gov will be unaffected.

## Future Work
The detailed design of adding new identity providers and third-party clients is out of scope for this document. However, implementing support for OAuth2 via the SAML bearer flow leaves ample flexibility to extend this design to other identity providers (including our own vets.gov managed identities) and third-party applications.

### Adding 3rd-party Clients
The setup of third-party clients will depend on whether they are a public client (JS only) or whether they wil have a server-to-server interaction with our API. In the case of public clients, the setup can be similar to the `www.vets.gov` configuration, where the client is added as a Relying Party with ID.me and the SAML validation still happens at the Vets API. The `/sessions/new` endpoint in step 3a above would have to be extended to return SAML requests formatted per client (client id could be passed as a URL parameter).

Third party clients that do not need to log in on behalf of the user would just get an application-only OAuth2 token and would not need to implement that SAML flow.

## References
1. https://tools.ietf.org/html/draft-ietf-oauth-saml2-bearer-23
2. https://www.safaribooksonline.com/library/view/oauth-20-identity/9781783285594/
3. https://github.com/department-of-veterans-affairs/vets-api/issues/38/
