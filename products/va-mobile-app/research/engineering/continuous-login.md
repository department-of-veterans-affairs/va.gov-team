June 5, 2020 (email)

# Continuous Login Questions + Exploration:

## Q1: With the Oauth approach using Okta, can we send a user who is within the app to a part of VA.gov that required login? (ie, could their login state be transferred?)
- Eg, if a user clicks claim status, could it transfer to VA.gov?

### TLDR; Yes, this is theoretically possible if there is work done in Vets-API. 

We would need a dedicated endpoint in the API to recognize the OAuth token, validate it, and establish a cookie based session to access login-required parts of VA.gov in the web browser (a “Cookie Exchange”).

This “feature” to direct a mobile user to VA.gov could occur via a web link to the system browser (Safari) or it could open an in-app web view to VA.gov.



## Q2: Would this be possible for MHV?
- Eg, is there a hard dependency on porting Secure message, RX refill APIs into vets-api to make them accessible in native app?

### TLDR; Yes, it is theoretically possible to have session continuity from the Native App to MHV but it would require bridging through VA.gov in order to access MHV (note that MHV’s UI/UX is optimized for small screens, but we have not tested that yet)

There was/is a shared cookie between VA.gov and MHV to enable Single Sign on between the two properties, but that method may eventually be deprecated or conflict with SSOe when SSOe is rolled out, as this session continuity would comprise a parallel login path. MHV continuity requires both Access Token-Session Cookie Exchange (Q1) and VA.gov-MHV session continuity.

There are two areas that should be explored further: 
Security considerations for Access Token-Session Cookie Exchange. Does this open up a new attack vector? How can we secure this against phishing etc.? 
Does MHV have a UI that is conducive to browsing on mobile? 

Some MHV services are currently available in Vets API to support limited read-only functionality for RX Refill and Secure Message functions on VA.gov. These same APIs may be used in the native app if exposed (via Lighthouse or if VetsAPI token support is added as mentioned above). Further exploration is needed to determine the ability of the current MHV service integrations to support additional functionality beyond limited read-only functionality.



## Q3: What is the difference between in-app browser vs. directing you out to a browser? How does this impact persistence?

### TLDR; Given we are able to build a Cookie Exchange endpoint (from Q1), then this becomes a UX question.

In app browser vs. directing out to the browser are roughly equivalent in terms of functionality but the experience of staying in the app may be preferable. Both options (in-app browser and web browser) require the “Cookie Exchange” work mentioned above.

Directing out to a browser may be easier for the user regarding session continuity because the user will have access to cookies on the default browser, e.g. if the user opens the default browser to VA.gov they will remain logged in after they close the mobile app.  

We can explore using a “shared” web view for in-app browsing, which should use all the cookies and settings from the system browser. If the app links out to the system browser, the user would also have to sign in there. Is that session long-lasting? This is the compromise solution.
