## VetsAPI Sprint 11 Planning
Sprint 11: 5/21/24 - 6/4/24

## 📅 Upcoming Dates

## 📣 Announcements
Brittany will be at PMR during the next sprint planning. Drew will ensure everything from Jira is represented in Zenhub. 

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
In Sprint 10, the team provided support for multiple features and initiatives, outlined as follows:
* #### Backend support for Oracle Health appointment cancellation to create backend architecture that will enable veterans to be able to cancel appointments within Oracle Health:
  * Testing occurred to ensure that appointments could be cancelled. Two bugs were found and work is ongoing to remedy the issues.  We have already patched cancellations sent to VetsAPI Patient Gateway that do not have a request body. Additionally we enabled cancellation of non-VAOS care types. 
*  #### Backend support for Oracle Health appointment requests to create backend architecture that will enable veterans to be able to request  appointments within Oracle Health:
   * In VetsAPI Patient gateway we added validation for Cerner site appointment.kind as well as serviceType validation to support new Oracle Health appointment requests. 
* #### Backend support to enable patient eligibility verification at Oracle Health sites for appointment requests and direct scheduling:
  * We determined patient appointment eligibility at Oracle Health facilities. If any of the required parameters are missing or have invalid values then a HTTP 400 error is returned. 
* #### Backend support to build VetsAPI Patient Gateway to extend VAOS with Oracle Health write-back capabilities: 
  * We updated Cerner Fhir Adapater to implement Patient/$relationship operation which was needed prior to the determining patient appointment eligibility at Oracle Health facilites. Additionally we removed CDW and FCDW references in VetsAPI Patient Gateway to make it more performant as they are non-essential service dependencies. 


## 🏆 Sprint Goals and Stories
🚧 rolled from previous sprint;🐞bug; 🚫 blocked;🧗‍♀️ pulled in after sprint started 
* 🟠 GOAL: Build vetsapi-patient-gateway to extend VAOS with Oracle Health write-back capabilities
  * [#83585 Update VetsAPI appointment_controller logging to reference VPG](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/83585)
  * [#82548 CES-457 CES: Use mobile-mvi-service cache-control headers to retrieve cached patient identifiers](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/82548)
  * [#81432 CES-318 CES: Migrate to mobile framework V2](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/81432) 
*  🟦 Support Oracle Health slot search
   * [#83515 CES-501 VPG: Optimized facility and clinic retrieval when mappling slots](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/83515)  
* 🔴 Appointment Cancellation
  * [#83557 CES-488 VPG: Some Cerner appointmenst are incorrectly flagged as cancellable](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/83557)
  * [#83550 CES-396 CPG: Return all OH Providers seen by patient at facility](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/83550) 
  * [#83349 VetsAPI: Route Appointment read and fetch request to VPG](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/83349)
* 🟣 Testing/Admin/Operational Support
  * [#82546 CES-510: VPG: Enable prometheus metric scraping](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/82546)
  * *🐞🧗‍♀️[#83754 Broken VAOS test breaking build](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/83754) - related to cancellations
## ✈️ Planned Releases
None
