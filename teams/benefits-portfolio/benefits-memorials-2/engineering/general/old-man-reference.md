# That one guys notes 


## Feature flags
Current state of feature flags (as of ~**08/26/25**)
| Feature toggles for Financial Management        | Production value  | Notes                  |
|------------------------------------------------:|:------------------|------------------------|
| show_cdp_one_thing_per_page                     | 0                 | Currently in development |
| debt_letters_show_letters_vbms                  | 0                 | **Overpayment** debt letter history pdf download - disabled bc of VBA slipping incorrect info into pdfs |
| vha_show_payment_history                        | 0                 | **Copay** history - LIGHTHOUSE data 'live' FHIR data |
| cdp_payment_history_vba                         | 0                 | **Overpayment** history - Basically "Transaction history" on the debt details page - disabled due to phantom payments, probably ready to get flipped back on (double check with PO & **OTPP interaction**) |
| show_one_va_debt_letter                         | 1                 | Controls the One VA Debt letter feature visibility |
| dispute_debt                                    | 1                 | Controls the dispute-debt app visibility |
| combined_debt_portal_access                     | 1                 | Controls the CDP app visibility |
| show_financial_status_report                    | 1                 | Controls the FSR app visibility |
| show_financial_status_report_wizard             | 1                 | Ready to be sunset after wizard is removed |
| fsr_wizard                                      | 1                 | Ready to be sunset after wizard is removed |
| show_financial_status_report_streamlined_waiver | 1                 | Controls streamlined waiver functionality on the FSR - disabling just sends all users down the full FSR |
| financial_status_report_review_page_navigation  | 1                 | Controls the custom edit functionality on the final review page. Custom buttons send users back into the chapter to edit, and navigates them back to the final review at the end of the edited chapter |
| fsr_confirmation_email                          | -                 | Doesn't exist in BE toggle definitions. Only FE reference is [in a helper](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/financial-status-report/utils/helpers.js#L24-L25) and not referenced elsewhere |
| fsr_5655_server_side_transform                  | 1                 | `transform.js` is basically skipped on the FSR and the formData object is sent as is. Has been live for a while now, so we can probably set up deprication soon. Coordinate with BE so they can depricate their old suff too|
| financial_status_report_expenses_update         | 1                 | Ready to be sunset |


## Misc 
- [Sensitive](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/teams/vsa/teams/benefits-memorials-2) -  Sensitive artifacts like staging review and other product specific stuff
  - Official type stuff
- [Public](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/benefits-portfolio/benefits-memorials-2) - Engineering notes and other misc product docs
  - memes and how-tos
