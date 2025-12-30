# Personal information use cases

Last updated: December 2025  
* [User flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1753459771642/6c6889e40ac249724ef1b9968f6b0ba7c57a05ad?sender=u36b374887f74c9a3de2d0750)
* [Figma files](https://www.figma.com/design/qfyUmEOVawplgrEKYKFp0f/Profile---Personal-information?node-id=1235-18927&t=UZZx6NpdeDPQTxDT-1)

<details><summary>Archive | How to reproduce in staging</summary>

* [User needs to add or update personal information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/use-cases/add-edit-personal-info.md#add-or-edit-personal-info)

</details>

# Jump to

[Overview](#overview)

[Use cases](#use-cases)

[Edge cases](#edge-cases)

- [Flags](#flags)

- [Errors](#errors)

# Overview 

The **Personal information** page allows users to view their legal name, date of birth, and disability rating. And manage their preferred name, which is not removable once added. For all of the use cases, the user must be LOA3 (identity verified). If the user is not LOA3 verified, they will be directed to the **Sign-in information** page to verify their account.

# Use cases 

## Read-only: Legal name and Date of birth 

* **Description:** Legal name and date of birth are read-only. Users are provided links on how to update their information. Since accounts have to be verified, this information always shows.  
* **Status code:** 200  
* **Format:** See designs  
* [Link to designs](https://www.figma.com/design/qfyUmEOVawplgrEKYKFp0f/Profile---Personal-information?node-id=1235-18929&t=UZZx6NpdeDPQTxDT-1)

## Editing: Preferred name 

* **Description:** Preferred name can be added and edited, but not removed. Preferred names can be up to 25 alphabetic characters. Special characters, spaces, and numbers are not accepted. Once a preferred name has been added the authenticated header updates to reflect their name.  
* **Status code:** 200  
* **Format:** See designs  
* [Link to designs](https://www.figma.com/design/qfyUmEOVawplgrEKYKFp0f/Profile---Personal-information?node-id=1239-6301&t=UZZx6NpdeDPQTxDT-1)

#### Shared profile editing interactions

There are several shared editing interactions that are used in profile. The linked documentation includes the following:

* Adding information  
* Inline editing and validation  
* Save in progress  
* Saving information: Success  
* Saving information: Error  
* Canceling edit changes

[Profile shared editing information use cases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/profile-shared-use-cases.md#editing-interactions)

## Read-only: Disability rating 

* **Description:** Disability rating is read only. The section displays the users percentage of disability rating, or that they don’t have a disability rating. The user is also provided links to learn more about disability ratings and the PACT Act.  
* **Status code:** 200  
* **Format:** See designs  
* [Link to designs](https://www.figma.com/design/qfyUmEOVawplgrEKYKFp0f/Profile---Personal-information?node-id=1239-6314&t=UZZx6NpdeDPQTxDT-1)

# Edge cases 

## Flags 

### Profile shared flags

* [User with a blocked account attempts to access any section of profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/blocked-account.md)  
* [LOA1 user attempts to access any section of profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)

## Errors 

### Profile shared errors

* [Full page, backend system down](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/profile-shared-use-cases.md#full-page-backend-system-down)  
* [Section only, backend system down](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/profile-shared-use-cases.md#section-only-backend-system-down)



---



<details><summary>Archive | Personal Information Use Cases, July 2025</summary>

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

</details>



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
