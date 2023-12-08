---- 
# We've moved our docs!

### This document is no longer maintained.

### Please visit the [Platform website](https://depo-platform-documentation.scrollhelp.site/) for the latest information or contact the Platform Support Team via [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1).
----

# AL1 to AL2 Migration Process
**Author(s):** Peter Hill, Ben Allen
**Last Updated:** September 20, 2023
**Status:** **Draft** 
**Approvers:** Clint Little, Joe Tice, Eric Boehs 

## Overview

### Objective
In order to address the migration of existing Platform applications from AL1-based AMIs to AL2-based AMIs we need to establish a pattern. This design document describes that pattern.

### Background
Given that team ownership of the Platform applications that rely on AL1 / AL2 based AMIs is varied, we expect that there may not be a consistent approach to managing the underlying infrastructure of these applications. Going forward, we want to establish a strong pattern for addressing maintenance and upgrades to the underlying infrastructure of all Platform applications. AL2 will not be the end of AMI upgrades. We expect to have to migrate to AL2023 in the near future, and this process should be used again.

### High Level Design
The order of operations for migrating an AL1-based application is as follows --
1. Create a dedicated and standalone repository within the DSVA GH org and named for its categorical function the application (ex. PSO-SOCKS-PROXY)
2. Create a new AL2-based build using Terraform in the standalone repository
3. Use the existing deploy mechanisms to deploy the new AL2 build
4. Operate the AL1 and AL2 based builds side by side for some time
5. Test the application's AL2-based deployment
6. Identify bugs and iterate
7. Cut over to the AL2-based deployments
8. Decommission AL1

Link to Diagram
https://lucid.app/lucidchart/e8eaa8d9-b39b-406e-b4c7-500f458b3ad3/edit?viewport_loc=-851%2C-594%2C2775%2C2779%2C0_0&invitationId=inv_8c416828-b5fd-4d7d-970c-ddb875f1cf28

#### Existing
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/52456633/2391c636-0bfe-448b-903d-5e3cbe120d29)

#### Proposed
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/52456633/0ccfd344-e9cc-4b63-b455-87803ceb7150)

#### Future
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/52456633/7e1f5a63-af7b-43c6-ad62-4aa1230a60c4)

## Specifics

### Detailed Design
_Designs that are too detailed for the above High Level Design section belong here. Anything that will require a day or more of work to implement should be described here._

_This is a great place to put APIs, communication protocols, file formats, and the like._

_It is important to include assumptions about what external systems will provide. For example if this system has a method that takes a user id as input, will your implementation assume that the user id is valid? Or if a method has a string parameter, does it assume that the parameter has been sanitized against injection attacks? Having such assumptions explicitly spelled out here before you start implementing increases the chances that misunderstandings will be caught by a reviewer before they lead to bugs or vulnerabilities. Please reference the external system's documentation to justify your assumption whenever possible (and if such documentation doesn't exist, ask the external system's author to document the behavior or at least confirm it in an email)._

_Here's an easy rule of thumb for deciding what to write here: Think of anything that would be a pain to change if you were requested to do so in a code review. If you put that implementation detail in here, you'll be less likely to be asked to change it once you've written all the code._

### Code Location
- Migrated version of SOCKS Proxy build based on AL2 will be [here](https://github.com/department-of-veterans-affairs/pso-tf-socks-proxy).
- Migrated version of Jumpbox build based on AL2 will be [here](https://github.com/department-of-veterans-affairs/pso-tf-jumpbox).

### Testing Plan
We expect to stand up the migrated version of each application side by side with each of the AL1-based application they will replace.
1. Stand-up the migrated iteration of the application
2. Target the AL2-based version of the application with specific traffic
3. Execute test cases that cover core functionality
4. Iterate
5. Announce migration to user group and request feedback through specific communication channels
6. Introduce the AL2-based version into the pool of possible servers handling application requests
7. Monitor for issues
8. Phase out the older AL1-based version of the application

### Logging
_What your system will record and how._

### Debugging
_How users can debug interactions with your system. When designing a system it's important to think about what tools you can provide to make debugging problems easier. Sometimes it's unclear whether the problem is in your system at all, so a mechanism for isolating a particular interaction and examining it to see if your system behaved as expected is very valuable. Once a system is in use, this is a great place to put tips and recipes for debugging. If this section grows too large, the mechanisms can be summarized here and individual tips can be moved to another document._

### Caveats
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
