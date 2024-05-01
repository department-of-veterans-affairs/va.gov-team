# VA Mobile app: Push Notifications Design Strategy Worksheet 

Novmber 2023
_This worksheet was created from an amalgamation of sources ([Lean UX](https://www.oreilly.com/library/view/designing-for-product/9781491971451/ch05.html) and [others](http://others)) to help cross-functional teams to align and clearly frame problems and testable product hypotheses. It is ideally completed together by UX, Product Management, and User Research, and should act as the foundation for ideation sessions (it can also be used to gut-check projects that are in-process). It should be used in conjunction with a Product Brief, user stories, etc. Questions? [holly.collier@adhocteam.us](mailto:holly.collier@adhocteam.us)_

This work is part of the [VA Mobile App - Personalization project](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-mobile-app/features/design-personalization).

# Part I

## Business + User Assumptions

_High level declarations of what we believe to be true._

### User Assumptions

**1. Who is our user?** Our target users are current or new users of the VA mobile app (Veterans who [have VA accounts and are actively using benefits like Health, Claims, and Education](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/product/Product-Outline.md)) who have push notifications enabled globally in their mobile device settings (they may or may not already receive them from other apps or have them enabled in the VA mobile app).

**2. Where do push notifications from the VA mobile app fit in their work or life?** Push notifications will help users to passively keep up with the latest changes across the VA mobile app features that are most important to them (quickly informing or enabling them to keep tasks moving along)—while also allowing them to spend their time and energy on other aspects of their life. 

**3. What <span style="text-decoration:underline;">user</span> problems will push notifications from the VA mobile app (and the enabling/management of them) solve?**
* For most features, Veterans **currently have to remember to check** the VA mobile app to see if there’s something new or that something is needed from them in order to keep things moving.<sub>1</sub>
    * _The app has push notifications for Appointments and Secure Messages, but no other features._
* Veteran **expectations and understanding** of what they think they can do (and what the mobile app will do for them) is **limited and often inaccurate** (they want something to help them, and to know if the app is that thing).<sub>2</sub>
* Veterans **are not given any context around how/what kind of notifications they will receive** when they’re asked to consent to enable push notifications upon download.
* SMS messages cost money to receive, and push is a way for users to receive **up-to-the-minute updates on their most important features free of charge**.

#### Supporting research (problems):
1. [Veterans want to understand their benefits and how to access them, what VA is doing & needs from them.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/design-personalization/discovery/research/personalization-research-review.md#veteran-behaviors--motivations-general---user-context)  Veterans have to apply, **follow-up**, ask for things, keep track of things. 
2. [Veteran expectations of what they could do in the app was often inaccurate. ](https://docs.google.com/presentation/d/1bSW3zev7agnUY7HsFkDkuJL-OY0RFyGzUk3TcdeM6sc/edit#slide=id.g23801d2a107_0_64)

**4. When and how are push notifications from the VA mobile app used?** Push notifications are used by Veterans to stay informed about what’s going on with the features that are most important to them while they’re going about their life, and without any work on their part. With the user’s consent, push notifications can proactively let users know when: 



* A feature has something **time-sensitive or blocking that needs their attention**
* A feature has **new or updated information**
* A **critical bug fix** that affects their use of the app is available and requires their action
* There are relevant **new features, programs**, or other **announcements**

**5. What benefits and features are important?**
* **Give context:** Demonstrate the value of the app and provide users with context around how push notifications will be used before asking them to grant permission to enable push notifications for the app.
* **Allow customization:** Give users the ability to fine-tune the notifications they receive (making it straightforward and quick to turn on the notifications that matter most to them and turn off the ones that don’t).
* **Require consent:** Don’t send notifications that they haven’t already consented to receive.
* **Consistent notification quality:** We have a way to deliver notifications that are consistently clear and useful across features.

**6. How should push notifications (and the enabling/management of them) from the VA mobile app look/feel/behave?**
* **Respectful:** Be respectful of users’ time, attention, and preferences: Don’t send too many notifications in quick succession, don’t send notifications in the middle of the night or outside the time/time period that it’s useful, and don’t send them without a valuable reason.
* **Transparent:** Clearly explain how and why features and categories send notifications.
* Push notification content should:
    * be **precise**, **actionable**, and **personalized** while **respecting user privacy** (no PHI or PII)
    * speak to users in a tone that is **not creepy or too casual** (no emojis), but feel like a note from a **helper/assistant** rather than a computer
    * **align** with messaging that appears on VA.gov in terms of **language and content**, while taking the constraints of the mobile context into consideration. (see [SOP for SMS](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-notify/VA%20SOP%20for%20Delivering%20SMS%20Messages%20v1.0.pdf) and [VANotify Notification Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-notify/notification-guide.md#vanotify-notification-guide))

### Business Assumptions

1. **We believe our users have a need to** keep up with the latest changes across the VA mobile app features that are most important to them, without having to seek out when/whether their attention is needed. 

2. **These needs can be solved with** push notifications.

3. **Our initial users will be** users of the VA mobile app who already have push enabled.

4. **The #1 value users want to get out of push notifications from the VA mobile app** is to stay up to date—knowing a change has happened within seconds—on their current VA interactions without having to check the app.

5. **The user can also get these additional benefits** knowing when a critical update affects their ability to use the app, that a new feature or program is now available to them, or that an important announcement from VA affects them.

6. **We will acquire the majority of our users through** promotional and context-setting in-app UI.

7. **Our primary competition in the market for VA services** is whatever method/s and or channel/s Veterans are using to stay up to date now: checking for feature updates in the app on their own, relying on SMS, email, checking the VA.gov website notifications for updates, or official letters from VA.

8. **We will beat the competition by** offering notification content parity with the other methods and being more **convenient** and cheap: push is on the device they always have with them, and unlike SMS—is free to receive.

9. **Our biggest product risk is that** users may not opt into push notifications for the app, or that they may choose to disable them if we send too many notifications or notifications that are irrelevant.

10. **We will solve this risk through** thoughtful UI that provides context (and prevents accidental opt-outs) when requesting users enable push, the ability for users to fine-tune the messages they receive, a push notification governance strategy to ensure that we don’t send too many messages or messages that are not valuable, and measurement/testing of push notification messaging effectiveness. 

11. **We will know we are successful when we see the following changes in user behavior:** users are able to complete tasks more quickly, users return to the app more, users who have stopped using the app re-engage, users report that the app (and push notifications)  is useful to them, user opt-in rate to enable push increases.

12. **What other assumption do we have that, if proven false, will cause our business/project to fail?**
    * App users have push notifications enabled at device level on their mobile phones
    * App users want to receive push notifications from VA
    * App users will opt-in to receive push notifications from VA
    * Our push notification content will be as accurate as other channels
    * Our push notifications will be as timely (or more timely) than other channels
    * We will be able to determine which features and situations app users want notifications for
    * We will be able to determine how often Veterans want notifications


## Business Goals & Outcomes

**Business Goals:**

* **[Flagship Mobile App Strategy](https://docs.google.com/presentation/d/1j0rO2HvDwHDTzunG3judC1HXOiWfGNTXVciLAkurpRw/edit#slide=id.g1e78b87c057_0_159)**
    * **Vision:** "Each Veteran is **connected to the VA services that matter most to them**, regardless of device, and without understanding the VA org chart.”
      * **Objective 1:** Veterans will use authenticated services that are highly **personalized** and valuable.
      * **Objective 3:** Increase **active** user base.
* **[OCTO-DE Goals](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/strategy#readme)**
    * Goal 6: Logged-in users have a **personalized** experience, with **relevant** and **time-saving** features.

**Outcomes (measurable):**



* Increased **task completion speed**
* An increase in **re-engagement of users who have stopped using the app**
* An increase in **user retention**
* An increase in **user satisfaction**


See VA Mobile App - Push Notification Strategy Product Brief for details.

# Part II


## Problem Definition

_What problem are we solving & for who?_

We have observed that **current users of the VA mobile app have to remember to check** the VA mobile app to see if there’s something new or that something is needed from them in order to keep things moving<sub>1</sub>, and have **limited and often inaccurate expectations and understanding** of what they think they can do (and what the mobile app will do for them)<sub>2</sub>. 

_This is causing_ **users to miss out on the full value of the app, causing a decrease in user retention.**


## Hypothesis Statement  + Success Metrics/Market Outcomes
We believe that implementing effective push notifications can alleviate the burden on Veterans to manage their interactions with VA. When enabled, push notifications reduce the mental load to keep up with tasks by proactively surfacing relevant information. Push notifications are also able to make relevant tasks and information discoverable without requiring users to have extensive knowledge of how the app is designed. As a result, this is an opportunity to:
* Let Veterans know when something **time-sensitive or blocking needs their attention**
* Let Veterans know when there’s **new information** in a feature, or when **something has changed**
* Help Veterans find and **complete necessary tasks more quickly**
* Inform Veterans of new **features, critical bug fixes, or new versions**

We will know we’re **right** when we see:
* Increased **task completion speed**
* An increase in **re-engagement of users who have stopped using the app**
* An increase in **user retention**
* An increase in **user satisfaction**

### References for this doc:
[VA Mobile App - Comparative Analysis: Push Notifications](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/Push%20Notifications/discovery/push-notification-comparative-analysis-2023.md) (2023)  
[VA Mobile app - Discovery/Desk Research: Push Notification Best Practices](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/Push%20Notifications/discovery/push-notification-best-practices.md) (2023)  
[VA Mobile app - Notifications UX Deep Dive](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/comparative-feature-analysis/notifications-deep-dive.md#notifications-ux-deep-dive) (2020)    
