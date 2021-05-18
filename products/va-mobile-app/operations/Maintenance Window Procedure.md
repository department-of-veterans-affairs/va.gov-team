_Note: This document describes proposed functionality. As of 5/18/2021, mobile feature services haven't been defined, so it's only possible to schedule maintenance windows for external dependencies, and these affect both the mobile app and VA.gov._ 

# Overview
This document describes the process for setting maintenance windows for functionality within the VA mobile app. 

The purpose of setting maintenance windows is to temporarily disable specific parts of the app and provide users guidance that some expected functionality is not working, and for how long that will be the case. Reasons we might set a maintenance window:

1. Planned maintenance by an upstream dependency (e.g. the MHV service that powers secure messaging, or the SSOe service that powers sign-in).
2. _Unplanned_ maintenance by an upstream dependency.
3. Detection of an issue within the app that warrants temporarily disabling a feature for all users.

# Mechanism

Maintenance windows are managed using [PagerDuty](https://dsva.pagerduty.com). Application dependencies and features are defined as **Services** in PagerDuty terminology, and each Service can have maintenance windows scheduled. Maintenance windows can be adjusted in duration or cancelled if the issue with the Service is resolved.

Vets API polls PagerDuty for relevant maintenance windows, and the mobile API aggregates these in the mobile `discovery` endpoint. The mobile app consumes this information and displays alerts/warnings to users when a specific part of the application is known to be unavailable. 

# Procedure

1. Determine which external service dependency or feature is experiencing an issue.
2. For external dependencies, assess whether the outage or issue affects only the mobile app, or the mobile app and VA.gov. **Setting a maintenance window for a shared external dependency also affects VA.gov.** So it is only appropriate to set a maintenance window on a shared dependency if both systems are affected. If this is the case, set a maintenance window on the PagerDuty Service for the relevant upstream (prefixed with `External:`). 
  * Post in the #oncall channel to inform the VSP team of the maintenance window.
3. If VA.gov is unaffected, or the issue is within the mobile app itself, instead set a maintenance window on the PagerDuty Service for the specific mobile app feature (prefixed with `Mobile:`). 
  * Post in the #va-mobile-app channel to inform the mobile app team of the maintenance window. 
4. Continue to monitor the issue with the feature or external service. If service is confirmed to be restored, cancel the maintenance window to restore functionality to users. Alterantively if the issue persists, extend the maintenance window as needed. 



