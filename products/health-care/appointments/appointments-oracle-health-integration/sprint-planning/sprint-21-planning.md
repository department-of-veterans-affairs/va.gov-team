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
* #### Backend support for Slot Search for Appointment Requests
*   * VetsAPI Patient Gateway addressed tech debt in resource package and improved test coverage.  
* #### Backend support for Oracle Health to enable Appointment Cancellation
*   * VetsAPI Patient Gateway addedd mapping to use the value returned by Cerner Fhir Adapter service type. 
* #### Testing/Admin/Operational Support
   * Documentation was improved to included additional information for local set up and testing. 

## 🏆 Sprint Goals and Stories
🚧 rolled from previous sprint;🐞bug; 🚫 blocked;🧗‍♀️ pulled in after sprint started 
* 🟡 Build CES infrastructure to extend VAOS module with Oracle Health write-back capabilities
     * [#93517 CES-918: Unify Slot Search Parameters](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/93517)
     * [#94553 CES-1121 VPG: Address tech debt in orchestration package](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/94553)
     * [#94576 CES-917: Unify appointment search parameters](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/94576)
     * [#94543 Migrate VAOS appointment specs to separate file](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/94543)
     * [#94552 CES-1119 VPG: Address tech debt in client package](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/94552) 
* 🔵 Direct Scheduling
   * [#94556 VPG: Test OH booked appointment reads](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/94556)
   * [#94549 CES-1117 VPG: Enforce Cerner patient self-scheduling constraint](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/94549)
* 🟦 Support Oracle Health slot search
  * [#94551 CES-542 VPG: add provider filter to Cerner slot search](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/94551) 
* 🔴 Appointment Cancellation
  * 🚧[#93509 CES-1036 VPG: map Appointment telehealth info from Cerner](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/93509)
  * [#94547 Remove unused feature flag for OH reads](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/94547)
  * [#81329 Add careType eligibility logic to cancellation business rules document](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/81329)
* 🟢 Appointment Requests
  * 🚧 [#92573 CES-945 CES: Support search by multiple ids for slots](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/92573)
  * [#94555 VPG: Test OH proposed appointment reads](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/94555) 
* 🟣 Testing/Admin/Operational Support
  * 🚧 [#93478 Add alternate global route for vaos module](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/93478)
  * [#94573 CES-1070 CES SRVDD update](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/94573)
  * [#94548 CES-1094 VPG: Enable SBA discovery](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/94548)
  * [#94574 CES-1092 CES: Enable SBA discvery](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/94574)

## ✈️ Planned Releases
