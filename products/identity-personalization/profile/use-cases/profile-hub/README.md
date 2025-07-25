# Profile hub use cases
**Last updated: July 2025**

- [User flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1753115099089/92e988a77435d7b4d90635dd97ed8ec54af5ee14?wid=50-1753115114097&outline=open)
- [Figma files](https://www.figma.com/design/21eaoKK107F3Nm1ofnMOO8/Profile---Hub-landing-page?node-id=0-1&t=7P9TvpnyVJLOryDX-1)
- Test Rail QA



## Current experience
- The profile hub is the landing page for profile and shows cards for every section of the profile.
- For all of these use cases, the user must be LOA3 (identity verified). If the user is not LOA3, the user will be directed to the Profile Account Security section.


 
## Common use cases
### User logs in with LOA3 account
- **Use case:** If a LOA3 user navigates to profile they see a landing page with cards directing them to sections of the profile.
- **Status code:** 200
- **Format:** [Card component](https://design.va.gov/components/card)
- [Link to designs](https://www.figma.com/design/21eaoKK107F3Nm1ofnMOO8/Profile---Hub-landing-page?node-id=445-18429&t=7P9TvpnyVJLOryDX-1)
- [Link to code]
- **Content:** See designs



## Edge cases
### Validation
This feature has no validation use cases.


### Flags 
- [Address is marked as “bad” in VA Profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/use-cases/address-marked-as-bad.md)
- [User logs in with an LOA1 account](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)


### Errors
- [Backend system down](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/profile-shared-use-cases.md#system-errors)
