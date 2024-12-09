# **System recovery plan** Secure Sign-in Transition

Follow these steps if the OCTO Identity Secure Sign-in Transition monitors shows issues

## Presumption

The OCTO Platform team maintains the vets-api infrastructure. The following repositories contain modules, controllers, and components configured by Identity Platform team:

- `vets-api`
- `vets-website`

The system recovery plan assumes:

1. These repositories are fully functional.
2. The infrastructure running these services was restored to the last available good state.

The system recovery plan includes steps needed to restore critical OCTO Identity services.

## Contact information

For incident communications, refer to [contacts for the Identity Platform team and dependent systems](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Support-Contacts.md#identity-team-incident-contacts).

## Communications

If [VA.gov](http://va.gov/) loses OCTO Identity services, our components monitored by Datadog should be alerting with No Data. Pager Duty will contact the on-call person. The on-call person notifies the following individuals about the outage and remediation status:

1. [Team Product Manager (PM) and Technical Lead](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Support-Contacts.md#identity-team-leadership).
2. Incident commander from the Platform team. This should be the same person who restored the [VA.gov](http://va.gov/) resources.
3. Relevant [dependent system contacts](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Support-Contacts.md).

## Technical recovery details

### Credential Emails `GET /v0/user/credential_emails`
> Access required to complete the steps in this playbook
- Appropriate Github access (va.gov-team and private repo's)
- [VA.gov Identity Monitory Dashboard](https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vagov-identity-monitor-dashboard)
  - [`GET v0/user/credential_emails`](https://vagov.ddog-gov.com/s/f327ad72-c02a-11ec-a50a-da7ad0900007/4qf-cry-zje)
- [DSVA identity-support Slack channel](https://dsva.slack.com/archives/CSFV4QTKN)
- [VFS Sentry](https://sentry.vfs.va.gov/organizations/vsp/issues/?project=4&project=3)

#### Steps
1. Open a tracking issue with using the Identity Slackbot and ping Product Managers
2. Review the recent logs for [this error on Datadog](https://vagov.ddog-gov.com/s/f327ad72-c02a-11ec-a50a-da7ad0900007/4qf-cry-zje)
   1. If necessary, click on the ["Review related logs"](https://vagov.ddog-gov.com/logs?query=%40name%3AV0%5C%3A%5C%3AUsersController%2A%20%40payload.action%3Acredential_emails%20%40http.status_code%3A401&agg_m=count&agg_m_source=base&agg_q=env&agg_q_source=base&agg_t=count&cols=host%2Cservice&fromUser=false&messageDisplay=inline&panel=%7B%22timeRange%22%3A%7B%22from%22%3A1733252400000%2C%22to%22%3A1733256000000%2C%22live%22%3Afalse%7D%2C%22queryString%22%3A%22%40name%3AV0%5C%5C%3A%5C%5C%3AUsersController%2A%20%40payload.action%3Acredential_emails%20%40http.status_code%3A401%20AND%20env%3Aeks-staging%22%7D&refresh_mode=sliding&storage=flex_tier&stream_sort=desc&top_n=10&top_o=top&viz=timeseries&x_missing=true&from_ts=1733158016836&to_ts=1733762816836&live=true) to see the full user flow
3. Verify in the [VA.gov Identity Monitor Dashboard](https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vagov-identity-monitor-dashboard?refresh_mode=sliding&live=true) that the Datadog Synthetic Tests monitoring alerts are not firing
4. Verify the following latency monitors have no error anomalies AND are not above thresholds:
   1. [MPI Service Latency](https://vagov.ddog-gov.com/s/f327ad72-c02a-11ec-a50a-da7ad0900007/5m4-mhx-3ng)
   2. [Vets-api SSOe Latency](https://vagov.ddog-gov.com/s/f327ad72-c02a-11ec-a50a-da7ad0900007/5m4-mhx-3ng)
     1. If necessary, reach out to IAM team to see if they are tracking issues with SSOe
   4. [Vets-api SiS Latency](https://vagov.ddog-gov.com/s/f327ad72-c02a-11ec-a50a-da7ad0900007/5m4-mhx-3ng)
   5. [Vets-api Route Latency](https://vagov.ddog-gov.com/s/f327ad72-c02a-11ec-a50a-da7ad0900007/x3h-2gy-ted)
5. Verify Forward Proxy is functioning as normal by validating [MPI troubleshooting documentation](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Documentation/MPI/troubleshooting.md)
6. Verify no new errors or regressions are assigned to OCTO Identity team in [Sentry](https://sentry.vfs.va.gov/organizations/vsp/issues/?project=4&project=3)

## Recovery verification steps

1. Verify `GET /v0/user/credential_emails` endpoint is within thresholds (or returned to normal) on Datadog
2. Verify all Identity monitors identified are within thresholds (or returned to normal) including latency, forward proxy, and database connection issues.
3. State in the [#identity-support](https://dsva.slack.com/archives/CSFV4QTKN) channel that all services have been restored and confirmed to be working.
