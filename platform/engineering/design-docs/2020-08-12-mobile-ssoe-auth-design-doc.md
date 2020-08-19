# Mobile SSOe Auth Design Doc

**Author(s):** Alastair Dawson, Jonathan Julian  
**Last Updated:** August 12th, 2020  
**Status:** **Draft** | In Review | Approved  
**Approvers:** Andrew Gunsch, John Paul Ashenfelter, Michael Fleet 

## Overview

### Objective
Allow VA Mobile App users, authenticated via the IAM SSOe identity provider, to consume endpoints in api.va.gov

### Background
A flagship mobile app for the VA is being developed to augment services available on va.gov with unique mobile features 
such as notifications and biometric sign-in. The VA’s Identity and Access Management System (IAM) maintains a Single Sign On 
identity provider/service for external apps (SSOe). Web clients can currently establish VA.gov sessions from SAML, Okta, 
and across vites via SSO. To enable the mobile app to consume api.va.gov endpoints we’ll allow mobile SSOe signed requests 
to also create and use VA.gov sessions.

Currently in vets-api all web client session (from va.gov) logic is managed in the `AuthenticationAndSSOConcerns` concern 
that is mixed in to the main `ApplicationController`.  API sessions (from lighthouse) are managed in the `OpenidApplicationController`.

The main difference between the two are that session extension/expiration for web requests are handled in the app while API 
session TTL is part of the token payload.

