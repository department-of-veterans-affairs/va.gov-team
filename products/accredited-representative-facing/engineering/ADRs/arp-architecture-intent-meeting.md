# Accredited Representative Facing Architecture Intent Meeting

_This document provides a high-level overview of the proposed architecture changes. It focuses on key points and links to supporting material where appropriate. This is not a detailed engineering specification._

---

## Product Description

### A brief overview of the motivation for the change

The **Accredited Representative Facing (ARF) Team** aims to create an accessible, modern, and secure online system for Accredited Representatives. By digitizing the **OGC Form 21a** for representative accreditation, we strive to streamline the accreditation processes to improve the efficiency with which OGC personnel can process pending accreditation applications. This will enable Claims Agent and Attorney representatives to obtain accreditation faster, allowing them to assist Veterans sooner.

- VA stakeholders initiated the project, including **Jennifer Bertsch**, the Accredited Representative Facing Product Owner.
- For more details on Form 21a, refer to the [VA Form 21a PDF](https://www.vba.va.gov/pubs/forms/21a.pdf).

### Link to product document

- [Accredited Representative Facing Product Documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representative-facing)
- [Accredited Representative Facing Engineering Github Page](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representative-facing/engineering)

### Application Development Status

As of this document's writing, the ARF Team's Form21a application has yet to undergo a staging review. [Downstream dependencies currently block application development](https://app.zenhub.com/workspaces/accredited-representative-facing-team-65453a97a9cc36069a2ad1d6/issues/gh/department-of-veterans-affairs/va.gov-team/85933), so the application is not production-ready. The significant downstream dependency blocking production launch is the ability of OGC users to process 21a applications, which will determine the application's rollout. The GCLAWS Team is expected to develop the necessary OGC UI in the coming quarters. Please keep that in mind as you review the below.

---

## UX Design Description

### For user-facing changes, link to UX prototype or wireframes if available

- [Mockups for Form 21a, including fields and features requested by stakeholders but not yet built](<https://www.figma.com/design/2afIGOMII0uRI5ck1dWo1w/ARF---Form-21a---Apply-for-Accreditation-(CA-%26-Attorneys)?node-id=1026-23089&t=fdslbOvunuGJiV45-1>)
- [Mockups reflective of what's in the Staging environment](<https://www.figma.com/design/2afIGOMII0uRI5ck1dWo1w/ARF---Form-21a---Apply-for-Accreditation-(CA-%26-Attorneys)?node-id=3787-289708&t=fdslbOvunuGJiV45-1>)
- ARF went through Midpoint Review on 9/16/24. Link to [Collaboration Cycle ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/91879) and [Milestones](https://github.com/department-of-veterans-affairs/va.gov-team/milestone/1398), which includes Platform feedback.
- [Live Version on Staging](https://staging.va.gov/representative/introduction)

### Call out any engineering challenges

- **Custom VA.gov Header for ARP**
  - Implementing a distinct header for the Accredited Representative Portal.
  - Refer to the [ARP Header and Footer ADR](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/engineering/ADRs/react-header-footer-adr.md).
- **Unique Representative User Implementation**
  - Developing a separate user model for ARP.
  - Details in the [Using the Sign-in Service for ARP Tools ADR](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/engineering/ADRs/using-sign-in-service.md) and the associated [ZenHub Epic](https://app.zenhub.com/workspaces/accredited-representative-facing-team-65453a97a9cc36069a2ad1d6/issues/gh/department-of-veterans-affairs/va.gov-team/75746).
- **Dependency on OGC GCLAWS Team**
  - External dependencies on the OGC GCLAWS team and their incomplete APIs introduced significant challenges.
  - See the [ZenHub Epic](https://app.zenhub.com/workspaces/accredited-representative-facing-team-65453a97a9cc36069a2ad1d6/issues/gh/department-of-veterans-affairs/va.gov-team/75746).
  - Swagger API documentation is accessible within the VA network at the [GCLAWS Swagger API](https://ogccotst1.dva.va.gov:4501/swagger/index.html).

---

## Frontend Changes

### Identify any significant code changes

- **ARP Header and Representative User Sign-in**
  - **Custom Application Setup**
    - Given that ARP does not require the standard [VA.gov](http://VA.gov) header or user, it bypasses the typical `vets-website` [**StartApp**](https://github.com/department-of-veterans-affairs/vets-website/blob/fc7ba0457bdda111881dd01529fc6ed217f4e9fc/src/platform/startup/index.js#L30) setup, which includes functionality like the [`commonReducer`](https://github.com/department-of-veterans-affairs/vets-website/blob/fc7ba0457bdda111881dd01529fc6ed217f4e9fc/src/platform/startup/store.js#L34-L46) and [`startSitewideComponents`](https://github.com/department-of-veterans-affairs/vets-website/blob/f0320a93f026e70607a9863a2d00e15b02f1f85d/src/platform/site-wide/index.js#L28-L61) (primarily used for the VA.gov header). Instead, ARP utilizes a custom [`arpUserReducer`](https://github.com/department-of-veterans-affairs/vets-website/blob/2c165632e0d3d430ec0e48b5dd51da64d61d6ea8/src/applications/accredited-representative-portal/reducers/index.js#L5-L10) and selectively loads only the necessary functionality into [**StartReactApp**](https://github.com/department-of-veterans-affairs/vets-website/blob/2c165632e0d3d430ec0e48b5dd51da64d61d6ea8/src/applications/accredited-representative-portal/app-entry.jsx#L1-L27), allowing for a leaner, more focused implementation tailored to ARP's requirements (far fewer than the Veteran VA.gov header).
  - **Custom User Endpoint**
    - Utilized [`accredited_representative_portal/v0/user`](https://github.com/department-of-veterans-affairs/vets-website/blob/2c165632e0d3d430ec0e48b5dd51da64d61d6ea8/src/applications/accredited-representative-portal/actions/user.js#L15-L19) for ARP users.
    - Changes detailed in [PR #30146](https://github.com/department-of-veterans-affairs/vets-website/pull/30146) and adaptation for Form 21a in [PR #31352](https://github.com/department-of-veterans-affairs/vets-website/pull/31352).
- **FormsInProgress for Representative Users**
  - Implemented a separate `vets-api` endpoint for `FormsInProgress`.
  - See [InProgressFormsController](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/accredited_representative_portal/app/controllers/accredited_representative_portal/v0/in_progress_forms_controller.rb) and the relevant [Pull Request](https://github.com/department-of-veterans-affairs/vets-api/pull/17805).
- **Custom Content Build**
  - Created a unique content-build layout with a representative-centric header and footer, becoming the first VA.gov application to do so.
  - Refer to the [ADR](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/engineering/ADRs/react-header-footer-adr.md), [PR #2004](https://github.com/department-of-veterans-affairs/content-build/pull/2004), and [PR #1989](https://github.com/department-of-veterans-affairs/content-build/pull/1989).

### Identify any new design system components needed or changes to current components

- No new design system components were required.
- Several updates to patterns available in the Forms Library:
  - `currentOrPastMonthYearDateUI` - [#veteran-facing-forms](https://dsva.slack.com/archives/C044AGZFG2W) did the work on a ticket we created to add this pattern that excludes day from date pattern (just MMYYY instead of MMDDYYYY)
  - `yesNoUI` - [#veteran-facing-forms](https://dsva.slack.com/archives/C044AGZFG2W) did the work on a ticket we created to add the functionality of adding a 'description' to this pattern
  - `selectUI` - Added the ability to pass a required prop, so `selectUI` can be conditionally required
  - `currentOrPastDateUI` - Added the ability to pass a required prop, so all date patterns can be conditionally required
  - `addressUI` - Updated JSDoc comments in the Forms Library to reduce confusion for future teams
  - Array builder pattern (List & Loop) updates:
    - Added ability for the summary page title to accept a description
    - Min / Max validation - Working with CAIA and the [#veteran-facing-forms](https://dsva.slack.com/archives/C044AGZFG2W) team to improve hint text and error messaging around array builder item count validation

### Describe any product analytics being gathered

- Currently, no product analytics are being gathered for ARP.

---

## Backend Changes

### Does the project introduce any new or unusual infrastructure dependencies?

- **Representative User Sign-in**
  This project required implementing a separate sign-in flow for representative users, which involved extensive [collaboration with the Identity Team](https://dsva.slack.com/archives/C06NBCMA7LL) for approval and execution.
  - [ADR on Representative User Sign-in](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/engineering/ADRs/using-sign-in-service.md)
  - Sign-in flow diagrams and approval details are available [here](https://dsva.slack.com/docs/T03FECE8V/F07GUSS5CTF).
  - The core implementation is managed through the [RepresentativeUsersController](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/accredited_representative_portal/app/controllers/accredited_representative_portal/v0/representative_users_controller.rb) and [RepresentativeUserLoader](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/accredited_representative_portal/app/services/accredited_representative_portal/representative_user_loader.rb), which sets the `current_user` to the ARP user. Most implementation details are in [this pull request](https://github.com/department-of-veterans-affairs/vets-api/pull/15944/files).
  - The [Form21aController](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/accredited_representative_portal/app/controllers/accredited_representative_portal/v0/form21a_controller.rb) and the [AccreditationService](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/accredited_representative_portal/app/services/accredited_representative_portal/accreditation_service.rb) handle user action errors, ensuring security requirements are met and user actions and errors are properly logged.
- **Representative User’s FormsInProgress**
  FormsInProgress records for RepresentativeUsers are sourced from a separate `vets-api` endpoint. See [AccreditedRepresentativePortal::V0::InProgressFormsController](https://github.com/department-of-veterans-affairs/vets-api/blob/7e1dcaa0bf3a779175730c29334c04f12d6c90c8/modules/accredited_representative_portal/app/controllers/accredited_representative_portal/v0/in_progress_forms_controller.rb) and the relevant [Pull Request](https://github.com/department-of-veterans-affairs/vets-api/pull/17805/files).
- **GCLAWS API Integration**
  - Requires sending `POST` requests to the GCLAWS API Form21as endpoint, external to `vets-api`.
  - An [ESECC networking request](https://esecc.va.gov/CGWeb/MainUI/Changemanagement/StaffRFC.aspx?boundtable=IChangeManagementTicket&CloseOnPerformAction=false&ID=14985&windowWidth=1050&openTime=1722017159558&refreshOnClose=true) currently blocks this functionality. See [ZH issue](https://app.zenhub.com/workspaces/accredited-representative-facing-team-65453a97a9cc36069a2ad1d6/issues/gh/department-of-veterans-affairs/va.gov-team/88288).
  - See code comments in [AccreditationService](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/accredited_representative_portal/app/services/accredited_representative_portal/accreditation_service.rb).
  - Relevant PRs for adding GCLAWS URLs to the secrets store:
    - [PR #2949](https://github.com/department-of-veterans-affairs/vsp-infra-application-manifests/pull/2949)
    - [PR #2951](https://github.com/department-of-veterans-affairs/vsp-infra-application-manifests/pull/2951)
    - [PR #2952](https://github.com/department-of-veterans-affairs/vsp-infra-application-manifests/pull/2952)

---

## Internal API Changes

### List new or modified APIs in `vets-api`

- Implemented a POST request to the GCLAWS API's `Form21as` endpoint.
- See [Form21aController](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/accredited_representative_portal/app/controllers/accredited_representative_portal/v0/form21a_controller.rb).

### Describe Internal API expected call patterns

- General description in the [ARP 21a Process Flow Diagram](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1726697613380/bb8c376ee4cd617105a8a70bc4e39e5418873da9?sender=u44da4f823ec94118a7079396).

---

## External API Changes

### List new or modified APIs for upstream or external systems

- Utilizing the GCLAWS API for form submissions.
- Swagger API documentation accessible within the VA network at [GCLAWS Swagger API](https://ogccotst1.dva.va.gov:4501/swagger/index.html).

### Describe External API expected call patterns

- General description in the [ARP 21a Process Flow Diagram](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1726697613380/bb8c376ee4cd617105a8a70bc4e39e5418873da9?sender=u44da4f823ec94118a7079396).

### What PII or PHI will be transmitted to/from the external systems?

- **PII Fields**:
  - `ICN`, `lastName`, `firstName`, `middleName`, `suffix`, `fullName`, `homePhone`, `homeEmail`, `birthDate`, `birthCity`, `birthState`, `birthCountry`, `signature`, `homeAddress`, `businessAddress`, `phoneNumber`, `supervisorName`, `supervisorEmail`, `employerName`, `characterReferences`.
  - ICN: the 21a ARP representative user's internal control number. [This canvas](https://dsva.slack.com/docs/T03FECE8V/F07MD0Q4G5R) provides more details on why the ICN is sent to GCLAWS along with accreditation requests.
- **PHI Fields**:
  - `impairmentsExplanation`, `physicalLimitationsExplanation`.

---

## Background Jobs

### List any required background processing

- No background jobs are required for ARP.

### Describe error and dead letter handling

- Not applicable, as there are no background jobs.

---

## Data Storage

### Describe new or modified databases, tables, or columns

- Only [`FormsInProgress`](https://github.com/department-of-veterans-affairs/vets-api/blob/7e1dcaa0bf3a779175730c29334c04f12d6c90c8/modules/accredited_representative_portal/app/controllers/accredited_representative_portal/v0/in_progress_forms_controller.rb#L1-L55) records for the 21a form are stored.

### Describe indexes and constraints

- No new indexes or constraints have been added.

### Identify PII and PHI and where and how it will be stored and processed

- Form21a PII data is only stored in the `vets-api` [`in_progress_forms` table](https://github.com/department-of-veterans-affairs/vets-api/blob/a42c775eed7c709d8777b144c4c69b8f4f2ebe71/db/schema.rb#L821-L835).

---

## Libraries and Dependencies

### List new or updated dependencies

- No new libraries or dependencies were added.

---

## Metrics, Logging, Observability, Alerting

### Identify key areas to monitor

- The `service_tag` `accredited-representative-portal` is used for Datadog monitoring.
  - Rack requests can be observed in staging.
  - References:
    - [ARP on Datadog](https://bit.ly/arp-datadog-monitoring)
    - [Service Tag in `vets-api`](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/accredited_representative_portal/app/controllers/accredited_representative_portal/application_controller.rb)
- ARF will harden monitoring and alerting closer to its production launch. See [GH issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/93276).
---

## Infrastructure and Network Changes

### List any changes or additions

- Sending POST requests to the GCLAWS API introduces a new network path for `vets-api`.
- Requires an ESECC networking request approval and a Memorandum of Understanding between GCLAWS and `vets-api`.
- References:
  - [ZenHub Issue](https://app.zenhub.com/workspaces/accredited-representative-facing-team-65453a97a9cc36069a2ad1d6/issues/gh/department-of-veterans-affairs/va.gov-team/88288)
  - [ESECC Request](https://esecc.va.gov/CGWeb/MainUI/Changemanagement/StaffRFC.aspx?boundtable=IChangeManagementTicket&CloseOnPerformAction=false&ID=14985&windowWidth=1050&openTime=1722017159558&refreshOnClose=true)

---

## Test Strategy

### Describe automated, manual, and user acceptance test strategy

- **Automated Testing**
  - Follows best practices.
    - [vets-api Specs](https://github.com/department-of-veterans-affairs/vets-api/tree/master/modules/accredited_representative_portal/spec)
    - [vets-website Tests](https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/applications/accredited-representative-portal/tests)
- **Manual Testing**
  - Conducted on [staging.va.gov/representative](https://staging.va.gov/representative):
    - Sign-in/Sign-out functionality
    - Form completion (submission currently blocked due to ESECC request)
    - Save-in-progress functionality

### Describe required test data and test user accounts

- Any `vets-api` user can test ARP functionality; no additional test data is required.

---

## Rollout Plan

### List scope of any feature flags

- Currently, enabled [ARP is only in staging](https://staging.va.gov/representative) and not accessible in production.
- Feature flags in Flipper:
  - `accredited_representative_portal_api`
  - `accredited_representative_portal_frontend`
  - `accredited_representative_portal_pilot`

### Identify other teams to coordinate with

- **Identity Team**
- **GCLAWS Team**

### Describe rollback plan

- The application will be rolled out after OGC users can process 21a applications.
- The GCLAWS Team is expected to develop the necessary OGC UI in the coming quarters.
- A detailed rollout plan will be formulated closer to that time.

---

## Internal Administration Tasks

### What maintenance or administration tasks do you anticipate will need to be performed periodically?

- No periodic maintenance or administration tasks are anticipated at this time.

### Describe how you intend for these tasks to be performed

- Not applicable.

---

## Security

### What questions do you have regarding items on the security checklist?

- **Static API Key Usage**
  - GCLAWS plans to provide a static API key for authorization.
  - Per the security checklist, we need to migrate to a solution compliant with OAuth 2.0 JWT standards.
  - Assistance from the Identity Team and buy-in from GCLAWS will be required.

### Are there any other security concerns about your project that you want to discuss?

- None were identified at this time.

### What threat modeling have you done, and how did the results influence your planned architecture?

- Threat modeling is planned for a future date, closer to the application's go-live, expected in several quarters.
