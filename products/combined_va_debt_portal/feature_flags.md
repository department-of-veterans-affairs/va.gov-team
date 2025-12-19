# Feature Flags

This page references: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/benefits-portfolio/benefits-memorials-2/engineering/general/old-man-reference.md

## Purpose
To maintain a single, shared document that lists the feature flags used by the Combined Debt Portal (debts and copays), Digital Dispute, and Financial Status Report (FSR). It also helps track which flags are no longer in use so that related configuration and code can be cleaned up more easily over time.

## Combined Debt Portal

| Name                        | Notes | Client | API | In Use % | Cleaned? |  Deprecated |
| --------------------------- | ----- | :----: | :-: | :------: | :------: | :------: |
| combined_debt_portal_access |   Enables users to interact with combined debt portal experience    |   x  | x  |     100%     |          |         |
| debt_letters_show_letters_vbms |  Enables debt letter download from VBMS  |  x   | x  |       0   |          |         |
| cdp_payment_history_vba     |   Enables showing the overpayment and summary pages for the CDP Payment History    |   x   | x  |       0   |          |         |
| show_cdp_one_thing_per_page |    Enables the Payment History MVP features for development   |   x   | x  |      100%    |          |         |
| vha_show_payment_history    |   Enables the VHA Payment history (including copay resolution) feature for combined debt portal    |   x   | x  |     0     |          |         |
| show_one_vba_debt_letter    |    Controls the One VA Debt letter feature visibility |        |     |          |      x    |    x     |

## Financial Status Report

| Flag Name                                   | Notes | Client | API | In Use % | Cleaned? | Deprecated |
| ------------------------------------------- | ----- | :----: | :-: | :------: | :------: | :------: |
| show_financial_status_report                |       |   x   | x  |          |          |         |
| show_financial_status_report_wizard         |       |   x   | x  |          |          |         |
| show_financial_status_report_streamlined_waiver |   |   x   | x  |          |          |         |
| financial_status_report_review_page_navigation |  |   x   | x  |          |          |         |
| fsr_confirmation_email                      |       |   x   |     |          |          |         |
| fsr_5655_server_side_transform              |       |   x   | x  |          |          |         |
| financial_management_vbs_only               |       |        | x  |          |          |         |
| fsr_zero_silent_errors_in_progress_email    |       |        | x  |          |          |         |
| combined_financial_status_report            |       |        |     |          |          |         |
| financial_status_report_debts_api_module    |       |        |     |          |          |         |
| fsr_wizard                                  |       |        |     |          |          |         |
| financial_status_report_expenses_update     |       |        |     |          |          |         |

## Digital Dispute

| Flag                               | Notes | Client | API | In Use % | Cleaned? | Deprecated |
| ---------------------------------- | ----- | :----: | :-: | :------: | :------: | :------: |
| digital_dispute_email_notifications|       |        | x  |          |          |         |
| digital_dmc_dispute_service        |       |        | x  |          |          |         |
| dispute_debt                       |       |   x   | x  |          |          |         |
| digital_dispute_duplicate_prevention |     |        | x  |          |          |         |

## Copays

| Flag Name                 | Notes | Client | API | In Use % | Cleaned? | Deprecated |
| ------------------------- | ----- | :----: | :-: | :------: | :------: | :------: |
| medical_copays_six_mo_window |    |        | x  |          |          |         |
| medical_copays_zero_debt |       |        | x  |          |          |         |
| debts_copay_logging       |       |        |     |          |          |         |

