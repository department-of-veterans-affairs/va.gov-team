## VetsAPI Sprint 10 Planning
Sprint 10: 5/7/24 - 5/20/24

## 📅 Upcoming Dates

## 📣 Announcements
CTO slack channel: appointments-oracle-health-integrations
DSU will now be on slack T/Th and on zoom WMF at 11 am EST

## 🏆 Overarching Goals
* 🔴 Appointment Cancellation
* 🟢 Appointment Requests
  * 🟩 Add support for routing appointment requests to VetsAPI Patient Gateway
  * 🟩 🟦 Implement Patient Eligibility verification at Oracle Health sites 
* 🔵 Direct Scheduling
  * 🟦 Support Oracle Health slot search
  *  🟩 🟦 Implement Patient Eligibility verification at Oracle Health sites
* 🟠 Build vetsapi-patient-gateway to extend VAOS with Oracle Health write-back capabilities
* 🟣 Testing/Admin
 
## 📋 Previous Sprint Summary:
In Sprint 9, the team provided support for multiple features and initiatives, outlined as follows::
* #### Backend support for Oracle Health appointment requests to create backend architecture that will enable veterans to be able to request  appointments within Oracle Health:
  * Added facility validations to appointment request creations to ensure that requests can only be created at Facilities that have an appropriate classification and operating status.
  * Updated mapping to not set the ID for VAOS appointments to ensure that VPG properly sets the Id field of a newly created Cerner site Appointment
* #### Backend support to enable patient eligibility verification at Oracle Health sites for appointment requests and direct scheduling:
  * We determined patient appointment eligibility at Oracle Health facilities in Clinical Encounter Service
  * We implemented Oracle Health patient validation for eligibility checks in VetsAPI Patient Gateway
* #### Backend support to build VetsAPI Patient Gateway to extend VAOS with Oracle Health write-back capabilities
  * Investigated Oracle Health search occasional test failures


## 🏆 Sprint Goals and Stories
🚧 rolled from previous sprint;🐞bug; 🚫 blocked;🧗‍♀️ pulled in after sprint started 
* 🟠 GOAL: Build vetsapi-patient-gateway to extend VAOS with Oracle Health write-back capabilities
  * [#82556 CES-460:CFA: Implement Patient/$relationships operation](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/82556)
  * [#82548 CES-457 CES: Use mobile-mvi-service cache-control headers to retrieve cached patient identifiers](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/82548)
  * [#82456 CES-462: VPG: Remove CDW and FCDW references](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/82456)
* 🟩 Add support for routing appointment requests to VetsAPI Patient Gateway
  * [#81348 Research options for adding mock appointment data to CES](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/81348)
  * [#82508 Reseach and document VAOS module VAMF authentication pattern](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/82508)
* 🟢 Appointment Requests
  * [#82459 CES-430 VPG:add validation for Cerner site appointment.kind](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/81349)
  * [#82459: CES-426 VPG: add serviceType validation for new Cerner Appointment requests](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/82459)
* 🟩 🟦 SUB-GOAL Eligibility
  * 🚧 [#81431 CES-423 CES: Determine patient Appointment eligibility at OH facility](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/81431)
* 🔴 Appointment Cancellation
  * 🚧 [#81438 ces-312: VPG: Allow cancellation of non-VAOS care types](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/81438)
  * 🧗‍♀️ [#82886 Testing cancellations](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/82886)
  * 🧗‍♀️🐞[#82750 Bug: PATCH cancellations sent to VPG have no request body](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/82750)
  
## ✈️ Planned Releases
None
