# POV - Documentation in general

<hr>

* [Problem/Solution](#problemsolution)
* [Current situation](#current-situation---see-image)
* [Proposal](#proposal---see-image)
* [Impact of proposal](#impact-of-proposal)
* [Revised process for filing issues](#revised-process-for-filing-issues)
* [Rename/Consolidate repos](#renameconsolidate-repos)

<hr>

## Problem/Solution

### Problems
1. We have a lot of documentation in different locations. Some is duplicated in 2 (or more) locations. Where content is duplicated, it is difficult to tell which of the content supercedes the other content in different location(s).

    * This creates problems for DSVA, AdHoc, and external teams -- people need to ask someone which documentation is the most current. "Asking people" isn't scalable.
    * We want a single source of truth for "work practices."
    * We want to point to those sources of truth from public-facing websites like the Handbook and the API site, as well as from other documentation.

1. Most documentation is in private repos. This means we have to manage Github access for external teams, which creates admin overhead. It's also error prone, which creates more instances of "asking people."

1. Some "work practices" differ depending on whether the team is internal or external, e.g., how to get your SSH key added to the authorized list is different for the two team types.

1. Documentation is not as thorough as it should be -- assumes knowledge on the part of the reader that we shouldn't assume, e.g., that people know what a Github pull request is.

1. Some documentation is not relevant to DSVA or to external contractors, e.g., [PIV card process]() is AdHoc-specific and should not be in the VA Github org.

1. Many repositories are named "vets.gov." Since that is no longer our domain, we'd like to rename our repos. Also we have too many repos (why is there a separate repo for the content style guide?) We could use this time/effort to better organize our repos.



### Solution

* A central location for all "work practices" documentation
* The location is a public repo with READ access
* Consistent labeling indicates when a process differs for internal vs external teams
* All documentation thoroughly explains each process
* All documentation is generalized so that it applies to anyone who works on the Veteran Tools Platform. Any DSVA-specific content is moved to the private DSVA-only digitalservice repo. AdHoc-specific content is moved to AdHoc's Github org.
* Rename our repos so they make sense to a person who has none of the historical knowledge of the vets.gov team or its work.
* Consolidate repos so there are fewer "places I have to go to look for things."
* All documentation is written in Markdown -- the easiest-to-use markup language. This allows DSVA and AdHoc to quickly make changes without wasting time (e.g., waiting 5 minutes for a change to render in Fractal - ugh).

### Technical Notes

* When we move content from repo to repo (or delete it), we want to retain Github history.


<hr>

## Current situation - [see image](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/documentation-current2.png)


### vets-contrib repo

* **[Repo](https://github.com/department-of-veterans-affairs/vets-contrib)**

* **Purpose:** "Ad Hoc vets.gov issues & docs"

* **Privacy:** Private

* **Contains:**
  * A very [slimmed-down version of "Developer Process" for website and api](https://github.com/department-of-veterans-affairs/vets-contrib/tree/master/Developer%20Process)
  * Developer process documentation to support the VA APIs site, e.g., [Central Mail](https://github.com/department-of-veterans-affairs/vets-contrib/tree/master/docs/External%20Services/Central%20Mail)
  * [Code for the public-facing VA APIs site](https://github.com/department-of-veterans-affairs/vets-contrib/tree/master/developer-portal)
  * Meeting notes
  * Misc materials from AdHoc platform pilot and other random stuff

* **Current READ access to repo:** Yes
  * Process was changed so we don't need external teams to access this repo anymore. ~~They only have access to this because this is where Liz files an issue for SSH keys to be added. The issue then pings the developer when Brian has added their key in the devops repo.~~

<hr>

### vets.gov-team repo

* **[Repo](https://github.com/department-of-veterans-affairs/vets.gov-team)**

* **Purpose:** Non-private DSVA materials

* **Privacy:** Private

* **Contains:** All things not contract-related; All things DSVA considers sharable to VA employees and/or to any contractor

* **Current READ access to repo:** Yes
    * External teams need access to "Products" folder to learn/share with other teams working on the Veteran Tools Platform.
    * *Note:* External teams have WRITE access in order to create and upload files to document their work for historical and compliance reasons.

<hr>

### platform-docs repo

* **[Repo](https://github.com/department-of-veterans-affairs/va-digital-services-platform-docs)**

* **Purpose:**
    * Original idea: Content to support the public-facing ["platform documentation" site](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/index.html)
    * Current idea: Most documentation was moved to the [Handbook](https://department-of-veterans-affairs.github.io/va-digital-service-handbook/). Developer documentation remains here (until we decide where "work practices" documentation lives).

* **Privacy:** Public

* **Contains:** Code and content to support the public-facing ["platform documentation" site](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/index.html)

* **Current READ access to repo:** Yes
    * Technically they have READ access to the repo content, but they're not doing that (tmk).
    * External teams are using the public-facing website to view content.

<hr>

### Development-related repos

* **Repos:**
  * [vets-website repo](https://github.com/department-of-veterans-affairs/vets-website)
  * [vets-api repo](https://github.com/department-of-veterans-affairs/vets-api)
  * [vets-json-schema repo](https://github.com/department-of-veterans-affairs/vets-json-schema)

* **Purpose:** Code repositories for Veteran Tools Platform

* **Privacy:** Public

* **Contains:** Describes how to get the sites running locally; Code repositories for Veteran Tools Platform

* **Current READ access to repo:** Yes
    * External developers have WRITE access to do their work

<hr>

### vets-api-mockdata repo

* **[Repo](https://github.com/department-of-veterans-affairs/vets-api-mockdata)**

* **Purpose:** API Mockdata

* **Privacy:** Private

* **Contains:** API mockdata

* **Current READ access to repo:** Yes
    * External teams have READ access to order to use the mockdata

<hr>

### devops repo

* **[Repo](https://github.com/department-of-veterans-affairs/devops)**

* **Purpose:** Devops team materials

* **Privacy:** Private

* **Contains:** Devops team materials

* **Current READ access to repo:** Yes
    * External teams have READ access in order to get the SSH config file they need in order to set up their local environment

<hr>

### vets-ato repo

* **[Repo](https://github.com/department-of-veterans-affairs/vets.gov-ato)**

* **Purpose:**
    * Storage of vets.gov ATO materials

* **Privacy:** Private

* **Contains:** ATO historical and current documents

* **Current READ access to repo:** Yes
    * External teams have READ access to view the current ATO documents


<hr>
<hr>

## Proposal - [see image](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/documentation-proposed2.png)

### vets-contrib repo

* **Assumptions:**
  * This is public-facing content for teams (internal or external) who want to use VA APIs.
  * "VA APIs" do not include "vets.gov APIs."
  * "vets.gov" APIs are documented elsewhere (in context with other "work practices" for the vets-website).

* **Goals:**
  * Reframe this repo (and the site) as the location for all content and documentation for VA APIs.
  * Repo + Site should help these teams understand how to use the VA APIs and provide all documentation related to using them.

* **Proposed:**
  * Works best as the "content location" that supports the VA APIs site
  * Include only the the code supporting the site, the developer process documentation needed to support the site, and all "work practices" documentation surrounding work on the VA APIs (exclude vets.gov APIs, for now)
  * Move (or remove) all other content

<hr>

### vets.gov team repo

* **Assumptions:**
  * Need a location for storing DSVA materials sharable with VA employees and with contractors.
  * Need a product-related location accessible to external teams so they can learn from others and document their own products (for historical and compliance reasons).
  * Should be private to control VA and contractor access to DSVA materials.

* **Goal:** Repo continues to work as it does today.

* **Proposed:**
  * Same as today.
  * Give external teams WRITE access to this repo so they can store their own documents.
    * WRITE access is whitelisted, so people not on the whitelist have to submit a PR in order to make changes.

<hr>

### platform-docs repo

* **Assumptions:**
  * This repo and the site duplicate existing content.

* **Goal:** Delete this repo and the site.

* **Proposed:**
  * The repo and the site goes away. Instead content will be located in the new "work practices" location and referenced from the Handbook (or from other documentation).


<hr>

### Development-related repos

* **Assumptions:**
  * These repos are OK as is.

* **Goal:**
  * Repos continue to work as they do today.

* **Proposed:**
  * Repos continue to work as they do today.

<hr>

### vets-api-mockdata repo

* **Assumptions:**
  * This repo is part of the automated build process for deploying Vets-API instances.
  * To avoid additional work, keep this repo (and access) as is.

* **Goal:**
  * Repo (and its access) continues to work as it does today.

* **Proposed:**
  * Repo (and its access) continues to work as it does today.


<hr>

### devops repo

* **Assumptions:**
  * Eventually we will make the PIV process work to link developers SSH keys for them.

* **Goal:**
  * Make this repo only necessary for the devops team.

* **Proposed:**
  * Reframe this repo to focus on the devops team. Any content that is not sensitive and should be shared beyond the devops team should be moved to the new location for the "work practices" documentation.
  * In particular, move the ssh config file into the existing private "Work Practices folder" in vets.gov-team repo. External teams need access to this file. They already have access to vets.gov-team repo, so it's easier to move the ssh config file here than to manage multiple team's access to the devops repo. Devops team is responsible for maintaining the ssh config file.


<hr>

### vets-ato repo

* **Assumptions:**
  * To avoid additional work, keep this repo (and access) as is.

* **Goal:**
  * Repo (and its access) continues to work as it does today.

* **Proposed:**
  * Repo (and its access) continues to work as it does today.
  * We will find a different method for external developers to request an ATO review.


<hr>

### Location for "work practices" documentation

1. Option 1 - create a new public repo

    * PUBLIC documentation
      * Create a new public repo called "something-documentation"
      * Migrate all existing "work practices" documentation to that location.
      * Review all public documentation for duplicated content and outdated content
      * Restructure all public documentation to make it easier for people to find things in a logical way
      * Use consistent labeling for internal vs external differences in a process
    * PRIVATE documentation
      * Keep the remaining parts of vets.gov-team repo as is.
      * Rename private "vets.gov-team" repo to "something-team" **[we decided "vets-[something] works best]**
      * Keep the existing (now empty) "Work practices" folder
      * This folder will be the location for protected documentation
        * Some content needs to be protected, e.g., staging passwords should not be public (but must be available for external contractors).
        * Move protected documentation into vets-team repo "Work Practices" folder. This folder will contain ONLY protected content and, therefore, will be much smaller than it is now.

1. Option 2 - Github wiki

    * Create wiki in vets.gov-team repo
    * Wikis are easy to use and content can be written in Markdown.
    * Subfolders are not supported, but can be mimicked with a sidebar.
    * Given the amount of "work practices" docs, this isn't a good solution - massive list of pages and massive sidebar

<hr>

## Impact of proposal

* External teams would have access to
  * Handbook site (which would link to specific documentation in the new public "vets-documentation" repo)
  * Handbook repo - PUBLIC READ - to file issues or PRs against the documentation to improve it
  * vets.gov-team repo - PRIVATE WRITE (but not whitelisted)- to store product documentation and learn from others; also to file issues to request DSVA to do something ([see below](#revised-process-for-filing-issues))
  * new "work practices" repo (new) - PUBLIC READ - to read content that is linked to from the Handbook and to file issues or submit PRs against the documentation to improve it
  * vets-website, vets-api, vets-json-schema repos - PUBLIC WRITE - to do their work as normal
  * vets-apis-mockdata - PRIVATE READ - to use the mockdata when testing
  * vets-ato - PRIVATE READ - to read the existing ATO documents
  * vets-contrib - It's unlikely that VTP developers will use this site or its repo. But if they do, once the repo is made public, they'll be able to read content, file issues, and submit PRs to improve the code or documentation.

* DSVA, AdHoc, and external contractor teams would primarily use the public "work practices" repo
  * The public "something-documentation" repo would link to the private vets.gov-team "Work practices" folder for specific protected items like staging passwords (so general public can't see this content)
  * The private "vets.gov-team Work practices" folder would include a link to the public "something-documentation" repo
    * E.g., "Go here for most documentation - this repo only contains protected documentation"


## Revised process for filing issues

It's been challenging to onboard BAH and Community Care teams in part because we have many repos, many of which are private, and we've tried to "insert process" into those repos. This has required admin overhead to manage their Github access.

Instead our internal process should be invisible to external teams. We should aim for a process in which external teams only file issues in a single repo, assign people/labels, and DSVA/AdHoc respond accordingly.


### New plan

For the following items, external teams will **file issues in the vets.gov-team repo**. They have WRITE access (but not whitelisted) to this repo, so they can file issues and assign people/labels.

See [Manage External Teams] for how DSVA will respond to external teams who

1. Request that their SSH key be authorized
1. Request an ATO review
1. Request a security review
1. Request a code review
1. Request a content QA
1. Request a design QA


## Rename/Consolidate repos

* [See here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/documentation-site/renaming-repos.md)
