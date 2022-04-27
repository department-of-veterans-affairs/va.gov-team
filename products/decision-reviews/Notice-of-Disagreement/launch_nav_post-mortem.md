# NOD Launch, Bad Navigation Experience

Date: 2022-04-27
Authors: Matthew Self
Status: In-Progress

On Wednesday, April 27, 2022, the Notice of Disagreement (NOD) decision review workflow was launched on VA.gov. As requested by the stakeholder (Board of Veterans' Appeals, BVA), we used a scaled release model to roll the feature out, initially launching to 25% of users, with plans to scale up by 25% every two weeks.

The feature code had been deployed to the production environment the previous day, with the feature toggle set to 'off'. On the day of launch, #benefits-team-1 flipped the feature toggle 'on', making the NOD workflow itself available to 25% of usuers. At the same time, #public-websites published an update to the static page from which the NOD is launched (static page: 
On 7/3/2019, the [`gibct-data-service`](https://github.com/department-of-veterans-affairs/gibct-data-service/) (GIDS) was deployed to production.  
There were two database migrations that each added a column to the `institutions` table that specified a default value and specified `null` values were not allowed for the new columns.  
This meant that that after creating the columns, Postgresql tried to update the existing > 4.6mm rows with the default values.  
Given the number of records, this caused the database instance's CPU to spike for approximately 30 minutes, essentially making the database inaccessible for that period of time.  
The migrations never succeeded in running.  
When we realized what was happening, we rolled back to the last known good deployment, refactored the database migrations, and successfully re-deployed.

## Impact

The [GI Bill Comparison Tool](https://www.va.gov/gi-bill-comparison-tool/) was receiving errors from the backend from 11:30 AM to 2:25 PM EDT.
For the end user, they were shown a spinner that was never followed by results.

## Root Causes

There were two factors at play here:

* The new web app code (Ruby) deployed referenced the new columns that were to be created by the database migrations.  
Therefore, until the migrations were run and the columns created, every request to `autocomplete`/`search` generated an exception.  
Regardless of the problems with the database migration, deploying this code before the columns were created would still result in a non-zero amount of downtime.

* As mentioned above, there were two database migrations that added columns to the `institutions` table and specified that they required these new columns be populated with default values.  
The process of Postgresql trying to update the existing > 4.6mm rows with the default values caused the database instance's CPU to spike for approximately 30 minutes, essentially making the database inaccessible for that period of time.  
These migrations were run via Jenkins post-deploy jobs.  These jobs failed as the underlying instance it ran on were terminated when the instance became non-responsive.  
After several failures via Jenkins the migrations were attempted by running the migrations manually via a `ssm` session.  This attempt ended when the `ssm` sessions timed out at 30 minutes having not received any input for that length of time. With the termination of the `ssm` session, the database migration process also terminated.  The migrations never completed successfully.  
This problem was not recognized when previously running the migrations in `dev` and `staging` due to the much smaller number of records in those databases.

## Trigger

Deployment of the latest GIDS service code to production, and subsequent attempt to run the database migrations.

## Resolution

When we realized what was happening with the migrations, we ceased trying to run them.
Afterward, with the database processor utilization back down to normal levels, I was surprised to still be seeing errors in production.
That's when I realized that the web app code that was running in production was referencing the non-existent columns that the migrations were trying to create.
At that time we rolled back to the last known good deployment.  [(Relevant Slack chat)](https://dsva.slack.com/archives/C7S6EA0ES/p1562177773006400)

After the previous version was deployed and we verified that the tool was performing as expected, we resumed refactoring the migrations.

We [refactored them from two migrations into one migration](https://github.com/department-of-veterans-affairs/gibct-data-service/pull/386) that would create both columns and set default values in one bulk action.  Most importantly, we removed the requirement that `null` values were not allowed.  This meant the migration would not try to update the existing 4.6mm rows.

So as to not cause any issues with deployments, we rolled back the previously run migrations in `dev` and `staging`.

The new migration was tested locally and on `dev` and `staging`.
It was then run manually in production prior to deployment, along with a necessary `UPDATE` on a subset of rows in order to prevent any further downtime that would have occurred due again to the code referencing columns that did not yet exist with the necessary values.

We then re-deployed the latest code.  All issues were resolved.

[Here is our Slack discussion](https://dsva.slack.com/messages/GKSP2L06P) while these activities were happening.

## Detection

* A prolonged execution time of the migrations, which never successfully completed.
* Errors accumulating in Sentry

## Action Items

| Description | Type | Owner | Issue # |
| --- | --- | --- | --- |
| Add `strong_migrations` to GIDS | prevention | @annaswims | [gids#345](https://github.com/department-of-veterans-affairs/gibct-data-service/issues/345) |
| Increase Prometheus data retention | investigation | @omgitsbillryan | [#651](https://github.com/department-of-veterans-affairs/va.gov-team/issues/651)

## Lessons Learned

### What went well

* Good communication (via Slack channels and phone calls) and responsiveness among engineers
* Rollback went smoothly
* #devops-alerts did receive alerts regarding GIDS DB CPU usage and GIDS reachability

### What went wrong

* We failed to identity that there was a locking query in the migration.
* #oncall received no alert about GIDS being unavailable despite va.gov registering > 450 timeout events in about an hour (according to Sentry)
* historical data in Prometheus rolled off while we were still investigating, hindering gathering of further insights

## Timeline (all times UTC, asc order)

All events occurred on 7/3/2019

* 11:30 AM - GIDS production deploy initiated
* 11:39 AM - GIDS migrations started
* 1:15 PM - I become aware that the migrations are failing to complete
* 2:25 PM - GIDS deploy is rolled back.  Service is restored.
* 3:50 PM - Refactored migration is run in production.
* 4:30 PM - Full deployment of new code is complete.  Service is stable.
