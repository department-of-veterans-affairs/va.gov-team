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

| Severity   |      Section      | Error description | Expected behavior & notes | Follow up ticket |
|----------|-------------|------|------|------|
| Medium | Authentication | Disallowed user agent error showed when someone tried to sign in with Google through ID.me | Sign in with Google through ID.me should work. | [Ticket](https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/24085) |
| Medium | Appointments  | Community care appointments not displaying |   Display Community Care appointments | [Ticket](https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/24030), [Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/18232) |
| Medium | Profile | When a user is entering an APO address and doesn't select an entry in the APO/FPO/DPO, the error displays as "City is required" | Update copy to "Please select a valid option" for both City and State when "I live on a United States military base outside of the United States" is checked  | [Ticket](https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/24028) |
| Medium | Profile | First, a user got the app wide error for Letters. Then, after they added a Mailing Address in Profile, Letters was working. | Is a lack of Mailing Address hiding Letters? If a user does not have a Mailing Address, they should see the screen where they can input their address in Letters. *Note: It's worth double checking if this error is actually what happened (could it have been the Letters service happened to be down the first time the user tried and this had nothing to do with address).* |  |
| Low | Profile | Right margin not being respected on iPhone XR | Right margin should be respected on all devices | [Ticket](https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/24079) |
| Low | Onboarding | Onboarding is not displaying for some folks signing in for the first time | *Note: need to reproduce to confirm* |  |
| Low | Appointments | Community Based Outpatient Clinic (CBOC) appointments are not displaying | We expect CBOC appointments to display in the app |  |
| Low | Secure Messaging | In the Secure Messaging Inbox, a long subject line was not wrapping and pushing the date/time down, it was displaying on top of the date line. This was caused by transitoning between landscape and portrait modes. | Text should wrap as expected in portrait mode after transitioning from landscape mode | [Ticket](https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/24815) |
| Low | Profile | At first, the participant's Name, Seal, and Branch of Service displayed. Then, later in the session, the participant's Name and Seal did not display, but their Branch of Service did.  | Name should always display and never hide; the Seal (if we have it) should always display and never hide. | [Ticket](https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/24815) |
| Low | Authentication | The text in the scopes presented as *very* bold, to the point where legibility becomes a concern. | *Note: the user had enlarge text mode turned on.*  | |
| Low | Click to Call component | The padding within the Click to Call with TTY component looks big - we should reduce the padding to half of what it is in between elements within this component  |  | [Ticket](https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/24717) |
| Low | Secure Messaging | Sent message screen is not respecting the margin-right. Text on this screen was about to go off the screen.  | *Note: the user had enlarge text mode turned on.*   | [Ticket](https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/24346) |
| Low | App wide | Loading spinner not spinning  | We noticed on a Samsung device that the loading indicator was not moving. This could be a bug or expected on this specific device. |  |
| Low | App wide | Nav bar fonts assume the device's custom font style  | Noticed on an Android Samsung Galaxy 10+ devide. Impacted areas: H1 on top nav, Pages on bottom nav, Device's action sheet (SM attachments flow) |  |
| Low | Authentication (MyHealtheVet sign in page) | When the user opens their keyboard via tapping into the "Password" field, the field is hidden by the keyboard.  |   |  |
| Low | Profile | A participant recommended capitalizing "Marine Corps" on Serivce Verification and Benefit Letter screen (currently says "Marine corps")  | *Note: This is service driven text, but we could add logic to make sure all of those values have each word capitalized if needed.*  |  |

---

### UX/Feature Suggestions

**Appointments** 
- Include why an appointment was cancelled and who it was cancelled by (Veteran or clinic)
- In the list UI on the Appointments Overview Screen, show more differententiation between phone, video, and in person appointments
- Use the clinic friendly name on Appointment Detail Screens
- When adding an appointment to calendar from the Appointment Detail Screen, include more information. Right now, the appointment type becomes the title of the calendar event (so a VA appointment is labeled as "VA Appointment"). Consider adding more detailed information or multiple fields into title. 
- The phone number on the Appointment Detail Screen is the main facility phone number, not the clinic contact information. Suggestion is to add clinic number. 

**Secure Messaging**
-  On the Compose a Message screen,"When Will I get a Reply?" is currently a drop down using the Additional Info component. Consider making this more prominent to clarify that the user should not use Secure Messaging for emergencies.

**Profile** 
- 2 internal participants read the large "Remove your address" button that appears on Profile edit screen when a user had information that could be deleted as the primary button and did not see the "Save" button. This caused them to enter and then immediately remove their entry instead of saving it. **Note: We considered this a critical usability issue and have shifted the placement of the "Remove your [information]" button on Personal and Contact information screens to above the form ([see ticket](https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/24340)) as an immediate solution. In the future, we should investigate further refinement of this interaction design.**

**Authentication**
- A participant changed their MyHealtheVet password during the authentication flow, which then sent them to MyHealtheVet instead of the app once they had successfully signed in. Suggestion is to find a way to direct users back to the app once they reset their password on MHV. The UX is not clear.

**Future feature suggestions**
- Veteran ID Card 
- Manage Dependents 

