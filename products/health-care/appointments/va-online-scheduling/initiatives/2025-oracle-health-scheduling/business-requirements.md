# MHV on VA.gov Appointments: Oracle Health Requirements

## General Requirements/Assumptions

- **Assumption:** Once things are built, all OH sites will offer the same appointment and scheduling capabilities in the MHV on VA.gov portal, and the tool will function the same for all OH sites.
  - There will **not** be a way for sites to individually enable/disable self-scheduling and requesting functionality by care type.
  - The appointments tool capabilities will align with IVC business policy at all sites using Oracle Health, and when possible, all sites on VistA will align with IVC policy and not be customizable either.
- **Assumption:** There may be a pilot period with one site using OH to do some production validation and UAT.

## Facility Configuration

### Background:
When self-scheduling, patients must have seen that provider within a certain amount of time for that provider to display as an option. Currently, each facility can determine that amount of time.

### Issues this causes:
1. Lack of consistency across facilities
2. Unnecessary endpoint checks in VPG, causing a longer load time for the Veteran

### Proposal:
For the VPG endpoint check, `relationshipAge`, we are proposing standardizing the number of months and removing the ability for individual facilities to enter a timeframe. Standardizing the amount of time permitted since the patient has last seen the provider will decrease the loading time by removing the facility configuration check.


| Care Type | relationshipAge |
|-----------|-----------------------------|
| **Primary Care (Primary Care Medicine, Women’s Health, and GeriPACT)** |  |
| **Outpatient Mental Health** |  |
| **Amputation Services** |  |
| **Audiology** |  |
| **CPAP Clinic** |  |
| **Food and Nutrition** | 36 months |
| **MOVE! Program** |  |
| **Ophthalmology** |  |
| **Optometry** |  |
| **Sleep Medicine - Home Sleep Testing** |  |
| **Social Work** |  |  



## Self-Scheduling Requirements

1. As a Veteran, I need to be able to digitally self-schedule an in-person, video, and/or telephone appointment with an established provider no earlier than **3 days** and up to **390 days** into the future in the following care types:

| Care Type | Self-Scheduling Requirement |
|-----------|-----------------------------|
| **Primary Care (Primary Care Medicine, Women’s Health, and GeriPACT)** | All Providers (PCP and CPP) must allow online scheduling |
| **Outpatient Mental Health** | At least 1 individual at the medical center (psychiatrist, clinical pharmacist practitioner, psychologist, etc.) |
| **Amputation Services** | All providers must allow online scheduling |
| **Audiology** | All providers must allow online scheduling |
| **CPAP Clinic** | All providers must allow online scheduling |
| **Food and Nutrition** | All providers must allow online scheduling |
| **MOVE! Program** | All providers must allow online scheduling |
| **Ophthalmology** | All providers must allow online scheduling |
| **Optometry** | All providers must allow online scheduling |
| **Sleep Medicine - Home Sleep Testing** | All providers must allow online scheduling |
| **Social Work** | All providers must allow online scheduling |



- **Priority for initial release** is the ability to self-schedule in-person appointments.
- To make this function work, developers in the Office of the CTO Appointments team need access to the following data:
  - **Provider relationships to patient** (Have this)
    - Patients' primary care provider
  - **Provider schedules** (Have this)
  - **Provider location(s)** (Partially have this)
    - Veteran can self-schedule at any facility within the same medical center grouping (e.g., 565, 565AB, etc.)
    - **ASK:** Can the CareTeam resource be updated to include the care team institution(s) from PCMM (VHA facility ID at both the 3 and 5-digit stations)?
- Appointments direct scheduled through MHV on VA.gov will show in the Oracle Health Staff applications as being scheduled by the patient, and the patient’s name will be displayed.
- Facilities with providers a user has a relationship with will only be displayed if the user has had a past appointment with that provider at that specific facility. This prevents users from accidentally scheduling appointments at distant locations if a provider has moved to a different facility.

### Ideal Outcome:
Veterans can digitally schedule an appointment with providers with whom they have an established relationship (Veteran had an appointment within the last **36 months** with that provider at that facility or another facility within the same healthcare system). If they do not have an established relationship in the selected care type, they will be sent to submit an **Appointment Request**.

**VA Appointment Requests**

### 1. Veteran Appointment Requests
As a Veteran, if I don’t have an established relationship in a care type that I need (limited to the care types listed above), I need to be able to digitally request an appointment from 3 days up to 390 days in advance with the VA in that care type.

