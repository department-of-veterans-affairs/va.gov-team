## VetsAPI Sprint 18 Planning
Sprint 18: 8/27/24 - 9/9/24

## 📅 Upcoming Dates  & 🏖️ PTO
* Labor Day 9/2/24 
* Brittany PTO 9/5 & 9/6

## 📣 Announcements
* Cerner-Location-Service was deployed to prod 7/18/24
* stop-codes-service was deployed to prod 8/8/24

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
 
## 📋 Previous Sprint Summary:
In Sprint 16, the team provided support for multiple features and initiatives, outlined as follows:  
* #### Backend support for Oracle Health to enable direct scheduling
  * VetsAPI Patient Gateway (VPG) was updated to be able retrieve teh VistA clincis that a patient has an established relationship with.
  * VetsAPI Patient Gateway addressed tech debt to removed identifier payload from converted FHIR appointments to not cause confusion on where the appointment is sourced from. 
   * VetsAPI Patient Gateway was updated to be able to use the latest avilable filters for Oracle Health relationship data. 
   * VPG added test cases to slot search capability to ensure service robustness.
   * VPG removed sources array from the relationships endpoint. 

* #### Backend support for Oracle Health to build CES infrastructure to extend VAOS module with Oracle Health write-back capabilities 
   * Clinical Encounter Service added support for "_id" search parameter for search capabilities.
   * VetsAPI Patient Gateway was updated to replace mockserver with wiremock now that mockserver is no longer supported. 
   * Clincal Encounter Service was updated to prevent double read call to EHRs for appointment reads through using an in memory cache. 

 
## 🏆 Sprint Goals and Stories
 rolled from previous sprint;🐞bug; 🚫 blocked;🧗‍♀️ pulled in after sprint started 
* 🟡 Build CES infrastructure to extend VAOS module with Oracle Health write-back capabilities
   *
* 🔵 Direct Scheduling
  * 🚧[#90599 CES-559 VPG: Enforce CTPS policy relationships restrictions during self-scheduling](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/90599)
  * 🚧 [#90606 VetsAPI: Add relationships endpoint](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/90606)
* 🟦 Support Oracle Health slot search
  * 🚧 [#91355 CES-841 CES 841: Support Slot search parameters specific to EHR](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/91355)
 
   
## ✈️ Planned Releases
