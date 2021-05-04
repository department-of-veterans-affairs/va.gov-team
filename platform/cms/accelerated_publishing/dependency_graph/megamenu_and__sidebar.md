
> Discover and document how sidebar menus are built, and document under what conditions a rebuild should be triggered for all pages referenced from a given sidebar menu

@ncksllvn documented this in https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/accelerated_publishing/content-build/menus-widgets-apis.md#the-megamenu.  I'm going to use this instead of testing from scratch to document the relationship to Drupal content.

Data which drives the MegaMenu:
* `menu_link` entities in the `header-megamenu` menu. 
* The `menu_link` bundle for the `header-megamenu` has a reference field (`field_promo_reference`) to `Promo` block type.   Updates to these block types must also be watched
* The `promo` block type has a reference field to media.  Any media updated which is linked to a `promo` block type must also be watched.

VAMC Sidebar
* Menu links from menus hardcoded in https://github.com/department-of-veterans-affairs/vets-website/blob/900b03495c07dbcf470cbd464d568f2229c8d3bc/src/site/stages/build/drupal/graphql/navigation-fragments/facilitySidebar.nav.graphql.js.
* The menu is selected based upon the name of the menu and the label of the referenced entity from the `field_office` reference field on a `health_care_region_page` content type.
