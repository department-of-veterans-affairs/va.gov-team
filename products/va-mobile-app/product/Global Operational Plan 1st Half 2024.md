# Global Team Operational Plan - 1st Half 2024

### 1. Introduction
This document provides an overview of the current state of the Flagship app and its strategic priorities, primarily through the lens of the Global team, for the year 2024.
In the past few years, the Flagship app has achieved notable success, amassing over 2 million downloads, earning high app store ratings, and making substantial improvements to Veteran access for various VA services and benefits. However, amidst these achievements, two key challenges have emerged: a concerning decline in user retention and a limited ability to assess task success.

The intersection of these challenges is particularly detrimental. Many tasks lack definition or analytics, meaning we are unable to assess their effectiveness. Assuming these tasks are effective, the rapid departure of Veterans from the app reduces their impact. Specifically, improved task success doesn’t impact Veterans if they are not using the app. Similarly, the positive impact of new features is diminished if Veterans are leaving the app.

As a result, we must improve user retention and improve our ability to gauge task success. This should be done in parallel with adding clear features that deliver value. For example, push notifications are an industry standard feature that should be implemented regardless of the Flagship app's current visibility into performance. Additionally, we are committed to improving our capabilities to assess Veteran sentiment, ensuring we stay attuned to user feedback.

While this document outlines focus areas for the first half of 2024, it aligns with our overarching yearly objectives. A similar plan to advance 2024 objectives should be created for the second half of the year, upon getting new information throughout the first half.

### 2. Flagship Objectives 
In 2024, we plan to focus on and achieve the following Flagship objectives:
* **Increase user retention:** Improve retention at the 30, 60, and 90-day marks by 10% by EOY
* **Increase the number of tasks completed & success rate:** 
   * Increase the number of tasks completed by 25% by EOY
   * Increase task success rate by 10% by EOY
   * Note - Defining baselines for all tasks is required to achieve both of these objectives
* **Improve Veteran satisfaction:**
  * Define baseline customer satisfaction by the end of Q1 and increase it by 25% by EOY
  * Maintain an App Store rating of 4.8

### 3. Tenets 
The following tenets are guiding principles to evaluate and prioritize Flagship activities:
* **User retention is important:** While the app holds value even if a Veteran accomplishes just one task, the significance of user retention is establishing a consistent connection with the Veteran. This connection offers opportunities to introduce Veterans to services they currently do not use. Furthermore, any enhancement to the app, such as boosting task rates or introducing new features, becomes significantly less beneficial if Veterans leave the app.
* **Understanding user behavior builds better products:** Quantitative and qualitative data provide valuable context on what Veterans actually want. Every decision doesn’t require data but we must be more data-driven in order to build a better product for Veterans.
* **Focus on the top of the funnel:** The beginning of any user experience affects all users, meaning that improvements in this area likely have lagging benefits for most other features. Login is a significant issue and if it’s not solved, or at least mitigated, then the value provided to Veterans by new or existing features is significantly hampered
* **Quality over speed:** We will prioritize ensuring that new features solve Veteran problems and do not introduce errors over delivering features as fast as possible.

### 4. State of the Product
**User Retention**

Since the Flagship app’s inception in 2021, it has crossed over 2 million downloads (1.3 million iOS, 700k Android). However, the number of downloads does not correlate with usage. In 2023, 1.5 million Veterans opened the app, indicating that Veterans who download the app will not necessarily continue to use it and a substantial percentage will leave (see appendix 6.1). This user retention problem was explored throughout 2023.

Quantitative analysis uncovered that user retention is a significant and persistent problem. Specifically, user retention at the 30, 60, and 90-day marks are 40%, 34%, and 31% respectively. Beyond 90 days, retention continues to drop until it reaches 22% at the ten-month mark. This means that 4 out of 5 Veterans will stop using the app after several months (see appendix 6.2). 

A decreasing retention curve is already a flashing warning sign and this challenge is further compounded by the fact that the Flagship app’s retention starts low compared to industry standards. Alchemer, a customer feedback company that conducts yearly analyses of mobile app engagement metrics from 100s of millions of consumers on 1000 IOS & Android apps, found that healthcare and insurance apps have retention rates around 50% and 40%, at the 30 and 90-day markes, which is over 10% higher than Flagship (see appendix 6.1). Flagship also has a wide range of use cases which could mean that its ideal retention should be even higher than healthcare and insurance apps. 

