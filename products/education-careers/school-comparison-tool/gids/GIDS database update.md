# GIDS Database Update
To run the database migrations in https://github.com/department-of-veterans-affairs/gibct-data-service/tree/master/db/migrate
## Dev
- Make sure the build at http://jenkins.vfs.va.gov/job/testing/job/gibct-data-service/job/master/ is finished
- Make sure the deploy at http://jenkins.vfs.va.gov/job/deploys/job/gi-bill-data-service-vagov-dev/ is finished
- Run a build of http://jenkins.vfs.va.gov/job/deploys/job/gi-bill-data-service-vagov-dev-post-deploy/build?delay=0sec
## Staging
- Make sure the build at http://jenkins.vfs.va.gov/job/testing/job/gibct-data-service/job/master/ is finished
- Make sure the deploy at http://jenkins.vfs.va.gov/job/deploys/job/gi-bill-data-service-vagov-staging/is finished
- Run a build of http://jenkins.vfs.va.gov/job/deploys/job/gi-bill-data-service-vagov-staging-post-deploy/build?delay=0sec
## Production JUST HERE FOR FYI
- To start prod build: http://jenkins.vetsgov-internal/job/releases/job/gi-bill-data-service/build
- To start post deploy actions: http://jenkins.vfs.va.gov/job/deploys/job/gi-bill-data-service-vagov-prod-post-deploy/build?delay=0sec

# BACKUP PROCESS ONLY, ONLY DO THIS IF YOU DID NOT DO ABOVE ON SAME DAY CODE WAS DEPLOYED
## Dev/Staging Server Access
This requires aws credentials which can be requested via a GitHub issue at https://github.com/department-of-veterans-affairs/devops/issues/new
The groups are
- bah-vfs-developers
- force-MFA

Setup AWS Session Credentials
- https://github.com/department-of-veterans-affairs/devops#setup
- Make sure to setup MFA

Start AWS Session Manager Session (Recommended)
- Login into https://console.amazonaws-us-gov.com/systems-manager/session-manager/sessions?region=us-gov-west-1
- Click "Start Session"
- Select an instance with "dev-gi-bill-data-service"/"staging-gi-bill-data-service" in the instance name
- Click "Start Session"
- Or start SSH Session in AWS server
- Get the IP address of a staging server
   - The server IP addresses change each time a build is deployed. A script has been developed to determine the IP addresses. The instructions are located in GitHub at https://github.com/department-of-veterans-affairs/devops/blob/master/utilities/aws_hosts.rb
- Run the script with the staging parameter and collect the IP address of one of the servers. 
$) gem install aws-sdk-ec2
$) ruby aws_hosts.rb vagov-staging | grep gi-bill
- Sample output
   - ip-10-247-34-207.us-gov-west-1.compute.internal dsva-vagov-staging-deployment-vagov-staging-gi-bill-data-service-20190614-183130-asg 1b
   - ip-10-247-34-104.us-gov-west-1.compute.internal dsva-vagov-staging-deployment-vagov-staging-gi-bill-data-service-20190614-183130-asg 1a

A server from above output is
- ip-10-247-34-207.us-gov-west-1.compute.internal

Connect to the staging server via ssh
$) ssh ip-10-247-34-207.us-gov-west-1.compute.internal

Or go to https://console.amazonaws-us-gov.com/ec2/v2/home?region=us-gov-west-1#Instances:search=gi-bill;sort=instanceId and find a staging instance's private DNS

## Update database via migrations
- https://github.com/department-of-veterans-affairs/devops/blob/master/docs/ConnectToDatabases.md
- Make sure the build at http://jenkins.vfs.va.gov/job/testing/job/gibct-data-service/job/master/ is finished
- Make sure the deploy at http://jenkins.vfs.va.gov/job/deploys/job/vets-website-vagovdev/ or http://jenkins.vetsgov-internal/job/deploys/job/vets-website-vagovstaging/ is finished
- To run the database migrations in https://github.com/department-of-veterans-affairs/gibct-data-service/tree/master/db/migrate
$) sudo su
$) docker exec -it gi-bill-data-service bash
$) source config/.env.sh
$) bundle exec rake db:migrate RAILS_ENV=production

### Update database via the Rails console (can skip first 3 commands if doing this after run a database migration)
$) sudo su
$) docker exec -it gi-bill-data-service bash
$) source config/.env.sh
$) bundle exec rails c -e production
$) <ruby code to update values for the database>

   - This should only be used for one time migrations that should not be a part of a new developers setup
