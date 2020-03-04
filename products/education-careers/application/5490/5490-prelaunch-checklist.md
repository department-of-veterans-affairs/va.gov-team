# Vets.gov Product Management Checklist - Form 22-5490

This is a set of actions for product teams to complete both prior to the launch and immediately following launch of a vets.gov product. The goals of the checklist are to 1) ensure product planning and delivery is consistent across products, 2) prevent common issues with what appears to be a production-ready service, and 3) achieve a repeatable process that is improved with lessons learned on an ongoing basis.

This checklist is a living document that is meant to be a set of *minimum* actions to take. Each product team should add additional items as necessary. If any items added are cross-cutting issues, they should be added to this checklist to encourage shared, iterative learning as vets.gov progresses.

The team lead is accountable for ensuring that all tasks are completed on-time and communicating progress / identifying blockers to the Product Manager (Stacey) and team in a timely way. The team lead is responsible for escalation and issue resolution for risks and blockers on these items.  Not all tasks will be completed by vets.gov team members directly--many tasks will be completed by VA stakeholders or team members--but the vets.gov team lead is responsible for confirming that it has happened.

This checklist can go into the `vets.gov-planning` Issues/card for the project and be updated there.

## Project Definition

- [x] Identify VA Business Owner (final decision-making), decision makers, and VA stakeholders
- [x] Document, at a high-level, the state of the VA system(s) at a high level
- [x] Document the expected scope of the project, to be explored for feasibility during discovery
  - [x] Determine if the goal is to recreate what existing functionality but integrated with the vets.gov platform and branding
  - [x] Determine if the goal is to enhance the Veteran experience in some tangible way
  - [x] Decide what current or proposed features, processes or forms are in or out of scope
  - [x] Understand root cause of problem
  - [x] Define outcomes of the project (metrics of success)

## Discovery

- [x] Hold discovery kick-off meeting with stakeholders (explaining what discovery is and what support is needed)
- [x] Get access to the system (and test access to verify it works) - DENIED 
  - [x] Get at minimum read-only access for engineers to relevant production systems
  - [x] Get test accounts for systems
- [x] Discover existing end-to-end business processes
  - [x] Identify all existing IT systems and data sources to successfully complete any user actions initiated on vets.gov
  - [x] Document any data standards (e.g., all upper case inputs) for those systems
  - [x] Identify VA stakeholder groups involved in the end-to-end process
  - [x] Inventory content for rewrite; plan for sunsetting old content
  - [x] Identify any VA policies / legal regulations that are required 
  - [x] Physically go through the process or follow someone going through the process to see it first hand 
- [x] Identify Information in Support of vets.gov ATO - Josh/Ian
  - [x] Identify existing system classification: FISMA Low, Moderate, High
  - [x] Identify existing system connections required by vets.gov
  - [x] Identify existing system data elements and actions to be performed by vets.gov (e.g. pulled, pushed, stored)
  - [x] Identify existing system POC for all things ATO-related (usually ISO)
- [X] Define change management plan for existing VA systems with VA stakeholders - Josh/Anne
  - [X] Create a migration and sunset strategy and timeline for both content and systems (redirects)
  - [x] Identify potential downstream backend systems risks and issues as a result of increased usage on vets.gov
  - [x] Communicate downstream risks and potential issues to business owner; update charter as needed to include this information
  - [x] Ensure business owners understand launch implications and are staffed adequately to handle traffic, process changes as a result of our work, and/or and technical back-end issues on VA systems
  - [X] Ensure that business owners communicate to their staff about the changes that will be taking place
  - [x] If applicable, ensure training on new process occurs
- [x] Design system architecture including all backend, external, or legacy dependencies
  - [x] Get test accounts / access to environments - denied
  - [x] Identify all endpoints / systems
- [X] Complete the user research plan - plan for usability testing of prototype (Alex)
  - [x] Review existing research to determine how much additional research is required.
  - [x] Conduct and document research
  - [X] Synthesize findings; share with vets.gov team and VA stakeholders
- [X] Define any project-level operations and maintenance plan - Josh
  - [X] Define and communicate post-launch support and enhancement processes with VA stakeholders
  - [-] Set expectations with stakeholders on enhancement requests
  - [X] Understand back end systems downtime and maintenance windows (this will impact Veteran access)
- [ ] Create analytics scorecard (Ian)
  - [ ] Baseline as-is Google analytics and other relevant metrics for at least 3 KPIs
  - [ ] Define 3 key performance indicators (KPIs) for product to measure success
  - [ ] Review / validate KPIs and metrics with vets.gov Product Owner (Stacey)
  - [ ] Determine what information is needed from legacy VA systems (e.g., counts of transactions, success rates) and how to obtain it
  - [ ] Review and update baseline page traffic metrics (e.g., page views, bounce rate in Google Analytics)
  - [ ] Document any user actions requiring specific metric tracking (e.g., triggers, tags, or custom variables in Google Analytics)
- [x] Draft project charter
  - [x] Communicate guiding decisions to stakeholders (what they should expect)
- [x] Review charter with business owner and get signatures


## Kick-off

- [x] Define sprint team meeting schedule
- [X] Send signed charter to stakeholders, including Sheila Guitteriez (Contact Center POC) and Kelly O. for PM purposes
- [x] Identify VA stakeholder reviewers and SMEs to provide input and reviews of prototypes
  - [x] Identify the decision-makers (business owners, key VA SMEs) on prototype decisions
  - [x] Plan for smaller, individual reviews where possible based on lessons learned
  - [x] Develop agenda and defined parameters for prototype reviews; recommended to not review entire prototype with large group remotely; lesson learned
  - [x] Plan logistics and outputs for prototype reviews - is this reporting, action items?
  - [x] Identify stakeholder required to participate in end-to-end testing; set expectations for time commitment and role
