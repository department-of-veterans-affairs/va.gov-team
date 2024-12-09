# System recovery plan - Sign-in Service (SiS)

Follow these steps if the OCTO Identity Sign-in Service (SiS) service needs to be redeployed from scratch.

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

## Contact information

For incident communications, refer to [contacts for the Identity Platform team and dependent systems](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Support-Contacts.md#identity-team-incident-contacts).

## Communications

If [VA.gov](http://va.gov/) loses OCTO Identity services, our components monitored by Datadog should be alerting with `No Data`. Pager Duty will contact the on-call person. The on-call person notifies the following individuals about the outage and remediation status:

1. [Team Product Manager (PM) and Technical Lead](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Support-Contacts.md#identity-team-leadership).

2. Incident commander from the Platform team. This should be the person who restored the VA.gov resources.

3. [Relevant dependent system contacts](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Support-Contacts.md).

## Technical recovery details

There are no technical recovery steps required of the Identity team. The OCTO Platform Team will notify the Identity Platform team when [VA.gov](http://va.gov/) infrastructure is restored.

## Recovery verification steps

1. Confirm [Priority 1 Monitors](https://vagov.ddog-gov.com/monitors/manage?q=%28team%3Aidentity%29%20%28env%3Aprod%20OR%20env%3Aeks-prod%29%20%28priority%3Ap1%29%20SiS) have recovered:  
    1. [SiS Mobile CSP Success Rate Monitor](https://vagov.ddog-gov.com/monitors/104510?view=spans)  
2. Confirm [Priority 2 Monitors](https://vagov.ddog-gov.com/monitors/manage?q=%28team%3Aidentity%29%20%28env%3Aprod%20OR%20env%3Aeks-prod%29%20%28priority%3Ap2%29%20SiS\&order=asc\&sort=name) have recovered:  
    1. Controller Routes:  
      1. [*/authorize*](https://vagov.ddog-gov.com/monitors/manage?q=%28team%3Aidentity%29%20%28env%3Aprod%20OR%20env%3Aeks-prod%29%20%28priority%3Ap2%29%20%22v0%3A%3Asignincontroller\_authorize%22\&order=desc) \- latency & error rate monitors  
      2. [*/callback*](https://vagov.ddog-gov.com/monitors/manage?q=%28team%3Aidentity%29%20%28env%3Aprod%20OR%20env%3Aeks-prod%29%20%28priority%3Ap2%29%20%22v0%3A%3Asignincontroller\_callback%22\&order=desc) \- latency & error rate monitors  
      3. [*/token*](https://vagov.ddog-gov.com/monitors/manage?q=%28team%3Aidentity%29%20%28env%3Aprod%20OR%20env%3Aeks-prod%29%20%28priority%3Ap2%29%20%22v0%3A%3Asignincontroller\_token%22\&order=desc) \- latency & error rate monitors  
      4. [*/refresh*](https://vagov.ddog-gov.com/monitors/manage?q=%28team%3Aidentity%29%20%28env%3Aprod%20OR%20env%3Aeks-prod%29%20%28priority%3Ap2%29%20%22v0%3A%3Asignincontroller\_refresh%22\&order=desc) *\-* latency & error rate monitors
      5. [*/revoke*](https://vagov.ddog-gov.com/monitors/256958?view=spans) *\-* latency & error rate monitors
      6. [*/revoke_all*](https://vagov.ddog-gov.com/monitors/256961?view=spans) *\-* latency & error rate monitors
      7. [*/logout*](https://vagov.ddog-gov.com/monitors/256969?view=spans) *\-* latency & error rate monitors
   2. Outbound Monitors:  
      1. [Outbound MHV Basic](https://vagov.ddog-gov.com/monitors/91260?view=spans)  
      2. [Outbound Logingov IAL 1](https://vagov.ddog-gov.com/monitors/91259?view=spans)  
      3. [Outbound ID.me LOA 1](https://vagov.ddog-gov.com/monitors/91261?view=spans)  
      4. [SiS Internal Token Request](https://vagov.ddog-gov.com/monitors/93964?view=spans)   
3. Manual Testing. To perform this step you will need production *Login.gov & ID.me* credentials.  
   1. Ensure authentication attempts originating from the [VA: Health & Benefits App](https://mobile.va.gov/app/va-health-and-benefits) are successful.  
      1. Authentication with *Login.gov* is successful.  
      2. Authentication with *ID.me* is successful.  
   2. Ensure authentication attempts originating from VA.gov are successful

      [https://www.va.gov/?next=loginModal\&oauth=true](https://www.va.gov/?next=loginModal\&oauth=true)  

      1. Select 'login.gov', authenticate with login.gov production credentials, confirm successful authentication on VA.gov  
      2. Select 'ID.me', authenticate with id.me production credentials, confirm successful authentication on VA.gov
4. State in the `#identity-support` channel that all SiS services have been restored and confirmed to be working.
