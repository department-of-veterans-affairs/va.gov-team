# Content research for Veterans

Authentication status communication to Veterans

Exploring what content is important to Veterans, and how that content should be documented and shared. This incorporates design patterns from:

- Login partners
- Other government apps and tools
- [VA.gov design system](https://design.va.gov/)

# Summary of findings

- Identity providers (such as ID.me and AuthO) provide status pages (like the [one found on VA.gov](https://vagov.statuspage.io/)) to communicate outages and maintenance.
- Our design system provides industry standard response language and components for planned and unplanned system outages (including outages related to signing in).
    - These updates are made manually but leverage pre-existing content templates.
    - CAIA offers assistance with updates.
    - Currently these templates don’t link to our [status](https://vagov.statuspage.io/) page.
- There’s an [existing Veteran-facing page](https://www.va.gov/performance-dashboard/) with performance metrics for sign-in managed by the IIR team.
- We don’t have a way to **automatically** indicate latency or outages for SiS, SSOe, or CSPs
    - If we want to render a link to outage details inline with the sign-in modal (referenced during kickoff meeting) additional links or help text on login pages tends to be [below the login CTA component](https://saaswebsites.com/page-categories/login-form-page/).
        - Pursuing a solution like this would require collaboration with design systems.

# Recommendations

- Develop an action plan for publishing alerts and banner notifications on VA.gov
    - [Example of how Platform does this](https://dsva.slack.com/archives/C01K37HRUAH/p1706631681822679)
- [Use (or customize) existing content](https://docs.google.com/document/d/14ekf2-kyqAPJYdjK_CfHaiaV1HuJYJxM8r4tIyx_zqo/edit#heading=h.vtpxh5t38y73) for banner and alert messaging related to system outages
    - Tailor content to specify the dates of planned maintenance.
- Publish a link to the new (or [existing) status page](https://vagov.statuspage.io/) on [sign in FAQ page](https://www.va.gov/resources/signing-in-to-vagov/).
- Improve [existing status page](https://vagov.statuspage.io/)
    - Revise the labels on [va.gov status page](https://vagov.statuspage.io/) for identity, CPSs, and SSOe to make them easier to understand
    - Add missing CSPs
- [Coordinate with the IIR team](https://dsva.slack.com/archives/C06PLP6L0Q3/p1710958023280299) to ensure we don’t publish duplicate, redundant, or conflicting information.
- [Additional ideation](https://docs.google.com/document/d/14ekf2-kyqAPJYdjK_CfHaiaV1HuJYJxM8r4tIyx_zqo/edit#heading=h.k0vc7wiac9kr) for consideration,

# Problem definition

## Audience

Veterans trying to log in to access VA.gov who encounter an error.

## Goals

- Our team becomes more proactive around maintenance.
- We empower Veterans with next steps if they’re not able to log in.

### Out of scope

- Push notifications - emails, texts, etc. to Veterans.

## Problems to solve

1. We don’t currently communicate outages and scheduled maintenance to Veterans.
- We should (automatically) note downtime or latency for authentication SLOs somewhere publicly visible to both Veterans and VA teams.
- CTA button (if in scope?)
    - We need to align with design system and CAIA standards
    - Competitors place “help” links below CTAs
1. Clarify what is essential for the MVP
    - Publishing outages and maintenance on a public page.
        - We technically already do this on the [va.gov status page](https://vagov.statuspage.io/).
        - What gaps are we filling?
    - How do we keep the scope simple?

## What’s the state of things today?

- Datadog dashboard information is available but not published and shared
- Known outages are posted in:
    - On-call Slack channels (automated?)
    - Maintenance Slack channel (automated?)
    - Posts are shared in #vsp-identity (manually)
- [VA.gov status page](https://vagov.statuspage.io/) is updated manually with scheduled maintenance
    - This page contains links to OCTO Slack threads (doesn’t seem like a public audience).
- Emails are sent to Veterans regarding scheduled maintenance
    - [Login.gov](https://dsva.slack.com/files/USLACKBOT/F06Q1NAJE57/login.gov_maintenance_-__planned_maintenance__login.gov_identity_verification_services_unavailable_for_residents_of_mississippi_-_14_march_2024) example
    - Are we responsible for communicating CSP outages:
        - Automatically?
        - Manually (via banners, etc.)?

## Initial ideas

- Could we host a page on the platform site that’s accessible to both VA teams and Veterans?
- Can we add a link to status from the sign-in [FAQ page](https://www.va.gov/resources/signing-in-to-vagov/)?
- Could we use the existing status page as a solution?
    - Status page is limited to 1 license (can’t host a separate page for authentication)
    - Can we create a heading / anchor link?

# Competitors

- [Reference resources in the “Signing in” section](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity)
    - ID.me
    - MyHealtheVet
    - Login.gov
    - DS logon
- Additional competitors
    - Healthcare
    - Other gov website
        - [IRS: status of mission-critical functions](https://www.irs.gov/newsroom/irs-operations-status-of-mission-critical-functions)

[Untitled Database](https://www.notion.so/20872b803678402ab01f01b68815a84c?pvs=21)

# Process diagram

- [Process mapping for content/communication](https://www.figma.com/file/awGHczXl0MIGaVtkCHLJGw/SLO-communication?type=whiteboard&node-id=0%3A1&t=EL55aWKBRFOE9ElM-1) (MVP)

https://lh7-us.googleusercontent.com/weMX-Kz63G9DC8kGgX7SvKy7Rv7AtbAr63SIsiI1F8q177LoJTmMndD-t_QBAd68VRpAEvEq6WNnW4Xpd86HxkcnKpuKlEy1CX2_dOIHrbkuJXZnZW6dg9So01bkCvkXXRL4iYr6GuIHZV-D1FDZH7Y

# Design system guidance

Note: Our response to SLO latency, maintenance, and outages  is out of scope for this project. However based on our design system guidelines,  this communication should happen when we’re aware of an issue.

---

- Sign-in and CSPs downtime:
- **[Unscheduled maintenance that impacts signing in](https://design.va.gov/content-style-guide/error-messages/system)** must use the **[alert component](https://design.va.gov/components/alert#warning-alert)**.
    
    https://lh7-us.googleusercontent.com/l69wOA4oT7vEUephvjEfCT6oBWw0qCdJPH8KF9QSpXOmdk5Z5YMUczXOEh2YNMM2gpG4y8IgG_ByxM2lJhyXHhU8cPd3MgAiRgYryXomsG3Emkav7bTv4NsE-e7J4kartY4RUlo4iM3aKvgiWnTaTe0
    
- **[Scheduled maintenance that impacts signing in](https://design.va.gov/content-style-guide/error-messages/system#scheduled-downtime-notifications)** must use the **[banner component](https://design.va.gov/components/banner/#during-maintenance)**.
    
    https://lh7-us.googleusercontent.com/M_23Ag0EjzGtI8CZaRTZqgf4XSxhAyR8DSkAnzBqj5hXzFDPiAf5ejGGyY7bp6oC4bYz9UkuYKPlcTPUe-pKQ775wN5Ao5Kv5PjiCMxyhKsQ34lV4j8syG5Wn0Wf2q1QFdUy_nmXU4xjkQhfsyUoi_o
    

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

- **Outages for critical systems**
    - [Website maintenance](https://www.smashingmagazine.com/2009/06/effective-maintenance-pages-examples-and-best-practices/)
    - [UX of critical failure](https://cruxcollaborative.com/insights/ux-critical-failure)
    - [Communicating with customers during an outage](https://www.helpscout.com/helpu/outage-status-update/)
- **General communication**
    - [Indicators and notifications](https://www.nngroup.com/articles/indicators-validations-notifications/)
    - [Error messages](https://www.nngroup.com/articles/error-message-guidelines/?lm=error-messages-scoring-rubric&pt=article)
 
 [ See PDF file for competitor analysis details](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2024-03%20Service%20Level%20Objectives/content-research-authentication-status-communication-to-veterans.pdf)

 # Process diagram

- [Process mapping for content/communication](https://www.figma.com/file/awGHczXl0MIGaVtkCHLJGw/SLO-communication?type=whiteboard&node-id=0%3A1&t=EL55aWKBRFOE9ElM-1) (MVP)

https://lh7-us.googleusercontent.com/weMX-Kz63G9DC8kGgX7SvKy7Rv7AtbAr63SIsiI1F8q177LoJTmMndD-t_QBAd68VRpAEvEq6WNnW4Xpd86HxkcnKpuKlEy1CX2_dOIHrbkuJXZnZW6dg9So01bkCvkXXRL4iYr6GuIHZV-D1FDZH7Y

# Design system guidance

Note: Our response to SLO latency, maintenance, and outages  is out of scope for this project. However based on our design system guidelines,  this communication should happen when we’re aware of an issue.

---

- Sign-in and CSPs downtime:
- **[Unscheduled maintenance that impacts signing in](https://design.va.gov/content-style-guide/error-messages/system)** must use the **[alert component](https://design.va.gov/components/alert#warning-alert)**.
    
    https://lh7-us.googleusercontent.com/l69wOA4oT7vEUephvjEfCT6oBWw0qCdJPH8KF9QSpXOmdk5Z5YMUczXOEh2YNMM2gpG4y8IgG_ByxM2lJhyXHhU8cPd3MgAiRgYryXomsG3Emkav7bTv4NsE-e7J4kartY4RUlo4iM3aKvgiWnTaTe0
    
- **[Scheduled maintenance that impacts signing in](https://design.va.gov/content-style-guide/error-messages/system#scheduled-downtime-notifications)** must use the **[banner component](https://design.va.gov/components/banner/#during-maintenance)**.
    
    https://lh7-us.googleusercontent.com/M_23Ag0EjzGtI8CZaRTZqgf4XSxhAyR8DSkAnzBqj5hXzFDPiAf5ejGGyY7bp6oC4bYz9UkuYKPlcTPUe-pKQ775wN5Ao5Kv5PjiCMxyhKsQ34lV4j8syG5Wn0Wf2q1QFdUy_nmXU4xjkQhfsyUoi_o
    

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

- **Outages for critical systems**
    - [Website maintenance](https://www.smashingmagazine.com/2009/06/effective-maintenance-pages-examples-and-best-practices/)
    - [UX of critical failure](https://cruxcollaborative.com/insights/ux-critical-failure)
    - [Communicating with customers during an outage](https://www.helpscout.com/helpu/outage-status-update/)
- **General communication**
    - [Indicators and notifications](https://www.nngroup.com/articles/indicators-validations-notifications/)
    - [Error messages](https://www.nngroup.com/articles/error-message-guidelines/?lm=error-messages-scoring-rubric&pt=article)
