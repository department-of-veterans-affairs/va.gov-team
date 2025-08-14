# Personal Information Use Cases
**Last updated: July 2025**

- [User flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1753459771642/6c6889e40ac249724ef1b9968f6b0ba7c57a05ad?wid=149-1753459813526&outline=open)
- [Figma files](https://www.figma.com/design/qfyUmEOVawplgrEKYKFp0f/Profile---Personal-information?node-id=918-3504&t=XpeLUcvcZmicphy6-1)
- Test Rail QA

<details><summary>Archive | How to reproduce in staging</summary>

- [User needs to add or update personal information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/use-cases/add-edit-personal-info.md#add-or-edit-personal-info)

</details>


## Current experience
- The following user information is on the page:
   - Read only information
     - Legal name
     - Date of birth
     - Disability rating
  - Editable information
     - Preferred name
        - Note: Once added there is no way to delete a preferred name. This is a future feature VA Profile is working on.
     - Messages signature (MHV)
        - Note: Only shows for those with VA health care.
- For all of these use cases, the user must be LOA3 (identity verified). If the user is not LOA3, the user will be directed to the Profile Account Security section.



## Common use cases
### User logs in with LOA3 account
#### Editing Preferred name and Messages signature sections
- [Profile shared editing information use cases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/profile-shared-use-cases.md#editing-information)



## Edge cases
### Validation
There are no validation use cases for this feature.

### Flags

<details><summary>User has no VA health care</summary>

- **Use case:** When a user does not have VA health care the messages signature section does not show.
- **Status code:** None
- **Format:** See designs
- [Link to designs](https://www.figma.com/design/qfyUmEOVawplgrEKYKFp0f/Profile---Personal-information?node-id=926-11992&t=9hBujFpHXKuiKNte-1)
- **Content:** See designs

</details>

<details><summary>User has no disability rating</summary>

- **Use case:** When a user does not have a disability rating, the text in the section changes.
- **Status code:** None
- **Format:** See designs
- [Link to designs](https://www.figma.com/design/qfyUmEOVawplgrEKYKFp0f/Profile---Personal-information?node-id=974-7077&t=9hBujFpHXKuiKNte-1)
- **Content:** See designs

</details>

[Blocked users documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/blocked-account.md)

[User logs in with an LOA1 account](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)


### Errors

[System error: Backend system down](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/profile-shared-use-cases.md#system-errors)

[System error: Cannot display section information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/profile-shared-use-cases.md#system-errors)

---

<details><summary>Archive | Personal Information Use Cases, February 2024</summary>

# Personal Information Use Cases

**Last updated:** February 15, 2024

For all of these use cases, the user must be LOA3 (identity verified). If the user is not LOA3, the only thing they can access in profile is the Account Security section.

## Common use cases
### User logs in with LOA1 account
- [User logs in with an LOA1 account](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)

### User logs in with LOA3 account
- [User needs to add or edit personal information (Preferred name or Gender identity)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/use-cases/add-edit-personal-info.md)

## Edge cases

### Flags
There are no direct flags associated with this feature. However indirectly, if a user's account is flagged they will be unable to see this section of the profile. [For more details on blocking see the account security FE documentation](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/profile/account_security/frontend_documentation.md#fiduciary-flag--blocked-profile-logic).

### Validation
There are no validation use cases for this feature.

### System
- [Something has gone wrong and VA.gov can’t display any personal information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/use-cases/system-cant-display-personal-info.md)
- [Something has gone wrong and VA.gov can't display legal name and/or disability rating](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/use-cases/system-cant-display-disability-rating-or-legal-name.md)

## Flow diagrams
- [Mobile page of design file](https://www.figma.com/file/qfyUmEOVawplgrEKYKFp0f/Profile---Personal-information?type=design&node-id=0%3A1&mode=design&t=3BjAesVLktQXS6X2-1) has user flow

</details>
