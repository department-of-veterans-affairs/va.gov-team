# Incident Response Plan
## 🚨 First Reaction
Do these 3 steps first, _before any investigation of root cause is done_.

### 1. Collect
**Coordinator/Techical Lead**: Collect information for triaging.

1. Impact: **How is this affecting Veterans?**
2. Error Type: **500s? 400s? 403s?**
3. System: **Which systems are involved?**
4. Timeframe: **Estimate - How long has the issue been going on?**

### 2. Notify
2.1. **Coordinator**: Start a thread in [#beneficiary-travel-team](https://dsva.slack.com/archives/C05UTPZRZFY) with the following template:
```
@kay @Kristen McConnell @Mark Dewey
@btsss-api-team @btsss-vagov-team

We're investigating an ongoing issue with Travel Pay. 

Impacted Veterans %:     xx% (or explicit #)
Impacted Systems:        System A, System B
Timeframe:               Issue has been going on for X minutes.

We are investigating the issue and will post updates in this thread as we have them. :thread:
```

2.2 **Coordinator**: Work with Kay, Kristen, Mark and Technical Lead to determine if this incident warrants setting up a maintenance window or rolling back the broken feature.

### 3. Track
- **Technical Lead**: Start a debugging traceability document using [this Incident Investigation Traceability](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/engineering/templates/incident_investigation_traceability_template.md) template. 

<hr />

## 📞 Points of Contact
Slack channel is [#beneficiary-travel-team](https://dsva.slack.com/archives/C05UTPZRZFY)

### Core Roles
#### Coordinator: The person in charge of coordinating and communicating the overall response & resolution.
- Name: Charlotte Reid
- Slack Handle: @Charlotte Reid

#### Backup Coordinator:
- Name: Kevin Duensing
- Slack Handle: @Kevin Duensing

#### Technical Lead: The primary investigator, focused on technical debugging and resolution.
- Name: Kevin Duensing
- Slack Handle: @Kevin Duensing

#### Backup Technical Lead:
- Name: Calvin Cieslak
- Slack Handle: @Calvin Cieslak

### OCTO Roles
#### Technical Lead: The person supporting and leading the engineering on the product from OCTO
- Name: Mark Dewey
- Slack Handle: @Mark Dewey
Reachable on Slack and Microsoft Teams

#### UX Lead: The person supporting and leading the user experience on the product from OCTO
- Name: Kristen McConnell 
- Slack Handle: @Kristen McConnell
Reachable on Slack and Microsoft Teams

#### Product Owner: The person supporting and leading the product from OCTO
- Name: Kay Lawyer
- Slack Handle: @Kay 
Reachable on Slack and Microsoft Teams

### Supporting Teams & Contacts
#### Travel Pay API Team:
Slack Channel: `#beneficiary-travel-team`

##### Contacts
##### Blaise Fox
- Role: Business Analyst
- Slack Handle: @Blaise Fox
Reachable on Slack and Microsoft Teams.

##### Josh Patterson
- Role: Technical Lead
- Slack Handle: @Josh Patterson
Reachable on Slack and Microsoft Teams.

##### Tim Hawkins
- Role: Developer
- @Slack Handle: @Tim Hawkins
Reachable on Slack and Microsoft Teams.

#### VFS Platform Team:
- Slack Channel: [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1)
- Engage this team when the impact is widespread (Confirm w/ Kay & Kristen before reaching out.)
- Use the `/support` bot functionality (type `/support` into the main vfs-platform-support channel)
and describe the incident.

## 🔄 On-Call Process
Currently we are contractually obligated to support the product during business hours ([TODO: FIND THESE]). However, to 
be proactive in noticing and fixing production issues, we adhere to the following on-call criteria:

### Criteria
1. VA.gov Travel Pay team should be on call for 1 hour before and 1 hour after any moderately risky
   event (e.g. API deployments, CRM updates, OOB VA.gov deployments). E.g. if an API deployment is 
   scheduled from 8pm - 10pm ET, the VA.gov team would be on call from 7pm to 11pm ET.
2. There should be a minimum of 1 person on call and ideally 2 people on call with exceptions for PTO, etc.
3. On-call duties include
   1. Responding to testing requests from deploying teams
   2. Responding to incidents
   3. Validating VA.gov Travel Pay deployments [how in prod?]
   4. Validating backing services (API, CRM) deployments [how in prod?]
   5. Kicks off the Escalation process.

### Management
- Schedule: The on-call schedule and rotation is managed in [PagerDuty](https://dsva.pagerduty.com/service-directory/PO9X8XN).
- Alerting: Alerts are sent via Slack, text, and phone call.
- Acknowledgement: The on-call engineer must acknowledge the alert within the configured timeframe.
- Hand-off: If an incident cannot be resolved by the on-call engineer alone, they should follow the escalation process to involve additional team members.

## 🚀 Escalation
### Escalation Steps
- Initial Triage: On-call engineer attempts to resolve the issue for [Timeframe, e.g., 15 minutes].
- Technical Escalation: If no progress is made, the on-call engineer pages the Technical Lead.
- Leadership Escalation: For Sev 1 incidents or if the Technical Lead is unable to resolve the issue, the Coordinator and relevant leadership are notified.

## 🛠️ Debugging Steps

- Dashboards
  - [SMOC Web Performance Dashboard](https://vagov.ddog-gov.com/dashboard/27b-m6k-7an/travel-pay-smoc-performance-dashboard?fromUser=true&index=%2A&refresh_mode=sliding&tpl_var_Environment%5B0%5D=eks-prod&from_ts=1754571611026&to_ts=1754658011026&live=true)
  - [SMOC Mobile Performance Dashboard](https://vagov.ddog-gov.com/dashboard/rhb-i5t-2sv/travel-pay-mobile-smoc-performance-dashboard?fromUser=false&refresh_mode=sliding&tpl_var_Environment%5B0%5D=eks-prod&from_ts=1754591648680&to_ts=1754678048680&live=true)
  - [Travel Pay General Performance Dashboard](https://vagov.ddog-gov.com/dashboard/crx-9dc-4y6/travel-pay-performance-dashboard?fromUser=false&refresh_mode=sliding&tpl_var_Environment%5B0%5D=eks-prod&from_ts=1754663672000&to_ts=1754678072000&live=true)
  - [Platform E2E Dashboard](https://vagov.ddog-gov.com/dashboard/u27-88d-58v/platform-e2e?fromUser=false&refresh_mode=sliding&tpl_var_env%5B0%5D=eks-prod&from_ts=1754505297084&to_ts=1754678097084&live=true)

- Recent changes
  - [Merged PRs](https://github.com/search?q=repo%3Adepartment-of-veterans-affairs%2Fvets-website+type%3APR+author%3Akjduensing+author%3Aseesleestak+author%3Aliztownd+author%3Abellepx0+author%3Ascohen-theta+author%3Aasiisii+author%3Apmclaren19+is%3Amerged+&type=pullrequests)
    - To filter by merge date, add `merged:2025-01-01`
    - To filter between 2 dates, add `merged:2025-01-01..2025-02-01`
    - To filter from a date and now, add `merged:>2025-01-01`
  - Check [#beneficiary-travel-team](https://dsva.slack.com/archives/C05UTPZRZFY) for API or CRM updates/release
  - Check shared calendar for API or CRM updates/releases
    - API Release Schedule: https://confluence.devops.va.gov/display/VAExternal/Release+Versions

Find more detailed debugging steps in our [in-depth debugging guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/engineering/guides/debugging.md).

## Post-incident
Follow these steps to clean up after an incident
1. Remove any maintenance windows that are related to the incident
2. Notify relevant groups that the incident is resolved
3. For high-impact issues, spin up a post mortem using [this template](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Postmortems/_template.md)

## 📊 System Integration Diagram
This diagram shows the upstream (right side) to downstream (left side) dependencies.
<img width="2220" height="756" alt="image" src="https://github.com/user-attachments/assets/2a101bdb-fafd-4839-88b1-ae34d42d990f" />


