# VSP Analytics & Insights Charter

---

## Why we're here

### North Star:
Number of Va.gov teams using KPIs every quarter to re-articulate strategies and re-develop hypotheses.

### Product Suite (if applicable): 

Platform

### Team Mission Statement:
Empower Veteran Facing Services teams to make more data-informed decisions for better Veteran outcomes.

### Product Portfolio:

**Products**
- Product Success Tool
- Google Tag Manager
- Google Analytics
- ForeSee
- Social Studios
- VFS KPI Setting and Tracking Processes
- Contact Center relationships
- Contact Center triaging
- Domo
- BigQuery

**Metrics Suite**
- Google Analytics
- ForeSee
- Contact Centers
    - IRIS
    - National Contact Center
    - Health Resource Center
    - WHVAH
    - Education Hotline
- Social Studios
- PA&I
- Grafana*
- Speedcurve*

* Grafana is owned by VSP Back End Tools and VSP Operations. Speedcurve is owned by VSP Front End Tools.

### Responsibilities:
*Employ processes and tools that collect and share analytics on VA.gov - provide VFS teams data for product decision making.*

- Define and maintain rules of engagement (ROE) for how VSP Analytics & Insights and VFS teams should collaborate
- Keep analytics and contact centers best practice documentation up to date
- Be available in #vfs-platform-support and #vfs-analytics to answer Analytics and Contact Center related questions
- Implement analytics on veteran-facing products
    - Work with teams' product managers and front end developers to implement Google Tag Manager before launches
    - QA Google Tag Manager for quality analytics before launches
    - Work with teams' product managers and front end developers to implement ForeSee surveys before launches
    - Work with teams to ensure contact centers are prepared for launches
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
- Deploy and maintain the Product Success Tool
    - Aggregate relevent data from across different channels
    - Visualize product problems
    - Analyze data where appropriate
    - Maintain BigQuery
        - Maintain data models
        - Pipe data where appropriate
        - Work with other VSP teams to uphold data integrity
        - Decrease costs through efficient processes
    - Connect all relevant and available data to Domo
- Maintain & develop Contact Center relationships
- Determine appropriate ForeSee tracking questions and strategy
- Support Contact Center issues
    - Triage Tier 3 issues to appropriate VFS teams
    - Respond to Tier 3 issues
- Respond to and publish one-off and recurring data reporting requests
- Understand available VA.gov related data and answer questions or triage where appropriate

### Roadmap:
[Link to Github Roadmap](https://github.com/department-of-veterans-affairs/va.gov-team#workspaces/vsp-5cedc9cce6e3335dc5a49fc4/board?labels=analytics-insights,super-epic&repos=133843125)

---

## Who we are

### Team Members:
- DEPO Platform Product Leads: _Kevin Hoffman & Dror Matalon_
- DEPO Contact Center Product Lead: _Chante Lantos-Swett_
- Product Manager: _Joanne Esteban_
- Implementation Specialist: _Jon Wehausen_
- Implementation Specialist: _Brian Martin_
- Designer/UX Researcher: _Amy Cesal_
- Contact Center Lead: _Kimberley Daniels_

---

## How we work

### Workflow + Cadence

#### Stand-up
Check in on people and product progress

- Zoom M, T, W, F @ 10:00am ET
    - 15 min
- Slack Up Th @ 10:00am ET
- 3 Question Format (based on team objectives): What did I accomplish yesterday? What will I do today? Any impediments?

#### Sprint Planning
Outline work to be done this sprint in order to accomplish the team's goals

- 1st Wednesday of every sprint @ 10:30am ET
- 1 hour

#### Retro
Review accomplishments from prior sprint, what went well, what can be improvemed, what questions people have, and any action items

- 1st Wednesday of every sprint @ 10:00am ET
- 30 min

#### Grooming
Assess and update workload for remainder of sprint

- 2nd Wednesday of every sprint @ 10:00am ET
- 1 hour
- assess ideas for upcoming sprint

#### Issue Etiquette
For an issue to go into the Current Sprint column, it must have the following (created using the “Standard Issue Template”):

- Estimate
- Title that explains task
- Description with Background and Acceptance Criteria
- Labels: `Analytics-Insights`
- User Story (if applicable), Goal, and Acceptance Criteria
- Nested in an Epic/Super Epic

All work should be validated as defined by the acceptance criteria. Each ticket's last comment before closing should reflect whether validation has occurred, and by whom. By default, assign your PM to validate any tasks you are unable to validate yourself.

If there is a new RED LIGHT URGENT work request, contact the Product Manager and ask for help to work it into the sprint.

*Prioritizing*
- [Link to Priorities](https://app.mural.co/t/adhocvetsgov9623/m/adhocvetsgov9623/1585175387763/ebc0ae5ed4997ab30dd932409b12269a34bd5bce)
- Ensure that we are putting VFS teams and Veteran Facing Services first. In an effort to provide excellent customer support, reply to Slack messages within a general 2 hour time frame. This can be a threaded response, as in "We should be able to take a look tomorrow. Could you please submit this as a GH issue using this template: [link]?" [Platform Slack message with customer service message](https://dsva.slack.com/archives/CJRQ85PQB/p1564606636087800).

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
    - Access - ping us on Slack, #vfs-platform-support
- [Zenhub](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/zenhub_onboarding.pdf)
- Product Success Tool

#### Team Questions for DEPO/leadership
- (May 2020) What does VSP Analytics & Insights own in relation to the analytics that is currently owned by the other VSP teams? Our current assumption is that VSP Analytics & Insights displays data, handles most customer (VFS, storytellers, etc.) interations with data, analyzes data, and provides tracking for the products listed in this charter. However, the collection and instrumentation of the other sources of data, such as Prometheus, Speedcurve, etc., will live with and be owned by their current VSP owners. So if someone has a Speedcurve question, VSP Analytics & Insights would answer basic questions such as "is my performance too low?" but would triage further questions, particularly engineering and debuggin related questions, to the Front End Tools Team. Is this assumption correct?
