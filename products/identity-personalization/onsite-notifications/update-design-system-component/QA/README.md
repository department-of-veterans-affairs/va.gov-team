# Onsite Notifications - Notification Component on My VA: QA Artifacts 

## Test Scenarios
QA was performed manually by team members. 
* [Test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-onsite-notification-component.md) (Github)
* [Test cases (A11y format)](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-onsite-notification-component-a11y-format.md)(Github)
* [Test Cases_ Notification Component on My VA (1).xlsx](https://github.com/department-of-veterans-affairs/va.gov-team/files/11896270/Test.Cases_.Notification.Component.on.My.VA.1.xlsx) (updated 6/28 to add reset test users)


## Defect report
- Noted in the findings table below and in the attached spreadsheet above. -- _no major findings_
- Additional findings reported outside of QA
    - [#60661](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60661) - _our pr is merged, now pending a design system release which is scheduled for 7/5_
    - [#60845](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60845) 

## Accessibility Staging Review Prep
- [Notification Component on My VA - Accessibility Staging Review Prep](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/onsite-notifications/update-design-system-component/launch-materials/notification-design-system-component-a11y-staging-review-prep.md)
- [#59505](https://github.com/department-of-veterans-affairs/va.gov-team/issues/59505)

## Test URL
The application can be accessed directly at https://staging.va.gov/my-va

## QA Plan 
For QA of the notification component on My VA we will be performing QA manually using a spreadsheet to track test cases and findings.

### Overview of Devices, Operating Systems & Browser

We need to test all 34 test cases across the devices, operating systems, and browsers  outlined below. 

#### General Version-coverage Strategy
- **Hardware:** cover 2nd-latest models [1 yr back from latest available]
- **Operating Systems:** Windows 2nd-latest; MacOS/iOS latest
- **Browsers:** all latest and previous

##### Device + Operating System + Browser Combinations

|   |      Device        |  Operating System  | Browser  |
|---|--------------------|--------------------|----------|
|1. |      Macbook       |  Ventura (latest)  | Chrome   |
|2. |      Macbook       |  Ventura (latest)  | Edge     |
|3. |      Macbook       |  Ventura (latest)  | Firefox  |
|4. |      Macbook       |  Ventura (latest)  | Safari   |
|5. |     iphone 13      |    iOS (latest)    | Safari   |
|6. |         PC         |     Windows 10     | Chrome   |
|7. |         PC         |     Windows 10     | Edge     |
|8. | Samsung Galaxy S21 |      Android       | Chrome   |


### How We Will Test and Track
1. Use the spreadsheet in Test Scenario section to document test cases, browser/os/device combos and pass/fail
2. Leverage browserstack for browser/os/device combos we don't have access to
3. For any findings, team member will fill in a row for each item in the table below. 
4. AJ will create the needed ticket(s) to resolve finding, mark it in the Findings table below, and link it in the spreadsheet where the corresponding failure occurred.

