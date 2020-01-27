# Global Documentation Search

**Author(s):** Bill Fienberg <bill.fienberg@oddball.io>

**Last Updated:** 2020-01-23

**Status:** **Draft**

**Approvers:** Andrew G., Megan K.

## Overview

### Objective

We want to implement a landing page where VFS/VSP team members can search multiple documentation sources from a single entrypoint.

### Background

The documentation we have is spread across many different locations (public repos, private repos, GitHub pages, etc). There currently is not a way for VFS/VSP users to search all of the documentation sources with a single query.

### High Level Design

We are adding a landing page that will contain a form where users can search multiple documentation sources in one location.

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

By logging the term(s) that users are querying, we could theoretically identify trends to help increase the quality of our search results.

### Debugging

_How users can debug interactions with your system. When designing a system it's important to think about what tools you can provide to make debugging problems easier. Sometimes it's unclear whether the problem is in your system at all, so a mechanism for isolating a particular interaction and examining it to see if your system behaved as expected is very valuable. Once a system is in use, this is a great place to put tips and recipes for debugging. If this section grows too large, the mechanisms can be summarized here and individual tips can be moved to another document._

### Caveats

- Access Control: By making the documentation landing page public, it becomes difficult to impossible to allow an unauthenticated user to search documentation from private sources (like a private Github repo). One suggestion is that search results lead to public documentation sources, and we include links to private documentation in the public sources. That way, we can rely on existing access control solutions, while still providing a decent solution. One of the major downsides of that approach is auditing, adding, updating, and maintaining links to/from the public and private sources.

### Security Concerns

_This section should describe possible threats (denial of service, malicious requests, etc) and what, if anything, is being done to protect against them. Be sure to list concerns for which you don't have a solution or you believe don't need a solution. Security concerns that we don't need to worry about also belong here (e.g. we don't need to worry about denial of service attacks for this system because it only receives requests from the api server which already has DOS attack protections)._

### Privacy Concerns

_This section should describe any risks related to user data, PII that are added by this new application. Think about flows of user data through systems, places data is stored and logged, places data is displayed to users. Where is user data stored or logged? How long is it stored?_

### Open Questions and Risks

- Should we index private documentation sources? If so, what private documentation sources can we expose to public users, if any?
- Should the landing page be public only, or should it also support authenticated users?
- How often should we reindex our documentation sources? For perspective, Algolia's open source crawler runs every 24 hours.
- What should the URL of the documentation landing page be? Since we have `design.va.gov`, does something like `docs.va.gov` make sense?
- What is the current opportunity cost of building a custom solution? What are we choosing to delay right now by building a custom solution?
- What is the future opportunity cost of maintaining a custom solution? What will we have to delay in the future by maintaining a custom solution?
- What is the key person risk? How disruptive would it be if the author(s) of the custom solution were unavailable?

### Work Estimates

_Split the work into milestones that can be delivered, put them in the order that you think they should be done, and estimate roughly how much time you expect it each milestone to take. Ideally each milestone will take one week or less._

### Alternatives

- Continue iterating on existing Gatsby site
- Slab
- GitBook

_This section contains alternative solutions to the stated objective, as well as explanations for why they weren't used. In the planning stage, this section is useful for understanding the value added by the proposed solution and why particular solutions were discarded. Once the system has been implemented, this section will inform readers of alternative solutions so they can find the best system to address their needs._

### Future Work

_Features you'd like to (or will need to) add but aren't required for the current release. This is a great place to speculate on potential features and performance improvements._

### Revision History

_The table below should record the major changes to this document. You don't need to add an entry for typo fixes, other small changes or changes before finishing the initial draft._

| Date         | Revisions Made                                                                                                                                   | Author         | Reviewed By |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------- | ----------- |
| Jan 19, 2016 | Initial Draft based off [Arvados's template](https://dev.arvados.org/projects/arvados/wiki/Design_Doc_Template) which is reminiscent of Google's | Albert J. Wong |
