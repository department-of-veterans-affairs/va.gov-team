# 

Updated 6/15/22

# Getting Started with Identity

**Table of Contents**

1. [Signing in](notion://www.notion.so/7964973d4088479f9446144b68bbd4aa#signing-in)
2. [Connecting to MPI](notion://www.notion.so/7964973d4088479f9446144b68bbd4aa#connecting-to-MPI)
3. [Understanding LOA](notion://www.notion.so/7964973d4088479f9446144b68bbd4aa#Understanding-LOA)
4. [User paths based on Identity](notion://www.notion.so/7964973d4088479f9446144b68bbd4aa#User-paths-based-on-Identity)

## Signing in

Users can sign in on [VA.gov](http://va.gov/) using one of four Identity Providers:

1. **DS Logon**
2. **My HealtheVet**
3. **[ID.me](http://id.me/)**
4. **Login.gov**

Sign-in CTAs are found in upper-right hand corner of the header of every [VA.gov](http://va.gov/) page and should be made available in-page on any product that requires or benefits from adding sign-in. You can see an [in-page CTA example shown on one of our health tools here](https://staging.va.gov/health-care/refill-track-prescriptions/). If the user runs into issues, they can visit the [Login FAQ page here](https://staging.va.gov/sign-in-faq/) or submit a [login help request form here](https://www.accesstocare.va.gov/sign-in-help) which sends submitted information to the [VA.gov](http://va.gov/) Microsoft Dynamics instance.

[This overview document on authorization and authentication](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/login/reference-documents/auth/authentication-and-authorization.md) explains what happens on the backend during each login.

[The login product outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Products/login) provides a fuller overview on login.

## Connecting to MPI

Each identity provider on [VA.gov](http://va.gov/) gives specific and slightly different information that can be used to connect the user to their Veteran Record, which is stored in the Master Person Index (MPI). [The information we get from our identity providers and our connections to them is explained here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/login/ssoe/ssoe_saml_response_attributes.md). In order for us to attempt a connection to MPI, the user's account level must be LOA3 ([see more on LOA below](notion://www.notion.so/7964973d4088479f9446144b68bbd4aa#Understanding-LOA)).

If we are able to successfully connect a user to a record in MPI, we get back a [list of attributes](notion://www.notion.so/7964973d4088479f9446144b68bbd4aa) that can be leveraged throughout [VA.gov](http://va.gov/) to provide access to additional digital services. This allows the user to access products such as the profile and dashboard, which display personal information and actions in flight with the VA, as well as pre-fill information on an application directly from their Veteran Record in MPI.

## Understanding LOA

**LOA = Level of Assurance**

We can only connect a user to a Veteran Record in MPI if we are confident that they are who they say they are. Each identity provider has its own identity verification system used to assure [VA.gov](http://va.gov/) that the user's identity is trustworthy.

A user may sign in with an LOA1 account, and have the option to upgrade their account to LOA3 on [VA.gov](http://va.gov/) through [ID.me](http://id.me/)'s identity verification process, [even if they logged in with a DS Logon or MHV account](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/login/idme/idv-flow-updated-20170821.pdf).

Each identity provider has various account levels, which are mapped to [VA.gov](http://va.gov/)'s concept of LOA as shown below:

```
| LOA 1 on VA.gov  | LOA 3 on VA.gov   |
| ---------------- | ----------------- |
| MHV Basic        |                   |
| MHV Advanced     |                   |
|                  | MHV Premium       |
| DS Logon Level 1 |                   |
|                  | DS Logon Level 2  |
| ID.me LOA1       |                   |
|                  | ID.me LOA3        |
| logingov IAL1    |                   |
|                  | logingov IAL2     |
```

## User paths based on Identity

User paths for any product involving identity and personal information should be determined based on a given product's risk profile.

### Potential Product Risk Profiles

### High risk - LOA3 (ID proofing required)

- **Pro:** able to use most sensitive and extensive user data
- **Con:** least accessible to full userbase

### Low risk - LOA1 (login required)

- **Pro:** able to display some information about user
- **Con:** can't leverage more sensitive user data records as this user account type is not secure

### No risk - No login required

- **Pro:** most accessible
- **Con:** no user data

LOA3 users are more trusted, and will often have more information and access to services. UAT is required for any new product or feature leveraging identity to ensure that user is able to connect to the correct MPI record and that the personal information being served up by MPI and displayed by [VA.gov](http://va.gov/) is correct. If the user is not found in MPI, and they should be found or would like to be added to MPI, they need a way to correct this. If the user is connected to the correct MPI account, but the information shown is incorrect, the user needs a way to correct their information.

LOA1 users have the most restricted access to digital services, since we can't be confident in the trustworthiness of their identity. As a result, we provide additional, minimal-risk services to the user such as saving in-progress applications, and editing pre-filled form information pulled from the identity provider.

Given the multi-tiered nature of identity on [VA.gov](http://va.gov/), there error states to consider when planning for happy and unhappy paths. Any product involving identity should review the relevant [identity error handling in more detail](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/login/error-messages/sign-in-error-handling.md).
