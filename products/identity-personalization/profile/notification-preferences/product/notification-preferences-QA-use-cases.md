# Product Use Cases: Notification Preferences

Link to product outline: [Notification Preferences product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/notifications/notification-preferences/README.md)

## Contents
<details>
<summary></summary>
  
- [Use Case A: LOA1 unverified identity](#use-case-a-loa1-unverified-identity) 
- [Use Case B: Not enrolled in health care](#use-case-b-not-enrolled-in-health-care)
- [Use Case C: Health care with Rx tracking](#use-case-c-health-care-with-rx-tracking) 
- [Use Case D: No Rx tracking](#use-case-d-no-rx-tracking)
- [Use Case E: Missing mobile phone](#use-case-e-missing-mobile-phone)  
- [Use Case F: Save failure](#use-case-f-save-failure)
  
  
</details>

## Use Case A: LOA1 unverified identity

* **Description**
  - LOA1 user has not verified their identity -- use Safari only and locally override User >  
  - User sees warning message stating that we can't load all of their profile information, and they are prompted to verify their identity

* **Link to designs**
  - [Alert screenshot](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/Design/LOA1.png)

* **Instructions to access in Staging** 
  1. Log in to staging using any LOA1 test user credentials
  2. Navigate to Profile
  3. See warning message at the top of the page stating your profile information can't be loaded, and a prompt to verify your identity

## Use Case B: Not enrolled in health care

* **Description**
  - User is _not_ enrolled in health care and therefore does not see the "Your health care" notification group or items within

* **Link to designs**
  - [Mockup](https://preview.uxpin.com/51ca6ecd7ddaf2ceaf75f94e2b2ccbed2a193f6d#/pages/141756452/simulate/sitemap?mode=i)

* **Instructions to access in Staging** 
  1. Log in to staging using test user 42 or test user 202 ([creds](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv))
  2. Navigate to Profile > Notification settings page
  3. Health care section will not be displayed.

## Use Case C: Health care with Rx tracking

* **Description**
  - User is enrolled in health care at a participating prescription shipment tracking facility 

* **Link to designs**
  - [Mockup](https://preview.uxpin.com/51ca6ecd7ddaf2ceaf75f94e2b2ccbed2a193f6d#/pages/141756016/simulate/sitemap?mode=i) 

* **Instructions to access in Staging** (_Note: credentials should be stored in sensitive repos only_)
  1. Log in to staging using test user 36 ([creds](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv))
  2. Navigate to Profile > Notification settings page
  3. Health care section will be displayed, and will include prescription settings.

## Use Case D: No Rx tracking

* **Description**
  - User is enrolled in health care but _not_ with a participating prescription shipment tracking facility

* **Link to designs**
  - [Mockup](https://preview.uxpin.com/51ca6ecd7ddaf2ceaf75f94e2b2ccbed2a193f6d#/pages/141756485/simulate/sitemap?mode=i)

* **Instructions to access in Staging** (_Note: credentials should be stored in sensitive repos only_)
  1. Log in to staging using test user ssoissoetesting+mhvcss4@gmail.com ([creds](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-cerner.md))
  2. Navigate to Profile > Notification settings page
  3. Health care section will be displayed, but _won't_ include prescription settings.


## Use Case E: Missing mobile phone

* **Description**
  - User profile is missing mobile phone number

* **Link to designs**
  - [Mockup](https://preview.uxpin.com/51ca6ecd7ddaf2ceaf75f94e2b2ccbed2a193f6d#/pages/141757595/simulate/sitemap?mode=i)

* **Instructions to access in Staging** (_Note: credentials should be stored in sensitive repos only_)
  1. Log in to staging using any LOA3 test user -- Remove mobile-phone-number as needed to start Case. ([creds](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv))
  2. Navigate to Profile > Notification settings page
  3. Alert will be displayed indicating missing mobile phone number, including direct deeplink to mobile-phone-number page/section.
  4. After mobile-phone-number add, page/section will also display return deeplink to Notification settings page.

## Use Case F: Save failure

* **Description**
  - Save failure

* **Link to designs**
  - [Mockup](https://preview.uxpin.com/51ca6ecd7ddaf2ceaf75f94e2b2ccbed2a193f6d#/pages/140948867/simulate/sitemap?mode=i)_Note: this is for demonstrative purposes only, there will not be a notification item labeled "Error State Example."_

* **Instructions to access in Staging** (_Note: credentials should be stored in sensitive repos only_)
  1. Log in to staging using any LOA3 user ([creds](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv))
  2. Navigate to Profile > Notification settings page
  3. Once page has loaded, turn off your wifi
  4. Attempt to make a radio button selection
  5. See the save failure error message.
