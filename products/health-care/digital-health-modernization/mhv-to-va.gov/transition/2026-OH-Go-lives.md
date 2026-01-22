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
|VA Saginaw Healthcare System | Saginaw, MI | 10 | `VHA_655` | 
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

At some point in the transition period (active maintenance window), "moment in time" data will be visible to users, but any healthcare touchpoints that happen during hte window will not be reflected in their record until after the maintenance window takes elapses. During the active maintenance window, all user tasks and actions will be suspended until a maximum of **7 days after** the site go-live date.

1. **Warning alert** - upcoming maintenance window (will render for between 45-60 days, depending on the health tool)
2. **Error alert** - active maintenance window (active 30 days prior to go-live date until 7 days after go-live)
3. **Maintenance window alert** - Just-in-case maintenance window; have this ready in case provisioning process doesn't work and no one can do anything. We want to be prepared with a strategy for dealing with that scenario (specifically for SM and Meds)

The My HealtheVet locations where these alerts need to render include: 
|Tool name | Web URL | Mobile app page|  
|----------|---------|----------------|
| Appointments landing page | va.gov/my-health/appointments/ | Appointments page | 
| Medications landing page | va.gov/my-health/medications/ | Prescriptions page | 
| Messages inbox | va.gov/my-health/secure-messages/inbox/ | Messages page | 
| Medical records landing page | va.gov/my-health/medical-records/ | Vaccines, Labs & Tests, Allergies pages | 

### Users with multiple facilities from the same go-live round in their user profile
In most cases, facilities that are being transitioned are from the same US region. It's highly likely that users may have multiple facilities that are being transitioned at the same time in their profile. In order to plan for this and prevent stacking the same exact alert for multiple facilities on landing page, we will string multiple facility names together in the body content if that scenario applies to a given Veteran's profile. 


### Users with facilities from different go-live rounds in their profile
In some cases, alert 1 (warning alert) for an upcoming round of go-live sites will overlap with the timeline for alert 2 (active maintenance window for earlier round of go-live sites). It is possible that  users could have facilities in their profile from each of these groups and see both alerts. Allowing for an alert from more than one round of transitions has been configured in the shared component logic.

The transition alerts will render in severity order, meaning: an error alert (active maintenance window) will display hierarchically above a warning alert (notification of upcoming downtime) if both apply to a given user.

### Data suppression during active downtime windows
Because users could have multiple facilities in their profile (some of which are transitioning EHRs in an active migration round, but potentially some that are not being affected), it could be considered a patient safety risk to suppress all task functionality across tools. It will be complex to first read if they have other facilities that are not actively being migrated before determining whether to show this functionality - and may not be worth the lift to build this out for a temporary 32-37 day window. 

Instead, in-product tactics within the tools themselves will be more advantageous from a user-experience perspective. For example, within the appointments flow, direct-schedule appointment types could suppress _specific facility names_ within the flow, or even allow them but lead the user to a page that requires a phone-call to complete scheduling instead of allowing direct online scheduling. For Secure messaging, teams should evaluate whether they can suppress the health care system (facilities) from the care team drop-down list in the new message flow (and also disallow replies during this time frame on existing message threads that would otherwise be routed to any of these care teams underneath that facility). 

### Competing alert logic 
Maintenance window alerts related to this effort could compete with other alerts in the user experience. Horizon team IA lead met with a small team of engineers and determined that the benefits of a shared pattern for all teams outweighs the possibility of inconsistent alert hierarchy during the transition window. We will not worry about competing alert hierarchy at a portal-wide standardization level. 


# <a name="decisions">Design decisions</a>

**January 15, 2026** - OH cutover information will be presented to users at the tool-level ONLY
  * We will not put alerts on the My healtheVet landing page (Web) or Health menu (VAHB) related to the OH cutover work - we would have to default to the longest-running alert timeframes (appointments) which is a really long time to show users alerts on this page that is the gateway to the entire health portal.
  * Many users can have "hybrid" profiles, with facilities in their account that are unaffected by this transition. It's important that they understand they can still do everything as normal for the unaffected facilities.
  * Some health tools included on the landing page are entirely unaffected by the transition, including: travel pay, copays, medical supply re-ordering, updating the 10-10EZR. We don't want to suggest that everything is "down" from this page, when it's not an accurate.

**January 9, 2026** - We do not need alerts for travel pay, which will not be affected by the transition.

# <a name="designs">Alert designs</a>
Figma designs for all affected tools, including both web and VAHB mobile app solutions are [here](https://www.figma.com/design/kGTFsKCLZ3P44Ece44iVBN/OH-cutover-alerts?node-id=0-1). 

These designs include patterned "T" dates, that are mathematically calculating the correct calendar dates based on a given "go-live round phase" launch date. When we know the phase, we can pull the launch date and calculate back 60 days, or forward 2 days, for example, based on the pattern. This will allow us to render these alerts programmatically throughout the 4 go-live round phases in 2026 and in future years. 

## Example alert (for appointments): 

<img width="697" height="656" alt="Screenshot 2026-01-21 at 2 39 26 PM" src="https://github.com/user-attachments/assets/71899096-96a5-4776-9398-4442951367b5" />

<img width="531" height="445" alt="Screenshot 2026-01-21 at 2 39 33 PM" src="https://github.com/user-attachments/assets/90f7fb9d-3acb-45fd-b19f-4fe04a5db4e4" />

<img width="598" height="719" alt="Screenshot 2026-01-21 at 2 44 14 PM" src="https://github.com/user-attachments/assets/5f079170-f85a-4545-9fd6-9b56bb5ba857" />

**Alert template**
* Appointments 
  * T-60 / show warning alert
  * T-30 / switch to showing error alert; tool team needs to suppress functionality for affected tasks at these facilities (scheduling or cancelling appointments) 
  * T+7 / pull down error alert for these users; tool team will need to put up alert that explains to users “your clinic names may look different”
* Medications
  * T-45 / show warning alert
  * T-3 / switch to showing error alert; tool team needs to suppress functionality for affected tasks (refill, renewal)
  * T+2 / pull down error alert for these users; tool team will need alert that explains to users “you will now see duplicate medications in your list"
* Messages: 
  * T-45 / show warning alert
  * T-6 / switch to showing error alert; tool team needs to suppress functionality for affected tasks (new messages, replies, drafts) 
  * T+2 / pull down error alert for these users; tool team will need alert that explains to users “your care team names will look different. To message any of your providers at X facility, you'll need to start a new message with their new care team name." 
* Medical records:
  * T-45 / show warning alert
  * T-0 / switch to showing error alert; tool team does not need to suppress functionality, but may need to warn users that records won't show up here for 2 business days during cutover. 
   * T+2 / pull down error alert for these users; tool team may need other explanatory alerts to warn users about duplicate content




