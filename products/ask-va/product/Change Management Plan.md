**Ask VA Change Management Plan**

**Scope:** To define the ongoing ways of working collaborating between Ask.VA.Gov and CRM.

**Release Cadence**

**For Context**: AskVA.Gov operates in 2 weeks sprints, opening sprint on Tuesdays and closing sprint out 13 days later on Monday. 

Post Launch (April ‘25) the Ask.VA.Gov team will be moving forward with a monthly release cadence. _This will be facilitated through the following activities:_
- **Theme based Roadmapping per sprint** (each sprint shall have defined goals to monitor the progress of a new implementation of a feature or epic.)
- **Feature Flags and Toggles:** through leveraging feature flags and toggles the team will be able to clearly define the stream of work coming through the Continuous Integration and Deployment pipeline (this will prevent us from promoting potentially unready work up the environments to production.)  
  - 	An example of this used by the team has been how the Dashboard Research pilot was made separate from the continuation of development. 

**Documentation + Requirements for Release**
For each launch the product team (owner and manager) will assess the potential impact of releasing a new feature or epic to Ask.Va.Gov and update the Product Outline. 
For smaller intiatives the team may leverage a combination of this change management plan and the Initiative Brief Template to act as release notes.  
**Action:** Update the Product outline for major release (by the product owner)

The work shall be documented in the following ways: 
- Each feature shall be documented in Github Projects 
- In the intiative brief, provide a description in plain language of the change being made.
- if possible include designs.
- if there are additional testing needs outside of what is defined in this document, update the Intiative Brief Template.

**How Feature Requests shall be Created by Business Lines & Acceptance Criteria**

Goals:
- Ensure that new features are meeting the needs of the business line

Process: 
The requestor should email *shared email inbox* . The request , with the following details, shall be reviewed in CRM Sync:
- A description of the potential feature or request
- provide business justification : what is the value or impact of pursuing this change
- provide acceptance criteria this may include:
    - impact to rules or logic
    - creation of a new topic
    - denoting the page expected to be impacted
    - steps to execute a manual test
 - the requestor should also identify a tester on their behalf to confirm that the business value is being provided and the experience is being executed as expected


**Testing:**
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

**Questions for us to continue discussing:**
- How do we handle freezing in shared environments with CRM and Pats R
    -- currently we test in staging while CRM is executing their testing, for our joint testing CRM will freeze at the same time prior to launch (this is established in our test plan)
- How do we define what is our future joint testing between the Ask.Va.Gov + CRM APIs (ex . testing for rules, update to payload, contract testing etc)
- Plan to graduate environments.
