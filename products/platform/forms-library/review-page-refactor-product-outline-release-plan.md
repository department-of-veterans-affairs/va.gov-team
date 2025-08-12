# Forms Library Review Page Product Outline & Refactor Release Plan

- - - -

Last updated: 8/28/20
By: Megan / Product Manager of VSP FE Tools

## Product Outline
### Overview

The forms library provides a way for engineers to create a consistent experience for Veterans on VA.gov. It is a single-page app framework that includes validation, routing, and submission helpers. 

As part of the VSP FE Tools’ team’s work to [improve the developer experience](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/forms-library/improve-dev-exp-product-outline.md) of the forms library, we have been refactoring the review page.

### Problem Statement 

The forms library is brittle and hard to change, and includes many features that were implemented in a way that is not scalable or sustainable (in other words, it is full of tech debt). How might we refactor the review page to eliminate tech debt and therefore improve the developer experience?

### Hypothesis

### Desired & Undesired Outcomes

#### Desired Outcomes

* Forms library review page is easier to maintain
* Forms library review page is easier to make changes to

#### Undesired Outcomes

* Changes to the review page UI, functionality, or Veteran experience
* Changes to form submission rates

### Measuring Success

* Qualitative feedback from developers making changes to forms library review page
* Number of changes made to UI, functionality, or Veteran experience (should be 0)
	* Visual differences: 0
	* Form submission rates: steady

### Solution Narrative 

Initially, we planned to release a single large PR that included all of the refactor work that had been done on the forms library review page. That is reflected in the [initial release plan](https://github.com/department-of-veterans-affairs/va.gov-team/commit/5df8636de3c89fe9479953569cb4750c8e656f5f#diff-64a129ed8cd30d95e864b604d9475469) that was drafted — this release plan included thorough testing in staging with VFS teams. 

Ultimately, we decided to instead break the PR up into multiple pieces of much lower risk and develop a testing & validation plan for each of those, as is reflected in the Release Plan below.

### Relevant Links

* Forms library “improve dev experience” [product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/forms-library/improve-dev-exp-product-outline.md)
* ZenHub super epic: [Forms Library - Maintenance and Improvement Work to improve developer experience #7407](https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/7407)
* ZenHub epic: [Refactor forms library review page #10114](https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/10114)

- - - -

## Release Plan
### Overview

The review page refactor will be released incrementally, according to the incremental release plan outlined [in this spreadsheet](https://docs.google.com/spreadsheets/d/1WCEJgarh9sJKVys_xbtpWqBxLHQfX1eWSItBHUZSvos/edit#gid=0), which links to individual tickets. 

As described in the Solution Narrative above, the original review page refactor PR has been broken into multiple pieces. Each of these individual steps is low risk and therefore we will not be doing testing with VFS teams in staging for these changes. 

Each of these incremental PRs will follow the following release steps: 

* Peer review from 2 members of VSP FE Tools
* Verify on staging via automated tests & visual review (as described on each individual PR)
* Release to production
* Verify on production via automated tests & visual review
* Monitor form submission analytics throughout

Risk estimate and details are listed on each of the tickets for the incremental release. 
