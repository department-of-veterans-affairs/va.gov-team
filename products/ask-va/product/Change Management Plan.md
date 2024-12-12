# Ask VA VA.Gov Changment Plan



| Date              | Version               | Author          |
| ----------------- | --------------------- | --------------- |
| November 3, 2024  | Initial Draft         | CeeCee O'Conner |
| December 11, 2024 | Updates from CRM sync | Ariel Martinez  |

### Goal

To define the ongoing ways of working between Ask VA.Gov and CRM teams.
- Manage and process incoming feature requests.
- Communicate and align priorities between the two teams, and plan for subsequent iterations of Ask VA.
- Establish processes to support smaller releases.

### Feature Requests and Bug Reports

#### Features
Feature requests should be sent to a shared email inbox. Each feature request must contain the following details:
- A description of the feature or desired change
	- I.e updates to rules or logic, creation of a new topic, page UI updates, etc
- The reason for the change
	- I.e feedback from business lines or other business justification

#### Bugs
For issues found via monitoring in the #ask-va-notifications channel, please see TBD.

User discovered bugs can also be reported to the shared email inbox or the TBD slack channel. The following information must be included in each bug report:
- Description of the issue
- Steps to reproduce the issue
- The impact this bug has on the system, clients, and/or team
-  Expected behavior
 - Actual behavior

The recommendation is to collate feature requests and bugs (i.e a Github project view) to track their status and discussions regarding the feature/bug. For example, the Ask Va VA.Gov team decided not to move forward with a feature.

The Ask VA VA.Gov and CRMS teams should periodically review feature requests and bug reports in the CRM sync or in other joint meetings.

### Planning

For each iteration, Ask VA VA.Gov product team creates an [initiative brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/product/initiative-brief-template.md) to cover what features the team plans to build and outcome(s) the Ask VA VA.Gov team is driving towards. The brief should also contain tentative release dates.

The CRM conducts PI planning every 12 weeks.  During this time, the initiative brief is reviewed with CRM team identify dependencies, gather feedback, and align priorities. It's recommended that the Ask VA VA.Gov follow a similar planning cadence, thus each brief would encompass 12 weeks of development work.

Ideally, collaboration cycle kickoff and PO sync should occur prior to development starting, in case OCTO rejects some items. The Product outline also needs to be updated with a link to the initiative brief.

### Development

Once confirmed, features in the initiative brief are broken down into epics that are plotted on a roadmap.
- Epics and their issues are labeled with the release they are associated with.
- Each sprint will have defined goals to track the initiative progress. 
- Ask VA VA.Gov operates in 2 weeks sprints (Tuesdays to Tuesday)
### Testing

Each feature shall go through Platform review (required by OCTO) and shall be quality assured
Our initial expectation is that a new feature may be to manually execute a tes

Moving forward for testing at the feature level, we will:
- have the product manager or a defined business partner execute a manual test.
- (future state) as a part of the dev tasks, the expectation is create or add an automated test for new feature
- run the core test suite ( the 5 test scripts for launch noted in the test plan to start) will be run at the build pipeline level

On a batch level: 
- the Ask.VA.GOV team will run an automated test suite of a larger batch of automated test scripts at a weekly level
-  the goal of this activity is to provide confidence for regression testing without signficantly extending the amount of time in development for a developer to run the test suite in the build pipeline.

On a release level:
- the team shall define the a potential number of manually executable test ( while we are burning down the list of potential automated test scripts to be developed from the Form and Dashboard manual test execution list)
- the team shall execute the Insomnia tests to confirm the APIs and mapping are running as expected. 


### Release Management

- **Feature Flags and Toggles:** through leveraging feature flags and toggles the team will be able to clearly define the stream of work coming through the Continuous Integration and Deployment pipeline (this will prevent us from promoting potentially unready work up the environments to production.)  
  - An example of this used by the team has been how the Dashboard Research pilot was made separate from the continuation of development. 

Collaboration Cycle
After the kickoff request and PO sync, the required touchpoints are:
- Architecture Intent
- PRISS/Security Review
- Staging Review 
Additional touchpoints may be recommended by the Governance team after reviewing the kickoff request. However, given the smaller scope of an initiative, less effort should be 

### Open Questions

| Question                                                                                                                                                                                                   | Answere                                                                                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| How do we handle freezing in shared environments with CRM and Pats R?                                                                                                                                      | AVA CRM/PATSR separation: Ask VA ATO needs to get granted. Submitting in Feb 2025. 90 day timeline to get approved, if there are no changes. Around when portal launches. Once approved and completed all work for separation, shared environment freezes won't be issue<br> |
| How do we define what is our future joint testing between the Ask VA VA.gov + CRM APIs (ex . testing for rules, update to payload, contract testing etc.)                                                  |                                                                                                                                                                                                                                                                              |
| Can the architecture intent and other touchpoints cover all releases in an initiative or must they must be done for every release?                                                                         |                                                                                                                                                                                                                                                                              |
| Should an additional Slack channel be created to handle bug reports?                                                                                                                                       |                                                                                                                                                                                                                                                                              |
| Do we want to version releases somehow?<br>Helps with tracking. Can use labels and/or milestones to link epics and issues to releases.<br>Github also has a release management feature that could be used. |                                                                                                                                                                                                                                                                              |
