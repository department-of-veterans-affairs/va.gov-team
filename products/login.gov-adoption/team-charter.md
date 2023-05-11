# Login.gov Adoption team charter

## What we strive for

The fragmented sign-in experience is confusing for Veterans and non-Veterans faced with multiple pathways and credential options. Further, the credential options are insecure, non-compliant, have poor user experience, or are expensive. VA needs a streamlined way for Veterans to sign-in and securely access products and services.

**Vision**
- One sign-on to access all products and services.
- Veteran choice of “public” or “private” credential option for VA.gov

**How**
- Use human-centered design to consolidate ways to sign on to VA.gov
- Migrate users to their choice of Login.gov or ID.me; robust, compliant credential solutions

**Why**
- Users are frustrated and confused because they must go to multiple websites for benefits
- Multiple ways to sign on adds to the confusion
- Current sign on options have usability, security, and compliance issues

## What we work on

### [Product Outlines](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/login.gov-adoption/products)

### [Roadmaps](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/login.gov-adoption/roadmap) 

## Workflow and cadences

### Daily Standup:

Time boxed ceremony where each team member answers the following questions:
* What did I do yesterday?
* What will I do today?
* What impediments or blockers do I have that prevent me from completing my work?

Daily Standups:

* Short and focused (15 min maximum)
* Replaces the need for other status meetings
* Facilitated by the PM (Scrum Master)
* Occurs daily at the same time
* Performed by the Team, for the Team

Purpose:
* Report task progress
* Report and remove impediments


__*The outcome of Daily Standup is to allow all Team members to have clarity into work being done, aiding collaboration. 
If you cannot attend please notify the team in the slack #cedar-identity-product-team channel*__ 

### Sprint Planning: 

This is a bi-weekly meeting on the 1st Thursday of every sprint. It lasts up to 4 hours. We use this meeting to outline team and member focus, dicuss and estimate user stories, and set goals for sprint. 

Prior to Sprint Planning
* User Stories should be estimated using Story Points 
* Capacity Planning (explained below) should be done
* DSVA lead or Product Owner describes the highest priority User Stories and their business value
* Team gets final clarification on User Stories and pulls them from the Backlog column into the Current Sprint Column as well as assigning them to the Sprint Milestone
* Tasks are created and estimated
 * Tasks are the indivual steps that need to be performed within a Story
* Scrum Master (PM) ensures Team is not over or under committed
* Team commits to completing the now defined Sprint Backlog

__*The outcome of a Sprint Planning meeting is a Team accepted Sprint Backlog*__

Capacity Planning: 
An activity held in preparation for Sprint Planning to:

* Determine max amount of hours each Team member has available to complete work within a Sprint 
* Ensure the Team does not take on more work than is reasonable
* Determine a realistic work schedule for the Team
* Account for external commitments, such as out-of-office time and outside projects
* Receive input provided by the Team


### Backlog Refinement:

Thi is a bi-weekly meeting on the 2nd Thursday of every sprint where the Product Owner and PM groom the Backlog (description below), along with available members of the Team. It lasts up to 2 hours. We use this meeting to assess and update workloads for the remainder of sprint and loosely discuss next/future sprint(s). To do this, we walk through each team member's Zenhub tickets to make sure tickets are ready to be discussed by sprint planning. By the end of refinement:
- 100% of tickets have are associated with an epic.
- 100% of tickets have acceptance criteria.
- 100% of tickets are appropriately labeled.

We each review `needs-refinement` tickets within our associated discipline (determined by the right GitHub label e.g. `frontend`) before refinement.

* Refinement may include the following:
  * Adding items
  * Removing Items
  * Changing Priority
  * Breaking down Epics and User Stories
  * Changing Acceptance Criteria
* These meetings occur throughout the project within a sprint

__*The outcome of a Backlog Refinement meeting is a Prioritized Backlog for work in future Sprints.*__


What is a Backlog? 
A continuously prioritized list of functional and non-functional project requirements, features, defects, and work items
Purpose: 
* Provides insight into project vision and focus
* Displays priority and effort for each requirement
* Used to communicate customer needs between Team, Customers, and Stakeholders

