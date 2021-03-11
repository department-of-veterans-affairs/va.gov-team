# VEText Agile Workflow
*Edited 03/21*

## Overview
The VEText team needs to build **velocity** without losing **momentum**.  

This workflow focuses on maximizing the team's ability to work while adding enough structure to address pain points.

As with all agile processes, this will be continually reviewed and refined to meet the needs of the team. 

## Summary

-   **All work is tracked** in one place & processed through one workflow regardless of size or source
-   **Anticipated work is triaged** into actionable, contained, unblocked issues
-   **Unanticipated work is reported** rather than refined so hotfixes or bug fixes can proceed unencumbered
-   **The team is connected** with daily standups and weekly planning sessions


## Definitions 

-   **Work** - any incoming tasks or projects which the team must complete
-   **Issues** - individual actionable, contained, and unblocked tasks relating to work
-   **Anticipated Work** - work of any size for which the team has advance notice - feature requests, larger projects, integrations, known fixes or refactoring, maintenance of existing systems, etc
-   **Unanticipated Work** - work that arrives unexpectedly and urgently - bugs, urgent user requests, etc. This can encompass any raised issues that require immediate attention at the discretion of the developer receiving the request
- **Definition of Done** - A metric determined by the team to qualify an issue as completed and ready to be closed. Each issue should contain an explicit definition of done to be considered actionable

## The Board
The **[VEText board](https://app.zenhub.com/workspaces/vetext-team-6037e6489f650a000f9f08a9/board?repos=133843125&showPRs=false)** is a living representation of all team work. It serves as an instant reference for where any project or task is in our workflow. 

Anyone on the VEText team can add issues to the board. Everything besides unanticipated work should be added to the **Inbox** for triage.

###  Sections
-   **Inbox** - Anticipated new work for the team, regardless of scope or size
-   **Future Work** - Anticipated work that we do not need / do not have bandwidth to complete immediately
-   **Epics** - Work that comprises more than one issue or represents ongoing service areas
-   **Blocked** - Work or epics that have an unresolved dependency
-   **Refined** - Work that has been refined from the inbox into actionable, contained, unblocked issues
-   **In Progress** - Work that is claimed and actively happening
-  **Closed** - Work that has been released / ended / abandoned

###  Process
As a living document, the board is kept up to date with everything the team is working on. This is done in brief during daily standups and in depth during weekly planning sessions. 

-   Anticipated work is added to the **Inbox** regardless of scope, size, or source.
-   Issues can be moved to **Refined** when they meet these conditions:
	- A contained task
	- Has no blockers
	- Has a clear definition of done
	- Can be claimed by a single developer
	
-   Work that doesn’t fit those conditions is triaged and sorted into one of three categories:
	- **Future Work**  - If the work isn’t needed immediately
      - Items are added without refinement, so this is for anything the team knows may be coming of any size
	- **Blocked** - If the work can’t be completed until a dependency is removed
		- The dependency should be clearly stated with steps to address and ownership
	- **Epic** - If the work comprises more than one task or requires work from multiple developers
		- Work contained in an epic is broken down into component tasks until they meet conditions needed to be added to **Refined**.

Once work is in the **Refined** column it can be claimed and worked on. 
-   When a developer claims a task, they move it to **In Progress**. Tasks live here until they are completed
-   Tasks that are completed are moved to **Closed**
-   Unanticipated work that requires immediate action (hotfix / bugs) is recorded in the next day’s standup and added to either **In Progress** or **Closed**

###  Workflow
![enter image description here](https://user-images.githubusercontent.com/76975202/110854669-4848f680-8283-11eb-9f2e-5da07b649054.png)

## Meetings
-   **10 Minute Standups** - daily m-f 8am pst / 11am est
	- Same time each day
	- Focused - what happened yesterday, what’s happening today what are your blockers? 
	- Unanticipated work from the previous day is recorded (bugs / hotfixes)
	- Mandatory
	- Camera On

-   **Monday Meeting** - weekly 1pm pst / 4pm est
	-  Happens every week
	- Whole VEText team
	- Triage Inbox Tasks - goal is "Inbox Zero"
	- Plan anticipated work & reflect on previous week
-  **Wednesday Meeting** - weekly 1pm pst / 4pm est
	- Address larger projects for deep dives and long term planning
	- Time is held in case team needs it
	- Whole team will not always be needed
	- Who is needed will be communicated beforehand
