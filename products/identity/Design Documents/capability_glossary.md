# Identity Capability Glossary

This document serves as initial definitions of each of the capabilities the [VA.gov](http://VA.gov) Identity team is responsible for.

## Core Capabilities

1. Logging and Monitoring, Security, and Incident Response
    1. The logging and monitoring, security and response for all authentication components on [VA.gov](http://VA.gov) are updated, monitored and maintained by the Identity team. These solutions are made available to all applications that are integrated with the USiP and SiS. The main solution we share our metrics over is Datadog. We can provide an open to the public live view of the performance of authentication as general and specific as required for all services integrated with Identity.
2. MPI Integration: Master Person Index which is officially the source of truth for VA user information
    1. [User attribute mapping and storage](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Design%20Documents/UserAccount_Attributes.md): `UserAccount`and `UserVerification`objects are created and maintained from two different methods, Single Sign-On (SSOe) and Sign in Service (SiS) authentication workflows.
    2. accounts table lookup - VA employee: ability to lookup user account status information which doesn’t include PII. We store a unique identifier for the user in our persisted databases which then can be used to perform lookups in trusted databases within MPI.
3. [Unified Sign-in Page (USiP)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Design%20Documents/Unified%20Sign%20In%20Pages/README.md): A reusable [VA.gov](http://VA.gov) sign in modal which can be used by any VA application.
    1. Custom user attribute filtering: the service has the ability to apply custom logic on a per attribute and per application basis. For example if the MHV app wanted to redirect all users whose first name started with an A to a special page on their app, our service can provide a less than one sprint delivery of the feature request. We also have several built in already that can be selected with no additional time required, for example if an application wanted to use the sign-in-service instead of SSOe, we can turn that on immediately.
    2. SPA for authentication broker: For single page applications we can provide frontend redirect authentication with our hosted USiP (instead of the application hosting their own login page we can do it for them).
4. [Sign-in-Service (SiS)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Sign-In%20Service/readme.md)
    1. Mocked auth: enables engineers and product testers to click through authentication without needing to enter credentials to test an authenticated endpoint on VA.gov. This doesn't mock login.gov’s interaction, it simply creates a session on [localhost](http://localhost) or dev to enable testing.
    2. OAuth - Mobile
    3. OAuth - Web
5. Inherited Proofing (IP)
    1. DSLogon Grandfathering
    2. MHV in person proofed
6. Usermodel
    1. [VA.gov](http://VA.gov) integration
    2. Mobile integration
    3. Lighthouse integration
    4. AVC/IVC tracking
    5. User Roles
7. Reduce Fraud
    1. Advanced logging
    2. Response
8. [VA.gov](http://VA.gov) User interactions
    1. Opt-in to service
9. SSOe Maintenance
