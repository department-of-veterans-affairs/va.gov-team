# Sitewide Contract sprint best practices

## Purpose
This document is designed to capture best practices around how the Sitewide Contract teams approach each two week sprints.

## Capacity planning
Before the start of each sprint, team members are expected to evaluate their capacity. Teams may use the [Sitewide Sprint Capacity Planning Worksheet](https://docs.google.com/spreadsheets/d/1g814Nfk_UgUUkAFC0tcMIQWdqlLb8Z6foNqMBN801KU/edit#gid=6090049), which includes some formulas to help assess velocity. 

Default sprint capacity for a two-week sprint is eight, to account for two days of sprint ceremonies, code review, context switching, and general meetings. Holidays, PTO, and OOO should be accounted for by subtracting one point for each day unavailable. Adding a note to give information on why points were subtracted is appreciated but not required.


## Scrum
Team scrums are a vital component of keeping the team connected and informed. The cadence may vary per team but the intent is the same: sharing how you’re doing overall, what you’re working on, and if you have any questions or blockers.

### Best practices
1. Try to keep your update to one minute. Anything that needs to take longer to talk through can be put on as a “16th minute” or moved to a slack thread or separate conversation. We generally try to timebox updates at 15 minutes and leave any other topics for the “16th minute” list.
2. Give your personal [“balance score”](https://medium.com/civicactions/improving-scrum-team-flow-on-digital-service-projects-6723d95eaad8) for the day. This is meant to be a quick snapshot into how balanced you’re feeling mentally, spiritually, emotionally, physically, and professionally. Each team can establish its own norms, but we tend to score on a scale of 1-10, with 1 being completely unbalanced and 10 being completely balanced.
3. Use the board during scrum to keep it as updated as possible in regards to status and comments.

## Backlog Refinement
Refinement is held by each team at least once per sprint. The goal is to prepare enough work to be assigned for the next sprint at minimum, and ideally for 2-3 upcoming sprints. Refinement is meant to identify upcoming stories or issues that are not yet in the backlog or haven’t been refined based on:
1. Quarterly goals
2. Any change in prioritization from OCTO-DE
3. Any new information gathered

There may be additional refinement sessions specific to project disciplines (UX, FE, BE) where epics and stories are created and refined to help prepare for the larger group refinement session.

### Best practices:
1. All team members and workstreams ought to attend group refinement, to gain context and help ensure that aspects are not overlooked.
2. The Product Manager and Delivery Manager will ideally have synced with the Product Owner to clarify priorities for the next sprint(s) based on agreed upon quarterly goals.
3. The definition of done for issues must be clear, including a list of acceptance criteria that can be objectively reviewed by the PO.
4. User stories should:
  - Be sized by the full team with the exception of the Product Manager and Scrum Master (see Pointing section below)
    1. Should a disagreement arise, the person showing the lowest point value must justify the point size. Afterwards, those showing higher point values can either agree or raise any risk, scope or complexity the lower point may not have considered. 
  - Have a single owner accountable to drive the story to completion.
  - Be assigned its respective epic (all issues ought to belong to at least one epic).
  - Once a user story is refined per above, it may be moved to one of two columns in priority order:
    1. Stretch/Next Sprint or Ready - these are stories for the next upcoming sprint.
    2. Refined - This is the ready Backlog for future sprints after the immediate next one.

## Pointing
We use a pointing system based on a Fibonacci scale where, as points increase, risk does as well. Points are a mechanism to discuss that sense of size + risk to complete a task. When talking about estimates, try to avoid using words like “just” or “only”.

Pointing scale:
- 1: The smallest unit of work possible for your team. 1s are rare.
- 2
- 3
- 5
- 8: The biggest task that can safely complete within a sprint, with room to spare
- 13: The biggest possible task completable within a sprint, but risky. Likely should be decomposed into smaller task tickets.
- 21: Bigger than a sprint, and should be decomposed into smaller tickets with a better understanding of size. Tickets this size may become epics.

Points don't correlate directly to time. Each team will norm around what points mean to them. Any two teams will not have the same assessment of points for their work, and velocity cannot be compared apples to apples. Points are a tool for achieving outcomes, not a ruler used to measure teams.

### Best practices:
1. If an issue grows or decreases in scope during a sprint, don't change the original estimate as it was meant to reflect the estimate with the known acceptance criteria at the time.
2. When the team doesn’t have enough knowledge to estimate the task or choose the best solution, they can create a *spike* user story to help add clarity / reduce risk. Spikes describe the effort / research required to understand a task well enough to estimate it, and are typically timeboxed. 

## Sprint Goals
Sprint goals ought to be proposed to the team and OCTO-DE by the team's Product Managers and confirmed at that sprint’s planning session. They are used by OCTO-DE to help measure our progress and success on the project. They should:

1. Align with achieving quarterly goals.
2. Be limited to no more than one goal per discipline, per sprint.
3. Be captured in sprint reports.
4. Be communicated with OCTO-DE during the sprint with regards to status at the mid-sprint check-in (or earlier if projected to slip).
5. Be prioritized as the highest priority items for the team that sprint and assigned the “High Priority” status or otherwise marked somehow in Github/Zenhub as a Sprint Goal (e.g. label).
6. If they are not completed, OCTO-DE’s expectation is that they are completed in the following sprint or dropped with an agreed upon justification.

## Sprint planning
### The goals of each planning session are:
1. To clearly communicate and define sprint goals with the team and OCTO-DE.
2. To plan the work to be done based on capacity, roadmap, and prioritization from our Product Owners.

### Best practices
1. Prior to sprint planning, each team member will update their previous sprint’s issues on the sprint board with the latest status information and comments.
2. Any cards added to the sprint, particularly those identified as sprint goals, will be assigned to a specific person.
3. Any cards added to the sprint will have been previously refined with enough detail for someone to understand the issue and its definition of done.
4. It will have a point estimation and clear acceptance criteria to complete.
5. Each team member will have a clear idea of their planned and stretch work for the sprint.
6. All issues added to the sprint will be moved to the “To Do” pipeline and added to the Zenhub Sprint.

## Planning checklist
- [ ] Look at what’s left over from Sprint X (previous sprint).
  - [ ] Move unfinished, still prioritized tickets to Sprint Y (current sprint).
  - [ ] If moved tickets include a High Priority label, add justification to the issue and notes section in Confluence sprint report.
- [ ] Check sprint velocity for previous 3 sprints, to include Sprint X.
- [ ] Set velocity goal for Sprint Y.
- [ ] Set goals for Sprint Y with an eye towards:
  - [ ] Quarterly goals / roadmap
  - [ ] Platform, Design System, or Congressional deadlines
  - [ ] Feature enhancements
  - [ ] Technical debt and defects
  - [ ] Longer term planning 
- [ ] Estimate the new issues in Sprint Y that don’t have estimates, leveraging [www.pointingpoker.com](www.pointingpoker.com).
- [ ] Capacity
  - [ ] Count points currently assigned to Sprint Y and compare to velocity goal.
  - [ ] Check individual assignments.

## OCTO-DE mid-sprint check in
At the middle of each sprint, Product Managers and Delivery Managers meet with OCTO-DE POs to review the status of sprint goals and any risks identified that may affect delivery of those goals. The expectation from OCTO-DE is that if any goals need to slip they are delivered in the following sprint. The team should communicate any risks to sprint goal delivery by the scrum before this mid-sprint check in.

### Mid-Sprint adjustments
Any issue moved into the Sprint after Sprint Planning must be assigned an “Unplanned Work” (if PO prioritized) or "Stretch" (if pulled in due to capacity) label.

## Demos
Demos are held at the end of each sprint for all teams at the same time. Everyone is expected to demo the work that they have completed to the team and stakeholders.

### Best practices
1. Every team member should post what they will demo in the sprint’s demo script [in Demo's Google Drive folder](https://drive.google.com/drive/u/1/folders/1-9P23xp63ezkgiw7BQdSyrORx-BvHBV7)
2. Record every demo and post the actual video file into the demo script
3. Product Managers will arrange the demo to formulate a coherent message 
4. Application changes should be demoed from the production environment.
  - If this is not possible and the code will be merged within the next two business days, clearly communicate that the functionality is not in production and when it is expected to be deployed.
  - Product Managers will determine if it should be demoed as is or pushed to when it can be shown in production.
5. Limit communication to what is being demoed. If questions arise that need further discussion, table them for another time.

## Retrospectives
Retros are held at the end of each sprint separately, per team. The goal is to have a joint, all team retro at least once per quarter. Retros are typically captured in Trello.

### Best practices
1. The retro should feel as celebratory as possible - completing two weeks of good, impactful work is important to lift up.
2. Open and honest feedback helps to drive meaningful change.
3. Limiting feedback to the specific sprint helps to focus the discussion but team members shouldn’t feel restricted to not bring up larger issues, they just may need further unpacking outside of the retro.

## Reporting
Contractually: 
The Contractor shall provide a single monthly report, detailing and providing links to all stories, epics, and other work completed. This includes a plain language description of all work accepted by the Government Product Owner and COR at the end of each sprint. This report shall include, in plain language, additional details about the project status, sprint team velocity, sprint team goal completion, and highlight project risks. The report shall also highlight and provide links to key infrastructure and application monitoring data. The report shall also include details with links to documentation for any critical incidents or outage events that resulted in service outages or significant service degradations. The Contractor shall attach or provide links to postmortem documentation for all critical incidents or outage events. Should there not be any reported incidents during the reporting period, a link to the relevant monitoring tools is sufficient. The specific data points and format of this monthly report shall be determined by the Contractor in collaboration with the Government Product Owner and COR. Lastly, the Contractor shall submit a roster to the COR in accordance with Base PWS subparagraph 9.2.4, that includes the Status of Government Furnished Equipment (GFE) in accordance with Base PWS subparagraph 9.2.2. The Delivery and Monitoring Report and Roster shall be uploaded to a VA provided SharePoint.


Due to be sent to COR by COB of the 7th day of the following month. (Or: in time for the monthly status report meeting, often the 1st Tuesday of the month.) 

### Best practices
1. During sprint planning, the sprint’s goals should be captured in that sprint’s report.
2. If there is potential for a sprint goal to not get completed, notes should be entered into the sprint report and OCTO-DE made aware by at least the mid-sprint check-in.
3. At the end of each sprint, the board should be cleaned up to reflect all of the work completed. Any lingering issues should either be moved to the following sprint to complete, reprioritized with the PO for a future sprint, or put into the icebox.
   1. Once the board has been updated, the milestone for that sprint can be closed.
   2. The velocity for each team and status for each sprint goal should be added to the report and sent to the COR and POs.
