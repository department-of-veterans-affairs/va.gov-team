# Sign-in Service Integration 
# Frequently Asked Questions



 
## [General](General)
 
## [Support](Support)
 
## [Tokens](#tokens)

## [Data](#data)

## [Reauthorization](Reauthorization)

## [Options](Options)


## General

| Question | Answer | Revision Date |
| --- | --- | --- |
| **Will we have to build a UI to use sign-in service or is the UI already existing?** | The UI already exists, we call it the Unified Sign in Page (USiP). You can find more information about it [here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Products/Unified%20Sign%20In%20Pages). | 1/24/2024 | 
| **Is there a way for us to determine timelines such that we might choose to develop against it?** | If you dont require SSO initially, you can start on it now. We have SiS in production for the VA Health and Benefits app. We also have the ability to support system to system auth in production for any services looking to utilize a zero trust compliant STS.  | 2/15/2024 | 
| **Is SiS able to be used by teams who are not deploying on the VA.gov platform? If so, would we get shared sessions with the other teams if both of our teams implement SiS.** | Yes, any team within VA can utilize the Sign-in Service. Also any teams that have implemented SiS can participate in a shared session solution, as the mechanism is there to support it today. | 2/15/2024 | 
| **Why aren’t any of the auth flows for navigating directly to vets-website sub-apps opt in to the newer Sign-In Service experience over the sign-in product it was meant to supersede?** | In particular, RequiredLoginView is always invoked in the unconnected component form which in turn results in a use SiS boolean being false. | 2/15/2024 | 
| **Do we need to wait until we have the subdomain set up before we do a configuration?** | You would be able to set up either solution on test stacks before your subdomain is fully set up. | 1/03/2024 | 
| **Do you have a link to additional SiS information?** | This is our GitHub page: [Sign-in Service](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Sign-In%20Service). | 1/03/2024 | 

**Will we have to build a UI to use sign-in service or is the UI already existing?**

The UI already exists, we call it the Unified Sign in Page (USiP). You can find more information about it [here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Products/Unified%20Sign%20In%20Pages).

**Is there a way for us to determine timelines such that we might choose to develop against it?**

If you dont require SSO initially, you can start on it now. We have SiS in production for the VA Health and Benefits app. We also have the ability to support system to system auth in production for any services looking to utilize a zero trust compliant STS.

**Is SiS able to be used by teams who are not deploying on the VA.gov platform? If so, would we get shared sessions with the other teams if both of our teams implement SiS.**

Yes, any team within VA can utilize the Sign-in Service. Also any teams that have implemented SiS can participate in a shared session solution, as the mechanism is there to support it today.

**Why aren’t any of the auth flows for navigating directly to vets-website sub-apps opt in to the newer Sign-In Service experience over the sign-in product it was meant to supersede?**

In particular, RequiredLoginView is always invoked in the unconnected component form which in turn results in a use SiS boolean being false.

**Do we need to wait until we have the subdomain set up before we do a configuration?**

You would be able to set up either solution on test stacks before your subdomain is fully set up.


**Do you have a link to additional SiS information?**

This is our GitHub page: [Sign-in Service](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Sign-In%20Service).





## Support 

