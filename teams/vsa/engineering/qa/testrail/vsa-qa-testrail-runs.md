# TestRail Test Runs

**[Work In Progress]**

## Getting started

### VSP basic procedure

The basic procedure for creating a Test Run in TestRail is outlined in [VSP's Creating a test run in TestRail page](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/quality-assurance/testrail/creating-a-test-run.md).  That page gives you step-by-step instructions to add a Test Run.

## Usage Tips

### Create Test Cases first

Test Runs are containers\* for Test Cases.  Create your Test Cases first before creating your Test Run, so that you can add the Cases to the Run you're creating.  [See [TestRail Test Cases](vsa-qa-testrail-cases.md) for details.]

\*Technically, TestRail creates "test instances" or "snapshots" of Test Cases for each Test Run.  Since Test Cases can evolve with product/feature changes, Test Runs need to reference specific versions of the changing Test Cases.  You'll notice a Test Run's listed Test Cases have IDs starting with a **T**, instead of a C, to indicate this distinction.

### Close completed Test Runs

After all Test Cases in a Tesst Run are executed, close the Test Run.  This locks the Actual Results to specific versions of Test Cases, so that when analyzing test results you can see the actual version of Test Cases that were run.  Test Cases change over time, and if you don't close your Test Runs then the newer Test Cases might not reproduce the Actual Results recorded in those previous Runs.

![TestRail Test Run Close screenshot][testrail-close-test-run]


[testrail-close-test-run]: ../images/tr-test-run-close.png
