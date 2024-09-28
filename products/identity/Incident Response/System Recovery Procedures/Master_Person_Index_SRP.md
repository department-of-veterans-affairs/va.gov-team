# System Recovery Plan - Master Person Index (MPI)

In the event of a disaster in which Master Person Index (MPI) is offline, the following is the general order of operations that should be followed.

## Presumption

Vets-api infrastructure is maintained by the OCTO Platform team. Identity configures resources within vets-api, vets-website, devops, and vsp-infra-application-manifests github repositories. Within the repositories are defined modules, controllers, and components which facilitate all of the OCTO Identity services. The system recovery plan assumes these repositories are fully functional and the infrastructure which runs these services has been restored to the last known good state as available from these repositories. The requirement of the system recovery plan is to include steps required to ensure services critical to OCTO Identity have been restored. This document also assumes all AWS services have been fully restored to an operational state.

MPI infrastructure is maintained by the MPI team; completion of the recovery steps in this document assumes that the MPI outage has been resolved and the service is again available at the production level.

### Contact Information

Product Manager, Technical Lead, and dependent system contacts for incidents in the communications section below can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Support-Contacts.md#identity-team-incident-contacts).

## Communications

In the event all MPI connections are lost in VA.gov, all of our MPI components monitored by Datadog should be alerting and the on-call support individual will be contacted via PagerDuty. When the on-call person identifies that MPI connections are not functioning, the following methods of contact should be used:

1. On-call person should contact the team Product Manager (PM) / Technical Lead and request they notify the other engineers for troubleshooting.  
2. Team PM / Technical Lead should start a thread in the [`#identity-support`](https://dsva.slack.com/archives/CSFV4QTKN) channel in the DSVA Slack workspace for communication with platform teams and customers.  
3. Team PM / Technical Lead / Engineer should contact the MPI POC to open communication regarding system restoration. MPI POC and ticket submission information can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Support-Contacts.md\#mpi).

### Contact Information

Contact for incidents can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Support-Contacts.md\#identity-team-incident-contacts).

## Technical Recovery Details

Once we have received notice that MPI has recovered, the following steps should be followed to bring back the components of the OCTO Identity platform:

1. There are no technical recovery steps required of the Identity team.

## Recovery Verification Steps

1. Confirm High Monitors have recovered:  
   1. [Production MPI Errors Exceeded Acceptable Threshold](https://vagov.ddog-gov.com/monitors/200810?view=spans)  
   2. [Production MPI PSIM Latency High](https://vagov.ddog-gov.com/monitors/238295?view=spans)  
2. Manual Testing. To perform this step you will need production credentials.  
   1. Ensure authentication attempts originating from VA.gov are successful   
      1. Perform either an [SSOe](https://www.va.gov/?next=loginModal\&oauth=false) or [SiS](https://www.va.gov/?next=loginModal\&oauth=true) authentication with any credential service provider.  
      2. After successful authentication navigate to [api.va.gov/v0/user](http://api.va.gov/v0/user) and locate your `icn` to verify VA.gov is successfully connecting to MPI.
4. State in the `#identity-support` channel that all MPI services have been restored and confirmed to be working as well as srp is complete
