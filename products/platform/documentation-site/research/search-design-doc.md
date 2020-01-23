# Global Documentation Search

**Author:** Bill Fienberg
**Last Updated:** 2020-01-23
_Replace the previous line with the the title of your project or component and replace the following lines with your name(s), email and the date._

_For the rest of the document, replace all the italicized text. The document is designed to guide your thinking through a general design process. Not all sections are always applicable. If a section is not applicable, just say so._

_You should complete the Overview section first. If your design is elaborate, you may want to pause after this section to wait for review comments before investing time into planning details that may get changed in the review._

_Remember, a design document introduces a system or component to a fellow engineer. It should be written before implementing the system to aid in planning and to facilitate discussions about design decisions. After implementation, the design doc will serve as a reference for users, maintainers, and anyone else interested in the system (and for that reason it is still useful to write design docs for systems that have already been written)._

_A design document is not a press release, a vision statement, a research report, or a business plan._

_The intended audience for this document is software engineers, but it should make sense to anyone familiar with software development._

## Overview

### Objective

We want to implement a public landing page where VFS/VSP team members can search multiple documentation sources from a single entrypoint.

### Background

The documentation we have is spread across many different locations (public repos, private repos, GitHub pages, etc). There currently is not a way for VFS/VSP users to search all of the sources with a single query.

### High Level Design

We are adding a public landing page that will contain a form where users can search all of our public documentation in one location.

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

| Date         | Revisions Made                                                                                                                                   | Author         | Reviewed By |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------- | ----------- |
| Jan 19, 2016 | Initial Draft based off [Arvados's template](https://dev.arvados.org/projects/arvados/wiki/Design_Doc_Template) which is reminiscent of Google's | Albert J. Wong |
