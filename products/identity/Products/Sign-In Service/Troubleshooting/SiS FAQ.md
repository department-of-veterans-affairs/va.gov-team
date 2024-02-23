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
- [Data Access](#data-access)
   - [Self-Service Monitoring](#self-service-monitoring)
- [Authentication](#authentication)
   - [Tokens](#tokens)
- [Additional Resources](#additional-resources)

-----------------

-----------------

## General Information

| Question | Answer | Revision Date |
| --- | --- | --- |
| **Is there a Slack channel for general SiS questions?**| Yes, use the [#identity channel](https://dsva.slack.com/archives/CSFV4QTKN). | 2/15/2024 |
| **Where can I find additional information on SiS?** | This is our GitHub page: [Sign-in Service](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Products/Sign-In%20Service). | 2/15/2024 | 

-----------------

- ### Transitioning to SiS

| Question | Answer | Revision Date |
| --- | --- | --- |
| **Will we have to build a UI to use sign-in service or does one already exist?** | The UI already exists. We call it the Unified Sign in Page (USiP). You can find more information about it [here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Products/Unified%20Sign%20In%20Pages). | 2/15/2024 | 
| **Is there a way for us to determine timelines? Can we develop against SiS now?** | If you dont require SSO initially, you can start on it now. We have SiS in production for the VA Health and Benefits app. We also have the ability to support system to system (STS) auth in production for any services looking to utilize a zero trust compliant STS. | 2/15/2024 | 
| **Is SiS able to be used by teams who are not deploying on the VA.gov platform? If so, would we get shared sessions with the other teams if both of our teams implement SiS.** | Yes, any team within VA can utilize the Sign-in Service. Also, since the mechanism is there to support it, any teams that have implemented SiS can participate in a shared session solution. | 2/15/2024 |
| **Do we need to wait until we have the subdomain set up before we do a configuration?** | You would be able to set up your solution on test stacks before your subdomain is fully set up. | 2/15/2024 | 
| **Once we are set up, are we able to request a change in enforcement?** | If you need to request enforcement after your project is set up, ping us in the [#identity channel](https://dsva.slack.com/archives/CSFV4QTKN). | 2/15/2024 | 
| **If we’re running in the same app, is it ok to "piggy-back" on the sign-in session?** | No, we would prefer you use the new authentication api service directly as it is intended. It's likely that we will eventually pull the service out of `vets-api` and we don't want our clients making direct sign-in interactions. | 2/15/2024 | 
| **We need our app's MVP to have SiS configured for subdomain-specific sign in (ex. blahexample.va.gov). Are both of these options documented? How much of these options can our team do internally?** | For sign-in service on the backend, we can create a new configuration in a `test stack` (a test environment like staging) at any point, or you can work with it on `localhost`. | 2/19/2024 |

-----------------

-----------------

## Troubleshooting and Support

- ### Support Access
| Question | Answer | Revision Date |
| --- | --- | --- |
| **If I need assistance, what info will I need to provide?** | Info that is helpful for providing support include: Screen captures; Links to logs; Test user(s) used; Sign-in method used. | 2/15/2024 | 
| **What happens when we submit a request for help from your team?** | Our Product Owner, Tom Black, will review your request. If it is approved, we will share a ticket link with you. | 2/15/2024 | 
| **How will I know if there has been movement on a submitted question on an issue?** | Ideally, we will have something for you to test within 2 days. There may be delays due to PR reviews, errors, and other issues. | 2/15/2024 | 
| **We are testing a possible bug with a test user. How do we obtain additional test user credentials?** | Let us know. We’ll DM you some test creds you can borrow for a few days.| 2/15/2024 | 
| **I'm having trouble accessing info in DataDog. Can you assist?** | Sorry, you will have to work on this with your team. If you require additional help, try the [Platform Support Channel](https://dsva.slack.com/archives/CBU0KDSB1). | 2/15/2024 |
| **Do we have to let you know if authentication in review instances ever break?** | Yes please, we aren’t actively using review instances. If they break, you'll find out first. | 2/15/2024 |

-----------------

- ### Troubleshooting
| Question | Answer | Revision Date |
| --- | --- | --- |
| **`Refresh` doesn’t work. Do we need to `revoke`?** | `Revoke` is probably unnecessary (but it makes sense to call it for simplicity’s sake). This falls into the same category as errors such as where `/demographics` is being called before the new session is fully set up. The user’s old access token is being used but they don’t have a real session anymore. | 1/03/2024 | 
| **Why aren’t any of the auth flows for navigating directly to `vets-website` sub-apps opting in to the newer Sign-In Service?** | In particular, `RequiredLoginView` is always invoked in the unconnected component form which in turn results in a use SiS boolean being false. | 2/15/2024 | 

-----------------

-----------------

## Data Access

| Question | Answer | Revision Date |
| --- | --- | --- |
| **From which services does SiS ultimately pull user data? When we used IAM, the user data came from MPI. Is this still the case?** | Yes we still use MPI for user data retrieval. | 2/15/2024|
| **Can SiS help contextualize a sign-in problem using data?** | We have data in DataDog that can be broken down by # of authentication attempts, credential type (e.g. ID.me), `user_agent` values, and more. Some data will need to be worked into the format most useful for your needs.  | 2/15/2024 |

| Examples of Data in Datadog | 
| --- | 
| Failed login attempts by method (e.g., Android, iOS, Google SSO) | 
| Long-term unique user data | 
| Most popular sign-in option on device | 
| Number of unique users, volume, by day/week/month |
| Sign-in type breakdown (ex. ID.me) |

-----------------

- ### Self-Service Monitoring

| Question | Answer | Revision Date |
| --- | --- | --- |
| **What self-service tools are available to monitor the performance of authentication on my new app setup?** | We will share a DataDog link with you to monitor the authentication components of your application. The Identity team will also monitor these metrics 24 hours a day and respond to any outages of the authentication components as they happen. | 2/15/2024 |  
| **Are visual dashboards available to answer questions like "What is the most popular sign-in option for the mobile app?"** | We have [DataDog dashboards](https://app.ddog-gov.com/sb/f327ad72-c02a-11ec-a50a-da7ad0900007-4f055ee542bdd6c1be6930ea45fa135e) that are likely to show you most of your requested information. We are careful to ensure data is presented consistently across dashboards. | 2/15/2024 |
| **Are there any other self-service monitoring tools available?** | You can find a list of other solutions on the [Plaform documentation site](https://depo-platform-documentation.scrollhelp.site/developer-docs/). | 2/15/2024 | 

-----------------

-----------------

## Authentication 

| Question | Answer | Revision Date |
| --- | --- | --- |
| **What are the advantages of using the `state` functionality?** | It allows you to call `/authorize` with a `state` parameter, and you will get it back upon the completion of the `/callback` call. This lets you check that the original `/authorize` matches up with the `/callback`. This is optional for Sign-in Service. | 2/19/2024 |

-----------------

  - ### Tokens

| Question | Answer | Revision Date |
| --- | --- | --- |
| **What's the current TTL of SiS tokens in staging? A teammate mentioned that they still seem to expire quickly. Any plans of having them last longer?** | The best practice for token timings in a public machine are 5 min for `access_token`, and 30 min for `refresh_token`. This is what we assume people use when they’re on the web. A potential future feature would allow a user to select ‘this is a private machine’ when they authenticate to let them use longer `refresh_token` expirations for that device. | 1/24/2024 | 
| **For the `anti_csrf_token`, is this generated on anything or is it there to act as a state param that we can save and check against on the `refresh` calls?** | We enforce this token on a per application basis. We will discuss this with you when you set up your config. If you need to request enforcement after your project is set up, ping us in the [#identity channel](https://dsva.slack.com/archives/CSFV4QTKN). | 2/15/2024 | 

-----------------

-----------------

## Additional Resources

**SiS Documentation**: [Sign-in Service](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Products/Sign-In%20Service)

**Contact**: [#identity channel](https://dsva.slack.com/archives/CSFV4QTKN)

-----------------
