**Note**: Most of this content is duplicated in the [original brain dump Patrick
started in July 2020](VAgovSSOBrainDump.md), so it should be used together with
that document to build a better picture of SSO within VA.gov.  Since the narrative
is different and much has changed since then, a new document was created.


# SSOe

What is [SSOe](https://github.com/department-of-veterans-affairs/va-sso/tree/master/SSOe)
and what advantages does that have over the
[original SSO implementation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/login/sso/design)
on VA.gov?

Before the SSOe integration project, VA.gov used ID.me as both the [identity 
broker](https://apicrazy.com/2014/08/04/identity-broker-service-in-saml-supporting-multiple-identity-providers-service-providers/)
and sometimes the [identity provider](https://en.wikipedia.org/wiki/Identity_provider_(SAML).
When a user elects to authenticate on VA.gov, they have the option to use MHV,
DSLogon or ID.me credentials.  For all 3 cases, ID.me was the broker, meaning
the original SAML request would be sent to ID.me, then ID.me would allow the
user to enter credentials (if the user wanted to authenticate with ID.me credentials)
or would route the request to MHV/DSLogon if the user wanted to use different
credentials.  We have used the term
[v0 authentication](https://github.com/department-of-veterans-affairs/vets-api/blob/master/config/routes.rb#L12-L14)
to describe this process.

Integrating SSOe into the VA.gov authentication pipeline kept the aforementioned
pipeline in place, however it introduced **SSOe as a second identity broker**.
Thus VA.gov would no longer directly broker a SAML request to ID.me, instead it
brokers the request to eauth.va.gov (SSOe), which then passes along the request to
ID.me.

[Sequencing diagram illustrating the difference](https://github.com/department-of-veterans-affairs/va.gov-team/blob/6c5480d3921f6fd1ac313089db82f9f2bfc5b000/products/identity/sso/security-review/SSOSecurityReview.md#sequence-diagrams)


#### A second broker

As previously mentioned, VA.gov already had an SSO solution.  However this solution only worked for VA.gov authenticated users going to Myhealthevet (MHV). VA.gov did this by creating a ".va.gov" encrypted cookie, that www.myhealth.va.gov was able to parse and auto login the user if available.  This solution was custom between the two applications, VA.gov and MHV, and didn't support other applications like eBenefits and cerner.  Additionally this was a one way street, as users who authenticated on MHV, then linked to VA.gov were not able to stay
logged in.


## Outbound Authentication

When an unauthenticated user starts the process of SSOe authentication on VA.gov, we refer to this as outbound authentication.  From the va.gov’s perspective, the user is creating an SSO session at VA.gov, so if they choose to visit (outbound) another VA application via a [proxy link](#standard-junction-(aka-eauth-proxy)), they remain authenticated.

#### Login Flow

When a user clicks the "Sign in with **[TYPE]**" button, assuming SSOe is enabled via
the the feature flag in that environment, they will be redirected to the
`/v1/sessions/<type>/new` API endpoint, this kicks off the following steps.

1. The VA.gov API server creates a SAML Request, with the appropriate
[AuthnContext](https://www.samltool.com/generic_sso_req.php).
1. VA.gov records (via app logging and statsd) a "SAML Request"
    - this tells us a user made a request to authenticate
1. VA.gov renders an [HTML POST binding form](#html-saml-post-binding)
1. VA.gov issues an AJAX call to record (via app logging and statsd) a "SAML Tracker"
    - this tells us the JS code was able to execute
1. VA.gov auto submits the HTML POST form
1. The user redirects to eauth.va.gov, ID.me, MHV and/or DSLogin to authenticate
    - during this time VA.gov is not able to collect any stats on the user's journey
1. eauth.va.gov redirects the user to `/v1/sessions/callback` with a SAML Response
1. VA.gov records (via app logging and statsd) a "SAML Response"
1. VA.gov redirects the user (unless [upleveling](#upleveling) is needed) to `/auth/login/callback`
to finish authentication within the React app


##### Type -> AuthnContext mappings

- idme:
    - "http://idmanagement.gov/ns/assurance/loa/1/vets"
    - "http://idmanagement.gov/ns/assurance/loa/3"
- mhv: "myhealthevet"
- dslogon: "dslogon"


##### HTML SAML POST binding

Pre-SSOe VA.gov used a
[redirect binding](https://en.wikipedia.org/wiki/SAML_2.0#HTTP_Redirect_Binding)
to submit the SAML Request to the identity broker.  While testing the integration
with SSOe, the IAM team discovered some caching issues with their IBM software.
To circumvent this, the IAM team requested we use a
[SAML Post binding](https://en.wikipedia.org/wiki/SAML_2.0#HTTP_POST_Binding)
to submit the SAML Request.

This works for the majority of our users, but we have noticed issues with some
browsers and extensions, causing the [Javascript to not execute](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/saml/templates/sso_post_form.html.erb#L26-L39).  The "SAML Tracker" logging was added in an attempt to measure how
prevalent this problem is, but more work needs to be done in the future to close
the gap.


##### Upleveling

When a user authenticates with ID.me credentials, in most cases it takes two SAML
round trips to fully authenticate the user.  A subset of users with ID.me accounts
have not verified their identities, thus they are only granted LOA1 access.  Most
have because many features on VA.gov require users to be verified before using.  To
allow both sets of users access, we first need to authenticate users as LOA1 users.
If the SAML Response that comes back tells us that they have NOT yet verified their
account, we authenticate and redirect the user to the VA.gov home page.  However, if
their account IS verified, we send a new SAML Request to SSOe with the LOA3
authncontext.  Upon successful LOA3 authentication (which normally shouldn't require
any user action, other than occasionally needing to accept new ID.me terms), we
will have additional attributes associated to the users MPI record in the SAML
Response.


##### Standard Junction (aka eauth Proxy)

Many of the applications within the VA, already use SSOe to broker authentication.
By having VA.gov broker authentication through SSOe, we can create "eauth.va.gov"
cookies in the process, that will allow users to maintain session continuity if
they proxy to another VA app using eauth.va.gov.

Example:

- User logs in on www.va.gov via SSOe
- User clicks on link to manage their prescriptions on Myhealthevet
- User is redirected via a proxy link
    - normal link: https://www.myhealth.va.gov/web/myhealthevet/refill-prescriptions
    - proxy link: https://eauth.va.gov/mhv-portal-web/eauth?deeplinking=prescription_refill
- The request is sent through eauth.va.gov, so the user stays logged in
- Had they just linked directly to www.myhealth.va.gov, the user will be unauthenticated

#### Cerner Authentication

Authentication into the [cerner portal](https://patientportal.myhealth.va.gov) works similar
to how VA.gov authenticates its users through SSOe.  The cerner system sends a SAML Request to
SSOe, the user enters their credentials, and a SAML Response is sent back to cerner.  However
to make the UX more consistent for our users, it was decided that our users should "initiate"
the authentication flow on VA.gov.  Thus the team create a new standalone login page just for
that, https://www.va.gov/sign-in/.  This page ONLY authenticates with SSOe (feature flags don't
change anything on this page), as our cerner users require SSOe authentication to access the
portal.  Since the authentication process starts from VA.gov, by the time the user reaches the
cerner portal they should be already authenticated, and the SAML Request sent to SSOe should
immediately results in a cached SAML Response without requiring the user to enter any
credentials.  The typical flow for this is (note there are a lot of areas for improvement in
the following):

1. User authenticates on VA.gov (note: depending on feature flag state, not all users will
    login with SSOe)
1. User navigates the site and eventually clicks on a link to the cerner portal
1. The link sends the user to a "clear session" URL (used to prevent a security vulnerability
    with users at shared computers)
    - The url will contain a query parameter with the **real url** to access once the user
        has been safely authorized
    - eg https://patientportal.myhealth.va.gov/clear-session?to=https://patientportal.myhealth.va.gov/<path>
1. The clear session page deletes any cookies the user may have and redirects them to the
    standalone sign in page with query parameters indicating which cerner path to redirect back
    to
    - eg: https://www.va.gov/sign-in/?application=myvahealth&to=/<path>
1. When the user arrives at the standalone sign in page one of two things will happen
    1. The user did not previously log in with SSOe (step 1), the page loads and waits
        for the user to click a sign in button
        1. The user initiates an SSOe login, however instead of using the standalone sign in
            page as the return URL, the JS code records the above cerner url as the
            page to load upon successful authentication
        1. The user is redirected to SSOe and beyond and completes the authentication
            process
        1. Upon returning to VA.gov, the JS code runs and redirects the user back to to
            the real cerner path
    1. The user did previously login in with SSOe (step 1)
        1. JS code runs and notices the user is already authenticated with SSOe, and redirects
            them back to the real cerner path
1. Upon landing on the cerner page, code executes to initiate a SAML request between SSOe and
    cerner.  At this point cerner is assuming that the user has already authenticated with SSOe,
    so they expect an immediate SAML Response back from SSOe containing some user attributes
1. Cerner gets the SAML Response back, and uses it to create a session cookie and fully
    authenticate the user within cerner


#### Logout Flow

When an SSOe authenticated user clicks the Sign Out button, they are redirected to
`/v1/sessions/slo/new`.  The API first destroys the **VA.gov session** if available (Note:
additional precautions were added in the summer of 2020 to allow access to
unauthenticated users, in this case we just return the user to the home page and
do nothing, this provides a better UX for users who accidentally double click the
button), upon destroying the session we redirect the user to the "PKMS Logout" page.
SSOe doesn't support SAML Single Logout (slo), however this page will destroy the
user's **SSOe session**, and if a `filename` argument is passed in, return the user
back to another page.  In our case we send the user to
`https://eauth.va.gov/pkmslogout?filename=vagov-logout.html`, which returns the user
back to the VA.gov home page.


## Inbound Authentication

When an user authenticates on another VA app (eg https://www.myhealth.va.gov) using SSOe
(Note: on MHV a user has the option to authenticate with or without SSOe, so it won't be
every MHV authenticated user), then redirects over to VA.gov, we attempt to auto login
the user.  We call this [auto login process](#auto-login), inbound authentication. We don't
share any cookies with SSOe (eauth.va.gov), so from the FE we are unable to detect an
active/inactive session this way, so in lieu of that the IAM team developed the
[keepalive endpoint](#keepalive) to return this information.

#### keepalive

The keepalive endpoint, https://eauth.va.gov/keepalive, has been designed to accomplish
two tasks; a) give VA.gov information about the current SSOe session so we can keep the
two (SSOe and VA.gov) sessions in sync and b) to update the TTL on the current SSOe session
(keep it alive!).  When [invoked](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/utilities/sso/keepAliveSSO.js#L33)
the endpoint returns an empty payload with a handful of response headers that tell us
how long the session will be alive for, what CSP (idme, mhv, dslogon) they used to
authenticate and the transaction id created during authentication.  The latter is
important to protect against a potential security vulnerability when two users access
a shared computer.  Just because there is an active SSOe session and an active VA.gov
session, we can't guarantee that the users are the same, by comparing the transaction
id we can make sure.

#### auto login

After detection of an SSOe session, if the current user is logged out on VA.gov, we attempt
to auto login the user, this starts by redirecting the user to `/v1/sessions/custom/new?authn=<type>`.
This endpoint works similar to those in [outbound authentication](#login-flow), with the
exception that the SAML request has `forceAuthn` attribute set to "False".  Since an SSOe
session has already been detected, and we want to reuse that to create a VA.gov session,
setting this value to False will allow SSOe to return us a cached SAML Response, but
**only if the authn context matches**.  In other words, if the user originally authenticated
with DSLogon credentials, but VA.gov sends a request to authenticate the user with ID.me
credentials, then SSOe will ignore the current session and send the user to ID.me to login.
Thus we use the authn value returned by the [keepalive endpoint](#keepalive) as a query
parameter to construct a SAML request that matches.  For outbound authentication we always
set the `forceAuthn` value to "True" as we want to force the user to enter their credentials.
In some cases, the user will have already logged into SSOe, but because of
[missing data](http://sentry.vfs.va.gov/organizations/vsp/issues/418/) we can't auto login
the user.  In this case its important to pass the `forceAuthn` parameter to make sure the
user re-enters their credentials and are able to fully authenticate with www.va.gov.

#### auto logout

To fully synchronize sessions between SSOe and VA.gov, we need to both auto login and logout
the user.  For example if the user logs in at VA.gov, then goes to myhealthevet.va.gov and
logs out on that page.  We need to make sure that the next time a user comes back to VA.gov
(could be a different user if at a shared computer) we run an auto log out.  This process
is very similar to the above [auto login](#auto-login) functionality in that we use JS and
the [keepalive endpoint](#keepalive) to detect a session mismatch, but in this case we
redirect the user to `/v1/sessions/slo/new` to initiate the logout process in the same way
that a user would [logout manually](#logout-flow).


# Debugging SAML Responses

VA.gov initially began its SSOe rollout in the summer of 2020, after addressing some early
bugs, we noticed a trend where SSOe authentication success rates always trail behind
non-SSOe authentication (we've [set up a grafana dashboard](http://grafana.vfs.va.gov/d/ioicprRMk/ssoe-launch?orgId=1)
to track this.  Access to the [SOCKS Proxy](https://github.com/department-of-veterans-affairs/va.gov-team/blob/aa6fae863ef942661085bc91c600aa68353ee382/platform/engineering/internal-tools.md#configure-the-socks-proxy)
is required).  It makes sense that the success rates are lower, as the flow is more complex
and opens more lanes for failure/abandonment, however the team hoped that the gap would be
closer (within a few percentage points).

While we've seen the difference between the two drop (as of this Dec 2020, it's been about
5-10% depending on the type of credentials used and time of day), we've been pushing an
effort to track down **where** in the SAML request/response cycle failures/abandonments
have been occurring more frequently.  The SAML workflow is a series
of SAML requests sent and SAML responses received between VA.gov, the two identity brokers
(SSOe and ID.me) and the three identity providers (ID.me, MHV and DSLogon).  In some
exchanges we expect to see abandonment because user interactions are required, however
in other exchanges we expect to see near 100% success because no user interactions are
required.  If we can analyze the workflow to see where missing requests/responses aren't
showing up, we might be able to identify the bug(s) causing our SSOe success rates to be
lower.

#### aggregate tracing

SSOe integration introduced a new broker, eauth.va.gov, into the mix.  The SAML flows
from ID.me -> MHV/DSLogon stayed as is, so from a debugging perspective it makes most
sense to focus on the SAML requests/responses being sent to and from SSOe.  If we can
analyze the following counts over a window of time, we might be able to see where our
drop off in success rates is happening

**VA.gov -> SSOe -> ID.me -> SSOe -> VA.gov**
1. requests sent from VA.gov to SSOe
1. requests received by SSOe from VA.gov
1. requests sent from SSOe to ID.me
1. requests received by ID.me from SSOe
1. responses sent from ID.me to SSOe
1. responses received by SSOe from ID.me
1. responses sent from SSOe to VA.gov
1. responses received by VA.gov from SSOe

From the above we expect to see a large decline in step 5, as in between step 4 and
5 the user needs to navigate a series of user forms, and any abandonment here would
lower our success numbers.  However for every other exchange, we'd expect similar
counts in between steps, this of course will never match up because of
browser/networking errors and the inability to create the exact time windows between
the three systems, but it should be close.

The three teams (VA.gov, IAM and ID.me) have been able to analyze the data on their
respective systems, however we've continually ran into issues analyzing the splunk
logs from SSOe (eauth.va.gov) as under load during normal working hours it appears
lots of logging messages are lost, thus obtaining an accurate count for steps 2, 3,
6 and 7 is difficult/impossible.

#### individual tracing

In addition to tracing using aggregate counts to see where our success rates are
dropping, we should also be able to trace individual SAML requests from the steps
outlined in [aggregate tracing](#aggregate-tracing) to see where we are losing users.
We started to do this analysis using the SAML request uuid that is generated for
every request, but ran into a problem connecting the dots.  In steps 1, 2, 7 and 8; we use a SAML request uuid that originated at VA.gov. However in steps 3, 4, 5 and 6; its a SAML request uuid that originated at SSOe.  Without the ability to "link" these two identifiers together we can't full trace a SAML authentication flow.

In the fall of 2020, the VA.gov, IAM and ID.me teams worked together on a solution.
We first proposed using query parameters to add additional information, but that
was quickly ruled out as the software running on eauth.va.gov doesn't have the
ability to parse query parameters (¯\_(ツ)_/¯).  So a new solution was proposed
that would have VA.gov create a domain level (`.va.gov`) cookie and stuff metadata
into that, from their the IAM team said they could parse this data and add it to
the SAML request sent in step 3.  As of this writing, we are still waiting on
the IAM and ID.me teams to figure out a way to transfer this metadata between
the exchange of steps 3 and 4, but once that is complete we should be able to
use the identier added in the shared cookie to trace a SAML transaction from
step 1 to 8 (using the various logging systems in VA.gov, eauth.va.gov and ID.me).

#### analysis scripts

The VA.gov team developed a few scripts to help with this debugging process

###### [login stats](https://gist.github.com/ericbuckley/b6b68bf37f9112e9db14cb15e2273ae7)

This script runs a handful of AWS Cloudwatch Insight queries over a given time
window, then runs some analysis functions on the results to report back on
success and failure rates.  To enhance additional insight queries can be added to
the `Analyze.QUERIES` hash, and additional analysis functions can be added to
the `Analyze` class as long as they are a) classmethods b) accept a data hash
parameter and c) are prefixed with `measure`.

###### [no response](https://gist.github.com/ericbuckley/7f7d9c8dea2049ef3cd107c3d4f470d5)

Run this script in conjunction with a CSV export from the IAM splunk logs to identify
SAML Requests that were sent, but never received by SSOe (Note: this script is only
useful once we are confident the splunk server that the IAM team is managing is ingesting
all the logs).  Some example queries that can be executed on Splunk

- All outbound VA.gov SAML Requests for ID.me LOA1
    - `AssertionConsumerServiceURL='https://api.va.gov/v1/sessions/callback' AuthnContextClassRef=http://idmanagement.gov/ns/assurance/loa/1/vets ForceAuthn='true'`
- All inbound VA.gov SAML requests for MHV
    - `AssertionConsumerServiceURL='https://api.va.gov/v1/sessions/callback' AuthnContextClassRef=myhealthevet ForceAuthn='false'`

###### [auto loops](https://gist.github.com/cb703d9f1dc010d589b432d86fe14fc2)

Use this script to identify instances of users getting stuck in an login/logout
loop.  In other words identify times when we incorrectly automatically logged in or
logged out a user. This script identifies four such instances.

- auto login loop: 2 or more auto login requests within a time window
- auto logout loop: 2 or more auto logout requests within a time window
- reverted login: an auto login, immediately followed by an auto logout
- reverted logout: an auto logout, immediately followed by an auto login