- [x] Hold a kick-off meeting to assemble entire team including VA stakeholders
  - [x] Review project goals, timeline, roles and definitions and adjust as needed
  - [x] Set expectations about time commitments required (e.g., for end-to-end testing, etc.)

## Alpha: Design, Prototype, and Plan

- [x] Design alpha and beta prototypes based on requirements, stakeholder feedback, and Veteran research
  - [x] Ensure that visual design is in line with vets.gov design standards and policies
  - [x] Review all existing documentation on work completed to date, requirements gathered, other discovery documentation from stakeholders

- [x] Create a disaster recovery plan in case of system failure
  - [x] Schedule data backups
  - [x] Define and test data restoration procedures
- [x] Design Continuous Integration/Continuous Deployment (CI/CD) processes
  - [x] Create staging environment
  - [x] Obtain DevOps approval of CI/CD process
- [X] Document product testing plan - with field, stakeholders
  - [-] Document performance testing methodology - DevOps
- [x] Document scaling plan to handle traffic growth
- [x] Create and implement log management plan (all Vets.gov-wide things, not specific to this form)
  - [x] Define log collection and analysis architecture
  - [x] Test log collection and analysis architecture
  - [x] Define production versus debugging logging standards
  - [x] Document method to enable debugging log level on production system
  - [x] Test enabling different logging levels
  - [x] Verify correct log messages produced at different logging levels
- [x] Determine if any changes or additions are needed for the terms and conditions or privacy policy
- [x] Demos to necessary stakeholders (can include users, VSOs, Congress, and unions, etc.)

## Beta: Iterate and Build

- [x] All code changes have been peer reviewed by developers (each review conducted by _not_ the author that contributed the specific change)
- [ ] Test code - Anne
  - [ ] Document tests that get run (as if being run manually, even if test is to be automated)
  - [ ] Document 508 compliance and planned remediation steps
  - [ ] Document browser/device compatibility testing and planned remediation steps
  - [x] Automate functional tests (unit/integration), as defined in testing plan
  - [x] Verify code coverage of test suite meets target defined in testing plan
  - [x] All unit, integration, and performance tests pass
  - [ ] 508 compliance scans show no significant accessibility failures
- [x] Meet system security requirements
  - [x] Deliver all network traffic over TLS
  - [x] Verify authentication and authorization services appropriately restrict data access
  - [x] Meet data storage privacy requirements
  - [x] Conduct security scan
- [ ] Implement analytics plan (e.g., integrate Google Analytics)
- [x] Complete usability testing
- [x] Conduct scaling plan dry-run
- [x] Complete front-end performance testing, per product testing plan
- [x] Complete front-end functional testing suite, per product testing plan

## Pre-Flight

- [x] Create launch roll-out plan specific to this product and stakeholders
  - [x] Ensure no known issues/bugs are blockers for deployment
  - [x] Document remediation strategy for any known issues
  - [x] Determine any URL redirects, search term best bets, content links, etc. needed to begin driving traffic
  - [x] Identify all user feedback channels for product
  - [x] Start functional testing at least 4 weeks prior to launch; must include VA stakeholders
  - [x] Document processes for handling and prioritizing user feedback from all known channels (same process as 1990)
  - [x] Ensure VA Business owner product team acceptance of pre-launch product including any known issues
  - [X] Coordinate with Sheila Guiterriez (our vets.gov Contact Center POC) to prepare VA contact centers for launch and provide scripts as needed - Josh/Ian
  - [X] Develop a communication plan for announcing the launch internally and externally; coordinate with Martin Taylor (Sec Office) via Kelly - Josh/Ian
  - [-] Include in communications plan pre-briefing (video is preferred) for Veteran Service Organizaitons (VSO) and Congress and coordinate with Kelly (kelly can help w/ video); VSOs and Congress must be briefed at least 2 weeks prior to launch.
  - [X] Develop content to inform users of any scheduled maintenance windows or anticipated downtime of back end system
- [x] Open source all code
- [x] Servers are monitored, especially to detect service outages
  - [x] Define automated alerts for different error conditions
  - [x] Test alerts are sent and delivered when error conditions are met
  - [x] Define on-call rotations
- [ ] Complete end-to-end testing
  - [ ] Tested with screen reader software for accessibility
  - [x] Develop test plan (e.g., scripts, logistics, etc.)
  - [x] Schedule testing at least 3 weeks prior to launch
  - [x] Have participants co-located if possible
  - [x] Ensure vets.gov team has access to all systems prior to testing - we have been denied access
  - [x] Designate a lead coordinator to manage testing and track all items to resolution (may be different from team lead); one vets.gov person is accountable for ensuring this task is done completely and successfully prior to launch
- [X] Create post-launch coordination plan
  - [X] Schedule daily/weekly calls with vets.gov and VA team members and stakeholders for a month following launch toensure no vets.gov technical issues
  - [x] Document POCs for technical and business issues with VA legacy systems and processes
  - [x] Estimate post-launch support needs and timeline for content/design/engineering/DevOps support
- [ ] Team Lead and Product Lead (Stacey) confirms all checklist items are complete.
- [X] Launch

## Post-Launch

- [ ] Ensure monitoring and resolve issues in 24 hours
- [ ] Collect and report metrics and Google Analytics
- [ ] Coordinate with Contact Center to monitor calls

4-10-17:  Launching 5490 today. 3 Business Days later than anticipated. Only big outstanding items are Analytics. Testing is being done again today. 
