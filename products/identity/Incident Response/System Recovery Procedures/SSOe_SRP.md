# System recovery plan - SSOe

Follow these steps if the OCTO Identity SSOe integration needs to be redeployed from scratch.

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

In the event all OCTO Identity services are lost in VA.gov, all of our components monitored by Datadog should be alerting with `No Data` and the on-call support individual will be contacted via PagerDuty. The on-call person notifies the following individuals about the outage and remediation status:

1. [Team Product Manager (PM) / Technical Lead](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Support-Contacts.md#identity-team-leadership) and request they notify the other engineers for troubleshooting.

2. Team PM / Technical Lead should start a thread in the [`#identity-support`](https://dsva.slack.com/archives/CSFV4QTKN) channel in the DSVA Slack workspace for communication with Platform teams and customers.

3. Team PM / Technical Lead / Engineer should contact the [relevant dependent system POC](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Support-Contacts.md) to open communication regarding system restoration.

## Technical recovery details

There are no technical recovery steps required of the Identity team. The OCTO Platform Team will notify the Identity Platform team when [VA.gov](http://va.gov/) infrastructure is restored.

## Recovery verification steps

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
