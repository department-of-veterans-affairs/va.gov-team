# Test Plan and Traceability Report

## Test Plan

### DS Logon Modal
| # | Test scenario | Test process | Pass / Fail | Tester | Date | Notes |
| - | ------------- | ------------ | ----------- | ------ | ---- | ----- |
| 1 | User wants to sign in on the homepage (header) | 1. User navigates to the homepage<br/> 2. User clicks the Sign in button in the header<br/> 3. User sees updated content | Pass | Ian Magenta | 06/03/2025 | --- |            
| 2 | User wants to sign in on the homepage (create account button) | 1. User navigates to the homepage<br/> 2. User clicks the Create account button<br/> 3. User sees updated content<br/> | Pass | Ian Magenta | 06/03/2025 | --- |
| 3 | User wants to sign in on a page to fill out a form (form va-alert) | 1. User navigates to the [526EZ page](https://staging.va.gov/disability/file-disability-claim-form-21-526ez/introduction)<br/> 2. User clicks Sign in to start your application button<br/> 3. User sees updated content<br/> | Pass | Ian Magenta | 06/03/2025 | --- |
| 4 | User wants to sign in to change direct deposit (different alert) | 1. User navigates to [change direct deposit page](https://staging.va.gov/change-direct-deposit/)<br/> 2. User clicks the Sign in or create an account button<br/> 3. User sees updated content<br/> | Pass | Ian Magenta | 06/03/2025 | --- |
| 5 | User authenticates via the unified sign-in page | 1. User navigates to https://staging.va.gov/sign-in<br/> 2. User sees updated content<br/> | Pass | Ian Magenta | 06/03/2025 | --- |

### DS Logon Interstitial Page

**DevTools Network response overrides**

0. Authenticate with ID.me > Use vets.gov.user+210@gmail.com > Navigate to /sign-in-changes-reminder
1. Open Chrome DevTools > Network tab
2. Right-click on credential_emails > Override content
3. If prompted provide a temporary folder for overrides to live
4. Copy the response provided in the Notes column into the Overrides response for credential_emails

| # | Test scenario | Test process (Network overrides) | Pass / Fail | Tester | Date | Notes |
| - | ------------- | ------------ | ----------- | ------ | ---- | ----- |
| 1 | User is not authenticated | 1. User navigates to https://staging.va.gov/sign-in-changes-reminder<br/> 2. User is redirect to homepage because they are not authenticated<br/> | Pass | Ian Magenta | 06/03/2025 | --- |            
| 2 | DS Logon credential user authenticates, and has **neither** [ID.me](http://id.me/) or [Login.gov](http://login.gov/) credential | 1. User navigates to https://staging.va.gov/sign-in-changes-reminder<br/> 1a. Use **DevTools Network response overrides**<br/> 2. User is prompted with the Create Account option for [Login.gov](http://login.gov/) AND [ID.me](http://id.me/)<br/> | Pass | Ian Magenta | 06/05/2025 | {} |
| 3 | DS Logon credential user authenticates, and has **only** [ID.me](http://id.me/) credential | 1. User navigates to https://staging.va.gov/sign-in-changes-reminder 1a. Use **DevTools Network response overrides**<br/> 2. User is prompted with [ID.me](http://id.me/) identity verification button<br/> | Pass | Ian Magenta | 06/05/2025 | {"idme": "idme-email@gmail.com"} |
| 4 | DS Logon credential user authenticates, and has **only** [Login.gov](http://login.gov/) credential | 1. User navigates to https://staging.va.gov/sign-in-changes-reminder<br/> 1a. Use **DevTools Network response overrides**<br/> 2. User is prompted with [Login.gov](http://login.gov/) identity verification button<br/> | Pass | Ian Magenta | 06/05/2025 | {"logingov": "logingov-email@yahoo.com"} |
| 5 | DS Logon credential user authenticates, and has **both** a [ID.me](http://id.me/) and [Login.gov](http://login.gov/) credential | 1. User navigates to https://staging.va.gov/sign-in-changes-reminder<br/> 1a. Use **DevTools Network response overrides**<br/> 2. User is prompted with both the [ID.me](http://id.me/) and [Login.gov](http://login.gov/) identity verification<br/> buttons | Pass | Ian Magenta | 06/05/2025 | {"idme": "idme-email@gmail.com", "logingov": "logingov-email@yahoo.com"} |

### MHV Modal
| # | Test scenario | Test process | Pass / Fail | Tester | Date | Notes |
| - | ------------- | ------------ | ----------- | ------ | ---- | ----- |
| 1 | User wants to sign in on the homepage (header) | 1. User navigates to the homepage<br/> 2. User clicks the Sign in button in the header<br/> 3. User sees updated content | Pass | Alex G | 10/03/2024 | --- |            
| 2 | User wants to sign in on the homepage (create account button) | 1. User navigates to the homepage<br/> 2. User clicks the Create account button<br/> 3. User sees updated content<br/> | Pass | Alex G | 10/04/2024 | --- |
| 3 | User wants to sign in on a page to fill out a form (form va-alert) | 1. User navigates to the [526EZ page](https://staging.va.gov/disability/file-disability-claim-form-21-526ez/introduction)<br/> 2. User clicks Sign in to start your application button<br/> 3. User sees updated content<br/> | Pass | Alex G | 10/04/2024 | --- |
| 4 | User wants to sign in to change direct deposit (different alert) | 1. User navigates to [change direct deposit page](https://staging.va.gov/change-direct-deposit/)<br/> 2. User clicks the Sign in or create an account button<br/> 3. User sees updated content<br/> | Pass | Alex G | 10/04/2024 | --- |
| 5 | User authenticates via the unified sign-in page | 1. User navigates to https://staging.va.gov/sign-in<br/> 2. User sees updated content<br/> | Pass | Alex G | 10/04/2024 | --- |

### MHV Interstitial Page

**DevTools Network response overrides**

0. Authenticate with ID.me > Use vets.gov.user+210@gmail.com > Navigate to /sign-in-changes-reminder
1. Open Chrome DevTools > Network tab
2. Right-click on credential_emails > Override content
3. If prompted provide a temporary folder for overrides to live
4. Copy the response provided in the Notes column into the Overrides response for credential_emails

| # | Test scenario | Test process (Network overrides) | Pass / Fail | Tester | Date | Notes |
| - | ------------- | ------------ | ----------- | ------ | ---- | ----- |
| 1 | User is not authenticated | 1. User navigates to https://staging.va.gov/sign-in-changes-reminder<br/> 2. User is redirect to homepage because they are not authenticated<br/> | Pass | Alex G | 11/26/2024 | --- |            
| 2 | MHV credential user authenticates, and has **neither** [ID.me](http://id.me/) or [Login.gov](http://login.gov/) credential | 1. User navigates to https://staging.va.gov/sign-in-changes-reminder<br/> 1a. Use **DevTools Network response overrides**<br/> 2. User is prompted with the Create Account option for [Login.gov](http://login.gov/) AND [ID.me](http://id.me/)<br/> | Pass | Caitlin N. | 11/27/2024 | {} |
| 3 | MHV credential user authenticates, and has **only** [ID.me](http://id.me/) credential | 1. User navigates to https://staging.va.gov/sign-in-changes-reminder 1a. Use **DevTools Network response overrides**<br/> 2. User is prompted with [ID.me](http://id.me/) identity verification button<br/> | Pass | Caitlin N. | 11/27/2024 | {"idme": "idme-email@gmail.com"} |
| 4 | MHV credential user authenticates, and has **only** [Login.gov](http://login.gov/) credential | 1. User navigates to https://staging.va.gov/sign-in-changes-reminder<br/> 1a. Use **DevTools Network response overrides**<br/> 2. User is prompted with [Login.gov](http://login.gov/) identity verification button<br/> | Pass | Caitlin N. | 11/27/2024 | {"logingov": "logingov-email@yahoo.com"} |
| 5 | MHV credential user authenticates, and has **both** a [ID.me](http://id.me/) and [Login.gov](http://login.gov/) credential | 1. User navigates to https://staging.va.gov/sign-in-changes-reminder<br/> 1a. Use **DevTools Network response overrides**<br/> 2. User is prompted with both the [ID.me](http://id.me/) and [Login.gov](http://login.gov/) identity verification<br/> buttons | Pass | Alex G | 11/27/2024 | {"idme": "idme-email@gmail.com", "logingov": "logingov-email@yahoo.com"} |

## Traceability Report

### DS Logon Test Plan

| Type | Total | Tester | Date | Notes |
| ---- | ----- | ------ | ---- | ----- |
| Coverage for References | 100.00% | Ian Magenta | 06/05/2025 | All of our user stories are covered in the test plan. |
| Summary(Defects) | 0.00% | Ian Magenta | 06/06/2025 | No defects uncovered during testing. |

### MHV Test Plan

| Type | Total | Tester | Date | Notes |
| ---- | ----- | ------ | ---- | ----- |
| Coverage for References | 100.00% | Ian Magenta | 06/10/2025 | All of our user stories are covered in the test plan. |
| Summary(Defects) | 0.00% | Ian Magenta | 06/10/2025 | No defects uncovered during testing. |
