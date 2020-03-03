# Vets.gov Product Management Checklist

This is a set of actions for product teams to complete both prior to the launch and immediately following launch of a vets.gov product. The goals of the checklist are to 1) ensure product planning and delivery is consistent across products, 2) prevent common issues with what appears to be a production-ready service, and 3) achieve a repeatable process that is improved with lessons learned on an ongoing basis.

This checklist is a living document that is meant to be a set of *minimum* actions to take. Each product team should add additional items as necessary. If any items added are cross-cutting issues, they should be added to this checklist to encourage shared, iterative learning as vets.gov progresses.

The team lead is accountable for ensuring that all tasks are completed on-time and communicating progress / identifying blockers to the Product Manager (Stacey) and team in a timely way. The team lead is responsible for escalation and issue resolution for risks and blockers on these items.  Not all tasks will be completed by vets.gov team members directly--many tasks will be completed by VA stakeholders or team members--but the vets.gov team lead is responsible for confirming that it has happened.

This checklist can go into the `vets.gov-planning` Issues/card for the project and be updated there.

## Project Definition

- [X] Identify VA Business Owner (final decision-making), decision makers, and VA stakeholders
- N/A Document, at a high-level, the state of the VA system(s) at a high level
- [X] Document the expected scope of the project, to be explored for feasibility during discovery
  - [X] Determine if the goal is to recreate what existing functionality but integrated with the vets.gov platform and branding
  - [X] Determine if the goal is to enhance the Veteran experience in some tangible way
  - [X] Decide what current or proposed features, processes or forms are in or out of scope
  - N/A Understand root cause of problem
  - [X] Define outcomes of the project (metrics of success)

## Discovery

- [X] Hold discovery kick-off meeting with stakeholders (explaining what discovery is and what support is needed)
- N/A Get access to the system (and test access to verify it works)
  - [X] Get at minimum read-only access for engineers to relevant production systems
  - [X] Get test accounts for systems
- N/A Discover existing end-to-end business processes
  - [X] Identify all existing IT systems and data sources to successfully complete any user actions initiated on vets.gov
  - [X] Document any data standards (e.g., all upper case inputs) for those systems
  - [x] Identify VA stakeholder groups involved in the end-to-end process
  - [~] Inventory content for rewrite; plan for sunsetting old content
  - [X] Identify any VA policies / legal regulations that are required
  - [X] Physically go through the process or follow someone going through the process to see it first hand
- N/A Identify Information in Support of vets.gov ATO
  - N/A Identify existing system classification: FISMA Low, Moderate, High
  - [X] Identify existing system connections required by vets.gov
  - N/A Identify existing system data elements and actions to be performed by vets.gov (e.g. pulled, pushed, stored)
  - N/A Identify existing system POC for all things ATO-related (usually ISO)
- [~] Define change management plan for existing VA systems with VA stakeholders
  - [~] Create a migration and sunset strategy and timeline for both content and systems (redirects)
  - [X] Identify potential downstream backend systems risks and issues as a result of increased usage on vets.gov
  - [X] Communicate downstream risks and potential issues to business owner; update charter as needed to include this information
  - [X] Ensure business owners understand launch implications and are staffed adequately to handle traffic, process changes as a result of our work, and/or and technical back-end issues on VA systems
  - [X] Ensure that business owners communicate to their staff about the changes that will be taking place
  - N/A If applicable, ensure training on new process occurs
- [X] Design system architecture including all backend, external, or legacy dependencies
  - [X] Get test accounts / access to environments
  - [X] Identify all endpoints / systems
- N/A Complete the user research plan
  - N/A Review existing research to determine how much additional research is required.
  - N/A Conduct and document research
  - N/A Synthesize findings; share with vets.gov team and VA stakeholders
- [X] Define any project-level operations and maintenance plan
  - [X] Define and communicate post-launch support and enhancement processes with VA stakeholders
  - [X] Set expectations with stakeholders on enhancement requests
  - [X] Understand back end systems downtime and maintenance windows (this will impact Veteran access)
- [X] Create analytics scorecard
  - [X] Baseline as-is Google analytics and other relevant metrics for at least 3 KPIs
  - [X] Define 3 key performance indicators (KPIs) for product to measure success
  - [ ] Review / validate KPIs and metrics with vets.gov Product Owner (Stacey)
  - [X] Determine what information is needed from legacy VA systems (e.g., counts of transactions, success rates) and how to obtain it
  - [X] Review and update baseline page traffic metrics (e.g., page views, bounce rate in Google Analytics)
  - [X] Document any user actions requiring specific metric tracking (e.g., triggers, tags, or custom variables in Google Analytics)
- [X] Draft project charter
  - [X] Communicate guiding decisions to stakeholders (what they should expect)
- [X] Review charter with business owner and get signatures


## Kick-off

- [X] Define sprint team meeting schedule
- [X] Send signed charter to stakeholders, including Sheila Guitteriez (Contact Center POC) and Kelly O. for PM purposes
- [X] Identify VA stakeholder reviewers and SMEs to provide input and reviews of prototypes
  - [X] Identify the decision-makers (business owners, key VA SMEs) on prototype decisions
  - [X] Plan for smaller, individual reviews where possible based on lessons learned
  - [X] Develop agenda and defined parameters for prototype reviews; recommended to not review entire prototype with large group remotely; lesson learned
  - [X] Plan logistics and outputs for prototype reviews
  - [X] Identify stakeholder required to participate in end-to-end testing; set expectations for time commitment and role
