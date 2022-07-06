# Default send notification settings discovery
July 6, 2022

## Background
VA Profile has added a data point to their API that tells us whether or not a notification is sent by default when a Veteran signs up for a service.  We conducted some discovery work to understand the implications of this on the UI of our notification settings feature in profile.

## Q&A
1. **What type of notifications are eligible for a default opt-in?**
TBD

2. **How can a user opt-out of a default opt-in?**
- A user can reply STOP to a text message to unsubscribe

3. **How do other websites approach this? Are there any best practices we should consider?**
- We didn’t find any examples of websites among our own accounts that differentiated default send notifications on their settings page.
- We reviewed a collection of notification settings screenshots the former VA Notify team gathered. In that collection, there is one screenshot of a settings page that has disabled checkboxes for transactional emails sent by default. The user can’t opt out of them in that scenario, so it’s a different use case than ours (and disabling form inputs is not very accessible).

4. **As a government entity, are we required to show the difference between when a user has opted in themselves and when they have been opted in by default?**
- There are no requirements to show this difference. 
- To comply with Telephone Consumer Protection Act (TCPA), the only requirement is that we need to provide an explicit means of opting out.

5. **How do we convey the different notification types to users (user opt-in vs default opt-in)?**
- We’re not required to do this by any law.
- It doesn’t seem that this is a best practice for notification settings.
- We could explore using hint text if we feel this information is helpful to users. 
- Ultimately, research will tell us whether or not Veterans need this information.

6. **How is VA Notify using this new flag?**
- It’s a technical flag to understand what kind of logic to use when they’re notifying somebody
- If you’re requiring someone to explicitly opt in, we need to check for that opt-in before we send it
- Implicit send (aka default send) says that they can still send the notification without an explicit opt in

7. **Do we still need to require people to opt in OR out for each notification type?** 
- Not necessarily. 
- For all notifications, we must have a record of whether a person has opted out, so there is a paper trail should the person ever have a problem with receiving VA notifications after they have unsubscribed.
- If we use the new default send flag in combination with the permission value for a notification (communication item), we can determine whether or not a person has explicitly opted out . 

|Consent type|defaultSendIndicator value|permission value|subscription status|person has explicitly opted in or out?|
| --- |--- |--- |--- |--- |
|Implicit (default send)| `true`|`null`|subscribed|no|
|Implicit (default send)| `true`|`true`|subscribed|yes|
|Implicit (default send)| `true`|`false`|unsubscribed|yes|
|Explicit| `false`|`null`|unsubscribed|no|
|Explicit| `false`|`true`|subscribed|yes|
|Explicit| `false`|`false`|unsubscribed|yes|

8. **How does this new flag change the data structure of VA Profile’s API?**
- This is a boolean value in the communication group data called `defaultSendIndicator`



## Outstanding questions for VA Notify
1. Is the information I captured in questions 1, 2, 4, 6 and 7 accurate?
2. Do all VA Notify emails have an unsubscribe link?
3. Does every text message include “reply STOP to opt out” or something to that effect?
4. Are there VA emails that have default sends, or is it just text messages?
5. I’m trying to understand which types of notifications are eligible for default sends, and found info below in the PDF Beverly shared. Are there any other kinds of default sends a Veteran could receive that aren’t covered here? I don’t see transactional messages listed (e.g. email address in your profile has been changed) but perhaps that falls under the 3rd item in that list.
> A 2015 FCC Declaratory Ruling5 notes the following types of messages would not require “explicit written consent”:

> i. Health care communication, including communication about appointment and exam confirmations and reminders, wellness checkups, hospital pre-registration instructions, pre-operative instructions, lab results, post-discharge follow-up intended to prevent readmission, prescription notifications, and home healthcare instructions

> ii. Notification of shipment and tracking information

> iii. Notification about the status of a service an individual is seeking

> iv. Financial related messages (i.e. notes about debts owed)

> v. Disaster related messages related to health and safety

