# VA.gov API Authentication and Authorization
This design doc lays out how the va-api authenticates and authorizes clients of the API.

## Authentication
VA API interfaces with a single identity provider, ID.me, and has only one [first-party] client, the single page JavaScript applications on www.va.gov. This setup [does not require the API to support OAuth2](../../2016_Discovery_Original_Identity_Solution/potential_oauth_design.md). 

The front-end makes a request `/sessions/{type}/new` where `type` corresponds to one of the following: [mhv, dslogon, idme, mfa, verify, slo], which returns a SAMLRequest and a URL.

ID.me handles the authentication methods the user will see based on this value.
A user has a token that is stored in a sessiion cookie.  The VA API persists user data from the ID.me SAML Assertion, keyed by the UUID for 30 minutes after the last API request. MVI user data, which is queried for LOA 3 only, is persisted for up to one day in Redis. The authentication token points to a UUID and expires after one hour. Multiple authentication tokens can refer to the same user.

### Authentication Flow
The diagram below lays out example steps for a login flow necessary for a client application to access an API endpoint that requires authentication.  This example uses a user profile endpoint. If the endpoint is requested without a valid token in the cookie, then the VA API returns a `401` status code. 

To obtain a valid cookie the user must complete the ID.me login flow via a signed SAML request. When the VA API receives a valid SAML callback, it persists a unique session in Redis. The cookie is returned to the client and can be used to validate subsequent requests. 
![Current Authhentication Flow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/reference-documents/idme/authentication.png)

### SAML Request & Assertion
The SAML assertion is obtained from ID.me after a user successfully completes the ID.me login flow.


After a successful login, ID.me will serve an html page with a self-submitting form (as per [SAML Post Binding](https://en.wikipedia.org/wiki/SAML_2.0#HTTP_POST_Binding)) targeted at the pre-defined ACS url.
```
<form class="autosubmit" action="https://api.va.gov/auth/saml/callback" method="post">
  <input type="hidden" id="SAMLResponse" value="PHN5x..."/>
</form>
```

The browser POST's to `https://api.va.gov/auth/saml/callback` with the SAMLResponse and `api.va.gov` responds with a `302 https://www.va.gov/auth/login/callback`.

## Authorization
Each resource on the VA-API will be protected by a level of assurance as defined here:

| Resource                | Level of Assurance | Data Needed from MVI          |
|-------------------------|--------------------|-------------------------------|
| Facility Locator        | None               | None                          |
| Health Care Application | None               | None                          |
| Benefits Explorer       | None               | None                          |
| Education Benefits      | None               | None                          |
| User Profile            | LOA 1              | None                          |
| Prescription Refill     | LOA 3              | `mhv_id`                      |
| Secure Messaging        | LOA 3              | `mhv_id`                      |
| Disability Claim Status | LOA 3              | `edipi`, `vba_corp_id`, `ssn` 
| Vet360                  | LOA 3              | `vet360_id`

### Authorization Flow
If a client attempts to access a resource with a _valid_ cookie, but insufficient authorization they will receive `HTTP 403 FORBIDDEN` (accompanying JSON TBD - should indicate which LOA is required).  In this case, a client must veirfy their session with `GET https://api.va.gov/sessions/verify/new`
![Current LOA3 Authorization Flow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/reference-documents/idme/verification.png)
(**Note**: Diagram is auto-generated using [SequenceDiagram.org](http://sequencediagram.org) from [this source file](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/reference-documents/idme/loa1to-3-flow.uml). )

### Logout Flow
Logout of VA.gov involves a SAML Single Logout (SLO) request to ID.me.  Flow is as follows:
![Logout Flow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/reference-documents/idme/logout.png)
(**Note**: Diagram is auto-generated using [SequenceDiagram.org](http://sequencediagram.org) from [this source file](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/reference-documents/idme/logout.uml). )


By the end of Step 5, the ID.me session has been destroyed. In Step 12 the VA.gov session is destroyed and no longer exists in Redis.

## Open Questions / Concerns
Q: Should we force re-authentication when the va.gov session times out but the ID.me session has not?

A: ID.me enforces a policy at LOA 3 whereby re-authorization is always forced.
