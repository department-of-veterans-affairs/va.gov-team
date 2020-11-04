# Auth UX Documentation 

Last updated 11/4/20

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

**One additional note about uplevelling UX:** Users who are LOA 1 will need to sign in twice as part of their initial logon flow - once to sign in and have their LOA detected, and again before beginning the verification flow. This is because on the web, the cookie is set by ID.me, but we don’t and can't use the cookies.


# Post-MVP

### Post-MVP: Sign In Page
Before we release the app in app stores (date TBD), we would like to work with IAM to secure a custom integration that allows us to more closely match the styling of the sign in experience on VA.gov. Some of our next steps include: 
- Understanding how we can best provide the page/assets
- Understanding IAM’s contraints (e.g. security guides/confirmation dialogues)
- Ensure authenticaion meets VA Mobile App’s accessibility requirements

The ideal UX of the sign in page is likely will be very similar to the design of va.gov/sign-in. We may make some small changes such as removing the value proposition to focus solely on the sign in CTAs. 


### Post-MVP: LOA allowance
We have previously discussed the pros and cons of maintaining our IAM integration post-MVP or securing a new integration that allows LOA 1 users in. Here are key considerations we are thinking about:   

#### UX 
- Allowing only LOA 3 users in requires the fewest steps for users: **Login Screen > gating screen >  log in > (check for LOA) upverify > success > back to app**. 
- For the forseeable future, we see the app’s goal as continuing to make transactions easier for Veterans already interacting with VA, and mintaining an LOA 3 user base supports this purpose. We don’t foresee adding any authenticated features that an LOA 1 user would find utility in. 
- We're not sure if it would be a better UX to allow LOA 1 users into a “locked” state of the app. We hypothesize that doing this may reduce frustration at initial sign in and get more users into the app successfully, but we also think this could increase frustration once users are signed in and unable to perform any actions. These are hypotheses we'd like to test before investing in technical work for a new integration. We think we can test this by recruiting LOA 1 Veterans and designing a study to evaluate the value of a “locked” state of the app. 

#### Tech
- Accepting LOA 1 users would require an integration request with ID.me or VA Access for a LOA 3 SAML request, so we don’t know if we can get a redirect on uplevel if we send users out of the app. Right now the requests are just to authorize the app at a certain level. To make the app do an uplevel request is not currently anywhere in the API for oATUHe, so it would require discovery to find out if this is possible and to ask IAM to add this to the API if it is.

#### Product
- We think there could be value in breaking from how VA.gov handles LOA upleveling to see if our app can help push the tide towards more users becoming LOA 3. - We would like to understand and keep talking about if there are business reasons that support either allowing LOA 1 users into the app to view a “locked” state of features, or continuing to allow only LOA 3 via the upleveling integrated into the auth flow currently used in MVP.
