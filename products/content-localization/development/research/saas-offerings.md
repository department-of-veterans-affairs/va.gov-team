
# SAAS Offerings - Translation as a service


### Description

Several software companies offer translation management and localization via an external SAAS system. Most offerings have pricing structures based on site traffic or amount of translations.

The various options have been detailed here: [potential-solution-options.md](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/c385e12bf837ace1baef21d974fc75968a710f7a/teams/vsa/teams/content-localization-translation/potential-solution-options.md)

### Hosting

The SAAS maintains hosting infrastructure. Uptime, data retention, and security all need to be evaluated per offering.

### Authentication

Auth is variable depending on the offering and would need to be evaluated.

### Integration

Again this is variable based on the offering.

* Smartling
  * They appear to prefer to offer the translated content via a Translation Proxy, so the translated site content is actually hosted and served from their infrastructure and would not live on our gov cloud system.
  * Aside from the proxy setup, there is also an integration for the Drupal multilingual modules. [Smartling Drupal Integration Info](https://www.smartling.com/software/integrations/drupal/)
  * A [Smartling cli tool](https://github.com/Smartling/smartling-cli) is available for managing projects, but is currently not being updated.
  * The [Smartling REST API](https://github.com/Smartling/smartling-cli) provides endpoints for submitting content, downloading completed translations, and other management tasks.
  * [Webhooks and Callbacks](https://help.smartling.com/hc/en-us/articles/1260805504109) can be activated for outbound notifications of events like translation completion.
