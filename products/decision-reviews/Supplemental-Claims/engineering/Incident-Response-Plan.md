## Overview
This document provides guidance about how to respond to incidents such as outages, widespread crashes, or security breaches.

### Points of Contact 

|Name|Role|Email|
|----|----|-----|
|Zach Goldfine            |Product Owner, Gov't Lead| zachary.goldfine@va.gov |
|Sade Ragsdale |Product Manager| sade@coforma.io|
|Robin Garrison |FE Engineer| robin.garrison@adhocteam.us |
|Eugene Lynvh | BE Engineer | eugene.lynch@coforma.io |
|Michael Hobson | Product Manager, Lighthouse | michael.hobson@adhocteam.us |
|Drew Fisher | Engineer, Lighthouse | drew.fisher@adhocteam.us |

## Incident Response Rubric
This rubric acts as a high-level decision tree for how urgently to respond to an incident, whether to escalate, and if so, to whom. 

0. **Use your best judgement. Don't be afraid to reach out for help.**

1. **Is the issue unique to the form, or is it affecting VA.gov as well?**<br/>
  Check the #oncall and #vfs-platform-support channels. If VSP staff are aware of and addressing the incident you can stand by and make yourself available for escalation of any form-specific questions. You should keep tabs on the overall response and make sure it is addressed in a reasonable time frame.

2. **Is this a critical security incident?**<br/>
  Per the VA.gov incident response playbook, this means, "if at any point during your evaluation you determine that the system has been compromised by a third party, that there is a leak of personally identifiable information, or that the system is under attack." Such an incident warrants an immediate response, including informing our product owner (first) and information system owner. You should also escalate the issue to one or more of the team engineering leads.
  
3. **Is the incident due to an outage or issue with an upstream dependency?**<br/>
  An outage caused by one of our dependencies is still significant and you should still assess the impact, but isolating the cause as being because a dependency adjusts your response. Talk to the responsible team. If you determine the outage will last a significant period of time, follow the procedure to set a maintenance window on the upstream service, which will create user-visible warnings in the app about temporary loss of functionality. Make sure the team responsible for the upstream service is aware of the outage; if they are not, escalate the issue to the team responsible for the upstream service. If you need to escalate to another VA team, inform the benefits product owner (Matt Self) and CC them on all communications with other teams.
  
4. **What is the impact? Widespead, or only a few users? Impacting the entire app, or only one feature or subset of a feature?**<br/>
  An issue affecting all users or a significant percentage of users – or affecting all parts of the app – warrants a more immediate response. In those cases, Immediately notify our product owner. A more isolated issue can be triaged and prioritized appropriately – somewhere between "fix it tomorrow" and "incorporate into our normal development cycle."
  
### Summary - When To Notify Product Owner
1. Security/information breach
2. Affecting a significant number of users
3. Affecting the entire app
4. When we need to engage with another team to resolve

## Detecting Issues
Issues will come to our attention through a variety of channels:
- Automated alerts communicated via Slack
- Manual observation of problematic events in Sentry/Grafana
- Escalation from VSP on call staff
- Escalation from VA contact centers (help desks)
- Escalation from other VA teams

Our team does not have a standing 24/7 on-call rotation. We may receive escalations from VSP's on-call staff, and per their procedures we may be added to PagerDuty as an escalation team.  

At critical junctures, such as initial launch and after major releases, we may institute "business hours on-call", where we assign rotating responsibility for monitoring our observability tools and triaging issues during the working day. 

### Acknowledging the Incident
It's important to acknowledge the incident through whatever channel it arrived - whether assigning the incident in PagerDuty or responding to an email escalation. Once you acknowledge an incident, you are responsible for following up on it by either starting the response process or handing it off to somebody who is in a better position to do so. 

At this point you should also raise the incident to our team in the DSVA slack #benefits-decision-reviews channel, 

## Incident Classification
1. First, determine as well as you can whether this issue is unique to the supplemental claim form, or is likely affecting VA.gov as well. In the latter case, check the #oncall and #vfs-platform-support channels in DSVA slack to ensure you are not duplicating effort (or working at cross purposes) with anybody else.

2. Next, determine if this is a security incident. Per the [VA.gov incident response playbook](https://github.com/department-of-veterans-affairs/devops/blob/master/docs/Incident%20Response%20Playbook.md), "if at any point during your evaluation you determine that the system has been compromised by a third party, that there is a leak of personally identifiable information, or that the system is under attack". In this case you should immediately notify our product owner and the information system owner. They may take responsibility for further notification, but _if they do not_, you are accountable for notifying the information system security officer (ISSO) and/or privacy officer (PO) as appropriate. 

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
- Look inward. Is there something we did that caused the issue? 

## After the Incident
After the incident is resolved, a [postmortem analysis](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/Postmortems) is conducted. The goal of the postmortem is **not** to assign blame, but to improve our ability to prevent, detect, and respond to future incidents. Possible follow-up actions that may result include adding additional monitoring, adding implementation safeguards, tuning alerts, adding documentation, and refining inter-team communication processes.

## Communications and Command Guidance
In all phases of incident response, clear communication is key. Every incident of any meaningful severity is likely to require coordination with other teams to resolve. If you own the incident, ensure that other responders understand the nature and severity of the incident, what steps you/your team team is taking to respond, and what steps you are asking them to take to respond. 

If an incident is severe or complex enough that resolving it involves more than one engineer, then an incident commander should be identified. Once an incident commander is named, unity of command is critical during incident response. Most incidents consist of an investigation phase, and one or more attempts at resolution. While many eyes are helpful during investigation, it's important that nobody independently performs response actions - this can lead to confusion and making things worse. The incident commander will instruct a specific person to perform each action, and nobody else should be acting on the system in the meantime. 