User retention was further analyzed by looking at first-time users who had both opened the app and viewed the home screen, an indicator that the Veteran made it past login. When Veterans view the home screen upon first opening the app, user retention is dramatically increased. Specifically, user retention is around 20% higher for Veterans who view the home screen compared to Veterans who open the app and may or may not have seen the home screen. In addition, the retention curve stabilizes at around 40% by the 7-month mark, signaling a positive trend as the number of Veterans leaving the app eventually plateaus. The flat curve for Veterans who view the home screen contrasts with the curve for Veterans who just open the app which continuously decreases. (see appendix 6.2). This suggests a few things:
* Login is a significant problem. Veterans who are unable to login are much less likely to return 
* Upon logging in, Veterans are likely to discover substantial value within the app. As they navigate to the home screen, they encounter several features that continue to enhance their user experience and deliver valuable services.

Login issues are a known problem that have been continuously surfaced in app store reviews (see appendix 6.4) and were further corroborated by qualitative and quantitative retention research conducted in the summer of 2023. Multiple research participants mentioned that they faced login issues. Quantitative analyses found that users who are unable to log in the first time will return an average of 1.7 times to try again (see Appendix 6.5). This suggests that users who face login issues will make very few attempts to return given the current state of the app.

**Tasks**

One of the primary goals of the app is to enable Veterans to perform tasks that help them access benefits and services from the VA. Multiple features (Appointments, Claims, and Prescriptions) have tasks that are defined but do not have analytics. Many other tasks across the app are not defined and do not have analytics (see Appendix 6.6). As a result, it is unclear how effective the app is at enabling Veterans to accomplish their tasks.

Research conducted in July 2023 found that many Veterans have difficulty understanding what the app offers. This could lead to a lower task rate because the onus is on the Veteran to understand how the app works. The personalized home screen, expected to be delivered in early Q1 2024, aims to surface tasks on the home screen which could increase the number of tasks completed by Veterans. Personalized home screen analytics will provide insight as to whether this happened.

**User Satisfaction and Feedback**

App store ratings are high (iOS App Store rating of 4.8 & Play Store rating of 4.5), which is a positive indication that Veterans generally like the app (see appendix 6.1). However, App Store ratings may be inaccurate due to several biases such as polarization (Veterans who love or hate the app submit ratings) or demographics (specific types of people may be more likely to submit ratings). Beyond app store ratings and unlike other VA products, we do not have a more targeted way of assessing user satisfaction. 
Similarly, there are no ways to collect in-app feedback from Veterans. This makes it more difficult to understand specific pain points that come directly from Veterans and subsequently improve the user experience.

**Design system**

In the second half of 2023, the Flagship Platform team launched a design system, which aims to improve development speed and design consistency. The design system team has built a couple of components and the Flagship app has incorporated one of them into the app. 

### Strategic Priorities
**5.1 - Focus on the top of the funnel to improve retention rates**

<ins>Understand and improve login</ins>

While it’s clear that login is an issue, there’s little data on exactly what is happening when login is failing. There are several analytics tickets, that are already ready to be worked on, which would enable the completion of the previously deprioritized Login Dashboard. The Login Dashboard would provide insights into the specific issues preventing login.
Once analytics are added, the login pain points should be reviewed and a mitigation plan should be implemented. Login error mitigations could range from alerts that inform users about exactly what the problem is, so they can fix it, to providing the teams in charge of login with additional data on the types of errors we are seeing. These interventions should be considered in addition to other ideas such as non-authenticated experiences that provide users value without having to login.

<ins>Understand and utilize effective acquisition channels</ins>

In Q4, work has been done to create parameters that can be added to referring URLs so that the Global team can track where users are coming to the app from. The Global team should coordinate with the Comms team to ensure that tracking parameters are added to marketing campaigns to understand which acquisition channels are effective. This is of increasing importance considering Veterans who don’t regularly use the app said they came back when they heard about new features. This was also born out in the data which found that Veterans sometimes come back around the the 121-180 day mark (see Appendix 6.5)

<ins>Understand how life changes drive Veterans to download and use the app</ins>

In the 2023 user retention research findings, multiple Veterans mentioned that they download or return to the app when they experience life changes or when VA providers recommend that they download the app. Research slated for Q1 is focused on understanding these moments in order to understand what drives Veterans to the app. Understanding these moments could provide valuable insight into why Veterans download the app and how the app can support new users, in addition to the many other ideas to improve the app that generative research provides.

**5.2 - Understand and improve task success rates** 

<ins>Define tasks, add analytics, and support improvement</ins>

