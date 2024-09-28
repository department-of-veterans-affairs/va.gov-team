# Header / Footer engineering notes

## Monitoring
https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/header-footer/engineering/monitoring.md

## Data / Content

Content in the header and footer are governed by the Sitewide Content team.

Most of the content lives in Drupal. When a build is run in `content-build`, it fetches the Drupal data for both the header and footer and uses [create-header-footer.json](https://github.com/department-of-veterans-affairs/content-build/blob/main/src/site/stages/build/plugins/create-header-footer.js) to compile the data object.

For the modernized VA.gov header and footer, it adds that data object onto the `window` object under `VetsGov.headerFooter` (local storage in the browser).

For TeamSites ("injected" header and footer, e.g. https://www.va.gov/health), it generates a `headerFooter.json` file from the data object and stores it in `vets-website/build/generated`.

### Header content in Drupal
Header menu data is managed in the Drupal CMS "Header megamenu" menu: https://prod.cms.va.gov/admin/structure/menu/manage/header-megamenu. This includes all links (excluding promo blocks) in "VA Benefits and Health Care" and "About VA."

Promotional content that appears in the markup is managed via Promos in the CMS: https://prod.cms.va.gov/admin/content/promos. Search for the promo block text (e.g. "The PACT Act and your VA benefits").

### Footer content in Drupal
[Footer data origins Mural](https://app.mural.co/invitation/mural/vagov6717/1668126089949?sender=u907f83e01e35bb04de6f8139&key=dd1afd5d-3cd7-4d0c-9aff-26e3308b2ec3) articulates the origins of footer content per section. 

Two Drupal menus are used: 
* VA.gov footer: https://prod.cms.va.gov/admin/structure/menu/manage/va-gov-footer - All links under "Veteran programs and services," "More VA resources," and "Get VA updates"
* VA.gov Footer bottom rail: https://prod.cms.va.gov/admin/structure/menu/manage/footer-bottom-rail - All links at the very bottom of the page ("Accessibility" through "Veterans Portrait Project")

The 4th column of links is provided in https://github.com/department-of-veterans-affairs/content-build/blob/main/src/platform/static-data/footer-links.json.

The language links are provided by a React component described below under Footer templates.

### Local development for header and footer updates
When you are making changes to the **modernized (VA.gov) header and footer**, you need to run both vets-website and content-build simultaneously so you will pull Drupal data instead of falling back to the dev template (which allows vets-website to be run in isolation). There are tips for [optimizing build time](https://github.com/department-of-veterans-affairs/content-build?tab=readme-ov-file#optimizing-build-time) in content-build so you are not slowed down by running full Drupal builds.

When you are making changes to the **injected header and footer**, you can run vets-website in isolation as you will be using port 3001 to hit TeamSites locally instead of 3002 (which is used for content-build and vets-website simultaneously or content-build alone). Provided your `headerFooter.json` file has been updated recently by your local content-build build, you should have up-to-date Drupal data for the injected header/footer.

## Templates / files

### VA.gov templates
On site load for the modernized site, the contents of `window.VetsGov.headerFooter` are used to build the VA.gov header/footer.

On site load for TeamSites, the contents of `generated/headerFooter.json` are loaded into the `<script>` tag and then used to build the TeamSites header/footer.

### Header templates (modernized VA.gov)
* `content-build/src/includes/header.html`: This file builds the header for most pages on VA.gov. For the mobile header, it [creates only a div](https://github.com/department-of-veterans-affairs/content-build/blob/38664d61d1d99b19e818547a687766eaae47a6c8/src/site/includes/header.html#L168) for vets-website to plug in content. The desktop header is created by [top-nav.html](https://github.com/department-of-veterans-affairs/content-build/blob/main/src/site/includes/top-nav.html), which also has placeholder divs for vets-website to plug in content.
* `vets-website/src/platform/landing-pages/dev-template.ejs`: This file is only used for running vets-website locally and displaying the header/footer. This is what teams see locally when they aren't running content-build. Because this template isn't used beyond the local environment, it is not up-to-date and is missing functionality.
* `vets-website/src/applications/proxy-rewrite`: This application and the markup and styles within it are used only for Teamsites (injected header/footer). The [proxy whitelist](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/proxy-rewrite/proxy-rewrite-whitelist.json) has some examples of where you can test and [the README](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/proxy-rewrite) has steps on how to test. You can only test Teamsites locally and in production and nowhere in between.
* https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/platform/site-wide/header in vets-website contains most of the code for the VA.gov header. Anything you see referred to as "legacy header" is the desktop header (I'm not sure why it's named that). The [mega menu code](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/platform/site-wide/mega-menu) lives in a separate folder. There is a separate folder for the [mobile mega menu button](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/platform/site-wide/mobile-menu-button) and for the [authenticated portion of the header](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/platform/site-wide/user-nav). All Veterans Crisis Line modal code lives in [the footer folder](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/platform/site-wide/va-footer).

![VACMS-10059 HEADER CURRENT FLOW_2023-05-04_23-16-59](https://user-images.githubusercontent.com/85581471/236350123-83aa5884-66f3-4688-bb04-7fa75da545af.png)
https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1683241698521/bd49f8b522d8fab33844e1621fd5d3b65eb88a07?sender=u0b235d03cbd64f7f93673243

### Injected header templates
Proxy-rewrite is a javascript app that can be used to inject the VA.gov header/footer into legacy TeamSites. 

More information: 
* https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/header-footer/injected-header
* [vets-website proxy-rewrite app](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/proxy-rewrite/README.md)
* Templates: `/vets-website/src/applications/proxy-rewrite/partials` -- used to render

Note: All links in the injected header/footer to the modernized VA.gov site will point to production only. We do not have access to lower environments for TeamSites, so URLs are absolute (vs. relative).

### Footer Templates
* Hard coded content from the 4th footer column (contact us, etc) is entered in `content-build/blob/main/src/platform/static-data/footer-links.json` and rendered by:
https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/platform/site-wide/va-footer
* Language assistence menu is created by a React component: https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/site-wide/va-footer/components/LanguageSupport.jsx
