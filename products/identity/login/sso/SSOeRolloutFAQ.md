# VA.gov-SSOe Rollout FAQ
POCs: Ambika Roos, Patrick Vinograd

## General Logistics
#### What is happening?
We are integrating the VA.gov sign-in process with VA's SSOe system. 

#### Why is this change happening?
SSOe is the default login system for other web sites at VA. By integrating VA.gov's sign-in process with SSOe, we can improve session continuity as users navigate across sites. So users who are logged in in one place do not have to re-authenticate when navigating to another site.

#### So is ID.me going away?
No. All VA.gov sign-ins will continue to be routed to ID.me as an identity broker, just  that the requests will pass through SSOe along the way. This extra step will allow SSOe to establish a session cookie in the user's browser that will let them be logged in when they navigate elsewhere.

#### What about MHV and DSLogon?
Likewise, the MHV and DSLogon credentials will still be available when signing in to VA.gov. 

#### When is this going to be launched in production?
TBD. We have been working carefully with the IAM team that operates SSOe to ensure all of the VA.gov sign-in variations (across credential types, different levels of assurance, etc) are accounted for. We are working through some remaining integration issues, followed by thorough testing across all environments.

The goal on the table has been to have this in place in time for Cerner's IOC1 event at the end of March 2020.

#### How will this be rolled out?
We plan to use the feature flagging mechanism to first roll this out to a subset of users to test, then enable it for a percentage of users, and roll it out completely once we are confident any lingering issues are addressed.

Because the current feature flagging mechanism applies to authenticated users and we by definition don't have authenticate users when we trigger sign-in, this will require an enhancement to the feature flagging mechanism, as described in https://github.com/department-of-veterans-affairs/va.gov-team/issues/4648

## User Impact
#### Will this change the user experience for login to VA.gov?
Generally no. The goal has been for the extra hops to SSOe to be transparent to the user, and to maintain VA.gov's overall sign-in user experience. In practice, observant users will notice some additional browser redirects during the sign-in process, and depending on the latency of various systems may see some interstitial screens rendered by SSOe. But these screens don't have any clickable elements or user interaction required.

It's also possible that some error states can result in a user seeing an error screen presented by SSOe. SSOe does let us define an error screen to which they will attempt to redirect users, but computers being what they are, we're not 100% confident that this redirect will be accounted for in every error case.

