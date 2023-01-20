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

## Feature Toggle List - Status

One thing that is a bit strange is that these toggle do not show up in the same order within the feature toggle ui on staging vs prod, so just be aware.

- `profile_block_for_fiduciary_deceased_or_incompetent` - Added December 2022, and will be removed once analytics data is present and feature is deemed fully production ready. It gates the entire profile, so toggle deemed worth having as failsafe.
- `profile_schema_forms` - No longer used in FE or API. Should be removed
- `profile_show_receive_text_notifications` - ??? removed from features.yml, but still in UI
- `profile_user_claims` - still in use in BE. May be able to remove if decided that the feature is solid at this point.
- `profile_email_specify_change` - in use for only specific users on prod
- `profile_notification_settings` - ??? removed from features.yml, but still in UI
-  `profile_show_address_change_modal` - Added November of 2021, can be removed once reliant code is removed.
- `profile_show_payments_notification_setting` - in use for only specific users on prod
- `profile_show_bad_address_indicator` - ??? removed from features.yml, but still in UI
- `profile_force_bad_address_indicator` - ??? removed from features.yml, but still in UI
- `profile_get_military_info_from_vaprofile` - OFF IN PROD
- `profile_hide_direct_deposit_comp_and_pen` - OFF IN PROD
- `profile_show_appeal_status_notification_setting` - OFF IN PROD
- `profile_show_appeal_status_notification_setting'` - this flag has a dangling ' at the end and the toggle was removed but is still showing up in the UI
- `profile_show_military_academy_attendance` - OFF IN PROD
- `profile_show_pronouns_and_sexual_orientation` - OFF IN PROD. These fields are not implemented in the BE and hadn't been approved, so are removed from showing in the FE
- `profile_use_vafsc` - OFF IN PROD, experimental for using newest form system. Since the form system is currently no production ready this flag is turned off and work can resume when the form system is updated further.
- `profile_use_vaos_v2_api` - OFF IN PROD

