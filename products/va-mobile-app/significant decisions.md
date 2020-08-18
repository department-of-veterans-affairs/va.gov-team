# Building a VA Flagship Mobile App - Significant Decisions

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



# Decision 1: Should the VA build a flagship mobile app?

## What did you decide on?
Yes. After a four-week discovery sprint, followed by 10-weeks of research and validation, VA decided to move forward with building a native mobile app. The alternatives were to not build an app, or build one that isn’t native (such as a PWA or hybrid app).


## What was the deciding factor for your decision?

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
    

## What other options did you consider?

-   Not building any new mobile apps
    
-   Improving responsive web experience of existing VA websites
    

## When, or under what conditions, would you recommend revisiting this design decision? E.g., after usability testing, after launch when metrics or analytics equal X, etc.

The decision to build an app should be revisited as features are released and metrics are evaluated to determine whether a mobile app is uniquely meeting user needs. For example, the most simplistic measure of this will be if users are not downloading the app, or downloading and removing it. More specific KPIs will be determined as features evolve and these should be monitored closely to ensure the app is adding value.

  


# Decision 2: How should a VA mobile app be built?

## What did you decide on?

VA should build the mobile app using primarily React Native

## Document the people who agreed to the design decision

-   Charles Worthington
    
-   Clarice Chan
    

## What was the deciding factor for your decision?

React Native was chosen because it expedites development and deployment to both iOS and Android platforms, uses similar skillsets to web-based React (as used on VA.gov), and allows the level of UX that Veterans desire.

The deciding factors were:

1.  Component reuse
    

Though React Native will not allow for component reuse the way a Hybrid approach would, it will allow for logical reuse (i.e., the business logic used to build pages on VA.gov could be leveraged when building in React Native).

2.  Ability to achieve the desired UX
    

Based on our user research, it was clear that the app will have custom features that require integration of mobile capabilities such as phone or camera. This ruled out a PWA or Hybrid approach, since they do not allow for the same seamless integration with phone hardware. React Native also allows for customization while still being able to leverage its cross-platform widgets that expedite development.

3.  Ease of use for developers.
    

Similar skillsets are required for React Native and React, which would make the potential transition for VA.gov developers easier. Developers also enjoyed working in the platform and found it easy to deploy the app to both Android and iOS devices. Using React Native would only require one codebase, whereas a fully native app would require two (one Android and one iOS), effectively doubling the amount of developer effort.

  

## What other options did you consider?

Alternative Approaches and Frameworks:

###   Fully native: Applications are built using the tools and languages provided by the platforms
    
  -   iOS
    
  -   Android
    
###   Cross Platform; Applications are built from one codebase that abstracts the device capabilities. The advantage here is that one team can build one app to be delivered to both app stores (iOS and Android).
        
  -   Xamarin
    
  -   NativeScript
    
###   Hybrid; Applications are built using familiar web development tools, and the app runs as a web app within a native app wrapper. Hybrid apps containing a JavaScript-runtime are built and submitted to the app stores. An example is the Twitter mobile app, which uses much of the same UI components as twitter.com.
    
  -   Ionic
       
  -   Flutter
    
###   PWA (Progressive Web App); Not actually a mobile app at all, but rather a web application that runs in the mobile browser and can be “pinned” to the device home screen to look like an app. A popular example is app.starbucks.com.

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

  


## When, or under what conditions, would you recommend revisiting this design decision? E.g., after usability testing, after launch when metrics or analytics equal X, etc.

This decision to use React Native should be revisited as features become more complex. With more customization and upgrades, it is likely the VA will reach a point where a rebuild is required, and the app would be re-built in iOS and Android using native technologies like Swift and Kotlin.

# Decision 3: Initial Feature Set for MVP

## What did you decide on?
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
## Document the people who agreed to the design decision

-   Charles Worthington
    
-   Clarice Chan

## What was the deciding factor for your decision?

There were three deciding factors to this decision:

1. What features are "table stakes" for a mobile app?
2. What features do users want?
3. What features can we implement in an MVP?

As far as table stakes, we found that there are a set of features that are basic requirements for users in a mobile app. These features include the ability to authenticate into the app, facility locator, Veterans crisis line, profile and notifications. These features are use cases that are best-suited for mobile because they take advantage of unique components of a mobile phone. For example, Veterans crisis line integrates with the call functionality and facility locator leverages navigation. Without these features, there wouldn't be a clear distinction between what is available on VA.gov and what is in the app.

