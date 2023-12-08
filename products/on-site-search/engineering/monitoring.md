# VA.gov site search monitoring

## Search rate anomaly
https://vagov.ddog-gov.com/monitors/169140

What is: 
* Monitor that checks for calls to `v0/search` API endpoint every hour
* Alarms if calls fall below threshold

## VA.gov success rate below threshold
https://vagov.ddog-gov.com/monitors/169139

What is: 
* Monitor that checks for 200 (success) responses from the `v0/search` API endpoint
* Alarms if success rates fall below 99%, warns below 99%

## Slack Channels for Alerts
- #public-websites-monitoring
- #devops-alerts
