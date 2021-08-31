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

