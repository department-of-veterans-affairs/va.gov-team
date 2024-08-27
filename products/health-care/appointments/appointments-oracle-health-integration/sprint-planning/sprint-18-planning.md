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
In Sprint 17, the team provided support for multiple features and initiatives, outlined as follows:  
* #### Backend support for Oracle Health to enable direct scheduling
  * Updated VetsAPI Patient Gateway (VPG) to retrieve VistA clinics with established patient relationships.
  * Addressed technical debt by removing identifier payload from converted FHIR appointments to eliminate confusion regarding appointment sourcing.
  * Enhanced VPG to utilize the latest available filters for Oracle Health relationship data.
  * Added test cases to the slot search capability to ensure robustness of the service.
  * Removed sources array from the relationships endpoint.

* #### Backend support for Oracle Health to build CES infrastructure to extend VAOS module with Oracle Health write-back capabilities 
   * Added support for the "_id" search parameter in the Clinical Encounter Service to enhance search capabilities.
   * Updated VetsAPI Patient Gateway to replace mockserver with WireMock, given the discontinuation of mockserver support.
   * Modified Clinical Encounter Service to prevent redundant read calls to EHRs for appointment reads by implementing an in-memory cache.

 
## 🏆 Sprint Goals and Stories
 rolled from previous sprint;🐞bug; 🚫 blocked;🧗‍♀️ pulled in after sprint started 
* 🟡 Build CES infrastructure to extend VAOS module with Oracle Health write-back capabilities
   * #91635 VetsAPI: Research options for toggling vaos backend url
   * #91655 CES-916: Migrate EHR determination out of PreEnrichment step 
* 🔵 Direct Scheduling
  * 🚧[#90599 CES-559 VPG: Enforce CTPS policy relationships restrictions during self-scheduling](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/90599)
  * 🚧 [#90606 VetsAPI: Add relationships endpoint](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/90606)
  * #91626 CES-504 VPG: address timing issues with integration tests
  * #91621 CES-869 VPG: add upstream error reporting for relationship searches
  * #91620 CES-870 VPG: modify relationships cache to use spring for TTL and eviction
* 🟦 Support Oracle Health slot search
  * 🚧 [#91355 CES-841 CES 841: Support Slot search parameters specific to EHR](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/91355)
* 🔴 Appointment Cancellation
  * #91624 CES-851 VPG: remove unused patch orchestration code
* 🟢 Appointment Requests
  * #91622 CES-854 VPG: add Appointment Source filter to VAOS appointment search
* 🟣 Testing/Admin/Operational Support
  * #91623 CES-852 VPG: update SRVDD With latest endpoint definitions  
 
   
## ✈️ Planned Releases
