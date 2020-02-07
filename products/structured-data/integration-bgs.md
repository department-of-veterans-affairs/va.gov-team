# Benefits Gateway Services (BGS) / CorpDB
​
## Timeline
*
​
## Useful Links
* https://github.com/department-of-veterans-affairs/vets-contrib/blob/master/teams/sre-team/services/bgs.md
​
## Contacts
* name / role / slack / email
​
## Notes
- BGS gem available here https://github.com/department-of-veterans-affairs/lighthouse-bgs
- Two functions needed based on Evan Gaito’s feedback (Engility):
    - Lookup: Use BGS `VetRecordService.findCorporateRecord`. This works for both Veterans and non-Veterans but MVI is still used first for Veterans.
    - Add Records for Unrelated Person: BGS `PersonWebService.insertPerson`
    - Add Records for Dependents:  BGS `BenefitClaimWebService.updateBenefitClaimDependents` when adding dependents directly to an existing Veteran
    - **Adding records requires SSNs.** For adding people: “The Social Security Number field cannot be null.  If null, an exception message shall be returned, “SsnNbr can not be null”.  *FYI, Claimants do not need to enter SSNs on the 530 form.*
