# Incident Management

## Bottom line up-front

We can effectively measure our compliance with the service outage response time SLA by:

- Restructuring the service outage response SLA to match severity levels of monitor alerts.
- Generating a monthly report using the Pager Duty analytics dashboard filtered by the OCTO Identity team.
    - This shows the Mean Time to Acknowledge (MTTA) metric, which tracks the time from when an incident is triggered to the time it is acknowledged by the team.
    - Customers with Pager Duty access are able to view the dashboard.
    - We can easily provide other stakeholders with incident details and compliance metrics on request for any given time period.
- Conducting postmortems and communicating status updates to customers via Pager Duty.

Using Datadog’s incident management functionality is another option we could consider, but doing so would introduce additional process steps.

## Pager Duty

Pager Duty is our current incident management platform. It has analytics capabilities that provide a detailed overview of incident response times without any additional configuration required.

Pager Duty’s analytics dashboard provides several metrics that are useful in evaluating response times. Mean Time to Acknowledge (MTTA) is the most relevant metric as it measures the time between the incident being triggered by a failed monitor and successful resolution.

The analytics dashboard can be filtered by priority level, allowing us to capture MTTA for outages at the different severity levels. The severity levels in Pager Duty do not necessarily correspond to those described in the SLA, so we should consider adjusting them to correspond to one another.

There is an official Pager Duty integration for Datadog that enables dashboard widgets that allow for incident management directly from a Datadog dashboard. However, this integration does not provide analytics, which does not allow us to include MTTR in the customer-facing SLA dashboard. If customer teams also have access to Pager Duty, they can access our [analytics dashboard directly](https://dsva.pagerduty.com/analytics/overview-dashboard?end=2024-05-07T23%3A59%3A59&escalation_policy_ids=PTB3BI4&priority=all&service_ids=all&start=2024-04-08T00%3A00%3A00&team_ids=P8F5Y90&urgency=all&ref=share-button) to gauge SLA compliance. Again, the MTTR per severity level does not currently map to our proposed service outage response times, so we should consider adjusting them as necessary.

There are some process improvements we can make. For example, we could explore the use of Pager Duty’s additional features to send status updates and record postmortem reports.

### Process using Pager Duty for incident management

This is the current process for handling incidents:

- Monitor alert triggered.
- Slack notification sent.
- Pager Duty alert sent to on-call developer.
- On-call developer acknowledges alert in Pager Duty.
- On-call developer clicks alert in Slack or “View in Datadog” link in Pager Duty to pull up Datadog event.
- On-call developer triages root cause of the incident, escalating to other team members as necessary.
- Team works to resolve service outage.
- Once the service is restored, the on-call developer resolves incident in Pager Duty.

## Datadog

Datadog has incident management capabilities that are available under the existing Datadog license. OCTO has been using its incident management capabilities as part of the watch officer initiative.

Using both Datadog and Pager Duty adds process steps given the nature of using parallel incident management solutions. Also, each person who will declare incidents will need the Datadog Standard Role.

We could explore replacing Pager Duty with Datadog’s incident management, but that is outside the scope of this effort.

### Process using both Datadog and Pager Duty for incident management

This process reflects the new process if we used both Datadog and Pager Duty:

- Monitor alert triggered.
- Slack notification sent.
- Pager Duty alert sent to on-call developer.
- On-call developer acknowledges alert in Pager Duty.
- On-call developer clicks alert in Slack to pull up Datadog event.
- On-call developer assesses event.
- If event is a service outage, the on-call developer declares an incident via the Datadog incident management user interface.
- Team works to resolve service outage.
- Team adds notes to incident as details emerge and investigation progresses.
- Once the service has been restored, the on-call developer resolves the incident in both Datadog and Pager Duty.
