_Note this file was migrated on 2/17/20 from https://github.com/department-of-veterans-affairs/va-sso/edit/master/LoginPageRFC.md_

# SSO Signin Page RFC
#ssoe

This document discusses the technical tradeoffs with implementing one or more centralied login pages on VA.gov to enable uniform sign-in across multiple properties.

## Current State

* VA.gov has a sign-in page implemented as a modal and accessed via the VA.gov header. This page is part and parcel of the overall VA.gov website.
	* This sign-in page triggers an authentication request to VA.gov’s identity provider (ID.me); after authentication control is returned to VA.gov.
	* Work is underway to inject SSOe in the middle of that request/response so that during authentication, an SSOe session is also established.
* Cerner (HealtheLife) portal intends to accept VA identities for authentication. It does not intend to provide any sign-in UX, but can link to a sign-in site at a fixed URL, and can trigger a SAML authentication to an external identity provider. 
* MHV exposes a sign-in page of its own that is part and parcel of its overall website.  The MHV credential option is implemented on that page, and within that page is an embedded SSOe widget that enables the ID.me and DSLogon credentials.

## Proposed Solution
### Cerner Login Page
* Since the Cerner portal will not include any login UI, somebody else needs to provide one. 
* VA.gov can implement a small self-contained authenticated application that only triggers authentication and then redirects the user back to the Cerner portal.
* The redirect back to Cerner will be a simple HTTP redirect. At that point, the Cerner application will not be provided with any authentication payload. So this VA.gov login page is *not* acting as an identity provider to Cerner.
* The Cerner portal would need to trigger a SAML authentication to SSOe. Because an SSOe session would already be established during the VA.gov sign-in, no additional user authentication would occur. The SAML round-trip would complete and the Cerner application would have the authentication payload it needs to authenticate/authorize the user.
* The VA.gov login page could enforce whatever LOA/multifactor requirements are needed before redirecting back to Corner.
* 

### Extending this to other applications
* Suppose we build this for Cerner; now VA.gov and Cerner have a similar auth user experience. Can/should we extend this to other applications?
* In principle, VA.gov could expose a set of these login pages for different apps (either at separate URL paths or differentiated by a query parameter) and be configured to redirect back to each application after authenticating.
* For example, MHV’s sign-in page could be replaced with a link out to a VA.gov-MHV login page that redirects back to MHV. 
* VA.gov would also need to know and enforce any difference in LOA/multifactor requirements for different applications, meaning it’s maintaining  and managing this configuration for each application, potentially across each environment.

## Tradeoffs
*  In some ways this would be re-implementing some of the features of AccessVA — a web UI separate from the consuming application that enables authentication. 
* But this concept would not include the “application gallery” view of AccessVA. The authentication UI would be presented either when triggered by the consuming application (similar to an application/SP-initiated authentication at AccessVA) or could be triggered from a link embedded elsewhere on VA.gov. The key difference being that it would be integrated with the content and IA of VA.gov.
* The elephant in the room here is that re-implementing a similar feature set as AccessVA seems redundant, and that there are many at VA who think that its existing user experience is fine. But the whole conceit of the VA.gov project is that user experience is critical to enabling user success, and “fine” is not good enough. Overall VA is moving towards alignment with the VA.gov user experience and design system; any widely-used authentication UI should follow that.
* The major technical drawback is that this is establishing a separate, non-standards-based authentication workflow to applications, and is introducing additional redirects/latency to the authentication process. A consuming application needs to trigger the VA.gov sign-in page, then await an HTTP redirect, and then trigger a SAML authentication to SSOe and await a SAML response. That second step should not involve any user interaction but will take time to complete. 
* While it’s straightforward for the VA.gov login page for an application to redirect back to a single URL on the consuming application, we may need to return control back to various URLs or with maintaining certain context. See “Maintaining Application Context”. 
* Routing applications to authenticate via VA.gov has an advantage that it at least partially solves the asymmetry problem that we are facing with our current SSOe integration solution. (Login to VA.gov and navigating to another site is fully supported. Doing the reverse is not, because an SSOe session alone lacks the additional context provided by ID.me that VA.gov expects). If all authentication starts at VA.gov, then they all have the additional ID.me context.
* (But, we’d still have the potential for asymmetry if a user logged in, navigated around another application, then navigated back to VA.gov after the initial VA.gov session expired). 
* This also sets up VA.gov as a privileged application relative to other applications. It alone would have a direct SAML integration with SSOe+ID.me, where after that first round trip a user is signed in, without the second round-trip that other applications would need to perform. 

## Maintaining Application Context
* If we want to return control not to a fixed application URL but to wherever the user left off from, we need to introduce some sort of state parameter into the request/response.
* SAML and OAuth have similar mechanisms, RelayState or a state parameter, with the guarantee that the identity provider/auth server will pass back whatever it was given, and the application can use that to return to the right context.
* So we’d be re-implementing that, e.g. as a query parameter. And then either VA.gov would need to pass that in RelayState during the SAML authentication that we do, or would need to maintain a stateful mapping to a separate RelayState value. 
* Error handling and return routing is not quite the same problem but a similar issue, and one that IAM has already had to solve, with teams either providing an error URL or an error handler HTML/JS snippet that IAM can execute on their behalf. 

## Conclusions
* ???
