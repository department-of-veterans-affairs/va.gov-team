
## QA Artifacts - Default Send/Editing as a Subtask/Checkboxes
Last updated: 8/11/2023

[Migration Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/51900)

## Testing 

|Description|Ticket Link/Documentation|
|---|---|
| PM Ticket for Scenarios | [#62606](https://github.com/department-of-veterans-affairs/va.gov-team/issues/62606) |
| QA Testing Ticket - Sprint 14 7/5-7/18 | [Team QA Testing #562629](https://github.com/department-of-veterans-affairs/va.gov-team/issues/62629) |
| **QA Plan** / Scenarios | [GD Spreadsheet](https://docs.google.com/spreadsheets/d/1-oSUr_kFqyptbSI6jRC3O7wqk3TNDOwaWedmO3eh7FA/edit#gid=1459792507) and Spreadsheet uploaded to GH upon QA Completion|
| QA Fixes Epic| [BE/FE \| Profile \| EVSS>LH \| Direct Deposit C&P \| Post QA Fixes #60945](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60945) |


## QA Plan 
See test cases above 

#### General Version-coverage Strategy
- **Hardware:** cover 2nd-latest models [1 yr back from latest available]
- **Operating Systems:** Windows 2nd-latest; MacOS/iOS latest
- **Browsers:** all latest
  
##### Device + Operating System + Browser Combinations

|   |      Device        |  Operating System  | Browser  |
|---|--------------------|--------------------|----------|
|1. |      Macbook       |  Ventura (latest)  | Chrome   |
|2. |      Macbook       |  Ventura (latest)  | Edge     |
|3. |      Macbook       |  Ventura (latest)  | Safari   |
|4. |     iphone 13      |    iOS (latest)    | Chrome   |
|5. |     iphone 13      |    iOS (latest)    | Edge     |
|6. |     iphone 13      |    iOS (latest)    | Safari   |
|7. |         PC         |     Windows 10     | Chrome   |
|8. |         PC         |     Windows 10     | Edge     |
|9. | Samsung Galaxy S21 |      Android       | Chrome   |

### How We Will Test and Track
1. Use the spreadsheet in Test Scenario section to document test cases, browser/os/device combos and pass/fail
2. Leverage browserstack for browser/os/device combos we don't have access to
3. For any adverse findings, team member will fill in a row for each item in the table below. 
4. PM will create the needed ticket(s) to resolve finding, mark it in the Findings table below, and link it in the spreadsheet where the corresponding failure occurred.


### Adverse Findings Summary
| Test case No. |    Finding       | Device  | Operating System | Browser | Reporter | Resolution Ticket(s)| Status |
|---------------|------------------|---------|-----------------|---------|---------|---------------------|--------|
| n/a | While preparing the QA spreadsheet we noticed odd behavior on save if the phone number that was already saved was not change | Desktop | Windows | Chrome | Travis | [#63333](https://github.com/department-of-veterans-affairs/va.gov-team/issues/63333) | In Progress | 


## Staging Review Prep 
[Platform Guidance](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/staging-review)

## Privacy and Security Prep 
[Platform guidance](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/privacy-security-infrastructure-readiness-review)

