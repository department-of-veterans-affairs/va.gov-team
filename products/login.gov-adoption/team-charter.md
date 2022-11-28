# Login.com Adoption Team Charter

**Last updated Nov 27, 2022**

## What we strive for

VA will deliver self-service tools on par with top private sector companies and will have the best online experience in the Federal Government. Every digital service will be customized to the individual using it. Interacting with VA digital services will feel like navigating TurboTax, not filling out a form.

**Our Vision:** Every Veteran is guaranteed access to self-service benefits and accurate data
<br>**Our Mission:** Continuously deliver high-quality digital experiences for the benefit of all Veterans and their families

This will be achieved through multiple initiatives:
- messaging to increase proactive login.gov adoption
- transitioning users to Login.gov from existing My HealtheVet and DS Logon accounts, also known as “inherited proofing”
- pilot the use of security keys for users that struggle with online MFA (multi-factor authentication) methods
- providing support with a human touch to facilitate the migration (in-person proofing capabilities at VAMCs (VA Medical Centers))

### Product Vision

The fragmented sign-in experience is confusing for Veterans and non-Veterans faced with multiple pathways and credential options. Further, the credential options are insecure, non-compliant, have poor user experience, or are expensive. VA needs a streamlined way for Veterans to sign-in and securely access products and services.

**Vision**

- One sign-on to access all products and services.
- Veteran choice of “public” or “private” credential option for VA.gov

**How**
- Use human-centered design to consolidate ways to sign on to VA.gov
- Migrate users to their choice of Login.gov and ID.me; robust, compliant credential solutions

**Why**
- Users are frustrated and confused because they must go to multiple websites for benefits
- Multiple ways to sign on adds to the confusion
- Current sign on options have usability, security, and compliance issues


### Mission 

The CEDAR IDIQ will connect VA employees with industry partners to deliver high-quality, digital products following modern best practices to improve service delivery to Veterans.

Our mission is to:
- give VA streamlined access to a small group of exceptional companies that specialize in agile software development and user-centered design
- create a contract mechanism that incentives VA employees and contractors to deliver rapidly following private sector best practices
- promote the principles of Agile and DevOps culture in VA
- support VA’s digital modernization strategy to solve tough technology challenges facing VA


### OCTO Objectives

This work relates to these OCTO (Office of the Chief Technology Officer) objectives:
- Veterans can manage their health services online
- Veterans and their families trust the security accuracy and relevancy of VA.gov
- Veterans can manage their account to a consolidated login
- Veterans can decide the best CSP for their needs
- Veterans and their families can apply for all benefits online

### North star objectives

We need to:
- increase the usage and throughput of VA services 
- decrease the time Veterans spend waiting for an outcome 
- increase the quality and reliability of VA services 

## What we work on

### [Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/login.gov-adoption/products/product-outline.md)

### [Roadmaps](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/login.gov-adoption/roadmap)

## Workflow and cadences

### Stand-up: People & product check-ins

This is a daily team meeting at 10:30am ET. We use this meeting to share updates about what we did yesterday, what we will do today, and any blockers. It helps us start the day in alignment.

### Sprint Planning

This is a bi-weekly meeting on the 1st Thursday of every sprint. It lasts 1-2 hours. We use this meeting to outline team and member focus, goals for sprint.

### Retro

This is a bi-weekly meeting on the 1st Thursday of every sprint. It last 1 hour and happens before sprint planning. We use this meeting to review accomplishments from the previous sprint and what we can improve for the next (or future) sprints.

### Grooming

Thi is a bi-weekly meeting on the 2nd Thursday of every sprint. It lasts 1 hour. We use this meeting to assess and update workloads for the remainder of sprint and loosely discuss next/future sprint(s). To do this, we walk through each team member's Zenhub tickets to make sure tickets are ready to be discussed by sprint planning. By the end of grooming:
- 100% of tickets have are associated with an epic.
- 100% of tickets have acceptance criteria.
- 100% of tickets are estimated.
- 100% of tickets are appropriately labeled.
- At least 2 sprints out, 5 tickets tentatively assigned to those iterations.

We each review `needs-grooming` tickets within our associated discipline (determined by the right GitHub label e.g. `frontend`) before grooming.

## Issue Documentation

### Issue creation

You can create issues for yourself or the team throughout the sprint. We'll use grooming to get tickets ready to go before they are put in the "Current Sprint" column on our [Zenhub](https://app.zenhub.com/workspaces/logingov-adoption-team-632280b31e745000136a61fc/board) board.

For an issue to go into the Current Sprint column, it must have the following (created using the “Standard Issue Template”):
- Estimate
- Title that explains the task
- Description that includes background
- Labels (An issue should be tagged 'login.gov-adoption' as well as other labels)
- User story, goal, acceptance criteria are filled out (These will be revised by the PM as necessary)
- Epic assigned
- Milestone
  
### Estimation

Estimation is based on a few factors: how long something will take to complete, risk, level of effort (LOE), and complexity. We have found [this scale](https://www.scalablepath.com/blog/agile-points-explained-fibonacci-sequence/) to be helpful in estimating tickets.

 - 1 - Easy task, work is known, can be executed quickly   
 - 2 - Mostly known, doable
 - 3 - Becoming complex, maybe be 2 - 3 days of work 
 - 5 - More complex, may take a full week   
 - 8 - Needs to be broken down into smaller user stories      

### Issue validation 

All work should be validated either in staging or production, as defined by the acceptance criteria. Each ticket's last comment before closing should reflect whether validation has occurred, and by whom. By default, assign your PM to validate any tasks you are unable to validate yourself.

If there is a new 'RED LIGHT URGENT' work request, contact the Product Manager and ask for help to work it into the sprint.
 
## Team Norms

### Shared principles

- Be respectful to each other and our collaborators
- Have your camera on when possible
- Speak up and make room for others' voices
- Stay flexible but intentional in the way we work
- Have fun and do great work!

### Logistics

- Keep Slack conversations in public channels where possible, to minimize duplicative and missed communication.
- GitHub is our single source of truth. All work should be documented for tracking and capacity planning.
- Update tickets regularly. If conversations happen in Slack that are important to an issue or useful to document, copy them into GitHub.
- Our tickets and issues need to have an estimated level of effort, clear acceptance criteria, and an individual or team assignee before being put in a sprint.
- Extra time? Explore the "Ready" column in ZenHub.

### Discipline-specific best practices

- [Engineering](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/engineering)
- [Design](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/design)
- [Product](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/product-management)

