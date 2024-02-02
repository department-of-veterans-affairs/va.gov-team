# Availability Framework Process 
 - Version: 1.0
 - Last updated: 1/31/2024 by Adam Kasmier

## Purpose: 

Availability Framework (AF) is an available solution for VA Health and Benefits App to "turn off", restrict access, or communicate limitations on an affected feature or screen  when there are critical errors in production or aware of upcoming changes that may warrant its use (such as a planned outage not using maintenance windows) so that the user will not have a bad user experience. Intent is to remotely display a screen with content so that the Veteran knows there is an issue, its being adddress and inform them on how to get the information or take the action they intended in the meantime until a fix is in place via a hotfix or standard app release. 

AF changes are made without a release and screen/content changes can be made in ~30 minutes once finalized and approved. 

### High Level RACI 
| Pre or Post Production | Existing AF Features / Need New Functionality Built | Responsible  | Accountable | Consult | Inform | 
| --------------------- | --------------------------------------------------- | ------ | ----------- | --------- | --------| 
| Pre-Production | Existing  | Qa and Release Team PM | QA and Release Team PM | Flagship Team PM, PO | Mobile Team | 
| Pre-Production | New Feature Needed | Flagship Team PM | Flagship Team PM | Flagship Team, POs | Qa and Release, Mobile Team | 
| Post Production | Existing | Incident Response Commander | Incident Response Commander | POs, Flagship Teams, QA and Release Team | Mobile Team | 
| Post Production | New Feature | Incident Response Commander | Incident Response Commander | POs, Flagship Teams, QA and Release Team | Mobile Team | 

### Things to consider: 
 - Work and decisions need to be included in tickets for tracking and reporting purposes
 - AF does not have the capability to display based on Veteran variables
 - AF is also a vaiable solution for the which will be managed by the Incident Commander
 - Turning AF on or off at this time can only be done manually
 - Able to add messaging to the pre-login screen
 - If you identify that you need additional variable / user logic to implement AF, discuss with FE / BE on what the options are and if timing of implementing will work for the issue (ex. Cerner Lovell Facility issue 1/29/24)
 - Pre-login screen Alert Box - limited on styling ; able to change alert box color to whatever we want
 - Alert box colors within the app cannot be changed
 - AF changes cannot be made or completed by QA and Release Team as we do not have the engineering resources to do - it will be up to Flagship teams to improve and change
 - Depending on the situation responsiblity and accountablity owners may change
 - Yellow/red alert boxes or native alerts are currently the only component usable for AF (per Binny on 1/31)
 - Unable to bold within alert boxes without making changes to the alert box component
 - May be able to separate paragraphs with string manipulation but engineering needs to review 

### Open Questions 

- Does the AF message stay up until they update the app
- Can we do different AF messages depending on the app version 
- Can e2e be applied here


### Identified Use Cases 

| # | Use Case Description| Actor | Goal | 
| ----- | ------- | ----- | ----- |
| 1 | A screen is broken (for all users) and it cannot be rendered without crashing app/red screen of death. | Screen is broken for all users and cannot be rendered. Waygate prevents access completely (does not render screen).  | Prevent all users from attempting to load the problem screen until a fix has been made (to prevent app crashing). |
| 2 | A screen element, feature, or part of a feature is broken (for ALL USERS). The feature entry point can still be accessed and a screen can still be rendered, but we want to prevent all users from accessing the feature. A) We are working to resolve it remotely B)The issue is now resolved and installing a new version of the app will be required to correct the problem | Screen is broken for all users but can still be rendered. Disaster message displays instead of screen content| Prevent ALL USERS from accessing a broken feature until a fix has been made and offer the ability to get that info in some other way in the meantime (A&B) & then empower users to fix it (B).|
| 3 | A screen element, feature, or part of feature is broken (for SOME users, not all). The feature entry point can still be accessed and a screen can still be rendered, but some folks can see data within the feature and others can’t. A) We are working to resolve it remotely B) The problem is now resolved and installing a new version of the app will correct the problem | Screen is broken for some users but can still be rendered. Disaster message appears FOR ALL. User may or may not see screen content | For a feature that is broken for SOME USERS but not all, set expectations and provide guidance (around how to get that info some other way in the meantime (A&B) and then empower users to fix it (B)) that helps the affected segment until a fix has been made, but do it without preventing access to that feature for the users who are not affected by the issue. | 

