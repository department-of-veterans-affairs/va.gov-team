# Checklist for Improve Facility Selection on 10-10CG

## List your team, project contributors, and reviewers
<Details>

### Product Team
- **OCTO-DE Product Lead**: Patrick Bateman
- **Product Manager**: Heather Justice
- **FE Engineer**: Brandon Cooper & Mitch Saltykov
- **BE Engineer**: Brandon Cooper & Mitch Saltykov
- **Designer**: Jessica Stump
- **Researcher**: Jessica Stump
- **Slack channel**: 1010-health-apps
- **GitHub tag**: cg-facilities

</Details>

## List of project artifacts for requests

<Details>

- [Project epic # 19433](https://app.zenhub.com/workspaces/10-10-health-apps-5fff0cfd1462b6000e320fc7/issues/department-of-veterans-affairs/va.gov-team/19433)
- [10-10CG Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/10-10CG%20Caregiver%20application%20product-outline.md)
- [Initiative brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/Improve%20Facility%20Selection/Improve%20Facility%20Selection%20-%20Initiative%20Brief.md)
- Whiteboard sketch or other lo-fi prototypes or wireframes
     - [Figma Designs](https://www.figma.com/design/TxXD5bGUOhbHHWLb85GPjK/10-10CG?node-id=2478-18708&node-type=SECTION&t=LIbnyXIFEnPa5jZz-0)
- [Research plan ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/Improve%20Facility%20Selection/Research/research-plan.md)
- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/Improve%20Facility%20Selection/Research/conversation-guide.md)
- North Star and KPIs for the product
- Product URL(s)
     - [Staging](https://staging.va.gov/family-member-benefits/apply-for-caregiver-assistance-form-10-10cg/introduction)
     - [Production](https://www.va.gov/family-member-benefits/apply-for-caregiver-assistance-form-10-10cg/introduction)
- [Use cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-10-10cg-facility-selection.md)
- [Finalized design](https://www.figma.com/design/TxXD5bGUOhbHHWLb85GPjK/10-10CG?node-id=2478-18708&node-type=SECTION&t=LIbnyXIFEnPa5jZz-0)
- [Content brief](https://github.com/department-of-veterans-affairs/va.gov-team/issues/55327)
- [Regression test plans](https://dsvavsp.testrail.io/index.php?/runs/view/6235)
- TestRail 
     - [Test plans](https://dsvavsp.testrail.io/index.php?/plans/view/6233)
- [Technical diagrams](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/eng-docs/10-10CG%20Sequence%20Diagram.md) (architecture diagram, sequence diagram)
- [Endpoint Monitoring playbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/10-10CG%20Form/Endpoint%20Monitoring%20%26%20Zero%20Silent%20Failures/10-10CG%20Monitor%20Playbook.md)
- [Release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/Improve%20Facility%20Selection/10-10CG%20Facility%20Selection%20-%20Release%20Plan.md)
- Product guide for contact center

</Details>
     
## List of process steps

<Details>

- [x] Create Initiative Brief with the Problem Statement and as many details known
     - [x] Update the Initiative Brief after each step with links to the artifacts and more details known
- [x] Discovery
     - [x] What is the problem to be solved
     - [x] What solutions have been made (internal or external) to resolve this problem
     - [x] What are the possible solutions
     - [x] How would they solve the problem
     - [x] What are the efforts involved (time, design, technical)
     - [x] What is the ROI potential for each solution
     - [x] Does the solution require engagement with downstream system
          - [x] Is there a data change, and can the downstream system accept the data?
- [x] Create Epic and corresponding stories to align with the work needed (start with this list!)
- [x] Initial design
     - [x] Lo-Fi design ideas
     - [x] Presentation and agreement with the team on direction
          - [x] Confirm Frontend and Backend efforts
     - [x] Presentation to Stakeholders and downstream system representatives
- [x] Submit Collaboration Cycle request ticket #51980
     - [x] Review Collaboration Cycle pages
     - [x] Start gathering artifacts (list above)
     - [ ] Maintain this checklist of artifacts, updating as they are shared
- [x] Schedule Design Intent review - Refer back to the initial Collaboration Cycle Request ticket
     - [x] Present design and obtain feedback
- [ ] Sign up for a Product Review session to present the initiative
- [x] Request Content & IA review - Refer back to the initial Collaboration Cycle Request ticket
- [x] Finalize design with feedback
     - [x] Present to team, stakeholders and any other interested parties
- [N/A] Create prototype or basic working functionality in environments
     - [ ] The team can determine the best path, used for research
- [x] Create Research Plan and Conversation Guide
- [N/A] Schedule Midpoint Review - Refer back to the initial Collaboration Cycle Request ticket
- [x] Create Use Cases
     - [N/A] Identify test users
- [x] Complete development
     - [x] Engineers work with Designers on any questions/clarifications
     - [x] Present to team for validation
     - [x] Present to Stakeholders for validation
- [x] Complete QA and Accessibility QA
- [x] Engage downstream system team for End-to-End QA coordination
     - [x] Create E2E use cases and document results
     - [x] Obtain signoff from downstream system team
- [x] Request Analytics review - Refer back to the initial Collaboration Cycle Request ticket
- [x] Request Staging Review - Refer back to the initial Collaboration Cycle Request ticket
     - [x] Review findings with the team
     - [x] Create tickets for work to be completed before launch
- [x] Create Usability and/or UAT research plan and conversation guide
- [x] Request Research Plan review
- [x] Schedule Usability/UAT sessions with Perigean
- [x] Conduct Usability/UAT sessions
     - [x] Synthesize research findings, if needed (not usually needed for UAT)
     - [x] Review findings with the team
     - [x] Make any necessary tickets/changes for design and/or development
- [x] Complete any Design and/or Development work from Usability/UAT sessions
- [x] Update Error matrix documentation with any new error states
- [x] Update any FE and/or BE Engineering documentation
- [x] Request Privacy, Security, Infrastructure readiness review - Refer back to the initial Collaboration Cycle Request ticket
- [x] Update Contact Center guide
- [x] Submit Contact Center guide review ticket
- [x] Create Release Plan
     - [x] Include E2E test results & signoff
- [x] Conduct Launch Go/No Go with the team
     - [x] Review Release Plan
- [ ] Launch in a phased manner, according to Release Plan
- [ ] Continuous check-ins with downstream system
- [ ] Schedule or close all remaining tickets
     - Some tickets may be backlogged for future work, as they were not required to launch

</Details>

## Miscellaneous resources

<Details>

- [Transition doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/Transition%20hub/In%20progress%20features/Facility%20selection.md)
- [Design Intent](https://app.zenhub.com/workspaces/10-10-health-apps-5fff0cfd1462b6000e320fc7/issues/department-of-veterans-affairs/va.gov-team/27066)
- [Design feedback](https://app.zenhub.com/workspaces/10-10-health-apps-5fff0cfd1462b6000e320fc7/issues/department-of-veterans-affairs/va.gov-team/27228)
- [LH Facility API info](https://developer.va.gov/explore/facilities)
- [Facility locator/LH API Integration info](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/engineering/facility-locator-integration-with-lighthouse.md)
- [Facility Locator product folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator)
- [Facility Locator Engineering folder]( https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator/engineering
)

</Details>
