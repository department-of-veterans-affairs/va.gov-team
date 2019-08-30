Last updated 8-30-19
# Automated Deploys

There are automated deploys of `vets-api` and `vets-website` Monday through Friday. The release is created from `master` at 2 pm Eastern and deployed at 3 pm Eastern. Code merged to `master` after 2 pm Eastern will not be deployed until the next business day’s release. 

## Exceptions to automated deploys

If there are days or periods of time when many people will be out of the office (i.e. holidays) the automated deploys will be suspended. If people aren’t in the office to support the code going out, it’s not responsible to release. 

## Holiday release schedule

TODO(gunsch): add 2019 holiday release schedule

# Requesting Out-of-Band Deploys

If there is a critical issue that needs to be resolved outside the automated deployment schedule (i.e. a bug affecting a large group of users that must be fixed right away), permission must be granted for a manual deploy. 

Extra releases to “just get something out sooner” will not be approved.

1. You must reach out to Patrick Bateman and/or Leah Bannon who will escalate this request to Chris Johnston for approval. 
1. To deploy this change to production, the release job is run with the git SHA for the commit to deploy. 
1. The auto-deploy boolean flag must be set to `FALSE` on the job. 
1. The release tag is captured and then used as input for the matching deploy job. 
1. There are "special" jobs for `vets-website` and `vets-api` which will run both the release and deploy of `master` in one operation.

# Rails Database Migrations

If a Rails database migration is needed for your code to work successfully, that is handled through a separate process:

1. Wait for the Jenkins Slack bot to post an `Unapplied database migrations` notification in `#devops-deploys`.
1. Once the notification has posted, log a request to the DevOps team in the `#vetsgov-devops` Slack channel, asking them to inspect the changes and run the post-deploy job.
