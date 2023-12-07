

## QA Plan - Hub 
**Last updated:** 11/15/2023 - drafted

- [Hub Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/40593)

## Testing 

|Description| Notes |
|---|---|
| [PM Ticket for Scenarios ](https://github.com/department-of-veterans-affairs/va.gov-team/issues/68860)|  |
| [QA Testing Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/69415) |  |
| [QA Scenarios](https://docs.google.com/spreadsheets/d/1NfYZh4LFTVw8ZFbiv9AVkLipvxdzwwD7lKv3t7V8QMo/edit?usp=sharing) | |
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
`profile_use_hub_page`


### Adverse Findings Summary

`No issues were encountered`

| Test case No. |    Finding       | Device  | Operating System | Browser | Reporter | Resolution Ticket(s)| Status |
|---------------|------------------|---------|-----------------|---------|---------|---------------------|--------|
| |No issues were encountered  |  |  |  |  |  |  | 




## Staging Review Prep 
[Platform Guidance](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/staging-review)

## Privacy and Security Prep 
[Platform guidance](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/privacy-security-infrastructure-readiness-review)

