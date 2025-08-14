# On-Call Rotation Guidelines for IVC Forms

# DRAFT
*Updated 8/5/2025 to add VES on-call procedures*
### Overview
This document outlines the expectations and responsibilities for team members during their on-call rotation for production support. The goal is to ensure smooth handling of production incidents during business hours while minimizing the impact on sprint deliverables.
### On-Call Schedule
* **Rotation**: On-call duty will rotate with each sprint among team members, starting on the first day of the sprint at 9 AM ET and ending the last day of the sprint at 5 PM ET.
* **Coverage**: The team member on call is responsible for production support during regular business hours (Monday to Friday, 9 AM - 5 PM ET). If you are unavailable (vacation, illness), you must arrange a swap with another team member and notify the team.
### Responsibilities During On-Call
The person on call is primarily responsible for following the team's [monitoring playbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/team/ivc-forms-monitoring-playbook.md) and ensuring it is followed by ticket assignees.

While on call, you are expected to:
- Monitor: Actively monitor production alerts and notifications during your assigned sprint.
- Respond: 
  - Acknowledge any alert within 1 hour during business hours (9 AM - 5 PM ET).
  - Create incident issues as needed in Zenhub
  - Notify PM (Michael Mooney) and/or DM (Andrea)
- Resolve: Resolve if you can. If you can’t, hand off to another team member and confirm they’ve taken ownership.
- Communicate: Provide regular updates on the status of incidents in the designated PUBLIC channels. Keep DMs in Slack or Teams to a minimum so that communication is open and transparent
- Document: Log any incidents, the steps taken to resolve them, and lessons learned in the ticket that was created above
- Handoff: At the end of your on-call rotation, ensure the next team member in the rotation is fully briefed on any ongoing issues.

### VES

With the upcoming VES rollout, on-call procedures now include:

- monitoring the [10-10D DataDog Dashboard](https://vagov.ddog-gov.com/dashboard/gmp-4du-pvm/ivc-champva-10-10d-form-dashboard?fromUser=false&refresh_mode=sliding&from_ts=1754402529005&to_ts=1754406129005&live=true) for VES failures as well as alerts in #ivc-forms-datadog for VES errors
- In the event of an incident impacting normal IVC Forms service operations, the integration is controlled by [this Flipper toggle](https://api.va.gov/flipper/features/champva_send_to_ves) and should be disabled until a solution is rolled out
- Communication with the VES team should be made on the **IVC Forms & VES Team Chat** channel on Teams

### Escalation Policy
* As needed, escalate to
  * PM (Michael Mooney)
  * DM (Andrea)
  * PO (Premal)

### Incident Response Principles
To ensure a consistent and effective approach to handling incidents, the following principles and best practices should be followed:
- Prompt Acknowledgment: Acknowledge any incident promptly (within 15 minutes) during business hours. Swift acknowledgment builds trust and helps minimize uncertainty.
- Clear and Timely Communication: Communicate incident status regularly with both technical and non-technical stakeholders. Provide updates on timelines, resolution progress, and any workarounds.
- Collaboration and Escalation: If you are unable to resolve the issue within the designated time, escalate it to the relevant lead and ask for help when needed. Collaboration ensures faster resolution.
- Avoid Finger-Pointing: Focus on resolving the issue, not assigning blame. A blameless culture helps promote learning and improvement.
- Continuous Monitoring: Utilize monitoring tools to detect potential issues early. Proactive monitoring allows incidents to be addressed before they escalate.
- Respect Non-Working Hours: Ensure that incidents during business hours are handled promptly, and non-critical issues that arise outside of business hours can be deferred to the next working day.

### Tools and Access
You must ensure you have:
* Access to all necessary monitoring tools and dashboards.
  * Datadog dashboard:
    * [IVC Forms Dashboard](https://vagov.ddog-gov.com/dashboard/zsa-453-at7/ivc-champva-ivc-forms-dashboard-original)
    * [10-10D](https://vagov.ddog-gov.com/dashboard/gmp-4du-pvm/ivc-champva-10-10d-form-dashboard)
    * [10-10D Extended (+OHI)](https://vagov.ddog-gov.com/dashboard/c2u-hkx-sdc/ivc-champva-10-10d-ohi-merged-form-dashboard)
    * [10-7959A CHAMPVA Claims](https://vagov.ddog-gov.com/dashboard/tgw-7ju-ywy/ivc-champva-10-7959a-claims-form-dashboard)
    * [OHI](https://vagov.ddog-gov.com/dashboard/tup-trn-tg6/ivc-champva-ohi-form-dashboard)
    * [FMP](https://vagov.ddog-gov.com/dashboard/ffk-4ay-q2p/ivc-champva-fmp-form-dashboard)
  * Monitoring slack channel⠀(OCTO: #ivc-forms-datadog)
  * [Flipper](https://api.va.gov/flipper/features)

### Support From the Team
* The entire team supports the on-call member. If an issue exceeds your expertise or the workload becomes too heavy, don’t hesitate to ask for help.

### Additional Expectations
* During your on-call week, remain available for incident response during business hours and adjust priorities if critical incidents arise.

### Contact List for Escalation
* **Delivery Manager**: Andrea
* **Product Manager**: Bo
* **Product Owner**: Premal

