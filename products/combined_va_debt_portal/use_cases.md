# Combined VA Debt Portal - Use Case Overview

**Last updated:** 11/25/2025

This document is a centralized starting point for all use cases related to the Combined VA Debt Portal. It is intended for product, design, engineering, policy, and stakeholder teams who need to understand how Veterans and agents interact with VA debt tools and services.

When starting or evolving a product, we recommend scheduling a 30‑minute working session (as needed) to brainstorm use cases and edge cases and capture them here for ongoing clarity. Examples include: “Veteran logs in but is not LOA3 verified” and “Veteran searches and gets no results.”

## Use case documents
- Combined VA Debt Portal use case index and details
  - See: [Debt/Copay – Use Cases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_va_debt_portal/debt-copay_use_cases.md)
- Financial Status Report (FSR) use cases (subset of the portal flows)
  - See: [Financial Status Report – Use Cases
](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/Financial-Status-Report/fsr-use-cases.md)
- Pay.gov use cases
  - TBD   

## Scope
These documents focus on:
  - End-to-end user flows related to viewing, understanding, and resolving VA debts within the Combined VA Debt Portal.
  - Shared patterns and cross-cutting flows (navigation, authentication, error handling) that span multiple debt tools.
  - Product-specific flows (like FSR) that plug into the portal, documented in their own sub-pages but linked from this overview.

If you are adding a new debt-related feature or product, please:
  - Add the new use cases to the Combined VA Debt Portal index, and
  - Create a dedicated product-specific use case doc if needed, then link it here under “Use case documents.”

## Staging URLS
Product  | Staging URL |
|--|--|
| Combined Debt Portal| https://staging.va.gov/manage-va-debt/summary|
| Benefit Overpayment Debts |https://staging.va.gov/manage-va-debt/summary/debt-balances
| Current Copay Balances |https://staging.va.gov/manage-va-debt/summary/copay-balances
|FSR| https://staging.va.gov/manage-va-debt/request-debt-help-form-5655/introduction|
|Digital Dispute| https://staging.va.gov/manage-va-debt/dispute-debt/introduction|
<br/>

**Useful Links:**
- [Product Folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/combined_va_debt_portal)
- [Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_va_debt_portal/product_outline.md)
- [Designs](https://www.figma.com/design/OiiDTTVTCf8j0GngRg0xxD/VA-Debt-Portal?m=auto&t=YSdPMSoyDrlyv5kI-6)
- [Mockdata](https://github.com/department-of-veterans-affairs/vets-api-mockdata/blob/master/mock_data_table.md) - Pertains to both local and staging. If local data seems out of synch with staging, then review your local version to see if unpublished changes have been made in your env.
- [Staging User List](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_va_debt_portal/staging-users-debtproducts.md)
- [Debt/Copay Anatomy](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/benefits-portfolio/benefits-memorials-2/engineering/back-end/architecture/debt-and-copay-anatomy.md)