### Real-life Use Cases: 

| # | Situation | Date Identified | Date Implemented | Date Turned off | Solution | Ticket| Other Details |
| ---- | ------ | --------------- | ----------------- | -------------- |  ------ | -------- | ----- |
| 1 | Vets-API will be upgrading Redis on 1/31 from 2am for a couple hours | [1/26/24](https://dsva.slack.com/archives/C024ULHLDH9/p1706284391615819) | 1/30/24 | 1/31/24 | Mobile to add content on the pre-login screen starting on 6pm Et 1/30 and content to stay up until Redis upgrade is complete or shortly there after | [7848](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/7848) | VA informed Mobile that Redis upgrade was delayed at 6:21pm ET after it launched; Mobile after hours removed AF | 
| 2 | Cerner Lovell Facility | [1/29/24](https://dsva.slack.com/archives/C0190MTGNUE/p1706556021923479) | | | FE added code to target Veterans with a specific variable; BE modifying code to allow FE to get that variable code. AF will display message toi proactively inform Veterans impacted before the Lovell Cerner change  starts, then BE will control the message, then after Cerner change for Lovell there will be a standard Mobile App message to make Veterans aware | [7864](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/7864) | Required AF improvements to facilitate this use case | 

----------------------
  
# AF Involving Post Production Problem 


## When there is a production problem: 

 **1.) Production issues get worked the The Incident Response process has received PO approval to use Availability Framework interim solution** 
 -  Ideally, determine what type of release will follow it up (hotfix / regular release)
     
 **2.) Impacted Team finalizes and approves copy and screen placement**
  - Discuss if copy needs to be updated to align with root cause fix timing
  - UX validates visual look and feel

 **3.) QA completes pre-production validation of AF**  
  - If issues are found, Incident Commander can decide to fix the issues or proceed with the issues 

 **4.) When its time, AF is turned on in production by engineering**
    - Post production validation if available
 
 **5.) Impacted Team monitors AF solution until root cause is fixed in production** 
 
 **6.) Determine if AF copy needs to be updated to align with root cause solution timing** 
  - Copy is updated and approved
  - Updated Copy pushed to production by Engineering 

 **7.) Root cause solution implemented (Hotfix or regular release)** 
  - Hotfix and regular release processes will be followed but our outside of this policy including if app store content needs updated to reflect the fix 
 
 **8.)  When its time, AF is turned off in production by Engineering**
 
 **9.) Impacted team completes a retro to identify how to reduce risk of the issue happening again** 
 
 **10.) If applicable update AF Policy based on findings / learnings**


-----------------------
#  AF Involving Pre Production Situations 

## When there pre-production situation: 

 **1.) Upcoming situation has been identified that could warrant using Availability Framework**

 **2.) Discussion with POs on if Mobile should use AF**
   - Gather as much requirements / expectations from the POs / Length of time until resolution  / maintenance windows coverage 
 
 **3.) PO approves the use of AF, impacted Team PM reaches out with QA and Release Team PM to discuss** 
   - Discussion to determine roles / responsibilities Qart may just support Impacted Team vs owning and pushing this work depending on circumstance
   - Use availability framework ticket template 
 
 **4.) Meeting with FE, Content, and QA to determine AF implementation - pull them from their applicable teams** 
   - Location, Content, Component, Solution immplemntation, Timing for turning on and off

 **5.) PO approves of the implementation plan** 

 **6.) Content and AF implementation is built**

 **7.) QA completes pre-production validation of AF** 

 **8.) When its time, AF is turned on in production by engineering**
    - Post production validation if available

 **9.) Root cause solution is implemented**

 **10.) When its time, AF is turned off in production by engineering**

 **11.) Document incident and AF usage at the bottom of this document.** 

------------------------
# How to improve Availability Framework 

## Current AF functionality does not support my needs, I need it be improved: 

 **1.) Someone identifies AF functionality does not support a use case or finds after its usage it could be improved**
 
  **2.) Use case and improvements are captured in a ticket with all details they are aware of** 
 
  **3.) Ticket groomed by the most relevant Flagship App Mobile Team** 
 
 **4.) Ticket is prioritized by Team** 
 
  **5.) Team Notifies QA and Release of the upcoming change**
 
  **6.) Qa and Release Team updates AF documents to account for the new chabge so it can be considered for future usage** 


------------------------


