**Note**: Most of this content is duplicated in the [original brain dump Patrick
started in July 2020](VAgovSSOBrainDump.md), so it should be used together with
that document to build a better picture of SSO within VA.gov.  Since the narrative
is different and much much has changed since then, a new document was created.


# SSOe

What is [SSOe](https://github.com/department-of-veterans-affairs/va-sso/tree/master/SSOe)
and what advantages does that have over the
[original SSO implementation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/login/sso/design)
on VAgov?

Before the SSOe integration project, VAgov used ID.me as both the [identity 
broker](https://apicrazy.com/2014/08/04/identity-broker-service-in-saml-supporting-multiple-identity-providers-service-providers/)
and sometimes the [identity provider](https://en.wikipedia.org/wiki/Identity_provider_(SAML).
When a user elects to authenticate on VAgov, they have the option to use MHV,
DSLogon or ID.me credentials.  For all 3 cases, ID.me was the broker, meaning
the original SAML request would be sent to ID.me, then ID.me would allow the
user to enter credentials (if the user wanted to authenticate with ID.me credentials)
or would route the request to MHV/DSLogon if the user wanted to use different
credentials.  We have used the term
[v0 authentication](https://github.com/department-of-veterans-affairs/vets-api/blob/master/config/routes.rb#L12-L14)
to describe this process.

Integrating SSOe into the VAgov authentication pipeline kept the aforementioned
pipeline in place, however it introduced **SSOe as a second identity broker**.
Thus VAgov would no longer directly broker a SAML request to ID.me, instead it
brokers the request to eauth.va.gov (SSOe), which then passes along the request to
ID.me.

[Sequencing diagram illustrating the difference](https://github.com/department-of-veterans-affairs/va.gov-team/blob/6c5480d3921f6fd1ac313089db82f9f2bfc5b000/products/identity-personalization/sso/security-review/SSOSecurityReview.md#sequence-diagrams)


#### A second broker

As previously mentioned, VAgov already had an SSO solution.  However this
solution only worked for VAgov authenticated users going to Myhealthevet (MHV).
VAgov did this by creating a ".va.gov" encrypted cookie, that www.myhealth.va.gov
was able to parse and auto login the user if available.  This solution was custom
between the two applications, VAgov and MHV, and didn't support other
applications like eBenefits and cerner.  Additionally this was a one way street, as
users who authenticated on MHV, then linked to VAgov were not able to stay
logged in.


## Outbound Authentication

When an unauthenticated user starts the process of SSOe authentication on VAgov,
we refer to this as outbound authentication.  From the VAgovs perspective, the
user is creating an SSO session at VAgov, so if they choose to visit (outbound)
another VA application via a [proxy link](#standard-junction-(aka-eauth-proxy)),
they remain authenticated.

#### Login Flow

When a user clicks the "Sign in with **[TYPE]**" button, assuming SSOe is enabled via
the the feature flag in that environment, they will be redirected to the
`/v1/sessions/<type>/new` API endpoint, this kicks off the following steps.

1. The VAgov API server creates a SAML Request, with the appropriate
[AuthnContext](https://www.samltool.com/generic_sso_req.php).
1. VAgov records (via app logging and statsd) a "SAML Request"
    - this tells us a user made a request to authenticate
1. VAgov renders an [HTML POST binding form](#html-saml-post-binding)
1. VAgov issues an AJAX call to record (via app logging and statsd) a "SAML Tracker"
    - this tells us the JS code was able to execute
1. VAgov auto submits the HTML POST form
1. The user redirects to eauth.va.gov, ID.me, MHV and/or DSLogin to authenticate
    - during this time VAgov is not able to collect any stats on the users journey
1. eauth.va.gov redirects the user to `/v1/sessions/callback` with a SAML Response
1. VAgov records (via app logging and statsd) a "SAML Response"
1. VAgov redirects the user (unless [upleveling](#upleveling) is needed) to `/auth/login/callback`
to finish authentication within the React app


##### Type -> AuthnContext mappings

- idme:
    - "http://idmanagement.gov/ns/assurance/loa/1/vets"
    - "http://idmanagement.gov/ns/assurance/loa/3"
- mhv: "myhealthevet"
- dslogon: "dslogon"


##### HTML SAML POST binding

Pre-SSOe VAgov used a
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
have because many features on VAgov require users to be verified before using.  To
allow both set of users access, we first needs to authenticate users as LOA1 users.
If the SAML Response that comes back tells us that they have NOT yet verfified their
account, we authenticate and redirect the user to the VAgov home page.  However, if
their account IS verified, we send a new SAML Request to SSOe with the LOA3
authncontext.  Upon successful LOA3 authentication (which normally shouldn't require
any user action, other than occasionally needing to accept new ID.me terms), we
will have additional attributes associated to the users MPI record in the SAML
Response.


##### Standard Junction (aka eauth Proxy)

Many of the applications within the VA, already use SSOe to broker authentication.
By having VAgov broker authentication through SSOe, we can create "eauth.va.gov"
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
to how VAgov authenticates its users through SSOe.  The cerner system sends a SAML Request to
SSOe, the user enters their credentials, and a SAML Response is sent back to cerner.  However
to make the UX more consistent for our users, it was decided that our users should "initiate"
the authentication flow on VAgov.  Thus the team create a new standalone login page just for
that, https://www.va.gov/sign-in/.  This page ONLY authenticates with SSOe (feature flags don't
change anything on this page), as our cerner users require SSOe authentication to access the
portal.  Since the authentication process starts from VAgov, by the time the user reaches the
cerner portal they should be already authenticated, and the SAML Request sent to SSOe should
immediately results in a cached SAML Response without requiring the user to enter any
credentials.  The typical flow for this is (note there are a lot of areas for improvement in
the following):

1. User authenticates on VAgov (note: depending on feature flag state, not all users will
    login with SSOe)
1. User navigates the site and eventually clicks on a link to the cerner portal
1. The link sends the user to a "clear session" URL (used to prevent a security vulnerability
    with users at shared computers)
    - The url will contain a query parameter with the **real url** to access once the user
        has been safely authorized
    - eg https://patientportal.myhealth.va.gov/clear-session?to=https://patientportal.myhealth.va.gov/<path>
1. The clear session page deletes any cookies the user may have and redirects them to the
    standalone signin page with query parameters indicating which cerner path to redirect back
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
        1. Upon returning to VAgov, the JS code runs and redirects the user back to to
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
`/v1/sessions/slo/new`.  The API first destroys the **VAgov session** if available (Note:
additional precautions we're added in the summer of 2020 to allow access to
unauthenticated users, in this case we just return the user to the home page and
do nothing, this provides a better UX for users who accidentally double click the
button), upon destroying the session we redirect the user to the "PKMS Logout" page.
SSOe doesn't support SAML Single Logout (slo), however this page will destroy the
user's **SSOe session**, and if a `filename` argument is passed in, return the user
back to another page.  In our case we send the user to
`https://eauth.va.gov/pkmslogout?filename=vagov-logout.html`, which returns the user
back to the VAgov home page.


## Inbound Authentication

When an user authenticates on another VA app (eg https://www.myhealth.va.gov) using SSOe
(Note: on MHV a user has the option to authenticate with or without SSOe, so it won't be
every MHV authenticated user), then redirects over to VAgov, we attempt to auto login
the user.  We call this [auto login process](#auto-login), inbound authentication. We don't
share any cookies with SSOe (eauth.va.gov), so from the FE we are unable to detect an
active/inactive session this way, so in lieu of that the IAM team developed the
[keepalive endpoint](#keepalive) to return this information.

#### keepalive

The keepalive endpoint, https://eauth.va.gov/keepalive, has been designed to accomplish
two tasks; a) give VAgov information about the current SSOe session so we can keep the
two (SSOe and VAgov) sessions in sync and b) to update the TTL on the current SSOe session
(keep it alive!).  When [invoked](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/utilities/sso/keepAliveSSO.js#L33)
the endpoint returns an empty payload with a handful of response headers that tell us
how long the session will be alive for, what CSP (idme, mhv, dslogon) they used to
authenticate and the transaction id created during authentication.  The latter is
important to protect against a potential security vulnerability when two users access
a shared computer.  Just because there is an active SSOe session and an active VAgov
session, we can't guarantee that the users are the same, by comparing the transaction
id we can make sure.

#### auto login

After detection of an SSOe session, if the current user is logged out on VAgov, we attempt
to auto login the user, this starts by redirect the user to `/v1/sessions/custom/new?authn=<type>`.
This endpoint works similar to those in [outbound authentication](#login-flow), with the
exception that the SAML request has `forceAuthn` attribute set to "False".  Since an SSOe
session has already been detected, and we want to reuse that to create a VAgov session,
setting this value to False will allow SSOe to return us a cached SAML Response, but
**only if the authn context matches**.  In other words, if the user originally authenticated
with DSLogon credentials, but VAgov sends a request to authenticate the user with ID.me
credentials, then SSOe will ignore the current session and send the user to ID.me to login.
Thus we use the authn value returned by the [keepalive endpoint](#keepalive) as a query
parameter to construct a SAML request that matches.  For outbound authentication we always
set the `forceAuthn` value to "True" as we want to force the user to enter their credentials.
In some cases, the user will have already logged into SSOe, but because of
[missing data](http://sentry.vfs.va.gov/organizations/vsp/issues/418/) we can't auto login
the user.  In this case its important to pass the `forceAuthn` parameter to make sure the
user re-enters their credentials and are able to fully authenticate with Vagov.

#### auto logout

To fully synchronize sessions between SSOe and VAgov, we need to both auto login and logout
the user.  For example if the user logs in at VAgov, then goes to myhealthevet.va.gov and
logs out on that page.  We need to make sure that the next time a user comes back to VAgov
(could be a different user if at a shared computer) we run an auto log out.  This process
is very similar to the above [auto login](#auto-login) functionality in that we use JS and
the [keepalive endpoint](#keepalive) to detect a session mismatch, but in this case we
redirect the user to `/v1/sessions/slo/new` to initiate the logout process in the same way
that a user would [logout manually](#logout-flow).


# Debugging SAML Responses

[aggregate vs individual tracing]

# Analysis Scripts

