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
  *  * 🚧[#90599 CES-559 VPG: Enforce CTPS policy relationships restrictions during self-scheduling](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/90599)
  * 🚧 [#90606 VetsAPI: Add relationships endpoint](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/90606)
  * [#91626 CES-504 VPG: address timing issues with integration tests](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/91626)
  * [#91621 CES-869 VPG: add upstream error reporting for relationship searches](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/91621)
  * [#91620 CES-870 VPG: modify relationships cache to use spring for TTL and eviction](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/91620)

* #### Backend support for Slot Search for Oracle Health 
   * CES-841
* #### Backend support for Slot Search for Appointment Requests
   * CES-854
* #### Testing/Admin/Operational Support
  * CES-852 
 
## 🏆 Sprint Goals and Stories
 rolled from previous sprint;🐞bug; 🚫 blocked;🧗‍♀️ pulled in after sprint started 
* 🟡 Build CES infrastructure to extend VAOS module with Oracle Health write-back capabilities
   * [#91635 VetsAPI: Research options for toggling vaos backend url](https://docs.google.com/spreadsheets/d/1N7jyeqE2yQYMHradtHkfMh2TfcgbUJezSI52D0Ig71U/edit?usp=sharing)
   * [#91655 CES-916: Migrate EHR determination out of PreEnrichment step](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/91655)
   * [#92556 CES-989 VPG: add tests for mappers package](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/92556)
   * [#92560 CES-988 VPG: add named exceptions for handled scenarios](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/92560)
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
