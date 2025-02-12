# System recovery plan - Master Person Index (MPI)

Follow these steps if the OCTO Identity Master Person Index (MPI) service is offline and needs to be redeployed from scratch.

## Presumption

The OCTO Platform team maintains the vets-api infrastructure. The following repositories contain modules, controllers, and components configured by Identity Platform team:

- `vets-api`
- `vets-website`
- `devops`
- `vsp-infra-application-manifests`

The system recovery plan assumes:

1. These repositories are fully functional.
2. The infrastructure running these services was restored to the last available good state.

The system recovery plan includes steps needed to restore critical OCTO Identity services. This document also assumes all AWS services have been fully restored to an operational state.

MPI infrastructure is maintained by the MPI team; completion of the recovery steps in this document assumes that the MPI outage has been resolved and the service is again available at the production level.

## Contact information

For incident communications, refer to [contacts for the Identity Platform team and dependent systems](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Support-Contacts.md#identity-team-incident-contacts).

## Communications

In the event all MPI connections are lost in VA.gov, all of our MPI components monitored by Datadog should be alerting with `No Data`. Pager Duty will contact the on-call person. When the on-call person identifies that MPI connections are not functioning, they notify the following individuals about the outage and remediation status:
1. The [Team Product Manager (PM) and Technical Lead](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Support-Contacts.md#identity-team-leadership) and request they notify the other engineers for troubleshooting.  
2. The team PM / Technical Lead should start a thread in the [`#identity-support`](https://dsva.slack.com/archives/CSFV4QTKN) channel in the DSVA Slack workspace for communication with Platform teams and customers.  
3. Team PM / Technical Lead / Engineer should contact the MPI POC to open communication regarding system restoration. MPI POC and ticket submission information can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Support-Contacts.md\#mpi).

## Technical Recovery Details

There are no technical recovery steps required of the Identity team. The OCTO Platform Team will notify the Identity Platform team when VA.gov infrastructure is restored.

## Recovery verification steps

1. Confirm High Monitors have recovered:  
   1. [Production MPI Errors Exceeded Acceptable Threshold](https://vagov.ddog-gov.com/monitors/200810?view=spans)  
   2. [Production MPI PSIM Latency High](https://vagov.ddog-gov.com/monitors/238295?view=spans)  
2. Manual Testing. To perform this step you will need production credentials.  
   1. Ensure authentication attempts originating from VA.gov are successful   
      1. Perform either an [SSOe](https://www.va.gov/?next=loginModal\&oauth=false) or [SiS](https://www.va.gov/?next=loginModal\&oauth=true) authentication with any credential service provider.  
      2. After successful authentication navigate to [api.va.gov/v0/user](http://api.va.gov/v0/user) and locate your `icn` to verify VA.gov is successfully connecting to MPI.
4. State in the `#identity-support` channel that all MPI services have been restored and confirmed to be working as well as srp is complete
