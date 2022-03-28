# I18Select Widget for Static Pages - User Guide

## Description
The I18Select React Widget is a static widget that is rendered on the [page.drupal.liquid](https://github.com/department-of-veterans-affairs/content-build/blob/edcd5d32fe63d7aa9b71eae491efa8f4ad952eba/src/site/layouts/page.drupal.liquid#L20) template of content-content build. This widget will render a UI component that allows the page to be viewed in different languages, but will only render if the current URL is in the list of translated pages. The list of pages is maintained within the widget code as [urls.js](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/static-pages/i18Select/utilities/urls.js). Each language is it's own static page within drupal, so viewing a different language for a given page is a regular url navigation action instead of some sort of dynamic 'content swap' on the same url for each language (a future possible solution for content display). 

In addition to showing this Language Toggle component, the React widget also does several page manipulations (dom edits) for accessibility and usability concerns. These manipulations are mostly found in the [helpers.js](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/static-pages/i18Select/utilities/helpers.js) file.

**Accessibility modifications**

- Adds a `lang`attribute to the main content, breadcrumb links, and sidebar links of the page for screen readers.
- Adds a `hreflang` to links within content to indicate if they are going to an english language resource

**Usability modifications**

- Updates the 'On this page' section manually to have the heading text of the component in the correct language
- Sets the Medallia Survey Language to the appropriate language
- Modifies the sidebar navigation to only display the current language's nav links.

## Adding a newly translated page

1. Add an object of page urls for each language to the [urls.js](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/static-pages/i18Select/utilities/urls.js) file.

An example of this object:

    about: {
	    en: '/health-care/covid-19-vaccine/about-covid-19-vaccine',
	    es: '/health-care/covid-19-vaccine-esp/about-covid-19-vaccine-esp',
      tl: '/health-care/covid-19-vaccine-tag/about-covid-19-vaccine-tag',
    }

The key `about` represents the page 'type' or basic page that is being represented, and should be unique from the other page sets.

2. Submit PR **after** the pages have been published in Drupal and are live on the site.
3. Once the PR is merged, then validation of the Widget displaying on the new pages can be done.
