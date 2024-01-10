# Login

This directory contains a plethora of historical and current-state information about Login and VA.gov, which includes:
* Authentication and Authorization
* Login and Account Registration
* Integration with MVI (Master Veteran Index) for LOA3 logged-in users
* User Profile UI & Object with sitewide accessible data
* User Session maintenance


## Quick Links

### Product Reference Documents
* [Getting Started with Identity](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/gettingstartedidentity.md)
* [Authentication and Authorization Product Outline]()
* [Login Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/user-login/loginproductoutline.md)
* [SSO Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/sso)
* [Login Analytics](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/analytics/readme.md)
* [Identity & Login Error Handling](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/error-messages/readme.md)
* [MVI Attributes & Services]()
* [Understanding LOA]()
* [Sign-in-FAQ page](https://www.va.gov/sign-in-faq)



### Technical Reference Documents
* [Front-End Login and Logout Flow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/reference-documents/login/fe-login-and-logout.md)
* [Login Data Flow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/user-login/login-data-flow.md)
* [VA.gov API Authentication and Authorization](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/reference-documents/auth/authentication-and-authorization.md) (primarily technical)
* [VA.gov API Authentication and Authorization](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/reference-documents/auth/authentication-and-authorization-simplified.md) (less technical, more context)
* [ID.me/VA.gov Integration Configuration reference](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/reference-documents/idme/idme-config.md)
* [User Data](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/user/getUser) (swagger documentation)
* [User Serializer](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/serializers/user_serializer.rb#L97-L116)

### Design & User Research Reference Documents
* [Design](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/design/readme.md)
* [User Research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/login/research)

## Additional Notes

* For localhost authentication, crypto is disabled by default. If you wish to enable crypto, you must acquire the `saml-rp.vetsgov.localhost` key and certificate which is located in credstash under `vets_api.localhost.idme_key` & `vets_api.localhost.idme_cert` - ask in [#vsp-operations](https://dsva.slack.com/channels/vsp-operations) slack channel for access.
* If you want to know a heck of a lot of details about MVI (Master Veteran Index), the [MVI Integration]() directory is the place to look.
* How to [add someone to MVI]()
* It is highly recommended that everyone on the VA.gov team attempts to identity proof themselves so that they can login to VA.gov in a production system. Identity proofing is available to everyone, independent of Veteran status.  If you are not a Veteran, you will not be matched in MVI but that's the expected behavior! You will simply not be able to see Veteran-specific items (e.g. secure messaging, Rx refills, etc.)
* To navigate VA.gov as an LOA3 identity proofed Veteran:
  * Pick a test account from [this table](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/mvi-staging-users.csv) (scroll to the right for user/password columns)
  * Visit https://staging.va.gov (HTTP auth username is `veterans` and password is `am3rica`)
  * Click "Sign In"
  * Enter your chosen user/password in the ID.me dialog and click "Sign In"
  * On the "Confirm your identity" page, click "Continue" (you can leave "Text message" selected; this connect to the staging environment and is configured so no one will be messaged)
  * You should see a 6-digit confirmation automatically entered for you; click "Continue"
  * On the "VA.gov SAML Consumer" page, click "Allow"
  * You should now be logged in as an LOA3 identity proofed Veteran with an entry in MVI that allows you to see information for Veteran-specific items (e.g. secure messaging, Rx refills, etc)

 ## Keywords
 When ramping up on this portfolio, the following keywords are helpful in GitHub searches:
 - ID.me
 - MHV
 - DS Logon
 - MVI
 - User
 - Identity
 - Login
 - Sign-in
 - MFA
 - Identity Verification
 - SAML
