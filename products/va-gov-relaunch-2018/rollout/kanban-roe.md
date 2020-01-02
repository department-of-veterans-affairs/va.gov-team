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
- Every issue needs an estimate before a prioritization decision can be made

## What does this mean for teams?

- Dragons, Griffin, Hydra, and DevOps roll up to the main team: WBC (Web Brand Consolidation)
- All WBC team members will attend just the Monday, Wednesday, Friday WBC standups
- WBC PMs and Team Leads will attend the Tuesday and Thursday progress check-ins

## What is the workflow now?

1. When you're ready to pick up a new task, check the Ready column on the [board]()
2. Pick the issue closest to the top of the list **that you have the expertise to work on**
3. Assign yourself, move the issue to "in progress" and work on it until you complete it
4. Once complete, move to "done" and pick a new issue as close to the top of the Ready column as possible

## How do I add new issues now?

- In discussion with Team Lead and PM define:
  - Problem statement/user story/solution
  - Definition of done
  - Type of issue: `technical` `organizational` or `social` - [type descriptions](#how-to-determine-type)
- Add the new issue to the bottom of the Ready column with no-one assigned
- Add an estimate
  - If you're unable to estimate it bc it's not in your practice area, leave the estimate blank, and in regular reviews Chris will pick out issues that seem potentially critical enough to need an estimate.
- Add labels:
  - `brand-consolidation`
  - Type: `technical` `organizational` or `social` - [type descriptions](#how-to-determine-type)
  - **Specifically for usability adjustments or [bugs]()**
    - C1. `bug`
    - C2. Your suggested priority/severity: `sev 1`, `sev 2`, or `sev 3`) - [severity descriptions](#how-to-measure-severity)
- If you believe you need to specifically advocate for the criticality of a given issue, please slack Rachael and Chris for awareness.
- Rachael will coordinate to review new tickets regularly with Chris so he can validate the labels, determine priority, and move the ticket to the appropriate place in the list before it gets picked up.

## How does estimation work?
We need point estimates on issues to help us predict how much work we can/should include at a given time above the "launch" threshold. Here are the basics of how to think about points and how to estimate:

- Story Points = the complexity, uncertainty, and risk in completing an issue. In short, the effort it would take to complete.
- Estimates = the effort for anyone in the practice area to complete, not just the effort for you or for an expert.
- Points **do not =** hours or days of work
- Points are abstract, and **are not** used to compare individual or team productivity.
- Estimates will not be 100% accurate, and that is fine. They're just a way for us to  be able to better plan as a team.
- Use the fibonnaci scale: 1, 2, 3, 5, 8, 13
- If an issue is estimated at 13, it needs to be broken down into smaller issues
- In traditional Kanban workflow, we would not use estimates, however this is a unique scenario in which we are marching toward a very specific Launch date, and we need to have an idea of what work may or may not fall above the "launch" threshold.
- In traditional Agile workflow, we would not adjust estimates for issues progress upon finding it more difficult or easier than expected. BUT, with this full team Kanban style workflow, please do adjust when that happens. Because that will indicate whether we need to plan for cutting/reprioritizing/adding.

---

### How to determine type

**Technical (most critical)**: if this task isn’t complete the website won’t work for the www.va.gov audience

- What failure looks like: public failure, users unable to navigate to VA digital property

**Bureaucratic**: if this task isn’t complete we will not have authorization to complete the technical tasks.

- What failure looks like: employment, audit, relationship failures, inability to complete future initiatives.

**Social**: if this task isn’t complete the user experience may be suboptimal or a solution non-adopted. 

- What failure looks like: internal organization failure, agnst associated with change reduces future velocity, lack of trust in va.gov

### How to measure severity

*Source: [Software Testing Fundamentals](http://softwaretestingfundamentals.com/defect-severity/)*

**Sev 1**: the defect affects critical functionality or critical data. It does not have a workaround.

- Example: Unsuccessful installation, complete failure of a feature.

**Sev 2**: the defect affects major functionality or major data. It has a workaround but is not obvious and is difficult. 

- Example: A feature is not functional from one module but the task is doable if 10 complicated indirect steps are followed in another module/s.

**Sev 3**: the defect affects minor functionality or non-critical data. It has an easy workaround.

- Example: A minor feature that is not functional in one module but the same task is easily doable from another module.
