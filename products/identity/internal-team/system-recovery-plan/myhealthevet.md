# System Recovery Plan - MyHealtheVet

In the event of a disaster in which the OCTO Identity Team MyHealtheVet integration needs to be redeployed from scratch, the following is the general order of operations that should be followed.

## Presumption

Vets-api infrastructure is maintained by the OCTO Platform team. Identity configures resources within vets-api, vets-website, devops, and vsp-infra-application-manifests github repositories. Within the repositories are defined modules, controllers, and components which facilitate all of the OCTO Identity services. The system recovery plan assumes these repositories are fully functional and the infrastructure which runs these services has been restored to the last known good state as available from these repositories. The requirement of the system recovery plan is to include steps required to ensure services critical to OCTO Identity have been restored.

## Communications

In the event all OCTO Identity services are lost in VA.gov, all of our components monitored by Datadog should be alerting with `No Data` and the on-call support individual will be contacted via PagerDuty. When the on-call person identifies that none of the instances which should be running OCTO Identity services, the following methods of contact should be used:

1. On-call person should contact the team PM / Technical Lead and request they notify the other engineers for troubleshooting.  
2. Team PM / Technical Lead should start a thread in the [`#identity-support`](https://dsva.slack.com/archives/CSFV4QTKN) channel in the DSVA Slack workspace for communication with platform teams and customers.  
3. Team PM / Technical Lead / Engineer should contact the relevant dependent system POC to open communication regarding system restoration. A contact roster for support POCs can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Support-Contacts.md).

### Contact Information

Contact for incidents can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Support-Contacts.md\#identity-team-incident-contacts).

## Technical Recovery Details

Once we have received notice from the OCTO Platform Team that VA.gov infrastructure has been stood back up, the following steps should be followed to bring back the components of the OCTO Identity platform:

1. There are no technical recovery steps required of the Identity team.

    
## Recovery Verification Steps

1. Confirm Critical Monitors have recovered:  
   1. [Prod External: MHV authentication success rate is < 20% in the past 15 minutes](https://vagov.ddog-gov.com/monitors/119915)  
2. Confirm High Monitors have recovered:  
   1. [Prod External: MHV USiP Monitor is below 45%](https://vagov.ddog-gov.com/monitors/169075)  
   2. [Prod Outbound mhv basic SiS](https://vagov.ddog-gov.com/monitors/91260)  
   3. [Production Outbound [MHV Unified Sign-in] logingov IAL1 SSOe](https://vagov.ddog-gov.com/monitors/89572)  
   4. [Production [MHV Unified Sign-in] VA.gov Auto Sign-in Test IDme SSOe](https://vagov.ddog-gov.com/monitors/89573)  
   5. [Production [MHV Unified Sign-in] VA.gov Auto Sign-in Test MHV SSOe](https://vagov.ddog-gov.com/monitors/89574)
3. Login with MHV LOA1 account using the account credentials with the name "sylvest2" linked [here[(https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Test%20Documentation/test_accounts.md)
4. State in the #identity-support channel that all MHV services have been confirmed to be working.
