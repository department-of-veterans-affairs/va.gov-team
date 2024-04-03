# 2024-03 SLO Content research for Veteran-facing communication
> Authentication status communication to Veterans
 
Exploring what content is important to Veterans, and how that content should be documented and shared. This incorporates design patterns from:
- Login partners
- Other government apps and tools
- [VA.gov design system](https://design.va.gov/)

## Summary of findings
- Identity providers (such as ID.me and AuthO) provide status pages (like the [one found on VA.gov](https://vagov.statuspage.io/)) to communicate outages and maintenance.
Our design system provides industry standard response language and components for planned and unplanned system outages (including outages related to signing in).
   - These updates are made manually but leverage pre-existing content templates. 
   - CAIA offers assistance with updates.
   - Currently these templates don’t link to our [status page](https://vagov.statuspage.io/).
- There’s an [existing Veteran-facing page](https://www.va.gov/performance-dashboard/) with performance metrics for sign-in managed by the IIR team.
- We don’t have a way to **automatically** indicate latency or outages for SiS,  SSOe, or CSPs
   - If we want to render a link to outage details inline with the sign-in modal (referenced during kickoff meeting) additional links or help text on login pages tends to be [below the login CTA component](https://saaswebsites.com/page-categories/login-form-page/).
      - Pursuing a solution like this would require collaboration with design systems.

## Recommendations
- Develop an action plan for publishing alerts and banner notifications on VA.gov
   - [Example of how Platform does this](https://dsva.slack.com/archives/C01K37HRUAH/p1706631681822679)
- [Use (or customize) existing content](https://docs.google.com/document/d/14ekf2-kyqAPJYdjK_CfHaiaV1HuJYJxM8r4tIyx_zqo/edit#heading=h.vtpxh5t38y73) for banner and alert messaging related to system outages
   - Tailor content to specify the dates of planned maintenance.
- Publish a link to the new (or [existing](https://vagov.statuspage.io/)) status page on sign in FAQ page.
- Improve existing status page
   - Revise the labels on va.gov status page for identity, CPSs,  and SSOe  to make them easier to understand
   - Add missing CSPs
- [Coordinate with the IIR team](https://dsva.slack.com/archives/C06PLP6L0Q3/p1710958023280299) to ensure we don’t publish duplicate, redundant, or conflicting information.
   - [Additional ideation]() for consideration,

## Problem definition
### Audience
Veterans trying to log in to access VA.gov who encounter an error.

### Goals
- Our team becomes more proactive around maintenance.
- We empower Veterans with next steps if they’re not able to log in.

### Out of scope
- Push notifications - emails, texts, etc. to Veterans.

### Problems to solve
1. We don’t currently communicate outages and scheduled maintenance to Veterans.
   - We should (automatically) note downtime or latency for authentication SLOs somewhere publicly visible to both Veterans and VA teams.
   - CTA button (if in scope?)
      - We need to align with design system and CAIA standards
      - Competitors place “help” links below CTAs
2. Clarify what is essential for the MVP
   - Publishing outages and maintenance on a public page.
      - We technically already do this on the va.gov status page.
      - What gaps are we filling?
   - How do we keep the scope simple?

### What’s the state of things today?
- Datadog dashboard information is available but not published and shared
- Known outages are posted in:
   - On-call Slack channels (automated?)
   - Maintenance Slack channel (automated?)
   - Posts are shared in #vsp-identity (manually)
- VA.gov status page is updated manually with scheduled maintenance
   - This page contains links to OCTO Slack threads (doesn’t seem like a public audience).
- Emails are sent to Veterans regarding scheduled maintenance
   - Login.gov example
   - Are we responsible for communicating CSP outages:
      - Automatically?
      - Manually (via banners, etc.)?

### Initial ideas
- Could we host a page on the platform site that’s accessible to both VA teams and Veterans?
 -Can we add a link to status from the sign-in FAQ page?
- Could we use the existing status page as a solution?
   - Status page is limited to 1 license (can’t host a separate page for authentication)
   - Can we create a heading / anchor link?

## Competitors
- Reference resources in the “Signing in” section
   - ID.me
   - MyHealtheVet
   - Login.gov
   - DS logon
- Additional competitors
   - Healthcare
   - Other gov website
   - IRS: status of mission-critical functions

| Competitor | Outage + maintenance behavior | Screenshot | 
| --- | --- | --- |
| Login.gov | Planned maintenance documented on status page. <br> **Performance monitored for**: <br> - Login <br> - Brochure site <br> - Customer Support. <br> **Audience**: <br> - Individuals <br> - Agency partners <br> - Agency developers | 
| ID.me | Could not find info on their main website. <br> Outage details only available on developer website status page. <br> **Performance monitored for**: <br> - Document verification <br> - Account management <br> - ID.me Shop <br> - Login Services <br> - Group Verification <br> - Mobile applications. <br> **Audience**: Developers. <br> **Notes**: Some status items appear to be services |
| MyHealtheVet | Could not find info on their public site, or a status page | Documentation shared with VA development teams about service details.|
| DS Logon | Could not find info on their public site, or a status page | N/A
| AuthO by Okta | Community forum post. Directs folks to status page. <br> **Performance monitored for**: <br> - Core services: User authentication and Machine authentication <br> - Supporting services: Multi-factor authentication, Management API, Tenant logs, CDN. <br> **Audience**: <br> - Developers
| VA.gov/performance | Public page with performance metrics. <br> **Signed in users**: The total count of users who have signed in to VA.gov over the last 12 months, using ID.me, MyHealthVet, or DS Logon. Managed by IIR team | 
| va.gov status page | Status page for multiple VA functions. <br> **Performance monitored for**: <br> - Identity team metrics (not clear which ones) <br> - DS Logon <br> - ID.me <br> - My Healthe Vet <br> **Audience**: <br> - Veterans <br> - Developers. <br> **Notes**: Not all CSPs are represented. <br> - Titles of graphs are not easily readable
| IRS | FAQ page for mission critical functions <br> - Provides FAQs and help recommendations for common tasks <br> - Far more detailed action items to deflect support questions <br> - Doesn’t address planned maintenance <br> - Not a comparable context or scope, but interesting approach <br> **Audience**: General public |
| Blue Cross | Member services page <br> - Very high-level messaging <br> - Doesn’t provide links or next steps <br> **Audience**: <br> - Members or physicians | 


## Process diagram
Process mapping for content/communication (MVP)

## Design system guidance
> Note: Our response to SLO latency, maintenance, and outages  is out of scope for this project. However based on our design system guidelines,  this communication should happen when we’re aware of an issue.

- Sign-in and CSPs downtime:
   - Unscheduled maintenance that impacts signing in must use the alert component.
   - Scheduled maintenance that impacts signing in must use the banner component.

## Research on best practices
### Key takeaways
 - Messaging:
   - Inform the user about what is happening and how it impacts them
   - Let them know the issue is temporary
   - Assure them you’re working on a solution
   - Keep language clear and concise (don’t over-communicate)
   - Provide alternatives where possible
- Action:
   - Link to your status page so they have visibility into when the issue is resolved
   - Push  messaging to your support channels
- Design components
   - Banner message
   - Alerts
   - Visible inline with user action
### References
- Outages for critical systems
   - Website maintenance
   - UX of critical failure
   - Communicating with customers during an outage
- General communication
   - Indicators and notifications
   - Error messages

## Appendix
### Tasks
   - [x] Goals and audience
   - [x] Define the problem
   - [x] Analyze competitors
   - [x] Review design system and CAIA guidelines
   - [x] Map baseline content model from competitors (content components)
   - [x] No commonalities
   - [x] Analyze help links on login modals
   - [x] Process mapping
   - [x] Generate ideas
   - [x] Research on UX best practices
   - [x] Make recommendations

### Additional notes
- How vets-api documents and shares SLOs with VA development teams
   - Public-facing page
   - Link to Datadog dashboard for our current team SLOs
