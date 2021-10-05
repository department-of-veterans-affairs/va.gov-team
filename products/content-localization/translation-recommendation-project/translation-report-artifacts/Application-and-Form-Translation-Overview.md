# Application and Form Translation -  Overview


### Overview

Each application has its own folder where content exists for the UI and this content needs to function within a larger localization context. A system needs to be created to assist with engineering goals including new app creation and legacy app translation. This translations systems should also have features that facilitate editorial workflows, testing, and a11y. Initially, the translated content can live alongside the code in dedicated JSON files and eventually moved to an API call for loading dynamically when such an API exists.

#### A veteran should be able to specify a preferred language and be able to view various systems in that language

* User profile holds language preference
* Initial signup asks about language preferences
* An alert displays for all existing users to provide an opportunity to specify a preferred language
* Applications will use this language preference to display localized application content
* Applications provide a way to change to another language while in the application so as to prevent users to revisiting their profile settings.
* Analytics will receive information about what systems are accessed for each language
* Form submissions will include the language used when submitting for potential submission routing and analytics

### Benefits

* Translation can be loaded as needed and would not rely on any external systems
* Changing to a different language would not require a page reload or navigation away from the current URL.
* A glossary of text could be provided to all application to share commonly translated terms

### Drawbacks

* Extra complexity is added to the applications that impact long term maintainability
* Translation edits will need to be passed back and forth between engineering and translators, and all edits to translations will have to be added to the codebase manually after engineering receives edits
* Existing forms will most likely need to be rebuilt in order to support translations
