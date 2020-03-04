# Vets.gov Product Management Checklist

This is a set of actions for product teams to complete both prior to the launch and immediately following launch of a vets.gov product. The goals of the checklist are to 1) ensure product planning and delivery is consistent across products, 2) prevent common issues with what appears to be a production-ready service, and 3) achieve a repeatable process that is improved with lessons learned on an ongoing basis.

This checklist is a living document that is meant to be a set of *minimum* actions to take. Each product team should add additional items as necessary. If any items added are cross-cutting issues, they should be added to this checklist to encourage shared, iterative learning as vets.gov progresses.

Sections are organized chronologically, following the VA DS product life cycle methodology. The team lead is accountable for ensuring that all tasks are completed on-time and communicating progress / identifying blockers to the Product Manager (Stacey) and team in a timely way. The team lead is responsible for escalation and issue resolution for risks and blockers on these items.  Not all tasks will be completed by vets.gov team members directly--many tasks will be completed by VA stakeholders or team members--but the vets.gov team lead is responsible for confirming that it has happened.

## Project Definition

- [x] Identify VA Business Owner (final decision-making), decision makers, and VA stakeholders

Theresa Hancock from MHV is final decision maker, although Tom Emmendorfor from Pharmacy is important as well. 

- [ ] Understand current state of the VA system(s) providing the functionality

- [ ] Define the expected scope of the project
    - [ ] Determine if the goal is to recreate what existing functionality but integrated with the vets.gov platform and branding
    - [ ] Determine if the goal is to enhance the Veteran experience in some tangible way
    - [ ] Decide what current or proposed features, processes or forms are in or out of scope
    - [ ] Understand root cause of problem
    - [ ] Define outcomes of the project (metrics of success)

- [ ] Get access to the system
    - [ ] Get at minimum read-only access for engineers to relevant production systems
    - [ ] Get test accounts for systems

- [ ] Draft project charter
    - [ ] Communicate guiding decisions to stakeholders (what they should expect)

- [ ] Review charter with business owner and get signatures

## Kick-off

- [ ] Define sprint team meeting schedule

- [ ] Send signed charter to stakeholders, including Sheila Guitteriez (Contact Center POC) and Kelly O. for PM purposes

- [ ] Hold a kick-off meeting to assemble entire team including VA stakeholders
    - [ ] Review project goals, timeline, roles and definitions and adjust as needed
    - [ ] Set expectations about time commitments required (e.g., for end-to-end testing, etc.)

## Discovery

- [ ] Document existing end-to-end business processes
    - [ ] Identify all existing IT systems and data sources to successfully complete any user actions initiated on vets.gov
    - [ ] Document any data standards (e.g., all upper case inputs) for those systems
    - [ ] Identify VA stakeholder groups involved in the end-to-end process
    - [ ] Inventory content for rewrite; plan for sunsetting old content
    - [ ] Identify any VA policies / legal regulations that are required
    - [ ] Physically go through the process or follow someone going through the process to see it first hand

- [ ] Anticipating demos to stakeholders such as VSOs, Congress, and unions

- [ ] Understand and document ATO process

- [ ] Define change management plan for existing VA systems with VA stakeholders
    - [ ] Create a migration and sunset strategy and timeline for both content and sytsems (redirects)
    - [ ] Identify potential downstream backend systems risks and issues as a result of increased usage on vets.gov
    - [ ] Communicate downstream risks and potential issues to business owner; update charter as needed to include this information
    - [ ] Ensure business owners understand launch implications and are staffed adequately to handle traffic, process changes as a result of our work, and/or and technical back-end issues on VA systems
    - [ ] Ensure that business owners communicate to their staff about the changes that will be taking place
    - [ ] If applicable, ensure training on new process occurs

- [ ] Design system architecture including all backend, external, or legacy dependencies
    - [ ] Get test accounts / access to environments
    - [ ] Identify all endpoints / systems

- [ ] Complete the user research plan
    - [ ] Review existing research to determine how much additional research is required.
    - [ ] Conduct and document research
    - [ ] Synthesize findings; share with vets.gov team and VA stakeholders

- [ ] Define any project-level operations and maintenance plan
    - [ ] Define and communicate post-launch support and enhancement processes with VA stakeholders
    - [ ] Set expectations with stakeholders on enhancement requests

- [ ] Create analytics scorecard
    - [ ] Baseline as-is Google analytics and other relevant metrics for at least 3 KPIs
    - [ ] Define 3 key performance indicators (KPIs) for product to measure success
    - [ ] Review / validate KPIs and metrics with vets.gov Product Owner (Stacey)
    - [ ] Determine what information is needed from legacy VA systems (e.g., counts of transactions, success rates) and how to obtain it
    - [ ] Review and update baseline page traffic metrics (e.g., page views, bounce rate in Google Analytics)
    - [ ] Document any user actions requiring specific metric tracking (e.g., triggers, tags, or custom variables in Google Analytics)


## Alpha: Design, Prototype, and Plan