As far as what users want, our testing indicated that participants were interested in both claims and health features, but overall more interested in health than claims. This is likely for two reasons. First, Veterans may interact with health features over a longer period of time - once a claim is filed and a decision is given, Veterans may stop needing claims features as urgently, depending on the nature of their claim. Second, the people we spoke with were not all actively going through a claim at the point in time when we talked to them.

As far as technical viability for an MVP, we found that there is unique technical complexity with health features such as RX Refill and Secure Messaging that there isn't with claims. For example, these health features are not available in Lighthouse (which isn't a requirement for the mobile app but did make it easier for us to experiment with the claims API because it was available in Lighthouse) and many of the health features are being reimagined as part of the health tools work so it makes sense for the app to wait until that work is complete. 

Combining these three takeaways, we decided to include all of the table stakes features in the MVP and focus on claims for the first release. This will let us get something out the door quickly to test its viability and then we can add health features and dive into the technical complexity with more time.

## What other options did you consider?

There is a wide range of features that we considered but the most significant features that we considered but did NOT include in the MVP are:

- Appointments (at least not in the first, 3-month release)
- Secure messages
- RX refill

We opted not to include them because of their (1) technical complexity and (2) the ongoing health tools work.

## When, or under what conditions, would you recommend revisiting this design decision? E.g., after usability testing, after launch when metrics or analytics equal X, etc.

- If the timeline for the MVP is extended and we are able to build additional health features
- If usability testing demonstrates that users simply will not adopt an MVP that does not include health features


# Decision 4: Use SSOe OAuth for authentication 

## Describe the problem this decision is trying to solve.
The VA mobile app needs to authenticate users. What mechanism should the app use for sign in?

## Describe any design, technology, and/or policy constraints that impact the problem and/or its possible solutions.
- Mobile apps are well suited to using OAuth for anuthetication
- There are two readily available OAuth servers in the VA.gov domain: Okta (via Lighthouse) and SSOe

## What did you decide on?
The VA mobile app will use SSOe OAuth to authenticate users into the app.
 
## What other options did you consider?
- Okta OAuth
- VA.gov / SAML approach 

See initial set of options [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/tech-research/20200319%20Login%20Recommendations.md)

## What was the deciding factor for your decision?
1. **Mobile-specific:** OAuth is a standard authentication method for mobile apps that is flexible, whereas SAML was not created with modern mobile apps in mind and lacks flexibility for non-web applications.

2. **Cost:** Okta has a cost per-user, and given we expect the population of users who will use the app will be large (more akin to the number of users that use VA.gov than the number of users that connect VA.gov to third-party apps), we expect that cost could be high.

3. **UX of login and consent screens:** Neither Okta or SSOe login screens have great UX. Although Okta's screens have been improved, because both have their own UX issues, this ultimately was not a deciding factor. 

4. **VA trends and momentum:** There has been a year-long effort to migrate VA.gov to SSOe for authentication and given the mobile app aligns most closely with VA.gov (rather than third-party consumers such as Apple Health), SSOe seemed like the appropriate direction for the mobile to go.

## Document the people who agreed to the design decision (and their roles on the project).
TBD

## When, or under what conditions, would you recommend revisiting this design decision? E.g., after usability testing, after launch when metrics or analytics equal X, etc.
- If VA.gov changes their authentication mechanism, the mobile app will most likely need to change as well.
- If VA wanted login to work across its suite of mobile apps (including VHA apps like RX refill), it would be worth exploring whether there are better ways to do this beyond only using OAuth.




# TEMPLATE: Provide a brief background of the problem.
* Describe the problem this decision is trying to solve.
* Describe any design, technology, and/or policy constraints that impact the problem and/or its possible solutions.
* Describe the design decision you made.
* What did you decide on?
* What other options did you consider?
* What was the deciding factor for your decision?
* Document the people who agreed to the design decision (and their roles on the project).
* When, or under what conditions, would you recommend revisiting this design decision? E.g., after usability testing, after launch when metrics or analytics equal X, etc.


# Future Decisions
- APIs will be accessed via… vets-api
- Push notifications will be managed by [home-grown service] or [SaaS PN provider]
- New mobile-only endpoints will be built into [vets-api]
