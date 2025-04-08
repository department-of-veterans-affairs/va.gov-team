
# High-Level Next Steps for Accredited Representative Facing (ARF) Engineering Team

## Introduction

As of September 2024, this document outlines the next steps for onboarding team members and provides context, resources, and action items to guide our progress. For a comprehensive overview of our architecture and the progress made to date, please refer to the [ARP Architecture Document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/engineering/ADRs/arp-architecture-intent-meeting.md). For general ARF team engineering onboarding, see the [onboarding document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/engineering/docs/arf-engineer-onboarding.md).

---

## Form 21a POST Submission & GCLAWS API Integration

**Objective**: Establish the connection between `vets-api` and `GCLAWS` to enable 21a form submissions.

**Status**: Semi-blocked (pending [ESECC networking request and Memorandum of Understanding (MOU)](https://github.com/department-of-veterans-affairs/va.gov-team/issues/88288) between OCTO and OGC).

**Relevant Epic**: [Digital Form 21a #83627](https://github.com/department-of-veterans-affairs/va.gov-team/issues/83627)

**Next Steps**:

- **Integrate and Test GCLAWS API:**
  - [Blocked] Follow up with [Sam Raudabaugh](https://github.com/raudabaugh) on the [networking request](https://github.com/department-of-veterans-affairs/va.gov-team/issues/88288) and MOU.
  - [Blocked] Once the GCLAWS API is accessible from vets-api, update the endpoint configuration in `vets-api` and perform end-to-end testing. See [key issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/85933), which details current errors, TODOs and necessary steps to accomplish this objective.
  - [Not Blocked] Before sending the Form21a JSON object to the [Form21as GCLAWS POST endpoint](https://ogccotst1.dva.va.gov:4501/swagger/index.html), it'll be necessary to align the [vets-website JSON schema](https://github.com/department-of-veterans-affairs/va.gov-team/issues/87164) and perform [params validation](https://github.com/department-of-veterans-affairs/va.gov-team/issues/92770).

---

## Aligning with the Latest Iteration of OGC Feedback for Form 21a

**Objective:** To make representative accreditation more efficient, ensure that the digital Form 21a aligns with the latest rounds of feedback from OGC and address any required updates per OGC’s business logic and workflow requirements.

**Status**: Unblocked (the digital Form 21a has undergone multiple design iterations, the last update being version 5. The designer, Lesley Ropp, needs to finalize pending design tasks.)

**Relevant Epic**: [Digital Form 21a #83627](https://github.com/department-of-veterans-affairs/va.gov-team/issues/83627)

**Next Steps**:

1. **Finalize Design Updates:**
   - Work with Lesley and the design team to complete V5 design updates.
   - Confirm with OGC if any further UI changes are needed based on their legal and functional requirements.

2. **Coordinate with OGC for Business Logic Review:**
   - Ensure alignment on new fields or conditional logic introduced in the latest design iterations.

4. **Document and Implement Feedback:**
   - Implement any remaining feedback from OGC for Steps 1–8.
   - Verify that the digital Form 21a accurately reflects all business rules and compliance requirements defined by OGC.

5. **Plan for Final Review and Staging:**
   - Once the design and API integrations are complete, prepare for a final staging review. Ensure that OGC is involved in the review process for final sign-off.
   - Identify any further monitoring or alerting requirements for the API or frontend that may be necessary for production launch.

#### Additional Resources

- [OGC Business Logic Documentation](https://dvagov.sharepoint.com/sites/vaabdvro/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2Fvaabdvro%2FShared%20Documents%2FAccredited%20Representative%20Facing%2FForm21a&viewid=3fa7a9bb%2D3d4e%2D44c2%2Db93f%2D629268a08e72)
- [Digital Accreditation Designs (Figma)](https://www.figma.com/design/2afIGOMII0uRI5ck1dWo1w/Form-21a---Apply-for-Accreditation-(CA-%26-Attorneys)?node-id=262%3A21714&t=4dW6dYe6HqnEHT7m-1)

---

## Accredited Representative User Validation

**Objective**: Implement user validation for accredited representatives.

**Status**: Semi-blocked (pending [ESECC networking request and Memorandum of Understanding (MOU)](https://github.com/department-of-veterans-affairs/va.gov-team/issues/88288) between OCTO and OGC as well as GCLAWS endpoint development), though several issues can be started now.

**Relevant Epic**: [ARP Authentication #78472](https://github.com/department-of-veterans-affairs/va.gov-team/issues/75746)

**Impact**: Completing this enables progress on [21-22](https://github.com/department-of-veterans-affairs/va.gov-team/issues/78472) and representative contact information updates (see relevant [mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1717433860326/129030147cf419fe9f5deb7004c0fb0a1a4e2350?sender=u2a4240a640b257ce33545495) [GH epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/83633)).

**Next Steps**:
  - Review, add details to, and address incomplete issues in [ARP’s Authentication Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/75746) (determining what portions can be completed with the GCLAWS API in its current state).
    - Some portions of [this accredited representative user PR](https://github.com/department-of-veterans-affairs/vets-api/pull/18095/files) can be reverted and modified to fit a solution that leverages MPI and GCLAWS for user validation.
    - The [ARP Identity Flow Diagram](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1714501321813) will be helpful in this effort.
  - Connect with the Identity Team in [#arp-identity-integration](https://dsva.slack.com/archives/C06NBCMA7LL), as you'll collaborate closely with them!

## Accept/Deny 21-22 Representation Requests

**Objective**: Enable accredited representative users to digitally accept/decline 21-22 (power of attorney) requests within ARP.

**Status**: Blocked (pending implementation of 21-22 request storage).

**Relevant Epic**: [Accept Deny Power of Attorney Requests #78472](https://github.com/department-of-veterans-affairs/va.gov-team/issues/78472)

**Next Steps**:

1. Confirm adoption of 21-22 storage solution with [Sam Raudabaugh](https://github.com/raudabaugh).
    - **Current Proposal**: See ARM's storage solution as outlined in their [proposal](https://github.com/department-of-veterans-affairs/va.gov-team/pull/89536/files), which has yet to be implemented.
    - **Historical Context**: The [initial solution](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1709071900155) pivoted due to technical challenges, as detailed in this [Slack canvas](https://app.slack.com/client/T03FECE8V). Related LH<>BGS work can be found in [Claims API Pull Requests by @nihil2501](https://github.com/department-of-veterans-affairs/vets-api/pulls?q=is%3Apr+author%3Anihil2501+label%3AclaimsAPI).

2. Update the `vets-api` ARP Engine according to the new storage solution. This will require reinstating the [`power_of_attorney_requests_controller`](https://github.com/department-of-veterans-affairs/vets-api/blob/27bcb31ed983be7d8b03c66b9934c70f1568f057/modules/accredited_representative_portal/app/controllers/accredited_representative_portal/v0/power_of_attorney_requests_controller.rb) (Note: this controller was only pseudocode as downstream dependencies were incomplete), updating it according to the chosen 21-22 storage solution (see [issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/91193)). Some basic structures from [this removal PR](https://github.com/department-of-veterans-affairs/vets-api/pull/18289/files#diff-b0b8c0c2ca93e052146e7df428116a3d2b4109f8701e3776a58f50aa66915b60) could be rescued (though there will only be marginal value in exploring this past, incomplete implementation).

3. Update vets-website ARP application according to the new storage solution. This will require reinstating the [POA Requests Table](https://github.com/department-of-veterans-affairs/vets-website/blob/777b84fe6442b359676bb72edd0c0955d6b8e0af/src/applications/accredited-representative-portal/components/POARequestsTable/POARequestsTable.jsx) (reference [PR to remove 21-22 code from vets-website](https://github.com/department-of-veterans-affairs/vets-website/pull/32130#pullrequestreview-2332678028)), modifying all necessary code to fetch POA requests from the updated `power_of_attorney_requests_controller`.

4. Implement POA request accept/deny functionality (issues must be created for this).

## Establish `representative.va.gov` Subdomain

**Objective**: Set up the `representative.va.gov` subdomain for ARP.

**Relevant Epic**: [Representative Subdomain Setup #71723](https://github.com/department-of-veterans-affairs/va.gov-team/issues/71723)

**Status**: Blocked (pending approval of the subdomain ESECC request).

**Next Steps**:
- Monitor the [representative.va.gov Subdomain ESECC Request approval process](https://github.com/department-of-veterans-affairs/va.gov-team/issues/70480) and address any feedback promptly.
- Configure the subdomain and make any necessary updates upon approval.
