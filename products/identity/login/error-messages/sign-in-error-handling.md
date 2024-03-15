## Background (updated 1.7.22)
This document outlines how login error handling works for va.gov, including the final error messages displayed to the user.

## Login Error Handling Flow
![login error handling](https://user-images.githubusercontent.com/21130918/52303333-b6f94e80-295d-11e9-8bfb-4cf301e149f6.png)


## Sign In Error Messages

* [001 - Authorization of VA.gov is denied](#001-authorization-of-vagov-is-denied)
* [002 - Expired SAML response while user logged in](#002-expired-saml-response-while-user-logged-in)
* [003 - VAgov API server time is behind IDme server time](#003-vagov-api-server-time-is-behind-idme-server-time)
* [004 - We can't match your information with Veteran records](#004-we-cant-match-your-information-with-veteran-records)
* [005 - Expired SAML response while user logged out](#005-expired-saml-response-while-user-logged-out)
* [006 - Placeholder not mapped to any specific error message](#006-placeholder-not-mapped-to-any-specific-error-message)
* [007 - Generic something went wrong message](#007-generic-something-went-wrong-message)

## Error Prevalence 
[This code](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/saml/response.rb#L5) and [this code](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/services/sso_service.rb#L10) logs our sign-in errors into Sentry so that we can view the prevalence at the following Sentry links: 

* [001](http://sentry.vetsgov-internal/vets-gov/platform-api-production/?query=is%3Aunresolved+Subject+did+not+consent+to+attribute+release)
* [002](http://sentry.vetsgov-internal/vets-gov/platform-api-production/?query=is%3Aunresolved+Current+time+is+on+or+after+NotOnOrAfter+condition)
* [003](http://sentry.vetsgov-internal/vets-gov/platform-api-production/?query=is%3Aunresolved+Current+time+is+earlier+than+NotBefore+condition)
* [004](http://sentry.vetsgov-internal/vets-gov/platform-api-production/issues/29156/?query=is:unresolved%20on%20User/Session%20Validation)
* [007](http://sentry.vetsgov-internal/vets-gov/platform-api-production/?query=is%3Aunresolved+Other+SAML+Response+Error%28s%29)

## 001 Authorization of VA.gov is denied

#### Reason this error appears:
* After the identity verification process is successfully completed, the [Authorize VA screen](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/error-messages/alerts/01-authorize-va-screen.png) displays and the user clicks **Deny** instead of **Allow**. 
* If the user denies authorization and signs in again later, the [Authorize VA  screen](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/error-messages/alerts/01-authorize-va-sign-in-screen.png) displays again. If they choose **Deny**, they will see the error again.

#### How to resolve: 
The user can sign in and click **Allow** on the [Authorize VA  screen](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/error-messages/alerts/01-authorize-va-sign-in-screen.png).

#### Front End Error Message

https://staging.va.gov/auth/login/callback?auth=fail&code=001

![001 Authorization of VA.gov is denied](https://user-images.githubusercontent.com/1067024/54005723-7e00f500-4128-11e9-9bf4-9bea7ebaea78.png)


## 002 Expired SAML response while user logged in

### Reason this error appears:
The identity provider (id.me) creates a SAML Response that gets returned to the browser and passed along to our API to log them in. The SAML Response has a "not_on_or_after" time that behaves like an expiration time.  After that time, the response is no longer valid.  This is to prevent people from re-using the response to log in again. This error has increased significantly since full-screen login was enabled.  
This is believed to be happening two ways:
  - Log in, wait >5 minutes and hit the back button on the browser. That will reset your session and try to use the expired SAML Response.  
  - Having multiple tabs open, which had been signed in but now have an expired SAML response

### How to resolve: 
We've got a three part resolution outlined. There is nothing the user needs to do to resolve this, so we'll handle it for them in code.



## 003 VAgov API server time is behind IDme server time

### Reason this error appears:
We haven't actually seen this error happen, but it could if our API server's time is behind id.me's server time.

### How to resolve: 
The user can try again, hoping to reach a different server. If it does happen, we'll get a ping in sentry to fix as well.

### Front End Error Message

https://staging.va.gov/auth/login/callback?auth=fail&code=003

![002-003 Clock time error](https://user-images.githubusercontent.com/1067024/54005727-80634f00-4128-11e9-8daa-e8d1785db1bd.png)


## 004 'We can't match your information with Veteran records’

### Reason this error appears:
* A Premium My HealtheVet or DS Logon Account is missing baseline attributes (Name, DOB, SSN)

### How to resolve: 
* If a Premium My HealtheVet or DS Logon account is missing baseline attributes, the user can
   * submit a help request via an online form
   * try to sign in using an ID.me account

### Front End Error Message

https://staging.va.gov/auth/login/callback?auth=fail&code=004

![We can't match your information with Veteran records](https://user-images.githubusercontent.com/1067024/54005730-835e3f80-4128-11e9-9cfc-c3109d53e0b8.png)

### 005 Expired SAML response while user logged out

### Reason this error appears:
The identity provider (id.me) creates a SAML Response that gets returned to the browser and passed along to our API to log them in. The SAML Response has a "not_on_or_after" time that behaves like an expiration time.  After that time, the response is no longer valid.  This is to prevent people from re-using the response to log in again. This error has increased significantly since full-screen login was enabled.  
This is believed to be happening two ways:
  - Log in, wait >5 minutes and hit the back button on the browser. That will reset your session and try to use the expired SAML Response.  
  - Having multiple tabs open, which had been signed in but now have an expired SAML response

### How to resolve: 
We've got a three part resolution outlined. There is nothing the user needs to do to resolve this, so we'll handle it for them in code.

## 006 Placeholder not mapped to any specific error message


## 007 Generic something went wrong message

### Reason this error appears:
- The saml response is invalid for a reason other than the specific reasons mapped above. Additionally, the same message is shown if there is an error and no code is set. 
- After the backend processes a successful or failed login, we redirect the user to `/callback`. When the user arrives on the page, we then try to retrieve the user profile/session data by making an API call to `/user`. If for some reason fetching the profile data fails, the user will be shown the default "We’re sorry. Something went wrong on our end." error.

### How the user can resolve
To our knowledge, the user can't and just needs to try again. We're working on providing better information to through a revised help request form so that we can get better visibility on anything that needs to be extracted out here into a separate, more helpful message

### Front End Error Message

https://staging.va.gov/auth/login/callback?auth=fail&code=007

![Default generic identity provider error](https://user-images.githubusercontent.com/1067024/54005735-86f1c680-4128-11e9-9d5a-df729c0f6564.png)
