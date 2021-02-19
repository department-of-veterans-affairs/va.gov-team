# VA.gov profile roadmap

**Updated February 2021**

## Current projects

|Project|Status|
|----|----|
|[Direct deposit for edu](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/edu-direct-deposit/README.md) | Pre-launch VSP reviews |
|[Preferred facility for VA.gov profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/preferred-facility/README.md) | Backend implementation complete; On hold until we have an available designer |
| [VA Profile: Notification preferences](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/README.md) | Backend implementation |

## Completed projects

|Project|Status|
|----|----|
|[Profile 2.0](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account) | Launch completed October 2020|
|[Address validation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-validation/product-outline.md) | Launch completed March 2020||
|[Direct deposit for comp & pen](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/README.md) | Launch completed Jan 2020|
|[VA Profile (formerly Vet360) initial integration](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/profile-V1) | Launch completed Summer 2018 |
|[Dashboard/Profile/Account MVPs](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/my-va-mvp) | Launch completed Spring 2018 |

## Roadmap

### Goals

The authenticated experience on Vets.gov originated in early 2018. Since we transitioned to VA.gov in late 2018, we  have  left this experience largely untouched, instead focusing on other feature development/enhancements. 

This has left us in a position where we don't have much of an authenticated experience, especially compared to the robustness of the unauthenticated experience. Our logged in experience doesn't meet user needs and expections, and it has left us without a way to guide logged-in users to tools and task. 

It is because of this that we are going to dedicate all of 2020, and as much of 2021 as we need, to revisiting the logged-in experience at a high level. We will revisit the key logged-in pages — the logged-in homepage/dashboard and the user profile — explore a logged-in navigation, and finally establish a better system for on-site notifications (notification center). Our goal is to create the foundational elements we need to develop the logged-in experience over time for veterans and their larger communities (families, caregivers, VSOs, etc).

### Projected timelines for current projects

|Project|Q3 2020|Q4 2020|Q1 2021|Q2 2021|Q3 2021|Q4 2021|
|----|----|----|----|----|----|----|
|**Direct deposit for edu**| Begin discovery | Continue discovery; design; build | QA; pre-launch; launch| — | — | — |
|**Preferred facility for VA.gov profile**| — | Discovery; BE implementation | On hold due to resourcing | Design; testing; FE build; QA | Pre-launch; launch | — |
|**VA Profile: Notification preferences**| — | Preliminary discussions | Initial BE integration; begin design discussions | Design; testing; FE build; QA | Pre-launch/launch | ? |

## Potential future projects & feature requests from other teams

### Profile & identity 

#### Higher priority

These are considered high priority because other teams are actively planning development and the VA.gov profile is a dependency.

|Project|Initiating team|Date of request| Status/Notes|
|----|----|----|----|
|Updates re: user roles/permissions/delegation| Identity team | N/A - no formal request yet | There may be necessary profile updates as a result of adding user roles/permissions/delegation, but nothing concrete has been defined yet |
|Integrate MHV profile data points into VA.gov profile | MHV | 2.10.21 | MHV would like to point all of their users to VA.gov instead of maintaining their own profile. Active converstions with VA.gov and VA Profile are beginning Feb 2021. |
|Remove Fax number from VA.gov profile | VA Profile | 2.19.21 | VA Profile has been investigating this issue for a while and said "Fax numbers are a very small portion of the phone numbers we have in VA Profile (less than 1%) and we have most of them because of VA.gov... I’ve done extensive research, and fax is just not used by VA to fax veterans. I actually got a great quote from one of our partners “In my 25 years with VA we have never faxed a veteran” and we have support from our business leaders in removal." |

#### Easy enhancements we could knock out when we have time 


|Project|Initiating team|Date of request| Status/Notes|
|----|----|----|----|
|Add email confirmation for address updates |Auth experience | 2020 | This would be added for security reasons since fraudsters may try to change people's addresses as part of hacking direct deposit info|
|Add contact info FAQ| Auth exp | 2.19.21 | This would be a really easy update we should have and could knock out quickly. [Ticket here](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/20221)|


#### Additional projects and requests

|Project|Initiating team|Date of request| Status/Notes|
|----|----|----|----|
|Bad address functionality| Auth. exp. | N/A| This feature is available to us via VA Profile, but we haven't had a chance to integrate it yet. Will be easier to implement either after logged-in homepage redesign or as part of a notification center MVP |
|Integrate "Military information" section of the profile through VA Profile backend| VA Profile | September 2020 | VA Profile is still working on their MVP, so this is not yet ready for us to integrate with|
|Virtual hearing opt-in| Caseflow/Lighthouse | September 2020 | Caseflow/Lighthouse needs to do some research to determine who virtual hearing opt-in might work before coming back to VA.gov|
|ZIP+4 – Updating zip code in the VA.gov profile to elevate the additional 4 digits | N/A | September 2020 | Steve K mentioned that a stakeholder had asked about this, but there's been no formal request. This already supported by VA Profile. |
|Fiduciary indicator | VA Profile | N/A | VA Profile has mentioned they are in discovery with adding a fiduciary indicator that we could consume, but they do not have any dates yet as to when they plan to implement this |
|Prescription notifications | VA Profile/VETText | November 2020 | In our biweekly VA Profile meeting, Paras Shah mentioned that the notifications team is going to be working to implement prescription notifications. The MVP will be out in January, which will not need anything from the VA.gov profile. However, the next version after that will likely need some sort of notification settings that could be managed from the profile|
|Add dependent info to the profile | Auth exp/eBenefits migration team | January 2021 | [Slack convo](https://dsva.slack.com/archives/CLY6Q69RV/p1611687078020800)|
|Self-identified gender indicator (SIGI) | MHV | 2.8.21 | MHV would like us to add the SIGI indicator to our profile so they can point their users to us to update this information. The SIGI indicator should live in MPI, so we would need to be able to read/write back to MPI |
