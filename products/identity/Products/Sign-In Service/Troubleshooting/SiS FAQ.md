  # Frequently Asked Questions - Sign-in Service Integration
-----------------

-----------------
## Version History
 
| Version Number | Author | Revision Date | Description of Change |
| --- | --- | --- | --- |
| 0.1 | Josh Matulonis, Joe Niquette | 2/15/2024 | Initial creation |
-----------------

-----------------
## Table of Contents
- [General Information](#general-information)
   - [Transitioning to SiS](#transitioning-to-sis)
-  [Troubleshooting and Support](#troubleshooting-and-support)
   - [Support Access](#support-access)
- [Data and Monitoring](#data-and-monitoring)
- [Authorize and Authenticate](#authorize-and-authenticate)
   - [Tokens](#tokens)
- [Additional Resources](#additional-resources)

-----------------

-----------------

## General Information

|  |  |  
| --- | --- |
| **Is there a Slack channel for general SiS questions?** | *Yes, use the [#identity channel](https://dsva.slack.com/archives/CSFV4QTKN).* |
| | |
| **Where can I find additional information on SiS?** | *This is our GitHub page: [Sign-in Service](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Products/Sign-In%20Service).* |
| | |
| **Are there other apps using SiS?** | *We have SiS in production for the VA Health and Benefits app.* |

-----------------

  ### Transitioning to SiS

|  |  |  
| --- | --- | 
| **Will we have to build a UI to use sign-in service?** | *The UI already exists. We call it the `Unified Sign-in Page` (USiP). You can find more information about it [here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Products/Unified%20Sign%20In%20Pages).* |
| | |
| **Is there a way for us to determine timelines? Can we develop against SiS now?** | *If you dont require SSO initially, you can start on it now. For any services looking to utilize a zero trust compliant STS, we also have the ability to support system-to-system (STS) auth in production.* | 
| | |
| **Can SiS be used by teams who aren't deploying on the VA.gov platform? If both of our teams implement SiS, could we get shared sessions?** | *Yes, any team within VA.gov can utilize the Sign-in Service. Also, since the mechanism is there to support it, any teams that have implemented SiS can participate in a shared session solution.* | 
| | |
| **Can we do a configuration before we have the subdomain set up?** | *You can set up your solution on test stacks before your subdomain is set up.* | 
| | |
| **Once we are set up, are we able to request a change in enforcement?** | *If you need to request enforcement after your project is set up, ping us in the [#identity channel](https://dsva.slack.com/archives/CSFV4QTKN).* | 
| | |
| **We need our app's MVP to have SiS configured for subdomain-specific sign in (i.e. yourteam.va.gov). Are both of these options documented? How much of these options can our team do internally?** | *For sign-in service on the backend, we can create a new configuration in a `test stack` (a test environment like staging) at any point, or you can work with it on `localhost`.* | 

-----------------

-----------------

## Troubleshooting and Support

 ### Support Access
|  |  | 
| --- | --- | 
| **If I need assistance, what info will I need to provide?** | *Helpful info: Screen captures; Links to logs; Test user(s) used; Sign-in method used.* | 
| | |
| **What happens when we submit a request for help from your team?** | *Our Product Owner, Tom Black, will review your request. If it is approved, we'll send you a ticket link.* |  
| | |
| **How will we know if there was movement on a request?** | *Ideally, we will have something for you to test within 2 days. There may be delays due to PR reviews, errors, and other issues.* | 
| | |
| **We are testing a possible bug with a test user. How do we obtain additional test user credentials?** | *Let us know. We’ll DM you some test creds you can borrow for a few days.* | 
| | |
| **Can you assist with trouble accessing info in DataDog?** | *Sorry, you'll have to work on this issue within your team. If you need additional help, try contacting [Platform Support](https://depo-platform-documentation.scrollhelp.site/developer-docs/get-access-to-datadog).* |
| | |
| **Do we have to let you know if authentication in review instances break?** | *Yes please, we aren’t actively using review instances. If they break, you'll find out first.* | 

-----------------

 ### Troubleshooting
|  |  | 
| --- | --- | 
| **Where can we find information on error messages?** | *We have an error message list in our [troubleshooting section](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Sign-In%20Service/Troubleshooting/errors.md).* |
| | |
| **`Refresh` doesn’t work. Do we need to `revoke`?** | *`Revoke` is probably unnecessary (but it makes sense to call it for simplicity’s sake). This falls into the same category as errors such as where `/demographics` is being called before the new session is fully set up. The user’s old access token is being used but they don’t have a real session anymore.* | 
| | |
| **Why aren’t any of the auth flows for navigating directly to `vets-website` sub-apps opting in to the newer Sign-In Service over the sign-in product it was meant to supersede?** | *In particular, `RequiredLoginView` is always invoked in the unconnected component form which in turn results in a use SiS boolean being false.* | 

-----------------

-----------------

## Data and Monitoring

|  |  | 
| --- | --- | 
| **What tools are available for monitoring my integration?** | *The Identity team monitors the authentication component of your integration 24 hours a day. We also provide a link to [DataDog dashboards](https://app.ddog-gov.com/sb/f327ad72-c02a-11ec-a50a-da7ad0900007-4f055ee542bdd6c1be6930ea45fa135e) so you can monitor performance and see some usage data.* |
| | |
| **What details can I see in Datadog?** | *Failed login attempts by method (e.g., Android, iOS, Google SSO)* |         
| | *Long-term unique user data* |
| | *Most popular sign-in option on device* |
| | *Number of unique users, volume, by day/week/month* |
| | *Breakdown data by sign-in type (ex. ID.me), `user agent`, and more* |
| | |
| **Does SiS use MPI for user data?** | *Yes, SiS uses MPI.* |
| | |
| **Are there any other self-service monitoring tools available?** | *You can review additional monitoring tools for your application on the [Plaform documentation site](https://depo-platform-documentation.scrollhelp.site/developer-docs/).* |

-----------------

-----------------

## Authorize and Authenticate 

|  |  | 
| --- | --- | 
| **What are the advantages of using the `state` functionality?** | *It allows you to call `/authorize` with a `state` parameter, and you will get it back upon the completion of the `/callback` call. This lets you check that the original `/authorize` matches up with the `/callback`. This is optional for Sign-in Service.* | 
| | |
| **If we’re running in the same app, is it ok to "piggy-back" on the sign-in session?** | *No, we would prefer you use the new authentication api service directly as it is intended. It's likely that we will eventually pull the service out of `vets-api` and we don't want our clients making direct sign-in interactions.* | 

-----------------

  ### Tokens

|  |  | 
| --- | --- | 
| **Where can we find more info on tokens?** | *Review our [token section](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Sign-In%20Service/Engineering%20Docs/endpoints/token.md).* |
| | |
| **What's the current TTL of SiS tokens in staging? A teammate mentioned that they still seem to expire quickly. Any plans of having them last longer?** | *The best practice for token timings in a public machine are 5 min for `access_token`, and 30 min for `refresh_token`. This is what we assume people use when they’re on the web. A potential future feature would allow a user to select ‘this is a private machine’ when they authenticate to let them use longer `refresh_token` expirations for that device.* |  
| | |
| **Is the `anti_csrf_token` generated on anything? Does it act as a `state` param that we can save and check against on `refresh` calls?** | *We will discuss this with you when you set up your config. We enforce this token on a per application basis. If you need to request enforcement after your project is set up, ping us in the [#identity channel](https://dsva.slack.com/archives/CSFV4QTKN).* |

-----------------

-----------------

## Additional Resources

**SiS Documentation**: [Sign-in Service](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Products/Sign-In%20Service)

**Contact**: [#identity channel](https://dsva.slack.com/archives/CSFV4QTKN)

-----------------
