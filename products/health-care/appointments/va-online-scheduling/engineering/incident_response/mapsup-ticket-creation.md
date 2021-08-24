Usually the first indication that that we have an problem comes from Slack's **[vaos-alerts](https://dsva.slack.com/archives/C016QB6T340)** channel on the **DSVA Service @VA** workspace.  The alert will look something like this: 

![Alert from Slacks #vaos-alerts](images/vaos-mapsup-alert.png)
The next step is to gather information from our logging tools. Currently these consist of the VAOS alerts page on Grafana, [VAOS Alerts](http://grafana.vfs.va.gov/d/EmC4pa6Wz/vaos-alerts?orgId=1&from=1629547130060&to=1629564174841); vets-api server logs on AWS Cloudwatch, [Cloudwatch](https://console.amazonaws-us-gov.com/cloudwatch/home); and Sentry logs, [Sentry 
](http://sentry.vfs.va.gov/organizations/vsp/issues/?environment=production). Note that in the near future viewing logs from AWS Cloudwatch will be replaced by Loki. Following is a snapshot of Cloudwatch logs: 

![Grafana Alerts graph](images/vaos-mapsup-grafana.png)
<p align = "center">
Graphana VAOS Alerts
</p>

![Cloudwatch](images/vaos-mapsup-cloudwatch.png)
<p align = "center">
Cloudwatch Insights
</p>

Once the problem is understood, the next step would be to check Slacks **VA PPG Workspace** to see if the backend group has already identified the problem and is working on it. 

If the problem is from the VAMF backend and the backend groups (MACM, CKM) are not aware of it the next steps are to create a MAPSUP ticket with the information gathered.  In order to create a MAPSUP ticket an Atlassian account is needed. Open the Issues browsing page in Jira, [Issues](https://issues.mobilehealth.va.gov/) and click on the Create link found on the right in the upper menu:

![Jira Issue Browse](images/vaos-mapsup-jira1.png)

**Select MAP Support (MAPSUP)** in the Project dropdown and fill out the Customer Information:

![Jira Customer Info](images/vaos-mapsup-jira2.png)

Click on the **Issue Report** section and fill information gathered in discovery (making sure that production is selected in MAP Environment).

![Screen Shot 2021-08-23 at 9.55.44 AM.png](images/vaos-mapsup-jira3.png)

When all necessary information is entered click on the Create button.

