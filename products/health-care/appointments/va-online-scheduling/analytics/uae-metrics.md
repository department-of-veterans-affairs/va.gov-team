# UAE Metrics

## What 
- [UAE Metrics refers to an excel spreadsheet in SharePoint](https://dvagov.sharepoint.com/:x:/r/sites/HealthApartment/Shared%20Documents/Appointments/Analytics/UAE%20metrics.xlsx?d=wc95ca18bba4a4913ba210545e72d2cc9&csf=1&web=1&e=40r3WI) that serves as a centralized database for UAE-wide metrics. E.g., AVS, Travel Pay, Appointments, Patient Check In. 

## Who 
- OCTO Health leadership (Robyn S., Kristen M., Kay L.) are accountable for its use and sharing upwards to the CTO
- Various UAE team members are responsible for adding the data on the **7th of each month** to the spreadsheet and ensuring the data points remain accessible, reliable, and accurate
- Various UAE team members are responsible for keeping the main PoC and backup PoC in the spreadsheet for each metric up to date to ensure timeliness of data to OCTO Health leadership

## How

- For Appointments metrics, responsible UAE team members will need accesss to specific DataDog reports ***and*** PII data ([How to request access to VSSC's Appointments scheduling report](/products/health-care/appointments/va-online-scheduling/analytics/requesting-access-to-vssc-vaos-report.md)) (*Note: Requesting requires VA Network accces.*)
- Open [VAOS OKRs 2025 - GA4 (Source)](https://lookerstudio.google.com/s/qXJSaTU9eOQ) (which is a temp location)
- Find and fill out the metrics on the **7th of each month** based on instructions and links in the Source column, if provided, of both tabs in the [UAE Metrics spreadsheet](https://dvagov.sharepoint.com/:x:/r/sites/HealthApartment/Shared%20Documents/Appointments/Analytics/UAE%20metrics.xlsx?d=wc95ca18bba4a4913ba210545e72d2cc9&csf=1&web=1&e=40r3WI) (*Note: requires VA Network accces.*)
- When completed filling out the numbers at EOD on the 7th, reply in the Slack reminder thread that your metrics have been completed.

## Notes on Datadog
<img width="1568" alt="Image" src="https://github.com/user-attachments/assets/c1d7dfee-6fcf-44d5-ada9-954767b4016f" />

John Luo updated our [VAOS Alerts dashboard](https://vagov.ddog-gov.com/dashboard/7t4-7fw-pgj/vaos-alerts?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1709403962772&to_ts=1709576762772&live=true) to include our best attempt at reporting these three metrics and here are his notes on how they work and their limitations as well as some other top level considerations:

### Uptime

This is technically the opposite of the "Downtime" metrics requested but it's trivial to convert between the two metrics so I've opted to use Uptime for display here. 

We are assuming "uptime" being requested here means whether our service's APIs can be reached. Our APIs are deployed as part of the vets-api Rails application to `https://api.va.gov/`. Given that this is mostly a monolithic app, our service's uptime are equivalent to vets-api's uptime. As such I've opted to use the "Availability SLO for vets-api service" for our metric. 

Alternatively, I've seen other teams create an unauthenticated `[service]/healthcheck` endpoint they can ping to ensure their Rails sub-app is mounted correctly. We can implement this if needed but given that it'll most likely report the same number as "Availability SLO for vets-api service", I've opted to not go this route for now. Let me know if we should work on this just to align with some of the other teams.

Note that we also considered the effects of the uptime of our dependent services. We are currently not reporting the uptime/downtime of our upstream services (e.g. HSRM, CERNER, VistA) since we don't think we have good visibility into their internal operations. These would be extremely useful and would help us determine whether our Gateway Timeout (504) errors are due to bad requests from our services (e.g. requesting 50 years of appointments history) or our upstream services being down/unresponsive. Ultimately, it would probably be best for those teams to report their uptimes themselves.

### Error rate

We consider all API response with 5xx status we return to be errors. We then compute this as a percentage of total API responses as our error rate. This broadly aligns with other teams and dashboards on DD so I think this is a fairly common definition. Note that we do not consider 4xx status to be error since these are invalid requests from the client/user.

### Latency

We are currently reporting the average maximum* vets-api request duration as the latency metric. I've seen other teams use the same request duration metric but different statistics (e.g. average latency, median latency, 95 percentile, etc) so additional guidance here would be appreciated.

*Average latency may sound like an oxymoron but this is a technical detail of the metrics we receive. The metric we use is aggregated by StatsD which has a default flush interval of 10s. So the "request_duration.max" we can access reports the maximum request duration over each 10 seconds interval. We then take the average of these numbers across a time span (e.g. 1 month) to report as a single number on the dashboard.

### Frontend vs Backend

A top level question we had when deciding what to report is whether we should report the uptime, error rate, and latency from the perspective of the backend (vets-api) or the frontend (vets-website). This ultimately depends on how these numbers are intended to be interpreted or used. 

This is most relevant when discussing latency since the current measurement is on the backend (vets-api) which doesn't account for RTT (time for data to transmit between browser and server) or the fact some frontend functionalities require multiple sequential API calls. This ultimately can cause a discrepancy in what the user experiences (for example, 9s to load a page) and what we report (for example, three 2s calls were made to service that request hence a maximum latency of 2s). We've considered using something like DD RUM to gather frontend metrics for reporting purposes but this needs to be investigated further to ensure it aligns with the goals of folks reviewing these reports. Error rates and uptime on the frontend are potentially less well defined so more consideration will be needed if we decide to go that direction as well.

### Sampling vs full data

Note that there are some technical considerations on the datasource we are using for reporting these metrics. There are similarities between the `vets_api.statsd.api_rack_request/.api_rack_request_duration` that we opted to use in our metrics and the `trace.rack.request/.errors` used in some dashboards. According to the Slack conversation [here](https://dsva.slack.com/archives/C01G6J7UGGH/p1740065094034579), it's recommended to use `vets_api.statsd.api_rack_request/.api_rack_request_duration` since it is not sampled so that is the approach we have taken here.

## Slack reminders

- There's a reminder in #unified-appointment-experience in Slack at 9 a.m. ET on the 2nd of every month that the 7th of the month is approaching, which is when metrics are due and should be pulled on (because there's a lag in some data reporting)
- There's a second reminder in #unified-appointment-experience in Slack at 9 a.m. ET on the 7th of every month letting UAE team members know that metrics are due to be populated in the spreadsheet before EOD
  
## Need help?

- There is a Zoom recording for how to fill out the UAE Metrics spreadsheet. It is hosted on Zoom. Send a message to Ben Brasso, Steven Straily, or Alayna Abel to request access.
