# Account Creation API - Current State

This document describes the initial version of an account creation/upgrade API used between VA.gov and MHV. This API is currently dormant, but was implemented and used in production for several years


## Prerequisites
The API was only invoked if users met the following requirements:
1. The user was signed in to VA.gov with Level of Assurance (LOA3) - roughly speaking this meant that the user was both identity proofed and enrolled in 2 factor authentication.
2. The user was a VA patient, as determined by looking for one or more treating facilities in their MPI profile.
3. The user did not already have an MHV premium account, as determined by checking for an MHV IEN identifier in MPI, and then using the blue button API to determine the current account level. 

This means there are several categories of users who might have the account creation/upgrade API invoked:
* LOA3 ID.me users who are patients but with no other MHV account. 
* LOA3 ID.me users who might have had a separate MHV advanced credential/account. The advanced account would be located in MPI, and then upgraded via the API.
* LOA3 ID.me users who might have had a separate MHV basic credential/account. Note that in this case, a **new** alternate account would be created -- since basic accounts are not recorded in MPI, there would be no way for VA.gov to discover one.
* A user with an MHV basic or advanced credential who signs in through VA.gov. VA.gov would broker these sign-ins through ID.me (which would perform identity verification and wrap them in 2 factor authentication). The account would then be upgraded to premium, and that existing MHV credential would now have premium-level access.

## Overall Flow
1. User signs in to VA.gov with LOA3 credential. 
2. User navigates to one of the VA.gov health tools. 
  * In previous incarnations of the site, SM, Rx, and health record functionality was implemented on Vets.gov, and the below steps would be performed before any health data was accessed. 
  * Later, the health tools were retired in favor of linking the user to the functionality on MHV, and the below step would be performed before linking the user.
  * Finally, once we determined that VA.gov was only linking to MHV, the account creation capability was disabled in favor of the user completing these steps on MHV.  
4. Above prerequisites are checked.
5. If no existing MHV account is detected, or an existing non-premium account is detected, then terms and conditions are displayed to user for acceptance. Internal state machine is updated to indicate that T&C have been accepted.
6. VA.gov invokes the `register` endpoint (`/mhv-api/patient/v1/account/register`, payload is described below). Register operation returns a new MHV account ID. Internal state machine is updated to indicate account is created. MHV account ID is stored in VA.gov user model.
7. VA.gov invokes the `upgrade` endpoint ('/mhv-api/patient/v1/account/upgrade`, payload is described below). Internal state machine is updated to indicate account is upgraded. 

## Data Elements
### Register Endpoint
[Ruby Implementation](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/mhv_ac/registration_form.rb#L65)

```
    attribute :icn, String
    attribute :is_patient, Boolean
    attribute :is_patient_advocate, Boolean
    attribute :is_veteran, Boolean
    attribute :is_champ_VA_beneficiary, Boolean
    attribute :is_service_member, Boolean
    attribute :is_employee, Boolean
    attribute :is_health_care_provider, Boolean
    attribute :is_other, Boolean
    attribute :address1, String
    attribute :address2, String
    attribute :city, String
    attribute :state, String
    attribute :zip, String
    attribute :country, String
    attribute :province, String
    attribute :contact_method, String
    attribute :email, String
    attribute :fax, String
    attribute :home_phone, String
    attribute :mobile_phone, String
    attribute :pager, String
    attribute :work_phone, String
    attribute :sign_in_partners, String
    attribute :terms_version, String
    attribute :terms_accepted_date, Common::HTTPDate
```
* These attributes would be posted as a JSON body element to the `register` endpoint.
* All the values would be derived from MPI or other internal data sources. The user was not prompted for any of the information. So for the fields indicating the user type, only `is_patient` would ever be set to true, as VA.gov had no way of determining any other user types.
* `terms_version` was implemented to allow for the possibility of a revised T&C needing to be accepted, in which case the state machine would have detected the mismatch and presented new T&C to the user. It's unclear if the API would have been re-invoked to record the latest acceptance, as this scenario never came up while the API was in use.

### Upgrade Endpoint
[Ruby Implementation](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/mhv_ac/upgrade_form.rb#L21)

```
    attribute :user_id, Integer
    attribute :form_signed_date_time, Common::HTTPDate
    attribute :form_upgrade_manual_date, Common::HTTPDate
    attribute :form_upgrade_online_date, Common::HTTPDate
    attribute :terms_version, String
```
* These attributes would be posted as a JSON body element to the `upgrade` endpoint.
* It's unclear what the `upgrade_manual` vs. `upgrade_online` values were used for. 
* `form_signed` doesn't indicate that any document was e-signed or anything like that, it was understood to be implicit in accepting T&C and using the site that this was equivalent to signing the form. 

## Possible Improvements
1. Ideally, decouple terms and conditions acceptance from this process. From an overall system complexity standpoint, it would be best if T&C acceptance could be assumed for any authenticated user, rather than individual services having to account for it. In other words, T&C should be presented during or immediately after the sign in process across all VA web properties. 
2. If possible, combine the register and upgrade operations into one operation, so that the only accounts that get created are premium-level accounts. If an existing account is detected for an ICN, then MHV can upgrade it internally, but remove that complexity from the invoking client since it results in state having to be tracked in two places.
3. Reduce the number of fields that need to be provided. Since MHV's user profile is being deprecated in favor of VA profile, many of the contact information fields can potentially be removed. If the user type fields are still required, then those need to be determined properly or set on the VA.gov profile page, if there is no way to derive them other than from user input.
4. As mentioned above, VA.gov uses an awkward mechanism to determine account type (calling the MHV blue button API's `eligible_data_classes` API and looking at the number of data classes returned). If VA.gov needs to determine account type at all, then create a purpose-built API operation specific to this requirement. 
  * This API may not be needed during account creation, if VA.gov can just call a single "create account" operation idempotently. But it may be needed as health tools move to VA.gov and access decisions need to be made, so this may be a separate requirement to analyze. 
