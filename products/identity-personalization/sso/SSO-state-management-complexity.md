## Background
Adding SSOe to VA.gov sign-in means that the notion of "does the user have an active session" is now split/shared state that is maintained in two places: VA.gov and SSOe. As much as possible, we want those two systems to agree on whether a session is active. But several cases arise where that is not easy to acheive.

## Terminology
* "Auto-login" - VA.gov detects that an SSOe session is present but a VA.gov session is not and attempts to establish a VA.gov session by requesting the existing cached session information from SSOe.
* "Auto-logout" - VA.gov detects that there is no SSOe session but a VA.gov session is present, and attempts to terminate the VA.gov session.

## Scenarios

| | SSOe session present: YES | SSOe session present: NO |
| --- | --- | --- |
| **VA.gov session present: YES** | (A1) after happy path manual VA.gov sign in<br/>(A2) after clean auto-login | (B1) after manual sign out on MHV/eBen, then returning to VA.gov<br/>(B2) after SSOe session expires due to inactivity while on another site, then returning to VA.gov | 
| **VA.gov session present: NO** | (C1) user navigates to VA.gov with existing SSOe sesion (before auto-login attempted)<br/> (C2) after experienceing SSOe "internal protocol error"<br/>(C3) after attempting step-up authentication when user has date of death or fraud flag set<br/>(C4) after sign in attempt when user has multiple MHV accounts or EDIPIs<br/>(C5) after sign-in attempt when user has no ID.me UUID | (D1) not signed in<br/>&nbsp (D2) after manual sign out on VA.gov<br/>(D3) after clean auto-logout<br/>(D4) happy path session expiry on VA.gov|

Further complicating the above is the fact that sometimes the correct behavior varies depending on how the navigation pattern: i.e. are we in a given state due to a user explicitly clicking sign-in, or because we attempted auto-login. The user's expectation for correct behavior may differ. 

Technically some additional complexity arises because:
* State and logic is also split between VA.gov frontend and backend. Only the frontend can determine whether an SSOe session is present (by making a browser-fetch keepalive request to SSOe), but the backend is what receives SAML callbacks and can inspect the received assertion to establish a session or not.
*  VA.gov doesn't always receive a SAML error response for some scenarios - instead they land on an SSOe error page and control is never returned to VA.gov frontend or backend. 

### Details: Box A


### Details: Box B

### Details: Box C

### Details: Box D
