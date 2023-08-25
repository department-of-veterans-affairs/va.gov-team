# Auth Experience team feature toggle guide

Last updated: December 13, 2022

- [Auth Experience team feature toggle guide](#auth-experience-team-feature-toggle-guide)
  - [Overview](#overview)
  - [Team specific practices](#team-specific-practices)
  - [Rough guidelines of how to implement a toggle](#rough-guidelines-of-how-to-implement-a-toggle)
  - [Testing features in production](#testing-features-in-production)
  - [Feature toggle list](#feature-toggle-list---status)

## Overview

[Platform docs around feature toggles](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/tools/feature-toggles/)

## Team-specific practices

- Ideally, we use one toggle per feature.
- A feature is an enhancement we would want to test and prove out before the end users can see/use it.
- Always aim to deprecate a toggle after the feature is successfully deployed to production.
- Namespace your toggles by naming the toggle using the `profile_` prefix. The toggle should be specific to your feature. For example: `profile_my_feature` or `profile_do_not_require_zip_code`.

## Rough guidelines of how to implement a toggle

- Add the toggle to the code base via the instructions in the platform docs.
- Typically, FE and BE should use the same toggle unless there are unique requirements. Typically the fewer toggles, the better.
- If separate FE and BE feature toggles are required, then the BE toggle will need to be fully enabled during rollout to avoid any issues with 25/50/75% deployments
- Add a new selector to the selector file [Example](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/profile/selectors.js). This allows for easy reuse and removal
- Add your toggle to our [mock API server](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/profile/mocks/feature-toggles/index.js#L1). This will help in the creation of the e2e tests and other testing situations.
- Implement your cool feature and get it merged into staging
- Create/ensure there are e2e tests to cover the feature toggle on **and** off.
- Once the feature is fully merged into staging, enable it for all users. Work with the team to test this out and make sure it works.

## Testing features in production

- First, we start by enabling the feature per user. Enabling per user allows for smoke testing and UAT testing.
  - To note, the team should be checking analytics for the smoke test to confirm they are working.
- Once the feature has been smoke-tested and UAT tested, we enable it for a subset of users, usually `25%` of logged-in users.
- After a bit, we bump the number to `50%`, then `75%`, and then `100%` of logged-in users. With each bump happening after we verify the feature works as expected, using the analytics we have set up.
  - Each of these steps will be a ticket created by your PM/PO.
- Once the feature is entirely on, the developer can remove the feature toggle. Removing the toggle will also include removing old tests and code no longer needed.

## Auth Experience team feature toggle guide

Last updated: July 11, 2022

- [Auth Experience team feature toggle guide](#auth-experience-team-feature-toggle-guide)
  - [Overview](#overview)
  - [Team specific practices](#team-specific-practices)
  - [Rough guidelines of how to implement a toggle](#rough-guidelines-of-how-to-implement-a-toggle)
  - [Testing features in production](#testing-features-in-production)

## Overview

[Platform docs around feature toggles](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/tools/feature-toggles/)

## Team-specific practices

- Ideally, we use one toggle per feature.
- A feature is an enhancement we would want to test and prove out before the end users can see/use it.
- Always aim to deprecate a toggle after the feature is successfully deployed to production.
- Namespace your toggles by naming the toggle using the `profile_` prefix. The toggle should be specific to your feature. For example: `profile_my_feature` or `profile_do_not_require_zip_code`.

## Rough guidelines of how to implement a toggle

- Add the toggle to the code base via the instructions in the platform docs.
- Typically, FE and BE should use the same toggle unless there are unique requirements. Typically the fewer toggles, the better.
- If separate FE and BE feature toggles are required, then the BE toggle will need to be fully enabled during rollout to avoid any issues with 25/50/75% deployments
- Add a new selector to the selector file [Example](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/profile/selectors.js). This allows for easy reuse and removal
- Add your toggle to our [mock API server](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/profile/mocks/feature-toggles/index.js#L1). This will help in the creation of the e2e tests and other testing situations.
- Implement your cool feature and get it merged into staging
- Create/ensure there are e2e tests to cover the feature toggle on **and** off.
- Once the feature is fully merged into staging, enable it for all users. Work with the team to test this out and make sure it works.

## Testing features in production

- First, we start by enabling the feature per user. Enabling per user allows for smoke testing and UAT testing.
  - To note, the team should be checking analytics for the smoke test to confirm they are working.
- Once the feature has been smoke-tested and UAT tested, we enable it for a subset of users, usually `25%` of logged-in users.
- After a bit, we bump the number to `50%`, then `75%`, and then `100%` of logged-in users. With each bump happening after we verify the feature works as expected, using the analytics we have set up.
  - Each of these steps will be a ticket created by your PM/PO.
- Once the feature is entirely on, the developer can remove the feature toggle. Removing the toggle will also include removing old tests and code no longer needed.

## Feature Toggle List - Currently used toggles

_Note: One thing that is a bit strange is that toggles do not show up in the same order within the feature toggle ui on staging vs prod, so just be aware._

- `profile_user_claims` - ON IN PROD
  - May be able to remove if decided that the feature is solid at this point. Provides boolean flags on what endpoints should be able to be called for a given user

- `profile_use_field_editing_page` - OFF IN PROD
  - allows an 'editing as a sub-task' UI to be used when updating a single section of profile. Used for mobile phone and email address sections via notification settings page alerts
  
- `profile_show_payments_notification_setting` - OFF IN PROD
  - Used to show/hide Payments group and related notifications in Notification Settings page

- `profile_use_info_card` - ON IN PROD
  - will be removed, as work has been completed and validated. Allows switching between the newer Info Card component and older table component.
 
- `profile_hide_direct_deposit_comp_and_pen` - OFF IN PROD
  - can be used to hide Direct Deposit Comp and Pen
    
- `profile_show_military_academy_attendance` - OFF IN PROD
  - shows military academy attendance in the history shown on Military Information page
    
- `profile_show_pronouns_and_sexual_orientation` - OFF IN PROD
  - Work for these fields is on hold, so they are hidden in the FE via this toggle until further notice
    
- `profile_use_vafsc` - OFF IN PROD
  - being removed, was from an experiement using the VAFSC library for forms and fields

