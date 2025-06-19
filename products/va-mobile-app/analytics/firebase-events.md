# Data Dictionary: Firebase Events

Last updated: 4/29/2025

## Allergies

| Event Name | Purpose |
| -------- | ------- |
| `vama_allergy_details` | view allergy details |
| `vama_allergy_list` | view allergies list |


## Appointments

| Event Name | Purpose |
| -------- | ------- |
| `vama_appt_cancel ` | User cancels appointment |
| `vama_appt_view_details ` | User clicks through the appointment details |
| `vama_apt_add_cal ` | Add appointment to calendar |
| `vama_apt_cancel_clicks ` | user cancels appointment |
| `vama_appt_deep_link_fail` | triggers when a deep link from a push notification fails |

## Claims

| Event Name | Purpose |
| -------- | ------- |
| `vama_claim_cancel_1 ` | callback event associated with vama_evidence_cancel_1 |
| `vama_claim_cancel_2 ` | callback event associated with vama_evidence_cancel_2 |
| `vama_claim_details_exp ` | user expands accordion during a claim phase change |
| `vama_claim_details_open ` | user views a claim details |
| `vama_claim_details_tab ` | segmented control tab change for claim details (status / files) |
| `vama_claim_details_ttv ` | tracking how much time a user spends on a claim detail screen |
| `vama_claim_disag ` | User selects "What to do if you disagree" from a claim detail screen |
| `vama_claim_eval_cancel ` | Logged when clicked back on the claim evaluation page. |
| `vama_claim_eval_check ` | Required checkbox for the user to confirm the have uploaded all evidence |
| `vama_claim_eval_conf ` | On claim submission, possibly duplicative with `vama_claim_eval_submit` |
| `vama_claim_eval_submit ` | Requesting a claim evaluation on submit of a claim |
| `vama_claim_file_request ` | User accesses the claim details screen at step 3 & includes a request for file from the VA (so the file upload button is present) |
| `vama_claim_file_view ` | User selects to view a file |
| `vama_claim_review ` | User selects "Review file requests" option |
| `vama_claim_status_tab ` | User toggles the control from details screen |
| `vama_claim_submit_ev ` | Logged when a user accesses a claim details page with the submit evidence button available. |
| `vama_claim_submit_tap ` | Navigte to submit evidence subtask screen |
| `vama_claim_upload_compl ` | API call to upload returns a success for the file uploaded. **Note**: While the user can select more than one photo to upload, they are compiled into a single pdf for upload. |
| `vama_claim_upload_start ` | API call to upload is sent |
| `vama_claim_why_combine ` | User triggers the "Find out why we sometimes combine claims" sheet |
| `vama_request_details ` | Viewing file details |
| `vama_evidence_conf ` | Required checkbox for user confirmation that evidence is related to the active claim |
| `vama_evidence_cont_1 ` | Open image library on the user's device|
| `vama_evidence_cont_2 ` | Information about a claim attachment |
| `vama_evidence_cont_3 ` | File / Photo upload confirmation |
| `vama_evidence_start ` | Select a file / take a photo button is selected |
| `vama_evidence_type ` | Logging evidence types photo and/or file |

## Letters

| Event Name | Purpose |
| -------- | ------- |
| `vama_ddl_landing_click ` | User selects "Claim Letters" from the Claims landing screen |
| `vama_ddl_letter_view ` | User views a letter |
| `vama_ddl_status_click ` | User selects "Get Claim Letters" from the claim details screen |
| `vama_letter_download ` | User clicks to download letter |

## Global / Platform / Homescreen

### Authentication & Login

| Event Name | Purpose |
| -------- | ------- |
| `vama_login_closed ` | User closes out of login window |
| `vama_login_fail ` | Login is unsuccessful |
| `vama_user_call ` | Failed login attempt with error message |
| `vama_login_start ` | User starts the login process |
| `vama_login_success ` | Login is successful |
| `vama_login_token_fetch ` | Debug event, error fetching the login token |
| `vama_login_token_refresh ` | Debug error attempting to initialize authentication with a refresh token |
| `vama_login_token_store ` | The success or failure of storing a refresh token |
| `vama_sso_cookie_received ` | Successful fetching of SSO cookies |

### Availability Framework

| Event Name | Purpose |
| -------- | ------- |
| `vama_af_shown ` | Availability framework alert is viewed by the user |
| `vama_af_updated ` | User asked to update the app and does after a critical bug fix release |

### Components & UI

| Event Name | Purpose |
| -------- | ------- |
| `vama_pagination ` | Using pagination next / previous actions |
| `vama_notification_click ` | Logging the registered app URL from a push notification |
| `vama_toggle ` | Toggle options on the notification screen after allowing device notifications |
| `vama_click ` | Generic event to capture clicks, text, and screen information |
| `vama_link_click ` | A link in the app was clicked, reports URL data |
| `vama_link_confirm ` | A link to leave the app was clicked (not a webview) |
| `vama_find_location ` | The find a location link was clicked |

### Encouraged Update

| Event Name | Purpose |
| -------- | ------- |
| `vama_eu_shown ` | Encouraged update nudge was shown to user |
| `vama_eu_skipped ` | User clicked to dismiss prompt to update app version |
| `vama_eu_updated ` | User clicked to update their app version |

### Feedback Collection

| Event Name | Purpose |
| -------- | ------- |
| `vama_review_prompt ` | Requests user to review the app |
| `vama_givefb_close ` | User is leaving the webview for in app recruitment |
| `vama_givefb_open ` | "Learn more about the Veteran Usability Project" link click & webview launch for loading feedback form |
| `vama_feedback_ask ` | Runs on cancel and OK for in app feedback |
| `vama_feedback_closed ` | User get the feedback screen, but closes without submitting |
| `vama_feedback_submitted ` | In app feedback submitted with screen, task, satisfaction |

