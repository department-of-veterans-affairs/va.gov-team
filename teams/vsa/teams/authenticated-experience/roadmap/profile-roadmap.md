# VA.gov profile roadmap

**Updated October 1, 2021**

## Current projects & enhancements

|Project|Status|
|----|----|
| [VA Profile: Notification preferences](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/README.md) | QA & Pre-launch tasks |
|Add SIGI, preferred name & pronouns, and sexual orientation | Planning and technical discovery |
|Enhanced statement of service | Planning |

### Projected timelines for current projects & enhancements

|Project|Q1 2021|Q2 2021|Q3 2021|Q4 2021|Q1 2022|
|----|----|----|----|----|----|
|**VA Profile: Notification preferences**| Initial BE integration; begin design discussions | Design; testing; FE build; QA | Pre-launch/launch | - |
|**Add SIGI, preferred name & pronouns, and sexual orientation** | - | - | Planning | Design, research, build, launch | TBD |
|**Enhanced statement of service** |- | - | - | Planning and TBD | TBD | 

## Completed projects & enhancements

|Project or enhancement|Status|
|----|----|
|[Updated layout and button styles for better screen reader experience](https://github.com/department-of-veterans-affairs/va.gov-team/issues/23665) | Launched July 2021 | 
|[Add contact info FAQ](https://github.com/department-of-veterans-affairs/va.gov-team/issues/23376)| Launched April 2021|
|[Direct deposit for edu](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/edu-direct-deposit/README.md) | Launch completed April 2021 |
|[Profile 2.0](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account) | Launch completed October 2020|
|[Address validation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-validation/product-outline.md) | Launch completed March 2020||
|[Direct deposit for comp & pen](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/README.md) | Launch completed Jan 2020|
|[VA Profile (formerly Vet360) initial integration](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/profile-V1) | Launch completed Summer 2018 |
|[Dashboard/Profile/Account MVPs](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/my-va-mvp) | Launch completed Spring 2018 |

## Potential future projects & feature requests from other teams

### Profile & identity 

#### Higher priority

These are considered high priority because other teams are actively planning development and the VA.gov profile is a dependency.

|Project|Initiating team|Date of request| Status/Notes|
|----|----|----|----|
|Enhanced statement of service | George Chewning | Summer 2021 | This should kickoff with the new profile team in Fall 2021 |
|Integrate MHV profile data points into VA.gov profile | MHV | 2.10.21 | MHV would like to point all of their users to VA.gov instead of maintaining their own profile. Active converstions with VA.gov and VA Profile are beginning Feb 2021. |

#### Easy enhancements we could knock out when we have time 

|Project|Initiating team|Date of request| Status/Notes|
|----|----|----|----|
|Add email confirmation for address updates |Auth experience | 2020 | This would be added for security reasons since fraudsters may try to change people's addresses as part of hacking direct deposit info. [Ticket](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/8383)|
|Link to DD214 info from Military information section of the profile| Auth exp| 2020| "DD214" is a top search term from the profile, indicating people expect to find this information here. [Ticket](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/11053) |

#### Additional projects and requests

|Project|Initiating team|Date of request| Status/Notes|
|----|----|----|----|
|Bad address functionality| Auth. exp. | N/A| This feature is available to us via VA Profile, but we haven't had a chance to integrate it yet. Will be easier to implement either after logged-in homepage redesign or as part of a notification center MVP |
|Integrate "Military information" section of the profile through VA Profile backend| VA Profile | September 2020 | Update from 4.30.21 meeting — Military data — VA Profile is still working on this, but nothing ready for us to work with yet. Working on roadmap for this. Erin or Rebecca could provide further information. Integrating service periods will be considered for their next PI planning (starting mid May 2021).|
|Virtual hearing opt-in| Caseflow/Lighthouse | September 2020 | Caseflow/Lighthouse needs to do some research to determine who virtual hearing opt-in might work before coming back to VA.gov|
|Remove extension for non-work phone numbers | VA Profile |September 2020| We had some initial conversations about this with VA Profile, but it still hasn't gone anywhere|
|ZIP+4 – Updating zip code in the VA.gov profile to elevate the additional 4 digits | N/A | September 2020 | Steve K mentioned that a stakeholder had asked about this, but there's been no formal request. This already supported by VA Profile. |
|Fiduciary indicator | VA Profile | N/A | VA Profile has mentioned they are in discovery with adding a fiduciary indicator that we could consume, but they do not have any dates yet as to when they plan to implement this |
|Add dependent info to the profile | Auth exp/eBenefits migration team | January 2021 | [Slack convo](https://dsva.slack.com/archives/CLY6Q69RV/p1611687078020800)|
|Remove Fax number from VA.gov profile | VA Profile | 2.19.21 | VA Profile has been investigating this issue for a while and said "Fax numbers are a very small portion of the phone numbers we have in VA Profile (less than 1%) and we have most of them because of VA.gov... I’ve done extensive research, and fax is just not used by VA to fax veterans. I actually got a great quote from one of our partners “In my 25 years with VA we have never faxed a veteran” and we have support from our business leaders in removal." |
| Integrate emergency contact, next of kin, and insurance information into the VA.gov profile | Ming/Caregivers/Check-in experience| 5.4.21 | Ming reached out about adding this info into the profile as part of the check-in experience work, but we agreed that it probably doesn't need to reflect in the profile for their MVP. However it likely should show and be updatable from there at some point in time.|

