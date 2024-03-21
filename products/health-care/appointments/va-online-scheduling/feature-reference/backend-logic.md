# Backend requirements and logic

Logic and requirements for tools and services that VAOS pulls data from.


## Determining appointment type

VAOS displays various types of appointments. See also [appointment types](./appointment-types/).

The `kind` attribute is used to determine how each type should be displayed, along with some other data for community care and telehealth appointments.

### Appointment types
Booked appointments through VA or CC facilities.

| Type |  Display attributes|
|---|---|
| [VA In-person](./appointment-types/va-in-person.md)  | `appt.kind` = `clinic` |
| [VA In-person Vaccine](./appointment-types/va-in-person-vaccine.md) | `appt.serviceType` = `covid` |
| [VA Video Care at Home](./appointment-types/va-video-care-at-home.md) | `appt.kind` = `telehealth`  |
| [VA Video Care at a VA location](./appointment-types/va-video-care-at-a-va-location.md) | `appt.kind` = `telehealth`  |
| [VA Video Care on GFE](./appointment-types/va-video-care-on-gfe.md) | `appt.kind` = `telehealth` and `appt.extension.patientHasMobileGfe` = `true`  |
| [VA Video Care at an ATLAS location](./appointment-types/va-video-care-at-atlas-location.md) | `appt.kind` = `telehealth` and  `appt.telehealth.atlas` exists |
| [VA Phone](./appointment-types/va-phone.md) | `kind` = `phone` |
| [Community care](./appointment-types/community-care.md) | `kind` = `cc` AND there is data in the `appt.start` attribute |
| [Claim exam appointment](./appointment-types/claim-exam.md) | `appt.serviceCategory[0].text` = `COMPENSATION & PENSION` |

### Request types
Appointments that Veterans have requested but VA has not booked.

| Feature | Description |
|---|---|
| [VA appointment request](./appointment-types/va-request.md)  | `appt.kind` is not `cc` and it has data in the `appt.requestedPeriods` |
| [Community care appointment request](./appointment-types/community-care-request.md) | `appt.kind` = `cc` AND there is data in the `appt.requestedPeriods`|

## Determining available types of care for scheduling

- The types of care are tied to clinics via stop codes that are [determined by the VA](./vista-appointments-facilities-clinics.md#clinic-stop-codes)
- VATS Mental Health used to utilize one primary stop with a set of various secondary stop codes.  This was changed and now Mental Health only uses one Mental Health primary stop code,  502, and no secondary stop codes.  This change is reflected in Clinic Configuration Manager (CCM) but not VATS. 

### Type of Care Mapping from VAOS to VistA

| VAOS Types of Care/CCM              | VistA Name                         |
| ----------------------------------- | ---------------------------------- |
| Amputation Services                 | 211 PM&RS AMP CLINIC               |
| Audiology                           | 203 AUDIOLOGY                      |
| Pharmacy                            | 160 CLINICAL PHARMACY              |
| CPAP                                | 349 SLEEP MEDICINE                 |
| Food and Nutrition                  | 123 NUTRITION/DIETETICS-INDIVIDUAL |
| MOVE! program                       | 372 WEIGHT MGMT & MOVE! PROG - IND |
| Primary Care                        | 323 PRIMARY CARE/MEDICINE          |
| Ophthalmology                       | 407 OPHTHALMOLOGY                  |
| Optometry                           | 408 OPTOMETRY                      |
| Outpatient Mental Health            | 502 MENTAL HEALTH CLINIC - IND     |
| Sleep Medicine - Home Sleep Testing | 143 SLEEP STUDY                    |
| Social Work                         | 125 SOCIAL WORK SERVICE            |

## Determining eligibility to schedule into a clinic

Except for Primary Care and COVID, all types of care have CCM Settings:  
   1) Yes, Any 
   2) Yes Seen within Last 12 months 
   3) Yes within last 36 months 
   4) No     
