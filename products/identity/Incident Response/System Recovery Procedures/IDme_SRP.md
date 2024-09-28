# System Recovery Plan - ID.me

In the event of a disaster in which the OCTO Identity Team ID.me integration needs to be redeployed from scratch, the following is the general order of operations that should be followed.

## Presumption

Vets-api infrastructure is maintained by the OCTO Platform team. Identity configures resources within vets-api, vets-website, devops, and vsp-infra-application-manifests github repositories. Within the repositories are defined modules, controllers, and components which facilitate all of the OCTO Identity services. The system recovery plan assumes these repositories are fully functional and the infrastructure which runs these services has been restored to the last known good state as available from these repositories. The requirement of the system recovery plan is to include steps required to ensure services critical to OCTO Identity have been restored.

### Contact Information

Product Manager, Technical Lead, and relevant dependent system contacts for incidents in the communications section below can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Support-Contacts.md#identity-team-incident-contacts).

## Communications

In the event all OCTO Identity services are lost in VA.gov, all of our components monitored by Datadog should be alerting with `No Data` and the on-call support individual will be contacted via PagerDuty. When the on-call person identifies that none of the instances which should be running OCTO Identity services, the following methods of contact should be used:

1. On-call person should contact the team Product Manager (PM) / Technical Lead and request they notify the other engineers for troubleshooting.  
2. Team PM / Technical Lead should start a thread in the [`#identity-support`](https://dsva.slack.com/archives/CSFV4QTKN) channel in the DSVA Slack workspace for communication with platform teams and customers.  
3. Team PM / Technical Lead / Engineer should contact the relevant dependent system POC to open communication regarding system restoration. A contact roster for support POCs can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Support-Contacts.md#idme-sign-in).

## Technical Recovery Details

Once we have received notice from the OCTO Platform Team that VA.gov infrastructure has been stood back up, the following steps should be followed to bring back the components of the OCTO Identity platform:

1. There are no technical recovery steps required of the Identity team.

    
## Recovery Verification Steps

1. Confirm High Monitors have recovered:  
   1. [Production \[MHV Unified Sign-in\] VA.gov Auto Sign-in Test IDme SSOe](https://vagov.ddog-gov.com/monitors/89573)  
   2. [Prod Outbound external va.gov idme loa1 SiS](https://vagov.ddog-gov.com/monitors/91261)  
   3. [Prod Outbound va.gov idme loa1 SSOe](https://vagov.ddog-gov.com/monitors/89570)  
2. Ensure authentication attempts originating from VA.gov SSOe are successful  
   1. [https://www.va.gov/?next=loginModal\&oauth=false](https://www.va.gov/?next=loginModal\&oauth=false)  
      1. Select ‘ID.me’, authenticate with id.me production credentials, confirm successful authentication on VA.gov  
1. Ensure authentication attempts originating from VA.vog SiS are successful  
   1. [https://www.va.gov/?next=loginModal\&oauth=true](https://www.va.gov/?next=loginModal\&oauth=true)  
      1. Select ‘ID.me’, authenticate with id.me production credentials, confirm successful authentication on VA.gov
1.  State in the [`#identity-support`](https://dsva.slack.com/archives/CSFV4QTKN) channel that all ID.me services have been restored and confirmed to be working.
