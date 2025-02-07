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

## VA Appointment Requests

1. As a Veteran, if I don’t have an established relationship in a care type that I need care for (limited to the care types listed above), I need to be able to digitally request an appointment **3 days and up to 390 days** with the VA in that care type.

## Appointment Cancellation

1. As a Veteran, I need to cancel appointments that I have at the VA.
   - Veterans are allowed to **digitally cancel appointments up until the day before the appointment date**.
   - **Initial launch:** Veterans will only be able to cancel **in-person, phone, and video** appointments.

## Appointment Rescheduling

1. As a Veteran, I need the ability to reschedule my VA appointments.
   - Functionality would allow a Veteran to reschedule an appointment by keeping certain attributes (**location, type of care, provider, etc.**) while changing others (**time, date, appointment modality, etc.**).

## Oracle Health Testing and Connection Support

We anticipate needing support in testing all the scenarios listed above (and possible additional ones as they become known).

