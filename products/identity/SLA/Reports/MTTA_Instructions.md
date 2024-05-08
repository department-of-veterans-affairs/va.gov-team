## MTTA Monthly Review Procedure

This document details the process of generating a monthly report from PagerDuty that shows the Mean Time to Acknowledge (MTTA) for the previous month. This report is a requirement for our Service Level Agreement (SLA) under the item "Service Outage Response".

### Steps to Generate the MTTA Report

1. Navigate to the PagerDuty analytics dashboard by clicking on this [link](https://dsva.pagerduty.com/analytics/overview-dashboard?end=2024-04-30T23%3A59%3A59&escalation_policy_ids=PTB3BI4&priority=null&service_ids=all&start=2024-04-01T00%3A00%3A00&team_ids=P8F5Y90&urgency=all&ref=share-button) (Note: Make sure you are signed in to your PagerDuty account)
2. Adjust the date range to reflect the previous month.
3. Select the “OCTO Identity” team. This should update the Escalation Policy filter to only show the Identity Team escalation policy. 
4. Take a screen capture of the top 5 graphs of the dashboard. Convert to PDF.
5. Add the report to the reports folder in Github.
6. Review the report for compliance and action items during the next leadership meeting.
