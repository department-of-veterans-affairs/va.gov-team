# Identity Frontend Code Covereage Report

***Date Modified:*** December 3, 2024

## Generating Code Coverage Report
1. From terminal nagivate to ```vets-website``` repository on local machine
2. Run test command for desired coverage report (See table below for test command)
3. Make sure to add the ```--coverage``` flag when running your tests.
4. Wait for unit tests to run and make sure all are passing for that application/directory
5. Open coverage ```index.html``` in browser to view report.
   - URL structure: ```[local machine file path]/vets-website/coverage/[test file path]/index.html```
   - Example of URL structure: ```file:///Users/caitlin/Documents/GitHub/vets-website/coverage/platform/site-wide/user-nav/containers/index.html```

## Reference
```Vets-Website``` identity owned code:
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
