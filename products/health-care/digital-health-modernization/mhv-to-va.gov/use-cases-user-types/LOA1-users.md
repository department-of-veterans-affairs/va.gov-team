# LOA1 use case - causes and recommendations for UX

## MHV landing page findings and solution

### Steps to reproduce on MHV landing page

Cartographers team identified this scenario based on qualitative feedback from Veterans and an analysis of how our existing code reacted to LOA1 accounts.

We suspect that this scneario is happening when Veterans comply with various comms from VA about shifting from MHV credentials to multi-factor authentication methods (ID.me or login.gov).

1. MHV Premium user creates login.gov or ID.me account
2. Navigates to VA.gov home page and logs in
3. Misses alert on MyVA to "Verify your identity" [check actual content]
4. Navigates to MHV on VA.gov
5. Sees warning that they don't have access to MHV – this is a yellow alert stating that the user doesn't have access to MHV. It displays when a user's data in the redux store doesn't include any facility registrations.

<details><summary>Screenshot of "no access to MHV" alert</summary>
<img width="837" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/4054752/c922008c-be92-4972-8a6f-e38f06729963">

</details>

### Why this is a bad UX that users complained about

We believe that the users who complained have been using MHV for a while. Thus they are outraged by the statement that they "don't have access to My HealtheVet." 

### Why the app told them they don't have access to MHV

In the case of an LOA1 credential, the landing page app _doesn't yet know_ whether the user has facility registrations or not. Because the user is LOA1, VAgov is not retrieving their data at all (including facilities). Thus, for an LOA1 user, an intermediate step is required: upgrading their credentials to LOA3 (via identity verification) so that the landing page app can see if they have facility registration or not. In the cases that Veterans complained about, upgrading to LOA3 should give them access to MHV tools.

### Sample Veteran feedback

Some qual feedback told a clear story that implicated new credentials:
- I Login directly to Myhealthevet and have been using it for years as a Premium account. Your various messages suggest I use "login.gov" to get into Myhealthevet. When I try that and log in I get a message stating I am not qualified to use "Myhealthevet". What gives?
- I tried to create a login.gov account for future My HealtheVet use on va.gov...got a prompt that I was not enrolled in va health care, I've been enrolled since 2012
- I set up a username and password to login.gov successfully. Now when I click on the link for MyHealthyvet on Login.gov it tells me I do not have access.  I can login to Myhealthyvet as before with no problem and see my appointments but not through Login.gov

Some qual feedback told only part of the story, but we suspect the experience is the same:
- I was trying to order CPAP supplies online and I am told though I am a 60% disabled veteran and have an account on this site I don't have authorized access to My Healthvet or access to order my CPAP supplies online. or anything through this website.

There was seemingly related feedback that may point to some other problem with new-account verification itself. We will continue to monitor:
- your web site won't let me access my healtheVet AFTER I AM VERIFIED BY ID.ME. THE SITE RECOGNIZES MY AUTHENICATION BUT TELLS ME I CAN'T HAVE ACCESS. WHAT A PAIN IN THE ........ FIX THIS PLEASE
- this site has me verified by Id.me and it won't let me into my HealthVet, again and again and again.... Fix this please!!!!!!!!!!!!!

## Possible issue for other applications

It is likely that other applications that run checks on a user's personal data will encounter a similar failure when a user logs in using an unverified (LOA1) account.

### "Side doors" to health tools on VA.gov

There will be many users who arrive on health tools directly, without seeing the MHV landing page – thus missing the alerts in place there now. For example:

1. User receives email alerting them to a new secure message
2. Logs in when prompted using a new login.gov credential (which VA has asked them to switch to)
3. Arrives direclty in SM, which doesn't have access to any of the user's personal data

### Other situations

There may be other applications on VA.gov that are mistaking missing personal data for a lack of qualifying data, thus erroneously denying the user access to an application.

## Recommendation

For the MHV landing page, we implemented an alert that gives the LOA1 user a path forward to using the health tools.

<details><summary>Screenshot of "Verify your identity" alert</summary>
<img width="661" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/4054752/bbdee2f3-cf17-4a26-a5c3-33cbe186fcce">
</details>

Each application will have its own respons to the lack of personal data on the user. But before running checks on that data to decide how to handle the user, the application must first check whether the credentials the user logged in with are sufficient for the data to be present.

We (Cartographers) recommend that each application re-use the "Verify your identity" alert component that we adapted for this purpose.

For health tools in particular, we also recommend that teams review the MHV landing page alerts regarding user data. The two use cases we test for (in order) are:
1. Does the logged-in credential enable the application to see the user's health data? (LOA1 check)
2. Is the user associated with any VA medical facilities (health-tools access check)





