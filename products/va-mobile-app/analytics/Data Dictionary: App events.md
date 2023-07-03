This document will house a description of all of the mobile app's custom event tracking in addition to the [automatically collected G4A events](https://support.google.com/analytics/answer/9234069).

| Event name | Description|Feature|
|-----------|------------|--------|
|vama_appts_page_warning|???|Appointments|
|vama_covid_links|???|???|
|vama_exchange_failed|???|???|
|vama_ttv_appt_details|(Verify start and end actions)|Appointments|
|vama_ttv_cap_details|(Verify start and end actions)|???|
|vama_claim_upload_start|API call to upload is sent|Claims|
|vama_claim_upload_fail|API call to upload returns a fail|Claims|
|vama_claim_upload_compl|API call to upload returns a success for the file uploaded.<br>Note: While the user can select more than one photo to upload, they are compiled into a single pdf for upload.|Claims|
|vama_eu_updated_success|App version was successfully updates at user's click?|Encouraged Update|
|vama_eu_shown|Encouraged update nudge was shown to user?|Encouraged Update|
|vama_auth_completed|How is this different from vama_login_success?|Login|
|vama_login_success|Login is successful|Login|
|vama_login_fail|Login is unsuccessful|Login|
|vama_claim_file_request|User accesses the claim details screen at step 3 & includes a request for file from the VA (so the file upload button is present)|Claims|
|vama_claim_step_three|User accesses the claim detials screen when their claim is at step 3 in the process|Claims|
|vama_update_dir_dep|User adds or edits direct deposit deposit account - Post Nav Update|Payments|
|vama_prof_update_dir_dep|User adds or edits direct deposit deposit account - Pre Nav Update|Payments|
|vama_appt_cancel|User cancels appointment |Appointments|
|vama_rx_refill_retry|User clicked option to retry submission after failed attempt|Prescriptions|
|vama_eu_skipped|User clicked to dismiss prompt to update app version?|Encouraged Update|
|vama_eu_updated|User clicked to update their app version?|Encouraged Update|
|vama_appt_view_details|User clicks through the appointment details|Appointments|
|vama_letter_download|User clicks to download letter|Letters|
|vama_rx_filter|User clicks to open up filter options|Prescriptions|
|vama_rx_sort|User clicks to open up sort options|Prescriptions|
|vama_rx_trackingtab|User clicks to see tracking information|Prescriptions|
|vama_vaccine_details|User clicks to see vaccine details|Medical Records|
|vama_login_closed|User closes out of login window?|Login|
|vama_rx_filter_sel|User makes selection for how to filter prescriptions|Prescriptions|
|vama_rx_sort_sel|User makes selection for how to sort prescriptions|Prescriptions|
|vama_rx_pendingtab|User presses the Pending tab in prescription history|Prescriptions|
|vama_sm_save_draft|User saves a message in the portal|Messages|
|vama_sm_send_message|User sends message through portal|Messages|
|vama_login_start|User starts the login process|Login|
|vama_prof_update_address|User submits new address information|Profile|
|vama_prof_update_email|User submits new email information|Profile|
|vama_prof_update_phone|User submits new phone information|Profile|
|vama_rx_refill_fail|User's refill request failed|Prescriptions|
|vama_rx_refill_success|User's refill request went through successfully|Prescriptions|
|vama_ddl_button_shown|*description to be added*|Letters|
|vama_ddl_landing_click|*description to be added*|Letters|
|vama_ddl_letter_view|*description to be added*|Letters|
|vama_ddl_status_click|*description to be added*|Letters|
|vama_gender_id_fail|failed attempts to update Gender Identity|Profile|
|vama_gender_id_help|users select What to know before you decide to share your gender identity|Profile|
|vama_gender_id_success|successful Gender Identity updates made|Profile|
|vama_pref_name_fail|failed attempts to update preferred name|Profile|
|vama_pref_name_success|successful preferred name updates made|Profile|
|vama_prof_update_gender|*description to be added*|Profile|
|vama_whatsnew_alert|What's new alert displayed to user|Whats New In App|
|vama_whatsnew_close|clicked Close button for a release|Whats New In App|
|vama_whatsnew_dont_show|clicked do not show me again|Whats New In App|
|vama_whatsnew_more|clicked the alert to access more information in the accordion expansion|Whats New In App|
