Updated 5/30/19

# Getting Started with Identity

**Table of Contents**
1. [Signing in](#signing-in)
2. [Connecting to MVI](#connecting-to-MVI)
3. [Understanding LOA](#Understanding-LOA)
4. [User paths based on Identity](#User-paths-based-on-Identity)

## Signing in
Users can sign in on VA.gov using one of three Identity Providers:
1. **DS Logon**
2. **My HealtheVet**
3. **ID.me**

Sign-in CTAs are found in upper-right hand corner of the header of every VA.gov page and should be made available in-page on any product that requires or benefits from adding sign-in. You can see an [in-page CTA example shown on one of our health tools here](https://staging.va.gov/health-care/refill-track-prescriptions/). If the user runs into issues, they can visit the [Login FAQ page here](https://staging.va.gov/sign-in-faq/) or submit a [login help request form here](https://www.accesstocare.va.gov/sign-in-help) which sends submitted information to the VA.gov Microsoft Dynamics instance.

[This overview document on authorization and authentication](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/login/reference-documents/auth/authentication-and-authorization.md) explains what happens on the backend during each login.

[The login product outline here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/login/user-login/loginproductoutline.md) provides a fuller overview on login.

## Connecting to MVI

Each identity provider on VA.gov gives specific and slightly different information that can be used to connect the user to their Veteran Record, which is stored in the Master Veteran Index (MVI). [The information we get from our identity providers and our connections to them is explained here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/login/user-login/login-data-flow.md). In order for us to attempt a connection to MVI, the user's account level must be LOA3 ([see more on LOA below](#Understanding-LOA)).

If we are able to succesfully connect a user to a record in MVI, we get back a [list of attributes]() that can be leveraged throughout VA.gov to provide access to additional digital services. This allows the user to access products such as the profile and dashboard, which display personal information and actions in flight with the VA, as well as pre-fill information on an application directly from their Veteran Record in MVI.



## Understanding LOA
**LOA = Level of Assurance**

We can only connect a user to a Veteran Record in MVI if we are confident that they are who they say they are. Each identity provider has its own identity verification system used to assure VA.gov that the user's identity is trustworthy.

A user may sign in with an LOA1 account, and have the option to upgrade their account to LOA3 on VA.gov through ID.me's identity verification process, even if they logged in with a DS Logon or MHV account ([more details here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/login/idme/va.gov-id.me-user-flow-overview-06-05-2019.pdf))

Each identity provider has various account levels, which are mapped to VA.gov's concept of LOA as shown below:
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
```


## User paths based on Identity
User paths for any product involving identity and personal information should be determined based on a given product's risk profile.

### Potential Product Risk Profiles
#### High risk - LOA3 (ID proofing required)
   - **Pro:** able to use most sensitive and extensive user data
   - **Con:** least accessible to full userbase
#### Low risk - LOA1 (login required)
   - **Pro:** able to display some information about user
   - **Con:** can't leverage more sensitive user data records as this user account type is not secure
#### No risk - No login required
   - **Pro:** most accesible
   - **Con:** no user data

LOA3 users are more trusted, and will often have more information and access to services. UAT is required for any new product or feature leveraging identity to ensure that user is able to connect to the correct MVI record and that the personal information being served up by MVI and displayed by VA.gov is correct. If the user is not found in MVI, and they should be found or would like to be added to MVI, they need a way to correct this. If the user is connected to the correct MVI account, but the information shown is incorrect, the user needs a way to correct their information.

LAO1 users have the most restricted access to digital services, since we can't be confident in the trustworthiness of their identity. As a result, we provide additional, minimal-risk services to the user such as saving in-progress applications, and editing pre-filled form information pulled from the identity provider. 

Given the multi-tiered nature of identity on VA.gov, there error states to consider when planning for happy and unhappy paths. Any product involving identity should review the relevant [identity error handling in more detail here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/login/error-messages).
