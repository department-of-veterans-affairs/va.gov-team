

# VA Mobile App - Personalized Home Screen - Product Brief 

August 2023

This work is part of the [VA Mobile App - Personalization project](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-mobile-app/features/design-personalization).


## Problem Statement

### Current Experience

The **VA Flagship mobile app** was [designed to help Veterans who are actively engaged with VA health and benefits services to keep track of their tasks and interactions across VA](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/product/Product-Outline.md#desired-user-outcomes). We have observed that research participants report that **they download the app to see if it can help them (but then don’t use it regularly)** and metrics indicate that **users who initially download the app do not actively use the app over time**. As a result, the VA mobile app may not be successfully **providing Veterans with a way to keep track of their activities across VA in a way that’s worth returning to**. 

Up to this point, the app has used a one-size-fits-all approach to the home screen that limits its perceived value to Veterans. In particular:



* Veterans don’t have a way to get a **quick overview of what VA is doing for them now or that something is needed from them** in order to keep things moving.
* Veteran **expectations and understanding** of what they think they can do in the mobile app are **limited and often inaccurate** (they want something to help them, and to know if the app is that thing).
* As the app adds more functionality or a Veteran gets more benefits from VA, Veterans have to do more work to complete tasks and find information related to them. 

We believe that these problems are making it more difficult for Veterans to realize how the app can help them which is resulting in **decreased user retention.**

### Desired Outcome - Hypothesis

We believe that **bringing personalized content to the VA mobile app’s home screen to new and current app users** will **help users to keep up with and manage their current interactions across VA** and **find value in the app that they aren’t discovering now**.

We will know we’re **right** when we see:



* An increase in **user comprehension of the app’s feature set.**
* An increase in **perceived current and future user value of the VA mobile app.**
* An increase in **user retention.**


## Business Goals

A more personalized VA Flagship mobile app drives forward the Flagship vision, its 2023 objectives, and directly funnels up to the OCTO goal of providing a personalized experience. 



* [**Flagship Mobile App Strategy**](https://docs.google.com/presentation/d/1j0rO2HvDwHDTzunG3judC1HXOiWfGNTXVciLAkurpRw/edit#slide=id.g1e78b87c057_0_159)
    * **Vision:** "Each Veteran is connected to the VA services that matter most to them, regardless of device, and without understanding the VA org chart.”
    * **Objective 1:** Veterans will use authenticated services that are highly personalized and valuable.
    * **Objective 3:** Increase active user base.
* [**OCTO-DE Goals**](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/strategy#readme)
    * Goal 6: Logged-in users have a personalized experience, with relevant and time-saving features.


### Roadmap

#### V1

The first version of Personalization will be a personalized home screen that offers  Veterans a snapshot of high-level details specific to them (ex. Disability rating) and an **[ overview of a Veteran’s current interactions with the VA (across multiple channels).](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/user-research/findings-summary.md#participants-want-a-page-that-is-focused-on-current-information-specific-to-them-rather-than-generalized-information-for-all-veterans)** The personalized home screen would:



* Give Veterans a high-level snapshot of their status within VA (“digital self”).
* Provide a persistent overview of their current interactions across VA in the app.
* Make it clear when a feature needs their attention.
* Demonstrate the value of the VA mobile app to Veterans without requiring them to dig into each individual feature.

#### V2 & Beyond

Subsequent Personalization iterations will _**not**_ be limited to the home screen and could include:



* **Push notifications** that [surface content and/or proactively notify them about tasks that are timely & relevant to their individual context](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/discovery-summary.md#veterans-want-new-information-to-be-clear-to-them-when-they-log-in-and-expect-to-receive-new-information-through-multiple-channels)
* **Personalized content on the home screen contains richer data and interactions** than v1 (example: embedding actions like “Pay my bill”).
* **Personalized onboarding** to instantly guide new users to the features most relevant to them
* [Ways to help Veterans **discover VA benefits** that they aren’t using yet](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/discovery-summary.md#the-logged-in-homepage-needs-to-scale-to-support-every-phase-of-the-veteran-lifecycle)
* **Allow users to connect with others who know their case** (inside & outside the VA)when they need **support & guidance navigating their benefits.** [(VA Benefit planning, applications, and claims research, pp 37, 53, 74, 97 - Frog, March 2016)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/previous-research-review.md#:~:text=Benefit%20planning%2C%20applications%2C%20and%20claims%20research%20conducted%20by%20Frog%20in%202016)
* [**Frequently accessed** features](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/user-research/findings-summary.md#participants-are-primarily-interested-in-completing-healthcare-and-disability-related-tasks-such-as-messaging-ordering-medication-and-checking-claim-status)  that provide easy access to the things they use the most:[(ex: VA records and documents)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/user-research/findings-summary.md#easy-access-to-documents-from-the-homepage-was-important-for-participants)
* **[Transition support for different phases of the Veteran lifecycle](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/discovery-summary.md#the-logged-in-homepage-needs-to-scale-to-support-every-phase-of-the-veteran-lifecycle)**


## Measuring success

### Metrics

Measures of success are defined by an outcome with associated direct & proxy measurements. Additional details on how measures of success were determined are located in the [Data Project Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/design-personalization/data/data_project_plan.md)



1. Veteran **comprehension** of what the app can do 1) in general and 2) for them in their current circumstances.
    * Direct: Participants in UX Research demonstrate an accurate understanding of what the app can do for them— in general and in their current circumstances
    * Proxy: App store reviews, Reddit posts:
        * Track prevalence of reviews including a misunderstanding of the app’s current functions written by users on versions featuring a personalized home screen. 
2. Veteran **satisfaction** with the amount (time & tasks) they are completing in the app.
    * Direct: Participants in UX Research (or in-app surveys) report they are satisfied with the amount of time they spend in the app. 
    * Proxy: App store reviews,  App store ratings, Reddit posts:
        * Reviewers on versions containing the personalized home screen express satisfaction at a higher rate than reviewers on versions without it
        * App store ratings for app versions containing personalized home screens are on average higher than versions without it.
        * Reddit posts describing satisfaction trends with the adoption of app versions that include the personalized home screen.
3. Veterans’ **perceived current and future value** of the app. 
    * Direct: Participants in UX research (or in-app surveys) report that they are finding the app and personalized home screen valuable.
    * Proxy: App Store reviews, App Store ratings, Reddit posts: 
        * App store reviews, for versions containing the personalized home screen, report valuing the app more than versions that don’t.
        * App store ratings, for app versions containing personalized home screens are on average higher than versions without it.
        * The prevalence of Reddit posts that express valuing the app trends with the adoption of app versions with the personalized home screen
4. **Task completion:** Veterans who see a personalized home screen complete tasks at a greater rate than those who do not.
    * Direct source: App analytics for defined tasks.
    * Proxy source(s): UX research for defined tasks using design mockups.
5. Veterans who initiate tasks from the personalized home screen have **greater longevity with the app** than other initiation points (home screen vs. other)
    * Direct source: App analytics for defined tasks.
    * Proxy source(s): UX research for defined tasks using design mockups.
6. **Engagement with personalized content** on the home screen.
    * Direct source: App analytics to be defined per content item on personalized home screen.
    * Proxy source(s): UX research using design mockups.

*Note that engagement metrics, in particular, will be greatly expanded as the UI/UX for the specific feature, like home screen for example, is determined.*


## Assumptions and Risks
### Assumptions



* Personalized content relating to their interactions with VA is valuable to Veterans and will lead to **higher app adoption**.
* Veterans will **value personalized content** so highly that they keep **returning** to the app. 
* Surfacing personalized information at a level above its corresponding feature will make it easier for Veterans to **keep track of their interactions** across the VA and be **made aware of related actions**, without having to seek out when their attention is needed.
* App users _want_ to **feel that ‘the app knows me’ and** seeing information related to them on the home screen makes them feel known, supported, and reassured.
* Personalized content will help to accurately set expectations and **increase understanding of what the app can do** for them.

### Risks & Mitigation

#### Risks: 

* We’re not sure that users will find value or greater convenience in surfacing personalized information outside the existing features.
* We’re not sure which pieces of personalized information (or what level of detail) will be most valuable for users to see on the home screen.
* Displaying personalized information from too many APIs in one place might cause app performance to suffer.
* The home screen becomes overgrown & a dumping ground over time without proper guidelines and governance.

#### Risk mitigation: 



* Setting up ways to measure our success to understand if our concepts are useful to Veterans. For instance:
    * Define qualitative ways to test out the value of a personalized home screen with Veterans
    * Define quantitative metrics that provide indicators that a personalized home screen is useful
* Engineering spikes to understand limitations and design that takes those limitations into account to provide the best experience despite them.
* Create and document a framework and workflow for integrating new personalized content. Socialize it with feature teams. Add personalization conversation to feature kickoffs.


### Important Links

UX: [Design Strategy Worksheet: VA Mobile App - Personalized Home Screen 2023](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/design-personalization/ux/personalization-homescreen-design-strategy-worksheet-2023.md)  
[Data Project Plan - Personalized Home screen](https://docs.google.com/document/d/1xa5d114xMp6Ls1x2KR904LUoAQ7tDGKZBiijE8MJRKc/edit#heading=h.xc3a0rsasqyo)

MyVA:
* [Product outline: My VA](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va)
    * [My VA Use Cases](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/use-cases) 
    * [My VA Dashboard Product Guide Versions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/product/product-guides.md)
