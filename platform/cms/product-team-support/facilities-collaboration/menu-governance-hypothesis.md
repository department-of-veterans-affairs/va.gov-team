# VAMC Menu governance hypothesis 

See https://github.com/department-of-veterans-affairs/va.gov-cms/issues/2427 for some backround.

*   It’s too easy to make major changes to the menu structure and IA of VAMC system product 
*   It’s too easy to make unintended IA errors, even for well-trained CMS users
*   The FE menu graphql and liquid templates are highly reliant on a stable menu structure, and choke when the IA is wrong. This reveals content bugs, but those content bugs shouldn’t exist in the first place. 

The following artifacts were considered.

*   the [Moqup](https://app.moqups.com/Rnc4BDEKrA/view/page/a9e1a59e9) containing the original IA design done for Pittsburgh 
*   existing menu structure from [VA Pittsburgh](http://va-gov-cms.lndo.site/admin/structure/menu/manage/pittsburgh-health-care?destination=/admin/structure/menu), [Erie](http://va-gov-cms.lndo.site/admin/structure/menu/manage/va-erie-health-care), [Coatesville](http://va-gov-cms.lndo.site/admin/structure/menu/manage/va-coatesville-health-care?), Eastern Colorado, Eastern Oklahoma
*   [An analysis of IA design combined with CMS configuration](https://docs.google.com/spreadsheets/d/14Mp6KpBB2wLM-xU4ypf9ZRJlYTjdufFI1drP4ygo_xo/edit#gid=839797890) (google docs)
*   [Issues in va.gov-team tagged with “ia” and “vsa-facilities”](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/board?labels=ia,vsa-facilities&repos=133843125) (link to Zenhub)

What was not considered



*   Any input from VAMC upgrade team about patterns or intentional IA drift that has arisen, such as where to put DAV vans


## Opportunity set A


### Opportunity 1: Lock down menu editing for all VAMC content types other than Detail pages

Per the IA design, non-content admin editors of VAMC system content (eg PAOs, etc) only need to be able to edit menu items for “Detail Pages”.

They do not need to edit menu items for any other content types.

The CMS team could lock down editing permissions and IA for all VAMC-enabled content types other than Detail page. Only users with the Content Admin role could manipulate menu items (and perform “scaffolding” tasks like setting up a new VAMC). 


### Opportunity 2: Consider the ability of locking down some Detail Page node menu items

This is an optional follow-up to Opportunity 1.

A large portion of detail pages could have menu items locked down. 

Currently, we have no way of identifying these.. We could devise a means to lock down menu items on a node-by-node or other (path-based?) basis.


### Opportunity 3: Convert as many detail pages to content types, and lock their position



*   Top task pages (in progress): Policies, Contact us, Billing and insurance, Make an appointment, Pharmacy, Register for care. 
*   Campus maps
*   Care coordinator pages 
*   About us, Mission and vision, history? 
*   Work with us, Jobs and careers, Internships and fellowhsips, Volunteer or donate, etc? 


## Opportunity Set B

This would be an alternative to Set A


### Opportunity 1: Radically reduce the size of each VAMC menu in Drupal, and build it programatically based on path

If the only dynamic (CMS-user-editable) part of the VAMC menu were the About section (that’s a big _if_), theoretically the scope of the Drupal-managed menu coudl be reduced to that section, and the rest could be built entirely on the FE based on paths and content types. 

This might allow the 


## Opportunity set C

This set of opportunities is optoinal for Set A, but probably required for Set B. 


### Opportunity 4: Switch to path-based breadcrumbs instead of one based on menu hierarchy

Separately, does it make sense to switch entirely to path-based breadcrumbs for VAMC system product, instead of menu breadcrumbs? Also, get rid of the top level menu item, which is redundant and adds complexity?  

There are times when we don’t want path-based breadcrumbs, but VAMC system doesn’t seem to be one of those times anymore


### Opportunity 5: Remove the health care system from the menu in Drupal, and remove the dependency on it within the FE build

[This depends on opportunity 4]

The requirement in Drupal to have the VAMC system menu at the top of the menu hierarchy has proven to increase the error rate in menu configuration. When the menus get long, it’s easy to place a “root” page at the same level as the VAMC System page. This not only breaks breadcrumbs, but can cause build errors. 


## CMS UI Design challenges



1. How might PAOs be able to understand the IA of their product enough to know how and where to put their discretionary detail pages? 
2. What does the menu editing interface look like for PAOs? Should they still be able to access the menu page? If they create a new detail page, how do we represent the eligible parents menu items?
