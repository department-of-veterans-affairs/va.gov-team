## Secure Messaging Pre-Launch Checklist

## Project Definition

- [x]  Identify VA Business Owner (final decision-making), decision makers, and VA stakeholders
    
- Understand current state of the VA system(s) providing the functionality

- Define the expected scope of the project
    - [x] Determine if the goal is to recreate what existing functionality but integrated with the vets.gov platform and branding
    - [x] Determine if the goal is to enhance the Veteran experience in some tangible way
    - [x] Decide what current or proposed features, processes or forms are in or out of scope
    - [x] Understand root cause of problem
    - [x] Define outcomes of the project (metrics of success)

- Get access to the system
    - [x] Get at minimum read-only access for engineers to relevant production systems
    - [ ] Get test accounts for systems 

- [x] Draft project charter
    - [x] Communicate guiding decisions to stakeholders (what they should expect)

- Review charter with business owner and get signatures

## Kick-off

- [x] Define sprint team meeting schedule

- Send signed charter to stakeholders, including Sheila Guitteriez (Contact Center POC) and Kelly O. for PM purposes

- Hold a kick-off meeting to assemble entire team including VA stakeholders
    - [ ] Review project goals, timeline, roles and definitions and adjust as needed
    - [ ] Set expectations about time commitments required (e.g., for end-to-end testing, etc.)


## Discovery

- Document existing end-to-end business processes
    - [ ] Identify all existing IT systems and data sources to successfully complete any user actions initiated on vets.gov
    - [ ] Document any data standards (e.g., all upper case inputs) for those systems
    - [x] Identify VA stakeholder groups involved in the end-to-end process
    - [ ] Inventory content for rewrite; plan for sunsetting old content
    - [ ] Identify any VA policies / legal regulations that are required
    - [ ] Physically go through the process or follow someone going through the process to see it first hand

- Setting up new account
- Opting into secure messaging
- Sending secure message


- Understand and document ATO process
    - [x] Conduct a risk-based review of features to determine minimum LOA level required to access a feature
    - [x] Get VA Stakeholder sign-off on minimum LOA levels (will be handled for all of vets.gov November features)
    - [x] Communicate to DevOps any potential impacts to ATO
    - [ ] Complete ISA/MOU for secure messaging

- Define change management plan for existing VA systems with VA stakeholders
    - [ ] Create a migration and sunset strategy and timeline for both content and systems (redirects)
    - [ ] Identify potential downstream backend systems risks and issues as a result of increased usage on vets.gov
    - [ ] Communicate downstream risks and potential issues to business owner; update charter as needed to include this information
    - [ ] Ensure business owners understand launch implications and are staffed adequately to handle traffic, process changes as a result of our work, and/or and technical back-end issues on VA systems
    - [ ] Ensure that business owners communicate to their staff about the changes that will be taking place
    - [ ] If applicable, ensure training on new process occurs

- Design system architecture including all backend, external, or legacy dependencies

- Complete the user research plan
    - [x] Review existing research to determine how much additional research is required.
    - [x] Conduct and document research
    - [ ] Synthesize findings; share with vets.gov team and VA stakeholders

- [x] Review existing user experiences, including in-progress mockups
    - [x] Review the [current experience](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/secure-messaging/discovery/2017/current-experience.md)
    - [x] Review the [MHV prototype experience](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/secure-messaging/discovery/2017/prototype-experience.md)
    - [x] Review any exisiting mobile wireframes (CONFIRMED: There are no mobile wireframes that exist for Secure Messaging.)

- [ ] Define any project-level operations and maintenance plan
    - [ ] Define and communicate post-launch support and enhancement processes with VA stakeholders
    - [ ] Set expectations with stakeholders on enhancement requests

- Create analytics scorecard
    - [ ] Baseline as-is Google analytics and other relevant metrics for at least 3 KPIs
    - [ ] Define 3 key performance indicators (KPIs) for product to measure success
    - [ ] Review / validate KPIs and metrics with vets.gov Product Owner (Stacey)
    - [ ] Determine what information is needed from legacy VA systems (e.g., counts of transactions, success rates) and how to obtain it
    - [ ] Review and update baseline page traffic metrics (e.g., page views, bounce rate in Google Analytics)
    - [ ] Document any user actions requiring specific metric tracking (e.g., triggers, tags, or custom variables in Google Analytics)

