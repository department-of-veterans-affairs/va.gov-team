# My VA Health Care section - Dot Indicator on Unread Health Care Messages: QA Artifacts 

## Test Scenarios
QA was performed manually by team members. 
* [Test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-dot-indicator-on-my-va-healthcare.md) (Github)
* [Test cases - A11y format](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-dot-indicator-on-my-va-healthcare-a11y.md) (Github)
* [Test Cases_ My VA Health Care section - Dot Indicator on Unread Health Care Messages.xlsx](https://github.com/department-of-veterans-affairs/va.gov-team/files/13031535/Test.Cases_.My.VA.Health.Care.section.-.Dot.Indicator.on.Unread.Health.Care.Messages.xlsx)



## Defect report
- Noted in the findings table below and in the attached spreadsheet above. -- _no major findings_ 

## Accessibility Staging Review Prep
- [Dot Indicator on Unread Health Messages - Accessibility Staging Review Prep](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/onsite-notifications/dot-indicator/create-dot-indicator/launch-materials/dot-indicator-a11y-staging-review-prep.md)
- [#67204](https://github.com/department-of-veterans-affairs/va.gov-team/issues/67204)

## Test URL
The application can be accessed directly at https://staging.va.gov/my-va

## QA Plan 
For QA of the dot indicator on My VA we will be performing QA manually using a spreadsheet to track test cases and findings.

### Overview of Devices, Operating Systems & Browser

We need to test 2 test cases across the devices, operating systems, and browsers outlined below. 

#### General Version-coverage Strategy
- **Hardware:** cover 2nd-latest models [1 yr back from latest available]
- **Operating Systems:** Windows 2nd-latest; MacOS/iOS latest
- **Browsers:** all latest and previous

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
4. AJ will create the needed ticket(s) to resolve finding, mark it in the Findings table below, and link it in the spreadsheet where the corresponding failure occurred.

