# Feature Flags

This page references: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/benefits-portfolio/benefits-memorials-2/engineering/general/old-man-reference.md

## Purpose
To maintain a single, shared document that lists the feature flags used by the Combined Debt Portal (debts and copays), Digital Dispute, and Financial Status Report (FSR). It also helps track which flags are no longer in use so that related configuration and code can be cleaned up more easily over time.

## Combined Debt Portal

| Name                        | Notes                                               | Client | API | Staging % | Prod % | Deprecated | Removed |
| --------------------------- | --------------------------------------------------- | :----: | :-: | :-------: | :----: | :--------: | :-----: |
| combined_debt_portal_access | [details](#combined_debt_portal_access)             |   x    |  x  |           |  100%  |            |         |
| debt_letters_show_letters_vbms | [details](#debt_letters_show_letters_vbms)       |   x    |  x  |           |  0%    |            |         |
| cdp_payment_history_vba     | [details](#cdp_payment_history_vba)                 |   x    |  x  |           |  0%    |            |         |
| show_cdp_one_thing_per_page | [details](#show_cdp_one_thing_per_page)             |   x    |  x  |           |  100%  |            |         |
| vha_show_payment_history    | [details](#vha_show_payment_history)                |   x    |  x  |           |  0%    |            |         |
| show_one_vba_debt_letter    | [details](#show_one_vba_debt_letter)                |        |     |           |        |     x      |    x    |
| medical_copays_six_mo_window| [details](#medical_copays_six_mo_window)            |        |  x  |           |  100%  |            |         |
| medical_copays_zero_debt    | [details](#medical_copays_zero_debt)                |        |  x  |           |   0%   |            |         |
| debts_copay_logging         | [details](#debts_copay_logging)                     |        |     |           |  50%   |            |         |


### Combined Debt Portal Notes

#### combined_debt_portal_access
- Enables users to interact with the combined debt portal experience

#### debt_letters_show_letters_vbms
- Enables debt letter download from VBMS
- **Overpayment** debt letter history pdf download - disabled bc of VBA slipping incorrect info into pdfs

#### cdp_payment_history_vba
- Enables showing the overpayment and summary pages for the CDP Payment History
- **Overpayment** history - Basically "Transaction history" on the debt details page - disabled due to phantom payments, probably ready to get flipped back on (double check with PO & **OTPP interaction**)

#### show_cdp_one_thing_per_page
- Enables the Payment History MVP features for development

#### vha_show_payment_history
- Enables the VHA Payment history (including copay resolution) feature for combined debt portal
- **Copay history** - LIGHTHOUSE data 'live' FHIR data

#### show_one_vba_debt_letter
- Controls the One VA Debt letter feature visibility

#### medical_copays_six_mo_window
- This will filter to only show medical copays within the last 6 months

#### medical_copays_zero_debt
- Enables zero debt balances feature on the medical copays application

#### debts_copay_logging
- Logs copay request data

---

## Financial Status Report

| Flag Name                                   | Notes                                                      | Client | API | Staging % | Prod % | Deprecated | Removed |
| ------------------------------------------- | ---------------------------------------------------------- | :----: | :-: | :-------: | :----: | :--------: | :-----: |
| show_financial_status_report                | [details](#show_financial_status_report)                   |   x    |  x  |           |  100%  |            |         |
| show_financial_status_report_wizard         | [details](#show_financial_status_report_wizard)            |   x    |  x  |           |  100%  |            |         |
| show_financial_status_report_streamlined_waiver | [details](#show_financial_status_report_streamlined_waiver) | x  |  x  |           |  100%  |            |         |
| financial_status_report_review_page_navigation | [details](#financial_status_report_review_page_navigation) | x  |  x  |           |  100%  |            |         |
| fsr_confirmation_email                      | [details](#fsr_confirmation_email)                         |   x    |     |           |        |            |         |
| fsr_5655_server_side_transform              | [details](#fsr_5655_server_side_transform)                 |   x    |  x  |           |  100%  |            |         |
| financial_management_vbs_only               | [details](#financial_management_vbs_only)                  |        |  x  |           |  100%  |            |         |
| fsr_zero_silent_errors_in_progress_email    | [details](#fsr_zero_silent_errors_in_progress_email)       |        |  x  |           |   25%  |            |         |
| combined_financial_status_report            | [details](#combined_financial_status_report)               |        |     |           |  100%  |            |         |
| financial_status_report_debts_api_module    | [details](#financial_status_report_debts_api_module)       |        |     |           |  100%  |            |         |
| fsr_wizard                                  | [details](#fsr_wizard)                                     |        |     |           |  100%  |            |         |
| financial_status_report_expenses_update     | [details](#financial_status_report_expenses_update)        |        |     |           |  100%  |            |         |
| debts_silent_failure_mailer                 | [details](#debts_silent_failure_mailer)                    |        |     |           |   25%  |            |         |


### Financial Status Report Notes

#### show_financial_status_report
- Enables VA Form 5655 (Financial Status Report) _(ie. controls the FSR app visibility)_

#### show_financial_status_report_wizard
- Enables the Wizard for VA Form 5655 (Financial Status Report)
- Ready to be sunset after wizard is removed

#### show_financial_status_report_streamlined_waiver
- Enables the Streamlined Waiver for VA Form 5655 (Financial Status Report)
- Controls streamlined waiver functionality on the FSR - disabling just sends all users down the full FSR

#### financial_status_report_review_page_navigation
- Enables new review page navigation for users completing the Financial Status Report (FSR) form
- Controls the custom edit functionality on the final review page. Custom buttons send users back into the chapter to edit, and navigates them back to the final review at the end of the edited chapter

#### fsr_confirmation_email
- Doesn't exist in BE toggle definitions. Only FE reference is [in a helper](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/financial-status-report/utils/helpers.js#L24-L25) and not referenced elsewhere

#### fsr_5655_server_side_transform
- Update to use BE for business transform logic for Financial Status Report (FSR - 5655) form
- ```transform.js``` is basically skipped on the FSR and the formData object is sent as is. Has been live for a while now, so we can probably set up deprication soon. Coordinate with BE so they can depricate their old suff too

#### financial_management_vbs_only
- Enables the Financial Management app to only use the VBS API

#### fsr_zero_silent_errors_in_progress_email
- Enables sending an email to the veteran when FSR form is in progress

#### combined_financial_status_report
- Enables users to submit FSR forms for VHA and VBA debts

#### financial_status_report_debts_api_module
- Points to debts-api module routes

#### fsr_wizard
- Used to toggle the FSR wizard
- Ready to be sunset after wizard is removed

#### financial_status_report_expenses_update
- Update expense lists in the Financial Status Report (FSR - 5655) form
- Ready to be sunset

#### debts_silent_failure_mailer
- Enables silent failure mailer for the 5655

---

## Digital Dispute

| Flag                               | Notes                                           | Client | API | Staging % | Prod % | Deprecated | Removed |
| ---------------------------------- | ----------------------------------------------- | :----: | :-: | :-------: | :----: | :--------: | :-----: |
| digital_dispute_email_notifications| [details](#digital_dispute_email_notifications) |        |  x  |           |  100%  |            |         |
| digital_dmc_dispute_service        | [details](#digital_dmc_dispute_service)         |        |  x  |           |  100%  |            |         |
| dispute_debt                       | [details](#dispute_debt)                        |   x    |  x  |           |  100%  |            |         |
| digital_dispute_duplicate_prevention | [details](#digital_dispute_duplicate_prevention) |      |  x  |           |   0%   |            |         |


### Digital Dispute Notes

#### digital_dispute_email_notifications
- Enables email notifications for digital dispute submissions

#### digital_dmc_dispute_service
- Enables the Digital DMC Dispute Service

#### dispute_debt
- Controls the dispute-debt app visibility

#### digital_dispute_duplicate_prevention
- Enables duplicate prevention for digital dispute submissions
