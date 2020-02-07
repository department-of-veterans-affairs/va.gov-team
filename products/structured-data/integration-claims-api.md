# Claims API
In BIP. Use Vault to access envs.

This API is used for establishing a Claim. ParticipantIDs for both Veteran and Claimant are required. This means that Veteran and Claimant both need to exist in CorpDB.

## Timeline
* Jan 16 - Phylesha Bullard, scrum master for BIP Claims API is tracking our access request for VA-API systems to hit Claims API (machine to machine)
* Jan 6 - request for AWS access was filed https://github.com/department-of-veterans-affairs/va.gov-team/issues/4592
​
## Useful Links
* [Claims API security doc](https://github.com/department-of-veterans-affairs/pension-and-fiduciary-automation/blob/master/pension-automation/architecture/claims-api/0003BD_VBA-LSD%202.0%20Claims%20API%20Security%20Guide_20190906.pdf)
* [Claims API info](https://github.com/department-of-veterans-affairs/pension-and-fiduciary-automation/tree/master/pension-automation/architecture/claims-api)
​
## Contacts
* name / role / slack / email
* Allison Doster
* Tim Carrico
* Michael Bastos (Oddball, Lighthouse) knows about integrating with BIP Claims API
​
## Notes
* requires a CorpDB participant ID, which means that the Veteran on the form must exist in MVI for claim creation to be possible
    * Service Type Code
    * Program Type code
    * Benefit Claim type
    * claimant id (from CorpDB?)
    * participant id
    * first name
    * last name
    * date
* We have observed that VSRs perform pre-check data steps every time they touch a claim. This supports the assumption that we do not initially need to perform much pre-check work before creating a claim via BIP Claims API. This assumption needs to be validated.
