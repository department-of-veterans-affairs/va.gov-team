## VetsAPI Sprint 13 Planning
Sprint 13: 6/18/24-7/1/24

## 📅 Upcoming Dates

## 📣 Announcements & 🏖️ PTO
* This is a lighter sprint due to Apothesource's Company Retreat. 
* Brittany, Brad, and Clayton will be OOO 6/20/24 - 6/24/24
* Drew will be OOO 6/20/24-6/28/24

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
In Sprint 12, the team provided support for multiple features and initiatives, outlined as follows:
* #### Backend support for Oracle Health appointment cancellation to create backend architecture that will enable veterans to be able to cancel appointments within Oracle Health:
  * In VetsAPI we removed a redundant feature flag. Now the Appointment Read requests are updated to route to VetsAPI Patient Gateway if va_online_scheduling_use_vpg is enabled. We also updated VetsAPI Patient Gateway (VPG) to replace calls to deprecated serviceType field. VPG now works so all Appointments that are returned by VPG populate Appointment.serviceTypes. We also enhance VPGby making it more performant by reworking the Appointment search method to execute in parallelfor  both VAOS and Cerner in sequence. 
* #### Backend support for Oracle Health slot search to enable direct scheduling 
   *  In Clinical Encounter Service (CES) we added the ability for CES to not only allows the direct reading by ID of slots that exist in Vista, but now also allows direct reading in Oracle Health. 
* #### Backend support to build VetsAPI Patient Gateway to extend VAOS with Oracle Health write-back capabilities: 
  * In VetsAPI we updated appointment_controller logging to reference VetsAPI patient Gateway (VPG) rather than VAOS. To improve latency we updated CES to use Mobile MVI Service cache-control headers to retrieve cached patient identifiers. We also updated Cerner-mock to identify and add supporting user data for VPG to ensure more accurate testing. We resolved a bug in VPG for error handling requests without statuses input value as well as migrated to the latest version of Mobile Framework. 
 * #### Testing/Admin/Operational Support
   * We updated VetsAPI for testing cancellations and addressed SRVDD constrainted identified by the VAMFAT approval board. 
## 🏆 Sprint Goals and Stories
🚧 rolled from previous sprint;🐞bug; 🚫 blocked;🧗‍♀️ pulled in after sprint started 
* 🟠 GOAL: Build vetsapi-patient-gateway to extend VAOS with Oracle Health write-back capabilities
   * [#86172 CES-539 VPG: Add failure payloads for VAOS and Cerner read requests](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/86172)
   * [#86263 CES-609 CES: Separate Rules by EHR](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/86263)
* 🔵 Direct Scheduling
   * [#86152 CES-543 VPG:add validation check for booked appointments](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/86152) 
* 🔴 Appointment Cancellation
   * [#84592 VetsApi: consolidate Appointment read feature flag with use_vpg](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/84592)
* 🟣 Testing/Admin/Operational Support
   * 🚧[#85760 CES-584 CES: Upgrade to MF v2.1](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/85760)
   * [#86175 Update local-dev-testing instructions with mock data setup](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/86175)
   * [#86268 CES-607: CES-607 document CFA - add operation definition for Patient.$find-cerner-id operation](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/86268)
   * 🐞[#86151 CES-605 VPG: Address performance issues with consolidated Appointment read endpoint](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/86151)
## ✈️ Planned Releases
None
