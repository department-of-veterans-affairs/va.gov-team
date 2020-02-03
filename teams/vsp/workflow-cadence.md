# VSP Workflow Cadence

---

## Definitions

**OKRs**: Objectives and Key Results. Goals and measurable actions/results we want to aim for, to guide our progress as we build and iterate on Platform tools and processes. To be revisited on a quarterly basis. We store OKRs in our [VSP Mission, Vision, Roadmap, and OKRs Deck](https://docs.google.com/presentation/d/1-8LlD8jljlv-C9IIQO1fHDC4ok0NzpJF3nLfwnx5610/edit#slide=id.g5bcedc037d_2_48)

For deeper reading: [OKR - The Ultimate Guide to Objectives and Key Results](https://www.perdoo.com/the-ultimate-okr-guide/) and [Google's re:Work Guide: Set goals with OKRs](https://rework.withgoogle.com/guides/set-goals-with-okrs/steps/introduction/).

**Super Epic**: Vision for an initiative your team can take on that you hypothesize will drive forward the VSP OKRs. All actionable items for team members (Epics, user storiees, tasks, issues) should roll up to a Super Epic. Super Epics are prioritized into the Now, Next, and Future pipelines of the ZenHub board, and together comprise your team's agile roadmap. Store Super Epics in ZenHub using the Epic functionality and the `super-epic` label, and the Milestone for the VSP Objective it is furthering. 

**Epic**: Large chunk of work, that together in a group of Epics, helps team members understand how to execute on a Super Epic. Store Epics in ZenHub using the Epic functionality and the `epic` label, and nest each Epic within its respective Super Epic.

**User story**: "the smallest unit of work in an agile framework. It’s an end goal, not a feature, expressed from the software user’s perspective." (from Atlassion). A group of user stories together should fully describe the feature or service your target user group needs. We store user stories in their respective product folder here in GitHub, and we include user stories in the epics and issues in ZenHub depending upon whether a user story is appropriate to guide the task.

For deeper reading: [Atlassion: User Stories](https://www.atlassian.com/agile/project-management/user-stories) and [Not everything is a user story](https://www.lullabot.com/articles/not-everything-is-a-user-story)

**Issue**: a user story or task that a team needs to accomplish in order to complete an Epic. We store Issues in ZenHub using the Issue functionality, and we nest east Issue within its respective Epic.

**Sprint Objective**: a goal that a team aims to achieve in an upcoming sprint. Every Sprint, each team recommends their collective Sprint Objectives via the respective Sprint Report Google document, and VSP Leadership and DSVA provide feedback prior to the start of the new Sprint. Teams use these Sprint Objectives to guide their Sprint Planning.

**Sprint Report**: a report that indicates whether we met our Sprint Objectives by the end of the sprint, and if not what the reason was, and thus how we're going to proceed. We submit these reports to DSVA at the end of the Sprint, and we get paid each Sprint based upon DSVA's acceptance of these reports.

**Team Charter**: a document created by each team, driving team alignment around mission and work style. Each team should have a Charter stored within their team folder in GitHub. See [team charter template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/team-charter-template.md).

---

## Scrum and Meeting Cadence

### Cross-program Meetings
Team of Teams

### Full Team Meetings
Bi-weekly End of Sprint Demos
Monthly VSP retros
Monthly VSP All Hands (internal only - no clients)

### Sprint Team Meetings
Daily standup
Weekly grooming
Bi-weekly Sprint Objective brainstorm
Bi-weekly Sprint Planning
Bi-weekly Team Retro

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

## Sprint Objectives Reporting process
_to be defined_

---

## Using ZenHub for workflow management

### Releases
- Title: name of the bet
- Description: the full bet hypothesis

### Super Epics
_We might re-name these Initiatives - tbd_

- Title: SHORT description of the goal
- Description: user story and a link to the product/service outline
- Label: Super Epic, _team_
- Pipeline: Now, Next, or Future
- Release: whichever Bet it’s a part of

### Epics

- Title: SHORT description of the goal
- Description: ?
- Label: Epic, _team_
- Pipeline: Now, Next, or Future
- Epic: whichever Super Epic(s) it’s a part of
- Release: n/a do not assign!

### Milestones
Continue using them to track Sprints

### Issue
More info to come here

### Pipeline

**Backlog > Now > Next > Future > Ready > Current Sprint > In Progress > Review/QA > Closed**

- Backlog: Epics and issues that have come up over time and have not yet been evaluated for priority

- Future: Epics and Super Epics that have been prioritized as a part of a team’s Future roadmap

- Next: Epics and Super Epics that have been prioritized as a part of a team’s Next part of their roadmap

- Now: Epics and Super Epics that have been prioritized as a part of a team’s Now roadmap

- Ready: Issues that have been fleshed out and prioritized as a part of an Epic, to be picked up in an upcoming Sprint.

- Current Sprint: filled up with issues during sprint planning

- In Progress: issues move here when they are being worked

- Review/QA: issues move here when they have been worked and are ready to be tested/confirmed as complete

- Closed: issues, epics, and super epics that have been reviewed/QA’d and have been deemed complete (and are thus closed). This will also include issues, epics, and super epics from the backlog that have been closed with the “icebox” label to be revisited by teams in the future.
Icebox

### Icebox
We close those issues/epics/super epics w/an “icebox” label and a “[team]” label so teams can come back and review these items in their future strategy and planning, without having them clog up the active work views.



