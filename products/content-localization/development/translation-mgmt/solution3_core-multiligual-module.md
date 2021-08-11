# Solution 3: Multiligual Module Via Drupal

* [Official Multilingual Module / Guide](https://www.drupal.org/docs/multilingual-guide)
* Long Term Solution
* Maintainable and supported
* Large training surface area potential
* 4 modules in total supporting content, menus, and other data
* Example of usage: [https://www.aava.fi/en](https://www.aava.fi/en)

TODO: screenshot of drupal multilingual

### Description

This feature was once a collection of 3rd party modules, but was 'recently' incorporated into the core of drupal.

### Considerations

* Implementation scope is very large. Our content-build system is a blocker.
* Maintenance potential is the lowest of all solutions due to official support and documentation.
* Adding 4 additional modules to the drupal application presents potential performance costs.
* If the content-build system was able to utilize this approach, the query size / build time could increase as translations are added.
