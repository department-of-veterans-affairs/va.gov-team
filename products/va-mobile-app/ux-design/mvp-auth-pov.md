# Auth UX Documentation 

**Last updated:** 3/22/21

**Purpose of this document:** Document decision making for VA mobile app MVP authentication and future plans.



# MVP Recommendations
We will use a VA Mobile custom IAM integration that uses the design of the Access VA page (similar to [this page design](https://eauth.va.gov/accessva/?cspSelectFor=mhv)). We are pursuing this solution because it is feasible within our MVP timeline and we think this is the best way to get something set up quickly.

There are **3** ways a user can sign into the mobile app from the IAM sign in page:

### 1. As a LOA3 user
Recommendations for how to improve this experience for app stores launch
- **Step 7:**  Add scopes, fix cut off text (request has been made, work in progress) 

### 2. As a LOA1 user: in this scenario, the user will need to uplevel to get into the app
Recommendations for how to improve this experience for app stores launch
- **Step 8:** Remove need for second sign in. Go directly to step 13. Currently, users need to sign in twice and need to find they way back to the app to do so. Users might not know they need to sign in again and thus may not be able to successfully sign in. To remedy this, we would need to do discovery on how to send users back to the app from the end of the verification flow. We will need to work with ID.me and IAM closely to achieve this. This might require increasing the time out of the IAM SAML requests, which has downstream effects.
- **Note about Step 7:** We are not sure what the uplevel redirect looks like for MHV Basic users because we cannot test that in staging.

### 3. Create a new account: 
- **Step 7:** Drop user directly into the "Create account page", not "Sign in" page. Go right from step 6 to step 8.
 

---


# Post App Store Release
After app stores lanuch, we recommend the following changes to sign in flows: 

### 1. As a LOA3 user
Recommendations for how to improve this experience for app stores launch
- Step 3: Redesign UI of page to match design system 
- Step 4: Remove redirection confirmation step.
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

This section keeps track of some changes already made to the sign in UX thus far and shares rationale behind some decision making. 

### Small updated to sign in page
We recommended the following 3 changes to our sign in page in November 2020. 1 and 2 were implemented: 
1. Remove the image of “VA Mobile”.
2. Remove Access VA and IAM logos at top of page. Keep the VA logo. 
3. Remove the “Secure Login Redirect” modal that pops up when a user clicks on one of the three credential options. Instead, send users straight to the relevant sign-in page.


#### Uplevelling UX rationale: the MVP will only accept LOA 3 users
Per [significant decision 8](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/product/significant%20decisions.md#decision-8-only-users-with-logon-credentials-at-level-of-assurace-loa-3-will-be-allowed-to-use-the-app), the MVP app will only accept users with logon credentials at Level of Assurace (LOA) 3. Users who are not LOA 3 will be automatically pased to the ID.me identity verification flow after signing in. If they do not verify they will not be able to return to the app. Given this, we will briefly communicate to users the need to verify prior to the sign in flow to a) prepare possible LOA1 users for verifying and b) explain why access to the app will be stopped if they are not verified and choose not to verify. The UX for this flow can be triggered from clicking Sign in on the app’s unauthenticated home screen, [visible in the prototype here](https://adhoc.invisionapp.com/share/GTZ1ESFF6BN#/screens/433563910). This screen will only display on first sign in. In Feb 2021 usability testing, 3 participants signed into the app successfully. Findings from that research study can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/usability-testing/round-2/research-summary.md#in-moderated-testing-all-3-participants-who-downloaded-the-apk-file-successfully-signed-in).

