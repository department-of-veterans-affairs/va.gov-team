# VSP Identity Team Charter

## Why we're here

### North Star:
TBD

### Product Suite (if applicable):
VSP Platform Team

### Team Mission Statement:
TBD

### Product Portfolio:
- The BE services that enable FE teams to do what they need to w/Identity info
- Cohesive user record and semantics around relationships of user A and user B (if any)
- Authorization (incl 3rd party auth-z)
- Cookies
- Logging or tracking around Identity (like if we want to do audit logging)

Questionable:
- Everything from login modal to login user, and the endpoint
- Sitewide messaging related to login stuff, like downtime

The following things are NOT in VSP Identity Team's scope, but rather are owned by other teams:

- Auth X team (Lisa DEPO Lead for now, Samara best contact): User experience of using login (and the modal)

- Platform identity team: Capturing reporting brokering of identities (info passed through the modal and whether its accurate, secure, and the relationships of their roles to each other and to the VA)

- SSO + SSOe??: consolidate login across properties incl MHV and Cerner. Product portfolio: standalone login page for Cerner, . But need to hand this off to FE and BE at some point (likely recipients: Auth X and Platform Identity). Dynamic/contextual sign in modals for the Health tools on VA.gov. VA.gov will cut over FE to using V1 session endpoint when we're ready to go.

- eBen migration team (Steve DEPO Lead): migrate features from eBen and VA Enterprise Portal onto VA.gov which require more robust functionality around roles, persons in MPI (caregivers, etc) don't have a differentiated experience. (Mike Carr good person to ask how to test this in eBen)

- Caregiver team: more VA.gov features that rely on Identity enhancements.

### Roadmap:

## Who we are

### Team Members:
•	Team Product Manager: Christine Dillman
•	BE Dev Lead: Anna Carey
•	BE Dev Engineer: ________________________________________

### How we work
Workflow + Cadence
Stand-up
•	What: Check in on people and product progress
•	Who: Whole Team
•	When: Daily 11:30AM ET
o	Monday/Tuesday/Wednesday/Thursday/Friday (Zoom)
•	Duration: 30 min
•	Details: 3 Question Format: What I did yesterday? What will I do today? Any blockers?
Retro
•	What: Review accomplishments from prior sprint, what went well, what can be improved, what questions people have, and any action items
•	Who: Whole Team
•	When: 1st Wednesday of every sprint @ 11:30 ET
•	Duration: 1 hour
Sprint Planning
•	What: Outline work to be done this sprint in order to accomplish the team's goals
•	Who: Whole Team
•	When: 1st Wednesday of every sprint @ 12:30 ET (Follows Retro)
•	Duration: 1 hour
Mid-Sprint Update
•	What: Review progress made against sprint objectives
•	Who: Whole Team
•	When: 2nd Wednesday of every sprint
•	Duration: 30 min
•	Details:
o	Walking the board
Grooming
•	What: Assess and update workload for remainder of sprint and discuss objectives for next sprint
•	Who: PM and Dev Lead
•	When: 2nd Thursday of every sprint
•	Duration: 1 hour
Issue Etiquette
For an issue to go into the Current Sprint column, it must have the following (created using the “Standard Issue Template”):
•	Title that explains task
•	Description with Background and Acceptance Criteria
•	Labels: your team's labels
•	User Story (if applicable), Goal, and Acceptance Criteria
•	Nested in an Epic
All work should be validated either in staging or production, as defined by the acceptance criteria. Each ticket's last comment before closing should reflect whether validation has occurred, and by whom. By default, assign your PM to validate any tasks you are unable to validate yourself.
If there is a new RED LIGHT URGENT work request, contact the Product Manager and ask for help to work it into the sprint
Team Norms
•	Less Meetings + More Collaboration
•	Paired Work as much as possible
•	Come ready to share during Mid-Sprint check-ins
•	Transparency is the way to spur collaboration
o	Talk out loud in Slack (Public Threads)
o	Spin up side bar conversations as much possible
•	Stay Data Driven, Customer-Focused
Slack:
This is our main means of communication with each other. Keep as much conversation in public channels as possible, to minimize duplicative and extraneous communication.
GitHub
GitHub is the single source of truth. Every body of work should be documented for tracking and capacity planning.
General things
•	Update tickets regularly. If conversations happen in Slack that are pertinent to a product or initiative, copy the useful info into GitHub/ZenHub.
•	Extra time? Explore the "Ready" column in ZenHub.