- [X] Hold a kick-off meeting to assemble entire team including VA stakeholders
  - [X] Review project goals, timeline, roles and definitions and adjust as needed
  - [X] Set expectations about time commitments required (e.g., for end-to-end testing, etc.)

## Alpha: Design, Prototype, and Plan

- [X] Design alpha and beta prototypes based on requirements, stakeholder feedback, and Veteran research
  - [X] Ensure that visual design is in line with vets.gov design standards and policies
  - [X] Review all existing documentation on work completed to date, requirements gathered, other discovery documentation from stakeholders

- [X] Design Continuous Integration/Continuous Deployment (CI/CD) processes
  - [X] Create staging environment
  - [X] Obtain DevOps approval of CI/CD process
- [X] Document product testing plan
  - [X] Document performance testing methodology
- [~] Document scaling plan to handle traffic growth
- [~] Create and implement log management plan
  - [~] Define log collection and analysis architecture
  - [~] Test log collection and analysis architecture
  - [~] Define production versus debugging logging standards
  - [~] Document method to enable debugging log level on production system
  - [~] Test enabling different logging levels
  - [~] Verify correct log messages produced at different logging levels
- [~] Determine if any changes or additions are needed for the terms and conditions or privacy policy
- [~] Demos to necessary stakeholders (can include users, VSOs, Congress, and unions, etc.)

## Beta: Iterate and Build

- [X] All code changes have been peer reviewed by developers (each review conducted by _not_ the author that contributed the specific change)
- [ ] Test code
  - [X] Document tests that get run (as if being run manually, even if test is to be automated)
  - [X] Document 508 compliance and planned remediation steps
  - [X] Document browser/device compatibility testing and planned remediation steps
  - [X] Automate functional tests (unit/integration), as defined in testing plan
  - [X] Verify code coverage of test suite meets target defined in testing plan
  - [X] All unit, integration, and performance tests pass
  - [X] 508 compliance scans show no significant accessibility failures
- [X] Meet system security requirements
  - [X] Deliver all network traffic over TLS
  - [X] Verify authentication and authorization services appropriately restrict data access
  - [X] Meet data storage privacy requirements
  - [ ] Conduct security scan (Bill Ryan)
- [X] Implement analytics plan (e.g., integrate Google Analytics)
- N/A Complete usability testing
- [ ] Conduct scaling plan dry-run
- [ ] Complete front-end performance testing, per product testing plan
- [X] Complete front-end functional testing suite, per product testing plan

## Pre-Flight

- [ ] Create launch roll-out plan specific to this product and stakeholders
  - [ ] Ensure no known issues/bugs are blockers for deployment
  - [X] Document remediation strategy for any known issues
  - [X] Determine any URL redirects, search term best bets, content links, etc. needed to begin driving traffic
  - [X] Identify all user feedback channels for product
  - [X] Start end-to-end functional testing at least 4 weeks prior to launch; must include VA stakeholders
  - [X] Document processes for handling and prioritizing user feedback from all known channels
  - [X] Ensure VA Business owner product team acceptance of pre-launch product including any known issues
  - [X] Coordinate with Sheila Guiterriez (our vets.gov Contact Center POC) to prepare VA contact centers for launch and provide scripts as needed
  - [ ] Develop a communication plan for announcing the launch internally and externally; coordinate with Martin Taylor (Sec Office) via Kelly
  - [X] Include in communications plan pre-briefing (video is preferred) for Veteran Service Organizaitons (VSO) and Congress and coordinate with Kelly
  - [ ] Develop content to inform users of any scheduled maintenance windows or anticipated downtime of back end system
- [X] Open source all code
- [X] Servers are monitored, especially to detect service outages
  - [X] Define automated alerts for different error conditions
  - [X] Test alerts are sent and delivered when error conditions are met
  - [X] Define on-call rotations
- [X] Complete end-to-end testing
  - [X] Tested with screen reader software for accessibility
  - [X] Develop test plan (e.g., scripts, logistics, etc.)
  - [X] Schedule testing at least 3 weeks prior to launch
  - [X] Ensure vets.gov team has access to all systems prior to testing
  - [X] Designate a lead coordinator to manage testing and track all items to resolution (may be different from team lead); one vets.gov person is accountable for ensuring this task is done completely and successfully prior to launch
- [ ] Create post-launch coordination plan
  - [ ] Schedule daily/weekly calls with vets.gov and VA team members and stakeholders for a month following launch to ensure no vets.gov technical issues
  - [X] Document POCs for technical and business issues with VA legacy systems and processes
  - [ ] Estimate post-launch support needs and timeline for content/design/engineering/DevOps support
- [ ] Team Lead and Product Lead (Stacey) confirms all checklist items are complete.
- [ ] Launch

## Post-Launch

- [ ] Ensure monitoring and resolve issues in 24 hours
- [ ] Collect and report metrics and Google Analytics
- [ ] Coordinate with Contact Center to monitor calls
