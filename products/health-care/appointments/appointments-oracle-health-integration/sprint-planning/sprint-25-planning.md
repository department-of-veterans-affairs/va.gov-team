## VetsAPI Sprint 25 Planning
Sprint 25: 12/02/24 - 12/16/24

## 📅 Upcoming Dates  & 🏖️ PTO


## 📣 Announcements
* Lauren Alexanderson gave a prod date of December 2024

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
* 🟤 VetsAPI Front End Support
   
## 📋 Previous Sprint Summary:
In Sprint 24 the team provided support for multiple features and initiatives, outlined as follows:  
* #### Backend support for Oracle Health to enable direct scheduling
    * (VPG-18) VetsAPI Patient Gateway was updated to retrieve patient relationships, returning a new field for Oracle Health provider relationships to indicate whether the provider has available time slots. 
* #### Backend support for Oracle Health to build CES infrastructure to extend VAOS module with Oracle Health write-back capabilities
    * (VPG-270) VetsAPI Patient Gateway added location and serviceType filters to Cerner FHIR Adapter appointment searches. 
* #### Testing/Admin/Operational Support
    * (CES-1376) CES IG Java Library was updated to use fluent setters with Clinical Encounter Service, aligning its functionality with how HAPI’s Slot class is utilized.
      
## 🏆 Sprint Goals and Stories
🚧 rolled from previous sprint;🐞bug; 🚫 blocked;🧗‍♀️ pulled in after sprint started 
* 🟢 Appointment Requests
   * [VPG-23 VPG: Update to use CesAppointment](https://issues.mobilehealth.va.gov/browse/VPG-23)
* 🟡 Build CES infrastructure to extend VAOS module with Oracle Health write-back capabilities
   * [CES-1141 CES: Update VCAS to latest version](https://issues.mobilehealth.va.gov/browse/CES-1141)
   * [CES-1199 CFA: DoD appointment locations are interpreted as VA locations](https://issues.mobilehealth.va.gov/browse/CES-1199)
*  🟤 VetsAPI Front End Support
   * 🚧 [VPG-273 VetsAPI: implement FE logic for determining appointment type](https://issues.mobilehealth.va.gov/browse/VPG-273)
   * 🚧 [VPG-13 VetsAPI: implement FE logic for determining appointment modality](https://issues.mobilehealth.va.gov/browse/VPG-13) 
* 🟣 Testing/Admin/Operational Support
   * 🚧 [VPG-29 Finalize TH appts research](https://issues.mobilehealth.va.gov/browse/VPG-29)
   * 🚧 [CES-1350 CES: Make appointment creation in integration tests more managed](https://issues.mobilehealth.va.gov/browse/CES-1350)
   * [CES-1291 CIJL: Overload missing fluent setters for CesAppointment](https://issues.mobilehealth.va.gov/browse/CES-1291)
   * [VPG-26 VPG: Investigate potential performance issues with /eligibility endpoint](https://issues.mobilehealth.va.gov/browse/VPG-26)
* 🔵 Direct Scheduling
   * [VPG-291 vets-api: update contract and examples for relationships endpoint to reference relationship type](https://issues.mobilehealth.va.gov/browse/VPG-291)
   * [VPG-292 vets-api: include failures array in relationships endpoint](https://issues.mobilehealth.va.gov/browse/VPG-292)
## ✈️ Planned Releases
