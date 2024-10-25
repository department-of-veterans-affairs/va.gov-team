## VetsAPI Sprint 21 Planning
Sprint 22: 10/22/24 - 11/5/24

## 📅 Upcoming Dates  & 🏖️ PTO
* Devin PTO 10/20/24- 10/24/24
* Brittany PTO 11/8/24


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
In Sprint 21 the team provided support for multiple features and initiatives, outlined as follows:  
* #### Backend support for Oracle Health to enable direct scheduling
  * Updated VetsAPI Patient Gateway to enforce configurable constraints on desired appointment dates for directly booked appointments. The gateway now disallows appointments with either a 1) current date or 2) a date occurring after the configurable threshold (default setting is 390 days).
* #### Backend support for Oracle Health to build CES infrastructure to extend VAOS module with Oracle Health write-back capabilities
   * Enhanced Clinical Encounter Service to unify slot search parameters, moving away from custom search parameters based on EHR.
   * Updated the gov.va.mobile.vpg.v1.orchestration and client packages to respond to SCA findings, improve test coverage and resolve tech debt.
* #### Backend support for Slot Search for Appointment Requests
   * Implemented a new "provider" filter option in the VPG Slot search endpoint of VetsAPI Patient Gateway.
* #### Backend support for Oracle Health to enable Appointment Cancellation
   * Updated the orchestration layer and FHIR mappers in VetsAPI Patient Gateway to populate responses from Oracle Health appointment searches with telehealth information.
* #### Backend support for Oracle Health to enable appointment requests
  *  Enhanced Clinical Encounter Service to support searching for slots using multiple IDs.
* #### Testing/Admin/Operational Support
   * Addressed technical debt to ensure that services are configured to be discoverable by Spring Boot Admin in both the Clinical Encounter Service and VetsAPI Patient Gateway.
   * Updated the CES service design document to accurately reflect all current capabilities of the service.
 
## 🏆 Sprint Goals and Stories
🚧 rolled from previous sprint;🐞bug; 🚫 blocked;🧗‍♀️ pulled in after sprint started 
* 🟡 Build CES infrastructure to extend VAOS module with Oracle Health write-back capabilities
    * 🚧 [#94576 CES-917: Unify appointment search parameters](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/94576)
    * [#95614 CES-1208: Add restrict resource list](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/95614)
    * [#95612 CES-1166: Address logging issues and test coverage](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/95612)
    * [#94543 Migrate VAOS appointment sepcs to separate files](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/94543)
    * [#95577 CES-1202: update to mobile-framework 2.2.0](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/95577) 
* 🔵 Direct Scheduling
   * 🚧 [#94556 VPG: Test OH booked appointment reads](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/94556)
   * [#95579 CES-1200: VPG: filter out missing ReasonCode Coding elements from FHIR Appointments](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/95579)
   * [#95578 CES-1201: VPG: Populate minutesDuration field for Cerner appointments](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/95578)
   * 🧗‍♀️🐞[#95850 CES-1234: VPG: ensure that default paging values are used on Clinics endpoint](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/95850)
   *  🧗‍♀️🐞 [#95753 CES-1214: VPG: clinics endpoints is incorrectly enforcing JWT resource constraints](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/95753)  
* 🔴 Appointment Cancellation
  * [#81329 Add careType eligibility logic to cancellation business rules document](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/81329)
  * 🚧 [#94547 Remove unused feature flag for OH reads](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/94547)
* 🟢 Appointment Requests
  * [#94555 VPG: Test OH proposed appointment reads](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/94555) 
* 🟣 Testing/Admin/Operational Support
  * 🚧 [#93478 Add alternate global route for vaos module](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/93478)
  * [#95576 CES-1203: VPG: add property value descriptions](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/95576)


## ✈️ Planned Releases
