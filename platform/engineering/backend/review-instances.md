# Reviewing changes in feature branches

If you need to do additional testing and verification outside of local machine testing, you can deploy changes from a branch or pull request (PR). Heroku instances allow you to test changes to static content on the frontend, while review instances allow you to view changes to services or applications on the backend.

## Reviewing visual or content changes to VA.gov

If you want to test a frontend change in a PR in vets-website, you can use a Heroku instance. Heroku instances allow you to review content or visual changes that affect static content on VA.gov. They also allow external stakeholders to view the changes. 

Heroku instances are spun up for each PR. You can access the URL from the PR, which looks something like https://vetsgov-pr-number.herokuapp.com (first row):

![PR deployment list](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/images/pr-deployment-list.png)

Heroku instances are public, but they only build the website part of VA.gov, not any of the React apps. They are also not connected to an API backend.

## Reviewing full applications

If you need to test a service or application on VA.gov, or a backend change, review instances are the best option. Review instances are a deployment of a combination of vets-api and vets-website at specified versions.

Internal review instances are built by Jenkins (these have a URL like http://71aaf141c9283eb0f29ded3b967a118c.review.vetsgov-internal) and are connected to an API backend (second row):

![PR deployment list](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/images/pr-deployment-list.png)

These review instances require access to the [SOCKS proxy](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/internal-tools.md), which means they cannot be reviewed by external stakeholders.

Review instances are created as part of a pull request for the vets-api or vets-website GitHub repositories, but they can also be created manually by running a Jenkins job.

### Automatic creation

The Jenkins files in vets-website and vets-api define a stage that triggers a review instance deployment. Opening a PR will trigger the continuous integration (CI) process, which will generate a "GitHub Deployment" for the PR. A message on the PR will provide a link to the review instance.

Make sure your browser is configured to access the vetsgov-internal domain via the SOCKS proxy. See the [Internal Tools](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/internal-tools.md) documentation for detailed instructions.

### Manual creation

If you made changes to branches in both vets-website and vets-api, and you want to test the changes together, you can manually trigger a build.

1.	Visit http://jenkins.vfs.va.gov/job/deploys/job/vets-review-instance-deploy/ and log in. 
1. Select "Build with Parameters."
1. Specify the branch names for `api_branch` and `web_branch`. These branches will be deployed together with the review instance.
1. When the process is completed, the URL for the review instance will be provided at the end of the output logs.

### Access and usage

Review instances run on an independent virtual machine on which both vets-api and vets-website are installed. A nginx proxy in the front end directs requests. The web interface (vets-website) and API (vets-api) are available over HTTP behind the [SOCKS proxy](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/internal-tools.md#configure-the-socks-proxy).

#### SSH

The review instances are accessible via SSH and you can modify code and see the changes. See [Internal Tools Access](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/internal-tools.md#internal-tools-access) to set up SSH access.

⚠️ Code is re-deployed on each commit which could result in lost changes local to the review instance. ⚠️ 

To connect, retrieve the hostname of the instance:

- Click the "Deployed" link in the GitHub deployment panel to open the Jenkins job.
- Click on "Console output" to view the provisioning task.
- Search for "Review instance available at" on the page, which will give you the hostname string for SSH access.

Once you have the hostname, login with: `ssh dsva@<hostname>`

#### Common tasks

Both vets-website and vets-api processes are managed via Docker Compose. The code is stored in the `dsva` user's home directory. You might need to perform the following common tasks in a SSH session on the review instances.

##### vets-website

- To view build and access logs for the development web server, enter the following command (enter Ctrl-C to exit):

   `cd ~/vets-website; docker-compose -f docker-compose.review.yml logs -f`

   This will include both build logs and access logs to the development web server running.

- To rebuild vets-website after modifying the code, enter the following command:

   `cd ~/vets-website; docker-compose -f docker-compose.review.yml restart vets-website`

   **Note:** You will not be able to view the instance while the website is building. The website will return 502 errors until the build process finishes and the server restarts. To check progress or troubleshoot if you suspect the build failed, use the command above to view logs.

- To troubleshoot, start a shell session in the build environment using the following command:

   `cd ~/vets-website; docker-compose -f docker-compose.review.yml exec vets-website bash`


##### vets-api

- To force a restart of Puma or Sidekiq, enter the following command:

   `cd ~/vets-api; docker-compose -f docker-compose.review.yml restart vets-api`

   On review instances, Puma is running with `RAILS_ENV=development`, which enables live-reloading of some files, but not all. This means that you will not be able to see some code changes until you force a restart. The `vets-api` service in the compose file includes both Puma and Sidekiq.

- To view stdout of Puma or Sidekiq processes, enter the following command (enter Ctrl-C to exit):

   `cd ~/vets-api; docker-compose -f docker-compose.review.yml logs -f vets-api`

   **Notes:**
   - Do not add `-f` if you only want to view the files one time.
   - In development mode, vets-api does not log to stdout. It logs to log/development.log like it would on a local installation.

- To rebuild the container and start over, enter the following command:

   `cd ~/vets-api; docker-compose -f docker-compose.review.yml down -v; docker-compose -f docker-compose.review.yml up -d`
   
   Running this command results in downtime for the instance.

- To open a Rails console, enter the following command:

   `cd ~/vets-api; docker-compose -f docker-compose.review.yml exec vets-api bundle exec rails c`

- To get a bash shell in one of the containers, enter the following command:

   `cd ~/vets-api; docker-compose -f docker-compose.review.yml exec vets-api bash`

### Cleanup

The review instance is deleted when the non-master branch that a review instance is related to is deleted or when the instance is older than 7 days.

## User authentication

The review instance requires a special nginx configuration that intercepts the callback to the staging-api.va.gov server, and forwards the authentication information to the appropriate review instance. The information is mapped by the `RelayState` parameter, which is provided to the review instance vets-api config with the `REVIEW_INSTANCE_SLUG` environment variable).

For implementation-specific details, see the [revproxy nginx configuration](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/templates/nginx_revproxy.conf.j2#L181-L203).

![Authentication Flow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/login/reference-documents/auth/review_instance_login_sequence.png)
