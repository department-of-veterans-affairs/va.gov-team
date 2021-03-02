# Help desk workflow, processes, and procedures

## Process for users to request support

### Support channels

Users are expected to submit requests which will become a Jira Service Desk ticket by using  a help desk javascript "widget" installed into selected pages in the CMS, to allow users to create support requests, which they can then follow up on via a help desk portal website in which users can create and then track the status of their requests ([https://va-gov.atlassian.net/servicedesk/customer/portal/3](https://va-gov.atlassian.net/servicedesk/customer/portal/3) ).

Some users may submit requests by other channels (e.g. the pre-existing Slack channel), in which case their requests will be manually redirected, or redirected via Slack integration, to a Jira ticket, in order to keep the interaction properly tracked and recorded. 

When a user requests via the help desk portal, a help desk ticket in Jira Service Desk will be automatically created, and outgoing Slack notifications will result so that help desk staff can be easily notified. 

Incoming help desk requests will be immediately replied to, and a first-response and triage workflow will result.

## Responsible Parties

The responsibility of each step in this document will vary; primary parties will be the Help desk Tier 1 staff, while some other responsibility will fall to developers, engineers, trainers, and other staff  in "Tier 2".

### Tier 1 Help desk Agents’ Responsibilities

Tier 1 help desk agents will:

* Ensure that first responses are delivered to any incoming inquiries, within the agreed-upon hours of operation (8am to 8pm ET)

* Ensure that next-steps are taken to create Tier 2 tickets, and convey appropriate requests for assistance from the development team, as needed.

* Respond appropriately to follow up on any open tickets

* Ensure that all open Tier 1 tickets are resolved appropriately.

* Ensure that any Incidents are reported/escalated immediately, and serve as Incident Commander until/unless an appropriate team member takes over that role.

### Tier 2 Responsibilities

Tier 2 staff (aka the development team) will:

* Assist in answering questions from Tier 1

* Ensure that next-steps are taken to prioritize and/or investigate Tier 2 tickets, and convey information about their statuses back to Tier 1 staff

* Respond immediately to the announcement and/or escalation of any Incidents; may serve as Incident Commander until/unless an appropriate team member takes over that role.

### Other Responsibilities

Some responsibilities to coordinate and assist in communication and prioritization of the above activities will also fall to:

* The Help desk Manager (to coordinate any changes to processes and procedures, and to assist in improving reporting)

* The Delivery Manager (to assist in prioritizing Tier 2 requests)

* Other members of the development and/or program team, when called upon, to help ensure that Tier 2 requests are understood appropriately.

## Types of requests

Incoming support requests can be reasonably expected to fall into one or more of the following categories, to be determined during the initial triage process:

* End-user help (logins, easily answered Drupal CMS requests)

    * These will, when possible, be answered directly by help desk staff

    * In some cases, especially at first, consultation with developers may be needed for these.

* Enhancement requests that require developer evaluation and/or code

    * These will usually require immediate discussion with developers (possibly during scrum), in order to clarify the request and its implications

        * In some cases this will result in followup questions for the original reporter/requester, and require some back and forth by email.

        * In some cases a Zoom or other webconference/screenshare tool may be the best way to approach this.

    * Once the enhancement request is well-understood, the next step is to create a Github ticket, add it to the backlog, and bring it to the attention of the Delivery Manager for prioritization with the team.

* Defect requests that require developer evaluation and/or code

* Content questions that require assistance from VA staff

## Procedure to acknowledge request

When receiving an incoming request, the most time-sensitive, and often the most important, step is to acknowledge the request with a first response. The first response to an incoming request should always be quick. Users like to know that we've read their correspondence, and that we're looking into the issue. We don't have to know everything in order to begin an interaction, and we don't even have to be specific about next steps; often our first response may be as simple as:

Hi (name),

Thanks for sending this over. It sounds like you're experiencing a problem with (statement of problem). We'll (research some more about this / put it in front of our engineers immediately / see if I can solve that problem), and we'll follow up once we've got more information.

Let me know if I can help with anything else in the meantime.

Thanks,

(My name)

VA Drupal CMS Support

The simple act of sending a response that acknowledges a question helps create a mutually beneficial collaboration, and tells the user that they're not alone. This also opens some space for the next step, which is triage.

## Triage process

The triage process allows us to accomplish the following:

1. Establish priority/severity so that:

    1. Incidents can be treated appropriately

    2. High-priority user requests can be routed to developers with an appropriate level of time-sensitivity

    3. Other user requests can be routed to developers appropriately (and, in some cases, delayed or even declined if they don’t fit into the prioritized backlog)

2. Establish the following, for sorting and labelling purposes:

    4. Category/component (which website feature or component(s) are the ticket about)? 

    5. Type of request: 

        1. Enhancement

        2. Information request

        3. Defect and Defect reports

        4. Change request

        5. Other

### Establishing category & labels

Often the type of request will be clear from the initial request/report itself. In other cases it may be necessary to do some Tier 1 or Tier 2 work to establish the actual nature of the request.

#### Enhancements

Enhancements are requests for additional features or changes to code.  These will almost always need to be ticketed for Tier 2 and described with a user story. Tier 1 will also need to make sure the desired adjustments and outcomes are well enough understood that developers begin work, or at least discovery about the work. 

The ticketed work, complete with user story and desired outcomes and/or acceptance criteria  should then be presented to DEPO product owners for acceptance and prioritization. 

Once the work has been prioritized for inclusion in a sprint, and/or ticketed sprint work has begun, Tier 1 will need to report back to the requestor about the status of the work.  Some enhancements may require approval; there is some potential overlap with Change requests.

#### Information Requests

Some incoming tickets may be easily solved by providing quick answers, stock knowledge base items, and/or existing training materials. These can be Tier 1-only tickets, and should account for an increasing percentage of the incoming requests as time goes on and canned responses, knowledge base items, and prepared training materials improve.

Some information requests may require assistance from the development team; this will require Tier 1 staff to proactively get help from more technical staff.

#### Defect and Defect Reports

Users will often report "defects", i.e. things that seem broken to the users.  From a Tier 1 help desk perspective, it’s important to explore the user experience, but it’s also important to recognize that many defects are not in fact “defects”. Communicating this clearly between users and developers can be tricky and require careful work by Tier 1 help desk staff.

##### Defects vs. Enhancements 

It’s important to distinguish between **enhancements** (a request for a new addition to an existing feature) and **defect reports** (a notification that an existing feature is not working as intended).

Enhancements are usually optional in nature, though this may depend on the source and the agreed upon work. In general these *must* be prioritized carefully and fit into the development backlog by the product owner so that they do not conflict with other work.

Defects are tricky: often what users report as defects are not actually defects, but may be *an existing feature that is misunderstood, or that is not working as expected*. In this case, rather than reporting a defect to developers, the preferred route may be informing the user about how the feature is *intended*, and making sure they understand how to use the feature.

As an example: a user who expects to be able to upload a spreadsheet and get a chart visualization, may think that they’ve found a defect when uploading an Excel file doesn’t work. But if the feature was designed only for CSV files, it’s the user’s expectation that’s the problem, not a defect. In this case and many others, a defect/defect report may actually be an enhancement request in disguise. But this should be clarified, whenever possible, *before* creating a ticket.

If a defect is definitely a defect, it should be evaluated according to the Defect Severity levels in the Establishing priority/severity section below.

Defect reports have a corresponding "Defect" label in Github. High priority defects have a corresponding GitHub label "Critical defect". 

#### Change Requests

Some help desk tickets may require a "change" (per ITIL: “The addition, modification or removal of anything that could have an effect on IT Services.") which is not an enhancement. Possible examples include: 

* Adjustments to website permissions or security roles for one or more users

* Publishing a previously unpublished document or page

* Adjustments to a UI-level workflow

Change requests that require approval will need to be identified, and specific approval processes documented. Jira Service Desk allows for automated workflows that include an approvals stage.

#### Other Requests

It is inevitable that some requests will be a combination of the above, or fall into a combination of these categories. Tier 1 staff are expected to use conscientious good judgment and communicate actively with the product team (and anyone else who may be involved in resolving, approving, or properly understanding a request).

#### Labels

For workflow and reporting purposes, it’s important to establish a category/component and labelling taxonomy that will be appropriate for both routing requests (in some case, for building work queues or workflows) and for reporting on them (for instance, the prevalence of a particular type of issue over time). Work identifying a labelling taxonomy is now underway.

### Establishing priority/severity

When establishing priority/severity, the first goal is to identify an Incident. If an incoming request is clearly not an incident, the next step is to establish any additional priority or time-sensitivity.

#### Incidents

##### What is an Incident?

An incident is anything that compromises (or could compromise) "CIA": Confidentiality, Integrity, or Availability. The existence of an Incident indicates a need for following a special Incident Response protocol. Incidents are, generally speaking, an emergency and an all-hands-on-deck event, and other help desk protocols may not apply. They are also tightly bound by SLAs and are often critical moments for our work together, so identifying them immediately is crucial.

In a nutshell, an incident is anything that compromises (or could compromise) our or our users’ "CIA": Confidentiality, Integrity, or Availability. 

* Confidentiality means: "secrets". This includes personally identifiable information (PII) — names, addresses, phone numbers, social security numbers, etc. — as well as passwords, service credentials, internal non-public documents, and any copyrighted documents. Any time there is reason to suspect that any confidential information may have been outside of its rightful privacy level, an incident must be opened and acted upon.

* Integrity means the soundness/fitness of purpose of systems or information. If a backup was lost, or a web page was altered, or if an app stopped logging for a while, or if some documents got deleted — those are integrity issues. Sometimes these can indicate deeper incidents (like an attacker deleting logs to cover their tracks), so it's important to report these, as well.

* Availability means the availability of the services we provide. So if an app goes down, dynamic pages fail to update, if something we expect to be running stops running or consistently runs slower than expected — those are availability issues. Note that this only refers to production systems (it's fine if a demo app or QA environment crashes), and also only to unexpected downtime. If a system is shut something down temporarily for planned maintenance it is not an incident.

The occurrence of an Incident should immediately trigger the Incident Response Plan (described in the Workflow section below).

#### Non-Incident priority/severity levels

##### Enhancement priority

Generally speaking, priority levels of Enhancements depend upon the relationship between the user and the product, and contractual agreements for developing new features. This will require knowing the user and the development team’s priorities. In many cases, enhancements will not be worked on by developers. This decision will be up to the product team. Tier 1 staff are expected, however, to actively engage in this conversation, in order to represent the end-users’ point of view and needs, so that the development and product teams can be aware of how the product affects users.

##### Critical Defects

Critical defects must be resolved within two business days in order to meet service level agreements, so it’s imperative that these be surfaced to the team immediately for timely resolution. If possible, these should be treated at nearly the same level of attention as incidents, with an immediate call to action to the appropriate members of the development team.

Defect severity

Defect  severity may be mapped to priority by using the following criteria:

* P1: affects many users OR is highly visible OR induces long-term effects or data changes OR blocks an essential functionality. P1 defects should be considered "critical defects" and handled with a high level of urgency. Critical defects must be identified immediately and surfaced to the dev team for prompt action, as they must be resolved within a maximum of two business days. Critical defects should be labelled as such in both Jira Service Desk and in Github.

* P2: affects some users AND is not highly visible AND has  minimal long-term effects or data changes, AND does not block any essential functionality.

* P3: affects only a few users AND is not highly visible AND has no long-term effects or data changes AND does not block any important functionality.

#### Category/component 

The Category or Component is typically a way of marking which website, feature or set of functionality the request primarily applies to. This will require a discovery process at the time the help desk is initially set up, in order to make an initial list to use. More may be added or adjusted later, but typically these are relatively easy to discern at the outset.

#### Label

Labels are usually most useful for deciding a type of request. For instance, labels may include things like the *type of request* (Enhancement, Information request, Defect report, Change request, Other) or characteristics about the request which are desirable to report on (e.g. Insufficient information provided, Unknown customer, Blocked), etc.  

Labels should also match the Github taxonomy, at least in part, to allow for better organization across platforms.

An approximate labelling taxonomy will be decided at the outset of help desk work, but it is to be expected that this set of labels will change as the work progresses and patterns emerge that are desirable to report on or otherwise track. 

## Workflow for routing of user requests

User requests create tickets; tickets are responded to. The heart of a ticket is always the communications generated by help desk staff, which should be aimed at clarifying, solving and notifying users and the development team in a timely and productive manner.

### Incident Response Plan

If an Incident occurs, the Incident Response Plan should pre-empt all other activities. At a high level, incident response follows this workflow:

#### Initiate:

1. A team member (the reporter) notices and reports a system related incident, notifying the Incident Response Team via some or all of:

* Slack: to be determined by the team

* Specific on-call rotation contact information

* Other team contact information

The first responder on the Incident Response Team (which could be the reporter if the reporter is on the team) becomes the initial Incident Commander (IC).

#### Assess:

2. The IC forms a team (responders) to determine if the event is actually a confirmed incident, and if so assesses the severity. Note that some apparent outages can be triggered by external dependencies (DNS servers, cloud storage outages, etc.).

3. The IC creates an initial situation report ("sitrep") using Slack or acknowledges false-alarm notification, as appropriate.

4. The IC assesses whether to also activate the contingency plan (for disaster recovery).

#### Remediate:

5. If suspicious activity is suspected or other unanswered questions exist, the team will create database dumps, take disk snapshots of relevant volumes, get screen captures of anomalous activity before making changes such that post-remediation forensic analysis is supported.

6. The responders work to contain and remediate the issue; timelines vary based on the assessed severity.

7. The IC coordinates, communicates, and tracks the investigation and remediation.

8. If appropriate to the situation, the IC coordinates with the Product Owner (PO) to notify affected stakeholders or users.

#### Retrospective:

9. The responding team holds a retrospective to analyze the incident, capture follow-ups and lessons-learned, and write a formal report.

10. During this process, the team communicates in the following places:

* Situation updates, investigation notes, and other relevant information gets captured in the issue/ticket created to track this event.

* Real-time communication happens in Slack, in the agreed-upon channel.

* If needed, the team can use a Zoom room, Google Hangout and/or Google Docs to share information that's not appropriate for Slack (PII, etc.).

As a general rule, the most important and sometimes difficult aspect of Incidents is making sure that they are responded to. Often even the most well-intentioned reporters of an Incident are tempted to assume that since they aren’t sure what the problem is, no action needs to be taken. All apparent incidents must be thoroughly investigated and pass through an Initiate and Assess phase before the Incident Response protocol can be completed. 

### General workflow for helpdesk request ticket handling

In most cases, the actual workflow will vary considerably and require more back-and-forth with users than is represented here. For instance, requests for more information, followup questions and clarifications of expectations, etc can add additional communications steps; or, in some cases a user will reopen a previously closed ticket by expanding on their original request.

## Workflow for routing of support requests to Tier 2/3 

When a support request cannot be completely resolved by help desk staff (which we assume will be a large percentage of the time, especially at first), the next step is to route the request to developers to operate as Tier 2 or 3. (Typically the distinction will be that Tier 3 requires product decisions and/or roadmap adjustments; these will hopefully be rare).

Tier 2 and/or 3 requests will be routed through the existing processes for Github issues to be worked on, with two key differences: 

* Tier 1 help desk staff will be actively involved in reporting, advocating for the importance of, and evaluating the need for the request;

* A Development team member will be allocated to assist evaluating and prioritizing incoming requests, so that they can be quickly understood and prioritized for upcoming sprints.

### Creating Github issues/tickets

All  requests which require assistance beyond Tier 1 helpdesk staff  must be prioritized by the product owner in consultation with the development team before any work by developers, trainers, and/or other team members  may begin.  In some cases work may be delayed or even declined if the requests are a poor fit for the work roadmap. Before this evaluation can take place, a Github issue/ticket must be created.

In many cases, the request will need to be discussed with one or more developers before it can be properly evaluated; and it will not be added into a sprint without proper product owner review. However, a Github ticket should be created as early as possible so that developers can properly understand the nature of the problem. 

The proper format for a Github issue/ticket will typically include a **User Story** and **Acceptance Criteria**. Without these the issue cannot be properly evaluated.  The exception is defect reports, which often don’t work well with a user story (but should still include Acceptance Criteria; and, often, attempting to write a user story will help clarify a defect report as well).

Where applicable, Tier 1 help desk staff will also attempt to replicate or otherwise research, so that they can include environment information: what operating system, browser, user permissions level, server environment, etc. the defect occurred in or for which the enhancement is intended.  For instance: "This behavior was replicated  for an authenticated, non-privileged user, in MacOSX, Chrome 86.0.42 on the staging environment."

##### Critical defects

If these are actually Incidents, they should be handled using the Incident Response Plan above. Note that the Severity level of defect may be very easy to confuse with an Incident; when in doubt, confirm with the team. If still unsure, err on the side of declaring an Incident.

Critical Defects should however also be handled with urgency, as they must be resolved within a maximum of two business days. These must be brought to the attention of the Delivery Manager and/or Product Owner as soon as possible, in order to make sure work can begin on them immediately.

##### High-priority/time-sensitive requests for enhancements

High-priority or time-sensitive requests for enhancements will need to be prioritized differently than non-priority ones. It’s important to make sure that the development team knows if a given ticket is time-sensitive. This might include adding a label, adding a phrase like [Priority] to the ticket title, or other steps. Typically this will *not* be decided by the project team, but by DEPO, and so any enhancements that might be high-priority or time-sensitive should be escalated immediately.

##### Other requests for enhancements

Even if these are declined by the team; it’s useful to have a record of them, and to bring them up for discussion, since this is important feedback about user needs. A ticket should be created in Github and labelled appropriately.

##### Other defect reports

Low severity defect reports may be declined by the team in order to maintain a high level of productivity on priority work. However, it’s important to have a record of them. In some cases Low severity defects may provide clues to deeper problems! Or, if a pattern emerges of similar Low severity defects, it may indicate a need for future development or concerted effort. A ticket should be created in Github and labelled appropriately.

##### Requests that lead to improved documentation and/or additional training

In many cases, requests for assistance should result in the creation or improvement of training materials, which should help make other similar requests into Tier 1 requests in the future. Any issues that can result in the creation of knowledge base or training materials, should.

## Keeping users updated on request status

As a general rule, overcommunication is preferable.  Users should always feel that they have been notified about the most current status of their request. Whenever the status of a request changes, the user should be informed. Some flexibility here is advisable, since in many cases users are better off knowing only vague outlines of the work, rather than excessive detail. Help desk staff will use their discretion and judgement in order to provide the best experience for users.

### Types of updates to provide users

Users should, in most circumstances,  receive as many of the following as are applicable (note that any given ticket may include many of these): 

* **Initial first response** (as close to immediate as possible, and *always* within SLA times)

* **Request for clarification** (e.g. "when you say ‘the thing is busted’, can you tell me more about what you’re trying to do, and what you see on the screen when you try it?")

* **Post-triage notification** (to tell the user that we’ve evaluated the request, we’re continuing work, and indicate some sort of future status for what to expect). In many cases this may be unnecessary, but it should be considered as an option.

    * For an Incident or critical defect, this should include a notification that we have identified an incident or critical defect, and a description of how we will proceed. (For more details, see the definition of an Incident, and the Incident Response plan overview, above; and the language around Critical Defects).

    * For a help desk issue which has *not* been triaged to be high-priority, this may be simply a reassurance that developers will review the defect or enhancement to find out more. If work is already scheduled or underway, an update to say so may be appropriate.

    * In any issues, if a known workaround exists, it should be immediately communicated to the user. 

    * At this stage a deadline or promised completion date is *never appropriate.*

* **Status Update** as work progresses (e.g. "Our developers have pulled this issue into the next sprint and we’ll begin building your enhancement next week.")

    * At this stage a deadline or promised completion date is *never appropriate*, but an update describing the actions taken may be appropriate in some circumstances (e.g. "we’ll be doing some detailed QA to make sure there’s no risk, before deployment of the fix").*.*

* **Questions** surfaced by the work itself (e.g. "You requested the ability to use TIFF files for hero image uploads, but our developers are interested in the types of files you’re trying to use. Can you point me to an example or two, so that we can make sure we’re understanding the issue correctly?")

* An **explanation or information delivery**(e.g. a link to a training video, knowledge base article, or just a detailed email about how a feature is intended to be used). In some cases this might be enough to resolve an issue on its own; in other cases it’ll result in additional questions, and additional steps.

* **Notification that the work is ready for testing** (e.g. "We’ve deployed the new feature that you requested to our staging site! Please let us know how it works out!")

* **Notification that the work is deployed** to production and/or complete (e.g. "We’ve deployed the new feature that you requested to production!")

* **Notification that the puzzle has been solved**(e.g. "We’ve isolated the part of your data file that was causing the problem and adjusted row 17;  you should try to upload the attached file".) 

* **Follow up to no reply** (preferably within 1-2 days) if you’ve asked a user a question and they have not responded (e.g. "Just checking in: were you able to change your icons, or do you need additional help?")

* **Second followup to no reply** after 5-7 additional days when a user has not responded, to tell them politely that you’re closing the ticket. (e.g. "Since we haven’t heard from you, we’ll assume that you no longer need our assistance").

* **A final thank you** when an issue is complete and being marked as Resolved. This ensures that the user ends their help desk interaction with positivity and a feeling of having received thorough support.

## Determine workflow (epic) for support

A Github Epic specifically identified for support tickets will allow easy identification of support tickets, so that they can be appropriately prioritized and worked on by the development team.

## Process of resolving help requests

A request can be considered Resolved in several ways:

* When requested information has been provided to the user’s satisfaction.

* When the requested developer work can reasonably be determined "done" (e.g. developers built and deployed an enhancement to the user’s satisfaction, or a defect has been repaired).

* When the initial request has been declined, and the user has been notified.

* When the user does not provide enough information to proceed, and 7 or more days have passed, and the user has been asked at least twice to respond, and is notified that the ticket will now be closed.

Once a ticket is Resolved, it no longer affects SLA times and no longer needs any action by help desk staff. A Resolved ticket should be re-openable by users if needed (within a reasonable time-frame). Caution should be taken not to resolve tickets that may not have completely met user requirements.

