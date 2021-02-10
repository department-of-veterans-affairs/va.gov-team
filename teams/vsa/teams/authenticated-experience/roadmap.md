# Authenticated experience roadmap

**Updated February 2021**

## Current projects

|Project|Status|
|----|----|
|[My VA redesign](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/logged-in-homepage/2.0-redesign/README.md) | Design; User testing|
|[Direct deposit for edu](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/edu-direct-deposit/README.md) | Pre-launch VSP reviews |
|[Preferred facility for VA.gov profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/preferred-facility/README.md) | Backend implementation complete; On hold until we have an available designer |
| [VA Profile: Notification preferences](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/README.md) | Backend implementation |

## Completed projects

|Project|Status|
|----|----|
|[Profile 2.0](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account) | Launch completed October 2020|
|[Address validation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-validation/product-outline.md) | Launch completed March 2020||
|[Direct deposit for comp & pen](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/README.md) | Launch completed Jan 2020|
|[Duplicate health care application indicator](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/product/181023hcachanges.md) | Launch completed May 2019 |
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
|**My VA redesign**| Start technical discovery; start design | Design | Finish design; user testing; FE build | QA; pre-launch; launch | — | — |
|**Direct deposit for edu**| Begin discovery | Continue discovery; design; build | QA; pre-launch; launch| — | — | — |
|**Preferred facility for VA.gov profile**| — | Discovery; BE implementation | Design; User testing; FE build| QA; launch | — | — |
|**VA Profile: Notification preferences**| — | Preliminary discussions | Initial BE integration; begin design discussions | Design; testing; FE build; QA | Pre-launch/launch | ? |
|**My VA redesign enhancements**| — | — | — | — | Start discovery on enhancements (View Payment History; Debt Letters) | — |

## Potential future projects & feature requests from other teams

### Profile & identity 

#### Higher priority

These are considered high priority for one of two reasons: (1) because other teams are actively planning development and the VA.gov profile is a dependency, or (2) security reasons.

|Project|Initiating team|Date of request| Status/Notes|
|----|----|----|----|
|Add email confirmation for address updates |Auth experience | 2020 | This would be added for security reasons since fraudsters may try to change people's addresses as part of hacking direct deposit info|
|Updates re: user roles/permissions/delegation| Identity team | N/A - no formal request yet | There may be necessary profile updates as a result of adding user roles/permissions/delegation, but nothing concrete has been defined yet |
|Integrate MHV profile data points into VA.gov profile | MHV | 2.10.21 | MHV would like to point all of their users to VA.gov instead of maintaining their own profile. Active converstions with VA.gov and VA Profile are beginning Feb 2021. |

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

### My VA, benefit updates, & benefit experience

|Project|Initiating team|Date of request| Status/Notes|
|----|----|----|----|
|[Logged-in navigation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/navigation-ia)| Auth. exp. | N/A| Revisit after logged-in homepage redesign|
|Notification center| Auth. exp. | N/A| Revisit after logged-in homepage redesign|
|My VA: Post-launch V1 updates and enhancements | Auth exp. | N/A | [List of potential updates](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/product/v1-post-launch-improvements.md)|
|How do we communicate health care application updates?| Auth exp | N/A | This would be an extension of the [duplicate health care application status](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/product/181023hcachanges.md) work. On the old My VA, we showed people's health care application status. For reasons, we removed this from My VA 2.0, though the most important part of the project/info still lives in the health care application itself. However, this would be GREAT information to email to people and might be something the HCA team could work on with VANotify. Idk that auth experience would do this work, but tracking it here so I don't forget.|
|Updates re: user roles/permissions/delegation| Identity team | N/A - no formal request yet | There may be necessary My VA updates as a result of adding user roles/permissions/delegation, but nothing concrete has been defined yet |
