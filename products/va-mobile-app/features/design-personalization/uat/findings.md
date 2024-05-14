# VA Mobile App - Personalized Home Screen: UAT Summary of Findings 
May 14, 2024

## Approach
- UAT interviews were conducted May 9-13, 2024
- Sessions were conducted remotely, via Zoom, on their participants' mobile device.
- We spoke to 5 participants (1 Android, 4 iOS), all were internal VA contractors, employees or family members we recruited using the list of volunteers or #veterans Ad Hoc channel.
- UX/UR, A11y specialist, and ENG lead attended each session.
- We did not record the sessions.

During the session, participants shared their screen via Zoom, installed a pre-release version of the VA mobile app with the personalized home screen on their personal device using Testflight, and logged in with their VA credentials to the production server. Veterans then participated in a moderated, guided activity covering the following tasks to ensure everything wass working as expected and data was accurate:
- Task 1: Review Home Screen for accuracy & completeness
   - Count the number of seconds it took for the screen to finish loading
- Task 2: Navigate to and from the Home Screen using Activity modules
- Task 3: (if applicable) Click on the Veteran Status Card
- Task 4: Navigate to the corresponding Category Screen for each visible home screen module, review category screen for accuracy

After the activity, we helped participants uninstall the pre-release version of the app as well as Testflight.


## Results
- 96% of [tasks](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/design-personalization/uat/test-plan-protocol.md) passed
    - Only one participant for one task didn't pass (Veteran Status did not appear when it should have), and it's due to a data issue with disability rating (not the app) - **ENG is filing a bug for this**
- Average loadtime
  - Folks who had modules in their Activity section and who had a disability rating waited an average of 2.7 seconds for the whole homescreen to load (1-4 seconds, on a mix of wifi & cellular—but no "one bar" situations)
  - One participant who had minimum data (did not have a disability rating, was not enrolled in VA healthcare, did not have an open claim, and had no modules in their Activity section) waited for 10-14 seconds for the "About you" section to full load.  **ENG is filing a bug for this.**
- We caught a few little readability/contrast things that were not blockers - **UX is exploring enhancements**.

### Results
We feel confident moving forward to evaluative testing with Veterans using the build as-is.

## Appendix
- [VA Mobile App - Personalized Home Screen: UAT Plan & Protocol](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/design-personalization/uat/test-plan-protocol.md)  
- [Analysis spreadsheet](https://docs.google.com/spreadsheets/d/1HSL0SJRwomx4dwDioufKgfQbYSpkYVZvO4F379H5GQw/edit#gid=831278958)