-  Primary Care Direct has only two settings, Yes with PACT and No. 
- Unlike the other types of care which can have up to a limit of two requests at a time, Primary Care has a limit of one.  
- COVID has Yes and No.  COVID is only for direct scheduling and unlike all the other types of care does NOT have a Request setting.  

A Veteran's direct scheduling eligibility for PRIMARY CARE must be set to true if:
- CCM has type of care set to Yes 
- AND Veteran has an assigned PACT team. 
-  Else set to false

A Veteran's request eligibility for PRIMARY CARE must be set to true if:
-  Veteran does not have a pending primary care request created within the last 120 days 
- AND CCM has type of care set to Yes. 
- Else set to false. 

 A Veteran’s direct schedule eligibility for SPECIALTY CARE must be set to true if: 
- CCM has type of care set to Yes, Any 
- OR CCM has a type of care set to Yes with Last Seen in 12 or 36 months 
   - AND veteran has past appointment in that stop code with a VistA status of CHECKED IN or CHECKED OUT within the indicated CCM timeframe.
- Else set to false. 

A Veteran's request eligibility for the selected type of SPECIALTY CARE must be set to true if: 
 - Veteran does not have a pending care request created within the last 120 days for the specified request limit as set in CCM 
 - AND either:
      - CCM has type of care set to Yes, Any OR  
      - CCM has a type of care set to Yes with Last Seen in 12 or 36 months 
          - AND veteran has past appointment in that stop code with a VistA status of CHECKED IN or CHECKED OUT within the indicated CCM timeframe.
- Else set to false.  

Clinics with the following attributes must NOT present to the Veteran for direct scheduling if at any of following are true:    
- Clinic’s stop code is on the Office of Integrated Veteran Care’s stop code exclusion list
- Clinic location name that starts with ZZ
- Clinic location name that ends with -X
- Clinic’s direct scheduling flag = No
- Clinic’s direct scheduling flag = NULL
- Clinics with secondary stop code = video telehealth. 

Stop codes for video telehealth -  https://coderepo.mobilehealth.va.gov/projects/MACM/repos/vaec-map-consul-staging-tf-appconfigs/browse/vaos-service.tf?at=sqa#25

- The direct scheduling eligibility call is done first followed by the request eligibility call. VAOS calls a CDW stored procedure that looks for an active PACT assignment, finds the default Provider for the PACT and checks for the clinics associated with that Provider. Clinics are returned to VAOS and will be display unless filtered according to the business rules stated above.
- For eligibility checks the past appointment can be at any location at either Child or Parent for eligibility to be true. Parent inherits any Child appointment(s) for eligibility check AND Children inherit Parent’s appointment(s) for eligibility check. 
- Appointment status is only relevant when CCM/VATS is set to Yes Last Seen within 12 or 36 months. In VistA SDAM roll and scroll interface the status shows as Encounter Status/Appointment Status:  Act Req/Checked In. VSE GUI only displays the Appointment status. The Encounter status is NOT displayed. 
-  VAMC staff would/should never set a clinic with a secondary stop code of 450, Compensation and Pension, to Direct Schedule = YES. If this is happening this is bad practice by the site and VAOS would show as a normal clinic appointment.  
- The request limit for Primary Care is one. Specialty care can set to one or two as desired by the site.


## Determining if user can schedule or request appointment at clinic

The default flow displayed must be as follows and must display  with appropriate message to veteran.  

