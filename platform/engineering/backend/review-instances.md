# Reviewing changes in feature branches

We often need want to deploy changes from a branch or pull request, so that we can do additional testing and verification outside of local machine testing. We currently have two different ways of accomplishing this.

## VA.gov visual/content review

If you're looking to test a front end change in a PR in vets-website, you can use a Heroku instance. Heroku instances are spun up for each PR; you'll see one linked in the PR with a url that looks something like https://vetsgov-pr-5306.herokuapp.com (first row):

![PR deployment list](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/images/pr-deployment-list.png)

These instances are public, but they only build the website part of VA.gov, not any of the React apps. They are also not connected to an API backend. 

Heroku instances are best used to review content or visual changes that affect static content on VA.gov, especially if those changes need to be viewed by external stakeholders.

## Full application reviews

If you need to test a service or application on VA.gov, or a backend change, review instances are the best option. Review instances are a deployment of a combination of vets-api and vets-website at specified versions.

Internal review instances are built by Jenkins (these have a url like http://71aaf141c9283eb0f29ded3b967a118c.review.vetsgov-internal) and are connected to an API backend (second row):

![PR deployment list](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/images/pr-deployment-list.png)

These require access to the [SOCKS proxy](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/internal-tools.md) so can not be reviewed by external stakeholders.

Review instances are created as part of a pull request for the vets-api or vets-website github repositories, but they can also be created manually by running a Jenkins job.

### Automatic Creation

The Jenkinsfiles in vets-website and vets-api define a stage that triggers a review instance deployment. Opening a PR will trigger the CI process, which will generate a "GitHub Deployment" for the PR. A message on the PR will provide a link to the review instance.

You will need your browser configured to access the vetsgov-internal domain via the SOCKS proxy. Please see the [Internal Tools](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/internal-tools.md) documentation for detailed instructions.

### Manual Creation

1. Visit http://jenkins.vfs.va.gov/job/deploys/job/vets-review-instance-deploy/ and log in. 
1. Select "Build with Parameters"
1. Specify the branch names for `api_branch` and `web_branch`. These branches will be deployed together with the review instance.
1. When the process is completed, the URL for the review instance will be provided at the end of the output logs.

### Access and Usage

**NOTE:** This section is actively being worked on right now and these processes should get easier as time goes on. Some of these processes are extremely painful at the moment, but we are making the feature available in its rough form as these get worked out. The epic for this work can be found [here](https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/4617), please reach out to #vfs-platform-support for feature requests or questions.

These instances are running on an independent virtual machine that includes an installation of both vets-api and vets-website with an nginx proxy in front getting requests to the right place.

The web interface (vets-website) and API (vets-api) are available over HTTP behind the [SOCKS proxy](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/internal-tools.md#configure-the-socks-proxy).

#### SSH

The instances are accessible via SSH and code can be freely modified in place. See [Internal Tools Access](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/internal-tools.md#internal-tools-access) to get SSH access setup and authorized.

⚠️ Code is re-deployed on each commit which could result in lost changes local to the review instance ⚠️ 

In order to get connected, first retrieve the hostname of the instance:

- click the "Deployed" link in the GitHub deployment panel to get to the Jenkins job
- click on "Console output" to view the provisioning task
- search for "Review instance available at" on the page, which will give you the hostname string for SSH access

Once you have the hostname, login with: `ssh dsva@<hostname>`.

#### Common tasks

Both vets-website and vets-api processes are managed via Docker Compose. The code is stored in the `dsva` user's home directory. Below are some common things you may want to do in an SSH session on these instances.

##### vets-website

Watch logs (use control-c to exit):

`cd ~/vets-website; docker-compose -f docker-compose.review.yml logs -f`

This will include both build logs and access logs to the development web server running.

Rebuild vets-website after a code change:

`cd ~/vets-website; docker-compose -f docker-compose.review.yml restart vets-website`

This will cause some downtime on the instance while the site is rebuilt. The website will return 502's until the build process is done and the server is started again. To check on the progress or troubleshoot if you suspect the build failed, use the command above to view logs.

Start a shell session in the build environment for troubleshooting:

`cd ~/vets-website; docker-compose -f docker-compose.review.yml exec vets-website bash`


##### vets-api

To force a restart of puma or sidekiq (after a code change for example):

`cd ~/vets-api; docker-compose -f docker-compose.review.yml restart vets-api`

On these instances, Puma is running with `RAILS_ENV=development` which does enable live-reloading of some files but not all.

Also note that this `vets-api` service in the compose file includes both Puma and Sidekiq

Watch stdout of Puma or Sidekiq processes (control-c to exit):

`cd ~/vets-api; docker-compose -f docker-compose.review.yml logs -f vets-api`

Leave off the `-f` if you want just a one-time view of the files.

In development mode vets-api is not logging to stdout, the file is at `log/development.log` like it would be on a local installation.

Rebuild the container and start over (note that this results in downtime for the instance):

`cd ~/vets-api; docker-compose -f docker-compose.review.yml down -v; docker-compose -f docker-compose.review.yml up -d`

Get a Rails console:

`cd ~/vets-api; docker-compose -f docker-compose.review.yml exec vets-api bundle exec rails c`

Get a bash shell in one of the containers:

`cd ~/vets-api; docker-compose -f docker-compose.review.yml exec vets-api bash`

### Cleanup

These instances are destroyed when the non-master branch(es) they are related to are deleted or the instance is older than 7 days.


### User Authentication

ID.me SAML configuration requires explicitly defining a callback URL via a manual process. This callback URL receives authentication information after a successful authentication process. The review instance requires a special nginx configuration that intercepts the callback to the dev-api.vets.gov server, and forwards the authentication information to the appropriate review instance (mapped by the `RelayState` parameter, which is provided to the review instance vets-api config with the `REVIEW_INSTANCE_SLUG` environment variable).

For implementation specific details, see the [revproxy nginx configuration](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/roles/revproxy-configure/templates/nginx_revproxy.conf). The following sequence diagram presents an overview of this process:

![Authentication Sequence](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/images/2017-02-07-review-instance-authentication-sequence.png)
