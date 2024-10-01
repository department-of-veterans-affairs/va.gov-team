# My VA Forms Status MVP: QA Strategy & Artifacts 
**Last Updated: September 26, 2024 - QA findings**

## Test Case Documentation
QA was performed manually by team members.
* [Test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myva-forms-status-mvp.md) (Github - sensitive repo)
* [Test cases a11y format](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myva-forms-status-a11y.md) (Github - sensitive repo)
* [Test Cases_ My VA Forms Status MVP.xlsx](https://github.com/user-attachments/files/17196034/Test.Cases_.My.VA.Forms.Status.MVP.xlsx)


## Defect report
- Noted in the findings table below and in the attached spreadsheet above.

## Accessibility Staging Review Prep
- [A11y Staging review prep doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/forms-status-on-My-VA/launch-materials/forms-status-on-My-VA-a11y-staging-review-prep.md)
- A11y ticket: [Accessibility Testing for Authenticated Experience My VA, My VA, Forms status on My VA #93786](https://github.com/department-of-veterans-affairs/va.gov-team/issues/93786)

## Test URL
The application can be accessed directly at https://staging.va.gov/my-va

## QA Plan 
For QA of the My VA Forms Status we will be performing QA manually using a spreadsheet to track test cases and findings.

### Overview of Devices, Operating Systems & Browser

We need to test all 10 test cases across the devices, operating systems, and browsers outlined below. 

#### General Version-coverage Strategy
- **Hardware:** cover 2nd-latest models [1 yr back from latest available]
- **Operating Systems:** Windows 2nd-latest; MacOS/iOS latest
- **Browsers:** all latest 

##### Device + Operating System + Browser Combinations

|   |      Device        |  Operating System  | Browser  |
|---|--------------------|--------------------|----------|
|1. |      Macbook       |  Ventura (latest)  | Chrome   |
|2. |      Macbook       |  Ventura (latest)  | Firefox  |
|3. |     iphone 13      |    iOS (latest)    | Safari   |
|4. |         PC         |     Windows 10     | Chrome   |
|5. |         PC         |     Windows 10     | Edge     |
|6. | Samsung Galaxy S21 |      Android       | Chrome   |


### How We Will Test and Track
1. Use the spreadsheet in Test Scenario section to document test cases, browser/os/device combos and pass/fail
2. Leverage browserstack for browser/os/device combos we don't have access to
3. For any findings, team member will fill in a row for each item in the table below. 
4. PM will create the needed ticket(s) to resolve finding, mark it in the Findings table below, and link it in the spreadsheet where the corresponding failure occurred.

## Findings Summary
| Test case No. |    Finding       | Device  | Operating System| Browser |Reporter | Resolution Ticket(s)| Status |
|---------------|------------------|---------|-----------------|---------|---------|---------------------|--------|
| 1 | Incorrect copy - when LOA1 users have no forms to show the copy in the Benefit Applications and Forms section is incorrect  | all  | all  | all  | Matt  | [#93764](https://github.com/department-of-veterans-affairs/va.gov-team/issues/93764) | Draft PR waiting to be merged post-staging review   |
| 2 | Submitted forms not appearing for LOA1 users  | all  | all  | all  | AJ  | [#93723](https://github.com/department-of-veterans-affairs/va.gov-team/issues/93723) | Draft PR waiting to be merged post-staging review   |
| 4 | Incorrect copy - when LOA3 users have no forms to show the copy in the Benefit Applications and Forms section is incorrect  | all  | all  | all  | Matt  | [#93764](https://github.com/department-of-veterans-affairs/va.gov-team/issues/93764) | Draft PR waiting to be merged post-staging review   |
| General/all | Font in tag component appears to be mismatched from VADS |  all  | all  | all  | Matt  | [#93767](https://github.com/department-of-veterans-affairs/va.gov-team/issues/93767)|  |


