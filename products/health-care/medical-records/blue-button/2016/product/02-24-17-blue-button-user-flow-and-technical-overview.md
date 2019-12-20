This document describes the user flow and technical details regarding the various data processes that take place behind the scenes in the Blue button Health Records app.

#### Mockups
https://marvelapp.com/3gadi6d

#### User flow
1. User enters Blue Button app.
2. A call to the PHR refresh endpoint immediately kicks off
3. User selects fields that they would like in their health report
4. Upon submission, app pings the PHR refresh endpoint again to check whether the refresh has been completed.
5. a) If refresh is completed, a request is sent to the API to generate a report
5. b) If refresh is not completed, an interim screen is shown that states the update is in progress. If the user chooses to not wait for the update, a request is sent to the API to generate a report. 
5. c) If refresh is not completed, and the user chooses to wait for the update to finish, the app will poll the refresh endpoint to check the status of the update. Once the update is complete, a request is sent to the API to generate a report.
6. The user is taken to the download page where they can download the report generated in step five.

#### Interim "updating" screen
- Show the screen for every user, but make the verbiage vague enough to encompass both situations (PHR refresh already completed, and PHR refresh still in progress). For example, “Collecting your health records” or “Generating your report” is preferable to “Updating your records”.
- This screen will show for every user.
- Users can click a link to skip the screen if they would not like to wait for the refresh to complete.
- For users who already have a refreshed record, the screen will show for a brief instant and be automatically dismissed.
- We will poll to check that the records have been updated on the interim screen and go to the download page when the update is complete.

#### PHR Refresh
- This refresh happens at most one time every day
