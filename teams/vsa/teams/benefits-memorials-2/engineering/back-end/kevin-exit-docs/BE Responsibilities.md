The Backend really only has a couple of features it needs to maintain. This document exists to outline those features and point to the relevant code.

## The Financial Status Report
See the [What is the Financial Status Report?](What is the Financial Status Report?.md) docs for details.
#### Related Files
- `modules/debts_api/app/controllers/debts_api/v0/financial_status_reports_controller.rb`
- `modules/debts_api/lib/debts_api/v0/financial_status_report_service.rb`
- `modules/debts_api/lib/debts_api/v0/fsr_form_builder.rb`
- `modules/debts_api/lib/debts_api/v0/fsr_form.rb`
- `modules/debts_api/lib/debts_api/v0/user_fsr_form.rb`
- `modules/debts_api/lib/debts_api/v0/vba_fsr_form.rb`
- `modules/debts_api/lib/debts_api/v0/vha_fsr_form.rb`
##### specs
- `modules/debts_api/spec/request/debts_api/v0/financial_status_reports_controller_spec.rb`
- `modules/debts_api/spec/lib/debt_api/v0/financial_status_report_service_spec.rb`
- `modules/debts_api/spec/models/debt_api/v0/form5655_submission_spec.rb`
- `modules/debts_api/spec/lib/debt_api/v0/fsr_form_builder_spec.rb`
- `modules/debts_api/spec/lib/debt_api/v0/vba_fsr_form_spec.rb`
- `modules/debts_api/spec/lib/debt_api/v0/vha_fsr_form_spec.rb`

## Copay Notifications
VBS (one of our customers, related in some way to VHA) consumes [an endpoint](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/medical_copays/sendNewStatementsNotifications) we manage, `/v0/medical_copays/send_statement_notifications`.  The endpoint takes a base64 file containing a JSON array of statement data. Basically, each of these array elements corresponds to a copay statement that has been mailed out to a veteran. Our job is to run through each of these statements and email the veteran via VA Notify (VA emailing service) telling them they have a statement in the mail. If you want to know more about VA Notify reach out at their VA slack channel # va-notify-public. 
From Scott:
>*"VBS API reads statements based on CCPC schedule for when stations upload patient statements. VBS then codifies these into files broken up by 10k statements at a time and POST to our (VODA) endpoint for us to parse. We then extract the identifier from the statement and get the patient’s MPI profile to get their ICN. We pass this ICN to VA Notify to send an email."*
#### Related Files
- `app/controllers/v0/medical_copays_controller.rb`
- `app/services/medical_copays/vbs/service.rb`
- `app/sidekiq/copay_notifications/parse_new_statements_job.rb`
##### specs
- `spec/sidekiq/copay_notifications/parse_new_statements_job_spec.rb`
- `spec/controllers/v0/medical_copays_controller_spec.rb`
## Datadog
The BE team is responsible for maintaining the [Debt Resolution Dashboard](https://vagov.ddog-gov.com/dashboard/shm-nr4-75f/debt-resolution-vets-api?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1714071874450&to_ts=1714158274450&live=true), any [debt team monitors](https://vagov.ddog-gov.com/monitors/manage?q=tag%3A%22service%3Adebt-resolution%22&order=desc) as well as monitoring the # debt-alerts VA slack channel for alerts corresponding to those monitors getting triggered.
## Monthly Metrics Report
We, via our Project Manager (Heather Rienks at time of writing), need to provide stakeholders with a monthly report of our metrics. This boils down to taking screen grabs of the following dashboard widgets:
- [VBS Submission Success](https://vagov.ddog-gov.com/dashboard/shm-nr4-75f/debt-resolution-vets-api?fromUser=false&refresh_mode=paused&view=spans&from_ts=1714072407961&to_ts=1714158807961&live=false&tile_focus=5996076007751838)
- [VBS Submission Failure](https://vagov.ddog-gov.com/dashboard/shm-nr4-75f/debt-resolution-vets-api?fromUser=false&refresh_mode=paused&view=spans&from_ts=1714072407961&to_ts=1714158807961&live=false&tile_focus=2917387189261178)
- [VBS Submission Success Rate](https://vagov.ddog-gov.com/dashboard/shm-nr4-75f/debt-resolution-vets-api?fromUser=false&refresh_mode=paused&view=spans&from_ts=1714072407961&to_ts=1714158807961&live=false&tile_focus=8750649452375376)
- [VHA Sharepoint Submission Success](https://vagov.ddog-gov.com/dashboard/shm-nr4-75f/debt-resolution-vets-api?fromUser=false&refresh_mode=paused&view=spans&from_ts=1714072407961&to_ts=1714158807961&live=false&tile_focus=2451651426386062)
- [VHA Sharepoint Submission Failure](https://vagov.ddog-gov.com/dashboard/shm-nr4-75f/debt-resolution-vets-api?fromUser=false&refresh_mode=paused&view=spans&from_ts=1714072407961&to_ts=1714158807961&live=false&tile_focus=8025955843558582)
- [VHA Sharepoint Submission Success Rate](https://vagov.ddog-gov.com/dashboard/shm-nr4-75f/debt-resolution-vets-api?fromUser=false&refresh_mode=paused&view=spans&from_ts=1714072407961&to_ts=1714158807961&live=false&tile_focus=364445567057332)
- [VHA Sharepoint Request Success](https://vagov.ddog-gov.com/dashboard/shm-nr4-75f/debt-resolution-vets-api?fromUser=false&refresh_mode=paused&view=spans&from_ts=1714072407961&to_ts=1714158807961&live=false&tile_focus=1496409506068376)
- [VHA Sharepoint Request Failure](https://vagov.ddog-gov.com/dashboard/shm-nr4-75f/debt-resolution-vets-api?fromUser=false&refresh_mode=paused&view=spans&from_ts=1714072407961&to_ts=1714158807961&live=false&tile_focus=4963006620529312)
- [VHA Sharepoint Request Success Rate](https://vagov.ddog-gov.com/dashboard/shm-nr4-75f/debt-resolution-vets-api?fromUser=false&refresh_mode=paused&view=spans&from_ts=1714072407961&to_ts=1714158807961&live=false&tile_focus=3203499287883862)
- [Financial Status Report Controller Latency](https://vagov.ddog-gov.com/dashboard/shm-nr4-75f/debt-resolution-vets-api?fromUser=false&refresh_mode=paused&view=spans&from_ts=1711810672408&to_ts=1714402672408&live=false&tile_focus=8525831246735888)
- [Debts Controller Latency](https://vagov.ddog-gov.com/dashboard/shm-nr4-75f/debt-resolution-vets-api?fromUser=false&refresh_mode=paused&view=spans&from_ts=1711810672473&to_ts=1714402672473&live=false&tile_focus=1845517951393098)
## Communicating with API customers
We have a regularly occurring meeting with VBS to discuss issues and change requests to the VHA FSR. In these meetings you are essentially the VODA (debt) team's subject matter expert.