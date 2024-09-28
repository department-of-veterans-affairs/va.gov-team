# System Recovery Plan - SSOe

In the event of a disaster in which the OCTO Identity Team SSOe integration needs to be redeployed from scratch, the following is the general order of operations that should be followed.

## Presumption

Vets-api infrastructure is maintained by the OCTO Platform team. Identity configures resources within vets-api, vets-website, devops, and vsp-infra-application-manifests github repositories. Within the repositories are defined modules, controllers, and components which facilitate all of the OCTO Identity services. The system recovery plan assumes these repositories are fully functional and the infrastructure which runs these services has been restored to the last known good state as available from these repositories. The requirement of the system recovery plan is to include steps required to ensure services critical to OCTO Identity have been restored.

### Contact Information

Product Manager, Technical Lead, and relevant dependent system contacts for incidents in the communications section below can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Support-Contacts.md#identity-team-incident-contacts).

## Communications

In the event all OCTO Identity services are lost in VA.gov, all of our components monitored by Datadog should be alerting with `No Data` and the on-call support individual will be contacted via PagerDuty. When the on-call person identifies that none of the instances which should be running OCTO Identity services, the following methods of contact should be used:

1. On-call person should contact the team Product Manager / Technical Lead and request they notify the other engineers for troubleshooting.

2. Team PM / Technical Lead should start a thread in the [`#identity-support`](https://dsva.slack.com/archives/CSFV4QTKN) channel in the DSVA Slack workspace for communication with platform teams and customers.

3. Team PM / Technical Lead / Engineer should contact the relevant dependent system POC to open communication regarding system restoration. A contact roster for support POCs can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Support-Contacts.md).

## Technical Recovery Details

Once we have received notice from the OCTO Platform Team that VA.gov infrastructure has been stood back up, the following steps should be followed to bring back the components of the OCTO Identity platform:

1. There are no technical recovery steps required of the Identity team.

## Recovery Verification Steps

1. Confirm Critical Monitors have recovered:
    1. [Production Outbound SSOe Percent Error Threshold crossed](https://vagov.ddog-gov.com/monitors/89113)
2. Confirm High Monitors have recovered:
    1. [Production Outbound SSOe Percent Error Threshold crossed DSLOGON](https://vagov.ddog-gov.com/monitors/115836)
    2. [Production Inbound ISAM SSOe Percent Error Threshold Crossed](https://vagov.ddog-gov.com/monitors/89111)
    3. [Production [MHV Unified Sign-in] VA.gov Auto Sign-in Test MHV SSOe](https://vagov.ddog-gov.com/monitors/89574)
    4. [Production [MHV Unified Sign-in] VA.gov Auto Sign-in Test IDme SSOe](https://vagov.ddog-gov.com/monitors/89573)
    5. [Production Outbound [MHV Unified Sign-in] logingov IAL1 SSOe](https://vagov.ddog-gov.com/monitors/89572)
    6. [Production Auth Login Callback Failed Error=Unknown SSOe](https://vagov.ddog-gov.com/monitors/89112)
    7. [Production Auth_too_early Login Callback Error Threshold Crossed SSOe](https://vagov.ddog-gov.com/monitors/89109)
    8. [Production Auth_too_late Login Callback Error Threshold Crossed SSOe](https://vagov.ddog-gov.com/monitors/89110)
3. Ensure authentication attempts originating from VA.gov are successful
    1. https://www.va.gov/?next=loginModal&oauth=false
        1. Select ‘login.gov’, authenticate with login.gov production credentials, confirm successful authentication on VA.gov
        2. Select ‘ID.me’, authenticate with id.me production credentials, confirm successful authentication on VA.gov
4. Ensure authentication attempts originating from a non-VA.gov SSOe client are successful
    1. https://eauth.va.gov/accessva/?cspSelectFor=ava
        1. Select ‘Sign in with ID.me’, or ‘Sign in with LOGIN.GOV’, authenticate with proper production credentials, confirm successful authentication on Ask VA application
        2. After logging into the ASK VA app (ava) click the hamburger icon in the upper right of the page which then should show your name on the left side of the page. This will confirm you were authenticated.
    2. Next, navigate to [https://www.va.gov](https://www.va.gov/)
        1. Confirm you are automatically logged into the VA.gov site
5. State in the [`#identity-support`](https://dsva.slack.com/archives/CSFV4QTKN) channel that all SSOe services have been restored and confirmed to be working.
