## VetsAPI Sprint 6 Planning
Sprint 5: 3/12/24 - 3/25/24

## 📅 Upcoming Dates
Brittany will be OOO 3/19-3/21 

## 📣 Announcements
CTO slack channel: appointments-oracle-health-integrations
Post any DSU updates if you are unable to attend

## 📋 Sprint Summary:
we will need to include this every time as part of A6 reporting

🟠 goal is in PR/QA check ✅ goal is complete

* 🟠 Complete initial code changes for Oracle Health Site Cancellations
  * Update the vets-api backend with the code changes necessary to route appointment cancellations to Oracle Health sites.
  * Ensure that the updated workflow is protected behind a new feature flag.
still needs to be merged

## 🏆 Sprint Goals
🟡 goal the same from the previous sprint 🆕 new goal

* 🆕 GOAL: Add support for routing appointment requests to VetsAPI Patient Gateway
* 🆕 GOAL: Integrate MAP user services into local setup
* 🆕 GOAL: Enhance the VetsAPI Patient Gateway to provide scheduling configurations for OH sites
* 🆕 GOAL: Return Cerner Appointments
* 🟡 GOAL: Complete initial code changes for Oracle Health Site Cancellations
* 🟡 GOAL: Build vetsapi-patient-gateway to extend VAOS with Oracle Health write-back capabilities - this is a placeholder for VPG/CES work. This is more of an epic than a goal

* [#78080 Research new appointments options and determine implementation strategy](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/78080)
* [#78061 Document local development process](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/78061)
* [#78057 Create Oracle Health appointment slot search feature flag](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/78057) 
* [#76083 Search for open appt slot at OH facility](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/76083)
* [CES-311 VPG: Enable cancellation of VAOS appointments](https://issues.mobilehealth.va.gov/browse/CES-311)
* [CES-302 VPG: Create facility configuration endpoint](https://issues.mobilehealth.va.gov/browse/CES-302)
* [CES-315 CES: Support Appointment Search Date Param](https://issues.mobilehealth.va.gov/browse/CES-315) 

## ✈️ Planned Releases
None

## Sprint Tickets for Sprint 6
🟡 rolled from previous sprint 🆕 new goal

<details>
<summary>Tickets from previous sprint</summary>

## Sprint Tickets for Sprint 5
🟡 rolled from previous sprint 🆕 new goal
🟡 GOAL: Complete initial code changes for Oracle Health Site CAncellations
🟡 #75639 Update appointment PUT requests to use VPG - In QA
🆕 GOAL: Add support for routing appointment requests to VetsAPI Patient Gateway
Update the VetsAPI vaos module with the capability to toggle the routing of appointment operations between vaos-service and VPG. This will allow the flexibility to easily test and validate the expected VPG behavior in the staging environment.
#77065 Add VPG routing feature flag
#77066 Implement optional VPG routing
🆕 GOAL: Integrate MAP user services into local setup
The work completed in #75635 and #75636 enabled the VetsAPI developers to integrate locally between vets-website, vets-api, and VPG. In order to fully test the appointment workflow, MAP authentication services must also be deployed locally. Since vetsApi addresses all MAP services from a single gateway, a proxy must be employed to allow the routing of multiple local MAP services to a single address. Develop, document, and deploy a script to enable this proxy.
#77019 Research and create Caddy script to enable local VPG integration
🆕 GOAL: Enhance the VetsAPI Patient Gateway to provide scheduling configurations for OH sites
Research and add an endpoint to the VetsAPI Patient Gateway that will enable the ability to retrieve the scheduling configurations for a list of facilities, including Oracle Health facilities.
#77072 Research VetsAPI type of care determination workflow
CES-302 VPG: Create facility configuration endpoint
🆕 GOAL: Return Cerner Appointments
CES-110 CES: Return Cerner appointments from Appointment reads
CES-109 CES: Return Cerner appointments from Appointment searches
GOAL: Build vetsapi-patient-gateway to extend VAOS with Oracle Health write-back capabilities this is a placeholder for VPG/CES work. This is more of an epic than a goal
<details> 

