## VA-CMS Incident Response Plan Overview

*This plan is based on the CivicActions SSP Toolkit, under the terms of its GPL and Creative Commons Zero licensing, and the ‘A-CMS Response Procedure Overview’ and adapted for the purposes of the VA-CMS Incident Response Plan project.*

### The basic principle of this document is to provide a response plan based on various system outage incidents and incident types.
In this document, an ‘incident’ refers to system outages - from global to local, weather-based, Citrix, and/or network issues. A Quick Reference Mural can be found at this [link](https://app.mural.co/t/vagov6717/m/vagov6717/1664374630322/af08df2f43f6abaca2b5373291e321ec9ae51680?sender=ud44cbd4efa7fcef19db43902).

Once an incident is suspected, discovered, or reported, the response process should be initiated to complete the steps below.

The person who initially reports the incident becomes the Incident Commander. This title can be passed to others if needed.

The Incident Response Team is composed of anyone who is actively working to complete the steps below.

### The main steps are to:
- [Identify, Verify, Classify the incident](#identify-verify-classify-the-incident)
- [Identify/Notify impacted Support Teams](https://docs.google.com/document/d/1yeWlW3ui2d3yyCKCAk8OkOqTL6smamdfdf707__aE18/edit#heading=h.kaxrzeqtl7p5)
- [Identify impacted audience](https://docs.google.com/document/d/1yeWlW3ui2d3yyCKCAk8OkOqTL6smamdfdf707__aE18/edit#heading=h.p3yduz183zu)
- [Notify / Alert appropriate audience using appropriate tools](https://docs.google.com/document/d/1yeWlW3ui2d3yyCKCAk8OkOqTL6smamdfdf707__aE18/edit#heading=h.2efnltsgut4)
- [Work to resolve/mitigate the incident](https://docs.google.com/document/d/1yeWlW3ui2d3yyCKCAk8OkOqTL6smamdfdf707__aE18/edit#heading=h.olhe1bwqqqw8)
- [Notify / Alert resolution to appropriate audience using appropriate tools](https://docs.google.com/document/d/1yeWlW3ui2d3yyCKCAk8OkOqTL6smamdfdf707__aE18/edit#heading=h.l0koqkq2ifxk)


### Outage Types Include: 
- [CAG or Citrix Outage](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/helpdesk/incident-response-plan/cag-citrix-outage.md)
- [CMS or SSO Log In](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/helpdesk/incident-response-plan/cms-log-in-sso-outage.md)
- [CMS System-wide Outage](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/helpdesk/incident-response-plan/cms-system-wide-outage.md)
- [Content Release Failure](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/helpdesk/incident-response-plan/content-release-failure.md)
- [Disaster Recovery Situation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/helpdesk/incident-response-plan/disaster-recovery-situation.md)
- [Email Outage](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/helpdesk/incident-response-plan/email-outage.md)
- [Facility or Physical Threat](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/helpdesk/incident-response-plan/facility-physical-threat.md)
- [Local Outage](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/helpdesk/incident-response-plan/local-outage.md)
- [VA Network Outage](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/helpdesk/incident-response-plan/va-network-outage.md)
- [Weather-based Outage](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/helpdesk/incident-response-plan/weather-based-outage.md)



### Identify, Verify, Classify the incident [#identify-verify-classify-the-incident]

What has happened? 

What might/will happen if the incident is not immediate (such as a hurricane)? 

Can it be replicated? 

Contact [Tier 2 Support](https://docs.google.com/document/d/15oe0wtGI_MdaScYpjJWOgPjBqQWUFURc19HheWswEe4/edit#heading=h.iqjzy8pbs2j8) for additional information and confirmation. 

Is the incident internal? External? 

Can it be confirmed by more than one person?

Can it be confirmed by someone outside of the ‘internal’ CMS team? 

Is it global in nature, or local? 

Is it CMS specific, or more general? 

If CMS specific, is it a general CMS issue, or isolated to a specific module, content type, section, user, etc.? 

     1. The IC forms a team (responders) to determine if the event is actually a confirmed incident, and if so assesses the severity. Note that some apparent outages can be triggered by external dependencies (DNS servers, cloud storage outages, etc.). In this case there may be very little remediation, for instance, to do, but the Communicate step may still be critical.
     2. The IC creates an initial situation report ("sitrep") using Slack or acknowledges false-alarm notification, as appropriate.
     3. The IC assesses whether to also activate a contingency plan (for disaster recovery).


## Identify/Notify the impacted Support Team(s) -

Who will need to assist in the confirmation/resolution of the incident?

1. Start with [Tier 2 Support](https://docs.google.com/document/d/15oe0wtGI_MdaScYpjJWOgPjBqQWUFURc19HheWswEe4/edit#heading=h.iqjzy8pbs2j8)
     
2. May need to escalate to one of the following Slack Channels:
     
   [Pager Duty](https://dsva.slack.com/archives/CBU0KDSB1)
        
   [Cms-platform](https://dsva.slack.com/archives/C02HX4AQZ33)
        
   [Facilities-support](https://dsva.slack.com/archives/C02730UEZPS)
        
   [Sitewide-cms](https://dsva.slack.com/archives/CT4GZBM8F)
        
   [Sitewide-facilities](https://dsva.slack.com/archives/C0FQSS30V)
        
   [vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1)


## Identify the impacted Audience -

Who is impacted by the incident - Editors? Veterans? Internal Staff? Individual user?



## Notify / Alert the appropriate audience with the appropriate tools -

The audience should include impacted users of the system, as well as internal teams that can work to resolve the incident.

What is the best way to contact the Impacted Audience?

Email - va.gov Outlook?

Teams?

Slack?

Telephone / Phone Tree?

Video Call/Zoom/Teams?

[Site wide banner alert?](https://va-gov.atlassian.net/wiki/spaces/VAGOV/pages/1773338625/Site+alert)



## Work to resolve / mitigate the incident -

Which team or teams need to work together to resolve the incident?

What is the immediate assessment?

What is the ETA to resolution?

What can be done to prevent similar issues in the future?

Create / revise documentation related to the incident (what happened, how did it happen, why did it happen, when did it happen, what was done to resolve, what can be done to prevent?)



## Notify / Alert incident resolution to the appropriate audience with the appropriate tools - 

Contact the same audiences via the same method (if appropriate) to update/confirm resolution.


## What is an Incident?

An incident is anything that compromises (or could compromise) "CIA": Confidentiality, Integrity, or Availability. The existence of an Incident indicates a need for following a special Incident Response protocol. 

In this document, an ‘incident’ refers to system outages - from global to local, weather-based, Citrix, Log-in, and/or network issues. 

#### A Quick Reference Mural can be found at this [link](https://app.mural.co/t/vagov6717/m/vagov6717/1664374630322/af08df2f43f6abaca2b5373291e321ec9ae51680?sender=ud44cbd4efa7fcef19db43902)

The purpose of this and accompanying documents is to clarify the processes and protocols to address a variety of incidents that impact Confidentiality, Integrity, or Availability (“CIA”).

Depending on the type and severity of the incident, the response, the response protocol, and the Response Team may vary. In some cases, an incident may require all-hands-on-deck, while other incidents may only require a particular team or specific individuals. Service Level Agreements (SLAs) require actions to be taken within certain timelines to alert/notify/resolve incidents that impact “CIA” as mentioned previously. 

- *Confidentiality* means: "secrets". This includes personally identifiable information (PII) — names, addresses, phone numbers, social security numbers, etc. — as well as passwords, service credentials, internal non-public documents, and any copyrighted documents. Any time there is reason to suspect that any confidential information may have been outside of its rightful privacy level, an incident must be opened and acted upon.

- *Integrity* means the soundness/fitness of purpose of systems or information. If a backup was lost, or a web page was altered, or if an app stopped logging for a while, or if some documents got deleted — those are integrity issues. Sometimes these can indicate deeper incidents (like an attacker deleting logs to cover their tracks), so it's important to report these, as well.

- *Availability* means the availability of the services we provide. So if an app goes down, dynamic pages fail to update, if something we expect to be running stops running or consistently runs slower than expected — those are availability issues. Note that this only refers to production systems (it's usually fine if a demo app or QA environment crashes), and also only to unexpected downtime. If a system is shut down temporarily for planned maintenance it is not an incident.

This category includes what we often call “Critical Defects”, i.e. defects which are highly visible, and/or block large numbers of users from using an important product feature.

The occurrence of an Incident should immediately trigger the Incident Response Plan as specified below. If an Incident or suspected Incident occurs, the Incident Response Plan should preempt all other activities. As a general rule, the most important and sometimes difficult aspect of incidents is making sure that they are responded to. Often even the most well-intentioned reporters of an Incident are tempted to assume that since they aren’t sure what the problem is, no action needs to be or can be taken. All apparent incidents must be thoroughly investigated and pass through an Initiate and Assess phase before the Incident Response protocol can be completed.


## Incident Response Roles

## The Incident Commander

The first responder on the Incident Response Team (which could be the first person on the team to hear about a problem) becomes the initial Incident Commander (IC). This person is responsible to make sure Incident Response procedures are followed until the Incident Response procedure is complete, or until another person explicitly agrees to take over IC duties. The Incident Commander is not expected to personally resolve technical issues, and this is not necessarily a technical role. Often, in fact, it helps to have a person in the IC role who is not responsible for fixing the technical details, only for helping to keep the Incident Response Team focused on the plan.

- The First Responder is the first IR Team member who becomes aware of the incident.
 
- Frequently the First Responder is also the incident Reporter.

- The primary responsibility of the Incident Commander is to form a Response Team and make sure they follow this plan.
 
- The First Responder assumes the role as the initial Incident Commander (IC) until IC duties are explicitly handed off to a new IC, or until the incident is closed.

- For the first 15-30 minutes, the First Responder may be the only responder. If needed, the First Responder begins forming the IR Team. See Initiate below.


## The Incident Response Team

During incident response, Responders do the following:

- Assume primary responsibility for the Assess and Remediate steps of the Incident Response Plan.

- Document in real time the measurements, theories, and steps taken using the Slack channel #cms-team (unless another channel is agreed upon).

- Designate an Incident Commander, if the incident might require more than 15-30 minutes to resolve, and do an explicit hand-off.

- When possible this team should include a team Delivery Manager.


## Incident Response Plan

Incident response follows this workflow:

## Initiate

1. Breathe. No one’s life is in danger. Calm, careful work is better than fast, sloppy work.

2. A team member (the reporter, usually soon to become the Incident Commander) notices and reports a system related incident, notifying the Incident Response Team via some or all of:

   - Slack: @here to #cms-team. In some after-hours cases where a serious incident is suspected, @channel may also be appropriate. It may also be appropriate to text and/or select call team members. The most important thing is to make sure that an Incident Response Team is assembled and the plan is followed.
   - When possible, alert the Delivery Manager (contact info in Google spreadsheet listed below).
   - Specific on-call rotation contact information (TBD)
   - Other team contact information (contacts spreadsheet)


## Assess

1. The IC forms a team (responders) to determine if the event is actually a confirmed incident, and if so assesses the severity. Note that some apparent outages can be triggered by external dependencies (DNS servers, cloud storage outages, etc.). In this case there may be very little remediation, for instance, to do, but the Communicate step may still be critical.

2. The IC creates an initial situation report ("sitrep") using Slack or acknowledges false-alarm notification, as appropriate.

3. The IC assesses whether to also activate a contingency plan (for disaster recovery).


## Communicate

1. In the case of an Availability Incident or Critical Defect, the IC coordinates with team members so that someone can notify affected stakeholders or users. This is a critical step in the Incident Response and will generally include such steps as:

2. Notifying users via an @here announcement in the #cms-support channel

3. Posting a CMS Announcement

4. Emailing a notification to the vacmssupport@va.gov email list. The message should include:

   - a brief explanation of the problem
   - what its impacts on users are likely to be
   - (if available) a prediction of when it’s expected to be fixed
   - any known workarounds for missing functionality At this stage, we should also notify VA product owner(s) (See [contacts spreadsheet](https://docs.google.com/spreadsheets/d/1RiqpHVipfQEjPmkOAhe1coy_wL__49MLLIF6b5Th2xI/edit#gid=0))
   
5. In the case of a Confidentiality or Integrity Incident, messaging broad groups of users may be unnecessary; however, it’s critical that we notify VA ISSO: [contacts spreadsheet](https://docs.google.com/spreadsheets/d/1RiqpHVipfQEjPmkOAhe1coy_wL__49MLLIF6b5Th2xI/edit#gid=0)


## Remediate

1. If suspicious activity is suspected or other unanswered questions exist, the team will create database dumps, take disk snapshots of relevant volumes, get screen captures of anomalous activity before making changes such that post-remediation forensic analysis is supported.

2. If a security incident is suspected, collecting evidence may actually be more important than any other remediation activity; it’s tempting to skip this step but it should not be skipped.

3. If a non-security incident, sometimes collecting evidence (logs, etc.) is still important to making sure we understand what went wrong.

4. The responders work to contain and remediate the issue; timelines vary based on the assessed severity.

5. Decisions should be made by the IC and IRs about the timeline of continued work. 24/7 work is rarely needed, but continuity of communication between shifts is almost always important, and most incidents call for at least some disruption of work schedules.

6. The IC coordinates, communicates, and tracks the investigation and remediation.


## Retrospect

1. The responding team holds a retrospective to analyze the incident, capture follow-ups and lessons-learned, and write a formal report.

2. During this process, the team communicates in the following places:

   - Situation updates, investigation notes, and other relevant information gets captured in the issue/ticket created to track this event.
   
   - Real-time communication happens in Slack, in the agreed-upon channel.
   
   - If needed, the team can use a Zoom room, Google Hangout and/or Google Docs to share information that's not appropriate for Slack (PII, etc.).


## Special situations

### Extra checklists for special situations that don't always occur during incidents:


## False Alarm

Follow this checklist if an event turns out not to be an Incident:

[ ] Notify #cms-team of the false alarm.

[ ] Update any associated GitHub/JIRA issues accordingly.

[ ] If any sitreps, announcements, or other messages have been sent out, send a final sitrep, announcement, etc. to all previous recipients, noting the false alarm.


## Handing off IC

Follow this checklist if you need to hand over IC duties:

[ ] Old IC: brief New IC on the situation.

[ ] New IC: confirm that you're taking over.

[ ] New IC: update any GitHub/GitLab/JIRA issues, noting that you're now the IC.

[ ] New IC: send out a sitrep, noting that you're taking over IC.

[ ] Old IC: stick around for 15-20 minutes to ensure a smooth handoff, then log off!

