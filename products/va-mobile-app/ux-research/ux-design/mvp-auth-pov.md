# MVP Auth UX Documentation 

October 20, 2020

## Purpose of this document
Document UX decision making for VA mobile app MVP authentication and future plans.

## MVP plan
For MVP, will use a VA Mobile custom IAM integration that uses the design of the Access VA page. We are pursuing this solution because it is feasible within our MVP timeline. We’ve recommended the following three UX changes that we feel will improve the page’s usability: 
1. Remove the image of “VA Mobile”.
2. Remove Access VA and IAM logos at top of page. Keep the VA logo. 
3. Remove the “Secure Login Redirect” modal that pops up when a user clicks on one of the three credential options. Instead, send users straight to the relevant sign-in page.
 
## Post-MVP plan
Before we release the app in app stores to Veteran users (date TBD), we would like to work with IAM to secure a custom integration that allows us to more closely match the styling of the sign in experience on VA.gov. Some of our next steps include: 
- Understanding how we can best provide the desired page/assets to IAM and what the best format is for them
- Understanding contraints (e.g. security guides/confirmation dialogues)
- Ensure authenticaion meets VA Mobile App’s accessibility requirements

## Post-MVP desired UX  
Our ideal UX for app stores launch will be very similar to the design of va.gov/sign-in. We may make some small changes such as removing the value proposition to focus solely on the sign in CTAs. We would like to work closely with IAM towards this custom integration so that it can be put in place by app stores launch. Additionally, we would like to test our custom integration within either Test Flight or Invision (TBD) before releasing it to app stores. 
 
## More details on uplevelling UX for MVP 

#### App access
Per [significant decision 8](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/product/significant%20decisions.md#decision-8-only-users-with-logon-credentials-at-level-of-assurace-loa-3-will-be-allowed-to-use-the-app), the MVP app will only accept users with logon credentials at Level of Assurace (LOA) 3. Users who are not LOA 3 will be redirected to the ID.me identity verification flow after signing in. In rare cases of legacy DS Logon accounts that are still LOA1, users will be directed to an identity verification flow on DS Logon rather than ID.me. If users do not verify they will not be able to successfully sign into the app. 

#### How we'll communicate to LOA 1 users
Given this, we have design a few screens that briefly communicate to users the need to verify prior to the sign in flow to a) prepare possible LOA 1 users for verifying and b) explain why access to the app will be hindered if they are not verified. The UX for this flow can be triggered from clicking Sign in on the app’s unauthenticated home screen. It will only display on first sign in. We are pursuing this solution for MVP because we will not return LOA 1 users to the app. When users enter the sign in flow, they enter the identity provider’s login flow. They will need to complete verification to successfully sign in.  
