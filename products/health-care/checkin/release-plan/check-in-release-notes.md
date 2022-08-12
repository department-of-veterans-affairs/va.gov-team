# CHECK-IN AND PRE-CHECK-IN 
# RELEASE NOTES

## Product Summary
VA is replacing the proprietary VETLink appointment check-in kiosks with an in-house developed mobile friendly experience that allows Veterans to complete pre-appointment tasks from their home and check in for their health appointments. This system leverages the trusted VA.gov web experience to reduce costs and quickly surface veterans’ status to VA staff, while reducing required interactions and time spent. The check-in experience team does extensive 
research with veterans in order to focus on outcomes that reduce stress and provide intuitive interfaces to allow Veterans to complete check-in tasks at their own convenience. The check-in experience apps are currently being piloted in the St Louis area and will be launched nation-wide over the course of the summer.

When a Veteran arrives for their appointment, they can check-in through a text message on their personal mobile device. The Veteran receives a link back that they can use to complete check-in through a few simple prompts on a website on their phone. They don’t have to wait in line at a kiosk or to talk to a staff member- they can start checking in as soon as they’re ready. The new check-in experience integrates with existing VA systems to let the staff know that the Veteran has checked in. We also have a pre-check-in process that prompts the Veteran to complete some check-in steps before the day of their appointment in the comfort of their own home. This includes things such as verifying that their contact information and emergency contact are up to date, and health questionnaires are planned for future development. 

## Product Guides 
#### [The latest product guides](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/checkin/product/product-guides)

## Releases

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
