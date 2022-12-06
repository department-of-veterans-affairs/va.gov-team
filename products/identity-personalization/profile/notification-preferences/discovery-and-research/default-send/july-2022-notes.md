# Default send notification settings discovery
July 7, 2022

## Background
VA Profile has added a data point to their API that tells us whether or not a notification is sent by default when a Veteran signs up for a service.  We conducted some discovery work to understand the implications of this on the UI of our notification settings feature in profile.

## Q&A
1. **What type of notifications are eligible for a default send?**
- SMS/Text messages
- Currently, all emails handled by VA Notify are sent by default, but they’re system generated messages (e.g. confirmations) and don’t fit into the same type of notification that either implied vs explicit consent.

2. **How can a user opt-out of a default send notification?**
- There isn’t a way for users to opt out of any VA Notify emails right now. The team is working on it.
- Users can opt out of default send text messages via the VA.gov notification settings page.
- They can also opt out by replying STOP to a text message to unsubscribe. However, if a user does this, **it is not reflected in VA Profile**.
	- VETText will check against this “STOP” message, so users won’t receive texts **BUT**
	- VA.gov will still reflect that they are opted in since VA profile will not update the preferences based on a phone number.

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
- If a notification requires someone to explicitly opt in, VA notify need to check for that opt-in before they send it
- Implicit send notifications (aka default send) says that they can still send the notification without an explicit opt in

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

## Findings 
1. There are no best practices or technical reasons we need to change anything in our notification settings UI to support this new flag.
2. VA Profile’s API doesn’t reflect opt-outs unless they happen in the VA.gov profile, which means the VA.gov profile may show someone is opted-in when they are actually opted out. 
3. The data from the default send flag means we have more flexibility with our design and can simplify the notification settings UI.  When the default send data is combined with the permission value, we can still satisfy VA Notify’s requirement to identify explicit opt outs (refer to table above).



