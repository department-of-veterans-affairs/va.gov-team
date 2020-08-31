# Should we add a new manual review trigger?

The purpose of this doc is to provide context in order to make a decision around prioritizing manual review trigger iterations. 

Drafted by: Megan, Product Manager, VSP FE Tools

## Automated Code Quality Artifacts 
* [Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/automated_code_quality/automated-code-quality-product-outline.md)
* [README](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/automated_code_quality/readme.md)
* [Design doc for manual review triggers](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/flag-for-manual-review.md)

## Context
* Kevin asked us to [add a manual review trigger](https://dsva.slack.com/archives/CJRQ85PQB/p1594753109121300?thread_ts=1594750261.113800&cid=CJRQ85PQB) ("review bot") for custom form submission error messages
  * Current status of this manual review trigger: development work done in a branch ([commit](https://github.com/department-of-veterans-affairs/vets-website/commit/ad3c459215bfd2263c46eee69931ee8a854537a1)), was not merged, could be merged at any time & would be deployed to production for testing
* Rachael asked us to [write a release plan](https://dsva.slack.com/archives/CJRQ85PQB/p1597438737371000?thread_ts=1597435175.343300&cid=CJRQ85PQB) for this addition
* Upon digging, I found that: 
  * There are currently [3 manual review triggers](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/manual-review-triggers.md#triggers) in use
  * We don't know whether the current manual review triggers are working the way we intend them to
    * Are developers reviewing PRs for those particular flags as they come up? Unclear/possibly no
    * How often are manual review triggers happening? Can we even tell? 
    * How often is [this bug](https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/7248) (where manual review triggers do not appear when they should) happening? We do not know.
    
## Paths forward: 

### Option 1 (recommended by Megan & Rian): Put the new manual review trigger on hold 

Put the new manual review trigger on hold until we are able to think more broadly and carefully about automated code quality as a product, what we should be measuring here, and whether we are meeting our goals. Prioritize iterating on manual review triggers, including doing discover work on current experience, and prioritizing implementation of measurement to get baseline metrics before adding new triggers. 

* Could be part of a bigger initiative including ESLint ([Row 36](https://docs.google.com/spreadsheets/d/1loQMRW8zNUYZXzcBsIVVKWLtHugw6uiNer1HTWgs980/edit#gid=1471366032))
* Unlikely to be part of FE Tools' Q4 roadmap
* Would mean there *is no review bot* or other flag for custom form submission error messages in the short term (assumption would be that those messages would be reviewed as part of regular Collaboration Cycle content reviews)

### Option 2: Add the new manual review trigger now

Add the new manual review trigger now for custom messages for form submission errors 

* Rely on informal qualitative feedback to gauge success of this
  * Ask VSP developers if they notice it (after a month or two)
  * Ask VFS teams if they encountered it
  * Ask VSP Collaboration Cycle reviewers if it has come up
* Write up a very rough release plan (per Rachael's request) acknowledging that we don't have the ability to measure much for manual review triggers at the moment and that the release plan and success measurement will be pretty light/informal
* The plan would be to come back to this work in the future (as outlined above) to ensure that we've completed all steps on the VSP initiative development checklist for the "manual review trigger" initiative, but that (returning to this work) would be prioritized as normal with/against the rest of the FE Tools roadmap
