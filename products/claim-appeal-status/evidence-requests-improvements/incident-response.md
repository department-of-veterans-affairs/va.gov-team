# Incident Response Info

## POC:

- Enablement Team:

  - Amy Lai (amy.lai2@va.gov)
  - Julie Strothman (Julie.Strothman@va.gov)
  - Cory Sohrakoff (Cory.Sohrakoff@va.gov)

- Slack Channels:
  - [#benefits-bmt-team-2](https://dsva.slack.com/archives/C09ADJQ0KUZ)
  - [#benefits-management-tools](https://dsva.slack.com/archives/C04KHCT3ZMY)
  - [#benefits-management-tools-notifications](https://dsva.slack.com/archives/C0600QN7CFJ)

## Monitoring:

- [Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/8me-h86-qmb/benefits---claim-status-tool-dashboard)
- [Datadog Monitors](https://vagov.ddog-gov.com/monitors/manage?q=claim%20status%20tool)

## Response:

Feature will remain behind the feature flag while being developed and for a monitoring period defined in the [Release Plan](./release-plan.md).

In the event of an incident during release or post-release monitoring period:

1. Feature flag [cst_evidence_requests_content_mobile](https://api.va.gov/flipper/features/cst_evidence_requests_content_mobile) will be disabled
2. Fix identified and implemented
3. Fix applied and deployed (OOB if necessary)
4. Feature re-enabled
5. Continue Monitoring

## Playbook

- [CST Monitoring Playbook](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/playbooks/claims-status-tool-montoring-playbook.md)
- [BMT Watch Duty](https://dsva.slack.com/docs/T03FECE8V/F09LHQ1BRJN)
