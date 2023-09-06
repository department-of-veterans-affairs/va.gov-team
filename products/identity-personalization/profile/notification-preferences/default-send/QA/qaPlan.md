
## QA Artifacts - Default Send/Editing as a Subtask/Checkboxes
**Last updated:** 9/5/2023

- [Editing as a Subtask Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/49319) 
- [Default Send/Email as a Channel/Checkboxes Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/61101)

## Testing 

|Description|Ticket Link/Documentation|
|---|---|
| PM Ticket for Scenarios | [#62606](https://github.com/department-of-veterans-affairs/va.gov-team/issues/62606) |
| QA Testing Ticket | [Team QA Testing #62629](https://github.com/department-of-veterans-affairs/va.gov-team/issues/62629) |
| QA Plan / Scenarios | [GD Spreadsheet](https://docs.google.com/spreadsheets/d/1-oSUr_kFqyptbSI6jRC3O7wqk3TNDOwaWedmO3eh7FA/edit#gid=1459792507) and Spreadsheet uploaded to GH upon QA Completion|


## QA Plan 
See test scenarios linked above 

#### General Version-coverage Strategy
- **Hardware:** cover 2nd-latest models [1 yr back from latest available]
- **Operating Systems:** Windows 2nd-latest; MacOS/iOS latest
- **Browsers:** all latest
  
##### Device + Operating System + Browser Combinations

|   |      Device        |  Operating System  | Browser  |
|---|--------------------|--------------------|----------|
|1. |      Macbook       |  Ventura (latest)  | Chrome   |
|2. |      Macbook       |  Ventura (latest)  | Safari   |
|3. |     iphone 13      |    iOS (latest)    | Chrome   |
|4. |     iphone 13      |    iOS (latest)    | Safari   |
|5. |         PC         |     Windows 10     | Chrome   |
|6. |         PC         |     Windows 10     | Edge     |
|7. |         PC         |     Windows 10     | Firefox  |
|8. | Samsung Galaxy S21 |      Android       | Chrome   |


### How We Will Test and Track
1. Use the spreadsheet in Test Scenario section to document test cases, browser/os/device combos and pass/fail
2. Leverage browserstack for browser/os/device combos we don't have access to
3. For any adverse findings, team member will fill in a row for each item in the table below. 
4. PM will create the needed ticket(s) to resolve finding, mark it in the Findings table below, and link it in the spreadsheet where the corresponding failure occurred.


### Adverse Findings Summary
| Test case No. |    Finding       | Device  | Operating System | Browser | Reporter | Resolution Ticket(s)| Status |
|---------------|------------------|---------|-----------------|---------|---------|---------------------|--------|
| n/a | While preparing the QA spreadsheet we noticed odd behavior on save if the phone number that was already saved was not change | Desktop | Windows | Chrome | Travis | [#63333](https://github.com/department-of-veterans-affairs/va.gov-team/issues/63333) | Closed | 
| 9 | Inputting letters into the editing as a subtask flow when adding a phone number will not trigger the modal (this does not happen when updating a phone number) | PC | Windows 11 | Edge, Chrome | Travis, Liz | Ticket pending | |
| 4 | the h1 on this page should say "Add your mobile number" instead of "add or update". The h1 should reflect whatever the user is doing; `add` if null, `update` if there is already a value | PC | Windows 11 |  Chrome | Liz | Ticket pending | |


## Staging Review Prep 
[Platform Guidance](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/staging-review)

## Privacy and Security Prep 
[Platform guidance](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/privacy-security-infrastructure-readiness-review)

