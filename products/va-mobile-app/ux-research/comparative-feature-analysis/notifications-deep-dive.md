# Notifications UX Deep Dive

August 18, 2020

# Background and goals
In addition to a comparative audit of all feature types the MVP will include, we looked in more detail at how to communicate notifications within the app. The goal of doing this was to better understand notification and alwer conventions to help inform our UX POV on how this feature should work.

There are two main types of notifications: action-required and passive. The MVP app will send both types of notifications. We plan to send notifications for the following events:
1. Claim or appeal status change (passive)
2. Additional evidence needed for a claim (action-required)
3. Upcoming appointment (passive)
4. General VA news/updates (including COVID-19 updates) (passive)

We may send notifications for the following events:
1. C&P exam needed for a claim (action-required; action cannot be taken within app)
2. Appointment confirmations (passive)
3. VAMC specific news/updates (passive)

# Analysis summary

Through referencing research from the Nielsen Norman Group and auditing mobile apps, we discovered the following:

### 1. While sending notifications in bursts in not recommended, it's ok to have 2 notifications sent in a short interval. We will eventually need to batch notifications, but we don't need to do it for the MVP. 
Receiving many notifications in a short interval can overwhelm users, causing them to turn off notifications or delete the app. Nielsen Norman Group recommends batching notifications when it is anticipated that a user will receive 5+ in a short internal of time. For our MVP, we can send seperate notifications for each event since we won't get to that volume. For example, if a claim's status changes at the same time that file requests are filed, we should send 2 push notifications announcing these event seperately.

**Recommendation:** Don't invest in batching logic for the MVP. 

### 2. Push notifications need some sort of indicator within the app in addition to the actual push notification itself. 
Every app we looked at has a dedicated place for alerts/notifications. The prominence of where these are housed varies, but they are there. Social media and non-social media emerged as two distinct categories in our audit. Here are the key themes for each:

#### All social media apps have a notifications nav item in their main toolbar and have invested in activity feeds
These apps share some characteristics in how they approach this: 
- They lean into profile photos and show an avatar for the person or page the user is receiving a notification from.
- They rely on complex icon-based systems to cue the type of notification. For exampe, Facebook overlaps a "like" icon with the avatar of the Facebook friend who liked something. Twitter uses different icons to cue if a notification is a like to a tweet, a "Twitter moment", or something else. While it's likely that over time users understand what all these items mean, they feel overwhelming. 
- When a notification is about something temporary that has expired (like an Instagram Story that expires after 24 hours), the notification is still actionable, but links to a secondary destination like a user's profile. This can get confusing when an app notifies a user that something did happen, but then the user misses the event and can't actually engage with the notification.
- Notifications that a user has not yet clicked on are shaded to clarify they are new. 
- While all social media apps offer a robust activity log, it's something users have to click into to view. The apps let the user make the choice if they want to just begin engaging with the app, or first review their notifications.
- Social media apps largely rely on unlabeled icons.

![social media screenshots](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/comparative-feature-analysis/screenshots/notifications-activity-audit-social-media.png)

#### Non-social media apps more commonly offer cards on their home screen that give an update (either passive or action-required), and tend to not have a notifications nav item in their main toolbar
Chase Bank, American Airlines, and ComEd all use cards to give snapshots of current statuses (like bank balances or bill balances) or timely notifications (like COVID-19 news). These apps all also don't offer an activity feed per se, although they do have a dedicated spot where news alerts or messages are aggregated for easy access. Generally these news items are passive, and the cards on the home screen are used to give action-required notifications a home within the app. These cards link directly to the screen where the user can complete the task. 

![non-social media screenshots](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/comparative-feature-analysis/screenshots/notifications-activity-audit-non-social-media.png)

**Recommendation:** While an activity feed something we should invest in for later releases, it may not be something that is needed for the MVP if we follow the cards approach. The MVP app purpose is to deliver updates and status changes and enable quick tasks, so it may be a good UX fit to use cards to highlight big changes on the home screen as a central UI element. We should test this concept with Veterans. 

### 3. Indicators are a useful way to let users know something in the app warrants their attention. 
An indicator is a way of making a page element stand out to inform the user that there is something special about it that warrants the user’s attention. Indicators are contextual and often will denote that there has been some change to the item represented by that element. They are associated with a UI element or with a piece of content, and should be shown in close proximity to that element ([source](https://www.nngroup.com/articles/indicators-validations-notifications/)). Indicators are not always present, but appear or change depending on certain conditions.

**Recommendation:** We should consider using indicators to let users know when there are passive notifications that aren't personalized to them, like VA news ot COVID news. 

### 4. Let's handle time-sensitive notifications by only sending a push notification, and not add more to the app UI. 
Apps that deliver time sensitive notifications tend to not reflect those notifications within the app. However, these apps also tend to open directly onto the relevant content that triggered the reminder. For example, Google Calendar sends a PN prior to an event, and when a user opens the app the default screen is their calendar and the relevant event that triggered the reminder is present. This is relevant for our use case of appointment reminders. Perhaps in these cases, a push notification is enough to remind, and no additional alerts or indicators are needed within the app.

**Recommendation:** For appointment reminders, only send a push notification since this notification is time sensitive in nature.



# Summary of notification UX recommendation for MVP 

Work in progress as of August 18

| What we're notifying user of  	|  Push notification 	|  PN deep links to |   Alert card on homepage	| Alert UI (WIP) |  Indicator 	|
|:---	|:---	|:---	|:---	|:---	|:---	
|  Claim status change (passive) 	|   Yes	|  The claim's detail screen, status tab  	| Yes	|  ![alert-1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/comparative-feature-analysis/screenshots/claim-status-change.png)|   |
|  Additional evidence needed (action-required)	|  Yes 	|  The claim's detail screen, files tab 	|   Yes	|  ![alert-1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/comparative-feature-analysis/screenshots/alert-card-2.png) 	| |
|  C&P exam needed (action-required)	|   Yes	|   The claim's detail screen, status tab	|   Yes	|  ![alert-1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/comparative-feature-analysis/screenshots/alert-card-2.png) 	| |
|  Appointment confirmation (passive) 	|  Yes 	|  The appointment's detail screen 	|  Yes 	|  ![alert-1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-research/comparative-feature-analysis/screenshots/appointment-confirmation.png)	| |
|  Upcoming appointment (passive) 	|   Yes	|   The appointment's detail screen	|   	|   	| |
|  General VA news / COVID-19 news (passive) 	|   Yes	|  The relevant news item  	|   	|   	| Yes |




