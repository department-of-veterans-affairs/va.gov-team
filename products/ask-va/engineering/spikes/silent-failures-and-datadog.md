# Silent failures and datadog
We'll use the following matrix to monitor each point of failure in Datadog, from logging in Datado to communicating the error to the user.

| Component  | Feature        | Cron | Logs | Dash | Slack  | Triage | FE:UI |
|------------|----------------|:----:|:----:|:----:|:------:|:------:|:-----:|
| Login      | ID.me          |  🟨  |  🟨 |  🟨  |  🟨    |  🟨    |  🟨   |
| Login      | Login.gov      |  🟨  |  🟨 |  🟨  |  🟨    |  🟨    |  🟨   |
| vets-api   | /status        |  🟨  |  🟨 |  🟨  |  🟨    |  🟨    |  🟨   |
| vets-api   | Med Search     |  🟨  |  🟨 |  🟨  |  🟨    |  🟨    |  🟨   |
| vets-api   | Ed Search      |  🟨  |  🟨 |  🟨  |  🟨    |  🟨    |  🟨   |
| vets-api   | Addr Validate  |  🟨  |  🟨 |  🟨  |  🟨    |  🟨    |  🟨   |
| vets-api   | VA Profile     |  🟨  |  🟨 |  🟨  |  🟨    |  🟨    |  🟨   |
| vets-api   | Branch of Svc  |  🟨  |  🟨 |  🟨  |  🟨    |  🟨    |  🟨   |
| CRM API    | /ping          |  🟨  |  🟨 |  🟨  |  🟨    |  🟨    |  🟨   |
| CRM API    | AVA Profile    |  🟨  |  🟨 |  🟨  |  🟨    |  🟨    |  🟨   |
| CRM API    | Submit Inquiry |  🟨  |  🟨 |  🟨  |  🟨    |  🟨    |  🟨   |
| CRM API    | Submit Reply   |  🟨  |  🟨 |  🟨  |  🟨    |  🟨    |  🟨   |
| CRM API    | List Inquiries |  🟨  |  🟨 |  🟨  |  🟨    |  🟨    |  🟨   |
| ask_va API | Cached Lookups |  🟨  |  🟨 |  🟨  |  🟨    |  🟨    |  🟨   |
| ask_va API | /ping          |  🟨  |  🟨 |  🟨  |  🟨    |  🟨    |  🟨   |


**LEGEND**

| Icon | Description   |
|:----:|---------------|
| 🟨   | Not started   |
| 🟥   | Blocked       |
| 🟩   | Complete      |
| 🟪   | Won't address |


## Matrix (Above) Notes

- [ ] All errors, outages, spikes and dips should be logged to DataDog
- [ ] All logs should include the MessageID; No logs should contain PII/PHI
  - All Logs should include the MessageID (which we only get currently from submit inquiry???) May have to generate our own MessageId.
- [ ] Dashboard to be configured to highlight errors, outages, spikes, and dips
- [ ] All errors and outages should be announced in #ask-va-notifications Slack channel
- [ ] Specific errors will be triaged when added to backlog, UI logic TBD
  - [ ] based on frequency, severity, ...
  - [ ] initially, none are exposed via UI, only logged so we can collect data on them
- [ ] Log successful health checks alongside errors
- [ ] Verify logging in dashboard
- [ ] Verify logging in Slack
- [ ] Ensure when we show a message in the app, it's one of the approved ones


## Tech Notes

* For address validation healthcheck, use the /locality endpoint
* For submit inquiry or submit reply, pass a valid payload that will be rejected
* For dashboard, we're calling retrieve list of inquiries immediately
* For form, category list is pulled immediately, testingthe cached values and middleware
* Log web, api, and ask\_va\_api separately (tags?)
  * catch issues with the middleware that are independent of CRM or VA.gov


## Questions

* Does Datadog support ping/hit page for health check on schedule?
  * if not, make a cron job in ask-va repo to check
* If outages are captured in Datadog, can we use that info in our UI?
* Would the Datagog Dashboard work as a radiator? if not, can one be built on it?
