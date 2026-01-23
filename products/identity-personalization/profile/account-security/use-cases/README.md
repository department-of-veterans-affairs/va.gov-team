# Sign-in information use cases

Last updated: January 2026  
* [User flow](https://www.figma.com/design/05k2PTmuDVgBj2HnzUZayg/Profile---Account-security?node-id=728-6135&t=hdK51OVvg5Hu8cBM-1)  
* [Figma files](https://www.figma.com/design/05k2PTmuDVgBj2HnzUZayg/Profile---Account-security?node-id=728-6135&t=q2KrO4d43NTsmPtu-1)

<details><summary>Archive | How to reproduce in staging</summary>
  
**Account security: LOA1 user views and completes tasks**

1. Log into staging with any LOA1 user.  
   * Note that the Identity team doesn't maintain LOA1 accounts, so you may need to create your own.  
   * You can do this by selecting "Create an account with ID.me" when you're at Staging's sign-in dialog.  
   * DO NOT verify your identity on the ID.me side.  
   * Once created, log into Staging with that acct's email and password.  
2. Navigate to profile or update the URL in your browser to point to /profile/direct-deposit or any other section of profile aside from /profile/account-security.

**Account security: LOA3 user views and completes tasks**

1. See profile staging users and test cases for information on how to test account security.  
2. Go to the personalized menu in the upper right of the navigation, and click into the profile. You'll be dropped into the Personal information section of the profile.  
3. Select Account security in the sidebar menu.

</details>

# Jump to

[Overview](#overview)

[Use cases](#use-cases)

- [User signs-in with LOA1 account](#user-signs-in-with-loa1-account)

- [User signs-in with LOA3 account](#user-signs-in-with-loa3-account)

- [User has a blocked account](#user-has-a-blocked-account)

[Edge cases](#edge-cases)

[Errors](#errors)

- [Sign-in information errors](#sign-in-information-errors)

- [Profile shared errors](#profile-shared-errors)

# Overview

If the user's account is not verified, or has a blocked status, the only thing they can access is the **Sign-in information** page. The page allows users to verify their account as needed, and links to their sign-in service to manage their account.

# Use cases

## User signs-in with LOA1 account

* **Description:** If the user has an LOA1 account, they have to verify their account to access the full profile. The user can only verify their account, and access ID.me or Login.gov to manage their sign-in information. The process list on the page updates to reflect the status of the user's account.  
* **Format:** See designs  
* [Link to design](https://www.figma.com/design/05k2PTmuDVgBj2HnzUZayg/Profile---Account-security?node-id=730-9507&t=q2KrO4d43NTsmPtu-1)  
* [Shared profile LOA1 documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)

## User signs-in with LOA3 account

* **Description:** Once verified the user can access a link to manage their ID.me or Login.gov account. And see the verification status of their account in the process list.  
* **Format:** See designs  
* [Link to design](https://www.figma.com/design/05k2PTmuDVgBj2HnzUZayg/Profile---Account-security?node-id=728-6306&t=q2KrO4d43NTsmPtu-1)

## User has a blocked account

* [User with a blocked account attempts to access any section of profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/blocked-account.md)

# Edge cases

## Errors

### Sign-in information errors

#### MPI connection error

* **Description:** When a connection error occurs with the [Master Person Index (MPI)](https://depo-platform-documentation.scrollhelp.site/developer-docs/mvi) an alert is shown at the top of the page directing the user to come back later. There is no action a user can take to correct this. The other sections of the page still show while the alert is present. This alert can only show to verified users.  
* **Format:** [Standard warning alert component](https://design.va.gov/storybook/?path=/story/uswds-va-alert--warning)  
* [Link to design](https://www.figma.com/design/05k2PTmuDVgBj2HnzUZayg/Profile---Account-security?node-id=730-7332&t=q2KrO4d43NTsmPtu-1)

#### Not in MPI

* **Description:** When a verified user's information cannot be matched in the [Master Person Index (MPI)](https://depo-platform-documentation.scrollhelp.site/developer-docs/mvi) we show an alert. There is no action a user can take to correct this. The appearance of the alert will prompt the process of fixing it. More information can be found in this [GitHub ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/47350) and [Slack thread](https://dsva.slack.com/archives/CSFV4QTKN/p1664225557501919).  
* **Format:** [Standard warning alert component](https://design.va.gov/storybook/?path=/story/uswds-va-alert--warning)  
* [Link to design](https://www.figma.com/design/05k2PTmuDVgBj2HnzUZayg/Profile---Account-security?node-id=730-7333&t=q2KrO4d43NTsmPtu-1)

### Profile shared errors

* [Full page, backend system down](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/profile-shared-use-cases.md#full-page-backend-system-down)



---



<details><summary>Archive | Account Security Use Cases, September 2025</summary>
  
# Account Security Use Cases

**Last updated: September 2025**

- [User flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1758228617252/cee6a8bd1fb567f143ff56c66169db81a6f6ecc9?wid=0-1758228621582&outline=open)
- [Figma files](https://www.figma.com/design/05k2PTmuDVgBj2HnzUZayg/Profile---Account-Security?node-id=613-7850&t=vEzOY6Vc44fxJdc2-1)
- Test Rail QA

## Current experience
If the user is not LOA3, or has a blocked account, the only thing they can access in profile is the Account security section. Within Account security, they can access multifactor authentication and a link to their sign in service.

## Common use cases
### User logs in with LOA1 account
- [User logs in with an LOA1 account](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)
- [LOA1: User views and completes tasks](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/account-security/use-cases/complete-tasks-loa1.md)

### User logs in with LOA3 account
- [LOA3 user views and completes tasks](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/account-security/use-cases/complete-tasks-loa3.md) 

### User has a blocked account
- [User has a blocked account](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/blocked-account.md)

## Edge cases
### Validation
There are no validation use cases for this feature.

### Flags
- LOA1 user information above.
- Blocked account user information above.

### Errors
- [Something has gone wrong and VA.gov can’t match user information with our records](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/account-security/use-cases/system-cant-match-user-information.md)
- [Something has gone wrong and MPI could not connect](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/account-security/use-cases/system-cant-access-records.md)
- [System error: Backend system down](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/profile-shared-use-cases.md#system-errors)

</details>

















<details><summary>Archive | Account Security Use Cases, February 2024</summary>
  
# Account Security Use Cases

**Last updated:** February 15, 2024

If the user is not LOA3, or has a blocked account, the only thing they can access in profile is the Account Security section. Within Account security, they can access multifactor authentication and a link to their sign in service. 

## Common use cases
### User logs in with LOA1 account
- [User logs in with an LOA1 account](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)
- [User views and completes tasks - LOA1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/account-security/use-cases/complete-tasks-loa1.md)

### User logs in with LOA3 account
- [User views and completes tasks: add multifactor authentication, view terms and conditions, or find a link to their sign in service (eg. ID.me) to manage their sign in information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/account-security/use-cases/complete-tasks-loa3.md) 

### User has a blocked account
- [User has a blocked account](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/blocked-account.md)

## Edge cases

### Flags
There are no flags associated with this feature, but an account can be blocked based on flags we get from the backend. More details are available in the [blocked account use case documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/blocked-account.md).

### Validation
There are no validation use cases for this feature.

### System
- [Something has gone wrong and VA.gov can’t match user information with our records](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/account-security/use-cases/system-cant-match-user-information.md)
- [Something has gone wrong and MPI could not connect](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/account-security/use-cases/system-cant-access-records.md)

## Flow diagrams
- [High-level flow](https://www.figma.com/file/05k2PTmuDVgBj2HnzUZayg/Profile---Account-Security?type=design&node-id=0%3A1&mode=design&t=iNSbLjANTt9uOIhh-1)

</details>
