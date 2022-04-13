# Product outline: Military information in the VA.gov profile

Last Updated: April 13, 2022

### Communications

Slack channel: [#vsa-authd-exp](https://dsva.slack.com/channels/vsa-authd-exp); [#va-profile](https://dsva.slack.com/channels/va-profile)

### Roles  
  
[This is currently managed by the VA.gov profile team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md#roles).

---

### Table of Contents

- [Overview](#overview)
- [Projects](#projects)
- [Backend](#backend)
- [Design](#design)

---

## Overview

We pull in a small amount of military information to the VA.gov profile. This information is read-only and uneditable, as it is offical government record.

Currently, we show:

- Branch(es) of service
- Period start dates
- Period end dates
- Multple periods of service, if applicable

## Projects

- [Integrate military information through VA Profile](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/military-information/vaprofile-integration#readme)

## Backend

Military currently integrates through [eMIS](https://depo-platform-documentation.scrollhelp.site/developer-docs/EMIS.1887174669.html) but will soon be moving to [VA Profile](https://depo-platform-documentation.scrollhelp.site/developer-docs/VA-Profile.1885602002.html).

## Design 

- [Military Information](https://www.sketch.com/s/fc96664a-1c62-40ed-9fcd-90218c54e775)
