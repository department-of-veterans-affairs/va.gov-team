# Combined VA Debt Portal - Use Cases

**Last updated:** 5/31/2022

**Description:** Track and maintain the various use cases that exist for a given product and is
best maintained alongside the product outline.

**Purpose:** The purpose of this document is for designers, PMs, and engineers to align
early on on potential use cases and edge cases so these things aren't coming up
randomly and late in the process. We recommend the team schedule a 30 minute
meeting to brainstorm all use cases/edge cases early on. Examples of cases that
could be captured here include: "Veteran logs in but is not LOA3ed.", "Veteran
searches and gets no results.", etc.


**Useful Links:**
- Product Folder
- Product Outline
- Designs

## On this page

<details>
<summary>[click to expand/collapse a short list of all use cases]</summary>
  
- [Use Case A - Veteran only has a debt](#use-case-a---TBD)
- [Use Case B - Veteran only has a copay bill](#use-case-b---TBD)
- [Use Case C - Veteran has neither a copay bill nor a debt](#use-case-c---TBD)
- [Use Case D - Veteran is not enrolled in healthcare](#use-case-d---TBD)
- [Use Case E - Veteran has both a copay bill and debt](#use-case-e---TBD)

</details>

## Use Case A -  Veteran only has a debt

- **Description:** A veteran wants to understand what their debt is via the combined debt portal and see if they can resolve it online.

- **Instructions to access in Staging** 
	- login via user `vets.gov.user+81@gmail.com` (NAME)
	- Passwords stored in [MVI Staging Users doc][mvi-staging-users] \(private repo\)
	- Navigate to the [Combined Debt Portal](https://staging.va.gov/manage-va-debt/) on staging
	- Click 'Manage your VA debt' button on the page


- **Link to designs**
  - [Overview page](https://preview.uxpin.com/29cd8f525781fa231d16f5b50905ad15a99cbf01#/pages/149492808/simulate/no-panels?mode=i)
  - [Debt details](https://preview.uxpin.com/29cd8f525781fa231d16f5b50905ad15a99cbf01#/pages/148546854/simulate/no-panels?mode=i)

## Use Case B - Veteran only has a copay bill
- **Description:** A Veteran is interested in viewing their medical copay bill on the combined debt portal and see if they can resolve it online.

- **Instructions to access in Staging** 
	- `vets.gov.user+80@gmail.com` (NAME)
	- Passwords stored in [MVI Staging Users doc][mvi-staging-users] \(private repo\)
	- Navigate to the [Combined Debt Portal](https://staging.va.gov/manage-va-debt/) on staging
	- Click 'Manage your VA debt' button on the page

- **Link to designs**
  - [Overview page](https://preview.uxpin.com/29cd8f525781fa231d16f5b50905ad15a99cbf01#/pages/149492807/simulate/no-panels?mode=i)
  - [Copay details](https://preview.uxpin.com/29cd8f525781fa231d16f5b50905ad15a99cbf01#/pages/148559873/simulate/no-panels?mode=i)


## Use Case C - Veteran has neither a copay bill nor debt

- **Description:** Veteran is just curious to see if they have any active VA debts or copay bills.

- **Instructions to access in Staging** 
	- `vets.gov.user+56@gmail.com` (NAME)
	- Passwords stored in [MVI Staging Users doc][mvi-staging-users] \(private repo\)
	- Navigate to the [Combined Debt Portal](https://staging.va.gov/manage-va-debt/) on staging
	- Click 'Manage your VA debt' button on the page

- **Link to designs**
  - [Overview page](https://preview.uxpin.com/29cd8f525781fa231d16f5b50905ad15a99cbf01#/pages/149492806/simulate/no-panels?mode=i)
  - [Debt details](https://preview.uxpin.com/29cd8f525781fa231d16f5b50905ad15a99cbf01#/pages/149534493/simulate/no-panels?mode=i)
  - [Copay details](https://preview.uxpin.com/29cd8f525781fa231d16f5b50905ad15a99cbf01#/pages/149285598/simulate/no-panels?mode=i)


## Use Case D - Veteran is not enrolled in healthcare

- **Description:** Veteran is not enrolled in healthcare.

- **Instructions to access in Staging** 
	- `vets.gov.user+3@gmail.com` (NAME)
	- Passwords stored in [MVI Staging Users doc][mvi-staging-users] \(private repo\)
	- Navigate to the [Combined Debt Portal](https://staging.va.gov/manage-va-debt/) on staging

- **Link to designs**
**Note:** The design linked pertains to the Medical Copay Tool's MVP. The alert should remain the same within the combined debt portal.
  - [Overview page](https://preview.uxpin.com/16e8675a9898914d5615d6ea2d23e310b7d8dfaa#/pages/141468871/simulate/no-panels?mode=i)

## Use Case E - Veteran has both a copay bill and debt

- **Description:** Veteran has both a VA debt and a medical copay they would like to view and manage.

- **Instructions to access in Staging** 
	- `vets.gov.user+81@gmail.com` ("Travis")
	- Passwords stored in [MVI Staging Users doc][mvi-staging-users] \(private repo\)
	- Navigate to the [Combined Debt Portal](https://staging.va.gov/manage-va-debt/) on staging
	- Click 'Manage your VA debt' button on the page

- **Link to designs**
  - [Overview page](https://preview.uxpin.com/29cd8f525781fa231d16f5b50905ad15a99cbf01#/pages/148519709/simulate/no-panels?mode=i)


### Notes

- We also have error states for:
	- VHA 404's 
		- [Debt and Bills Overview page](https://preview.uxpin.com/29cd8f525781fa231d16f5b50905ad15a99cbf01#/pages/149503316/specification/sitemap?mode=i)
		- [Debt list page](https://preview.uxpin.com/29cd8f525781fa231d16f5b50905ad15a99cbf01#/pages/149376498/specification/sitemap?mode=i)
		- [Copay balance list](https://preview.uxpin.com/29cd8f525781fa231d16f5b50905ad15a99cbf01#/pages/149423132/specification/sitemap?mode=i)
	- VBA 404's
		- [Debt and Bills Overview page](https://preview.uxpin.com/29cd8f525781fa231d16f5b50905ad15a99cbf01#/pages/149503317/simulate/sitemap?mode=i)
		- [Debt list page](https://preview.uxpin.com/29cd8f525781fa231d16f5b50905ad15a99cbf01#/pages/149376499/simulate/sitemap?mode=i)
		- [Copay balance list](https://preview.uxpin.com/29cd8f525781fa231d16f5b50905ad15a99cbf01#/pages/149423131/simulate/sitemap?mode=i)
- And empty states as well:
	- [Empty State: no debts or bills](https://preview.uxpin.com/29cd8f525781fa231d16f5b50905ad15a99cbf01#/pages/149492806/simulate/sitemap?mode=i)
	- [Empty state: copays, but no debts](https://preview.uxpin.com/29cd8f525781fa231d16f5b50905ad15a99cbf01#/pages/149492807/simulate/sitemap?mode=i)
	- [Empty state: debts, but no copays](https://preview.uxpin.com/29cd8f525781fa231d16f5b50905ad15a99cbf01#/pages/149492808/simulate/sitemap?mode=i) 

- There are content difference between one facility or multiple facilities when it comes to medical copays, so just something to keep an eye out for:
	- [1 facility](https://preview.uxpin.com/29cd8f525781fa231d16f5b50905ad15a99cbf01#/pages/148524983/simulate/sitemap?mode=i)
	- [Multiple facilities](https://preview.uxpin.com/29cd8f525781fa231d16f5b50905ad15a99cbf01#/pages/148559873/simulate/sitemap?mode=i)