| Veteran’s Direct Scheduling Eligibility | Veteran’s Request Eligibility           | Are clinics configured for direct scheduling? | VAOS Default Flow                                                                                                                                                                                      |
| --------------------------------------- | --------------------------------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| TRUE                                    | N/A                                     | Yes                                                | Direct Scheduling flow must display.                                                                                                                                                                   |
| TRUE                                    | N/A                                     | No                                                 | Message must display to veteran informing no clinic was found for this type of care.                                                                                                                   |
| FALSE                                   | TRUE                                    | N/A                                                | Request flow must display.                                                                                                                                                                             |
| FALSE                                   | FALSE<br><br>request limit exceeded     | N/A                                                | Message must display to veteran informing request limit met.                                                                                                                                           |
| FALSE                                   | FALSE<br><br>CCM set to no              | N/A                                                | Message must display to veteran informing that facility does not allow online requests for this type of care.                                                                                          |
| FALSE                                   | FALSE<br><br>Past appt criteria not met | N/A                                                | Message must display to veteran informing request can’t be submitted Because past appointment criteria not met.                                                                                        |
| TRUE                                    | FALSE<br><br>CCM set to No              | Yes                                                | Direct Scheduling flow must display.<br><br>If "I need a different clinic" selected then message must display to veteran informing that facility does not allow online requests for this type of care. |
| TRUE                                    | FALSE<br><br>request limit exceeded     | Yes                                                | Direct Scheduling flow must display.<br><br>If "I need a different clinic" selected then message must display to veteran informing request limit exceeded.                                             |
| TRUE                                    | FALSE<br><br>past appt criteria not met | Yes                                                | Direct Scheduling must display.<br><br>If "I need a different clinic" selected then message must display to veteran informing past appointment criteria not met.                                       |
| TRUE                                    | FALSE<br><br>CCM set to No              | No                                                 | Message must display to veteran informing no clinic was found for this type of care.                                                                                                                   |
| TRUE                                    | FALSE<br><br>request limit exceeded     | No                                                 | Message must display to veteran informing request limit met.                                                                                                                                           |
| TRUE                                    | FALSE<br><br>past appt criteria not met | No                                                 | Message must display to veteran informing request can’t be submitted because past appointment criteria not met.                                                                                        |
| TRUE                                    | TRUE                                    | Yes                                                | Direct Scheduling flow must display.<br><br>If I need a different clinic selected then request flow displays.                                                                                          |
| TRUE                                    | TRUE                                    | No                                                 | Request flow must display.                                                                                                                                                                             |
| FALSE<br><br>CCM set to No              | TRUE                                    | N/A                                                | Request flow must display.                                                                                                                                                                             |
| FALSE<br><br>past appt criteria not met | TRUE                                    | N/A                                                | Request flow must display.                                                                                                                                                                             |
| FALSE:<br><br>CCM set to No             | FALSE:<br><br>request limit exceeded    | N/A                                                | Message must display to veteran informing request limit met.                                                                                                                                           |
| FALSE<br><br>CCM set to No              | FALSE<br><br>past appt criteria not met | N/A                                                | Message must display to veteran informing request can’t be submitted because past appointment criteria not met.                                                                                        |

Notes:
1. 12/13/2023 - a Veteran should have the ability to have 1 active request at the Parent and 1 active request at a CBOC but only one care type active overall. Ex - Veteran has active request at Parent for PC, they cannot select the PC care type and enter a request located at a CBOC.

## Determining community care eligibliity
- VAOS calls a Lighthouse CCE Eligibility API for Community care eligibility.  
- A user is eligible for community care if two checks pass:
    - The user is registered at a site that is marked as accepting community care requests,
    - AND the community care eligibility API says that they're eligible for the type of care they chose.
    - Primary care is available for CC only if the user has never been seen by a VA primary care provider—i.e., assigned to a PACT (Patient Aligned Care Team)

How the API determines CC eligibility:
- Checks the veteran’s community care eligibility code in the Enrollment System to see if eligibility code makes veteran eligible for Community Care.  Only certain CC eligibility codes make a veteran eligible for community care.  
- If a veteran does not have a community care eligibility code in the Enrollment System that enables veteran for Community Care, then the API will check drive time to any VAMC that offers that requested type of care.  Drive time standards are 30 minutes for Primary Care and 60 minutes for Specialty Care and is based on the drive times from veteran’s home address to any VA medical facility that offers that type of care.  
- Primary Care eligibility has an additional check.   To be eligible for primary care veteran must meet either of the above two conditions and must NOT have an assigned active Patient Aligned Care Team (PACT).  In other words, Community Care eligible veterans that have an active PACT are not allowed to request Community Care primary care. 

