# TestRail Test Cases

**[WORK IN PROGRESS]**

Get help on creating TestRail Test Cases the VSA way.

**NOTE**: Supplements Platform TestRail documentation -- This VSA-specific documentation extends VSP's basic [How to use TestRail](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/quality-assurance/testrail) documentation.  It helps you go beyond the basics, and use TestRail better for VSA-specific projects.

## Getting started

### VSP basic procedure

The basic procedure for creating Test Cases in TestRail is outlined on [VSP's Creating a test case in TestRail page](https://github.com/department-of-veterans-affairs/va.gov-team/blob/df1af329789a80a37b5fe74c75551247c5eab8ad/platform/quality-assurance/testrail/creating-a-test-case.md).  That page shows how to create a test case with the **Test case (text)** default template.

### General best practices

For general test-cases info & best practices, see [VSA-QA Test Cases](../vsa-qa-test-cases.md).

## Usage tips

Here are some tips that will help improve the way you use TestRail for test cases.

### Create Test-Case Sections

Create Sections to better organize your Test Cases.  Sections work like folders, and let you keep related Test Cases together.

![TestRail test case section screenshot][testrial-test-case-section]

### Create Test Cases before Test Runs

Create test cases first, before test runs.  Test runs are mere containers of test cases.  If you created a test run first, it'd have to remain empty since there're no test cases to select for your run -- you'd then have to create your test cases, then return later to your test run to add the cases.

Test plans, however, can be created before test cases.  Plans are containers of runs, but offers meta-data fields for storing high-level info on your product/feature. You can create a test plan first to capture preliminary references that support test-case creation and test-run scheduling.

### Use Test Case (Steps) template

When you create a test case, use the **Test case (steps)** template instead of Test Case (Text).  This template provides a 2-column format, with a separate Expected Result for each Step.  This format lets you document your case in much more detail, specifying what system behavior is expected for each and every Step.  This also enables you to mark exactly which Step(s) passed/failed within a case.

![TestRail test case template screenshot][testrail-test-case-template]

[testrial-test-case-section]: ../images/tr-test-case-section.png
[testrail-test-case-template]: ../images/tr-test-case-template.png
