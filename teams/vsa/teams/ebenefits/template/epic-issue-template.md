# _[FEATURE TITLE]_

Issue brief: https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/teams/ebenefits/issue-briefs _[LINK TO DOCUMENTATION]_

eBenefits URL: https://www.ebenefits.va.gov/ebenefits/ _[LINK TO EBENEFITS FEATURE]_

Working IA theory: Unique page under [HUB]
  - Potential URL `www.va.gov/____`

## Story

As a Veteran I want to _____ so that I can _____.

## Considerations

- List blockers, challenges, ideas, history, and other things to think about.

## Definition of Done

- [ ] The USER must be able to _____
- [ ] The USER must also be able to _____
- [ ] The feature has been launched

## Pilot Tasks
### Discovery
- [ ] [Review the Discovery How-to Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/discovery-sprints/how-to-run-discovery-sprint.md) as well as the [Discovery Toolkit](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/discovery-sprints)  
### Design
- [ ] Review the [Web Brand Consolidation documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-gov-relaunch-2018/va-gov-strategy/the-new-va.gov-briefing-2019-07.pdf)
- [ ] As soon as feasible, request a [Design QA Review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/working-with-platform-design-team.md)
### Research Plan
- [ ] Establish process for user interviews
  - [ ] Create a Conversation Guide (sample [Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/discovery-research/usability-research/conversation-guide.md))
###UX
- [ ] Develop wireframes
  - [ ] Seek applicable feedback
- [ ] Develop mockups
  - [ ] Seek applicable feedback
### Content/IA
- [ ] Discovery and reference the VA.gov content style guide
- [ ] Reference the [Content/IA best practices](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/content/content-review-process.md)
- [ ] Reference the [Content/IA Messaging Dictionary](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/design-system/guidelines/error-handling/Dictionary.md)
- [ ] Engage with the Content/IA team as soon as feasible  
  - [ ] Present text/verbiage that is beyond the boilerplate language   
  - [ ] Outline links (hub and spoke), urls, navigation hierarchy, crosslinks/redirects, SEO   
  - [ ] Discuss what parts of the site are templated
  - [ ] Solicit feedback from Content/IA Team
  - [ ] Confirm that wayfinding is appropriate
- [ ] [Request IA Review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/working-with-ia.md) & [Request a Content Review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/content/content-review-process.md#how-to-request-content-review)
###Usability
- [ ] Create a [test plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/discovery-research/usability-research/research-plan.md)
  - [ ] Is the entry point established?
  - [ ] Is there a better entry point?
- [ ] 508 Compliance
  - [ ] Review [eBenefits 508 Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/508-checklist-wip.md)
  - [ ] [Request 508 Audit](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-request-prelaunch-review.md)
  - [ ] Ensure the feature is tracked within the [508 Product Sheet](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-product-review-list.md)
## Further Tasks
### General Engineering Tasks
- [ ] Documentation for quickly addressing when things go wrong
- [ ] Establish contacts for oncall support: who do we contact if the application is failing?  What kinds of failure modes are likely?
### Backend Tasks
- [ ] Investigation of applicable services
  - [ ] Does the feature use the `vets-api` service?
  - [ ] Review `vets-api` endpoints or does an `api` exist, need to be built?
  - [ ] Does EVSS need to be engaged? And how?
  - [ ] Collaborate with Frontend on Error Handling
  - [ ] Investigate  the common area for error types
  - [ ] Define or reference a known resource
- [ ] For PRs: first review internally with BE or another engineer before the BE Team
  - [ ] Once internally reviewed, share with the BE Review Team at the VSP (team name?)
  - [ ] Ensure that feature flags are set appropriately to be toggled
- [ ] Documentation and points of contact for any new backend dependencies
- [ ] Links to important dashboards for investigating relevant issues
### Frontend Tasks
- [ ] Investigation
  - [ ] What will be involved in using the `vets-api`service to pull and display data?
  - [ ] List and define what the main components will be for the feature to function properly
  - [ ] Collaborate with Backend on Error Handling
  - [ ] Investigate  the common area for error types
  - [ ] Define or reference a known resource
- [ ] For PRs: first review internally with FE or another engineer before the FE Team
  - [ ] Once internally reviewed, share with the FE Review Team at the VSP (team name?)
  - [ ] Ensure that feature flags are set appropriately to be toggled
  - [ ] Entrance pages (i.e. supporting static content) in place
### Security/ATO
- [ ] Establish who among VSP we should talk to about Security Reviews
  - [ ] What is the review process?
- [ ] Review the [ATO Procedures](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/security/security-review-process.md)
- [ ] Request a [preliminary ATO review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/security/security-review-process.md)
- [ ] Request a [pre-launch ATO review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/security/security-review-process.md)
### Testing
- [ ] Create a test plan from an overall engineering perspective  
  - [ ] Build, test, audits (508, content, security, load, CI/CD, passing on all browsers, etc) in a feedback loop  
  - [ ] Code coverage requirements
- [ ] Develop testing infrastructure, refer to established documentation  
- [ ] Define threshold or definition of high-severity bugs
- [ ] Document any high-severity bugs for future reference  
- [ ] Establish contacts for errors to be reported to
  - [ ] Errors get sent directly to the team
- [ ] Establish steps to take to move feature into staging
- [ ] Tested in prod with back-of-house people and systems

## Get Ready to Launch
### Analytics
- [ ] Confirm that the new feature/product is stable and visible in staging.va.gov  
- [ ] Engage with the Analytics Team about what is to be launched  

### Support
- [ ] Does the Contact Center have documentation?
- [ ] Have they asked for anything else?
- [ ] What else should we say about 

### Pre-release
- [ ] Contact Center is prepared for launch with updated scripts/documentation as needed
- [ ] VA web comms team is aware of this launch and has accurate messaging
- [ ] Product Outline is updated
- [ ] Downtime UX and error messaging documentation complete
- [ ] "Learn and Improve" plan written: KPI measurements, analytics reporting, next phase of features to build

### Release Plan
- [ ] Refer to in-depth [Release Plan Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

### Consider Deliverables and Artifacts
- [ ] Ensure that these are noted and stored for easy access
  - [ ] Include contact information in case further discussion is required

### Launch
- [ ] Go/No-go from each team member
- [ ] Define what is being tracked
- [ ] Define other last minute items
- [ ] Review the [Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

### Post-Mortem
- [ ] List and define any issues that impeded the process
- [ ] Create post-launch coordination plan including calls with stakeholders and contact center 
- [ ] Coordinate with Contact Center to monitor calls 
- [ ] Ensure monitoring and resolve issues in 24 hours
- [ ] Collect and report metrics from Google Analytics
- [ ] Schedule regression testing 
