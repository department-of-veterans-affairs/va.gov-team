# Request access to tools

## Configure your Github and Slack accounts

To work on the Veteran-facing Services Platform, each team member needs to use the VA Github organization and to DSVA Slack channels.

## Slack
1. If you haven't already, check your email for an invitation to join Digital Service at VA on Slack, and join!

1. Add information to your Slack profile:
    * Profile image
    * Full name
    * What I do (i.e. your practice area: Front-end Engineer, Designer, etc)
    * Time zone
    * Pronouns
    * GitHub (i.e. the account handle / username you created when you set up your GitHub account)

## GitHub

### Getting access to the VA GitHub Organization
1.  Work with your Program Manager and have them submit an [Add User to the VA Organization ticket](https://github.com/department-of-veterans-affairs/github-user-requests/issues/new/choose) in Github with the VA GitHub admins. This ticket will need to be approved by your COR, before being added to the VA GitHub Organization. Note: The may take a few days to process. 

1. Once your ticket is processed, check your email for an invitation to the VA GitHub Organization, and join! If you have not received an invitation (and do not already have a va.gov email), please reach out to your Program Manager. If you already possess a va.gov email and have not received an invitation, please visit [this site](https://vaww.oit.va.gov/services/github/) (will only work on VA network, CAG, or GFE/VPN) and fill out a request to be added.

### Getting Repo Access 
1. Once you are in the VA GitHub Organization, attend Orientation with the Product Support team. After Orientation, you'll be added to the `vets.gov-write` team, which will provide you access to the repositories needed for working on VA.gov.

1. Add information to your Github profile:
    * Organization: ```Your company name```
    * Working on: ```The project your team is working on```, e.g., "526 ancillary forms"

1. Developers, complete the [additional VSP orientation steps](#additional-orientation-steps-for-developers) below to access the code repositories and tools you'll need for development and deployment.

## Zenhub

1. Zenhub is used by the VSP team for issue tracking and management.

2. Additional details and orientation on Zenhub can be found [in this document](./zenhub.md).

## Additional orientation steps for developers

The internal tools available include Grafana, Sentry, Prometheus, and Jenkins. These tools are hosted internally and
available for developers via proxy access. We use `ssh` and the Chrome plugin SwitchyOmega to route web requests from
your browser to the SOCKS5 proxy for these private domains. For this we require the use of an `ssh` key pair to secure access.

In addition to internal tools our infrastructure is hosted in and makes use of services in AWS GovCloud. This account is shared amongst many different teams; changes made to resources in this account will affect many services. You will need access to AWS for troubleshooting, log file review, and to apply changes to the running instances and services. 

For either SOCKS5 proxy and/or AWS Console access please create a "Environment Access Request" issue in Github. All SOCKS5 proxy access requests are reviewed by VSP Operations. 

In order to be granted AWS Console access, your PIV background (eQIP adjudication) check needs to be underway(for VSP Operations folks, this process is expedited). Please mark yes in the AWS Console access and provide a short description of why you need access. All AWS Console access requests will be reviewed by DEPO. **If you do not need access to AWS please mark "No" in the Grant AWS Console Access section**. Please ensure  all VA onboarding paperwork is submitted to your company/COR.

We will be walking through how to request access in the steps outlined below.

#### 1. Create new SSH keys for [Windows](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/internal-tools.md#creating-an-ssh-keypair-in-windows) or [Mac/Linux](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/internal-tools.md#create-ssh-public-key).

#### <a id="authorizekeys"></a>2. Request that your SSH keys be authorized so that you can use the developer tools such as Jenkins, Grafana and Sentry.
* Open an [Environment Access Request](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=external-request%2C+operations&template=Environment-Access-Request-Template.md&title=Access+for+%5Bindividual%5D) issue in the [va.gov-team](https://github.com/department-of-veterans-affairs/va.gov-team) repo.
  * Follow the template instructions.
    * Provide the name of your Contracting Officer's Representative (COR).
    * Provide your name, role and company.
    * Paste the public portion of your ssh key. The template has an example.
    * Grant AWS Console Access? Yes or No.
  * Tag group `@department-of-veterans-affairs/vsp-operations` to review.
  * Monitor the issue for updates and respond to any questions from the operations group.
  * Occasionally operations will need to reach out via Slack for additional information.

#### 3. When your key has been added, the Github issue will be closed, which will send a notification to you. This is your signal that you can continue to the next step.

#### 4. Configure [the SOCKS proxy](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/internal-tools.md#configure-the-socks-proxy).

#### 5. Understand [how to use the SOCKS proxy from inside the VA network and from the internet](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/internal-tools.md#accessing-socks-proxy-from-va-network).

#### 6. [Test and use the SOCKS proxy](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/internal-tools.md#accessing-socks-proxy-from-the-internet).

#### 7. Jenkins, Grafana, and Sentry

Jenkins, Grafana, and Sentry have been linked to GitHub for user authentication.
* The services will not be accessible until the SOCKS proxy is configured and working properly.
* When logging into these services for the first time click the button `Login with GitHub` or similar.
  * You will be prompted to link your GitHub account and presented with a permissions dialog.
  * Allow the service to access your account and view your Organization membership.

#### 8. For AWS Console access
##### 8A. When your account has been setup, you will receive a Slack private message with your temporary password and login URL.
##### 8B. You are required to login and change the temporary password immediately.
* AWS will prompt you to change your password during the first login.
* Additionally you are required to setup a virtual MFA device in order to access services in the AWS cloud and programmatically via the CLI.
  * Follow the walk through for MFA setup [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/backend/aws-account-setup.md).


## Tools overview

### Jenkins

With the Socks proxy set up and running, go to http://jenkins.vfs.va.gov. You can see the builds without logging in, but will need to authenticate (with GitHub OAuth) to re-run failed builds.

### Sentry

With the Socks proxy set up and running, go to http://sentry.vfs.va.gov.

VSP uses Sentry teams to separate production, staging, and dev errors. To view the most recent production errors, which is the most common thing to do while on call, go to http://sentry.vfs.va.gov/vets-gov/platform-api-production/.

### Grafana
With the Socks proxy set up and running, go to http://grafana.vfs.va.gov/login. You can sign in using your GitHub account by clicking the "GitHub" button on the login page.

There are many dashboards and you should click around to get familiar with the variety of metrics being collected and visualized (make sure Data Source is set to Production). A few highlights are:

- [Site](http://grafana.vfs.va.gov/dashboard/db/site) provides overall metrics about the health of the site.
- [External Service Status](http://grafana.vfs.va.gov/dashboard/db/external-service-status) allows you to see the availability of the services vets.gov depends on.
- [RDS](http://grafana.vfs.va.gov/dashboard/db/rds) provides database statistics.
- [Rev Proxy](http://grafana.vfs.va.gov/dashboard/db/revproxy) provides metrics on the reverse proxies.
