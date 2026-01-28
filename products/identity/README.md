# **About the OCTO Identity team**


## **Who we are**

The OCTO Identity team manages the authentication integration for VA.gov. We work with identity partners to confirm who’s signing in and provide secure access to VA.gov resources. Our team understands how identity and security works across the entire platform.

## **PRIORITIES**

| **Initiative** | **Status** | **Benefit** |
|----------------|------------|-------------|
| **TBA** |  |  |
| **Sign-In Transition** |  |  |
| [DS Logon Deprecation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Products/DSLogon%20Deprecation) | Now | Improves Veteran sign-in experience and security by consolidating to modern credentials |
| [Post-MHV Deprecation Work](https://github.com/department-of-veterans-affairs/identity-documentation/milestone/4) | Now | Ensures continuity and secure access for Veterans post-MHV deprecation |
| [Production Test Account Replacement Recommendations](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Products/Production%20Test%20Accounts)] | Now | Provides secure testing and training options for internal VA teams and contractors after MHV sunset |
| **Other Strategic Initiatives** |  |  |
| [Delegate Access on VA.gov](https://github.com/department-of-veterans-affairs/identity-documentation/milestone/3) | Now | Supports caregivers and family members with secure delegated access to Veteran services |
| [Identity Fraud Mitigation & Response](https://github.com/department-of-veterans-affairs/identity-documentation/milestone/8) | Next | Enhances protection against identity fraud through proactive monitoring and response strategies |
| [Improving Identity Metrics](https://github.com/department-of-veterans-affairs/identity-documentation/milestone/5) | Next | Strengthens insight into user identity journeys through improved measurement and reporting |
| [MHV & MVH Move into VA.gov](https://github.com/department-of-veterans-affairs/identity-documentation/milestone/1) | As Time Allows | Streamlines access and experience for Veterans by integrating services into VA.gov |
| [Oracle Health Provisioning Expansion](https://github.com/department-of-veterans-affairs/identity-documentation/milestone/1) | As Time Allows | Expands secure access to Oracle Health records and tools |
| [Operational Readiness: Internal Processes](https://github.com/department-of-veterans-affairs/identity-documentation/milestone/10) | Ongoing | Improves team coordination, documentation, and support efficiency |
| [Identity Dashboard: STS Focus](https://github.com/orgs/department-of-veterans-affairs/projects/1646/views/10?pane=issue&itemId=111916085&issue=department-of-veterans-affairs%7Cidentity-documentation%7C323) | In Intake | Provides VA teams with self-service tools for managing STS integrations securely |




## **How we can help**

We help teams set up and monitor a secure signed in experience for VA.gov applications and services. Schedule [flexible office hours or engineering pairing sessions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Support%20Process/identity-office-hours.md) with us to collaborate anytime.

# **Get started with identity**

**Table of Contents**

1. [Signing in](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity#signing-in-to-vagov) to VA.gov
2. [Connecting to Veteran records](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity#connecting-to-veteran-records)
3. [Understanding verified identity](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity#understanding-verified-identity)
4. [Planning and testing identity](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity#planning-and-testing-identity)
5. [Requesting support from the Identity team](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity#requesting-support-from-the-identity-team)
6. [Identity Incident Response](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity#identity-incident-response)

## **Signing in to VA.gov**

Users can sign in on VA.gov using one of our Credential Service Providers (CSPs):

- Login.gov
- ID.me
- DS Logon

Sign-in CTAs for all of our CSPs appear in the upper-right corner of the header for VA.gov pages and products that require a signed in experience. Refer to the [Unified Sign-in Page (USiP)](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/login/unified-sign-in-pages) in our design documentation for implementation details. You can see an [example of one of our health tools here](https://staging.va.gov/health-care/refill-track-prescriptions/).

- This [document on authorization and authentication](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/reference-documents/auth/authentication-and-authorization.md) explains what happens on the backend during each sign in.
- The [VA.gov and mobile app signin outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/login) provides a full overview of the product.
- If VA.gov users need help signing in, they can [visit the FAQ page](https://staging.va.gov/resources/signing-in-to-vagov/) or [contact support](https://staging.va.gov/contact-us/).

## **Connecting to Veteran records**

The [Master Persons Index (MPI) is a VA database](https://dvagov.sharepoint.com/sites/OITEPMOIAM/playbooks/Documents/MPI/VA_MPI_Service_Description.pdf) managed by our VA partners in Identity and Access Management (IAM). For example, MPI connects the user signing in to their VA profile and dashboard. This displays personal information and actions in flight with the VA.

For [verified users](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity#understanding-verified-identity), we’ll get back a list of attributes from MPI that you can use in your VA.gov application. A list of verified user attributes [can be found here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/verified_user_attributes.md). You can view [reference documentation for authenticated endpoints here](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/user/getUser).

If a user logging into VA.gov has not verified their identity, we won’t get these responses. It’s important to plan for both scenarios when [testing your authentication integration](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity#planning-and-testing-identity). Learn more about identity verification and testing identity below.

## **Understanding verified identity**

Users signing in will have a Level of Assurance (LOA) based on whether they've [verified their identity](https://staging.va.gov/resources/verifying-your-identity-on-vagov/) with their CSP. Each CSP has its own [identity verification system](https://staging.va.gov/resources/verifying-your-identity-on-vagov/). The Identity team documents [policies for whether the user meets VA.gov requirements to access signed in attributes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/470b2ba8c4c6c1b7cf168737755ce2607fc92954/products/identity/Products/Design%20Documents/UserAttribute_Rules.md).

> [!NOTE] 
> The way the government defines and talks about identity verification changes over time with new guidance. VA.gov currently uses Level of Assurance (LOA) terminology to talk about identity verification. You can find the [latest information from the National Institute of Standards and Technology (NIST) here](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63a.pdf).

A user signing in with an LOA1 account can save information that isn’t sensitive. A common use case for LOA1 is an application that only requires saving in-progress forms. Users logging into applications that deal with sensitive information would require LOA3 accounts. Common use cases for LOA3 would be VA.gov applications that deal with financial or health data.

To verify identity, [users can verify directly with ID.me, even if they log in with a DS Logon or MHV account](https://help.id.me/hc/en-us/articles/4416188902039-Veterans-Affairs-and-ID-me). Users can also verify their identity by creating a Login.gov account.

Each CSP has different account levels, which are mapped to LOA below.

| LOA1 equivalent on VA.gov  | LOA3 equivalent on VA.gov |
| ------------- | ------------- |
| • My HealtheVet Basic  | • My HealtheVet Premium   |
| • My HealtheVet Advanced  | • DS Logon Level 2  |
| • DS Logon Level 1  | • ID.me LOA3   |
| • ID.me LOA1 | • login.gov IAL 2 |
| • login.gov IAL 1  |   |


## **Planning and testing identity**

Given the multi-tiered nature of identity on [VA.gov](http://va.gov/), there are error states to consider when planning for happy and unhappy paths.

Any product involving identity should review the relevant [identity error handling in more detail here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/error-messages/sign-in-error-handling.md). Our team can [help you plan your authentication integration](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Support%20Process/identity-office-hours.md) to ensure a secure signed in experience.

## **Requesting support from the Identity Team**

### Support resources

- Read our [authentication troubleshooting documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Troubleshooting_logging/troubleshooting_signin.md) to resolve common errors.
- Check out [self-service documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Support%20Process/identity-resources-for-authentication-support.md) from our team and our partners.
- Learn more about our [Sign-in Service (SiS)](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Products/Sign-In%20Service) and how to get started.
- Learn more about our native vets-api [Security Token Service (STS)](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Products/Sign-In%20Service/Engineering%20Docs/Authentication%20Types/Service%20Account%20Auth%20(STS))
- Submit a request to our team directly in Github:
    - [Engineering issue](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/.github/ISSUE_TEMPLATE/1dentity-engineer-support.yml): for authentication help, PR reviews, SiS setup and support, or technical questions.
    - [Product issue](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/.github/ISSUE_TEMPLATE/1dentity-product-support.yml): for data requests, SiS information and onboarding, or new projects.
- Schedule time to [meet with our team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Support%20Process/identity-office-hours.md) to discuss any questions.

### Contact our team

- Slack channel: [#identity-support](https://dsva.slack.com/archives/CSFV4QTKN)
- Product managers:
    - Joelle Wells
    - Lainey Trahan
- VA point of contact:
    - Tom Black ([thomas.black2@va.gov](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/thomas.black2@va.gov))
    - Samara Strauss ([samara.strauss@va.gov](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/samara.strauss@va.gov)).

## Identity Incident Response

- The Identity Incident Response procedure and supporting documents can be found within our [Incident Response Folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Incident%20Response).

### Additional resources
The Identity team will assist VA.gov application teams during the initial client application integration and provide support as detailed [in this document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Support%20Process/identity-resources-for-authentication-support.md).

### Feedback 
Have you worked with the Identity team before? [Share your feedback](https://dj540s05.optimalworkshop.com/questions/52low0ey) 🙏
