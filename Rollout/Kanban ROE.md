# Kanban Rules of Engagement

10/10/2018

**We are working toward the singular mission of successfully launching VA.gov.** To enable us to get us there most quickly and efficiently, we're moving to Kanban style implementation.

## Global Norms

- The Product Lead, Chris Johnston, is the ultimate decider on the priority of every issue
- Every new issue starts at the bottom of the Ready list, until prioritized by Chris
- Every new issues starts unassigned, until someone picks it up
- "Complete" means the work described in the issue is live on preview.va.gov and has been validated as complete by Chris or Chris's appointee
- If an issue requires multiple practice areas:
  - If colleagues can work on it together and complete in a day, then keep as one issue
  - If it would take multiple days to complete in full, create separate issues for the Design / DevOps / FE / Etc
- The WIP (Work In Progress) limit (aka max number of issues that can be "in progress" at once) is: 15

## What does this mean for teams?

- Dragons, Griffin, Hydra, and DevOps roll up to the main team: WBC (Web Brand Consolidation)
- All WBC team members will attend just the Monday, Wednesday, Friday WBC standups
- WBC PMs and Team Leads will attend the Tuesday and Thursday progress check-ins

## What is the workflow now?

1. When you're ready to pick up a new task, check the Ready column on the [board]()
2. Pick the issue closest to the top of the list that you have the expertise to work on
3. Assign yourself, move the issue to "in progress" and work on it until you complete it
4. Once complete, move to "done" and pick a new issue as close to the top of the Ready column as possible

## How do I add new issues now?

- In discussion with Team Lead and PM define:
  - Problem statement/user story/solution
  - Definition of done
  - Type of issue: `technical` `organizational` or `social` - [type descriptions]()
- Add the new issue to the bottom of the Ready column with no-one assigned
- Add labels:
  - `brand-consolidation`
  - Type: `technical` `organizational` or `social` - [type descriptions]()
  - **Specifically for usability adjustments or [bugs](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Work%20Practices/Product%20Management/wbc-bug-template.md)**
    - C1. `bug`
    - C2. Your suggested priority/severity: (sev 1, sev 2, or sev 3) - [severity descriptions](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Work%20Practices/Product%20Management/wbc-bug-template.md)
- Post your new issue(s) in Slack with Chris and Rachael @ mentioned so Chris can validate the labels, determine priority, and move the ticket to the appropriate place in the list before it gets picked up.

---

#### How to determine "type"

**Technical (most important)**: if this task isn’t complete the website will work for fewer than 50% of users who attempt www.va.gov

- What failure looks like: public failure, users unable to navigate to VA digital property

**Bureaucratic**: if this task isn’t complete we will not have authorization to complete the technical tasks.

- What failure looks like: employment, audit, relationship failures, inability to complete future initiatives.

**Social**: if this task isn’t complete the user experience may be suboptimal or a solution non-adopted. 

- What failure looks like: internal organization failure, agnst associated with change reduces future velocity, lack of trust in va.gov

#### How to measure severity

*Source: [Software Testing Fundamentals](http://softwaretestingfundamentals.com/defect-severity/)*

**Sev 1**: the defect affects critical functionality or critical data. It does not have a workaround.

- Example: Unsuccessful installation, complete failure of a feature.

**Sev 2**: the defect affects major functionality or major data. It has a workaround but is not obvious and is difficult. 

- Example: A feature is not functional from one module but the task is doable if 10 complicated indirect steps are followed in another module/s.

**Sev 3**: the defect affects minor functionality or non-critical data. It has an easy workaround.

- Example: A minor feature that is not functional in one module but the same task is easily doable from another module.
