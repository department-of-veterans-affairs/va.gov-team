# Authorization requirements for Ask VA

Ask VA on VA.gov Team

Last updated by @tygindraux: April 17, 2025

This document outlines Ask VA requirements with regards to users, their inquiries and attachments, authentication and authorization.

Jump to:
- [Glossary](#glossary)
- [What is an acceptable levelOfAuthentication and Level of Assurance?](#what-is-an-acceptable-levelofauthentication-and-level-of-assurance)
- [How does an inquiry get associated with an account?](#how-does-an-inquiry-get-associated-with-an-account)
- [When does Ask VA require a user to be authenticated?](#when-does-ask-va-require-a-user-to-be-authenticated)
- [Who has access to a given inquiry?](#who-has-access-to-a-given-inquiry)

## Glossary

|Term|A.K.A.|Description|
|:--|:--|:--|
|Authentication|authn|Ensures you are who you say you are.|
|Authorization|authz|Ensures you can only access and/or modify data that your role allows.|
|Credential Service Provider|CSP|A trusted entity that issues digital credentials to users, verifying their identity and enabling them to access digital services. Users can sign into VA.gov using the following CSPs: Login.gov, ID.me, DS Logon and, previously, My HealtheVet.|
|Integration Control Number|ICN|A unique identifier assigned to each patient entry in the Master Patient Index linking patients to their records across VA systems. Anyone with verified account will get a unique ICN when signing into VA.gov.|
|Level of Assurance|LOA|User credentials will have an associated Level of Assurance (LOA) based on whether a user has verified their identity with the credential service provider.|
|levelOfAuthentication||A required field for the Submit Inquiry endpoint indicating a user’s authentication status. Acceptable values are `authenticated`, `unauthenticated`, `personal`, or `business`, representing different levels or types of user verification and context.|

## What is an acceptable levelOfAuthentication and Level of Assurance?

`levelOfAuthentication` is a required field for the [Submit Inquiry](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/integration/crm_api/Form_SubmitInquiry.md) endpoint indicating a user’s authentication status.

Acceptable values are `authenticated`, `unauthenticated`, `personal`, or `business`, representing different levels or types of user verification and context.

These values are associated with the following Levels of Assurance (LOAs):

|levelOfAuthentication value|LOA|
|:--|:--|
|`authenticated`|LOA3|
|`unauthenticated`|Unauthenticated|
|`personal`|LOA3|
|`business`|LOA3|

> [!NOTE]
> Users signing in will have a Level of Assurance (LOA) based on whether they've verified their identity with their CSP. Learn more about [Level of Assurance (LOA) on VA.gov](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity#understanding-verified-identity).

Ask VA only accepts LOA3 as authenticated. LOA1 is treated as unauthenticated. A user who is signed in to a CSP with LOA1 will be asked to verify their identity in order to be treated as authenticated.

## How does an inquiry get associated with an account?

When an authenticated user submits an inquiry, their inquiry details, including their ICN, are // **sent to some endpoint ??** //. This allows CRM to associate an inquiry with a given account.

However, the ICN value is not included for unauthenticated users. // **How does an unauthenticated inquiry get attached to an account then??** //  Unauthenticated inquiries aren't viewable from Ask VA when you're authenticated. (They don't populate your dashboard.) After they get submitted, any future communication happens via email.

## When does Ask VA require a user to be authenticated?

> [!NOTE] 
> This [sign in documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Strategy/Phase%202/2025-04%20Sign%20in%20rules.md#what-we-know-about-sign-in-rules-for-ask-va) describes sign in scenarios from a user experience perspective.

### CRM authentication rules

Ask VA Admins (called, AVA Admins), have the ability to change queue and topic settings at any point. This includes:
- whether or not their queue requires authentication
- whether or not their queue allows attachments
- whether or not their queue allows replies and for how long after an inquiry was last solved (reply window)

We receive these authentication flags using the [Get Topics](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/integration/crm_api/Form_GetTopics.md) endpoint.

### Additional sign in rules on VA.gov

We also require sign in based on inquiry type. We determine this by asking a user, 'Who is your question about?' and if they choose 'Myself' or 'Someone else', sign in is required. 

## Who has access to a given inquiry?

The general rule of thumb is that a user should only be able to access inquiries that they submit themselves. Using the [Retrieve Inquiries](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/integration/crm_api/Dashboard_RetrieveInquiries.md) endpoint, we retrieve inquiries associated with a specific user

For example, if user A submits an inquiry on behalf of user B, then, user B cannot access the inquiry. Even though it's about them.

> [!NOTE] 
> How do we filter which inquiries are associated with a given user? Using their ICN?

### Inquiry transfer

However, there's an exception to this general rule. From the CRM portal, an agent can transfer a business inquiry to a new user and/or hide a business inquiry from a user’s dashboard. Personal inquiries cannot be transferred or hidden.
 
For example, if a School Certifying Official (SCO), submits inquiries on behalf of students at their school, and then the SCO retires, an Ask VA agent can reassign their inquiries to a new user.

> [!NOTE] 
> If we use ICN to define authorization for a given inquiry, we need the CRM team to confirm the ICN updates when an inquiry is transferred.
