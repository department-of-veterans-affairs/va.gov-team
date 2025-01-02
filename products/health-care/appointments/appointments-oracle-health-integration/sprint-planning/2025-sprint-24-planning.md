## VetsAPI Sprint 24 Planning
NEW Sprint 24: 1/2/25 - 1/21/25

## 📅 Upcoming Dates  & 🏖️ PTO

  * Brittany- 12/24, 12/31
  * Kenzie- 12/24-1/3/25

## 📣 Announcements
* A6 has changed the cadence of sprint plannings. We closed sprint 26 on 12/31 and to get in sync with other teams we will be starting sprint 24 on 1/2. New cadence will be:
  * Sprint 24: 1/2/25 to 1/21/25 (first sprint will be longer to make you aligned with the rest of the team)
  * Sprint 25: 1/22/25 to 2/4/25
  * Sprint 26: 2/5/25 to 2/18/25

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
   
## 📋 Previous Sprint Summary:
In Sprint 26 the team provided support for multiple features and initiatives, outlined as follows:  
* #### Backend support for Oracle Health to enable direct scheduling
   * (VPG-296) Identified a bug in VetsAPI Patient Gateway where relationship requests without "applySchedulingConfig" resulted in an HTTP 500 error. This issue was resolved by updating the relationship processing, ensuring that relationship searches complete successfully even when "applySchedulingConfig" is not provided.
* #### Testing/Admin/Operational Support
   * (VPG-293) VetsAPI Patient Gateway service design documentation was updated to address constraints identified by the VA Mobile Framework Architecture Team. The documentation was revised and resubmitted for approval.
   * (CES-1239) Upgraded CES Test Utils, a library utilized by Clinical Encounter Service, to the latest Mobile Framework version 2.2.
   * (CES-1240) Upgraded the CES Shared Library, which is also used by Clinical Encounter Service, to the latest Mobile Framework version 2.2.

## 🏆 Sprint Goals and Stories
🚧 rolled from previous sprint;🐞bug; 🚫 blocked;🧗‍♀️ pulled in after sprint started 

* 🔴 Appointment Cancellation
   * [VPG-303 VPG: Add support for VVS_ADHOC VAOS source filter](https://issues.mobilehealth.va.gov/browse/VPG-303)

* 🟢 Appointment Requests
   * [CES-1423 CFA: Reads should receive cerner location ids and only call cerner directly](https://issues.mobilehealth.va.gov/browse/CES-1423)

*  🟤 VetsAPI Logic Integration Support
   * 🚧 [VPG-13 VetsAPI: implement FE logic for determining appointment modality](https://issues.mobilehealth.va.gov/browse/VPG-13) 


* 🟣 Testing/Admin/Operational Support
    
* 🔵 Direct Scheduling
   * 🚧[VPG-302 VetsAPI: add direct scheduling feature flag to appointment creation logic](https://issues.mobilehealth.va.gov/browse/VPG-302)
   * 🚧 [VPG-292 vets-api: include failures array in relationships endpoint](https://issues.mobilehealth.va.gov/browse/VPG-292)

## ✈️ Planned Releases
