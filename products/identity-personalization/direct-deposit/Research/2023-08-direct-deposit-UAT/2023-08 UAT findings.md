# Profile | Direct Deposit Migration UAT Findings

Pam Drouin, Authenticated Experience Profile team

## Background

EVSS -- the VA backend that stores direct deposit for disability compensation & pensions, disability ratings, and more is being retired in favor of the Lighthouse platform. Lighthouse has been working hard to migrate data from EVSS to their platform, and they have successfully done so with direct deposit for comp & pen information. This means that we need to reintegrate the VA.gov profile to point to Lighthouse instead of EVSS.

- [Project outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/direct-deposit/evss-lighthouse-migration#readme)
- [Direct deposit product outline](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/products/identity-personalization/direct-deposit)

### Goals
The primary goal of our UAT was to confirm that the Direct Deposit section of the Profile functions as intended for users who sign in with ID.me and/or Login.gov and who have direct deposit set up with their bank information, including validating that MHV and DSLogon behavior has not changed.

Specifically, this research validated the following use cases:
- Users see direct deposit section of the profile and receive disability compensation & pension payments can edit and save their bank info.
- Users that open the edit modal and click cancel will see modal close and previously-saved direct deposit information will still be saved.
- Users that click to edit direct deposit information cannot submit the form with errors.
- Users that click to edit direct deposit information will get an error if they input a fake routing number that 1) passes inline validation, is 2) submitted to the backend, and 3) an error message is returned to the user.
- Users who save direct deposit for disability compensation & pension information receive a confirmation email.

### Approach
Summary of how we conducted UAT:
We recruited 7 participants with the aim of conducting 5 completed User Acceptance Test sessions. 
- [Research Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/evss-lighthouse-migration/UAT/research-plan.md) (note: this file is stored within the EVSS>Lighthouse Migration folder)
- [Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/evss-lighthouse-migration/UAT/conversation-guide.md) (note: this file is stored within the EVSS>Lighthouse Migration folder)

## Summary of findings

UAT went smoothly and no changes are needed.

- 2 of the 5 participants logged in with ID.me passed tasks 1-5 (P1, P2)
- 2 of the 5 participants logging in with Login.gov passed tasks 1-5 (P3, P5)
- 3 of the 5 participants logged in with MyHealtheVet passed task 7 (P1, P3, P4)

We were not able to test successfully with a DSLogon user. None of the participants used DSLogon, and colleagues we sourced internally were unable to successfully gain access via DSLogon. 

Since the same authorization rules apply to both MHV and DSL users (both are gated, and these rules are enforced at both the FE and BE levels), and we've already seen the gate with MHV users, we have decided that we don’t need a DSLogon user to complete UAT.

## Detailed findings 

### Participant login credentials
- P1: ID.me & MHV
- P2: ID.me
- P3: Login.gov & MHV. P3 also had ID.me but did not test because of pre-existing user issues 
- P4: ID.me (not LOA3) & MHV
- P5: Login.gov 

