## VetsAPI Sprint 6 Planning
Sprint 6: 3/12/24 - 3/25/24

## 📅 Upcoming Dates
Brittany will be OOO 3/19-3/21 

## 📣 Announcements
CTO slack channel: appointments-oracle-health-integrations
Post any DSU updates if you are unable to attend

## 🏆 Overarching Goals
* 🔴 Appointment Cancellation
* 🟢 Appointment Requests
  * 🟩 Add support for routing appointment requests to VetsAPI Patient Gateway
* 🔵 Direct Scheduling
  * 🟦 Support Oracle Health slot search
* 🟡 Onboarding and Integration
* 🟠 Build vetsapi-patient-gateway to extend VAOS with Oracle Health write-back capabilities

## 📋 Previous Sprint Summary:
In sprint 5 we  developed Caddy scripts that enable the ability to debug VetsAPI and Vets-website locally while connected to local instances of VetsAPI Patient Gateway (VPG) and MAP authentication services.  We also built a VPG endpoint that returns the site Scheduling configurations for a given list of site IDs in support of upstream appointment workflows.   Additionally, we updated VetsAPI to with a feature flag that will allow the appointment workflow to toggle between the existing vaos-service and the new VPG for backend support.

## 🏆 Sprint Goals and Stories
🚧 rolled from previous sprint 
* 🟦  GOAL: Support Oracle Health Slot Search
  * [#78057 Create Oracle Health appointment slot search feature flag](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/78057) 
  * [#76083 Search for open appt slot at OH facility](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/76083)
  *  [CES-220 VPG: Find Cerner appointmet slots](https://issues.mobilehealth.va.gov/browse/CES-220)
* 🟡 GOAL: Onboarding and Integration
   * [#78061 Document local development process](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/78061)
   * 🚧 [#75523 New VFS Team Member Template Jenna Gaze](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/75523)
* 🟠 GOAL: Build vetsapi-patient-gateway to extend VAOS with Oracle Health write-back capabilities
  * [CES-311 VPG: Update cancellable value on cerner appointments fetched from VAOS](https://issues.mobilehealth.va.gov/browse/CES-311)
  * [CES-302 VPG: Create facility configuration endpoint](https://issues.mobilehealth.va.gov/browse/CES-302)
  * [CES-315 CES: Support Appointment Search Date Param](https://issues.mobilehealth.va.gov/browse/CES-315)
* 🟩 GOAL: Add support for routing appointment requests to VetsAPI Patient Gateway
  * 🚧 [#77065 Add VPG routing feature flag](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/77065) - in QA check
  * 🚧[#77066 Implement optional VPG routing](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/77066) - in QA check
## ✈️ Planned Releases
None


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

