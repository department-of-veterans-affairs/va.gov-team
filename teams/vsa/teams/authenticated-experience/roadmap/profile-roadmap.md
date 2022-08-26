# VA.gov profile roadmap

**Updated August 26, 2022**

## Current projects & enhancements

|Project|Status|
|----|----|
|[Bad address indicator](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/bad-address-indicator/README.md)| QA|
|Forms system updates | FE implementation|
|Notification preferences: Integration MHV prefs| Planning |
|Documentation updates| Ongoing|
|Accessibility audit| Planning|


### Projected timelines for current projects & enhancements

|Project| Q1 2022|Q2 2022|Q3 2022|Q4 2022|
|----|----|----|----|----|
|**Bad address indicator** | Discover, design, research, FE build | FE build, BE build | Pre-launch, launch |- |
|**Integrate military info through VA Profile**| - | Update integration | Launch if not already done |- |
|**Forms system updates**|-|-| FE implementation | FE implementation continues, if needed|
|**Notification preferences: Integration MHV prefs**| - | - | Planning | Work TBD |
|**Notification preferences: 1095B**| - | - | Planning; design; Testing; Build | QA, Pre-launch, Launch |
|**Documentation updates**| - | Direct deposit docs | Docs for all other profile sections | - |
|**Accessibility audit and updates**| - | - | Complete audit and determine next steps | Ongoing work |

## Completed projects & enhancements

|Project or enhancement|Launch/Completion date|
|----|----|
|[Re-integrate military information through VA Profile](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/military-information/vaprofile-integration#readme) |August 2022|
|[Modal that asks if you want to update your mailing address when you update your home address](https://github.com/department-of-veterans-affairs/va.gov-team/issues/33732)| July 2022|
|[Ability to view and update preferred name and gender identity in the VA.gov profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/personal-information-revision/README.md)| June 2022|
|[MHV Profile research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/mhv-profile-research#readme)|Presented to stakeholders June 2022|
|[Remove conditional logic to show direct deposit section only to users who receive payments](https://github.com/department-of-veterans-affairs/va.gov-team/issues/40722)| June 2022|
|[Remove requirement for international postal code](https://github.com/department-of-veterans-affairs/va.gov-team/issues/39775)| April 2022 |
|[Remove Fax number field from the profile](https://github.com/department-of-veterans-affairs/va.gov-team/issues/35975) | February 2022 |
|[Remove "Gender" (aka sex assigned at birth) from the profile](https://github.com/department-of-veterans-affairs/va.gov-team/issues/36009) | February 2022 |
[VA Profile: Notification preferences](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/README.md) | Launched November 2021 |
|[Updated layout and button styles for better screen reader experience](https://github.com/department-of-veterans-affairs/va.gov-team/issues/23665) | Launched July 2021 | 
|[Add confirmation email for contact info updates](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/8383) | Launched June 2021 |
|[Add contact info FAQ](https://github.com/department-of-veterans-affairs/va.gov-team/issues/23376)| Launched April 2021|
|[Direct deposit for edu](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/edu-direct-deposit/README.md) | Launch completed April 2021 |
|[Profile 2.0](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account) | Launch completed October 2020|
|[Address validation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-validation/product-outline.md) | Launch completed March 2020||
|[Add APO/FPO/DPO options for military base addresses](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3209)| January 2020|
|[Direct deposit for comp & pen](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/compensation-pension-project-outline.md) | Launch completed Jan 2020|
|[VA Profile (formerly Vet360) initial integration](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/profile-V1) | Launch completed Summer 2018 |
|[Dashboard/Profile/Account MVPs](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/my-va-mvp) | Launch completed Spring 2018 |

# Backlog & feature requests

### General profile requests & updates

|Project|Initiating team|Date of request| Status/Notes|
|----|----|----|----|
|Fiduciary indicator | VA Profile | N/A | VA Profile has mentioned they are in discovery with adding a fiduciary indicator that we could consume, but they do not have any dates yet as to when they plan to implement this |
|Add dependent info to the profile | Auth exp/eBenefits migration team | January 2021 | [Slack convo](https://dsva.slack.com/archives/CLY6Q69RV/p1611687078020800)|
|Virtual hearing opt-in| Caseflow/Lighthouse | September 2020 | Caseflow/Lighthouse needs to do some research to determine how virtual hearing opt-in might work before coming back to VA.gov. Currently, there is no evidence that the profile is the right place for people to indicate they are willing to do a virtual appeals hearing.|
| Design exploration: Should we move editing from in-line forms to forms on a different page? | Auth exp | Fall 2021 | [Additional context](https://github.com/department-of-veterans-affairs/va.gov-team/issues/31237#issuecomment-947856877)|
|PACT Act|Chante|7/20/22|Chante let me know that if the PACT Act is passed, it may require updates to both the Profile and My VA. Actual work is TBD.|

### Personal information requests

### Contact information requests

|Project|Initiating team|Date of request| Status/Notes|
|----|----|----|----|
| Integrate emergency contact, next of kin, and insurance information into the VA.gov profile | Ming/Caregivers/Check-in experience| 5.4.21 | Ming reached out about adding this info into the profile as part of the check-in experience work, but we agreed that it probably doesn't need to reflect in the profile for their MVP. However it likely should show and be updatable from there at some point in time.|
|Remove extension for non-work phone numbers | VA Profile |September 2020| We had some initial conversations about this with VA Profile, but it still hasn't gone anywhere|
|ZIP+4 – Updating zip code in the VA.gov profile to elevate the additional 4 digits | N/A | September 2020 | Steve K mentioned that a stakeholder had asked about this, but there's been no formal request. This already supported by VA Profile. |

### Military information requests

|Project|Initiating team|Date of request| Status/Notes|
|----|----|----|----|
|Link to DD214 info from Military information section of the profile| Auth exp| 2020| "DD214" is a top search term from the profile, indicating people expect to find this information here. [Ticket](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/11053) |
|Enhanced statement of service | George Chewning | Summer 2021 | George and Samara agree that we need more research to determine what updates to military information on VA.gov would be the most useful. We are currently trying to determine how to get funding for this work. Potential research questions: (1) How do people use/when do people need their DD214 when interacting with the VA? (2) Are there certain pieces of information from the DD214 it would be especially helpful to reflect on VA.gov that we don't support now (eg. discharge status)? (3) What military data would it be helpful to have on VA.gov to support predictive benefit eligibility?|

### Direct deposit requests

|Project|Initiating team|Date of request| Status/Notes|
|----|----|----|----|


### Notification preferences requests

|Project|Initiating team|Date of request| Status/Notes|
|----|----|----|----|
|Add default opt-in functionality | VA Profile | January 2022 | We need functionality that tells us if a person is receiving a notification by default without having explicitly opted in themselves so we can reflect this in the profile. This is currently being worked on by VA Profile.|
|Add notification preferences currently in eBenefits| Melissa Rebstock|2.11.22| Melissa Rebstock said there are notification preferences currently managed in eBenefits that need to move over to VA.gov. I explained that we need to first get VA Profile and VANotify on board before making any changes in VA.gov, so that process should start soon with a launch date of no later than Oct 2022.|
|Add notification preferences from MHV| MHV/VA.gov | June 2022 | We need to do this as a part of the health apartment migration.|
|504 compliance| Human Capital Management via Jim Betz| July 2022 | HCM wants to work in partnership with VA.gov and VA Profile to provide options for 504 compliant communication options for veterans with visual impairment.|
