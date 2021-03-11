# Auth UX Documentation 

Last updated 3/11/21

#### Purpose of this document
Document decision making for VA mobile app MVP authentication and future plans.

# MVP

### MVP: Sign In Page
We will use a VA Mobile custom IAM integration that uses the design of the Access VA page (similar to [this page design](https://eauth.va.gov/accessva/?cspSelectFor=mhv)). We are pursuing this solution because it is feasible within our MVP timeline and we think this is the best way to get something on Test Flight quickly for a small, mostly internal audience. We’ve recommended the following three UX changes to improve the page’s usability (as of 11/4, we think 1 and 2 from this list will be feasible):
1. Remove the image of “VA Mobile”.
2. Remove Access VA and IAM logos at top of page. Keep the VA logo. 
3. Remove the “Secure Login Redirect” modal that pops up when a user clicks on one of the three credential options. Instead, send users straight to the relevant sign-in page.

 
### MVP: Uplevelling UX
Per [significant decision 8](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/product/significant%20decisions.md#decision-8-only-users-with-logon-credentials-at-level-of-assurace-loa-3-will-be-allowed-to-use-the-app), the MVP app will only accept users with logon credentials at Level of Assurace (LOA) 3. Users who are not LOA 3 will be automatically pased to the ID.me identity verification flow after signing in. If they do not verify they will not be able to return to the app.

Given this, we will briefly communicate to users the need to verify prior to the sign in flow to a) prepare possible LOA1 users for verifying and b) explain why access to the app will be stopped if they are not verified and choose not to verify. The UX for this flow can be triggered from clicking Sign in on the app’s unauthenticated home screen, [visible in the prototype here](https://adhoc.invisionapp.com/share/GTZ1ESFF6BN#/screens/433563910). This screen will only display on first sign in. We plan to test the whole sign in flow (including this screen) as part of usability testing of the Test Flight app in December-January. In usability testing, we’ll prioritize:
- Understanding where major stumbling blocks are in the entire sign in flow, from the unauth home screen to being successfully returned to the app
- Seeking feedback about language and how to best communicate the need to be LOA 3 to use the app

**One additional note about uplevelling UX:** Users who are LOA 1 will need to sign in twice as part of their initial logon flow - once to sign in and begin/complete the verification flow and a second time to log in with their new LOA3 creds.This is because on the web, the cookie is set by ID.me, but we don’t and can't use the cookies. If they are already LOA2/3 they just log in one time and no extra log in. 



# Post App Store Release

### Post App Store Release: Sign In Page
After app stores lanuch, we would like to make the following UX changes to the sign in flow: 
- Remove 1 step from the flow: the need to "accept" a Secure Login Redirect to go from the sign-in page to their credential provider. 
- Redesign UI of the sign in page and subsequent screens (outside of the credential provider) to match the design of the app.    
- Streamline upleveling UX. In the future, when our persona expands, we will want to improve the upleveling experience. Right now, LOA1 are directed to uplevel when they try to sign into the app. Today, there are bumpy parts of this flow (e.g. users must sign in multiple times, users must navigate from the browser where they uplevel back to the app manually with no redirection prompt). To improve this UX, we will need ID.me to make a special mobile path to allow us to reduce redirects.
- Audit A11y friendliness


The ideal UX of the sign in page is likely will be very similar to the design of va.gov/sign-in. We may make some small changes such as removing the value proposition to focus solely on the sign in CTAs. 


### Post App Store Release: LOA allowance
We have previously discussed the pros and cons of maintaining our IAM integration post-MVP or working to secure a new integration that allows LOA 1 users in. Here's what we see as the key considerations in making a post-MVP integration decision:     

#### UX 
- We're not sure if it would be a better UX to allow LOA 1 users into a “locked” state of the app. We hypothesize that doing this may reduce frustration at initial sign in and get more users into the app successfully, but we also think this could increase frustration once users are signed in and unable to perform any actions. These are hypotheses we'd like to test before investing in technical work for a new integration, which we anticipate to be a significant amount of work. We think we can test this by recruiting LOA 1 Veterans and designing a study to evaluate the value of a “locked” state of the app.
- Allowing only LOA 3 users in requires the fewest steps for users: **Login Screen > gating screen >  log in > (check for LOA) upverify > success > back to app**, so it seems to be a reasonable experience to default to unless we uncover significant usability issues in testing that would be best solved by a new integration. 

#### Tech
- Accepting LOA 1 users would require an integration request with ID.me or VA Access for a LOA 3 SAML request, so we don’t know if we can get a redirect on uplevel if we send users out of the app. Right now the requests are just to authorize the app at a certain level. To make the app do an uplevel request is not currently anywhere in the API for oATUHe, so it would require discovery to find out if this is possible and to ask IAM to add this to the API if it is.

#### Other considerations 
- For the forseeable future, we see the app’s goal as continuing to make transactions easier for Veterans already interacting with VA, and maintaining an LOA 3 user base supports this purpose. We don’t foresee adding any authenticated features that an LOA 1 user would find utility in. 
- We would like to understand if there are business reasons that support either allowing LOA 1 users into the app to view a “locked” state of features, or continuing to allow only LOA 3 via the upleveling integrated into the auth flow currently used in MVP. We think LOA upleveling could be a place where the app breaks from VA.gov conventions.
