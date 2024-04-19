

## QA Plan - Ch33 Migration to CorpDB
**Last updated:** 4/16/2024 - updated links and added in resolution pr

- [Ch33 Migration Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/76202)

## Testing 

|Description| Notes |
|---|---|
| [PM Ticket for Scenarios ](https://github.com/department-of-veterans-affairs/va.gov-team/issues/77249)|  |
| [QA Testing Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/76720) |  |
| [QA Scenarios](https://docs.google.com/spreadsheets/d/1rOD8w0YNTlfbefVK7t2RsWoYK_ui1gTkVhCXlJE5VDg/edit#gid=0) | |
|[accessible qa test page](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/profile/direct_deposit/ch33-bdn-corpdb-migration/qa/direct-deposit-ch33-test-accounts.md) |  |


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
|7 | User 161 doesnt have any DD access with the `profile_show_direct_deposit_single_form` turned off. ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/129431463/0970f635-9e05-49b1-8b8d-6c4eaf4d21de)  When I turn on the form the user has access to the unified DD form. The disability compensation endpoint isn't called as far as I can tell ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/129431463/f596b9c8-662f-40f6-a5b5-edd62e689893)  |  PC  | Windows  | Chrome  | Travis | [PR 29174](https://github.com/department-of-veterans-affairs/vets-website/pull/29174)  | Completed | 
|9a | We're missing the small bold "Account" header at the top of the form. <img width="382" alt="missing-header" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/55992116/be1e7110-d7f0-4fd5-9dcc-7487ad94d137">  |  All  | All  | All  | Liz | TBD  | TBD | 
|9b | The `cancel` button is not the same size as the `save` button on mobile.  <img width="395" alt="buttons-different-sizes" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/55992116/d1d82a0a-5fc7-441d-9a6c-1b464f54b134"> |  Multiple  | Multiple  | Multiple  | Liz | TBD  | TBD | 
|9b | On desktop, the `cancel` button looks slightly bigger than the `save` button. This is not the case in other parts of profile where the buttons are side by side. <img width="373" alt="button-bigger" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/55992116/2f18c801-f2b6-442f-80fe-53f4380c79bf"> |  Macbook  | Mac  | Chrome  | Liz | TBD  | TBD | 
|9b | Copy needs to be updated in both UX Design and UI   |  PC  | Windows  | Chrome  | Travis | [PR 29174](https://github.com/department-of-veterans-affairs/vets-website/pull/29174)  | Completed | 
|9c | Email works but the copy refers to C&P and should be benefit agnostic |  PC  | Windows  | Chrome  | Travis | [PR 29174](https://github.com/department-of-veterans-affairs/vets-website/pull/29174)  | Completed |
|enhancement | we should update the form to provide details on what direct deposit is supported (eg. we don't support travel benefit dd) |  PC  | Windows  | Chrome  | Travis | TBD  |  |
|9f | the validation works but it should say why the routning number input isn't valid  ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/129431463/925e21aa-3973-4012-8d0f-6dae3885ce5c) |  PC  | Windows  | Chrome  | Travis | [PR 29174](https://github.com/department-of-veterans-affairs/vets-website/pull/29174)  | Completed  |
|9g | validation for an account that is too short isn't running ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/129431463/8c778252-3985-490d-bef9-a6221541451f)  |  PC  | Windows  | Chrome  | Travis | [PR 29174](https://github.com/department-of-veterans-affairs/vets-website/pull/29174)  |  Completed |
|9h | Validation on account length is running for an account that is too long, but it does not advise the user of the exact problem, it prompts them to load in an account number ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/129431463/b479c2aa-a698-4998-8683-8d08846559d5)|  PC  | Windows  | Chrome  | Travis | [PR 29174](https://github.com/department-of-veterans-affairs/vets-website/pull/29174)  |Completed  |
|9f | Trailing spaces cause the inline validation error to trigger, probably should ignore the space ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/129431463/160d855c-20bc-4c40-bf64-6e1e5c101e9a) |  PC  | Windows  | Chrome  | Travis |  |  |
|9f/9g | better handling for letters? the inline error should say something more specific ![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/129431463/5e9e06be-8764-4e14-92cd-34569f337f40) |  PC  | Windows  | Chrome  | Travis |  |  |











## Staging Review Prep 
[Platform Guidance](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/staging-review)

## Privacy and Security Prep 
[Platform guidance](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/privacy-security-infrastructure-readiness-review)

