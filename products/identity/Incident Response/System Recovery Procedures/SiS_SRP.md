# System Recovery Plan - Sign-in Service

In the event of a disaster in which the OCTO Identity Team Sign-in Service service needs to be redeployed from scratch, the following is the general order of operations that should be followed.

## Presumption

Vets-api infrastructure is maintained by the OCTO Platform team. Identity configures resources within vets-api, vets-website, devops, and vsp-infra-application-manifests github repositories. Within the repositories are defined modules, controllers, and components which facilitate all of the OCTO Identity services. The system recovery plan assumes these repositories are fully functional and the infrastructure which runs these services has been restored to the last known good state as available from these repositories. The requirement of the system recovery plan is to include steps required to ensure services critical to OCTO Identity have been restored. This document also assumes all AWS services have been fully restored to an operational state.

### Contact Information

Product Manager, Technical Lead, and dependent system contacts for incidents in the communications section below can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Support-Contacts.md#identity-team-incident-contacts).

## Communications

In the event all OCTO Identity services are lost in VA.gov, all of our components monitored by Datadog should be alerting with `No Data` and the on-call support individual will be contacted via PagerDuty. The on-call individual should ensure the following individuals are made aware via slack of the current outage and the remediation status.

1. Team Product Manager (PM) and Technical Lead, contact [here](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Support-Contacts.md#identity-team-leadership).

2. Incident commander from the Platform team, this should be the person who restored the VA.gov resources.

3. Relevant dependent system POC to open communication regarding system restoration. A contact roster for support POCs can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Support-Contacts.md).

### Contact Information

Contact for incidents can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Support-Contacts.md\#identity-team-incident-contacts).

## Technical Recovery Details

Once we have received notice from the OCTO Platform Team that VA.gov infrastructure has been stood back up, the following steps should be followed to bring back the components of the OCTO Identity platform:

1. There are no technical recovery steps required of the Identity team.

## Recovery Verification Steps

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
