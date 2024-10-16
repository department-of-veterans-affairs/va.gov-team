# Policy Document - PIV Login on VA.gov
### Version History
| Version Number | Author(s) | Revision Date | Description of Change |
| --- | --- | --- | --- |
| 1.0 | Joe Niquette | 08/08/24 | Initial creation, this document formally acknowledges approval by the PR approval of Thomas Black. |

## Background
This document addresses the current policy of user authentication via a PIV or CAC on VA.gov and other VA.gov authentication supported applications. It is the intent of VA.gov to service Veterans and their beneficiaries and not service internal VA employees.

### Scope
The scope of this policy applies to applications that utilize the VA.gov Unified Sign in Page or modal. Users in scope of this policy include Veterans and their beneficiaries.

### PIV and CAC Logins, what are they
A PIV/CAC can be used for some services as a Multi Factor Authentication (MFA) method and/or to replace the username and password step of user authentication. Both of these features are independent, thus an application can optionally permit, through one of their Credential Service Providers (CSP), an MFA method that uses PIV/CAC while separately deciding whether to allow functionality to permit a user to login with their PIV/CAC instead of using their username and password. In our context on VA.gov and the apps supported through the Unified Sign in Page, we do not support the user functionality where a PIV/CAC is used instead of entering in their username and password with a CSP. We do support a PIV/CAC to be used as an MFA solution. 

## Policy
The current policy prevents VA.gov from allowing direct authentication with only a PIV/CAC.
PIV/CAC SHALL be used as a Multi Factor Authentication solution.
PIV/CAC MUST not be allowed for use with VA.gov as a primary authentication context as supplied by any CSP other than Login.gov and ID.me. 
This policy statement refers to VA IAMs ability to authenticate users directly with a PIV/CAC in place of a username and password. The authentication context which is supplied by VA IAM for PIV/CAC direct authentication is not permitted for use by VA.gov authentication systems.


## Future considerations
As our CSPs continue to add support for PIV/CAC for methods of logging in, VA.gov will revisit this policy at its statement level. Our philosophy regarding user authentication is to rely solely on the CSP. VA.gov authentication does not want to get into the business of authenticating users, we want to delegate this responsibility to services such as Login.gov. 

There are several reasons for wanting to rely on the CSPs for user authentication, and it's worth outlining those reasons within this document.
The use of PIV/CAC for user authentication requires a robust implementation and approval process by the PIV/CAC issuer authorities. Maintaining access to PIV/CAC information in order to authenticate a user also requires security reviews and cost that is somewhat duplicated with our CSPs as they are already being charged with maintaining user authentication controls.
In other words, we can’t just decide to use PIV/CAC and skip user auth with Login.gov until we go through a robust integration process with the PIV/CAC issuers. This process takes roughly a year to complete.
Our main use case on VA.gov is to support Veterans and their beneficiaries. The number of these users who also happen to have a PIV/CAC is less than 1% of our user base, and shrinks every year. Financially, it doesn’t make sense to attempt to add PIV/CAC to VA.gov as the business case isn’t currently present.

The current solutions, Login.gov, ID.me, MHV, and DS Logon are all services dedicated to supporting user authentication. We have presidential memo’s in place which encourage us to adopt Login.gov in order to support a single credential across multiple agencies. Since we essentially must use some of these services, it makes sense to not duplicate features these services already provide or plan to provide to our agency. We already pay for the features, security controls, compliance, and reliability of these services, it would be irresponsible to create additional feature overlap.
Current VA.gov backend is not set up to store attributes which are presented from PIV/CAC and perform proper validation. Even when PIV/CAC is logged in through an approved service by IAM, our services are not configured to process the different values being sent by IAM with a PIV/CAC login.
Similar to integration requirements, but specifically talks to the current lack of support even through an approved PIV/CAC VA integration. The VA integration was built to support internal authentication only, even if it has since started to support externally facing applications.
The simplification of user authentication options for Veterans and their beneficiaries has been a long standing goal of VA. Adding PIV/CAC as an option, as simple as it may sound, will inevitably cause user concerns and confusion. For this reason, UX degradation must be addressed if we were to ever permit PIV/CAC authentication directly on VA.gov.

## Renewal Instructions

This policy is not set to expire however it will be reviewed yearly to ensure the technical details of the values to validate are still accurate. Reviews will be conducted yearly in the month of May.

## Approval

Thomas Black

Veteran digital identity, VA OCTO

08/08/2024
