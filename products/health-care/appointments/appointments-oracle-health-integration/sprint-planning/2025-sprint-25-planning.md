## VetsAPI Sprint 25 Planning
NEW Sprint 25: 1/22/25 - 2/04/25

## 📅 Upcoming Dates  & 🏖️ PTO
  * 
    
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
In Sprint 26 the team provided support for multiple features and initiatives, outlined as follows:  
* #### Appointment Requests
  * Clinical Encounter Service created a new operation enabling VetsAPI-Patient Gateway to retrieve locations based on facility IDs, maintaining support for VetsAPI Patient Gateway and its use of the Cerner-FHIR-Adapter.
  * VetsAPI-Patient Gateway evaluated Cerner eligibility rules and identified that some rules involved downstream calls to dependent services. These rules were refactored to execute in parallel, improving the overall performance of the /eligibility endpoint.
* #### Direct Scheduling
  * VetsAPI added a direct scheduling feature flag in appointment creation logic to check the type of appointment. Logic in VetsAPI was refined and overlapping feature flags were consolidated.
  * VetsAPI-Patient Gateway modified the response array in VetsAPI to notify the front end if errors occurred while retrieving relationship data.
* #### Appointment Cancellation
  * VetsAPI-Patient Gateway added support for the VVS_ADHOC VAOS source filter in the VAOS Service.* #### Backend support for Oracle Health to enable direct scheduling
* #### VetsAPI Logic Integration Support
  * VetsAPI integrated front-end logic for determining appointment modality within the VetsAPI back end and now returns the result via a new modality field.
* #### Build vets-api-patient-gateway to extend VAOS with Oracle Health write-back capabilities
  * VetsAPI-Patient Gateway was updated to populate identifier values in Oracle Health for Cerner Fhir Adapter-sourced appointments. ​​For consistency, the identifier values are populated based on the existing logic in `mobile-appointment-service`.
* #### Testing/Admin/Operational Support


## 🏆 Sprint Goals and Stories
🚧 rolled from previous sprint;🐞bug; 🚫 blocked;🧗‍♀️ pulled in after sprint started 

* 🔴 Appointment Cancellation
   * [VPG-303 VPG: Add support for VVS_ADHOC VAOS source filter](https://issues.mobilehealth.va.gov/browse/VPG-303)
* 🟢 Appointment Requests
   * [CES-1423 CFA: Reads should receive cerner location ids and only call cerner directly](https://issues.mobilehealth.va.gov/browse/CES-1423)
   * [VPG-299 VPG: Evaluate Cerner eligibility rules in parallel](https://issues.mobilehealth.va.gov/browse/VPG-299)
* 🟤 VetsAPI Logic Integration Support
   * 🚧 [VPG-13 VetsAPI: implement FE logic for determining appointment modality](https://issues.mobilehealth.va.gov/browse/VPG-13) 
* 🟠 Build vetsapi-patient-gateway to extend VAOS with Oracle Health write-back capabilities
   * [VPG-295 VPG: Populate identifier values for CFA-sourced appointments](https://issues.mobilehealth.va.gov/browse/VPG-295)
* 🟡 Build CES infrastructure to extend VAOS module with Oracle Health write-back capabilities
   * [CES-1419 CES: Update CES to use _source search param](https://issues.mobilehealth.va.gov/browse/CES-1419)
* 🔵 Direct Scheduling
   * 🚧[VPG-302 VetsAPI: add direct scheduling feature flag to appointment creation logic](https://issues.mobilehealth.va.gov/browse/VPG-302)
   * 🚧 [VPG-292 vets-api: include failures array in relationships endpoint](https://issues.mobilehealth.va.gov/browse/VPG-292)
* ⚫️ Community Care - this work is being done by Devin working with the CIE team
   * [VPG-310 CC: Update AppointmentsController#create method #98251](https://issues.mobilehealth.va.gov/browse/VPG-310)
* 🟣 Testing/Admin/Operational Support
   * [CES-1229 CFA: Update to Mobile-Framework v2.2](https://issues.mobilehealth.va.gov/browse/CES-1229)

## ✈️ Planned Releases
