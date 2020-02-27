# Sprint 17 & 18 Beta Test for Sprint Objective + Sprint Reporting Methodology
## Short-name: ZenHub-only communication of sprint plans and reports

### Background

#### Goals
- VSP govt clients want to be closer to the work - fewer layers of removal (and documentation and reporting) from where the teams do their work regularly (i.e. github)
- VSP govt clients want to reduce additional, unnecessary work for teams
- VSP govt clients need to coordinate with other teams throughout CTO/DEPO/DSVA, and need to be more transparent w/their stakeholders as to what VSP is working on / shipping

#### Problems / Pain Points
- We have several sources of truth on the work folks are doing (Sprint objectives, GitHub epics, super epics, issues, other google docs sometimes, OKRs and KPIs, Internal gov DEPO product board, ToT maybe)
- Currently using screenshots of now/next/future super epics to communicate roadmap
- The sprint objectives docs are a lot of work, and following up to ensure work is wrapped up from the sprint (and ensuring unfinished work is added to the next sprint) is a lot of work. The comment workflow, responses to comments, responses to responses, etc… requires a lot of back and forth and reminding (and flipping between the doc and github). This often leads to a leap-frogging effect to resolve potentially/apparently incomplete Sprint Objectives, so by the time we finish reviewing last Sprint’s Objectives, it’s too late to get them wrapped up in the current sprint, so they go in the following Sprint (if at all).

_**Important: these problems are related to the multiple extra layers of work tracking, NOT because teams are doing something wrong.**_

### Description of the beta
The Insights + Analytics team will pilot a new ZenHub-only way of tracking sprint plans and outcomes for Sprint 17, the whole time, keeping track of what's working well, what's not working, and what open questions or challenges this way of doing things surfaces. At the end of the sprint, the VSP clients and the Insights + Analytics team will evaluate whether to continue/expand the pilot, cut it amd return to status quo, or continue to iterate on a new way.

- Teams plan out all the issues they plan to accomplish in the sprint and place in “Current Sprint” column on ZenHub
- Teams put all of these issues in a “Sprint [#]” milestone. This list will be the replacement for the Sprint Objectives.
- DEPO can download that list of issues into a google doc or some other doc to save for contract management
- By the mid-sprint check in, teams ensure the status of their issues are in the correct columns
- Teams identify the status of the issues/objectives using the pipeline columns in ZenHub
- Teams apply new labels for “new, unplanned” and “stretch” issues as needed
- Epics do not go in those ^ columns, they go in their own Now Epics, Next Epics, Future Epics columns
- DEPO pulls epics into the DEPO product board, or mirrors them w/a link
- No more google doc comments! The leads (and everyone else) comment directly on the issue with questions.
- Maybe a 30 min review end of day Wednesday to get DEPO approval prior to sprint start?

Feedback / questions to consider to inform the above plans
- What about the tracking epics?  Those are super epics that are always in the Now Epics column. The board has both regular epics and super epics in one place right now.
- How would we handle not completing work in a sprint? How would this effect us? ie work that needs to be carried over to the next sprint? Just make a comment and say this work will continue into next sprint and leave it in the in progress slot?
- what about things with open PRs that aren't merged by Tuesday at 4pm EST but maybe Wednesday or Friday after the sprint ends
- how could we see historical sprint work?  Would there be a snapshot taken certain times? looking at closed tickets is a pain and if anyone has a way to look at them without clicking “Load more issues” multiple times, would love you’re advice!
- Does that report show anything that has ever been in a mile stone? Or what is currently in it? So for the situation where something isn't done in a sprint and carries over to the next one so therefore moves milestones, would it show up in just one report or both?
- How do we enable DEPO to understand holistically what's going on, vs the granular nature of the tickets today?

### Findings
#### Problems / challenges / pain points (both for team and for client)
**Client**
- Unable to export the board with out of the box functionality on Zenhub. Instead, used the workaround of print to PDF
- It was more difficult to click into each ticket than it was to see all the objectives in a single document in order to understand the team's progress

**Team**
- The team found going over the Google Doc objectives during sprint planning and grooming helpful to see the overarching themes and goals for the Sprint. It's difficult to see that in just the Zenhub reporting method.
- The team found having the out of offices in one place where leadership could also see the out of offices as valuable
- The team wasn't sure what the added value for leadership was in the change of reporting. There was no clear difference in reporting transparency 
- The team wasn't sure where to add specificity in the tickets, or which parts of the tickets leadership was paying more or less attention to - it was unclear how to write the tickets to make work more clear for leadership
- If a ticket was created by a VSA team who already wrote out a milestone, that ticket would not appear on our board if filtered by the VSP milestone

#### Benefits / success points (both for team and for client)
**Client**

**Team**
- The Development team's workflow was not interrupted due to the change. We have been using Zenhub as the source of truth for sprint work, so it doesn't add or remove work for the development team during the sprint
- We have a team member who is DSVA and needs to go on VPN in order to see the Google Doc, and this way of reporting is easier for that team member by consolidating into Zenhub
- As the Product Manager, I ended up reverting back to using a post on Slack to write down and show overall 'themes' of the sprint during sprint planning. These were similar to the Google Doc objectives, but written more simply
- This method of sprint reporting forced us to think more about which issues were getting put on Zenhub and how they mapped back to our "Now" super epics

#### Open questions
- How does the team track out of offices to display personnel breaks in the sprint workflow that might affect the sprint's completed work?
- In writing the tickets, what is the intended proxy within an issue for the Google Doc "Objectives"? The Title, the Problem Statement?
- Are estimates helpful to add for leadership to understand the tickets' levels of effort?

### Outcomes

#### Goals
**Goal 1** - The client did not see much of a difference in being closer to the work.

**Goal 2** - The Zenhub workflow did not make a big difference in reducing unnecessary work with the team.

**Goal 3** - The pilot was not the best experiment to handle this goal; it did not increase the transparency for either party. The Google Doc already gives the client the right level of "zoom" on the team's work.

#### Pain Points
**Pain Point 1** - The pilot did not give more clarity into the work. The Zenhub board remains the source of truth for work completed and in progress; the Google Doc remains the source of metadata/summary of the teams' work.

**Pain Point 2** - This is no longer a pain point.

**Pain Point 3** - The pilot did not decrease work for the team.

#### What's Next
**We have completed the Zenhub sprint experiment, and will go back to using the Google Doc as the source of VSP Teams' sprint objectives. The Platform team has invited product managers to a bi-weekly sprint tag-up to experiment increasing transparency for objectives within that meeting.**
