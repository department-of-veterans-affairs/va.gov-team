# VA Health & Benefits Mobile App Scrum of Scrums (SoS) 
[Github Projects Board](https://github.com/orgs/department-of-veterans-affairs/projects/823/views/3) - Meeting starts at 5min after the hour

## Meeting Purpose:

  * Highlight the quarterly plan and review progress
  * Review changes in risks, dependencies, assumptions, or priority for the current sprint
  * Review insights from ongoing discovery or delivery work in the current sprint
  * Discuss the plan for the upcoming sprint
  * Rebalance team staffing if necessary
  * Triage unplanned work


## Feature Status

| Syntax | PM | Status |
| ----------- | ----------- | ----------- |
| [Rx](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/5091) | Meko | GREEN |
| [Preferred Name & Gender Identification](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/4028) | Meko | Green |
| [Secure Messaging - Realignment with MHV](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/4718) | Adam | GREEN |
| [Secure Messaging - Migrate to Re-Engineered MHV APIs](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/5562) | Adam | On Hold |
| [WCAG 2.2 ](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/4228) | Stacy | YELLOW |
| [EVSS Backend Migration](https://app.zenhub.com/workspaces/va-mobile-blue-team-63483d4e9ff9282a04fef8a3/issues/gh/department-of-veterans-affairs/va-mobile-app/2558) | Kelly | GREEN |
| [Claims Metrics](https://app.zenhub.com/workspaces/va-mobile-product-view-610035bc5395bb000e62e529/issues/gh/department-of-veterans-affairs/va-mobile-app/4078) | Stacy | GREEN |
| [UI Automation](https://app.zenhub.com/workspaces/va-mobile-product-view-610035bc5395bb000e62e529/issues/gh/department-of-veterans-affairs/va-mobile-app/3728) | Adam | GREEN |
| [Check-In](https://app.zenhub.com/workspaces/va-mobile-blue-team-63483d4e9ff9282a04fef8a3/issues/gh/department-of-veterans-affairs/va-mobile-app/4315) | Meko | PRE-DISCOVERY |
| [VIC](https://app.zenhub.com/workspaces/va-mobile-product-view-610035bc5395bb000e62e529/issues/gh/department-of-veterans-affairs/va-mobile-app/4270) | Kelly | PRE-DISCOVERY |
| [Call Center Hand-off](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/Call_Center_Integration/Call_Center_Integration.md)| Kelly | PRE-DISCOVERY |
| Other | Anyone | GREEN |
| [CircleCI Migration](https://app.zenhub.com/workspaces/va-mobile-product-view-610035bc5395bb000e62e529/issues/gh/department-of-veterans-affairs/va-mobile-app/4670) | Kelly | COMPLETE |
| [Digital Decision Letters ](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/4290)| Kelly | COMPLETE |


## Notes

5/16/23

Check-In
* Team is working on providing LOE estimate for 2 check-in user experience flows 'check-in w/pre-registration & check-in w/out pre-registration.  Target to have estimates by Wed 5/16
* Push Notifications - Most of this effort is coordination that will need to be done w/check in team, Vetext/VaNotify (no implementation work on mobile).  If this is required for MVP, engagement will be needed with VeText/VANotify, are they in line with MVP timelines etc.
* Deep Linking - Will require a team spike (research time) to explore what would be involved and needed to implempement deep linking on the app
* There was an ask by Kay to add 'my-health-APPOINTMENTS' label to our check in Epic so that it would appear on the Unified Appointments Experience board.  It doesn't look like we are on the same repository and do not have access to adding the label and linking.  Need PO support on how to go about linking.  [Unified Appointments Experience Board](https://app.zenhub.com/workspaces/unified-appointments-experience-includes-mhv-to-vagov-check-in-mobile-etc-63d9ef2effd69b002641127b/board)



---------------

5/9/23

Sprint Demo meeting  - is there a better time slot?

EVSS Migration - data discrpencies
  * New claims Status data source does not include the VA Representative (removed because it was misleading)
  * We have concerns about removing it from the Claims tool in the app because there is no where else that provides this information.  
  * We could use help understanding how VA.gov made the decision to remove it

-----------------


5/2/23

Preferred Name & Gender Go/Live  on hold
  * Team currently troubleshooting, lag in update identified in during UAT.  Requires multiple update attempts to populate Preferred Name & Gender Identity issue #[5548](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/5548) 

Secure Messaging - MHV Re-engineering SM PAtient APIs & Mobile having to migrate  
  * This is completely separate work than the Secure Messaging Alignment (copy, attachment, categories, etc) work 
  * Late March MHV notified Mobile that they are re-engineering APIs for Secure Messaging Patient APIs - no functionality changes just moving to a new platform 
  * This requires Mobile to migrate to these APIs on the new platform in order to keep Secure Messaging functioning (May 31st is when MHV targeted their work completed ; Needed Mobile to migrate by 8/22) 
  * Given this mobile is entirely dependent on MHV as it's their APIs that need to be completed 
  * Informed last week that this timing may be at risk - no timeline given - delays some Q2 planned capacity (BE mainly) till later into Q2 and likely early Q3 
  * Next step is to meet with them in June 
  * I made this a separate item above   

Digital Decision Letters
  * All set to go live 5/9
  * Notifying VBA stakeholders

Figma Shipped Files
  * Ryan curious the effort we put into Design Ops tasks
    * VA.gov doesn't do the same process
    * We are putting more effort in right now but it won't always be this effort-heavy, going forward designs will go from working files into Shipped files.  We just need to build them out to start right now.
    * Ryan curious if there is a way to use the Shipped Files in Figma with his Data Dictionary work he is doing

-----------------

4/25/23
Discussion Items 
* Experience and worked through resource constraints in Sprint 69 
  * Overcame this challenge through positive team work and communicaiton - great job team!! 
* What's New in-app UI - what threshold do we want to use for utilization of the What's New alert on the app Home screen?
  * We will put both DDL and PNGI into the What's New Alert for this release.
* Pulling in Check-In Discover into Sprint 70 
  * This work was not planned for Sprint 70 so pulling it in means we need to remove work to compensate for the infusion of capacity to perform this work 
  * Need POs to decide what gets pulled out, we would recommened Secure Messaging Alignment and Claims Step 2 work 
  * Also may need to pull out work from Sprint 71 and 72 to compensate 
  * Expected lift for Check-in in this Sprint is lower than originally thought.  Health team to reevaluate if anything needs to be pulled out.
* More info coming later about the effort to put up Smart Banners on VA.gov to help drive people to use the mobile app.


-----------------
4/18/23
* Resource constraints on FE team have caused concerns for both DDL and WCAG features being wrapped up this Sprint
  * Should be more cognizant of capacities in Sprint Planning
* RX - MHV team making a change tonight related to tracking prescriptions
  * Rachel & Ryan - we need help understanding if this requires changes for us.  If so, we need to discuss timing as we can't match their release (tonight)
  * Currently we get tracking info from CMOP - not sure if this change is adding to this or something different
  * New content disclosure needs to be displayed?
* RX Research concluded, findings and recommendations to come
