# MHV CTA Widgets

**Product Overview / MHV on VA.gov**

---

## I. Background & Context

The VA places "widgets" (React applications) on unauthenticated pages to tell users to log in before they can see a link to applications that would require them to log in to use. The My HealtheVet (MHV) Call-to-action (CTA) serve this purpose for the MHV-on-VA.gov applications.

OCTO stakeholders asked us to implement changes to widgets that appear on unauthenticated health-care pages on VA.gov in early 2024. The deprecation of an "MHV login" and other changes related to the migration of MHV tools to VA.gov resulted in needed changes to the widgets, and at the time, ownership of the larger widget codebase was in limbo. Since Cartographers were close to the MHV migration, we were asked to make the changes in lieu of a code owner.

## II. Key Stakeholders & Roles

- **OCTO:** N/A
- **Identity team:** CTA widget codeowners, [OCTO Identity Team](https://github.com/orgs/department-of-veterans-affairs/teams/octo-identity), \[Email\]
- **MHV Cartographers:** Product development, [Cartography team](https://github.com/orgs/department-of-veterans-affairs/teams/vfs-mhv-integration), \[Email\]
- **CAIA / Drupal content:** Owns static content pages and integration with widgets with Drupal, ???, \[Email\]

## III. Product Summary

### Key Features:

These "widgets" are React applications that live within the parent `static-pages` application in `vets-website`.

The MHV CTA Widgets(s) were created to 1. replace existing outdated widgets used on unauth health care pages and 2. make a more flexible widget that could be used across those pages. On that second point, the attempt to have a more flexible, modern widget was abandoned when we were told the Drupal system would not be updated to allow this change.

The code for the original flexible widget, `mhv-signin-cta`, exists, but all MHV CTA widgets used in Drupal also have to have individual entries in `health-care-manage-benefits`. The new widgets are prefixed with `MODERN_`, e.g. `MODERN_ORDER_MEDICAL_SUPPLIES_PAGE`,. The legacy widgets were defined in the sitewide `cta-widget`, and there is still code in that widget that references MHV, but that code is related to around 20 non-MHV widgets and is (as of Jun 2025) owned by the OCTO Identity team.

### Architecture Overview:

Multiple small react applications that, use the `/v0/user` data to show an alert depending on if the user is 1. not logged in or 2. not LOA3. Since fetching user profile data is part of the `commonReducer` provided by the `platform/startup`, the MHV applications don't have to make any API calls, they just look at Redux state (also set up by the platform code).

### Upstream Service Map & Contacts List

These applications rely on `vets-api`, which is not an upstream service.

## IV. Solution Artifacts


- **Code Repo:** Within `vets-website`, [mhv-signin-cta](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/static-pages/mhv-signin-cta), [mhv-simple-signin-cta](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/static-pages/mhv-simple-signin-cta) [health-care-manage-benefits widgets](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/static-pages/health-care-manage-benefits)
- **Design File:** [Figma - MHV MHV-Account-Security---Access-Standards](https://www.figma.com/design/m992k2m1DSl9MXV9hDytsQ/MHV-Account-Security---Access-Standards?node-id=58-3)
- **Research Folder:** Not applicable
- **Dashboard(s)**: Not applicable
- **Analytics Folder:** Not applicable
- **Test Users / Credentials:** Not applicable. Widgets are used on unauthenticated pages. Changing widgets or using new widgets requires coordination with Drupal content managers


## V. Future Recommendations

If the Drupal implementation were updated, the [reusable widget pattern](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/static-pages/mhv-signin-cta/README.md) would make it for content folks to make custom sign-in widgets, and would reduce the overall complexity of widgets. This would require buy-in from technical folks who manage the Drupal system.
