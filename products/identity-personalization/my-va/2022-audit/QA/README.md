# My VA Audit Improvements: QA Artifacts 
Last Updated: March 7, 2023 (updated finding in test case 30, re-uploaded My VA Audit UX Improvements test cases.xlsx)

## Test Scenarios
QA was performed manually by team members to the best of our ability based on limited resources and access to/knowledge of testing tools. 
* [Test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myvaaudit.md) (Github)
* [Test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myvaaudit-a11y.md) (Github - A11y format)
* [My VA Audit UX Improvements test cases.xlsx](https://github.com/department-of-veterans-affairs/va.gov-team/files/10913514/My.VA.Audit.UX.Improvements.test.cases.xlsx)
(record of QA execution and findings)


## Defect report
- Noted in the findings table below and in the attached spreadsheet above.

## Accessibility Staging Review Prep
[My VA Audit UX Improvements - Accessibility Staging Review Prep](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2022-audit/launch-materials/my-va-audit-improvements-a11y-staging-review-prep.md)

## Test URL
The application can be accessed directly at https://staging.va.gov/my-va

## QA Plan 
For QA of the My VA Audit Improvements we will be performing QA manually using a spreadsheet to track test cases and findings.

### Overview of Devices, Operating Systems & Browser

We need to test all 34 test cases across the devices, operating systems, and browsers  outlined below. 

#### General Version-coverage Strategy
- **Hardware:** cover 2nd-latest models [1 yr back from latest available]
- **Operating Systems:** Windows 2nd-latest; MacOS/iOS latest
- **Browsers:** all latest 

##### Device + Operating System + Browser Combinations

|   |      Device        |  Operating System  | Browser  |
|---|--------------------|--------------------|----------|
|1. |      Macbook       |  Ventura (latest)  | Chrome   |
|2. |      Macbook       |  Ventura (latest)  | Edge     |
|3. |      Macbook       |  Ventura (latest)  | Firefox  |
|4. |      Macbook       |  Ventura (latest)  | Safari   |
|5. |     iphone 13      |    iOS (latest)    | Chrome   |
|6. |     iphone 13      |    iOS (latest)    | Edge     |
|7. |     iphone 13      |    iOS (latest)    | Firefox  |
|8. |     iphone 13      |    iOS (latest)    | Safari   |
|9. |         PC         |     Windows 10     | Chrome   |
|10.|         PC         |     Windows 10     | Edge     |
|11.|         PC         |     Windows 10     | Firefox  |
|12.| Samsung Galaxy S21 |      Android       | Chrome   |


### How We Will Test and Track
1. Use the spreadsheet in Test Scenario section to document test cases, browser/os/device combos and pass/fail
2. Leverage browserstack for browser/os/device combos we don't have access to
3. For any findings, team member will fill in a row for each item in the table below. 
4. AJ will create the needed ticket(s) to resolve finding, mark it in the Findings table below, and link it in the spreadsheet where the corresponding failure occurred.

## Findings Summary
| Test case No. |    Finding       | Device  | Operating System| Browser |Reporter | Resolution Ticket(s)| Status |
|---------------|------------------|---------|-----------------|---------|---------|---------------------|--------|
| 10 | Claims and appeals: Copy update to error message - should read "We can't access your claims or appeals information" | all | both | all | Allison | [54379](https://github.com/department-of-veterans-affairs/va.gov-team/issues/54379) | Sprint 5 - resolved |
| 15 | Health care: Copy is wrong in error message; secondary links appear when they shouldn't | Macbook & iphone| iOS | Chrome, Edge, Firefox, Safari| Allison | [54384](https://github.com/department-of-veterans-affairs/va.gov-team/issues/54384) | Sprint 5 - closed |
| 15 | Health care: section disappears | Macbook | iOS | Safari | Allison | [54386](https://github.com/department-of-veterans-affairs/va.gov-team/issues/54386) | Sprint 5 - closed |
| 16 | Health care: Appointments API error with unread messages: User sees alert for unread messages, error, but no secondary links display when they should | All | All | All | Allison | [54437](https://github.com/department-of-veterans-affairs/va.gov-team/issues/54437) | Sprint 5 <br />Sprint 6 - resolved |
| 16 | Health care: Secondary links are incorrect when appointments and message API fail | All | All | All | Allison | [54438](https://github.com/department-of-veterans-affairs/va.gov-team/issues/54438) | On hold until 54437 is resolved | 
| 18 | Outstanding debts: The "learn about VA debt" link should appear right-aligned on desktop when the user has a copay (or overpayment debt card), but on staging in this scenario it's showing beneath the copay card |  Macbook      |  iOS     |   All 4      |    AJ     | [54387](https://github.com/department-of-veterans-affairs/va.gov-team/issues/54387)| Sprint 5 <br />Sprint 6 |
| 20 | Outstanding debts: Data discrepancy with user 81 (as far as we can tell limited to that test user) and "updated" date on My VA not matching what's in the debt portal. We're showing the date of the second latest statement (April 4 2022) instead of the latest statement date (May 4, 2022)  | Macbook  | OS | All 4 | AJ | [54390](https://github.com/department-of-veterans-affairs/va.gov-team/issues/54390)   | Sprint 5 - resolved |
| 26 | Benefit payments: "View your payment history" link should be "Review your payment history" | All        | All     |  All       |    AJ     |  [54391](https://github.com/department-of-veterans-affairs/va.gov-team/issues/54391)| Sprint 5 <br />Sprint 6 - resolved|
| 30 | Benefit payments: "View your payment history" link should be "Review your payment history" | All        | All     |  All       |    AJ     |  [54391](https://github.com/department-of-veterans-affairs/va.gov-team/issues/54391)| Sprint 5 <br />Sprint 6 - resolved|
| 33 | Benefit app drafts: "Continue your application" link in the card needs to be updated to the active link style to match the design.  | All   | All |  All | Angela| [54394](https://github.com/department-of-veterans-affairs/va.gov-team/issues/54394) | Sprint 5 <br />Sprint 6 - resolved|
