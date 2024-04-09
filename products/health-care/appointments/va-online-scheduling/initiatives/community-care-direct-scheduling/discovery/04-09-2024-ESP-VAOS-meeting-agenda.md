# EPS-VAOS (CC Direct Scheduling) Meeting Agenda 04-09-2024

- [High Level Visual Data Flow (Work In Progress)](#high-level-visual-data-flow-work-in-progress)
- [Work In Progress Questions](#work-in-progress-questions)
- </br></br>

## High Level Visual Data Flow (Work In Progress)

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/101129355/2eb49cf2-f962-45b3-b6fc-123740373990" alt="CC direct scheduling high level visual data flow" style="width:990px;"/>

[*Download CC direct scheduling high level visual data flow (PDF)*](https://github.com/department-of-veterans-affairs/va.gov-team/files/14899620/CC.direct.scheduling.high.level.visual.data.flow_2024-04-08_00-45-22.pdf)</br></br>

## Work In Progress Questions

### Authorized Referrals 

- Can VAOS team get a sample set of data from a complex and simple authorized referral (from Michael)?
- Who can the VAOS team get in touch with to start the integration with CCRA to retrieve authorized referral information?
- Does CCRA also have the authorized referral letters that we can access? (Or are those in a a different system?)

### CC Scheduling Access Standards

- Who can the VAOS team get in touch with to understand access standards (e.g., what's in Console Toolbox or other system) for scheduling with a CC provider? For example, calculating drive time. Is there a system in place? Do we need to replicate those rules on our own?
     - What other business rules or restrictions do we need to know about when enabling Veterans to self-schedule with CC providers?

### EPS & WellHive

- Where is VAOS writing the scheduled appointments back to? Into EPS? Or into EPS & WellHive? 
- Does EPS or WellHive need any other information about a booked appointment besides Veteran ID/ICN, CC provider name or NPI, day and time or appointment?
- Does VAOS need to collect and send any other information about the appointment or Veteran to either system? 

### CC Provider Availability Integration   

- Does PPMS have provider availability? If so, VAOS will likely integrate directly with PPMS to search and return CC providers in VAOS since that integration already exists. (Or, is availability in EPS or WellHive? Which is available to access now?) 

### VHA / IVC Requirements

- Does the CC self-scheduling flow need to capture the Veterans preferred appointment date before scheduling begins, like VA Direct Scheduling?

## Post meeting notes

### Next steps 

- Michael to provide HSRM user guides and/or other documentation to help VAOS understand what data fields and logic is being used to extract information from authorized referrals. 
- Completed: Rob started conversation with CCRA to better understand Access Standards. However, it sounded like WellHive has already built these same standards into their system for us to pull into VAOS. E.g., Drive time is in WellHive, with and without traffic; using Azure. But, let's have the call regardless.
- Ryan will share WellHive API specs with VAOS after a couple small changes.
- Ryan will work through sandbox and authentication access for VAOS. Understands that VAOS is interested in getting connected right away.
- Open item: Calling the API has costs associated with it. For the pilot, the API calls will be relatively low. However, noting that Ryan and Rick are having discussions between VA and WellHive contract details and costs. Shouldn't be a roadblock as of now. 

### General functionality notes

- Avoid searching the entire provider database, for example, in order to limit API calls and associated costs.
- The number of time slots and days out won't impact the costs at all, or costs greatly.
- Appointment types (e.g., first-time visit, consult, exam, etc.) won't be supported because external EHRs don't have standardization. I.e., VAOs will likely only enable Veterans to find a provider at the speciality level. If an incorrect time slot is booked, then MSAs should receive a notification that the appointment needs to be rescheduled or moved. We need to plan for this change management prior to the pilot and work with MSAs at the pilot sites on this process.
- WellHive is not integrated with CCRA. Assumption is that VAOS will know what calls to make in WellHive via VAOS's "integration" with CCRA.
- In June, WellHive will have an integration with PPMS. I.e., VAOS might consider when to use PPMS vs. WellHive to get list of providers.
- Providers in WellHive include "non digital" providers, e.g., call to schedule an appointment. VAOS will need to make a decision on whether to show "non digital" providers or not to Veterans.
- WellHive will provide a data point if staff booked an appointment vs. a Veteran. VAOS will determine if we use WellHive for this data or not.
  
