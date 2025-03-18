## VetsAPI Sprint 3 Planning
NEW Sprint 1: 3/19/25 - 4/02/25

## 📅 Upcoming Dates  & 🏖️ PTO
  * Clayton 3/17-3/21
    
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
In Sprint 2 the team provided support for multiple features and initiatives, outlined as follows:  
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
   * ⚠️ [VPG-306 VPG: Move any existing logic for when to show join video link to vets-api](https://issues.mobilehealth.va.gov/browse/VPG-306)
* 🟠 Build vetsapi-patient-gateway to extend VAOS with Oracle Health write-back capabilities
   * [VPG-337 Implement Spring caching for CLS and CTPS client calls](https://issues.mobilehealth.va.gov/browse/VPG-337)
* 🔵 Direct Scheduling
   * [CES-1579 Set total on returned bundles](https://issues.mobilehealth.va.gov/browse/CES-1579)
   * [VPG-338 Filter inactive Providers out of relationship results](https://issues.mobilehealth.va.gov/browse/VPG-338)
   * [CES-1586 Remove system requirement for clinic slot searches](https://issues.mobilehealth.va.gov/browse/CES-1586)
   * [CES-1585 Require JWT to be provided](https://issues.mobilehealth.va.gov/browse/CES-1585)
* 🟣 Testing/Admin/Operational Support
   * 🚧 [CES-1509 CES: SQA: Continued CES testing](https://issues.mobilehealth.va.gov/browse/CES-1509)
   * [VPG-339 Address MviClient technical debt](https://issues.mobilehealth.va.gov/browse/VPG-339)
   * [CES-1578 Migrate to kustomized mobile-oauth and h2](https://issues.mobilehealth.va.gov/browse/CES-1578)
   * [CES-1597 Expose $appointment-types operation](https://issues.mobilehealth.va.gov/browse/CES-1597)


## ✈️ Planned Releases
