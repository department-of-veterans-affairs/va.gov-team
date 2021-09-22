# Application Translation

Each application has its own folder where content exists for the UI and this content needs to function within a larger localization context. A system needs to be created to assist with engineering goals including new app creation and legacy app translation. This translations systems should also have features that facilitate editorial workflows, testing, and a11y.

### A veteran should be able to specify a preferred language and be able to view various systems in that language

* User profile holds language preference
* Initial signup asks about language preferences
* An alert displays for all existing users to provide an opportunity to specify a preferred language
* Applications will use this language preference to display localized application content
* Applications display a way to change to another language while in the application so as to prevent users to revisiting their profile settings.
* Analytics will receive information about what systems are accessed for each language

### Translation data architecture

* Javascript applications use i18next as a localization service provider
* Local storage is used to persist language setting
* String data is moved to JSON files that correlate to each language
  * These JSON files are located adjacent to application files in vets-website repository
  * Translations should be moved to an API layer in the future for scalability and management process improvement
  * Application strings are namespaced and lazy loaded when the application loads
  * A common glossary namespace is maintained and is loaded by default on all pages
* Each application can view translated strings via dedicated UI and see some basic statistics on untranslated content

### Technical debt and supporting legacy code

* Platform wide forms use the react-jsonschema-form library, but a heavily modified version. The VA version was forked at [rjsf - version 0.43](https://github.com/rjsf-team/react-jsonschema-form/releases/tag/v0.43.0), which was originally released in February 2017.
  * Since this fork we have added approximately 15 commits on top.
  * Our version of rjsf is behind the current maintained version by more than 650 commits.
  * Since we forked the original library there has been support added for i18n, but some i18n functionality can still be added as is.
  * for example, in the form.js formConfig object a translated string can be accepted, BUT it will not update if the language is changed via `i18n.changeLanguage('es')`. To change the language, the page has to be refreshed, or functionality will need to be written to prompt the user that the form needs to be restarted in order for a different language to be used.
    ```
    chapters: {
        chapter1: {
          title: i18n.t('chapter1.title'),
          ...
        }
    }
    ```
  * Validation errors in the existing form library need to be translated and at this point, there is no easy way to do that.
  * As a POC of translating existing form library apps, there is a branch here: https://github.com/department-of-veterans-affairs/vets-website/tree/28684-poc-legacy-forms-translation-effort
    * This branch attempts to provide some insight into supporting translation in the various components of the legacy form system.
      * The namespace would be stored in the form config, preferably towards the top of the form config for visibility.
      * A getKey() helper function would be provided to use the namespace as a partially applied function for easily generating translation key strings.
      * form text properties could be passed a key and fallback in a format similar to:
        * ```
            title: {
              key: getKey('title'),
              fallback: 'Fallback',
            }

          ```

          This would allow components to the use the key of `namespace:title` to access translations on runtime within components.
* **Shared Components**
  * platform/forms/save-in-progress/SaveInProgressIntro.jsx
    * uses platform/forms-system/src/js/constants.js - static text strings for application messages
      * replacing static strings with respective strings may be a migration route to look at
    * all save-in-progress components all would need to be addressed.
  * @department-of-veterans-affairs/component-library/OMBInfo
    * expDate prop may also want to be localized / reformatted
  * TextField, SelectField, CheckboxField from '@department-of-veterans-affairs/formulate'
    * Specifically the *Required text is hardcoded to english
    * Uses base components from https://github.com/department-of-veterans-affairs/component-library/tree/web-components
      * The web-components all need to be gone through to make sure all strings can be passed a translated variant.
