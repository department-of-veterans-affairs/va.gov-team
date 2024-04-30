# Appointments Tool on VA.gov - Scheduling Improvements

## Objective
The Appointments team is looking for ways to improve the tool to help the Veteran navigate the tool easily. The user should have a positive experience when they are scheduling, requesting and managing their appointments online. 



## Feature Initiatives 

| Priority | ZenHub #  | Status | 
| ------- | ---------- | ----- | 
| Oracle Health  | [#75263](https://app.zenhub.com/workspaces/appointments-product-management-63d2b0c51ad23091ff211acb/issues/gh/department-of-veterans-affairs/va.gov-team/75263) | In progress | 
|Irrelevant locations | [#53329](https://app.zenhub.com/workspaces/appointments-product-management-63d2b0c51ad23091ff211acb/issues/gh/department-of-veterans-affairs/va.gov-team/53329) | Not started | 
| Commnunity care direct scheduling | [#62496](https://app.zenhub.com/workspaces/appointments-product-management-63d2b0c51ad23091ff211acb/issues/gh/department-of-veterans-affairs/va.gov-team/62496) | Not started |
| Surfacing appointment availability | Epic/Feature # | Not started | 

## Key Decisions

Reference epic/feature above for key decisions


## Questions

1. (For Apothesource) What data is returned for the time slot availability? Knowing this will help us to understand if a filter or sorting option would be helpful and what we might be able to sort and filter by. 
> **Brad C 4/30:** Right now VPG (and vaos-service) only return the slot ID, start time, and end time. We could also return the VHA facility ID of the slot location (e.g., 442GB) as well the provider name if the slot schedule has an assigned provider.
2. (For Apothesource) We would like to display a list of resoureces/providers the Veteran previously scheduled using their past appointment data so that they can schedule with that provider again and go straigt to selecting a time versus having to select appointment type, and location. Can we display resources/ providers that were previously booked? 
3. (For Apothesource) Is there data that shows if a resource is part of the patient's PACT team?
> **Brad C 4/30:** Looking forward to the future provider based scheduling use cases, we are planning to also provide an endpoint to return the patient's provider relationships as well (each relationship will have a designated facility and type of care). That would give you some options:
query the API for open "type of care" slots at "location ID", and then optionally sort/filter by provider in the UI
query the API for open "type of care" slots at "location ID" for "provider ID"
4. (For the business/ Kay) Is PID required?
5. (For Kristin) 1. Do we know how OH handles appointment notifications? 2. OH offers an option to get an e-mail of your appointent confirmation, while this is something that VAOS does not support, if the option to opting into e-mail confirmations is something that brings value to the Veteran, should we consider adding this to both flows?



        
### Feasibility meeting notes  
[Agenda: Scheduling Feasibility](https://docs.google.com/document/d/1i2dFmGFazNDUBeynta1IvIBbYSAjscYUNfVTvH-tcXg/edit?usp=sharing) 
<details>
<summary>February 15, 2024</summary>

- **Irrelevant locations**: Kay asked, will the list of relevant locations include CC? Yes, if they are eligible. List can be based on drive time to nearest VA from address on file. We should explore what personalization might look like 
- **Surfacing Availability:** We might be able to see more available options in the future such as phone or video appointments. - Oracle Health Scheduling: Non-negotiable: PID. Kay asked how can we get more care types added and then when they are added how do we handle the Veteran navigating a really long list of care types? We should explore chat options for scheduling
- **Direct scheduling for Community Care:** How can we make referrals part of the scheduling process. We will need to work with IVC to understand what is already being done for CC scheduling.
- **Prioritization:** #1 OH #2 Irrelevant locations and or CC. #3 Availability 

</details>

### CES Metting notes


<details>
<summary>February 22, 2024</summary>


In regards to our CES call today about Community Care appointments in Oracle Health, per Anthony Pilozzi, they are sending appointments recorded ini HSRM back to Cerner (aka Oracle Health). If we can distinguish Community Care appointments from VA appointments in Oracle Health we could just filter out those appointments so they aren't displayed to the Veteran.bility 

</details>

### Oracle Health Integration in Appointments on va.gov transactional features

<details>
<summary>February 26, 2024</summary>

I. **Cancelation Reason**
   - VHA has paired down the cancelation reasons down, so now it is only 5 or so. It is restricted in revenue cycle. 
   - Tia A will share list. 
   - Do we need any logic around what is cancellable? Match VAOS today or just the Mental Health flag? Brad C
   - What is the meaning of cancelation data? For staff? For veterans? (Brad C)
   - We want to prevent veterans from canceling in certain situations for example mental health.
   - We want to be consistent and standard across facilities (Tia)
   - Cerner publishes these rules in their FHIR documentation. 
   - In OH, multiple resources are tied to one appointment. For example for surgery, imaging machines etc. You may have to cancel each resource (Tia)
   - Is there an exclusion list for cancelable appointments?
   - There is not a list of the non-cancelable but there is a list of types that have to offer direct schedule. (Tia)
   - Anything that is not listed in the TOC list, those are VAOS required. 
   - (Anything that is list is also cancelable) (Tia)
   - We can put together an exclusion list of appointments we do not want the Veterans can cancel. 

II. **VAOS Configuration**
   - The facility has the ability to disable direct scheduling etc. Do you see it being possible to come up with a policy on a high level to implement on the VistA side? (Brad C)
   - Yes- that would be the idea. It would require us to force the hand of the facilities. Limit what facilities can enable/ disable. (Tia)
   - Anyone with the supervisor key at a facility can change the configuration in VATS. I think it should be IVC’s direction to say who is allowed to do this and what the policy should be. (Brad C)
   - Sites were concerned about their inability to manage patients who already have appointments, ensuring that patients are not inadvertently requesting additional appointments for the same issue they are already scheduled for. (Tia)
   - Want to be able to open up access to patients to direct schedule but then they can schedule with anyone maybe even someone on the other side of the country. 
   - Not going to have requests with OH because they might be able to request a time at 4:30 when it is 4:26 and the staff will miss that. 
   - We would like to start creating a list of policies and checks. (Brad C )

III. **Current Scheduling Capabilities**
   - What can they schedule today? (Jeff)
   - For Self scheduling: Face to face and telephone (Tia)

IV. **Baseline Requirements and Ideal SOP**
   - What are the baseline requirements and the nice to have? (Brad C)
   - If we could follow the VAOS SOP that would be ideal. 

V. **Message Center and Location Selection**
   - It is not ideal for patients to request appointments in message center in OH (Tia) 
   - There are advantages to picking location first and is something we are looking into on the VAOS side. (Jeff)

VI. **Patient Appointment Restrictions**
   - We want to restrict patients from being able to schedule an appointment with someone they have never been seen before. We do not want them to be able to see options that they should not been seen at like across the country on OH
</details>

<details>
         
<summary>March 4, 2024</summary>
Scheduling Configuration:
- Each facility has its own configuration for scheduling policies for various types of care.
- Supervisors at facilities can make changes to scheduling options.
- Policies can be set regarding the number of open appointment requests a veteran can have at a given time.
- Direct booking and appointment requests can be enabled or disabled based on criteria like “encounter” time frame.
 
Cancellations:
- Tia is going to chat with program offices to determine the national standard for cancellations.
- The current system allows for cancellations, but there's a need to consider which types of appointments should be cancellable.
- The policy around cancellations needs to be looked at.
- Brad- selectively adding overrides and changing policies for appointments outside standard care types.
- We need to look into how to manage cancellations based on medical service or appointment type in Oracle Health. 

Patient status:
- Brad- there are implications determining patient status (new or established) for specific services like amputation.
- TIA - patient status shouldn't restrict scheduling for certain services.

Appointment Display in Portal:
- Melissa- the display of appointment details in the portal, specifically regarding provider names or the “with” category might be confusing.  
- Brad - need to ensure accurate and user-friendly display of appointment details even if it is based on resources, including providers, rooms, or equipment.

Patient friendly names:
- Tia- we need to standardize patient facing naming conventions. 

</details>

### Resources
<details>
         
<summary>User Stories</summary>

### User Stories
- **Multi-modality functionality:** As a veteran scheduling online using the Appointments tool on va.gov, I want the option to choose between scheduling in-person, telehealth, or phone doctor appointments, so that I can access healthcare services in a manner that best suits my needs and preferences.
- **Progress indicator:** As a veteran scheduling online using the Appointments tool on va.gov, I want a clickable progress indicator that allows me to navigate back to previous steps in the scheduling process, so that I can review and edit my information if needed. Additionally, I want the progress indicator to visually represent where I am in the scheduling process, providing clear guidance on the steps remaining to complete scheduling my appointment.
- **Create a path to register:** As a veteran sorting appointments by location, I want to see all nearby facilities displayed, regardless of whether I am currently registered there. If I am not registered at a nearby facility, I need clear information on how to register. This change will better meet my needs as a user, as I am likely not established at nearby facilities and need to easily identify available options for healthcare services.
- **Scheduling context up front:** As a Veteran scheduling an appointment, I want to see available options in the facility list and see why a I might not be able to schedule at a facility.
- **Appointment requests:** As a Veteran unable to directly schedule an appointment at an OH facility, I want a clear path to request an appointment, ensuring I can still access healthcare services even if direct scheduling is unavailable.
- **Surface availability:** As a Veteran searching for appointment availability, I want a streamlined process to compare appointment times across multiple clinics, eliminating the need to navigate back and forth between options.

</details>

<details>
         
<summary>Planning</summary>

[UX Plan: Scheduling improvements](https://docs.google.com/document/d/1dliQbhR3IiJqp0qLf43LBjyJKh1Fyq2Ndn0WT71gphU/edit?usp=sharing)

</details>

<details>
         
<summary>Doumentation</summary>

- [Scheduling problem statements](https://docs.google.com/presentation/d/1YtBj0Vs2ne3eH-nz9wRyfEZ0tQ1ns99j3cQSn4xl8Ss/edit?usp=sharing)
- [20240304 VAOS OH Policy Discussion.pdf](https://github.com/department-of-veterans-affairs/va.gov-team/files/14670407/20240304.VAOS.OH.Policy.Discussion.pdf)
- [Cerner Millennium Patient Self-Referral Direct Scheduling SOP - update_05302023- Signed.pdf](https://github.com/department-of-veterans-affairs/va.gov-team/files/14843268/Cerner.Millennium.Patient.Self-Referral.Direct.Scheduling.SOP.-.update_05302023-.Signed.pdf)
- [FE logic for Choose a location page](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/initiatives/scheduling-improvements/FE-logic-find-a-location-page.md)
- [OH Cancelation rules](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/appointments-oracle-health-integration/engineering/cancellation-rules.md)
  


</details>

<details>
         
<summary>Figma/ mural</summary>

- [Comparative Analysis Screenshots - Scheduling](https://app.mural.co/t/adhoccorporateworkspace2583/m/adhoccorporateworkspace2583/1637784544680/e384b1769cc9a12660f87ba02c5930545314d7cd?sender=uff1791dd79ec763420518644)
- [Figjam OH user flow](https://www.figma.com/file/iZCDnZmB5pSeFbEwZmIL3x/OH-User-flow?type=whiteboard&node-id=0%3A1&t=sZQaB1MOzWAa62MP-1)
- [Figjam for feasibility questions](https://www.figma.com/file/yPkd63oshqKiVEqYOpsICr/Feasibility-exploration?type=whiteboard&node-id=0%3A1&t=u6KP3BOCT6gGmqL0-1)
- [2019 CC flow](https://www.figma.com/file/Ti2icsdnrw2ogJGfXsqcYP/Archived---2019-Community-Care-Flow-%7C-Appointments-FE?type=design&node-id=102%3A6926&mode=design&t=xmiYSM9EJz7j3tq8-1)
- [2020 Update prototype](https://www.figma.com/file/eoMzjKgMOFuLosP3xBaD77/Archived---Select-community-care-provider-prototype-%7C-Appointments-FE?type=design&node-id=0-310&mode=design&t=IA4X263BNaKU02xF-4)

</details>

<details>
         
<summary>Related Research</summary>

- [Selecting a facility: question roundup](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/health-care/appointments/research/2022-12-provider-based-multi-modality-scheduling-discovery/discovery-round-1-internal.md)

- [CC flow usability test](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/research/2020-10-cc-provider-selection-usability/research-findings.md#findings-and-recommendations) < First finding is a must-read
  
- [Interviews with CC scheduling Managers](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/initiatives/2020-community-care/research-findings.md)
- [In person staff facing research](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/health-care/appointments/research/2023-09-provider-based-scheduling-research/report.md)

- [Veteran Preferred Facilities Research Report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/research/2021-05-facilities-personalization-research/research-findings.md#participant-expectations-and-preferences-when-choosing-care-at-a-va-facility)

</details>

<details>
         
<summary>slack channels and thread</summary>

- [appointments-oracle-health-integration](https://dsva.slack.com/archives/C062LRFAX7S)

</details>

