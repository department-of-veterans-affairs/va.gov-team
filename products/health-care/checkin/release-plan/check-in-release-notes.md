# CHECK-IN AND PRE-CHECK-IN 
# RELEASE NOTES

## Product Summary
VA is replacing the proprietary VETLink appointment check-in kiosks with an in-house developed mobile friendly experience that allows Veterans to complete pre-appointment tasks from their home and check in for their health appointments. This system leverages the trusted VA.gov web experience to reduce costs and quickly surface veterans’ status to VA staff, while reducing required interactions and time spent. The check-in experience team does extensive 
research with veterans in order to focus on outcomes that reduce stress and provide intuitive interfaces to allow Veterans to complete check-in tasks at their own convenience. The check-in experience apps are currently being piloted in the St Louis area and will be launched nation-wide over the course of the summer.

When a Veteran arrives for their appointment, they can check-in through a text message on their personal mobile device. The Veteran receives a link back that they can use to complete check-in through a few simple prompts on a website on their phone. They don’t have to wait in line at a kiosk or to talk to a staff member- they can start checking in as soon as they’re ready. The new check-in experience integrates with existing VA systems to let the staff know that the Veteran has checked in. We also have a pre-check-in process that prompts the Veteran to complete some check-in steps before the day of their appointment in the comfort of their own home. This includes things such as verifying that their contact information and emergency contact are up to date, and health questionnaires are planned for future development. 

## Product Guides 
#### [The latest product guides](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/checkin/product/product-guides)

## Releases

