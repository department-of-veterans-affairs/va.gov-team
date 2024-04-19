# Access to MHV on VA.gov

## Summary

When the MHV-on-VA.gov landing page was created, we knew we needed to restrict access to veterans who might have health information at the VA from being seen at a facility, in addition to using feature flags to roll this page out to a percentage of users. Since the landing page was created while MHV tools were being built on VA.gov, the team wanted to make sure veterans could reach appropriate pages on VA.gov or the My HealtheVet national portal.

After looking at what data was available, the team determined that the MHV landing page should appear only to users who had a facility listed in their profile. Otherwise, the veteran would be redirected to the the My HealtheVet national portal.

Other tools, forms, etc. may have different criterion for showing those pages.

## Discussion: who needs to see their data in My HealtheVet

My HealtheVet needs to be visible to:

- people who previously received any type of healthcare (not even Veterans necessarily, could be anybody ever treated at a VA facility), examples:
  - i.e. someone gets in a car accident and the closest ER is the VA - they get sent there no matter if they're a Veteran or not
  - i.e. staff at the VA got a COVID vaccine in 2020 and now they have a medical record with the VA
  - i.e. a Veteran no longer has healthcare with the VA, but used to, so they have a historical record that we need to give them access to
- currently enrolled folks

### How do we achieve this?

In order to determine access to the MHV Landing Page, we look at a logged-in users's facility information for the presence of one or more facility entries, which means they were seen at a VA facility.


## Relevant Links

- [(feature) added restrictions about no facilities](https://github.com/department-of-veterans-affairs/vets-website/pull/23612)
- [Discussion of data around `vaPatient` and `CONTACTS.VA_BENEFITS` in va.gov-team/issues/78486](https://github.com/department-of-veterans-affairs/va.gov-team/issues/78486)
- [The `vaPatient` attribute on `/v0/user` API endpoint](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/models/user.rb#L321:L321)
- [The `hasHealthData` selector in the landing page code](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/mhv-landing-page/selectors/hasHealthData.js)
