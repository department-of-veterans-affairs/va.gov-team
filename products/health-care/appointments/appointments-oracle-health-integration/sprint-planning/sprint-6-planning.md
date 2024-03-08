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

✅ GOAL: Onboard New Team Members ** Ensure that all team members have completed the items listed in the VFS new team member template
✅ GOAL: Ensure that all developers have VetsAPI integrated locally
Each team member that will be developing against VetsAPI code should have a working setup on their local machine.
This will include vets-website and vets-api, as well as the services hosted by the Mobile Application Platform (MAP) - VetsApi Patient Gateway (VPG), mobile-facility-service, and user-service.
🟠 Complete initial code changes for Oracle Health Site Cancellations Update the vets-api backend with the code changes necessary to route appointment cancellations to Oracle Health sites. Ensure that the updated workflow is protected behind a new feature flag.
still needs to be merged

## 🏆 Sprint Goals
🟡 goal the same from the previous sprint 🆕 new goal

* 🆕 GOAL: Add support for routing appointment requests to VetsAPI Patient Gateway
* 🆕 GOAL: Integrate MAP user services into local setup
* 🆕 GOAL: Enhance the VetsAPI Patient Gateway to provide scheduling configurations for OH sites
* 🆕 GOAL: Return Cerner Appointments
* 🟡 GOAL: Complete initial code changes for Oracle Health Site Cancellations
* 🟡 GOAL: Build vetsapi-patient-gateway to extend VAOS with Oracle Health write-back capabilities - this is a placeholder for VPG/CES work. This is more of an epic than a goal

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

## Sprint Tickets for Sprint 6
🟡 rolled from previous sprint 🆕 new goal
