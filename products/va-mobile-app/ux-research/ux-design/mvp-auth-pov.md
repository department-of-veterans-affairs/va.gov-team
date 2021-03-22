# Auth UX Documentation 

**Last updated:** 3/22/21

**Purpose of this document:** Document decision making for VA mobile app MVP authentication and future plans.



# MVP

## Sign In Flow
We will use a VA Mobile custom IAM integration that uses the design of the Access VA page (similar to [this page design](https://eauth.va.gov/accessva/?cspSelectFor=mhv)). We are pursuing this solution because it is feasible within our MVP timeline and we think this is the best way to get something set up quickly.

 
## Uplevelling UX

#### The MVP will only accept LOA 3 users
Per [significant decision 8](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/product/significant%20decisions.md#decision-8-only-users-with-logon-credentials-at-level-of-assurace-loa-3-will-be-allowed-to-use-the-app), the MVP app will only accept users with logon credentials at Level of Assurace (LOA) 3. Users who are not LOA 3 will be automatically pased to the ID.me identity verification flow after signing in. If they do not verify they will not be able to return to the app. Given this, we will briefly communicate to users the need to verify prior to the sign in flow to a) prepare possible LOA1 users for verifying and b) explain why access to the app will be stopped if they are not verified and choose not to verify. The UX for this flow can be triggered from clicking Sign in on the app’s unauthenticated home screen, [visible in the prototype here](https://adhoc.invisionapp.com/share/GTZ1ESFF6BN#/screens/433563910). This screen will only display on first sign in. In Feb 2021 usability testing, 3 participants signed into the app successfully. Findings from that research study can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/usability-testing/round-2/research-summary.md#in-moderated-testing-all-3-participants-who-downloaded-the-apk-file-successfully-signed-in).

#### The uplevelling flow has room for UX improvement
There are two points of uplevelling within the app's sign in flow that we want to improve: 

1. Users who are LOA 1 will need to sign in twice as part of their initial logon flow - once to sign in and begin/complete the verification flow and a second time to log in with their new LOA3 creds. This is because on the web, the cookie is set by ID.me, but we don’t and can't use the cookies. 

2. Users who uplevel during sign in must must also navigate from the browser where they uplevel back to the app manually with no redirection prompt. 

To remedy these usability issues, we would need ID.me to make a special mobile integration of the ID.me task. That task would redirect to IAM with the status of the uplevel & require a request for a longer timeout at IAM, and a change to the SAML request. 



---

# Post App Store Release

## Sign In Flow
After app stores lanuch, we would like to make the following UX changes to the sign in flow: 

- Remove one step from the flow: the need to "accept" a Secure Login Redirect to go from the sign-in page to their credential provider. This is step 3 in the sign in flow documentation.  
- Redesign UI of the sign in page and subsequent screens (outside of the credential provider) to match the design of the app. The ideal UX of the sign in page is likely will be very similar to the design of va.gov/sign-in. This is step 2 in the sign in flow documentation. 
- Streamline upleveling UX (see above note on how uplevelling UX can be improved).
- Audit A11y friendliness. This would span the entire flow. 


## Post App Store Release: LOA Allowance
We have previously discussed the pros and cons of maintaining our IAM integration post-MVP or working to secure a new integration that allows LOA 1 users in. Here's what we see as the key considerations in making a post-MVP integration decision:     

#### UX 
- We're not sure if it would be a better UX to allow LOA 1 users into a “locked” state of the app. We hypothesize that doing this may reduce frustration at initial sign in and get more users into the app successfully, but we also think this could increase frustration once users are signed in and unable to perform any actions. These are hypotheses we'd like to test before investing in technical work for a new integration, which we anticipate to be a significant amount of work. We think we can test this by recruiting LOA 1 Veterans and designing a study to evaluate the value of a “locked” state of the app.
- Allowing only LOA 3 users in requires the fewest steps for users: **Login Screen > gating screen >  log in > (check for LOA) upverify > success > back to app**, so it seems to be a reasonable experience to default to unless we uncover significant usability issues in testing that would be best solved by a new integration. 

#### Tech
- Accepting LOA 1 users would require an integration request with ID.me or VA Access for a LOA 3 SAML request, so we don’t know if we can get a redirect on uplevel if we send users out of the app. Right now the requests are just to authorize the app at a certain level. To make the app do an uplevel request is not currently anywhere in the API for oATUHe, so it would require discovery to find out if this is possible and to ask IAM to add this to the API if it is.

#### Other considerations 
- For the forseeable future, we see the app’s goal as continuing to make transactions easier for Veterans already interacting with VA, and maintaining an LOA 3 user base supports this purpose. We don’t foresee adding any authenticated features that an LOA 1 user would find utility in. 
- We would like to understand if there are business reasons that support either allowing LOA 1 users into the app to view a “locked” state of features, or continuing to allow only LOA 3 via the upleveling integrated into the auth flow currently used in MVP. We think LOA upleveling could be a place where the app breaks from VA.gov conventions.


# Appendix
We recommended the following 3 changes to our sign in page in November 2020. 1 and 2 were implemented: 
1. Remove the image of “VA Mobile”.
2. Remove Access VA and IAM logos at top of page. Keep the VA logo. 
3. Remove the “Secure Login Redirect” modal that pops up when a user clicks on one of the three credential options. Instead, send users straight to the relevant sign-in page.

