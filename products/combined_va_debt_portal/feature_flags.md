# Feature Flags

This page references: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/benefits-portfolio/benefits-memorials-2/engineering/general/old-man-reference.md

## Purpose
To maintain a single, shared document that lists the feature flags used by the Combined Debt Portal (debts and copays), Digital Dispute, and Financial Status Report (FSR). It also helps track which flags are no longer in use so that related configuration and code can be cleaned up more easily over time.

## Combined Debt Portal

| Name                        | Notes | Client | API | Staging % | Prod % | Deprecated | Removed |
| --------------------------- | ----- | :----: | :-: | :------: | :------: | :------: | :------: |
| combined_debt_portal_access |   Enables users to interact with combined debt portal experience    |   x  | x  |     100%     |          |         |
| debt_letters_show_letters_vbms |  Enables debt letter download from VBMS - Overpayment debt letter history pdf download - disabled bc of VBA slipping incorrect info into pdfs  |  x   | x  |       0   |          |         |         |
| cdp_payment_history_vba     |   Enables showing the overpayment and summary pages for the CDP Payment History - Overpayment history - Basically "Transaction history" on the debt details page - disabled due to phantom payments, probably ready to get flipped back on (double check with PO & OTPP interaction)    |   x   | x  |       0   |          |         |         |
| show_cdp_one_thing_per_page |    Enables the Payment History MVP features for development   |   x   | x  |      100%    |          |         |         |
| vha_show_payment_history    |   Enables the VHA Payment history (including copay resolution) feature for combined debt portal - Copay history - LIGHTHOUSE data 'live' FHIR data    |   x   | x  |     0     |          |         |         |
| show_one_vba_debt_letter    |    Controls the One VA Debt letter feature visibility |        |     |          |      x    |         |    x     |

## Financial Status Report

| Flag Name                                   | Notes | Client | API | Staging % | Prod % | Deprecated | Removed |
| ------------------------------------------- | ----- | :----: | :-: | :------: | :------: |:------: | :------: |
| show_financial_status_report                |   Enables VA Form 5655 (Financial Status Report) - Controls the FSR app visibility    |   x   | x  |          |    100%      |         | |
| show_financial_status_report_wizard         |   Enables the Wizard for VA Form 5655 (Financial Status Report) - Ready to be sunset after wizard is removed    |   x   | x  |          |       100%   |         | |
| show_financial_status_report_streamlined_waiver |  Enables the Streamlined Waiver for VA Form 5655 (Financial Status Report) - Controls streamlined waiver functionality on the FSR - disabling just sends all users down the full FSR |   x   | x  |          |    100%      |         |      |
| financial_status_report_review_page_navigation | Enables new review page navigation for users completing the Financial Status Report (FSR) form. - Controls the custom edit functionality on the final review page. Custom buttons send users back into the chapter to edit, and navigates them back to the final review at the end of the edited chapter |   x   | x  |          |    100%      |         |      |
| fsr_confirmation_email                      |    Doesn't exist in BE toggle definitions. Only FE reference is in a helper and not referenced elsewhere   |   x   |     |          |          |         |      |
| fsr_5655_server_side_transform              |    Update to use BE for business transform logic for Financial Status Report (FSR - 5655) form - transform.js is basically skipped on the FSR and the formData object is sent as is. Has been live for a while now, so we can probably set up deprication soon. Coordinate with BE so they can depricate their old suff too   |   x   | x  |          |     100%     |         |      |
| financial_management_vbs_only               |   Enables the Financial Management app to only use the VBS API    |        | x  |          |   100%      |         |      |
| fsr_zero_silent_errors_in_progress_email    |   Enables sending an email to the veteran when FSR form is in progress    |        | x  |          |   25%     |         |      |
| combined_financial_status_report            | Enables users to submit FSR forms for VHA and VBA debts     |        |     |          |    100%      |         |      |
| financial_status_report_debts_api_module    |   Points to debts-api module routes    |        |     |          |      100%    |         |      |
| fsr_wizard                                  |   Used to toggle the FSR wizard - Ready to be sunset after wizard is removed    |        |     |          |     100%     |         |      |
| financial_status_report_expenses_update     |   Update expense lists in the Financial Status Report (FSR - 5655) form - Ready to be sunset    |        |     |          |     100%     |         |      |

## Digital Dispute

| Flag                               | Notes | Client | API | In Use % | Cleaned? | Deprecated |
| ---------------------------------- | ----- | :----: | :-: | :------: | :------: | :------: |
| digital_dispute_email_notifications|       |        | x  |          |          |         |
| digital_dmc_dispute_service        |       |        | x  |          |          |         |
| dispute_debt                       | Controls the dispute-debt app visibility      |   x   | x  |          |          |         |
| digital_dispute_duplicate_prevention |     |        | x  |          |          |         |

## Copays

| Flag Name                 | Notes | Client | API | In Use % | Cleaned? | Deprecated |
| ------------------------- | ----- | :----: | :-: | :------: | :------: | :------: |
| medical_copays_six_mo_window |    |        | x  |          |          |         |
| medical_copays_zero_debt |       |        | x  |          |          |         |
| debts_copay_logging       |       |        |     |          |          |         |

