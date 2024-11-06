## VetsAPI Sprint 23 Planning
Sprint 23: 11/5/24 - 11/18/24

## 📅 Upcoming Dates  & 🏖️ PTO
* Brittany PTO 11/8/24
* Kenzie PTO 11/18/24


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
In Sprint 22 the team provided support for multiple features and initiatives, outlined as follows:  
* #### Backend support for Oracle Health to enable direct scheduling
   * Conducted tests on Oracle Health booked appointment reads, comparing results returned from VetsAPI Patient Gateway with those from VAOS direct appointments.
   * VetsAPI Patient Gateway was updated to  filter out missing ReasonCode coding elements from FHIR appointments
   * Enhanced VetsAPI Patient Gateway to populate the minutesDuration field for Oracle Health appointments, allowing VetsAPI consumers to access the time duration for all scheduled appointments.
   * Resolved a bug in VetsAPI Patient Gateway to ensure that default paging values are correctly applied on the Clinics endpoint.
   * Addressed a bug in VetsAPI Patient Gateway to update the endpoint, eliminating certain resource restrictions.
 * #### Backend support for Oracle Health to build CES infrastructure to extend VAOS module with Oracle Health write-back capabilities
    * Restricted certain resources in Clinical Encounter Service that are not currently available for use.
    * Updated Clinical Encounter Service to enhance test coverage and address existing logging issues. 
* #### Backend support for Oracle Health to enable Appointment Cancellation
   * VetsAPI was updated to add careType eligibility logic to cancellation business rules. 
   * VetsAPI removed the va_online_scheduling_enable_OH_reads feature flag since it is no longer used; documentation was updated to reflect this change.
* #### Backend support for Oracle Health to enable appointment requests
  * Conducted tests on Oracle Health appointment requests, comparing results returned from VetsAPI Patient Gateway with those from VAOS direct appointments.
* #### Testing/Admin/Operational Support
   * The property values used by VetsAPI Patient Gateway were documented in metadata.yaml and appropriate descriptions for each value  were updated to indicate whether they are optional or required.

## 🏆 Sprint Goals and Stories
🚧 rolled from previous sprint;🐞bug; 🚫 blocked;🧗‍♀️ pulled in after sprint started 
* 🟡 Build CES infrastructure to extend VAOS module with Oracle Health write-back capabilities
    * 🚧 [#94576 CES-917: Unify appointment search parameters](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/94576)
    * 🚧 [#94543 Migrate VAOS appointment sepcs to separate files](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/94543)
    * 🚧 [#95577 CES-1202: update to mobile-framework 2.2.0](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/95577) 
* 🔵 Direct Scheduling
    * [CES-1242: VPG: source veteran Cerner ID from mobile-mvi-service during eligibility check](https://issues.mobilehealth.va.gov/browse/CES-1242)
    * [CES-1270 CES: Determine EHR on appointment creation request](https://issues.mobilehealth.va.gov/browse/CES-1270)
    * [CES-1262 VPG: Check future provider ability during get relationships](https://issues.mobilehealth.va.gov/browse/CES-1262)
    * [CES-1243 VPG: Filter OH patient relationships by the OH TOC scheduling config relationship age](https://issues.mobilehealth.va.gov/browse/CES-1243)
* 🟣 Testing/Admin/Operational Support
  * 🚧 [#93478 Add alternate global route for vaos module](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/93478)
  * [CES-1266 Research moving Appointment modality logic from FE to BE](https://issues.mobilehealth.va.gov/browse/CES-1266)
  * [CES-1257 Research TH appts - executive summary](https://issues.mobilehealth.va.gov/browse/CES-1257)
  * [CES-1271 VPG: rework sameDay eligibility logic to consistently pass tests](https://issues.mobilehealth.va.gov/browse/CES-1271)
  * [CES-1268 VPG: remove unused cerner client paging code](https://issues.mobilehealth.va.gov/browse/CES-1268)
* 🔴 Appointment Cancellation
 
* 🟢 Appointment Requests

## ✈️ Planned Releases
