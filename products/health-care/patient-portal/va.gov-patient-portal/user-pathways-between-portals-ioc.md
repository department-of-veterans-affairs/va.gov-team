# Headlines
* **Project name** - User pathways for Cerner IOC
* **Business stakeholder** - OEHRM, VHA, OCC
* **Primary POC** - Lauren Alexanderson
* **Timeline** - March 2020
* **Is request tracked to an event or Congressional deadline?** - Yes
* **Notable updates** 

### Intake Template
**Describe the need** 
VA is migrating its electronic health record system from VistA to Cerner over a 10-year period starting in March 2020 with Mann Grandstaff. In addition, Veterans' patient health records and patient portal tools will also be migrated from the legacy system, MHV, to Cerner's portal, HealtheLife. There is an agreed strategy to make VA.gov be the front door for all Veterans looking to access their health benefits and tools. While there is a future-facing goal of enabling Veterans to take ALL of their health actions on VA.gov without having to go to either portal; however, this will not be possible in 2020 when the first sites go live with Cerner. As such, VA.gov will play a critical role in helping Veterans navigate to the correct portal during the transition. For Veterans who may receive care from multiple VA health systems -- some which have migrated and some which have not -- that way-finding will be especially critical. 
 
Additionally, Cerner's rollout is broken out into capability sets. At Capability Set 1 release (targeted for March 2020 in Mann Grandstaff), a Veteran will not be able to refill or renew a prescription online, will have limitations in being able to schedule appointments online or send secure messages to their providers, will only be able to see legacy PAMPI data, and will not be able to access other legacy records. VA.gov will play a role in providing continuity for Veterans whose VA health system is migrated but cannot refill prescriptions or access health records. Much of this functionality is expected to be restored in November 2020 with the release of Capability Set 2 in Spokane. 

### Actions to Take
1. Complete the SSOe work, so that a Veteran can sign in on VA.gov and be taken to and from My VA Health, MHV, and EBN. (#958 )
2. Create va.gov/sign-in so that we have a URL where we can send users trying to login directly to Cerner from a bookmarked link, etc. (#958 )
3. Update unauthenticated content throughout the health hub to facilitate way-finding / de-specify MHV. (Team VSA Web)
4. Update the alert boxes, so that an authenticated user can see on the health tools pages which portal or portals they need to go to. (DEPO Auth Exp) 
5. Update the va.gov/my-health experience to help Veterans get to MHV, My VA Health, or both, as appropriate. 
6. Ensure contact centers are aware of these pathways and how to help users get where they need to go. 

## Who is the primary user?
- Veterans who receive VA healthcare from VistA and Cerner-powered facilities, specifically: 
1. Veterans whose health data is only in one system: VistA.
2. Veterans whose health data is only in one system: now, Cerner. 
3. Veterans whose health data is split between Cerner and VistA. 
- AND Caregivers of Veterans who receive VA healthcare from VistA and Cerner-powered facilities. 

* **What is the user's goal of the project/page/product?** 
- NOW: As a Veteran, I need help to determine if I should go to My HealtheVet (VistA) or My VA Health (Cerner) to make appointments, send secure messages, view my health data, refill prescriptions, etc. 

* **What is the primary business goal?/How will this help achieve the business goal?** 
VA wants Veterans to be able to access the new patient portal. As VA.gov will be the front door for all benefit actions, users must be able to easily navigate to and from the new portal. 
 
**What will you measure?** - Key Performance Indicators, metrics, data we can use to track goals
- Contact center calls
- 
**How will you know if the page is a success?**
- If a Veteran is able to seamlessly navigate between the three portals during the transition. 

**Resources assigned to this work**
There is an SSOe Team assigned to issue #958. Will need to tap into Team VSA Web and Team VSA Auth for help. 

### Additional factors to consider
These help us evaluate the work and our options.

* **Known** - How confident are we that we understand the shape of the problem? (Rate on a scale of 1-5?)
5
* **Type of involvement** - What are different options for supporting the work?
- SSOe Team facilitates the transitions between VA.gov, MHV, My VA Health 
- Authenticated experience team 
- VSA Web Team 
- Contact Center and Analytics team 

* **Estimated timeline, notable upcoming events**
- March 2020 - IOC Part I, Cape Set 1. 
- November 2020 = IOC Part II, Cape Set 2 

* **Known risks** - What could lead to a negative, undesirable outcome for the project or people impacted? This is from lean product design that helps us identify red flags for further discovery (we don't prioritize low risk; we track risk).
- This is highly dependent on #958 being in place and working. 
- Will need support from other teams that are very busy (auth, VSA web, etc.) to get this in place.  
- We are highly reliant on Cerner timeline (i.e. if IOC 1 is pushed out). 
- There are a lot of helpdesks involved with this; we need to make sure they are all in sync. (@clantosswett ) 

* **How well does this map to our current mission/North Star objectives?** 
Insofar as our vision is to deliver experiences that allow Veterans to maximize self-service, this is well aligned. This is a milepost on the way back to a single source of truth for all applications. 

### Reference links
* link to folder in [projects repo](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/patient-portal) 

* how can folks best discuss or ask about the project? ex: health-care-products (all) or patient-portal (va only); slack Lauren Alexanderson
