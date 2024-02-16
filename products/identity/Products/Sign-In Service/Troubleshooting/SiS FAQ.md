 Welcome to Sign-in Service Integration Help



## [General](#General)

## [Support](#Support)

## [Tokens](#tokens)

## [Data](#data)

## [Reauthorization](#Reauthorization)

## [Options](#Options)

## [Review Instances](#review-instances)

## [Contact](#contact)



# General


**Will we have to build a UI to use sign-in service or is the UI already existing?**

You'll be able to leverage the Unified Sign-in Page flow for the UI, which allows you to use login.gov as our sign in.

**Is there a way for us to determine timelines such that we might choose to develop against it?**

If you dont require SSO initially, you can start on it now. We have SiS in production for the VA Health and Benefits app already.

**Is SiS able to be used by teams who are not deploying on the VA.gov platform? If so, would we get shared sessions with the OGC team if both of our teams implement it.**

Correct, they don't need to be on a platform to integrate with us.
Until other apps implement SiS, we cannot carry over the sessions. We have SSO functionality enabled for SiS, but if the other app is using say SSOe, we dont have an SSOe session for that user. This means a person would need to sign in one time to all SiS enabled apps, and one time for all SSOe enabled apps.

**Why aren’t any of the auth flows for navigating directly to vets-website sub-apps opt in to the newer Sign-In Service experience over the sign-in product it was meant to supersede?**

In particular, RequiredLoginView is always invoked in the unconnected component form which in turn results in a use SiS boolean being false.

**Do we need to wait until we have the subdomain set up before we do a configuration?**

You would be able to set up either solution on test stacks before your subdomain is fully set up.

**We need the MVP for the VSO to be able to securely log in and have that session be specific to the subdomain rep.va.gov. Are both of these options documented and how much of each of these options can we do internally as a team?**

For sign-in service on the backend, we can create a new configuration in a test stack (like staging) at any point, or you can play around with it on localhost.

**Do you have a link to additional SiS information?**

This is our GitHub page: [Sign-in Service](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Sign-In%20Service).





## Support 

**If I need assistance, what info will I need to provide?**

Info that is helpful for providing support include:

- Screen captures

- Logs

- Test user(s) used

- Sign-in method used

**Is there a Slack channel for general SiS questions?**

Yes, use the #vsp-identity channel.

**What is the right channel to contact for support if we don't get a response within a couple hours?**

Try reaching out in the va-mobile-app channel.

**When can we expect to be able to test a flag?**

Let us know when you’re ready to start testing and we can turn it on.

**How will I know if there has been movement on a submitted question on an issue?**

Ideally, we will have something for you to test within 2 days. There may be delays due to PR review, errors, and other issues.

**We are testing a possible bug with a test user. How do we obtain additional test user credentials?**

Let us know. We’ll DM you some test creds you can borrow for a few days.

**Refresh doesn’t work. Do we need to revoke?**

Revoke is probably unnecessary (but it makes sense to call it for simplicity’s sake). This falls into the same category as errors such as where /demographics is being called before the new session is fully set up. The user’s old access token is being used but they don’t have a real session anymore.

**Do we have to let you know if review instances ever break?**

Yes, we aren’t actively using review instances. You'll find out first if they broke.




## Tokens

**What's the current TTL of SiS tokens in staging? A teammate mentioned that they still seem to expire quickly. Any plans of having them last longer?**

The best practice token timings for a public machine are 5 min for access_token, and 30 min for refresh_token. This is what we assume people use when they’re on the web.
A future potential feature would allow a user to select ‘this is a private machine’ when they authenticate, and we’d let them use longer refresh_token expirations for that selection (maybe access tokens as well).

**Redirect URL does not include the state token sent with the initial sign-in request.  Shouldn't this be returned as an anti-csrf check along with the code param?**

Yes, this should be taken care of soon.

**For the anti_csrf_token, is this generated on anything or is it there to act as a state param that we can save and check against on the refresh calls?**

We were told that you didn't want to use this so we have it but we don't enforce it. If you want to use it, we are happy to discuss this with you.

**Is the endpoint structure going to stay the same or conform to a more normalized convention? The federated sign-in page and the API endpoints have different implementations of sign-in/sign_in.**

We are going to make some adjustments to ensure everything uses - instead of _. 

**Can you verify that PKCE is turned on and is functioning correctly? We are sending the params and just want to verify that the backend is also using and checking those values right now.**

Yes we can let you know when it's turned on.



## Data

**What self-service tools can Analytics help me get access to?**

DataDog

**Are there any other self-service monitoring tools available?**

