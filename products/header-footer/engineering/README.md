# Header / Footer engineering notes

## Monitoring
https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/header-footer/engineering/monitoring.md

## Data

### Header Mega-menu content
Header data is managed in the Drupal CMS "Header megamenu" menu: https://prod.cms.va.gov/admin/structure/menu/manage/header-megamenu

### Footer content
Footer content is managed in 2 Drupal menus, as well as one hard-coded section for language toggles. 
2023 state of truth: https://app.mural.co/invitation/mural/vagov6717/1668126089949?sender=u907f83e01e35bb04de6f8139&key=dd1afd5d-3cd7-4d0c-9aff-26e3308b2ec3
https://prod.cms.va.gov/admin/structure/menu/manage/footer-bottom-rail

* VA.gov footer - https://prod.cms.va.gov/admin/structure/menu/manage/va-gov-footer
* VA.gov Footer bottom rail - https://prod.cms.va.gov/admin/structure/menu/manage/footer-bottom-rail

### Generated JSON
During content build, header menu data from Drupal and the Footer json data are piped into a generated file, `generated/headerFooter.json`.

That generated JSON is then used to populate downstream sites.

## VA.gov templates
On site load, the contents of `generated/headerFooter.json` are loaded into the `<script>` tag and then used to build the VA.gov header/footer.

* `/content-build/src/site/includes/header.html` -- 
* `/vets-website/src/platform/landing-pages/dev-template.ejs` -- enables running the va.gov site in "vets-website standalone mode" meaning: without running content-build. Dev only file that will never make it to production.

## Header Templates
* `content-build/src/includes/header.html`: This file builds the header for most pages on VA.gov. For the mobile header, it [creates only a div](https://github.com/department-of-veterans-affairs/content-build/blob/38664d61d1d99b19e818547a687766eaae47a6c8/src/site/includes/header.html#L168) for vets-website to plug in content. The desktop header is created by [top-nav.html](https://github.com/department-of-veterans-affairs/content-build/blob/main/src/site/includes/top-nav.html), which also has placeholder divs for vets-website to plug in content.
* `vets-website/src/platform/landing-pages/dev-template.ejs`: This file is only used for running vets-website locally and displaying the header. This is what teams see locally when they aren't running content-build. Because this template isn't used beyond the local environment, is not up-to-date and is missing functionality.
* `vets-website/src/applications/proxy-rewrite/partials/header.js`: This is used only for Teamsites (injected header/footer). The [proxy whitelist](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/proxy-rewrite/proxy-rewrite-whitelist.json) has some examples of where you can test and [the README](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/proxy-rewrite) has steps on how to test. You can only test Teamsites locally and in production and nowhere in between.
* https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/platform/site-wide/header in vets-website contains most of the code for the VA.gov header. Anything you see referred to as "legacy header" is the desktop header (I'm not sure why it's named that). The [mega menu code](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/platform/site-wide/mega-menu) lives in a separate folder.
![VACMS-10059 HEADER CURRENT FLOW_2023-05-04_23-16-59](https://user-images.githubusercontent.com/85581471/236350123-83aa5884-66f3-4688-bb04-7fa75da545af.png)
https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1683241698521/bd49f8b522d8fab33844e1621fd5d3b65eb88a07?sender=u0b235d03cbd64f7f93673243

## Injected header 
A javascript app that can be used to inject the VA.gov header /footer on legacy TeamSites. 

More information: 
* https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/header-footer/injected-header
* [vets-website proxy-rewrite app](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/proxy-rewrite/README.md)
* Tempalte: `/vets-website/src/applications/proxy-rewrite/partials/header.js` -- used to render



## TODO:
* Add anything useful re: WCLoader