| Question | Answer | Revision Date |
| --- | --- | --- |
| **If I need assistance, what info will I need to provide?** | Info that is helpful for providing support include: Screen captures; Links to logs; Test user(s) used; Sign-in method used | 1/24/2024 | 
| **Is there a way for us to determine timelines such that we might choose to develop against it?** | If you dont require SSO initially, you can start on it now. We have SiS in production for the VA Health and Benefits app. We also have the ability to support system to system auth in production for any services looking to utilize a zero trust compliant STS.  | 2/15/2024 |
| **Is there a Slack channel for general SiS questions?**| Yes, use the [#identity channel](https://dsva.slack.com/archives/CSFV4QTKN). | 2/15/2024 |
| **How will I know if there has been movement on a submitted question on an issue?** | Ideally, we will have something for you to test within 2 days. There may be delays due to PR reviews, errors, and other issues. We will share a ticket link with you for any requests you make of us that are approved to be worked on by our Product Owner Tom Black. | 2/15/2024 | 
| **We are testing a possible bug with a test user. How do we obtain additional test user credentials?** | Let us know. We’ll DM you some test creds you can borrow for a few days.| 1/03/2024 | 
| **Refresh doesn’t work. Do we need to revoke?** | Revoke is probably unnecessary (but it makes sense to call it for simplicity’s sake). This falls into the same category as errors such as where /demographics is being called before the new session is fully set up. The user’s old access token is being used but they don’t have a real session anymore. | 1/03/2024 | 
 | **Do we have to let you know if authentication in review instances ever break?** | Yes please, we aren’t actively using review instances. You'll find out first if they broke. | 1/19/2024 |

**If I need assistance, what info will I need to provide?**

Info that is helpful for providing support include:

- Screen captures

- Links to logs

- Test user(s) used

- Sign-in method used

**Is there a Slack channel for general SiS questions?**

Yes, use the [#identity channel](https://dsva.slack.com/archives/CSFV4QTKN).

**How will I know if there has been movement on a submitted question on an issue?**

Ideally, we will have something for you to test within 2 days. There may be delays due to PR review, errors, and other issues. We will share a ticket link with you for any requests you make of us that are approved to be worked on by our Product Owner Tom Black.

**We are testing a possible bug with a test user. How do we obtain additional test user credentials?**

Let us know. We’ll DM you some test creds you can borrow for a few days.

**Refresh doesn’t work. Do we need to revoke?**

Revoke is probably unnecessary (but it makes sense to call it for simplicity’s sake). This falls into the same category as errors such as where /demographics is being called before the new session is fully set up. The user’s old access token is being used but they don’t have a real session anymore.

**Do we have to let you know if authentication in review instances ever break?**

Yes please, we aren’t actively using review instances. You'll find out first if they broke.




## Tokens

| Question | Answer | Revision Date |
| --- | --- | --- |
| **What's the current TTL of SiS tokens in staging? A teammate mentioned that they still seem to expire quickly. Any plans of having them last longer?** | The best practice for token timings in a public machine are 5 min for `access_token`, and 30 min for `refresh_token`. This is what we assume people use when they’re on the web. A potential future feature would allow a user to select ‘this is a private machine’ when they authenticate to let them use longer refresh_token expirations for that device. | 1/24/2024 | 
| **For the `anti_csrf_token`, is this generated on anything or is it there to act as a state param that we can save and check against on the `refresh` calls?** | We enforce this token on a per application basis, when you setup your config we will discuss this. If you need to request enforcement after your project is setup please just ping us in the [#identity channel](https://dsva.slack.com/archives/CSFV4QTKN). | 2/15/2024 | 

**What's the current TTL of SiS tokens in staging? A teammate mentioned that they still seem to expire quickly. Any plans of having them last longer?**

The best practice for token timings in a public machine are 5 min for `access_token`, and 30 min for `refresh_token`. This is what we assume people use when they’re on the web.
A potential future feature would allow a user to select ‘this is a private machine’ when they authenticate to let them use longer refresh_token expirations for that device.

**For the `anti_csrf_token`, is this generated on anything or is it there to act as a state param that we can save and check against on the refresh calls?**

We enforce this token on a per application basis, when you setup your config we will discuss this. If you need to request enforcement after your project is setup please just ping us in the [#identity channel](https://dsva.slack.com/archives/CSFV4QTKN).


## Data

| Question | Answer | Revision Date |
| --- | --- | --- |
| **What self-service tools can I use to monitor the performance of authentication on my new app setup?** | We will share a DataDog link with you that you can leverage to monitor the authentication components of your application. The Identity team will also monitor these metrics 24 hours a day and respond to any outages of the authentication components as they happen. | 1/24/2024 | 
| **I'm having trouble accessing info in DataDog. Can you assist?** | Sorry this is something you will have to work on with your team. If you require additional help, try the [Platform Support Channel](https://dsva.slack.com/archives/CBU0KDSB1). | 2/15/2024 | 
| **Are there any other self-service monitoring tools available?** | You can find a list of other solutions on the [Plaform documentation site](https://depo-platform-documentation.scrollhelp.site/developer-docs/tips-and-tricks-for-examining-logs-in-various-moni). | 2/15/2024 | 
| **Can SiS help contextualize a sign-in problem using data?** | We have data in DataDog that can be broken down by # of authentication attempts, credential type (e.g. ID.me), `user_agent` values, and more. Also, day/week/monthly data on the # of unique users, frequency, and volume is available. We have a lot of data in DataDog. Some of it’s rough but it's just a matter of getting it into the format most useful for your needs. Examples include data for the last few months, month over month, % of sign in into the app by type. | 2/19/2024 |
| **Does SiS have access to failed sign-in attempts using various methods, such as how many mobile Android users had a failed sign-in with Google SSO? Is it possible to obtain a breakdown of the percent of users by each sign-in method for iOS and Android separately (it would be a helpful proxy for understanding the potential impact of a bug).** | This is also in DataDog. We have the breakdown of authentication attempts, their successes and failures, by credential type. If the `user_agent` values are narrowed down, then it could be broken down further. | 2/19/2024 |
| **Where can I find a visual dashboard to answer questions like "What is the most popular sign-in option for the mobile app?"** | We have [DataDog dashboards](https://app.ddog-gov.com/sb/f327ad72-c02a-11ec-a50a-da7ad0900007-4f055ee542bdd6c1be6930ea45fa135e) that are likely to show you most of your requested information. We are careful to ensure data is presented consistently across dashboards. | 2/19/2024 |
| **Can we access long term numbers on unique users?** | Yes, we started collecting numbers in October 2023. | 2/19/2024 |
| **From which services does SiS ultimately pull user data? When we used IAM, the user data came from MPI. Is this still the case?** | Yes we still use MPI. | 2/19/2024|






**What self-service tools can I use to monitor the performance of authentication on my new app setup?**

We will share a datadog link with you that you can leverage to monitor the authentication components of your application. The Identity team will also monitor these metrics 24 hours a day and respond to any outages of the authentication components as they happen.

**I'm having trouble accessing info in DataDog. Can you assist?**

Sorry this is something you will have to work on with your team. If you require additional help, try the [Platform Support Channel](https://dsva.slack.com/archives/CBU0KDSB1).

**Are there any other self-service monitoring tools available?**

You can find a list of other solutions on the [Plaform documentation site](https://depo-platform-documentation.scrollhelp.site/developer-docs/tips-and-tricks-for-examining-logs-in-various-moni).

**Can SiS help contextualize a sign-in problem using data?**

We have data in DataDog that can be broken down by # of authentication attempts, credential type (e.g. ID.me), `user_agent` values, and more. Also, day/week/monthly data on the # of unique users, frequency, and volume is available.


**Does SiS have access to failed sign-in attempts using various methods, such as how many mobile Android users had a failed sign-in with Google SSO? Is it possible to obtain a breakdown of the percent of users by each sign-in method for iOS and Android separately (it would be a helpful proxy for understanding the potential impact of a bug).**

This is also in DataDog. We have the breakdown of authentication attempts, their successes and failures, by credential type. If the `user_agent` values are narrowed down, then it could be broken down further. 


**Where can I find a visual dashboard to answer questions like "What is the most popular sign-in option for the mobile app?"**

We have [DataDog dashboards](https://app.ddog-gov.com/sb/f327ad72-c02a-11ec-a50a-da7ad0900007-4f055ee542bdd6c1be6930ea45fa135e) that are likely to show you most of your requested information. 

**Can we access long term numbers on unique users?**

Yes, we started collecting numbers in October 2023. 

**From which services does SiS ultimately pull user data? When we used IAM, the user data came from MPI. Is this still the case?**

Yes we still use MPI.



## Reauthorization

| Question | Answer | Revision Date |
| --- | --- | --- |
| **If we’re running in the same app, is it ok to piggy-back on the sign-in session?** | No, we would prefer you use the new authenticatin api service directly as it is intended. We likely will pull the service out of vets-api eventually and we don't want any direct sign-in interactions to be made by our clients. | 1/24/2024 | 

**If we’re running in the same app, is it ok to piggy-back on the sign-in session?**

No, we would prefer you use the new authenticatin api service directly as it is intended. We likely will pull the service out of vets-api eventually and we don't want any direct sign-in interactions to be made by our clients.


## Options

| Question | Answer | Revision Date |
| --- | --- | --- |
| **What are the advantages of using the `state` functionality?** | It allows you to call `/authorize` with a `state` parameter, and you will get it back upon the completion of the `/callback` call. This lets you check that the original `/authorize` matches up with the `/callback`. This is optional for Sign-in Service. | 2/19/2024 |
| **We need the MVP for our app to be able to securely sign in and have that session be specific to the subdomain `blahexample.va.gov`. Are both of these options documented? How much of these options can our team do internally?** | For sign-in service on the backend, we can create a new configuration in a `test stack` (like staging) at any point, or you can play around with it on `localhost`. | 2/19/2024 |

**What are the advantages of using the state functionality?**

It allows you to call /authorize with a state parameter, and you will get it back upon the completion of the /callback call. This lets you check that the original /authorize matches up with the /callback. This is optional for Sign-in Service.

**We need the MVP for our app to be able to securely sign in and have that session be specific to the subdomain blahexample.va.gov. Are both of these options documented and how much of each of these options can we do internally as a team?**

For sign-in service on the backend, we can create a new configuration in a test stack (like staging) at any point, or you can play around with it on localhost.

 ## Version History
 
| Version Number | Author | Revision Date | Description of Change |
| --- | --- | --- | --- |
| 0.1 | Josh Matulonis, Joe Niquette | 2/15/2024 | Initial creation |

