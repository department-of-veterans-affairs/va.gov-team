# Existing production test account use cases

## Overview

These are use cases for which VA and Oracle Health staff are currently utilizing the production test accounts we'd like to retire.

- **9/8/2025**: Tom and Samara met with Patrick Bateman, who said that the MHV on VA.gov team is already conducting UAT and is less reliant on the prod test accounts.

### Internal VA use cases

| # | Prod Test Account Use Cases | Production Workaround / Note|
|--|--|--|
| 1 | OCTO/OCC: Validate that Oracle Health and other external integrations work correctly in production for authentication and data flow. |**Recommendation**: For Oracle Health; utilize backend testing infrastucture that is currently in place. |
| 2 | OCTO/OCC: Reproduce and validate bug fixes to ensure prior issues are resolved without breaking other functionality. | **Recommendation**: Utilize Veteran employees for bug fixes and validating fixes|
| 3 | Validate that new or updated features on VA.gov or the mobile app work as expected upon release.| **Recommendation**: Conduct User Acceptance Testing (UAT)|
| 4 | OCTO/OCC: Replicate a Veteran’s reported issue to understand errors and workflow blockers. | **Recommendation**: Better staging data |
| 5 | HRC Call center: Replicate a Veteran’s reported issue to understand errors and workflow blockers.* | **Recommendation**: Demo mode |
| 5 | Guide a Veteran through a process like prescription refills or secure messaging without exposing real PII. |**Recommendation**: Demo mode|
| 6 | Show VA clinicians or pharmacists how features such as secure messaging or pharmacy tools appear to Veterans.| **Recommendation**: Demo mode|
| 7 | Orient new staff with hands-on experience using Veteran-facing tools in a controlled setting. | **Recommendation**: Demo mode|
| 8 | Use a test account to present live demos to stakeholders showcasing the Veteran experience. | **Recommendation**: Demo mode|


### External integration use Case

* As VISNs make the transition to Oracle Health, production test accounts are helpful in testing that features and functionality work properly. Unfortunately, Oracle Health's "train"/staging environment (B1930?) isn't tied to other services in the VA [this was negated on Aug 4. 2025 - the test env is integrated with other services but we should validate this with testers].*

| # | Prod Test Account Use Cases | Production Workaround / Note|
|--|--|--|
| 1 | Oracle health staff: Validate that Oracle Health and other external integrations work correctly in production for authentication and data flow. |**Recommendation**: Do nothing. Oracle Health staff can leverage prod test accounts until 10/2026.|
| 2 | Oracle health help desk: Replicate a Veteran’s reported issue to understand errors and workflow blockers. | **Recommendation**: Do nothing. Oracle Health staff can leverage prod test accounts until 10/2026.|
