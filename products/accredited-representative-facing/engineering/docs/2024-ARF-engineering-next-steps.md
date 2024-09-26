# High-Level Next Steps for Accredited Representative Facing (ARF) Engineering Team

## Introduction

This document outlines the next steps for onboarding team members and provides context, resources, and action items to guide our progress. For a comprehensive overview of our architecture and the progress made to date, please refer to the [ARP Architecture Document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/engineering/ADRs/arp-architecture-intent-meeting.md). For general ARF team engineering onboarding, see the [onboarding document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/engineering/docs/arf-engineer-onboarding.md).

---

## Form 21a POST Submission & GCLAWS API Integration

**Objective**: Establish the connection between `vets-api` and `GCLAWS` to enable form submissions.

**Relevant Epic**:

- **Digital Form 21a**: [ZenHub Epic #83627](https://app.zenhub.com/workspaces/accredited-representative-facing-team-65453a97a9cc36069a2ad1d6/issues/gh/department-of-veterans-affairs/va.gov-team/83627)

### Complete POST of Form 21a to GCLAWS API

- **Action**: Resolve implementation issues related to the submission of Form 21a.
- **Status**: Blocked (Pending [ESECC networking request and Memorandum of Understanding (MOU)])(https://github.com/department-of-veterans-affairs/va.gov-team/issues/88288) between OCTO and OGC.
- **Key Issues**: Detailed in [GitHub Issue #85933](https://github.com/department-of-veterans-affairs/va.gov-team/issues/85933).
- **References**:
  - [ARP Engine Code for Form Submission](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/accredited_representative_portal/app/services/accreditation_service.rb#L37-L55)
- **Next Steps**:
  - Follow up on the status of the networking request and MOU with [Sam Raudabaugh](https://github.com/raudabaugh)
  - Address the errors and TODOs outlined in the GitHub issue.
  - Test the POST request thoroughly once the GCLAWS connection is established.

---

## Accredited Representative User Validation

**Objective**: Implement robust accredited representative user validation.

- **Relevant Epic**:
  - **ARP Authentication**: [ZenHub Epic #78472](https://app.zenhub.com/workspaces/accredited-representative-facing-team-65453a97a9cc36069a2ad1d6/issues/gh/department-of-veterans-affairs/va.gov-team/75746)

- **Action**: Implement user authentication mechanisms for accredited representatives.
- **Status**: Unblocked
- **Key Tasks and Next Steps**:
  - Review, add details to, and address incomplete issues in [ARP’s Authentication Epic](https://app.zenhub.com/workspaces/accredited-representative-facing-team-65453a97a9cc36069a2ad1d6/issues/gh/department-of-veterans-affairs/va.gov-team/75746).
  - Consult the [ARP Identity Flow Diagram](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1714501321813).
  - Say hello to the Identity Team in [#arp-identity-integration](https://dsva.slack.com/archives/C06NBCMA7LL), as you'll collaborate closely with them!
- **Impact**: Completing Accredited Representative User Validation will enable progress on [21-22](https://app.zenhub.com/workspaces/accredited-representative-facing-team-65453a97a9cc36069a2ad1d6/issues/gh/department-of-veterans-affairs/va.gov-team/78472) and representative contact information updates (see relevant [mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1717433860326/129030147cf419fe9f5deb7004c0fb0a1a4e2350?sender=u2a4240a640b257ce33545495) [ZH epic](https://app.zenhub.com/workspaces/accredited-representative-facing-team-65453a97a9cc36069a2ad1d6/issues/gh/department-of-veterans-affairs/va.gov-team/83633)).

## Accept/Deny 21-22 Representation Requests

**Objective**: Allow accredited representative users to digitally accept/decline 21-22 (power of attorney) requests within ARP.

- **Relevant Epic**:
  - **Accept Deny Power of Attorney Requests**: [ZenHub Epic #78472](https://app.zenhub.com/workspaces/accredited-representative-facing-team-65453a97a9cc36069a2ad1d6/issues/gh/department-of-veterans-affairs/va.gov-team/78472)

### Connect ARP Engine to 21-22 Data Storage

- **Action**: Integrate the ARP engine with the data storage solution provided by the Accredited Representative Management (ARM) team.
- **Status**: Blocked (pending implementation of 21-22 request storage).
- **Current Proposal**: See ARM's storage solution as outlined in their [proposal](https://github.com/department-of-veterans-affairs/va.gov-team/pull/89536/files), which has yet to be implemented.
- **Historical Context**:
  - An initial solution was proposed but pivoted due to technical challenges, as detailed in this [diagram](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1709071900155) and the related [Slack discussion](https://dsva.slack.com/archives/C0MQ281DJ/p1616161616000100).
  - Related work can be found in [Claims API Pull Requests by @nihil2501](https://github.com/department-of-veterans-affairs/vets-api/pulls?q=is%3Apr+author%3Anihil2501+label%3AclaimsAPI).
- **Next Steps**:
  - Confirm the adoption of the proposed storage solution with [Sam Raudabaugh](https://github.com/raudabaugh).
  - Plan the integration process with the ARM team and VA stakeholders.

#### Reinstate vets-api `power_of_attorney_requests_controller`

- **Action**: Restore the `power_of_attorney_requests_controller` and configure it to interface with the new data storage solution.
- **Status**: Blocked (pending implementation of 21-22 request storage).
- **References**:
  - [POA Requests Controller Code](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/accredited_representative_portal/app/controllers/accredited_representative_portal/v0/power_of_attorney_requests_controller.rb)
- **Next Steps**:
  - Update the controller code according to the new data storage integration.

#### Update vets-website POA Requests Table

- **Action**: Revise the Power of Attorney (POA) Requests Table in the user interface to reflect the changes in the data source.
- **Status**: Blocked (pending implementation of 21-22 request storage).
- **References**:
  - [POA Requests Table Component](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/accredited-representative-portal/components/POARequestsTable/POARequestsTable.jsx)
- **Next Steps**:
  - Modify the vets-website component to fetch data from the updated API endpoints.
  - Implement the ability to accept or deny POA requests.

## Establish `representative.va.gov` Subdomain

**Objective**: Set up the `representative.va.gov` subdomain to host the Accredited Representative Portal.
**Relevant Epic**:

- **Representative Subdomain Setup**: [ZenHub Epic #71723](https://app.zenhub.com/workspaces/accredited-representative-facing-team-65453a97a9cc36069a2ad1d6/issues/gh/department-of-veterans-affairs/va.gov-team/71723)

- **Action**: Process the ESECC request for the new subdomain.
- **Status**: Blocked (pending approval of the subdomain ESECC request).
- **Key Issues**:
  - Submit representative.va.gov Subdomain ESECC Request - [GH Issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/70480)
- **Next Steps**:
  - Complete and submit the ESECC request for the `representative.va.gov` subdomain.
  - Monitor the approval process and address any feedback promptly.
  - Once approved, proceed with configuring the subdomain and any follow-on work that might arise.
