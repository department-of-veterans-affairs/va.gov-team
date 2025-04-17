# Authorization requirements for Ask VA

Ask VA on VA.gov Team

Last updated by @tygindraux: April 17, 2025

This document outlines Ask VA requirements with regards to users, their inquiries and attachments, authentication and authorization.

Jump to:
- [Glossary](#glossary)
- [1. What is an acceptable levelOfAuthentication and Level of Assurance?](#1-what-is-an-acceptable-levelofauthentication-and-level-of-assurance)
- [2. How does an inquiry get associated with an account?](#2-how-does-an-inquiry-get-associated-with-an-account)
- [3. When does Ask VA require a user to be authenticated?](#3-when-does-ask-va-require-a-user-to-be-authenticated)
- [4. Who has access to a given inquiry?](#4-who-has-access-to-a-given-inquiry)

## Glossary

|Term|A.K.A.|Description|
|:--|:--|:--|
|Authentication|authn|Ensures you are who you say you are.|
|Authorization|authz|Ensures you can only access and/or modify data that your role allows.|
|Credential Service Provider|CSP|A trusted entity that issues digital credentials to users, verifying their identity and enabling them to access digital services. Users can sign into VA.gov using the following CSPs: Login.gov, ID.me, DS Logon and, previously, My HealtheVet.|
|Integration Control Number|ICN|A unique identifier assigned to each patient entry in the Master Patient Index linking patients to their records across VA systems. Anyone with verified account will get a unique ICN when signing into VA.gov.|
|Level of Assurance|LOA|User credentials will have an associated Level of Assurance (LOA) based on whether a user has verified their identity with the credential service provider.|
|levelOfAuthentication||A required field for the Submit Inquiry endpoint indicating a user’s authentication status. Acceptable values are `authenticated`, `unauthenticated`, `personal`, or `business`, representing different levels or types of user verification and context.|

## 1. What is an acceptable levelOfAuthentication and Level of Assurance?

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

## 2. How does an inquiry get associated with an account?

When an authenticated user submits an inquiry, the ICN allows us to associate the inquiry with a user entity. Here's how it works:

1. ICN from the user session is extracted in the controller and passed into the payload via Inquiries::Creator.
2. The payload sent to the CRM has three main sections:
- Inquiry Information (question, category, topic, attachments, etc.)
- Submitter Profile (contact info, SSN/EDIPI if available)
- Veteran Profile (contact info, SSN/EDIPI if available)
3. Crm::Service transmits this structured payload along with an X-VA-ICN header to Microsoft Dynamics.

> [!NOTE]
> We can infer that the following happens on the Dynamics side, but need to confirm with the CRM team:
> - The ICN is used as a foreign key to associate the inquiry with an existing Contact or Patient entity (or to de-duplicate an existing record).
> - If the ICN does not already exist, CRM likely creates a new Contact record using the provided submitter/veteran profile data.
> - The Inquiry is stored as a custom entity (e.g., Inquiry__c or similar), linked to the associated Contact via a relationship.
> This allows CRM to maintain a persistent, deduplicated view of the user across multiple submissions.

When a user is not authenticated, there is no ICN available. Here's how it works differently:

1. The payload is still structured with the same three sections, but:
- The X-VA-ICN header is nil.
- current_user is nil, so fields like EDIPI, ICN, and sometimes SSN are missing from the submitter profile.
2. In Crm::Service, this submission goes through the same endpoint, but without any account identifiers.

> [!NOTE]
> We can infer that the following happens on the Dynamics side, but need to confirm with the CRM team:
> - Dynamics likely creates a new standalone Contact or Case using just the submitter’s contact info (email, name, etc.).
> - Since there’s no ICN, it cannot be linked to a persistent identity.
> - As a result, this inquiry behaves more like a “guest ticket” — it’s isolated and be under "unauthenticated"

## 3. When does Ask VA require a user to be authenticated?

Ask VA Admins (called, AVA Admins), have the ability to change queue and topic settings at any point. This includes:
- whether or not their queue requires authentication
- whether or not their queue allows attachments
- whether or not their queue allows replies and for how long after an inquiry was last solved (reply window)

We receive these authentication flags using the [Get Topics](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/integration/crm_api/Form_GetTopics.md) endpoint.

### Additional sign in rules on VA.gov

We also require sign in based on inquiry type. We determine this by asking a user, 'Who is your question about?' and if they choose 'Myself' or 'Someone else', sign in is required. 

> [!NOTE] 
> This [sign in documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Strategy/Phase%202/2025-04%20Sign%20in%20rules.md#what-we-know-about-sign-in-rules-for-ask-va) describes sign in scenarios from a user experience perspective.

## 4. Who has access to a given inquiry?

The general rule of thumb is that a user should only be able to access inquiries that they submit themselves. Using the [Retrieve Inquiries](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/integration/crm_api/Dashboard_RetrieveInquiries.md) endpoint, we retrieve inquiries associated with a specific user

For example, if user A submits an inquiry on behalf of user B, then, user B cannot access the inquiry. Even though it's about them.

> [!NOTE] 
> How do we filter which inquiries are associated with a given user? Using their ICN?

### Inquiry transfer

However, there's an exception to this general rule. From the CRM portal, an agent can transfer a business inquiry to a new user and/or hide a business inquiry from a user’s dashboard. Personal inquiries cannot be transferred or hidden.
 
For example, if a School Certifying Official (SCO), submits inquiries on behalf of students at their school, and then the SCO retires, an Ask VA agent can reassign their inquiries to a new user.

> [!NOTE] 
> If we use ICN to define authorization for a given inquiry, we need the CRM team to confirm the ICN updates when an inquiry is transferred.
