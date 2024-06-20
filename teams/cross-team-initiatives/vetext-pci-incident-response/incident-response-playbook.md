# PCI API Tier 3 Production Support Team On-Call Monitoring Playbook


### Table of Contents
1. [PCI API Tier 3 Team Overview](#overview)
2. [VA Systems](#systems)
3. [Support Hours](#hours)
4. [Critical Outage Response Service Level Agreements](#agreements)
5. [Monitoring Process Overview](#monitoring-process)
6. [Before you start…](#before-start)
7. [During your On-Call Shift…](#shift)
8. [In the event of an incident…](#incident-response)
9. [Root Cause Analysis](#root-cause)
10. [Maintenance mode guidelines](#maintenance-guidelines)
11. [What is an Incident Commander?](#incident-commander)
12. [Guidelines to Communicate With External Teams](#external-communication)
13. [Breakdown and Examples of IC](#ic-breakdown)
14. [Post-mortem Report and Process](#post)
15. [ServiceNow (SNOW)](#servicenow)
16. [Accessing and Viewing SNOW](#snow)
17. [Tiered Ticket Routing](#ticket-tier)
    * [Ticket Response Templates](#ticket-templates)
18. [Responding and Categorizing](#responding)
19. [Entering a ServiceNow Incident Ticket](#new-snow)
20. [Reverting Changes Guidelines](#revert)
21. [Nessus Scans and Patching](#Nessus-Scans-and-Patching)
22. [Alerts and Default Actions for Resolution](#alerts-and-actions)
    * [Default actions](#actions)
      - [Staging Tool Issue Fix Requests](#staging-tool)
      - [Holiday Alerting Freeze(s)](#holiday)
      - [Infrastructure Changes](#infra)
      - [ESECC Requests](#esecc)
    * [Alerts](#alerts)
      - [VEText Hosts Low Disk Space on AVS servers](#avs-disk)
      - [SNS Exteral Runtime Response and Upkeep](#runtime-sns)
      - [SSL Certificate Expiration](#ssl)
      - [VistA Inhibited Login Detection](#inhibited)
      - [Wildfly Initialization Error](#wf-pod-fail)
      - [Synthetic Private Locations `pl:<id>` Uses an Outdated Image Version](#pl)

## PCI API Tier 3 Team Overview <a name="overview"></a>
To ensure we are providing the best products to our clients, the PCI API Tier 3 team will provide continuous production support for the VNCE-owned PCI API services (CHIP, Clinician Workflow, LoROTA), as well as some of PCI’s upstream services, including VEText, AVS, and Vista-API.  To achieve this, the team will develop a rotational on-call schedule to respond quickly in the event of critical sitewide outages. Alerts will be sent to on-call developers via PagerDuty (through integration with the DataDog APM tool).  In addition to incident response to critical outages, the production support team will be responsible for proactive performance optimization and for addressing tier 3 issues reported from the field (e.g. bugs, latency spikes, etc). 

This document is intended to outline production support expectations for the CHIP, LoROTA, Clinician Workflow, VEText, VHA Mobile Patient Check-In, AVS and VistA API repositories, tools that are used, and communication guidelines.

## VA Systems <a name="systems"></a>
Tier 3 Technical Engineering Support team will manage the requests submitted by end users of APIs and services exposed for the following systems:
- AVS
- Clinician Workflow
- VEText
- VistA API

The Patient Check-in team will manage the requests submitted by end users of APIs and services exposed for the following systems:
- CHIP
- LoROTA

Architecture diagrams that show our systems in context can be found here:

- [Check-In-Experience.md](https://github.com/department-of-veterans-affairs/clinician_workflow/blob/development/docs/Check-In-Experience.md)
- [AWS_Architecture.md](https://github.com/department-of-veterans-affairs/clinician_workflow/blob/development/docs/AWS_Architecture.md)
- [Navigating-Vista.md](https://github.com/department-of-veterans-affairs/team-avalanche-docs/blob/master/vista/Navigating-Vista.md)
- [Staging VSE-CS Frontend (accessible on VA network)](https://staff.apps-staging.va.gov/vsecs)
- [Station 530 Appointment Scheduler (UI accessible anywhere, only functional on VA network)](http://vigilant-couscous-ab7fb4a4.pages.github.io/)

## Support Hours <a name="hours"></a>
24 hours per day, 7 days per week, including weekends and Federal Holidays
 - Business Hours: 7:00am ET - 8:00pm ET
 - Non-Business Hours: 8:00pm ET - 7:00am ET, Weekends, Holidays (Note: Since PCI tool is used primarily during clinic hours that align with business hours, it is projected there will be fewer than 1-2 non-business hour outages per year.)


## Critical Outage Response Service Level Agreements <a name="agreements"></a>
The VNCE Contract requires that Tier 3 support will respond to critical outages of PCI systems within SLA timeframes, set based on business hour and non-business hour timeframes. Please refer to the language in the VNCE Contract, enumerated below: 
 
1. Provide Tier 3 support for systems to be maintained under this PWS. Tier 3 support shall
be staffed by persons who primarily serve in engineering roles and must be able to
adequately diagnose reported issues, identify software defects, and report to development
teams for remediation.

2. Provide 15-minute response time during business hours (7:00am Eastern Time (ET) –
8:00pm ET) to critical downtime issues identified and work with development teams to
resolve. A critical downtime issue is defined as a system-wide outage in the staff or
Veteran facing check-in APIs.
Business-hour responses should, at minimum, result in a documented decision on issue escalation.

3. Provide 60-minute response time during non-business hours (8:00pm ET – 7:00am ET) to
automated critical issue alerts. A critical issue alert is an alert that a critical downtime issue is occurring during non-business hours.
Non-business-hour responses should, at minimum, result in a documented decision on issue escalation.

## Monitoring Process Overview <a name="monitoring-process"></a>
Thank you for signing up for an on-call shift! The following sections outline the monitoring process. Note that Monitoring assignments are posted to the TEVI PTO Calendar with primary/secondary roles notated, as well as in the PagerDuty Calendar. 

## Before you start… <a name="before-start"></a>
Make sure you have access to DataDog 
- DataDog Dashboard Link: [CHIP Production Dashboard](https://tevi.ddog-gov.com/dashboard/5jy-mz3-53p/technical-dashboard-chip-prod?from_ts=1660050311069&to_ts=1660053911069&live=true)
- DataDog Dashboard Link: [LoROTA Production Dashboard](https://tevi.ddog-gov.com/dashboard/9ss-nrd-bj9/technical-dashboard-lorota-prod?from_ts=1660050411772&to_ts=1660054011772&live=true)
- DataDog Dashboard Link: [VistA API Production Dashboard](https://tevi.ddog-gov.com/dashboard/pa4-jzg-492/vista-api?from_ts=1660039665695&to_ts=1660054065695&live=true)
- DataDog Dashboard Link: [VEText Dashboard](https://vetext.ddog-gov.com/dashboard/tmu-wzw-3su/prod-vetext-apm-dashboard?from_ts=1675777081423&to_ts=1675780681423&live=true)

Make sure you have access to the VNCE team G-drive, which will give you access to:
- [The Critical Incident Event Log](https://docs.google.com/spreadsheets/d/14W6AOjbOS6XmbzN7hpvo3vAO5ZG5eW6vhPj1JvOeCaM/edit#gid=0)
- [Previous Post Mortems](https://drive.google.com/drive/folders/1QpcLg6Cx1WN5cIST5ViPoi2WjaUgy0tO)

Make sure your on-call shift is configured in [PagerDuty](https://veterans-affairs.pagerduty.com/teams/PZ9XJHY)
- Request to be added to DSVA Pagerduty by the platform team (Allison can add if response time is delayed)

Once you have VA Access, make sure you have access to the:
- [PCI API SNOW queue](https://yourit.va.gov/nav_to.do?uri=%2Ftask_list.do%3Fsysparm_clear_stack%3Dtrue%26sysparm_query%3Dassignment_group%253Djavascript:getMyGroups()%255Eactive%253Dtrue%255Estate!%253D6%26sysparm_first_row%3D1%26sysparm_view%3Dcatalog) 
  (be sure to reference the [ServiceNow Process](https://github.com/department-of-veterans-affairs/chip/blob/master/docs/2022-production-rollout-support.md#servicenow-process) for instructions on how to configure your settings, especially if it’s your first time)
- [PCI Implementation teams channel](https://teams.microsoft.com/l/team/19%3awwjxmJilnNQkrSuL1_UDJccHQcMIPF2OnFC73KpNN9s1%40thread.tacv2/conversations?groupId=7b702e1f-7c29-419b-8215-35b0346ca2b5&tenantId=e95f1b23-abaf-45ee-821d-b7ab251ab3bf)

Read the PCI API Tier 3 Playbook (this document!)

## During your On-Call Shift… <a name="shift"></a>
As discussed above, during business hours (07:00am ET - 08:00pm ET) the expectation is that you will be more in a proactive monitoring posture (especially in the morning, when clinics open); whereas after designated business hours (08:00pm ET - 07:00am ET) you are expected to be more responsive to PagerDuty alerts that come in. When you are on-call, expect to start your shift at 7am EST, as most issues identified are identified in the morning (such as following a deployment the previous night). 

When you start your shift
- Update the [#check-in-go-live](https://dsva.slack.com/archives/C02UP02HHGX) channel description to list your name as PCI API on-call developer
- Be aware that there are some automatic daily and weekly monitoring downtimes on datadog. The downtime is to silence any potential alerts that occur during the downtime window. Click [here](https://tevi.ddog-gov.com/monitors/downtimes?sort=-start_dt) for the currently enabled automatic downtimes Tevi Datadog automatic downtime
- Monitor the tools listed below for signs of issues

When you log in in the morning at 7am EST,  the on-call developer should be proactively monitoring a number of locations for any outages or incidents. This includes:
- DSVA Slack 
  - Check DataDog Alerts in the [#check-in-monitoring](https://dsva.slack.com/archives/C04G3EY2F5W) and [#check-in-experience-apm](https://dsva.slack.com/archives/C02U11L00TF) channels channels
  - Actively monitor and respond to incident threads in the [#check-in-production-support](https://dsva.slack.com/archives/C02UP02HHGX) channel
  - Actively monitor and respond to incident threads in the [#check-in-experience-engineering](https://dsva.slack.com/archives/C02G6AB3ZRS) channel
- VA Teams
  - Actively monitor and respond to inquiries the [PCI Implementation teams channels](https://teams.microsoft.com/l/team/19%3awwjxmJilnNQkrSuL1_UDJccHQcMIPF2OnFC73KpNN9s1%40thread.tacv2/conversations?groupId=7b702e1f-7c29-419b-8215-35b0346ca2b5&tenantId=e95f1b23-abaf-45ee-821d-b7ab251ab3bf) to see if any clinical staff from the field are reporting issues with VSE-CS 
- DataDog 
  - Actively monitoring DataDog APM dashboards for anomalies, errors, spikes, latency, or outages. (See links above)
- ServiceNow (SNOW)
  - Actively monitoring and managing the [ServiceNow eCheck-in API Support](https://yourit.va.gov/nav_to.do?uri=%2Ftask_list.do%3Fsysparm_clear_stack%3Dtrue%26sysparm_query%3Dassignment_group%253Djavascript:getMyGroups()%255Eactive%253Dtrue%255Estate!%253D6%26sysparm_first_row%3D1%26sysparm_view%3Dcatalog) group ticket queue as outlined in the [ServiceNow Process](https://github.com/department-of-veterans-affairs/chip/blob/master/docs/2022-production-rollout-support.md#servicenow-process).
- Infrastructure 
  - Actively working with devops engineer to monitor infrastructure (containers, database, concurrent lambda limits) for scalability (e.g. [AWS Console](https://prod.adfs.federation.va.gov/adfs/ls/idpinitiatedsignon.aspx.) - select Amazon WebGov Cloud - until we are in Terraform)
- Sidekiq
  - Actively monitoring Sidekiq: https://vse-wf-api.va.gov/sidekiq
- PG Hero 
  - Actively monitoring PGHero: https://vse-wf-api.va.gov/pghero
- VEText Twilio
  - Actively monitoring VEText Twilio console error logs: https://console.twilio.com/ 

When the above responsibilities are met and development bandwidth is available, Tier 3 Monitoring Engineer will work on minor tasks in Tier 3 team backlog. 

## In the event of an incident… <a name="incident-response"></a>

1. **Acknowledge the Issue in #check-in-production-support and PagerDuty** - If an outage/error occurs during business hours, the on-call developer will post a thread on DSVA slack “check-in-production-support” channel or provide a message response to an existing incident post **within 15-minutes during business hours or 60 minutes after business hours**. (Note: we cannot get a timestamp from a reaction, so the acknowledgement needs to be a message post.) The on-call engineer will outline the behavior seen and tag partners needed to help discover, brainstorm, or resolve the problems noted. If the incident triggered an incident in PagerDuty, the on-call engineer will acknowledge the incident in PagerDuty within 15-minutes during business hours or 60 minutes after business hours. 
2. **Identification of Issue** - Determine root cause of issue following the [root cause analysis documentation below](#root-cause); what system is responsible for the issue and work to understand the impact/scope of the issue to end-users. Note: this may require starting a production incident Zoom bridge, or can be done over Slack. 
    1. **Assign Incident Commander** - An Incident Commander is assigned similarly as the on-call engineer as part of a separate rotation. Details of the role and function of the Incident Commander are defined further down this document.
    2. **Communicate with Product Manager/Delivery Manager to quickly determine criticality** - After action response to the incident will vary based on whether the incident is deemed critical or non-critical. Active communication with the API Product Manager and Delivery Manager to prioritize issues, bugs and potential hotfixes is critical! Per the VNCE contract, a critical downtime issue is defined as a system-wide outage in the staff or Veteran facing check-in APIs. **Bug/incident prioritization rubric** is shown below and can be seen in Mural form [here](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1668097035200/a0187e049d85448df560b2339ab76ff33908808f?sender=u552ff37aba898b5fff103456).
      
      <p align="center"><image src="https://user-images.githubusercontent.com/56260532/217282822-00714cd4-debe-4740-bb82-c5e82041c48c.png" /></p>
   
     3. **Set PCI Kill Switch to stop Veterans from trying to Check in (if needed)**
        1. Set the VEText Kill Switch - This stops veterans from receiving the check in link when they attempt checkin at the clinic, they will be directed to the front desk.  [PCI  Kill Switch Instructions](https://github.com/department-of-veterans-affairs/chip/blob/master/README.md#pci-killswitch)
        3. Confirm VEText is disabled by texting “checkin” to 53079 on your phone. If you get “We’re sorry. We can’t check you in online. Please ask a staff member for help.” The killswitch has been enabled successfully. If not, try again.
    4. **Enable PCI Maintenance Page in VA pagerduty** - 
        1. Login to VA pagerduty -> services -> day of check-in - https://dsva.pagerduty.com/service-directory/PNDVBO8
        2. Go to Add Maintenance at the Maintenance Window section at the bottom right
        3. Create a new Maintenance Window depending on the discussed time we wish to have the window open.
    5. **Coordinate with VHA IVC (Shawn Adams) to communicate resolution to field** - via PCI Implementation Teams channel
    6. **Determine if we need to revert a previous deployment** - See Rollback instructions
    7. **Contact development team of upstream service if issue is arising from an upstream service and invite them into incident bridge** - See table below for PCI Ecosystem POCs -- 

|Service|Team POCs|Slack Responsive?|
|:-------:|:--------:|:--------:|
|Vista-API|Andy McCarty, Shane Elliott|Yes|
|VEText|Rob Durkin|Yes|
|VSE-CS|Stephen Mammay|Yes|
|PCI Front End|Lee Delarm, Brian Seek, John Woolschlager|Yes|
|PCI Vets-API|Guarav Gupta, Kanchana|Yes|
|PCI DevOps|Nathan Douglas, Eric Oliver|Yes|
|VA VHA IVC Trainer of VSE-CS <br /> (connects dev teams to clinical staff users)|Shawn Adams|Yes|
|VSE-CS Tier 1 and 2|Jenna Smith, Sophia (Mandi) Woodroof|No - Use MS Teams|


3. **Containment of Issue** - Are there downstream effects of the bug? If so, isolate the system. Once isolated we need to inform the downstream system of issues and see if we can limit impact. 
4. **Resolution of Issue** - At this step, we implement any needed changes to address the issue. Whether that is a code change and deployment, or infrastructure changes. The Incident Commander is responsible for coordinating the changes and communicating to the appropriate Slack / VA MS Teams channels.
5. **Recovery** - This phase is where we monitor the changes made to address the issues. Make sure DataDog alarms are recovered. Make sure PagerDuty incidents are recovered.
6. **Incident Documentation** - This is the final phase of incident response and involves documenting and learning from the incident - 
    1. Post final resolution / next steps on incident Slack thread.
    2. Coordinate with VHA IVC (Shawn Adams) to communicate resolution to the field via PCI Implementation Teams channel.
    3. Create Zenhub Tickets - For each incident, any relevant tickets should be created and tracked on the Zenhub board, in collaboration with the Tier 3 Product Manager.
    4. If the incident is critical, add it to the [Critical Outage Tracker](https://docs.google.com/spreadsheets/d/14W6AOjbOS6XmbzN7hpvo3vAO5ZG5eW6vhPj1JvOeCaM/edit#gid=0).
    5. If the issue was caused by PCI API systems then a Post Mortem is also necessary. Work with the delivery manager to hold a live Post Mortem session and document the [Post Mortem using team template](https://drive.google.com/drive/folders/1QpcLg6Cx1WN5cIST5ViPoi2WjaUgy0tO).
    6. Publish deployments or changes to infrastructure to datadog using datadog events: [Datadog custom events](https://docs.google.com/document/d/1MPvA9mHPTXuS5QKUgu8BjIOjqJCYTjrIpYOIMZNt5Y0/edit)

## Root cause analysis <a name="root-cause"></a>
As our infrastructure, pipelines, and processes have matured, causes for outages within our control have dwindled. However, we must still remain vigilant in knowing where to look for root causes. 

- If an outage is caused by a code deployment
    - We currently have a robust deployment pipeline and process for deploying new code. This process is typically handled by the PCI API Development Team, but they keep Tier 3 Team in the loop at the time of deployment. A release notice is posted in the #check-in-releases Slack channel within the DSVA workspace with a link to the ticket for the work that will include testing and rollback steps. An example of one of these posts can be seen [here](https://dsva.slack.com/archives/C03E5FEBTLH/p1678736665102789).
    
- If an outage is caused by an infrastructure change
    - Previously, we have noticed some undesired effects from changes made to the underlying infrastructure. In the event an outage occurs within a timeframe that correlates to a recent infrastructure change, please follow the [default actions for infrastructure changes steps](#infra) below.
    
- If an outage is caused by an upstream service (i.e. the TIC, vets-api, etc.)
    - The only action we can really accomplish in this event is verifying without a doubt the outage is outside of our control. Some ways to do this would be checking the [TIC Gateway Datadog Dashboard](https://app.ddog-gov.com/sb/f327ad72-c02a-11ec-a50a-da7ad0900007-9843c4c108149f12c176a2c8101c1345?theme=dark&from_ts=1667570276310&to_ts=1667573876310&live=true) or working with other teams to confirm the outage is being observed in more places than just our environment (example [Slack thread](https://dsva.slack.com/archives/C02UP02HHGX/p1678815014521339)). 
    
- If an outage is caused by an unknown issue
    - If the above reasons have been ruled out as potential causes for an outage, we need to begin narrowing in on the affected service(s). This can be done with our primary dashboards on both the TEVI and VEText/AVS Datadog accounts. The primary TEVI Dashboard can be found [here](https://tevi.ddog-gov.com/dashboard/vs5-rpv-48b/patricks-dashboard?from_ts=1678883558487&to_ts=1678897958487&live=true) and the primary VEText/AVS Dashboard can be found [here](https://vetext.ddog-gov.com/dashboard/ma2-scy-5jd/vetext-technical-dashboard?from_ts=1678889597883&to_ts=1678903997883&live=true). From the respective dashboards, we will attempt to narrow down the scope of the outage to a singular or small group of affected services. Once the affected service or services have been identified, we can start looking for error logs, APM traces, or auditing for any changes (i.e. security group rules, ports, DNS, etc.). If we can identify the culprit service and are mostly unfamiliar with the cause of what is being observed, it may be a good time to pull in a developer of the respective application (please see the ecosystem POCs discussed in [incident response](#incident-response) section above).

- If an outage is caused by a reason not mentioned in this document
    - This playbook is designed to serve as a living document with regular updates as our environment grows and/or changes. If an outage has occured and is not covered here, please ensure we document it well in the incident tracker and post-mortem and update the playbook with new information and resolution steps.

## Maintenance mode guidelines <a name="maintenance-guidelines"></a>
There are a few factors to consider when deciding on if the maintenance page should be activated in a unscheduled event:

1. Is the app in a down state, or degraded state?

	This is the main cause of this decision. If the service is impacted in any way, we need to assess the extent of the issue, and proceed accordingly.

2. Are users impacted?/How many users are impacted?

	This is a big consideration on if the service should go into maintenance mode. If there is a degraded state, but users are still using it in even a somewhat limited capacity, it is still being used, and worth consideration on if bringing up a maintenance window will bring more hard than good to those users.

3. Has the cause of the issue been found quickly, and does the fix ETA have a quick turnaround?

	If the issue is quickly identified and rectified, it is usually not worth bringing up the maintenance window if it will be just as quickly brought down after the fix. That being said, after the first attempt has gone through and failed, it should be reconsidered on if the maintenance window should be brought up to block any new potential users.

These core questions will determine if a maintenance window should be turned on or not. The order and process can be found in the flowchart below:

![Maintenance page flowchart](https://user-images.githubusercontent.com/41267236/220708760-142aaaeb-1469-4af8-a8b7-b83013784759.jpg)

The classification of sev1 thru 3 can be found here for clarification:


<table>
  <tr>
   <td><strong>Severity</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Examples</strong>
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>A critical incident with very high impact
   </td>
   <td>
<ul>

<li>A customer-facing service is down for all end users

<li>Possible customer data loss
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>2
   </td>
   <td>A major incident with significant impact
   </td>
   <td>
<ul>

<li>A user-facing service is unavailable for a subset of end users

<li>Core functionality is significantly impacted
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>3
   </td>
   <td>A minor incident with low impact
   </td>
   <td>
<ul>

<li>A minor inconvenience to end users, workaround available

<li>Usable performance degradation
</li>
</ul>
   </td>
  </tr>
</table>


## What is an Incident Commander? <a name="incident-commander"></a>
Concepts of an Incident Commander (IC) have been outlined as the following as per Patrick Bateman:
 - Lead the conversation and make decisions on the best course of action during the incident response call
 - Own the entire process of identifying the underlying root cause of the issue all the way through to the documentation and resolution of the issue.
 - Be responsible for coordinating communication updates to the ecosystem to all upstream and downstream stakeholders

To expand on these core concepts, the IC is responsible for the following situations:
 - Gathering the needed engineers on a single bridge call to work the issue when a production outage has occurred.
 - Keep track of key events to build a timeline for the post mortem.
 - Determine if the maintenance page needs to go up to prevent users from accessing the service.
 - Provide updates to all stakeholders outside of the call to let the engineers focus on working on the issue.
 - Drive the conversation to focus on resolution by asking relevant questions, and to keep the bridge clear from conversations that do not lead to resolution of the outage.
 - Allowing verified fix implementation after engineer agreement and discussion.
 - Maintain operation sanitation by allowing one fix at a time, and having engineers test after implementations. Never should there be “two hands in the pot”
 - Once the situation is resolved, gather key data points and events that drive towards resolution.

## Guidelines to Communicate With External Teams <a name="external-communication"></a>
For communication to external teams please use Slack as the form of communicaiton.
 - Reach out to the external team point of contact through the correct Slack channel and tag the point of contact
     * Provide support bridge information to the point of contact so the point of contact can be on the bridge early on.
 - If after 15 min no response by the point of contact escalate to the dependent team higher level POC
 - If still no reply after 30 min, escalate to a major incident to get a reply**

## Breakdown and examples of IC <a name="ic-breakdown"></a>
We will be breaking down and expanding on each responsibility starting with:

 - <ins>Gathering the needed engineers on a single bridge call to work the issue when a production outage has occurred</ins>
     * The IC will create the incident bridge and invite the required engineers recommended by the on-call engineer due to the type of outage and where the source of impact is originating. 

 - <ins>Keep track of key events to build a timeline for the post mortem.</ins>
     * The IC will keep track of major events and breakthroughs throughout the incident. This is for both providing updates to major stakeholders, as well as to create an accurate timeline for the post-mortem report.

 - <ins>Determine if the maintenance page needs to go up to prevent users from accessing the service.</ins>
     * The IC is responsible for determining if an outage will require a maintenance window so the clients are notified of the issue. The following checklist will determine if an outage is warrant:
         - Is this issue occurring during normal working hours?
         - Will turning on the maintenance page prevent the engineers from troubleshooting this issue?
         - Has the cause of the outage taking longer than 30 minutes to discover?
         - Will the fix take longer than 30 minutes from the time of the alert to implement?

If any or all of these questions have been answered, then it is up to the discretion of the IC to make the call to enable the maintenance window.

 - <ins>Provide updates to all stakeholders outside of the call to let the engineers focus on working on the issue.</ins>
     * The IC should be a barrier between the engineers and outside stakeholders, and fielding any questions the stakeholders may have. This is so the engineers working on the issue can focus on the task at hand, and prevent distractions from occurring. If the outside stakeholders have valuable information on the issue at hand, it is up to the IC to make a judgment call to invite them to the bridge and have them assist in working on the issue.

 - <ins>Drive the conversation to focus on resolution by asking relevant questions, and to keep the bridge clear from conversations that do not lead to resolution of the outage.</ins>
     * The IC is responsible for driving results, so they must make sure everyone is focusing on the task at hand. This can be achieved by asking relevant questions about the situation, or how the product works to drive possible resource investigations or fixes. If someone on the call is interrupting with either questions about already established information, or is talking about anything non-relevant to the situation at hand, then it’s up to the IC to either provide the information to the caller privately, or drive the conversation back on the task at hand.

 - <ins>Allowing verified fix implementation after engineer agreement and discussion.</ins>
     * The IC is not meant to figure out the fix per say, but if an action is brought up that might resolve the issue, it is up to the IC to gather a consensus on the rest of the engineers if that is the best course of action at this time. If an agreement has been made, the IC will request the engineer(s) to implement the action suggested at the time.

 - <ins>Maintain operation sanitation by allowing one fix at a time, and testing after implementations. Never should there be “two hands in the pot”</ins>
     * The IC should be acting somewhat like air-traffic control; allowing one plane on one landing strip at a time. Although it is encouraged for engineers to investigate different aspects of the application, only one fix should be occurring at a time. There should also be time for implementation, and validation checks to occur before any other fix can be implemented. It is also up to the IC to have the engineer(s) to confirm all implementations and validation checks from the engineer(s).

 - <ins>Once the situation is resolved, gather key data points and events that drove to resolution.</ins>
     * The IC is responsible for delivering the post-mortem report after the issue has been resolved. This will involve compiling the notes taken during the incident, and document what actions were taken to resolve the issue. This is in case the incident occurs again in the future, we will have it documented for faster turnaround.

## Post-mortem Report and Process <a name="post"></a>
A post-mortem should be performed when a critical outage occurs within any application we have production support responsibility for, whether or not we instigated the outage. That includes:

* Clinician Workflow
* VEText
* VistA API
* CHIP
* LoROTA
* AVS

When an outage occurs, a post-mortem report should be started. This document will be populated by both the Incident Commander and the Product Manager, who may ask for additional inputs and contributions from the support team. The post-mortem report should contain a brief summary of the incident, a timeline of events, notes on what went well and what could be improved, and action items agreed upon by the team.

Once the post-mortem report has been filled out, a post-mortem session should be scheduled by a member of the team, most commonly the Delivery Manager, Product Manager, or Incident Commander. Meeting attendees should include the Tier 3 Production support team, at least one representative from whichever service encountered the issue, and the client. It’s ideal to schedule this meeting for soon after the outage for the sake of relevancy.

Post-mortem sessions should be concise and walk through items outlined in the post-mortem document. Team members should discuss each section of the document and add on as needed.

Once the meeting is complete, post-mortem documentation should be added to the team SharePoint and shared out through the VA Slack.


## ServiceNow (SNOW) <a name="servicenow"></a>
Oftentimes incidents will get reported by the field via the SNOW ticketing process at VA. The Tier 3 Product Manager will manage the SNOW queue and work with the Tier 3 engineering team to prioritize tickets as issues are reported. See the steps below to access and manage the PCI API Tier 3 SNOW queue, which is called ‘eCheck-in API Support’. 


## Accessing and Viewing SNOW <a name="snow"></a>
A PIV card is required to access ServiceNow through the VA Network. ServiceNow links can be accessed via the following link (when signed into VA network) 
 - SNOW Dashboard: https://yourit.va.gov/nav_to.do?uri=%2F$pa_dashboard.do 
 - SNOW User Guide: https://yourit.va.gov/$h.do?sysparm_id=basics 

Members of the eCheck-in API Support group will receive emails when new incidents are assigned to the group queue. Emails include a direct link to the incident ticket.

To view all active unresolved ServiceNow tickets, the following link directs to a filter view for the eCheck-in API Support group queue:
 - eCheck-in API Support group queue - https://yourit.va.gov/nav_to.do?uri=%2Ftask_list.do%3Fsysparm_clear_stack%3Dtrue%26sysparm_query%3Dassignment_group%253Djavascript:getMyGroups()%255Eactive%253Dtrue%255Estate!%253D6%26sysparm_first_row%3D1%26sysparm_view%3Dcatalog 

Please refer to the [SNOW process](https://github.com/department-of-veterans-affairs/chip/blob/master/docs/2022-production-rollout-support.md#servicenow-process) instructions on how to customize your SNOW queue view. 

## Tiered Ticket Routing <a name="ticket-tier"></a>
Incident tickets are routed through a tiered support system. Tickets are first assigned to the scheduling support group and then routed to Tier 1 or Tier 2 support teams. If unable to resolve, incident tickets are escalated to Tier 3 ServiceNow support groups:
 - VSE-GUI Tier 3 - Issues related to front end functionality of VSE-CS or VSE-GUI (same queue for both)
 - eCheckinVetFacingApps - Issues related to front end functionality of VA.gov Veteran-facing eCheck-in
 - eCheck-in API Support - Issues related to back end API's that power VSE-GUI, VSE-CS and VA.gov Veteran-facing eCheck-in (OUR TEAM’S QUEUE)
 - VA VEText Admin - Issues related to VEText

The following data should be included with all incident tickets:
 - Patient name
 - Phone number
 - Appointment IEN
 - Time of appointment

### Ticket Response Templates <a name="ticket-templates"></a>

**Confirming issue** <br>
_Hi (contact name), My name is (your name) and I am following up from the ServiceNew technical support team for the incident you reported. When you have a few moments, would we be able to schedule a time to walk through a few troubleshooting steps?_

**Confirming issue resolved** <br>
_Hi (contact name), My name is (your name) and I am following up from the ServiceNew technical support team for the incident you reported. We released an update that may have resolved this issue. Is it still occurring? If so, would we be able to schedule a time to walk through a few troubleshooting steps?_

## Responding and Categorizing <a name="responding"></a>
The API Monitoring Engineer is responsible for managing all incident tickets assigned to the eCheck-in API Support group. Upon assignment, it is important to respond within 1 business day or sooner. Any form of updating the ticket is considered a valid first response. Although the solution may take longer than 1 business day, the initial contact should be made within this window.

The ServiceNow ticket specifies the preferred method of contact for responding. An MS Teams message or a phone call is normally the most effective way to receive a response back. If sending an email, be sure to send through ServiceNow as follows:

<p align="center"><image src="https://user-images.githubusercontent.com/56260532/217315859-97da0e69-5d01-4d1b-937c-a0d27536cbf4.png" /></p>

Each incident ticket will be assigned to a category based on the type of issue. Categorizing will help the API Monitoring Engineer group similar tickets and prioritize dev work based on volume/impact.

## Entering a ServiceNow Incident Ticket <a name="new-snow"></a>
It is important to enter a ServiceNow ticket when an API outage occurs.

Click the following link to create an incident ticket:

- https://yourit.va.gov/nav_to.do?uri=%2Fincident.do%3Fsys_id%3D-1%26sysparm_query%3Dactive%3Dtrue%26sysparm_stack%3Dincident_list.do%3Fsysparm_query%3Dactive%3Dtrue 

The following required fields must be completed:

<p align="center"><image src="https://user-images.githubusercontent.com/56260532/217317172-d01a3116-2308-46d2-aa55-ca42581f18e8.png" /></p>

Once the above fields are completed, click the 'Submit' button to create the incident ticket.

## Reverting Changes Guidelines <a name="revert"></a>

## **<span style="text-decoration:underline;">Reverting changes implications:</span>**

The reasons why we should have clear guidelines are due to the following:

1. Empowering the on-call engineer to take the first steps in troubleshooting a production outage, even if no one else is available to assist. To excel at our current commitments, we should feel comfortable and confident in our quick decision making when it comes to a production outage. While this type of decision making is ment during a time of limited resources (VA holidays, weekends, off-hours, etc), it can be used as a true north when collaborating with the stakeholders when it comes to troubleshooting any production issue.

2. The decision to revert the changes in production requires some important considerations. Since this action will cause expected downtime, it is important to have situational awareness when making the decision to rollback changes. That being said, there will be situations where the full context might be missing or unavailable to the on-call engineer, so this document serves as a north star in regards to reverting changes within production.


## **<span style="text-decoration:underline;">Reverting changes guidelines:</span>**

There are a few factors to consider when deciding on if reverting production changes should occur during an outage:

1. Is the app in a down state?

	This is the main cause of this decision. If the service is fully down, then the investigation should proceed. If the app is in a degraded state during off hours, but still up, you should communicate your findings to everyone, and consider if reverting would fully resolve the issue. 

2. Was there a production change that occurred within the last 24 hours? 

	This is a good baseline into if reverting the last changes will resolve the issue. Sometimes it takes longer for issues to arise within a change, but if an issue arises that was noted in the maintenance notes in the last deployment, it is a good place to start.

3. Is it on or off hours now?

	Since this document is mostly meant for the on-call engineer during off-hours, it is important to note that if the on-call engineer sees an issue during normal working hours, they are empowered to reach out to the IC to gather all affected stakeholders to assist in looking into this issue. 

These core questions will determine if a revert in production should be done or not. The order and process can be found in the flowchart below:

![Revert production changes playbook](https://user-images.githubusercontent.com/41267236/222246601-3d2e2332-1942-4b3a-a630-9df9ad1bdd6d.png)

If a decision has been made to revert, instructions on how to revert the last deployment MUST be included with each deployment that PCI releases. It is up to the on-call engineer during business hours to confirm with the PCI team to provide Tier 3 with instructions on how to revert the changes that were published. In the rare occurrence that a deployment cannot have a revert option, that must be communicated and documented on why a rollback is not possible.

## Nessus Scans and Patching <a name="Nessus-Scans-and-Patching"></a>

VA utilizes Nessus to scan for security vulnerabilities and compliance concerns. The VEText team reviews a report from this scan on a monthly basis. Based on the findings, they determine if any monthly patches are required and also ensure that quarterly patches are consistently applied. For further details, see the Nessus Scan and Patching Process documentation.

## Alerts and Default Actions for Resolution <a name="alerts-and-actions"></a>

### Default Actions <a name="actions"></a>

#### ***Staging Tool Issue Fix Requests*** <a name="staging-tool"></a>

Occasionally, the staging tool will have hiccups and the developers will request some assistance. These issues can be observed in threads like [this one](https://dsva.slack.com/archives/C02G6AB3ZRS/p1675352741498039) where a timeout was received when attempting to receive a token from https://staging.api.vetext.va.gov/api/vetext/auth. This typically means a restart is needed for the VEText API container the staging tool is using. Steps for resolution are as follows:

On an AVD or GFE device, SSH into the `oitdvrappclin03.r01.med.va.gov` on-prem machine. Once you have accessed the host, locate and switch users to the `vasvcvtavsupdate` user

```
ll /home | grep update
dzdo su - vasvcvtavsupdate
```
![image](https://user-images.githubusercontent.com/56260532/220929394-22835df9-37ad-4416-bac4-6c1ce8f19fa8.png)

Now you should see a script called `restart-vetext-api.sh` in the `vasvcvtavsupdate` user's home directory

```
ll | grep restart
```

![image](https://user-images.githubusercontent.com/56260532/220932456-ac638337-cd7f-4246-9cab-c212d19c4012.png)

Run the script and verify the container was restarted and is running

```
sudo ./restart-vetext-api.sh
sudo docker ps -a
```

![image](https://user-images.githubusercontent.com/56260532/220931368-cfeb1d9f-9bf3-43af-9b69-9948355d53d4.png)

Inform the requestor that the container has been restarted and they are good to retry their actions

![image](https://user-images.githubusercontent.com/56260532/220931530-a59f807c-eb05-4bcd-ad46-cdf86f20fabd.png)

#### ***Holiday Alerting Freeze(s)*** <a name="holiday"></a>
Due to clinic closure during federal holidays, some of our alerts will fire for low activity. In order to prevent alerting oncall staff during clinic closure dates, we implement holiday alerting freezes to silence some of the low activity tracking monitors. It is the responsibility of the current oncall personnel to create the managed downtime for the upcoming holiday on the last working day before the date of clinic closure. For example, if the holiday falls on a Tuesday it is the responsibility of the oncall engineer to put in the downtime on the Monday prior. Or if the holiday falls on a weekend day or following Monday, the current oncall engineer should configure the downtime on the Friday prior.

A list of known clinic closure holidays can be found [here](https://www.va.gov/ann-arbor-health-care/programs/holiday-schedule/).

Please see [the holiday alerting freeze documentation](https://github.com/department-of-veterans-affairs/checkin-devops/blob/master/docs/holiday-alerting-freeze.md) for instructions on how to configure the managed downtime(s).

#### ***Infrastructure Changes*** <a name="infra"></a>
If changes are made to the underlying infrastructure that our ECS containers rely on, please cycle the containers following the instructions [here](https://github.com/department-of-veterans-affairs/checkin-devops/blob/master/README.md#ecs-container-cycle).

#### ***ESECC Requests*** <a name="esecc"></a>
If new connections are needed between environments existing in the VA Network, we have to file ESECC requests. These require BPE worksheets and RFC creation/modification.

Please see the [ESECC requests documentation](https://github.com/department-of-veterans-affairs/checkin-devops/blob/master/docs/esecc-requests.md) for instructions on how to submit these requests.

### Alerts <a name="alerts"></a>
We have numerous alerts in our environment, the following sub-sections discuss a few common alerts and resolution steps.

#### ***VEText Hosts Low Disk Space on AVS servers*** <a name="avs-disk"></a>

This alert only applies to the following on-prem servers:

vaaacappavs01.va.gov thru vaaacappavs13.va.gov

vaphcappavs01.va.gov thru vaphcappavs13.va.gov


GFE or AVD devices can access these on-prem servers ONLY!

1- Gain access to the machine indicated from the alert, verify that the overlay filesystem corresponds to what is filling up the /var/log/docker/overlay/xxxx/merged mounted volume

```
hostname
df -h
```

![avs1](https://user-images.githubusercontent.com/41267236/217635747-15640609-a202-4e84-a71d-a8d1983c7144.jpeg)

NOTE: If these volumes are not full, and there is a disk space issue, it is likely due to the log files located at /var/log/avs/* or /var/log/vetext/*, so we can manually truncate these log files without recreating the docker containers


2- Locate and switch users to the vasvcvtavsupdate user

```
ll /home | grep update
dzdo su - vasvcvtavsupdate
```

![avs2](https://user-images.githubusercontent.com/41267236/217635778-1e44e624-4f9b-472b-9040-e37a0aab3224.jpeg)

3- Locate the avs container and container id, stop the container, and remove the container (ensuring to only do this to the AVS container, not the apache one)

```
sudo docker ps -a
sudo docker stop <CONTAINER_ID>
sudo docker rm <CONTAINER_ID>
sudo docker ps -a
```

![avs3](https://user-images.githubusercontent.com/41267236/217635826-8b543da7-fbd6-430c-be50-4d66d43eed20.jpeg)

4- Bring avs container back online by only using this one line from the dockerdeployavs.sh script located in the home directory of the vasvcvtavsupdate user

```
sudo docker-compose -f docker-compose-avs.yml up -d --build
sudo docker ps -a
```

![avs4](https://user-images.githubusercontent.com/41267236/217635894-ef6ad4a9-65c5-4f51-a2fd-54fbd6f6692b.jpeg)


In case an alert is received due to low disk space on oitdvrappvtlb.r01.med.va.gov

Alarm format: VEText Hosts Low Disk Space on device:/dev/mapper/vg_root-lv_home,host:oitdvrappvtlb.r01.med.va.gov

Summary: oitdvrappvtlb.r01.med.va.gov is used for many purposes which includes a docker registry. The goal after receiving this alert
is to ***only delete the images that have more than two image tag versions***. 

Follow these steps to remediate the space issue:

Manually remove older images in the registry:
1. Run ``` docker exec -it brave_bouman sh ```
2. Navigate to ``` cd /var/lib/registry/docker/registry/v2 ```
3. cd into each repository and then into _manfests/tags (e.g. cd wildfly-base/_manifests/tags/)
4. Delete all but the most recent two tags (e.g. rm -rf 1.27-datadog).

After steps above are complete:

1- login to oitdvrappvtlb.r01.med.va.gov, verfy that the alert is valid. If the alert is valid sudo to root:

```
df -h /dev/mapper/vg_root-lv_home

dzdo su -
```

2- Get the list of images to delete.

```
docker images | awk '{print $1":"$2}' | grep -v REPOSITORY | sort | uniq
```

The result will look something like: 

```
wildfly-vetext-lb:2.63
wildfly-vetext-lb:2.64
wildfly-vetext-lb:2.65
wildfly-vetext-osm:2.33
wildfly-vetext-osm:2.34
wildfly-vetext-osm:2.35
wildfly-vetext-osm:2.36
wildfly-vetext-web-test:1.39
wildfly-vetext-web-test:1.40
wildfly-vetext-web-test:1.41
localhost.localdomain:5000/wildfly-vetext-web:4.58
localhost.localdomain:5000/wildfly-vetext-web:4.59
localhost.localdomain:5000/wildfly-vetext-web:4.60
localhost.localdomain:5000/wildfly-vetext-web:4.61
localhost.localdomain:5000/wildfly-vetext-web-test:1.39
localhost.localdomain:5000/wildfly-vetext-web-test:1.40
localhost.localdomain:5000/wildfly-vetext-web-test:1.41
localhost.localdomain:5000/wildfly-vetext-web-test:1.42
llva-ubuntu-base:20.04
localhost:5000/wildfly-vetext-lb:2.64
localhost:5000/wildfly-vetext-lb:2.65
```

3- Copy and paste the result into a text editor then exclude the images with the two highest tag numbers or less:

This means these will be excluded from the text editor and will not be considered for deletion: 

```
wildfly-vetext-lb:2.64
wildfly-vetext-lb:2.65
wildfly-vetext-osm:2.35
wildfly-vetext-osm:2.36
localhost.localdomain:5000/wildfly-vetext-web:4.60
localhost.localdomain:5000/wildfly-vetext-web:4.61
localhost.localdomain:5000/wildfly-vetext-web-test:1.41
localhost.localdomain:5000/wildfly-vetext-web-test:1.42
llva-ubuntu-base:20.04
localhost:5000/wildfly-vetext-lb:2.64
localhost:5000/wildfly-vetext-lb:2.65
```

The text editor should now look like this:

```
wildfly-vetext-lb:2.63
wildfly-vetext-osm:2.33
wildfly-vetext-osm:2.34
wildfly-vetext-web-test:1.39
localhost.localdomain:5000/wildfly-vetext-web:4.58
localhost.localdomain:5000/wildfly-vetext-web:4.59
localhost.localdomain:5000/wildfly-vetext-web-test:1.39
localhost.localdomain:5000/wildfly-vetext-web-test:1.40
```

4- Delete the docker image from the server. ***only delete the images that have more than two image tag versions*** :

  a- First append `docker rmi` to the begining of each line:

    ```
    docker rmi wildfly-vetext-lb:2.63
    docker rmi wildfly-vetext-osm:2.33
    docker rmi wildfly-vetext-osm:2.34
    docker rmi wildfly-vetext-web-test:1.39
    docker rmi localhost.localdomain:5000/wildfly-vetext-web:4.58
    docker rmi localhost.localdomain:5000/wildfly-vetext-web:4.59
    docker rmi localhost.localdomain:5000/wildfly-vetext-web-test:1.39
    docker rmi localhost.localdomain:5000/wildfly-vetext-web-test:1.40

    ```  
 
  b- Copy, paste the commands above into the bash prompt of oitdvrappvtlb.r01.med.va.gov. This will delete the images as listed in step 4a

5- Run the following cleanup script on oitdvrappvtlb.r01.med.va.gov:

```
/opt/docker/scripts/docker-clean.sh

```

6- Verify that some space has been freed up:

```
df -h /dev/mapper/vg_root-lv_home

```



#### ***SNS Exteral Runtime Response and Upkeep*** <a name="runtime-sns"></a>
This alert is in reference to the custom synthetic test that uses lambda functions to test how long it takes for a client-facing SMS to run thru the infrastructure. The alert can be found here:

https://tevi.ddog-gov.com/monitors/111830

The two possible alerts you can receive is either the alert goes above the threshold, or the alert is not propagating.

1- Alert goes over threshold

This shows that it is taking too long for clients to receive a response back. Please investigate the stack, and look into either any failed processes or lag within the environment.

2- No data within a time window

If this alert occurs, you will need to reset the endpoints of the following lambda functions:

project-sms-synthetic-metrics-job-prod
project-sms-synthetic-test-send-prod
project-sms-synthetic-test-receive-prod

The steps to do so is to remove the endpoints for about 20 mins, and add them back. As shown below:

<img width="413" alt="Screenshot 2023-03-02 at 3 30 26 PM" src="https://user-images.githubusercontent.com/41267236/222546234-243a5cb1-c845-433f-bb37-9e49836a47c5.png">

<img width="1298" alt="Screenshot 2023-03-02 at 3 38 42 PM" src="https://user-images.githubusercontent.com/41267236/222547520-f1bc4036-df78-4691-8d7b-680f2ce99a9f.png">

PLEASE TAKE A SCREENSHOT OF THE TRIGGERS BEFORE REMOVING THEM FOR EACH LAMBDA FUNCTION

Wait 20 mins.....

<img width="868" alt="Screenshot 2023-03-02 at 3 47 16 PM" src="https://user-images.githubusercontent.com/41267236/222549087-4729b4ac-8da7-4b37-b2f7-e1d16c6d1163.png">

Re-add triggers

#### ***SSL Certificate Expiration*** <a name="ssl"></a>
As owners of the SSL certificates for our supported services, we need to be aware of any approcaching SSL certificate expiration(s). These alerts are handled via Datadog Synthetics and will alert our #check-in-monitoring channel when a certificate is expiring in 30 or less days. Once we see these alerts, we will need to get a ticket created (please work with Lindsey Sprinkle or current PM for ticket creation and subsequent sprint prioritization) to track the work for updating the certificate(s) and follow the process for this task. The process is outlined in the [SSL Certificate Creation and Renewals](https://github.com/department-of-veterans-affairs/checkin-devops/blob/master/docs/ssl-certificate-creation-and-renewals.md) documentation.

#### ***VistA Inhibited Login Detection*** <a name="inhibited"></a>
In the event this alert fires, VistA logins have likely been inhibited on one (or both if both alerts are firing) of our test systems. There are two test systems we maintain and will need to access and resolve the issue, both have separate synthetic alerts. There is a dev/station 500 alert that refers to the `oitdvrappclin03.r01.med.va.gov` host and a staging/station 530 alert that refers to the `oitdvrappclin04.r01.med.va.gov` host. If this issue arises, the steps in the [Resolve Inhibited VistA Logins](https://github.com/department-of-veterans-affairs/checkin-devops/blob/master/docs/resolve-inhibited-vista-logins.md) document can help resolve this issue.

#### ***Wildfly Initialization Error*** <a name="wf-pod-fail"></a>
In the event this alerts fires, the docker service is not working correctly on the listed server. Usually, a docker service restart will resolve this issue. to restart the docker service:

```
sudo systemctl restart docker
```
Wait a few minutes to see if the logs stop coming in with the alert. If it is still coming thru, go ahead and restart the pods:

```
dzdo docker ps
```

Once you find the container ID for Wildfly, go ahead and restart it:

```
dzdo docker restart <container ID>
```

#### ***Synthetic Private Locations `pl:<id>` Uses an Outdated Image Version*** <a name="pl"></a>
This is a canned alert from Datadog when using private location workers for synthetic testing. It will detect the image as being out-of-date as new images are released to https://console.cloud.google.com/gcr/images/datadoghq/global/synthetics-private-location-worker.

To resolve:
  - Access `oitdvrappclin03.r01.med.va.gov`
  - Switch to vasvcvtavsupdate user `dzdo su - vasvcvtavsupdate`
  - Pull the latest image for synthetics private location worker `sudo docker pull gcr.io/datadoghq/synthetics-private-location-worker:latest`
  - Run the private location workers (one for the TEVI account and one for the VEText account) using the latest image
    - `sudo docker run -d --restart=always --rm -v /home/vasvcvtavsupdate/worker-config-va-network-tevi.json:/etc/datadog/synthetics-check-runner.json gcr.io/datadoghq/synthetics-private-location-worker:latest`
    - `sudo docker run -d --restart=always --rm -v /home/vasvcvtavsupdate/worker-config-va-network-vetext.json:/etc/datadog/synthetics-check-runner.json gcr.io/datadoghq/synthetics-private-location-worker:latest`
