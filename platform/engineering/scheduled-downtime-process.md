# Scheduled Downtime Process for VA.gov

## WORK IN PROGRESS
The following is a proposed process. Last revised April 2020.

## Overview
Downtime on VA.gov is admittedly rare, but from time to time it may need to happen. Site upgrades, migrations, or changes that affect the public site may result in the site requiring VA.gov services to be taken down for brief periods of time. When this is necessary, we need to make sure that the VA.gov users and developers working on the VA.gov platform are sufficiently informed. Please follow the process below in order to allow the right parties to be aware, give enough time for other teams to make any preparations, and to minimize effect to the Veterans and other users of VA.gov. 

## Steps to schedule and implement downtime notifications on VA.gov

### Start here: for *all* scheduled downtime

1. Team initiating downtime (VSP or other) documents the exact date and time you anticipate the downtime happening and the systems that will be taken down:
    - Systems affected: system name 1, system name 2, etc.
    - Proposed date and time for staging: DayOfWeek, Month Date, YYYY, from h:mm AM/PM to h:mm AM/PM
    - Proposed date and time for production: DayOfWeek, Month Date, YYYY, from h:mm AM/PM to h:mm AM/PM
    - _Note: Pre-approved downtime schedule is Saturdays from 7 pm - 10 pm EST. Specific downtime must still be approved by DEPO Heads of Platform._
 
1. Communicate planned downtime to the VSP Operation's Product Manager (@ricetj) in order to be added to the downtime schedule (link) and VA's Polaris. Then the DEPO Heads of the Platform (@KevinMHoffmanUSDS and Dror Matalon) should review your addition to the downtime schedule.

1. Proceed to Option A or B below based on the expected duration of downtime

### Option A: When downtime is expected to last > 10 minutes: 

1. Make an announcement at the weekly Team of Teams meeting and notify #vfs-all-teams in Slack at least 1 week in advance

1. Post a Slack notification of the downtime in #vsa-public-websites channel at least 4 days in advance, ccing @Jen Lee so that the team is aware and that the appropriate parties will be notified. 

1. Once the planned downtime has been announced in the #vsa-public-websites and #vfs-all-teams channels, VSP content lead (@peggygannon) will create a content ticket for the downtime messages. 

1. **For downtime messages that will appear sitewide on static pages:**
    - Peggy will add Jen Lee and #vsa-public-website dev to the content ticket as reviewer.
    - VSA-public-website dev will create PR using the approved message and add Peggy Gannon as reviewer. (Jen Lee as optional reviewer.)
    - Once PR has been reviewed/approved, #vsa-public-website dev can implement it.
 
1. **For downtime messages that will appear in applications, tools, and on sign-in modules:**
    - Applications, tools, and sign-in modules will show automated notifications when the associated service is unavailable, but no advance or custom messaging will be shown in these locations.

### Option B: When downtime is expected to last < 10 minutes: 

1. Make an announcement in #vfs-all-teams in Slack at least 1 business day in advance. 

1. There will be no sitewide or advance notification of this downtime. Applications, tools, and sign-in modules will show automated notifications when the associated service is unavailable. 

1. If, during the scheduled maintenance window the engineer finds that downtime is unexpectedly going to exceed the 10-minute window, roll back the change *(if possible)* and proceed according to Option A instead.

## Downtime notification content and design resources
 
Standardized scheduled downtime messages and design components can be found here: 
 
https://design.va.gov/patterns/messaging-dictionary
