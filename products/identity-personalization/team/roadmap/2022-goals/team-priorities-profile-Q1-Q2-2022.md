# Profile team priorities through Q1 - Q2 2022 (January - June) 

## Big projects

### [Update personal information section of the profile: Add LGBTQ data points](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/personal-information-revision/README.md)

We are integrating preferred name, pronouns, gender identity, and sexual orientation into the VA.gov profile as part of a request from VEO and the LGBTQ Health Services office. This effort will allow veterans to more accurately define themselves within the VA, and it will help mitigate issues around veterans showing up to health appointments and being addressed improperly.

**Targeted launch**: End of Q1 2022 (more likely will be early Q2 2022 due to VA Profile now supporting the backend)

### [Bad address indicator](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/bad-address-indicator/README.md)

Even with the addition of email and text communications at the VA, mail is still a primary form of communication for the organization. This makes it especially important that the VA has accurate and valid mailing addresses for all veterans. To further support accurate mailing addresses and reduce incidences of returned or unreceived mail, we would like to add a bad address indicator to the profile to let people know that they should check to make sure the VA has their most up-to-date address. This will work in tandem with the address validation functionality already supported in the VA.gov profile.

**Targeted launch**: Q2 2022

### Integrate military information through VA Profile

Currently, we integrate the military information in the profile through a service called eMIS. VA Profile now supports military information, and I believe eMIS is going away. So, we need to hook up the military information section of our profile to the relevant VA Profile endpoints. Samara is still determing the scope of this project and whether it will involve design/frontend or solely be a backend effort, which will certainly affect timeline.

**Targeted launch**: Q2 2022, but ok if it goes into Q3 just as long as it is launched and complete before **September 30, 2022**.

## Small improvements

### Remove "Gender" field from the profile

Currently, we have a read-only "Gender" field in the profile, which is more accurately trying to communicate sex assigned at birth. We have determined through our own research and through talking to the LGBTQ health services team that this field is not only not necessary to display in our profile, but it may also be triggering to folks within the transgender community. Therefore, we are no longer going to support this field.

**Targeted launch**: Q1 2022

### Remove the fax number field from the profile

The fax number field is barely used, and is not a meaningful source of communication with the VA. The VA Profile team is finally ready to retire this field on the backend, which means we can retire it on the frontend. We'll work with them in the coming weeks to get this done.

**Targeted launch**: Q1 2022 

### Allow people to update their mailing address when they save their home address

Some people do not realize that they also need to change their mailing address in the profile if they update their home address. This is especially important since all VA correspondence is sent to the mailing address, in addition to any prescriptions and medical supplies. This update will allow people to make changes to their mailing addresses while editing their home addresses so fewer folks are missing important mail or packages.

**Targeted launch**: Q1 2022

## Also coming up

These are things we intend to do, but depend on other teams to have functionality ready for us or to be ready to collaborate with us.

- **Research effort**: How to reconcile MHV and VA.gov profiles for eventual move of MHV into VA.gov
- **Notification preference**s: Default send indicator. This will allow us to show that someone receives a certain notification in the VA.gov profile because they have been opted into it by default by the business line even if they have never come to the profile and explicitly opted in themselves. VA Profile says this will be in their production environment in mid-March, so closer to that timeframe, we can start talking about how this might affect the current notification preference experience.
