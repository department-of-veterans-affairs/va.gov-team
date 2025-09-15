# Products

The `products` directory contains information about the discovery, design, development, and deployment of all the **VA.gov and VA Health and Benefits (VAHB) mobile application user-facing** products.

- If you are looking for documentation on the tools and services provided by Platform, please see [/platform](../platform/README.md).
- If you are looking for information on the teams currently building on the platform, please see [teams](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/teams#readme)

## What is a Product?

A VA.gov or VAHB mobile app product is a tool or component that is directly interacted with by visitors to va.gov or the mobile app.  Products solve a user need, have an overall vision/mission and OKRs that are measurable. If you feel your product is not represented in the list below, please request assistance in [#vfs-platform-support](https://dsva.slack.com/channels/vfs-platform-support).

## Current product manifest

This manifest lists all VA.gov products that have product details YAML files.

### Statistics

- Total Products: 16
- Active Products: 16
- Categories: 3

### Health Care (2)

- [10-10D Application for CHAMPVA benefits](products/health-care/champva/1010D/10-10D-details.yml)
  - Status: 🟢 Active
  - Team: [ivc-forms](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/health-portfolio/ivc-forms/README.md)
  - [Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/1010D/10-10d-product-outline.md)
  - [Application code](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/ivc-champva/10-10D/manifest.json)
  - [GitHub Issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=is%3Aissue+label%3A10-10d)
  - [Staging URL](https://staging.va.gov/ivc-champva/10-10d-extended/)

- [10-7959C CHAMPVA Other Health Insurance Certification form](products/health-care/champva/10-7959c/10-7959c-details.yml)
  - Status: 🟢 Active
  - Team: [ivc-forms](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/health-portfolio/ivc-forms/README.md)
  - [Application code](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/ivc-champva/10-7959C/manifest.json)
  - [GitHub Issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=is%3Aissue+label%3A10-7959c)
  - [Production URL](https://www.va.gov/family-and-caregiver-benefits/health-and-disability/champva/submit-other-insurance-form-10-7959c/)
  - [Staging URL](https://staging.va.gov/family-and-caregiver-benefits/health-and-disability/champva/family-and-caregiver-benefits/health-and-disability/champva/submit-other-insurance-form-10-7959c)

### Platform & Infrastructure (2)

- [Forms System](products/platform/forms-system/forms-system-details.yml)
  - Status: 🟢 Active
  - Team: [design-forms-systems](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/digital-experience/design-forms-systems/README.md)
  - [Production URL](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/platform/forms-system)
  - [Metrics Dashboard](https://design.va.gov/about/metrics/)
  - [Project Board](https://github.com/orgs/department-of-veterans-affairs/projects/1643/views/1)

- [VA Design System (VADS)](products/platform/design-system/design-system-details.yml)
  - Status: 🟢 Active
  - Team: [design-forms-systems](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/digital-experience/design-forms-systems/README.md)
  - [Production URL](https://design.va.gov)
  - [Metrics Dashboard](https://design.va.gov/about/metrics/)
  - [Project Board](https://github.com/orgs/department-of-veterans-affairs/projects/1643/views/1)
  - [Research Repository](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues?q=is%3Aissue%20state%3Aopen%20DSC)

### Simple Forms (12)

- [Alternate signer certification (21-0972)](products/simple-forms/21-0972/21-0972-details.yml)
  - Status: 🟢 Active
  - Team: [design-forms-systems](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/digital-experience/design-forms-systems/README.md)
  - [Product Outline](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/blob/main/Forms/21-0972/21-0972-product-outline.md)
  - [Application code](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/simple-forms/21-0972/manifest.json)
  - [GitHub Issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=is%3Aissue+label%3A21-0972)
  - [Production URL](https://www.va.gov/alternate-signer-certification-form-21-0972)
  - [Staging URL](https://staging.va.gov/alternate-signer-certification-form-21-0972)
  - [Metrics Dashboard](https://vagov.ddog-gov.com/dashboard/ksx-spx-kfe/veteran-facing-forms-team-dashboard?fromUser=false&graphType=flamegraph&refresh_mode=sliding&shouldShowLegend=true&sort=time&from_ts=1755356931931&to_ts=1757948931931&live=true)
  - [Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/a9w-jhk-den/simple-forms-api?fromUser=false&refresh_mode=sliding&from_ts=1755356924127&to_ts=1757948924127&live=true)
  - [Project Board](https://github.com/orgs/department-of-veterans-affairs/projects/1643/views/1)

- [Application for Specially Adapted Housing or Special Home Adaptation Grant (26-4555)](products/simple-forms/26-4555/26-4555-details.yml)
  - Status: 🟢 Active
  - Team: [design-forms-systems](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/digital-experience/design-forms-systems/README.md)
  - [Product Outline](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/blob/main/Forms/26-4555/26-4555-product-outline.md)
  - [Application code](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/simple-forms/26-4555/manifest.json)
  - [GitHub Issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=is%3Aissue+label%3A26-4555)
  - [Production URL](https://www.va.gov/application-adapted-housing-form-26-4555)
  - [Staging URL](https://staging.va.gov/application-adapted-housing-form-26-4555)
  - [Metrics Dashboard](https://vagov.ddog-gov.com/dashboard/ksx-spx-kfe/veteran-facing-forms-team-dashboard?fromUser=false&graphType=flamegraph&refresh_mode=sliding&shouldShowLegend=true&sort=time&from_ts=1755356931931&to_ts=1757948931931&live=true)
  - [Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/a9w-jhk-den/simple-forms-api?fromUser=false&refresh_mode=sliding&from_ts=1755356924127&to_ts=1757948924127&live=true)
  - [Project Board](https://github.com/orgs/department-of-veterans-affairs/projects/1643/views/1)

- [Authorization for release of information (21-0845)](products/simple-forms/21-0845/21-0845-details.yml)
  - Status: 🟢 Active
  - Team: [design-forms-systems](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/digital-experience/design-forms-systems/README.md)
  - [Product Outline](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/blob/main/Forms/21-0845/21-0845-product-outline.md)
  - [Application code](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/simple-forms/21-0845/manifest.json)
  - [GitHub Issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=is%3Aissue+label%3A21-0845)
  - [Production URL](https://www.va.gov/authorization-for-release-of-information-form-21-0845)
  - [Staging URL](https://staging.va.gov/authorization-for-release-of-information-form-21-0845)
  - [Metrics Dashboard](https://vagov.ddog-gov.com/dashboard/ksx-spx-kfe/veteran-facing-forms-team-dashboard?fromUser=false&graphType=flamegraph&refresh_mode=sliding&shouldShowLegend=true&sort=time&from_ts=1755356931931&to_ts=1757948931931&live=true)
  - [Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/a9w-jhk-den/simple-forms-api?fromUser=false&refresh_mode=sliding&from_ts=1755356924127&to_ts=1757948924127&live=true)
  - [Project Board](https://github.com/orgs/department-of-veterans-affairs/projects/1643/views/1)

- [Authorization for release of medical information (21-4142)](products/simple-forms/21-4142/21-4142-details.yml)
  - Status: 🟢 Active
  - Team: [design-forms-systems](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/digital-experience/design-forms-systems/README.md)
  - [Product Outline](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/blob/main/Forms/21-4142/21-4142-product-outline.md)
  - [Application code](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/simple-forms/21-4142/manifest.json)
  - [GitHub Issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=is%3Aissue+label%3A21-4142)
  - [Production URL](https://www.va.gov/authorization-for-release-of-medical-information-form-21-4142)
  - [Staging URL](https://staging.va.gov/authorization-for-release-of-medical-information-form-21-4142)
  - [Metrics Dashboard](https://vagov.ddog-gov.com/dashboard/ksx-spx-kfe/veteran-facing-forms-team-dashboard?fromUser=false&graphType=flamegraph&refresh_mode=sliding&shouldShowLegend=true&sort=time&from_ts=1755356931931&to_ts=1757948931931&live=true)
  - [Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/a9w-jhk-den/simple-forms-api?fromUser=false&refresh_mode=sliding&from_ts=1755356924127&to_ts=1757948924127&live=true)
  - [Project Board](https://github.com/orgs/department-of-veterans-affairs/projects/1643/views/1)

- [Form upload tool](products/simple-forms/form-upload/form-upload-details.yml)
  - Status: 🟢 Active
  - Team: [design-forms-systems](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/digital-experience/design-forms-systems/README.md)
  - [Product Outline](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/blob/main/Forms/form-upload/form-upload-product-outline.md)
  - [Application code](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/simple-forms/form-upload/manifest.json)
  - [GitHub Issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=is%3Aissue+label%3Aform-upload)
  - [Production URL](https://va.gov/upload-form)
  - [Staging URL](https://staging.va.gov/upload-form)
  - [Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/fvg-irw-628/form-upload?fromUser=false&graphType=flamegraph&refresh_mode=sliding&shouldShowLegend=true&sort=time&spanID=1238785843163750371&spanViewType=errors&from_ts=1755270477372&to_ts=1757948877372&live=true)
  - [Project Board](https://github.com/orgs/department-of-veterans-affairs/projects/1643/views/1)

- [Intent to file a claim for compensation and/or pension (21-0966)](products/simple-forms/21-0966/21-0966-details.yml)
  - Status: 🟢 Active
  - Team: [design-forms-systems](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/digital-experience/design-forms-systems/README.md)
  - [Product Outline](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/blob/main/Forms/21-0966/21-0966-product-outline.md)
  - [Application code](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/simple-forms/21-0966/manifest.json)
  - [GitHub Issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=is%3Aissue+label%3A21-0966)
  - [Production URL](https://www.va.gov/intent-to-file-a-claim-form-21-0966)
  - [Staging URL](https://staging.va.gov/intent-to-file-a-claim-form-21-0966)
  - [Metrics Dashboard](https://vagov.ddog-gov.com/dashboard/ksx-spx-kfe/veteran-facing-forms-team-dashboard?fromUser=false&graphType=flamegraph&refresh_mode=sliding&shouldShowLegend=true&sort=time&from_ts=1755356931931&to_ts=1757948931931&live=true)
  - [Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/a9w-jhk-den/simple-forms-api?fromUser=false&refresh_mode=sliding&from_ts=1755356924127&to_ts=1757948924127&live=true)
  - [Project Board](https://github.com/orgs/department-of-veterans-affairs/projects/1643/views/1)

- [Lay/witness statement (21-10210)](products/simple-forms/21-10210/21-10210-details.yml)
  - Status: 🟢 Active
  - Team: [design-forms-systems](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/digital-experience/design-forms-systems/README.md)
  - [Product Outline](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/blob/main/Forms/21-10210/21-10210-product-outline.md)
  - [Application code](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/simple-forms/21-10210/manifest.json)
  - [GitHub Issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=is%3Aissue+label%3A21-10210)
  - [Production URL](https://www.va.gov/lay-witness-statement-form-21-10210)
  - [Staging URL](https://staging.va.gov/lay-witness-statement-form-21-10210)
  - [Metrics Dashboard](https://vagov.ddog-gov.com/dashboard/ksx-spx-kfe/veteran-facing-forms-team-dashboard?fromUser=false&graphType=flamegraph&refresh_mode=sliding&shouldShowLegend=true&sort=time&from_ts=1755356931931&to_ts=1757948931931&live=true)
  - [Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/a9w-jhk-den/simple-forms-api?fromUser=false&refresh_mode=sliding&from_ts=1755356924127&to_ts=1757948924127&live=true)
  - [Project Board](https://github.com/orgs/department-of-veterans-affairs/projects/1643/views/1)

- [Request for headstone or marker (40-0247)](products/simple-forms/40-0247/40-0247-details.yml)
  - Status: 🟢 Active
  - Team: [design-forms-systems](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/digital-experience/design-forms-systems/README.md)
  - [Product Outline](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/blob/main/Forms/40-0247/40-0247-product-outline.md)
  - [Application code](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/simple-forms/40-0247/manifest.json)
  - [GitHub Issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=is%3Aissue+label%3A40-0247)
  - [Production URL](https://www.va.gov/request-headstone-marker-form-40-0247)
  - [Staging URL](https://staging.va.gov/request-headstone-marker-form-40-0247)
  - [Metrics Dashboard](https://vagov.ddog-gov.com/dashboard/ksx-spx-kfe/veteran-facing-forms-team-dashboard?fromUser=false&graphType=flamegraph&refresh_mode=sliding&shouldShowLegend=true&sort=time&from_ts=1755356931931&to_ts=1757948931931&live=true)
  - [Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/a9w-jhk-den/simple-forms-api?fromUser=false&refresh_mode=sliding&from_ts=1755356924127&to_ts=1757948924127&live=true)
  - [Project Board](https://github.com/orgs/department-of-veterans-affairs/projects/1643/views/1)

- [Request for personal records (20-10206)](products/simple-forms/20-10206/20-10206-details.yml)
  - Status: 🟢 Active
  - Team: [design-forms-systems](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/digital-experience/design-forms-systems/README.md)
  - [Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/simple-forms/20-10206/20-10206-product-outline.md)
  - [Application code](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/simple-forms/20-10206/manifest.json)
  - [GitHub Issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=is%3Aissue+label%3A20-10206)
  - [Production URL](https://www.va.gov/request-personal-records-form-20-10206)
  - [Staging URL](https://staging.va.gov/request-personal-records-form-20-10206)
  - [Metrics Dashboard](https://vagov.ddog-gov.com/dashboard/ksx-spx-kfe/veteran-facing-forms-team-dashboard?fromUser=false&graphType=flamegraph&refresh_mode=sliding&shouldShowLegend=true&sort=time&from_ts=1755356931931&to_ts=1757948931931&live=true)
  - [Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/a9w-jhk-den/simple-forms-api?fromUser=false&refresh_mode=sliding&from_ts=1755356924127&to_ts=1757948924127&live=true)
  - [Project Board](https://github.com/orgs/department-of-veterans-affairs/projects/1643/views/1)

- [Request for priority processing (20-10207)](products/simple-forms/20-10207/20-10207-details.yml)
  - Status: 🟢 Active
  - Team: [design-forms-systems](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/digital-experience/design-forms-systems/README.md)
  - [Product Outline](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/blob/main/Forms/20-10207/20-10207-product-outline.md)
  - [Application code](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/simple-forms/20-10207/manifest.json)
  - [GitHub Issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=is%3Aissue+label%3A20-10207)
  - [Production URL](https://www.va.gov/request-priority-processing-form-20-10207)
  - [Staging URL](https://staging.va.gov/request-priority-processing-form-20-10207)
  - [Metrics Dashboard](https://vagov.ddog-gov.com/dashboard/ksx-spx-kfe/veteran-facing-forms-team-dashboard?fromUser=false&graphType=flamegraph&refresh_mode=sliding&shouldShowLegend=true&sort=time&from_ts=1755356931931&to_ts=1757948931931&live=true)
  - [Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/a9w-jhk-den/simple-forms-api?fromUser=false&refresh_mode=sliding&from_ts=1755356924127&to_ts=1757948924127&live=true)
  - [Project Board](https://github.com/orgs/department-of-veterans-affairs/projects/1643/views/1)

- [Request to be substitute claimant (21P-0847)](products/simple-forms/21P-0847/21P-0847-details.yml)
  - Status: 🟢 Active
  - Team: [design-forms-systems](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/digital-experience/design-forms-systems/README.md)
  - [Product Outline](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/blob/main/Forms/21P-0847/21P-0847-product-outline.md)
  - [Application code](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/simple-forms/21P-0847/manifest.json)
  - [GitHub Issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=is%3Aissue+label%3A21P-0847)
  - [Production URL](https://www.va.gov/request-substitute-claimant-form-21p-0847)
  - [Staging URL](https://staging.va.gov/request-substitute-claimant-form-21p-0847)
  - [Metrics Dashboard](https://vagov.ddog-gov.com/dashboard/ksx-spx-kfe/veteran-facing-forms-team-dashboard?fromUser=false&graphType=flamegraph&refresh_mode=sliding&shouldShowLegend=true&sort=time&from_ts=1755356931931&to_ts=1757948931931&live=true)
  - [Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/a9w-jhk-den/simple-forms-api?fromUser=false&refresh_mode=sliding&from_ts=1755356924127&to_ts=1757948924127&live=true)
  - [Project Board](https://github.com/orgs/department-of-veterans-affairs/projects/1643/views/1)

- [Statement in support of claim (21-4138)](products/simple-forms/21-4138/21-4138-details.yml)
  - Status: 🟢 Active
  - Team: [design-forms-systems](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/digital-experience/design-forms-systems/README.md)
  - [Product Outline](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/blob/main/Forms/21-4138/21-4138-product-outline.md)
  - [Application code](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/simple-forms/21-4138/manifest.json)
  - [GitHub Issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=is%3Aissue+label%3A21-4138)
  - [Production URL](https://www.va.gov/supporting-forms-for-claims/submit-statement-form-21-4138)
  - [Staging URL](https://staging.va.gov/supporting-forms-for-claims/submit-statement-form-21-4138)
  - [Metrics Dashboard](https://vagov.ddog-gov.com/dashboard/ksx-spx-kfe/veteran-facing-forms-team-dashboard?fromUser=false&graphType=flamegraph&refresh_mode=sliding&shouldShowLegend=true&sort=time&from_ts=1755356931931&to_ts=1757948931931&live=true)
  - [Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/a9w-jhk-den/simple-forms-api?fromUser=false&refresh_mode=sliding&from_ts=1755356924127&to_ts=1757948924127&live=true)
  - [Project Board](https://github.com/orgs/department-of-veterans-affairs/projects/1643/views/1)

---
<details>
<summary><h2>Archive: Previous Product Organization</h2></summary>

This section contains the previous way products were organized and documented. This is kept for historical reference and will be maintained as an archive.

## Our Products

### Benefit Applications and Tools

- [Benefit letters](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/benefit-letters)
- [Burials and memorials](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/burials-memorials)
- [Claim and appeal status](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/claim-appeal-status)
- [Decision Reviews](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/decision-reviews)
- [Disability and DIC](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/disability)
- [Discharge upgrade](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/discharge-upgrade)
- [Education, training and career](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/education-careers)
- [Health care](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care)
- [Housing assistance](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/housing)
- [Life insurance](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/life-insurance)
- [Medical Device Tool](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/medical-device-tool)
- [Pension](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/pension)
- [VA payment history]()
- [Veteran ID cards](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/veteran-id-cards)
- [Veteran military records](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/veteran-military-records)

### Core Content

- [Audience hubs](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/content/audience-hubs)
- [Benefit hubs](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/content/benefit-hubs)
- [Spanish translations](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/content/spanish-translation)

### Facilities

- [Facility locator](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator)
- [Medical facility sites (VAMCs and Clinics)](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/medical-centers)
- [Vet Centers](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/vet-centers)

### Global Site Elements

- [Banners](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/global/banners)
- [Contact us](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/global/contact-us)
- [Crisis line](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/global/crisis-line)
- [Global form features](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/global/global-form-features)
- [Home page](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/global/home-page)
- [Menus and navigation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/global/menus-navigation)
- [Search](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/global/search)

### User Identity and Personalization

- [Account and profile](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/account-profile)
- [Change address](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/contact-information)
- [Dashboard](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/dashboard)
- [Direct deposit](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/direct-deposit)
- [Sign in and authentication]([https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/login](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity))
- [User notifications](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/notifications)

### VA Content and Features

- [Media library](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/media-library)
- [Office and administration sites](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/office-administration)

</details>

*Last updated: 2025-09-15 11:17:32*
