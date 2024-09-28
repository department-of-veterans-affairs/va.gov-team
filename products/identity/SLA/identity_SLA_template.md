# Service Level Agreement for Sign-in Service

# 1. Overview

The service described within this document is between VA.gov application teams and the OCTO Identity team that manages VA.gov authentication.

The VA.gov authentication service enables teams to develop VA.gov applications with an authenticated experience using credentials managed by third-party Credential Service Providers (CSPs) such as Login.gov and ID.me.

# 2. Definitions

- Uptime percentage: the percentage of time the service is available.
- Scheduled downtime: planned unavailability of the service.
- Service interruptions: unscheduled disruption to the service that prevents VA.gov users from signing in to a VA.gov application.

# 3. Service commitment

The OCTO Identity team will use reasonable efforts to ensure that services have a monthly system availability percentage of at least 99.9%.

Outages do not include scheduled downtime, which the OCTO Identity team will announce at least 3 business days in advance to perform system maintenance, upgrades, and testing. Scheduled downtime will be at most 4 hours monthly and posted to the [#vsp-identity](https://dsva.slack.com/archives/CSFV4QTKN) Slack channel and the [#vagov-service-downtime-comms](https://dsva.slack.com/archives/C069DLXRSCC) Slack channel.

Alternatively, the [VA.gov status page](https://vagov.statuspage.io/) lists all systems’ operational statuses, including the VA.gov authentication service.

The OCTO Identity team's uptime percentage commitment excludes any downtime or service interruptions caused by CSPs, including both planned maintenance communicated by CSPs and unplanned outages. The OCTO Identity team will communicate any CSP-related service interruptions to VA.gov application teams as promptly as possible.

# 4. Service Level Agreements (SLA)

The SLAs indicate the VA.gov authentication service performance objectives. The [OCTO Identity SLA board](https://app.ddog-gov.com/sb/f327ad72-c02a-11ec-a50a-da7ad0900007-362c45ef5fa19681357160069be8e92b) provides real-time monitoring of compliance with the SLAs.

| Service | Availability | Overall latency |
| --- | --- | --- |
| Security Assertion Markup Language (SAML) | 99.9% | < 2.43s |
| OAuth | 99.9% | < 1.2s |
| Service outage response | See 4.3 table below | N/A |

## 4.1. SAML

The SAML offering comprises services provided by VA.gov authentication that tie directly to the SAML authentication implementation between VA.gov and the Identity and Access Management (IAM) IBM Security Access Manager (ISAM).

[SAML is documented here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v1/sessions_controller.rb) and includes the following components:

- `/v1/sessions/:csp_type/new`
- `/v1/sessions/callback`
- `/v1/sessions/ssoe_slo_callback`

## 4.2. OAuth

The OAuth service comprises services provided by VA.gov authentication that are supported strictly by the OAuth 2.0 set of standards and libraries. This service does not interact with the IAM ISAM appliance; however, it does still interact with Master Persons Index (MPI).

[OAuth is documented here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/sign_in_controller.rb) and includes the following components:

- `/v0/sign_in/authorize`
- `/v0/sign_in/callback`
- `/v0/sign_in/refresh`
- `/v0/sign_in/revoke`
- `/v0/sign_in/token`
- `/v0/sign_in/logout`

## 4.3. Service outage response

The OCTO Identity team responds to service outages as follows:

| Severity level | Description | Response time |
| --- | --- | --- |
| Severity 1 | Impacting more than 1,000 VA.gov users per hour | 1 hour |
| Severity 2 | Impacting more than 50 VA.gov users per hour | 4 hours |
| Severity 3 | Impacting less than 50 VA.gov users per hour. Includes non-production issues. | 1 business day |

### Urgent requests outside of business hours

Urgent requests are defined as issues impacting VA.gov users on production servers.

If you need assistance with an urgent request during weekends, holidays, or outside of regular business hours, email: [component--identity-authentication-email.sy4b6pv6@dsva.pagerduty.com](mailto:component--identity-authentication-email.sy4b6pv6@dsva.pagerduty.com).

The OCTO Identity team monitors system performance and inbound communications 24x7 via Pager Duty and responds within 30 minutes to any alerts.

### Requests during business hours

Reach out to us on [#vsp-identity](https://dsva.slack.com/archives/CSFV4QTKN) Monday - Friday from 9:00 a.m. to 8:00 p.m. ET.

# 5. VA.gov application team requirements

To maintain the validity of this version of the agreement, VA.gov application teams must:

- Maintain a VA.gov application approved by the VA Identity Product Owner.
- Provide [valid application configuration details](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Sign-In%20Service/Engineering%20Docs/configuration/client_config.md).
- Obtain approval from the OCTO Identity team before the integration is allowed to go into production.

VA.gov application teams accept responsibility for maintaining, troubleshooting, and resolving defects in their client application integrations. The OCTO Identity team is not responsible for any issue arising from the client application integration unrelated to the issuance, validation, and serialization of security tokens.

The OCTO Identity team will assist VA.gov application teams during the initial client application integration and provide support as detailed [in this document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Support%20Process/identity-resources-for-authentication-support.md).

# 6. Versions

| Version | Date | Summary |
| --- | --- | --- |
| 1.0 | May 8 2024 | Initial SLA template creation |

# 7. Agreeing parties

The following parties agree to the terms outlined in this agreement:

| Version | Date | Team | Point of contact |
| --- | --- | --- | --- |
|  |  |  |  |