#### Will VA.gov users be sent to AccessVA?
No. AccessVA (https://access.va.gov/accessva/) is the IAM-built web interface to SSOe (some applications route all sign-ins through that, some present their own native sign-in interface). VA.gov will not appear among the application catalog on AccessVA, and other than the interstitial "loading" screens mentioned above will not interact with AccessVA.

#### Does this solve SSO completely for everyone, everywhere?
No. This is an incremental update that improves interoperability across VA. But there are limitations. Specifically there are some combinations of credential, level of assurance, and navigation patterns where users will have session continuity across sites, and some where they won't. Examples:<br/>
* Users starting at VA.gov and navigating elsewhere will generally be logged in at their destination. But, most other VA sites only accept LOA3 users, so LOA1 users on VA.gov won't have session continuity.
* Users starting at a site like MHV and navigating to VA.gov will generally be logged in without issue at VA.gov if they are LOA3, and if they are either using an ID.me credential or have signed in to VA.gov in the past.
* Users starting at a site like MHV and navigating to VA.gov who have not signed in to VA.gov with their DSLogon or MHV credential since August 2018 will need to do a one-time re-authentication. This step is needed to match any existing data they may have on VA.gov that is currently indexed under an ID.me identifier (since ID.me brokers MHV and DSLogon credentials for VA.gov). This issue is described in more detail in  https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/request-for-comment/2020-01-17-sso-symmetry-and-identifiers.md

**What Works, What Doesn't**
| Scenario | Expected Outcome | Status/Other Notes |
| --- | --- | --- |
| Sign in to VA.gov with any LOA3 credential (ID.me/MHV/DSL), then navigate to MHV or Cerner | Arrive at MHV/Cerner in logged-in state. | Works, but as of 10/1/2020, only rolled out to 5% of users | 
| Sign in to VA.gov with a DSLogon credential, then navigate to eBenefits | Arrive at eBenefits in logged-in state | Awaiting go-ahead from eBenefits team to enable SSOe-based linking. |
| Sign in to VA.gov with an ID.me/MHV credential, then navigate to eBenefits | Arrive at eBenefits in logged-in state | Awaiting go-ahead from eBenefits team to enable navigation with these credentials. |
| Sign in to VA.gov with any LOA1 credential, then navigate to MHV or Cerner | Error due to insufficient assurance | Functioning as expected, IAM gates non-LOA3 access to these sites | 
|  Sign in to MHV using their IAM SSOe sign-in, then navigate to VA.gov | Arrive at VA.gov in logged-in state. | Functioning, rolled out to 100% of users. "Auto-login" functionality ensures VA.gov session gets established. |
|  Sign in to MHV using their native MHV sign-in option, then navigate to VA.gov | *Not signed-in at VA.gov* | Functioning as expected, no SSOe session is established hence user is not logged in to VA.gov when they arrive. |
| Sign in to Cerner, then navigate to VA.gov | Arrive at VA.gov in logged-in state. | Functioning. "Auto-login" functionality ensures VA.gov session gets established. Sign in to Cerner is via VA.gov static login page (https://www.va.gov/sign-in) |
| Sign in to eBenefits, then navigate to VA.gov | Arrive at VA.gov in logged-in state. | Will work if sign in to eBenefits was via SSOe, which should be most cases. |
| Arrive at VA.gov with no SSOe session | User remains logged out; if a latent VA.gov session is present it will be terminated. | Functioning as expected. "Auto-logout" functionality ensures latent VA.gov session is terminated. | 

#### What if users need help or have trouble signing in?
[TK] Need to make contact center aware of this change and any new error screens/messages/content that might be added.

## Developer/Implementation Impact
#### How is this actually working under the hood?
We are adding SSOe to the chain of SAML identity providers. VA.gov makes a SAML authentication request to SSOe; SSOe then forwards that request to ID.me (which may optionally forward that request to MHV or DSLogon for those credentials). After the user authenticates, the responses are returned from ID.me to SSOe to VA.gov. Along the way, SSOe can do two things: augment the response payload with data from MVI and set an SSOe session cookie in the user's browser. 

#### Can I still exercise login from my local environment?
Yes. A VA.gov "localhost" configuration is available in IAM's PINT environment (which in turn connects to ID.me's sandbox environment). The PINT environment is available off-VA-network and therefore usable from a local development environment.

#### Do we still make calls to MVI?
Eventually, we want to reduce the MVI calls made by VA.gov See this RFC: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/request-for-comment/2020-01-08-ssoe-removing-implicit-mvi-queries.md. Primarily, we want to eliminate the routine MVI query that happens on every sign-in event, as it is largely redundant when we get an MVI-augmented SAML response from SSOe.

#### What about mock data, either locally or in dev?
Since the SAML request/response is all mediated through the user's browser, we can't mock the SSOe interaction the same way we mock other upstream data connections. Since we currently mock MVI queries locally and in dev, this means that by default we'd lose any of the mock data customizations we've made to MVI responses.

To mitigate this, we plan to add a configuration mechanism (intended to be enabled in dev and local environments) that tells vets-api to still perform the MVI lookup during sign-in, and override the values provided in the SSOe SAML response. Combined with having mocking enabled this will mean that developers can still adjust MVI data in those environments. 

#### So is ID.me still our Identity Provider, or SSOe?
Why not both? In strict protocol terms, the immediate SAML request that vets-api makes is to SSOe, and the SAML response that comes back is issued by SSOe. But, we expect to receive a response that is brokered through ID.me. SAML supports this notion of federated or proxied SAML requests so while we are adding complexity we are not operating outside of accepted norms. 
| 
#### Are we still doing multiple SAML requests for LOA1 and LOA3?
Yes. The up-leveling process of authenticating a user at LOA1 and then optionally re-authenticating them at LOA3 remains as-is. vets-api also retains the contract it has with ID.me for selecting the credential. 

We are investigating a longer-term change where ID.me provides "best-available" level of assurance for the user without requiring two SAML round trips, but that idea is not attached to the near-term roll-out of SSOe integration.

## Operations Issues
#### Does this introduce a hard dependency on SSOe?
Yes. SSOe will now be the endpoint to which authentication request are directed, and is responsible for issuing the authentication response. If SSOe is unavailable or experiencing high latency or other reliability issues, that will affect VA.gov users. 

There is no current plan to have a fallback that goes directly to ID.me. We will retain the v0 session controller code that does this for some amount of time and can assess overall reliability of SSOe as we roll out.

#### How can we monitor SSOe and connect it to downtime notifications?
Since the SAML request is mediated through the user's browser we don't have any Breakers-style monitoring. We can do a few things:

* Monitor for deviations in the authentication rate, similar to  what we do for DSLogon.
* Add a health check to an appropriate SSOe endpoint for overall availability even if it's not entirely in-band with the SAML request flow.
* Add application level monitoring for "CSP-only" responses that indicate whether SSOe is able to augment the SAML response with data from MVI.

#### Has this been load tested?
Not yet. IAM typically does capacity planning and load testing based on expected load and we have provided VA.gov authentication metrics to them. 

For MVI in particular, we are eliminating most of the load generated by vets-api since SSOe will perform that query in the process of issuing a SAML response.

