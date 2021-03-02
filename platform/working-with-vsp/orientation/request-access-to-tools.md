# Getting access to tools

Setting up all of the following tools while you onboard will make time on the DEPO Platform easier.

**Everyone** working on the DEPO Platform should follow steps in this document to get access to Slack, GitHub, and ZenHub.

**Developers** working on the DEPO Platform should **also** follow steps in this document to get access to Jenkins, Grafana, and Sentry.

## Slack

1. Ask your Program Manager to request an invitation to the **Digital Service @ VA** Slack. Instructions for this are [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/slack-requests.md).

1. Check your email for the Slack invitation and join!

1. Add information to your Slack profile:
    * Profile image
    * Full name
    * What I do
        * Recommended format: `Program/Team - Role [Company]`, i.e. `VSP/FE Tools - Product Manager [Oddball]`
    * Time zone
    * Pronouns
    * GitHub (i.e. the account handle / username you created when you set up your GitHub account)

## GitHub

### Getting access to the VA GitHub Organization
1.  Ask your Program Manager to submit an [Add User to the VA Organization ticket](https://github.com/department-of-veterans-affairs/github-user-requests/issues/new/choose).
    * The ticket submitter will need to have VA GitHub Org access already.
    * Ask your Contracting Officer's Representative (COR) to post their approval on this ticket to expedite the approval process.
    * This process is managed by the VA GitHub admins, not by VSP, and may take a few days to process. 

1. Once your ticket is processed, check your email for an invitation to the VA GitHub Organization, and join!
    * Note: Make sure you are signed into the correct github account before you accept the invitation.
    
1. Once you've been added, add information to your Github profile:
    * Organization: ```Your company name```
    * Working on: ```The project your team is working on```, e.g., "526 ancillary forms"

### Getting Repo Access 
1. Once you are in the VA GitHub Organization, attend Orientation with the Product Support team.

1. After Orientation, VSP will add you to the `vets.gov-write` team, which will provide you access to the repositories needed for working on VA.gov.
    * If you still don't have this access, post a request in [#vfs-platform-support](https://dsva.slack.com/channels/vfs-platform-support).

## ZenHub

See [details and orientation on ZenHub](./zenhub.md).

ZenHub is used by the VSP team for issue tracking and management. 

## Additional access for developers

Several internal tools for development are only accessible within the VA network. Access to developers outside the VA network is made available via a SOCKS proxy. For proxy access, we require the use of an SSH key pair for security.

### Set up your SSH key pair

1. Create new SSH keys.
    * [Windows instructions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/internal-tools.md#creating-an-ssh-keypair-in-windows)
    * [Mac/Linux instructions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/internal-tools.md#creating-an-ssh-keypair-in-mac-or-linux).

### Request access

1. <a id="authorizekeys"></a> Open an [Environment Access Request](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new/choose) issue and fill out the questions in the template.
     * For the "Grant AWS Console Access?" question, answer depending on if you need AWS Console access.
         * Our infrastructure is hosted in AWS GovCloud. This account is shared amongst many different teams; changes made to resources in this account will affect many services. You may need access to AWS for troubleshooting, log file review, and to apply changes to the running instances and services.
         * In order to be granted AWS Console access, your PIV background (eQIP adjudication) check needs to be underway. Please mark yes in the AWS Console access and provide a short description of why you need access. All AWS Console access requests will be reviewed by DEPO. **If you're not certain you need access to AWS, please mark "No"**.
         * For VSP Operations team members, AWS access can be expedited.
    * Comment on the ticket, tagging the `@department-of-veterans-affairs/vsp-operations` group to review. **PLEASE NOTE: If this step is skipped, Operations team members are not notified. The template adds a label for filtering, but it does not send notification to the team. This step must be included for your request to be properly routed.**
    * Monitor the issue for updates and respond to any questions from the operations group.

### Set up the SOCKS proxy

1. Make sure your Environment Access Request ticket has been completed.

1. Configure [the SOCKS proxy](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/internal-tools.md#configure-the-socks-proxy).

1. Understand [how to use the SOCKS proxy from inside the VA network and from the internet](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/internal-tools.md#accessing-socks-proxy-from-va-network).

1. [Test and use the SOCKS proxy](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/internal-tools.md#accessing-socks-proxy-from-the-internet).

1. Test accessing Jenkins, Grafana, and Sentry through the SOCKS proxy (see below).
    * When logging into these services for the first time click the button `Login with GitHub` or similar.
        * You will be prompted to link your GitHub account and presented with a permissions dialog.
        * Allow the service to access your account and view your Organization membership.

### AWS Console Access

If you requested AWS Console access in your Environment Access Request, here's how to proceed:

1. When your account has been setup, you will receive a Slack private message with your temporary password and login URL.
1. Log in and change the temporary password immediately. AWS will prompt you to change your password during the first login.
1. Follow the [walk through for MFA setup](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/backend/aws-account-setup.md).
    * Setting up a virtual MFA device is required to access services in the AWS cloud and programatically via the CLI.



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
