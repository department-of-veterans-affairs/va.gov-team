# Operations Team Charter


---
## Why we're here

### VSP North Star:
Enable VA to build digital tools at scale that improve Veterans’ lives.

### Team Mission Statement:
Provide reliable infrastructure, secure access controls, and CI/CD tooling to allow safe deployments for the platform.


Note: These may shift in the new Infra. 
### Product Suite: 
- Platform 

### Product Portfolio:
|Product|Tool/Sub-Features|
|----|----|
|Infrastructure | Networking, Servers| 
|CI/CD pipeline | Jenkins, Ansible, Configuration, BRD (Build, Deploy, Release) |  
|Monitoring and Alerting | Prometheus, Grafana, Cloudwatch, Infrastructure Postmortems, Infrastructure oncall/ Incident Response, PagerDuty Account Management| 
|Configuration Management/Automation| Environments (Prod, Staging, Dev), Terraform, Atlantis|
|Access Management (VA.gov)|Github Teams, SOCKS Proxy, Jumpboxes|
|Environment connectivity|AWS / VAEC, Forward Proxy, Reverse Prox| 
|Technical Compliance Issues|Nessus and WASA scans, Ensuring compliance with documentation, SSL configuration|

Note: This list will change once we are in the new Infra. 
_List of products within your team's perview - make sure the list of products here aligns to what's captured in the [List of VA.gov Products doc](https://docs.google.com/spreadsheets/d/1hzz6whEGoQJQbiNvIggirhydYYdv57nfOZfLvFqZ1pQ/edit)_

### Areas we work in: 
- SRE
- Operations
- Release Engineer 
- Platform Infrastructure
- Governance & Security

Note: These will shift in the new Infra.

### Roadmap:
[Zenhub Super Epics](https://github.com/department-of-veterans-affairs/va.gov-team/pull/3082#workspaces/vsp-5cedc9cce6e3335dc5a49fc4/board?labels=operations,super-epic&repos=133843125,48004036,194202180,31788863)

###  Gray Areas and Questions
- CI/CD in future infra
- CI pipeline Monitoring in the future Infra 
- AWS account (used across multiple contracts)
- Team mission in the future.



---

## Who we are

### Team Members:
- Team lead Ops Engineer - Demian Ginther
- Ops Engineer - Taylor Skinner
- Ops Engineer - William Ryan
- Ops Engineer - Jeremy Britt
- Ops Engineer - Julian Severino
- Ops Engineer - Don Seymour
  Ops Engineer - Matt Leclerc
  Ops Engineer - Srikanth Valluru
  Ops Engineer - Arnaud Tako
- ATO SME - Faith Owusu
- Product Manager - Jesse House

---

## How we work

### Workflow + Cadence

#### Stand-up
Check in on people and product progress

- Monday/Wedesday/Friday @ 12:00pm EST
- 15 min
- Then Parking lot.

#### Retro
Review accomplishments from prior sprint, what went well, what can be improvemed, what questions people have, and any action items

- 1st Tuesday before every sprint 3:00pm EST
- 45 min
Agenda
- Follow up on action items from previous retro
- Time for writing cards if necessary (please write cards ahead of time!)
- Voting on cards
- Discussion of most-voted items
Output
- Action items related to the cards

#### Pre Planning
 
Talk about work we want to do in the coming sprint. Prioitize this work and see what we can move forward with and what we can't.
Agenda
- 45 mins right after standup, Friday before new sprint.
- Get plans for sprint in order so we have a plan before planning.

#### Sprint Planning
Outline work to be done this sprint in order to accomplish the team's goals
Agenda
- 1st Wednesday of every sprint right after standup
- 45 mins
- Discuss the sprint objectives
- Overview of resourcing for the sprint
- Assign work from pre-planning
- Point the tasks
Output
- Sprint backlog made up of pointed tasks required to meet the stories' acceptance criteria


#### Ops All hands
Talk and demo work we are working on to ensure we are aware of current work in a bit more techincal detail. 

- 2nd Wednesday of every sprint, right after standup.
-  45 mins
- Talk through what different pieces of work we are doing right now and ask any questions that come from it in order to brake down any silos on the team. 

#### Pre Planning 
Stragetgic meeting to plan work for the team and work we need/want to accomplish. 

- 2nd Friday of every sprint
- 1 hour

- talk through what different pieces of work we are doing right now and ask any questions that come from it in order to brake down any silos or clinfd spots on the team. 

#### Grooming 
Assess and update workload for remainder of sprint

- 1st Friday of every sprint
- 45 mins right after standup
- revisit the Ready columns  


#### Issue Etiquette
For an issue to go into the Current Sprint column, it must have the following (created using the “Ops Issue Template”):

- Estimate
- Title that explains task
- Description with Background and Acceptance Criteria
- Labels: Operations,  and Needs Grooming (if applicable)
- User Story (if applicable), Goal, and Acceptance Criteria
- Nested in an Epic
   - If an Epic is created a super epic is assigned.

All work should be validated either in staging or production, as defined by the acceptance criteria. Each ticket's last comment before closing should reflect whether validation has occurred, and by whom. By default, assign your PM to validate any tasks you are unable to validate yourself.

If there is a new RED LIGHT URGENT work request, contact the Product Manager and ask for help to work it into the sprint

#### Ticket Estimation
Teams will use the following complexity estimation to point tickets before Sprint Planning. Teams will adjust points during sprint if required time to complete the ticket changes.
Points: Complexity Estimate
- 1 = ~1 hour
- 2 = ~2-4 hour
- 3 = ~ 1 day (8-10 hours)
- 5 = ~2-4 days
- 8 = ~1 week
- 13 = ~1 sprint (2 weeks) (this needs to broken down into smaller tickets)
- 21 = 1 -2 months
- 40 = super epics (2 + months)

#### Team Norms
- Be respectful, both online and off
- Show your face (Webcam) at meetings / calls
- Speak up! - everyone’s voice matters
- We are flexible, but intentional in the way we work
- Let’s have fun and do great work!
- Don't over use @here and @channel in slack, only use in a time sensitive situation. 
- Do meaningful PR reviews

#### Team Knowledge
- Engineer
  - https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/operations/onboarding.md
  - BRD Overview (ping TJ for recording)
  - Ansible Overview (ping TJ for recording)
  - Grafana Overview (ping TJ for recording)
  - VA Network overview (ping TJ for recording)
  - CMS build overview (ping TJ for recording)
  - VA overview (ping TJ for recording)
  - Rev and Fwd Proxy deep dive (ping TJ for recording)
  - Review instance how to (ping TJ for recording)
- Zenhub (if you would want to go over ZH more ping TJ)
  - https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/zenhub_onboarding.pdf
 - Access to Tools and AWS
   - https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/request-access-to-tools.md
- VSP Operations Calendar 
   - We maintain our meetings and OOO here.

#### Slack:

This is our main means of communication with each other. Keep as much conversation in public channels as possible, to minimize duplicative and extraneous communication.

#### GitHub
GitHub is the single source of truth. Every body of work should be documented for tracking and capacity planning.

#### General things
- Update tickets regularly. If conversations happen in Slack that are pertinent to a product or initiative, copy the useful info into GitHub/ZenHub.
- Extra time? Explore the "Ready" column in ZenHub.
