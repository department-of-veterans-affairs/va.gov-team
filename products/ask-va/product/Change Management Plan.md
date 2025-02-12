# Ask VA VA.Gov Change Management Plan
| Date              | Version               | Author          |
| ----------------- | --------------------- | --------------- |
| November 3, 2024  | Initial Draft         | CeeCee O'Conner |
| December 11, 2024 | Updates from CRM sync | Ariel Martinez  |

This plan defines how the Ask VA VA.gov team implements new changes to the Ask VA application on VA.gov. This includes ongoing ways of working between us and the CRM team. 

**On this page:**
- [Manage feature requests and bugs](#manage-feature-requests-and-bugs)
- [Prioritize initiatives](#prioritize-initiatives)
- [Implement initiative](#implement-initiative)
- [Test before launching](#test-before-launching)
- [Manage releases](#manage-releases)
- [Open questions](#open-questions)

## Manage feature requests and bugs
**If the CRM team receives a feature request from a business line**, they can send it to the VA.gov team's shared email inbox (❓TBD).

Please include these details in the email:
- Dscription of the feature or desired change
   - I.e updates to rules or logic, creation of a new topic, page UI updates, etc
- Reason for the change
   - I.e feedback from business lines or other business justification

**If the CRM team discovers bugs**, they can send them to the shared email inbox (❓TBD) or the TBD slack channel (❓Why not use an existing Ask VA channel). For issues found via monitoring in the #ask-va-notifications channel, please see TBD (❓What are we trying to say here? If our team finds issues?)).

Please include these details in the message:
- Description of the issue
- Steps to reproduce the issue
- Impact bug has on the system, clients, and/or team
- Expected behavior
- Actual behavior

**The VA.gov team will** add feature requests and bugs as issues in our GitHub repo and prioritize them against existing stories.

**Both teams will** periodically review feature requests and bugs in the CRM sync or other joint meetings.

## Prioritize initiatives
**The VA.gov team will** create an [initiative brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/product/initiative-brief-template.md) for each new feature. It will contain problems the feature will solve, expected measureable outcomes, tentative release dates, etc.

**The VA.gov team will** review new and existing initiative briefs with the CRM team every 12 weeks. This is because the CRM team conducts PI planning every 12 weeks. We'll jointly 
identify dependencies, gather feedback, and align priorities. The VA.gov could follow a similar planning cadence. Each brief would encompass 12 weeks of development work.

**The VA.gov team will** submit a collaboration cycle request and schedule a PO sync before development, in case OCTO rejects some items (❓Why the concern). 

**The VA.gov team will** add a link to the initiative brief to the product outline.

## Implement initiative
**The VA.gov team will** develop epics of work for the initiative. In our GitHub projects view, we'll label epics and their issues with the related release and define sprint goals. We have 2 weeks sprints (Tuesday to Monday).
  
## Test before launching
**The VA.gov team will** define the scope of QA testing before launching.

For each feature:
- The product manager or defined business partner executes a manual test
- Run the core test suite at the build pipeline level. [See test scripts](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/engineering/test-plans/ask-va%20form-dash-testing-plan.md#e2e-automated-testing-cypress) in this GitHub doc.
- (Future state) Expand our automated test suite by creating at least one new automated test for each new feature

On a batch level: 
- Run automated test suite of a larger batch of automated test scripts at a weekly level (❓Our goal is to just do this generally at any time?)
   - We're doing this to provide confidence for regression testing without signficantly extending development time for a developer to run the test suite in the build pipeline.

(❓What is the difference between release level and feature level from your perspective)
On a release level:
- the team shall define the a potential number of manually executable test (while we are burning down the list of potential automated test scripts to be developed from the Form and Dashboard manual test execution list)
- the team shall execute the Insomnia tests to confirm the APIs and mapping are running as expected. 

## Manage releases
**The VA.gov team will** use feature flags and toggles to define the stream of work coming through the Continuous Integration and Deployment pipeline. This prevents us from promoting potentially unready work up the environments to production. For example, we separated dashboard code used during our research study from the continuation of development. 

(❓What's the purpose of include collab cycle info? Who is our audience?)

After the kickoff request and PO sync during the [VA.gov platform Collaboration Cycle](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/), the required touchpoints are:
- Architecture Intent
- PRISS/Security Review
- Staging Review 

The Governance team may recommend additional touchpoints after reviewing the kickoff request. However, given the smaller scope of an initiative, less effort should be ❓

## Open questions
|Question|Answer|
|---|---|
|How do we handle freezing in shared environments with CRM and PATS-R?|AVA CRM/PATS-R separation: CRM currently working on separate Ask VA ATO needs to get granted. Will submit in Feb 2025. 90 day timeline to get approved, if there are no changes. Around when portal launches. Once approved and completed all work for separation, shared environment freezes won't be issue.|
|How do we define what is our future joint testing between the Ask VA VA.gov + CRM APIs (ex . testing for rules, update to payload, contract testing etc.)?| |
|Can the architecture intent and other touchpoints cover all releases in an initiative or must they must be done for every release?| |
|Should we create another Slack channel for people to report bugs?| |
|Do we want to version releases somehow?<br>Helps with tracking. Can use labels and/or milestones to link epics and issues to releases.<br>Github also has a release management feature that could be used.| |
