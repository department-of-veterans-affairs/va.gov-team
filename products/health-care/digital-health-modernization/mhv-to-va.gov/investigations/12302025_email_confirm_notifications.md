# Investigation Traceability: Unwanted "profile updated" notifications when confimring email.
_The purpose of this template is to provide a way to (re-)trace an investigation and capture explorations as we investigate_

## Summary
A fair amount of users were receiving "your profile has been updated" email notifications after confirming their email address through the email confirmation feature. When the feature was turned off, this behavior stopped.
The purpose of this investigation is to trace where the root cause of the is. 

## Relevant Slack Threads
- slack1
- slack2

## Details
Code trace outline (bottom up):
* Run VANotifyEmailJob from
  * VAProfile::ContactInformation::V2::Service#send_email_change_notification
    * ContactInformation::V2::Service#get_email_transaction_status
      * AsyncTransaction::VaProfile::Base#self.fetch_transaction
        * AsyncTransaction::VaProfile::Base#self.refresh_transaction_status
          * Vet360::Transactionable#check_transaction_status!
            * Mobile::V0::Profile::SyncUpdateService#save_and_await_response
              * Mobile::V0::EmailsController#update


Code trace:
* [Alert rendered here](https://github.com/department-of-veterans-affairs/vets-website/blob/1daa25512f2bd312702be87089abf03030eadcc4/src/platform/mhv/components/MhvAlertConfirmEmail/MhvAlertConfirmEmail.jsx#L100)
  * [onConfirm triggered off of the confirm action](https://github.com/department-of-veterans-affairs/vets-website/blob/1daa25512f2bd312702be87089abf03030eadcc4/src/platform/mhv/components/MhvAlertConfirmEmail/MhvAlertConfirmEmail.jsx#L53)
    * onConfirm in the frontend makes a request to `PUT /profile/email_addresses` on vets-api
    * `PUT /profile/email_addresses` routes to the [EmailAddressesController#update method](https://github.com/department-of-veterans-affairs/vets-api/blob/b5180caa0f75af2bb9388b3f41b9e3f7335ce974/app/controllers/v0/profile/email_addresses_controller.rb#L28)
      * EmailAddressesController#update calls `write_to_vet360_and_render_transaction!`, which calls
        * `write_valid_record!` - dead end
        * `create_user_audit_log` - dead end
        * `render_new_transaction!`
