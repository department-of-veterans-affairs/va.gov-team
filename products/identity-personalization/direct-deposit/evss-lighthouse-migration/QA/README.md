
## QA Artifacts - EVSS > Lighthouse Direct Deposit - Comp&Pen 
Last updated: 7/24/2023

[Migration Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/51900)

## Testing 

|Description|Ticket Link|
|---|---|
| PM Ticket for Scenarios | [#54870](https://github.com/department-of-veterans-affairs/va.gov-team/issues/54870) |
| QA Testing Ticket - Sprint 14 7/5-7/18 | [Team QA Testing #54771](https://github.com/department-of-veterans-affairs/va.gov-team/issues/54771) |
| **QA Plan** / Scenarios | [GD Spreadsheet](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/evss-lighthouse-migration/QA/Direct%20depost%20for%20compensation%20%26%20pension%20EVSS%20_%20Lighthouse%20migration%20test%20cases%20(1).xlsx) and  [Spreadsheet uploaded to GH](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/evss-lighthouse-migration/QA/Direct%20depost%20for%20compensation%20%26%20pension%20EVSS%20_%20Lighthouse%20migration%20test%20cases%20(1).xlsx)|
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
3. For any adverse findings, team member will fill in a row for each item in the table below. 
4. PM will create the needed ticket(s) to resolve finding, mark it in the Findings table below, and link it in the spreadsheet where the corresponding failure occurred.


### Adverse Findings Summary
| Test case No. |    Finding       | Device  | Operating System | Browser | Reporter | Resolution Ticket(s)| Status |
|---------------|------------------|---------|-----------------|---------|---------|---------------------|--------|
| 6 | The error messaging was incorrectly returning from LH. More expansive details can be found in the resolution ticket | Desktop | Windows | Chrome | Travis | [#61252](https://github.com/department-of-veterans-affairs/va.gov-team/issues/61252) | Complete/Resolved | 


## Staging Review Prep 
#### Discussed this with plaform support, we shouldn't need a full staging review but we do need a privacy and security review 
[Platform Guidance](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/staging-review)

## Privacy and Security Prep 
[Platform guidance](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/privacy-security-infrastructure-readiness-review)

