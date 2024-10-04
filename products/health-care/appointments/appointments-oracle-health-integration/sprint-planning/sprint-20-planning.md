## VetsAPI Sprint 20 Planning
Sprint 20: 9/24/24 - 10/7/24

## 📅 Upcoming Dates  & 🏖️ PTO
* Brittany in all day in-person meetings  9/24 & 9/25
* Clayton out for apptointment 9/25
* Drew out for apptointment 10/2


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
  * Updated VetsAPI Patient Gateway to utilize the new CesSlot class defined by the Clinical Encounter Service Integration Guide (CES IG), ensuring proper resolution of Practitioner and Location information from Cerner FHIR Adapter (CFA).
* #### Backend support for Oracle Health to build CES infrastructure to extend VAOS module with Oracle Health write-back capabilities
  * Researched options for toggling the VAOS backend URL, determining that the approach for swapping VAOS endpoints would depend on the status of VetsAPI Patient Gateway integration points at the time of the switch. Solutions for both scenarios have been identified and documented in the Github issue.
  * Migrated EHR determination out of the PreEnrichment step in Clinical Encounter Service (CES); this early decision will facilitate better troubleshooting as EHR determination processes become more complex.
  * Added comprehensive tests for the mappers package in VetsAPI Patient Gateway, achieving 100% line and branch coverage.
  * Applied the EHR Source extension to resources fetched by search in Clinical Encounter Service; this extension was previously applicable only to read resources but was updated to include resources retrieved through searches.
  * Refactored Clinical Encounter Service for EHR Source Determination to implement the Strategy pattern, leveraging enricher factories to enhance robustness.
* #### Backend support for Slot Search for Appointment Requests
   * Added the serviceTypes endpoint in VetsAPI Patient Gateway to retrieve supported clinical service types for scheduling. 
* #### Testing/Admin/Operational Support
   * Resubmitted VetsAPI Patient Gateway for approval from the VA Mobile Framework Architecture Team (VAMFAT) due to the addition of new endpoints in the service.
 
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
