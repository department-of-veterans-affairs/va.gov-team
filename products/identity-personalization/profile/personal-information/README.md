# Product outline: Personal information in the VA.gov profile

Last Updated: March 25, 2022

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

We pull in a small amount of personal information to the VA.gov profile. Some of this information is read-only and uneditable, as it is offical government record and used for identity purposes. Other information is read/write and allows the people to view and update.

Currently, we show:

- Full name (not editable)
- Date of birth (not editable)
- Preferred name (editable -- launching June 2022)
- Gender identity (editable -- launching June 2022)

## Projects

- [Personal information revisions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/personal-information-revision/README.md)

## Backend

Personal information integrates through two different services:

- Full name and date of birth come from the [Master Person Index (MPI)](https://depo-platform-documentation.scrollhelp.site/developer-docs/MVI.1886847049.html).
- Preferred name and gender identity come from [VA Profile](https://depo-platform-documentation.scrollhelp.site/developer-docs/VA-Profile.1885602002.html).

## Design 

- [Personal information](https://www.sketch.com/s/ba254d92-3c3d-4eba-825d-d7f5bda35565)
