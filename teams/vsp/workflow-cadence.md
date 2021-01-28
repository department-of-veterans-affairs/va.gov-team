# VSP Workflow Cadence

Read on to learn about the different types of documentation and meetings we use across the VSP ecosystem in order to successfully create goals, communicate across teams and within practice areas, and execute on our goals on a sprint-by-sprint basis.

---

## Scrum and Meeting Cadence

**Cross-program Meetings**
- Team of Teams
- Bi-weekly Design Sync
- Bi-weekly Engineering Sync
- Bi-weekly Product Sync (coming soon)

## Full VSP Team Meetings

**End of Sprint Demos**
- Audience: DEPO Leadership, Full VSP Contractor Team
- Cadence: Bi-Weekly, end of sprint
- Purpose: Demonstration of features/functionality by various VSP Product Teams

**Retrospective**
- Audience: DEPO Leadership, Full VSP Contractor Team
- Cadence: Monthly, end of month
- Purpose: Look back at preceding 2 sprints during that month.  Discussion of what went well, questions, what could have gone better and action items.

**VSP All Hands**
- Audience: Full VSP Contractor Team
- Cadence: Monthly
- Purpose: Updates to contractor team related to program

## VSP Product Team Meetings

**Daily Standup**
- Audience: Individual VSP Product Teams
- Cadence: Daily
- Purpose: Quick status on tasks/tickets, Identify impediments, quick decision making, report/resolve blockers

**Weekly Grooming**
- Audience: Individual VSP Product Teams
- Cadence: Weekly
- Purpose: Weekly review of backlog in preparation for next sprint 

**Sprint Planning**
- Audience: Individual VSP Product Teams
- Cadence: Bi-Weekly
- Purpose: Planning, refinement and agreement on sprint objectives for upcoming sprint 

**Product Team Retro**
- Audience: Individual VSP Product Teams
- Cadence: Bi-weekly
- Purpose: End of Sprint retrospective for indidual product teams.  Identify/Discuss what went well, questions, what could have gone better and action items.

## VSP Leadership Meetings

**VSP Tag Up**
- Audience: DEPO Leadership, VSP Leadership, PMs
- Cadence: Bi-Weekly prior to start of new sprint
- Purpose: Product Team sprint objective overview

**Review Sprint Progress**
- Audience: DEPO Leadership, VSP Leadership
- Cadence: Bi-Weekly prior to end of current sprint
- Purpose: Review Sprint progress for each Product team prior to end of sprint

**Mid-Sprint Platform Leads**
- Audience: DEPO Leadership, VSP Leadership
- Cadence: Bi-Weekly during current sprint
- Purpose: Repuposed to review leadership topics/initatives outside of sprint related meetings

**VSP Leadership Sync**
- Audience: VSP Leadership
- Cadence: Weekly
- Purpose: Sync on Program/contract related topics, discussion of staffing, issues/concerns and strategic alignment 

## VSP Practice Area Meetings

**Product**
- Audience: VSP Product Lead and Product Team Product Managers
- Cadence: Bi-Weekly 
- Purpose: [Initiative Stand Up](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/initiative-stand-up.md)

**Product PM Sync**
- Audience: VSP Product Lead and Product Team Product Managers
- Cadence: Weekly
- Purpose: Sync on Product Team initatives, review of roadmaps, workshop activities (when needed), discussion of any issues/concerns

**Design**
- Audience: VSP Design Lead and Product Team Designers
- Cadence: Weekly
- Purpose: Sync on Design initiatves, leadership direction and discussion of any issues/concerns

**Engineering**
- Audience: VSP Eng Lead and Product Team Eng Leads
- Cadence: Weekly
- Purpose: Sync on Engineering initatives/ technical directions and discussion of any issues/concerns
  
---

## [Sprint Objectives Reporting process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/sprint-objectives/sprint-objectives-roe.md)

---

## Using ZenHub for workflow management

### Releases
- Title: name of the objective
- Description: The quarter and objective name

### Initiatives

- Title: SHORT description of the problem/goal
- Description: user story and a link to the product/service outline
- Label: VSP-initiative, _team_
- Pipeline: Now Initiatives, Next Initiatives, or Future Initiatives
- Release: whichever Objective this is working toward

### Epics

- Title: SHORT description of the goal
- Description: ?
- Label: Epic, _team_
- Pipeline: Now, Next, or Future
- Epic: whichever initiative it’s a part of
- Release: n/a do not assign!

### Issue
More info to come here

### Pipeline

**Backlog > Icebox > Future Initiatives > Next Initiatives > Now Initiatives > Epics > Ready > Current Sprint > In Progress > Review/QA > Closed**

- Backlog: Epics and issues that have come up over time and have not yet been evaluated for priority/still need to be groomed

- Icebox: Issues, epics and initiatives that have been deprioritized and the team does not plan on working on them. 

- Future Initiatives: Initiatives that have been prioritized as a part of a team’s Future roadmap

- Next Initiatives: Initiatives that have been prioritized as a part of a team’s Next part of their roadmap

- Now Initiatives: Initiatives that have been prioritized as a part of a team’s Now roadmap

