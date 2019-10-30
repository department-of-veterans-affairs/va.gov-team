# Rename/Consolidate repos

<hr>

* [Decisions](#decisions)
* [Context](#context)
* [Recommendations](#recommendations)

<hr>

## Decisions

* We decided that all Veteran Tools Platform (veteran-facing tools) repos will be prefixed with ```vets-``` so that they are easily distinguished from other DSVA repos and from other VA repos. E.g.,
  * ```vets-team``` (old: vets.gov-team)
  * ```vets-status``` (old: vets.gov-status)
  * ```vets-content-style-guide``` (old: vets.gov-content-style-guide)

* This approach will be used for all Veteran Tools Platform repos going forward. 
* Timeline for changing existing repo names is TBD.

## Context

### Problem

Too many repos. Inconsistent naming conventions. Hard to find things related to DSVA (vs other VA teams).

### VA Github org
* There are 14 pages of repos in the VA Github org.
* Multiple VA teams use this org.
* DSVA neither "owns" the VA Github org, nor sets policies for it (Bob Henrikson does that).
* VA teams are now able to use Github as a substitute for Rational.
* It is challenging to find "DSVA-related" repos due to inconsistent naming.


### vets.gov vs va.gov

* DSVA products/tools are moving into the va.gov domain.
* We expect that we will continue to "control" these products/tools for some time. That is, they are products/tools built using the technologies called the "Veteran Tools Platform (VTP)."
* We do not expect to "control" the rest of the va.gov domain (or the products/tools that are not built with the VTP).
* It is reasonable to expect that many VA teams will start using Github as a substitute for Rational.
* It is reasonable to expect that some VA teams will create products/tools that live in Github, but are not built on the Veteran Tools Platform (i.e., internal digital tools).


## Recommendations

<!--
### What does "sensitive" mean?
  * Content that should not be shared with the general public for security reasons, e.g., staging passwords.
  * Content where DSVA wants to control VA employee access, e.g., we don't want everyone in VA to see some of our
-->

### General repo recommendations

1. Use best practices for defaulting to open.
    * Public repos allow external developers (and others) to file issues and submit PRs to help us improve our documentation.
    * Repos should be public by default.
    * The majority of documents should be in public repos.
    * If content is "sensitive" (e.g., staging passwords), put it in the relevant private repo (e.g., vtp-team).
    * Then link to the document in the private repo from the public repo (only authorized people will be able to follow the link and see the page).
1. DSVA, and its contractors, use a consistent naming convention for every repo created.
1. Repos are named based on the tool/service they provide, e.g., "apis" or "team" or "documentation".
1. Repos are prefixed with "vtp-" to make it easy to find all Veteran Tools Platform repos.
1. The prefix "vagov" is only applied to repos that apply to the va.gov domain as a whole.
    * It should not be applied to VTP-related products/tools, content, process, or team repos.
1. I am confused by these 2 repos: [va.gov-team](https://github.com/department-of-veterans-affairs/va.gov-team) includes a directory called "va-website," which appears to be an outdated version of the [vagov-content](https://github.com/department-of-veterans-affairs/vagov-content).
    * Why do we need a "team repo" for the team working on merger? That content should be in the Products folder.
    * The vagov-content repo talks about vets.gov and appears to duplicate content in the va.gov-team repo.
    * This is all incredibly confusing.


### Specific repo recommendations

#### Repos to keep

1. **[digitalservice](https://github.com/department-of-veterans-affairs/digitalservice) - PRIVATE**
    * DSVA access only.
    * Remains as is - a place for DSVA to store its own specific processes, history, contracting materials, etc.
1. **vtp-documentation - PUBLIC - NEW repo**
    * Contains documentation of DSVA's user-centered agile delivery process.
    * The vast majority of "work practices" documentation will live here - the Work Practices folder from vets.gov-team repo will be moved here.
    * As a public repo, anyone can file an issue or submit a PR against the documentation to improve it. DSVA will triage and assign people/labels (or reject it) as appropriate.
1. **vtp-team - PRIVATE - formerly [vets.gov-team](https://github.com/department-of-veterans-affairs/vets.gov-team) repo**
    * Contains content DSVA considers sharable to any contractor, but should not be exposed to the general public (e.g., staging passwords).
    * Excludes any contracting-related content.
    * Work Practices folder will remain in this repo to house "sensitive" documentation.
    * Other folders can remain as is.
    * External contractors have WRITE access (but are not whitelisted).
1. **vtp-devops - PRIVATE - formerly [devops](https://github.com/department-of-veterans-affairs/devops) repo**
    * Rename this repo.
    * Contains content DSVA considers sharable to any contractor. Some content is sensitive, so PRIVATE.
    * External contractors do not need access - SSH config (and anything else they need) will be moved into vtp-team Work Practices folder.
1. **developer repos - PUBLIC**
    * vets-website, vets-api (VTP only APIs), vets-json-schema
    * Rename with new prefix: vtp-website, vtp-api, vtp-json-schema
    * External developers have WRITE access (and are whitelisted).
1. **vtp-scorecard - PUBLIC - formerly [vets.gov-status](https://github.com/department-of-veterans-affairs/vets.gov-status) repo**
    * Contains content to control the scorecard page
    * Rename with new prefix: vtp-status
    * As a public repo, anyone can file an issue or submit a PR against the code or documentation to improve it. DSVA will triage and assign people/labels (or reject it) as appropriate.
    * External contractors can submit a PR to update this page for this project if needed.
1. **vtp-api-mockdata - PRIVATE - formerly [vets-api-mockdata](https://github.com/department-of-veterans-affairs/vets-api-mockdata) repo**
    * Contains content for testing api mockdata
    * Rename with new prefix: vtp-api-mockdata
    * External developers have READ access.
1. **vtp-ato - PRIVATE - formerly [vets-ato](https://github.com/department-of-veterans-affairs/vets.gov-ato) repo**
    * Contains ATO documentation and DSVA's process for updating it
    * Rename with new prefix: vtp-ato
    * External developers have READ access.    
1. **vtp-design-system - PUBLIC - formerly [design-system](https://github.com/department-of-veterans-affairs/design-system) rep**
    * Rename this repo.
    * Update the public-facing name - Call it "Veteran Tools Platform Design System".
    * As a public repo, anyone can file an issue or submit a PR against the code or documentation to improve it. DSVA will triage and assign people/labels (or reject it) as appropriate.
1. **vtp-form-generator - PUBLIC - formerly [generator-vets-website](https://github.com/department-of-veterans-affairs/generator-vets-website) repo**
    * Rename this repo.
    * As a public repo, anyone can file an issue or submit a PR against the code or documentation to improve it. DSVA will triage and assign people/labels (or reject it) as appropriate.
1. **va-apis - PUBLIC - formerly [vets-contrib](https://github.com/department-of-veterans-affairs/vets-contrib) repo**
    * Rename this repo. Also update the description to not be about AdHoc.
    * Contains only the content related to the *VA APIs* (not VTP APIs).
      * Move all other content elsewhere.
    * **Make it a public repo.** As a public repo, anyone can file an issue or submit a PR against the documentation or code to improve it. DSVA will triage and assign people/labels (or reject it) as appropriate.
1. **[vets.gov-content-style-guide](https://github.com/department-of-veterans-affairs/vets.gov-content-style-guide) repo - MOVE THIS CONTENT**
    * This content will be moved to the public vtp-documentation repo as a top-level folder, e.g., content-style-guide
1. **[vets.gov-content](https://github.com/department-of-veterans-affairs/vets.gov-content) repo - MOVE OR ARCHIVE THIS CONTENT**
    * If this content is still relevant and not duplicative, move to the public vtp-documentation repo in the content-style-guide folder.
    * If no longer relevant, archive this repo.
1. **[va-digital-services-platform-docs](https://github.com/department-of-veterans-affairs/va-digital-services-platform-docs) repo - MOVE THIS CONTENT**
    * Move all content into vtp-documentation.
    * Then delete this repo (no need to archive or retain history).
1. **vtp-handbook - PUBLIC - formerly [va-digital-service-handbook](https://github.com/department-of-veterans-affairs/va-digital-service-handbook) repo**
    * Contains code + content for Handbook website.
    * Rename this repo ?
    * Name on website can remain "VA Digital Service Handbook".
    * As a public repo, anyone can file an issue against the documentation to improve it. DSVA will triage and assign people/labels (or reject it) as appropriate.
1. **[dsva](https://github.com/department-of-veterans-affairs/dsva) repo - PUBLIC**
    * Contains the code for website for DSVA team page.
    * Keep this as is.
1. **[sre](https://github.com/department-of-veterans-affairs/sre) repo - PRIVATE**
    * Not sure how this fits in.
    * Keep as is.


#### Repos to archive

1. **[vets.gov](https://github.com/department-of-veterans-affairs/vets.gov) - PUBLIC**
    * Outdated - archive.
1. **[meet-dsva](https://github.com/department-of-veterans-affairs/meet-dsva) - PRIVATE**
    * Outdated - archive.
1. **[id-me-demo](https://github.com/department-of-veterans-affairs/id-me-demo) - PUBLIC**
    * Outdated - archive.            
1. **[vets.gov-planning](https://github.com/department-of-veterans-affairs/vets.gov-planning) - PRIVATE**
    * Outdated - archive.
1. **[service-and-facility-locator](https://github.com/department-of-veterans-affairs/service-and-facility-locator) - PUBLIC**
    * Outdated - archive.
1. **[ChoiceActLocator](https://github.com/department-of-veterans-affairs/ChoiceActLocator) - PUBLIC**
    * Outdated - archive.
1. **[dsva-portfolio](https://github.com/department-of-veterans-affairs/dsva-portfolio) - PUBLIC**
    * Outdated - archive.
1. **[styleguide](https://github.com/department-of-veterans-affairs/styleguide)- PUBLIC**
    * Outdated - archive.


#### Repos where decisions are required - what are these?

1. **[vagov-content](https://github.com/department-of-veterans-affairs/vagov-content) - PUBLIC**
    * What is this?
1. **[va.gov-team](https://github.com/department-of-veterans-affairs/va.gov-team) - PUBLIC**        
    * What is this?
1. **[dsva-vbms](https://github.com/department-of-veterans-affairs/dsva-vbms) - PRIVATE**
    * Is this Appeals or VTP?
    * Is this a new repo simply to allow other VA employees to participate? There are other ways to do this, if the repo doesn't contain "sensitive" information.
    * Does it contain sensitive information? Or could it moved into an existing repo?
1. **[github-rollout-working-group](https://github.com/department-of-veterans-affairs/github-rollout-working-group) - PRIVATE**
    * Is this a new repo simply to allow other VA employees to participate? There are other ways to do this, if the repo doesn't contain "sensitive" information.
    * Does it contain sensitive information? Or could it moved into an existing repo?
1. **[vets-api-clients](https://github.com/department-of-veterans-affairs/vets-api-clients) - PUBLIC**
    * Is this now superceded by va-apis (formerly vets-contrib)?
    * If still needed, rename to va-apis-clients.
1. **[vets.gov-utility](https://github.com/department-of-veterans-affairs/vets.gov-utility) - PUBLIC**
    * Is this outdated? If so, archive.
    * If not, rename to vtp-utility.     
1. **[dsva-vacols](https://github.com/department-of-veterans-affairs/dsva-vacols) - PRIVATE**
    * Is this relevant anymore?
    * If not, archive.
1. **[github-utilities](https://github.com/department-of-veterans-affairs/github-utilities) - PUBLIC**
    * Is this still relevant?
    * If not, archive.
1. **[gi-bill-comparison-tool](https://github.com/department-of-veterans-affairs/gi-bill-comparison-tool) - PUBLIC**
    * Is this still relevant?
    * If not, archive.
1. **[django-designpatterns](https://github.com/department-of-veterans-affairs/django-designstandards) - PUBLIC**
    * Is this a DSVA repo?
    * If it is, it's outdated - archive it.
1. **[healthcare-application](https://github.com/department-of-veterans-affairs/healthcare-application) - PUBLIC**
    * Is this still relevant?
    * If not, archive.    


#### Reference - currently archived repos

* old-forms-code - PRIVATE
* vets.gov-research - PRIVATE
* vets.gov-designpattrns - PUBLIC
* kudos-team - PRIVATE  
* playbook - PRIVATE (Liz made this to illustrate something; no longer needed)
