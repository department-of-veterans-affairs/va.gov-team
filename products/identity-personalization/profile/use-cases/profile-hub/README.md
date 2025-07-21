# Profile hub use cases
**Last updated: July 2025**

- [User flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1753115099089/92e988a77435d7b4d90635dd97ed8ec54af5ee14?wid=50-1753115114097&outline=open)
- [Figma files](https://www.figma.com/design/21eaoKK107F3Nm1ofnMOO8/Profile---Hub-landing-page?node-id=0-1&t=7P9TvpnyVJLOryDX-1)
- Test Rail QA


## Current experience
- For all of these use cases, the user must be LOA3 (identity verified). If the user is not LOA3, the user will be directed to the Profile Account Security section. [See LOA1 account documentation.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)
- The profile hub is the landing page for profile and shows cards for every section of the profile.

 
## Common use cases
### User logs in with LOA1 account
- [User logs in with an LOA1 account](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)


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

### Errors

<details><summary>Backend system down</summary>

- **Use case:** Cannot connect to the back end.
- **Status code:** TBD
- **Format:** [Warning alert component](https://design.va.gov/components/alert/#warning-alert)
- [Link to designs](https://www.figma.com/design/21eaoKK107F3Nm1ofnMOO8/Profile---Hub-landing-page?node-id=445-19583&t=7P9TvpnyVJLOryDX-1)
- [Link to code]
- **Content:**

H2: This page isn't available right now

We’re sorry. Something went wrong on our end. Refresh this page or try again later.	

</details>
