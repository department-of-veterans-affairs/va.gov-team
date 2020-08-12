# Mobile SSOe Auth Design Doc

_Replace the previous line with the the title of your project or component and replace the following lines with your name(s), email and the date._  
**Author(s):** Alastair Dawson, Jonathan Julian  
**Last Updated:** August 12th, 2020  
**Status:** **Draft** | In Review | Approved  
**Approvers:** Andrew Gunsch, John Paul Ashenfelter, Michael Fleet 

## Overview

### Objective
Allow VA Mobile App users, authenticated via the IAM SSOe identity provider, to consume endpoints in api.va.gov

### Background
A flagship mobile app for the VA is being developed to augment services available on va.gov with unique mobile features 
such as notifications and biometric sign-in. The VA’s Identity and Access Management System (IAM) maintains a Single Sign On 
identity provider/service for external apps (SSOe). Web clients can currently establish VA.gov sessions from SAML, Okta, 
and across vites via SSO. To enable the mobile app to consume api.va.gov endpoints we’ll allow mobile SSOe signed requests 
to also create VA.gov sessions.

Currently in vets-api all web client session (from va.gov) logic is managed in the `AuthenticationAndSSOConcerns` concern 
that is mixed in to the main `ApplicationController`.  API sessions (from lighthouse) are managed in the `OpenidApplicationController`.

The main difference between the two are that session extension/expiration for web requests are handled in the app while API 
session ttl is part of the token payload.

### High Level Design
- Users login via the app which triggers a call to IAM’s SSOe authorize service which returns an access token
- All requests to vets-api from the mobile app will include the access token in the header
- Vets-api will then query redis for a session stored under that access token
- If a session is not found; vets-api call’s IAM’s introspect endpoint to:
- Validate that the access token is valid
- Return a set of user traits, including MVI’s ICN and other correlation ids
- Vets-api will then instantiate a profile from the user traits and store a session in redis using the access token as a key.
- Subsequent requests using the access token will use the cached session object and profile to authorize upstream API calls to services such as claims.

<img src="images/mobile-ssoe-auth/mobile_ssoe_auth_sequence.png" alt="mobile auth sequence diagram" width="700"/>

## Specifics

### Detailed Design
_Designs that are too detailed for the above High Level Design section belong here. Anything that will require a day or more of work to implement should be described here._

_This is a great place to put APIs, communication protocols, file formats, and the like._

_It is important to include assumptions about what external systems will provide. For example if this system has a method that takes a user id as input, will your implementation assume that the user id is valid? Or if a method has a string parameter, does it assume that the parameter has been sanitized against injection attacks? Having such assumptions explicitly spelled out here before you start implementing increases the chances that misunderstandings will be caught by a reviewer before they lead to bugs or vulnerabilities. Please reference the external system's documentation to justify your assumption whenever possible (and if such documentation doesn't exist, ask the external system's author to document the behavior or at least confirm it in an email)._

_Here's an easy rule of thumb for deciding what to write here: Think of anything that would be a pain to change if you were requested to do so in a code review. If you put that implementation detail in here, you'll be less likely to be asked to change it once you've written all the code._

### Code Location
_The path of the source code in the repository._

### Testing Plan
_How you will verify the behavior of your system. Once the system is written, this section should be updated to reflect the current state of testing and future aspirations._

### Logging
_What your system will record and how._

### Debugging
_How users can debug interactions with your system. When designing a system it's important to think about what tools you can provide to make debugging problems easier. Sometimes it's unclear whether the problem is in your system at all, so a mechanism for isolating a particular interaction and examining it to see if your system behaved as expected is very valuable. Once a system is in use, this is a great place to put tips and recipes for debugging. If this section grows too large, the mechanisms can be summarized here and individual tips can be moved to another document._

### Caveats
_Gotchas, differences between the design and implementation, other potential stumbling blocks for users or maintainers, and their implications and workarounds. Unless something is known to be tricky ahead of time, this section will probably start out empty._

_Rather than deleting it, it's recommended that you keep this section with a simple place holder, since caveats will almost certainly appear down the road._

_To be determined._

### Security Concerns
_This section should describe possible threats (denial of service, malicious requests, etc) and what, if anything, is being done to protect against them. Be sure to list concerns for which you don't have a solution or you believe don't need a solution. Security concerns that we don't need to worry about also belong here (e.g. we don't need to worry about denial of service attacks for this system because it only receives requests from the api server which already has DOS attack protections)._

### Privacy Concerns
_This section should describe any risks related to user data, PII that are added by this new application. Think about flows of user data through systems, places data is stored and logged, places data is displayed to users. Where is user data stored or logged? How long is it stored?_

### Open Questions and Risks
_This section should describe design questions that have not been decided yet, research that needs to be done and potential risks that could make make this system less effective or more difficult to implement._

_Some examples are: Should we communicate using TCP or UDP? How often do we expect our users to interrupt running jobs? This relies on an undocumented third-party API which may be turned off at any point._

_For each question you should include any relevant information you know. For risks you should include estimates of likelihood, cost if they occur and ideas for possible workarounds._

### Work Estimates
_Split the work into milestones that can be delivered, put them in the order that you think they should be done, and estimate roughly how much time you expect it each milestone to take. Ideally each milestone will take one week or less._

### Alternatives
_This section contains alternative solutions to the stated objective, as well as explanations for why they weren't used. In the planning stage, this section is useful for understanding the value added by the proposed solution and why particular solutions were discarded. Once the system has been implemented, this section will inform readers of alternative solutions so they can find the best system to address their needs._

### Future Work
_Features you'd like to (or will need to) add but aren't required for the current release. This is a great place to speculate on potential features and performance improvements._

### Revision History
_The table below should record the major changes to this document. You don't need to add an entry for typo fixes, other small changes or changes before finishing the initial draft._

Date | Revisions Made | Author
-----|----------------|--------
Jan 24, 2020 | Added approvers, status, and privacy concerns. | Andrew Gunsch
Jan 19, 2016 | Initial Draft based off [Arvados's template](https://dev.arvados.org/projects/arvados/wiki/Design_Doc_Template) which is reminiscent of Google's | Albert J. Wong
