# VSP Product Management and Workflow Cadence

## Definitions

**OKRs**: Objectives and Key Results. Goals and measurable actions/results we want to aim for, to guide our progress as we build and iterate on Platform tools and processes. To be revisited on a quarterly basis. We store OKRs in our [VSP Mission, Vision, Roadmap, and OKRs Deck](https://docs.google.com/presentation/d/1-8LlD8jljlv-C9IIQO1fHDC4ok0NzpJF3nLfwnx5610/edit#slide=id.g5bcedc037d_2_48)

For deeper reading: [OKR - The Ultimate Guide to Objectives and Key Results](https://www.perdoo.com/the-ultimate-okr-guide/) and [Google's re:Work Guide: Set goals with OKRs](https://rework.withgoogle.com/guides/set-goals-with-okrs/steps/introduction/).

**Bet**: VSP Level hypothesis we have around a major stream of work we believe will enable us to achieve our OKRs. We store bets in ZenHub using the Release functionality.

**Super Epic**: Sprint team level area of work, describing a large initiative that will help a team contribute to validating the overall VSP bets and OKRs. We store Super Epics in ZenHub using the Epic functionality and the `super-epic` label.

**Epic**: Sprint team level area of work that breaks a super epic down into more manageable chunks of work. We store Epics in ZenHub using the Epic functionality and the `epic` label, and we nest each Epic within its respective Super Epic.

**User story**: "the smallest unit of work in an agile framework. It’s an end goal, not a feature, expressed from the software user’s perspective." (from Atlassion). A group of user stories together should fully describe the feature or service your target user group needs. We store user stories in their respective product folder here in GitHub, and we include user stories in the epics and issues in ZenHub depending upon whether a user story is appropriate to guide the task.

For deeper reading: [Atlassion: User Stories](https://www.atlassian.com/agile/project-management/user-stories) and [Not everything is a user story](https://www.lullabot.com/articles/not-everything-is-a-user-story)

**Issue**: a user story or task that a team needs to accomplish in order to complete an Epic. We store Issues in ZenHub using the Issue functionality, and we nest east Issue within its respective Epic.

**Sprint Objective**: a goal that a team aims to achieve in an upcoming sprint. Every Sprint, each team recommends their collective Sprint Objectives via the respective Sprint Report Google document, and VSP Leadership and DSVA provide feedback prior to the start of the new Sprint. Teams use these Sprint Objectives to guide their Sprint Planning.

**Sprint Report**: a report that indicates whether we met our Sprint Objectives by the end of the sprint, and if not what the reason was, and thus how we're going to proceed. We submit these reports to DSVA at the end of the Sprint, and we get paid each Sprint based upon DSVA's acceptance of these reports.

**Team Charters**: 

---

## Scrum and Meetings Cadence

### Cross-program Meetings

### Full Team Meetings
Bi-weekly End of Sprint Demos
Monthly VSP retros
Monthly  VSP All Hands (internal only)

### Sprint Team Meetings
Daily standup
Weekly grooming
Bi-weekly Sprint Objective brainstorm
Bi-weekly Sprint Planning
Bi-weekly Team Retro

### Sprint Objectives Reporting Process


### Issue estimation

We need point estimates on issues to help us predict how much work we should take on in a sprint, and to help reveal different opinions on complexity/risk/loe to spur alignment and strategy convos where needed. 

Here are the basics of how to think about points and how to estimate:

Story Points = the complexity, uncertainty, and risk in completing an issue. In short, the effort it would take to complete.
Estimates = the effort for anyone in the practice area to complete, not just the effort for you or for an expert.
Points do not = hours or days of work
Points are abstract, and are not used to compare individual or team productivity.
Estimates will not be 100% accurate, and that is fine. They're just a way for us to be able to better plan as a team.
Use the Fibonacci scale: 1, 2, 3, 5, 8, 13
If an issue is estimated at 13, it needs to be broken down into smaller issues

Teams will use the following complexity estimation to point tickets before Sprint Planning. Teams will adjust points during sprint if required time to complete the ticket changes. 

1 - Easy task, work is known, can be executed quickly
2
3
5 - Becoming complex
8
13 - Very complex, may take a full sprint or longer
21
40 - Needs to be broken down into smaller tickets

---

## How we use ZenHub for workflow management

### Releases
These are our current bets

### Super Epics (Initiatives??)
All super epics need to be in ZenHub

Super epic anatomy:
Title: SHORT description of the goal
Description: user story and a link to the product/service outline
Label: Super Epic, [team]
Pipeline: Now, Next, or Future
Release: whichever Bet it’s a part of

### Epics
All epics should be inside a super epic

Epic anatomy:
Title: SHORT description of the goal
Description: ?
Label: Epic, [team]
Pipeline: Now, Next, or Future
Epic: whichever Super Epic(s) it’s a part of
Release: n/a do not assign!

Milestones
Continue using them to track Sprints

Issue
More info to come here

#### Pipeline

Backlog > Now > Next > Future > Ready > Current Sprint > In Progress > Review/QA > Closed

Backlog: Epics and issues that have come up over time and have not yet been evaluated for priority

Future: Epics and Super Epics that have been prioritized as a part of a team’s Future roadmap

Next: Epics and Super Epics that have been prioritized as a part of a team’s Next part of their roadmap

Now: Epics and Super Epics that have been prioritized as a part of a team’s Now roadmap

Ready: Issues that have been fleshed out and prioritized as a part of an Epic, to be picked up in an upcoming Sprint.

Current Sprint: filled up with issues during sprint planning

In Progress: issues move here when they are being worked

Review/QA: issues move here when they have been worked and are ready to be tested/confirmed as complete

Closed: issues, epics, and super epics that have been reviewed/QA’d and have been deemed complete (and are thus closed). This will also include issues, epics, and super epics from the backlog that have been closed with the “icebox” label to be revisited by teams in the future.
Icebox

Icebox: we close those issues/epics/super epics w/an “icebox” label and a “[team]” label so teams can come back and review these items in their future strategy and planning, without having them clog up the active work views.



