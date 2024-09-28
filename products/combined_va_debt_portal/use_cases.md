# Combined VA Debt Portal - Use Cases

**Last updated:** 9/18/2024

**Description:** Track and maintain the various use cases that exist for a given product and is
best maintained alongside the product outline.

**Purpose:** The purpose of this document is for designers, PMs, and engineers to align
early on on potential use cases and edge cases so these things aren't coming up
randomly and late in the process. We recommend the team schedule a 30 minute
meeting to brainstorm all use cases/edge cases early on. Examples of cases that
could be captured here include: "Veteran logs in but is not LOA3ed.", "Veteran
searches and gets no results.", etc.


**Useful Links:**
- [Product Folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/combined_va_debt_portal)
- [Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_va_debt_portal/product_outline.md)
- [Designs](https://www.figma.com/design/OiiDTTVTCf8j0GngRg0xxD/VA-Debt-Portal?m=auto&t=YSdPMSoyDrlyv5kI-6)

## On this page

<details>
<summary>[click to expand/collapse a short list of all use cases]</summary>
  
- [Use Case A - Veteran only has a debt](#use-case-a----veteran-only-has-a-debt)
- [Use Case B - Veteran only has a copay bill](#use-case-b---veteran-only-has-a-copay-bill)
- [Use Case C - Veteran has neither a copay bill nor a debt](#use-case-c---veteran-has-neither-a-copay-bill-nor-debt)
- [Use Case D - Veteran is not enrolled in healthcare](#use-case-d---veteran-is-not-enrolled-in-healthcare)
- [Use Case E - Veteran has both a copay bill and debt](#use-case-e---veteran-has-both-a-copay-bill-and-debt)
- [Notes - Additional error states, 404s, and variations](#notes)

</details>

## Use Case A -  Veteran only has debt

- **Description:** A veteran wants to understand what their debt is via the combined debt portal and see if they can resolve it online.

- **Instructions to access in Staging** 
	- login via user `vets.gov.user+56@gmail.com` (Shirley)
	- Passwords stored in [MVI Staging Users doc][mvi-staging-users] \(private repo\)
	- Navigate to the [Combined Debt Portal](https://staging.va.gov/manage-va-debt/summary) on staging
	- Click 'Check the status and resolve your debt' link under 'Debt and bill overview' section


- **Link to designs**
  - [Overview page](https://www.figma.com/design/OiiDTTVTCf8j0GngRg0xxD/VA-Debt-Portal?node-id=0-6496&t=ficcn3769sddvIHw-1)
  - [Overpayment summary page](https://www.figma.com/design/OiiDTTVTCf8j0GngRg0xxD/VA-Debt-Portal?node-id=0-7496&t=3ws7FSCSqmCcwNU8-1)
    
    *The Overpayment detail page shows payment history table:
  - [Overpayment detail page](https://www.figma.com/design/OiiDTTVTCf8j0GngRg0xxD/VA-Debt-Portal?node-id=1963-16864&t=3ws7FSCSqmCcwNU8-1)

## Use Case B - Veteran only has a copay bill
- **Description:** A Veteran is interested in viewing their medical copay bill on the combined debt portal and see if they can resolve it online.

- **Instructions to access in Staging** 
	- `vets.gov.user+14@gmail.com` (Jerry)
	- Passwords stored in [MVI Staging Users doc][mvi-staging-users] \(private repo\)
	- Navigate to the [Combined Debt Portal](https://staging.va.gov/manage-va-debt/summary) on staging
	- Click 'Check your balance and resolve your bill' link under 'Debt and bill overview' section

- **Link to designs**
  - [Overview page](https://www.figma.com/design/OiiDTTVTCf8j0GngRg0xxD/VA-Debt-Portal?node-id=0-6637&t=aD5Zk8601sDJZSlO-1)
  - [Copay summary page](https://www.figma.com/design/OiiDTTVTCf8j0GngRg0xxD/VA-Debt-Portal?node-id=113-14117&t=3ws7FSCSqmCcwNU8-1)


## Use Case C - Veteran has neither a copay bill nor debt

- **Description:** Veteran is just curious to see if they have any active VA debts or copay bills.

- **Instructions to access in Staging** 
	- login via user `vets.gov.user+38@gmail.com` (Pauline)
	- Passwords stored in [MVI Staging Users doc][mvi-staging-users] \(private repo\)
	- Navigate to the [Combined Debt Portal](https://staging.va.gov/manage-va-debt/summary) on staging to view combined portal
	- Navigate to the [Debt Details](https://staging.va.gov/manage-va-debt/summarydebt-balances) on staging to view debt details page with alert
	- Navigate to the [Copay Details](https://staging.va.gov/manage-va-debt/summarycopay-balances) on staging to view copay details page with alert

- **Link to designs**
  - [Overview page](https://www.figma.com/design/OiiDTTVTCf8j0GngRg0xxD/VA-Debt-Portal?node-id=0-6778&t=3ws7FSCSqmCcwNU8-1)
  - [Debt details](https://www.figma.com/design/OiiDTTVTCf8j0GngRg0xxD/VA-Debt-Portal?node-id=0-8679&t=aLJ9Qek5E92Qj4dA-1)
  - [Copay details](https://www.figma.com/design/OiiDTTVTCf8j0GngRg0xxD/VA-Debt-Portal?node-id=113-15391&t=aLJ9Qek5E92Qj4dA-1)


## Use Case D - Veteran is not enrolled in healthcare

- **Description:** Veteran is not enrolled in healthcare.

- **Instructions to access in Staging** 
	- `vets.gov.user+3@gmail.com` (Kenneth)
	- Passwords stored in [MVI Staging Users doc][mvi-staging-users] \(private repo\)
	- Navigate to the [Combined Debt Portal](https://staging.va.gov/manage-va-debt/summary) on staging

- **Link to designs**
  - [Overview page](https://www.figma.com/design/OiiDTTVTCf8j0GngRg0xxD/VA-Debt-Portal?node-id=3634-33929&t=3ws7FSCSqmCcwNU8-1)

## Use Case E - Veteran has both a copay bill and debt

- **Description:** Veteran has both a VA debt and a medical copay they would like to view and manage.

- **Instructions to access in Staging** 
	- `vets.gov.user+81@gmail.com` ("Travis")
	- Passwords stored in [MVI Staging Users doc][mvi-staging-users] \(private repo\)
	- Navigate to the [Combined Debt Portal](https://staging.va.gov/manage-va-debt/summary) on staging

- **Link to designs**
  - [Overview page](https://www.figma.com/design/OiiDTTVTCf8j0GngRg0xxD/VA-Debt-Portal?node-id=640-6848&t=3ws7FSCSqmCcwNU8-1)


### Notes

- We also have error states for:
	- VHA 404's 
		- [Debt and Bills Overview page](https://www.figma.com/design/OiiDTTVTCf8j0GngRg0xxD/VA-Debt-Portal?node-id=0-7312&t=3ws7FSCSqmCcwNU8-1)
		- [Debt list page](https://www.figma.com/design/OiiDTTVTCf8j0GngRg0xxD/VA-Debt-Portal?node-id=0-9083&t=3ws7FSCSqmCcwNU8-1)
		- [Copay balance list](https://www.figma.com/design/OiiDTTVTCf8j0GngRg0xxD/VA-Debt-Portal?node-id=113-15946&t=3ws7FSCSqmCcwNU8-1)
	- VBA 404's
		- [Debt and Bills Overview page](https://www.figma.com/design/OiiDTTVTCf8j0GngRg0xxD/VA-Debt-Portal?node-id=0-7169&t=3ws7FSCSqmCcwNU8-1)
		- [Debt list page](https://www.figma.com/design/OiiDTTVTCf8j0GngRg0xxD/VA-Debt-Portal?node-id=0-8812&t=3ws7FSCSqmCcwNU8-1)
		- [Copay balance list](https://www.figma.com/design/OiiDTTVTCf8j0GngRg0xxD/VA-Debt-Portal?node-id=113-16168&t=3ws7FSCSqmCcwNU8-1)
- And empty states as well:
	- [Empty State: no debts or bills](https://www.figma.com/design/OiiDTTVTCf8j0GngRg0xxD/VA-Debt-Portal?node-id=0-6778&t=3ws7FSCSqmCcwNU8-1)
	- [Empty state: copays, but no debts](https://www.figma.com/design/OiiDTTVTCf8j0GngRg0xxD/VA-Debt-Portal?node-id=0-6496&t=3ws7FSCSqmCcwNU8-1)
	- [Empty state: debts, but no copays](https://www.figma.com/design/OiiDTTVTCf8j0GngRg0xxD/VA-Debt-Portal?node-id=0-6637&t=3ws7FSCSqmCcwNU8-1) 

- There are content difference between one facility or multiple facilities when it comes to medical copays, so just something to keep an eye out for:
	- [1 facility](https://www.figma.com/design/OiiDTTVTCf8j0GngRg0xxD/VA-Debt-Portal?node-id=113-14117&t=XTu5oLFOMxbg9hSZ-1)
	- [Multiple facilities](https://www.figma.com/design/OiiDTTVTCf8j0GngRg0xxD/VA-Debt-Portal?node-id=113-14529&t=XTu5oLFOMxbg9hSZ-1)
