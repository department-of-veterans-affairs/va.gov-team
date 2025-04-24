# Data Dictionary: Firebase Events

Last updated: 4/24/2025

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
| `vama_appts_page_warning ` | [debugging event](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/2273) |
| `vama_apt_add_cal ` | Add appointment to calendar |
| `vama_apt_cancel_clicks ` | user cancels appointment |
| `vama_ttv_appt_details ` | not used in the app, but present in the data (legacy event) |
| `vama_appt_deep_link_fail` | triggers when a deep link from a push notification fails |

## Claims

| Event Name | Purpose |
| -------- | ------- |
| `vama_claim_call ` | |
| `vama_claim_cancel_1 ` | |
| `vama_claim_cancel_2 ` | |
| `vama_claim_count ` | |
| `vama_claim_details_exp ` | |
| `vama_claim_details_open ` | |
| `vama_claim_details_tab ` | |
| `vama_claim_details_ttv ` | |
| `vama_claim_disag ` | |
| `vama_claim_disag ` | |
| `vama_claim_eval_cancel ` | |
| `vama_claim_eval_check ` | |
| `vama_claim_eval_conf ` | |
| `vama_claim_eval_submit ` | |
| `vama_claim_file_request ` | User accesses the claim details screen at step 3 & includes a request for file from the VA (so the file upload button is present) |
| `vama_claim_file_view ` | |
| `vama_claim_review ` | |
| `vama_claim_status_tab ` | |
| `vama_claim_step_three ` | User accesses the claim detials screen when their claim is at step 3 in the process |
| `vama_claim_submit_ev ` | |
| `vama_claim_submit_tap ` | |
| `vama_claim_upload_compl ` | API call to upload returns a success for the file uploaded. **Note**: While the user can select more than one photo to upload, they are compiled into a single pdf for upload. |
| `vama_claim_upload_fail ` | API call to upload returns a fail |
| `vama_claim_upload_start ` | API call to upload is sent |
| `vama_claim_why_combine ` | |
| `vama_request_details ` | |
| `vama_evidence_conf ` | |
| `vama_evidence_cont_1 ` | |
| `vama_evidence_cont_2 ` | |
| `vama_evidence_cont_3 ` | |
| `vama_evidence_start ` | |
| `vama_evidence_type ` | |

## Letters

| Event Name | Purpose |
| -------- | ------- |
| `vama_ddl_button_shown ` | |
| `vama_ddl_landing_click ` | |
| `vama_ddl_letter_view ` | |
| `vama_ddl_status_click ` | |
| `vama_letter_download ` | User clicks to download letter |

## Global / Platform / Homescreen

### Authentication & Login

| Event Name | Purpose |
| -------- | ------- |
| `vama_login_closed ` | User closes out of login window |
| `vama_login_fail ` | Login is unsuccessful |
| `vama_login_start ` | User starts the login process |
| `vama_login_success ` | Login is successful |
| `vama_login_token_fetch ` | |
| `vama_login_token_get ` | |
| `vama_login_token_refresh ` | |
| `vama_login_token_store ` | |
| `vama_sso_cookie_received ` | |
| `vama_auth_completed ` | |
| `vama_user_call ` | |

### Availability Framework

| Event Name | Purpose |
| -------- | ------- |
| `vama_af_shown ` | |
| `vama_af_updated ` | |

### Components & UI

| Event Name | Purpose |
| -------- | ------- |
| `vama_accordion_click ` | |
| `vama_pagination ` | |
| `vama_notification_click ` | |
| `vama_segcontrol_click ` | |
| `vama_snackbar_null ` | |
| `vama_toggle ` | |
| `vama_modalpick_open ` | |
| `vama_modalpick_sel ` | |
| `vama_click ` | |
| `vama_link_click ` | |
| `vama_link_confirm ` | |
| `vama_find_location ` | |

### Encouraged Update

| Event Name | Purpose |
| -------- | ------- |
| `vama_eu_shown ` | Encouraged update nudge was shown to user |
| `vama_eu_skipped ` | User clicked to dismiss prompt to update app version |
| `vama_eu_updated ` | User clicked to update their app version |
| `vama_eu_updated_success ` | App version was successfully updates at user's click |

