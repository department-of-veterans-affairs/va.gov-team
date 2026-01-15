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

**Send new messages to care teams at transitioning sites**
- Users won't be able to select care teams at MI transition sites. For VA.gov: On either recent recipients page or select a care team page. For VAHB: On the compose message screen.

**Reply to messages from care teams at transitioning sites**
- There's an alert we display for people trying to message blocked TG.
- Going to create custom alert with more specific language.

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

**Recent recipients names**
- (Needs confirmation) For users with messages only from OH transitioning facilities, they won't have any recent recipients.
