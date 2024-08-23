# System Recovery Plan - {{insert service name here}}

In the event of a disaster in which the OCTO Identity Team {{insert service name here}} service need to be redeployed from scratch, the following is the general order of operations that should be followed.

## Presumption

Vets-api infrastructure is maintained by the OCTO Platform team. Identity configures resources within vets-api, vets-website, devops, and vsp-infra-application-manifests github repositories. Within the repositories are defined modules, controllers, and components which facilitate all of the OCTO Identity services. The system recovery plan assumes these repositories are fully functional and the infrastructure which runs these services has been restored to the last known good state as available from these repositories. The requirement of the system recovery plan is to include steps required to ensure services critical to OCTO Identity have been restored.

### Contact Information

Product Manager, Technical Lead, and dependent system contacts for incidents in the communications section below can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Support-Contacts.md#identity-team-incident-contacts).

## Communications

In the event all OCTO Identity services are lost in VA.gov, all of our components monitored by Datadog should be alerting with `No Data` and the on-call support individual will be contacted via PagerDuty. The on-call individual should ensure the following individuals are made aware via slack of the current outage and the remediation status.

1. Team Product Manager (PM) and Technical Lead, contact [here](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Support-Contacts.md#identity-team-leadership).

2. Incident commander from the Platform team, this should be the person who restored the VA.gov resources.

3. Relevant dependent system POC to open communication regarding system restoration. A contact roster for support POCs can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Support-Contacts.md).

## Technical Recovery Details

Once we have received notice from the OCTO Platform Team that VA.gov infrastructure has been stood back up, the following steps should be followed to bring back the components of the OCTO Identity platform:

1. There are no technical recovery steps required of the Identity team.

## Recovery Verification Steps

1. List
2. Steps
3. Here
4. State in the [`#identity-support`](https://dsva.slack.com/archives/CSFV4QTKN) channel that all SSOe services have been restored and confirmed to be working.
