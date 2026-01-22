# Health care contacts use cases

Last updated: December 2025  
* [User flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1756911325760/5b757400a51d0bbe97304ec3f13d4091456f7c94?sender=u36b374887f74c9a3de2d0750)  
* [Figma files](https://www.figma.com/design/ugzaAeQe3xKq2YBobZep02/Profile---Health-care-settings?node-id=2-19060&t=U2WtA1N8CblfyOhO-1)


# Jump to

[Overview](#overview)

[Use cases](#use-cases)

- [User has VA health care and health care contacts on file](#user-has-va-health-care-and-health-care-contacts-on-file)

- [User has VA health care and no health care contacts on file](#user-has-va-health-care-and-no-health-care-contacts-on-file)

- [User does not have VA health care](#user-does-not-have-va-health-care)

[Edge cases](#edge-cases)

[Flags](#flags)

- [Profile shared flags](#profile-shared-flags)

[Errors](#errors)

- [Profile shared errors](#profile-shared-errors)


# Overview 

The Health care contacts page allows users with health care to view their emergency contact and next of kin information. Information shown is not editable at this time. For all of the use cases, the user must be LOA3 (identity verified). If the user is not LOA3 verified, they will be directed to the **Sign-in information** page to verify their account.

# Use cases 

## User has VA health care and health care contacts on file 

* **Description:** User can see up to 2 Emergency contacts and 2 Next of kin contacts. With a number to call to update or edit.  
* **Status code:** 200  
* **Format:** See designs  
* [Link to designs](https://www.figma.com/design/ugzaAeQe3xKq2YBobZep02/Profile---Health-care-settings?node-id=2-19062&t=U2WtA1N8CblfyOhO-1)

## User has VA health care and no health care contacts on file 

* **Description:** User receives a message informing them they have no Emergency contacts or Next of kin on file and how to add them.  
* **Status code:** 200  
* **Format:** See designs  
* [Link to designs](https://www.figma.com/design/ugzaAeQe3xKq2YBobZep02/Profile---Health-care-settings?node-id=2-50622&t=U2WtA1N8CblfyOhO-1)

## User does not have VA health care 

* **Description:** User receives a message informing them they do not have VA health care and how to fix it if it's an error.  
* **Status code:** 200  
* **Format:** See designs  
* [Link to designs](https://www.figma.com/design/ugzaAeQe3xKq2YBobZep02/Profile---Health-care-settings?node-id=10-2840&t=U2WtA1N8CblfyOhO-1)

# Edge cases 

## Flags 

### Profile shared flags 

* [User with a blocked account attempts to access any section of profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/blocked-account.md)  
* [LOA1 user attempts to access any section of profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)

## Errors 

### Profile shared errors 

* [Full page, backend system down](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/profile-shared-use-cases.md#full-page-backend-system-down)


-------


<details><summary>Archive | Personal health contact use cases, September 2025</summary>

# Personal health contact use cases

**Last updated: September 2025**

- [User flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1756911325760/5b757400a51d0bbe97304ec3f13d4091456f7c94?wid=0-1756911328095&outline=open)
- [Figma files](https://www.figma.com/design/uYMdNtQnrzq7OiDl0rPF9k/Profile---Personal-health-care-contacts?node-id=2549-19884&t=y33CVFstkBkJpcih-1)
- Test Rail QA


## Current experience
- All information on the page is view only, and cannot be edited at this time.
- For all of these use cases, the user must be LOA3 (identity verified). If the user is not LOA3, the user will be directed to the Profile Account Security section.


## Common use cases
### User logs in with LOA3 account

<details><summary>User has VA healthcare and health care contacts on file</summary>

- **Use case:** User can see up to 2 Emergency contacts and 2 Next of kin contacts.
- **Status code:** 200
- **Format:** See designs
- [Link to designs](https://www.figma.com/design/uYMdNtQnrzq7OiDl0rPF9k/Profile---Personal-health-care-contacts?node-id=2549-25121&t=y33CVFstkBkJpcih-1)
- **Content:** See designs
 
</details>


<details><summary>User has VA healthcare no health care contacts on file</summary>

- **Use case:** User receives a message informing them they have no Emergency contacts or Next of kin on file and how to add them.
- **Status code:** 200
- **Format:** See designs
- [Link to designs](https://www.figma.com/design/uYMdNtQnrzq7OiDl0rPF9k/Profile---Personal-health-care-contacts?node-id=2549-31352&t=y33CVFstkBkJpcih-1)
- **Content:** See designs
 
</details>


<details><summary>User does not have VA healthcare</summary>

- **Use case:** User receives a message informing them they do not have VA healthcare and how to fix it if it's an error.
- **Status code:** 200
- **Format:** See designs
- [Link to designs](https://www.figma.com/design/uYMdNtQnrzq7OiDl0rPF9k/Profile---Personal-health-care-contacts?node-id=2549-31576&t=y33CVFstkBkJpcih-1)
- **Content:** See designs
 
</details>


## Edge cases

### Validation
This feature has no validation use cases.

### Flags
[Blocked users documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/blocked-account.md)

[User logs in with an LOA1 account](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)

### Errors
[Profile shared use cases: Errors: System errors](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/profile-shared-use-cases.md#system-errors)

</details>



<details><summary>Archive | Personal health care contacts use cases, February 2024</summary>
  
# Personal health contact use cases

**Last updated:** February 15, 2024 (updating link to LOA1 use cases)

For all of these use cases, the user must be LOA3 (identity verified). If the user is not LOA3, the only thing they can access in profile is the Account Security section.

## Common use cases
### User logs in with LOA1 account
- [User logs in with a LOA1 account](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)

### User logs in with LOA3 account
- [User logs in with a LOA3 account to view Next of Kin / Emergency Contact info](https://www.sketch.com/s/99bac82d-4c95-4d4c-9587-2a931ed464de)
- [User logs in with a LOA3 account to edit Next of Kin / Emergency Contact info (v2 feature not yet implemented)](https://www.sketch.com/s/99bac82d-4c95-4d4c-9587-2a931ed464de)

## Edge cases

### Flags
There are no direct flags associated with this feature. However indirectly, if a user's account is flagged they will be unable to see this section of the profile. [For more details on blocking see the account security FE documentation](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/profile/account_security/frontend_documentation.md#fiduciary-flag--blocked-profile-logic).

### Validation
There are no validation use cases for this feature.

### System
- [Something has gone wrong and VA.gov can’t display any personal information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/use-cases/system-cant-display-personal-info.md)
- [Something has gone wrong and VA.gov can't display legal name and/or disability rating](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/use-cases/system-cant-display-disability-rating-or-legal-name.md)

## Flow diagrams
- tbd sketch file location has user flow

</details>
