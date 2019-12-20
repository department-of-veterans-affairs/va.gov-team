## Secure Messaging Pre-Launch Checklist
Copied on Aug. 15, 2016 from:
https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Project%20Management/Launch%20Guide.md
## Project Definition

- [x]  Identify VA Business Owner (final decision-making), decision makers, and VA stakeholders
      https://github.com/department-of-veterans-affairs/kudos-team/issues/122
      


- Understand current state of the VA system(s) providing the functionality: https://github.com/department-of-veterans-affairs/kudos-team/issues/124

- Define the expected scope of the project: https://github.com/department-of-veterans-affairs/kudos-team/issues/125
    - [x] Determine if the goal is to recreate what existing functionality but integrated with the vets.gov platform and branding
    - [x] Determine if the goal is to enhance the Veteran experience in some tangible way
    - [x] Decide what current or proposed features, processes or forms are in or out of scope
    - [x] Understand root cause of problem
    - [x] Define outcomes of the project (metrics of success)

- Get access to the system: https://github.com/department-of-veterans-affairs/kudos-team/issues/126
    - [x] Get at minimum read-only access for engineers to relevant production systems
    - [ ] Get test accounts for systems 

- [x] Draft project charter: https://github.com/department-of-veterans-affairs/kudos-team/issues/127
    - [x] Communicate guiding decisions to stakeholders (what they should expect)

- Review charter with business owner and get signatures: https://github.com/department-of-veterans-affairs/kudos-team/issues/128

## Kick-off

- [x] Define sprint team meeting schedule: https://github.com/department-of-veterans-affairs/kudos-team/issues/123

- Send signed charter to stakeholders, including Sheila Guitteriez (Call Center POC) and Kelly O. for PM purposes: https://github.com/department-of-veterans-affairs/kudos-team/issues/129

- Hold a kick-off meeting to assemble entire team including VA stakeholders: https://github.com/department-of-veterans-affairs/kudos-team/issues/130
    - [ ] Review project goals, timeline, roles and definitions and adjust as needed
    - [ ] Set expectations about time commitments required (e.g., for end-to-end testing, etc.)


## Discovery

- Document existing end-to-end business processes: https://github.com/department-of-veterans-affairs/kudos-team/issues/131
    - [ ] Identify all existing IT systems and data sources to successfully complete any user actions initiated on vets.gov
    - [ ] Document any data standards (e.g., all upper case inputs) for those systems
    - [x] Identify VA stakeholder groups involved in the end-to-end process
    - [ ] Inventory content for rewrite; plan for sunsetting old content
    - [ ] Identify any VA policies / legal regulations that are required
    - [ ] Physically go through the process or follow someone going through the process to see it first hand

- Setting up new account: https://github.com/department-of-veterans-affairs/kudos-team/issues/132
- Opting into secure messaging: https://github.com/department-of-veterans-affairs/kudos-team/issues/133
- Sending secure message: https://github.com/department-of-veterans-affairs/kudos-team/issues/134 


- Understand and document ATO process: https://github.com/department-of-veterans-affairs/kudos-team/issues/135
    - [x] Conduct a risk-based review of features to determine minimum LOA level required to access a feature
    - [x] Get VA Stakeholder sign-off on minimum LOA levels (will be handled for all of vets.gov November features)
    - [x] Communicate to DevOps any potential impacts to ATO
    - [ ] Complete ISA/MOU for secure messaging

- Define change management plan for existing VA systems with VA stakeholders: https://github.com/department-of-veterans-affairs/kudos-team/issues/136
    - [ ] Create a migration and sunset strategy and timeline for both content and systems (redirects)
    - [ ] Identify potential downstream backend systems risks and issues as a result of increased usage on vets.gov
    - [ ] Communicate downstream risks and potential issues to business owner; update charter as needed to include this information
    - [ ] Ensure business owners understand launch implications and are staffed adequately to handle traffic, process changes as a result of our work, and/or and technical back-end issues on VA systems
    - [ ] Ensure that business owners communicate to their staff about the changes that will be taking place
    - [ ] If applicable, ensure training on new process occurs

- Design system architecture including all backend, external, or legacy dependencies: https://github.com/department-of-veterans-affairs/kudos-team/issues/137

- Complete the user research plan: https://github.com/department-of-veterans-affairs/kudos-team/issues/138
    - [x] Review existing research to determine how much additional research is required.
    - [x] Conduct and document research
    - [ ] Synthesize findings; share with vets.gov team and VA stakeholders

- [x] Review existing user experiences, including in-progress mockups: https://github.com/department-of-veterans-affairs/kudos-team/issues/139
    - [x] Review the [current experience](Pre-Discovery/Current Experience.md)
    - [x] Review the [MHV prototype experience](Pre-Discovery/Prototype Experience.md)
    - [x] Review any exisiting mobile wireframes (CONFIRMED: There are no mobile wireframes that exist for Secure Messaging.)

- [ ] Define any project-level operations and maintenance plan: https://github.com/department-of-veterans-affairs/kudos-team/issues/140
    - [ ] Define and communicate post-launch support and enhancement processes with VA stakeholders
    - [ ] Set expectations with stakeholders on enhancement requests

- Create analytics scorecard: https://github.com/department-of-veterans-affairs/kudos-team/issues/141
    - [ ] Baseline as-is Google analytics and other relevant metrics for at least 3 KPIs
    - [ ] Define 3 key performance indicators (KPIs) for product to measure success
    - [ ] Review / validate KPIs and metrics with vets.gov Product Owner (Stacey)
    - [ ] Determine what information is needed from legacy VA systems (e.g., counts of transactions, success rates) and how to obtain it
    - [ ] Review and update baseline page traffic metrics (e.g., page views, bounce rate in Google Analytics)
    - [ ] Document any user actions requiring specific metric tracking (e.g., triggers, tags, or custom variables in Google Analytics)

