# Messages signature use cases

Last updated: December 2025  
* [User flow](https://www.figma.com/design/ugzaAeQe3xKq2YBobZep02/Profile---Health-care-settings?node-id=26-1432&t=U2WtA1N8CblfyOhO-1)  
* [Figma files](https://www.figma.com/design/ugzaAeQe3xKq2YBobZep02/Profile---Health-care-settings?node-id=26-1432&t=U2WtA1N8CblfyOhO-1)


# Jump to

[Overview](#overview)

[Use cases](#use-cases)

- [User has VA health care and no messages signature](#user-has-va-health-care-and-no-messages-signature)

- [User has VA health care and a messages signature](#user-has-va-health-care-and-a-messages-signature)

- [User does not have VA health care](#user-does-not-have-va-health-care)

[Edge cases](#edge-cases)

[Flags](#flags)

- [Profile shared flags](#profile-shared-flags)

[Errors](#errors)

- [Profile shared errors](#profile-shared-errors)

# Overview 

The Messages signature allows users to add a persistent signature to the health care messages tool. For all of the use cases, the user must be LOA3 (identity verified). If the user is not LOA3 verified, they will be directed to the **Sign-in information** page to verify their account.

# Use cases 

## User has VA health care and no messages signature 

* **Description:** User is prompted to add a messages signature. Or review their messages inbox.  
* **Status code:** 200  
* **Format:** See designs  
* [Link to designs](https://www.figma.com/design/ugzaAeQe3xKq2YBobZep02/Profile---Health-care-settings?node-id=30-4699&t=U2WtA1N8CblfyOhO-1)

### Shared profile editing interactions 

There are several shared editing interactions that are used in profile. The linked documentation includes the following:

* Adding information  
* Inline editing and validation  
* Save in progress  
* Saving information: Success  
* Saving information: Error  
* Removing information  
* Canceling edit changes  
* Edit new information while editing  
* Edit-as-a-subtask flow

[Profile shared editing information use cases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/profile-shared-use-cases.md#editing-interactions)

## User has VA health care and a messages signature 

* **Description:** User is shown their messages signature on file. They can edit or remove the signature. Or review their messages inbox.  
* **Status code:** 200  
* **Format:** See designs  
* [Link to designs](https://www.figma.com/design/ugzaAeQe3xKq2YBobZep02/Profile---Health-care-settings?node-id=30-4902&t=U2WtA1N8CblfyOhO-1)

## User does not have VA health care 

* **Description:** User receives a message informing them they do not have VA health care and how to fix it if it's an error.  
* **Status code:** 200  
* **Format:** See designs  
* [Link to designs](https://www.figma.com/design/ugzaAeQe3xKq2YBobZep02/Profile---Health-care-settings?node-id=30-3223&t=U2WtA1N8CblfyOhO-1)

# Edge cases 

## Flags 

### Profile shared flags 

* [User with a blocked account attempts to access any section of profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/blocked-account.md)  
* [LOA1 user attempts to access any section of profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)

## Errors 

### Profile shared errors 

* [Full page, backend system down](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/profile-shared-use-cases.md#full-page-backend-system-down)

