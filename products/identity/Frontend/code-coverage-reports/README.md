# Identity Frontend Code Covereage Report

***Date Modified:*** December 3, 2024

## Generating Code Coverage Report
1. From terminal nagivate to ```vets-website``` repository on local machine
2. Run test command for desired coverage report (See table below for test command)
3. Make sure to add the ```--coverage``` flag when running your tests.
4. Wait for unit tests to run and make sure all are passing for that application/directory
5. Open coverage ```index.html``` in browser to view report.
   - Navigate to ```vets-website/coverage/index.html```
   - Copy file path
   - Paste file path to browser
6. Navigate to desired coverage report

## Test Commands
### Applications
| File Path | Terminal Command |
|---|---|
| ```vets-website/src/applications/auth``` | ```yarn test:coverage-app auth``` |
| ```vets-website/src/applications/login``` | ```yarn test:coverage-app login```|
| ```vets-website/src/applications/sign-in-changes``` | ```yarn test:coverage-app sign-in-changes``` |
| ```vets-website/src/applications/terms-of-use``` | ```yarn test:coverage-app terms-of-use``` |
| ```vets-website/src/applications/verify``` | ```yarn test:coverage-app verify``` |

###Platform
| File Path | Terminal Command |
|---|---|
| ```vets-website/src/platform/site-wide/ebenefits/``` | ```yarn test:unit src/platform/site-wide/ebenefits/tests --coverage --coverage-html``` |
| ```vets-website/src/platform/site-wide/user-nav/containers/AutoSSO``` | ```yarn test:unit src/platform/site-wide/user-nav/tests/containers/AutoSSO.unit.spec.jsx --coverage --coverage-html``` |
| ```vets-website/src/platform/user/tests/authentication/``` | ```yarn test:unit src/platform/user/tests/authentication/**/*.unit.spec.js --coverage --coverage-html```|
| ```vets-website/src/platform/user/tests/authorization/components/IdentityNotVerified``` | ```yarn test:unit src/platform/user/tests/authorization/components/IdentityNotVerified.unit.spec.jsx --coverage --coverage-html``` |
| ```vets-website/src/platform/utilities/tests/oauth``` | ```yarn test:unit src/platform/utilities/oauth --coverage --coverage-html``` |
| ```vets-website/src/platform/utilities/tests/sso``` | ```yarn test:unit src/platform/utilities/sso --coverage --coverage-html``` |

## Reference
```Vets-Website``` Identity owned code:
- ```src/applications/auth @department-of-veterans-affairs/octo-identity @department-of-veterans-affairs/va-platform-cop-frontend```
- ```src/applications/login @department-of-veterans-affairs/octo-identity @department-of-veterans-affairs/va-platform-cop-frontend```
- ```src/applications/sign-in-changes @department-of-veterans-affairs/octo-identity @department-of-veterans-affairs/va-platform-cop-frontend```
- ```src/applications/terms-of-use @department-of-veterans-affairs/octo-identity @department-of-veterans-affairs/va-platform-cop-frontend```
- ```src/applications/verify @department-of-veterans-affairs/octo-identity @department-of-veterans-affairs/va-platform-cop-frontend```
- ```src/platform/site-wide/ebenefits/ @department-of-veterans-affairs/octo-identity @department-of-veterans-affairs/va-platform-cop-frontend```
- ```src/platform/site-wide/user-nav/containers/AutoSSO.jsx @department-of-veterans-affairs/octo-identity @department-of-veterans-affairs/va-platform-cop-frontend```
- ```src/platform/site-wide/user-nav/tests/containers/AutoSSO.unit.spec.jsx @department-of-veterans-affairs/octo-identity @department-of-veterans-affairs/va-platform-cop-frontend # unit tests```
- ```src/platform/user/authentication @department-of-veterans-affairs/octo-identity @department-of-veterans-affairs/va-platform-cop-frontend```
- ```src/platform/user/tests/authentication @department-of-veterans-affairs/octo-identity @department-of-veterans-affairs/va-platform-cop-frontend # unit tests```
- ```src/platform/user/authorization/components/IdentityNotVerified.jsx @department-of-veterans-affairs/octo-identity @department-of-veterans-affairs/va-platform-cop-frontend```
- ```src/platform/user/tests/authorization/components/IdentityNotVerified.unit.spec.jsx @department-of-veterans-affairs/octo-identity @department-of-veterans-affairs/va-platform-cop-frontend # unit tests```
- ```src/platform/utilities/oauth @department-of-veterans-affairs/octo-identity @department-of-veterans-affairs/va-platform-cop-frontend```
- ```src/platform/utilities/tests/oauth @department-of-veterans-affairs/octo-identity @department-of-veterans-affairs/va-platform-cop-frontend # unit tests```
- ```src/platform/utilities/sso @department-of-veterans-affairs/octo-identity @department-of-veterans-affairs/va-platform-cop-frontend```
- ```src/platform/utilities/tests/sso @department-of-veterans-affairs/octo-identity @department-of-veterans-affairs/va-platform-cop-frontend # unit tests```
