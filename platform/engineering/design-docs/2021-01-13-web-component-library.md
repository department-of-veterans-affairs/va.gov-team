# Web Component library

**Author(s):** Brooks Johnson
**Last Updated:** January 13, 2021
**Status:** **Draft** | In Review | Approved
**Approvers:** _Chris Valarida_ \[ \], _Michael Fleet_ \[ \]

_For the rest of the document, replace all the italicized text. The document is designed to guide your thinking through a general design process. Not all sections are always applicable. If a section is not applicable, just say so._

_You should complete the Overview section first. If your design is elaborate, you may want to pause after this section to wait for review comments before investing time into planning details that may get changed in the review._

_Remember, a design document introduces a system or component to a fellow engineer. It should be written before implementing the system to aid in planning and to facilitate discussions about design decisions. After implementation, the design doc will serve as a reference for users, maintainers, and anyone else interested in the system (and for that reason it is still useful to write design docs for systems that have already been written)._

_A design document is not a press release, a vision statement, a research report, or a business plan._

_The intended audience for this document is software engineers, but it should make sense to anyone familiar with software development._


## Overview

### Objective

The goal is to establish a component library based on Web Components, which are a browser standard. This will supercede the current `formation-react` library and some of the liquid HTML template currently in `vets-website`. A non-goal is creating an entirely new visual experience as part of the component library.

The intended audience for this document is frontend engineers.

### Background

We currently have some "components" implemented in HTML/CSS (and sometimes JS) in the `formation` npm package. These can be used anywhere where `formation` is loaded. We also have `formation-react`, which is a package with some of those patterns implemented as React components. These canonly be used in React apps. Lastly, in `vets-website` we have some Liquid templates which implement some of the components/patterns of the design system, and these are only used for content builds.

_The background section should contain information the reader needs to know to understand the problem being solved. This can be a combination of text and links to other documents._

_Do **NOT** describe the solution here. That goes in High Level Design._

### High Level Design

The goal is to establish a single codebase and documentation for the implementation of design system components. This will allow the components to be used in React apps, static HTML, or any other web framework.

_A high-level description of the system. This is the most valuable section of the document and will probably receive the most attention. You should explain, at a high level, how your system will work. Don't get bogged down with details; those belong later in the document._

_A diagram showing how the major components communicate is very useful and a great way to start this section. If this system is intended to be a component in a larger system, a diagram showing how it fits in to the larger system will also be appreciated by your readers._

_Most diagrams will need to be updated over time as the design evolves, so please create your diagrams with a program that is easily (and freely) available and attach the diagram source to the document to make it easy for a future maintainer (who could be you) to update the diagrams along with the document._

## Specifics
_Nothing goes here; all the content belongs in the subsections._

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

