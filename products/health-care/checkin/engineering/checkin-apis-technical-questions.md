## Glossary
- PGHD: Patient Generated Health Database. A FIHR-standard storage area.
- VSE: VistA Scheduling Enhancements
- EAS: Enterprise Appointment Service

## Pre-Check In APIs
### Overall Purpose - 
> What's the overall purpose of this API?

Take the things MSA is asking today and move them to the "pre-checkin" phase. 
Do precheckin questions before the patient comes to the faciility.

### Features
> What are the features of this API? Are they well-defined?

Primarily, we want to find out if the pre-checkin items have been completed or not. E.g. If we hit PGHD, does data for that
patient come back?

To modify this data may be out of scope for the pre-checkin API. Once it goes to PGHD it becomes part of a workflow including manual approval
and updating.

### Integration/New
> Is this an integration of existing work or new development? Is there documentation or tech specs? What are the requirements for integration?

New work. However, Rob has done AVS/PVS integration, so we can benefit from the work done in VEText. Stephen Barrs did some prelim work for Rob, knows PGHD very well.
### Data Availability
> Is the data readily available?

Yes, clipboard data stored on PGHD

### Availabile Resources
> Is there a staging environment to test against? Who can support us as a SME? 

SMEs:
- Rob has done AVS/PVS integration, so we can benefit from the work done in VEText.
- Stephen Barrs did some prelim work for Rob's AVS integration and knows PGHD very well. 

PGHD staging env exists; AVS currently connecting to and using it.

### Action Items
- Review precheckin flow Shane shared from kristen
---
## Workflow APIs
### Overall Purpose
> What's the overall purpose of this API?

Purpose: To add patients to a queue, and allow staff members to move patients through
an action flow (aka workflow). 

### Features
> What are the features of this API? Are they well-defined?

- Add patients to a queue
- Correlate patients to the appropriate workflows
- Manage the patients' current positions in the workflow (move to next stage, etc)
- View all patients + workflows for a clinic
- Limit data to roles [verify?]

### Integration/New
> Is this an integration of existing work or new development? Is there documentation or tech specs? What are the requirements for integration?

New work.

### Data Availability
> Is the data readily available?

Patient & clinic data is available in VistA, but the workflow management will be new.

### Availabile Resources
> Is there a staging environment to test against? Who can support us as a SME? 

Recordings of the kiosk walkthrough:
- [link]
- [link]

SMEs:
- Shawn Adams

---
## Insurance APIs
### Overall Purpose
> What's the overall purpose of this API?

Purpose: To check if the patient needs their insurance checked.

Today: MSAs are required to check HI (health insurance) of checked in veterans. A formula (shared in meeting with insurance folks) exists that detects how often to check insurance. For a clinic, during a single day, which patients need their insurance checked. This won't be all patients. If insurance is checked, don't ask again at the next appointment if it falls within the time range given by the formula.

### Features
> What are the features of this API? Are they well-defined?

- Check if a patient needs their insurance updated; this will be yes/no. 

Actually updating insurance falls outside the scope of the insurance APIs.

### Integration/New
> Is this an integration of existing work or new development? Is there documentation or tech specs? What are the requirements for integration?

This is new work, though the list of patients to check is currently held in VSE. Could be an 
integration opportunity there. 

### Data Availability
> Is the data readily available?

We can get the last date a patient's insurance was updated from VistA and plug it into the formula. This will be a direct Read/Write from VistA with RPCs.

### Availabile Resources
> Is there a staging environment to test against? Who can support us as a SME?

Insurance folks gave us formula [needs documentation, link to recorded meeting?]. Also review ICD insurance folks sent over [link?].

### Action Items
- Review insurance meeting recorded by Kennon [link?]
---
## Demographic APIs
### Overall Purpose
> What's the overall purpose of this API?

Purpose: To view and update demographic information for a patient.

### Features
> What are the features of this API? Are they well-defined?

To view and update demographic information for a patient.

### Integration/New
> Is this an integration of existing work or new development? Is there documentation or tech specs? What are the requirements for integration?

New work. Rob has implemented the viewing of demographic information before. Updating is brand new. 

### Data Availability
> Is the data readily available?

This will be a direct Read/Write from VistA, with RPCs.
There are some publicly available RPCs [link?]

### Availabile Resources
> Is there a staging environment to test against? Who can support us as a SME? 

SMEs:
- Rob
- Andy
- Shane 

VistA site Shane pointed to [clarify]

---
## Medication APIs
### Overall Purpose
> What's the overall purpose of this API?

Purpose: Allow the MSA to refill prescriptions for patient.

### Features
> What are the features of this API? Are they well-defined?

- Get a list of prescriptions for the patient
- Show the prescriptions for a patient that are refillable
- Refill a prescription

Renewing a prescription is outside the scope of the Medication APIs

### Integration/New
> Is this an integration of existing work or new development? Is there documentation or tech specs? What are the requirements for integration?

New work.

### Data Availability
> Is the data readily available?

This will be a direct Read/Write from VistA.

### Availabile Resources
> Is there a staging environment to test against? Who can support us as a SME? 

SMEs:
- Andy

There is an RPC that exists [link?] [more info?].

---
## Appointment APIs
### Overall Purpose
> What's the overall purpose of this API?

Purpose: Check in a patient.

### Features
> What are the features of this API? Are they well-defined?

- Get a list of appointments for the patient
- Get a list of appointments for the clinic
- Check in a patient to a clinic
- Disposition (checkout / mark as "no show") a patient

Creating/sched/resched/cancelling an appointment is outside the scope of the Appointment APIs.

### Integration/New
> Is this an integration of existing work or new development? Is there documentation or tech specs? What are the requirements for integration?

IMH in VEText does this. Could expose this functionality through VEText, but VEText would have to create these endpoints.

SMEs for above:
- Rob
- Andy

We could get access to EAS.

SMEs for above:
- Steve Eaton
- BJ

### Data Availability
> Is the data readily available?

Yes, through VEText or possibly EAS.

### Availabile Resources
> Is there a staging environment to test against? Who can support us as a SME? 

SMEs:
- Rob
- Andy
- Shane

---
## VEText APIs
### Overall Purpose
> What's the overall purpose of this API?

Purpose: Check in patient by text message.

Need to discuss more with OVAC

### Features
> What are the features of this API? Are they well-defined?

- Check in a patient by text

### Integration/New
> Is this an integration of existing work or new development? Is there documentation or tech specs? What are the requirements for integration?

We need to answer the question: are we using IMH or building something similar?
Possibly the fastest, simplest solution for MVP is to expose IMH.

### Data Availability
> Is the data readily available?

Unknown

### Availabile Resources
> Is there a staging environment to test against? Who can support us as a SME? 

SMEs:
- Rob
- Andy
- Shane