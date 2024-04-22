# Overview of User Authentication and Authorization for the VA.gov API
This document describes the authentication and authorization process for end users of the VA.gov API.  This process follows the guidelines set forth in NIST Special Publication 800-63-2 *Electronic Authentication Guidelines* for remote authentication of users interacting with government information technology systems over open networks. 

## User Authentication

User authentication is the process by which a user is confidently validated to be who they say they are, such as a person identifying themselves to a system by using a specific email address and a specific password.  The VA.gov API relies on a single identity provider, ID.me, to validate a user's identifying information and to authenticate the user is who they say they are.

A VA.gov user initiates the process of authentication by entering a username and password when prompted on the VA.gov website. Entering the username and password begins the authentication process with ID.me.  Additionally, a user may choose to authenticate themselves with ID.me using credentials previously stored for use with other services, such as Google, Facebook, LinkedIn, Department of Defense Self-service Logon ("DS Logon"), or My HealtheVet ("MHV"). After a user has successfully completed a login flow with ID.me and therefore has been authenticated, ID.me transmits an encrypted package of information called a *SAML (Security Assertion Markup Language) Assertion* back to VA.gov. 

The information transferred back to VA.gov via an encrypted SAML assertion contains the following information at a minimum for LOA3 users:
- First Name
- Middle Name
- Last Name
- E-mail Address
- UUID (universal unique identifier)
- Level of Assurance

Additional information may also include:
- Zip Code
- Gender
- Social Security Number
- Birth Date

This information is stored internally by VA.gov for 30 minutes after the last request, and is referenced by a single piece of information (the UUID) residing in the cookie.  When a VA.gov API resource looks for information about an authenticated user, the system referencs the UUID and refers to the internal datastore to retrieve the appropriate information. 

### Level of Assurance (LOA)
The level of assurance, which is guaranteed by ID.me, is used during the process of authorizing authenticated users with VA.gov API resources.
More Details on LOA in [Understanding LOA on VA.gov](understanding-LOA-on-vetsdotgov.md)]


### Technical Diagram of User Authentication
![Current Authentication Flow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/reference-documents/idme/authentication.png)
(**Note**: Diagram is auto-generated using [SequenceDiagram.org](http://sequencediagram.org) from [this source file](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/reference-documents/idme/authentication.uml). )

## User Authorization

User authorization is the process by which an authenticated user is granted or denied access to resources. Given the example of VA.gov, a user may be properly authenticated (they are who they say they are) but not authorized to access particularly resources or functionality.  

[The table on the LOA page table shows](understanding-LOA-on-vetsdotgov.md#vetsgov-features) the authorization requirements for authenticated users to interact with VA.gov:

In other words, a VA.gov user may use the Facility Locator, Health Care Application, Benefits Explorer, and Education Benefits features without being an authenticated user (the user may be anonymous).  In order to access their "My VA" Dashboard, a user must be authenticated and have a Level of Assurance of at least 1.  Finally, to use the Prescription Refill, Secure Messaging, and Disability Claim Status features, a user must be authenticated and have a Level of Assurance of at least 3.

An authenticated user without the proper authorizations will be shown messaging within the user interface that outlines the next steps they must take to become authorized.

### Technical Diagram of LOA3 Identity Verification
![Current LOA3 Authorization Flow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/reference-documents/idme/verification.png)
(**Note**: Diagram is auto-generated using [SequenceDiagram.org](http://sequencediagram.org) from [this source file](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/reference-documents/idme/verification.uml). )
