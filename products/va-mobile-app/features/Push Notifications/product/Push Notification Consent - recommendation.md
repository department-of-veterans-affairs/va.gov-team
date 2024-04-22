

# DRAFT Push Notification Consent in the VA Mobile App - Recommended Approach

April 2024


VA does not currently have a standard operating procedure for sending push notifications to VA mobile app users. However, VA states in the [VA SOP for Delivering SMS Notifications](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-notify/VA%20SOP%20for%20Delivering%20SMS%20Messages%20v1.0.pdf) that it intends to “limit unsolicited or unwanted automated communication to Veterans,” and lays out guidelines for requiring consent before sending various types of messages to Veterans.

While there is a technical difference in how push notifications and SMS messages are delivered, because push notifications are received on a user’s mobile device (and due their interruptive nature, are likely to be perceived in a similar way as SMS by mobile users), and because of VA’s stated POV on consent in the [SMS SOP](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-notify/VA%20SOP%20for%20Delivering%20SMS%20Messages%20v1.0.pdf), we think that applying the principles outlined in the [SMS SOP](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-notify/VA%20SOP%20for%20Delivering%20SMS%20Messages%20v1.0.pdf) to push notifications sent by the VA mobile app will deliver an experience to app users that they perceive to be consistent with communications from other VA channels.


#### What this means for push notification consent in the VA mobile app: 

The VA mobile app needs to gather<span style="text-decoration:underline;"> opt-in consent from users in order to send any push notifications</span>, and the standard native opt-in modal is sufficient for consenting to receive push notifications generally. That said, more specific consent requirements vary by message type:



* The VA mobile app may send <span style="text-decoration:underline;">messages that directly pertain to delivering the services VA provides </span>to that individual **<span style="text-decoration:underline;">without obtaining express consent</span>** to send each message. This includes:
    * Push notifications from features in the app relating to the delivery of VA health, benefits & payments services.
    * Disaster related/emergency notifications that relate to the health and safety of Veterans.
    * Push notifications about critical app updates (enables the continued delivery of services).
* The VA mobile app requires **<span style="text-decoration:underline;">express consent from the user</span>** to send <span style="text-decoration:underline;">promotional notifications</span>. This includes:
    * Broadcast messages informing a user about new or existing VA products, app features, services, or eligibility for services that a user is not currently enrolled in.  


In practice, to adhere to the above (and to also avoid excessively asking for consent), we recommend the following in terms of gathering consent to send notifications in the VA mobile app:



* **Initial opt-in:**
    * All users (iOS and Android platforms) should give consent to send push notifications via an explicit opt-in before any messages are sent.
    * When presenting a user with the choice to opt in to receive notifications, the app should describe at a high level the various types of notifications it may send now and in the future (including both transactional and promotional messages) in order to maximize consent coverage. Doing this covers the explicit consent requirement for promotional messages and sets expectations for transactional notifications they’ll receive (even though explicit consent isn’t required to send these).
* **Adding new push notifications after initial opt-in:** 
    * If an app user has previously opted in to receiving push notifications from the VA mobile app (and that opt-in did not explicitly mention promotional messages), the app should gather explicit consent to send promotional messages. It is not necessary to collect explicit consent to send the other message types.


### References
- [VA SOP for Delivering SMS Notifications v1.0](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-notify/VA%20SOP%20for%20Delivering%20SMS%20Messages%20v1.0.pdf) (2022)
- [VANotify: Notification Preferences - Communication Items & Different Types of Consent](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-notify/notification-preferences-mvp) (2023)
-  [VA Mobile App: Push notifications - push classification definitions](https://docs.google.com/spreadsheets/d/15II0OsOnKQrqr-5DQiCNa5MQq9qN2vhANVpU0yOzGf0/edit#gid=1717485035) (2024)
