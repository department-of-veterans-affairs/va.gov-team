# MEDICAL RECORDS Incident Response Playbook 
### Scope 
This document is relevant to the medical records section of MHV on va.gov and includes information about troubleshooting within the va.gov ecosystem as well as the downstream MHV API systems. Medical Records (MR) is an authenticated only experience, and the landing page in [Staging can be accessed here](https://staging.va.gov/my-health/medical-records).  
### Purpose
This document will provide links to Application Performance Monitoring (APM) tools that provide visibility, monitoring, alerting and logging for the front end (vets-website), middleware (vets-api) and back end (MHV API) systems.  

## Process/Incident Response 

**If a critical severity issue arises:**
- Medical Records on va.gov will be put in a disabled state for all users (using either [feature flags](#feature-toggles), [PagerDuty messaging](#pager-duty), or a combination of both
- Debugging will start immediately
- The fix will be tested and deployed through normal CI/CD practices
- Medical Records on va.gov will be brought back online and monitored

**If a low-severity issue arises:**
- A fix will be loaded to the backlog (JIRA) and prioritized
- The fix will be tested and deployed through normal CI/CD practices, with no interruption to feature uptime.



## Endpoint monitoring


### Dashboards
**MEDICAL RECORDS DATADOG DASHBOARDS**
- [Datadog MR Dashboard](https://vagov.ddog-gov.com/dashboard/8tk-8fe-cin/mhv-medical-records?refresh_mode=sliding&from_ts=1696699383284&to_ts=1699291383284&live=true)
  - This dashboard contains components that display metrics (and subsequent required monitors) for:
    - The MHV Fwd Proxy
    - Domain level monitoring which include data for LISTS and DETAIL pages for each domain.  Each domain is measured for visit count, response code, http status, error rate as well as metrics for each print view, PDF download, and TXT download.  These metrics are related to calls from vets-api to the MHV API backend system.  The domains that follow this pattern are: Vaccines, Allergies, Care Summaries/Notes, Vitals, Health Conditions, Lab/Tests, Radiology.
    - We also measure and monitor various comprehensive downloads for performance such as CCD Download, Self Entered Download, and BlueButton comprehensive report Download.
    - Lastly, we measure and monitor the Settings (VHIE sharing mostly) that exists on the site.
- [Datadog MR Usage Dashboard](https://vagov.ddog-gov.com/dashboard/3v5-jdv-4vt/mr-on-vagov?fromUser=true&refresh_mode=sliding&from_ts=1734458026898&to_ts=1734630826898&live=true)
  - This dashboard contains components that display metrics for views, average time spent, top actions and funnels for all medical record domains
  - This is meant to visualize data from a user perspective and relies on data from Datadog Remote User Monitoring (RUM)
- [Datadog Default APM Service Dashboard](https://vagov.ddog-gov.com/apm/entity/service%3Amhv-medical-records?compareVersionEnd=0&compareVersionPaused=false&compareVersionStart=0&dependencyMap=qson%3A%28data%3A%28telemetrySelection%3Aall_sources%29%2Cversion%3A%210%29&deployments=qson%3A%28data%3A%28hits%3A%28selected%3Aversion_count%29%2Cerrors%3A%28selected%3Aversion_count%29%2Clatency%3A%28selected%3Ap95%29%2CtopN%3A%215%29%2Cversion%3A%210%29&env=eks-prod&fromUser=false&groupMapByOperation=null&operationName=rack.request&panels=qson%3A%28data%3A%28%29%2Cversion%3A%210%29&resources=qson%3A%28data%3A%28visible%3A%21t%2Chits%3A%28selected%3Atotal%29%2Cerrors%3A%28selected%3Atotal%29%2Clatency%3A%28selected%3Ap95%29%2CtopN%3A%215%29%2Cversion%3A%211%29&summary=qson%3A%28data%3A%28visible%3A%21t%2Cchanges%3A%28%29%2Cerrors%3A%28selected%3Acount%29%2Chits%3A%28selected%3Acount%29%2Clatency%3A%28selected%3Alatency%2Cslot%3A%28agg%3A95%29%2Cdistribution%3A%28isLogScale%3A%21f%29%2CshowTraceOutliers%3A%21t%29%2Csublayer%3A%28slot%3A%28layers%3AserviceAndInferred%29%2Cselected%3Apercentage%29%2ClagMetrics%3A%28selectedMetric%3A%21s%2CselectedGroupBy%3A%21s%29%29%2Cversion%3A%211%29&start=1734635797967&end=1734639397967&paused=false#summary)
  - This default dashboard contains a summary of the MR service and additional sections with detailed metrics for:
    - Endpoint requests, errors and latency
    - Deployments
    - Dependency Graph (only for front end and middleware systems)
    - Traces
    - Errors
    - Logs

 
### Monitors

**MEDICAL RECORDS MONITORS**
- Our datadog dashboard/monitors are integrating with the VA.gov Watchtower monitoring.  Alerts or anomolies that happen trigger Slack notifications in the [#mhv-on-vagov-alerts channel](https://dsva.slack.com/archives/C054X851K62).
- [MHV Medical Records error response rate (vets-api vagov-prod) Monitor](https://vagov.ddog-gov.com/monitors/199793) 
- [MHV Medical Records anomaly monitor](https://vagov.ddog-gov.com/monitors/199800)
- [MHV Medical Records MHV::PhrUpdateJob has exhausted its sidekiq queue Monitor](https://vagov.ddog-gov.com/monitors/199803)
- [MHV Medical Records Imaging endpoint error response rate (vets-api vagov-prod) Monitor](https://vagov.ddog-gov.com/monitors/303429)
- [MHV Medical Records API upstream response times Monitor](https://vagov.ddog-gov.com/monitors/172423)
- [MHV Medical Records Self-Entered endpoint error response rate](https://vagov.ddog-gov.com/monitors/303428)
- [MHV Medical Records Imaging endpoint error response rate](https://vagov.ddog-gov.com/monitors/303429)
- [MHV Medical Records Downloads error response rate](https://vagov.ddog-gov.com/monitors/305460)
- [MHV Vitals Error response rate](https://vagov.ddog-gov.com/monitors/195600)
- [MHV Vaccines Error response rate](https://vagov.ddog-gov.com/monitors/181936)
- [MHV Settings Status Error response rate](https://vagov.ddog-gov.com/monitors/299375)
- [MHV Radiology Error response rate](https://vagov.ddog-gov.com/monitors/243573)
- [MHV Labs and Tests Error response rate](https://vagov.ddog-gov.com/monitors/233487)
- [MHV Health Conditions Error response rate](https://vagov.ddog-gov.com/monitors/202664)
- [MHV Generate CCD Error response rate](https://vagov.ddog-gov.com/monitors/299319)
- [MHV Care Summaries & Notes Error response rate](https://vagov.ddog-gov.com/monitors/186672)
- [MHV Allergies Error response rate](https://vagov.ddog-gov.com/monitors/169716)

## Front End User Experience Monitoring
We utilize Datadob Remote User Monitoring (RUM) to visualize the medical records experience on va.gov from a user persepective. While much of this RUM data has been extracted to the dashboard noted above, there is much more detailed information available in the Medical Records RUM application in Datadog:

- [Medical Record RUM Application](https://vagov.ddog-gov.com/rum/performance-monitoring?query=%40application.id%3A04496177-4c70-4caf-9d1e-de7087d1d296%20%40session.type%3Auser&filters=%5B%22env%22%2C%22service%22%2C%22version%22%2C%22%40geo.country%22%2C%22%40device.type%22%2C%22%40usr.email%22%5D&fromUser=false&tab=overview&from_ts=1734101603527&to_ts=1734706403527&live=true)
- As of Dec 20, 2024, the [RUM Medical Record configuration](https://github.com/department-of-veterans-affairs/vets-website/blob/bf07d09dfba4004dda8941e47faac253758ab8af/src/applications/mhv-medical-records/containers/App.jsx#L104) is set to sample 100% of sessions and 50% with replay. This will allow us to have great visibility into the user experience at launch, but these values must be lowered once the application is determined to be stable

## Backend MHV API System Monitoring
The MHV API service layer utlizes Grafana for APM. This section will provide links to quickly access Grafana visualizations for specific backend services:

- [Overall system health dashboard](https://grafana.myhealth.va.gov/d/IZf0bAkMk/system-health?orgId=1&refresh=30s&from=now-15m&to=now)

### MHV FHIR API 
- [mhv-np-fhir-api Service](https://grafana.myhealth.va.gov/d/qVKazw24p5/mhv-np-fhir-api?orgId=1&refresh=30s&from=now-3h&to=now)
- [mhv-np-phr-api Service](https://grafana.myhealth.va.gov/d/qVKazw24p2/mhv-np-phr-api?orgId=1&refresh=30s&from=now-1h&to=now)
- [AWS RDS Metrics](https://grafana.myhealth.va.gov/d/HdeaRHxWz/amazon-rds?orgId=1&from=now-6h&to=now&var-datasource=000000003&var-region=default&var-period=300) (filter for `mhv-ora-prod-fhir` for HAPI FHIR Database metrics)

### MHV Other APIs
#### TODO What other MHV APIs are being used by MR? Link to relevant Grafana dashboards 
- Self Entered Data
- Medical Records Downloads
- +++

### Auth 
#### TODO More info needed here
- Description of how auth works between vets-api and MHV API
- [mhv-security-api Service](https://grafana.myhealth.va.gov/d/6FK74bqMk13/mhv-security-api?orgId=1&refresh=30s&from=now-1h&to=now)

## External Dependencies
MHV API connects to various downstream systems to support Medical Records use cases:
#### TODO - Confirm these are correct and add any additional
- VistA Interface Adapter (VIA) - provides Vaccines, Vitals, Health Conditions, Discharge Summaries, Progress Notes, Labs (Chem/Hem, Microbiology, )
- Health Data Repository (HDR) - Provides Allergies, Labs (Pathology)
- CVIX - Images
- +++ ?

## Pager Duty
We utlize [DSVA Pager Duty](https://ecc.pagerduty.com/service-directory/P64JPH1) to restrict access to Medical Records on va.gov for both planned maintenance and unplanned downtime events. 

- There is also a Slack integration that will schedule the Pager Duty window along with pausing all relevant tagged alerts from Datadog monitors
#### TODO - more info/link for Slack integration

## Feature Toggles 

Feature Toggles are used to enable/disable specific functionality without requiring deployment of new code.  The following feature toggles are active for Medical Records as of December 20, 2024
  
| Feature Toggle Name                      | Description                                                                      | MR Launch State | 
| ---------------------------------------- | -------------------------------------------------------------------------------- | ------------- | 
| mhvMedicationsDisplayAllergies           | Show Allergies                                                                   | true          |                       
| mhvMedicalRecordsDisplayVaccines         | Show Vaccines                                                                    | true          |                       
| mhvMedicalRecordsDisplayVitals           | Show Vitals                                                                      | true          |                       
| mhvMedicalRecordsDisplayLabsAndTests     | Show Labs/Test                                                                   | true          |                       
| mhvMedicalRecordsDisplayConditions       | Show Conditions                                                                  | true          |                       
| mhvMedicalRecordsDisplayNotes            | Show Notes                                                                       | true          |                       
| mhvMedicalRecordsDisplaySettingsPage     | Show Settings                                                                    | true          |                       
| mhvIntegrationMedicalRecordsToPhase1     | Download:<br>-Blue Button<br>-CCD<br>-Self-Entered Data<br>Hides:<br>-Learn More | true          |                       
| mhvTransitionalMedicalRecordsLandingPage | Show `Coming Soon`<br>landing page                                               | true          |                       
| mhvMedicalRecordsAllowTxtDownloads       | Enables:<br> Print and Download<br>on domain pages                               | true          |                       
| mhvMedicalRecordsToVaGovRelease          | Enable overalll access to MR                                                     | true          |                       
| mhvMedicalRecordsRedactFHIRClientLogs    | vets-api - hide PII in logs                                                      | false         |                       
| mhvMedicalRecordsNewEligibilityCheck     | vets-api - use new eligibility<br>check instead of relying on<br>account type    | false         |                       
| mhvMedicalRecordsDisplayDomains          | Unused?                                                                          | false         |                       
| mhvMedicalRecordsDisplaySidenav          | Unused?                                                                          | true          |                       
| mhvMedicalRecordsPhrRefreshOnLogin       | vets-api - Unused?                                                               | false         |                       
| mhvMedicalRecordsKillExternalLinks       | Only used for testing<br>Toggled in code                                         | N/A           |                       

