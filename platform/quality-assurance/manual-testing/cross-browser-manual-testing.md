# Cross-Browser Manual Testing

## General

Conduct cross-browser manual testing after you've pushed your final/complete build to staging.

## What You Will Need

[TestRail Test Plan with Multiple Test Runs](testrail/README.md)
  * The best method for executing cross-browser manual testing in TestRail is to create a *Test Plan* for your release/sprint.  Within that *Test Plan* you can use the same collection of test cases to create multiple *Test Run*s with different OS / browser configurations.  In TestRail, that would look something like this --  
![TestRail example of test plan with multiple test runs for cross browser testing][testrail-cross-browser-test-plan]

[Access to the Staging Environment](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/accessing-staging.md)
  * See [Login](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/accessing-staging.md) for test user accounts if you need to test login as part of your service.


[testrail-cross-browser-test-plan]: ../images/testrail-tutorials/test-plan-cross-browser-example.png
