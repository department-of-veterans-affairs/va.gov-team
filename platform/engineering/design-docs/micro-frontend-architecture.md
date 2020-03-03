# Micro Front end Architecture

**Author(s):** Chris Valarida (chris.valarida@adhocteam.us)  
**Last Updated:** February XX, 2020  
**Status:** **Draft** | In Review | Approved  
**Approvers:** Dror Matalon, Andrew Gunsch, Rian Fowler, Wyatt Walter


## Overview

### Objective
To determine an engineering approach that enables application teams to
operate independently.

This document is intended for front end and DevOps engineers on the
Veteran-facing Services Platform (VSP) and Veteran-Facing Services (VSA) teams.


### Background

<!-- Could put a definitions section here if it becomes useful -->

#### The State of `vets-website`

##### Build
The `vets-website` build is responsible for a lot of things. The most important
pieces include:
- Pulling content from the [CMS](#CMS)
- Transforming that content into HTML files
- Validating the HTML files including detecting broken links and accessibility violations
- Building `vets-website` common and application specific JavaScript bundles
- Building `vets-website` common and application specific CSS bundles
- Running all >5k unit tests for all applications
- Running all end-to-end tests for all applications (non-integration singe page app browser tests)


##### Deploy
When `vets-website` is deployed, all content and applications are deployed
together. **There is no way to deploy one application without deploying
everything.**

There is, however, a way to deploy the latest content from the CMS without
deploying the latest application code. This is called a **content-only deploy**.
The latest `vets-website` release is used instead of building code in the latest
commit of the `vets-website` `master` branch.


#### The Problems
##### Failures in one Service affect all other Services
When one application team introduces test failures into `master`, all PRs from
all teams that include the offending commit in `master` will fail in Continuous
Integration (CI) because all tests are run, not just the tests for a single
application.

**Example:** Team A introduces a test failure in `master`. Team B has an urgent
bug fix that needs deployed as soon as possible, so they make a branch of
`master` and quickly fix it. Team B's branch can't be merged until Team A's
unrelated test failure is fixed.

Likewise, when there's a content issue, such as an accessibility violation, all
application teams' PRs will fail in CI until the accessibility violation has
been resolved by a content editor.

**Important exception:** Test failures in the latest `master` branch will not prevent
content-only deployments since those use the latest stable `vets-website`
release.


###### Test failures in `master`? How?
This happens most frequently when two individual branches work on similar parts
of the code. The tests on each branch pass, but the combined changes cause the
result—`master`—to fail.

**TODO:** Use an actual example of where this happened.


##### Developing applications requires CMS content
To run `vets-website` locally for application development, front end engineers
must either have access to the CMS content directly via the SOCKS proxy or fetch
the latest stable cached content from an AWS S3 bucket. Not having this content
will result in a failure at build time.

<!-- What other problems are we running into with the current architecture? -->
<!-- Code ownership? -->
<!-- Dependency management? -->
<!-- Deploy schedule? -->


### High Level Design

**Each application** will be version controlled in its own **separate
repository** with its own **CI pipeline** and **deployment schedule**.

![Separate Builds - Separate content bucket](https://user-images.githubusercontent.com/12970166/74556016-d1bbb700-4f11-11ea-9a6f-d562e9048a0a.png)
[Link to original diagram](https://www.lucidchart.com/invitations/accept/5ca3645c-fcf8-4cd1-bad2-d8ff17c9f1ba)


To support this, the [platform
code](https://github.com/department-of-veterans-affairs/vets-website/tree/c8e47d202e1457807de6c2a179f98767cc0ae9cc/src/platform)
will be broken down and made into discreet **NPM modules** which can be imported
and used in the applications.

<!--
  Should I add a transition plan here, in the Specifics section, as a new
  section after that, or not at all?
-->


## Specifics

**Coming soon to a design doc near you!**

<!--

### Detailed Design
_Designs that are too detailed for the above High Level Design section belong
here. Anything that will require a day or more of work to implement should be
described here._

_This is a great place to put APIs, communication protocols, file formats, and
the like._

_It is important to include assumptions about what external systems will
provide. For example if this system has a method that takes a user id as input,
will your implementation assume that the user id is valid? Or if a method has a
string parameter, does it assume that the parameter has been sanitized against
injection attacks? Having such assumptions explicitly spelled out here before
you start implementing increases the chances that misunderstandings will be
caught by a reviewer before they lead to bugs or vulnerabilities. Please
reference the external system's documentation to justify your assumption
whenever possible (and if such documentation doesn't exist, ask the external
system's author to document the behavior or at least confirm it in an email)._

_Here's an easy rule of thumb for deciding what to write here: Think of anything
that would be a pain to change if you were requested to do so in a code review.
If you put that implementation detail in here, you'll be less likely to be asked
to change it once you've written all the code._


### Code Location
_The path of the source code in the repository._


### Testing Plan
_How you will verify the behavior of your system. Once the system is written,
this section should be updated to reflect the current state of testing and
future aspirations._


### Logging
_What your system will record and how._


### Debugging
_How users can debug interactions with your system. When designing a system it's
important to think about what tools you can provide to make debugging problems
easier. Sometimes it's unclear whether the problem is in your system at all, so
a mechanism for isolating a particular interaction and examining it to see if
your system behaved as expected is very valuable. Once a system is in use, this
is a great place to put tips and recipes for debugging. If this section grows
too large, the mechanisms can be summarized here and individual tips can be
moved to another document._


### Caveats
_Gotchas, differences between the design and implementation, other potential
stumbling blocks for users or maintainers, and their implications and
workarounds. Unless something is known to be tricky ahead of time, this section
will probably start out empty._

_Rather than deleting it, it's recommended that you keep this section with a
simple place holder, since caveats will almost certainly appear down the road._

_To be determined._


### Security Concerns
_This section should describe possible threats (denial of service, malicious
requests, etc) and what, if anything, is being done to protect against them. Be
sure to list concerns for which you don't have a solution or you believe don't
need a solution. Security concerns that we don't need to worry about also belong
here (e.g. we don't need to worry about denial of service attacks for this
system because it only receives requests from the api server which already has
DOS attack protections)._


### Privacy Concerns
_This section should describe any risks related to user data, PII that are added
by this new application. Think about flows of user data through systems, places
data is stored and logged, places data is displayed to users. Where is user data
stored or logged? How long is it stored?_

-->
### Open Questions and Risks

#### Should we have an S3 bucket for each application?
We could have a dedicated S3 bucket for each application.

![Separate Builds - All separate buckets](https://user-images.githubusercontent.com/12970166/74556070-f6179380-4f11-11ea-8f2f-ee2d44733415.png)
[Link to original diagram](https://www.lucidchart.com/invitations/accept/5ca3645c-fcf8-4cd1-bad2-d8ff17c9f1ba)

**Pros:**
- More-or-less complete autonomy for application teams over what belongs in
  their buckets.
  - How important is this?
  
**Cons:**
- Added infrastructure complexity
  - More buckets to manage (obviously)
  - Routing is a little more complicated since we have to know which bucket to
    point each service to since they won't all be the same one
  - How bad is this?

#### How does the `site-wide` code fit into this?
I *think* the `site-wide` code would be handled the same as any other
application code, but I'm not familiar with all the cross-cutting concerns
introduced in there which might make development difficult.

<!--
### Work Estimates
_Split the work into milestones that can be delivered, put them in the order
that you think they should be done, and estimate roughly how much time you
expect it each milestone to take. Ideally each milestone will take one week or
less._


### Alternatives
_This section contains alternative solutions to the stated objective, as well as
explanations for why they weren't used. In the planning stage, this section is
useful for understanding the value added by the proposed solution and why
particular solutions were discarded. Once the system has been implemented, this
section will inform readers of alternative solutions so they can find the best
system to address their needs._


### Future Work
_Features you'd like to (or will need to) add but aren't required for the
current release. This is a great place to speculate on potential features and
performance improvements._


### Revision History
_The table below should record the major changes to this document. You don't
need to add an entry for typo fixes, other small changes or changes before
finishing the initial draft._

Date | Revisions Made | Author
-----|----------------|--------
Jan 24, 2020 | Added approvers, status, and privacy concerns. | Andrew Gunsch
Jan 19, 2016 | Initial Draft based off [Arvados's template](https://dev.arvados.org/projects/arvados/wiki/Design_Doc_Template) which is reminiscent of Google's | Albert J. Wong
 -->
