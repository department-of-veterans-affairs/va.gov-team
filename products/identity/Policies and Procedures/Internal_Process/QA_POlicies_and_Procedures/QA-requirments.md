
## Alexander Garcia (frontend)
1. What is your current process for validating your commits / deployments
	1. Not sure about this one.
2. What tools do you have now for QA?
	1. I know platform has a whole list of tools of what they use for QA. However, our team in respect to tests: Mocha, Enzyme for unit tests, Cypress for E2E, TestRail for Test Plans (see [here](https://depo-platform-documentation.scrollhelp.site/developer-docs/quality-assurance-standards))
3. Do you have unit tests or End to End tests? 
	1. Yes. We have unit tests for authentication and its related applications. Identity Frontend team does not/will not do E2E tests. Datadog Synthetic tests from Frontend to Backend cover the E2E part
4. Is there anything QA related we are missing?
	1. Honestly not sure, I'd recommend reviewing the [QA docs](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing)
5. Do you have any MVPs that you would like created for QA automation or testing?
	1. Not sure yet.
6. Are there any specific areas of concern or focus that should be addressed in our QA process?
	1. Not sure if Platform CoP FE team is working on this right now but they used to have a [Test Stability Review](https://depo-platform-documentation.scrollhelp.site/developer-docs/test-stability-review) mechanism in CI/CD that would add flaky unit and E2E tests to a disallowed list and post it to Slack to ensure teams check/fix their flaky tests. And I don't think it is working appropriately as it always displays that there are no flaky tests each week.
7. Are there any limitations or challenges with our current test environment or infrastructure?
	1. I know for certain teams Review Instances with authentication seems to be a hurdle due to it not being HTTPS (which is required for OAuth crypto libraries)
8. Is there anything specific you need to improve or enhance our testing capabilities?
	1. Nothing specific that I need right now. But the above items could help Platform CoP Frontend team out.
9. How do we handle our current QA results data if we have any?
	1. I believe there is a [QA Product Dashboard](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-product-dashboard-guide) (personally I've never used it, however I know one of the UX people on our team has DOMO access)
10. How do we run our current QA tests?
	1. QA tests - unit tests and E2E both run during CI/CD (when a pull request opens).
