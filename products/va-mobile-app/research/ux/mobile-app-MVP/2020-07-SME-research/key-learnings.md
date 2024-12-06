# Key Learnings from SME conversations

Spring-Summer 2020

## Claims & Appeals
- Claim Status Tool calls Caseflow API which gives status of what’s in Caseflow. 
- VBMS and Caseflow are separate systems, Caseflow cannot take digital files, only mail.
- Appeals are much more complicated than claims but Veterans see them as related. We should include both in our app. We want to replicate the VA.gov experience where claims and appeals are combined together.
- VSOs and Veterans transferring POA to them are common. Once power of attorney (POA) has been given over to a VSO by a Veteran, the VSO can upload additional evidence but the Veteran still can too. So an evidence upload feature would be useful.
- Claims are a very complex process. People feel they are out of the loop -- “I think more than anything, people feel they are out of the loop.” -- the more feeling of having access to relevant data, control over that process and insight into where things stand and confidence that they will find out when something changes. 
- Veterans recognize something is needed and being able to fix it themselves is a big positive. It can speed up the process; it can take something like a month from submission to a claim getting into VBMS. Anything that can be done to expedite the process is welcome.
- There are 3 types of appeals: 
  - Supplemental Review
  - Higher Level Review (HLR)
  - Decision Review Request (Board Appeal, there are 3 types of board appeals)


## Direct Deposit
- People want to know when they can expect to get the monetary benefit from a claim, not just when it was approved. Our MVP app should consider including direct deposit as a feature, both allowing Veterans to set up direct deposit, edit it, and get communication from VA about the status of a payment.
- There may be an opportunity to send a push notification about a direct deposit that's soon to come. We should connect with the Notifications team on this.

### Next Steps
- **Set up conversation with team working on direct deposit notifications; determine if we can include in MVP app.**


## Appointments
#### Appointment Types & Scheduling
- C+P and benefits appointments are not in VAOS today, but they may be added in the future.
- Confirmed appointments is probably a good place to start because it is the most centralized type of appointment (rather than VA or Community Care requests).
- Self-schedule is turned off as of now because of COVID. Schedulers need to manually accept a Veteran's appointment request.
- There is a desired state for self-scheduling to be more used, but it's configured by the VAMC so it's based on VAMC staff and care types they offer. 
- There is a new feature "Express Care" - same day telehealth care - that VAOS is offering. But there are trust issues with Vets believing that's  feasible.
- Veterans generally prefer to schedule fairly far in advance. 


#### Technology
- Appointment data is scattered across 3 services and 3 different data sources (that aren’t 1 to 1). 
- Confirmed VA appointments are stored in a VAMC's VISTA instance. Before it gets put into VISTA, requests are stored in a seperate database/web app. Confirmed Community Care appointments are stored outside of VISTA, in the same place as requests. Data is pulled through vets-api -- there are 2 endpoints, one for requests and one for confirmed appointments. Sometimes appointment information is pulled from a Facilites API.
  - Confirmed appointments in distributed databases could be a blocker to getting notifications working.

#### Notifications
- Potential blocker for notifications: For VA scheduled appointments, each VAMC has their own VISTA instance (there is a multi-year effort underway to standardize this). It's called Enterprise Service System and will consolidate everything into one endpoint, including pulling in information from Cerner.
- Emails are sent to Veteran when an appointment is scheduled.
- VAOS is planning heavy appointment notificaton research. They have gotten feedback that notifications are not informational enough, triggered at weird times, etc.


#### General 
- 1/3 of VAOS users on VA.gov today are using a mobile device.
- In-app analytics for new VAOS are accessible.
- As VAMCs begin to convert to CERNER, the APIs VAOS currently integrates with won’t have CERNER data. VAOS will start to run into scenarios where it's not showing all of a Vet's appointments because some are just in CERNER.


## Facility Locator
**Use Cases**
- A big use case for Veterans using Facility Locator is to find facilities in a new place that they may be going to for the first time. 
    - According to March 2020 research, people are more likely to utilize the Facility Locator to research locations. Participants want to use the tool to scope out the offerings in an unfamiliar area. 
- In recent Mobile Month research on the VSA team, when prompted to get a COVID test, Vets did not turn to Facility Locator first to do this, instead they looked in health care. There's a disconnect between seeking care and turning to Facility Locator to find a place to do that.
- The FL team may be adding pharmacies soon for flu shots. 

**Filtering**
- Today, users have to select a faility type and service type. Often Vets don't know what some of the facility types mean.
- The Facility Locator used to default to VA Health Care as a Facility Type, but recently switched to having no default value to help aid in the discoverability of Urgent Care facilities.
- Distance is the #1 for a lot of Vets when searching for a facility.
- According to March 2020 reseach, urban residents were more likely to scroll through results as they received more listings. Rural residents interacted with the top few listings shown and expected that other listings would be too far away. 


**General**
- Although Facility Locator ranks highly in VA.gov stats, it's generally not well known in research sessions.
- Community Care is in Facility Locator, and Urgent Care facilities are part of Community Care. We should investigate if Urgent and CC facilities are in the Facilities API. 
- We should investigate stats about Facility Locator to determine if there's a single use case we can feature for the MVP (e.g. finding a urgent care facility, finding a pharmacy for a flu shot). 
- The FL team has gotten feedback that the map is not as useful on mobile as desktop, it's something we can maybe consider removing, especially since we are offering a CTA to the user's default maps app.
- From user research, we know that a facility's phone numbers and directions are two hugely valuable items.

#### Next Steps
- Determine all the APIs Facility Locator uses today to surface facilities, including Community Care and Urgent Care
- Talk to Michelle about stats / review stats on how people use Facility Locator 
- Investigate if there is 1 use case we can lean into for the MVP 



## Profile / General / Logged In Homepage
1. Direct deposit is a highly searched feature on VA.gov and something Veterans see as fitting into Profile.
2. 2.5 million Veterans have dependents.

### Next Steps
- **Find out what API dependents information is in, and what the process of adding, editing, and removing dependents looks like.**