Benefits:
* Allows for long term planning and the ability to identify risks early
* Single repository for requirements
* Provides Team direction by prioritization 
* Constantly inspected and adapted to reflect current customer needs

### Sprint Review: 

This is a bi-weekly meeting on the 2nd Wednesday of every sprint during which the team shows what was accomplished, while the stakeholders provide feedback. It is timeboxed to 2 hours. We use this meeting to review completed work and determine whether additional changes are needed.  

Each VSA product team has the opportunity to share things they’re most excited about from the past sprint with OCTO-DE, Platform, VSA Leads, and other VSA teams. The goal—greater awareness of each other’s work to foster collaboration and shared learnings.

[Additional guidance](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/product/vsa-sprint-demo.md#sprint-demo)

* Held at the end of each Sprint to inspect completed work 

### Sprint Retrospective:

This is a bi-weekly meeting on the 2nd Wednesday of every sprint in which the Team and Scrum Master meet to celebrate Team successes, reflect on what can be improved, and develop a plan to apply lessons learned going forward. It is timeboxed at 1 hour. [Retrospective Board](https://app.mural.co/t/innovationboards1199/m/innovationboards1199/1677768711421/aad15b9308afe560c52a1beddefe388840ae239d?sender=u258844ddcb06996a24bf4390)

* Retrospective discussion points:
  * What went well?
  * What did not go well?
  * What action items are we tracking to help with improvements?

__*The outcome of a Sprint Retrospective meeting is a Team determining and committing to 1-3 actionable items to improve during the next Sprint.*__


[Agile Ceremony Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/login.gov-adoption/products/agile-checklist.md)

## Issue documentation

### Issue creation

You can create issues for yourself or the team throughout the sprint. We'll use refinement to get tickets ready to go before they are put in the "Sprint Backlog" column on our [Zenhub](https://app.zenhub.com/workspaces/logingov-adoption-team-632280b31e745000136a61fc/board) board.

For an issue to go into the Sprint Backlog column, it must have the following (created using the “[Standard Issue / User Story Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=&template=standard-issue.md&title=)”):
- Estimate
- Title that explains the task
- Description that includes background
- Labels (An issue should be tagged 'login.gov-adoption' as well as other labels)
- User story, goal, acceptance criteria are filled out (These will be revised by the PM as necessary)
- Epic assigned
  
### Estimation

Estimation is based on a few factors: how long something will take to complete, risk, Level of Effort (LOE), and complexity. We have found [this scale](https://www.scalablepath.com/blog/agile-points-explained-fibonacci-sequence/) to be helpful in estimating tickets.

 - 1 - Easy task, work is known, can be executed quickly   
 - 2 - Mostly known, doable
 - 3 - Becoming complex, maybe be 2 - 3 days of work 
 - 5 - More complex, may take a full week   
 - 8 - Needs to be broken down into smaller user stories      

### Issue validation 

All work should be validated either in staging or production, as defined by the acceptance criteria. Each ticket's last comment before closing should reflect whether validation has occurred, and by whom. By default, assign your PM to validate any tasks you are unable to validate yourself.

If there is a new 'RED LIGHT URGENT' work request, contact the Product Manager and ask for help to work it into the sprint.
 
## Team norms

### Shared principles

- Be respectful to each other and our collaborators
- Have your camera on when possible
- Speak up and make room for others' voices
- Stay flexible but intentional in the way we work
- Have fun and do great work!

### Logistics

- Keep Slack conversations in public channels where possible, to minimize duplicative and missed communication. (Use #va-identity-product-team slack channel for meetings notes. Use #cedar-identity-product-team slack channel for internal communications)
- GitHub is our single source of truth. All work should be documented for tracking and capacity planning.
- Update tickets regularly. If conversations happen in Slack that are important to an issue or useful to document, copy them into GitHub.
- Our tickets and issues need to have an estimated level of effort, clear acceptance criteria, and an individual or team assignee before being put in a sprint.

### Discipline-specific best practices

- [Engineering](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/engineering)
- [Design](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/design)
- [Product](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/product-management)
