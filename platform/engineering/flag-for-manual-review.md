# Plag for manual review process

_Replace the previous line with the the title of your project or component and replace the following lines with your name(s), email and the date._  
**Author(s):** Brooks Johnson 
**Last Updated:** February 20, 2020  
**Status:** **Draft** | In Review | Approved  
**Approvers:** _Rian Fowler_ \[ \], _Andrew Gunsch_ \[ \], ...  

_The intended audience for this document is software engineers, but it should make sense to anyone familiar with software development._


## Overview

### Objective
_In the objective section you should include a succinct 1-3 sentence statement of the objective of your project. It is also useful to state non-goals. Bulleted lists are great. Finally, state who the intended audience for the document is._

The goal is to improve our review process which by adding automated processes which will alert a review team when a manual review is required.
These changes are meant to work alongside the Codeowners changes which will give each app team primary responsibility for reviewing their code.

Non-goals: Creating automation which will absolve VFS teams of their review responsibility.

### Background
_The background section should contain information the reader needs to know to understand the problem being solved. This can be a combination of text and links to other documents._

From the perspective of a VFS engineer, the current review process involves:
1. Creating a Draft PR with appropriate changes
1. Getting a peer review
  - Making any changes until the review is approving
1. Marking the PR as `Ready for Review`
1. Getting approval from a member of the VSP *frontend-review-group*

The final approval from the review group is often not helpful, and it slows the process down.
This frustration often leads to VFS teams ignoring this process and they will directly ask for a VSP review before their PR is ready.

### High Level Design

The plan is to use a CI process to run a script each time a change gets pushed to a PR.
This script will look for anything that should trigger a manual review by the VSP review group, and alert them if it finds something.

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
