# Weblate - Web-based continuous localization

### Description

A Python 3.6+ (Django Framework) based application that provides localization for applications and content. The weblate interface is organized into projects and components, and each project can contain a number of components that contain translations into individual languages. Each component correlates to a translatable file (PO, MO, JSON, etc).

### Hosting

* self hosted or cloud-hosted
  * Dedicated Cloud hosting vary in price depending on the amount of translated content
    * [https://weblate.org/en/hosting/#hosted](https://weblate.org/en/hosting/#hosted)
  * Self hosting is done via a Docker (prefered) deployment or virtualenv on a *nix based system
    * Other required services include PostreSQL db, Redis server, and an SMTP server.
    * [Installation Docs](https://docs.weblate.org/en/latest/admin/install.html#installing-weblate)

### Authentication

* Uses Python Social Auth, but registration can be turned off to prevent new users.
* Other authentication systems including Active Directory, LDAP, or SAML could also be used with configuration.
* For the built-in REST api there is no authentication required (throttled to 100 req/day) or a user can provide an Authorization header with a token that is accessed via a user's profile (throttled to 5000 req/hr)
  * Throttling can be configured via settings.py see: [Throttling in Django](https://www.django-rest-framework.org/api-guide/throttling/)

### Integration

* Weblate has been developed with VCS integration in mind as it’s core feature, so the easiest way is to grant Weblate the access to your repository.

  * This most likely would not be possible due to needing translations for several repos and also access control restrictions.
  * Instead of commiting translation files directly to our VCS, the REST api provided by Weblate would be the most viable option for integrating into our systems.
* For JavaScript applications the recommended file format is [JSON i18next v3](https://docs.weblate.org/en/latest/formats.html#js-i18next)
* * JSON i18next files are monolingual, so a base file (english version) has to be configured within each Weblate component.
* Integration for our content-build / cms content would need to be custom built due to the Metalsmith project complexity.

  * If we used JSON i18next files we may be able to adapt this (unfortunately unmaintained) Metalsmith plugin: [metalsmith-i18next](https://github.com/macprog-guy/metalsmith-i18next)

### PROS

* An open source platform would avoid any vendor lock-in
* Weblate may be able to manage drupal content as well as application / form level translations
* Extendible via python and Django modules
* Support is available for hosted or self-hosted installs (basic, extended, and premium levels)
* Installation and customization services available

### Cons

* Python / Django will require dedicated engineers to update, extend, and maintain if self hosting
* A self hosted option could introduce security concerns and would require auditing
* Cloud based hosting may require higher costs, and migrating away could be difficult if needed


### POC Requirements

* Create local docker instance of Weblate
  * Document UI and ease of use considerations
  * Add Project and Components for a test app
* Prototype local react application with i18next
  * Pull translations from a file/api provided by weblate instance
  * Document pitfalls and issues that would occur while translating applications
* Set up local Drupal cms to access page content and integrate with weblate
  * Document how page content fields would sync to weblates projects and components
  * Can all fields be translated?
  * What accessibility issues exist? (alt text, aria attributes, etc)
* Prototype abilities to integrate Weblate translations into content-build system
  * Evaluate metalsmith-i18next plugin capabilities
