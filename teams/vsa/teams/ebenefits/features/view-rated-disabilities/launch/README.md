# Launch Checklist: Rated Disabilities
The steps here are meant to track and inform all the necessary steps for a feature to be launched in the VA.gov online experience.  
## Table of Contents  
[Discovery](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-rated-disabilities/launch/README.md#discovery)  
[Design](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-rated-disabilities/launch/README.md#design)  
[Development](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-rated-disabilities/launch/README.md#development)  
[Review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-rated-disabilities/launch/README.md#review)  
[Analytics](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-rated-disabilities/launch/README.md#analytics)  
[Support](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-rated-disabilities/launch/README.md#support-consider-deliverables-and-artifacts)  
[Pre-release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-rated-disabilities/launch/README.md#pre-release-plan)  
[Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-rated-disabilities/launch/README.md#release-plan)  
[Launch](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-rated-disabilities/launch/README.md#launch)  
[Post-Mortem](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-rated-disabilities/launch/README.md#post-mortem)  

## Discovery
- [x] [Review the Discovery How-to Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/discovery-sprints/how-to-run-discovery-sprint.md) as well as the [Discovery Toolkit](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/discovery-sprints)  
- [x] Schedule and attend an orientation of the new feature  
  - [x] List endpoints or [questions about endpoints](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/teams/ebenefits/features/view-rated-disabilities/evss-tcdr)

## Design
### Research Plan
- [x] Establish process for user interviews ([great resource](https://docs.google.com/document/d/1d2PJ6saIhzbWneevUs4rc153LTcbGxN-IJ9cXT51g1A/edit#heading=h.mfojcojhlwfx))
  - [x] Create a Conversation Guide (sample [Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/research/discovery/discovery-conversation-guide.md))
  
### UX
- [x] Develop thumbnail map of feature
- [x] Develop wireframes
  - [x] Seek applicable feedback, obtain understanding from team
- [x] Develop mockups
  - [x] Seek applicable feedback, obtain understanding from team
  
### Review Process
- [x] **Internal**
  - [x] Review the [Web Brand Consolidation documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-gov-relaunch-2018/va-gov-strategy/the-new-va.gov-briefing-2019-07.pdf)
  - [x] Review the [VA.gov Design System](https://design.va.gov/)
  - [x] Team and DSVA: share mockups, discuss alternates/options in a team meeting
  - [x] Review the [Design QA](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/design/design-review-checklist.md) docuementation
- [x] **External**
  - [x] Review [Design Workflow](https://docs.google.com/document/d/1BtIHL5KRl9ln20FONWpBjQzTDveU_wyKqWCL5R-6MB8/edit?ts=5d9507d5#heading=h.bu00ebtvll88)
  - [x] Shawna (`@shawna` in Slack): Design presentation of mockups (might be in a weekly meeting)
  - [x] Iterate on Shawna's feedback
  - [x] Other Teams: Authenticated Experience, Global UX, etc
  - [x] VFS-platform-support
    - [x] Emily: Design
    - [x] Peggy: Content
    - [x] Mikki: IA
    - [x] Jennifer: Usability
    - [x] Trevor: 508
  - [x] Iterate on other team's feedback
- [x] **As soon as feasible and iteration is finished,** request a [Design QA Review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/working-with-platform-design-team.md)

### Content/IA  
_Share as soon as you have content - this is usually after mockups are created.  Get IA review after thumbnails (in case IA informs of a change, get Content review after mockups (provide as much final content to FE for implementation)_  
- [x] Discovery and reference the [VA.gov content style guide](https://design.va.gov/content-style-guide/)
- [x] Reference the [Content/IA best practices](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/content/content-review-process.md)
- [x] Reference the [Content/IA Messaging Dictionary](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/design-system/guidelines/error-handling/Dictionary.md)
- [x] Reference the [Error Handling Content Style Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/design-system/guidelines/error-handling/Content%20Style%20Guide.md)  
- [x] Engage with the Content/IA team as soon as feasible  
  - [x] Present text/verbiage that is beyond the boilerplate language   
  - [x] Outline links (hub and spoke), urls, navigation hierarchy, crosslinks/redirects, SEO   
  - [x] Discuss what parts of the site are templated
  - [x] Solicit feedback from Content/IA Team
  - [x] Confirm that wayfinding is appropriate
- [x] [Request IA Review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/working-with-ia.md) & [Request a Content Review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/content/content-review-process.md#how-to-request-content-review)
_These links/reviews may end up being consolidated, stay tuned._
- [x] Before launch, circle back with Content/IA about further impact and feedback  

### Usability
- [x] Create a [Research Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-plan-template.md)
  - [ ] Is the entry point established?
    - A gateway link has not yet been determined as a final location
    - There have been discusssions about linking back and forth with the Rated Disbalities Tool from the Disbailities Rating Calculator
- [x] 508 Compliance
  - [x] Review [eBenefits 508 Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/508-checklist-wip.md)
  - [x] Internal 508 Review
  - [ ] [Request 508 Audit](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-request-prelaunch-review.md)
  - [ ] Ensure the feature is tracked within the [508 Product Sheet](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-product-review-list.md)  _Done by Trevor_
- [ ] Conduct a usability study
  - [ ] Address any feedback from that study

## Development
_Do we need to merge the FE and BE tasks?_  
### General Engineering Tasks  
- [ ] Documentation for quickly addressing when things go wrong  
- [ ] Establish contacts for oncall support: who do we contact if the application is failing?  What kinds of failure modes are likely? 
 
### Backend Tasks  
- [x] Investigation of applicable services  
  - [x] Does the feature use the `vets-api` or `EVSS` service?
  - [x] Review `vets-api` endpoints or does an `api` exist, need to be built?
  - [x] Does EVSS need to be engaged? And how?
  - [x] Collaborate with Frontend on Error Handling
  - [x] Investigate  the common area for error types
  - [x] Define or reference a known resource
- [ ] For PRs: first review internally with BE or another engineer before the BE Team
  - [ ] `Once internally reviewed, share with the BE Review Team at VSP (team name?)`
  - [x] Ensure that feature flags are set appropriately to be toggled
- [x] Documentation and points of contact for any new backend dependencies - see Product Outline for contact info

### Frontend Tasks
- [x] Investigation
  - [x] What will be involved in using the `vets-api`service to pull and display data?
  - [x] List and define what the main components will be for the feature to function properly
  - [x] Collaborate with Backend on Error Handling
  - [x] Investigate  the common area for error types
  - [x] Define or reference a known resource
- [x] For PRs: first review internally with FE or another engineer before the FE Team
  - [x] Once internally reviewed, share with the FE Review Team at the VSP (team name?)
  - [x] Ensure that feature flags are set appropriately to be toggled
  - [x] Entrance pages (i.e. supporting static content) in place

## Review
### Error Handling
- [ ] After we understand how the data behaves, have a meeting to brainstorm about as many use cases as possible
  - [ ] Has each field been addressed for errors?
  - [ ] Has each component been addressed for errors?
- [ ] Address errors handling with [this guide](https://design.va.gov/content-style-guide/messaging-error-messages) in mind
  - Be mindful of others that are not planned.
Error handling might be iterative.
 
### Security/ATO - `ON HOLD until Andrea Hewitt reaches out`
- [ ] Establish who among VSP we should talk to about Security Reviews
  - [ ] What is the review process?  Same as QA?
- [ ] Review the [ATO Procedures](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/security/security-review-process.md)
- [ ] Request a [preliminary ATO review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/security/security-review-process.md)
- [ ] Request a [pre-launch ATO review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/security/security-review-process.md)

### QA
- [x] [Documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/quality-assurance) from platform [#3099](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3099)

### Testing
- [ ] Create a test plan from an overall engineering perspective  
  - [ ] Build, test, audit (508, content, security, load, CI/CD, passing on all browsers, etc) in a feedback loop  
  - [x] Code coverage requirements (unit tests)
- [x] Develop testing infrastructure, refer to established documentation  
- [ ] Define threshold or definition of high-severity bugs
- [ ] Document any high-severity bugs for future reference  
- [ ] Establish contacts for errors to be reported to
  - [ ] Errors get sent directly to the team
- [x] Establish steps to take to move feature into [staging](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/accessing-staging.md) or within 
- [ ] Tested in prod with back-of-house people and systems

## Analytics
- [x] Confirm that the new feature/product is stable and visible in staging.va.gov  
- [x] Engage with the Analytics Team about what is to be launched  
- [x] Review [KPI/metrics spreadsheet](https://docs.google.com/spreadsheets/d/1Zy_m5s6zrhmgKaUacYo2MLRmDjtJNhVKSeyeSeAtVec/edit#gid=1554481611)
- [x] EStablish baseline metrics for later analysis

## Support (Consider Deliverables and Artifacts)
- [ ] Does the Call Center have documentation?
  - [ ] Draft as needed
- [ ] Have they asked for anything else?
- [ ] Establish a point of contact for the Call Center 
- [ ] Ensure that these are noted and stored for easy access
  - [ ] Include contact information in case further discussion is required


## Pre-release Plan
- [ ] Call Center is prepared for launch with updated scripts/documentation as needed
- [ ] ~VA web comms team is aware of this launch and has accurate messaging~ _Not for RD_
- [ ] Product Outline is updated
- [ ] Downtime UX and error messaging documentation complete
- [ ] "Learn and Improve" plan written: KPI measurements, analytics reporting, next phase of features to build

## Release Plan
- [ ] Refer to in-depth [Release Plan Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

## Launch
- [ ] Define what is being tracked
- [ ] Define other last minute items
- [ ] Review the [Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)
- [ ] Go/No-go from each team member

## Post-Mortem
- [ ] List and define any issues that impeded the process
- [ ] Create post-launch coordination plan including calls with stakeholders and call center 
- [ ] Coordinate with Call Center to monitor calls 
- [ ] Ensure monitoring and resolve issues in 24 hours
- [ ] Collect and report metrics from Google Analytics
- [ ] Schedule regression testing 
