# Checklist for FMP Registration

## List your team, project contributors, and reviewers
<details>

### Product Team
- OCTO-DE Product Lead: Premal Shah
- Product Manager: Mary Wang
- FE Engineer: Rachel Eiting
- BE Engineer: Bryan Alexander
- Designer: Brian Wilke
- Researcher: Rachael Penfil, Steven Straily
- Slack channel: #ivc-forms
- GitHub tag: 

</details>

## List of project artifacts for requests

<details>

- [Collaboration cycle intake](https://app.zenhub.com/workspaces/ivc-forms-652da2d3f0ae4c0016bfb109/issues/gh/department-of-veterans-affairs/va.gov-team/74178)
- [CAIA intake](https://app.zenhub.com/workspaces/ivc-forms-652da2d3f0ae4c0016bfb109/issues/gh/department-of-veterans-affairs/va.gov-team/74190)
  - [IA design](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/information-architecture/ia-design-docs/foreign-medical-program-registration.md)
  - [IA tracker](https://app.zenhub.com/workspaces/ivc-forms-652da2d3f0ae4c0016bfb109/issues/gh/department-of-veterans-affairs/va.gov-team/75464)
- [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/foreign-medical-program/10-7959f-1/10-7959f-1%20product%20outline.md)
- [Designs](https://www.figma.com/design/PzB1F5TYuBK5KQgPbuhAwH?fuid=1327362173304198026&prev-plan-id=1327362175468449563&prev-plan-type=team&prev-selected-view=recentsAndSharing&prev-tab=recently-viewed)
- [Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/foreign-medical-program/10-7959f-1/research/users/research-plan.md)
- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/foreign-medical-program/10-7959f-1/research/users/conversation-guide.md)
- [Analytics implementation request](https://app.zenhub.com/workspaces/ivc-forms-652da2d3f0ae4c0016bfb109/issues/gh/department-of-veterans-affairs/va.gov-team/77616)
- [Domo dashboard request](https://github.com/department-of-veterans-affairs/va.gov-team/issues/86028#issuecomment-2173645173)
- Authenticated test-user logins, when applicable. **_Do not put staging credentials in your va.gov-team ticket; store or reference them in a .md file in the va.gov-team-sensitive repository_**
- Product URL(s)
     - [FMP registration form url](https://staging.va.gov/health-care/foreign-medical-program/register-form-10-7959f-1/)
- TestRail 
     - [Test cases](https://dsvavsp.testrail.io/index.php?/suites/view/2993&group_by=cases:section_id&group_order=asc&display_deleted_cases=0)
     - [Test plans](https://dsvavsp.testrail.io/index.php?/runs/overview/77)
- Accessibility Testing [ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/89740)
- Technical diagrams (architecture diagram, sequence diagram)
- Any new publicly-exposed endpoints
- Any new interactions with dependent VA backends
- [Release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/foreign-medical-program/10-7959f-1/fmp-registration-release-plan.md)
- Product guide for contact center: draft to be added

</details>
     
## List of process steps

<details>


- [x] Discovery
     - [x] Does the solution require engagement with downstream system
          - [x] Is there a data change, and can the downstream system accept the data?
- [x] Create Epic to identify the problem and solution
- [x] Create corresponding stories to align with the work needed (start with this list!)
- [x] Initial design
     - [x] Lo-Fi design ideas
     - [x] Presentation and agreement with the team on direction
          - [x] Confirm Frontend and Backend efforts
     - [x] Presentation to Stakeholders and downstream system representatives
- [x] Submit Collaboration Cycle request ticket
- [x] Schedule Design Intent review - Refer back to the initial Collaboration Cycle Request ticket
     - [x] Present design and obtain feedback
- [x] Request Content & IA review - Refer back to the initial Collaboration Cycle Request ticket
- [x] Finalize design with feedback
     - [x] Present to team, stakeholders and any other interested parties
- [x] Create prototype or basic working functionality in environments
     - [x] The team can determine the best path, used for research
- [x] Create Research Plan and Conversation Guide
- [x] Schedule Midpoint Review - Refer back to the initial Collaboration Cycle Request ticket
- [x] Request Research Review - Refer back to the initial Collaboration Cycle Request ticket
- [x] Schedule research sessions with Perigean
- [x] Conduct research sessions
     - [x] Synthesize research findings
     - [x] Review findings with the team
     - [x] Make any necessary tickets/changes for design
- [x] Create Use Cases
     - [x] Identify test users
- [x] Create Release Plan
- [x] Complete development
     - [x] Engineers work with Designers on any questions/clarifications
     - [x] Present to team for validation
     - [x] Present to Stakeholders for validation
- [x] Engage downstream system team for End-to-End QA coordination
     - [x] Create E2E use cases and document results
     - [x] Obtain signoff from downstream system team
- [x] Request Analytics review - Refer back to the initial Collaboration Cycle Request ticket
- [x] Complete QA and Accessibility QA
     - [x] Complete QA with feature toggle enabled and disabled to confirm toggle effectiveness (Reference [Testing process notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Form/Testing%20with%20the%20Feature%20Toggle.md))
     - [x] [Accessbility QA ticket template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=briandeconinck&labels=a11y-testing&template=a11y-testing.yaml&title=Accessibility+Testing+for+%5BTeam+Name%2C+Product+Name%2C+Feature+Name%5D)
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
     - [x] Coordinate with IVC Contact Center
     - [x] notify IVC Contact Center before going to prod
     - [x] Submit Contact Center guide review [ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/90047)
- [x] Update Release Plan
     - [x] Include E2E test results & signoff
- [ ] Schedule or close all remaining tickets
     - Some tickets may be backlogged for future work, as they were not required to launch
- [x] Coordinate with CAIA
     - [x] confirmation email review [ticket](https://app.zenhub.com/workspaces/ivc-forms-652da2d3f0ae4c0016bfb109/issues/gh/department-of-veterans-affairs/va.gov-team/89338)
     - [x] react widget [ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/88012#issuecomment-2256789193) - content and testing
     - [x] notify CAIA before going to prod
     - [x] notify VA Notify of prod date
     - [x] Coordinate with VA Notify
- [x] Conduct Launch Go/No Go with the team
     - [x] Review this checklist
     - [x] Review Release Plan
- [x] Launch in a phased manner, according to Release Plan
- [x] Continuous check-ins with downstream system
- [x] Conduct Usability/UAT sessions
     - [x] Synthesize research findings, if needed (not usually needed for UAT)
     - [x] Review findings with the team
     - [x] Make any necessary tickets for design and/or development
- [ ] Impact review session to present the impact that the change has had on the product (~1 month after 100% launch)


</details>
