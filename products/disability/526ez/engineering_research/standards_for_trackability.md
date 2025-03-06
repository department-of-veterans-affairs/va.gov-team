# Standards of Trackability in 526EZ

This document outlines some standard ways in which you can track a user’s journey through the 526ez application- from starting the application, to its submission.

### User Identifiers

When a user first logs into the application, a veritable swarm of identifiers associated to user are available to the application. There are IDs associated to the provider they use (i.e. ID.me, DSLogin). There is the ICN (Integration Control Number), which is a relatively new identifier in the VA space that is meant to globally identify a user within the VA system. All this information is populated in a handful of tables within the vets-api database: `Account` (which they're trying to deprecate), `UserAccount` (which stores the user's ICN) and `UserVerification` (which associates a user to a UserAccount via a number of possible provider ids, i.e. idme_uuid and dslogin_id)

Any number of these IDs (especially ICN, for some reason) have come under scrutiny for tracking purposes at various times, for fear of exposing PII or secrets about a particular user to the public or other external systems (such as DataDog). What has "risen to the surface" as the "safest" to use is called the `user_uuid`. The **user_uuid** is essentially the id of a user's provider id- the provider with which they logged in. For example if they logged in with the ID.me service, the `user_uuid` value is that of their `idme_uuid`. 

This user_uuid is effectively a "universal id" within the vets-api and vets-website world, as it is:
- included in every request made from the website
- saved to various important database records, such as the `InProgressForm` table (which stores info about the user's application state), and the `Form526Submission` table (which stores the user's final submission data)

### Front End Tracking

Since the `user_uuid` is sent with every request, and every request is logged within DataDog, it is possible to observe a fairly complete picture of which pages a particular user has visited, and whether or not they have submitted the application.

TODO: show examples of using a user_uuid with DataDog to get the above

Another way that user progress within the 526ez application is tracked is via Google Analytics. TODO: fill in info about this, if we can. Hey I can ask Jared on LinkedIn, maybe ;-)

## ...To The Back End

Once a user ...
