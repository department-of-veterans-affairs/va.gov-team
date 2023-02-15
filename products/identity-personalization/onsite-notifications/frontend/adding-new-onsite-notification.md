# Adding new onsite notifications - FE tech discovery

- [1. Background](#1-background)
- [2. Creating Onsite Notifications](#2-creating-onsite-notifications)
- [3. Helpful Resources](#3-helpful-resources)
  - [3.1. General](#31-general)
  - [3.2. Frontend](#32-frontend)
  - [3.2. Backend](#32-backend)
- [4. 🚧 To add to documentation: 🚧](#4--to-add-to-documentation-)

---

## 1. Background

When a notification with `onsite_notification` enabled is triggered, VA Notify will call the `vets-api` for the onsite notification endpoint: `/v0/onsite_notifications` with
  - **template_id**
  - **va_profile_id**

VA.gov is using the VA Notify **template_id** to determine what onsite notifications to display on the site. These **template_ids** are [defined in the `vets-api` repo](https://github.com/department-of-veterans-affairs/vets-api/blob/master/config/settings.yml#L333) for both staging and production.

- See Creating Onsite Notifications section of the Technical Overview (need access to `va.gov-team-sensitive` repo): 
https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/my-va/onsite_notifications/technical-overview.md#creating-onsite-notifications 

These template IDs are used in the [`Notifications` component](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/components/notifications/Notifications.jsx#L11-L13) on the frontend.

As of February 9th, 2023, there only exists one onsite notification: [`DebtNotification`](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/components/notifications/DebtNotification.jsx).

---

## 2. Creating Onsite Notifications

1. Acquire **template_id** of desired notification - to do this, we'll need to coordinate with the VA Notify team (Melanie Jones and Beverly Nelson). **([PM, BE, FE] 1–2 days)**
2. Coordinate with the backend developer on the My VA team(Tom Harrison) so they can update the model, controller, and Swagger docs on the `vets-api` repo. **([BE] ~3 days, but consult w Tom)**
3. Create (or extend?) current Notifications component on the `vets-website` repo. 
   - This will require planning and refactoring the current components in order to best scale for additional onsite notifications. **([FE] 8 days, Allison to break this down into smaller tix)**
4. Find all instances of debt notification template_id in `vets-website` and update to include new desired notification template_id **([FE] 2–3 days)**
5. In order to test and validate the new onsite notification, we'll need to push to staging (behind feature flag) to connect with the API. **([FE] 1–2 days depending on devs who are available for code reviews, [PM, Design] 2–3 days for design/PM validation)**
6. Make any copy or design changes after validation **([FE] 1–2 days to get it through PR and onto staging)**

**Total estimated LOE:** 18–23 days 

---

## 3. Helpful Resources

###  3.1. General
- VA Notify - Technical Overview: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-notify/onsite-notifications/README.md#workflow-overview

###  3.2. Frontend
- Dismissible `va-alert` web component: [https://design.va.gov/storybook/?path=/docs/components-va-alert--dismissable](https://design.va.gov/storybook/?path=/docs/components-va-alert--dismissable)
- Onsite notification PR for Debts: https://github.com/department-of-veterans-affairs/vets-website/pull/21102
- #36034: Onsite notifications - connecting FE to BE ticket: https://github.com/department-of-veterans-affairs/va.gov-team/issues/36034

- Fetching / API call: https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/actions/notifications.js
- Current `Notifications` and `DebtNotification` components: https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/personalization/dashboard/components/notifications

### 3.2. Backend 
- Ruby code:
https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/onsite_notifications_controller.rb 
- Swagger docs for `onsite_notifications`: https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/my_va/updateOnsiteNotification

---

## 4. 🚧 To add to documentation: 🚧
- how to mock users who have onsite notifications (for local developing)
- how much we know about the logged in user
- how to test new notifications
- diagram?
- troubleshooting
