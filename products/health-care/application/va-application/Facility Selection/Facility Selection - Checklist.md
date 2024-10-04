# Checklist for 10-10EZ Facility Selection redesign

## List your team, project contributors, and reviewers
<details>

### Product Team
- OCTO-DE Product Lead: Patrick Bateman
- Product Manager: Heather Justice
- FE Engineer: Matt Long
- BE Engineer: Mitch Saltykov, Brandon Cooper
- Designer: Jessica Stump
- Researcher: Jessica Stump
- Slack channel: #1010-health-apps
- GitHub tag: ez-facilities

</details>

## List of project artifacts for requests

<details>

- Project epic #
- [10-10EZ Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Health%20Care%20Application%20-%20Product%20Outline.md)
- [Initiative brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/Facility%20Selection/ReadMe.md)
- [Figma Design Discovery](https://www.figma.com/design/UljiHam46o5DItC5iDgmPd/10-10EZ?node-id=3831-40050&node-type=CANVAS&t=joom4n3vLUHatY2V-0)
- [Figma Phased Designs](https://www.figma.com/design/UljiHam46o5DItC5iDgmPd/10-10EZ?node-id=5131-3754&node-type=CANVAS&t=joom4n3vLUHatY2V-0)
- User flows
- Research plan 
- Conversation guide
- North Star and KPIs for the product
- Authenticated test-user logins, when applicable. **_Do not put staging credentials in your va.gov-team ticket; store or reference them in a .md file in the va.gov-team-sensitive repository_**
- Product URL(s)
     - va.gov/health-care/apply-for-health-care-form-10-10ez/introduction
- Use cases
- Finalized design prototype or mockup
- Content ticket
- Regression test plans
- TestRail 
     - Test cases
     - Test plans
- Accessibility Testing ticket
- Technical diagrams (architecture diagram, sequence diagram)
- Endpoint Monitoring Playbook
- Any new publicly-exposed endpoints
- Any new interactions with dependent VA backends
- Release plan
- Product guide for contact center

</details>
     
## List of process steps

<details>

- [x] **Create Initiative Brief with the Problem Statement and as many details known**
     - [x] **Update the Initiative Brief after each step with links to the artifacts and more details known**
- [x] Discovery
     - [x] What is the problem to be solved
     - [x] What solutions have been made (internal or external) to resolve this problem
     - [x] What are the possible solutions
     - [x] How would we solve the problem
     - [ x What are the efforts involved (time, design, technical)
     - [x] What is the ROI potential for each solution
     - [x] Does the solution require engagement with downstream system
          - [x] Is there a data change, and can the downstream system accept the data?
- [x] **Create Epic to identify the problem and solution**
- [N/A] Optional - **Sign up for a Product Review session to present the initiative (~after Design Intent)**
- [x] Create corresponding stories to align with the work needed (start with this list!)
- [x] Initial design
     - [x] Lo-Fi design ideas
     - [x] Presentation and agreement with the team on direction
          - [x] Confirm Frontend and Backend efforts
     - [ ] Presentation to Stakeholders and downstream system representatives
- [ ] **Submit Collaboration Cycle request ticket**
     - [ ] **Review Collaboration Cycle site**
     - [ ] **Start gathering artifacts (list above)**
     - [ ] **Maintain this checklist of artifacts, updating as they are shared**
- [ ] **Schedule Design Intent review - Refer back to the initial Collaboration Cycle Request ticket**
     - [ ] Present design and obtain feedback
- [ ] **Request Content & IA review - Refer back to the initial Collaboration Cycle Request ticket**
- [ ] Finalize design with feedback
     - [ ] Present to team, stakeholders and any other interested parties
- [ ] Create prototype or basic working functionality in environments
     - [ ] The team can determine the best path, used for research
- [ ] Create Research Plan and Conversation Guide
- [ ] **Schedule Midpoint Review - Refer back to the initial Collaboration Cycle Request ticket**
- [ ] **Request Research Review - Refer back to the initial Collaboration Cycle Request ticket**
- [ ] Schedule research sessions with Perigean
- [ ] Conduct research sessions
     - [ ] Synthesize research findings
     - [ ] Review findings with the team
     - [ ] Make any necessary tickets/changes for design
- [ ] **Create Use Cases**
     - [ ] **Identify test users**
- [ ] **Create Release Plan**
- [ ] Complete development
     - [ ] Engineers work with Designers on any questions/clarifications
     - [ ] Present to team for validation
     - [ ] Present to Stakeholders for validation
- [ ] **Submit QA ticket and schedule with Tze (based on Dev ETA)**
- [ ] **Engage downstream system team for End-to-End QA coordination**
     - [ ] **Create E2E use cases and document results**
     - [ ] **Obtain signoff from downstream system team**
- [ ] **Request Analytics review - Refer back to the initial Collaboration Cycle Request ticket**
- [ ] Complete QA and Accessibility QA
     - [ ] Complete QA with feature toggle enabled and disabled to confirm toggle effectiveness (Reference [Testing process notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Form/Testing%20with%20the%20Feature%20Toggle.md))
     - [ ] [Accessbility QA ticket template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=briandeconinck&labels=a11y-testing&template=a11y-testing.yaml&title=Accessibility+Testing+for+%5BTeam+Name%2C+Product+Name%2C+Feature+Name%5D)
- [ ] **Request Staging Review - Refer back to the initial Collaboration Cycle Request ticket**
     - [ ] **Review findings with the team**
     - [ ] **Create tickets for work to be completed before launch**
- [ ] Create Usability and/or UAT research plan and conversation guide
- [ ] **Request Research Plan review**
- [ ] Schedule Usability/UAT sessions with Perigean
- [ ] Conduct Usability/UAT sessions
     - [ ] Synthesize research findings, if needed (not usually needed for UAT)
     - [ ] Review findings with the team
     - [ ] Make any necessary tickets/changes for design and/or development
- [ ] Complete any Design and/or Development work from Usability/UAT sessions
- [ ] Update Error matrix documentation with any new error states
- [ ] Update any FE and/or BE Engineering documentation
- [ ] **Request Privacy, Security, Infrastructure readiness review - Refer back to the initial Collaboration Cycle Request ticket**
- [ ] **Update Contact Center guide**
- [ ] **Submit Contact Center guide review ticket**
- [ ] **Update Release Plan**
     - [ ] **Include E2E test results & signoff**
- [ ] **Schedule or close all remaining tickets**
     - **Some tickets may be backlogged for future work, as they were not required to launch**
- [ ] **Review this checklist for any missing artifacts**
- [ ] **Review the [Product Development Checklist](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/product-development-checklist)**
- [ ] **Conduct Launch Go/No Go with the team**
     - [ ] **Review this checklist**
     - [ ] **Review Release Plan**
- [ ] **Launch in a phased manner, according to Release Plan**
- [ ] **Continuous check-ins with downstream system**
- [ ] Conduct Usability/UAT sessions
     - [ ] Synthesize research findings, if needed (not usually needed for UAT)
     - [ ] Review findings with the team
     - [ ] Make any necessary tickets for design and/or development
- [ ] **PM to sign up for an Impact review session to present the impact that the change has had on the product (~1 month after 100% launch)**


</details>
