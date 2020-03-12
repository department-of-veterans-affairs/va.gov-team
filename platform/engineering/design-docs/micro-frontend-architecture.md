# Micro Front end Architecture

**Author(s):** Chris Valarida (chris.valarida@adhocteam.us)  
**Last Updated:** February XX, 2020  
**Status:** **Draft** | In Review | Approved  
**Approvers:** Dror Matalon, Andrew Gunsch, Rian Fowler, Wyatt Walter


## Overview

### Objective
To determine an engineering approach that enables application teams to operate
independently.

This document is intended for front end and DevOps engineers on the
Veteran-facing Services Platform (VSP) and Veteran-Facing Services (VFS) teams.


### Background
`vets-website` currently faces a number of issues affecting:
- Build process
  - **Builds are slow** and **require a lot of memory**
- Team autonomy
  - **CI failures** affect all teams
  - **Individual applications can't roll back** without rolling back all
    applications
  - **Developing applications requires CMS content**
  - Application dependencies are tied together making **library upgrades
    difficult,** time-consuming, and risky

### High Level Design

**Each application** will be version controlled in its own **separate
repository** with its own **CI pipeline** and **deployment schedule**.

<!-- TODO: Move this to the deploy section of the detailed design -->
![Separate Builds - Separate content bucket](https://user-images.githubusercontent.com/12970166/74556016-d1bbb700-4f11-11ea-9a6f-d562e9048a0a.png)
[Link to original diagram](https://www.lucidchart.com/invitations/accept/5ca3645c-fcf8-4cd1-bad2-d8ff17c9f1ba)

To support this, **the [platform
code](https://github.com/department-of-veterans-affairs/vets-website/tree/c8e47d202e1457807de6c2a179f98767cc0ae9cc/src/platform)**
will be broken down and **made into NPM modules** which can be imported and used
in the applications. VSP will **provide guidance** on how to **create a new
application** from scratch and **migrate an existing application** to a new repo.


## Specifics


### Detailed Design
As mentioned in the [High Level Design](#high-level-design), there are three
main points of contact between the platform and applications.

1. [Code](#code)
1. [CI](#ci)
1. [Deployment](#deployment)


#### Code
Applications will live in their own separate repositories. This provides a
number of benefits:
- A clearer separation of concerns between applications
- Independent dependency management
  - Each application will have its own `package.json` and `node_modules`
    independent of any other application, allowing teams the choice to upgrade
    dependencies when they have the bandwidth
  - This narrower scope makes upgrading dependencies less onerous, so teams will
    be more likely to do it


##### Platform Responsibility
- Cross-cutting functionality
  - Utilities
    - Authentication
    - API helpers
  - Forms library
- Release notes on package updates
- Code reviews on platform code

Application teams are free to make PRs to platform code, but it's up to the
platform team to review and accept or reject the changes.


##### Application Teams Responsiblity
- Ensuring their dependencies are up-to-date
- Code reviews on application code


#### CI
Because applications have independent repositories, they can also manage their
CI pipeline independently. Because there will be less to build and test in each
individual pipeline, the Build-Release-Deploy (BRD) loop will be much shorter.


##### Platform Responsibility
- Infrastructure
- Default configurations

##### Application Teams Responsibility
- Maintaining CI configurations

#### Deployment
Each application will have its own deployment cycle independent of the platform
and other application code. This will allow teams to define the deployment cycle
that works best for them.


##### Platform Responsibility
- Infrastructure
  - Guides on how to use it
- Default configurations


##### Application Teams Responsibility
- Defining the deployment cycle
- Deploying code and other assets
- Rolling back changes

<!--

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
