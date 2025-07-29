
| # | Prod Test Account Use Cases                                                                                                         | Production Workaround / Note                              |
|---|------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| 1 | Validate that external integrations work correctly in production for authentication and data flow.              | Demonstrated need for production                          |
| 2 | Reproduce and validate bug fixes to ensure prior issues are resolved without breaking other functionality.      | Workarounds exist, but challenging with external integrations |
| 3 | Validate that new or updated features on VA.gov or the mobile app work as expected upon release.               | Workarounds for production exist                          |
| 4 | Replicate a Veteran’s reported issue using a test account to understand errors and workflow blockers.           | Training/demo: not appropriate for production             |
| 5 | Guide a Veteran through a process like prescription refills or secure messaging without exposing real PII.      | Training: not appropriate for production                  |
| 6 | Show VA clinicians or pharmacists how features such as secure messaging or pharmacy tools appear to Veterans.   | Training: not appropriate for production                  |
| 7 | Orient new staff with hands-on experience using Veteran-facing tools in a controlled setting.                   | Training: not appropriate for production                  |
| 8 | Use a test account to present live demos to stakeholders showcasing the Veteran experience.                     | Demo: not appropriate for production                      |
```

### Most Significant Use Case

**Validate that external integrations work correctly in production for authentication and data flow.**

*As VISNs make the transition to Oracle Health, production test accounts are vital in testing that features and functionality work properly. Unfortunately, Oracle Health's "train"/staging environment (B1930?) isn't tied to other services in the VA. These production test accounts are used heavily with the roll-out of Oracle Health since it is nearly impossible to test without the necessary integrations to VA systems in the lower environments.*
