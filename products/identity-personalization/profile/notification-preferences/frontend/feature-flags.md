# Feature flags associated with notification preferences

**Last updated: August 29, 2024**


# Table of Contents
  - [MHV Notifications](#mhv-notifications)
  - [C&P Notifications](#cp-notifications)
  - [Debt Team Notifications](#debt-team-notifications-epic-link)
  - [Appendix](#appendix)



## MHV Notifications
- `profileShowMhvNotificationSettingsEmailAppointmentReminders`
     - This enables the email appointment reminders
     - Text appointment reminders is already a feature VA.gov supports and is not controlled by this toggle 

- `profileShowMhvNotificationSettingsNewSecureMessaging`
     - this enables the MHV secure messages 

- `profileShowMhvNotificationSettingsEmailRxShipment`
     - this enables email RX shiment notifiations
     - Text RX shipment notifications are already live 

- `profileShowMhvNotificationSettingsMedicalImages`
     - this is a notification permission that historically was associated with the "blue botton" feature on MHV 


- `profile_show_quick_submit_notification_setting`
  - should not be turned on at all on prod at this point
  - toggles display of QuickSubmit group and QuickSubmit Upload Status notification
  - this notification item should be fully blocked in prod always 

## C&P Notifications 

- `profile_show_payments_notification_setting`
  - Used to show/hide Payments group and related notifications in Notification Settings page > [this is live in production and we should be able to remove this in Sept/Oct 2024](https://github.com/department-of-veterans-affairs/va.gov-team/issues/86892)

## Debt Team Notifications ([Epic Link](https://github.com/department-of-veterans-affairs/va.gov-team/issues/78796))

- `profile_show_new_benefit_overpayment_debt_notification_setting`
     - in staging this enables overpayment email notifications

- `profile_show_new_health_care_copay_bill_notification_setting` 
     - in staging this neables new copay message item 
  



## Appendix 

<details><summary>Old toggles we're no longer using</summary>
<p>

- `profile_show_mhv_notification_settings` > we broke this toggle down int0 4 new toggles 
  - toggles display of ALL MHV notifications
  - the MHV notifications all happen to be email based, so this is similar to the above, but will allow any future email notifications to be toggled separately
  - RX refill shipment notification (needs combined with Prescription shipment and tracking updates via VA Profile)
  - VA Appointment Reminders (needs to be combined with Appointment Reminders via VA Profile)
  - Secure messaging alert
  - Medical images and reports available
  - Biweekly MHV newsletter (in turn the General VA Updates and Information group is hidden since this notification is the only one in the group) 

- `profile_use_notification_settings_checkbozes`
  - toggles the usage of radio buttons vs checkboxes as the input type that is used for every notification. Also consumes default send indicator boolean when turned on.

- `profile_show_email_notification_settings`
  - toggles display of ALL email based notification checkboxes

- `profile_use_field_editing_page` - somewhat related
  - allows an 'editing as a sub-task' UI to be used when updating a single section of profile. Used for mobile phone and email address sections via notification settings page alerts when one of those channels is missing from the user's profile.
  - when turned ON, there is a new `profile/edit` route that uses the url query parameters to dispaly a single field for editing, and will return to a defined `returnPath` upon successful save or cancel of editing the field.
    
</p>
</details> 
