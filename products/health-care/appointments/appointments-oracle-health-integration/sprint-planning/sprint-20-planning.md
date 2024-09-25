## VetsAPI Sprint 20 Planning
Sprint 20: 9/24/24 - 10/7/24

## 📅 Upcoming Dates  & 🏖️ PTO
* Brittany in all day in-person meetings  9/24 & 9/25
* Drew and Clayton out for appts 9/25


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
 
## 📋 Previous Sprint Summary:
In Sprint 19, the team provided support for multiple features and initiatives, outlined as follows:  
* #### Backend support for Oracle Health to enable direct scheduling
  * [#92579 CES-969 VPG: implement ces-ig library for CFA Slot search](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/92579)

* #### Backend support for Oracle Health to build CES infrastructure to extend VAOS module with Oracle Health write-back capabilities
*  * [#91635 VetsAPI: Research options for toggling vaos backend url](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/91635)
   * [#91655 CES-916: Migrate EHR determination out of PreEnrichment step](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/91655)
   * [#92556 CES-989 VPG: add tests for mappers package](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/92556)
   * 🧗‍♀️[#93094 CES-1025 CES: Apply Ehr Source extension to resources fetched by search](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/93094)
   * [#92572 CES-983 CES: Refactor EHRSource determination to use Strategy pattern](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/92572)
* #### Backend support for Slot Search for Appointment Requests
   * [#92507 CES-948 VPG: implement serviceTypes endpoint](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/92507)
* #### Testing/Admin/Operational Support
   * [#92508 CES-957 VPG: VAMFAT Submit Updates](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/92508)

 
## 🏆 Sprint Goals and Stories
🚧 rolled from previous sprint;🐞bug; 🚫 blocked;🧗‍♀️ pulled in after sprint started 
* 🟡 Build CES infrastructure to extend VAOS module with Oracle Health write-back capabilities
    * 🚧 [#92560 CES-988 VPG: add named exceptions for handled scenarios](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/92560)
    * [#93517 CES-918: Unify Slot Search Parameters](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/93517)
    * [#93518 CES-1065: Allow rules engine to run on return](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/93518)
    * [#93510 CES-1037 VPG: Update site EHR checks to use mobile-facility-service](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/93510)
    * [#93515 CES-1053 VPG: Address tech debt in resources package](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/93515)
* 🟦 Support Oracle Health slot search
    * [#92573 CES-945 CES: Support search by multiple ids for slots](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/92573)
* 🔵 Direct Scheduling
   * [#93475 Redirect vets-api clinics endpoint to VPG](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/93475)
* 🟢 Appointment Requests
  * [#93513 CES-1049 VPG: add tests for validation package](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/93513)
* 🔴 Appointment Cancellation
   * [#93516 CES-1059 VPG: add appointment.kind mapping](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/93516)
   * [#93509 CES-1036 VPG: map Appointment telehealth info from Cerner](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/93509)
* 🟣 Testing/Admin/Operational Support
   * 🚧 [#92571 Improve documentation of local setup and testing](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/92571)
   * [#93478 Add alternate global route for vaos module](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/93478)
## ✈️ Planned Releases
