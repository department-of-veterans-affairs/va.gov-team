## QA Plan - International Phone Numbers 

**Drafted 7/2/2025**

- [Corresponding Epic ](https://github.com/department-of-veterans-affairs/va.gov-team/issues/74562)

## 



## QA Plan 
See test scenarios in the attached spreadsheet:

### Spreadsheet
[QA Testing - International Phone Numbers.xlsx](https://github.com/user-attachments/files/21025666/QA.Testing.-.International.Phone.Numbers.xlsx)



#### General Version-coverage Strategy
- **Hardware:** cover 2nd-latest models [1 yr back from latest available]
- **Operating Systems:** Windows 2nd-latest; MacOS/iOS latest
- **Browsers:** all latest
  

**Open question:** do we need to test w/Windows 11? 

##### Device + Operating System + Browser Combinations

|   |      Device        |  Operating System  | Browser  |
|---|--------------------|--------------------|----------|
|1. |      Macbook       |  Ventura (latest)  | Chrome   |
|2. |      Macbook       |  Ventura (latest)  | Safari   |
|3. |     iphone 15      |    iOS (latest)    | Chrome   |
|4. |     iphone 15      |    iOS (latest)    | Safari   |
|5. |         PC         |     Windows 10     | Chrome   |
|6. |         PC         |     Windows 10     | Edge     |
|7. |         PC         |     Windows 10     | Firefox  |
|8. | Samsung Galaxy     |      Android       | Chrome   |




### How We Will Test and Track
1. Use the spreadsheet in Test Scenario section to document test cases, browser/os/device combos and pass/fail
2. Leverage browserstack for browser/os/device combos we don't have access to
3. For any adverse findings, team member will fill in a row for each item in the table below. 
4. PM will create the needed ticket(s) to resolve finding, mark it in the Findings table below, and link it in the spreadsheet where the corresponding failure occurred.


### Feature Flippers 
Ensure the correct feature flipper(s) are enabled.
- `profile_international_phone_numbers`



### Adverse Findings Summary

| Test case No. |    Finding       | Device  | Operating System | Browser | Reporter | Resolution Ticket(s)| Status |
|---------------|------------------|---------|-----------------|---------|---------|---------------------|--------|
|               |                  |         |                 |         |         |                     |        |
