[WIP, created january 26]

# VAMC Menu governance hypothesis 

See https://github.com/department-of-veterans-affairs/va.gov-cms/issues/2427 for some backround.

*   It’s too easy to make major changes to the menu structure and IA of VAMC system product 
*   It’s too easy to make unintended IA errors, even for well-trained CMS users
*   The FE menu graphql and liquid templates are highly reliant on a stable menu structure, and choke when menu items are incorrect. This reveals content bugs, but those content bugs shouldn’t exist in the first place. 

The following artifacts were considered.

*   the [Moqup](https://app.moqups.com/Rnc4BDEKrA/view/page/a9e1a59e9) containing the original IA design done for Pittsburgh 
*   existing menu structure from [VA Pittsburgh](http://prod.cms.va.gov/admin/structure/menu/manage/pittsburgh-health-care?destination=/admin/structure/menu), [Erie](http://prod.cms.va.gov/admin/structure/menu/manage/va-erie-health-care), [Coatesville](http://prod.cms.va.gov/admin/structure/menu/manage/va-coatesville-health-care?), Eastern Colorado, Eastern Oklahoma.
*   [An analysis of IA design combined with CMS configuration](https://github.com/department-of-veterans-affairs/va.gov-cms/files/5871323/VAMC.IA.governance.analysis.xlsx) (XLSX, but the source of truth for this is a [google doc](https://github.com/department-of-veterans-affairs/va.gov-cms/files/5871323/VAMC.IA.governance.analysis.xlsx))
*   [Issues in va.gov-team tagged with “ia” and “vsa-facilities”](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/board?labels=ia,vsa-facilities&repos=133843125) (link to Zenhub)

What was not considered so far

*   Insight from VAMC upgrade team about patterns or intentional IA drift that has arisen, such as where to put DAV vans (that may come in first or second week of February)


Design goals
* IA is Consistent across VAMCs, both for Veterans but also for VA and managers of the product. 
* Users of the VAMC system product (CMS editors) understand what parts of the menu structure they can manipulate, and what parts are locked down
  * Editors understand how to add new discretionary Detail pages to the IA, and how to reorganize them.
* Agile: VAMC system product managers can iterate on IA, without egregious technical debt to deal with


## Opportunity set A


### Opportunity 1: Lock down menu editing for all VAMC content types other than Detail pages

**Short term**

Per the IA design, non-Content admin editors of VAMC system content (eg PAOs, etc) only need to be able to edit menu items for “Detail Pages”.

Editors in the field _do not need to edit menu items for any other content types_.

The CMS could lock down editing permissions and IA for all VAMC-enabled content types other than Detail page. Only users with the Content Admin role would be able to manipulate menu items (and perform “scaffolding” tasks, like setting up a new VAMC). 

### Opportunity 2: Consider building in tools to locking down _certain_ Detail Page node menu items

**Short-to-medium term**

This is an optional follow-up to Opportunity 1.

A large portion of detail pages could have menu items locked down. 

Currently, we have no way of identifying these using anything in the content model. CMS team could devise a means to lock down menu items on a node-by-node or other (path-based?) basis.

### Opportunity 3: Convert as many detail pages to content types, and lock their position

**Medium-to-long term**

This depends on the strategy of Opportunity 1
*   Top task pages (in progress): Policies, Contact us, Billing and insurance, Make an appointment, Pharmacy, Register for care. 
*   Campus maps
*   Care coordinator pages 
*   Standard "About" section pages (About us, Mission and vision, history, Work with us, Jobs and careers, Internships and fellowhsips, Volunteer or donate, etc)


## Opportunities that would involve FE refactoring

These two items are related and probably best accomplished together, but could also happen independently. 

### 1. Switch to path-based breadcrumbs, instead of one based on CMS menu item hierarchy. 

The VAMC system MVP was built with menu-based breadcrumbs, to allow for some flexibility of creating breadcrumbs that do not match the path structure--flexibility which has never been needed. 

This would be a good time to switch to path-based breadcrumbs, because we could simplify the menu and reduce the risk of build-breaking errors in the Front end, like "ineligible breadcrumbs", which has shown up a few times when bulk publishing VISN 4 content containing menu bugs.

### 2. Remove the health care system from the menu in Drupal, and remove the dependency on it within the FE build

Each VA health care system has a single parent menu item, with three children (Locations and services, News and Events, and About), plus a number of "root" pages like the top task pages

For example, in VA Pittsburgh health care the top two levels of the menu look like this:  

* VA Pittsburgh health care 
  * Locations and services (_left nav divider_)
  * News and Events (_left nav divider_)
  * About VA Pittsburgh (_left nav divider_)
  * Billing and insurance  _(root page)_
  * Make an appointment  _(root page)_
  * Pharmacy _(root page)_
  * Register for care _(root page)_
  * Policies	_(root page)_
  * Contact us _(root page)_

Those parent menu items don't actually show in the left nav, and as of summer 2020, health care system pages have started acting like home pages in the VAMC system product breadcrumbs. (eg [VA Pittsburgh health care](#) > [Locations](#) > [Pittsburgh VA Medical Center-University Drive](#)

Occasionally, children are incorrectly/accidently added to the parent "VA Pittsburgh health care" (including by Content admins). 

If we switch to path-based breadcrumbs, the homepage menu items in Drupal become even more redundant, and it provides additional incentive to remove this item, because the risk of editor-introduced bugs goes down.

## CMS UI Design challenges


1. How might PAOs be able to understand the IA of their product enough to know how and where to put their discretionary detail pages? 
2. What does the menu editing interface look like for PAOs? Should they still be able to access the menu page? If they create a new detail page, how do we represent the eligible parents menu items?
