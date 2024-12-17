# MEDICAL RECORDS Incident Response Playbook* 


# Endpoint monitoring

## Scope 
This applies to all OCTO APIs & Sidekiq jobs hosted as part of vets-api, and focuses on the use of Datadog for observability.

## Purpose
It is critical that we are aware of the performance of va.gov systems, notified when system behavior is impacting veterans, 
and have the necessary information to address problems quickly.  To accomplish implement the following for your systems:

## Dashboards
Have dashboards that reflect the operations of your system.  This can show traffic levels, error rates, system latency, or any 
other metric that helps understand system performance for addressing current issues or predicting future behavior.  

<details>
  <summary>Toggle Dashboard Details</summary>

### Dashboard recommendations
- For quantitative data that is measured over time look into using metrics, or creating custom metrics.  Metrics are faster to query,
  and are retained in an indexed state for longer.  Generally *do not* tag metrics with highly unique values (like IDs) because
  it can greatly increase the cost.  Look into the use of statsd for publishing clear quantitative data from vets-api code.
- For qualitative data that requires more context consider the use of logs.  When possible logs should be written out in a JSON format
  to permit better searchability.
- It is recommended to include APM timeseries metrics for errors in your Dashboards.  APM will only show error cases, and has a more limited
  duration, but it's click-through capability to show rich debugging data is useful.  We recommend noting that APM widgets on a Dashboard
  have the click-through capability so users can easily find them.
- When appropriate it is recommended to create a dashboard that models behavior for high impact/risk launches, showing the impact of changes
  and identifying new errors that happen post-launch.  This type of dashboard can often be deleted or incorporated into other dashboards
  after a successful release.
</details>

