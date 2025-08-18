# VSP Sentry Management Guide

VSP engineers across the BE Tools, FE Tools and Operations teams are responsible for managing the on-premise [Sentry installation](http://sentry10.vfs.va.gov/) used for error monitoring across the platform.

### Quick Links

- The [`devops` Sentry README](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/sentry/README.md#runningtesting-sentry-locally) defines the technical, architectural, and configuration details required to test, build, and deploy Sentry on-premise
- The Sentry on-premise [documentation](https://develop.sentry.dev/self-hosted/) can be helpful to debug configuration issues.

### Current version & configuration

VSP runs on-premise major version `10.0.x` within the AWS `vetsgov-utility` environment. Check the [`vars/main.yml`](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/build/roles/sentry10/vars/main.yml) file to determine the exact version or to modify version number.

- Terraform for the Sentry resources is [here](https://github.com/department-of-veterans-affairs/devops/blob/master/terraform/environments/dsva-vetsgov-utility/sentry10.tf).
- Ansible playbooks/roles are available for [build](https://github.com/department-of-veterans-affairs/devops/tree/master/ansible/build/roles/sentry10) and [deploy](https://github.com/department-of-veterans-affairs/devops/tree/master/ansible/deployment/config/sentry10)

Sentry [recommends](https://github.com/getsentry/onpremise#setup) configuration be done using the files below, in order:

- [`config.yml`](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/build/roles/sentry10/templates/config.yml.j2)
- [`sentry.conf.py`](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/build/roles/sentry10/templates/sentry.conf.py.j2)
- `.env` w/ environment variables (we aren't directly using this method right now)

Sentry is not auto-deployed. At time of writing, upgrades or modifications to Sentry configuration or version will require a manual [build](http://jenkins.vfs.va.gov/job/builds/job/sentry10/) or [deployment](http://jenkins.vfs.va.gov/job/deploys/job/sentry10-utility/). 

## Sentry administration responsibilities 

VSP engineers will:

- Configure, manage, and support the use of the following Sentry features:
  - [projects](http://sentry10.vfs.va.gov/organizations/vsp/projects/) for each of the main repositories
     - Projects include, but are not limited to:
       - [`platform-api`](http://sentry10.vfs.va.gov/settings/vsp/projects/platform-api/) (`vets-api`)
       - [`platform-web`](http://sentry10.vfs.va.gov/settings/vsp/projects/platform-web/) (`vets-website`)
       - [`gi-bill-data-service`]()
       - [`content-preview`]()
       - [`developer-portal`]()
       - [`developer-portal-backend`]()
     - New projects may be created to support application teams working outside of existing VSP repositories.
  - [teams](http://sentry10.vfs.va.gov/settings/vsp/teams/) including all VSP and VFS teams, and possibly others (Lighthouse, etc).
  - [members](http://sentry10.vfs.va.gov/settings/vsp/members/) who belong to teams and are assigned issues
  - [app integrations](http://sentry10.vfs.va.gov/settings/vsp/integrations/) for all projects across the platform.
  - [issue management]()
    - Define, manage, and monitor [alerting rules]()
- Support and resolve [internal](http://sentry.vfs.va.gov/vsp/internal/) Sentry errors. 
- Support VFS teams by responding to Sentry related issues in the [#vfs-platform-support](https://dsva.slack.com/channels/vfs-platform-support) Slack channel.
- Write and maintain VFS and VSP error monitoring documentation:
  - Define and enforce [tagging standards]()
  - **VSP facing documentation**
     - [This document]() is VSP-facing, used by engineers to generally understand how to configure and administrate Sentry for users of the VSP
     - The [`devops` Sentry README.md](https://github.com/department-of-veterans-affairs/devops/tree/master/ansible/deployment/config/sentry10/readme.md) contains technical-depth explanations of implementation details 
  - **VFS facing product documentation**
     - [How to configure Sentry for your app](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/sentry-configuration.md) is VFS facing
     - [Sentry tagging standards](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/sentry-tagging-standards.md) describes best practices for tagging errors in applications
- Perform upkeep as appropriate when VFS teams offboard, including:
  - removing teams
  - adjusting member permissions
  - rerouting automatic issue assignments

### Sentry projects

Projects are configured per-repository. Environment filtering on issues is achieved by passing metadata from project environments, and requires configuration per-project to support this feature. Default environment is `production`. 

### Sentry teams

In an effort to allow VFS teams to “own” their Sentry teams, VSP engineers are responsible for the following:

* VSP engineers confirm that issue ownership and alerting rules are followed:
    * Make sure VFS teams provide the endpoints and code paths they “own” in relation to alerting rules. As part of the orientation process, the VFS team lead will provide alerting paths/urls to VSP engineers. Once this list of endpoints is finalized, VFS teams will give this list to a backend tools engineer in the [#vfs-platform-support](https://dsva.slack.com/channels/vfs-platform-support) Slack channel.
    * Make sure that “Issue Owners” exist as a configuration at the project level. VSP engineers will need to maintain issue ownership rules to avoid conflicts with Sentry user permissions and VFS teams: 
    * Review the current definitions of issue ownership before adding a new ownership rule. If an ownership rule currently exists, add the team to the corresponding definition. For example: sentry-team-ownership-rule #team-1 [#new-team-here](https://dsva.slack.com/channels/new-team-here)
        * **Note:**  Issue ownership can be a one to many relationship.
        * Review any changes for typos to ensure current rule definitions are in place. The Issue owners section per project can and will be very large. Ownership rules can be path or URL based.
* VSP engineers are NOT responsible for setting up teams, but when a new team is going through orientation, VSP engineers are responsible for answering Sentry related configuration questions
* VSP engineers will update Sentry on a quarterly basis (or when a team leaves the Platform) to ensure that teams that exist on the Platform also exist within Sentry.

#### VFS team orientation

When a new VFS team goes through orientation, most of the setup process is done by the team or engineering lead. However, VSP engineers are responsible to assign the correct permissions to a team lead or project manager on the new VFS team so they can create and manage a new Sentry team on a per project basis.

#### VFS team removal

When a VFS team leaves the Platform, VSP engineers will be responsible for verifying that the Sentry team is removed and team member permissions are adjusted or removed.

#### Team naming structure 

Sentry follows the naming conventions and team structuring defined in our current GitHub teams [documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/vsp_user_managment_process.md).

    team name: vfs-`[team name here]`

### Sentry members

- 2FA is not required, though it is recommended. 
- See member list [here](http://sentry10.vfs.va.gov/settings/vsp/members/)

#### Role Definitions
- **Members** can view and act on events, as well as view most other data within the organization. Most VFS engineers will be members, and it is the default user level.
- **Admins** can manage teams and projects, as well as manage membership of teams that they are members of. The VFS team lead will hold this permission level.
- **Managers** gain admin access on all teams, and is functionally the same as Admin when open membership is enabled.
- **Owners** have unrestricted access to the organization, data, and settings. Can add, modify, and delete projects and members as well as manage other configuration. VSP engineers have Owner roles assigned. 

### Sentry integrations

#### OAuth integration

OAuth for Sentry login is provided via a GitHub OAuth application (`vsp-sentry10-oauth`) owned by the @department-of-veterans-affairs GitHub organization. 

- @kfrz created and tested the application in August 2020, subsequent [transfer request](https://github.com/department-of-veterans-affairs/github-user-requests/issues/3987) resulted in ownership being transferred to the DSVA GitHub organization. 

- **Support requests for this integration that require OAuth application configuration requires an issue to be filed [here](https://github.com/department-of-veterans-affairs/github-user-requests) and may not be immediately fulfilled.**

Members of the DSVA organization can authenticate to the Sentry application with GitHub while connected to SOCKS proxy.

#### GitHub app integration

__GitHub integration for Sentry is on the BE Tools roadmap for Q4 2020.__

#### Slack integration

__Slack integration for Sentry is on the BE Tools roadmap for Q4 2020.__
 

### Sentry issues

VSP engineers are responsible for monitoring issues and high volume errors in the [#vfs-sentry-alerts](https://dsva.slack.com/channels/vfs-sentry-alerts) channel. Engineers will triage issues appropriately when not addressed by a VFS team or asked for assistance.

#### Alerting rules 

VSP engineers are mainly concerned with “first seen” and “high volume” alerts. VSP engineers are responsible for maintaining alerting rules on a per project basis. Alerting rules can be found in the Sentry project settings.

#### Error Tagging

Tagging is done on a per-project level. [See here](http://sentry10.vfs.va.gov/settings/vsp/projects/platform-api/tags/) 

VSP and VFS engineers will be responsible for complying with our current [tagging standards](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/sentry-tagging-standards.md). A list of existing tags can be found in the specific Sentry project settings panel. 



