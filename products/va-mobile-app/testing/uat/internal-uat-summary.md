# Internal UAT Summary

May 19, 2021

## Approach
We conducted sessions with 13 people who had their own identity proofed (Level of Assurance 3 or LOA3) credentials -- this was the only criteria we asked participants to meet. Some had health care, claims, and profile information and some did not. We asked participants to join a Zoom meeting from their Android or iOS device, sign in, and check the app section by section to determine if their data was displaying as expected. We did not ask participants to complete tasks (i.e. Sending a Secure Message, uploading a file to a claim, editing their personal information). We kept track of issues we observed in a Google sheet and ranked them using our agreed upon issue tracking framework ([see test plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/testing/VA%20Mobile%20App%20Test%20Plan.md#issue-tracking)). We decided to priorize fixing issues ranked as Critical or High prior to testing the app more with external participants. We ran internal sessions from April 23 - May 18. 

## Issues Found
Here, the issues found are summarized and the relevant follow up ticket is linked. **We are keeping close track of issues found in a Google Sheet that is accessible to internal team members. Please reference the internal Google Sheet and/or the related ZenHub tickets for the most recent information about an issue. This document serves to document issue findings but will not be updated as issues are resolved.** 

This section is broken into 3 parts: 

- Critical and High Issues 
- Medium and Low Issues
- UX/Feature Suggestions


### Critical and High Issues

The critical and high issues we found were follows:

| Severity   |      Section      | Error description | Expected behavior | Follow up ticket |
|----------|-------------|------|------|------|
| Critical | Appointments | Upcoming appointment within 6 months was not displaying. | Appointments within a year should display | [Ticket](https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/23973) |
| Critical | Letters  | When generating the Service Benefit and Verification Letter, the participant's address listed in the app under "Letters" did not match the address on the PDF letter. It was an old address. |   Display currently listed address |  |
| Critical | Secure Messaging | Secure messages not displaying | All messages should display | This issue presented because work was still in progress, it was fixed in a newer build and is performing as expected. |
| Critical | Secure Messaging | Custom folders not displaying | All folders should display | This issue presented because work was still in progress, it was fixed in a newer build and is performing as expected |
| Critical | Claims | Full claims history not displaying | Show all claims from all time | [Ticket](https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/23930) |
| High | Auth | User recevied an error when trying to login related to wifi | User should be able to login on wifi |  |
| High | Secure Messaging | Error message displayed when first landing in the inbox, the error went away after refreshing | There should be no error if messages are loading correctly | [Ticket](https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/24266) |
| High | Secure Messaging | Text symbols displaying incorrectly in Secure Messaging | Text symbols should render as expected |  |
| High | Secure Messaging | Single image taken on iPhone was too big to attach | We would expect one commonly sized image would be able to upload | [Ticket](https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/24087), [Ticket](https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/24948) |
| High | Secure Messaging | Attachments double in size when added to the app | Attachments remain the existing size when added to the app | [Ticket](https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/24087) |
| High | Appointments | Community care alert is not displaying when those appointments aren't loading | When some appointments aren't loading, a warning alert should display explaining that only some appointments are displaying | [Ticket](https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/24401) |
| High | Onboarding | The first bullet point on the Appointments onboarding screen currently reads as "schedule some appointments" | We should remove bullet because we don't have this feature | [Ticket](https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/24716) |

---

### Medium and Low Issues

The Medium and Low issues found were as follows:

| Severity   |      Section      | Error description | Expected behavior | Follow up ticket |
|----------|-------------|------|------|------|
| Medium | Authentication | "Disallowed user agent" error showing when someone tries to sign in with Google through ID.me | Sign in with Google through ID.me should work. | [Ticket](https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/24085) |
| Medium | Appointments  | Community care appts not displaying for upcoming and past apts |   Display Community Care appointments | [Ticket](https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/24030), [Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18232) |
| Medium | Profile | When a user is entering an APO address and doesn't select an entry in the APO/FPO/DPO, the error displays as "City is required" |  | [Ticket](https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/24028) |
