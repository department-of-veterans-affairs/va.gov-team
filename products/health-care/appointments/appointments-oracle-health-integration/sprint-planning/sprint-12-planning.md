## VetsAPI Sprint 12 Planning
Sprint 12: 6/5/24 - 6/17

## 📅 Upcoming Dates

## 📣 Announcements & 🏖️ PTO
* Brittany will be at PMR 6/3 - 6/6
* Drew & Clayton will ensure everything from Jira is represented in Zenhub.
* Before we do prod deployments we need to let the SRE team know so they can be prepared to monitor 

## 🏆 Overarching Goals
* 🔴 Appointment Cancellation
* 🟢 Appointment Requests
  * 🟩 Add support for routing appointment requests to VetsAPI Patient Gateway
  * 🟩 🟦 Implement Patient Eligibility verification at Oracle Health sites 
* 🔵 Direct Scheduling
  * 🟦 Support Oracle Health slot search
  *  🟩 🟦 Implement Patient Eligibility verification at Oracle Health sites
* 🟠 Build vetsapi-patient-gateway to extend VAOS with Oracle Health write-back capabilities
* 🟣 Testing/Admin/Operational Support
 
## 📋 Previous Sprint Summary:
In Sprint 11, the team provided support for multiple features and initiatives, outlined as follows:
* #### Backend support for Oracle Health appointment cancellation to create backend architecture that will enable veterans to be able to cancel appointments within Oracle Health:
  *  Some Oracle Health appointments were incorrectly flagged as cancellable in VetsAPI Patient Gateway (VPG). We were able to reproduce the issue and make adjustments to first attempt to read the resource from CFA, and if not found then VPG attempts to read it from VAOS Service. Also in VPG we made updates to return all Oracle Health Providers seen by patient at a facility. We made updates to route appointments read and fetch requests to VPG rather than VAOS if certain feature flags are set. Finally, in VPG we added VAOS error details to empty read response to help provide clearer error messaging. 
* #### Backend support for Oracle Health slot search to enable direct scheduling 
   * In VPG, we optimized facility and clinic retrieval when mapping slots by only only evaluating calls to Mobile Facility Service once per search. 
* #### Backend support to build VetsAPI Patient Gateway to extend VAOS with Oracle Health write-back capabilities: 
  * We migrated Clinical Encounter Service to us Mobile Framework v2 to ensure we have the service on the latest version of the shared library. 
 * #### Testing/Admin/Operational Support
   *  We discovered a bug that had caused unit tests in the VAOS module to be broken after merging the PR to route appointment read and fetch requests to VPG. We mitigated the bug to resume testing. Additionally we enable prometheus metric scraping in VPG to be able to get prometheus metric data available in Grafana in SQA.  

## 🏆 Sprint Goals and Stories
🚧 rolled from previous sprint;🐞bug; 🚫 blocked;🧗‍♀️ pulled in after sprint started 
* 🟠 GOAL: Build vetsapi-patient-gateway to extend VAOS with Oracle Health write-back capabilities
   * [#82548 CES-457 CES: Use mobile-mvi-service cache-control headers to retrieve cached patient identifiers](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/82548)
   * [#81339 CES-427: VPG: Migrate to Mobile Framework V2](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/81339)
   * 🐞🧗‍♀️[#85130 CS-569 VPG: error handling requests without statuses input value](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/85130)
   * 🚧[#83585 Update VetsAPI appointment_controller logging to reference VPG](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/83585)
   * [#54357 CES-565: Identify and add supporting user data for VPG](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/84357)
*  🟦 Support Oracle Health slot search
   * [#84622 CES-398 CES: Support reading cerner slots](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/84622)
* 🔴 Appointment Cancellation
   * [#84519 CES-528: VPG: execute cerner and VAOS operations in parallel](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/84519)
   * [#84520 CES-525 VPG: replace calls to deprecated CFA serviceType field](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/84520)
   * [#84592 VetsAPI: add user scope to Appointment read feature flag eval](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/84592) 
* 🟣 Testing/Admin/Operational Support
  * [#84612 VetsAPI: Requesting Judy Morrison's appointments in staging returns 500](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/84612)
  * [#84517 CES-546 VPG: address constraints on SRVDD](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/84517)
  * 🧗‍♀️[#85760 CES-584 CES: Upgrade to MF v2.1](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/85760) 
## ✈️ Planned Releases
None