The Global team, Health & Benefits team, and Product Owners must coordinate to define all tasks across the app. Afterwards, each task should have the requisite analytics added to track the task success rates. Adding analytics would be done by the Health & Benefits teams as they are the owners of the features and the pages where tasks start and end. For tasks with low success rates, Global and Health & Benefits should coordinate to identify improvements for the user experience for tasks with low success rates 

In addition, all new features should have analytics in place to track task success rates before they are deployed to production. 

<ins>Implement push notifications to minimize work for Veterans</ins>

In Q4 2023, the push notification strategy was revised due to a lack of analytics. Specifically, the Flagship team is unable to determine the open rate for a push or if it led to task success. In Q1, the Global team should define use cases for push notifications and add analytics so that we’re able to gauge push notification effectiveness. 

To implement push notifications, use cases for pushes must be defined so that we can coordinate with other teams that must provide data responses to VA Notify. For example, the Flagship app would need to coordinate with an external team to create a push notification that informs Veterans that their disability rating has changed. Specifically, that external team would need to send a response to VA Notify about disability rating changes for a push notification to be sent. 

Adding analytics and defining push notification use cases means that push notifications can be implemented throughout 2024 and can be assessed for effectiveness. This would very likely have a positive effect on task rates by surfacing deep links to tasks to Veterans. Furthermore, multiple industry studies show that effective push notifications improve retention rates.

**5.3 - Improve our understanding of user sentiment and gather user feedback**
Medallia Digital In-App should be incorporated into the Flagship app to quantitatively measure Veteran sentiment and gather in-app feedback. This will provide insight into Veterans’ feelings about the app and feedback that can be used to improve user experience. A process must be defined that ensures that sentiment and feedback are not just collected but surfaced and incorporated into the product strategy for both the Global and Health & Benefits teams. 

In addition, the in-app rating prompt code is out of date and should be updated so that features added after August 2021 will prompt users to review the app, leading to app ratings providing a more accurate assessment of user sentiment.

**5.4 - Improve development speed and design consistency by using the design system**
As new components are built by the Mobile Design System, they should be incorporated into the Flagship app to progressively improve development speed and design consistency.




### 6. Appendix
6.1 -  [Flagship Mobile Monthly Report](https://lookerstudio.google.com/u/0/reporting/e28cd59a-b2e5-4f29-8ae4-a4eea6d23f9c/page/p_xatxe90k9c)

6.2 - [Sprint 72 Demo - Understanding our Users
Veteran Behavior](https://docs.google.com/presentation/d/1Ivx3I6Ne6FJ1EBlrPdkcDg4SAdYwgoYfbXaa5RhdD7A/edit#slide=id.g33cc3b02a5_0_49)

**Retention Rates**
| Veteran Behavior | 30-Day Rate | 60-Day Rate |90-Day Rate |10 Month Rate |
| -------- | -------- | -------- |-------- |-------- |
| Veteran Opened App     | 40%     | 34%     |31%     |22%     |
|Veteran Viewed Home Screen     |65%     |56%     |52%     |40%     |
|Delta between Veterans viewing the home screen vs. only opening the app     |+15%     |+22%     |+21%     |+18%     |




6.3 -  [Alchemer 2023 Mobile Customer Engagement Benchmark Report](https://www.alchemer.com/wp-content/uploads/2023/04/2023-Mobile-Engagement-Benchmark-Report_AlchemerMobile.pdf)

**Retention Rates**
| Industry | 30-Day Rate | 90-Day Rate| 30-Day Difference from Flagship | 90-Day Difference from Flagship |
| -------- | -------- | -------- | -------- | -------- |
| Healthcare     | 52%     | 39%     | +12%     | +5%     |
| Insurance     | 51%     | 41%     | +11%     | +10%     |
| Banking     | 85%     | 78%     | +45%     | +44%     |





6.4 - [App Store Reviews 2023](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-mobile-app/reporting/App-Stores-Reviews)

6.5 - [Mobile App Retention Research Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/post-launch-discovery/July%202023/Mobile%20App%20Retention/final%20report.md) 

6.6 - [Prescriptions Dashboard](https://lookerstudio.google.com/u/0/reporting/8e2627dc-fd2c-4be0-83dc-b60f69df7527/page/p_wtepo1ul5c), [Appointments Dashboard](https://lookerstudio.google.com/u/0/reporting/06c3f64f-fcbd-4c13-adb6-3a9c34503f63/page/p_wtepo1ul5c), [Claims Dashboard](https://lookerstudio.google.com/u/0/reporting/dea3ede1-2d2e-4401-abd7-a44beada8a35/page/p_wtepo1ul5c)
