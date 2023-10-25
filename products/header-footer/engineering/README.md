# Header / Footer engineering notes

## Monitoring
https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/header-footer/engineering/monitoring.md

## Data

### Header
Header data is managed in the Drupal CMS "Header megamenu" menu: https://prod.cms.va.gov/admin/structure/menu/manage/header-megamenu

### Footer
The footer is currently hard-coded via JSON (May 2023) in `vets-website/src/platform/landing-pages/header-footer-data.json`

Drupal menus have been created to manage Footer data, but have not yet been integrated in front-end templates: 
* VA.gov footer - https://prod.cms.va.gov/admin/structure/menu/manage/va-gov-footer
* VA.gov Footer bottom rail - https://prod.cms.va.gov/admin/structure/menu/manage/footer-bottom-rail

Outstanding work for Drupalizing the footer is tracked in https://github.com/department-of-veterans-affairs/va.gov-cms/issues/10339. 

### Generated JSON
During content build, header menu data from Drupal and the Footer json data are piped into a generated file, `generated/headerFooter.json`.

That generated JSON is then used to populate downstream sites.

## VA.gov templates
On site load, the contents of `generated/headerFooter.json` are loaded into the `<script>` tag and then used to build the VA.gov header/footer.

* `/content-build/src/site/includes/header.html` -- 
* `/vets-website/src/platform/landing-pages/dev-template.ejs` -- enables running the va.gov site in "vets-website standalone mode" meaning: without running content-build. Dev only file that will never make it to production.



## Injected header 
More information: 
* https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/header-footer/injected-header
* [vets-website proxy-rewrite app](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/proxy-rewrite/README.md)

### Templates
* `/vets-website/src/applications/proxy-rewrite/partials/header.js` -- used to render

![VACMS-10059 HEADER CURRENT FLOW_2023-05-04_23-16-59](https://user-images.githubusercontent.com/85581471/236350123-83aa5884-66f3-4688-bb04-7fa75da545af.png)
https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1683241698521/bd49f8b522d8fab33844e1621fd5d3b65eb88a07?sender=u0b235d03cbd64f7f93673243

## TODO:
* Flesh out notes on each header-related template file (what/why)
* Add anything useful re: WCLoader
