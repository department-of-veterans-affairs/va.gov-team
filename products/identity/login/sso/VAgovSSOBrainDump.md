# How it works
## Use Cases/Expected Behavior
### User-initiated sign in starting at VA.gov
* Can use any of three main credentials (ID.me/MHV/DSL), at LOA1 or LOA3. Upon signing in, an SSOe session is established.
* Once signed in, can trigger identity proofing or 2-factor enrollment. The additional assurance is reflected in the SSOe session.

### Navigating from VA.gov elsewhere (“Outbound SSO”)
* Can send a user to another site like MHV/eBen, and because an SSOe session is established, the user should be logged in when they arrive.
* Most other sites use a specific “deep linking landing page” pattern. You have to send the user to a specific URL (e.g. mhv-portal-web/eauth?deeplinking=secure_messaging). The initial page establishes the application session, then forwards the user to the specific page they want to access (e.g secure messaging in the above URL).
* Most other sites require LOA3, so if an LOA1 user follows a link they might get an “insufficient assurance” error. (Or they might not, if VA.gov does LOA validation before allowing the user to follow a link. This behavior varies).

### Navigating from elsewhere to VA.gov (“Inbound SSO”)
* Can link from any other site to any page on VA.gov.
* There is no deep linking landing page, can link directly to the appropriate page within VA.gov.
* VA.gov has code in its site-wide nav component that triggers auto-login (see below).
* Works for any of the credential types supported by VA.gov. Would not work for PIV or CAC.
* Other conditions where the user VA.gov can’t establish a session (missing ID.me UUID, duplicate EDIPIS, etc), the inbound SSO attempt should fail silently, leave the user at their intended page in a logged-out state. A user in this state can then use the regular sign-in button to sign-in explicitly.

### Auto-login
* VA.gov detects the presence of an SSOe session by invoking the SSOe-provided /keepalive endpoint. This happens in the background, via an AJAX request from frontend code.
* Then, in order to establish a VA.gov session, VA.gov needs to make a  SAML request to SSOe to get cached session contents (user attributes). This happens via browser redirect; it’s quick, but is visible to the user as a couple of flashes/page reloads. 
* We get the cached session as-is and either accept it or not; this process should never require the user to present credentials. 

### Auto-logout
* VA.gov detects the absence of an SSOe session by invoking the SSOe-provided /keepalive endpoint. 
* If no SSOe session, but a VA.gov session is present, the VA.gov session is terminated.
* Solves the use case of a user starting at VA.gov, navigating to site X, and signing out of X. We want to terminate the VA.gov session to keep in sync with SSOe session. 

### Sign-in page
* The sign in page allows other sites to use VA.gov as a sign-in gate. 
* Other sites can link to the va.gov/sign-in with `application` and `to` query parameters. 
* Sign-in page will ensure the user is signed in (either let them pick credentials and sign in, or check for an existing SSOe session and perform auto-login) and then redirect the user back to a target destination based on the `application` and `to` parameters.
* `application` parameter specifies a base URL (e.g. “myvahealth” points to VA EHRM domain), and `to` parameter specifies an exact target under that domain. 
* Note the sign-in page does not act as a SAML identity provider to other sites - it only ensures that the SSOe session is established and redirects back to the target application with a regular web redirect. If consuming applications need a SAML payload they need to make a separate request to SSOe. When they do, the user will not need to authenticate again because of the existing session.

## Caveats
* The sign-in page doesn’t currently do any LOA validation. In principle it could know that for “application=myvahealth” that LOA3 is required, and ensure that is the case before redirecting. 



## The ID.me UUID issue
* In the several years where ID.me was VA.gov’s primary identity broker, several features implemented a dependence on ID.me-issued UUIDs. Because ID.me brokered all credential types, every user had an ID.me UUID.
* Specifically, some stored data such as in-progress benefits forms are keyed under a user’s ID.me UUID.
* When a user arrives via inbound SSOe using an MHV or DSLogon credential, their SSOe session may not contain a mapped ID.me UUID. 
* VA.gov attempts to also look up the ID.me UUID in an account table that it maintains. But if the user has never signed in to VA.gov, we have no such mapping. 
* When this is the case, VA.gov is currently abandoning the attempt to do auto-login/inbound SSO, and requiring the user to log in using the sign-in button.
* As soon as the user signs in one time to VA.gov, the ID.me UUID will be mapped and stored permanently in MPI, and future inbound SSO attempts will succeed. 
* VA.gov can potentially only require the ID.me UUID for the specific features that need it (e.g. fetching in-progress benefits forms), and not for general inbound SSO, but this enhancement is not fully scoped out yet.

