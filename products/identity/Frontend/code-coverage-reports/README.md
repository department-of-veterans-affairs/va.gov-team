# Identity Frontend Code Covereage Report

## Generating the Monthly Code Coverage Report
1. From your terminal nagivate to ```vets-website``` directory on your local machine
2. For each Identity-owned directory, generate a coverage report (See table below for test commands)
   > Note: Ensure you add the ```--coverage --coverage-html``` flag when running unit tests in the platform directory
4. Wait for unit tests to finish and ensure all tests are passing for the given application/directory
5. Open coverage ```index.html``` in browser to view report.
   - Navigate to ```vets-website/coverage/index.html```
   - Copy file path
   - Paste file path to browser
6. Take a screenshot of the code coverage report for each Identity-owned application and directory
   > Note: Do not screenshot this for the `platform/user/authentication/tests` as the displayed numbers are shared with CoP and incorrect
7. Create a new monthly report file in the [code coverage reports](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Frontend/code-coverage-reports) directory using the following naming convention: `{year}-{month}.md` (see [December 2024 code coverage report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Frontend/code-coverage-reports/2024-12.md) as an example)
   - Add the title: **Code coverage report (Month Year)**
   - Add 3 sections
      - **Combined**
      - **Applications**
      - **Platform**
   - In the Applications section
      - Create a table with the file path & test command and a screenshot of the code coverage report for that application
      - Continue until there are no other applications left (there should only be 5 rows, 5 screenshots)
   - In the Platforms section
      - Create a table with the file path & test command and a screenshot of the code coverage report for that directory
      - Continue until there are no other applications left (there should only be 6 rows, 5 screenshots)
   - In the Combined section
      - Create a table with the Statements, Branches, Functions, and Lines as column headers and create Percent and Raw as row headers
      - Get the sum of the covered number and the total number as well as the percent for each of the column headers
      - Input the data into table and sent it to Joe N.

## Test Commands
### Applications
| File Path | Terminal Command |
|---|---|
| ```vets-website/src/applications/auth``` | ```yarn test:coverage-app auth``` |
| ```vets-website/src/applications/login``` | ```yarn test:coverage-app login```|
| ```vets-website/src/applications/sign-in-changes``` | ```yarn test:coverage-app sign-in-changes``` |
| ```vets-website/src/applications/terms-of-use``` | ```yarn test:coverage-app terms-of-use``` |
| ```vets-website/src/applications/verify``` | ```yarn test:coverage-app verify``` |

### Platform
| File Path | Terminal Command |
|---|---|
| ```vets-website/src/platform/site-wide/ebenefits/``` | ```yarn test:unit src/platform/site-wide/ebenefits/tests --coverage --coverage-html``` |
| ```vets-website/src/platform/site-wide/user-nav/containers/AutoSSO``` | ```yarn test:unit src/platform/site-wide/user-nav/tests/containers/AutoSSO.unit.spec.jsx --coverage --coverage-html``` |
| ```vets-website/src/platform/user/tests/authentication/``` | ```yarn test:unit src/platform/user/tests/authentication/**/*.unit.spec.js --coverage --coverage-html```|
| ```vets-website/src/platform/user/tests/authorization/components/IdentityNotVerified``` | ```yarn test:unit src/platform/user/tests/authorization/components/IdentityNotVerified.unit.spec.jsx --coverage --coverage-html``` |
| ```vets-website/src/platform/utilities/tests/oauth``` | ```yarn test:unit src/platform/utilities/oauth --coverage --coverage-html``` |
| ```vets-website/src/platform/utilities/tests/sso``` | ```yarn test:unit src/platform/utilities/sso --coverage --coverage-html``` |

## Reference 
`.github/CODEOWNERS` file in `vets-website`)
```
- src/applications/auth @department-of-veterans-affairs/octo-identity
- src/applications/login @department-of-veterans-affairs/octo-identity
- src/applications/sign-in-changes @department-of-veterans-affairs/octo-identity
- src/applications/terms-of-use @department-of-veterans-affairs/octo-identity
- src/applications/verify @department-of-veterans-affairs/octo-identity
- src/platform/site-wide/ebenefits/ @department-of-veterans-affairs/octo-identity
- src/platform/site-wide/user-nav/containers/AutoSSO.jsx @department-of-veterans-affairs/octo-identity
- src/platform/site-wide/user-nav/tests/containers/AutoSSO.unit.spec.jsx @department-of-veterans-affairs/octo-identity # unit tests
- src/platform/user/authentication @department-of-veterans-affairs/octo-identity
- src/platform/user/tests/authentication @department-of-veterans-affairs/octo-identity # unit tests
- src/platform/user/authorization/components/IdentityNotVerified.jsx @department-of-veterans-affairs/octo-identity
- src/platform/user/tests/authorization/components/IdentityNotVerified.unit.spec.jsx @department-of-veterans-affairs/octo-identity # unit tests
- src/platform/utilities/oauth @department-of-veterans-affairs/octo-identity
- src/platform/utilities/tests/oauth @department-of-veterans-affairs/octo-identity # unit tests
- src/platform/utilities/sso @department-of-veterans-affairs/octo-identity
- src/platform/utilities/tests/sso @department-of-veterans-affairs/octo-identity # unit tests
```

## Version history
| Version number | Author | Revision date | Description |
| --- | --- | --- | --- |
| 0.1 | Caitlin Neathawk | 12/3/2024 | Initial creation |
