# Front End Feature Flags

## Overview

Agile and user centric workflows often use testing of partially complete features to refine or research experiences. This document provides recommendations on using feature flags to manage new unreleased features in our continuous integration environment.

## Enhancements to Existing Applications

**STAGING**: Unreleased features should always be made available on [staging.va.gov](https://staging.va.gov) using [!isProduction()](https://github.com/department-of-veterans-affairs/vets-website/blob/10380007a3ec77047be10e4fb2a42d343c22c5d3/src/platform/utilities/environment/index.js)

**PRODUCTION**: Unreleased features can be made available on www.va.gov by checking [localstorage](https://github.com/department-of-veterans-affairs/vets-website/blob/92811be079cac99884abc28c2c96da61f08fe2a5/src/platform/utilities/storage/localStorage.js) for a developer-defined name/value
   - Turning on the enhancement can be done by adding this name/value to the local storage
      - With a console command ran by the user in the browser, or
      - With application specific code that automatically checks when a certain query parameter is present.

## New Applications

**STAGING**: Unreleased applications should always be made available on [staging.va.gov](https://staging.va.gov) using [!isProduction()](https://github.com/department-of-veterans-affairs/vets-website/blob/10380007a3ec77047be10e4fb2a42d343c22c5d3/src/platform/utilities/environment/index.js)

**PRODUCTION**:
- Unreleased applications can be made available on www.va.gov by checking [localstorage](https://github.com/department-of-veterans-affairs/vets-website/blob/92811be079cac99884abc28c2c96da61f08fe2a5/src/platform/utilities/storage/localStorage.js) for a developer-defined name/value
    - Turning on the application can be done by adding this name/value to the local storage
      - With a console command ran by the user in the browser, or
      - With application specific code that automatically checks when a certain query parameter is present.
- Unreleased applications can be made available on production behind a password by setting `protected: yes` in [react_routes.yml](https://github.com/department-of-veterans-affairs/devops/blob/e1030d1a499e39eaeceb8f4bdcbd33baf7ee946d/ansible/deployment/config/revproxy-vagov/vars/react_routes.yml). External teams should work with their DSVA contact to request support for enabling this.

## New Content Pages

Unreleased content pages should always be made available on [staging.va.gov](https://staging.va.gov) by adding an exclusion flag to the front matter of the content page. For example, because this front matter includes `vagovprod: false`, this content page would be excluded from the build for the production environment:

```markdown
---
title: Apply for disability benefits
vagovprod: false
---
<nav aria-label="Breadcrumb" aria-live="polite" class="va-nav-breadcrumbs"
id="va-breadcrumbs">
```

Content pages can be excluded from any or all of these environments:
```markdown
vagovprod: false
vagovstaging: false
vagovdev: false
localhost: false
```

## Writing Good Feature Flags

- New features or applications should be merged often so they can be included as part of the daily continuous integration deploy. 
- Feature flagged enhancements should be made with code that is [easy to delete](https://programmingisterrible.com/post/139222674273/write-code-that-is-easy-to-delete-not-easy-to)- ideally done simply and with as few checks as possible. Repeating yourself is okay in feature flagged code.
  - Making code that's easy to delete ensures that deprecated code is quickly removed once a feature is released.
- Making features or applications available in production should done only as needed for testing with users.