#### a. Veteran Selections in an Appointment Request:
   1. Type of care that a Veteran needs
   2. Preferred Facility Information:
      - Facility name, address, and phone number
   3. Up to three preferred dates and timeframes (AM/PM) for an appointment (Veterans must select at least one)
   4. Preferred Modality (in-person, phone, video)
   5. Veteran contact information (how to contact - phone/email - and preferred contact information)
   6. Reason for appointment

### 2. Viewing Appointment Requests
As a Veteran, I need the ability to view submitted appointment requests, including all the information I selected in the above fields.

### 3. Cancelling Pending Appointment Requests
As a Veteran, I need the ability to cancel pending appointment requests.

### 4. VA Staff Access to Appointment Requests
As a VA staff member, I need the ability to see all Veteran-entered appointment requests and the data provided in the request in Revenue Cycle within a known Future Request Queue.

#### a. Future Request Queues:
   - Each color PACT team already has a future request queue
   - Each specialty has a future request queue
     1. **Ideal Scenario:** Veteran appointment requests go into already available queues (limitations may apply based on VA.gov team access)
     2. **Alternative Option:** A generic Future Veteran Appointment Request queue (e.g., 668 Future Veteran Submitted Appointment Request)

### Notes
- The initial implementation will NOT include the ability to request Community Care Appointments. This is an IVC decision. If this decision changes, Community Care request eligibility and capability should function the same as for VistA sites.
- Future enhancements could include:
  - As a Veteran, I need to know that the VA has tried to contact me about this appointment request so I can take action if further information is needed.

---

## **Appointment Cancellation**
### 1. Veteran Appointment Cancellation
As a Veteran, I need to cancel appointments that I have at the VA.

#### a. Digital Cancellation Policy:
   - Veterans can cancel appointments digitally up until the day before the appointment date.
   - **Initial Launch:** Veterans will only be able to cancel in-person and phone appointments.
   - **Video Appointments:** The link must be canceled along with the appointment; additional technical work is required to cancel all components.
   - **CVT Appointments:** Need to cancel all resources; may be postponed until post-launch.
   - **Pending IVC Decision:** Define business policies regarding any limitations on Veteran self-canceling.

### 2. Non-Cancellable Appointments
As a Veteran, I need to know if I can’t digitally cancel an appointment and what action I should take to cancel.

#### a. Non-Cancellable Appointments:
   1. Community Care appointments
   2. COVID appointments
   3. Compensation and Pension exam appointments
   4. Telehealth (VA Video Care) appointments
   - For these types, the user must contact the facility directly to cancel.

### 3. High-Risk Veteran Cancellations
As a VA Staff member, I need a new request opened if a Veteran with a high-risk flag cancels an appointment so I can attempt to reschedule it. This requirement should align with Patient Self-Referral and Direct Schedule policies.
   - Verify if this logic is already in place for OH staff-facing products; enhancements may be needed.

---

## **Appointment Rescheduling**
### 1. Veteran Appointment Rescheduling
As a Veteran, I need the ability to reschedule my VA appointments.

#### a. Rescheduling Functionality:
   - Veterans can reschedule an appointment while maintaining certain attributes (location, type of care, provider, etc.) but changing others (time, date, modality, etc.).
   - If rescheduling involves canceling and creating a new appointment, it should be seamless for the user.
   - Veterans should be able to cancel the process and keep their current appointment if no better times are available.
   - Business policies need to be aligned with IVC.
   - OH support is required for API connections and data access.
   - OH support is needed for testing and staging data in B1930.

---

## **Oracle Health Testing and Connection Support**
We anticipate needing support in testing all scenarios listed above (and possible additional ones). Testing support includes but is not limited to:

- Staging appointment test data for at least two test users in B1930
- Scheduling appointments in various care types and modalities
- Confirming that self-scheduled and self-canceled appointments appear correctly in Oracle Health staff applications (Revenue Cycle and Power Chart, if applicable)
- Ensuring staff actions required due to Veteran transactions occur appropriately:
  - Appointment requests route to the correct queues for processing.
  - Certain Veteran-canceled appointments generate a new request for VA staff follow-up.
  - Staff can easily view Veteran self-scheduled appointments to check if other appointments (e.g., labs, imaging) are needed.
- Troubleshooting issues in B1930, with APIs, or with OH staff products in test and production environments.
- Supporting any production site testing of the above scenarios.


