# Keepalive Errors - DRAFT

Errors related to making https://eauth.va.gov/keepalive calls
[Sentry Error Page for Keepalive](http://sentry.vfs.va.gov/organizations/vsp/issues/?groupStatsPeriod=14d&project=3&project=4&query=is%3Aunresolved+assigned%3A%23vsp-identity+level%3Aerror+message%3A%22SSOe+error%3A%22&statsPeriod=14d)
About: In this about section, describe what the error in this page is about. Each error page should use the following to get started with documenting the errors we encounter.

### Table of Contents
  * [Label Description](https://github.com/department-of-veterans-affairs/va.gov-team/blob/joeniquette-hackathonwriteup-1/teams/vsp/teams/identity/Sentry%20Hackathon%202020/Error%20Buckets/Keepalive_errors.md#label-description)
  * [Errors](https://github.com/department-of-veterans-affairs/va.gov-team/blob/joeniquette-hackathonwriteup-1/teams/vsp/teams/identity/Sentry%20Hackathon%202020/Error%20Buckets/Keepalive_errors.md#errors)


## Label Description 
These sets of errors are related to the Javascript TypeError class from the fetch function. The naturally come with very little stack information as the errors often come from the browsers themselves and not from the servers we host va.gov on.

## Errors
- [Error Name]()
  - Error Level, criticality, do we need to resolve this within some SLA?
  - Description of error: This error is related to the interaction with the keepalive endpoint. Reference the "fetch" library [here](https://github.com/department-of-veterans-affairs/vets-website/blob/7581fd3928c70a379abcd703b6bbbe5db761bdb1/src/platform/utilities/sso/keepAliveSSO.js#L15) for more details about the library. We could see this error pop if during the keepalive fetch command, the user clicks on another link within the page which then kills the fetch request by the browser.
  - Other systems/applications involved with this error that have a direct impact on either the error or the system alerting
  - Steps to troubleshoot and resolve errors
  - Contact if/when the error reaches some threshold? What is the threshold?
  - Alert Location (sentry, pagerduty?)
  - Source code for error forwarding (sentry, pagerduty, etc.)
  - [Source code for error generation](https://github.com/department-of-veterans-affairs/vets-website/search?q=%22SSOe+error%3A%22)
  - Any recommended changes to this error, reference current status and tickets if applicable

- [SSOe error: Failed to fetch](http://sentry.vfs.va.gov/organizations/vsp/issues/62/?project=3&project=4&query=is%3Aunresolved+assigned%3A%23vsp-identity+level%3Aerror+message%3A%22SSOe+error%3A%22&statsPeriod=14d) In firefox this error is also reported as `NetworkError when attempting to fetch resource.` and in IE its called `Network request failed`
  - Error Level: TBD
  - Description: This error is related to the interaction with the keepalive endpoint. Reference the "fetch" library [here](https://github.com/department-of-veterans-affairs/vets-website/blob/7581fd3928c70a379abcd703b6bbbe5db761bdb1/src/platform/utilities/sso/keepAliveSSO.js#L15) for more details about the library. We could see this error pop if during the keepalive fetch command, the user clicks on another link within the page which then kills the fetch request by the browser.
  - No other downstream impacted systems that are known at this time. It will be unique to the users experience.
  - steps to troubleshoot or resolve: Add more contextual log data within lines 36-41
  - undefined in the login field, the authncontext appears to not always be defined. [Here](https://github.com/department-of-veterans-affairs/vets-website/blob/7581fd3928c70a379abcd703b6bbbe5db761bdb1/src/platform/utilities/sso/keepAliveSSO.js#L30)  

- [NetworkError when attempting to fetch resource](http://sentry.vfs.va.gov/organizations/vsp/issues/61/?project=3&project=4&query=assigned%3A%23vsp-identity+level%3Aerror+message%3A%22SSOe+error%3A%22&statsPeriod=14d)
  - See [SSOe error:Failed to fetch]

- [SSOe error: The certificate for this server is invalid. You might be connecting to](http://sentry.vfs.va.gov/organizations/vsp/issues/835/?project=3&project=4&query=is%3Aunresolved+assigned%3A%23vsp-identity+level%3Aerror+message%3A%22SSOe+error%3A%22&statsPeriod=14d)
  - Error Level: Should be Warning, not error
  - other details....

- [SSOe Error: cancelled](http://sentry.vfs.va.gov/organizations/vsp/issues/191/?project=3&project=4&query=is%3Aunresolved+assigned%3A%23vsp-identity+level%3Aerror+message%3A%22SSOe+error%3A%22&statsPeriod=14d)
  - Notes: put in a PR to reclassify this as info rather than error

- [SSOe Error: The Internet connection appears to be offline](http://sentry.vfs.va.gov/organizations/vsp/issues/195/?project=3&project=4&query=is%3Aunresolved+assigned%3A%23vsp-identity+level%3Aerror+message%3A%22SSOe+error%3A%22&statsPeriod=14d)
  - Notes: put in a PR to reclassify this as info rather than error

- [SSOe Error: Network request failed](http://sentry.vfs.va.gov/organizations/vsp/issues/262/?project=3&project=4&query=is%3Aunresolved+assigned%3A%23vsp-identity+level%3Aerror+message%3A%22SSOe+error%3A%22&statsPeriod=14d)
  - Notes: Seems to be an IE11 issue and same as `Failed to fetch`

- [SSOe error: The network connection was lost](http://sentry.vfs.va.gov/organizations/vsp/issues/309/?project=3&project=4&query=is%3Aunresolved+assigned%3A%23vsp-identity+level%3Aerror+message%3A%22SSOe+error%3A%22&statsPeriod=14d)
  - Notes: This one is specific to apple and doesn't seem significant. Most of the events stopped occurring around 10/20

- [SSOe error: Origin https://www.va.gov is not allowed by Access-Control-Allow-Origin.](http://sentry.vfs.va.gov/organizations/vsp/issues/208/?project=3&project=4&query=assigned%3A%23vsp-identity+level%3Aerror+message%3A%22SSOe+error%3A%22&statsPeriod=14d)
  - Notes: ....
  
- [SSOe error: Could not connect to the server.](http://sentry.vfs.va.gov/organizations/vsp/issues/395/?project=3&project=4&query=assigned%3A%23vsp-identity+level%3Aerror+message%3A%22SSOe+error%3A%22&statsPeriod=14d)
  - Notes: ....
  
- [SSOe error: An SSL error has occurred and a secure connection to the server cannot be made.](http://sentry.vfs.va.gov/organizations/vsp/issues/396/?project=3&project=4&query=assigned%3A%23vsp-identity+level%3Aerror+message%3A%22SSOe+error%3A%22&statsPeriod=14d)
  - Notes: ....
  
- [SSOe error: Type error](http://sentry.vfs.va.gov/organizations/vsp/issues/731/?project=3&project=4&query=assigned%3A%23vsp-identity+level%3Aerror+message%3A%22SSOe+error%3A%22&statsPeriod=14d)
  - Notes: ....
  
- [SSOe error: The request timed out.](http://sentry.vfs.va.gov/organizations/vsp/issues/306/?project=3&project=4&query=assigned%3A%23vsp-identity+level%3Aerror+message%3A%22SSOe+error%3A%22&statsPeriod=14d)
  - Notes: ....
  
- [SSOe error: A server with the specified hostname could not be found.](http://sentry.vfs.va.gov/organizations/vsp/issues/348/?project=3&project=4&query=assigned%3A%23vsp-identity+level%3Aerror+message%3A%22SSOe+error%3A%22&statsPeriod=14d)
  - Notes: ....
  
- [SSOe error: WebKit encountered an internal error](http://sentry.vfs.va.gov/organizations/vsp/issues/1444/?project=3&project=4&query=assigned%3A%23vsp-identity+level%3Aerror+message%3A%22SSOe+error%3A%22&statsPeriod=14d)
  - Notes: ....
  
- [SSOe error: The operation couldn’t be completed. Software caused connection abort](http://sentry.vfs.va.gov/organizations/vsp/issues/1037/?project=3&project=4&query=assigned%3A%23vsp-identity+level%3Aerror+message%3A%22SSOe+error%3A%22&statsPeriod=14d)
  - Notes: ....
  
- [SSOe error: Couldn't resolve host name](http://sentry.vfs.va.gov/organizations/vsp/issues/6370/?project=3&project=4&query=is%3Aunresolved+assigned%3A%23vsp-identity+level%3Aerror+message%3A%22SSOe+error%3A%22&statsPeriod=14d)
  - Notes: ....
  
- [SSOe error: Connection closed](http://sentry.vfs.va.gov/organizations/vsp/issues/10303/?project=3&project=4&query=is%3Aunresolved+assigned%3A%23vsp-identity+level%3Aerror+message%3A%22SSOe+error%3A%22&statsPeriod=14d)
  - Notes: ....
  
  - [SSOe error: The operation couldn’t be completed. net::ERR_NETWORK_IO_SUSPENDED](http://sentry.vfs.va.gov/organizations/vsp/issues/6556/?project=3&project=4&query=is%3Aunresolved+assigned%3A%23vsp-identity+level%3Aerror+message%3A%22SSOe+error%3A%22&statsPeriod=14d)
  - Notes: ....

### Notes
   - [Fetch library](https://github.com/department-of-veterans-affairs/vets-website/blob/7581fd3928c70a379abcd703b6bbbe5db761bdb1/src/platform/utilities/sso/keepAliveSSO.js#L15)
   - Do some cleanup of lines through 36-41 [in](https://github.com/department-of-veterans-affairs/vets-website/search?q=%22SSOe+error%3A%22)
   - Fetch API is a polyfill, check caniuse.com website, so in other words not available globally such as with IE11.
   - Sentry JS spec: https://docs.sentry.io/platforms/javascript/
   - Look into: `Sentry.captureMessage("This is a test", SentryLevel.WARNING); // or specific level` when we set up some if/else inside lines 36-41 when setting different error levels for certain messages like `The Internet connection appears to be offline.`

#### Need to create these issues:
- Investigate failed to fetch like errors
- Figure out how to add more context than what we get from the js typeerrors today, also look at sentry potentially providing more info.
- Reclassify all other remaining errors within this bucket
- Document each of the errors being reporting inside this bucket

#### Related Issues:
https://github.com/department-of-veterans-affairs/va.gov-team/issues/16388
   
