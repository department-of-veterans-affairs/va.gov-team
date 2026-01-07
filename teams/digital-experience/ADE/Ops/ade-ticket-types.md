# ADE Ticket Types

## ADE Intake Requests

This is [the intake ticket through which VFS teams request ADE support](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=Accessibility-Digital-Experience-Intake-Ticket.md). The intake may be created by a VFS team or by a member of ADE on behalf of VFS teams. This intake ticket is the parent and will contain all the work relating to this request.

* During refinement ADE will create/attach child tickets to capture individual support tasks needed. This is typically done by Delivery Lead or Team Lead.   
* ADE SMEs will use the intake ticket to communicate with the product team/stakeholder and share any deliverables.

  
### Child Ticket Creation Workflow for ADE Research 
The child ticket creation workflow for issues found during pilots and research sessions.

1\. Share Feedback: Ensure that you share feedback with the research team during the session via the [Slack Feedback Channel](https://dsva.slack.com/archives/C40B45NJK) or preferred method communicated by the research team (eg. Mural, Google Doc, etc.)  
2\. Track Research: Verify that the [research tracker is updated](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/digital-experience/ADE/Ops/ade-tickets-and-how-to-use-them.md#:~:text=Update%20the-,research%20tracker,-with%3A) with:
* the details of the study (tech, skill, device, etc.)  
* the number of accessibility issues identified (columns L-S).

3\. Generate Tickets: If any issues were found, create connected child tickets using the ADE [Research Feedback template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=ADE-internal-research-accessibility-feedback-issue-quantification.md)
* Ensure that this child has the label ADE Research Feedback, by default.

4\. Close Tickets: Close the child tickets after connecting them to the intake.  
Please fill all fields in the GitHub ticket (originator team, closed date, sprint, etc) before closing. Ref. Closing Tickets Section  
5\. Track Closed Tickets: Ensure all the tickets you closed and all of the ticket’s relevant information are entered into the closed tickets tracker in the sheet for the appropriate sprint.

### ADE Ticket Templates for VFS Teams

| **VFS Template** | Description/When to use | Title Format (Suggested) |   
|------------------|------------------|-------------------------------------|  
| [Accessibility Digital Experience (ADE) Intake Form](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=Accessibility-Digital-Experience-Intake-Ticket.md) | Use this ticket to request collaboration on a new initiative with the Accessibility Digital Experience (ADE) team | \[ADE Intake\]:\[Team Name\]\[Product\] |  


## ADE Work Ticket  
These are sub-issues/child tickets created by ADE.

* Child tickets are created for each type of service requested in the main intake, based on the [ADE menu of services](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/digital-experience/ADE/ade-services.md).  
* Product teams can see work tickets attached to their intake, but these work tickets are for ADE use.  
* ADE SMEs can add notes in comments and checklists to help you track your progress and move the ticket through the status swim lanes described below.

### ADE Ticket Templates for ADE Internal Use

| **Internal Template** | Description/When to use | Title Format (Suggested) |   
|------------------|------------------|-------------------------------------|  
| [ADE Research Child Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=ADE-internal-research-refined-ticket-template.md) | Template for ADE Research Child Tickets \- based on the work requested in the intake ticket. These will be created as sub-issues, under the parent intake ticket. | [ADE Research]:[Team Name][Product][Researching] - [Type of Support Requested]   |  
| [ADE Pilot Research Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=ADE-internal-Research-Pilot-Ticket.md) | Template for pilots conducted prior to research, created based on requests made to ADE. | [ADE Research - Pilot]:[Team Name][Product][Researching]- [Device Type](Month Year of Research) |  
| [ADE Research Accessibility Feedback Issue Quantification Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=ADE-internal-research-accessibility-feedback-issue-quantification.md) |Template to utilize following ADE research support for AT, in order to document and quantify the issues identified. These will be created as sub-issues, under the parent intake ticket. | [ADE Research - Feedback] - [Team Name]: [Study] (Type of accessibility issue encountered) |  
| [ADE Accessibility Short Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=ADE-Internal-Short-Ticket.md) | Template for ADE members to utilize, when needing to create a ticket outside the intake process such as a child ticket or an internal ADE work ticket. | [ADE Support]:[Team][Product][Requesting]   
| [ADE 508 Accessibility Audit Support Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=ADE-Internal-508-Audit-Support-Ticket.md) | Template for ADE members to utilize, when needing to create a 508 Audit Support Ticket as either a primary parent intake ticket c/o email report received by Martha, or as a child ticket aka sub-issue. | **Parent Ticket:** [ADE 508 Audit]: `TEAM NAME`: `PRODUCT AUDITED`: 508 Audit Report Findings Support <br> <br> **Child ticket (sub-issue)** [ADE Support]: `TEAM NAME\`: `PRODUCT AUDITED`: 508 Audit Report Findings -`Name of Specific Finding` Issue |   
| [ADE CC Work Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=ADE-Internal-CC-Work-Ticket.md) | Template for ADE members to utilize, when needing to create a ticket oustide the intake process such as a child ticket or a parent/epic for work being done to support the CC. | [ADE CC]:[Team][Product][Requesting][Stage] |   
| [ADE Accessibility Office Hours Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=ADE-Internal-Office-Hours-Ticket.md) | Template for ADE members to utilize, when needing to create a ticket to track work done to support office hours. Ex. Prepwork before the call. | [ADE Office Hours][Team Name]: [Product] - [Support Requested] | 

> [!NOTE]
> ### Ticket Creation Automation
> When an ADE ticket is created it automatically assigns Lakwi, Sara and Martha and applies the `ADE` label.
> - This label is vital, it triggers GitHub Projects to pull the ticket into ADE's GHP views, adding it to our project.
>     - A ticket must have the `ADE` label and live in the Accessibility DE Project, to become visible to the ADE Team.
>     - The `ADE Intake` label is only present on parent tickets aka intakes aka epics.
>     - Upon the initial ticket save, the `New Intakes` [lane on the main board](https://github.com/orgs/department-of-veterans-affairs/projects/1597/views/1) is set.
