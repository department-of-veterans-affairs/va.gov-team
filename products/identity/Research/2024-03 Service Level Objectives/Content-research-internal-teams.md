# Content research (internal teams)

# Authentication status internal communication for VA teams

Exploring what content is important for VA teams, and what existing norms and processes exist to share this type of SLO information.

# Summary of findings

- [Platform documents their SLOs for vets-api on the public platform site](https://depo-platform-documentation.scrollhelp.site/developer-docs/core-service-level-indicators-and-objectives-for-v)
    - Defines what SLOs are
    - What they track
    - Links to Datadog dashboard
- We currently publish outages and unusual behavior for identity metrics in the following Slack channels:
    - [#va-identity-alerts](https://dsva.slack.com/archives/C02SBFQ22RL) (small audience of 33 members)
        - Notifications are sent automatically from Datadog.
    - [#oncall](https://dsva.slack.com/archives/C30LCU8S3)
    - [#vagov-service-downtime](https://dsva.slack.com/archives/C069DLXRSCC)
        - [Notifications](https://dsva.slack.com/archives/C069DLXRSCC/p1710914458991539) are sent automatically based on status page updates.
- There are existing VA processes and norms for internal incident responses:
    - [Monitoring norms](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/OnCall/Monitoring%20Norms.md): there are protocols for incidents based on the severity, as categorized here.
    - [Incident response playbook](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/OnCall/incident-response-playbook.md): includes step-by-step instructions, communication milestones, and required deliverables including a Github issue and postmortem writeup.
    - [Incident response platform documentation](https://depo-platform-documentation.scrollhelp.site/developer-docs/incident-response-documentation-for-application-te): incidents are rated based on the number of users impacted. Add a [downtime notification](https://depo-platform-documentation.scrollhelp.site/developer-docs/downtime-notifications) and communicate with stakeholders as appropriate based on the scope of the issue.
- The call center team [wants to be kept in the loop](https://dsva.slack.com/archives/CSFV4QTKN/p1711041117994099?thread_ts=1711040808.077039&cid=CSFV4QTKN) on service outages and updates.

# Recommendations

- Define incident response for when SLOs reach a specific threshold:
    - Develop an action plan for publishing alerts and notifications.
        - Identify teams or aliases to @mention when SLOs drop below a certain threshold.
        - Proactively inform call center teams about outages and maintenance.
- Updated related Platform documentation for SSOe and CSP outages (if there’s any overlap).
- Fix [broken links to response procedures](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Monitoring%20and%20Alerting/Monitors_Alerts_Datadog.md) in existing Slack notifications.
    - I believe the correct link is [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Troubleshooting_logging/Monitoring%20and%20Alerting/Monitors_Alerts_Datadog.md).
- Create a landing page on Platform site or Github that mirrors the [vets-API model](https://depo-platform-documentation.scrollhelp.site/developer-docs/core-service-level-indicators-and-objectives-for-v) of [contextualizing SLOs and linking to Datadog](https://docs.google.com/document/d/1-ZN_csS6uuT-c6DymBNe5up_LR4tX6_3ntUNjjn_jrE/edit#heading=h.ax9wyj47c3ze).

# Problem definition

## Audience

VA teams who need to be informed about latency, planned maintenance, or an outage for identity services.

## Goals

- Our team becomes more proactive around maintenance.
- SLOs are determined and available for VA teams.
- SLOs are published and available for VA teams.

## Problems to solve

1. We don’t currently communicate downtime or latency for authentication SLOs somewhere publicly visible to both Veterans and VA teams.
2. Clarify what is essential for the MVP.
    - Publishing outages and maintenance on a public page.
        - Providing details per endpoint and per service.

## What’s the state of things today?

- Datadog dashboard information is available but not published and shared
- Known outages are posted in:
    - #oncall (automated from Datadog and Pagerduty)
    - #va-identity-alerts (automated from Datadog)
    - #vsp-identity (updates posted manually)
    - #vagov-service-downtime (automated from status page and incident response bot)
- [Incident response bot](https://dsva.slack.com/archives/CSFV4QTKN/p1711644911836309)
    - Documents maintenance windows
- [VA.gov status page](https://vagov.statuspage.io/) is updated manually with scheduled maintenance
    - This page contains links to OCTO Slack threads (doesn’t seem like a public audience).

## Initial ideas

- Could we host a page on the platform site that’s accessible to both VA teams and Veterans?
- Can we add a link to status from the sign-in [FAQ page](https://www.va.gov/resources/signing-in-to-vagov/)?
- Could we use the existing status page as a solution?
    - Status page is limited to 1 license (can’t host a separate page for authentication)
    - Can we create a heading / anchor link?

# Existing VA communication

- [How vets-api documents and shares SLOs with VA development teams](https://depo-platform-documentation.scrollhelp.site/developer-docs/core-service-level-indicators-and-objectives-for-v)
    - Public-facing page
    - Link to Datadog dashboard for our current team SLOs

[Refer to PDF for matrix of existing VA communication](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2024-03%20Service%20Level%20Objectives/content-research-authentication-status-internal-communication.pdf)

# Research on best practices

## Key takeaways

- **Messaging:**
    - Inform the user about what is happening and how it impacts them
    - Let them know the issue is temporary
    - Assure them you’re working on a solution
    - Keep language clear and concise (don’t over-communicate)
    - Provide alternatives where possible
- **Action:**
    - Link to your status page so they have visibility into when the issue is resolved
    - Push messaging to your support channels
- **Design components**
    - Banner message
    - Alerts
    - Visible inline with user action

## References

- **Github documentation**
    - [Monitoring norms](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/OnCall/Monitoring%20Norms.md)
    - [Incident response playbook](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/OnCall/incident-response-playbook.md)
- **Platform documentation**
    - [Incident response platform documentation](https://depo-platform-documentation.scrollhelp.site/developer-docs/incident-response-documentation-for-application-te)
    - [Platform vets-api SLOs](https://depo-platform-documentation.scrollhelp.site/developer-docs/core-service-level-indicators-and-objectives-for-v)
