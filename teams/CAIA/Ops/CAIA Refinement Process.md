# CAIA Refinement process
Updated 10/2024

## In this document
- [Overview](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/Ops/CAIA%20Refinement%20Process.md#overview)
  - [Purpose of this document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/Ops/CAIA%20Refinement%20Process.md#purpose-of-this-document)
  - [Purpose of Refinement](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/Ops/CAIA%20Refinement%20Process.md#purpose-of-caia-ops-refinement)
- [Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/Ops/CAIA%20Refinement%20Process.md#process)
  - [Order of Operations](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/Ops/CAIA%20Refinement%20Process.md#order-of-operations) 


## Overview

### Purpose of this document
This document serves as instruction and guidance for conducting CAIA operations refinement.

### Purpose of Refinement
CAIA ops refinement focuses on adding detail and context, estimating, and prioritizing intake tickets in "New Stuff", "Backlog" and "Blocked". Refinement is an essential part of the effective management and prioritization of work and makes us aware and better able to plan for new work as it enters the CAIA pipeline.

Primary outcomes of CAIA Refinement:
- Reviewing all new requests in "New Intakes" column
- Filling out ticket custom fields with relevant data
- Identifying which disciplines or individual contributors should be involved in the work
- Flagging items for prioritization review with OCTO
- Responding to requesting teams for clarification or context
- Ensuring items in blocked and backlog do not go stale and get forgotten

## Process
There are 4 stages of Refinement, to account for CAIA's multi-disciplinary setup and our reliance on OCTO for ongoing prioritization.
1. CAIA Ops Refinement
2. OCTO Planning
3. CAIA discipline planning
4. CAIA Board Refinement

###CAIA Ops Refinement
**- Goal:** Intake tickets have task tickets. We understand what the work is.
**- Audience:** CAIA Delivery Lead, CAIA Product Manager, Accessibility Lead, IA Lead
**- Frequency:** Weekly on Monday

**Agenda:**
Review [New Intakes Column](https://github.com/orgs/department-of-veterans-affairs/projects/929/views/78)
- Add “CAIA-Intake” label
- Add Originator/Team Name
- Add Opened Date
- Add Target Date (if applicable)
- Add Estimate (if easily ascertained)
- Add to Sprint (if applicable)
- Post follow-up questions to teams in a comment in the intake
- Apply discipline labels 
- Add task list to outline handoff between discipline specialists
- Assign individuals (if known at this point)
- Review and close Intake tickets in Validate

Additional steps for specific intake types
- Redirect requests are treated as work tickets and should move through work ticket swim lanes
- If team is publishing a new page or launching a new page, set up a work ticket for the entry point work. This includes crosslinks from other pages and left nav and top nav placement. Use the IA document provided by the IA team and list out each page the team needs to add an entry point. An example entry point ticket is here: https://app.zenhub.com/workspaces/sitewide-content-accessibility-and-ia-63a1d63232beba0011a7833f/issues/gh/department-of-veterans-affairs/va.gov-team/28677
- If a new tool is launching incrementally, a react widget needs to be added to the page. Set up a ticket to implement the work. We need to provide the product team with the content to go in the widget. If the content is different depending on if the user sees the tool, be sure to write out both forms of content for the product team. Once the product team gives us the react app code, put it into Drupal. More info on react widgets here
- If request is related to MHV, tag Sara Sterkenburg (@sterkenburgsara) and Riley Orr (@rileyorr)
- If team has selected “no” on collab cycle checkbox, share in the Governance Slack channel to confirm they dont need to go through collab cycle
- If the ticket is related to HEALTH, triage whether it goes to Sara Sterkenberg (Cartography team) or Kristin Ouellette (CAIA)
- If the url of the tool/page starts with /health-care/, it goes to Kristin (tag Kristin and Sitewide IA)
- If the url starts with myhealth, it goes to Sara (tag Sara and Cartography team)

3. Next, run through **Blocked** column starting with items items with the oldest "last checked" date.
    - Determine if item is still blocked.
    - Determine if priority level has changed.
    - Update estimate if applicable.
    - Update "Last checked" field with today's date.
    - Add comments to help signify action taken or decision made.

4. Then, run through **Backlog** column starting with items items with the oldest "last checked" date.
    - Determine if item is still blocked.
    - Determine if priority level has changed.
    - Update estimate if applicable.
    - Update "Last checked" field with today's date.
    - Add comments to help signify action taken or decision made.

