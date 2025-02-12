## VetsAPI Sprint 25 Planning
NEW Sprint 25: 1/22/25 - 2/04/25

## 📅 Upcoming Dates  & 🏖️ PTO
  * Brittany in DC 1/28-1/30
    
## 📣 Announcements
* A6 has changed the cadence of sprint plannings. We closed sprint 26 on 12/31 and to get in sync with other teams we will be starting sprint 24 on 1/2. New cadence will be:
  * Sprint 25: 1/22/25 to 2/4/25
  * Sprint 26: 2/5/25 to 2/18/25
  * *Please note the numbers of the sprints have changed. This is to align us with other teams so we will start 2025 fresh with sprint 24*

## 🏆 Overarching Goals
* 🔴 Appointment Cancellation
* 🟢 Appointment Requests
  * 🟩 Add support for routing appointment requests to VetsAPI Patient Gateway
  * 🟩 🟦 Implement Patient Eligibility verification at Oracle Health sites 
* 🔵 Direct Scheduling
  * 🟦 Support Oracle Health slot search
  *  🟩 🟦 Implement Patient Eligibility verification at Oracle Health sites
* 🟠 Build vetsapi-patient-gateway to extend VAOS with Oracle Health write-back capabilities
* 🟡 Build CES infrastructure to extend VAOS module with Oracle Health write-back capabilities
* 🟣 Testing/Admin/Operational Support
* 🟤 VetsAPI Logic Integration Support
* ⚫️ Community Care - this work is being done by Devin working with the CIE team 
   
## 📋 Previous Sprint Summary:
In Sprint 24 the team provided support for multiple features and initiatives, outlined as follows:  
* #### Appointment Requests
  * Clinical Encounter Service created a new operation enabling VetsAPI-Patient Gateway to retrieve locations based on facility IDs, maintaining support for VetsAPI Patient Gateway and its use of the Cerner-FHIR-Adapter.
  * VetsAPI-Patient Gateway evaluated Cerner eligibility rules and identified that some rules involved downstream calls to dependent services. These rules were refactored to execute in parallel, improving the overall performance of the /eligibility endpoint.
* #### Direct Scheduling
  * VetsAPI added a direct scheduling feature flag in appointment creation logic to check the type of appointment. Logic in VetsAPI was refined and overlapping feature flags were consolidated.
  * VetsAPI-Patient Gateway modified the response array in VetsAPI to notify the front end if errors occurred while retrieving relationship data.
* #### Appointment Cancellation
  * VetsAPI-Patient Gateway added support for the VVS_ADHOC VAOS source filter in the VAOS Service.
* #### VetsAPI Logic Integration Support
  * VetsAPI integrated front-end logic for determining appointment modality within the VetsAPI back end and now returns the result via a new modality field.
* #### Build vets-api-patient-gateway to extend VAOS with Oracle Health write-back capabilities
  * VetsAPI-Patient Gateway was updated to populate identifier values in Oracle Health for Cerner Fhir Adapter-sourced appointments. ​​For consistency, the identifier values are populated based on the existing logic in `mobile-appointment-service`.
* #### Build CES infrastructure to extend VAOS module with Oracle Health write-back capabilities
  * Clinical Encounter Service updated search params to add the use of “_source” search param and removed -”vistaSite”  param and  references to getEhrSource and EHR_SOURCE.
* #### Backend support for Oracle Health to Enable Appointment Requests
  * VetsAPI-Patient Gateway was configured to enable the ability to apply a VA stop code exclusion list filter to clinic searches.  
* #### Testing/Admin/Operational Support
  * Clinical Encounter Service was updated to the latest version of Mobile-Framework (V2.2).
  * Clinical Encounter Service upgraded to the latest version of Acheron, (V1.30)
  * Clinical Encounter Service replaced use of the “vista-500” with “spl-vista” in Acheron to enable quicker turnaround times when applying new patches.

## 🏆 Sprint Goals and Stories
🚧 rolled from previous sprint;🐞bug; 🚫 blocked;🧗‍♀️ pulled in after sprint started; ⚠️ Removed from sprint 
* 🔴 Appointment Cancellation
* 🟢 Appointment Requests
  * 🧗‍♀️[VPG-320 VPG: Update cerner appointment source filtering](https://issues.mobilehealth.va.gov/browse/VPG-320)
* 🟠 Build vetsapi-patient-gateway to extend VAOS with Oracle Health write-back capabilities
* 🟡 Build CES infrastructure to extend VAOS module with Oracle Health write-back capabilities
* 🟤 VetsAPI Logic Integration Support
   * ⚠️[VGP-309 VPG: Move logic for determining if an appointment in the response should be displayed to the user](https://issues.mobilehealth.va.gov/browse/VPG-309)
   * [VPG-308 VPG: Move any existing logic for Past appointment logic to vets-api](https://issues.mobilehealth.va.gov/browse/VPG-308)
* 🔵 Direct Scheduling
   * [CES-1299 CES: Determine EHR on appointment creation request](https://issues.mobilehealth.va.gov/browse/CES-1299)
* ⚫️ Community Care - this work is being done by Devin working with the CIE team
   * 🚧 [VPG-310 CC: Update AppointmentsController#create method #98251](https://issues.mobilehealth.va.gov/browse/VPG-310)
   * [VPG-318 CC: Add request specs for AppointmentsController#create_draftmethod #101428](https://issues.mobilehealth.va.gov/browse/VPG-318)
* 🟣 Testing/Admin/Operational Support
   * [VPG-316 VPG: Add tests for async processing exceptions](https://issues.mobilehealth.va.gov/browse/VPG-316)
   * [CES-1477 CES: Update SQA with latest CES version](https://issues.mobilehealth.va.gov/browse/CES-1477)

## ✈️ Planned Releases
