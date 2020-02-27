# RFC: Removing implicit MVI lookups

- Date: _2020-01-08_


## Background
At present, when a user authenticates and is determined to be Level of assurance 3, we look up that user's VA profile in MVI (aka MPI, used interchangeably hereafter). The combination of the incoming attributes from the identity provider and the attributes from MVI make up the bulk of the logical user model that is used across vets-api.

As part of the overall SSO consolidation work, we are integrating VA SSOe with the VA.gov sign-in process. We will maintain the three current credential options, but the SAML request/response cycle will be intercepted by SSOe before being returned to VA.gov. Along the way, SSOe can establish a session cookie for use by other sites. But more importantly, SSOe will provide a standardized SAML payload that includes attributes from the credential provider AND from MVI. 

Since we will be receiving the bulk of the MVI attributes in the SAML payload, we want to determine whether we can and should do away with the separate MVI query that normally happens immediately following authentication.

## Motivation
Given that we will receive a SAML payload with most of the needed information from MVI already, doing a separate query to MVI is largely redundant, and adds latency to the sign-in process (though note we're likely swapping added latency during the SAML round-trip for the MVI query latency).


## Design
In general, MVI attributes are accessed via the `User` model, either as direct delegated methods on `User` (e.g. `user.icn`), or as nested delegated methods on `User.va_profile` (e.g. `user.profile.address). Both of these eventually delegate to the `mvi.profile` attribute on `user`, which is an instance of `MviProfile`.  

We can instead instantiate a MviProfile object by parsing the incoming SAML attributes and delegate to that directly from `User.va_profile`. Initially we'll want to do so selectively for SSOe authentication so we can support old and new authentication mechanisms during roll-out. 

There are also a couple of examples where either `User.mvi` is dereferenced, or a separate `Mvi.for_user` is invoked. These should be cleaned up to use the same call path as the bulk of cases that call via User.va_profile. 

Today, MVI responses are cached separately from incoming SAML attributes, with a longer cache TTL. This is done in order to reduce load on MVI. With this change, the MVI-equivalent attributes that arrive in the SAML payload will be cached in the user_identity cache with the same TTL as a user's authenticated session. 

### Simple Attribute Replacement
The following attributes are currently looked up from MVI and have a 1:1 equivalent in an SSOe SAML payload:

| MVI Profile Attribute | SSOe SAML Attribute | Notes |
| --- | --- | --- |
| given_names | va_eauth_firstname + va_eauth_middlename | |
| family_name | va_eauth_lastname | |
| suffix | va_eauth_suffix | |
| gender | va_eauth_gender | |
| birth_date | va_eauth_birthdate_v1 | |
| ssn | va_eauth_pnid | |
| address | va_eauth_address + city + state + postalcode | |
| home_phone | va_eauth_phone | |
| full_mvi_ids | va_eauth_gcids | Provides full set of correlated identifiers, pipe delimited |
| icn | va_eauth_icn | |
| icn_with_aaid | va_eauth_gcids | Need to parse out from gcids |
| mhv_ids | va_eauth_gcids | Need to parse out from gcids |
| active_mhv_ids | va_eauth_gcids | Need to parse out from gcids |
| vha_facility_ids | va_eauth_gcids | Need to parse out from gcids |
| edipi | va_eauth_dodedipnid | Preserve sanitize logic |
| participant_id | va_eauth_pid | Preserve sanitize logic |
| birls_id | va_eauth_birlsfilenumber | Preserve sanitize logic |
| sec_id | va_eauth_secid | |
| vet360_id | va_eauth_gcids | Need to parse out from gcids |


### Unknown/Missing Attributes
The following attributes are currently looked up from MVI but do not appear to be present in the SSOe SAML payload. Their uses are described

| MVI Profile Attribute | SSOe SAML Attribute | Notes |
| --- | --- | --- |
| historical_icns | (Not Present) | Prior/replaced ICNs are available elsewhere in the payload of an MVI find person result. This attribute is used in two places: lib/vic/service.rb (for the VIC v2 application that was never launched) and app/models/gi_bill_feedback.rb, for the GI Bill Feedback tool. |

Both of the above services submit data to Salesforce. Probably Salesforce is indexing something on ICNs and needs to be robust to ICNs changing over time.  Proposed solution for this attribute is to look it up with an explicit query to  MVI when it is needed.

### Other MVI Interactions
There are some additional MVI interactions that break the usual pattern of a query during sign-in and subsequent read-only use of attributes:

1. **VA Profile MVI Cache Busting**
The  `V0::Profile::PersonsController` class has an after_action decorator that invalidates the current cached MVI data. This is done because there are certain interactions with the VA Profile upstream service that modify data in MVI. By busting the cached data for a user, any subsequent read of an MVI attribute will result in a new MVI query that will reflect the modified data.<br/>
The proposed resolution for this use case is to perform an explicit MVI lookup and use the results to update the MVI fields that are cached with the session in `user_identity`. The explicit MVI lookup mechanism should be divorced from the current Redis cache_aside system so that we don't cache the MVI response as a whole. We should limit the updating of `user_identity` to the fields that are known to be updated as a result of any VA Profile interactions. 

2. **526 Add Person Requests**
The 526 (Disability compensation) application is currently adding a feature that performs an MVI `Add Person` request to establish several new identifiers for a user in MVI. Performing an `Add Person` requires a search token that can be obtained by performing an MVI query for a user. The token has a short expiry, meaning the `Add Person` request must be issued within 60 seconds of the MVI query.<br/>
So, regardless of the SSOe integration, this feature would require the ability to perform an explicit MVI lookup and ignore any cached results (because of the search token expiry). So the proposal is again to perform an explicit MVI lookup. If the 526 application needs to consume the new identifiers, then it likewise can update the `user_identity` cache (aka the session) with the relevant identifiers obtained from the lookup + add person process.

3. **Healthcare Application MVI attr_service**
The healthcare application implements a totally parallel MVI service with a separate configuration from the one used by vets-api at large. This is really a development environment workaround, to solve the problem of unreconcilable environment mappings between vets-api, MVI, and the HCA system. This application performs an explicit MVI lookup using its own service configuration and will not be impacted by any of the above changes.

4. **(Future) Delegation Lookups**
VA.gov is likely to introduce delegation features powered by MVI in the future. These let user A delegate access to their information to user B. Record of that delegation is recorded in MVI, and a flag on a user record indicates whether someone is a delegate.<br/>
The isDelegate flag is present in SSOe SAML assertions, so the login flow an account for delegation. The next step of selecting a delegatee on behalf of whom to act, will likely require one or more additional explicit MVI requests which likewise should be separated  from the Redis cache_aside mechanism.

5. **OAuth Flow - Lighthouse**
SAML authentication and MVI resolution is also performed in the context of the Lighthouse OAuth flow. MVI is queried by an API endpoint triggered by the SAML proxy, and cached MVI data is used when serving OAuth-protected API requests.<br/>
At this point, there is no intent to integrate SSOe with the OAuth SAML interaction. Signing in to authorize an OAuth application will not establish an IAM session.<br/>
Current proposal for the OAuth code path is to leave the MVI caching mechanism in place. This will mean that the `User` model definitely needs to remain robust to `va_profile` being populated either from an SSOe SAML payload or from an MVI lookup for the indefinite future. We should audit all of the OAuth-protected APIs to reconcile uses of various delegated methods on `User` to make sure there are no conflicts.

### Development Concern - Mock Data
We currently mock a wide range of backend service requests in our dev environments using the Betamocks library.  This insulates dev from unreliable backend systems, but also lets us customize responses for certain users in order to simulate different response scenarios.  This mocking includes the MVI requests that are done during sign-in.

With the above change, we would not easily be able to mock the MVI data. Because the SAML requests/respones are mediated by the user's browser, Betamocks is not capable of intercepting those requests. So dev would be configured to a live SSOe integration environment. This means we lose the ability to customize MVI response data, and in particular we lose any existing customizations of MVI data that have been done so far. We revert to whatever is in MVI for the SSOe environment connected to dev.

It's unclear how much of a problem this poses. We _could_ mitigate this by retaining the ability to do an MVI lookup on every sign-in (e.g. via a configuration setting) and enabling that capability in dev. The MVI lookup would point at the mocked MVI service. 

### Attribute Priority
There are several user traits that are currently available in both the incoming ID.me SAML assertion and in MVI (`first, middle, last, gender, birth_date, zip, ssn`). vets-api currently prefers the values from ID.me, and only falls back to the MVI values if the ID.me values are not present. 

With an SSOe-based SAML payload we don't have this conflict; we'll only get one value for each of these traits. Presumably this will be the MVI value. On paper this is more "correct" as MVI is the canonical source for VA identity. But we know there are cases where this data is less accurate. VA.gov loses the ability to make this trade-off and prefer one source of another; it devolves to the IAM team to address (and ideally resolve) data mismatches and fidelity issues. 

## Risks
* *Data may appear differently than before*
Where we will now be preferring attributes from MVI instead of ID.me, users may see different values for some of their data.  Typographic errors in e.g. name or other fields will be apparent. One minor but concrete example is that MVI name fields are returned in ALL CAPS and should ideally be title-cased for display to the user. IAM does currently track and store cases where data from credential providers does not match MVI, and is working with their business owners to determine what to do with this data.

* *Mismatched correlated IDs*
For cases like the MHV correlation IDs where we pick one of multiple values, it's possible that we see a different sort order for those fields via SAML than we do via an MVI query, and hence would use a different MHV identifier for the user. We should mitigate this by asking what MHV itself does for SSOe logins.

* *Additional runtime dependencies*
We are introducing a dependency on SSOe to the VA.gov sign-in process. SSOe has a transitive dependency on MVI, but is capable of still returning a "CSP-only" payload if MVI is unavailable (equivalent to the payload we'd get if MVI was down but queried directly by VA.gov).<br/>
The MVI query also has a transitive dependency (for "not found" users) on DEERS/DMDC, and instability there can have a knock-on effect on downstream systems. IAM has isolated the systems that communicate with DMDC to minimize impact; we should work with them to improve monitoring and improve their ability to dynamically enact something like a circuit breaker on this integration. 

## Alternatives
* We can continue to do a distinct MVI lookup on every authentication event, but this is highly redundant. (Note as described above in the mock data concern, we may elect to do this on a configurable basis). 
* We can not integrate SSOe with VA.gov sign-in, but this does not further VA-wide SSO objectives.
