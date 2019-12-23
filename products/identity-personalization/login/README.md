# Login

This directory contains a plethora of historical and current-state information about Login and VA.gov, which includes:
* Authentication and Authorization
* Login and Account Registration
* Integration with MVI (Master Veteran Index) for LOA3 logged-in users
* User Profile UI & Object with sitewide accessible data
* User Session maintenance


## Quick Links

### Product Reference Documents
* [Getting Started with Identity](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Login/GettingStartedIdentity.md)
* [Authentication and Authorization Product Outline](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Login/AuthenticationAndAuthorization/readme.md)
* [Login Product Outline](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Login/User%20Login/LoginProductOutline.md)
* [SSO Product Outline](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Login/SSO/readme.md)
* [Login Analytics](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Login/Analytics/readme.md#Comparing-all-logged-in-and-logged-out-users)
* [Identity & Login Error Handling](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Login/Error%20Messages/readme.md)
* [MVI Attributes & Services](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Login/MVI%20Integration/AttributesAndServices.md)
* [Understanding LOA](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Login/AuthenticationAndAuthorization/understanding-LOA-on-vetsdotgov.md)
* [Sign-in-FAQ page](https://www.va.gov/sign-in-faq)



### Technical Reference Documents
* [Front-End Login and Logout Flow](reference_documents/Login/FE_login_and_logout.md)
* [Login Data Flow](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Login/User%20Login/Login_Data_Flow.md)
* [VA.gov API Authentication and Authorization](reference_documents/Auth/authentication_and_authorization.md) (primarily technical)
* [VA.gov API Authentication and Authorization](reference_documents/Auth/authentication_and_authorization_simplified.md) (less technical, more context)
* [ID.me/VA.gov Integration Configuration reference](reference_documents/IDme/idme-config.md)
* [User Data](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/user/getUser) (swagger documentation)
* [User Serializer](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/serializers/user_serializer.rb#L97-L116)

### Design & User Research Reference Documents
* [Design](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Login/Design/README.md)
* [User Research](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Products/Identity/Login/Research)

## Additional Notes

* If you are a developer who wants to use an ID.me connection in your local development environment, please use the [development certificates](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Products/Identity/Login/IDme/development-certificates).
* If you want to know a heck of a lot of details about MVI (Master Veteran Index), the [MVI Integration](MVI%20Integration) directory is the place to look.
* How to [add someone to MVI](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Login/MVI%20Integration/add-user-to-mvi.md)
* It is highly recommended that everyone on the VA.gov team attempts to identity proof themselves so that they can login to VA.gov in a production system. Identity proofing is available to everyone, independent of Veteran status.  If you are not a Veteran, you will not be matched in MVI but that's the expected behavior! You will simply not be able to see Veteran-specific items (e.g. secure messaging, Rx refills, etc.)
* To navigate VA.gov as an LOA3 identity proofed Veteran: 
  * Pick a test account from [this table](MVI%20Integration/reference_documents/mvi_stagingUsers_fullList.csv) (scroll to the right for user/password columns)
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