|                                                                                                   | ID.me | Login.gov | MHV |
| ------------------------------------------------------------------------------------------------- | --------------------- | --------- | --- |
| UAT Task #1: Review Direct Deposit with LOA3 account                                              |                       |           |     |
| Confirm they are LOA3                                                                             | 2/2                   | 2/2       | n/a |
| Confirm their Direct Deposit info is visible in Profile                                           | 2/2                   | 2/2       | n/a |
| Confirm their Direct Depisit info is correct                                                      | 2/2                   | 2/2       | n/a |
|                                                                                                   |                       |           |     |
| UAT Task #2: Cancel an edit to direct deposit info                                                |                       |           |     |
| When user clicks EDIT then CANCEL, info stays the same                                            | 2/2                   | 2/2       | n/a |
|                                                                                                   |                       |           |     |
| UAT Task #3: Edit and try to save with errors                                                     |                       |           |     |
| When user clicks SAVE, they cannot submit due to error(s)                                         | 2/2                   | 2/2       | n/a |
|                                                                                                   |                       |           |     |
| UAT Task #4: Edit and try to save with fake routing number                                        |                       |           |     |
| When user clicks SAVE, they cannot due to fake routing number                                     | 2/2                   | 2/2       | n/a |
|                                                                                                   |                       |           |     |
| UAT Task #5: Edit, add direct deposit information, and click save                                 |                       |           |     |
| When user clicks EDIT and SAVE, they get a confirmation email                                     | 2/2                   | 2/2       | n/a |
|                                                                                                   |                       |           |     |
| OPTIONAL TASKS                                                                                    |                       |           |     |
|                                                                                                   |                       |           |     |
| UAT Task #6: Switch to Login.gov or ID.me                                                         |                       |           |     |
| Confirm LOA3. If they are not, they should see "Verify your identity"                             | n/a                   | n/a       | n/a |
| Confirm their DD info is visible in Profile                                                       | n/a                   | n/a       | n/a |
|                                                                                                   |                       |           |     |
| UAT Task #7: MHV or DS Logon user                                                                 |                       |           |     |
| User sees the Direct Deposit section of Profile and a prompt to sign in using ID.me or Login.gov. |                       |           | 3/3 |

## Next steps

Everything we tested passed with no issues. UAT is complete!

## Appendix
- [Research Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/evss-lighthouse-migration/UAT/research-plan.md) (note: this file is stored within the EVSS>Lighthouse Migration folder)
- [Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/evss-lighthouse-migration/UAT/conversation-guide.md) (note: this file is stored within the EVSS>Lighthouse Migration folder)
- [Google Sheets task checklist](https://docs.google.com/spreadsheets/d/1zuqeQjVEyuPOPe8qMkJPugi2ctSPm2IhIktoWGU6TPI/edit#gid=568842145)

### Tool(s) used for Synthesis
Google Sheets

### Who we talked to 

**Recruitment criteria**

We aimed to recruit 7 participants for at least **5 completed sessions** with the following user type: LOA3 (ID.me or Login.gov) user that is eligible for direct deposit for disability compensation & pension and has set it up. Participants needed to have a disability rating and be able to log in to VA.gov with a verified ID.me or verified Login.gov credentials.

We worked with **5 participants** to test the backend migration.

Audience segment:
* Veterans: 5 
* Caregivers: 0 
* Family members of a Veteran: 0  

Gender:
* Male: 2 
* Female: 3 

LGBTQ+:
* Transgender: n/a 
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: n/a
* Gay, lesbian, or bisexual: n/a

Devices used during study: 
* Desktop: 5 
* Tablet: 0 
* Smart phone: 0 
* Assistive Technology: 0

Age:
* 25-34: 1
* 35-44: 0
* 45-54: 4
* 55-64: 0
* 65+: 0
* Unknown: 0

Education:
* High school degree or equivalent: 0
* Some college (no degree): 0
* Associate's degree, trade certificate or vocational training: 0
* Bachelor's degree: 3
* Master's degree: 2
* Doctorate degree: 0
* Unknown: 0

Geographic location:
* Urban: 0
* Rural: 0
* Unknown: 5

Race:
* White: 2
* Black: 1
* Hispanic: 1
* Biracial: 0
* Asian: 0
* Native: 0
* Prefer not to answer: 1

Disability and Assistive Technology (AT):
* Cognitive: unknown
* AT beginner: 0
* AT advanced user: 0
* Desktop screen reader: 0
* Mobile screen reader: 0
* Magnification/Zoom: 0
* [Speech Input Technology](https://www.w3.org/WAI/perspective-videos/voice/) like Siri/Dragon Naturally Speaking: 0
* Hearing aids: unknown
* Sighted keyboard: 0
* Captions: 0
### Underserved groups we haven’t talked to 

This research does not include the perspectives of the following marginalized Veteran groups:
* Veterans Age 55-64+
* Assistive Tech users
* Mobile users
