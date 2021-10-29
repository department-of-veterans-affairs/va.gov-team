# Proposed Future Translation Management System

At the present time there is no public content API that can be accessed from a front-end application, but in the near future a public facing API will be exposed and available to build systems with. This public API will bring the ability for an application to request various content at runtime so that the system would not rely on the current restrictions on publishing content.

In relation to the topic translated content and localization, this public API will allow different language content to be requested at any point, and newly published translations would be made available immediately after publishing.

**Content Translation Workflow for Writers and Translation Services**

Using the TMGMT tooling the page content could be exported via XLIF and sent via encrypted email to any outside translation services, and upon translation then imported into the CMS for publishing. Alternatively the process could be internally done without any exporting required, so long as the translation service has access to the Drupal CMS to update content.

**Content relationships and CMS Implications of a Public API**

The CMS would be able to leverage the Drupal multilingual modules as well as the translations management tool module (TMGMT) to streamline the translator's workflows as well as enable management tools like XLIF export / import among other advantages.

Translated content would live in one place instead of being published as unique pages, and there would be no need to maintain a master list of translated content for the front-end to use as the relationship between pages. The various translated content would live as nested content within a single page's data and would them be queried in a similar fashion.

**Application Structure**

- A global language switching component is integrated into the header or other UI element
	- The language switching component will allow a language selection to persist and will also optionally update a logged in user with their language preference.
- A url structure is used to determine what language a url belongs to ( /es/home, /tl/home, /zh/home, etc )
	- A mechanism like React Router is responsible for parsing urls and providing client side routing for content
- The url is parsed, the language is extracted and then an api request is performed to access the translated content of the page and a caching mechanism is implemented to avoid over fetching data.
	- The front-end will use a common i18n JSON data structure to access translated content, see [i18next](https://www.i18next.com/)
	- API requests can be made using the browser fetch api or with a helper library for i18next
- Once the content has been retrieved, the page displays in the correct language and javascript is responsible for templating the content.
- For additional support, a "request this page for translation" component may be displayed on English content with no translation for the user's preferred language, and that way insights can be gained into which pages are most commonly requested to be translated and prioritized for translation.

### Technical Specifications

Below is a summary of the proposed technologies that could be utilized for an advanced translation system. These technologies may not be used in the final solution, but represent the ideal future implementation.

**Single Page Application (SPA) for page content display alongside existing interactive sections**

- Current structure is composed of static content pages as well as SPAs for forms among other interactive parts of the whole site
- Future SPA structure would move all static content into the application and content would be made available immediately after publishing
- React, React Router, Redux State Management, and other modern javascript libraries would be continued to be used and static content templating would be modified to work as a javascript React template component with asynchronous content request logic built into each page
- Translations would utilize asynchronous requests to provide translated content to javascript templates based on i18n business rules
- The user profile would contain a language preference setting, and translated content would default to use this setting if possible
- English content fallbacks would be set up to provide the best user experience possible when translated content is not available. Additional feedback would also be collected by users to help provide analytics data on what content requires priority translation efforts
- Internationalization and translation libraries like i18next, i18next-fetch-backend, csv2i18next, and translation-check would be used to ensure a best in class experience for veterans and content creators
- Forms and other interactive applications would use the same javascript libraries to allow their components to display translated text, and those translations would be maintained alongside the code for each application at first. Future translation may be stored in a similar fashion to static page content in the CMS and requested in a similar fashion.

**CMS with a fully integrated Translation Management System**

- Writers and translators create and manage content in multiple languages using the officially supported Drupal Multilingual and Translation Management modules
- Drupal modules including Language, Locale, Content Translation, Configuration Translation, and Translation Management Tool would be used to facilitate internationalization efforts for content
- XLIF files are exported for cross party translation service usage, and are imported to update content when required. In addition to using XLIF files, the content is also directly translatable via the Drupal admin UI when needed
- Other approved service providers may augment the Translation Management process with their own CMS modules if it is deemed necessary