**MEDICAL RECORDS DATADOG DASHBOARD**
- [Datadog MR Dashboard](https://vagov.ddog-gov.com/dashboard/8tk-8fe-cin/mhv-medical-records?refresh_mode=sliding&from_ts=1696699383284&to_ts=1699291383284&live=true)
- This dashboard contains components that display metrics (and subsequent required monitors) for:
  -The MHV Fwd Proxy
  -Domain level monitoring which include data for LISTS and DETAIL pages for each domain.  Each domain is measured for visit count, response code, http status, error rate as well as metrics for each print view, PDF download, and TXT download.  The domains that follow this pattern are: Vaccines, Allergies, Care Summaries/Notes, Vitals, Health Conditions, Lab/Tests, Radiology.
  -We also measure and monitor various comprehensive downloads for performance such as CCD Download, Self Entered Download, and BlueButton comprehensive report Download.
  -Lastly, we measure and monitor the Settings (VHIE sharing mostly) that exists on the site.


## Monitors
Include monitors that notify the team (or organization) when the system has an issue that should be investigated or addressed.

<details>
  <summary>Toggle Monitor Details</summary>

  ### Monitor types
*A team can determine the specific functionality that should be monitored based on the system's functionality, but we generally 
expect that the following three scenarios will be covered:*
- **High error counts** - cases where the system produces unexpectedly high number of errors
- **Anomonously low traffic** - the system encounters less traffic than expected for a given period of time.  This is often
  indicative of a failure elsewhere upstream in the system.
- **Silent failures in processing** - You should have monitors for any case where the system can encounters failures that impacts a
  veteran submission.  *This is crucially important for cases where a Veteran is not aware that their submission has failed - the
  requirement is that every one of these cases is addressed*
- *Any other cases that the team feels is important to provide a reliable, responsive service to Veterans.*

### Monitor recommendations
- Make monitor alerts *actionable*.  Frequent non-actionable monitor alerts lead teams to ignore monitors and
  eventually miss important issues.
- Expect to have to iterate on monitor thresholds and messages to ensure that they are actionable over time.
- Have a process for communicating monitor alerts.  Typically monitors alerts are configured to send a message to a Slack channel,
  which provides visibility and a historical record.
  - Viewers should have a way to identify the status of an alert (emojis or replies)
  - It is recommended to have a separate channel for monitoring Slack notifications because alerts can
    overwhelm a more general channel.
- DO NOT put any PII or PHI in a notification message ever.  
- DO NOT group large numbers of controller actions into single alerts unless there is a particular reason to do so.  Grouped
- Consider using the default_zero() function when measuring traffic that can often drop to zero.  Empty result sets often do not
  respond to low traffic in expected ways
- Whenever possible try to segment errors by cause: a monitor is much more useful and reduces team toil if it specifically notes that
  the issue is being, (for instance), caused by an upstream system or TIC latency.
- Include clear guidance for different target groups in monitor alerts
- Only include monitor warnings (as opposed to alerts) if there is a team that is specifically going to act on them.

## Process expectations
- It is expected that teams will monitor alert notifications and deal with them appropriately for their respective products.
- Monitor alert notifications should include links to playbooks that explain how to review and address alerts.
- If a team finds they are receiving too many or too few alerts, adjust the parameters or methology for the monitor.  

## SLOs and Business/Product Metrics
- This document is focused on operational metrics for well running applications, but Datadog can also be used for providing business
  metrics using tools like SLOs.

## Watch Officer (watchtower) Process
- High priority applications may need to be included in the Watchtower program
- Guidelines on the Watchtower can be found [here](https://depo-platform-documentation.scrollhelp.site/developer-docs/watchtower-integration)
- Teams can mark monitors for Watch Officer review by adding the `watchtower` tag to the monitor.
- Be sure to that all Watchtower include clear instructions for the Watch Officer to follow

## General
- ALWAYS check with Dashboard, Monitor, and SLO Owners prior to making changes to them.  

## Access rights
- For reviewing Dashboards, Monitors, and SLOs a user can request `datadog readonly` role access.  If a user needs access to create or modify
  dashboards, monitors, or SLOs they can request `VFS Team Pilot` role access
</details>

**MEDICAL RECORDS MONITORS**
- Our datadog dashboard/monitors are integrating with the VA.gov Watchtower monitoring.  Alerts or anomolies that happen trigger Slack notifications in the #mhv-on-vagov-alerts channel (https://dsva.slack.com/archives/C054X851K62).
- [MHV Medical Records error response rate (vets-api vagov-prod) Monitor](https://vagov.ddog-gov.com/monitors/199793) 
- [MHV Medical Records anomaly monitor](https://vagov.ddog-gov.com/monitors/199800)
- [MHV Medical Records MHV::PhrUpdateJob has exhausted its sidekiq queue Monitor](https://vagov.ddog-gov.com/monitors/199803)
- [MHV Medical Records Imaging endpoint error response rate (vets-api vagov-prod) Monitor](https://vagov.ddog-gov.com/monitors/303429)
- [MHV Medical Records API upstream response times Monitor](https://vagov.ddog-gov.com/monitors/172423)

## Process/Incident Response - MEDICAL RECORDS

**If a critical severity issue arises:**
-Medical Records on va.gov will be put in a disabled state for all users (using either feature flags, PagerDuty messaging, or a combination of both
-Debugging will start immediately
-The fix will be tested and deployed through normal CI/CD practices
-Medical Records on va.gov will be brought back online and monitored

**If a low-severity issue arises:**
-A fix will be loaded to the backlog (JIRA) and prioritized
-The fix will be tested and deployed through normal CI/CD practices, with no interruption to feature uptime.

## Feature Flipper analysis December 2024
<details>
  <summary>Toggle feature flipper details</summary>   
  
| Feature Toggle Name                      | Description                                                                      | Current State | 
| ---------------------------------------- | -------------------------------------------------------------------------------- | ------------- | 
| mhvMedicationsDisplayAllergies           | Show Allergies                                                                   | true          |                       
| mhvMedicalRecordsDisplayVaccines         | Show Vaccines                                                                    | true          |                       
| mhvMedicalRecordsDisplayVitals           | Show Vitals                                                                      | true          |                       
| mhvMedicalRecordsDisplayLabsAndTests     | Show Labs/Test                                                                   | true          |                       
| mhvMedicalRecordsDisplayConditions       | Show Conditions                                                                  | true          |                       
| mhvMedicalRecordsDisplayNotes            | Show Notes                                                                       | true          |                       
| mhvMedicalRecordsDisplaySettingsPage     | Show Settings                                                                    | false         |                       
| mhvIntegrationMedicalRecordsToPhase1     | Download:<br>-Blue Button<br>-CCD<br>-Self-Entered Data<br>Hides:<br>-Learn More | false         |                       
| mhvTransitionalMedicalRecordsLandingPage |                                                                                  | true          |                       
| mhvMedicalRecordsAllowTxtDownloads       | Enables:<br> -Print and Download<br>on domain pages                              | true          |                       
| mhvMedicalRecordsToVaGovRelease          | Enable overalll access to MR                                                     | true          |                       
| mhvMedicalRecordsRedactFHIRClientLogs    | vets-api - hide PII in logs                                                      | false         |                       
| mhvMedicalRecordsNewEligibilityCheck     | vets-api - use new eligibility<br>check instead of relying on<br>account type    | false         |                       
| mhvMedicalRecordsDisplayDomains          | Unused?                                                                          | false         |                       
| mhvMedicalRecordsDisplaySidenav          | Unused?                                                                          | true          |                       
| mhvMedicalRecordsPhrRefreshOnLogin       | vets-api - Unused?                                                               | false         |                       
| mhvMedicalRecordsKillExternalLinks       | Only used for testing<br>Toggled in code                                         | N/A           |                       

</details>

