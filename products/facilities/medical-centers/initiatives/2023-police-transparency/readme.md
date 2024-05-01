## Initiative Brief: VA police transparency (WIP)

### Background
- Web presence on VA.gov Departments: [VA police](https://department.va.gov/about/va-police/)
- The VA Police are the armed and uniformed federal law enforcement service of the U.S. Department of Veterans Affairs (VA) who are responsible for the protection of VA Medical Centers (VAMCs) and other health care facilities and support VA’s National Cemetery Administration (NCA) and Veterans Benefits Administration (VBA), including locations in Puerto Rico and the U.S. Virgin Islands.
- VA Police Officers truly understand Veterans because most of them have also served in the military and in combat.
- VA Police have the authority to enforce Federal laws and partner with local law enforcement on crime response.
- The partnership between local and VA law enforcement can include joint training, including active threat drills, crisis intervention training, and disaster response.
- VA Police services include law enforcement, criminal investigations and crime prevention, exterior and interior patrols, physical security and workplace violence prevention.  They may use specialty or service elements, such as K-9, bicycle, and motorcycle patrols.
- In 2020 there were 5,000 VA police officers and 150 VA police chiefs nationwide. In the Greater Los Angeles VA Police Department alone, here are over 88 appointed law enforcement officers with several enforcement teams such as: Vehicle Patrol, Bicycle Patrol, Traffic Enforcement, Criminal Investigations and Narcotics enforcement, Veterans Mental Evaluation Team (VMET), Training and Support Services. There are 140 police departments. 
- By Legislative mandate, all VA police officers will be using body-worn and in-car cameras by the end of 2023. 
- Partnerships known as the Veteran Mental Health Evaluation Team (VMET) are in use at a few locations around the country. VMET is a vetted approach that couples a licensed clinical social worker with VA police officers when responding to calls for service involving a Veteran who is experiencing a mental health crisis or who are at risk. This partnership is expected to not only reduce use of force incidents and Veterans placed under arrest, but also reduce the number of Veteran suicides by increasing participation in mental health treatment.
- A similar approach, a Veteran Response Team (VRT), is used at four VA sites in the country. These teams direct Veterans into the clinical setting to address root causes, rather than into the justice system and have been shown to increase health care utilization following Veteran-police interactions. Data comparing health care utilization six months before and six months after police involvement showed a greater than 40% increase in outpatient mental health services and a 59% increase in outpatient substance abuse services. [Press release from March 2023](https://www.va.gov/wilmington-health-care/news-releases/va-and-law-enforcement-collaboration-leads-to-increase-in-health-care-utilization-study-finds/)

## Problem Statement
Legislation passed in 2022 requires VAMC websites to include data about VA police activity.
Deadline: One year after the enactment (December 2022), the Secretary shall report to Congress on the implementation of all provisions of amendments to 38 USC 902, which includes the publishing of arrest and ticketing data.
### Legislative requirements
Cleland Dole Act Sec 405 legislation passed in 2022

> (e) (1) The Secretary shall publish on the internet website of each facility of the Department the following information with respect to the facility:

> (A) Summaries and statistics covering the previous five-year period regarding—

> (i) arrests made by and tickets issued by Department police officers;

> (ii) prosecutions, ticketing, and other actions relating to such arrests;

> (iii) the use of force and weapons discharge by Department police officers; and

> (iv) complaints, investigations, and disciplinary actions regarding Department police officers.

> (B) Contact information for employees of the Department and the public to directly contact the police force of the facility, including for an individual (or the representative, attorney, or authorized agent of the individual) to request information regarding the arrest, ticketing, detainment, use of force, or other police matters pertaining to that individual.

> (2) The Secretary shall ensure that each police force of a facility of the Department is able to provide to an individual who contacts the police force pursuant to paragraph (1)(B) the information described in such paragraph

**How might we** 
- help connect Veterans to VA police when they need help with safety or security matters
- provide access to facility-level police activity data, such as arrests, tickets, use of force, internal investigations, complaints, and disciplinary actions
- make direct contact information for the police force available so that employees and the public can request more information about VA police activity

## Desired User Outcomes
- Veterans and beneficiaries can access and understand data about police activity at their VA facility.
- Veterans and beneficiaries know how to contact the local VA police to get help with safety and security issues or to request more information about interactions with the police. 

## Desired business outcomes
- Compliance with Cleland Dole Act Sec 405 legislation

## Measuring Success
### Key Performance Indicators (KPIs)
_What data (qual or quant) will you look at to understand if your initial set of functionality is meeting your desired user and business outcomes, and not bringing about the undesired outcomes?_
_What are the most important metrics that track with this product/initiative's success?_
- KPI 1: TBD
- KPI 2: TBD

### Objectives and Key results (OKRs)
_What are the measurable targets you're aiming for that delivers value for Veterans?_
- Objective: TBD
- Key result: TBD
- Key result: TBD

## Assumptions
_Include indication of which assumption you think is most risky. Your Solution Approach (next section) should describe how you'll validate that assumption w/your initial set of functionality_

## Solution Approach
### Current behavior
**No VAMC pages include police activity data but some VA police content is already in production.** 
The following systems have VA Police detail pages (all program pages)
- VA Palo Alto health care
- VA Northern California health care (also linked from Sacramento VAMC's Prepare for your visit “Security” accordion)
- VA Greater Los Angeles health care
- VA Oklahoma City health care
- VA Salt Lake City health care

A few others have added info about the VA Police to the Prepare for your visit sections, such as 
- Edith Nourse Rogers Memorial Veterans' Hospital (“Security” accordion)
- Clement J. Zablocki Veterans' Administration Medical Center (“Security” heading within the “Parking” accordion)
- Omaha VA Medical Center (within the “Visitor information” accordion)
- VA Montana Health Care (“Security” accordion)
- VA Cheyenne health care’s Northern Colorado VA Clinic (“Police Services” is literally the only accordion in the Prepare for your visit section)

### Approach
**Information on existing data source (from Jeffrey Steidler, 7/26)**
- The current system is Report Exec, from Omnigo Inc which will be replaced by a newly procured system to be implemented ~October 1, 2023. The new system will have advanced capabilities to track and trend data, with easy data exporting in a Power BI Dashboard format. VA will have the ability to analyze data in a ways we previously could not, including improved demographic data collection, and location mapping. It includes automatic exporting of required data points to the FBI (National Incident Based Reporting) which is legislatively mandated and will allow us to publish data in compliance with the Cleland Dole Act.
- 5 year data request can be fulfilled going forward.
- Phase 1 - Oct 1, 2023 - March 30, 2024 - VA police use new system as reporting tool of record and data from legacy system is scrubbed and migrated
  - Targeting 10/1 to turn on new system as system of record for data going forward
- Phase 2 - begins April 1, 2024
  - Data migration from legacy system to provide historical data (go live and prior)
  - API to be available

## Data
- Deidentified data is filtered by facility (identified by VISN and hierarchy, using station # i.e. 523 = Boston)in RMS dashboard
- there is no public facing dashboard
- Data is hosted within Azure Government cloud and comes into datastore near real-time
- Axon team to provide access
- Facilities team will need to transform it into some we can consume and use
  - Option 1 - Power BI approach
  - Option 2 - Server connection to datastore on [whatever] frequency
 
### Data elements
**Prosecution data**
- Ticketing
  - Traffic and parking tickets
  - Non-traffic (criminal) tickets)
- Arrests

**Professional Standards data**
- Complaints and investigations
- Numbers of sustained allegations
- Numbers of disciplinary actions
  - pending possible further cateogization based on HR input

**Use of force**
- Number of incidents involving the use of force
- Number of incidents involving weapon discharge
- This data is available with two different definitions
  - FBI nationally standardized reporting for all federal agencies
    - we will use this data, reported at a national level and received from the Office of Police services
  - VA reporting standard
 
Data for Prosecution, Professional standards, and Use of Force will come from separate databases but can reflect the same time period. 

**Contact information**
- We expect a POC for each facility
- We will use "Police Service Administration" as title for contact info, rather than named individuals as these personnel can change
- Expect non-emergency 24 hour phone number from csv provided by Office of Police Services
  - can refresh annually
- POST-MVP: Ability for local editor to add physical address and/or one or more phone number (including emergency number which varies locally)

Other content should leverage what is available on Department.VA page 
- Should include "How to obtain a Copy of a VA Police Report" with link to form
- POST-MVP: Ability for local editor to relevant FAQs 

### Solution considerations
- Facility level page
- System level roll-out with facility breakdown
- Top Task pages (Register for Care/Medical Record/ Billing and Insurance) are system level pages that can show roll ups of facility-specific information might be a good pattern to look

## Launch Dates
**Target Launch Date**
- MVP: Data published 12/2023, in compliance with Cleland Dole Act Sec 405 legislation
- Spring 2024: access to data via API

**Actual Launch Date**
TBD

## Links to relevant documentation
[Epic](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/14327)

## Solution Narrative

## Screenshots

## Stakeholders
**Business stakeholders**
- VHA
- VA Police operate separately but alongside the VA Law Enforcement Training Center (VA LETC) under the umbrella of the [Office of Security and Law Enforcement](https://www.osp.va.gov/Security_and_Law_Enforcement.asp).
  - Jose  Gonzalez, Deputy Director, Operations & Administration, 10N (Jose.Gonzalez6@va.gov)
  - Edward Dubois, Investigator (Edward.Dubois2@va.gov)
  - Jeffery Steidler Special Agent, VISN Security Officer, VHA (jeffrey.steidler@va.gov)
 
 **Partners**
  - Axon (Software services vendor)
    - Key POCS:
       - Matthew Burian (mburian@axon.com) - Solution architect
       - Jeff Murdza (jmurdza@axon.com) - Product 
    - Additional team members
       - Jared Harlow (jharlow@axon.com) and Sumegh Sodani(ssodani@axon.com) - Leadership
       - Antony White (awhite@axon.com) - Solution architect
       - Brian Russell (brussell@axon.com) 
  
