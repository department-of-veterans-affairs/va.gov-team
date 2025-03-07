## VetsAPI Sprint 2 Planning
NEW Sprint 1: 3/05/25 - 3/19/25

## 📅 Upcoming Dates  & 🏖️ PTO
  * Kenzie PTO 3/12
    
## 📣 Announcements


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
* #### Direct Scheduling
  *  VetsAPI Patient Gateway updated query logic to ensure that community care appointments are always returned from VAOS, even when the Electronic Health Record (EHR) system is Oracle.
  *  Clinical Encounter Service modified multi-EHR reads to return OperationOutcomes instead of a list. This change allows Clinical Encounter Service to differentiate between a valid ResourceNotFoundException and an invalid ForbiddenOperationException.

* #### Testing/Admin/Operational Support
  *  VetsAPI Patient Gateway updated references to the latest available version of mobile-oauth-sts, improving system stability and security.
  *  VetsAPI Patient Gateway reworked unit test logic to eliminate dependencies on the time of day, resolving errors that occurred within four hours of midnight.
  *  Clinical Encounter Service transitioned from using the DISABLED_RESOURCES property to a permissions-based model, allowing for more flexible and configurable resource management.
  *  Clinical Encounter Service implemented a new DRL rule that enforces access restrictions, ensuring that veterans can only read their own appointments. Unauthorized access attempts now trigger a 403 Forbidden response.


## 🏆 Sprint Goals and Stories
🚧 rolled from previous sprint;🐞bug; 🚫 blocked;🧗‍♀️ pulled in after sprint started; ⚠️ Removed from sprint 

* 🟤 VetsAPI Logic Integration Support
   * 🚧 [VPG-306 VPG: Move any existing logic for when to show join video link to vets-api](https://issues.mobilehealth.va.gov/browse/VPG-306)
* 🔵 Direct Scheduling
   * [CES-1299 CES: Determine EHR on appointment creation request](https://issues.mobilehealth.va.gov/browse/CES-1299)
* ⚫️ Community Care - this work is being done by Devin working with the CIE team
   * [VPG-332 CC: Use cached provider_id, appointment_type_id, and end_date for creating](https://issues.mobilehealth.va.gov/browse/VPG-332) 
* 🟣 Testing/Admin/Operational Support
   * 🚧 [CES-1509 CES: SQA: Continued CES testing](https://issues.mobilehealth.va.gov/browse/CES-1509)
   * [VPG-331 Update unit test logic to not depend on time of day](https://issues.mobilehealth.va.gov/browse/VPG-331)


## ✈️ Planned Releases
