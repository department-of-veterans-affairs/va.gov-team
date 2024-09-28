# [Archive] Product Outline: VA Mobile App MVP
---

## Overview
The VA mobile app MVP is a native app built in React Native with features that cut across VA (VBA and VHA). 

- From a user perspective, the goal of the MVP is to make it easier and faster for users who are already engaged with VA to complete small transactions related to their existing account.
- From a technology perspective, the goal is to use what is available today rather than create new services. 
- From a business perspective, the goal is to release a flagship quickly in order to assess whether it meets a user need and warrants further investment. 

## Problem Statement
To complete quick transactions, such as checking a claim status or looking at upcoming healthcare appointments, Veterans have to seek out this information by logging in to VA.gov, which in and of itself can be laborious and time consuming. From there, Veterans have to locate the information they are interested in and seek any updates from VA. This process is frustrating for users and forces them to seek out information on their own rather than VA providing it to them.

How might we enable Veterans to complete quick transactions across VA? 

## Definition of MVP
While our [research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/feature-brainstorm/Mural%20-%20MVP%20Feature%20Planning.pdf) suggests that there are multiple pain points that a mobile app might solve, the purpose of the MVP is to scope as narrowly as possible in order to validate the product's purpose. Because of the [existing mobile landscape at VA](https://adhoc.slack.com/archives/CKW4XL3GS/p1598041175003200) (including VA.gov on mobile), it is key to determine early whether a flagship app fills a hole or simply adds confusion. By analyzing usage on the MVP, VA can iterate in whatever direction users lead them (ie, if users are actively engaging with the specific features on the flagship, it may make sense to iterate on those whereas if there is low adoption of the app, it may not make sense to iterate). 

To define what features should be in the MVP and app store release vs. features that should be put on the backlog for future releases, we have defined the following guidelines:
- Features in the app must leverage existing VA technology (ie, new services and systems should not be built for the mobile MVP)
- Features in the app must make transactions easier and faster for users (ie, features that are helpful but do not serve this purpose, should not be built for the MVP)
- For benefits, features that require significant investment or organizational coordination should not be built for the MVP (i.e., features that require significant stakeholder alignment and collaboration should not be bult for the MVP)

## Desired User Outcomes

The overarching outcome of combining these native features into one app is that it will make it simpler and faster for users to interact with VA and complete day-to-day transactions.

- Traffic on VA.gov suggests that nearly 40% of users are accessing the site on their mobile devices. Even more, analytics suggest that a high volume of users are accessing the site for short durations to do quick tasks, such as to access the facility locator or view claim status. 
- One of the biggest pain points for users who come to VA.gov for these short interactions is the time and effort it takes to log in. A mobile app provides unique opportunities to optimize this experience by leveraging biometric login, which will make it so that users can login to the VA mobile app and remain logged in for up to 45 days.
- By leveraging other native phone features such as notifications, a mobile app can send status updates to users in real time rather than users having to continuously check VA.gov for changes. Similarly, by leveraging the phone functionality and navigation, users will be able to call/text/chat VA services directly from the app and initiate map functionality if they are going to a VA facility and need directions, for example. 

## Undesired User Outcomes
Adding another medium to VA's digital ecosystem could cause confusion for users if the intent of the app isn't communicated clearly.

## Desired Business Outcomes
Empower business lines to provide targeted communication to Veterans. By building a mobile app, business units have the opportunity to close some of the existing communication gaps that exist at VA. For example, business units will be able to push notifications to users when pertinent information is available on either an individual or VA-wide level. This reduces the burden on Veterans themselves from having to navigate through VA to track down the status of their claims, or when their next healthcare appointment is. 

## Undesired Business Outcomes
Create traffic control issues between existing platforms (eg, notifications that are sent on the app should be consistent and in sync with notifications that the business lines are sending via other platforms)

---
## Measuring Success

For a full view of our approach to metrics, please refer to the following resources:

