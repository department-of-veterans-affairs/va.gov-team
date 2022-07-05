# Default send notification settings discovery
July 6, 2022

## Background
VA Profile has added a data point to their API that tells us whether or not a notification is sent by default when a Veteran signs up for a service.  We conducted some discovery work to understand the implications of this on the UI of our notification settings feature in profile.

## Q&A
1. **What type of notifications are eligible for a default opt-in?**

2. **How do we convey the different notification types to users (user opt-in vs default opt-in)?**

3. **How can a user opt-out of a default opt-in?**
- A user can reply STOP to a text message to unsubscribe

4. **How do other websites approach this? Are there any best practices” we should consider?**

5. **As a government entity, are we required to show the difference between when a user has opted in themselves and when they have been opted in by default?**
- There are no requirements to show this difference. To comply with 
Telephone Consumer Protection Act (TCPA), the only requirement is that we need to provide an explicit means of opting out.

6. **How is VA Notify using this new flag?**
- It’s a technical flag to understand what kind of logic to use when they’re notifying somebody
- If you’re requiring someone to explicitly opt in, we need to check for that opt-in before we send it
- Implicit send (aka default send) says that they can still send the notification without an explicit opt in

6. **Do we still need to require people to opt in OR out for each notification type?** 
- We 

7. **How does this new flag change the data structure of VA Profile’s API?**
- This is a boolean value in the communication group data called `defaultSendIndicator`



## Outstanding questions for VA Notify
1. Do all VA Notify emails have an unsubscribe link?
2. Does every text message include “reply STOP to opt out” or something to that effect?
3. Are there VA emails that have default sends, or is it just text messages?
4. 
5. I’m trying to understand which types of notifications are eligible for default sends, and found info below in the PDF Beverly shared. Are there any other kinds of default sends a Veteran could receive that aren’t covered here? I don’t see transactional messages listed (e.g. email address in your profile has been changed) but perhaps that falls under the 3rd item in that list.
> A 2015 FCC Declaratory Ruling5 notes the following types of messages would not require “explicit written consent”:
> i. Health care communication, including communication about appointment and exam confirmations and reminders, wellness checkups, hospital pre-registration instructions, pre-operative instructions, lab results, post-discharge follow-up intended to prevent readmission, prescription notifications, and home healthcare instructions
> ii. Notification of shipment and tracking information
> iii. Notification about the status of a service an individual is seeking
> iv. Financial related messages (i.e. notes about debts owed)
> v. Disaster related messages related to health and safety


