# Mobile API Design Doc

**Author(s):** Jonathan Julian (CTO Support, Engineering), Alastair Dawson (CTO Support, Engineering)  
**Last Updated:** August 17, 2020  
**Status:** **Draft** | In Review | Approved  
**Approvers:** Andrew Gunsch, John Paul Ashenfelter, Michael Fleet, Johnny Holton  

## Overview

### Objective
The new flagship VA Mobile app contains functionality that is available on VA.gov, as well as some novel features. 
The app needs to be powered by an API providing authenticated Veteran data. This API should:

- Reuse backend integrations wherever possible
- Not add complexity to an already complex system
- Be able to be built and maintained without undue overhead
- Complement and even bolster adjacent projects such as VA.gov web and Lighthouse

This document is intended for engineers and engineering leadership alike.

### Background
In the winter/spring of 2020, a “VA Mobile App Discovery Sprint” was held to determine the feasibility of a flagship 
mobile app for the VA. It was immediately apparent that the authenticated Veteran experience would provide the most value, 
similar to the VA.gov experience. The goal of the mobile app is not to replicate every bit of VA.gov, but to provide a 
new mode of communication to allow Veterans to interact more easily with the department. Since VA.gov is powered by 
vets-api and VSP, it seemed like a natural fit for the mobile app to be powered by APIs in the same space.

### High Level Design
Since vets-api already contains integrations to backend services that the mobile app will need 
(MVI, Claims, <list more here>), the mobile API will be built inside of the vets-api codebase, and exposed in the same 
 way that VA.gov API endpoints are exposed.

The mobile API will provide functionality that is currently exclusive to VA.gov as well as some already-public functionality 
from Lighthouse, so existing integrations will be reused. A Rails engine will house the mobile API surface area, with necessary 
functionality connected as closely as possible to the backend integrations. In some cases, this may be a simple passthrough 
(/mobile/abc just invokes /abc), while in other cases the mobile API will provide its own presentation layer on top of the 
integrations. This will allow the mobile API to grow independently of the rest of vets-api, while providing a consistent API 
that will be useful for future mobile applications to consume.

All endpoints will be versioned, so that long-lasting mobile releases will continue to function into the future. When 
modifications are required, changes will be made in a way to not break existing clients (versioning). The team is considering 
building a machine-readable discovery API endpoint to decouple the mobile app from hard-coded urls.

All mobile authorization will be confined to this Rails engine. The mobile app will require some new endpoints as well, and 
these will be built in the Rails engine for isolation.

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
