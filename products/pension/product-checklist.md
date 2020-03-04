### Pension & Burial Product Checklist

## Product Definition

- [X] Identify VA Business Owner (final decision-making), decision makers, and VA stakeholders
- [X] Understand current state of the VA system(s) providing the functionality
- [X] Define the expected scope of the project
    - [X] Decide what current or proposed features, processes or forms are in or out of scope
    - [X] Understand root cause of problem
    - [ ] Define outcomes of the project (metrics of success)

- [X] Draft project charter (pre-communications with stakeholders)
    - [X] Communicate guiding decisions to stakeholders 

- [X] Review charter with business owner
- [X] Review/Edit Charter and get signatures

- [X] Define Discovery lead to run kickoff

### Writing User Stories
- [X] Write out high level user stories for what is expected of this feature/product

## Kickoff

- [X] Define sprint team meeting schedule with group
- [X] Hold a kick-off meeting to assemble entire team including VA stakeholders
    - [X] Review project goals, timeline, roles and definitions and adjust as needed
    - [X] Set expectations about time commitments and schedule
    - [X] Request daily contact SME and escalation path for questions/decisions
    
- [X] Identify VA stakeholder reviewers and SMEs to provide input and reviews of prototypes
    - [X] Identify the decision-makers (business owners, key VA SMEs) on prototype decisions

## Discovery

- [X] Document existing end-to-end business processes
    - [X] Identify all existing IT systems and data sources to successfully complete any user actions initiated on vets.gov
    - [X] Document any data standards (e.g., all upper case inputs) for those systems
    - [X] Identify VA stakeholder groups involved in the end-to-end process
    - [X] Identify any VA policies / legal regulations that may need to be discussed

- [X] Identify Information in Support of vets.gov ATO 
    - [X] Identify existing system connections required by Vets.gov
    - [X] Identify existing system data elements and actions to be performed by vets.gov (e.g. pulled, pushed, stored)
    - [X] Identify existing system POC for all things ATO-related 

- [X] Define change management plan for existing VA systems with VA stakeholders
    - [X] Create a migration and sunset strategy and timeline for both content and systems (redirects)
    - [X] Identify potential downstream backend systems risks and issues as a result of increased usage on Vets.gov
    - [X] Communicate downstream risks and potential issues to business owner
    - [X] Ensure business owners understand launch implications and are staffed adequately to handle traffic, process changes as a result of our work, and/or and technical back-end issues on VA systems
    - [X] Ensure that business owners communicate to their staff about the changes that will be taking place

### Discovery Research (Asking the right questions)
- [X] Complete the user research plan
    - [X] Review existing research to determine how much additional research is required.
    - [X] Conduct and document research
    - [X] Synthesize findings; share with Vets.gov team and VA stakeholders

### Operations and Maintenance Plan (Setting up support)
- [ ] Define any product-level operations and maintenance plan
    - [ ] Define and communicate post-launch support and enhancement processes with VA stakeholders
    - [ ] Set expectations with stakeholders on enhancement requests
    - [X] Understand back end systems downtime and maintenance windows (SFTP and manual transfer pdfs to other system) (this will impact Veteran access)

### Analytics Plan (What are we measuring?)
- [ ] Create analytics scorecard
    - [ ] Define 3 key performance indicators (KPIs) for product to measure success
    - [ ] Review / validate KPIs and metrics with Vets.gov Leads and Product
    - [ ] Determine what information is needed from legacy VA systems (e.g., counts of transactions, success rates)
    - [ ] Review and update baseline page traffic metrics (e.g., page views, bounce rate in Google Analytics)
    - [ ] Document any user actions requiring specific metric tracking (e.g., triggers, tags, or custom variables in Google Analytics)
    - [ ] Determine events and what needs to be tracked in new design
    
## Design, Prototype, Iterate (What are we building / Solutioning)

- [X] Design prototypes based on requirements, stakeholder information, and Veteran research
    - [X] Ensure that visual design is in line with Vets.gov design standards and policies
    - [X] Review all existing documentation on work completed to date, requirements gathered, other discovery documentation

- [X] Feedback sessions as appropriate to review prototype with stakeholders
    - [X] Prioritize feedback to be completed
    
- [X] Complete usability testing

- [X] Develop content to inform users of any scheduled maintenance windows or anticipated downtime of back end system 
- [X] Ensure adherence to vets.gov design standards and 508 compliance

## Communications 
- [ ] Develop a communication plan for announcing the launch internally and externally; coordinate with Martin Taylor (Sec Office)
- [X] Coordinate (ASAP) with our Vets.gov Contact Center POC to prepare VA contact centers for launch. Provide scripts and demos as needed.

## Engineering Section

- [X] Peer review all code by at least one engineer who didn't write it
- [X] Test code
    - [X] Automate functionality tests (unit/integration), as defined in testing plan
    - [X] Verify code coverage of test suite meets target defined in testing plan
    - [X] All unit, integration, and performance tests pass
- [ ] Meet system security requirements
    - [X] Deliver all network traffic over TLS
    - [ ] Verify authentication and authorization services appropriately restrict data access 
    - [X] Meet data storage privacy requirements
    - [X] Conduct security scans
- [X] Conduct scaling plan dry-run (upload size limits, file types, etc.)
- [X] Complete front-end performance testing 
- [X] Complete front-end functional testing suite
- [ ] Create a disaster recovery plan in case of system failure
    - [X] Schedule data backups 
    - [ ] Define and test data restoration procedures
- [X] Create and implement log management plan
    - [X] Define log collection and analysis architecture
    - [X] Test log collection and analysis architecture
    - [X] Test enabling different logging levels
    - [X] Verify correct log messages produced at different logging levels
    
## Pre-Launch

- [X] Create launch roll-out plan specific to this product and stakeholders
    - [X] Document remediation strategy for any known issues
    - [ ] Determine any URL redirects, search term best bets, content links, etc. needed to begin driving traffic
    - [X] Identify all user feedback channels for product
    - [X] Document processes for handling and prioritizing user feedback from all known channels
    - [X] Ensure VA Business owner acceptance of pre-launch product including any known issues
- [X] Complete end-to-end testing

## Post-Launch
- [ ] Servers are monitored, especially to detect service outages 
    - [ ] Define automated alerts for different error conditions
    - [ ] Alerts are sent and delivered when error conditions are met
    - [ ] Schedule daily/weekly calls with vets.gov and VA team members and stakeholders for a month following launch to ensure no vets.gov technical issues
- [ ] Coordinate with Contact Center to monitor calls
