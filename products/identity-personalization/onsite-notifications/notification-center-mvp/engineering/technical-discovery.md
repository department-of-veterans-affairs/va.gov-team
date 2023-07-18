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
- [x] **(Point estimation)** Task

#### Scaffolding
- [ ] **(2)** Inquire Platform team about the last question in Yeoman generator (made this a task under 60398 which is 4pts)
- [ ] **(2)** [Set up new application page](https://depo-platform-documentation.scrollhelp.site/developer-docs/creating-a-new-application) (manually or using generator)
   - this should live at `/src/applications/notification-center` 
- [ ] Create mock data and server for new app: 
  - [ ] **(4)** create `/mocks/server.js` with [common API requests and responses](https://depo-platform-documentation.scrollhelp.site/developer-docs/creating-a-new-application)
  - [ ] **(3)** create `/v0/onsite_notifications` responses
- [ ] **(5)** Connect to global state, and set up reducers and actions if necessary
  - Example [actions](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/actions/notifications.js)
  - Example [reducers](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/reducers/notifications.js) (for fetching success or failure)

**Ticket Summary**
|**Task**| **Points**|**Ticket**|
|----|-----|-----|
|Inquire Platform team about the last question in Yeoman generator| 2 | _I made this a task under 60398 which is 4pts_ | 
|[Set up new application page](https://depo-platform-documentation.scrollhelp.site/developer-docs/creating-a-new-application) (manually or using generator) <br/>- this should live at `/src/applications/notification-center` | 4 | [#60398](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60398) |
| Create  server for new app - create `/mocks/server.js` with [common API requests and responses](https://depo-platform-documentation.scrollhelp.site/developer-docs/creating-a-new-application)| 4 | [#60399](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60399)|
| Create mock data for new app - create `/v0/onsite_notifications` responses | 3 | [#60400](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60400)|
| Connect to global state, and set up reducers and actions if necessary | 5 | [#60403](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60403)|

#### Mid-stack
- [ ] **(2)** Make sure Notification component is pulling in correct data from API call
- [ ] **(2)** Make sure actions handle 4xx and 5xx errors

**Ticket Summary**
|**Task**| **Points**|**Ticket**|
|----|-----|-----|
| Make sure Notification component is pulling in correct data from API call | 2 | [#60438](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60438)|
| Make sure actions handle 4xx and 5xx errors                               | 2 | [#60439](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60439)|

#### Build
- [ ] **(3)** Populate with notification component (no pagination) 
- [ ] **(2)** Make any style tweaks
- [ ] **(3)** Set up breadcrumbs
- [ ] **(4)** Set up pagination
- [ ] **(TBD)** Set up empty state for notifications section on My VA
- [ ] **(TBD)** Set up event tags for GA analytics

**Ticket Summary**
|**Task**| **Points**|**Ticket**|
|----|-----|-----|
| Populate with notification component (no pagination)  | 5  | [#60440](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60440)|
| Make any style tweaks (to component implementation)   | 3  | _combined with [#60440](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60440) to be a 5 pt ticket_ |
| Set up breadcrumbs                                    | 3  | [#60441](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60441)|
| Set up pagination                                     | 4  | [#60442](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60442)|
| Set up empty state for notifications section on My VA | TK | [#60443](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60443)|
| Set up event tags for GA analytics                    | TK | [#60447](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60447)|


#### Maintenance
- [ ] **(4)** Write unit tests
- [ ] **(3)** Work with Angela to gather use/test cases
- [ ] **(3)** Write e2e tests

**Ticket Summary**
|**Task**| **Points**|**Ticket**|
|----|-----|-----|
| Write unit tests                          | 4 |[#60444](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60444)|
| Work with Angela to gather use/test cases | 3 |[#60446](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60446)|
| Write e2e tests                           | 3 |[#60445](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60445)|

#### Nice-to-dos (backlog)
- [ ] explore making a common/shared API call for notifications (between `/notification-center/` and `/dashboard/notifications/`)



### Resources
- [Adding new onsite notifications FE technical discovery](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/onsite-notifications/frontend/adding-new-onsite-notification.md) (GitHub)
- Current [actions for onsite notifications](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/actions/notifications.js) on My VA (GitHub)
- Current [reducers for onsite notifications](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/reducers/notifications.js) on My VA (GitHub)
- Sketch file mockup (TBA)

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
One ticket - 5 -- [#60454](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60454)
- [ ] (BE) Add support to include dismissed notifications when given a flag (e.g., `GET v0/onsite_notifications?dismissed=true`)
- [ ] (BE) Add pagination support to the `v0/onsite_notifications` endpoint
- [ ] (BE) Update the Swagger [docs](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/my_va/listOnsiteNotification) with information on how to paginate

**Ticket Summary**
|**Task**| **Points**|**Ticket**|
|----|-----|-----|
| - Feature flag and global flag set up <br/>- Add support to include dismissed notifications when given a flag (e.g., `GET v0/onsite_notifications?dismissed=true`)| 5 | [#60454](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60454)|
| - Add pagination support to the `v0/onsite_notifications` endpoint <br/>- Update the Swagger [docs](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/my_va/listOnsiteNotification) with information on how to paginate| | [#60639](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60639) |
