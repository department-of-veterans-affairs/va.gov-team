# Financial Management Team App Overview and Onboarding

**Date/Time:** September 18, 2025, 10:01 AM PDT

## Overall Summary

A detailed walkthrough of the financial management team's debt-related applications, focusing on the financial status report (FSR), combined debt portal, and dispute debt app. This document covers environment setup, app structures, testing strategies, feature flags, and documentation resources to onboard the team effectively. This also included an overview of which apps the team is responsible for managing.

## Which Apps Are the Team Responsible For?

* **Combined Debt Portal (CDP):** Displays outstanding debts and medical co-pays. Serves as an entry point into the FSR.
* **Financial Status Report (FSR):** A complex app with multiple user flows and custom components. Manages income, expenses, and assets to determine eligibility.
* **Dispute Debt:** A smaller, simpler app for contesting debts. Generates PDFs for submission to the Debt Management Center.

## Documentation and Resources

* **Frontend Engineering Docs:** [VA.gov Frontend Docs](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/benefits-portfolio/benefits-memorials-2/engineering/front-end)
* **Applications:**

  * [Combined Debt Portal](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/combined-debt-portal)
  * [Financial Status Report](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/financial-status-report)
  * [Dispute Debt](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/dispute-debt/)
* **Mock Data:** `src/applications/financial-status-report/tests/e2e/fixtures/data`
* **Copay and Streamline Waiver:** [development.js mocks](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/financial-status-report/mocks/development.js)
* **Testing Commands:**

  ```bash
  yarn test:unit --app-folder combined-debt-portal --coverage --coverage-html --log-level debug
  yarn test:unit --app-folder dispute-debt --coverage --coverage-html --log-level debug
  yarn test:unit --app-folder financial-status-report --coverage --coverage-html --log-level debug
  ```


* **Figma Resources:**

  * [Figma Recents & Sharing](https://www.figma.com/files/1499394822283304153/recents-and-sharing?fuid=1037909460846373413)
  * [FSR Streamlined Waiver Designs](https://www.figma.com/design/ea8baIDr09ncgr1P4Rfh8i/Financial-Status-Report--VA5655-----including-Streamlined-Waiver-?node-id=0-1037&p=f&t=vaaZDSBBSbn8Um2o-0)
* **Localhost Testing URLs:**

  * [Manage VA Debt Summary](http://localhost:3001/manage-va-debt/summary/)
  * [Request Debt Help Form (FSR)](http://localhost:3001/manage-va-debt/request-debt-help-form-5655/introduction)

## Key Points

* The team manages three main apps: combined debt portal, financial status report, and dispute debt, each serving different debt-related functions with varying complexity
* The FSR app is complex with custom components and multiple user flows including streamlined waiver short and long paths, supported by mock data for testing
* Feature flags are critical for testing, with key flags like "medical co-pay six-month window" controlling data visibility; mock data usage is recommended for consistent testing
* The dispute debt app is simpler, generating PDFs for submissions, and is easier to manage compared to other apps
* Documentation includes front-end and back-end resources, aliases for running environments, and detailed mappings for debt and diary codes to assist development and maintenance

## Tips

* Utilize Joe's expertise for CSS fine-tuning and design system alignment during front-end development
* Monitor and update the streamlined waiver income thresholds annually based on HUD data changes to ensure accurate veteran eligibility
* Be mindful of feature flags when testing, as visibility of debts and co-pays can depend on these settings
* Environment setup can cause issues (especially with Docker); native setup tends to be more stable

## Feature Flags

* show_cdp_one_thing_per_page 0
* debt_letters_show_letters_vbms 0
* vha_show_payment_history 0  
* cdp_payment_history_vba 0 
* show_one_va_debt_letter 1
* dispute_debt 1
* combined_debt_portal_access 1
* show_financial_status_report 1
* show_financial_status_report_streamlined_waiver 1
* financial_status_report_review_page_navigation 1
* fsr_confirmation_email ? (doesn't exist in BE?)
* fsr_5655_server_side_transform 1
* financial_status_report_expenses_update 1

## Running the Apps 

`yarn watch --env entry=auth,login-page,verify,profile,virtual-agent,request-debt-help-form-5655,combined-debt-portal,mock-form,mock-form-patterns-v3,mock-form-patterns,dispute-debt,claims-status,terms-of-use`

## Income Limits Database

Updating local DB with income limit tables for testing streamlined waiver locally:
In `vets-api` directory make up to get container running
docker ps in another terminal to see running processes and keep note of container name for `vets-api_gibberish`
`docker exec -it <container-name> bash`
You’ll now have a bash terminal of the docker container
(not necessary for this, but helpful in some cases) You can run tail -f log/development.log to see verbose API docker logs
Open rails console with `rails console`
Run import jobs for each file in `app/workers/income_limits`
```IncomeLimits::GmtThresholdsImport.new.perform (takes a while to run)
IncomeLimits::StdZipcodeImport.new.perform (takes a while to run)
IncomeLimits::StdCountyImport.new.perform
IncomeLimits::StdIncomeThresholdImport.new.perform
IncomeLimits::StdStateImport.new.perform
```
