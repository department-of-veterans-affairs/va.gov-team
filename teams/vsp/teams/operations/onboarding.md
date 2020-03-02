# Onboarding Operations Team Members

This document is meant as a way to assist a member of the VSP Operations team to get started. It starts with higher level organization of both technology and people, provides some information on how the team communicates, and adds some jumping off points into more details of how the VSP works.

## Kicking things off

A great introduction to start is the [TechnicalArchitectureOverview]() page.

There's also some high level documentation about how the [VA Enterprise Cloud transit VPC is constructed](https://github.com/department-of-veterans-affairs/devops/blob/master/docs/aws-dx-transit-spoke-architecture/architecture.md) and how the platform fits within that ecosystem. This document is from the initial implementation phase, but from a high level a lot of the main constructs are still there. We also have a video of an overview of the [VA network overall](https://dsva.slack.com/archives/C0S6H6BQU/p1569526014067200) that is super helpful.

Speaking of VAEC and how things fit together, some introductions to the organization [here](https://github.com/department-of-veterans-affairs/devops/blob/master/docs/VA-IT-Organization-and-Contacts.md).

There are currently 3 environments for the applications we deploy: dev, staging, and prod. A fourth is coming called sandbox. We also deploy into a utility environment for tools that don't fit cleanly that we only have one of (Jenkins, Grafana, etc).

On the application side there's a (somewhat older, but still relevant) video of [how endpoints get added to the API](https://www.youtube.com/watch?v=V_i8JLXk5rg&feature=youtu.be) and some details about how the app works at that level.

## Getting Connected and Started

The Operations team [README](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/operations/README.md) in this repo has good information about the team's responsibilities, mission, etc. It also has some information on communications channels and how to track work.

## Tools, Repositories, and Access

We use several tools for managing infrastructure, but primarily:

- Terraform for managing static AWS infrastructure
- Ansible for deployment and management tasks

All of this tooling is stored in the [devops repo](https://github.com/department-of-veterans-affairs/devops) on GitHub. There's a top level directory there for `ansible` and `terraform`. The `ansible` directory contains some legacy roles in the `ansible/roles` directory. There are only a couple of legacy applications deployed using these roles. The next section on Build/Release/Deploy has an overview on the model Ansible uses.

Like the rest of the project, we use GitHub issues for tracking work and ZenHub for kanban functionality. You can view the current projects on the [ZenHub board](https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/board?labels=operations&repos=133843125).

You should ensure you have:

- Access to DSVA Slack
- Access to the AWS GovCloud console
- Access to the AWS commercial (sometimes called East/West) console
- Membership on a GitHub Team that has access to the devops repo (TODO: find which group it should be, there seem to be multiple possibilities)

### Build/Release/Deploy

Ansible is broken down into three distinct phases for deployments. 

We have an [introduction slide deck](https://docs.google.com/presentation/d/1LrnoFoa8-Y_ZiVXHCk65lVk0aq1QT6v4KiFvexnF7KI/edit#slide=id.p) for high level concepts and a jumping off point to start working, and a [video of the presentation](https://dsva.slack.com/archives/CJYRZK2HH/p1570562096120000). And a more technical introduction video is [here](https://drive.google.com/file/d/1XthRYrCBIVI6LMQzP4TfL0J2cOuOv2pL/view?ts=5d8feece)

Also see the README in the [ansible directory](https://github.com/department-of-veterans-affairs/devops/tree/master/ansible#buildreleasedeploy).

### Jenkins

VSP uses Jenkins to run automated testing on all of our repositories as well as executing deployments. Access to Jenkins is controlled via our SOCKS proxy and you can gain access by setting up the [Internal Tools](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/internal-tools.md).

While there is only one instance of Jenkins, you can stand up an instance locally with most of the same configuration. Instructions are [here](https://github.com/department-of-veterans-affairs/devops/blob/master/docs/Testing%20Jenkins%20Changes.md#run-jenkins-in-vagrant). Read through the above, setup the build locally, and use the playbooks to answer the questions below.

### Monitoring

Prometheus is at the core of our monitoring, and Grafana is the tool that we use for visualizations.

TODO: overview doc of monitoring
 ### Oncall

Being oncall requires access beyond the initial item listed so far.  Here's a quick checklist / rundown of what you need to be successful.

* AWS Accounts
  * `dsva` commercial account access
  * `dsvasupport` commercial account access
  * `dsavagovcloud` govcloud account access
  * `dsva-vetsgov` govcloud test account
* SOCKS proxy access
* Can create an AWS MFA session in CLI 
* Credstash
  * `credstash list`
  * `credstash get doc.va_tic_ips`
* You have a PIV
* You have CAG access or a GFE
* You have a va.gov email address
  * and can login to it via CAG/CFE
  * and can send+receive email
  * and have a ssl cert published to the GAL for encrypted email: [doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/setup-encrypted-email.md)
* Can log in to ServiceNow
  * and are added the the `VA DOT GOV DEVOPS` assignment group (see [this doc](https://github.com/department-of-veterans-affairs/devops/blob/master/docs/ESECC-lookup.md) for more info)
* Can log in to Polaris
* PagerDuty
  * Have an account in dsva
  * Have app installed in phone and can receive push notifications
  * Have setup notification methods in the PagerDuty site
    * including for High/Low urgency alerts
* You know how to access log in AWS Cloudwatch
* You know how to push a change to release vets-api or vets-website
  * You are comfortable doing so
* You can access a shell on an instance to debug problems
  * via ssh
  * via ssm
* You DSVA Slack profile has your phone number, company email, and VA.gov email 

## Is there anything else I should know?

- docs in [DevOps documentation](https://github.com/department-of-veterans-affairs/devops/tree/master/docs) a good next step
- Docs in the entire `Work Practices` directory in the vets.gov-team are good to peruse, but in particular [Engineering Onboarding](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/backend/engineeringonboarding.md) is really useful with links to more content around workflow
