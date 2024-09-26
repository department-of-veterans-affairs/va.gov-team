# High-Level Next Steps for ARF Engineering

These are high-level, hypothetical next steps for the onboarding ARF Team, with links to relevant portions of the codebase.

---

## 21a: Form Submission & API Integration

- **Establish connection between ARP engine (OCTO) and GCLAWS API (OGC)**
  - **Status:** Blocked by an [ESECC networking request and MOU between OCTO and OGC](https://github.com/department-of-veterans-affairs/va.gov-team/issues/88288).

- **Complete POST of Form 21a to GCLAWS API**
  - **Next Step:** Resolve implementation issues related to form submission, which are detailed in this [GH issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/85933).
  - **Reference:** See [ARP engine code](https://github.com/department-of-veterans-affairs/vets-api/blob/4aafc201f041c3f37893e138a3a03f15904c15bf/modules/accredited_representative_portal/app/services/accreditation_service.rb#L37-L55).

---

## 21-22: User Validation & Data Management

- **Implement Accredited Representative User Validation**
  - **Pending Tasks:** Review incomplete issues in [ARP’s Authentication Epic](https://app.zenhub.com/workspaces/accredited-representative-facing-team-65453a97a9cc36069a2ad1d6/issues/gh/department-of-veterans-affairs/va.gov-team/75746) and consult the [ARP Identity Flow Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1714501321813/e46b8ede7bc0ba3e7b5361d59e86c929688e0857?sender=u44da4f823ec94118a7079396).
  - **Impact:** This will unblock both 21-22 and [Contact Information user validation](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1717433860326/129030147cf419fe9f5deb7004c0fb0a1a4e2350?sender=u44da4f823ec94118a7079396).

- **Connect ARP Engine to Data Storage (via ARM Team)**
  - **Action:** Align with ARM's storage solution as outlined in [Accredited Representative Management Team's proposal](https://github.com/department-of-veterans-affairs/va.gov-team/pull/89536/files). The decision is pending final ratification.
  - **Historical Reference:** The outdated, initially proposed solution is in this [diagram](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1709071900155/9d5180a5134a76b7a9a0165a6cd56a892ad1b6a1?sender=u44da4f823ec94118a7079396) (which was almost implemented before [ARM technical challenges resulted in a pivot](https://dsva.slack.com/docs/T03FECE8V/F078P4SAFKR)). See related [claimsApi PRs by nihil2501](https://github.com/department-of-veterans-affairs/vets-api/pulls?q=is%3Apr+author%3Anihil2501+label%3AclaimsAPi) for additional context.

- **Reinstate `power_of_attorney_requests_controller`**
  - **Task:** Restore the [POA Requests Controller](https://github.com/department-of-veterans-affairs/vets-api/blob/27bcb31ed983be7d8b03c66b9934c70f1568f057/modules/accredited_representative_portal/app/controllers/accredited_representative_portal/v0/power_of_attorney_requests_controller.rb#L8-L39) and configure it to pull data from ARM’s storage solution (likely vets-api, potentially CorpDB).

- **Update POA Requests Table**
  - **Action:** Once controller and data storage integration are complete, update the [POA Requests Table](https://github.com/department-of-veterans-affairs/vets-website/blob/2c6c08227ad86726bce63045caa943c6b3364ecd/src/applications/accredited-representative-portal/components/POARequestsTable/POARequestsTable.jsx#L1-L116) and related files as needed.
