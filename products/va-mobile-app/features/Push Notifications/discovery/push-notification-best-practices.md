
# VA Mobile app - Discovery/Desk Research: Push Notification Best Practices
Dec 2023

## Themes:



* **Permissions & management:**
    * Demonstrate the value of the app (and build trust) before asking users to grant permission to enable push notifications.
    * Provide users with context around how push notifications will be used before asking them to grant permission to enable push notifications (use the “double permission” pattern).
    * Give users the ability to fine-tune the push notifications they receive, and make turning off app notifications straightforward and quick. 
    * Allow users to manage multiple notification channels (push, SMS, email) in one place—they choose how they want to receive the information.
* **Messages:**
    * Notification content should be precise, actionable, and personal. 
    * Send fewer notifications in a meaningful way: Consider gradual grouping when there are several push notifications relating to the same thing in a short time (if there’s only one or the messages are spread out over a longer period, send individual push notifications.
    * Timing & timeliness matters
    * Split POV: 
        * Reserve push notifications for nonurgent status change messages (use SMS for critical and urgent content).
        * Push = simple content, high urgency
* **IA:**
    * Notification management screen should be easy to find, consistent with other apps.
    * Push notifications should anchor to something in the app’s navigation:
        * Source anchor: Push anchors to a navigation option
        * Notification center: when a feature has a need for notifications that cannot be anchored to any of the existing navigation options.


## Sources:


### External Articles


#### [Android notifications - Material Design](https://m2.material.io/design/platform-guidance/android-notifications.html) 


#### [Notifications - Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/notifications/)  


#### Notification Design



* **[The Ultimate Guide To Push Notifications For Developers](https://www.smashingmagazine.com/2022/04/guide-push-notifications-developers/#prompting-best-practices)**
    * Contains character counts for various platforms, including web.
        * MOBILE PUSH FOR ANDROID 12 [#](https://www.smashingmagazine.com/2022/04/guide-push-notifications-developers/#mobile-push-for-android-12)
            * Title: 50 characters
            * Message: 150 characters
            * Supports photos & up to 3 action buttons + an additional icon
        * MOBILE PUSH FOR IOS 15 [#](https://www.smashingmagazine.com/2022/04/guide-push-notifications-developers/#mobile-push-for-ios-15)
            * Title: 25-50 characters
            * Message: 150 characters
            * Supports photos & up to 4 action buttons
* **[Push Notifications: the good, the bad, and the wtf could u not | by Joshua Mauldin | UX Collective](https://uxdesign.cc/push-notifications-the-good-the-bad-and-the-wtf-could-u-not-b73d6b2c4f90)**
    * give people the ability to choose what kinds of notifications they want as well as when they want to get them.
    * iOS requires users to grant permission to send push notifications, Android doesn’t 
    * Don’t send needly interruptive notifications to people who’ve never opened your app
    * Android lets you set priority levels for notifications and provides five options (Most of your notifications should be in the default category unless you have good reason to make it otherwise)
*  **[Shit’s broken: why we need Mindful Notifications & how to Design them](https://thistooshallgrow.com/blog/mindful-notifications)**
    * “Notifications are mindful when their mental cost and attention required are suitable to the information communicated to a given user. It enables them instead of hindering them. As much as possible, it’s signalling instead of interrupting.”
    * Factor in urgency, importance and context to be mindful of users’ attention
    * Give users control of
        * **What** they’re notified about
        * **How** it’s delivered: email, push notification, SMS, a mix of those
        * **When** it’s delivered: bit by bit, bundled, how frequently, etc.
    * Litmus test: “Is this important or urgent?”, “Are the incentives helping or harming?”, and “What if this happened IRL instead of on a computer?”
* **[Designing smart notifications - Medium](https://medium.com/@intercom/designing-smart-notifications-36336b9c58fb)**
    * **Notifications at the wrong time are worse than useles**s. Irrelevant pings not only get ignored, but the noise they create dilutes focus, causes frustration and a false sense of urgency.
    * smarter notifications could have a **gradual grouping**. If you usually get less than ten likes per photo, you would probably want unique notifications for each of them
    * Smart notifications will **feel more like a** **note from your assistant** or another human being. 
* **[Designing notifications for apps - Medium](https://medium.muz.li/designing-notifications-for-applications-3cad56fecf96)** \
Really interesting framework for thinking about different models for delivering notifications + when it makes sense to use one over the other (depends on the information architecture and the types of notifications you want to communicate)  \
Source > Information > Anchor > User
    * **Notification center**
        * **Use when:** Your product has a need for notifications that cannot be anchored to any of the existing navigation options
        * There are more possible sources for notification than the app can accommodate on the landing screen
        * When you’re short on time. notification center could be your easy way out as it’s very flexible in nature.
    * **Source Anchored Notifications** \
(every notification is anchored to a navigation option which is most likely the source of the notification as well.)
        * **Use when:** When all the possible sources of notification can be accommodated on the landing screen
        * all notification can be accommodated with the existing design schemas
    * **Mixed Model** (most common- notification center becomes one of the options in the navigation menu which can be used as an anchor for sources that do not qualify to be on the landing screen) 
        * **Use when:** You have some notifications that can be anchored to their respective sources but some other notifications cannot be anchored to any of the existing sources in the architecture.
        * You have nested sources in your navigation
* **[Transactional Notifications: Their Characteristics and When to Use Them - NNG](https://www.nngroup.com/articles/transactional-notifications/)** \
Transactional notifications are **related to existing orders** (e.g., delivery notices) or to **customer-company relations** (like updates on service terms)
    * **Structure:**
        * **eadlines of push notifications are a critical component.** They  should briefly summarize the purpose of the message.  The recipient may not even need to read the message to understand it or take action.
        * Though being concise is important, users want the message to carry sufficient information about the transaction.
    * **Save SMS messages for urgent and crucial information** that users need to refer to later or that they need to respond to quickly; **use push app notifications for nonurgent communications** as some users may block them. If you send users information across multiple channels, allow them to easily opt out from specific channels.
    * **When to use push v SMS**
        * **SMS = for Crucial, Time-Sensitive Information**
            * people expect to receive **notifications (especially SMSs) only for critical and urgent content**. 
                * more suitable for time-sensitive services
                * when urgent input from users (e.g., update to payment details, approval for a transaction) is needed.
            * Because **SMS notifications are more durable** and can include longer **text** than push notifications, users expect them to be more detailed. 
            * **if the notification contains information that the user may need to use later,** it is best to send it via SMS.
            * sending **push notifications is connectivity-dependent** and, in environments with poor data-signal strength, notifications may struggle to reach mobile phones. **Therefore, SMS is a stabler channel for sending important information than push notifications.**
        * **Push notifications are better for:**
            * **Suggestions that the user returns to the app** to revisit certain information, such as changes to terms and conditions or items left in the cart
* **Nonurgent status-change messages,** such as shipping notifications
* **[Five Mistakes in Designing Mobile Push Notifications - NNG](https://www.nngroup.com/articles/push-notification/)** \
Poorly implemented notifications can deter users from interacting and, in severe circumstances, can **prompt them to delete an app altogether**
    * **Provide value** to users before **asking them to receive your app’s notifications**:  Allow them to experience the app and only in a later session ask them to accept notifications.
    * **Tell people what notifications will be about** to increase the chance that they will accept your request.
    * Instead of filling your user’s screen with several notifications, **send fewer notifications in a meaningful way**. If you have more than five notifications that you need to send at once, combine them into a single message
    * **Turning off app notifications should be straightforward and quick**. Allow users to edit their notification preferences within the app (in the Settings section of your app to meet users’ expectations and ensure [findability](https://www.nngroup.com/articles/navigation-ia-tests/)), so they are not forced to go to their phone’s native settings. 
* **[The Ultimate Guide to Not F#!@ing Up Push Notifications by Stéphanie Walter - UX Researcher & Designer](https://stephaniewalter.design/blog/the-ultimate-guide-to-not-fck-up-push-notifications/)**
    * …if users refuse to grant you access to notifications, it’s going to be a whole mess to get them to approve again. Understand this: you will get ONE CHANCE at asking permissions
        * Help users users understand what they gain when they grant you access to push notifications 
        * Ask in context (again, not on page load)
    * **“double permission” pattern:** Instead of triggering the “real” permission prompt right away, you can also have a first “fake” permission button in the browser. If the user refuses this one, you will get an extra chance to ask later. If they accept, you trigger the actual real permission request in the browser. 
    * 3 rules:
        * **1 - Good notifications need **good timing**.
        * 2 - Good notifications are **precise and actionable**
        * 3 - Good notifications are **personal


#### Notification permissions



* **[Why Permission Priming is Good UX | by Elizabeth Ballou](https://uxplanet.org/why-permission-priming-is-good-ux-19c675754dbb)**
    * **Users want to know why you need permission** 82% of respondents find it somewhat to very important that they know _why_ an app is asking for certain information
    * **Wait to ask permission:** If a user isn’t recording videos as they get onboarded, for example, then there’s no need to let YouTube use their microphone right away. Should they decide to use the microphone later, YouTube can ask then.
* **[Privacy UX: Better Notifications And Permission Requests - Smashing Magazine](https://www.smashingmagazine.com/2019/04/privacy-better-notifications-ux-permission-requests/)**
    * Event triggered notifications (what Va mobile app has): News updates, recommendations, state changes
    * [Timing matters](https://www.smashingmagazine.com/2019/04/privacy-better-notifications-ux-permission-requests/#pick-timing-carefully), and so do timely notifications. Track the change of time zones and local time, and adjust the delivery of notifications accordingly.
    * [Avoid Stressful Situations By Design](https://www.smashingmagazine.com/2019/04/privacy-better-notifications-ux-permission-requests/#avoid-stressful-situations-by-design) 
If you can assess the battery level and the quality of connection, it’s a good idea to avoid sending notifications when a user’s conditions are suboptimal.
    * [Reduce Frequency By Grouping Notifications](https://www.smashingmagazine.com/2019/04/privacy-better-notifications-ux-permission-requests/#reduce-frequency-by-grouping-notifications) 
There is no golden rule for just the right amount of notifications on a given day. Just like every notification differs, so do the preferences and motivations of every customer. To keep a user’s engagement, you might need to gradually release blocks of notifications depending on the customer’s reach or preferences
    * [Allow Users To Snooze Or Pause Notifications](https://www.smashingmagazine.com/2019/04/privacy-better-notifications-ux-permission-requests/#allow-users-to-snooze-or-pause-notifications) 
There might be good reasons why the user hasn’t been or doesn’t want to be active for a while, and more often than not, it has nothing to do with the service at all
    * [Make Opting In And Opting Out Obvious](https://www.smashingmagazine.com/2019/04/privacy-better-notifications-ux-permission-requests/#make-opting-in-and-opting-out-obvious) 
When users can’t adjust settings easily, they apply heavy artillery, marking email notifications as spam, or blocking notifications in OS settings or browser settings. Provide granular notification preferences integrated _into_ the app rather than relying on OS native settings. There, you could also explain what the user can expect from every kind of notification, perhaps even with examples of how they would look.
    * [Asking For Permission](https://www.smashingmagazine.com/2019/04/privacy-better-notifications-ux-permission-requests/#asking-for-permission-the-humble-way)
Displaying a permission prompt on load is probably the best way to make a poor first impression, and in most cases an irreversible mistake. wait for a certain amount of engagement first, then explain to the customer why we actually need their permission, and what value we can provide them in return
    * [Track Metrics For Notifications](https://www.smashingmagazine.com/2019/04/privacy-better-notifications-ux-permission-requests/#track-metrics-for-notifications)   
We might need to know if the notifications we send are relevant in the first place. 
* **[How to improve your permissions UX- Adam Lynch.com](https://adamlynch.com/improve-permissions-ux/)**
    * **Context is key:** Make sure the user understands what your site or app is about. **Provide some value to the user first** if you can, **build some trust**. Only ask _when_ you really need to.
        * Requests without context are granted 40% less
    * [Double request pattern:](https://adamlynch.com/improve-permissions-ux/#the-double-request-pattern) Show some **fake UI first. If the user responds positively, then trigger the native permissions request**. If it's rejected or ignored, then fine. You're not limited to one attempt and can ask them again whenever you want.
    * **If rejected, show some feedback and explain how to manually enable** the permission via their device settings
    * For each permission or feature, **track** engagement and acceptance, **how far users get before rejecting a permission**, etc. 


#### UI notification types



* **[Indicators, Validations, and Notifications: Pick the Correct Communication Option - NNG](https://www.nngroup.com/articles/indicators-validations-notifications/)**
    * A notification sent irrespective of the current user goal would likely be ignored, and may even annoy users because it will disrupt their current task and be irrelevant to their current needs.
* **[5 Types of UI Notifications. And essential rules on when and how to - UX Planet](https://uxplanet.org/5-types-of-ui-notifications-dbfbda284456)**
Notifications provide relevant and timely information about some event. 
    * **Badges:**
        * A badge is not a notification per se; it’s an alert for the notification. It just states the fact that the user has a new update.
        * When to use: medium level of importance.
    * **Push notification**
        * When to use: important & time-sensitive updates (i.e., a calendar reminder or alarm set up by the user, an update about a delayed flight or delivered order).
        * Users should be able to fine-tune the push notification preferences.
        * Minimize the number of push notifications by grouping them. Android and iOS allow the creation of one notification that summarizes a few notifications. 
    * **Toast**
        * When to use: conveys status of a system operation. 
    * **How to create a notification strategy**
        * Group notifications with the same subject matter
        * **Set level importance for each notification** You can use push notifications for events with a critical level and a high level of importance
        * **Allow users to customize notification preferences** Practice opt-in approach — ask the user if they want to receive a particular kind of information. When users explicitly choose to receive some types of notifications
        * **Avoid sending multiple notifications for the same thing** Don’t send follow-up notifications even if the user hasn’t responded.
        * **Be careful with sensitive information** Don’t include sensitive information in a notification. You cannot predict what people will be doing when they receive a notification, so it’s better to avoid including confidential information that could be visible to others on the device screen.
* **[Rules For Creating Perfect Push Notifications | UX Booth](https://uxbooth.com/articles/rules-for-creating-perfect-push-notifications/)**



#### Impact of push



* **[What makes users disable push notifications? — BusinessofApps](https://www.businessofapps.com/marketplace/push-notifications/research/push-notifications-statistics/?source=post_page---------------------------)**
    * **opt-in rates for app push notifications:**
        *  Android OS ranges from 49% to 95%, with **medium equal to 81%**
        *  iOS ranges from 29% to 73%, with **medium equal to 51%**.
        *  iOS users must actively consent to push notifications, whereas Android automatically enables push notifications.
    * **Frequency of pushes vs unsubscribes:**  unsubscribes remain below 1% up to five pushes per day 



### Internal VA



* [VANotify Notification Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-notify/notification-guide.md#vanotify-notification-guide)
* **Mobile:**
    * [Review of Related User Research: VA Mobile App Personalization - How Veterans think about notifications*](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/design-personalization/discovery/research/personalization-research-review.md#review-of-related-user-research-va-mobile-app-personalization) 
    * [Notifications UX Deep Dive](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/comparative-feature-analysis/notifications-deep-dive.md#notifications-ux-deep-dive) (early comparative analysis 2020)
    * [Comparative Feature Analysis Summary (2020)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/comparative-feature-analysis/summary.md) 
