## Future Initiatives and Enhancements for the 10-10EZ and 10-10EZR forms
- Last updated 1/28/2026 hdjustice
---
### 10-10EZ Veteran Health Application
#### [Ticket #]

---
### 10-10EZR Veteran Health Update form
#### [Ticket #]

---
### Both Forms (90% of the fields and functionality are the same across both forms)
- #### [#40499](https://github.com/department-of-veterans-affairs/va.gov-team/issues/40499) - The system (correctly) throws an error when user attempts to enter a start of service date less than 15 years after their DOB, but still allows too-young users to check a box identifying themselves as "Vietnam vet" or first Gulf War veteran.
     - There's already a DOB-checking algorithm in place for validating that user's start of service date is raalistic. Consider applying that same function to disabling checkboxes that refer to events before the user was born. This would be helpful in preventing errors.
- #### [#70197](https://github.com/department-of-veterans-affairs/va.gov-team/issues/70197) - There are two points during the form flow where the user could enter personal information and financial information about their spouse. This could be confusing, and will add extra time for form completion for users. Additionally, if different information is entered in the two places, there could be data validity issues.
     - Not quite sure what the resolution should be, but ideally the Veteran should not be filling out personal and financial information for their spouse twice.
     - [Engineering findings](https://github.com/department-of-veterans-affairs/va.gov-team/issues/70197#issuecomment-3234442467): This issue boils down to the fact that there are two ways to add spouse financial information. Once as a dependent, the other as household income...
