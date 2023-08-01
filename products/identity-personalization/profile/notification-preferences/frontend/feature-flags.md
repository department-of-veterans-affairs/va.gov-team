# Feature flags associated with notification preferences

**Last updated: July 26, 2023**

- `profile_use_notification_settings_checkbozes`
  - toggles the usage of radio buttons vs checkboxes as the input type that is used for every notification. Also consumes default send indicator boolean when turned on.

- `profile_show_payments_notification_setting`
  - Used to show/hide Payments group and related notifications in Notification Settings page

- `profile_show_email_notification_settings`
  - toggles display of ALL email based notification checkboxes

- `profile_show_mhv_notification_settings`
  - toggles display of ALL MHV notifications
  - the MHV notifications all happen to be email based, so this is similar to the above, but will allow any future email notifications to be toggled separately
  - RX refill shipment notification (needs combined with Prescription shipment and tracking updates via VA Profile)
  - VA Appointment Reminders (needs to be combined with Appointment Reminders via VA Profile)
  - Secure messaging alert
  - Medical images and reports available
  - Biweekly MHV newsletter (in turn the General VA Updates and Information group is hidden since this notification is the only one in the group) 

- `profile_show_quick_submit_notification_setting`
  - should not be turned on at all on prod at this point
  - toggles display of QuickSubmit group and QuickSubmit Upload Status notification

- `profile_use_field_editing_page` - somewhat related
  - allows an 'editing as a sub-task' UI to be used when updating a single section of profile. Used for mobile phone and email address sections via notification settings page alerts when one of those channels is missing from the user's profile.
  
They are all ON is staging at this point, except for the QuickSubmit one since that is supposed to just be turned off completely.
