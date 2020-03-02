# Scheduled Downtime Process for VA.gov

## Overview
Downtime on VA.gov is admittedly rare, but from time to time it may need to happen. Site upgrades, migrations, or changes that affect the public site may result in the site requiring VA.gov services to be taken down for brief periods of time. When this is necessary, we need to make sure that the VA.gov users and developers working on the VA.gov platform are sufficiently informed. Please follow the process below in order to allow the right parties to be aware, give enough time for other teams to make any preparations, and to minimize effect to the Veterans and other users of VA.gov. 

## Steps to schedule and implement downtime notifications on VA.gov

1. Team initiating downtime (VSP or other) documents the exact date and time you anticipate the downtime happening and the systems that will be taken down:
    - Systems affected: system name 1, system name 2, etc.
    - Proposed date and time for staging: DayOfWeek, Month Date, YYYY, from h:mm AM/PM to h:mm AM/PM
    - Proposed date and time for production: DayOfWeek, Month Date, YYYY, from h:mm AM/PM to h:mm AM/PM
    - _Note: Pre-approved downtime schedule is Saturdays from 7 pm - 10 pm EST. Specific downtime must still be approved by DEPO Heads of Platform._
 
 2. Communicate planned downtime to the VSP Operation's Product Manager (@ricetj) in order to be added to the downtime schedule (link) and VA's Polaris. Then the DEPO Heads of the Platform (@KevinMHoffmanUSDS and Dror Matalon) should review your addition to the downtime schedule.
 
 3. Make an announcement at the weekly Team of Teams meeting about the scheduled downtime 1 week in advance.
 
 4. Post a Slack notification of the downtime in the #vsa-public-websites channel at least 4 days in advance, ccing @Jen Lee so that team is aware and that the appropriate parties will be notified.
 
 5. Post a Slack notification of the downtime at least 4 days in advance in #vfs-all-teams, detailing the dates and times approved by DEPO Heads of Platform.

6. Once the planned downtime has been announced in the #vsa-public-websites and #vfs-all-teams channels, VSP content lead (@peggygannon) will create a content ticket for the downtime messages. 

7.  **For downtime messages that will appear sitewide on static pages:**

- Peggy will add Jen Lee and #vsa-public-website dev to the content ticket as reviewer.
- VSA-public-website dev will create PR using the approved message and add Peggy Gannon as reviewer. (Jen Lee as optional reviewer.)
- Once PR has been reviewed/approved, #vsa-public-website dev can implement it.
 
8.  **For downtime messages that will appear in applications, tools, and on sign-in modules:**
- Peggy will add VSP engineering POC (to confirm who??) and the DEPO product owners of product teams (Andrea Schneider, Matt Self, Samara Strauss, and Steve Kovacs) to the content ticket as reviewers. 
- VSP engineering POC (to confirm who??) will create PR using the approved message and add Peggy Gannon as reviewer 
- Once PR has been reviewed/approved, VSP dev can implement it. 
 
 ## Downtime notification content and design resources
 
 Standardized scheduled downtime messages and design components can be found here: 
 
 https://design.va.gov/patterns/messaging-dictionary