### 2/7/2023
- Updated Pre-Check-in and Check-in to make use of a simplified VA header & footer 
    - [Epic 45315](https://app.zenhub.com/workspaces/check-in-experience-61fc23a2cb8a14001132e102/issues/gh/department-of-veterans-affairs/va.gov-team/45315) 
- Fixed an issue where non-numeric station numbers were causing a patient to not reach the check-in complete page
    - [Issue 23325](https://github.com/department-of-veterans-affairs/vets-website/pull/23325#event-8462585429)
- Added valid hrefs to links that are used for navigation and functionality with Pre-Check-in and eCheck-in
    - [Issue 52360](https://github.com/department-of-veterans-affairs/va.gov-team/issues/52360)

### 1/26/2023
- Updated the build to limit loaded web components to just those used for Pre-Checkin 

### 1/25/2023
- Changes the error handling in Pre-Check-in for cancelled appointments. The cancelled appointment error message will only show when all appointments in the list are cancelled. 
    - [Ticket 51862](https://github.com/department-of-veterans-affairs/va.gov-team/issues/51862)

### 01/20/2023
- Fixed an accessibility error on the demographics list view (uses semantic markup for lists in lieu of aria labels)
    - [Ticket 51894](https://github.com/department-of-veterans-affairs/va.gov-team/issues/51894)

### 01/06/2023
-  Fixes the error message on the last name field so that it translates when you toggle the language. 
    - [Ticket 51440](https://github.com/department-of-veterans-affairs/va.gov-team/issues/51440)

### 12/23/2022
- Updated Pre-Check-in content "VA account" when instructing Veterans on where to update their information to now say "VA.gov profile"
    - [Ticket 50875](https://github.com/department-of-veterans-affairs/va.gov-team/issues/50875)

### 12/19/2022
- Updated the error message a Veteran receives when attempting to use Pre-Check-in on the day of their appointment to check-in after the check-window; message now says "We're sorry. Pre-check-in is no longer available for your appointment time. Ask a staff member for help to check -in.
    - [Ticket 50083](https://github.com/department-of-veterans-affairs/va.gov-team/issues/50083)

### 12/14/2022
- Refactored API calls to use a query builder for parameters; no user facing
    - [Ticket 49082](https://github.com/department-of-veterans-affairs/va.gov-team/issues/49082)

### 11/28/2022
- Changed the early guardrail for the check-in window from 30 minutes to 45 minutes. Veterans will now be able to use eCheck-in to check-in for their VA health appoiuntment starting as early as 45 minutes before their appointment time up to 15 minutes after their appointment time.
    - [Epic 49261](https://github.com/department-of-veterans-affairs/va.gov-team/issues/49261) 
- Fixed a bug where the link to the VA account was not being displayed for Tagalog
    - [Ticket 50015](https://github.com/department-of-veterans-affairs/va.gov-team/issues/50015)

### 11/23/2022
- Updated Pre-Check-in to save the Veterans progress through the workflow. Now, when they reload the application at any point before completing the workflow, they will return to where they left off, instead of the start of the workflow, and their answers to any previously-asked questions will be retained
    - [Ticket 47829](https://github.com/department-of-veterans-affairs/va.gov-team/issues/47829)
- Added additional Spanish translations
    - [Ticket 48348](https://github.com/department-of-veterans-affairs/va.gov-team/issues/48348)

### 11/15/2022
- Updated the react modal to use the web-component version; currently only affects the Privacy Act Statement modal pop-up; no noticeable changes to Veterans
    - [Ticket 49554](https://github.com/department-of-veterans-affairs/va.gov-team/issues/49554)

### 11/08/2022
- Updated error message in the info box when identity verification fails (Pre-Check-in & eCheck-in) to "We’re sorry. We couldn’t find an account that matches that last name or date of birth. Please try again."
    - [Ticket 48721](https://github.com/department-of-veterans-affairs/va.gov-team/issues/48721)

### 11/07/2022
- Updated eCheck-in to save the Veterans progress through the workflow. Now, when they reload the application at any point before completing the workflow, they will return to where they left off, instead of the start of the workflow, and their answers to any previously-asked questions will be retained
    - [Ticket 47829](https://github.com/department-of-veterans-affairs/va.gov-team/issues/47829)

### 11/03/2022
- Changed the content of the "Go to another appointment" link in eCheck-in to say "Back to today's appointments" to be clearer to Veterans
    - [Ticket 47443](https://github.com/department-of-veterans-affairs/va.gov-team/issues/47443)

### 11/02/2022
- Tagalog Language Support - New feauture to allow Veterans to view eCheck-in and Pre-Check-in page content translated to Tagalog 
    - [Epic 42788](https://github.com/department-of-veterans-affairs/va.gov-team/issues/42788)

### 10/31/2022
- Fixed a bug where the footer was not displayed on the "See Staff" page
    - [Ticket 48099](https://github.com/department-of-veterans-affairs/va.gov-team/issues/48099)
- Fix 2 UI component alignments bugs
    - [Ticket 48110](https://github.com/department-of-veterans-affairs/va.gov-team/issues/48110)

### 10/28/2022
- Fixed a bug where the Confirmation page would display an incorrect title when using the application translated to Spanish
    - [Ticket 48414](https://github.com/department-of-veterans-affairs/va.gov-team/issues/48414)

### 10/18/2022
- Updated content in the "Need help?" footer of eCheck-in pages to include clearer instructions for the Veteran
    - Confirmation page
       - ![image](https://user-images.githubusercontent.com/86678742/196749400-07289e20-b43e-4e78-b910-f2d610749b9e.png)
    - Non-confirmation pages 
        - ![image](https://user-images.githubusercontent.com/86678742/196749473-1de0ae08-9ae3-421d-8f43-ed506689433f.png)
    - [Ticket 47827](https://app.zenhub.com/workspaces/check-in-experience-61fc23a2cb8a14001132e102/issues/department-of-veterans-affairs/va.gov-team/47827) 

### 10/12/2022
- Updated eCheck-in and Pre-Check-in to require the use of the Veteran's date of birth instead of their last 4 when verifying their identity (detailed release notes can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/release-plan/detailed-release-notes/lorota-security-updates.md)). 
    - We have currently released to 30% of Veteran and will monitor the metrics as we increase the availability as follows:
         - Monday 10/17 - 50%
         - Tuesday 10/18 - 70%
         - Wednesday 10/19 - 90%
         - Thursday 10/20 - 100%
    - [Epic 39193](https://app.zenhub.com/workspaces/check-in-experience-61fc23a2cb8a14001132e102/issues/department-of-veterans-affairs/va.gov-team/39193)

### 10/11/2022
- Updated eCheck-in to display a message to Veterans who successfully check-in to see a staff member if they have been waiting in the waiting room for more than 15 minutes
    - [Epic 47114](https://app.zenhub.com/workspaces/check-in-experience-61fc23a2cb8a14001132e102/issues/department-of-veterans-affairs/va.gov-team/47114)

### 10/05/2022
- Fixed a bug for the date-of-birth component that resulted in an endless validation loop; no changes to the front end
    - [Epic 47467](https://app.zenhub.com/workspaces/check-in-experience-61fc23a2cb8a14001132e102/issues/department-of-veterans-affairs/va.gov-team/47467)

### 10/04/2022
- As part of the security updates for Pre-Check-in & eCheck-in, a LoROTA entry is deleted after 3 failed identity verification attempts; no changes to the front end
    - [Epic 43720](https://app.zenhub.com/workspaces/check-in-experience-61fc23a2cb8a14001132e102/issues/department-of-veterans-affairs/va.gov-team/43720) 

### 9/29/2022
- Changed Pre-Check-in to allow Veterans to get an error message prior to verifying their identity when using an expired Pre-Check-in link
    - [Epic 46117](https://app.zenhub.com/workspaces/check-in-experience-61fc23a2cb8a14001132e102/issues/department-of-veterans-affairs/va.gov-team/46117)

### 9/27/2022 
- Change to allow the VA to manually trigger a PageDuty outage for the Pre-Check-in and Check-in applications individually. End users would see a maintenance message when an outage has been triggered. 
    - [Epic 46120](https://app.zenhub.com/workspaces/check-in-experience-61fc23a2cb8a14001132e102/issues/department-of-veterans-affairs/va.gov-team/46120)

### 9/26/2022 
- Updated Pre-Check-in to display the error message that indicates Pre-Check-in is no longer available for an appointment (because the LoROTA entry was deleted) before the Veteran verifies their identity instead of after.
    - [Epic 46117](https://app.zenhub.com/workspaces/check-in-experience-61fc23a2cb8a14001132e102/issues/department-of-veterans-affairs/va.gov-team/46117)

### 9/14/2022
- Addded additional Spanish-translated content
    - [Epic 42546](https://app.zenhub.com/workspaces/check-in-experience-61fc23a2cb8a14001132e102/issues/department-of-veterans-affairs/va.gov-team/42546)

### 9/7/2022
- Added a link to the [How to check in with your smartphone for some VA appointments](https://www.va.gov/resources/how-to-check-in-with-your-smartphone-for-some-va-appointments/) resource page to the Pre-Check-in completion confirmation page to aid Veterans in understanding the steps necessary to Check-in for their appointments on the day of their appointment 
    - [Epic 44392](https://app.zenhub.com/workspaces/check-in-experience-61fc23a2cb8a14001132e102/issues/department-of-veterans-affairs/va.gov-team/44392)

### 8/31/2022
- Removed obsolete feature flags for translation work
    - [Ticket 45787](https://app.zenhub.com/workspaces/check-in-experience-61fc23a2cb8a14001132e102/issues/department-of-veterans-affairs/va.gov-team/45787)

### 8/30/2022
- Updated Google Analytics event tracking for the language toggle
    - [Ticket 45230](https://app.zenhub.com/workspaces/check-in-experience-61fc23a2cb8a14001132e102/issues/department-of-veterans-affairs/va.gov-team/45230)
- Change to append a parameter to error URLs to provide information about the type of error and aid in capturing more detailed error metrics
    - [Ticket 45777](https://github.com/department-of-veterans-affairs/va.gov-team/issues/45777)

### 8/26/2022
- Fixed a bug where translated content was not displaying
    - [Ticket 44473](https://github.com/department-of-veterans-affairs/va.gov-team/issues/44473)

### 8/19/2022
- Parallelized certain API function calls to help improve page load time
    - [Ticket 45775](https://github.com/department-of-veterans-affairs/va.gov-team/issues/45775)

### 8/10/2022
- Backend enhancement to make the stationNo property available to facilitate unique IDs using the stationNo-appointmentIen combination.
    - [Ticket 44524](https://app.zenhub.com/workspaces/check-in-experience-61fc23a2cb8a14001132e102/issues/department-of-veterans-affairs/va.gov-team/44524)

### 8/9/2022
- Enhanced Pre-Check-in content to display messaging that is specific to the type of appointment (currently only in-person and telephone appointments). See detailed released notes [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/release-plan/detailed-release-notes/phone-appointments.md). 
    - [Epic 38258](https://app.zenhub.com/workspaces/check-in-experience-61fc23a2cb8a14001132e102/issues/department-of-veterans-affairs/va.gov-team/38258)
- Enhanced Pre-Check-in and Check-in to show type of care information and the doctor's name for each appointment displayed; in the event there is no information available, the information label will also not display
    - [Epic 42027](https://app.zenhub.com/workspaces/check-in-experience-61fc23a2cb8a14001132e102/issues/department-of-veterans-affairs/va.gov-team/42027)
    
### 8/8/2022
- Fixed a bug where VoiceOver reads addresses twice
    - [Ticket 44418](https://app.zenhub.com/workspaces/check-in-experience-61fc23a2cb8a14001132e102/issues/department-of-veterans-affairs/va.gov-team/44418)

### 8/2/2022
- Minor back-end updates to mock payload (no Veteran impact.)
    - [Ticket 45089](https://app.zenhub.com/workspaces/check-in-experience-61fc23a2cb8a14001132e102/issues/department-of-veterans-affairs/va.gov-team/45089)

### 8/1/2022
- Fix to prevent app from sending pre-check-in data without a session to improve accuracy of analytics. 
    - [Ticket 44798](https://app.zenhub.com/workspaces/check-in-experience-61fc23a2cb8a14001132e102/issues/department-of-veterans-affairs/va.gov-team/44798)

### 7/30/2022
- Bug fix to ensure Veterans are not prompted to check in for an appointment they already checked in to when they use their browser back button.
    - [Ticket 38166](https://app.zenhub.com/workspaces/check-in-experience-61fc23a2cb8a14001132e102/issues/department-of-veterans-affairs/va.gov-team/38166)

### 7/25/2022
- Fixed a bug where duplicate requests were being made with an undefined token
    - [Ticket 44705](https://github.com/department-of-veterans-affairs/va.gov-team/issues/44705)
- Fixed a bug where the wrong API call is made after refreshing a page in Pre-Check-in
    - [Ticket 44798](https://app.zenhub.com/workspaces/check-in-experience-61fc23a2cb8a14001132e102/issues/department-of-veterans-affairs/va.gov-team/44798)

### 7/23/2022
- Fixed a bug where Veterans would be scrolled to the bottom of the loading-message page 
    - [Ticket 42684](https://app.zenhub.com/workspaces/check-in-experience-61fc23a2cb8a14001132e102/issues/department-of-veterans-affairs/va.gov-team/42684)

### 7/22/2022
- Added the physical location to the appointment information displayed during Pre-Check-in and Check-in so that the Veteran will know the exact location of their appointment
    - [Epic 42794](https://github.com/department-of-veterans-affairs/va.gov-team/issues/42794)

### 7/19/2022
- Updated content to use semantic lists or divs instead of dl, dt, and dd HTML elements. Should resolve acceessibility issues with screen readers reading "definition" repeatedly when accessing the content in these lists.
    - [Ticket 44145](https://github.com/department-of-veterans-affairs/va.gov-team/issues/44145)

### 7/16/2022
- Fixed a bug where text inputs were missing the red line that visually indicates an error state
    - [Ticket 44335](https://app.zenhub.com/workspaces/check-in-experience-61fc23a2cb8a14001132e102/issues/department-of-veterans-affairs/va.gov-team/44335)

### 7/12/2022
- For low-vision Veterans or Veterans who only use a keyboard, the alert for a user verification error now gets the focus when displayed.
   - [Ticket 43525](https://app.zenhub.com/workspaces/check-in-experience-61fc23a2cb8a14001132e102/issues/department-of-veterans-affairs/va.gov-team/43525)
- Modified several HTML aria labels to enhance compatibility with screen readers  
   - [Epic 43016](https://app.zenhub.com/workspaces/check-in-experience-61fc23a2cb8a14001132e102/issues/department-of-veterans-affairs/va.gov-team/43016)

### 7/8/2022
- Veterans will now see a new error message when they attempt to complete pre-check-in for an appointment that has been cancelled. See detailed release notes [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/release-plan/detailed-release-notes/cancelled-appointment-messaging.md)
   - [Epic 40418](https://app.zenhub.com/workspaces/check-in-experience-61fc23a2cb8a14001132e102/issues/department-of-veterans-affairs/va.gov-team/40418) 
- Removed the visual display of the Pre-Check-in expiration date so that Veterans would not be confused by the date and what it means; more detailed messages are already presented to the Veteran when they attempt to use a Pre-Check-in link on the day of or after their appointment
   - [Ticket 43547](https://app.zenhub.com/workspaces/check-in-experience-61fc23a2cb8a14001132e102/issues/department-of-veterans-affairs/va.gov-team/43547)

### 7/7/2022
- Spanish Language Support - New feauture to allow Veterans to view page content translated to Spanish. See detailed release notes [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/release-plan/detailed-release-notes/spanish-translations.md)
   - [Epic 38257](https://app.zenhub.com/workspaces/check-in-experience-61fc23a2cb8a14001132e102/issues/department-of-veterans-affairs/va.gov-team/38257) 
- Session storage to keep track of user validity attempts now resets each time a new appointment identifier (UUID) is set for the session. This allows a user to have 3 validity attempts per appointment identifier. Validity attempts also get reset upon successful login.
   - [Ticket 36483](https://github.com/department-of-veterans-affairs/va.gov-team/issues/36483)

### 07/01/2022
- Replaced straight quotation marks with curly quotation marks to maintain consistency with the VA Design System.
   - [Ticket 43159](https://app.zenhub.com/workspaces/check-in-experience-61fc23a2cb8a14001132e102/issues/department-of-veterans-affairs/va.gov-team/43159)

### 06/24/2022
- Minor styling changes to make Pre-Check-in and Check-in consistent with each other and the intended design
   - [Epic 42481](https://app.zenhub.com/workspaces/check-in-experience-61fc23a2cb8a14001132e102/issues/department-of-veterans-affairs/va.gov-team/42481)

### 06/22/2022
- Changed the text for the VAOS link from "Go to your appointment details” to "Sign in to manage all appointments" to clarify that the Veteran will need to sign into another application to manage their appointments
   - [Epic 42105](https://app.zenhub.com/workspaces/check-in-experience-61fc23a2cb8a14001132e102/issues/department-of-veterans-affairs/va.gov-team/42105)

### 06/13/2022
- Veterans will now be able to trigger the submission of the authentication form when they press the return/enter key; applies to both the Pre-Check-in and Check-in authentication forms
   - [Ticket 40262](https://github.com/department-of-veterans-affairs/va.gov-team/issues/40262)

### 05/25/2022
- Veterans will see more detailed informational messages in these scenarios ([detailed release notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/release-plan/detailed-release-notes/update-messaging.md))
    - When they complete Pre-Check-in but indicate their contact, emergency contact and/or next of kin information is out of date
    - When they attempt to complete Pre-Check-in for an appointment for which they already completed pre-check-in
    - When they are unable to complete Pre-Check-in, they will see information explaining the purpose for Pre-Check-in
    - When they receive an error during Pre-Check-in, they will see information explaining that they can still Check-in on the day of their appointment
    - When they attempt to complete Pre-Check-in on the day of their appointment prior to 15 minutes after their appointment time
    - When they attempt to complete Pre-Check-in on the day of their appointment more than 15 after their appointment time
    - When an unexpected error occurs during Pre-Check-in
    - [Epic 38136](https://app.zenhub.com/workspaces/check-in-experience-61fc23a2cb8a14001132e102/issues/department-of-veterans-affairs/va.gov-team/38136) & [Epic 39270](https://app.zenhub.com/workspaces/check-in-experience-61fc23a2cb8a14001132e102/issues/department-of-veterans-affairs/va.gov-team/39270)  

### 05/19/2022
- Fix to auto-refresh the appointment list page when a check-in window is about to expire, to prevent people from trying to check in after they're able to and seeing an error. It also fixes the missing refresh when going back to the appointment list from the check-in confirmation page and adds various tests.
    - [Ticket 41065](https://github.com/department-of-veterans-affairs/va.gov-team/issues/41065)
    
### 05/11/2022
- Fix to allow a veteran to seamlessly perform check-in and/or pre-check-in even if they have an active fully authenticated session.
    - [Ticket 39270](https://app.zenhub.com/workspaces/check-in-experience-61fc23a2cb8a14001132e102/issues/department-of-veterans-affairs/va.gov-team/38679)

### 05/06/2022
- Added messaging to direct Veterans on where to go to update their demographic, emergency contact, and next-of-kin contact information.
    - [Epic 39270](https://app.zenhub.com/workspaces/check-in-experience-61fc23a2cb8a14001132e102/issues/department-of-veterans-affairs/va.gov-team/39270)
    - Upon being asked to confirm if their contact, emergency contact, and next-of-kin information is correct
        - If a Veteran has indicated that any of the information needs updating, they will see information directing them how to update their information; different views are shown depending on which information they indicated need updating
            -  [Contact information](https://images.zenhubusercontent.com/61523b5b9d354750f04823db/aaa86267-0d68-42c2-8aa0-b37584a89479)
            -  [Emergency contact](https://images.zenhubusercontent.com/61523b5b9d354750f04823db/b71432c7-a158-4ad9-bc09-f3059b29f819)
            -  [Next of kin](https://images.zenhubusercontent.com/61523b5b9d354750f04823db/06470da7-f140-4226-918b-75711c25a785)
            -  [Contact and Emergency contact](https://images.zenhubusercontent.com/61523b5b9d354750f04823db/694f383d-d3af-4693-ab47-835ca3620b70)
            -  [Contact and Next of kin](https://images.zenhubusercontent.com/61523b5b9d354750f04823db/a5a7a94e-a76c-4cfd-a0ad-8013d5f6d07c)
            -  [Emergency contact and Next of kin](https://images.zenhubusercontent.com/61523b5b9d354750f04823db/b69904ff-90df-4fdd-b0ef-7d69cd75c4d3)
            -  [All three](https://images.zenhubusercontent.com/61523b5b9d354750f04823db/91cc549f-5195-4b1d-bdd2-03b9625a7b2a)
        - If a Veteran has indicated that all of the information is correct, they will not see this information
### 04/08/2022
- Change made to allow Veterans, who confirm their demographics information during the pre-check-in process but fail to check-in for their appointment, to return later to check-in for their appointment and not have to re-confirm their demographics information.
    - [Epic 39712](https://app.zenhub.com/workspaces/check-in-experience-61fc23a2cb8a14001132e102/issues/department-of-veterans-affairs/va.gov-team/39712)
    - Feature Flag: check_in_experience_demographics_confirmation_enabled
