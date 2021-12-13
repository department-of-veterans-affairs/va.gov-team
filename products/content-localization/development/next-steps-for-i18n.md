# Next steps for Localization Work

Long term work once public API is available to some extent. Most of these items will need to be split out into epics and subdivided appropriately.

### DRUPAL WORK

- Activate / Install Drupal multilingual module and Translation management modules
- Add Spanish language on Drupal and add all applicable paragraph types to the translatable content config options
- Configure notifications to alert individuals during translation workflow events
	- Who are the main people to notify, and what events can trigger notifications?
- Determine what content types specifically will be translated for first mvp of using the modules
	- Are there any content types of paragraphs that are not translatable or will cause issues?
	- Should any menu content be translated during this first stage as an MVP?
	- If some content types are not translatable, what other methods could be used as workarounds for that?
- Determine what pages (assuming COVID first and then other content?) to start translating
- Export and import translations and verify that all content is imported into correct paragraphs
- Create documentation into the process of exporting and importing, and the desired workflow involving translation providers. 
	- Include guidelines for preserving markup (mostly for WYSIWYG paragraphs)
	- Include guidelines and procedures for auditing content prior to publishing
- Consider moving away from WYSIWYG paragraph types in content when possible to minimize potential translation importing errors

### FRONTEND WORK:
- Collaborate with public websites and content-release-engineering to adapt a public API based approach that uses AJAX/Fetch calls to access content.
- Produce templates, React components, State management logic, testing protocols, and helpers for accessing translated content via API
- Create a language switching functionality that will be easy for users to understand
- Build MVP page using new API based templating.
- Evaluate styling and accessibility within Spanish templating and address any concerns within MVP pages
- Create analytics specific to Spanish content
- Provide feedback components to allow further analytics into content that people would like in Spanish

### IF PUBLIC API IS NOT READY, BUT TRANSLATION MODULES ARE NEEDED

- Plan and execute a content-build code update to request foreign language data from GraphQL api
- Update metalsmith to use an 'ES' folder to be created within the content build process
- Add templating to generate spanish page markup and put into ES folder
- Update templating to insert language tags and other language specific markup
- Build react widget for language switching based on ES page folder structure and also based on existing static content React widget from content and localization.
- Update documentation and testing practices to reflect language based content build aspects
