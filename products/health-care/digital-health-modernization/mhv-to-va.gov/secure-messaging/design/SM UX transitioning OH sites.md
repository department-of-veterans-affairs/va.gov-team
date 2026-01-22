# SM experience during data migration for transitioning OH sites
This doc explains patients' secure messaging experience during the data migration period when their facility transitions to OH. The migration period is when we'll block users from sending or replying to messages at transitioning facilities. This is to prevent data loss.

In this doc: 
- [Upcoming sites](#upcoming-sites)
- [UX during transition](#ux-during-transition)
- [Questions](#questions)

## Upcoming sites
Upcoming transitioning sites in Michigran for April 2026: 
- VA Battle Creek Medical Center	 
- VA Detroit Healthcare System	
- VA Ann Arbor Healthcare System	
- VA Saginaw Healthcare System

You can [review the full EHR deployment schedule on this VA page](https://digital.va.gov/ehr-modernization/ehr-deployment-schedule/). 

## UX during transition
This describes how patients at the transitioning sites will experience messaging on VA.gov. In this section: 
- Alerts
- Functionality during transition
  
### Alerts 
We'll display these alerts to users.
- Before transition: "You can't send/reply to messages during this upcoming period of time"
- During transition: "You can't send/reply to messages right now until [date]"

### Functionality during transition
Here's what users will and won't be able to do during the transition: 
|What users can do during transition|What users can't do during transition|
|---|---|
|- Review past messages<br>- Any action with messages not from MI transition site care teams|- Send new messages to care teams at transitioning sites<br>- Reply to messages from care teams at transitioning sites<br>- Move message<br>- Save draft<br>- Create folder (VA.gov only)<br>- Edit preferred care team list (VA.gov only)<br>- Delete folder (VA.gov only)<br>- Edit folder (VA.gov only)<br>- Delete thread (VA.gov only)<br>- Move thread (VA.gov only)| 

This describes each task experience in greater detail.

#### Users who only have messages with non-transitioning sites
- No change?

#### Users who only have messages with transitioning sites
|VA.gov or VAHB mobile app|Task|Description|
|---|---|---|
|VA.gov|Send new message|- User has error alert message "You can't use messages to contact providers at some facilities right now" on **inbox page**<br>- User does not have "Start a new message" action link|
|VAHB mobile app|Send new message|- User has error alert message "You can't use messages to contact providers at some facilities right now" on **inbox and Start new message screen**<br>- User won't have any care systems/teams to select<br>- User has inline error messages when selecting "Send" button because they can't complete all required fields|
|VA.gov|Reply to message|- User has yellow alert "You can't send messages to some of your care teams" on **message details page**<br>- User does not have "Reply" button|
|VAHB mobile app|Reply to message|- User has yellow alert "You can't send messages to some of your care teams" on **message details screen**<br>- User has "Start a new message" button instead|


### Users who only messages with transitioning sites AND non-transitioning sites
|VA.gov or VAHB mobile app|Task|Description|
|---|---|---|
|VA.gov|Send new message|- User has error alert message "You can't use messages to contact providers at some facilities right now" on **inbox, interstitial, and Select care team pages**<br>- User can only select care teams at non-transitioning sites. Users won't have care teams from transitioning sites to select<br>- **Note**: If user is also blocked from messaging care teams at a non-transitioning site, they may also have the warning alert message "You can't send messages to care teams at [system]"|
|VAHB mobile app|Send new message|- User has error alert message "You can't use messages to contact providers at some facilities right now" on **inbox and Start new message screen**.<br>- User can only select care teams at non-transitioning sites. Users won't have care teams from transitioning sites to select<br>- User has inline error messages when selecting "Send" button because they can't complete all required fields|
|VA.gov|Reply to message|Same as above for only messages to care teams at transioning sites|
|VAHB mobile app|Reply to message|Same as above for only messages to care teams at transioning sites|

**Create folder, Delete folder, etc.**
- User gets routine red error message

**Edit draft to care team at transitioning site**
- Their care team will still display
- Idea: Prevent any editing for fields in draft
- Idea: Replace form elements with text, remove 'Send' and other actions that can't be performed
- Idea: Surface modal when user tries to edit values
- Idea: Adding some indication on list page (a tag?) that draft is read-only right now

**Care team names on pre-cutover messages**
- All the old messages will maintain the same name. Further replies or new messages to the transitioning care teams will have the new name.
