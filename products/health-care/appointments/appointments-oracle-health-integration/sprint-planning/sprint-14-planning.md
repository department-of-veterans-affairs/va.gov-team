## VetsAPI Sprint 14 Planning
Sprint 14: 7/2/24 - 7/15/24

## 📅 Upcoming Dates
Thursday July 4th is a federal holiday 

## 📣 Announcements & 🏖️ PTO
* Clayton PTO 7/11/24 - 7/16/24
* Brad PTO 7/5, 7/10, & 7/12
* Drew PTO 7/15/24 – 7/19/24

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
In Sprint 13, the team provided support for multiple features and initiatives, outlined as follows:
* #### Backend support for Oracle Health appointment cancellation to create backend architecture that will enable veterans to be able to cancel appointments within Oracle Health:
   * There was a redunddant flag that was removed and the VPG flag is able to be toggled on/off for specific logged in users to assist with testing. 
* #### Backend support for Oracle Health slot search to enable direct scheduling 
   * In VPG a valadation check was added for booked appointments to ensure that only valid solts are chosen for booked appointments. This is an extra precaution since the front end workflow should also do this.  

* #### Backend support to build VetsAPI Patient Gateway to extend VAOS with Oracle Health write-back capabilities: 
   * In VPG for a consumer of appointment data to be able to be notified when the read operation encounters a partial failure, there needed to be an added a failure payloads for VAOS and Cerner read requests. Now for each failure a message is logged at the error level that contains a UUID that matches the UUID on the error response.
   * In Clinical Encounter Service there is a need for incoming requests to run different sets of rules based on the EHR they are targeting. Rules were added to check which EHR was being targeted. 
   
 * #### Testing/Admin/Operational Support
   * Clinical Encounter Service was upgraded to use Mobile Framework 2.1
   * Instructions and documentation were updated for setting up local dev testing with mock data to include the lessons learned from local end to end testing done for appointment cancellations. 
   * Cerner Fhir Adapter was updated to to create an operation definition for the Patient.$find-cerner-id custom operation. This is now able to provide a complete description of the operation. 
   * A bug was found in VPG where performance of the Appointment read endpoint was considerably slower than the previously used VAOS endpoint. This bug was addressed and latency was mitgated. 

## 🏆 Sprint Goals and Stories
🚧 rolled from previous sprint;🐞bug; 🚫 blocked;🧗‍♀️ pulled in after sprint started 
* 🟠 GOAL: Build vetsapi-patient-gateway to extend VAOS with Oracle Health write-back capabilities
  * [#87492 CES-372 CES: Reenable and support rule for Vista Appointment Type validation](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/87492)
  * [#87491 CES-627 CES: Replace SAS vista appointment types with VFA vista appointment types](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/87491)
  * [#87314 CES-621: VPG: Update dependency deployment artifacts to latest available versions](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/87314)
  * [#87332 CES-485: VPG: migrate scheduling config calls from MFS to clinic-scheduling-config-service](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/87332)
  * [#84516 CES-564: VPG: Replace VAOS proxy calls with dedicated client](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/84516)
  * [#87372 CES-611: VPG: Update to pull Location data from Identifier](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/87372)
* 🟩 Add support for routing appointment requests to VetsAPI Patient Gateway
  * [#87483 CES-610: VPG: Return last seen date for each patient relationship](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/87483) 


## ✈️ Planned Releases
None