Examining logs in [various tools](https://depo-platform-documentation.scrollhelp.site/getting-started/request-access-to-tools#Requestaccesstotools-OptimalWorkshop).

**Can SiS help contextualize a sign-in problem using data?**

We have data in DataDog such as the breakdown of authentication attempts, successes & failures, by credential type, ‘user_agent’ values, and more. In many cases, data types can be broken down further.

**I'm having trouble accessing info in DataDog. Can you assist?**

Yes, we’ll show you the useful queries.

**Where can I find data on sign-in type (e.g. ID.me), number of unique users, frequency, volume, by day/week/month?**

We have a lot of data, some of it’s really rough but it's just a matter of getting it into the format that is useful for your purposes. Examples include data for the last few months, month over month, % of sign in into the app by type. We are careful to ensure it's all being presented consistently. 

**Where can I find a visual dashboard to answer questions like "What is the most popular sign-in option for the mobile app?"**

We have DataDog dashboards that likely will show you most of what you're requesting. 

**Can we access long term numbers on unique users?**

Yes, we started collecting numbers in October 2023. 

**From which services does SiS ultimately pull user data? When we used IAM, the user data came from MPI. Is this still the case?**

Yes we still use MPI.

**Does SiS have access to failed log-in attempts through particular methods, such as how many mobile Android users had a failed sign-in with Google SOS. Is it possible to obtain a breakdown of the percent of users by each sign-in method for iOS and Android separately (it would be a helpful proxy for understanding the potential impact of a bug).**

This is in DataDog. We have the breakdown of authentication attempts, successes, and failures, by credential type. If we could narrow down the ‘user_agent’ values, then we could break it down by that further.

**Is Sign-In Service BRD Metrics the correct dashboard to see prod metrics for SiS?**

No, the best dashboard to use is VSP Identity Monitor Dashboard. It has a lot of info: ignore the SAML or SSOe metrics. All the Sign-in Service ones should have SiS.

**Would you expect initialization changes made to StatsSD to completely break dashboards?**

No, initialization changes should have no impact on StatsSD. The environment is different, it’s env:eks-prod or deployment_env:vagov-prod.

**What is the difference between deployment_env:vagov-prod and env:eks-prod?**

The difference is that deployment_env:vagov-prod gives you historic data while env:eks-prod is forward facing from once EKS was implemented.

**A new var was added to our dashboard during testing. It looks like client_id=vamobile broke the client_id:mobile differentiation for the SiS metrics. How do we fix it?**

You'll need to update your dashboard to use the right one.

**Does the Appointments Controller have any success calls?**

The majority of calls do go through. Looking at a graph on DD, there are some succeeding Appointments calls, although they might not be for the Appointments index. We don't divide them by controller action.


## Reauthorization

**Is there a way to force reauthorization to ID.me? This doesn't occur on the web and they call the /sign-out endpoint upon clicking Sign-out. Is that what we should be doing as well?**

The two levels to authenticate with ID.me are LOA1 and LOA3.

- If authenticating with LOA1, it will always force reauth.
- If authenticating with LOA3, it will leverage the existing ID.me session if it still exists.

- All authentications through the website will try the LOA1 reauthentication first (forcing reauth). 

- If the user is upleveled to LOA3, then it will authenticate the second time without forcing re-auth. 

- Mobile only uses the LOA3 authentication.

**Will ID.me let us optionally pass a param to force re-auth?**

ID.me implemented an LOA3 force option that will always force re-authentication. 

**Does the web do something different than forcing re-auth on staging.va.gov with the same account?**

Yes, the web tries LOA1 and then uplevels to LOA3 and the initial LOA1 forces the reauth. The access token is 5 min for the ID.me session. It would only happen if the user signed in almost immediately after they signed out.


**If we’re running in the same app, is it ok to piggy-back on the sign-in session?**

No, we would prefer you use our new service directly as it is intended. We likely will pull the service out of vets-api eventually and we don't want any direct sign-in interactions to be made by our clients.


## Options

**What are the advantages of using the state functionality?**

It allows you to call /authorize with a state parameter, and you will get it back upon the completion of the /callback call. This lets you check that the original /authorize matches up with the /callback. This is optional for Sign-in Service.


## Review Instances

**Can I use a pre-existing review instance? I’m using an old review instance from a few days ago. Do I need to get a new one?**

If changes are made to review instances, you’ll need to get a new one. 

**Changes were made in the DevOps Repo. Do I need to merge master to pull in?**

You don’t need to merge master if the changes were done in the devops repo. You just need to force a new review instance to get built (If you git commit --amend and force push that should work).


## Contact

