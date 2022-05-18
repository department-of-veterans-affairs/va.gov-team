# 1. Decision Summary

Date: 2021-08-03

Whom:
- Holden Hinkle
- Peter Hill

## Status

Pending

## Context

Currently, every push event triggers the execution of the full Cypress test suite. To reduce test execution time and the often unnecessary expense of running the full test suite, and to improve the developer experience for engineers on the platform, we have decided to implement a test selection feature which will select and execute only the tests applicable to the files committed to a branch.

## Decision

**Step 1**  
Proposed test selection logic:  
- If all the files in a branch end with `.md`, don’t run any tests (updating `.md` files won’t affect any applications)
- Else if any of the file paths in a branch don't start with `/src/applications`, run all tests (assume the change(s) can affect all applications)
- Else iterate through all files in the branch, create an array of test file paths by grabbing the paths that match `/src/applications/**/tests/**/*.cypress.spec.js?(x)`, pass the array to Cypress, and run the tests

**Step 2**  
Currently, Cypress tests are divided into 8 groups, and each group of tests is executed in one of 8 containers within a GitHub Actions job matrix. This current approach is not ideal for test selection, because any number of tests, from 0 to the total number of tests, can be selected. For example, imagine that only 6 test files are selected. This would only require Container 0; Containers 1-7 would be created unnecessarily because they would not perform any work.  

This process will be updated so that the number of containers created is dependent on the number of tests selected.

**Step 3**  
As a final precaution to ensure all tests pass, the full suite of Cypress tests will run when a PR is merged to `main`.

## Consequences
We expect:
- Average Cypress test execution time to reduce
- The cost associated with running the tests to reduce
- Engineer happiness and productivity to increase
### Preliminary Data
We are collecting data about `main` builds and `branch` builds on our [dashboard](https://va-gov.domo.com/page/1232474697) including the below key takeaways:
- About 80% of builds handled in GitHub Actions are `branch` builds
- `Branch` builds on average select 56% fewer tests than the full suite of available tests
- Given that fewer tests are selected for, `Branch` build test executions take an average of **4** containers as opposed to `main` build test executions that take 8
- `Branch` build test executions take an average of about **5.5** minutes as opposed to `main` build test executions that take about **11.5** minutes
- Generally we seem to be saving about 50% resources by selecting only relevant tests in `branch` builds