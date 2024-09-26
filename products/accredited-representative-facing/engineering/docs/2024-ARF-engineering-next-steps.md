# High-Level Next Steps for Accredited Representative Facing (ARF) Engineering Team

## Introduction

This document outlines the next steps for onboarding team members and provides context, resources, and action items to guide our progress. For a comprehensive overview of our architecture and the progress made to date, please refer to the [ARP Architecture Document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/engineering/ADRs/arp-architecture-intent-meeting.md). For general ARF team engineering onboarding, see the [onboarding document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/engineering/docs/arf-engineer-onboarding.md).

---

## Form 21a POST Submission & GCLAWS API Integration

**Objective**: Establish the connection between `vets-api` and `GCLAWS` to enable 21a form submissions.

**Relevant Epic**:
- **Digital Form 21a**: [ZenHub Epic #83627](https://app.zenhub.com/workspaces/accredited-representative-facing-team-65453a97a9cc36069a2ad1d6/issues/gh/department-of-veterans-affairs/va.gov-team/83627)

### Complete POST of Form 21a to GCLAWS API
- **Status**: Blocked (pending [ESECC networking request and Memorandum of Understanding (MOU)](https://github.com/department-of-veterans-affairs/va.gov-team/issues/88288) between OCTO and OGC).
- **Key Issues**: Detailed in [GitHub Issue #85933](https://github.com/department-of-veterans-affairs/va.gov-team/issues/85933).
- **References**:
  - [ARP Engine Code for Form Submission](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/accredited_representative_portal/app/services/accreditation_service.rb#L37-L55)
- **Next Steps**:
  - Follow up with [Sam Raudabaugh](https://github.com/raudabaugh) on the networking request and MOU.
  - Address errors and TODOs in the GitHub issue.
  - Test the POST request once the GCLAWS connection is established, making follow-on work.

---

## Accredited Representative User Validation

**Objective**: Implement user validation for accredited representatives.

- **Relevant Epic**:
  - **ARP Authentication**: [ZenHub Epic #78472](https://app.zenhub.com/workspaces/accredited-representative-facing-team-65453a97a9cc36069a2ad1d6/issues/gh/department-of-veterans-affairs/va.gov-team/75746)
- **Status**: Unblocked
- **Next Steps**:
  - Review, add details to, and address incomplete issues in [ARP’s Authentication Epic](https://app.zenhub.com/workspaces/accredited-representative-facing-team-65453a97a9cc36069a2ad1d6/issues/gh/department-of-veterans-affairs/va.gov-team/75746).
  - Consult the [ARP Identity Flow Diagram](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1714501321813).
  - Connect with the Identity Team in [#arp-identity-integration](https://dsva.slack.com/archives/C06NBCMA7LL), as you'll collaborate closely with them!
- **Impact**: Completing this enables progress on [21-22](https://app.zenhub.com/workspaces/accredited-representative-facing-team-65453a97a9cc36069a2ad1d6/issues/gh/department-of-veterans-affairs/va.gov-team/78472) and representative contact information updates (see relevant [mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1717433860326/129030147cf419fe9f5deb7004c0fb0a1a4e2350?sender=u2a4240a640b257ce33545495) [ZH epic](https://app.zenhub.com/workspaces/accredited-representative-facing-team-65453a97a9cc36069a2ad1d6/issues/gh/department-of-veterans-affairs/va.gov-team/83633)).

## Accept/Deny 21-22 Representation Requests

**Objective**: Enable accredited representative users to digitally accept/decline 21-22 (power of attorney) requests within ARP.

- **Relevant Epic**:
  - **Accept Deny Power of Attorney Requests**: [ZenHub Epic #78472](https://app.zenhub.com/workspaces/accredited-representative-facing-team-65453a97a9cc36069a2ad1d6/issues/gh/department-of-veterans-affairs/va.gov-team/78472)

### Connect ARP Engine to 21-22 Data Storage
- **Status**: Blocked (pending implementation of 21-22 request storage).
- **Current Proposal**: See ARM's storage solution as outlined in their [proposal](https://github.com/department-of-veterans-affairs/va.gov-team/pull/89536/files), which has yet to be implemented.
- **Historical Context**:
  - Initial solution pivoted due to technical challenges, as detailed in this [diagram](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1709071900155) and the related [Slack discussion](https://dsva.slack.com/archives/C0MQ281DJ/p1616161616000100).
  - Related work can be found in [Claims API Pull Requests by @nihil2501](https://github.com/department-of-veterans-affairs/vets-api/pulls?q=is%3Apr+author%3Anihil2501+label%3AclaimsAPI).
- **Next Steps**:
  - Confirm 21-22 storage solution adoption with [Sam Raudabaugh](https://github.com/raudabaugh).
  - Plan integration with the ARM team and stakeholders.

#### Reinstate vets-api `power_of_attorney_requests_controller`
- **Status**: Blocked (pending implementation of 21-22 request storage).
- **References**:
  - [POA Requests Controller Code](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/accredited_representative_portal/app/controllers/accredited_representative_portal/v0/power_of_attorney_requests_controller.rb)
- **Next Steps**:
  - Update the controller code according to the new data storage integration.

#### Update vets-website POA Requests Table
- **Status**: Blocked (pending implementation of 21-22 request storage).
- **References**:
  - [POA Requests Table Component](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/accredited-representative-portal/components/POARequestsTable/POARequestsTable.jsx)
- **Next Steps**:
  - Modify the component to fetch from updated API endpoints.
  - Implement POA request accept/deny functionality.

## Establish `representative.va.gov` Subdomain

**Objective**: Set up the `representative.va.gov` subdomain for ARP.
**Relevant Epic**:
- **Representative Subdomain Setup**: [ZenHub Epic #71723](https://app.zenhub.com/workspaces/accredited-representative-facing-team-65453a97a9cc36069a2ad1d6/issues/gh/department-of-veterans-affairs/va.gov-team/71723)
- **Status**: Blocked (pending approval of the subdomain ESECC request).
- **Key Issues**:
  - Submit representative.va.gov Subdomain ESECC Request - [GH Issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/70480)
- **Next Steps**:
  - Monitor the approval process and address any feedback promptly.
  - Configure subdomain and update DNS upon approval.
