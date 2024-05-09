# External Auth Data Reporting

## Overview: 
External Auth Data Reporting is determining the data we are sharing with VA leadership and others surrounding the full authentication process, which is defined as a person doing the following: 
1. Choosing one of our CSP (Credential Service Providers) on the VA.gov sign-in page.
2. Providing credentials on the CSP's login.
3. Returning back to VA.gov with their identity verified.

There are basically two goals of this initial phase of the project:

- Understand what kind of user data VA Leadership wants from the Identity Team.
- Display and explain the user data in a way that is easy to understand and report upon.

## Problem Statement: 
The data produced by request from the Identity Team is often not instantly understandable and can be misinterpreted or misrepresented.  We need to find out what kind of data VA Leadership finds useful, and create a way for them to access that data on a regular basis.

## Relevant Documents: 
- [Current VA.Gov Identity Stats Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/e3q-6kp-9r4/vagov-identity-stats-public?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1710610618968&to_ts=1713202618968&live=true)
- [CSAT Score Dashboard](https://va-gov.domo.com/page/1545882322)
- [VA.gov Search KPIs](https://va-gov.domo.com/page/1964748112)
- [Monthly - OMB Dashboard](https://va-gov.domo.com/page/1587068891)



## What's In Scope (MVP): 
1. Monthly/Daily Active Users
   - Satisfaction/trust rating (experience)
   - What does "good" look like?
   - What does "bad" look like
2. User Intervention Required Errors
   - Report on errors where a users sign in error cannot be resolved with a self service solution
     - An example of these types of errors are ones where a user has multiple active corp ids from the MPI response. MPI is the user information source of truth. They give us all the user attributes we need to determine if a user should be able to access something on va.gov. If MPI responds back to us with multiple active corp ids, we cannot allow the user to login to va.gov. The reason for this is that we have forms on va.gov that expect only one corp id to be present. If we allow the user object to contain two values then the form submission may get messed up downstream.
     - These types of errors have been called “catastrophic errors” in other circles. These types of errors require that a person call the help desk or fill out ticket in order to have something manually edited by a human to allow them to login to va.gov
3. Latency / Time to Login
4. Credential Preference
   - Which CSP are people using to login per month?
5. Device Type Preference
   - mobile vs. desktop
6. Which pages see the most auths
   - Initiated login from.
7. Feedback from users

## Out of Scope: (for this iteration)
- SAML vs Oauth success metrics
- Downtime per CSP
- MAP STS token requests
  - By Application
  - Success rate
- Terms of Use Accept/Decline
  - How many users accept ToU
    - How many users decline ToU
    - Error Rates
- Percentage of Users Successfully Signing In Using Assistive Technologies
  - Demonstrates the team's commitment to inclusive design for veterans with disabilities.
- Decrease in Password Reset Requests
  - Indicates a more secure and reliable authentication process, reducing user frustration.
- Conduct regular security assessments and testing
  - Agencies should regularly assess the risk to websites and provide commensurate security testing of those sites based on that assessment. The assessment should consider the potential impact of a security incident on vital transactions or core services provided to the public, access to timely information, government and vital external operations, and public trust. 
  - Agencies should perform manual penetration testing, where appropriate, based on threat analysis and the criticality of the underlying system.

## Use Cases:
* As a VA leader, I would like the Identity team to present me with the authorization data that is most useful to me, so I may understand and report upon how Veterans are logging into VA.gov.
* As a VA Leader, I want the user authorization data produced by the Identity Team to be instantly understandable and not open to misinterpretation so that I may properly report on how Veterans login to VA.gov.


## Assumptions:
* There are common pieces of user authorization data that VA Leadership is continually wanting to view.

## Solution Approach: 
* Do research to determine what kind of data VA Leadership needs.
* Do research around industry standards for reporting & displaying user data.
* Build out the data dashboard, making sure that it's simple and easily interpreted.

  



## Milestones:
* Launch Dates


## Future Scope:
* Other data
