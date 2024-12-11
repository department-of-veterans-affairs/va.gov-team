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

The requestor should email *shared email inbox* . The request , with the following details, shall be reviewed in CRM Sync:
- A description of the potential feature or request
- provide business justification : what is the value or impact of pursuing this change
- provide acceptance criteria this may include:
    - impact to rules or logic
    - creation of a new topic
    - denoting the page expected to be impacted
 - the requestor should also identify a tester on their behalf to confirm that the business value is being provided and the experience is being executed as expected

Each feature shall be documented in Github Projects.

The recommendation is to collate feature requests and (i.e a Github project view) to track their status and . For example, a decision was made to not move forward with a feature.

### Planning

For each launch the product team (owner and manager) will assess the potential impact of releasing a new feature or epic to Ask.Va.Gov and update the Product Outline. 

https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/product/initiative-brief-template.md

Create initiative brief to cover what the team plans to build for the 12 weeks
Review initiative brief with CRM team to identify dependencies, gather feedback, and confirm priorities.
The work shall be documented in the following ways: 
- In the intiative brief, provide a description in plain language of the change being made.
- if possible include designs.



Include tentative release date(s) in the brief - ideally 2-3 smaller releases

Ideally, collaboration cycle kickoff  and PO sync should occur prior to development starting, in case OCTO rejects some items. The Product outline also needs to be updated with a link to the initiative brief.

### Development

Once confirmed, features in the initiative brief are broken down into epics that are plotted on a roadmap. 
- **Theme based Roadmapping per sprint** (each sprint shall have defined goals to monitor the progress of a new implementation of a feature or epic.)

Ask VA VA.Gov operates in 2 weeks sprints, opening sprint on Tuesdays and closing sprint out 13 days later on Monday. 


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

Do we want to version releases somehow?
Helps with tracking. Can use labels and/or milestones to link epics and issues to releases.
Github also has a release management feature that could be used.

Collaboration Cycle
After the kickoff request and PO sync, the required touchpoints are:
- Architecture Intent
- PRISS/Security Review
- Staging Review 
Additional touchpoints may be recommended by the Governance team after reviewing the kickoff request. However, given the smaller scope of an initiative, less effort should be 

### Open Questions

| Question                                                                                                                                                  | Answere                                                                                                                                                                                                                                                                      |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| How do we handle freezing in shared environments with CRM and Pats R?                                                                                     | AVA CRM/PATSR separation: Ask VA ATO needs to get granted. Submitting in Feb 2025. 90 day timeline to get approved, if there are no changes. Around when portal launches. Once approved and completed all work for separation, shared environment freezes won't be issue<br> |
| How do we define what is our future joint testing between the Ask VA VA.gov + CRM APIs (ex . testing for rules, update to payload, contract testing etc.) |                                                                                                                                                                                                                                                                              |
| Can the architecture intent and other touchpoints cover all releases in an initiative or must they must be done for every release?                        |                                                                                                                                                                                                                                                                              |
