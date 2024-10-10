## Background
As a Veteran, I want to easily edit prefilled form information and have it save to my profile, so I can keep my profile up to date.

There are several different 'profiles' users can edit across the various VA platforms and products, with the main profile found at va.gov/profile. This is the profile we will be referring to. During our research into the Prefill Form Data pattern, we discovered that users may find outdated profile data that has been prefilled and want to correct it, so as part of this pattern we will aim to provide an easy way to update that profile data when completing a prefilled form.

NOTE: We considered having this pattern be "review" or "confirm" and update, but ultimately decided that the viewing of the prefilled information belonged in the Help users to... Know when their information is prefilled pattern.

## Hypothesis
This pattern will tie in closely with the prefill form pattern and knowing where and how to update out of date information when forms are prefilled. We believe that creating improved personal profile maintenance interfaces will help users to:
- Update their prefilled information
- Know where those updates were saved to
- Understand why they can not update certain information

## Outcomes
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
- one or more content updates within existing components and guidance including:
    - messaging about how to edit a prefilled field
    - messaging about where your updates will save
    - messaging about how why fields are not editable online
- one or more updates to the visual user flow of editing a prefilled field

--- 

## Launch Planning
### Collaboration Cycle
**Staging review will be required for adoption into VADS.**

- Kickoff ticket

### Finalized Pattern
We have completed our research study and finalized our recommendations for this pattern which can be found (here)[https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/patterns/update-prefilled-information/Help-users-to-Update-prefilled-information.md]

### Timeline 

#### Initiative Launch Dates
- *Target Launch Date*
  - Nov. 19, 2024
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
