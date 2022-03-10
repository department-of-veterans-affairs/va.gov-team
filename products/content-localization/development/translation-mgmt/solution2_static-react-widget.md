# Solution 2: React Widget As Source of Translated Pages Directory

* [View Existing React Widget Implementation Code](https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/applications/static-pages/i18Select)
* Translation data/links are stored statically via [urls.js](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/static-pages/i18Select/utilities/urls.js)

### Description

As a React Widget, the I18Select component has functionality for displaying the available translation links for a given url. There is also additional work that was done to perform some dom manipulations of the translated pages when they are visited, and these manipulations exist to support language attributes for the translated content.

### Considerations

* Migration complexity may low if the component can be modified to work with the drupal TMS easily in the future, but that is unknown at this time.
* Maintenance requires consistent work from a front end engineer to update the data in the component as new translations are added to the cms.
* This component is part of the static-pages application and storing the data in the component could yield performance implications if translation counts grows large.
* By not adding any new data to the cms application for translations there is the potential for less conflict in the short term.
