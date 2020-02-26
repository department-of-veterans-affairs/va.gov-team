# VSA Onboarding Plan -- DRAFT

## What we've learned from By Light
* Tbd
* Tbd

### Changes to onboarding process
* [DONE] Updated intake questionnaire
* See ticket: https://github.com/department-of-veterans-affairs/va.gov-team/issues/613
* Tracking onboarding tasks in an onboarding epice


## Risks
When VSA is awarded, we will potentially have 4-5 teams start at the same time, which is double the amount of teams we currently support. What kinds of risks does that introduce? How do we want to handle the risks?

**Risk:** 
Our MVP isn’t fully formed yet. There are pieces that aren’t yet started, and we haven’t practiced or done dry runs yet. Onboarding 4-5 teams at once will put the MVPs at risk if the team doesn’t have the bandwidth to continue iterating on these items.

**What should we do about it?**

- Recommendation: Hold off on onboarding for another sprint to have more time to flesh out the MVP
- Recommendation: Identify and prioritize the most critical MVP items to develop to a more mature state prior to VSA teams starting, deprioritize other MVP items
- Recommendation: Have Leadership team remove blockers from Product Support team so that they can shift focus to prioritizing critical MVP items

**Risk:** We haven’t yet tested our onboarding MVP yet. And therefore haven’t iterated on it. It would be more ideal to test it with a smaller group (Insignia) and have the chance to rapidly iterate the tools and processes we’ve created so far before another batch of teams join.

**What should we do about it?**
- Recommendation: Use previous VFS team work to test against MVP, mock walkthroughs of MVP items roleplaying as past teams (AbleVets, BAH, Agile6)
- Recommendation: Gameday scenario where we have roleplayers and mini onboarding sessions with the Product Support team

**Risk:** 
* We don’t have enough people on the Product Support team to support 4-5 new VFS teams. This creates risk of teams feeling isolated if they do not have support team members available, their work slowing and putting possible deadlines at risk. Also risking the quality of what will be delivered to Veterans. Risk of cutting corners with audits and testing if the team is spread thin.
* We don't have a dedicated backend engineer.
* We don't have backfills designated if someone on the Product Support team is OOO.

**What should we do about it?**
- Recommendation: Stagger or stretch out the onboarding of the individual VSA teams. Don’t start them all at once, but bring them on 1 at a time (one per week?)
- Recommendation: Exercise options to bring on more Product Support team members.  
- Recommendation: Batch sessions of training for VSA teams - for example, “lunch and learn” for 508 and accessibility.
- Recommendation: Capture training and onboarding sessions on video that would allow us to scale more quickly. Harry has already recorded an Engineering Best Practices video, we could record similar sessions for other practice areas and work practices.
- Recommendation: Set up practice area-specific office hours. When they need us, they come to us during specific, dedicated times per week.
- Recommendation: Assign one Product Support team member to each VSA team (rather than the full team supporting each VSA team).

## Onboarding process
1. Kickoff email to introduce the Product Support team, attach initial documentation
1. Get information about their team and the project
1. Add team to Slack and Github
1. Schedule kickoff meetings (TBD)
1. Schedule practice area breakout sessions
1. Attend the team standups and be available for support

### What do we need to know about a team before the onboarding process begins?

**Assumption**: The team has been through the intake process and vetted by VA/DSVA.

**Format**: Could this be a Word doc questionnaire that they fill out? Eventually, it would be integrated with our system. Slackbot?

* Who are the team members? (positions/roles, contact information, time zones)
* Verify that the team’s structure matches the handbook’s onboarding requirements
* What are they working on?
* What is the testing strategy? Automated, manual, both?
* What is the timeframe for the project? 
* Are the legislative deadlines that they’re working against?
* What happens after the project is done?
* How much experience does the team have with our tech stack and the agile process?
* What is the strategy for integrating the service?

## Team preparation for VSA onboarding
* Define process for getting VFA team members into bi-weekly practice area meetings and Slack channels
* Ask Rachael for kickoff meeting slide deck
* Review slides
* Schedule kickoff presentation dry run
* Refine presentation

### Schedule meetings w/full VFA team, VA stakeholders, and VSP support team
* Schedule kickoff meeting(s)
* Schedule product team standups
   * One VSP member per standup (can we scale this back eventually?)
   * Review standup statuses at our daily standup meeting
   * Invite to bi-weekly demo or set up a new one for the VSA team
   * Schedule invites to break-out kickoff session for Engineering-specific best practices/expectations, covering:
      * Full development process
      * Pull requests
      * Testing
      * Launch criteria expectations
   * Schedule separate break-out for Design-specific best practices/expectations
      * Schedule meeting with design group; if new team member is added later, schedule 1:1
   *  Schedule separate break-out for 508-specific best practices/expectations
      * Could be folded into FE and Design breakouts depending on team’s sophistication
* Provide Product Support contact information

### Additional considerations
Consider including:
* A way to facilitate getting quick access to necessary systems. How is this done today?
* Identifying where connections to people at external services would be helpful. What are all of the external services?

## Open questions

### Accounts
* How do we handle Github issues that have PII?
* How are people added to Slack/Github? Are we responsible for this? 
   * Is [this document](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/engineering/internal-tools-access.md) up to date?
   * What other accounts (other than Slack and Github) do teams need access to?
   
### Security / Private repos
* Devops has permission to use the private repo? Which one? Vets-team?
   * Look for documentation on secret keys. If it doesn’t exist, create one. 
   * Do we need to write tickets that expose security risks?
   * Idea (h/t Trevor): Mini questionnaire that helps someone evaluate whether issues/documentation should be in a private repo
   
### Launching
* Do we have the authority to delay a launch if there are issues? 
   * Assumption: Yes. It’s our responsibility to notify DSVA, and they decide.
   * Andrew drafted launch criteria: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/Product%20Development%20Checklist.md
   * Harry is working on the engineering best practices presentation (which addresses things that should be in place prior to launch): https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/frontend/engineering-best-practices.md
   
### VSA team structure
* If a team’s structure doesn’t match the handbook, what do we do?
   * We may have to adjust our level of support. 
* If there is a role that’s missing, are we expected to allocate a team member full time?

### Scaling the onboarding process
* If 5 teams start next week, do we have to schedule 5 individual kickoff meetings the same week?
* How many kickoff meetings should we have per day?
* Should we have breakout sessions on the same day as the kickoff?
* Can we stagger kickoff meetings? Does this block teams from getting started? 
   * Maybe we have a larger kickoff meeting for all teams. Then schedule practice area breakout sessions throughout the week.

## Resources
* [Onboarding Workshop Decisions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/Platform/Teams/Product%20Support/Intake/June%202019%20MVP%20Workshop/decisions.md)
* [Onboarding for External Contractors](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/working-with-vsp/orientation)
* [Draft - Kickoff Agendas for New Teams](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/Platform/Onboarding/New%20VFS%20Team%20Kickoff%20Template.md)
* [How does onboarding work today? -- meeting notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/Platform/Teams/Product%20Support/Intake/June%202019%20MVP%20Workshop/Running%20Notes.md)


