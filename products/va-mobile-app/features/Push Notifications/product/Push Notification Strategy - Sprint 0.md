# Push Notification Strategy - Sprint 0

[Epic Link](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/6038)


### Problem Statement

The VA mobile app was created with the intention of helping Veterans track and manage their interactions with the VA. While this is happening, the current Flagship app’s ability to support Veterans is limited in its effectiveness. In particular, the **burden is on the Veteran** to track and manage their interactions, whether it’s by opening the app and searching for relevant content or through some other medium, like web. In addition, other mediums that proactively notify Veterans about important information have their challenges: MyVA notifications require Veterans to be at their computer, emails are cumbersome and require parsing an inbox, and text messages can be invasive and feel untrustworthy. Ultimately, it’s more difficult than it needs to be for a Veteran to know:



* Whether there’s something that **needs their attention**. For example, they are reaching the 30-day limit to submit a travel claim
* Something **specific to them has changed**, such as their disability rating or the status of a claim
* A new **feature has been released** or there’s been a **critical bug fix**

These examples, of which there are many, underscore a critical issue: the **onus is on the Veteran to uncover value from the app.** This challenge is backed up by multiple research sessions, in which Veterans express that they **lack the time to stay updated and understand the app’s features**. As a result, we believe that this challenge is **negatively affecting user retention** because Veterans face more obstacles to completing tasks and getting value from the app than is needed. 


### Outcome & Hypothesis

