# Postmortem for the map not rendering on mobile layouts

Date: 09/25/2020

Authors: Gibran Rodriguez

Status: Resolved

## What happened?

Dave Conlon notified in the VSA facility channel that the map on the facility locator was not appearing when using mobile devices (https://dsva.slack.com/archives/C0FQSS30V/p1601039702062600). This became a priority to fix.

Michael and Gibran, front end engineers from the team worked together to fix the issue. The issue ended up being a CSS value (height) for the map which was wrongly 

applied. Michael Pelz-Sherman created and PR (https://github.com/department-of-veterans-affairs/vets-website/pull/14369) to fix it. Gibran Rodriguez discovered that the root cause of the change was in release - https://github.com/department-of-veterans-affairs/vets-website/releases/tag/vets-website%2Fv0.1.1047

More specifically after this change - department-of-veterans-affairs/vets-website@d8ec8cd. We did remove css values that impacted the map to render on mobile layouts. 


## Detection
_How was the issue found?_ It was found by OCC then reported to Dave Conlon.

_Date/time of discovery_ N/A

## Impact
_What was the impact on Veterans, business and team?_

Affected all mobile users accessing the facility locator since 09/11/20, the day the release was made. 

## Root Causes
_What caused this situation?_ The issue happened performing a clean up of some unused CSS.  

## Resolution
_What steps were taken to resolve the issue?_ Identified the issue in a local environment and created a PR to fix it

_Date/time of resolution_ Approximately 11 AM ET on September 25, 2020.

## Documentation links
- [Slack Thread](https://dsva.slack.com/archives/C0FQSS30V/p1601044750068300)
- [Github issue(s)](https://github.com/department-of-veterans-affairs/va.gov-team/issues/14046)


## Action Items

| Description                    | Type    | Owner        | Issue # |
| ------------------------------ | ------- | ------------ | ------- |
| Added Test case coverage to verify that map is visible in mobile test cases | Front-end | Added along with the PR fix | https://github.com/department-of-veterans-affairs/vets-website/pull/14369/files#diff-beed22718d80a6a6f3bfce60863aa764R25 |

## Lessons Learned
We need to do more QA after refactoring. Cover more scenarios in mobile.

### What went well
Root cause was discovered and resolved quickly once the issue was noticed.

### What went wrong
The issue was not noticed or flagged for at least 2 weeks.

### Takeaways
Do a better job with QA before making changes


## Timeline (all times ETC, asc order)
_date, time, step/event_
- 9/25/20 - issue filed https://github.com/department-of-veterans-affairs/va.gov-team/issues/14046 
- 9/25/20 - pull request fix https://github.com/department-of-veterans-affairs/vets-website/pull/14369
- 9/25/20 - root cause discovery - https://github.com/department-of-veterans-affairs/va.gov-team/issues/14050#issuecomment-699079803
