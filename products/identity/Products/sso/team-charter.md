# SSO Team Charter

---

## Why we're here

### Desired Outcome:
Remove barriers to entry for users to access services between VA.gov, MHV, eBenefits, and My VA Health (Cerner) by ensuring session continuity and clear redirects from VA.gov to My VA Health.

### Workstreams: 
1. SSOe: Implement the VA's solution for session interoperability (see AccessVA for full list of current SSOe enabled sites)
2. Standalone Sign-in page: Create URL-based sign in page for users accessing the Cerner My VA Health tools
3. VA.gov Health pages (Prescriptions, Scheduling, Messaging, Lab & Test Results, Medical Records): Update alert boxes and main content to ensure users who are patients or caregivers of patients at a Cerner facility (such as Mann Grandstaff, Spokane) see the right information and are redirected to the correct page

---

## Who we are

### Team Members:
- DSVA PoC: Lauren Alexanderson
- Product Lead: Ambika Roos
- Engineering Lead: Patrick Vinograd
- Sr UX Designer: Bridget Hapner
- Software Engineer: Dan Hinze
- Software Engineer: Eric Buckley

---

## How we work

### Agile Ceremonies

#### Sprint Cadence: 
- 2 weeks duration, beginning on a Wednesday, and ending on a Tuesday
- Sprint 1 began on Weds, Jan 1 and ended on Tuesday, Jan 14, 2020

#### 1. Stand-up
_Check in on people and product progress:_

- Daily @ 3 pm
- 15-30 minutes
- 3 Question Format: What I did yesterday? What will I do today? Any impediments?

#### 2. Sprint Planning
_Outline work to be done this sprint in order to accomplish the team's goals_

- 2nd Monday of every sprint (eg, 2 days before new sprint begins) @ 2 pm ET
- 1 hour
- Review stories in the Ready pipeline and assign them to team members (Assignees)
- Assign points or ensure the point estimate still is accurate (Estimates)
- Add the correct sprint number (Milestone)

#### 3. Demo
_Show in-progress or completed functionality_

- Last day (Tuesday) of every sprint @3:30 pm ET
- 30 minutes


#### 4. Retro
_Review accomplishments from prior sprint, what went well, what can be improvemed, what questions people have, and any action items_

- 1st day (Wednesday) of every sprint @2:30 pm ET


#### 5. Grooming
_Assess and update workload for remainder of sprint_

- 1st Monday of every sprint (ie business day 4 of a 10 business day/2 week sprint) @2 pm ET
- 1 hour
- Review new stories in the Backlog pipeline
- Add acceptance criteria or missing descriptions to new stories
- Create additional stories as needed
- Remove any redundant stories as needed
- Ensure stories have the correct tags and Epics
- Move stories to Ready pipeline once the above is complete


--
### Scrum Board Workflow 

Sprint board: https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/board?labels=sso-login&repos=133843125,179561178

#### Pipelines
- Icebox: used for tickets that are on a back burner for now
- Epics: used for Epics only
- Backlog: used for new tickets, that have not yet been groomed
- Ready: used for tickets that have been groomed (and have a complete description, acceptance criteria, Epics, and labels), but are not being activey worked on
- Current Sprint: used for tickets that are actively being worked on, that have story points (Estimate) and a person assigned to complete them (Assignee), the corre
- In Progress: not used
- Validate: used for tickets that have an open PR or are being tested
- Blocked: used for tickets that we are unable to work on at the moment due to external factors
- Closed: tickets which have been completed (or have been closed because they are no longer relevant, or duplicative)


#### Issue/Ticket/Story Etiquette
For an issue to go into the Current Sprint pipeline, it must have the following:

- Title that explains task
- Description with User Story or Background, and Acceptance Criteria
- Estimate
- Assignee
- Labels: `SSO-login`. For tickets that apply to a particular Health page on VA.gov, add: `Messaging`, `Prescriptions`, `Test-Results`, `Medical-Records`, or `scheduling` as needed
- Nested in an Epic

--

### Team Norms

- Be respectful, affirming, and optimistic, both online and off
- Show your face (Webcam) at meetings / calls
- Speak up! - everyone’s voice matters
- We are flexible, but intentional in the way we work
- Let’s have fun and do great work!

#### Slack:

This is our main means of communication with each other. Keep as much conversation in public channels as possible (as opposed to DMs), to minimize duplicative communication and maximize transparency and traceability.

#### GitHub
GitHub is the single source of truth. Every body of work should be documented for tracking and capacity planning. Our team folder:
/va.gov-team/products/identity/sso

#### General things
- Update tickets regularly. If conversations happen in Slack that are pertinent to a product or initiative, copy the useful info into GitHub/ZenHub.
- Extra time? Explore the "Backlog" and "Ready" columns in ZenHub and prepare any questions in advance for Grooming and Sprint Planning sessions.