We believe that implementing **effective push notifications**, based on a clear push notification strategy and guidelines, can alleviate some of the burden on Veterans to manage their interactions with VA. Push notifications are a way to proactively surface relevant information to Veterans without them needing extensive knowledge of how the app is designed. Moreover, there is extensive [evidence](https://grow.urbanairship.com/rs/313-QPJ-195/images/airship-how-push-notifications-impact-mobile-app-retention-rates.pdf) (see slide 2’s executive summary) that push notifications can **increase task completion speed** and **significantly improve user retention**. As a result, this is an opportunity to:



* Let Veterans know when something **time-sensitive or blocking needs their attention**
* Let Veterans know when **something has changed**
* Help Veterans find and **complete necessary tasks more quickly**
* Inform Veterans of **new features, critical bug fixes, or new versions**

We will know we’re right when we see:



* Increased task **completion speed**
* An increase in **re-engagement** of users who have stopped using the app
* An increase in **user retention**.


### Business Goals

Implementing push notifications seeks to directly drive forward the Flagship mobile app’s vision, two of its 2023 objectives, and directly funnels up to the OCTO goal of providing a personalized experience & time-saving features.

**Flagship Mobile App Strategy**



* Vision: "Each Veteran is connected to the VA services that matter most to them, regardless of device, and without understanding the VA org chart.”
* Objective 1: Veterans will use authenticated services that are highly personalized and valuable.
* Objective 3: Increase active user base.

**OCTO-DE Goals**



* Goal 6: Logged-in users have a personalized experience, with relevant and time-saving features.


### Assumptions and Level of Confidence



* Veterans want push notifications 
* Veterans will opt-in to receive push notifications
* We will be able to determine what Veterans want notifications for
* We know how often Veterans want notifications

We are reasonably confident in these assumptions because:



* Push notifications are an extremely standard practice so there is significant, existing literature on best practices as well as some [guidance from VANotify](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-notify/notification-guide.md#vanotify-notification-guide)
* We can talk to Veterans about which kinds of notifications work for them  
* We will be diligent in setting up well-designed measures of success so we can determine whether notifications are successful and adjust them if they are not. 


### Risks

**Testing**: Currently, there isn’t a non-technical mechanism for triggering push notifications for testing purposes. 
* Mitigation: Get access to a push notification testing suite from VANotify(if it exists?) and create a QA process for testing push notifications

**Version discrepancies**: Different versions have different features so behavior after interacting with a push notification could be different  
* Mitigation: Ensure that version-based edge cases are considered when implementing each notification

**Lack of partner support:** VANotify could stop supporting push notifications for mobile, in addition to web
* Mitigation: Engaging with VANotify early and often to determine if a contingency plan is needed, if VANotify no longer supports push notifications

**User Annoyance, Negative Perception of VA, Opt-Outs:** Sending irrelevant, excessive, or intrusive notifications can lead to Veterans being annoyed or frustrated. Users may ignore, opt out of receiving notifications, or in extreme cases, uninstall the app altogether. All of this could ultimately damage Veterans’ perception of the VA.
* Mitigation: Setting well-designed guidelines, guided by research from Veterans for what constitutes an appropriate and effective notification
  
**Lack of cohesion across platforms** Disparity in how notifications are handled across VA
* Mitigation: Coordination with other VA teams like VA.gov


---


### Roadmap

**V1**

The are several tracks that should be pursued for phase 1 of a push notification strategy. 

**Phase 1 Deliverables:**



* **Document Push Notification Guidelines**
    * There are clear guidelines for when a push notification should be sent. These should be applied to existing use cases and future ones. Some potential examples are listed below:
        * Action items
            * Ex. You have # unread messages
        * Status changes
            * Ex. Your disability rating has changed
        * Engagement
            * For instance, studies show that push notifications within the first 30 days of downloading an app can increase retention
        * Critical updates
            * New version or critical bug fix
        * Reengagement
            * Determine what notifications would be appropriate to reengage dormant users. 
* **Prioritized List of Push Notification Candidates**
    * Based on the guidelines listed above, document a list of existing use cases for push notifications, in priority order, to be implemented in Q4 (or sometime)
* **Measures of Success**
    * There should be clear quantitative and qualitative measures of success that dictate whether push notifications are successful or not. 
        * These should be used to determine whether a poorly performing  notification should be revised or eliminated 
        * These should also be used to determine whether overall push notification guidelines should be revised
* **Testing Process**
    * There is a testing process established for push notifications that leverages test accounts that can receive notifications
* **External support for push notifications**
    * Determine whether VANotify will continue to support push notifications and, if not, outline a strategy for a new way to send notifications

**V2 and beyond**



* **Implement push notifications for all existing cases**, based on guidelines determined in Phase 1
* **Opt into specific types of notifications**
    * For instance, a Veteran may not use any health features and would want to opt out of health-related notifications.
    * Note that the categorization of notifications is still TBD. 
* **Multichannel coordination (web, email, in-app messaging)**
    * This could be particularly useful for new features. For example, a new feature (e.g. Travel Pay) is implemented in the mobile app. There could be a coordinated, multichannel notification strategy in which mobile push notifications, web notifications (banners or actual notifications), and emails could all inform Veterans about Travel Pay being available in the Flagship app


### Measuring success 



* **Open Rate**: How many Veterans open the app in response to a push notification?. A higher open rate could indicate that the message was relevant.
* **Click-Through Rate (CTR)**: What percentage of Veterans clicked on the push notification to take a specific action, such as viewing a feature
* **Conversion Rate**: How many Veterans completed the desired action (task completion) after clicking the push notification
* **Retention Rate:** Are Veterans returning to the app after push notifications have been implemented?
* **Churn Rate**: Are push notifications reducing churn? 
* **Response Time:** How quickly do Veterans respond to push notifications after receiving them. This can help determine the urgency and relevance of our messages.
* **User Feedback**: Qualitative feedback through surveys, app reviews, interviews, etc. to understand Veterans’ perception of push notifications. 


### Stakeholders



* VANotify / VEText


### Open Questions



* Will VANotify continue to support push notifications for mobile?


### Important Links



* [VANotify guidance on when to send notifications](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-notify/notification-guide.md#vanotify-notification-guide)
* [How Push Notifications Impact Mobile App Retention Rates Study](https://grow.urbanairship.com/rs/313-QPJ-195/images/airship-how-push-notifications-impact-mobile-app-retention-rates.pdf)
