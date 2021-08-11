# Drupal Multilingual - Using existing Drupal localization system

### Description

The [Drupal modules for multilingual site support](https://www.drupal.org/docs/multilingual-guide) offer content translation, visitor language detection / negotiation, and configuration translation out of the box. A base language is set and then other languages can be added to the site's configuration and content can then be translated. We can assign a language to everything: nodes, users, views, blocks, menus and more.

### Hosting

Hosting would be the same as our current cms setup and the modules would just need to be activated and any integration issues ironed out. A tugboat/local instance of Drupal could be used for experimentation with our current content.

### Authentication

Nothing would need to change in regards to auth and the CMS current implementation. The only consideration would be if there is a need to restrict some users based on role to the translated content (only specific translators get to edit translations).

### General Content Integration

* The initial attempts to just add the multilingual modules to a tugboat instance have been unsuccessful. Some errors are displayed when trying to activate modules, and need to be investigated further.
* There are 40+ content types in the cms and 150+ menus that would need to have translation support activated for them, and their fields configured just to begin translation testing.
* Once translation modules are activated, the content build process would need to be overhauled to parse translations and generate the correlating pages.
* A language selection UI component would need to be created for the site similar to the one created for covid pages right now.
* An audit and approval process would need to be implemented.

### Application Translations Integration

* There is the possibility that strings and text content for the various React applications could be stored in the CMS and then the multilingual system could also be used to manage the application translations.
* A new content type would need to be prototyped, so that applications would use this content type to add their strings to the CMS. This content type would then be treated differently in the content built process and the translations for this content type would need to be extracted and somehow placed in the respective application code to be used via I18next library or similar React implementations.
* Maintaining consistency of translations when a React application changes is a concern as well as not breaking any application if the translations are missing or incomplete.

### PROS

* existing cms system is used and a new application or service does not need to be introduced to the already complicated tech stack
* a first class module will generally have better support and flexibility than a hand rolled solution
* centralized location for translations and content will potentially eliminate/reduce inconsistencies that could occur in a more decoupled translation system

### CONS

* scaling the CMS and content-build system will continue to be a concern, and exponentially increasing content in the CMS through translations is a real threat to our speed of publishing
* the front end considerations are numerous
  * how would language negotiation and switching occur on the front end of the site and how would it remain consistent.
  * what are the fallbacks for content and applications?
  * what automated testing processes could be implemented to test translations?

