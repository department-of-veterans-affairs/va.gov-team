Content + Localization Team's Documents

# Current state of localization as of Oct 2023
Translations are handled almost entirely within the browser. 
Drupal CMS has undertaken a project to implement translations in the CMS, but that is not broadly in use.

# Content team requirements 
Based on https://github.com/department-of-veterans-affairs/va.gov-team/issues/53916

- Pages are slotted as siblings to the English versions in the hierarchy
- URLs are the same as the English version with a 3 character language code appended to the end of the URL (i.e. "esp" for spanish, "tag" for tagalog, any additional languages will need to be defined)
- Each page has a toggle to switch between languages at the top of the page
- The breadcrumb current page segment is translated
- The title tags are translated
- The left nav updates the current page and child pages to the appropriate language - it was confirmed that each nav option is tagged with a language so it is read appropriately when intermingled with english options
- Pages are linked to/referenced in the language resource page (spanish and tagalog)

# Engineering and Architecture

## Frontend

### Translation Toggle (English | Español | Tagalog)
The translation toggles are created in `vets-website`, in a widget referenced by [i18-select](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/static-pages/i18Select).

Translations are handled almost entirely within the browser. During page load, [createI18Select()](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/static-pages/static-pages-entry.js#:~:text=import-,createI18Select,-from%20%27./i18Select/createI18Select) creates the toggle at the top of a page that has translations. This process includes a check of the current url and looks for a suffix (i.e. `-esp`) indicating the language of the current page, and selects the appropriate language in the translation menu.

![image](https://user-images.githubusercontent.com/221539/179070768-21246fb5-5d37-4dfb-939e-8e4a09c99c8d.png)

Pages which are translated are defined in a static list in the vets-website codebase at [src/applications/static-pages/i18Select/utilities/urls.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/static-pages/i18Select/utilities/urls.js).

The path to the page being built is checked against the translation url list, and [only if a match is found](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/static-pages/i18Select/createI18Select.js#:~:text=//%20do%20not%20render%20if%20not%20on%20a%20translatable%20page%20url) are the translation links added to the page. There are hundreds of thousands of VA.gov pages, so we use a static list of translated pages to avoid looking through them all.

### Sidebar Menus (for pages that have them)
If a page has a sidebar menu for navigation, the data lives in Drupal under Menus and is fetched by `content-build` through a [GraphQL query](https://github.com/department-of-veterans-affairs/content-build/blob/main/src/site/stages/build/drupal/graphql/navigation-fragments/sidebar.nav.graphql.js). The front end (`content-build`) initially displays the sidebar information in its entirety, including both English and (Spanish and/or Tagalog) sidebar links. Once that is displayed, we know `vets-website` applies the proper language code (`hreflang` and `lang`) attributes to the sidebar elements in [i18Select/utilities/helpers.js](https://github.com/department-of-veterans-affairs/vets-website/blob/656b6d3347538780b699fe8a0c50008c93fcf26a/src/applications/static-pages/i18Select/utilities/helpers.js#L102). It is not clear whether this is what makes sidebar items disappear, but in some way, the front end removes the sidebar links that do not belong on the page.

### Page language attributes
`content-build` controls the language of the page for screen readers [here](https://github.com/department-of-veterans-affairs/content-build/blob/main/src/site/stages/build/plugins/modify-dom/add-lang-to-main.js) by checking for the suffix (i.e. `-esp`) and adding an `es` or `tl` language to the `<main>` element as appropriate.

## Backend CMS
The CMS has no knowledge of translations in any way. Additionally, there are no modules or custom code within the CMS to support translations.

*Translated content is entered into the CMS in unique Page nodes per language* (though there is no governance over the use of particular node types). These nodes have no characteristics that distinguish them from non-translated content within the CMS (no term, field, or flag is populated for language/localization purposes) other than the content within them being in a language other than English.

### URL conventions
URL paths for the translated nodes should follow (although there exists no constraints around this in code) a pattern. The pattern for translated page URLs is: [default-language-page]-[language-short-code]. Languages and their shortcodes are [defined in the frontend](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/static-pages/i18Select/utilities/constants.js#:~:text=export%20const-,TRANSLATED_LANGUAGES,-%3D%20%5B).

For example, assume we are creating a new 'Contact Us' page, with translations in English, Español and Tagalog, and the path to the default English language node should be '/contact-us'. In this case, the paths to the translated versions should be:

`Español: /contact-us-esp`

`Tagalog: /contact-us-tl`

### Translated Pages and CMS Menus (front end "sidebar")
If a page has sidebar navigation on the front end and a Spanish and/or Tagalog translation for that page is added into Drupal, the new translated page(s) must have the same sidebar information in Drupal with the appropriate translations. Sidebar information is in Drupal under Menus and is in a hierarchical structure with a parent > child > grandchild (etc.) relationship.

The gray background section of the sidebar on the front end shows the currently selected page and its child pages. When a translated page is added, the child pages (whether they are only in English or not), must be duplicated in the menu and associated with the translated parent.

If the child pages are only in English, there is no need to add the grandchild pages to the translated menu hierarchy. This is because once you click on the English child page (from a translated parent), you are then using the English parent's menu hierarchy and already have information for the grandchildren.

If any of the child pages of the new translated page also have Spanish and/or Tagalog translations, all grandchild links will need to be added as their parent is now a Spanish or Tagalog page and references the translated menu hierarchy.

#### Example
On [va.gov/disability/eligibility/](https://www.va.gov/disability/eligibility/), the page's sidebar menu in Drupal has a structure like the below.

```
- Eligibility
  - Exposure to hazardous materials
    - Specific environmental hazards
    - Agent Orange
    - Asbestos
    - Mustard gas or lewisite
    - Camp Lejeune water contamination
    - Radiation exposure
    - Project 112/SHAD
    - Gulf War Illnesses SW Asia
    - Gulf War Illnesses Afghanistan
  - Former POWs
  - PTSD
  - Illnesses within 1 year after discharge
  - Special claims
    - Auto allowance and adaptive equipment
    - Birth defects
    - Clothing allowance
    - Dental care
    - Increase after surgery or cast
    - Increase for time in hospital
    - Prestabilization ratings
    - Title 38 U.S.C. 1151 claims
    - Unemployability
```

A translated version of this page ([va.gov/disability/eligibility-esp](https://www.va.gov/disability/eligibility-esp)) should have a menu item (`Elegibilidad`) as a sibling of `Eligibility`, and its 5 children (`Exposure...`, `Former POWs`, etc.) added and associated with `Elegibilidad`. If any of the 5 children have Spanish translations, or any of the grandchildren, all children and grandchildren must be added and linked to their Spanish parent.

In the Disability hub menu below, only the `Eligibility` page is translated. Grandchildren are not added because they are all in English only and already handled through the English menu hierarchy.

* 

```
- Eligibility
  - Exposure to hazardous materials
    - Specific environmental hazards
    - Agent Orange
    - Asbestos
    - Mustard gas or lewisite
    - Camp Lejeune water contamination
    - Radiation exposure
    - Project 112/SHAD
    - Gulf War Illnesses SW Asia
    - Gulf War Illnesses Afghanistan
  - Former POWs
  - PTSD
  - Illnesses within 1 year after discharge
  - Special claims
    - Auto allowance and adaptive equipment
    - Birth defects
    - Clothing allowance
    - Dental care
    - Increase after surgery or cast
    - Increase for time in hospital
    - Prestabilization ratings
    - Title 38 U.S.C. 1151 claims
    - Unemployability
- Elegibilidad
  - Exposure to hazardous materials
  - Former POWs
  - PTSD
  - Illnesses within 1 year after discharge
  - Special claims
```

## Maintenance
### Adding languages

Adding support for additional languages will require coordination between content and frontend development, as the steps outlined below show:

#### Create CMS content

Includes the primary english node, and node for each of the needed languages. CMS content should exist in the CMS prior to moving on, and paths to each of the nodes need to be delivered to the frontend prior to their work beginning.

#### Frontend work to support the new language

Adding the language to the [TRANSLATED_LANGUAGES](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/static-pages/i18Select/utilities/constants.js#:~:text=export%20const-,TRANSLATED_LANGUAGES,-%3D%20%5B) constant in src/applications/static-pages/i18Select/utitlities/constants.js. The data needed includes the: language name, a language code (eg: ‘es’ for Español), url patterns, and ‘on this page’ text string.

### Translating new or existing content
Much like adding a language, the process by which translations are added for new/existing content is straightforward. Note this process begins *after* the content has gone through the translation process through the Department of State.

#### Create CMS content
Include the primary english node, and node for each of the needed languages. CMS content should exist in the CMS prior to moving on, and paths to each of the nodes need to be delivered to the frontend prior to their work beginning.

#### Frontend work to support the new translations:
Add the node urls to the translated urls list in [src/applications/static-pages/i18Select/utitlities/urls.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/static-pages/i18Select/utilities/urls.js)

# Potential Issues
Coordination between content and frontend teams is required when making changes to translated pages, such as publishing status or url. If not correctly coordinated, the UX will become degraded. Links to dead/unpublished pages, and missing translation links, are just some of the potential issues that could arise.

Nodes that include entity references (other nested nodes) may not translate correctly, e.g. FAQs with Q&A Groups. Discovery to support that flow is tracked in https://github.com/department-of-veterans-affairs/va.gov-cms/issues/10004.

# Reources
## Translation Origin
https://github.com/department-of-veterans-affairs/va.gov-team/issues/60

https://github.com/department-of-veterans-affairs/va.gov-team/issues/20754

https://github.com/department-of-veterans-affairs/vets-website/pull/16256

## Other Resources
https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/content-localization

https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/content/spanish-translation

https://github.com/department-of-veterans-affairs/digital-experience-products/issues/39

https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Products/Global/benefits-spanish-localization

https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content-localization/development/Translation%20Management%20Diagram_%208_19_2021.pdf

https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content-localization/Static-Page-I18Select-User-Guide.md
