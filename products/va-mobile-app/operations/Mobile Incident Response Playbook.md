## Overview
This document provides guidance about how to respond to incidents such as outages, widespread crashes, or security breaches. 

The VA Mobile App has a unique frontend client, and some of its own API endpoints, but it shares most of its backend infrastructure and upstream dependencies with VA.gov. It also falls under the VA.gov Authority to Operate. Therefore our team is accountable to align with the VA.gov incident response process. 

## Detecting Issues
Issues will come to our attention through a variety of channels:
- Automated alerts communicated via PagerDuty or Slack
- Manual observation of problematic events in Sentry/Crashlytics/Grafana
- Escalation from VSP on call staff
- Escalation from VA contact centers (help desks)
- Escalation from other VA teams

### Acknowledging the Incident
It's important to acknowledge the incident through whatever channel it arrived - whether assigning the incident in PagerDuty or responding to an email escalation. Once you acknowledge an incident, you are responsible for following up on it by either starting the response process or handing it off to somebody who is in a better position to do so. 

At this point you should also raise the incident to our team in the DSVA slack #va-mobile-app channel, 

## Incident Classification
1. First, determine as well as you can whether this issue is unique to VA Mobile, or is likely affecting VA.gov as well. In the latter case, check the #oncall and #vfs-platform-support channels in DSVA slack to ensure you are not duplicating effort (or working at cross purposes) with anybody else.

2. Next, determine if this is a security incident. Per the [VA.gov incident response playbook](https://github.com/department-of-veterans-affairs/devops/blob/master/docs/Incident%20Response%20Playbook.md) "if at any point during your evaluation you determine that the system has been compromised by a third party, that there is a leak of personally identifiable information, or that the system is under attack". In this case you should immediately notify our product owner and the information system owner. They may take responsibility for further notification, but _if they do not_, you are accountable for notifying the information system security officer (ISSO) and/or privacy officer (PO) as appropriate. 

3. If this is not a security incident, do your best to determine the severity:
  - Is it a widespread outage (e.g. app is crashing for everybody, API is totally unavailable), or only affecting a limited number of users?
  - Is it affecting the entire app, or only a specific feature?
  - Is the app able to respond gracefully with an appropriate error message, or is it crashing or displaying incorrect data?
 
 There is no hard and fast rule but generally the more users impacted, and the more severely they are impacted, will warrant a more strenuous response as well as increased visibility and notification requirements. 

## Diagnosing and Resolving the Incident
The process of isolating the cause of an incident and resolving it can't be prescribed in advance, but generally:

- Go wide, then go deep. First verify the overall state of the system. Is it a particular API endpoint that is unavailable, or the whole API? Isolate what parts of the system are actually affected.
- Rule out external factors. Given the nature of vets-api as a facade over other VA systems, check whether any relevant upstream dependencies are unavailable or experiencing elevated error rates. In this case the likely response process will be to notify the team responsible for the upstream system, and if possible, set a maintenance window in PagerDuty to trigger the downtime notification mechanism. 
  - Don't forget about non-API dependencies such as the VA network gateways that sit in front of our backend services. If these are experiencing an issue it's almost certainly also affecting VA.gov and possibly the VA as a whole. 
- Look for what changed. If a behavior began suddenly, determine if anything changed recently that can account for it - did a vets-api deployment occur? Did the VSP operations team change some infrastructure?

## After the Incident
After the incident is resolved, a [postmortem analysis](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/Postmortems) is conducted. The goal of the postmortem is **not** to assign blame, but to improve our ability to prevent, detect, and respond to future incidents. Possible follow-up actions that may result include adding additional monitoring, adding implementation safeguards, tuning alerts, adding documentation, and refining inter-team communication processes.

## Communications and Command Guidance
In all phases of incident response, clear communication is key. Every incident of any meaningful severity is likely to require coordination with other teams to resolve. If you own the incident, ensure that other responders understand the nature and severity of the incident, what steps you/your team team is taking to respond, and what steps you are asking them to take to respond. 

If an incident is severe or complex enough that resolving it involves more than one engineer, then an incident commander should be identified. Once an incident commander is named, unity of command is critical during incident response. Most incidents consist of an investigation phase, and one or more attempts at resolution. While many eyes are helpful during investigation, it's important that nobody independently performs response actions - this can lead to confusion and making things worse. The incident commander will instruct a specific person to perform each action, and nobody else should be acting on the system in the meantime. 
