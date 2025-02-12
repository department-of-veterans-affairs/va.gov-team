# System Recovery Plan - Terms of Use

Follow these steps if the OCTO Identity Terms of Use feature needs to be redeployed from scratch.

## Presumption

The OCTO Platform team maintains the vets-api infrastructure. The following repositories contain modules, controllers, and components configured by Identity Platform team:

- `vets-api`
- `vets-website`
- `devops`
- `vsp-infra-application-manifests`

The system recovery plan assumes:

1. These repositories are fully functional.
2. The infrastructure running these services was restored to the last available good state.

The system recovery plan includes steps needed to restore critical OCTO Identity services.

## Contact information

For incident communications, refer to [contacts for the Identity Platform team and dependent systems](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Support-Contacts.md#identity-team-incident-contacts).

## Communications

If VA.gov loses OCTO Identity services, our components monitored by Datadog should be alerting with No Data. Pager Duty will contact the on-call person. The on-call person notifies the following individuals about the outage and remediation status:

1. [Team Product Manager (PM) / Technical Lead](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Support-Contacts.md#identity-team-leadership) and request they notify the other engineers for troubleshooting.  
2. Team PM / Technical Lead should start a thread in the [`#identity-support`](https://dsva.slack.com/archives/CSFV4QTKN) channel in the DSVA Slack workspace for communication with platform teams and customers.  
3. Team PM / Technical Lead / Engineer should contact the [relevant dependent system contacts](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Support-Contacts.md).

## Technical recovery details

There are no technical recovery steps required of the Identity team. The OCTO Platform Team will notify the Identity Platform team when [VA.gov](http://va.gov/) infrastructure is restored.

## Recovery verification steps

1. Confirm High Monitors have recovered:  
   1. [Prod ToU Button Check IDme LOA1 SiS](https://vagov.ddog-gov.com/monitors/212178)  
   2. [Production ToU Error Percent](https://vagov.ddog-gov.com/monitors/235258?view=spans)  
2. Ensure Terms of Use component is working with Sign in Service authentication  
   1. [https://www.va.gov/?next=loginModal\&oauth=true](https://www.va.gov/?next=loginModal\&oauth=true)  
      1. Select ‘Login.gov’ or ‘ID.me’ to authenticate with 
      2. (Assuming account has already accepted terms) Navigate to [https://www.va.gov/terms-of-use](https://www.va.gov/terms-of-use)  
      3. Click the ‘**Decline** button‘, then click ‘**Decline and sign out**‘ button
      4. Confirm you see the authentication error page (`code=110`)
      5. Navigate to the homepage, re-authenticate again at [https://www.va.gov/?next=loginModal\&oauth=true](https://www.va.gov/?next=loginModal\&oauth=true)  
      7. Confirm Terms of Use page displays before authentication is completed
      8. Click the ‘**Accept**‘ button
      9. Confirm you are fully authenticated on VA.gov
3. Ensure Terms of Use component is working with SSOe authentication  
   1. [https://www.va.gov/?next=loginModal\&oauth=false](https://www.va.gov/?next=loginModal\&oauth=false)  
      1. Select ‘Login.gov’ or ‘ID.me’ to authenticate with 
      2. (Assuming account has already accepted terms) Navigate to [https://www.va.gov/terms-of-use](https://www.va.gov/terms-of-use)  
      3. Click the ‘**Decline**‘ button, then click ‘**Decline and sign out**‘ button
      4. Confirm you see the authentication error page (`code=110`)
      5. Navigate to the homepage, re-authenticate again at [https://www.va.gov/?next=loginModal\&oauth=false](https://www.va.gov/?next=loginModal\&oauth=false)  
      7. Confirm Terms of Use page displays before authentication is completed
      8. Click the ‘**Accept**‘ button
      9. Confirm you are fully authenticated on VA.gov

