# CMS data in menus, widgets, APIs, and more
There are several instances of CMS data integrating into the website in ways other than creating a page or article. In general, this process is to -

1. Fetch data from the CMS via the CMS GraphQL API
2. After receiving the response data from the CMS, store the data in a local cache, such as in memory or persisting it to a local database

- [Menus](#menus) 
- [Widgets](#widgets)
- [APIs](#apis)
- [Homepage banner](#homepage-banner)

## Menus
Menus including the MegaMenu and the various sidebars exist as separate data structures from the article data structures. The relationships between the article and the menus are formed during the Front-End build.

### The MegaMenu
The _MegaMenu_ refers to the main website navigation, just under the logo at the top of the website. The data flow is as follows -

1. The front-end build fetches data from the CMS via a dedicated [GraphQL query](https://github.com/department-of-veterans-affairs/vets-website/blob/3427bfa741a3adc8338745d2ecf284204b6749ce/src/site/stages/build/drupal/graphql/navigation-fragments/menuLinks.nav.graphql.js). Note that this is a type of GraphQL query different from that of pages (which use a `nodeQuery`), called a `menuLinkContentQuery`.
2. After the GraphQL response data is received, the front-end build manipulates the shape of the data in a dedicated [function](https://github.com/department-of-veterans-affairs/vets-website/blob/c55bdb03b39ce99ef48690038f82b0da2cfd0a13/src/site/stages/build/drupal/menus.js#L267) to match the expected prop format of the MegaMenu React component, which will be covered later.
3. A [custom Metalsmith plugin](https://github.com/department-of-veterans-affairs/vets-website/blob/c55bdb03b39ce99ef48690038f82b0da2cfd0a13/src/site/stages/build/plugins/create-header-footer.js) serializes the MegaMenu data and marks it as a global variable throughout all templates via `metalsmith.metadata`.
4. The MegaMenu data is written into the body of all HTML pages in the [header template](https://github.com/department-of-veterans-affairs/vets-website/blob/c55bdb03b39ce99ef48690038f82b0da2cfd0a13/src/site/includes/header.html#L87), which is used by all modernized VA.gov pages. The data is available under the global `window` object.
5. During startup, the MegaMenu data is grabbed from the `window` object and passed to the [MegaMenu React component](https://github.com/department-of-veterans-affairs/vets-website/blob/c55bdb03b39ce99ef48690038f82b0da2cfd0a13/src/platform/site-wide/index.js#L49).

### Sidebars

## Widgets

##
