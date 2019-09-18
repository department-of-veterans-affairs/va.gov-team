# Checklist
The steps here are meant to provide a framework to build upon for each feature that gets migrated out of eBenefits and into VA.gov.  They will not all be applicable everytime but they will at least be accounted for as we move forward.  For example, we can assume that onboarding tasks do not need to be repeated for each launch.

**Remember: the more we are able to cover as we transform, the easier it will be for other teams**

## Design
- [ ] Review the [Web Brand Consolidation documentation](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/VA.gov%20Relaunch%202018/new-vagov-strategy/The-new-VA.gov-briefing-2019-07.pdf)

### UX
 - [ ] Discovery
 - [ ] Investigation
 - [ ] Develop wireframes
   - [ ] Seek applicable feedback
 - [ ] Develop mockups
   - [ ] Seek applicable feedback
### Usability
- [ ] Create a [test plan](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Profile/Direct%20Deposit/Discovery%20&%20Research/Research/Usability%20testing/Research%20Plan.md)
  - [ ] Is the entry point established?
  - [ ] Is there a better entry point?
- [ ] 508 Compliance
  - [ ] Review [eBenefits 508 Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/508-checklist-wip.md)
  - [ ] [Request 508 Audit](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-request-prelaunch-review.md)
### Research Plan
- [ ] Establish process for user interviews
  - [ ] Create a Conversation Guide (sample [Conversation Guide](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Profile/Direct%20Deposit/Discovery%20%26%20Research/Research/Usability%20testing/Conversation%20Guide.md)
### Content/IA  
- [ ] Engage with the Content/IA team as soon as feasible  
  - [ ] Present text/verbiage that is beyond the boilerplate language   
  - [ ] Outline links, urls, navigation heirarchy, crosslinks/redirects, SEO   
  - [ ] Discuss what parts of the site are templated
  - [ ] Do they have an opinion on what we are envisioning?
  - [ ] present some metrics that speak to wayfinding in VA.gov and gather their reflections
- [ ] [Request Review](https://github.com/department-of-veterans-affairs/va.gov-vfs-teams/blob/master/Request-Reviews/request-ia-review.md)  

## Development
### Security
- [ ] Establish who among VSP we should talk to about Security Reviews
### Reliability
- [ ] Develop testing infrastructure, refer to established documentation
### Error Handling
- [ ] Investigate  the common area for error types
- [ ] Define or reference a known resource
### Backend Tasks
 - [ ] Discovery
   - [ ] Review `vets-api` endpoints
 - [ ] Investigation of applicable services
   - [ ] Does the feature use the `vets-api` service?
### Frontend Tasks
 - [ ] Discovery
 - [ ] Investigation
   - [ ] What will be involved in using the `vets-api`service to pull and display data?
   - [ ] List and define what the main components will be for the feature to function properly
## Analytics
- [ ] Confirm that the new feature/product is stable and visible in staging.va.gov
- [ ] Engage with the Analytics Team about what is to be launched 

## Support
- [ ] Does the Call Center have documentation?
- [ ] Have they asked for anything else?
- [ ] What else should we say about 

## Release Plan
- [ ] _Notes are on my other machine_

## Launch
- [ ] Go/No-go from each team member
- [ ] Define what is being tracked
- [ ] Define other last minute items

## Post-Mortem
- [ ] List and defien any issues that impeded the process