# More technical details
## There are multiple sessions in play
* VA consists of multiple independently operated web applications, so we have a model where there are multiple sessions to manage and ideally to keep in sync.
*  SSOe provides the centralized session that cuts across all applications.
* Each application manages its own session concept that controls access to that application. These application sessions are derived from information provided with the SSOe session.
* But we can see where this introduces challenges like “I’m logged out of X and Y but not Z”. 

## The SSOe session
* Established by signing in through SSOe - e.g. by making a SAML request to SSOe or starting at AccessVA.
* Combines info from credential provider and MPI, stores session contents (user attributes) in SSOe’s servers.
* A session cookie in the user’s browser contains a token that lets SSOe look up the session contents.
* But applications like VA.gov can’t access that cookie directly - need to interact with SSOe to get the session contents (user attributes). 
* Two main ways for applications to interact with SSOe - SAML, or standard junction proxy.

## SAML
* Used by VA.gov, Cerner
* All requests pass through user’s browser. This accounts for the multiple redirects/flashes you see during a sign-in as they get passed from VA.gov to SSOe to ID.me to DSLogon, and back (for example).
* Application issues request “authenticate this user”. In VA.gov case, also specifies credential type, and/or id proofing/2FA enrollment flows.
* SSOe calls out to credential provider (ID.me/MHV/DSL), user authenticates.
* For LOA3 user, SSOe then looks up person in MPI, or adds them to MPI if they are a new-to-VA person.
* SSOe sends a SAML response (“assertion”) back to application with user attributes combined from credential provider and MPI.
* In error cases, SSOe generally doesn’t issue a SAML error payload, it just leaves the user at an SSOe-rendered error page.


## Standard Junction/eauth proxy
* Used by MHV, eBenefits, but *not* by VA.gov.
* If you see the domain change to “eauth.va.gov” when you sign in, an application is using the standard junction pattern. Makes linking between websites hard because URLs change depending on whether user is signed in or not. 
** For example, linking to https://www.myhealth.va.gov/mhv-portal-web/refill-prescriptions will never result in the user arriving at MHV in a logged-in state. For that you need to link to https://eauth.va.gov/mhv-portal-web/eauth?deeplinking=prescription_refill. But linking to the latter if the user is _not_ signed in will send them to a sign-in flow instead of the static content. 
* All traffic flows through a proxy server run by SSOe. 
* The SSOe proxy server looks up the session contents and passes them to the application as HTTP headers. 
** The headers include approximately the same contents as VA.gov receives in a SAML assertion from SSOe: identity information for the user such as first/last/dob; VA identifiers such as ICN/SECID/EDIPI; information about the authentication event (LOA, credential type, etc); and various session-specific identifiers. 

## Maintaining the SSOe session - VA.gov
* Want to keep session alive as user navigates around VA.gov, so it doesn’t expire for a still-active user.
* VA.gov can do that for its own session easily - every API request, it extends its own session duration to (now + 30 min)
* But for the SSOe session, VA.gov doesn’t control that. VA.gov can’t read the SSOe session cookie, can’t even detect it since it is owned by a different domain (eauth.va.gov). 
* The only way to interact with the session is for the browser to send a request to eauth.va.gov - SSOe can read the cookie, take action on it.
* So, SSOe added a /keepalive endpoint. VA.gov frontend makes a background Ajax request to extend the SSOe session while the user is interacting with VA.gov. 
* Each call to /keepalive extends the session to (now + 15 min). 
* VA.gov also uses /keepalive to detect whether an SSOe session is present, to decide whether to try to auto-signin a user who is navigating from another SSOe site.
* Note that VA.gov session duration is 30 minutes, SSOe session is 15 minutes. To attempt to keep these in sync, the VA.gov frontend has a mechanism to periodically invoke the /keepalive endpoint in order to keep extending the SSOe session. This mechanism also throttles the /keepalive calls less frequently than "on every vets-api invocation" in order to not overwhelm the SSOe service. 

