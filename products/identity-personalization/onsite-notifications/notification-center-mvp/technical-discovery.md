# Technical Discovery: Notification Center MVP
**Last updated: June 5, 2023 - published**

## Background
This document outlines the work needed to be done on My VA to implement the Notification Center MVP.

For the MVP, our goal is to create a new URL landing page for Notification Center, and display a list of notifications to the user.

In case the user has many notifications, the user should be able to page through the notifications. We have not defined what "too many" means yet but should be easily configured through the backend.

## Frontend
...

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
