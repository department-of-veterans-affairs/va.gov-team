# Access to and visibility of thing on MHV on VA.gov

## Summary

When the MHV-on-VA.gov landing page was created, we knew we needed to restrict access to veterans who might have health information at the VA from being seen at a facility, in addition to using feature flags to roll this page out to a percentage of users (or redirect them to the My HealtheVet national portal). Since the landing page was created while MHV tools were being built on VA.gov, the team wanted to make sure veterans could reach appropriate pages on VA.gov or the My HealtheVet national portal.

After looking at what data was available, the team determined that the MHV landing page should present different links depending on whether users had a facility listed in their profile. Links can point to My HealtheVet tools or to VA.gov tools based on feature toggles. The page itself requires a user be logged in, and may hide links if a user doesn't have a verified account or if they don't have a facility in their profile.

Users who log in with an account that isn't verified (higher than LOA1) see an `< IdentityNotVerified />` message. Users who are verified but don't have facility data see a `<NoHealthAlert />`.

Other tools, forms, etc. may have different criterion for showing those pages.

## Discussion: Who needs to see their data in My HealtheVet?

My HealtheVet needs to be visible to:

- people who previously received any type of healthcare (not even Veterans necessarily, could be anybody ever treated at a VA facility), examples:
  - i.e. someone gets in a car accident and the closest ER is the VA - they get sent there no matter if they're a Veteran or not
  - i.e. staff at the VA got a COVID vaccine in 2020 and now they have a medical record with the VA
  - i.e. a Veteran no longer has healthcare with the VA, but used to, so they have a historical record that we need to give them access to
- currently enrolled folks

### How do we achieve this?

In order to determine access to the MHV Landing Page, we look at a logged-in users's facility information for the presence of one or more facility entries, which means they were seen at a VA facility.

## Discussion: How do tools and forms determine visibility?

### 1010EZ and 1010EZR

The 1010 forms relate to applying for or renewing a veteran's health benefits. While we've established that people may be seen at a VA facility without having VA benefits (e.g. when the closest ER is the VA), many veterans won't have been seen at a facility until after they apply for and start receving health benefits.

The 1010EZR is used "if you already receive VA health care benefits, and you need to update your personal, insurance, or financial information." This form is relevant to a certain group of veterans, and so isn't relevant to non-veterans or veterans who don't have health benefits, for example. So a visitor attempting to visit the 1010EZR form online might need to be directed to a different form or page, dependening on who they are or what benefits they receive. Viewing/using the 1010EZR has a different set of uses cases than visiting My HealtheVet or My HealtheVet on VA.gov, and so use different data attributes to guide a veteran appropriately.


## Relevant Links

- [(feature) added restrictions about no facilities](https://github.com/department-of-veterans-affairs/vets-website/pull/23612)
- [Discussion of data around `vaPatient` and `CONTACTS.VA_BENEFITS` in va.gov-team/issues/78486](https://github.com/department-of-veterans-affairs/va.gov-team/issues/78486)
- [The `vaPatient` attribute on `/v0/user` API endpoint](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/models/user.rb#L321:L321)
- [The `hasHealthData` selector in the landing page code](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/mhv-landing-page/selectors/hasHealthData.js)
- [About VA Form 10-10EZR](https://www.va.gov/find-forms/about-form-10-10ezr/)
