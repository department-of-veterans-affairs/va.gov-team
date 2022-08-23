# Checklist: WIP
The steps here are meant to provide a framework for our Facility Locator initiatives.  They will not all be applicable everytime but they will at least be accounted for as we move forward.

**The more we are able to do before hand, the easier it will be for other teams.**

## Discovery
- [ ] [Review the Discovery How-to Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/discovery-sprints/how-to-run-discovery-sprint.md) as well as the [Discovery Toolkit](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/research/discovery-sprints)
- [ ] Schedule and attend an orientation of the new feature
  - [ ] List endpoints or questions about endpoints

## Design
### Research Plan
- [ ] Establish process for user interviews ([great resource](https://docs.google.com/document/d/1d2PJ6saIhzbWneevUs4rc153LTcbGxN-IJ9cXT51g1A/edit#heading=h.mfojcojhlwfx))
  - [ ] Create a Conversation Guide (sample [Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/conversation-guide-template.md))

### UX
- [ ] Develop thumbnail map of feature
- [ ] Develop wireframes
  - [ ] Seek applicable feedback, obtain understanding from team
- [ ] Develop mockups
  - [ ] Seek applicable feedback, obtain understanding from team

### Review Process
- [ ] **Internal**
  - [ ] Review the [Web Brand Consolidation documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-gov-relaunch-2018/va-gov-strategy/the-new-va.gov-briefing-2019-07.pdf)
  - [ ] Review the [VA.gov Design System](https://design.va.gov/)
  - [ ] Team and DSVA: share mockups, discuss alternates/options in a team meeting
  - [ ] Review the [Design QA](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/design/design-review-checklist.md) docuementation
- [ ] **External**
  - [ ] Review [Design Workflow](https://docs.google.com/document/d/1BtIHL5KRl9ln20FONWpBjQzTDveU_wyKqWCL5R-6MB8/edit?ts=5d9507d5#heading=h.bu00ebtvll88)
  - [ ] Shawna (`@shawna` in Slack): Design presentation of mockups (might be in a weekly meeting)
  - Iterate on Shawna's feedback
  - [ ] Other Teams: Authenticated Experience, Global UX, etc
  - [ ] VFS-platform-support
    - Emily: Design
    - Peggy: Content
    - Mikki: IA
    - Jennifer: Usability
    - Trevor: 508
  - Iterate on other team's feedback
- [ ] **As soon as feasible and iteration is finished,** request a [Design QA Review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/documentation/design-review-process.md)

### Content/IA
_Share as soon as you have content - this is usually after mockups are created.  Get IA review after thumbnails (in case IA informs of a change, get Content review after mockups (provide as much final content to FE for implementation)_
- [ ] Discovery and reference the [VA.gov content style guide](https://design.va.gov/content-style-guide/)
- [ ] Reference the [Content/IA best practices](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/content/content-review-process.md)
- [ ] Reference the [Content/IA Messaging Dictionary](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/design/design-system/guidelines/error-handling)
- [ ] Reference the [Error Handling Content Style Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/design-system/guidelines/error-handling/Content%20Style%20Guide.md)
- [ ] Engage with the Content/IA team as soon as feasible
  - [ ] Present text/verbiage that is beyond the boilerplate language
  - [ ] Outline links (hub and spoke), urls, navigation hierarchy, crosslinks/redirects, SEO
  - [ ] Discuss what parts of the site are templated
  - [ ] Solicit feedback from Content/IA Team
  - [ ] Confirm that wayfinding is appropriate
- [ ] [Request IA Review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/working-with-documentation.md) & [Request a Content Review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/content/content-review-process.md#how-to-request-content-review)
_These links/reviews may end up being consolidated, stay tuned._
- [ ] Before launch, circle back with Content/IA about further impact and feedback

### Usability
- [ ] Create a [test plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/discovery-research/usability-research/research-plan.md)
  - [ ] Is the entry point established?
  - [ ] Is there a better entry point?
- [ ] 508 Compliance
  - [ ] Review [508 Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/accessibility/508-checklist-wip.md)
  - [ ] [Request 508 Audit](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-request-prelaunch-review.md)
  - [ ] Ensure the feature is tracked within the [508 Product Sheet](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-product-review-list.md)

## Development
_Do we need to merge the FE and BE tasks?_
### General Engineering Tasks
- [ ] Documentation for quickly addressing when things go wrong
- [ ] Establish contacts for oncall support: who do we contact if the application is failing?  What kinds of failure modes are likely?
### Backend Tasks
- [ ] Investigation of applicable services
  - [ ] Which API service does this feature use?
  - [ ] Collaborate with Frontend on Error Handling
  - [ ] Investigate  the common area for error types
  - [ ] Define or reference a known resource
- [ ] For PRs: first review internally with BE or another engineer before the BE Team
  - [ ] Once internally reviewed, share with the BE Review Team at the VSP (team name?)
  - [ ] Ensure that [feature toggles](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/tools/feature-toggles/) are set appropriately to be [toggled](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/feature-toggles.md)
- [ ] Documentation and points of contact for any new backend dependencies
- [ ] Links to important dashboards for investigating relevant issues
### Frontend Tasks
- [ ] Investigation
  - [ ] What will be involved in using the API service to pull and display data?
  - [ ] List and define what the main components will be for the feature to function properly
  - [ ] Collaborate with Backend on Error Handling
  - [ ] Investigate  the common area for error types
  - [ ] Define or reference a known resource
- [ ] For PRs: first review internally with FE or another engineer before the FE Team
  - [ ] Once internally reviewed, share with the FE Review Team at the VSP (team name?)
  - [ ] Ensure that [feature toggles](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/tools/feature-toggles/) are set appropriately to be [toggled](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/feature-toggles.md)
  - [ ] Entrance pages (i.e. supporting static content) in place
### Security/ATO
- [ ] Establish who among VSP we should talk to about Security Reviews
  - [ ] What is the review process?
- [ ] Review the [ATO Procedures](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/security/security-review-process.md)
- [ ] Request a [preliminary ATO review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/security/security-review-process.md)
- [ ] Request a [pre-launch ATO review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/security/security-review-process.md)
### QA
- [ ] [Documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/quality-assurance) from platform

### Testing
- [ ] Create a test plan from an overall engineering perspective
  - [ ] Build, test, audits (508, content, security, load, CI/CD, passing on all browsers, etc) in a feedback loop
  - [ ] Code coverage requirements
- [ ] Develop testing infrastructure, refer to established documentation
- [ ] Define threshold or definition of high-severity bugs
- [ ] Document any high-severity bugs for future reference
- [ ] Establish contacts for errors to be reported to
  - [ ] Errors get sent directly to the team
- [ ] Establish steps to take to move feature into [staging](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/accessing-staging.md) or within
- [ ] Tested in prod with back-of-house people and systems

## Analytics
- [ ] Confirm that the new feature/product is stable and visible in staging.va.gov
- [ ] Engage with the Analytics Team about what is to be launched
- [ ] Review [KPI/metrics spreadsheet](https://docs.google.com/spreadsheets/d/1e9bqzjBnibiCWXWNMcK-fJOw7cjXVdx5M6gmC4phlfg/edit#gid=1554481611)
## Support
- [ ] Does the Contact Center have documentation?
- [ ] Have they asked for anything else?
- [ ] What else should we say about

## Pre-release
- [ ] Contact Center is prepared for launch with updated scripts/documentation as needed
- [ ] VA web comms team is aware of this launch and has accurate messaging
- [ ] Product Outline is updated
- [ ] Downtime UX and error messaging documentation complete
- [ ] "Learn and Improve" plan written: KPI measurements, analytics reporting, next phase of features to build

## Release Plan
- [ ] Refer to in-depth [Release Plan Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

## Consider Deliverables and Artifacts
- [ ] Ensure that these are noted and stored for easy access
  - [ ] Include contact information in case further discussion is required

## Launch
- [ ] Go/No-go from each team member
- [ ] Define what is being tracked
- [ ] Define other last minute items
- [ ] Review the [Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

## Post-Mortem
- [ ] List and define any issues that impeded the process
- [ ] Create post-launch coordination plan including calls with stakeholders and contact center
- [ ] Coordinate with Contact Center to monitor calls
- [ ] Ensure monitoring and resolve issues in 24 hours
- [ ] Collect and report metrics from Google Analytics
- [ ] Schedule regression testing
