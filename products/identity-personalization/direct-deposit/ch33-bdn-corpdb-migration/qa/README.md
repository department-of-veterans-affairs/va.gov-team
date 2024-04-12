

## QA Plan - Ch33 Migration to CorpDB
**Last updated:** 4/11/2024 - drafted

- [Ch33 Migration Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/76202)

## Testing 

|Description| Notes |
|---|---|
| [PM Ticket for Scenarios ](https://github.com/department-of-veterans-affairs/va.gov-team/issues/77249)|  |
| [QA Testing Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/76720) |  |
| [QA Scenarios](https://docs.google.com/spreadsheets/d/1rOD8w0YNTlfbefVK7t2RsWoYK_ui1gTkVhCXlJE5VDg/edit#gid=0) | |
|accessible qa test page |  |


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

### Feature Flippers 
Ensure the correct feature flipper(s) are enabled.
`profile_show_direct_deposit_single_form`
`profile_show_direct_deposit_single_form_edu_downtime` < may not need to test as part of this plan

### Adverse Findings Summary



| Test case No. |    Finding       | Device  | Operating System | Browser | Reporter | Resolution Ticket(s)| Status |
|---------------|------------------|---------|-----------------|---------|---------|---------------------|--------|
|8b | Copy needs to be updated in both UX Design and UI   |  PC  | Windows  | Chrome  | Travis | TBD  |  | 
|8c | Email works but the copy refers to C&P and should be benefit agnostic |  PC  | Windows  | Chrome  | Travis | TBD  |  |
|enhancement | we should update the form to provide details on what direct deposit is supported (eg. we don't support travel benefit dd) |  PC  | Windows  | Chrome  | Travis | TBD  |  |




## Staging Review Prep 
[Platform Guidance](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/staging-review)

## Privacy and Security Prep 
[Platform guidance](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/privacy-security-infrastructure-readiness-review)