## Maintaining the SSOe session - MHV/eBenefits
* Since MHV and eBenefits both use the standard junction proxy, the SSOe session gets maintained automatically.
* As network requests are proxied through eauth.va.gov, SSOe extends the session duration, until it expires or the user logs out. 
* As soon as an SSOe session is terminated (from anywhere), the proxy stops passing traffic to the application aka the user is effectively signed out.

## Maintaining the SSOe session - Cerner, VA Mobile
* Any application that is not using the standard junction proxy (Cerner, VA Mobile) is likely not keeping the SSOe session alive as the user navigates on those applications.
* This means if a user spends more than 15 minutes on one of these tools and then tries to navigate elsewhere, their SSOe session will have expired.
* (Believe this is the case because the /keepalive mechanism was added in the course of the VA.gov-SSOe project, don’t believe anybody else has adopted it).

# Session termination/logout
* SSOe doesn’t support SAML-based single logout. 
* Instead it has a mechanism known as “PKMS logout”. 
* Link or redirect to a URL like “eauth.va.gov/pkmslogout?filename=vagov-logout.html”. Navigating there will terminate the SSOe session, then optionally link back to the originating application (e.g. the VA.gov homepage). 
* But, recall above that each application may have its own session concept. So if the user starts at VA Mobile, signs in, navigates to VA.gov, and signs out, their SSOe session and VA.gov sessions may be terminated, but their VA Mobile session may still be active. 

## Staying in sync - VA.gov Auto-login/Auto-logout
* VA.gov attempts to stay strictly in sync with the SSOe session.
* If it detects that the SSOe session is terminated (by getting a negative result from the /keepalive endpoint), it terminates the VA.gov session (“auto logout”). 
* If it detects that an SSOe session is present, (by getting a positive result from the /keepalive endpoint), it attempts to establish a VA.gov session.
* To do this, it has to issue a SAML request to SSOe, so that SSOe can look up the cached user session and return user attributes to VA.gov.
* Since SAML always goes via the browser, this means that auto-login causes a couple of browser redirects that will be noticeable to the user.
* Standard junction sites stay in sync with SSOe session “for free” because SSOe is intercepting all their traffic.
* Other applications are likely not doing anything to stay in sync with the SSOe session. 

## Example SAML payloads
* Example SAML attribute sets are stored in vets-api factories. These are not raw SAM, but the attribute sets are extracted from actual SSOe-issued SAML assertions that were captured during development and testing. 
* You can see how the contents change depending on the LOA and credential type, and whether the established SSOe session was brokered through ID.me or not.
* For an LOA1 authentication, SSOe does not match the user to MPI and so the attribute set is reduced to just what is provided by the credential provider.
* Examples 
** [SSOe ID.me LOA 1](https://github.com/department-of-veterans-affairs/vets-api/blob/02bf994178f73c152e7c581c4f4a31ddc0190c5f/spec/factories/saml_attributes.rb#L186)
** [SSOe ID.me LOA 3](https://github.com/department-of-veterans-affairs/vets-api/blob/02bf994178f73c152e7c581c4f4a31ddc0190c5f/spec/factories/saml_attributes.rb#L263)
** [SSOe MHV Premium, brokered through ID.me](https://github.com/department-of-veterans-affairs/vets-api/blob/02bf994178f73c152e7c581c4f4a31ddc0190c5f/spec/factories/saml_attributes.rb#L504)
** [SSOe DSLogon, brokered through ID.me](https://github.com/department-of-veterans-affairs/vets-api/blob/02bf994178f73c152e7c581c4f4a31ddc0190c5f/spec/factories/saml_attributes.rb#L640)
** [SSOe MHV inbound, not brokered through ID.me](https://github.com/department-of-veterans-affairs/vets-api/blob/02bf994178f73c152e7c581c4f4a31ddc0190c5f/spec/factories/saml_attributes.rb#L835)
** [SSOe DSLogon inbound, not brokerered through ID.me](https://github.com/department-of-veterans-affairs/vets-api/blob/02bf994178f73c152e7c581c4f4a31ddc0190c5f/spec/factories/saml_attributes.rb#L770)
