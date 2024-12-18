## VetsAPI Sprint 26 Planning
Sprint 25: 12/16/24 - 12/30/24

## 📅 Upcoming Dates  & 🏖️ PTO
  * Brad- 12/18-1/1/25
  * Devin- 12/19-12/26
  * Clayton- 12/23-1/3/25
  * Drew- 12/23-1/3/25
  * Brittany- 12/24, 12/31
  * Kenzie- 12/24-1/3/25

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
* 🔴 Appointment Cancellation
   * [VPG-303 VPG: Add support for VVS_ADHOC VAOS source filter](https://issues.mobilehealth.va.gov/browse/VPG-303)

*  🟤 VetsAPI Front End Support
   * 🚧 [VPG-13 VetsAPI: implement FE logic for determining appointment modality](https://issues.mobilehealth.va.gov/browse/VPG-13) 

* 🟣 Testing/Admin/Operational Support
   * [VPG-293 VPG: Address constraints on SRVDD Resubmit](https://issues.mobilehealth.va.gov/browse/VPG-293)
  
* 🔵 Direct Scheduling
   * 🚧 [CES-1299 CES: Determine EHR on appointment creation request](https://issues.mobilehealth.va.gov/browse/CES-1299)
   * 🚧 [VPG-292 vets-api: include failures array in relationships endpoint](https://issues.mobilehealth.va.gov/browse/VPG-292)
   * [VPG-302 VetsAPI: add direct scheduling feature flag to appointment creation logic](https://issues.mobilehealth.va.gov/browse/VPG-302)
   * [VPG-296 VPG: Relationship requests without applySchedulingConfig throw 500](https://issues.mobilehealth.va.gov/browse/VPG-296)
   * [CES-1423 CFA: Reads should receive cerner location ids and only call cerner directly](https://issues.mobilehealth.va.gov/browse/CES-1423)

## ✈️ Planned Releases
