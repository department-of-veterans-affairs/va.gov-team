# Checklist: WIP
The steps here are meant to provide a framework to build upon for each feature that gets migrated out of eBenefits and into VA.gov.  They will not all be applicable everytime but they will at least be accounted for as we move forward.  For example, we can assume that onboarding tasks do not need to be repeated for each launch.

**Remember: the more we are able to cover as we transform, the easier it will be for other teams**

## Design
- [ ] Review the [Web Brand Consolidation documentation](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/VA.gov%20Relaunch%202018/new-vagov-strategy/The-new-VA.gov-briefing-2019-07.pdf)

### Research Plan
- [ ] Establish process for user interviews
  - [ ] Create a Conversation Guide (sample [Conversation Guide](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Profile/Direct%20Deposit/Discovery%20%26%20Research/Research/Usability%20testing/Conversation%20Guide.md))
### UX
_The hypothesis of what we have researched_
- [ ] Discovery
- [ ] Investigation
- [ ] Develop wireframes
  - [ ] Seek applicable feedback
- [ ] Develop mockups
  - [ ] Seek applicable feedback
### Content/IA  
_Share as soon as you have content - this is usually after mockups are created_
- [ ] Discovery and reference the VA.gov content style guide
- [ ] Reference the [Content/IA best practices](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/content/content-review-process.md)
- [ ] Reference the [Content/IA Messaging Dictionary](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Platform/Design%20System/Guidelines/Error%20handling/Dictionary.md)
- [ ] Engage with the Content/IA team as soon as feasible  
  - [ ] Present text/verbiage that is beyond the boilerplate language   
  - [ ] Outline links (hub and spoke), urls, navigation heirarchy, crosslinks/redirects, SEO   
  - [ ] Discuss what parts of the site are templated
  - [ ] Solicit feedback from Content/IA Team
  - [ ] Confirm that wayfinding is approriate
- [ ] [Request IA Review](https://github.com/department-of-veterans-affairs/va.gov-vfs-teams/blob/master/Request-Reviews/request-ia-review.md) & [Request a Content Review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/content/content-review-process.md#how-to-request-content-review)
_These links/reviews may end up being consolidated, stay tuned._
### Usability
- [ ] Create a [test plan](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Profile/Direct%20Deposit/Discovery%20&%20Research/Research/Usability%20testing/Research%20Plan.md)
  - [ ] Is the entry point established?
  - [ ] Is there a better entry point?
- [ ] 508 Compliance
  - [ ] Review [eBenefits 508 Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/508-checklist-wip.md)
  - [ ] [Request 508 Audit](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-request-prelaunch-review.md)
  - [ ] Ensure the feature is tracked within the [508 Product Sheet](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-product-review-list.md)

## Development
### Backend Tasks
- [ ] Investigation of applicable services
  - [ ] Does the feature use the `vets-api` service?
  - [ ] Review `vets-api` endpoints or does an `api` exist, need to be built?
  - [ ] Does EVSS need to be engaged? And how?
  - [ ] Collaborate with Frontend on Error Handling
  - [ ] Investigate  the common area for error types
  - [ ] Define or reference a known resource
### Frontend Tasks
- [ ] Investigation
  - [ ] What will be involved in using the `vets-api`service to pull and display data?
  - [ ] List and define what the main components will be for the feature to function properly
  - [ ] Collaborate with Backend on Error Handling
  - [ ] Investigate  the common area for error types
  - [ ] Define or reference a known resource
### Security
- [ ] Establish who among VSP we should talk to about Security Reviews
  - [ ] What is the review process?
### Testing
- [ ] Create a test plan from an overall engineering perspective
  - [ ] Build, test, audits (508, content, security, etc) in a feedback loop
- [ ] Develop testing infrastructure, refer to established documentation

## Analytics
- [ ] Confirm that the new feature/product is stable and visible in staging.va.gov
- [ ] Engage with the Analytics Team about what is to be launched 

## Support
- [ ] Does the Call Center have documentation?
- [ ] Have they asked for anything else?
- [ ] What else should we say about 

## Release Plan
- [ ] _Notes are on my other machine_

## Consider Deliverables and Artifacts

## Launch
- [ ] Go/No-go from each team member
- [ ] Define what is being tracked
- [ ] Define other last minute items

## Post-Mortem
- [ ] List and define any issues that impeded the process
- [ ] Security, usability, 
