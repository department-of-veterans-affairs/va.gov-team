# 2026 Oracle Health Go-Live Sites 
* MHVFE Horizon Team / January 2026
* Front-end alert + maintenance window planning

## On this page
* [Background](#background)
* [Go-live timelines](#timelines)
* [Complexity](#complexity)
* [Alert designs](#designs)
* [Implementation plan](#plan)
* [Open questions](#questions)

# <a name="background">Background</a>
Beginning on April 11, 2026 a number of VA health care facilities will begin to transition their electronic health record (EHR) system from VistA to Oracle Health (OH). This is a facility-only transition, and users will not need to adopt a new patient portal or transition to any new experiences. My HealtheVet on VA.gov will continue to be their patient portal, where they can manage their care online. 

However, in order for their facilities to make this transition, each will need a dedicated "downtime" period when they freeze patient health-care records, store a copy, and then begin to handle a massive data transfer effort to the new system. During this window of time (37 days), users will not be able to use their core health tools online. They can still call their facility or pharmacy over the phone to schedule and receive care and support.  The MHVFE teams will need to create alerts in the user experience to communicate these downtime windows to users.

# <a name="timelines">Go-live timelines</a>
The 2026 EHR modernization timeline names 4 "rounds" of facility updates, which each includes a cluster of 2-4 VA health care facilities that will migrate from VistA to Oracle Health. These are as follows: 

### Round 1 (Go-live: April 11, 2026)
  
|Facility name | Location | VISN | VHA_ID | 
|-----|-----|-----|----|
|VA Detroit Healthcare System | Detroit, MI | 10 | `VHA_553` |  
|VA Saginaw Healthcare System | Saginaw, MI | 10 | ?? | 
|VA Ann Arbor Healthcare System | Ann Arbor, MI | 10 | `VHA_506` | 
|VA Battle Creek Medical Center | Battle Creek, MI | 10 | `VHA_515` | 

### Round 2 (Go-live: June 6, 2026)
  
|Facility name | Location | VISN | VHA_ID |
|-----|-----|-----|----|
|Dayton VA Medical Center | Dayton, OH | 10 | `VHA_552` |
|Chillicothe VA Medical Center | Chillicothe, OH | 10 | `VHA_538` | 
|Cincinnati VA Medical Center | Cincinnati, OH | 10 | `VHA_539` | 
|Cincinnati VA Medical Center - Fort Thomas| Fort Thomas, KY| 10 | `VHA_539A4` |

### Round 3 (Go-live: August 22, 2026)

|Facility name | Location | VISN | VHA_ID |
|-----|-----|-----|----|
|Richard L. Roudebush Veterans' Administration Medical Center | Indianapolis, IN | 10 | `VHA_583` | 
|Marion VA Medical Center | Marion, IN | 10 | `VHA_610` | 
|Fort Wayne VA Medical Center | Fort Wayne, IN | 10 | `VHA_610A4` | 

### Round 4 (Go-live: October 24, 2026) 

|Facility name | Location | VISN | VHA_ID | 
|-----|-----|-----|----|
|Louis Stokes Cleveland Department of Veterans Affairs Medical Center | Cleveland, OH | 10 | `VHA_541` | 
|VA Alaska Healthcare System| Anchorage, AK| 20 | `VHA_463` | 

# <a name="complexity">Complexity</a>
Each go-live round will need to display 2 alerts per health tool landing page in the front-end user experience. These alerts will first 1.) warn users about planned maintenance window (downtime) and 2.)notify them of active loss of functionality across multiple health tools while their facilities are transitioning their EHR systems. 

At some point in the transition period (active maintenance window), "moment in time" data will be visible to users, but any healthcare touchpoints that happen during hte window will not be reflected in their record until after the maintenance window takes elapses. During the active maintenance window, all user tasks and actions will be suspended until **7 days after** the site go-live date.

1. **Warning alert** - upcoming maintenance window (will render for between 15-30 days, depending on the health tool)
2. **Error alert** - active maintenance window (active 30 days prior to go-live date until 7 days after go-live)

The My HealtheVet locations where these alerts need to render include: 
|Tool name | Web URL | Mobile app page|  
|----------|---------|----------------|
| My HealtheVet landing page | va.gov/my-health/| N/A | 
| Appointments landing page | va.gov/my-health/appointments/ | Appointments page | 
| Medications landing page | va.gov/my-health/medications/ | Prescriptions page | 
| Messages inbox | va.gov/my-health/secure-messages/inbox/ | Messages page | 

### Users with multiple facilities from the same go-live round in their user profile
In most cases, facilities that are being transitioned are from the same US region. It's highly likely that users may have multiple facilities that are being transitioned at the same time in their profile. In order to plan for this and prevent stacking the same exact alert for multiple facilities on landing page, we should template alerts that are prepared to string multiple facility_names together in the body content. 

This will require a _singular_ verison of the alerts and a _multiple_ version with correct verb tenses and pluralization. Horizon should work with content to consider how best to template this. 

### Users with facilities from different go-live rounds in their profile
In some cases, alert 1 (warning alert) for an upcoming round of go-live sites will overlap with the timeline for alert 2 (active maintenance window for earlier round of go-live sites). It is possible that  users could have facilities in their profile from each of these groups and see both alerts. 

In general, alerts should always render in severity order, meaning: alert 2 (warning alert) should display hierarchically _above_ warning alerts for upcoming maintenance windows at other facilities. 

### Data suppression during active downtime windows
Because users could have multiple facilities in their profile (some of which are transitioning EHRs in an active migration round, but potentially some that are not being affected), it could be considered a patient safety risk to suppress all task functionality across tools. It will be complex to first read if they have other facilities that are not actively being migrated before determining whether to show this functionality - and may not be worth the lift to build this out for a temporary 32-37 day window. 

Instead, in-product tactics within the tools themselves will be more advantageous from a user-experience perspective. For example, within the appointments flow, direct-schedule appointment types could suppress _specific facility names_ within the flow, or even allow them but lead the user to a page that requires a phone-call to complete scheduling instead of allowing direct online scheduling. For Secure messaging, teams should evaluate whether they can suppress the health care system (facilities) from the care team drop-down list in the new message flow (and also disallow replies during this time frame on existing message threads that would otherwise be routed to any of these care teams underneath that facility). 

### Competing alert logic 
SHOULD BE ADDRESSED AT TOOL TEAM LEVEL:

Maintenance window alerts related to this effort could compete with other alerts in the user experience, and edge-case scenarios should be mapped out and planned so that the rendering logic is clear and repeatable for all tools. 


# <a name="designs">Alert designs</a>
In progress - will update later.

# <a name="plan">Implementation plan</a>

**Alert template**
* Appointments 
  * T-60 / show warning alert
  * T-30 / switch to showing error alert
  * T+7 / pull down error alert for these users; tool team will need to put up alert that explains to users “your clinic names may look different”
* Medications
  * T-45 / show warning alert
  * T-30 / switch to showing error alert
  * T+2 / pull down error alert for these users; tool team will need alert that explains to users “you will now see duplicate medications in your list"
* Messages: 
  * T-45 / show warning alert
  * T-30 / switch to showing error alert
  * T+2 / pull down error alert for these users; tool team will need alert that explains to users “your care team names may look different. even though they’ve been updated, you can still find all your old messages and reply to them; you can continue to message all providers"

### Round 1: go-live date April 11, 2026

* **Appointments**
  * Warn users about upcoming maintenance window from 02/10/2026-03/11/2026
  * Active maintenance window from 03/12/2026-04/18/2026
* **Medications**
  * Warn users about upcoming maintenance window from 02/25/2026-03/11/2026
  * Active maintenance window from 03/12/2026-04/13/2026
* **Messages**
  * Warn users about upcoming maintenance window from 02/25/2026-03/11/2026
  * Active maintenance window from 03/12/2026-04/13/2026



Round 2: go-live date June 6, 2026

* **Appointments**
  * Warn users about upcoming maintenance window from 04/07/2026-05/05/2026
  * Active maintenance window from 05/06/2026-06/13/2026
* **Medications**
  * Warn users about upcoming maintenance window from 04/22/2026-05/05/2026
  * Active maintenance window from 05/06/2026-06/08/2026
* **Messages**
  * Warn users about upcoming maintenance window from 04/22/2026-05/05/2026
  * Active maintenance window from 05/06/2026-06/08/2026
 
Round 3: go-live date August 22, 2026
* **Appointments**
  * Warn users about upcoming maintenance window from 06/23/2026-07/21/2026
  * Active maintenance window from 07/22/2026-08/29/2026
* **Medications**
  * Warn users about upcoming maintenance window from 07/08/2026-07/21/2026
  * Active maintenance window from 07/22/2026-08/24/2026
* **Messages**
  * Warn users about upcoming maintenance window from 07/08/2026-07/21/2026
  * Active maintenance window from 07/22/2026-08/24/2026


Round 4: go-live date October 24, 2026
* **Appointments**
  * Warn users about upcoming maintenance window from 08/25/2026-09/23/2026
  * Active maintenance window from 09/24/2026-10/31/2026
* **Medications**
  * Warn users about upcoming maintenance window from 08/25/2026-09/23/2026
  * Active maintenance window from 09/24/2026-10/26/2026
* **Messages**
  * Warn users about upcoming maintenance window from 08/25/2026-09/23/2026
  * Active maintenance window from 09/24/2026-10/26/2026


# <a name="questions">Open questions</a>
1. Can each tool team look at the most common alerts (DD logs) that fire for users in the UI? Would be helpful to get an audit of alerts that could display simultaneously to understand the stacking hierarchy that we need to account for. 
2. Does content within existing alerts in each tool potentially need to be evaluated (or updated?) to acknowledge this effort, or are we good?
3. How can we make this a repeatable pattern that is low lift over time?
  a. While the process is the same, re-using the same alerts is challenging b/c content in the alert body text must be updated to reflect 1.) different date ranges for each round, 2.) different facility names for each round, 3.) different facility_ids that they will render for over time, 4.) potentially different versions on web + VAHB mobile app
