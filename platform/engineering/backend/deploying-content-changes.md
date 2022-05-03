# Getting a change from Drupal or vagov-content into production

If your change is in Drupal, skip to the next section.

## Merge content change in vagov-content
1. When you get a PR request in `vagov-content`, wait for the build checks to pass and for the PR to be mergeable
   - If there's an issue with the build check, you may need to restart it (click on the Jenkins link in the PR to open it)
2. Merge the PR in `vagov-content` into main
3. Wait for Jenkins to build the change in `vets-website`. You should see a running build here: http://jenkins.vetsgov-internal/blue/organizations/jenkins/testing%2Fvets-website/activity?branch=main
   - If this build fails, you may need to log into Jenkins and restart it
4. Once the build succeeds, the change is on dev and staging, and ready for the next production deploy

## If you need to immediately deploy only content changes to production (and no new vets-website changes)
1. Start a deploy job
   - Go to http://jenkins.vetsgov-internal/job/deploys/job/vets-gov-autodeploy-vets-website/
   - Log into Jenkins if you haven't yet
   - Choose Build with Parameters
   - Set the release_wait option to something like 5-10 minutes, depending on how much time you want to give yourself or others to respond
   - Click the checkbox for use_latest_release
   - Click Build
   - In Slack, the notification that happens in the vetsgov-engineers channel will have a link that shows the exact commits being released, re-check these to make sure they're safe
2. Once the build finishes, check production to see that the changes are live

## If you need to immediately deploy the change to production, including undeployed vets-website changes
1. Validate that the changes since the last deploy are safe to deploy, and include any vets-website commits you need:
   - You can check the build history at http://jenkins.vetsgov-internal/job/deploys/job/vets-gov-autodeploy-vets-website/ to get the time of the last deploy (usually daily at 2pm EST)
   - Look for commits after the last deploy: https://github.com/department-of-veterans-affairs/vets-website/commits/main
   - You may need to contact the developers of those commits to verify for sure
2. Start a deploy job
   - Go to http://jenkins.vetsgov-internal/job/deploys/job/vets-gov-autodeploy-vets-website/
   - Log into Jenkins if you haven't yet
   - Choose Build with Parameters
   - Set the release_wait option to something like 5-10 minutes, depending on how much time you want to give yourself or others to respond
   - Click Build
   - In Slack, the notification that happens in the vetsgov-engineers channel will have a link that shows the exact commits being released, re-check these to make sure they're safe
3. Once the build finishes, check production to see that the changes are live
