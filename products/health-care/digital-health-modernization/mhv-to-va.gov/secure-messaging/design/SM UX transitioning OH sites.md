# SM experience during data migration for transitioning OH sites
This doc explains patients' secure messaging experience during the data migration period when their facility transitions to OH. The migration period is when we'll block users from sending or replying to messages at transitioning facilities. This is to prevent data loss.

In this doc: 
- [Upcoming sites](#upcoming-sites)
- [Alerts](#alerts)
- [Functionality during transition](#functionality-during-transition)

## Upcoming sites
Upcoming transitioning sites in Michigran for April 2026: 
- VA Battle Creek Medical Center	 
- VA Detroit Healthcare System	
- VA Ann Arbor Healthcare System	
- VA Saginaw Healthcare System

You can [review the full EHR deployment schedule on this VA page](https://digital.va.gov/ehr-modernization/ehr-deployment-schedule/). 
  
## Alerts 
We'll display these alerts to users.
- Before transition: "You can't send/reply to messages during this upcoming period of time"
- During transition: "You can't send/reply to messages right now until [date]"


- Warning on landing
- Error on landing + other pages

## Functionality during transition
Here's what users will and won't be able to do during the transition: 

**What users can do during transition**
- Review past messages
- Any action with messages not from MI transition site care teams, besides actions with their folders

**What users can't do during transition**
- Send new messages to care teams at transitioning sites
- Reply to messages from care teams at transitioning sites
- Save draft
- Delete draft (pending)
- Move message
- Create folder (VA.gov only)
- Delete folder (VA.gov only
- Edit folder (VA.gov only)
- Edit preferred care team list (VA.gov only)
- Delete thread (VA.gov only)
- Move thread (VA.gov only)

The following describes each task experience in greater detail.

### Transitioning site only users
|VA.gov or VAHB mobile app|Task|Description|
|---|---|---|
|VA.gov|Send new message|- User has error alert message "You can't use messages to contact providers at some facilities right now" on **inbox page**<br>- User does not have "Start a new message" action link|
|VA.govHomepage|Send new message|- User clicks "start a new message" and is redirected to **inbox page**, where they have the error alert message "You can't use messages to contact providers at some facilities right now"|
|VAHB mobile app|Send new message|- User has error alert message "You can't use messages to contact providers at some facilities right now" on **inbox and Start new message screen**<br>- User won't have any care systems/teams to select<br>- User has inline error messages when selecting "Send" button because they can't complete all required fields|
|VA.gov|Reply to message|- User has yellow alert "You can't send messages to some of your care teams" on **message details page**<br>- User does not have "Reply" button|
|VAHB mobile app|Reply to message|- User has yellow alert "You can't send messages to some of your care teams" on **message details screen**<br>- User has "Start a new message" button instead|
|VA.gov|Edit draft|- User has yellow alert "You can't send messages to some of your care teams" on **message details page**<br>- User does not have "Reply" button<br>-**Note**: If user deletes draft, we won't display error. It will delete and then reappaer post-cutover.|
|VAHB mobile app|Edit draft|- User lands on Edit draft screen. User has blank "Pick a care system" field.<br>- User has error alert message "You can't use messages to contact providers at some facilities right now" on **edit draft screen**|
|VA.gov|Edit contact list|- x<br>- x|

### Transitioning site AND non-transitioning site users
|VA.gov or VAHB mobile app|Task|Description|
|---|---|---|
|VA.gov|Send new message|- User has error alert message "You can't use messages to contact providers at some facilities right now" on **inbox and Select care team page**<br>- User can only select care teams at non-transitioning sites. Users won't have care teams from transitioning sites to select<br>- **Note**: If user is also blocked from messaging care teams at a non-transitioning site, they may also have the warning alert message "You can't send messages to care teams at [system]"|
|VAHB mobile app|Send new message|- User has error alert message "You can't use messages to contact providers at some facilities right now" on **inbox and Start new message screen**.<br>- User can only select care teams at non-transitioning sites. Users won't have care teams from transitioning sites to select<br>- User has inline error messages when selecting "Send" button because they can't complete all required fields|
|VA.gov|Reply to message|Same as "Transitioning site only users" for only messages to care teams at transioning sites|
|VAHB mobile app|Reply to message|Same as "Transitioning site only users" for only messages to care teams at transioning sites|
|VA.gov|Edit draft|Same as "Transitioning site only users" for only messages to care teams at transioning sites|
|VAHB mobile app|Edit draft|Same as "Transitioning site only users" for only messages to care teams at transioning sites|
|VA.gov|Edit contact list|- x<br>- x|

### Other notes
**Post-cutover**
- Users have to start new messages to respond to previous messages with previous care teams from transitioning sites.

**Create folder, Delete folder, etc.**
- User gets routine red error message?
- folder experiences and threads
   - Engineering waiting to hear back from API team on these items

**Try to upload large attachment**
- What error alert surfaces in VAHB?

**Care team names on pre-cutover messages**
- All the old messages will maintain the same name. Further replies or new messages to the transitioning care teams will have the new name.

