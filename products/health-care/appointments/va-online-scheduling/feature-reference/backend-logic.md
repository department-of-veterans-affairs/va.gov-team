# Backend Logic

Logic used by tools and services to determine what is displayed in VAOS


## Determining available types of care for scheduling

- The types of care are tied to clinics via stop codes that are [determined by the VA](../vista-appointments-facilities-clinics.md#clinic-stop-codes)
- VATS Mental Health used to utilize one primary stop with a set of various secondary stop codes.  This was changed and now Mental Health only uses one Mental Health primary stop code,  502, and no secondary stop codes.  This change is reflected in Clinic Configuration Manager (CCM) but not VATS.  

## Determining eligibility to schedule into a clinic

Except for Primary Care and COVID, all types of care have CCM Settings:  
   1) Yes, Any 
   2) Yes Seen within Last 12 months 
   3) Yes within last 36 months 
   4) No     
-  Primary Care Direct has only two settings, Yes with PACT and No. 
- Unlike the other types of care which can have up to a limit of two requests at a time, Primary Care has a limit of one.  
- COVID has Yes and No.  COVID is only for direct scheduling and unlike all the other types of care does NOT have a Request setting.  

A veteran's direct scheduling eligibility for PRIMARY CARE must be set to true if:
- CCM has type of care set to Yes 
- AND veteran has an assigned PACT team. 
-  Else set to false

A veteran’s request eligibility for PRIMARY CARE must be set to true if:
-  Veteran does not have a pending primary care request created within the last 120 days 
- AND CCM has type of care set to Yes. 
- Else set to false. 

 A veteran’s direct schedule eligibility for SPECIALTY CARE must be set to true if: 
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
-  VAMC staff would/should never set a clinic with a secondary stop code of 450, Compensation and Pension,  to Direct Schedule = YES.    If this is happening this is bad practice by the site and VAOS would show as a normal clinic appointment.  
- The request limit for Primary Care is one. Specialty care can set to one or two as desired by the site.    



## Determining community care eligibliity
- VAOS calls a Lighthouse CCE Eligibility API for Community care eligibility.  
- A user is eligible for community care if two checks pass:
    - The user is registered at a site that is marked as accepting community care requests,
    - AND the community care eligibility API says that they're eligible for the type of care they chose.
    - Primary care is available for CC only if the user has never been seen by a VA primary care provider—i.e., assigned to a PACT [Patient Aligned Care Team]

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



