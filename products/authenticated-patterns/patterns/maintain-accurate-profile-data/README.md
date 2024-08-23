## Background

As a Veteran, I want to easily edit my profile, so I can keep my profile up to date.

There are several different 'profiles' users can edit across the various VA platforms and products, with the main profile found at va.gov/profile. We aim to conduct research into these, document the gaps between them and propose a path to unification and consistency. For example, there exists an 'Emergency Contact' section within the profile on one platform, but this data is not stored in other VA profiles. 

During our research into the Prefill Form Data pattern, we discovered that users may find outdated profile data that has been prefilled and want to correct it, so as part of this pattern we will aim to provide an easy way to update that profile data when completing a prefilled form. 

## Hypothesis
This pattern will tie in closely with the prefill form pattern and knowing where and how to update out of date information when forms are prefilled. We believe that creating improved personal profile maintenance interfaces will:
- Improve and maintain data quality within user profiles
- Promote consistency in how profile data is updated across VA platforms
- Reduce cognitive load and friction when updating their profile data


## Discovery

During our [discovery](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/engineering/%2337-discover-current-profile-patterns-and-data.md) we documented the current profile fields, where they originate, if they are editable and other relevant information.

| Field                                               | Origin            | Editable | Notes                                                             |
| --------------------------------------------------- | ----------------- | -------- | ----------------------------------------------------------------- |
| contact email address                               | VA Profile        | true     |                                                                   |
| preferred name                                      | VA Profile        | true     |                                                                   |
| gender                                              | VA Profile        | true     |                                                                   |
| mailing address                                     | VA Profile        | true     |                                                                   |
| home address                                        | VA Profile        | true     |                                                                   |
| home phone                                          | VA Profile        | true     |                                                                   |
| work phone                                          | VA Profile        | true     |                                                                   |
| mobile phone                                        | VA Profile        | true     |                                                                   |
| direct deposit edu, cnp, and vye?                   | Lighthouse        | true     | multiple systems deal with direct deposit info                    |
| notification preferences                            | VA Profile        | true     | a set of fields for toggling email and text notifs                |
| connected apps                                      | VA Profile?       | true     | currently not functioning correctly, not managed by auth exp team |
| legal name                                          | VA Profile        | false    |                                                                   |
| combined disability rating                          | VA Profile        | false    |                                                                   |
| dob                                                 | VA Profile        | false    |                                                                   |
| military information (period of service and branch) | VA Profile        | false    |                                                                   |
| personal healthcare contacts                        | VA Profile?       | false    |                                                                   |
| identity verified                                   | Identity Provider | false    |                                                                   |
| 2fa enabled                                         | Identity Provider | false    |                                                                   |
| login credential                                    | Identity Provider | false    |                                                                   |


### Assumptions/Risks

 
### What're you building

We believe this pattern may consist of:
- consistent presentation of profile fields across all VA products
- directions to update profile data
- page-level alerts
- inline alerts


--- 

## Launch Planning
### Collaboration Cycle
**Staging review will be required for adoption into VADS.**

- Kickoff ticket

### Timeline 

#### Initiative Launch Dates
- *Target Launch Date*
  - Oct. 15, 2024
- *Actual Launch Date* 
  - tbd

---
   
## Screenshots

### Before

### After

---

#### Communications
<details>

- Team Name: Authenticated Experience Design Patterns
- GitHub Label(s): 
- Slack channel: tmf-auth-exp-design-patterns
- Product POCs: Becky Phung (VA Product Owner), Lynn Stahl (Agile6 Product Manager)

</details>


#### Stakeholders
<details>
  
- Office/Department: OCTO/VA Design System, USDS/USWDS
- Contact(s): Matt Dingee (VADS), Kevin Hoffman (VADS), 
 
</details>
