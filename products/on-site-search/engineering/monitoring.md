# VA.gov site search monitoring

## Search rate anomaly
https://vagov.ddog-gov.com/monitors/186811

What is: 
* Monitor that checks for calls to `v0/search` API endpoint every hour for anomalies in average search rate success(200 responses). 
* Alarms if calls fall below threshold of 10% of the average anomaly bounds

## VA.gov success rate below threshold
https://vagov.ddog-gov.com/monitors/169139

What is: 
* Monitor that checks for 200 (success) responses from the `v0/search` API endpoint
* Alarms if success rates fall below 97%

## Slack Channels for Alerts
- #public-websites-monitoring
- #devops-alerts
