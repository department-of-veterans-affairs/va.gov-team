# Postmortem for sidebar not accessible on mobile devices

Date: 08/13/2020

Authors: Nick Sullivan

Status: Resolved

## What happened?
Two VSA engineers, Erik Hansen and Nick Sullivan, were having a scheduled meeting together at 4:30 PM ET on August 12. During that call, Erik asked where the sidebar is on mobile devices from a page under the disability hub. This led to the engineers discovering a production bug, where the sidebar's trigger button, which should be visible on mobile, was not visible at all. This means the sidebar was not accessible on mobile devices.

At approximately 5 PM, while still on the call, Nick opened a [pull request](https://github.com/department-of-veterans-affairs/vets-website/pull/13845) reverting the [pull request](https://github.com/department-of-veterans-affairs/vets-website/pull/13157) identified to have created the issue. 

After the pull request was merged, an off-schedule [deployment](https://dsva.slack.com/archives/CBU0KDSB1/p1597268115415400), was immediately issued, resolving the issue in production at approximately 6 PM ET.

## Background
The VSA VAMC team built and shipped a new sidebar for the VAMC area of the website. This meant that the sidebar used on the benefit pages of the site was now unneeded on pages under `/pittsburgh-health-care`. As a side effect after launch, there were two sidebar-trigger buttons visible on mobile devices - the old version and the new. A GitHub [issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/10002) was created to remove the old version.

The requirements of that issue seem to have been understood as removing the sidebar trigger button from the whole website, rather than only the VAMC pages, as the [pull request that resolved the issue](https://github.com/department-of-veterans-affairs/vets-website/pull/13157) removed all references.

## Detection
_How was the issue found?_ It was found unintentionally during a general sync between Erik and Nick.

_Date/time of discovery_ ~4:30 PM ET

## Impact
_What was the impact on Veterans, business and team?_

Based on when the original pull request was [merged](https://github.com/department-of-veterans-affairs/vets-website/commit/ce77e917ad86d9e34a6a2d48b251d55339f25ede), it seems that issue was likely published to the website on roughly June 19th, 2020. This means that between June 19th and when the issue was resolved on August 12, the sidebar-trigger button was not on the website, so mobile devices would not have been able to access the sidebar on the benefit pages. VAMC pages would have been able to access the sidebar on that area of the website as that section had a redesigned sidebar. 

## Root Causes
_What caused this situation?_ It appears to be a misunderstanding of requirements in a GitHub issue, which fixed an issue on the VAMC pages but caused one on the benefit pages.

## Resolution
_What steps were taken to resolve the issue?_ A revert and an off-schedule deployment

_Date/time of resolution_ Approximately 6 PM ET on August 12, 2020.

## Documentation links
- [Slack Thread](https://dsva.slack.com/archives/CBU0KDSB1/p1597268115415400)
- [Github issue(s)](https://github.com/department-of-veterans-affairs/va.gov-team/issues/10002)


## Action Items

| Description                    | Type    | Owner        | Issue # |
| ------------------------------ | ------- | ------------ | ------- |
| Implement some form of smoke tests for website templates | Front-end | TBD | https://github.com/department-of-veterans-affairs/va.gov-team/issues/12445 |

## Lessons Learned
We need increased quality assurance, perhaps as a high-level form of smoke test, that runs against the CMS templates of the website, to ensure certain components and elements exist on key pages.

### What went well
Root cause was discovered and resolved quickly once the issue was noticed.

### What went wrong
The issue was not noticed or flagged for a long period of time.

### Where we got lucky
Deployment resolving the issue when very smoothly and the involved engineers on VSA and VSP were all very supportive.

### Takeaways
We have long identified the content templates of the FE code to need better test coverage, and this issue demonstrates the increasing importance as we continue to scale.

## Timeline (all times ETC, asc order)
_date, time, step/event_
- 6/10/20 - issue 10002 is opened to fix duplicate sidebar buttons appearing on mobile across the VAMC pages.
- 6/18/20 - pull request 13157 addressing the issue is merged
- 8/12/20, 4:30 PM ET - Erik and Nick have recurring sync; Erik notices issue
- 8/12/20, 6:00 PM ET - Pull request is opened, merged, deployed; issue is resolved
