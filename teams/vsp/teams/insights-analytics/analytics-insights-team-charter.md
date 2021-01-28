# VSP Analytics & Insights Charter

---

## Why we're here

### North Star:
Number of Va.gov teams reporting metrics (product KPIs) every month for product decisions.

### Product Suite (if applicable): 

Platform

### Team Mission Statement:
Empower Veteran Facing Services teams to make holistic data-informed decisions for better Veteran outcomes.

### Product Portfolio:

**Products**
- KPI Dashboarding
- Google Tag Manager
- Google Analytics
- Social Studios
- VFS KPI Setting and Tracking Processes
- Domo
- BigQuery

**Metrics Suite**
- Google Analytics
- ForeSee/Medallia*
- Contact Centers*
    - IRIS
    - National Contact Center
    - Health Resource Center
    - WHVAH
    - Education Hotline
- Social Studios
- PA&I
- Grafana*
- Speedcurve*

* Grafana is owned by VSP Back End Tools and VSP Operations. Speedcurve is owned by VSP Front End Tools. Contact Center & survey data is owned by VSP Contact Centers.

### Responsibilities:
*Employ processes and tools that collect and share analytics on VA.gov - provide VFS teams data for product decision making.*

- Define and maintain rules of engagement (ROE) for how VSP Analytics & Insights and VFS teams should collaborate
- Keep analytics best practice documentation up to date
- Be available in [#vfs-platform-support](https://dsva.slack.com/channels/vfs-platform-support) and [#vfs-analytics](https://dsva.slack.com/channels/vfs-analytics) to answer Analytics related questions
- Implement analytics on veteran-facing products
    - Work with teams' product managers and front end developers to implement Google Tag Manager before launches
    - QA Google Tag Manager for quality analytics before launches
    - Work with teams' product managers and front end developers to implement ForeSee surveys before launches
- Support KPI Setting and Tracking across VFS and VSP teams
    - Host KPI setting workshops with teams
    - Check in quarterly with teams to support KPI tracking
    - Document and track team KPIs, including baselines, goals, and results
    - Provide deep dive sessions with Product Managers
    - Provide KPI and OKR resource decks
    - Determine additional KPI or metrics coaching or workshop opportunities
- Maintain repository of relevant VFS data
    - Determine success metrics for VFS products
    - Document where success metrics live and how to obtain them
    - Discover which success metrics are uncaptured
        - Determine a process for how to wrangle uncaptured metrics (or document any blockers)
- Deploy and maintain the dashboards
    - Aggregate relevent data from across different channels
    - Visualize product problems
    - Analyze data where appropriate
    - Maintain BigQuery
        - Maintain data models
        - Pipe data where appropriate
        - Work with other VSP teams to uphold data integrity
        - Decrease costs through efficient processes
    - Connect all relevant and available data to Domo
- Respond to and publish one-off and recurring data reporting requests
- Understand available VA.gov related data and answer questions or triage where appropriate

### Roadmap:
[Link to Github Roadmap](https://github.com/department-of-veterans-affairs/va.gov-team#workspaces/vsp-5cedc9cce6e3335dc5a49fc4/board?labels=analytics-insights,super-epic&repos=133843125)

---

## Who we are

### Team Members:
- DEPO Platform Product Leads: _Rachael Roueche_
- Product Manager: _Joanne Esteban_
- Engineering Lead - Data Warehouse Engineer: _Jason Cavnar_
- Implementation Specialist: _Jon Wehausen_
- Implementation Specialist: _Brian Martin_
- Reporting Specialist: _Ben McGrady_
- Designer/UX Researcher: _Mandy Massengill_
---

## How we work

### Workflow + Cadence

#### Stand-up
Check in on people and product progress

- Zoom M, F @ 1pm ET
    - 15-30 min
- Slack Up T, Th @ 1pm ET
- 3 Question Format (based on team objectives): What did I accomplish yesterday? What will I do today? Any impediments, dependencies, blockers?

#### Sprint Planning
Outline work to be done this sprint in order to accomplish the team's goals

- 1st Wednesday of every sprint @ 1:45pm ET
- 45 minutes

#### Retro
Review accomplishments from prior sprint, what went well, what can be improvemed, what questions people have, and any action items

- 1st Wednesday of every sprint @ 1pm ET
- 45 minutes

#### Grooming
Assess and update workload for remainder of sprint

- 2nd Wednesday of every sprint @ 1:15pm ET
- 45 minutes
- review customer support tickets
- review current sprint objectives
- stretch: assess ideas for upcoming sprint

#### Issue Etiquette
For an issue to go into the Current Sprint column, it must have the following (created using the “Standard Issue Template”):

- Estimate
- Title that explains task
- Description with Background and Acceptance Criteria
- Labels: `Analytics-Insights`
- User Story (if applicable), Goal, and Acceptance Criteria
- Nested in an Epic/Initiative Epic

All work should be validated as defined by the acceptance criteria. Each ticket's last comment before closing should reflect whether validation has occurred, and by whom. By default, assign your PM to validate any tasks you are unable to validate yourself.

If there is a new RED LIGHT URGENT work request, contact the Product Manager and ask for help to work it into the sprint.

*Prioritizing*

- Ensure that we are putting VFS teams and Veteran Facing Services first. In an effort to provide excellent customer support, reply to Slack messages within a general 2 hour time frame. This can be a threaded response, as in "We should be able to take a look tomorrow. Could you please submit this as a GH issue using this template: [link]?" [Platform Slack message with customer service message](https://dsva.slack.com/archives/CJRQ85PQB/p1564606636087800).

<details>
  <summary>Prioritization Guidelines</summary>
  
  #### Analytics Prioritization
**Prioritization**

1. Bugs that result in data loss or security issues: 

   1. **PII is being shared**
   2. Prevents VA.gov user interaction tracking (GTM tags from running/analytics collection)
   3. Data is lost (that we cannot backdate) in Google Analytics or BigQuery

2. Customer Support requests - launch date is this sprint

   1. GTM request
   2. *KPI dashboard request*

3. Bugs that prevent data from being updated, but not lost

4. Customer Support requests

   By order of work type

   1. Launch Date - the sooner the launch date, the earlier we should be working on it
   2. Estimation - ???
   3. First-come, first-serve - If a request comes through and multiple requests for launch a few month from now come through, use first-come, first-serve

   By order of issue type

   1. GTM request - CTO's Office or Covid
   2. GTM request - VFS Product
   3. GTM request - VSP Product
   4. General Reporting Question - CTO's Office or DEPO
   5. New KPI Dashboard request
   6. General Reporting request - VFS Team
   7. KPI Dashboard iteration request

5. Additional Sprint Objectives

**Other prioritization notes:**

- Access requests should be done day of, or in the next 2-3 business days
  - Offboarding from Google Analytics & Domo
  - Access to Google Analytics
  - Access to Domo
- Background information on customer Support requests (see [PRICE exercise](https://docs.google.com/spreadsheets/d/1_g8qmfYd0T1IxRVj2dcF9SCXQKPBx010ahFNNucpPLI/edit?usp=chrome_omnibox&ouid=107876873085830307705), [previous Mural board]())
- Github Projects cadence
  - We use the VSP Analytics & Insights - Customer Support project board for all VFS customer support. Any issue opened with the label, `analytics-request` will be added to the project backlog.
  - VSP team members will only be on GH tickets if they are currently working on them. Please remove yourself if you have completed your work on the issue.
  - As you work through an issue, please move it to the appropriate swim lane. Team members are free to close request issues themselves.
    - If you have completed an issue, and the VFS stakeholder has not responded, you may close the issue after the next Planning or Grooming cycle of the sprint.
  - New implementation or dashboard requests should be responded to by Planning or Grooming that week
- Analytics is on VSP rotational support on Slack (#vfs-platform-support). Please see the rotational schedule for scheduling information.
  - If you are on Analytics rotational support, please add the tags, `analytics`, `google analytics`, `domo`, and `google tag manager` to your Slack keywords. This allows you to be pinged 
  - The team member on rotational support should monitor the following channels for analytics questions or requests: `#vfs-platform-support`, `#vfs-analytics`, `#vsp-analytics`
  - Please see [DEPO documentation](https://vfs.atlassian.net/wiki/spaces/~497183570/pages/594182160/Slack+Usage+Guidelines+for+Teams+on+the+Veteran+Facing+Services+Platform+VSP+Contract) on Slack usage guidelines
  - If a support request can't be completed quickly (more than 5-10 minutes), a ticket will need to be created & triaged
  - If a support request is flagged by the customer as 'urgent' (i.e. please have a report by today or tomorrow) or a customer will not move the conversation into #vfs-platform-support or fill out a Github request template, please escalate to the Product Manager or escalate to the Product Owner if the Product Manager is out of office
- If a bug or an urgent matter backs up customer service issues for the sprint, please flag the Product Manager (please flag the Product Owner if the Product Manager is out of office)
</details>

#### Team Norms

- Be respectful, both online and off; push back, don't attack
- Show your face (Webcam) at meetings / calls
- Speak up! - everyone’s voice matters
- Take care of yourself: we are flexible, but intentional in the way we work
- Stay present: pay attention to yourself and others
- Let’s have fun and do great work!

#### Slack:

This is our main means of communication with each other. Keep as much conversation in public channels as possible, to minimize duplicative and extraneous communication.

#### GitHub
GitHub is the single source of truth. Every body of work should be documented for tracking and capacity planning.

#### General things
- Update tickets regularly. If conversations happen in Slack that are pertinent to a product or initiative, copy the useful info into GitHub/ZenHub.
- Extra time? Explore the "Ready" column in ZenHub.

#### Team Knowledge
- Google Analytics 
    - [Overview recording](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/google-analytics/resources-google-analytics-walkthrough.md)
    - Access - ping us on Slack, [#vfs-platform-support](https://dsva.slack.com/channels/vfs-platform-support)
- [Zenhub](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/zenhub_onboarding.pdf)
- [Analytics Playbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/AnalyticsPlaybook.md)

---
#### Grey Areas & Questions
- (May 2020) What does VSP Analytics & Insights own in relation to the analytics that is currently owned by the other VSP teams? Our current assumption is that VSP Analytics & Insights displays data, handles most customer (VFS, storytellers, etc.) interations with data, analyzes data, and provides tracking for the products listed in this charter. However, the collection and instrumentation of the other sources of data, such as Prometheus, Speedcurve, etc., will live with and be owned by their current VSP owners. So if someone has a Speedcurve question, VSP Analytics & Insights would answer basic questions such as "is my performance too low?" but would triage further questions, particularly engineering and debuggin related questions, to the Front End Tools Team. Is this assumption correct?
