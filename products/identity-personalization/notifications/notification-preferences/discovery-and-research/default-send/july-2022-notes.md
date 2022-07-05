# Default send notification settings discovery
July 6, 2022

## Background
VA Profile has added a data point to their API that tells us whether or not a notification is sent by default when a Veteran signs up for a service.  We conducted some discovery work to understand the implications of this on the UI of our notification settings feature in profile.

## Q&A
1. **What type of notifications are eligible for a default opt-in?**

2. **How do we convey the different notification types to users (user opt-in vs default opt-in)?**

3. **How can a user opt-out of a default opt-in?**

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
