# **Release Plan Template – Columbus Scheduling in August** (Cerner)


We will roll out to 100% of Columbus, OH, Chalmers facility users. This is already a small number of users, around 100. This pilot is itself one phase of future additional Cerner roll outs.  

Feature toggles don't work for this use case, we will request an exception from staged rollout during Staging Review.

\### Planning:

- Desired date: **ETA Aug 21**



- Post-launch: **If error rate < 5% - we will roll back. This means we go back to the state where we don’t show Columbus Chalmers users the Cerner sign in button in their authenticated state.**


Ex – roll back picture:

\1.   Columbus user signs in on public page
\2.   Lands on auth page
\3.   Does NOT see button or content for Cerner scheduling option.
\4.   We will need an error state mssg for this roll back scenario, telling the user to call their facility to make an appointment.

**Types of errors to log:**
\-     Do they see the Cerner scheduling option?  Columbus Chalmers user signs in from unauthenticated page, lands on auth page, but does not see Cerner scheduling option.

\-     Can they click on the Cerner button?  Columbus Chalmers user clicks the scheduling button but it doesn’t do anything.

\-     [ IAM SSOe team Cory Trimm, Patrick Vinograd:} Can first time user see and get through the terms of use flow?  First time Columbus Chalmers user clicks scheduling button but doesn’t see the first-time terms of use page or is unable to successfully log their acceptance of TOC.

\-     [ IAM SSOe team Cory Trimm, Patrick Vinograd:} User is sent back to [VA.gov](http://va.gov/) instead of Cerner – IAM error

**Post-launch data to track for report out to product owner Lauren Alexander:**

\### 1-month results:

- Number of unique users who click to Cerner scheduling: x
- x% of successful click through to Cerner
- x% of errors getting to Cerner from auth page
- x% errors seeing the Cerner option on [VA.gov](http://va.gov/) after sign in
- x % users getting sent back to [VA.gov](http://va.gov/) instead of entering Cerner {IAM SSOe}
