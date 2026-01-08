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


# <a name="timelines">Go-live timelines</a>
The 2026 EHR modernization timeline names 4 "rounds" of facility updates, which each includes a cluster of 2-4 VA health care facilities that will migrate from VistA to Oracle Health. These are as follows: 

### Round 1 (Go-live: April 11, 2026)
  
|Facility name | Location | VISN | VHA_ID | 
|-----|-----|-----|----|
|VA Detroit Healthcare System | Detroit, MI | 10 | `VHA_553` |  
|VA Saginaw Healthcare System | Saginaw, MI | 10 | ?? | 
|VA Ann ARbor Healthcare System | Ann Arbor, MI | 10 | `VHA_506` | 
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
| Medical records landing page | va.gov/my-health/medical-records/ | Medical records page(s)?|

### Overlapping go-live timelines 
In many cases this year (and in coming years), alert 1 (warning alert) for an upcoming round of go-live sites will overlap with the timeline for alert 2 (active maintenance window for earlier round of go-live sites). It is possible that many users could facilities in each of these groups and see both alerts. 

In general, alerts should always render in severity order, meaning: alert 2 (warning alert) should display hierarchically _above_ warning alerts for upcoming maintenance windows at other facilities. 

### Competing alert logic 
Maintenance window alerts related to this effort could compete with other alerts in the user experience, and edge-case scenarios should be mapped out and planned so that the rendering logic is clear and repeatable for all tools. 


# <a name="designs">Alert designs</a>


# <a name="plan">Implementation plan</a>


# <a name="questions">Open questions</a>
1. What is the inventory of alerts that could display in the user experience on each tool's landing page?
2. Which of those are error, warning, or informational alerts?
3. Does content within existing alerts in each tool potentially need to be evaluated (or updated?) to acknowledge this effort, or are we good?
4. How can we make this a repeatable pattern that is low lift over time?
  a. While the process is the same, re-using the same alerts is challenging b/c content in the alert body text must be updated to reflect 1.) different date ranges for each round, 2.) different facility names for each round, 3.) different facility_ids that they will render for over time, 4.) potentially different versions on web + VAHB mobile app  