### Feedback Collection

| Event Name | Purpose |
| -------- | ------- |
| `vama_review_prompt ` | |
| `vama_givefb_close ` | |
| `vama_givefb_open ` | |
| `vama_feedback_ask ` | |
| `vama_feedback_closed ` | |
| `vama_feedback_submitted ` | |

### Homescreen

| Event Name | Purpose |
| -------- | ------- |
| `vama_hs_appts_count ` | |
| `vama_hs_appts_load_time ` | |
| `vama_hs_claims_count ` | |
| `vama_hs_claims_load_time ` | |
| `vama_hs_load_time ` | |
| `vama_hs_rx_count ` | |
| `vama_hs_rx_load_time ` | |
| `vama_hs_sm_count ` | |
| `vama_hs_sm_load_time ` | |

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
| `vama_react_query_retry ` | debugging event to see when react query executes a retrie |
| `vama_fail ` | Call center component failure event |
| `vama_fail_refresh ` | Call center component failure retry event |

### What's New

| Event Name | Purpose |
| -------- | ------- |
| `vama_webview_fail ` | |
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
| `vama_rx_filter_cancel ` | |
| `vama_rx_filter_sel ` | User makes selection for how to filter prescriptions |
| `vama_rx_help ` | Prescription refill help button clicks |
| `vama_rx_na ` | |
| `vama_rx_noauth ` | |
| `vama_rx_pendingtab ` | User presses the Pending tab in prescription history |
| `vama_rx_refill_cerner ` | |
| `vama_rx_refill_fail ` | User's refill request failed |
| `vama_rx_refill_retry ` | User clicked option to retry submission after failed attempt |
| `vama_rx_refill_success ` | User's refill request went through successfully |
| `vama_rx_request_confirm ` | |
| `vama_rx_request_start ` | User starts a refill request |
| `vama_rx_sort` | User clicks to open up sort options |
| `vama_rx_sort_sel` | User makes selection for how to sort prescriptions |
| `vama_rx_status` | |
| `vama_rx_trackdet` | |
| `vama_rx_trackdet_close ` | |
| `vama_rx_trackingtab ` | User clicks to see tracking information |
| `vama_cerner_alert ` | |
| `vama_cerner_alert_exp ` | |

## Profile

| Event Name | Purpose |
| -------- | ------- |
| `vama_pref_name_fail ` | failed attempts to update preferred name |
| `vama_perf_name_success ` | User successfully updates preferred name |
| `vama_prof_update_address ` | User submits new address information |
| `vama_prof_update_email ` | User submits new email information |
| `vama_prof_update_phone ` | User submits new phone information |
| `vama_gender_id_help ` | users select What to know before you decide to share your gender identity |

## Payments

| Event Name | Purpose |
| -------- | ------- |
| `vama_prof_update_dir_dep ` | User adds or edits direct deposit deposit account - Pre Nav Update |
| `vama_update_dir_dep ` | User adds or edits direct deposit deposit account - Post Nav Update |

## Secure Messaging

| Event Name | Purpose |
| -------- | ------- |
| `vama_select_all ` | |
| `vama_sm_attach ` | |
| `vama_sm_attach_outcome ` | |
| `vama_sm_change_category ` | |
| `vama_sm_folder_open ` | |
| `vama_sm_folders ` | |
| `vama_sm_move ` | |
| `vama_sm_move_outcome ` | |
| `vama_sm_nonurgent ` | |
| `vama_sm_notenrolled ` | |
| `vama_sm_open ` | |
| `vama_sm_save_draft ` | User saves a message in the portal |
| `vama_sm_send_message ` | User sends message through portal |
| `vama_sm_start ` | |

## Veteran Status

| Event Name | Purpose |
| -------- | ------- |
| `vama_vet_status_nStatus ` | Debugging event to return a specific veteran status code |
| `vama_vet_status_yStatus ` | Debugging event to return a specific veteran status code |
| `vama_vet_status_zStatus ` | Debugging event to return a specific veteran status code |
| `vama_vsc_error_shown ` | User sees an error related to the veteran status card |

*[Automatic event](https://support.google.com/analytics/answer/9234069) gathered by the system.