- [ ] Identify VA stakeholder reviewers and SMEs to provide input and reviews of prototypes
    - [ ] Identify the decision-makeers (business owners, key VA SMEs) on prototype decisions
    - [ ] Plan for smaller, individual reviews where possible based on lessons learned
    - [ ] Develop agenda and defined parameters for prototype reviews; recommended to not review entire prototype with large group remotely; lesson learned
    - [ ] Plan logistics and outputs for prototype reviews 
    - [ ] Identify stakeholder required to participate in end-to-end testing; set expecations for time commitment and role
    
- [ ] Design alpha and beta prototypes based on requirements, stakehoder feedback, and Veteran research
    - [ ] Ensure that visual design is in line with vets.gov design standards and policies
    - [ ] Review all existing documentation on work completed to date, requirements gathered, other discovery documentation from stakeholders

- [ ] Document 508 compliance and planned remediation steps

- [ ] Document browser/device compatibility testing and planned remediation steps

- [ ] Create a disaster recovery plan in case of system failure
    - [ ] Schedule data backups
    - [ ] Define and test data restoration procedures

- [ ] Design Continuous Integration/Continuous Deployment (CI/CD) processes
    - [ ] Create staging environment
    - [ ] Obtain DevOps approval of CI/CD process

- [ ] Document product testing plan
    - [ ] Document performance testing methodology

- [ ] Document scaling plan to handle traffic growth

- [ ] Create and implement log management plan
    - [ ] Define log collection and analysis architecture
    - [ ] Test log collection and analysis architecture
    - [ ] Define production versus debugging logging standards
    - [ ] Document method to enable debugging log level on production system
    - [ ] Test enabling different logging levels
    - [ ] Verify correct log messages produced at different logging levels

- [ ] Determine if any changes or additions are needed for the terms and conditions or privacy policy

## Beta: Iterate and Build

- [ ] Peer review all code by at least one engineer who didn't write it

- [ ] Test code
    - [ ] Automate functionality tests (unit/integration), as defined in testing plan
    - [ ] Verify code coverage of test suite meets target defined in testing plan
    - [ ] All unit, integration, and performance tests pass

- [ ] Meet system security requirements
    - [ ] Deliver all network traffic over TLS
    - [ ] Verify authentication and authorization services appropriately restrict data access
    - [ ] Meet data storage privacy requirements
    - [ ] Conduct security scan

- [ ] Implement analytics plan (e.g., integrate Google Analytics)

- [ ] Complete usability testing

- [ ] Conduct scaling plan dry-run

- [ ] Complete front-end performance testing, per product testing plan

- [ ] Complete front-end functional testing suite, per product testing plan

## Pre-Flight

- [ ] Create launch roll-out plan specific to this product and stakeholders
    - [ ] Ensure no known issues/bugs are blockers for deployment
    - [ ] Document remediation strategy for any known issues
    - [ ] Determine any URL redirects, search term best bets, content links, etc. needed to begin driving traffic
    - [ ] Identify all user feedback channels for product
    - [ ] Start end-to-end functional testing at least 4 weeks prior to launch; must include VA stakeholders
    - [ ] Document processes for handling and prioritizing user feedback from all known channels
    - [ ] Ensure VA Business owner product team acceptance of pre-launch product including any known issues
    - [ ] Coordinate with Sheila Guiterriez (our vets.gov Contact Center POC) to prepare VA contact centers for launch and provide scripts as needed
    - [ ] Develop a communication plan for announcing the launch internally and externally; coordinate with Martin Taylor (Sec Office) via Kelly

- [ ] Open source all code

- [ ] Post all code on publicly available GitHub repository

- [ ] Ensure adherence to vets.gov design standards and 508 compliance

- [ ] Servers are monitored, especially to detect service outages
    - [ ] Define automated alerts for different error conditions
    - [ ] Test alerts are sent and delivered when error conditions are met
    
- [ ] Complete end-to-end testing
    - [ ] Develop test plan (e.g., scripts, logistics, etc.)
    - [ ] Schedule testing at least 3 weeks prior to launch
    - [ ] Have participants co-located if possible
    - [ ] Ensure vets.gov team has access to all systems prior to testing
    - [ ] Designate a lead coordinator to manage testing and track all items to resolution (may be different from team lead); one vets.gov person is accountable for ensuring this task is done completely and successfully prior to launch

- [ ] Create post-launch coordination plan
    - [ ] Schedule daily/weekly calls with vets.gov and VA team members and stakeholders for a month following launch to ensure no vets.gov technical issues
    - [ ] Document POCs for technical and business issues with VA legacy systems and processes
    - [ ] Estimate post-launch support needs and timeline for content/design/engineering/DevOps support
    
- [ ] Team Lead and Product Lead (Stacey) confirms all checklist items are complete.
- [ ] Launch

## Post-Launch
    - [ ] Ensure monitoring and resolve issues in 24 hours
    - [ ] Collect and report metrics and Google Analytics
    - [ ] Coordinate with Contact Center to monitor calls 
    
