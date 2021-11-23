# Decision Log - I18N JS Library

Internationalization libraries provide formatting, interpolation, pluralization, and extraction functionality for content within a JavaScript application. This document serves as a log to provide information about the various libraries that can assist in internationalization and to compare each library, so that the correct dependency can be utilized for va.gov applications.

## Requirements

- React integration
- Integrates back-end clients
- Testable
- Extendable
- Well maintained

## Matrix

| Library                 | size  | extendability  | core features | BE integrations | Docs | Total |
|-------------------------|-------|----------------|---------------|-----------------|------|-------|
| i18next                 | 2     | 5              | 5             | 4               | 5    | 21    |
| react-intl              | 5     | 4              | 4             | 1               | 4    | 18    |
| polyglot.js             | 3     | 2              | 3             | 0               | 3    | 11    |
| globalize               | 4     | 1              | 2             | 0               | 2    | 9     |


## Library Summaries

### i18next

| url                     | stars | last update | releases     | size unpacked |
|-------------------------|-------|-------------|--------------|---------------|
| https://www.i18next.com | 5.9k  | 1 week      | 18           | 649 kB        |

I18next is an **internationalization-framework** written in and for JavaScript. But it's much more than that. i18next goes beyond just providing the standard i18n features such as (plurals, context, interpolation, format). It provides you with a complete solution to localize your product from web to mobile and desktop.

The official [react-i18next](https://react.i18next.com/) package provides translation components, higher order components, render prop, and useTranslation hook as implementation options to support various front-end scenarios. SSR is also supported for next.js.

Backend support for translation loading is provided by [i18next-http-backend](https://github.com/i18next/i18next-http-backend) or can be hand rolled using fetch.

[Creating new plugins for i18next](https://www.i18next.com/misc/creating-own-plugins) is well documented, and extending functionality is relatively easy.

https://github.com/locize/translation-check provides an overview of all translated string key in a UI.



### React-intl

| url                                  | stars  | last update | releases     | size unpacked |
|--------------------------------------|--------|-------------|--------------|---------------|
| https://formatjs.io/docs/react-intl/ | 12.8k  | 1 day       | 1,800+       | 248 kB        |

Formatjs is a set of libraries that help you setup internationalization in any project whether it's React or not. The react-intl package lives within the formatjs monorepo.

Some [tooling is provided for formatjs](https://formatjs.io/docs/tooling/cli) including eslint, babel, and typescript plugins / transformers.

No back-end plugins or tooling is provided, but fetch could be used to access translations, and dynamic imports could also be used to utilize code splitting of static string translations. The library generally assumes that you are loading translations form a json file rather than from a back-end service request.

Testing formatjs is well documented for Mocha, Enzyme and Jest tests. A storybook addon [storybook-addon-intl](https://github.com/truffls/storybook-addon-intl) is available. For react-testing-library there is documentation about helpers that can be created to help with testing flow in that regard.


### Polyglotjs

| url                           | stars | last update | releases     | size unpacked |
|-------------------------------|-------|-------------|--------------|---------------|
| https://airbnb.io/polyglot.js | 3.5k  | 3 months    | 24 tagged    | 554 kB        |

Polyglot.js is a tiny I18n helper library written in JavaScript, made to work both in the browser and in CommonJS environments (Node). It provides a simple solution for interpolation and pluralization, based off of Airbnb’s experience adding I18n functionality to its Backbone.js and Node apps.

There is not a huge amount of documentation on polyglotjs, and many features are missing including language detection, loading namespaces, and client/server integrations.

Airbnb created the library to help internationalize their application primarily when using Backbone.js and React is not supported out of the box.

### Globalizejs

| url                     | stars | last update | releases     | size unpacked |
|-------------------------|-------|-------------|--------------|---------------|
| https://globalizejs.com | 4.6k  | 2 months    | 12           | 519 kB        |

A JavaScript library for internationalization and localization that leverage the official [Unicode CLDR](http://cldr.unicode.org/) JSON data. The library works both for the browser and as a Node.js module.

Various modules are provided for the specific functionality that is needed

 File                       | Minified + gzipped size | Runtime minified + gzipped size | Summary                                                      |
| -------------------------- | ----------------------: | ------------------------------: | ------------------------------------------------------------ |
| globalize.js               |                   1.7KB |                           1.1KB | [Core library](#core-module)                                 |
| globalize/currency.js      |                   3.0KB |                           0.7KB | [Currency module](#currency-module) provides currency formatting |
| globalize/date.js          |                   7.7KB |                           4.3KB | [Date module](#date-module) provides date formatting and parsing |
| globalize/message.js       |                   5.3KB |                           0.7KB | [Message module](#message-module) provides ICU message format support |
| globalize/number.js        |                   4.4KB |                           2.6KB | [Number module](#number-module) provides number formatting and parsing |
| globalize/plural.js        |                   2.3KB |                           0.4KB | [Plural module](#plural-module) provides pluralization support |
| globalize/relative-time.js |                   0.8KB |                           0.5KB | [Relative time module](#relative-time-module) provides relative time formatting support |
| globalize/unit.js          |                   0.9KB |                           0.6KB | [Unit module](#unit-module) provides unit formatting support |

The library is primarily on using locale data and formatting dates, currencies, and other locale specific data. String interpolation and loading translations for each language does not appear to be within it's feature set. There is also no built in support for using React.


## Conclusion

The `i18next` library is by far the most feature rich and adaptable choice. It has various React integrations, a backend client, content negotiation, and other modules that are useful for translation. Extending the library can be done through a [plugin system that is documented](https://www.i18next.com/misc/creating-own-plugins) well.
