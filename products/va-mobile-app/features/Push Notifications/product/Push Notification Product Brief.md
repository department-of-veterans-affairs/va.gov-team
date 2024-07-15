# Push Notification Strategy - Product Brief

[Epic Link](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/6038)


### Problem Statement

The Flagship Mobile App was created to help Veterans track and manage their interactions with the VA but is limited in its effectiveness. In particular, the **burden is on the Veteran** to track and manage their interactions. In addition, other mediums that proactively notify Veterans about important information have their challenges: MyVA onsite notifications require Veterans to be at their computer, emails are cumbersome and require parsing an inbox, and text messages can be invasive and feel untrustworthy. Ultimately, it’s more difficult than it could be for a Veteran to know important information, a challenge that is backed up by multiple research sessions. As a result, we believe that this challenge is negatively affecting user retention because Veterans face more obstacles to completing tasks and getting value from the app than is needed.



### Current Experience


* **Push notification roster:** We currently send two notifications, one for Appointments (an appointment reminder), and one for Secure message (announcing a new unread message).
    * **In-app**:
        * **Enabling push**: 
            * iOS: The standard “Enable push notifications/” opt-in modal alert is displayed during the first use of the app. It’s displayed after install, login, and biometrics permissions but before the onboarding carousel. As a result, all notification types are toggled by default.
            * Android: Consent, to enable notifications, is not asked for at any time; all notifications are toggled on by default.

        * **Managing Preferences**: Notifications are managed within Account > Settings; users can individually toggle each notification, there is no option to turn off all notifications
    * **Analytics:** We don’t track push notification opt-ins, the number of people who have toggled each notification type on, or the number of people who have interacted with a notification
 


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

1. **Push notification enablement**: We don’t know what percentage of Veterans have push notifications enabled on their mobile devices, or how many have opted in to receive push notifications from the VA mobile app. As a result, it is unclear how effective additional push notifications would be.
   * Mitigation: Determine the percentage of Veterans who have enabled the mobile app to send push notifications in order to guide the roadmap
2. **Testing**: Currently, there isn’t a non-technical mechanism for triggering push notifications for testing purposes.
   * Mitigation 1: Get access to Prod accounts to trigger events that send notifications. For example, having a Production account that can create appointments could be used to trigger notifications for appointments
    * Mitigation 2: Implement analytics to monitor whether a push notification was effective
3. **Version discrepancies**: Different versions have different features so behavior after interacting with a push notification could be different
   * Mitigation: Ensure that version-based edge cases are considered when implementing each notification
4. **User Annoyance, Negative Perception of VA, Opt-Outs**: Sending irrelevant, excessive, or intrusive notifications can lead to Veterans being annoyed or frustrated. Users may ignore, opt out of receiving notifications, or in extreme cases, uninstall the app altogether. All of this could ultimately damage Veterans’ perception of the VA.
   * Mitigation: Setting well-designed guidelines, guided by research from Veterans for what constitutes an appropriate and effective notification. Design push notification management settings that allow users to control what types of messages they see.
5. **Lack of cohesion across platforms**: Disparity in how notifications are handled across VA
   * Mitigation: Coordination with other VA teams like VA.gov



---


### Roadmap

**V0**

Risk #1 states that the Flagship team does not know what percentage of Veterans have push notifications enabled. If the percentage of Veterans with push notifications enabled is low, then, the effectiveness and reach of additional push notifications will be significantly hampered. 

As a result, **determining the percentage of Veterans with push notifications enabled is the top priority**
* If the percentage of Veterans with push enabled is low, then improving the push enabled percentage should be prioritized
* If the percentage of Veterans with push enabled is high, then adding additional push notifications should be prioritized 
* **Note** - The percentage of push notifications enabled could be different based on the operating system. Specifically, Apple prompts users to opt into push notifications whereas Android automatically enrolls users into push notifications. As a result, push notification opt-in percentage should be measured for all users and by OS

**V1** 
* **(pending V0) Increase the percentage of Veterans with Push Notifications Enabled**
   * If the percentage of Veterans with push enabled is low, then efforts should be made to increase this percentage so that additional push notifications impact a greater number of Veterans
   * Note that this step should be pursued in parallel with the subsequent steps
* **Context for Enabling Push Notifications**
  * Currently, the Flagship app doesn’t provide any context as to what types of content notifications will be used for. We should provide more info to improve or maintain the percentage of users who have push notifications enabled
* **Create a Prioritized List of Push Notification Candidates**
  * Document a list of new & existing use cases for push notifications to be implemented
   * This list should also group notifications by categories which could then be used to determine the granularity of push notification preferences. For example, there could be preferences for all Health notifications and additional preferences for each Health feature like Prescriptions and Appointments
* **Implement Push Notification Analytics**
   * Add analytics to measure preference opt-in rate, open rate, conversion rate, task completion rate for push notification users, and retention rate

**V2** 
* **Implement Push Notifications**
   * Implement push notifications for all existing cases

**V3 & Beyond**
* **Batching Exploration** 
   * Determine which notifications should be sent in batches
* **Badging Exploration**
  * Determine how and whether badging should be used by the Flagship app
* **Multichannel Content (web, email, in-app messaging)**
  * Determine how content should be coordinated across different mediums
* **Multichannel Coordination (web, email, in-app messaging)**
   * Determine how and whether a coordinated, multichannel notification strategy should be implemented
* **Multichannel Notification Management**
   * Mobile devices are the one place where it’s possible to receive all types of digital communications (email, SMS, push), managing them from within the app is a natural fit and is common across many mobile apps



### Measuring success 


* **Opt-In Rate**: What percentage of Veterans have push notifications enabled?
* **Preference Opt-In Rate**: What percentage of Veterans have each push notification preference enabled? For example, what percentage have Secure Message push notifications enabled?
* **Open Rate**: How many Veterans open the app in response to a push notification?. A higher open rate could indicate that the message was relevant.
* **Click-Through Rate (CTR)**: What percentage of Veterans clicked on the push notification to take a specific action, such as viewing a feature
* **Conversion Rate**: How many Veterans completed the desired action (task completion) after clicking the push notification
* **Task Completion Rate**: Do veterans who interact with push notifications complete tasks at a faster rate?
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
