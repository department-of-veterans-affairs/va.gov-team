# Access to MHV on VA.gov

Created by: Daniel Cloud

## Summary

When the MHV-on-VA.gov landing page was created, we knew we needed to restrict access to veterans who might have health information at the VA from being seen at a facility, in addition to using feature flags to roll this page out to a percentage of users. Since the landing page was created while MHV tools were being built on VA.gov, the team wanted to make sure veterans could reach appropriate pages on VA.gov or the My HealtheVet national portal.

After looking at what data was available, the team determined that the MHV landing page should appear only to users who had a facility listed in their profile. Otherwise, the veteran would be redirected to the the My HealtheVet national portal.



## Relevant Links

- https://github.com/department-of-veterans-affairs/vets-website/pull/23612
- https://github.com/department-of-veterans-affairs/va.gov-team/issues/78486