- Epics: Large pieces of work for the initiatives that has been prioritized and the team is currently working on

- Ready: Issues that have been groomed and prioritized as a part of an Epic, to be picked up in an upcoming Sprint.

- Current Sprint: Filled up with issues during sprint planning

- In Progress: Issues move here when they are being worked

- Review/QA: Issues move here when they have been worked and are ready to be tested/confirmed as complete

- Closed: Issues, epics, and initiatives that have been reviewed/QA’d and have been deemed complete (and are thus closed). This will also include issues, epics, and initiatives from the backlog that have been closed with the “icebox” label to be revisited by teams in the future.

### Icebox
We close those issues/epics/initatives w/an “icebox” label and a “[team]” label so teams can come back and review these items in their future strategy and planning, without having them clog up the active work views.

### Issue estimation

Estimation is not based on how long something will take to complete, but is rather a combined rating encompassing risk, LOE, and complexity. We need estimates on issues to help us predict how much work may be reasonable in a given sprint, and to help reveal different opinions on complexity/risk/loe to spur alignment and strategy convos where needed.

- 1: Easy task, work is known, can be executed quickly
- 5: Becoming complex
- 13: Very complex, may take a full sprint or longer
- `>` 13: Should be an Epic that can be broken down into smaller Issues.

Here are the basics of how to think about points and how to estimate:

- Estimates represent the complexity, uncertainty, and risk in completing an issue.
- Estimates represent the effort for anyone in the practice area to complete, not just the effort for you or for an expert.
- Estimates do not = hours or days of work.
- Estimates are abstract, and are not used to compare individual or team productivity.
- Estimates will not be 100% accurate, and that's fine. They're a planning, learning, and misalignment-revealing tool.


---

## Definitions

**OKRs**: Objectives and Key Results. Goals and measurable actions/results we want to aim for, to guide our progress as we build and iterate on Platform tools and processes. To be revisited on a quarterly basis. We store OKRs in our [VSP Mission, Vision, Roadmap, and OKRs Deck](https://docs.google.com/presentation/d/1-8LlD8jljlv-C9IIQO1fHDC4ok0NzpJF3nLfwnx5610/edit#slide=id.g5bcedc037d_2_48)

For deeper reading: [OKR - The Ultimate Guide to Objectives and Key Results](https://www.perdoo.com/the-ultimate-okr-guide/) and [Google's re:Work Guide: Set goals with OKRs](https://rework.withgoogle.com/guides/set-goals-with-okrs/steps/introduction/).

**Initiative**: Vision for an initiative your team can take on that you hypothesize will drive forward the VSP OKRs. All actionable items for team members (Epics, user storiees, tasks, issues) should roll up to an Initiative. Initiatives are prioritized into the Now Initatives, Next Initatives, and Future Initatives pipelines on the ZenHub board, and together comprise your team's agile roadmap. Store initiatives in ZenHub using the VSP Initiative template, the VSP-Initiative label and the release for the VSP Objective it is furthering. 

**Epic**: Large chunk of work, that together in a group of Epics, helps team members understand how to execute on an initiative. Store Epics in ZenHub using the Epic functionality and the `epic` label, and nest each Epic within its respective initative.

**User story**: "the smallest unit of work in an agile framework. It’s an end goal, not a feature, expressed from the software user’s perspective." (from Atlassion). A group of user stories together should fully describe the feature or service your target user group needs. We store user stories in their respective product folder here in GitHub, and we include user stories in the epics and issues in ZenHub depending upon whether a user story is appropriate to guide the task.

For deeper reading: [Atlassion: User Stories](https://www.atlassian.com/agile/project-management/user-stories) and [Not everything is a user story](https://www.lullabot.com/articles/not-everything-is-a-user-story)

**Issue**: a user story or task that a team needs to accomplish in order to complete an Epic. We store Issues in ZenHub using the Issue functionality, and we nest east Issue within its respective Epic.

**Sprint Objective**: a goal that a team aims to achieve in an upcoming sprint. Every Sprint, each team recommends their collective Sprint Objectives via the respective Sprint Report Google document, and VSP Leadership and DSVA provide feedback prior to the start of the new Sprint. Teams use these Sprint Objectives to guide their Sprint Planning.

**Sprint Report**: a report that indicates whether we met our Sprint Objectives by the end of the sprint, and if not what the reason was, and thus how we're going to proceed. We submit these reports to DSVA at the end of the Sprint, and we get paid each Sprint based upon DSVA's acceptance of these reports.

**Team Charter**: a document created by each team, driving team alignment around mission and work style. Each team should have a Charter stored within their team folder in GitHub. See [team charter template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/team-charter-template.md).

**Roadmap:** plans that represent the initiatives each team will focus on in the near, medium, and long term based on their consideration of forward-looking strategy, customer pain points, and VSP pain points.
- You must have initiatives in place for NOW, NEXT, and FUTURE 
- Every NOW, NEXT, and FUTURE initiative must include in the description which Objective it is connected to
- Every NOW initiative must include what KPIs you believe this work will impact
- Every initiative title format must be aligned w/our standards: (Product/Service) - (phrase starting w/a verb NOT ending in 'ing' about what you're changing/creating.)

