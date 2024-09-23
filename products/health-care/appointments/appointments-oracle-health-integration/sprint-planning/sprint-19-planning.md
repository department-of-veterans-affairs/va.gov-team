## VetsAPI Sprint 19 Planning
Sprint 19: 9/10/24 -  9/23/24

## 📅 Upcoming Dates  & 🏖️ PTO
* Drew 1/2 day PTO 9/13 & all day 9/16
* note Brad and Clayton were out sick at the start of this sprint

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
 
## 📋 Previous Sprint Summary:
In Sprint 18, the team provided support for multiple features and initiatives, outlined as follows:  
* #### Backend support for Oracle Health to enable direct scheduling
  *  Updated VetsAPI Patient Gateway (VPG) to restrict veteran self-scheduling based on policies provided by the Cerner Terminology Policy Service.
  *  Implemented a patient/relationship retrieval endpoint in VetsAPI, utilizing the same parameters provided by VPG to inform eligibility for direct scheduling operations.
  *  Addressed timing issues present in integration tests for VPG, with the goal of increasing build reliability and deployment speed.
  *  Added upstream error reporting for relationship searches in VPG to access information related to partial service failures when searching for relationships.
  *  Modified VPG to use a Spring-based cache provider for cache handling on the Relationships endpoint, eliminating the need for manual cache refreshes.

* #### Backend support for Slot Search for Oracle Health 
   * Updated Clinical Encounter Service to include new search parameters specific to the Electronic Health Record (EHR)
* #### Backend support for Slot Search for Appointment Requests
   * Enhanced VetsAPI Patient Gateway by adding an AppointmentSource filter to the VAOS appointment search, allowing the filtering out of Oracle Health results from appointment searches
* #### Testing/Admin/Operational Support
  * Updated VetsAPI Patient Gateway's service design document to include the latest endpoint definitions.
 
## 🏆 Sprint Goals and Stories
 rolled from previous sprint;🐞bug; 🚫 blocked;🧗‍♀️ pulled in after sprint started 
* 🟡 Build CES infrastructure to extend VAOS module with Oracle Health write-back capabilities
   * [#91635 VetsAPI: Research options for toggling vaos backend url](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/91635)
   * [#91655 CES-916: Migrate EHR determination out of PreEnrichment step](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/91655)
   * [#92556 CES-989 VPG: add tests for mappers package](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/92556)
   * [#92560 CES-988 VPG: add named exceptions for handled scenarios](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/92560)
   * 🧗‍♀️[#93094 CES-1025 CES: Apply Ehr Source extension to resources fetched by search](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/93094)
* 🔵 Direct Scheduling
   * [#92579 CES-969 VPG: implement ces-ig library for CFA Slot search](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/92579)
* 🟦 Support Oracle Health slot search
    * [#92573 CES-945 CES: Support search by multiple ids for slots](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/92573)
* 🟢 Appointment Requests
   * [#92507 CES-948 VPG: implement serviceTypes endpoint](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/92507)
* 🟣 Testing/Admin/Operational Support
   * [#92508 CES-957 VPG: VAMFAT Submit Updates](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/92508)
   * [#92571 Improve documentation of local setup and testing](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/92571)
* ### waiting for epic to be added
   * [#92572 CES-983 CES: Refactor EHRSource determination to use Strategy pattern](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/92572)

 
 
   
## ✈️ Planned Releases
