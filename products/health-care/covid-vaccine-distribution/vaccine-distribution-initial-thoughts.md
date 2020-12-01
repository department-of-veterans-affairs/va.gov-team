_draft, predecisional, for official use only_

---

# CTO & COVID-19 vaccination distribution

## Background

- There is going to be a COVID-19 vaccine (yay!)
- VHA plans to distribute that vaccine to enrolled Veterans
- Distribution will follow a national risk stratification, roughly:
	- Front line employees first
	- Patients 85+, Veterans in congregant settings, etc... next
	- Larger pools (e.g. 65+, 50+, <50) come later
	- Can we run a CDW query to get a sense of the size of each cohort?
- Five pilot sites as of today: New Orleans, Minneapolis, Orlando, Albuquerque, and Bedford
- Batches of 1000 doses initially
- Initial vaccine will require two doses, 3 - 4 weeks apart
- Cold chain / storage logistics an issue
- Vaccine needs a prescribing clinician and to be issued by pharmacy
- VHA systems/VAMCs unclear on how much demand there will be
- Content resources planned for VA.gov Coronavirus FAQ, possibly facility pages

## Approach
- Channel interest / demand to a VA.gov product and then out to systems/VAMCs
- Focus on creating a "Greatest Hits" album, not recording new tracks. For instance, likely could leverage some / all of the following:
	- VA.gov coronavirus assets: FAQ, chatbot, screener, home page banner/sticky banner
	- VA Online Scheduling
	- VEText
		- mass texts
		- appointment reminders
		- I Am Here
		- "Last Minute Vaccine Availability" notifications
	- VA Notify (for multi-channel notifications inclusive of VEText)
	- VA.gov 10-10EZ (for enrolling Veterans who have not previously enrolled)
		- 	What else needs to happen to go from an "unknown" Veteran to one who is ready to schedule a vaccine appointment?
	- VA.gov Facility Locator / facilities pages
	- VistA / CDW (for storing pre-registration information)
	- VA.gov login / IAM / SSOe / MPI for identity verification
		- Consider dual authenticated / unauthenticated experience by leveraging VA Forms System ability to start a form in an unauth'd state and then log in if desired
	- Rockies (for analyzing vaccination progress or other useful big data questions)
	- MHV and VetResources newsletters (for getting info out)
	- Lighthouse API gateway (for any kind of technical service/resources we want make available to internal/external callers)
- Approach must be able to evolve, pivot as we learn more and more vaccine becomes available
- Initial goal is to provide Veterans reliable information and provide them with a simple way to take action (e.g. pre-registering or otherwise indicating their interest in receiving a vaccine)
	- Might this information provide the Veteran with some idea of where they fall in the distribution priority? Is there a reliable way of determining this based on information we already know or could easily gather if unauth'd?
- Later goal might be more comprehensive: facilitating vaccine appointment scheduling, follow ups, etc...
- Provide tools that any system/VAMC can use, but do not require
	- Make those tools as modular as possible so a system/VAMC can use one, several, or all depending on their needs
- Could be significant gap in time between launch of the VA.gov product and when a Veteran's local system/VAMC actually has vaccine available _and_ when that Veteran's cohort is ready
- Work primarily at either the VISN or the system/VAMC level
	- How effective might common implementation "patterns" be if we developed them?
- Regular communication (e.g. weekly updates) with system/VAMCs that are using or interested in our products
- Crisp product one-pagers to serve as internal marketing

## Scope
- Focus is on Veteran vaccination; only role in employee vaccination is helping systems/VAMCs share best practices
- Need to decide if we want to also get into the vaccine verification business, e.g. providing Veterans with a digital "passport" that shows they have received all their shots

## Team
- Initially, some part of: Lauren, Martha, Danielle, Kimberly, Marian, Kaeli, Shane, Stephen, Patrick
- Other existing product teams as needed (e.g. VAOS if we want to go the scheduling route)

---
_draft, predecisional, for official use only_
