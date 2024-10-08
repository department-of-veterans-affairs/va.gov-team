## VetsAPI Sprint 21 Planning
Sprint 21: 10/8/24 - 10/21/24

## 📅 Upcoming Dates  & 🏖️ PTO
* Indigenous Peoples Day 10/14/24 - observed 
* Devin PTO 10/18/24 - 10/24/24


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
In Sprint 20, the team provided support for multiple features and initiatives, outlined as follows:  
* #### Backend support for Oracle Health to enable direct scheduling
  * Redirect vets api clinics endpoint to send requests to VetsAPI Patient Gateway
* #### Backend support for Oracle Health to build CES infrastructure to extend VAOS module with Oracle Health write-back capabilities
  * VetsAPI Patient Gateway added named exceptions for handled scenarios to improve the quality of the summary information provided by grafana. 
  * Clinical Encounter Service was improved to allow rules engine to run on return fetch requests. 
  * The previous way of determining wheather a site is a Vista Site of an Oracle Health site was deprecated. VetsAPI Patient Gateway was updated so now site EHR checks use mobile-facility-service for this information.
  * VetsAPI Patient Gateway addressed tech debt in resource package and improved test coverage. 
* #### Backend support for Slot Search for Appointment Requests
  * [#93513 CES-1049 VPG: add tests for validation package](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/93513)
* 🔴 Appointment Cancellation
   * [#93516 CES-1059 VPG: add appointment.kind mapping](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/93516)


* #### Testing/Admin/Operational Support
   * 🚧 [#92571 Improve documentation of local setup and testing](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/92571)


   * 
 
## 🏆 Sprint Goals and Stories
🚧 rolled from previous sprint;🐞bug; 🚫 blocked;🧗‍♀️ pulled in after sprint started 
* 🟡 Build CES infrastructure to extend VAOS module with Oracle Health write-back capabilities
     * [#93517 CES-918: Unify Slot Search Parameters](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/93517)
* 🟦 Support Oracle Health slot search
    * 
* 🔵 Direct Scheduling
* 🔴 Appointment Cancellation
*    * 🚧[#93509 CES-1036 VPG: map Appointment telehealth info from Cerner](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/93509)
* 🟢 Appointment Requests
*    * 🚧 [#92573 CES-945 CES: Support search by multiple ids for slots](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/92573)
* 🟣 Testing/Admin/Operational Support
     * 🚧[#93478 Add alternate global route for vaos module](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/93478)

## ✈️ Planned Releases
