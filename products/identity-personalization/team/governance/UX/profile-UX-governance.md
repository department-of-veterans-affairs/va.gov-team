# VA.gov profile UX governance

Last updated: January 2026  

# Jump to

[Overview](#overview)

[Profile files](#profile-files)

- [What VA.gov profile is](#what-va.gov-profile-is)

- [What VA.gov profile is not](#what-va.gov-profile-is-not)

- [How to know if a feature belongs in VA.gov profile](#how-to-know-if-a-feature-belongs-in-va.gov-profile)

[Team touchpoints](#team-touchpoints)

- [Before launch](#before-launch)

- [After launch](#after-launch)

[Profile sections](#profile-sections)

[Have feedback?](#have-feedback?)

# Overview 

This document includes UX governance for adding or updating features to the VA.gov profile. Including direction on information architecture (IA), content, and design. This document does not include development governance.

## Profile files 

* [Product documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile)  
* [Design and content standards](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/team/governance/UX/profile-architecture-design-content-standards.md)  
* [Figma files](https://www.figma.com/files/1499394822283304153/project/176473451)  
* [Research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/Research)  
* [Use cases](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/use-cases)

## What VA.gov profile is 

The VA.gov profile is a single, reliable hub that gives Veterans and their support networks clear visibility and control over the information VA uses about them. It centralizes data so it’s not scattered across multiple systems.

Profile information should be personalized and editable whenever possible. When updates can’t be made directly, the profile should clearly guide users on how to make those changes. We also strive to maintain feature parity with the VA Mobile App.

## What VA.gov profile is not 

* A data storage system. Our team does not manage the back-end systems that store Veteran information. The back-end systems we are integrated with are VA Profile, VA Notify, VEText, MPI, and Lighthouse.  
* An FAQ or informational page. Informational content that is not personal to the user, or would be helpful to unauthenticated users as well, should not live within the profile.  
* For specifics about individual pages, refer to the [linked UX Architecture guidance](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/team/governance/UX/profile-architecture-design-content-standards.md#pages).

# How to know if a feature belongs in VA.gov profile 

A feature or data point should only appear in the VA.gov profile if it meets all of the following criteria:

* Is personal to the user.  
* Has a stable source system with a clearly defined owner.  
* Impacts eligibility, access, preferences, or how VA engages with the user.  
* Is directly editable. Exceptions being Veteran records that rely on stronger security to manage, such as name, date of birth, and service history.

# Team touchpoints 

## Before launch 

1. Review provided profile files.  
2. Once complete, contact the Authenticated Experience team on the \#accountexp-authexp Slack channel for next steps.  
3. Review designs with the Authenticated Experience team between Design Intent and Midpoint Review.  
   1. *Optional: We are also happy to attend Design Intent and Midpoint Review governance calls as a review step.*  
4. Send the staging environment to the Authenticated Experience team for QA prior or during Staging Review.

## After launch 

1. Update use case documentation in GitHub to document expected behaviors of the updates.  
   1. [Link to GitHub use cases.](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/use-cases)  
   2. Use cases are for any who need to understand how the product works both within and outside of OCTO, and should encompass all states of the product including error states.  
2. Update master Figma files with production designs, including new error states and updated user flows. Use cases should match the written GitHub documentation.  
   1. [Authenticated Experience Figma Project](https://www.figma.com/files/project/176473451)

# Profile sections 

[Full VA.gov profile section documentation.](https://dvagov.sharepoint.com/:x:/s/AuthenticatedExperience2/EV7WVgtnIatNn_jNLoT2mrIB2yFdSD5vYKLdXCGwA8N9jw?e=EqLBPS)

There are currently nine available sections to integrate with on VA.gov profile.

1. Personal information: Legal name, date of birth, preferred name, and disability rating.  
2. Contact information: Addresses, phone numbers, and email address.  
3. Service history information: Veteran’s period of service including, branch and years of service.  
4. Financial information: All of the user's money-in and money-out information with the VA, including direct deposit, payments, overpayments, and copays.  
5. Health care settings: Health care settings such as scheduling preferences, messages signature, and health care contacts.  
6. Dependents and contacts: All individuals associated with the user and their account, including dependents and accredited representatives.  
7. Letters and documents: Links to all available documents and letters the user can download.  
8. Communication settings: Including email and text notifications and paperless delivery.  
9. Account security: All information having to do with users VA.gov account security and connected apps.

If your feature does not fit within one of these nine sections, please work with the Authenticated Experience team to identify if the VA.gov profile is the right fit for you.

# Have feedback? 

If there is any content that you have feedback on, or is missing, please reach out to the Authenticated Experience team in Slack on the \#accountexp-authexp channel.
