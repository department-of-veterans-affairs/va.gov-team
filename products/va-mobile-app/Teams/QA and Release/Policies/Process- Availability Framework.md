# Availability Framework Process 
 - Version: 1.0

## Purpose: 

Availability Framework (AF) is an available solution for VA Health and Benefits App to "turn off", restrict access, or communicate limitations on an affected feature or screen when there are critical errors in production or aware of upcoming changes that may warrant its use (such as a planned outage not using maintenance windows) so that the user will not have a bad user experience. Intent is to remotely display a screen with content so that the Veteran knows there is an issue and are informed on how to get the information or take the action they intended in the meantime until a fix is in place via a hotfix or standard app release. 

AF changes are made without a release and screen/content changes can be made in ~30 minutes once finalized and approved. 


### Things to consider: 
* Jon Bindbeutel is the FE main point of contact
* Any Team's QA can support testing if needed - no single contact 
* Mist is currently the only Content person for Mobile
* Need to consider if there needs monitoring / analytics from AF usage
* Only impacts Veterans who are on the mobile version of 2.19 or newer
      * Veterans on versions prior to 2.19 will not be impacted 
* Functionality enables Mobile to make changes directly to production 
* AF does not have the capability to display based on Veteran variables unless that variable is available to AF to use 
*  * Incident Commander in the Incident Response Process may use AF as a vaiable solution (hotfix, wait, etc)
* Turning AF on or off at this time can only be done manually
* Improvements will not be made by Qart team as they do not have the resources to facilitate improvements - should be done by Flagship teams 
* Depending on the situation responsiblity and accountablity owners may change
* Including Versions as part of the parameters can make monitoring and management more complicated as AF would stay on for the version until no one is using that version any more
* Some other targeting examples -> Platform, Platform Version, build # 

### Component Related 
* Only uses Alert Boxes and Mobile Alert Pop-up if doing scenario 1 
* Pre-login screen Alert Box - limited on styling ; able to change alert box color between yellow and red
* Alert box colors within the app cannot be changed
* Yellow/red alert boxes or native alerts are currently the only component usable for AF (per Binny on 1/31)
* Unable to bold within alert boxes without making changes to the alert box component
* May be able to separate paragraphs with string manipulation but engineering needs to review (spike being done by Health team 1/31)  
 Address (Contact Info) and Phone Number (Contact Info) are collective sets - turning on the waygate for address applies to both home and mailing address, and phone number impacts home, work and cell.
* Similarly, the 'generic letter' waygate applies to all letter types EXCEPT benefit summary and services verification letter.
* The login waygate will only ever function as use case 3 (the buttons to log in are available, and an informational alert appears onscreen).
** If the goal is to turn off login entirely, we cannot accomplish that for anyone other than new users to the app (by using a UC1 or UC2 waygate on LOA Gate).
* We only have the ability to add a UC1 type waygate to webviews (such as the privacy policy, VA location finder, VA COVID-19 updates, etc)
* In "Personal Information", the "How to update or fix an error in your legal name" and "How to fix an error in your date of birth" large panels are the same screen, so any AF alerts for either of those will be applied to both
* We get use case 2 and 3 "for free" whenever a new feature is created, as long as it uses the screen templates (aka no additional code needed, and we can use AF for those use cases with firebase and it works appropriately - tested during initial implementation). We also get UC1 for free for every release with ticket #7278 in it, which was released after the initial AF work.
* Although we do generally block the underlying API calls for screens that are hidden behind AF banners (so the analytics/activity logs match the , there are some exceptions: v0/user/contact-info when navigating away from the Letters Overview screen (ticket #7522), v0/military-service-history on the Home Screen, and the prescriptions list vo/health/rx/prescriptions?.... on the Prescription History screen
* Because of the display logic for when users are/are not authorized for claims decision letters, if we ever need to apply AF barriers to claims, claims history, or claims decision letters, it should be tested internally first to make sure it blocks the desired screens for all users.

----------------------

## High level steps

**1.) Availability Framework use case is identified** 

**2.) POs have approved the use of Availability Frame** 
   - AF Ticket Template created
   - POs approval to use AF added to the ticket 

**3.) Impacted Flagship Team and FE Lead determine AF strategy and timing** 
   - page placement(s) 
   - components being used
   - Content and formatting 
   - When it will be turned on / off
   - What is the remediation to turn off AF
   - Testing requirements
   - Consider App Version needs, tracking and complexity 
     
**4.) Flagship PM to get PO approvals for AF strategy** 
   - PO approval added to the ticket 

**5.) Flagship team implements AF strategy** 
  - FE Lead to Update JSON 
  - QA validates JSON configuration is correct - notates this on the ticket 
  - [AF testing instructions ](https://dsvavsp.testrail.io/index.php?/suites/view/92&group_by=cases:section_id&group_order=desc&display_deleted_cases=0)

 **6.) Pre-Production QA testing**
   - Validate JSON configuration is correct 
   - Validate AF works as expected - turned on / off 

  **7.) Turn on AF as planned by Engineering Lead**
   - Validate its on in Production by at least checking AF data
   - Flagship PM keeps PO informed 

  **8.) Root cause implementation / issue resolve**
   - Ex. Hotfix / normal release goes out, VA outage / update completed 
   - If applicable, link root cause ticket to AF ticket 

  **9.) Turn off AF as planned by Engineering Lead**

  **10.) Document use case and analytics in this document** 

----------------------


### Identified Use Cases 

