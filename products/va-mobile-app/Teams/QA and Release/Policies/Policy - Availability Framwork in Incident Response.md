# Availability Framework Policy 
 - Version: 1.0
 - Last updated: 1/19/2024 by Adam Kasmier

## Purpose: 

Availability Framework (AF) is an available solution for VA Health and Benefits App’s [Incident Response process](https://department-of-veterans-affairs.github.io/va-mobile-app/docs/Operations/Incident%20Response/).

AF provides a solution to be able to "turn off" or restrict access to the affected feature or screen remotely when critical errors occur, so that the user will not have a bad user experience.Intent is to remotely display a screen with content so that the Veteran knows we are fixing an issue and inform them on how to get the information or take the action they intended in the meantime until a fix is in place via a hotfix or standard app release. 

AF changes are made without a release and screen/content changes can be made in ~30 minutes once finalized and approved. 


### Other Notes
 - Work and decisions need to be included in tickets for tracking and reporting purposes
 - Incident Response’s Incident Commander is accountable for this process and may change RACI expectations 
 - AF does not have the capability to display based on Veteran variables 

---------------------

### Process: 

 1.) The Incident Response process has received PO approval to use Availability Framework interim solution 
 -  Ideally, determine what type of release will follow it up (hotfix / regular release)
     
 2.) Impacted Team finalizes and approves copy and screen placement
  - Discuss if copy needs to be updated to align with root cause fix timing
  - UX validates visual look and feel

 3.) QA successfully tests the AF solution 
  - If issues are found, Incident Commander can decide to fix the issues or proceed with the issues 

 4.) Engineering pushes AF solution into production
 
 5.) Post production validation of the AF Solution by Impacted team 
 
 6.) Impacted Team monitors AF solution until root cause is fixed in production 
 
 7.) Determine if AF copy needs to be updated to align with root cause solution timing 
  - Copy is updated and approved
  - Updated Copy pushed to production by Engineering 

 8.) Root cause solution implemented (Hotfix or regular release) 
  - Hotfix and regular release processes will be followed but our outside of this policy including if app store content needs updated to reflect the fix 
 
 8.) Turn off AF when applicable 
 
 9.) Impacted team completes a retro to identify how to reduce risk of the issue happening again 
 
 10.) If applicable update AF Policy based on findings / learnings 
 
-----------------------

### Identified Use Cases 

| # | Use Case Description| Actor | Goal | 
| ----- | ------- | ----- | ----- |
| 1 | A screen is broken (for all users) and it cannot be rendered without crashing app/red screen of death. | Screen is broken for all users and cannot be rendered. Waygate prevents access completely (does not render screen).  | Prevent all users from attempting to load the problem screen until a fix has been made (to prevent app crashing). |
| 2 | A screen element, feature, or part of a feature is broken (for ALL USERS). The feature entry point can still be accessed and a screen can still be rendered, but we want to prevent all users from accessing the feature. A) We are working to resolve it remotely B)The issue is now resolved and installing a new version of the app will be required to correct the problem | Screen is broken for all users but can still be rendered. Disaster message displays instead of screen content| Prevent ALL USERS from accessing a broken feature until a fix has been made and offer the ability to get that info in some other way in the meantime (A&B) & then empower users to fix it (B).|
| 3 | A screen element, feature, or part of feature is broken (for SOME users, not all). The feature entry point can still be accessed and a screen can still be rendered, but some folks can see data within the feature and others can’t. A) We are working to resolve it remotely B) The problem is now resolved and installing a new version of the app will correct the problem | Screen is broken for some users but can still be rendered. Disaster message appears FOR ALL. User may or may not see screen content | For a feature that is broken for SOME USERS but not all, set expectations and provide guidance (around how to get that info some other way in the meantime (A&B) and then empower users to fix it (B)) that helps the affected segment until a fix has been made, but do it without preventing access to that feature for the users who are not affected by the issue. | 

----------------------

### RACI 

| Task | Responsible | Accountable | Consult | Inform | 
| ----- | ---------- | ----------- | ------- | ------ |
| Incident Response Process | Incident Commander | Incident Commander | Impacted Team | POs |
| Approval to use AF | POs | Incident Commander | PM, Content, QA, Data, UX | Leads |
| AF Screen Copy | Content | Incident Commander | PM, UX, PO, FE Eng  | QA |
| AF Screen Placement | Impacted Team PM | Incident Commander | UX, PO, FE Eng, Content | QA |
| Test AF Solution | QA | Incident Commander | PM, Content, FE Eng, UX | PO |
| Push AF Solution to App | FE Eng | Incident Commander | PM, PO | Leads |
| Post Validation Monitor AF Solution | Impacted Team PM  | Incident Commander | FE Eng, Data | POs |
| Post AF Solution | Impcated team PM | Incident Commander | UX, PO, FE Eng, Content, QA | Leads |
| Turn off AF Solution | FE Eng | Incident Commander | PM, PO  | UX, Content, Leads |
| AF Solution Documentation | Incident Commander |  Incident Commander | PM, Content, FE Eng, Data  | Leads |

### Open Questions 

- Does the AF message stay up until they update the app
- Can we do different AF messages depending on the app version 
- What in the past would we have used Availability Framework for and what wouldn’t we have used it on
- Do we need an AF ticket template or label? Is there one for Incidence Response process
- Can e2e be applied here 