## VA facility page data sources

- With VAOS-servicev2 we are now using MFSv2- which uses the Lighthouse Facilities API.
- Lighthouse uses two data sources VAST and then CMS.  CMS data comes from a Facility Editor where the site personnel make actual changes to status, operating hours, etc.
- Lighthouse's default is to use the CMS data first then VAST data . CMS data is more reliable, and updates are real time whereas VAST data can take a while to get updated.
- Invalid VAOS facility classifications are NULL, Extended Care Site, MCS and Residential Care Site.  Sites with these classifications are filtered by the backend.  
- A VA location will not display in the list if both Direct Schedule and Requests are set to NO in CCM. 


## Creating appointments and requests in backend systems


### VA Direct-scheduled Appointments in VistA
-  Irrespective of the VistA clinic’s “Prohibit Access” setting, a VistA appointment must be allowed to be booked when Direct Scheduling flag AND the Display Flag for the clinic both = YES.
-  A veteran must not be allowed to book an appointment at the same time as an existing appointment in that same VistA instance. 
-  All direct scheduled appointments as entered in VAOS must write to the VistA system and create an entry in the SDEC Appointment file (409.84). 
-  All direct scheduled appointments must write the following data to the VistA system:    
   - VistA Purpose of Visit must be set to Scheduled.  
   - VistA Appointment Type must be set to Regular
   - VistA Appointment Made (User) must be set to SDESOITEAS,SRV
   - VistA Request Type = Other than Not avail
   - VistA Next Avail Type = Not indicated toa be next avail
   - VistA PID/Preferred Date of Appointment must be set to the date selected as entered on When do you want to schedule page
   - VistA Patient Comments must be set as entered in the comment section on the Choose Reason for Appointment page.
   - VistA Patient Comments must have the reason code (ROUTINEVISIT, MEDICALISSUE, QUESTIONMEDS, OTHER_REASON) appended to the comments as entered in VAOS.  
   - VistA Clinic wait time 1 must be set to the difference b/w the date the appointment was processed and the date of the appointment
   - VistA Clinic wait time 2 must be set to the difference b/w the preferred date of the appointment (as entered in VAOS on the WHEN DO YOU WANT TO SCHEDULE page) and the date of the appointment.  

### VA Requests in VistA
-  All VA request appointments as entered in VAOS must write to the VistA system and create an entry in the SDEC Appointment Request file (409.85). 
   - VistA Req Service/Specialty must be set to the Type of Care selected in VAOS.  (See mapping below)
   - VistA Institution must be set to the Parent Location
   - VistA Request Appointment Type set must be set to VETERAN
   - VistA Originating user must be set to SDESOITEAS,SRV
   - VistA Requested by must be set to Patient
   - VistA PID/Preferred Date of Appointment must be set to the first date enter as entered on Choose date for appointment
   - VistA Priority must be set to ASAP
   - VistA Modality must be set as entered in VAOS on the Choose a type of appointment page.  
       - VAOS Office Visit = Face to Face
       - VAOS Telephone  = Phone Call
       - VAOS Telehealth = Video
- VistA Patient Comments must include the following:
    - Location Selected in VAOS
    - The second and third date preferences if entered on the Choose an appointment day and time page
    - Email and phone number.
    - Comments must be set as entered on the Choose Reason for Appointment page must have the reason code (ROUTINEVISIT, MEDICALISSUE, QUESTIONMEDS, OTHER_REASON) appended to the comments as entered in VAOS. 

### Community Care Requests in HSRM
- All community care requests must write the following data to the Health Systems Referral Management System (HSRM)
   - Site ID
   - Email
   - Mobile Phone number
   - Communication preference
   - Request times
   - Type of care
   - Preferred contact time
   - Preferred Language
   - Preferred city
   - Preferred state
   - Comments