| # | Use Case Description| Actor | Goal | 
| ----- | ------- | ----- | ----- | 
| 1 | Deny Access. A screen is broken (for all users) and it cannot be rendered without crashing app/red screen of death. | Screen is broken for all users and cannot be rendered. Waygate prevents access completely (does not render screen).  | Prevent all users from attempting to load the problem screen until a fix has been made (to prevent app crashing). | 
| 2 | Deny Content. A screen element, feature, or part of a feature is broken (for ALL USERS). The feature entry point can still be accessed and a screen can still be rendered, but we want to prevent all users from accessing the feature. A) We are working to resolve it remotely B)The issue is now resolved and installing a new version of the app will be required to correct the problem | Screen is broken for all users but can still be rendered. Disaster message displays instead of screen content| Prevent ALL USERS from accessing a broken feature until a fix has been made and offer the ability to get that info in some other way in the meantime (A&B) & then empower users to fix it (B).|
| 3 | Allow content and function. A screen element, feature, or part of feature is broken (for SOME users, not all). The feature entry point can still be accessed and a screen can still be rendered, but some folks can see data within the feature and others can’t. A) We are working to resolve it remotely B) The problem is now resolved and installing a new version of the app will correct the problem | Screen is broken for some users but can still be rendered. Disaster message appears FOR ALL. User may or may not see screen content | For a feature that is broken for SOME USERS but not all, set expectations and provide guidance (around how to get that info some other way in the meantime (A&B) and then empower users to fix it (B)) that helps the affected segment until a fix has been made, but do it without preventing access to that feature for the users who are not affected by the issue. | 

#### **JSON DISCLAIMER**
In order to get availability framework banners working in production, we need to put JSON into firebase. We've added some guardrails, but malformed JSON (ex: trailing commas) will cause crashes in the app. As a best practice, copy-paste from the known-to-work JSON below, and immediately double-check the functionality in the app, when setting this for a screen that's in production.

For the **'fixed'** versions of these, you will also need to work with a front-end engineer to add version information (ex: only show for app version X.XX and below) to the banner. **Samples not provided for those.**

| Use Case | JSON Sample - See Disclaimer Above | 
|------- | ------- | 
| Use Case 1 (deny access) | { "enabled": false, "errorMsgTitle": "The app isn't working right now", "errorMsgBody": "While we fix the problem, you can still get your VA health and benefits information on VA.gov.", "type": "DenyAccess" } |
|Use Case 2 (deny content), not yet fixed: | { "enabled": false, "errorMsgTitle": "We found a problem", "errorMsgBody": "We're sorry. We're fixing a problem we found [with/in this thing]. If you need help now with [the thing], call us.", "type": "DenyContent", "appUpdateButton": false } | 
|Use Case 2 (deny content), with fix released: | { "enabled": false, "errorMsgTitle": "You need to update the app", "errorMsgBody": "We fixed a problem [with/in this thing]. But to use this tool again, you need to update the app. If you need help now with [the thing], call us.", "type": "DenyContent", "appUpdateButton": true } | 
|Use Case 3 (allow content and function), not yet fixed: | { "enabled": false, "errorMsgTitle": "You may have trouble with [explain the thing]", "errorMsgBody": "We're fixing a problem [with/in this thing] that's affecting some Veterans. If you can't use [the thing] and need help now, call us.", "type": "AllowFunction", "appUpdateButton": false } | 
|Use Case 3 (allow content and function), with fix released: | 	 { "enabled": false, "errorMsgTitle": "You may need to update the app", "errorMsgBody": "We've fixed a problem some Veterans were having [with/in this thing]. If you're still having trouble using this tool, you may need to update the app. If you need help now with [the thing], call us.", "type": "AllowFunction", "appUpdateButton": true } |


### Real-life Use Cases: 

| # | Situation | Date Identified | Date Implemented | Date Turned off | Solution | Ticket| Other Details |
| ---- | ------ | --------------- | ----------------- | -------------- |  ------ | -------- | ----- |
| 1 | Vets-API will be upgrading Redis on 1/31 from 2am for a couple hours | [1/26/24](https://dsva.slack.com/archives/C024ULHLDH9/p1706284391615819) | 1/30/24 | 1/31/24 | Mobile to add content on the pre-login screen starting on 6pm Et 1/30 and content to stay up until Redis upgrade is complete or shortly there after | [7848](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/7848) | VA informed Mobile that Redis upgrade was delayed at 6:21pm ET after it launched; Mobile after hours removed AF. Looks like AF was live for around 75 minutes. In that time it was shown 18,538 times to 14,300 users. [Retro 1](https://app.mural.co/t/adhoccorporateworkspace2583/m/adhoccorporateworkspace2583/1706722136415/7492d89f991fa3f1518c78d9a4cce9c49e5260c2?sender=u7ec1ac1ea3bde48882e36908).  | 
| 2 | Cerner Lovell Facility | [1/29/24](https://dsva.slack.com/archives/C0190MTGNUE/p1706556021923479) | | | FE added code to target Veterans with a specific variable; BE modifying code to allow FE to get that variable code. AF will display message toi proactively inform Veterans impacted before the Lovell Cerner change  starts, then BE will control the message, then after Cerner change for Lovell there will be a standard Mobile App message to make Veterans aware | [7864](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/7864) | Required AF improvements to facilitate this use case | 


### Possible Improvements 
 * Add functionality to automatically turn on and off AF vs having to do it manually
 * Similar type of fucntionality where Mobile could customize erorr messages based on received API error #s received