### High Level Design
When launching the mobile app for the first time a call is made to IAM OAuth service's `../authorise` endpoint. 
This returns a refresh auth token that lasts for 30 days. Then, and after all logins during that window, the app makes
a call to IAM's `../token` endpoint to retrieve an access token which signifies that a IAM session has been created.
The mobile app will include that access token in a Bearer authorization header for all requests to vets-api.
When vets-api receives a request with that mobile auth header it will first lookup a session in redis by the access token.
If a session is not found vets-api will use a `IamSsoeService` (draft PR [here](https://github.com/department-of-veterans-affairs/vets-api/pull/4665)) to call IAM's `../introspect` endpoint which both
validates and returns traits for a user.

<img src="images/mobile-ssoe-auth/mobile_ssoe_auth_sequence.png" alt="mobile auth sequence diagram" width="700"/>

The user traits returned by the instrospect endpoint are similar to those returned by ID.me and MVI and can be used to
instantiate a user profile. We will create an adapter class or method to map the fields to a user profile.

```json
{
  "fediamtransaction_id": "5eWibth5T4By92LinZBrcRi+dMHCkde5bhzwwVeOmPI=",
  "fediam_is_delegate": "false",
  "fediam_birls_number": "796121200",
  "birthdate": "1970-08-12",
  "fediamss_issue_instant": "2020-08-05T21:48:38Z",
  "fediam_mviicn": "1008596379V859838",
  "fediam_street": "1700 University Boulevard",
  "fediamsecid": "0000028114",
  "client_id": "VAMobile",
  "fediam_country": "NOT_FOUND",
  "fediam_gender": "MALE",
  "exp": 1596667726,
  "code_challenge": "tDKCgVeM7b8X2Mw7ahEeSPPFxr7TGPc25IV5ex0PvHI",
  "fediam_street1": "1700 University Boulevard",
  "fediam_do_dedipn_id": "1005079124",
  "fediam_gc_id": "1008596379V859838^NI^200M^USVHA^P|796121200^PI^200BRLS^USVBA^A|0000028114^PN^200PROV^USDVA^A|1005079124^NI^200DOD^USDOD^A|32331150^PI^200CORP^USVBA^A|85c50aa76934460c8736f687a6a30546^PN^200VIDM^USDVA^A|2810777^PI^200CORP^USVBA^A|32324397^PI^200CORP^USVBA^A|19798466a4b143748e664482c6b6b81b^PN^200VIDM^USDVA^A|796121200^AN^200CORP^USVBA^",
  "active": true,
  "fediamauth_n_type": "IDME",
  "fediam_not_on_or_after": "2020-08-05T21:53:42Z",
  "aud": "VAMobile",
  "fediam_mcid": "WSSOE2008051748411450069042554",
  "fediamidsource": "ssoe",
  "fediam_vaafi_proof_authority": "FICAM",
  "phone_number": "(858)335-0190",
  "tokens_generated_by": "OAuth AZN Code Flow",
  "fediamissuer": "https://int.eauth.va.gov/isam/sps/saml20idp/saml20",
  "fediamproofing_auth": "FICAM",
  "fediam_authentication_method": "http://idmanagement.gov/ns/assurance/loa/3",
  "fediamam_eai_xattr_session_lifetime": "1596667722",
  "fediam_suffix": "NOT_FOUND",
  "sub": "0000028114",
  "fediam_mhvien": "NOT_FOUND",
  "fediam_authentication_instant": "2020-08-05T21:48:42Z",
  "token_type": "bearer",
  "fediam_common_name": "va.api.user+idme.008@gmail.com",
  "scope": "openid",
  "fediam_postal_code": "78665",
  "fediam_vaafi_csp_id": "200VIDM_19798466a4b143748e664482c6b6b81b",
  "fediam_pn_id": "796121200",
  "fediam_pn_id_type": "SSN",
  "iat": 1596664126,
  "email": "va.api.user+idme.008@gmail.com",
  "code_challenge_method": "S256",
  "given_name": "GREG",
  "middle_name": "A",
  "fediamassur_level": "3",
  "fediam_not_before": "2020-08-05T21:43:42Z",
  "fediam_prefix": "NOT_FOUND",
  "fediam_state": "TX",
  "fediam_city": "Round Rock",
  "fediam_pid": "32331150,2810777,32324397",
  "family_name": "ANDERSON",
  "username": "0000028114"
}
```

Mobile sessions are a hybrid of web sessions and api sessions. Like web sessions they are first class citizens. 
i.e. they do not have restrictions on which endpoints they can call. However they will have their TTL managed 
externally by the IAM auth service.

#### Refactoring

The main `ApplicationController`, which extends `ActionController::API` has a lot of shared error handling 
but also includes methods which only apply to some controllers. It's auth mixin `AuthenticationAndSSOConcerns` 
is specific to va.gov and would not apply to the mobile endpoints and is currently ignored 
(`skip_before_action(:authenticate)`) by some Lighthouse endpoints.

The proposed solution is to create a concerns for each type of shared logic. This enables two (ruby flavored) refactors;
composition over inheritance and polymorphism over conditionals. Classes only compose in the logic they need
and by doing so don't have to conditionally run, or not run, sections of code.


## Specifics

### Detailed Design
There are four types of logic currently in the `ApplicationController`. Error handling, CSRF, Logging, and Background Jobs.
A concern would be created for each type, including the `AuthenticationAndSSOConcerns` that would be five modules
that could be mixed in as needed:

 - AuthenticationAndSSOConcerns
 - ErrorRenderingConcerns
 - LoggingConcerns
 - CSRFConcerns
 - BackgroundJobConcerns
 
 Then each `ApplicationController` - va.gov REST, va.gov FHIR, Lighthouse, and Mobile - could compose only the concerns they needed.
 This would remove all `skip_before`, `skip_after` logic which is a way of conditionally not running code rather than 
 using polymorphism to allow the class to include and run the right code. If slightly different concern behavior is needed
 the module can create it's own custom concern; e.g. a FHIR controller could have its own `ErrorRenderingConcerns` module.

#### Mobile Auth Specifics
A new `MobileAuthenticationAndSSOConcerns` would use a `IamSsoeAuth::Service` (draft PR [here](https://github.com/department-of-veterans-affairs/vets-api/pull/4665)) to validate sessions:

```ruby
def validate_session
  return true if @current_user.present?
  
  introspect_response = IamSsoeAuth::Service.new.post_introspect(token)
  @current_user = build_user(introspect_response)
  @current_user.present?
end

def build_user(introspect_response)
  # build session, user, and profile objects
  # then persist the user...
  user = User.save
  user
end
```

### Code Location
Code will live in the [vets-api](https://github.com/department-of-veterans-affairs/vets-api) repo. IAM auth code will be located in lib/iam_ssoe_auth as in the [draft PR](https://github.com/department-of-veterans-affairs/vets-api/pull/4665).

### Testing Plan
- Like MVI IAM's OAuth team requires a live demo to move up environments
- Updated and new specs for session creation
- Integration tests first on a review instance then staging (may require the rollback dance if staging testing requires more than a day)

### Logging
- New log lines and metrics around the type of session created.
- Log errors when session creation fails or are unexpectedly not found.
- Log auth attempts that do not originate from the mobile app.

### Debugging
- TODO: Link to review instance/staging rails console instructions
- TODO: Link to mobile build instructions, logging details
- TODO: Check on access to IAM logs, add IAM point of contact

### Caveats
_To be determined._

### Security Concerns
Access Token seems shorter than most in the wild e.g. Amazon's is 350 chars long. Session highjacking through brute force would be harder if it was longer. Session hijacking and replay attacks could be mitigated by [binding the access token to the TLS connection](https://medium.facilelogin.com/oauth-2-0-token-binding-e84cbb2e60).

While it extends beyond API security some anti-tampering services can detect if requests are coming from an app that has been modified.

### Privacy Concerns
The API will deliver the same PII to the mobile app that it does to va.gov. New logging should be tied to anonymous user session identifier rather than PII. Some security measures employed by private sector apps infringe on privacy. Measures such as validating requests through device fingerprinting would violate the VA's PII policies. 

While it's up to the end user to protect their phone, should a phone be stolen/compromised an option to disable long-term refresh tokens from va.gov (or by the call-center) would protect the affected veteran's data.

### Open Questions and Risks
- Does IAM SSOe OAuth support TLS token binding?
- Do VSP/VFS developers have access to IAM logs?

### Work Estimates
- IAM SSOe Service (in [draft PR](https://github.com/department-of-veterans-affairs/vets-api/pull/4665))
- Staging environment configuration (2 days)
- Production environment configuration (2 days)
- Create base `SessionManager` and `WebSessionMananger` (1 week)
- Create `MobileSessionMananger` (1 week)
- IAM Dev approval test (1 day)
- IAM Staging approval test (1 day)
- IAM Prod approval test (1 day)
- Staging QA/UAT (2 days)
- Production QA/UAT (4 days)

### Alternatives
- Okta: Okta and the lighthouse API paths were considered for auth. Okta's cost/user, SSOe's momentum at VA, and the greater number of endpoints that would have to be rebuilt worked against Okta as an auth choice.
- SSOe with a mobile only controller: A dedicated mobile API may still be an option. At this time leveraging or versioning existing endpoints gets us to a MVP faster.

### Future Work
The work outlined in this PR would complete the mobile auth flow.

### Revision History

Date | Revisions Made | Author
-----|----------------|--------
Aug 14, 2020 | Initial Draft | Alastair Dawson
Aug 17, 2020 | Add Security, privacy and work estimates sections | Alastair Dawson

