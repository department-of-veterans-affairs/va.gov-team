# Standards of Trackability/Traceability in 526EZ

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

Another way that user progress within the 526ez application is tracked is via Google Analytics. TODO: fill in info about this

## ...To The Back End

The above capabilities can be helpful in troubleshooting issues and/or tracking page visits in the front end, but what about gather information about what happens _after_ the user has submitted the application? A user's submitted application moves through a vast array of processes, database operations, external API calls, and email outputs on its way to its ultimate destination (VBMS). Not surprisingly, logging a user's `user_uuid` becomes an important factor in tracking (or tracing) the progress of a user's 526ez application through the backend- not to mention allowing for generalized statistics on certain functions.

### Logging

As an example, let's look at one particular output of the submission workflow: the Submitted Email. This is the email that goes out to the user at the exact point when either 1) their claim has been successfully established in VBMS, or 2) their submission has errored for some reason, but was "rescued" in the backup path (i.e. a 526ez PDF was still generated and sent to the eFolder within VBMS)

[Here](https://github.com/department-of-veterans-affairs/vets-api/blob/26f706aadbb788b88de47f6f6e797ced706c9c28/app/models/form526_submission.rb#L482) is where (and how) we log this particular call:

```
  def send_submitted_email(invoker)
    if Flipper.enabled?(:disability_526_send_form526_submitted_email)
      Rails.logger.info("Form526SubmittedEmailJob called for user #{user_uuid},
                                                          submission: #{id} from #{invoker}")
      first_name = get_first_name
      params = personalization_parameters(first_name)
      Form526SubmittedEmailJob.perform_async(params)
    end
  end
```
As you can see, we capture 3 pieces of information about the call with `Rails.logger.info()`:
1. The `user_uuid` of the user to whom the Submitted Email was sent
2. The `id` aka the unique submission id of the submitted application, and finally
3. The `invoker`, which is a short description of from where `send_submitted_email` was called from

Depending on what and where along the submission path you are logging from, there may be other information that you may find useful to log. The items above, particularly the user and submission ids, are just a few of the most commonly useful. When deciding what to log, just keep in mind 2 important principles:
1. **Keep it brief.** Try to restrict it to only information most essential/useful to save on resources and noise.
2. **Do not log PII.** In accordance with general rules regarding PII/PHI, include nothing that could be traced back to a specific person. For example, a person's first name might be fair game (if that's useful), but never a last name or in combination with last name or other information about the user.

### DataDog

Now that we've set up this logging in code, we can now use it in DataDog with ad-hoc queries (like in the above Front End examples) or as part of diagnostic dashboards. Continuing with the Submitted Email example, let's look at _its_ dashboard, [Benefits - New Email Touchpoints](https://vagov.ddog-gov.com/dashboard/xjp-pyw-j42/benefits---new-email-touchpoints?fromUser=false&refresh_mode=sliding&from_ts=1741133195898&to_ts=1741305995898&live=true)

![image](https://github.com/user-attachments/assets/525fac6b-e898-4613-aa95-d85deeb6ea30)

When we go to the query view, we can see that our graph employs our log entry of "Form526SubmittedEmailJob called for user" above to gather live counts of the number of Submitted Emails submitted:

![image](https://github.com/user-attachments/assets/e515e4b7-557f-4ecf-b4b2-eb617058623a)

