# Building a VA Flagship Mobile App - Significant Decisions

**Summary:**

- [Decision 1: The VA should build a flagship mobile app](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/product/significant%20decisions.md#decision-1-the-va-should-build-a-flagship-mobile-app)

- [Decision 2: A VA mobile app be built using React Native](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/product/significant%20decisions.md#decision-2-a-va-mobile-app-be-built-using-react-native)

- [Decision 3: Initial Feature Set for MVP](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/product/significant%20decisions.md#decision-3-initial-feature-set-for-mvp)

- [Decision 4: Use SSOe OAuth for authentication](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/product/significant%20decisions.md#decision-4-use-ssoe-oauth-for-authentication)

- [Decision 5: Build Mobile API inside of vets-api](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/product/significant%20decisions.md#decision-5-build-mobile-api-inside-of-vets-api)

- [Decision 6: Mobile OS Support: which mobile operating systems will the app run on?](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/product/significant%20decisions.md#decision-6-mobile-os-support-which-mobile-operating-systems-will-the-app-run-on)

- [Decision 7: Device Testing Matrix](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/product/significant%20decisions.md#decision-7-device-testing-matrix)

- [Decision 8: Only Users with logon credentials at Level of Assurace (LOA) 3 will be allowed to use the app](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/product/significant%20decisions.md#decision-8-only-users-with-logon-credentials-at-level-of-assurace-loa-3-will-be-allowed-to-use-the-app)

- [Decision 9: Include Secure Messaging for App Store Launch](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/product/significant%20decisions.md#decision-9-include-secure-messaging-for-app-store-launch)

- [Decision 10: App Store release to be in May/June](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/product/significant%20decisions.md#decision-10-app-store-release-to-be-in-mayjune)

- [Decision 11: Do we need to conduct load testing?](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/product/significant%20decisions.md#decision-11-do-we-need-to-conduct-load-testing)

- [Decision 12: Become a VFS Team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/product/significant%20decisions.md#decision-12-become-a-vfs-team)

## Background

Principle 6 of VA’s Digital Modernization Strategy states: “Every service will be equally available in desktop and mobile environments.” The vision for this principle included developing a “flagship” VA mobile app. This raised the following questions:

1.  Should the VA build a flagship mobile app? What problem(s), if any, would a mobile app solve for VA beneficiaries that VA.gov or other digital tools do not already solve?
    
2.  How should a VA mobile app be built? What frameworks or technical approaches should it use?
    
3.  What features should a VA mobile app include?

4.  What authentication method should the mobile app use?

To answer these questions, our team of UX researchers, product managers and engineers completed a four-week discovery sprint, and then validated additional hypotheses by an additional 10 weeks of research.

## Problem
Based on our primary and secondary research, we think that a mobile app will help VA make progress towards solving the following problems:

-   Fragmentation
    
-   Long wait times
    
-   Lack of transparency
    
-   Difficulty with login
    
-   Lack of knowledge on how VA can help
    

While our user research surfaced other pain points Veterans experience while interacting with the VA, we feel these five problems are issues that mobile is uniquely positioned to address. For example, mobile provides the opportunity to improve the login experience by using biometric authentication.



## Decision 1: The VA should build a flagship mobile app

### What did you decide on?
After a four-week discovery sprint, followed by 10-weeks of research and validation, VA decided to move forward with building a native mobile app. The alternatives were to not build an app, or build one that isn’t native (such as a PWA or hybrid app).


### What was the deciding factor for your decision?

User Interviews:
-  Revealed painpoints for Veterans that a mobile app is uniquely positioned to solve (see section above)
    
-  Established that many Veterans (even those of older generations) are comfortable and proficient with mobile devices
    

 Heuristic Analysis:
    
-   Existing VA digital services are either limited in scope (e.g., RX refill app) or not optimized for mobile (e.g., eBenefits)   
-   An optimal UX for Veterans would require fidelity and functionality only available in native apps. For example, the ability to take pictures of documentation and upload them to a claim.
    

Secondary Research:
    

-   ⅓ of traffic on VA.gov is on mobile, indicating proficiency and comfort accessing VA services from a mobile device
    
-   A large proportion of call center data indicates Veterans struggle with issues such as login, that a mobile app is particularly well positioned to solve (biometrics)
    

Mobile Advantages:
    

-   Using push notifications, mobile can provide more transparency and support during a prolonged process (such as waiting for benefits decisions)
    
-   Using biometrics and persistent login, mobile can decrease the frustrations with authentication
    

Technical Research
    

-   Experiments with login and accessing APIs demonstrated that it will be possible to leverage existing VA functionality on a mobile app. For example, a mobile app could authenticate using a VA OAuth server and then have access to endpoints that use the same authentication.
    

### What other options did you consider?

-   Not building any new mobile apps
    
-   Improving responsive web experience of existing VA websites
    

### When, or under what conditions, would you recommend revisiting this design decision? E.g., after usability testing, after launch when metrics or analytics equal X, etc.

The decision to build an app should be revisited as features are released and metrics are evaluated to determine whether a mobile app is uniquely meeting user needs. For example, the most simplistic measure of this will be if users are not downloading the app, or downloading and removing it. More specific KPIs will be determined as features evolve and these should be monitored closely to ensure the app is adding value.

  


## Decision 2: A VA mobile app be built using React Native

### What did you decide on?

VA should build the mobile app using primarily React Native

### Document the people who agreed to the design decision

-   Charles Worthington
    
-   Clarice Chan
    

### What was the deciding factor for your decision?

React Native was chosen because it expedites development and deployment to both iOS and Android platforms, uses similar skillsets to web-based React (as used on VA.gov), and allows the level of UX that Veterans desire.

The deciding factors were:

1.  Component reuse
    

Though React Native will not allow for component reuse the way a Hybrid approach would, it will allow for logical reuse (i.e., the business logic used to build pages on VA.gov could be leveraged when building in React Native).

2.  Ability to achieve the desired UX
    

Based on our user research, it was clear that the app will have custom features that require integration of mobile capabilities such as phone or camera. This ruled out a PWA or Hybrid approach, since they do not allow for the same seamless integration with phone hardware. React Native also allows for customization while still being able to leverage its cross-platform widgets that expedite development.

3.  Ease of use for developers.
    

Similar skillsets are required for React Native and React, which would make the potential transition for VA.gov developers easier. Developers also enjoyed working in the platform and found it easy to deploy the app to both Android and iOS devices. Using React Native would only require one codebase, whereas a fully native app would require two (one Android and one iOS), effectively doubling the amount of developer effort.

  
#
## What other options did you consider?

Alternative Approaches and Frameworks:

#### Fully native: Applications are built using the tools and languages provided by the platforms
    
  -   iOS
    
  -   Android
    
#### Cross Platform; Applications are built from one codebase that abstracts the device capabilities. The advantage here is that one team can build one app to be delivered to both app stores (iOS and Android).
        
  -   Xamarin
    
  -   NativeScript
  
  -   React Native (our choice for the MVP)
    
#### Hybrid; Applications are built using familiar web development tools, and the app runs as a web app within a native app wrapper. Hybrid apps containing a JavaScript-runtime are built and submitted to the app stores. An example is the Twitter mobile app, which uses much of the same UI components as twitter.com.
    
  -   Ionic
       
  -   Flutter
    
#### PWA (Progressive Web App); Not actually a mobile app at all, but rather a web application that runs in the mobile browser and can be “pinned” to the device home screen to look like an app. A popular example is app.starbucks.com.

  -   Ionic
    

We evaluated these approaches by the following criteria:

-   **Required new skills:** Would VA development teams need to hire or learn new skills, or could those teams build on their existing capabilities?
    
-   **Short-Term Tradeoffs:** What are the considerations for development cycles, including speed of development, access to device features, and ease of tooling?  
    **Long Term Tradeoffs:** What are the impacts to long-term development roadmaps, such as bug fixes, platform updates, and maintenance costs?
    
-   **Debugging Tools:** What is the ease of identifying, finding, and fixing issues?
    
-   **Infrastructure Reuse:** What is the degree of reuse for infrastructure such as CI and deployment pipelines?
    
-   **Requires API Work and Strategy:** Will API work need to be done on the backend to support a mobile app?

We evaluated frameworks within each approach by considering:

-   **Front-End Skills:** What front-end skills would the engineering team need to have to be successful?
    
-   **Mobile Skills:** What mobile app specific skills would the engineering team need to have?
    
-   **Skill Availability:** How difficult might it be to find developers with the required skills?
    
-   **Authentication Screens:** Could this framework re-use the authentication screens from VA.gov?
    
-   **VA.gov Front-end Code Re-use:** Does this framework allow us to re-use VA.gov front-end code and modules?
    
-   **Client-side API Re-use:** Does this framework allow us to re-use client-side API code?
    
-   **Infrastructure Reuse:** Can existing infrastructure (such as build pipelines) be leveraged?
    
-   **VA.gov "Private" APIs:** Does this framework allow easy access to the VA.gov unpublished APIs that provide personal info such as claims and prescriptions?
    
-   **Lighthouse APIs:** Does this framework allow easy access to Lighthouse APIs via OAuth?

  


### When, or under what conditions, would you recommend revisiting this design decision? E.g., after usability testing, after launch when metrics or analytics equal X, etc.

This decision to use React Native should be revisited as features become more complex. With more customization and upgrades, it is likely the VA will reach a point where a rebuild is required, and the app would be re-built in iOS and Android using native technologies like Swift and Kotlin.

## Decision 3: Initial Feature Set for MVP

### What did you decide on?
The initial feature set will focus on: 
- Accessibility
- Onboarding
- Navigation
- Notifications
- Authentication
- Share
- Profile
- Claims
- Facility Locator
- Veteran Crisis Line
- Appointments
- Secure Messaging- see MVP feature set [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/product/secure-messaging/SM%20Mobile%20MVP%20Feature%20Recommendations.pdf)
### Document the people who agreed to the design decision

-   Charles Worthington
    
-   Clarice Chan

### What was the deciding factor for your decision?

There were three deciding factors to this decision:

1. What features are "table stakes" for a mobile app?
2. What features do users want?
3. What features can we implement in an MVP?

As far as table stakes, we found that there are a set of features that are basic requirements for users in a mobile app. These features include the ability to authenticate into the app, facility locator, Veterans crisis line, profile and notifications. These features are use cases that are best-suited for mobile because they take advantage of unique components of a mobile phone. For example, Veterans crisis line integrates with the call functionality and facility locator leverages navigation. Without these features, there wouldn't be a clear distinction between what is available on VA.gov and what is in the app.

As far as what users want, our testing indicated that participants were interested in both claims and health features, but overall more interested in health than claims. This is likely for two reasons. First, Veterans may interact with health features over a longer period of time - once a claim is filed and a decision is given, Veterans may stop needing claims features as urgently, depending on the nature of their claim. Second, the people we spoke with were not all actively going through a claim at the point in time when we talked to them.

As far as technical viability for an MVP, we found that there is unique technical complexity with health features such as RX Refill that there isn't with claims. For example, these health features are not available in Lighthouse (which isn't a requirement for the mobile app but did make it easier for us to experiment with the claims API because it was available in Lighthouse) and many of the health features are being reimagined as part of the health tools work so it makes sense for the app to wait until that work is complete. 

Combining these three takeaways, we decided to include all of the table stakes features in the MVP and focus on claims for the first release. This will let us get something out the door quickly to test its viability and then we can add health features and dive into the technical complexity with more time.

### What other options did you consider?

There is a wide range of features that we considered but the most significant features that we considered but did NOT include in the MVP are:

- Appointments (at least not in the first, 3-month release)
- Secure messages
- RX refill

We opted not to include them because of their (1) technical complexity and (2) the ongoing health tools work.

### When, or under what conditions, would you recommend revisiting this design decision? E.g., after usability testing, after launch when metrics or analytics equal X, etc.

- If the timeline for the MVP is extended and we are able to build additional health features
- If usability testing demonstrates that users simply will not adopt an MVP that does not include health features


## Decision 4: Use SSOe OAuth for authentication 
_Note: Implementation details relating to the decision is under review in [this PR](https://github.com/department-of-veterans-affairs/va.gov-team/pull/12482)_

### Describe the problem this decision is trying to solve.
The VA mobile app needs to authenticate users. What mechanism should the app use for sign in?

### Describe any design, technology, and/or policy constraints that impact the problem and/or its possible solutions.
- Mobile apps are well suited to using OAuth for anuthetication
- There are two readily available OAuth servers in the VA.gov domain: Okta (via Lighthouse) and SSOe

### What did you decide on?
The VA mobile app will use SSOe OAuth to authenticate users into the app.
 
### What other options did you consider?
- Okta OAuth
- VA.gov / SAML approach 

See initial set of options [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/tech-research/20200319%20Login%20Recommendations.md)

### What was the deciding factor for your decision?
1. **Mobile-specific:** OAuth is a standard authentication method for mobile apps that is flexible, whereas SAML was not created with modern mobile apps in mind and lacks flexibility for non-web applications.

2. **Cost:** Okta has a cost per-user, and given we expect the population of users who will use the app will be large (more akin to the number of users that use VA.gov than the number of users that connect VA.gov to third-party apps), we expect that cost could be high.

3. **UX of login and consent screens:** Neither Okta or SSOe login screens have great UX. Although Okta's screens have been improved, because both have their own UX issues, this ultimately was not a deciding factor. 

4. **VA trends and momentum:** There has been a year-long effort to migrate VA.gov to SSOe for authentication and given the mobile app aligns most closely with VA.gov (rather than third-party consumers such as Apple Health), SSOe seemed like the appropriate direction for the mobile to go.

### Document the people who agreed to the design decision (and their roles on the project).
We are continuing to socialize this decision and awaiting a designated Tech Lead from VA, so for now we have gotten approval from:

- Michael Fleet (VSP Tech Lead)
- John Paul Ashenfelter (VSP Tech Lead)


### When, or under what conditions, would you recommend revisiting this design decision? E.g., after usability testing, after launch when metrics or analytics equal X, etc.
- If VA.gov changes their authentication mechanism, the mobile app will most likely need to change as well.
- If VA wanted login to work across its suite of mobile apps (including VHA apps like RX refill), it would be worth exploring whether there are better ways to do this beyond only using OAuth.


## Decision 5: Build Mobile API inside of vets-api

### Describe the problem this decision is trying to solve.
The VA Mobile app needs an API. Since VA.gov is powered by vets-api and VSP, it seems like a natural fit for the mobile app to be powered by APIs in the same space.

### Describe any design, technology, and/or policy constraints that impact the problem and/or its possible solutions.
- many backend integrations are already configured in vets-api, building them separately would be time-consuming
- VSP is in place for just this type of work
- the API must be versioned to support multiple app releases with ongoing features and improvements
- every app release creates a virtual "api version" that must remain operational until that app version is sunsetted (which should be a long time into the future to support users with old devices)

### What did you decide on?
- we will build the mobile API inside of vets-api, under the `/mobile` namespace

### What other options did you consider?
We considered several other options, briefly listed here, from most to least practical:
1. connect the mobile app to VA.gov endpoints in-place, adding versioning to retain backwards-compatibility
2. building a GraphQL (or GraphQL-like) endpoint to handle flexible requests from mobile apps (and VA.gov)
3. build a mobile API _outside_ and _in front of_ vets-api, proxying the VA.gov responses to mobile
4. build a mobile API separately from vets-api, re-building all the backend integrations

### What was the deciding factor for your decision?
Availability of backend integrations, as well as support from the VSP team to build inside of vets-api

### Document the people who agreed to the design decision (and their roles on the project).
([design doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/design-docs/2020-08-17-mobile-api-design-doc.md) is still in Draft phase)
- Andrew Gunsch
- John Paul Ashenfelter
- Michael Fleet

### When, or under what conditions, would you recommend revisiting this design decision? E.g., after usability testing, after launch when metrics or analytics equal X, etc.
We feel like this decision will be rather permanent, as much as the VSP is permanent. If mobile app usage increases to a point that vets-api can not handle, then we could consider extracting the mobile api presentation layer into a separate project, possibly similar to option 4 above.


## Decision 6: Mobile OS Support: which mobile operating systems will the app run on?
When building a mobile app, minimum OS compatibility must be selected. Supporting older operating systems allows more potential users to be able to run the app, but also may cause support issues as older hardware and unsupported operating systems need to be maintained.
Supporting only newer operating systems reduces the maintenance complexity of the app, but also reduces the number of people who may install the app. A balance must be achieved here.

### What did you decide on? (August 2020)
- iOS: support version 12 (previous), 13 (current), and 14 (beta, to be released in September 2020)
- Android: support API version 26 and above

### Document the people who agreed to the design decision (and their roles on the project)
- Steve Kovacs (DEPO)

### What did you decide on? (June 2021)
- iOS: support version 13 (previous), 14 (current), and 15 (beta, to be released fall 2021)
- iOS version 12 was dropped because 1. it's previous, 2. the Apple sign-in component we are using is only supporterd in 13+
- Android: support API version 26 and above - no change

### Document the people who agreed to the design decision (and their roles on the project)
- Leanna Miller (Mobile product owner, USDS)
- Travis Newby (Mobile Strategist, USDS)

### What was the deciding factor for your decision?
We considered hardware and OS mantenance issues more heavily than a larger user base. By accepting more users with older OS's, we will also be accepting more maintenance issues. Also noted was that many folks keep older Android devices for web browsing only, so the GA stats for VA.gov may be skewed older.

### What other options did you consider?
We started with the thought of supporting API 21, which would cover most users from GA analysis.

### When, or under what conditions, would you recommend revisiting this design decision?
This decision should be revisited at least yearly, as new OS releases are published. At that time we may consider keeping or dropping support for the oldest supported OS. In June, Apple generally releases the beta version of the next iOS. From June-August we will test with the new beta, and decide whether the "previous" OS version should be kept (default to drop, only keep supporting it for some special circumstance).

## Decision 7: Device Testing Matrix

### Describe the problem you are trying to solve.
The VA Mobile App will need to test builds and UI accross a wide rage of screen sizes and operating system versions. We will need to decide what real devices are needed for testing.

### Describe any design, technology, and/or policy constraints that impact the problem and/or its possible solutions.
The VA mobile app will be on Android devices with Android Operating System (OS) 26+ and on iOS devices OS version 12+. We will need to find an array of devices that hit all of these OSes as well as hit a large number of viewport sizes. The goal is to maximize the cross sections of these constraints with the least number of devices. 

### What did you decide on?
VA Mobile app team has decided to use the following real devices for testing: 

| OS      | DEVICE                     | SCREEN SIZE |
|---------|----------------------------|-------------|
| iOS     | iPhone SE                  | 320x568     |
| iOS     | iPhone XR                  | 375x812     |
| iOS     | iPhone 11                  | 414x896     |
| Android | Samsung Galaxy S7          | 360x640     |
| Android | Samsung Galaxy S9          | 360x740     |
| Android | Samsung Galaxy Note9       | 412x846     |
| Android | Motorola Moto G7 Power     | 360x760     |
| Android | Google Pixel 3XL           | 412x846     |
| Android | LG LM-Q720 Stylo 5         | 412x823     |

These devices should cover the range of OSes and screen sizes to maximize the opportunity to fix any resolution or OS issues within the app before release. 

### Document the people who agreed to the design decision (and their roles on the project)
- Steve Kovacs (VA DEPO)

### What was the deciding factor for your decision?
- Test devices should cover all of the current OS versions the app is targeting
- Test devices should cover the widest array of screen viewport sizes possible
- Test devices should not need to be rooted or jailbroken to load the target OS. It should have received the update from the phone vendor, not the user
- For Android, even though the highest used devices were Samsung, it is important for VA to test devices from other companies as well (Motorola, Google and LG)

### What other options did you consider?
A device at 320x658 was searched for to find the bottom-end of screen widths, but no devices we found were avaiable on Android version 26+. We decided to move these resolution tests to an emulated device and to add the Samsung Galaxy S7 to pick up the 360x640 resoltion sizes. 

### When, or under what conditions, would you recommend revisiting this design decision?
Recommendation to revisit this matrix any time the taget OS versions are changed for the app, as well as any time a phone vendor releases a significantly different viewport size/configuration with high adoption. **Basically once or twice a year.** Consideration will also need to be made on a case by case basis on whether to test for newer format devices with folding screens or non-standard screen configurations like the LG Wing.



## Decision 8: Only Users with logon credentials at Level of Assurace (LOA) 3 will be allowed to use the app
Users can sign in using their account from one of three supported identity providers (DSLogon, ID.me, MHV). An account's level of verification determines their LOA classification: LOA1 (unverified), LOA2 (verified), LOA3 (fully verified with ID-proofing and/or MFA). We need to decide the minimum LOA required to allow access to the credentialed areas of the app.

### What did you decide on?
LOA3.

_Note: vets-api considers "LOA2" and "LOA3" to be equal for the purposes of access control._

LOA1 users are permitted to sign in on VA.gov, but no personal information can be accessed or modified until they "ID-proof" with their identity provider (IdP). ID-proofing brings their credentials up to LOA3. Since the mobile app provides parallel access to features as VA.gov, we decided to mirror the VA.gov access threshold.

Table of sign-in types
| IdP   | LOA   | result after sign in |
| ----- | ----- | -----                |
| DSLogon | LOA2 | allowed in the app |
| ID.me (no MFA) | LOA1 | ID.me flow asks the user to ID-proof before being allowed in the app |
| ID.me (with MFA) | LOA3 | allowed in the app |
| MHV Premium | LOA2 | allowed in the app |
| MHV Advanced | LOA1 | _(needs confirmation)_ user is asked to ID-proof with ID.me |
| MHV Basic | LOA1 | _(needs confirmation)_ user is asked to ID-proof with ID.me |

We are considering adding some messaging on the login screen to set expectations with users before they enter the sign in flow.

### Document the people who agreed to the design decision (and their roles on the project)
- Steve Kovacs (VA DEPO)

### What was the deciding factor for your decision?
There were multiple factors that led to this decision:
- The SSOe OAuth flow (and VA Access pages) define these rules. The mobile team does not have strict control over that process or the ability to make major changes to the process. SSOe does not allow LOA1 users to exit the sign in flow.
- DSLogon no longer supports LOA1 accounts. They only have the deprecated LOA2 and are moving all their accounts to LOA3. This helps us.
- The request from the mobile app for log in on ID.me is for LOA3, and if a user is not LOA3 then ID.me forces a user to initiate and complete verification for LOA3 before logging them into the application. This helps us as well.

Since the app is meant for users to get personalized task done quickly, not to browse documents or submit forms, there is currently no reason to design for LOA1 users.

### What other options did you consider?
- Allow LOA1 users into the app, but restrict them from viewing personal information. This would require in-app ID-proofing to keep the app from being worthless to the LOA1 cohort. In-app ID-proofing was deemed to be a moderate lift, and the frustrating experience of LOA1 users was also considered: excitement in discovering the app, high effort sign-in process, only to be presented with no personal info and being asked to "do more". Allowing LOA1 is also a high-lift for the IAM team to modify SSOe OAuth service.

- Only allow DSLogon and ID.me LOA3 users. This was discounted because it would prevent the high numbers of MHV users from accessing the app. 

### When, or under what conditions, would you recommend revisiting this design decision?
This decision should be revisited once the MHV flow is able to be tested and confirmed to ensure that the decision still holds. Barring any issues with that, this should be revisited after VA Access or any of the identify providers change what LOAs are allowed to log in through the mobile auth portal. If VA.gov changes their access policies, the app should consider changing as well.

## Decision 9: Include Secure Messaging for App Store Launch
### What did you decide on?
After discussing feature sets with Veterans and stakeholders, as well as assessing the technical APIs available from the MHV team, we decided include a version of secure messaging with key features on the mobile app for app store release.

### Document the people who agreed to the design decision (and their roles on the project)
- Steve Kovacs (Product Owner)
- Ayush Chakravarty (Product Manager)
- Ashley Matthews (Product Manager, Secure Messaging)
- Martha Wilkes (Designer)

### What other options did you consider?
The alternative was to focus on claims and appeals, without including secure messaging and instead including it in later iterations of the app.

### Deciding Factor
We ultimately saw that an app without secure messaging may have been a fairly narrow feature set for our broader veteran target user base.

### When, or under what conditions, would you recommend revisiting this design decision?
After app store release, once we have additional usage data, bug fixes, and UX feedback, we should revisit the approach to secure messaging within the app.

## Decision 10: App Store release to be in May/June
We are working to determine waht release will look like for the VA mobile app in Apple and Google app stores. How do we release, and what kind of visibility is required?

### What did you decide on?
We expected that there would be a quiet release in May. However, the VA mobile app work has become significantly more visible to a wider swath of stakeholders since March/April, which has changed our approach. We now hope to extend user acceptance testing and ramp up efforts to strengthen our initial release and reduce risks of any performance problems.

### Document the people who agreed to the design decision (and their roles on the project)
- Leanna Miller (Product Owner)
- Bridget Hapner (Design Lead)
- Ayush Chakravarty (Product Lead)
- Ashley Matthews (Product Manager)
 
### What was the deciding factor for your decision?
The increased visibility and excitement in the VA Mobile App led the team to appraoch this more carefully.

### What other options did you consider?
The alternative was to launch with no publicity and do so earlier, and take on the rsik that accompanies limited testing. We would anticipate more bugs and user issues after app store release, which would have been too risky given the current stakeholder climate.

### When, or under what conditions, would you recommend revisiting this design decision?
We are constantly revisiting this decision as we come closer to our general launch date, and our findings from user acceptance testing (UAT) will largely inform our approach to app store release.

## Decision 11: Do we need to conduct load testing?
This question is trying to anticipate the ambiguity of our user volume at the time of app store launch. There are no key constraints to the load testing process other than the lack of historical data about VA mobile app usage under the current market conditions.

### What did you decide on?
We opted to limit our load testing since our estimated user count (at a maximum of about 5,000 users) is relatively low for beginners, and per our conversations with Dror Matalon, engineering director, even if our user volume were three orders of magnitude higher, we would still not require load testing given the existing infrastructure. 

### Document the people who agreed to the design decision (and their roles on the project)
- Leanna Miller (Product Owner)
- Ayush Chakravarty (Product Manager)
- Alastair Dawson (Developer)
- Jonathan Julian (Engineering Lead)
- Dror Matalon (Engineering Director)

### What was the deciding factor for your decision?
The update from the VA Engineering Director, Dror Matalon, confirmed that we did not require load testing given the estimates of user volume.

### What other options did you consider?
The other option was to conduct load testing./

### When, or under what conditions, would you recommend revisiting this design decision?
As our user base grows, we will certainly revisit the decision to not do load testing. Specifically, if usage grows by an order of magnitude more than expected, we will begin preparations to do load testing.


## Decision 12: Become a VFS Team

### Background
In September 2020, it was decided that Flagship Mobile App (VA: Health and Benefits) would not be considered a VFS. Although Flagship’s backend was built as a module in vets-api, the collaboration cycle was still in its infancy; it was not at all clear how the mobile team would participate. It was also not at all clear whether the mobile app would be a short term experiment or a longer-lived success.

Fast forward to today (2022): Flagship Mobile App is used by almost 150k Veterans per week. The number of Veterans using the app is increasing daily, and OCTO leadership has made a commitment to building on this success. It is time to reconsider Flagship Mobile App’s status as a VFS.

### Describe any design, technology, and/or policy constraints that impact the problem and/or its possible solutions.
- Due to platform policies, non-VFS teams do not get the same level of support as VFS teams.
- Because of the Flagship Mobile App's growing userbase, it's important that the app and its backend receive the same level of support as other VFS teams.

### What did you decide on?

- Moving forward, consider the Flagship Mobile App a VFS. Platform will provide regular support for the Flagship Mobile App backend, and tailored support for the Flagship Mobile App frontend.
- Onboard the Flagship Mobile App team as a VFS. This may require some tailoring, since the mobile app is not a new project or a new team. There are team members who have participated in collaboration cycle previously.
- Tailor the VFS process for a mobile app: because the backend is built in vets-api, the backend will be treated as a VFS and participate in collaboration cycle. Because there are no processes in place for collaboration cycle to support mobile apps, the mobile app frontend will be exempt.

### Document the people who agreed to the design decision (and their roles on the project).

- Leanna Miller (VA Mobile Product Owner)
- Travis Newby (VA Mobile Engineer)
- Mike Chelen (VA Platform Crew Lead)


### When, or under what conditions, would you recommend revisiting this design decision? E.g., after usability testing, after launch when metrics or analytics equal X, etc.

- If collaboration cycle is modified to support mobile apps, revisit the decision on the Flagship Mobile App frontend participating.
- If vets-api architecture is reconfigured or Flagship moves away from being a module in vets-api, reconsider Flagship as a standalone project.
- Revisit in 6 months to make sure all of this makes sense and is working for Platform and Flagship.


# Open Questions, with decisions pending:

## Decision 13: Should we co-brand parts of the app?
We are trying to address user expectations around what features in the app look like, and looking at how we can leverage app branding to shape expectations in partnering with MyHealtheV#et (MHV). Due to a lack of data, we are not clear on what users might feel regarding co-barding the VA Mobile App's health features with MHV. We are leveraging unmoderated card sort activities to learn more about user behaviors and expectations in this area.

### What did you decide on?
We are still working towards a decision, that will be informed by the data that we receive from the study.

### Document the people who agreed to the design decision (and their roles on the project)
- Leanna Miller (Product Owner)
- Ayush Chakravarty (Product Manager)
- Alex Taylor (Design Lead)

### What was the deciding factor for your decision?
The data from our study will determine the best path forward, to either brand with MHV features or to abstain from such branding entirely, whichever benefits Veterans' experience more.

### What other options did you consider?
TBA

### When, or under what conditions, would you recommend revisiting this design decision?
We will review this decision upon app store release and additional testing of this language in both the Google Play Store (where we can A/B test language about the app in the app store).




------------------------------
# Other Decisions we need to elaborate on:
* Decision: the mobile app will not source any content from a CMS
* more API work needed: we will work with VEText to define a push notification and preferences api for appointments (@alastair, @jonathan)
* Decision: MVP will not have any specific tablet support
* the app will be built and released under the official VA accounts
* we will support accessibility WCAG, more discussion tomorro
------------------------------

# Decision name: provide a brief background of the problem
Describe the problem this decision is trying to solve
Describe any design, technology, and/or policy constraints that impact the problem and/or its possible solutions
## What did you decide on?
Describe the design decision you made
## Document the people who agreed to the design decision (and their roles on the project)
- name (role)
- name (role)
## What was the deciding factor for your decision?
Generally there are a few factors here, list them all
## What other options did you consider?
List them all for completeness, also to inform someone new to the project
## When, or under what conditions, would you recommend revisiting this design decision?
E.g., after usability testing, after launch when metrics or analytics equal X, etc.


# Future Decisions
- APIs will be accessed via… vets-api
- Push notifications will be managed by [home-grown service] or [SaaS PN provider]
- New mobile-only endpoints will be built into [vets-api]
