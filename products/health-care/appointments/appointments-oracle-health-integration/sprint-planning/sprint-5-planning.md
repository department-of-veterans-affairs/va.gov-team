# VetsAPI Sprint 5 Planning 
Sprint 5: 2/27/24 - 3/11/24

## 📅 Upcoming Dates 


## 📣 Announcements 
### CTO slack channel: appointments-oracle-health-integrations 

_Post any DSU updates if you are unable to attend_ 

## 📋 Sprint Summary: 
_we will need to include this every time as part of A6 reporting_

🟠 goal is in PR/QA check :white_check_mark: goal is complete
* :white_check_mark: GOAL: Onboard New Team Members
** Ensure that all team members have completed the items listed in the VFS new team member template
* :white_check_mark: GOAL: Ensure that all developers have VetsAPI integrated locally
  * Each team member that will be developing against VetsAPI code should have a working setup on their local machine.
  * This will include vets-website and vets-api, as well as the services hosted by the Mobile Application Platform (MAP) - VetsApi Patient Gateway (VPG), mobile-facility-service, and user-service. 
* 🟠 Complete initial code changes for Oracle Health Site Cancellations
Update the vets-api backend with the code changes necessary to route appointment cancellations to Oracle Health sites.  Ensure that the updated workflow is protected behind a new feature flag.
   * still needs to be merged 

## 🏆 Sprint Goals
🟡 goal the same from the previous sprint 🆕 new goal

* 🆕 GOAL: Add support for routing appointment requests to VetsAPI Patient Gateway
* 🆕 GOAL: Integrate MAP user services into local setup
* 🆕 GOAL: Enhance the VetsAPI Patient Gateway to provide scheduling configurations for OH sites
* 🆕 GOAL: Return Cerner Appointments
* 🟡 GOAL: Complete initial code changes for Oracle Health Site Cancellations
* 🟡 GOAL: Build vetsapi-patient-gateway to extend VAOS with Oracle Health write-back capabilities - this is a placeholder for VPG/CES work. This is more of an epic than a goal 


## Planned Releases
None

<details>
<summary>Tickets from previous sprint</summary>
	
## Sprint Tickets from previous sprint
|Ticket | Status | Notes |
|-----:|-----------:| -----:|
|     New VFS Team Member Template Brittany Fowler #73592| Closed|  rolled to sprint 4 |
|    SOCKS access for Brad Crosby #75371|Closed  |  Closed |
|     VetsAPI: Determine routing strategy for Oracle Health appointment requests #75505| Closed      | rolled to sprint 4  |
|     VetsAPI: Analyze VPG contract and determine appointment cancellation workflow and requirements #75506| Closed       | rolled to sprint4  |
|     VetsAPI: Research and document required tasks for connecting VetsAPI VAOS module to VPG #75507| Closed    |  rolled to sprint 4 |
|     New VFS Team Member Jenna Gaze #75523| In progress      |rolled to sprint 4   |
|     New VFS Team Member Clayton Hickock #75644| Closed  |  rolled to sprint 4 |
|     Complete integrated local setup - Devin #75636 |Closed    | Closed   |
|     Complete integrated local setup - Drew #75635| Closed       | Closed   |
|     Create Oracle Health cancellation feature flag #75638 | In QA      |  added to sprint 4  |
|     Update appointment PUT requests to use VPG #75639| In QA      |  added to sprint 4  |
</details>

## Sprint Tickets for Sprint 5
🟡 rolled from previous sprint 🆕 new goal
* 🟡 GOAL: Complete initial code changes for Oracle Health Site CAncellations
  * 🟡 [#75639 Update appointment PUT requests to use VPG](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/75639) - In QA
* 🆕 GOAL: Add support for routing appointment requests to VetsAPI Patient Gateway
    * Update the VetsAPI vaos module with the capability to toggle the routing of appointment operations between vaos-service and VPG.  This will allow the flexibility to easily test and validate the expected VPG behavior in the staging environment.
    * [#77065 Add VPG routing feature flag](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/77065) 
    * [#77066 Implement optional VPG routing](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/77066) 
* 🆕 GOAL: Integrate MAP user services into local setup
    * The work completed in #75635 and #75636 enabled the VetsAPI developers to integrate locally between vets-website, vets-api, and VPG.  In order to fully test the appointment workflow, MAP authentication services must also be deployed locally.  Since vetsApi addresses all MAP services from a single gateway, a proxy must be employed to allow the routing of multiple local MAP services to a single address.  Develop, document, and deploy a script to enable this proxy. 
    * [#77019 Research and create Caddy script to enable local VPG integration](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/77019)
* 🆕 GOAL: Enhance the VetsAPI Patient Gateway to provide scheduling configurations for OH sites
    * Research and add an endpoint to the VetsAPI Patient Gateway that will enable the ability to retrieve the scheduling configurations for a list of facilities, including Oracle Health facilities.
    * [#77072 Research VetsAPI type of care determination workflow](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/77072) 
    * [CES-302 VPG: Create facility configuration endpoint](https://issues.mobilehealth.va.gov/browse/CES-302) 
* 🆕 GOAL: Return Cerner Appointments
   * [CES-110 CES: Return Cerner appointments from Appointment reads](https://issues.mobilehealth.va.gov/browse/CES-110)
   * [CES-109 CES: Return Cerner appointments from Appointment searches](https://issues.mobilehealth.va.gov/browse/CES-109)
* GOAL: Build vetsapi-patient-gateway to extend VAOS with Oracle Health write-back capabilities this is a placeholder for VPG/CES work. This is more of an epic than a goal 

