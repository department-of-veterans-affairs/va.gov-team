Content + Localization Team's Documents

# Current state of localization as if Oct 2023
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
Translations are handled almost entirely within the browser. During page load, [createI18Select()](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/static-pages/static-pages-entry.js#:~:text=import-,createI18Select,-from%20%27./i18Select/createI18Select) is called to initialize the translation menu links that appear at the top of a translated page. This process includes a check of the current url and looks for a suffix (i.e. `-esp`) indicating the language of the current page, and selects the appropriate language in the translation menu.

![image](https://user-images.githubusercontent.com/221539/179070768-21246fb5-5d37-4dfb-939e-8e4a09c99c8d.png)

Pages which are translated are defined in a static list in the vets-website codebase at [src/applications/static-pages/i18Select/utilities/urls.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/static-pages/i18Select/utilities/urls.js).

The path to the page being built is checked against the translation url list, and [only if a match is found](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/static-pages/i18Select/createI18Select.js#:~:text=//%20do%20not%20render%20if%20not%20on%20a%20translatable%20page%20url) are the translation links added to the page.

## Backend CMS
The CMS has no knowledge of translations in any way. Additionally, there are no modules or custom code within the CMS to support translations.

*Translated content is entered into the CMS in unique Page nodes per language* (though there is no governance over the use of particular node types). These nodes have no characteristics that distinguish them from non-translated content within the CMS (no term, field, or flag is populated for language/localization purposes) other than the content within them being in a language other than English.

URLs paths for the translated nodes should follow (although there exists no constraints around this in code) a pattern. The pattern for translated page URLs is: [default-language-page]-[language-short-code]. Languages and their shortcodes are [defined in the frontend](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/static-pages/i18Select/utilities/constants.js#:~:text=export%20const-,TRANSLATED_LANGUAGES,-%3D%20%5B).

For example, assume we are creating a new 'Contact Us' page, with translations in English, Español and Tagalog, and the path to the default English language node should be '/contact-us'. In this case, the paths to the translated versions should be:

`Español: /contact-us-esp`

`Tagalog: /contact-us-tl`

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
