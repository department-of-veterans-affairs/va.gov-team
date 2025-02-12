# Profile discovery - Current profile information and usage is identified and documented

As far as the VA.gov website is concerned, the main profile lives at va.gov/profile, and there is an effort to merge profiles from MHV to VA.gov along with the other functionality that lives at va.gov/my-health


## Sources of DATA used on VA.gov profile
https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1685127588602/6e6cda80751d94e9fafb1c81aff63975fb68c3b9?invited=true&sender=uf8f348cdea7eda850a977534

**4 main upstream services that are used for the VA.gov profile**
- VA Profile - confusing because of the name, this is where the majority of information comes from for contact info and notif settings
- BGS - Benefit Gateway Service
- Lighthouse - https://developer.va.gov
- The [profile docs](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile) have this documented along with contact individuals for each service as it relates to the part of the profile that uses the services data.

_Vets-api_ consumes the above services and is what the frontend (vets-website) uses to display information. _Vets-api_ is also responsible for handling things like authentication, form submission, file upload, and other common VA.gov functionality. The api endpoints for vets-api are documented via the [va-digital-services-platform-docs swagger page](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/)

[Overview for the backend of the profile application](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/profile/profile_backend.md)

Each page also has it's data sources documented in the sensitive repo's backend docs:
- [Personal Info Backend Docs (sensitive)](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/profile/personal_information/backend_documentation.md)
- [Contact Info Backend Docs (sensitive)](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/profile/contact_information/backend_documentation.md)
- [Comp & Pen Direct Deposit (sensitive)](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/profile/direct_deposit/backend_direct_deposit_comp_and_pen.md)
- [Education Direct Deposit (sensitive)](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/profile/direct_deposit/backend_direct_deposit_education.md)
- [Notification Settings (sensitive)](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/products/identity-personalization/profile/notification_settings)
- [Account Security (sensitive)](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/profile/account_security/backend_documentation.md)
- Connected Apps (supported by Lighthouse)


### MHV to VA migration aka digital health modernization

Main va.gov-team docs:
https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov

Mural: 'MHV > VA.gov Profile' - lots of screenshots comparing the different profiles and migrating notes
https://app.mural.co/t/departmentofveteransaffairs9999/m/vsa8243/1645732777530/3b751dac638c58f4463823ac9476e4e25dc1240f?sender=uf8f348cdea7eda850a977534

- In case of emergency has been hooked up, but it is not editable on VA.gov, so the profile section of this board isn't quite up to date, as there is an additional page 'Personal health care contacts' that is live, which maps to the "In case of emergency" section of MHV as the read only view
- My Links is a feature that is not implemented on VA.gov, but it is just a link saving feature that is pretty minimal, but would be good to know if that feature could be coming in the future.

Next of Kin / Emergency Contact / Personal Healthcare Contacts

Initial notes on MHV migration to VA.gov profile
https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/Next%20of%20Kin-Emergency-Contact/overview-notes.md

Technical Discovery for NOK/EC
https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/engineering/ice-nok-technical-discovery.md##


## Existing UI Pattern for Maintaining Accurate Profile Data within form flows

As it relates to building patterns for maintaining accurate data on veterans, we should evaluate which pieces of information could come from profile on which forms and identify forms that are not using prefill or the Contact Info Array Data pseudo-pattern



### Contact Info Array Data - integrating profile directly into form flows
https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-create-the-contact-info-ar

The Contact Info Array Data in the forms system supports address (mailing), phone (home), and email inline editing that integrates the profile as the data sources for this information.

Could the other fields be used within forms as well in a similar fashion? Preferred name, gender identity, direct deposit, etc? How could this core info be more tightly integrated into the introduction of a form to make it more natural and explanatory that we are reviewing the profile information on hand and editing this info will reflect in your profile and could affect other things tied to the profile?

Example form flow diagram that includes the Contact Info Array Data functionality
526 Form Flow
https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1686768383603/3f4415dd2ddb71bbd104ebefd92a2c7b553ad792?invited=true&sender=uf8f348cdea7eda850a977534

When it comes to prefill vs the Contact Info Array Data solution, what does the user prefer, and could we give the user the option to opt out of updating the profile when submitting contact info for a specific form?

Previously there were other attempts at solutions besides the Contact Info Array Data solution, but [their shorcomings were significant](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-create-the-contact-info-ar#previousImplementations)

