# Andrew's cheat sheet 

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


--- 

## FSR streamlined waiver
Streamlined waiver skips portions of the form based on a few key factors. We need the number of dependents and the veteran's zip code to fetch the Geographic Means Threshold (GMT) data for that area. We then compare the values entered in the form to preset perentages of the GMT to determine eligibility. 

### Links
- [Mural with streamlined process overview, and use cases.](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1678973946956/6f3bb65fe1ccc2b9d3bc38cd24cd09e74d18d778)
- [Income Limits | HUD USER](https://www.huduser.gov/portal/datasets/il.html) source of truth for all things Geographic Means Threshold (GMT).
- We source GMT data from the income limits app on vets-website. [Here is the readme for more info.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/income-limits-app/data/README.md). The income limits endpoint needs three arguments to retrieve the GMT data: **number of dependents**, **zip code**, and the calendar year of the data. 
- [Here's an old ticket with some initial discovery](https://github.com/department-of-veterans-affairs/va.gov-team/issues/58212) in case you're looking for a _why_.


### Code

[geographicMeansThreshold.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/financial-status-report/actions/geographicMeansThreshold.js) fetches current GMT info from income limits endpoint, and sets the thresholds needed for streamlined waiver calculations. 
- `getGMT` - actaully hits income limits endpoint. This is called at the start of the EmploymentQuestion, since at this point in the form we have all of the necessary data to get our GMT info (dependent count , zip code, current calendar year*).
- `calculateThresholds` - uses GMT data to set the thresholds for asset (6.5%), uper income (150%), and discretionary income (1.25%). 

[streamlinedDepends.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/financial-status-report/utils/streamlinedDepends.js) contains a majority of the helpers for the streamlined waiver flow. 
- `isEligibleForStreamlined` - checks highest level eligibility in conjunction with `isStreamlinedShortForm`, and `isStreamlinedLongForm` to show/hide form pages with the `depends` property. 
  - Streamlined feature is enabled
  - Only copays have been selected
  - Selected copay balance does not exceed $5,000
- `isStreamlinedShortForm` - 
- `isStreamlinedLongForm` - 
- `checkIncomeGmt` - We use a vets-api endpoint to calculate total current income to compare against the GMT and uper income threshold. 

- More coming!

--- 

## Cypress
Do you have failing cypress tests locally in vets-website? Do they pass in CI? Are you adding `{ force: true }` just to try and get to the next page? 
Well I have the solution for you! Try running the following and then the tests again. 
```
rm -rf node_modules
yarn install
yarn build
```

--- 

## Documentation
- [Sensitive](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/teams/vsa/teams/benefits-memorials-2) -  Sensitive artifacts like staging review and other product specific stuff
  - Official type stuff
- [Public](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/benefits-portfolio/benefits-memorials-2) - Engineering notes and other misc product docs
  - memes and how-tos
