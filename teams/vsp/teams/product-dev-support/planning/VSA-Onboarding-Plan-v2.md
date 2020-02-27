# VSA Onboarding Plan -- DRAFT

## What we've learned from By Light
### 1. Missing project requirements/context
The By Light team had not met with their Product Owner/stakeholder before attending the onboarding meetings. We were onboarding the team before they had a clear understand of what they would be working on. Thus, we delayed our Day 2 meeting, which focused on diving deeper into specific project questions.

**Recommendations:** 

* New teams should meet with the product owner/stakeholder before onboarding sessions to understand the project requirements. 
* The Product Support should also attend this meeting to have a shared understanding of the project.

### 2. Issues installing the environment on GFE/Windows
The By Light team uses GFE/Windows and our documentation focuses on installing on Mac machines. 

**Recommendations:** 

* Write documentation for installing the environment on GFE/Windows.
* [DONE] On intake questionnaire, ask if the team is using GFE if they indicate that they are using Windows

### 3. Onboarding meetings used the same introduction format
All three of our onboarding meeting presentations used the same introduction format.

**Recommendation:**
Vary the introduction/ice breaker content for each meeting. 

### 4. New team members are getting lost and not knowing when they have completed onboarding and setting up their systems.
Documentation is located in a few different repos.

**Recommendation:**

* Consolidate repos and make a single onboarding document to make it easier to follow the onboarding process.
* Create checklist with each step of the onboarding process that links out to appropriate documentation. This could be an onboarding epic in Zenhub.


## Risks
When VSA is awarded, we will potentially have 4-5 teams start at the same time, which is double the amount of teams we currently support. What kinds of risks does that introduce? How do we want to handle the risks?


### 1. We don’t have enough people on the Product Support team to support 4-5 new VFS teams.  

* This creates risk of teams feeling isolated if they do not have support team members available, their work slowing and putting possible deadlines at risk. Also risking the quality of what will be delivered to Veterans. Risk of cutting corners with audits and testing if the team is spread thin.
* We don't have a dedicated backend engineer.
* The Product Manager is still ramping up, OOO during our prep week, and doesn't have full write permissions on GitHub. 
* We don't have backfills designated if someone on the Product Support team is OOO.

**What should we do about it?**

- Since onboarding content is general, we can invite all VSA teams to one overview kickoff meeting, and appropriate practice meetings.
- Exercise options to bring on more Product Support team members.  
- Batch sessions of training for VSA teams - for example, “lunch and learn” for 508 and accessibility. 
- All one-on-one sessions can be batch sessions.
- Pilot capturing training and onboarding sessions on video that would allow us to scale more quickly. 
- Pilot setting up practice area-specific office hours. When they need us, they come to us during specific, dedicated times per week.
- Assign one Product Support team member to each VSA team (rather than the full team supporting each VSA team).

---

### 2.  New members may be delayed in getting started if they have GFE (Government Furnished Equipment).

**What should we do about it?**

* Set up GFE machine to document the process for team members with this setup.

---

### 3. Teams aren't using the same tools (ZenHub, Slack, etc.)

We lose the ability to track progress and visibility into what they're working on and understanding when they might need support. It's more difficult to meet the USDS principle of working in the open. 

**What should we do about it?**

Require teams to use ZenHub and Slack.

---

### 4. We may not be able to meet other sprint objectives.

Since this is first time we're onboarding multiple teams, we're not sure what level of support will be needed. 

**What should we do about it?**

Make sure that leadership at DSVA is aware and can reprioritize or deprioritize sprint objectives as needed.

---

### 5. New Product Support team members may not have access to the appropriate systems and be able to contribute.

This delays/limits contributions from the full Product Support team.

**Unknown**

Does this apply to VSA team members as well?

**What should we do about it?**

Make sure that leadership at DSVA is aware.



## Onboarding process
VSA Onboarding Epic: [https://github.com/department-of-veterans-affairs/va.gov-team/issues/710](https://github.com/department-of-veterans-affairs/va.gov-team/issues/710)

1. Kickoff email to introduce the Product Support team, attach initial documentation
1. Get information about their team and the project
1. Add team to Slack and Github
1. Schedule kickoff meetings (TBD)
1. Schedule practice area breakout sessions
1. Attend the team standups and be available for support

## Product Support Team To-dos

* Set up office hours
* Product Support member assigned to each team
* Create a checklist for onboarding and canonical guidance around review and launch processes 
   * Layla will create ticket to track this 
   * Leah can validate or start adding items for the checklist)
* Tell TJ that we're ready to give team members access to Slack and Github accounts 
* Get a list of the product manager for each team so that we can get team member email addresses/names, etc.
* Revise intake form questions to be geared toward program manager
* Add [sensitive vs. public](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/README.md) info to onboarding documentation/checklists
* Add Leah to Onboarding folder in Google Drive


## Open questions

### Accounts
* How do we handle Github issues that have PII?
* How are people added to Slack/Github? Are we responsible for this? 
   * Nancy does this now, but should this process change?
   * VSA will be added as full team members.
   
### Sensitive documentation
* When should a document or ticket be "sensitive" vs. "public"?
* How do we communicate this?
* We need a way to cross-link sensitive and public tickets.
   
### Launching
* Do we have the authority to delay a launch if there are issues? 
   * Assumption: Yes. It’s our responsibility to notify DSVA, and they decide. How would leadership like to be notified?
   * Andrew drafted launch criteria: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/Product%20Development%20Checklist.md
   * Harry is working on the engineering best practices presentation (which addresses things that should be in place prior to launch): https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/frontend/engineering-best-practices.md


## Resources
* [Onboarding Workshop Decisions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/Platform/Teams/Product%20Support/Intake/June%202019%20MVP%20Workshop/decisions.md)
* [Onboarding for External Contractors](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/working-with-vsp/orientation)
* [Draft - Kickoff Agendas for New Teams](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/Platform/Onboarding/New%20VFS%20Team%20Kickoff%20Template.md)
* [How does onboarding work today? -- meeting notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/Platform/Teams/Product%20Support/Intake/June%202019%20MVP%20Workshop/Running%20Notes.md)