### Homescreen

| Event Name | Purpose |
| -------- | ------- |
| `vama_hs_appts_load_time ` | Time from login to loading appointments on the homescreen |
| `vama_hs_claims_load_time ` | Time from login to loading active claims on the homescreen |
| `vama_hs_load_time ` | Time from login to all completed API calls on the homescreen |
| `vama_hs_rx_load_time ` | Time from login to loading refillable prescriptions on the homescreen |
| `vama_hs_sm_load_time ` | Time from login to loading unread messages on the homescreen |

### Push Notifications

| Event Name | Purpose |
| -------- | ------- |
| `notification_dismiss`* | when a user dismisses a notification sent by Firebase Cloud Messaging (FCM) (Android only) |
| `notification_forground`* | when a notification sent by FCM is received while the app is in the foreground |
| `notification_open`* | when a user opens a notification sent by FCM |
| `notification_receive`* | when a notification sent by FCM is received by a device when the app is in the background (Android only) |

### System

| Event Name | Purpose |
| -------- | ------- |
| `app_clear_data`* | when the user resets/clears the app data, removing all settings and sign-in data (Android only) |
| `app_exception`* | when the app crashes or throws an exception |
| `app_remove`* | when an application package is removed (uninstalled) from an Android device (Android only) |
| `app_update`* | when the app is updated to a new version and launched again |
| `dynamic_link_first_open`* | when a user opens the app for the first time via a dynamic link |
| `first_open`* | the first time a user launches an app after installing or re-installing it |
| `os_update`* | when the device operating system is updated to a new version. The previous operating system version id is passed as a parameter |
| `screen_view`* | when a screen transition occurs |
| `session_start`* | when a user engages the app or website |
| `vama_error` | generic event for API errors |
| `vama_error_json_resp ` | generic event for API errors with the response information |
| `vama_fail ` | Call center component failure event |
| `vama_fail_refresh ` | Call center component failure retry event |

### What's New

| Event Name | Purpose |
| -------- | ------- |
| `vama_webview_fail ` | generic error, webview failed to load |
| `vama_whatsnew_alert ` | What's new alert displayed to user |
| `vama_whatsnew_close ` | clicked Close button for a release |
| `vama_whatsnew_dont_show ` | clicked do not show me again |
| `vama_whatsnew_more ` | clicked the alert to access more information in the accordion expansion |

## Medical records

| Event Name | Purpose |
| -------- | ------- |
| `vama_vaccine_details ` | User clicks to see vaccine details |

## Prescriptions

| Event Name | Purpose |
| -------- | ------- |
| `vama_rx_filter ` | User clicks to open up filter options |
| `vama_rx_filter_cancel ` | cancel button was clicked inside the filter dialog box |
| `vama_rx_filter_sel ` | User makes selection for how to filter prescriptions |
| `vama_rx_help ` | Prescription refill help button clicks |
| `vama_rx_na ` | Prescription history, no prescriptions |
| `vama_rx_noauth ` | user is not authorized to view prescriptions |
| `vama_rx_refill_fail ` | User's refill request failed |
| `vama_rx_refill_retry ` | User clicked option to retry submission after failed attempt |
| `vama_rx_refill_success ` | User's refill request went through successfully |
| `vama_rx_request_confirm ` | confirm refill request |
| `vama_rx_request_start ` | User starts a refill request |
| `vama_rx_status` | view refill status |
| `vama_rx_trackdet` | user taps "get presciption tracking" option |
| `vama_rx_trackdet_close ` | user closes the presciption tracking dialog box |
| `vama_cerner_alert ` | App alert related to the cerner transition |
| `vama_cerner_alert_exp ` | Cerner alert expanded |

## Profile

| Event Name | Purpose |
| -------- | ------- |
| `vama_pref_name_fail ` | failed attempts to update preferred name |
| `vama_prof_update_address ` | User submits new address information |
| `vama_prof_update_email ` | User submits new email information |
| `vama_prof_update_phone ` | User submits new phone information |

## Payments

| Event Name | Purpose |
| -------- | ------- |
| `vama_update_dir_dep ` | User adds or edits direct deposit deposit account |

## Secure Messaging

| Event Name | Purpose |
| -------- | ------- |
| `vama_sm_attach ` | User selectes "Add files" |
| `vama_sm_attach_outcome ` | Successful file selection |
| `vama_sm_change_category ` | User changes message category |
| `vama_sm_folder_open ` | User opens a folder |
| `vama_sm_folders ` | User views folders list |
| `vama_sm_move ` | User initiates a message move |
| `vama_sm_move_outcome ` | User has moved a message |
| `vama_sm_nonurgent ` | User opens "Reply Help" panel |
| `vama_sm_notenrolled ` | Error message displayed if a user does not have access to secure messaging |
| `vama_sm_open ` | User opens a message |
| `vama_sm_save_draft ` | User saves a message in the portal |
| `vama_sm_send_message ` | User sends message through portal |
| `vama_sm_start ` | User starts a new message |

## Veteran Status

| Event Name | Purpose |
| -------- | ------- |
| `vama_vet_status_nStatus ` | Debugging event to return a specific veteran status code |
| `vama_vet_status_yStatus ` | Debugging event to return a specific veteran status code |
| `vama_vet_status_zStatus ` | Debugging event to return a specific veteran status code |
| `vama_vsc_error_shown ` | User sees an error related to the veteran status card |

*[Automatic event](https://support.google.com/analytics/answer/9234069) gathered by the system.
