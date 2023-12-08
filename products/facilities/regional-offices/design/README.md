# VA Regional Office Facility System Product Design

## MVP

### Summary
Unlike the Vet Centers, Regional Offices have existing websites (e.g. [Baltimore Regional Office](https://www.benefits.va.gov/ROBALTIMORE/)). MVP design should largely follow the VAMC and Vet Center template and design components with minimal deviation. As with other areas of VA.gov, these sites are task-based sites that 1/ empower Veterans to know enough information about a specific location and the services offered there to be able to be prepared to make an appointment and 2/ funnel Veterans into online alternatives should they choose Veteran self-service.

We will also re-use the services pattern established through our work with VHA
- National taxonomy name (Plain language)
- Veteran-friendly, also-known-as names (if different)
- National description of service to ensure consistency
- "Type" of service (unsure if this is necessary)
- Riff on common conditions (unsure if this is necessary)


If we cross-walk the features of the RO websites and the Facility Locator detail pages for all VBA locations, what is the delta?

### Key features

#### What we know already/solid bets:
- Some Top tasks
  - Make an appointment (VERA)
  - Ask VA (AVA) funnel
- Basic location information 
  - Address, link to directions
    - Need to account for room number/floor, as benefits offices are not always whole building
  - Photo of facility
  - Contact info e.g. phone, contact centers (what are the questions Veterans want answered by calling the phone number(s)?)
  - Operating status
  - Prepare for your visit
    - Parking
    - Public transit
    - What to bring (regardless of service)
 - Other Locations (photo, location, hours, contact, services)
 - Services
    - Location of service at that facility
    - Hours of service (if different than facility)
    - Contact info for that service (if different than facility)
    - How a Veteran can make an appointment for that service
    - Is there an online version of the service/tool
    - What to bring (for this service)
 - Events
 - Subscribe to updates
 - Spotlights

 
 #### What we want to learn:
- Top tasks (needs add'l research)
  - What else is available (e.g. Talk to someone online?) and do Veterans want that?
- Basic location information 
  - How important to the Veteran is the relationship of "child" locations to the RO?
  - Do facilities have separate mailing addresses for claims from their physical address for appointments?
    - Example - https://www.benefits.va.gov/whiteriverjunction/ 
  - Do Veterans understand the different types of facilities (or does that matter?)
  - What are the questions Veterans want answered by calling the phone number(s)?
  - Prepare for your visit
    - What to bring (or is this in services? or both?)
      - [DD214](https://www.va.gov/records/get-military-service-records/) has come up in research
    - What else do Veterans need in order to be prepared for a visit (e.g. link to find a form?)
- Services
    - Is the service delivery the same across all locations nationally or locally nuanced?
    - How do we elaborate on the taxonomy structure to better explain the services
    - Is there an online version of this tool?
    - Do we need to provide routes into the benefit hubs and, if so, is that through COPE or links or other?
    - Is there a need to provide performance data on claims (similar to wait times at VAMCs?)
      - Example - https://www.benefits.va.gov/REPORTS/detailed_claims_data.asp 
 - Events 
    - Are these National? Local? Hybrid? And what is the maintenance load?
    - How to account for recurring outreach events which take place at VAMCs / Vet Centers?
      - Example - https://www.benefits.va.gov/ROPHOENIX/index.asp 
    - [Event examples from audit](https://app.mural.co/t/vagov6717/m/vagov6717/1660588245137/17e30f1f578bfeb51b90c051e7f5124e57a835e5?wid=0-1660766378091)
 - Subscribe to updates   
    - Will this use GovDelivery?
 - Spotlights 
    - Are these National? Local? Hybrid? And what is the maintenance load?
 - Veteran Service Organizations (VSOs) located at that facility
    - Is this critical path or fast-follow?
    - Might these be listed as a Service at the facility?
    - Related - https://www.va.gov/disability/get-help-filing-claim/
 - How might we (or do we?) detect and re-use content from co-located VHA facilities to prevent duplication
    - Photos
    - Facility names

VBA MVP Workshop Mural: https://app.mural.co/t/departmentofveteransaffairs9999/m/agilesixapplications0942/1675614510747/a485dae7279407fe366cc1051d53321fcb5625c1?wid=3-1541793000972&sender=u0b235d03cbd64f7f93673243

#### Likely out of MVP Scope
- Leadership profiles
  - Example - https://www.benefits.va.gov/ROANCHORAGE/leadership.asp
- Work status for employees
  - Example - https://www.benefits.va.gov/ROANCHORAGE/work-status.asp 
- Translated version of pages
  - Example - https://benefits.va.gov/sanjuan/es/

**Product sitemap:** 
https://app.moqups.com/Rnc4BDEKrA/view/page/a9e1a59e9
