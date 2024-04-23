## Background
Adding SSOe to VA.gov sign-in means that the notion of "does the user have an active session" is now split/shared state that is maintained in two places: VA.gov and SSOe. As much as possible, we want those two systems to agree on whether a session is active. But several cases arise where that is not easy to acheive.

## Terminology
* "Auto-login" - VA.gov detects that an SSOe session is present but a VA.gov session is not and attempts to establish a VA.gov session by requesting the existing cached session information from SSOe.
* "Auto-logout" - VA.gov detects that there is no SSOe session but a VA.gov session is present, and attempts to terminate the VA.gov session.

## Scenarios

| | SSOe session present: YES | SSOe session present: NO |
| --- | --- | --- |
| **VA.gov session present: YES** | (A1) after happy path manual VA.gov sign in<br/>(A2) after clean auto-login | (B1) after manual sign out on MHV/eBen, then returning to VA.gov<br/>(B2) after SSOe session expires due to inactivity while on another site, then returning to VA.gov | 
| **VA.gov session present: NO** | (C1) user navigates to VA.gov with existing SSOe session (before auto-login attempted)<br/> (C2) after experiencing SSOe "internal protocol error"<br/>(C3) after attempting step-up authentication when user has date of death or fraud flag set<br/>(C4) after sign in attempt when user has multiple MHV accounts or EDIPIs<br/>(C5) after sign-in attempt when user has no ID.me UUID | (D1) not signed in<br/>(D2) after manual sign out on VA.gov<br/>(D3) after clean auto-logout<br/>(D4) happy path session expiry on VA.gov|

Further complicating the above is the fact that sometimes the correct behavior varies depending on how the navigation pattern: i.e. are we in a given state due to a user explicitly clicking sign-in, or because we attempted auto-login. The user's expectation for correct behavior may differ. 

Technically some additional complexity arises because:
* State and logic is also split between VA.gov frontend and backend. Only the frontend can determine whether an SSOe session is present (by making a browser-fetch keepalive request to SSOe), but the backend is what receives SAML callbacks and can inspect the received assertion to establish a session or not.
*  VA.gov doesn't always receive a SAML error response for some scenarios - instead they land on an SSOe error page and control is never returned to VA.gov frontend or backend. 

### Details: Box A
* The upper-left box is generally a "success state" for logged in user, after either a manual sign-in or auto-login. The two systems are in agreement about whether a session is present. 
* Correct behavior is to maintain the session for as long as appropriate (using the keepalive mechanism as needed), and terminate both sessions using the logout mechanism after the desired period if inactivity.

### Details: Box B
* The upper-right box means that a VA.gov session is present but there is no SSOe session present. 
* Keepalive should prevent this from happening while the user is browsing on VA.gov.
* But, a user might navigate to another site and then log out, which would end their SSOe session. Or, a user might be reach the (shorter) idle timeout on another site. In either situation if they navigate back to VA.gov they could be in this state.
* The correct behavior for VA.gov is pretty clear, it should trigger the auto-logout behavior and terminate the VA.gov session. 
* But, since the user's expecation is that they are already logged out, this should be as seamless as possible and not hijack the user from whatever their initial navigation target was. 

### Details: Box C
* The lower-left box -- where an SSOe session is present, but no VA.gov session is present -- is the most complex in determining the correct behavior
* (C1) If a user navigates to VA.gov and has an SSOe session, we should attempt an auto-login, ideally moving the user to box A.
* (C2) If the user attempts to sign-in manually but hits the SSOe "Internal Protocol Error" they will see an SSOe error page, but in fact have a session established. Should VA.gov attempt an auto-login? If it does, then auto-login should succeed the second time. But this conflicts with the following case. If we don't attempt a second auto-login, then the user appears to be signed out but in fact has an active SSOe session. 
* (C3) If the user attempts to sign-in (either manually or auto-login) and has a date of death or fraud flag set in MVI, they will hit the SSOe global block page. No SAML response is returned to VA.gov. If they navigate back to VA.gov, and VA.gov attempts auto-login, they will be stuck in a failure loop. So VA.gov needs to suppress auto-login in this case.
* (C4) If VA.gov attempts auto-login, and receives a SAML response indicating multiple MHV IDs or EDIPIs, VA.gov intends to stop login from occurring. But, right now we show an error page to the user which may be jarring for users who just navigated to VA.gov to browse unauthenticated content (as opposed to users who explicitly clicked sign-in).
* (C5) If VA.gov attempts auto-login and receives a SAML response indicating that the user doesn't have an ID.me UUID, VA.gov intends to force the user to do one-time re-authentication to establish that identifier. 

There are scenarios here where a user can't ever successfully establish a VA.gov session (e.g. until they contact support to resolve multiple MHV IDs), so we can't keep trying arbitrarily many times. 

But also, we don't want to land in this state because at this point the VA.gov UI will show the user as logged out, but they will in fact have an active SSOe session (and no way to terminate it). This poses a risk of the user walking away from the computer with an active SSOe session. 

### Details: Box D
* The lower-right box is generally a "success state" for logged out user. Either no sign-in attempt has happened at all, the user explicitly signed out, or was signed out automatically due to inactivity or because the SSOe session was detected as having ended elsewhere. 
