## VetsAPI Sprint 26 Planning
Sprint 25: 12/16/24 - 12/30/24

## 📅 Upcoming Dates  & 🏖️ PTO
  * Brad- 12/18-1/1/25
  * Devin- 12/19-12/26
  * Clayton- 12/23-1/3/25
  * Drew- 12/23-1/3/25
  * Brittany- 12/24, 12/31
  * Kenzie- 12/24-1/3/25

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
* 🟤 VetsAPI Logic Integration Support
   
## 📋 Previous Sprint Summary:
In Sprint 25 the team provided support for multiple features and initiatives, outlined as follows:  
* #### Backend support for Oracle Health to enable direct scheduling
   * (VPG-291) The Vets-API endpoint contract and examples for the vets-api/vaos relationships endpoint previously referenced a misleading type: relationships. This was updated to correctly reference a singular relationship in the contract.
* #### Backend Support for Oracle Health to Build CES Infrastructure
   * (CES-1357) Clinical Encounter Service was updated for the rules engine to utilize ces-ig objects instead of native FHIR, aligning with Drools’ current implementation.
   * (CES-1199) A bug was detected in Cerner Fhir Adapter where Department of Defense (DoD) appointments were being returned as appointments in the va.gov VAOS application. This bug was addressed to ensure that only VA appointments are returned.
* #### Vets API Logic Integration Support
   * (VPG-273)The logic for determining the type of an appointment was previously being done in vets-website and the mobile app.  This has now been moved into vets-api to ensure consistency and allow all vets-api consumers to make use of it.
   
* #### Appointment Requests
   * (VPG-23) VetsAPI Patient Gateway was updated to use ces-ig-java-lib for CesSlot and migrated to utilize CesAppointment.**
* #### Testing/Admin/Operational Support
   * (VPG-26) An investigation into potential performance issues with the /eligibility endpoints in VetsAPI Patient Gateway (VPG) revealed that long-running executions of the endpoint correlate with increased response times from the VAOS service. The analysis showed that VPG response times are nearly identical to those of VAOS, indicating that the performance limitations primarily stem from the VAOS service. 
   * (CES-1291) CES-IG-Java-Library, a library used by VetsAPI Patient Gateway, was updated to add missing fluent setters for CESAppointment.
   * (CES-1350) Clinical Encounter Service updated existing appointment tests to leverage methods in SlotUtils, preventing time zones and holidays from breaking integration tests.
   * (CES-1141) Clinical Encounter Service updated testing versions to reflect the current Vista Clinic Administration Services’ (VCAS) versioning. This ensures consistency with the VCAS version used in production for clinic data.
   * (VPG-29) Finalized research on Telehealth Appointments.

## 🏆 Sprint Goals and Stories
🚧 rolled from previous sprint;🐞bug; 🚫 blocked;🧗‍♀️ pulled in after sprint started 

* 🔴 Appointment Cancellation
   * [VPG-303 VPG: Add support for VVS_ADHOC VAOS source filter](https://issues.mobilehealth.va.gov/browse/VPG-303)

* 🟢 Appointment Requests
   * [CES-1423 CFA: Reads should receive cerner location ids and only call cerner directly](https://issues.mobilehealth.va.gov/browse/CES-1423)

*  🟤 VetsAPI Logic Integration Support
   * 🚧 [VPG-13 VetsAPI: implement FE logic for determining appointment modality](https://issues.mobilehealth.va.gov/browse/VPG-13) 


* 🟣 Testing/Admin/Operational Support
   * [VPG-293 VPG: Address constraints on SRVDD Resubmit](https://issues.mobilehealth.va.gov/browse/VPG-293)
  
* 🔵 Direct Scheduling
   * 🚧[CES-1299 CES: Determine EHR on appointment creation request](https://issues.mobilehealth.va.gov/browse/CES-1299)
   * [VPG-302 VetsAPI: add direct scheduling feature flag to appointment creation logic](https://issues.mobilehealth.va.gov/browse/VPG-302)
   * 🐞[VPG-296 VPG: Relationship requests without applySchedulingConfig throw 500](https://issues.mobilehealth.va.gov/browse/VPG-296)
   * 🚧 [VPG-292 vets-api: include failures array in relationships endpoint](https://issues.mobilehealth.va.gov/browse/VPG-292)

## ✈️ Planned Releases
