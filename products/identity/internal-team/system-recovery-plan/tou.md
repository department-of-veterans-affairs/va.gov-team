# System Recovery Plan - Terms of Use

In the event of a disaster in which the OCTO Identity Team, Terms of Use feature needs to be redeployed from scratch, the following is the general order of operations that should be followed.

## Presumption

Vets-api infrastructure is maintained by the OCTO Platform team. Identity configures resources within vets-api, vets-website, devops, and vsp-infra-application-manifests github repositories. Within the repositories are defined modules, controllers, and components which facilitate all of the OCTO Identity services. The system recovery plan assumes these repositories are fully functional and the infrastructure which runs these services has been restored to the last known good state as available from these repositories. The requirement of the system recovery plan is to include steps required to ensure services critical to OCTO Identity have been restored.

## Communications

In the event all OCTO Identity services are lost in VA.gov, all of our components monitored by Datadog should be alerting with \`No Data\` and the on-call support individual will be contacted via PagerDuty. When the on-call person identifies that none of the instances which should be running OCTO Identity services, the following methods of contact should be used:

1. On-call person should contact the team PM / Technical Lead and request they notify the other engineers for troubleshooting.  
2. Team PM / Technical Lead should start a thread in the [`#identity-support`](https://dsva.slack.com/archives/CSFV4QTKN) channel in the DSVA Slack workspace for communication with platform teams and customers.  
3. Team PM / Technical Lead / Engineer should contact the relevant dependent system POC to open communication regarding system restoration. A contact roster for support POCs can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Support-Contacts.md).

### Contact Information

Contact for incidents can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Support-Contacts.md\#identity-team-incident-contacts).

## Technical Recovery Details

Once we have received notice from the OCTO Platform Team that VA.gov infrastructure has been stood back up, the following steps should be followed to bring back the components of the OCTO Identity platform:

1. There are no technical recovery steps required of the Identity team.

    
## Recovery Verification Steps

1. Confirm High Monitors have recovered:  
   1. [Prod ToU Button Check IDme LOA1 SiS](https://vagov.ddog-gov.com/monitors/212178)  
   2. [Production ToU Error Percent](https://vagov.ddog-gov.com/monitors/235258?view=spans)  
2. Ensure Terms of Use component is working with Sign in Service authentication  
   1. [https://www.va.gov/?next=loginModal\&oauth=true](https://www.va.gov/?next=loginModal\&oauth=true)  
      1. Select ‘login.gov’ or ‘id.me’ to authenticate with  
      2. (Assuming account has already accepted terms) Navigate to [https://www.va.gov/terms-of-use](https://www.va.gov/terms-of-use)  
      3. ‘Decline’ terms  
      4. Log out, authenticate again at [https://www.va.gov/?next=loginModal\&oauth=true](https://www.va.gov/?next=loginModal\&oauth=true)  
      5. Confirm Terms of Use must be accepted before authentication is completed  
3. Ensure Terms of Use component is working with SSOe authentication  
   1. [https://www.va.gov/?next=loginModal\&oauth=false](https://www.va.gov/?next=loginModal\&oauth=false)  
      1. Select ‘login.gov’ or ‘id.me’ to authenticate with  
      2. (Assuming account has already accepted terms) Navigate to [https://www.va.gov/terms-of-use](https://www.va.gov/terms-of-use)  
      3. ‘Decline’ terms   
      4. Log out, authenticate again at [https://www.va.gov/?next=loginModal\&oauth=false](https://www.va.gov/?next=loginModal\&oauth=false)  
      5. Confirm Terms of Use must be accepted before authentication is completed
