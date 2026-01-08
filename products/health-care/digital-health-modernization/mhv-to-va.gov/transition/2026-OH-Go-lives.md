# 2026 Oracle Health Go-Live Sites 
* MHVFE Horizon Team / January 2026
* Front-end alert + maintenance window planning

## On this page
* [Background](#background)
* [Go-live timelines](#timelines)
* [Complexity](#complexity)
* [Alert designs](#designs)
* [Implementation plan](#plan)
* [Other](#other)

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
Each go-live round will need to display 2 alerts per health tool landing page in the front-end user experience. These alerts will warn users about a loss of functionality across multiple health tools while their facilities are transitioning their EHR system. At some stages, a passive "moment in time" data capture will be visible to users, but tasks and actions will be suspended until **7 days after** the site go-live date.
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

# <a name="designs">Alert designs</a>


# <a name="plan">Implementation plan</a>


# <a name="other">Other</a>
