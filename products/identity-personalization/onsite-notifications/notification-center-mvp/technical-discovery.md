# Technical Discovery: Notification Center MVP
**Last updated: June 5, 2023 - published**

## Background
This document outlines the work needed to be done on My VA to implement the Notification Center MVP.

For the MVP, our goal is to create a new URL landing page for Notification Center, and display a list of notifications to the user.

In case the user has many notifications, the user should be able to page through the notifications. We have not defined what "too many" means yet but should be easily configured through the backend.

## Frontend
### Setting up / initial scaffolding 

This will probably take the most time and effort on the front end. 

We can follow the [Creating a new application](https://depo-platform-documentation.scrollhelp.site/developer-docs/creating-a-new-application) page on Platform documentation. They also have a [application generator](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-gov-application-generator) (however I think the docs are out of date because I get an extra question after **Is this a form app?**)

### Components needed

- [Breadcrumbs](https://design.va.gov/components/breadcrumbs)
- [Notification](https://va-notification--60f9b557105290003b387cd5.chromatic.com/?path=/docs/components-va-notification--default) (coming soon!)
- [Pagination](https://design.va.gov/components/pagination)

### Accessibility

One potential issue on this page is the presence of redundant headers and links in the Notification cards.

### Tasks
| Task | Point estimation |
|--- | --- |
| Inquire Platform team about the last question in Yeoman generator | 2 |
| Set up new application page (manually or using generator) | 2 |
| Create mock data and server for new app | 4 |
| Get state, reducers, actions set up | 5 |
| Populate with multiple of one type of notification (no pagination) | 4 |
| Populate with multiple both types of notifications (no pagination) | 4 |
| Write unit tests | 4 |
| Write e2e tests | 3 |
| Set up pagination | 3–4 |
| Set up breadcrumbs | 3 |

### Resources
- ...

## Backend (BE)
On-site notifications are fetched via the `v0/onsite_notifications` endpoint in Vets API.

Notifications are stored in the database and we have the ability to fetch and include dismissed notifications.

For pagination, Vet's API uses a Ruby gem called `will_paginate`. We will reuse this gem in [the same way that it is used throughout the API](https://github.com/search?q=repo%3Adepartment-of-veterans-affairs%2Fvets-api%20paginate&type=code) to implement pagination.

As the MVP currently stands, there shouldn't any additional work needed on the backend besides implementing pagination feature.

### BE Error Handling
There aren't many errors that will occur that is recoverable from the FE perspective.

The `GET v0/onsite_notifications` endpoint should only fail if something is broken in the backend, or if incorrect authorization information is passed in.

Therefore, the typical `4xx` and `5xx` family of errors are in play and should be gracefully handled by the frontend.

### Resources
- Swagger [docs](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/my_va/listOnsiteNotification)
- Backend [code](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/onsite_notifications_controller.rb)
- `will_paginate` [docs](https://github.com/mislav/will_paginate/wiki)

### Tasks
- [ ] (BE) Add support to include dismissed notifications when given a flag (e.g., `GET v0/onsite_notifications?dismissed=true`)
- [ ] (BE) Add pagination support to the `v0/onsite_notifications` endpoint
- [ ] (BE) Update the Swagger [docs](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/my_va/listOnsiteNotification) with information on how to paginate
