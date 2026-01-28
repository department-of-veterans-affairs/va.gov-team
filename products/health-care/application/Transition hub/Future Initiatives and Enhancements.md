## Future Initiatives and Enhancements for the 10-10EZ and 10-10EZR forms
- Last updated 1/28/2026 hdjustice

### 10-10EZ Veteran Health Application



### 10-10EZR Veteran Health Update form



### Both Forms (90% of the fields and functionality are the same across both forms)
- #### [#40499](https://github.com/department-of-veterans-affairs/va.gov-team/issues/40499) - The system (correctly) throws an error when user attempts to enter a start of service date less than 15 years after their DOB, but still allows too-young users to check a box identifying themselves as "Vietnam vet" or first Gulf War veteran.
     - There's already a DOB-checking algorithm in place for validating that user's start of service date is raalistic. Consider applying that same function to disabling checkboxes that refer to events before the user was born. This would be helpful in preventing errors.