[Metrics Roadmap](https://app.mural.co/t/adhoccorporateworkspace2583/m/adhoccorporateworkspace2583/1615817732074/349cb44956c8dcb928e2d976825cde2131844002)
[Detailed Metrics List](https://docs.google.com/spreadsheets/d/1G-Ru00IIEVCeMbYMqWVDTLO0f4WDdVrchPp0dIHM1N4/edit#gid=0)
  - Tier 1 Metrics are those that we hope to measure within the first iteration of the app store release
  - Tier 2 and 3 Metrics are ideally measured within the first iteration, but we can track trends when making product decisions for future iterations of the app.

### Key Performance Indicators (KPIs)

To determine whether our app is delivering value to users, we will initially be most interested in KPIs related to transaction completion. The volume of users is not of key concern until it is established that the app is able to match performance for key transactions on VA.gov

- Successful login rates
- Daily Active Users (DAU)
- Time spent on key features (secure messaging, claims, profile, appointments)
- Adoption of biometrics
- Device type
- Error types and persistence
- Performance when scaling

#### Baseline KPI Values

Our baseline KPI values come from VA.gov and MHV statistics on usage and transaction times. Our current goal is to match those transaction times in the mobile app store at release.

### Themes for Key Metrics

1. Findability
- Downloads
- Logins
- number of appearances in app store searches before and after SEO

2. Ease of Use
- Adoption of biometrics
- Login rates compared to VA.gov users
- Repeat usage (sessions per user)

3. Service Completion
- Time to login
- Persistence of login
- % of users performing at least one transaction
- Start-completion rates for each feature (ie Time to send a message)

4. Trust, Satisfaction, and Equity 
- App Store rating
- Referrals
- Reviews
- Accessibility reviews

[Objectives & Key Results](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/product/Mobile-OKRs.md)

---

## Assumptions

- Our riskiest assumption is that this app should be one multi-purpose app rather than multiple single-purpose apps. In other words, we are combining claims and health features into one app but we may find that a subset of users use the app for a singular purpose, like claims, but do not touch the health features at all.
## Solution Approach

*What are you going to build now, and why have you decided to start there?*
- We are starting with a multi-purpose app because user testing validated that users are interested in an app that contains both feature sets. 
Additionally, one of the pain points we heard from users was that VA can feel fragmented and challenging to navigate. As a result, we think that consolidating these features in one place rather than adding additional complexity to the VA digital landscape is the right place to start.

*Why this solution / approach over other solutions / approaches?*
- This approach was chosen because we know that there are both healthcare and claims features that users want. Since both types of features tested well and users did not have concerns about them being accessed in the same place, we want to start with a multi-purpose app and unbundle it if/when we see usage patterns that suggest features in our app might be better suited to be a single-purpose app.

*What have you explicitly decided to not include in this initial set of functionality, and why?*
- We are not including health features such as Secure Messaging and RX Refill because these features are being reimagined in the health tools effort. Therefore, it doesn’t make sense for us to build them into our app when there could be changes made to them in the coming months. 

*How will the solution / approach evolve after this initial build (knowing that this will likely change as you learn from users along the way)?*
- This approach may evolve if we start to see users using the app for a singular reason such as facilities, claims or appointments. If we do see that type of usage pattern, we will need to reevaluate the single vs. multi purpose approach. 
--- 

## Go-to-market Strategy

- In Phase 1, we did a friendly release to a very small group of users, including veterans who work at the VA . This group will be predetermined and will be invited to use the app on Test Flight.
- In Phase 2, we had a quiet release. The app was made to be available in app stores but was not broadly marketed.
- In Phase 3, we will market the app and launch it publicly. Marketing measures may include putting a banner about the app on VA.gov, sending text messages to Veterans directing them to where they can download the app or using social media to get the message out.

## Launch Dates
- Phase 1: February/March 2021
- Phase 2: July 2021
- Phase 3: September 2021 onwards

*Actual Launch Date* 
- July 2021
