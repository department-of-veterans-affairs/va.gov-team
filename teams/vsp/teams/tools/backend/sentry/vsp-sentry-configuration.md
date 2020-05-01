# How to manage Sentry for the Platform

VSP engineers are responsible for monitoring and managing Sentry configurations for the platform and VFS teams.

This [Sentry README](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/sentry/README.md#runningtesting-sentry-locally) defines the technical, architectural, and configuration details related to Sentry.

## Current versioning & configurations
VSP runs on-premise version `9.1.2` within the AWS utility environment. 

**Note:** Version `10.0` is on the horizon, but requires a relatively large infrastructure reconstruct, which is in the works. Sentry is currently part of the build, release, deploy (BRD) lifecycle and configurations exist within the devops repo.

## Issue assignment
The Issue Owners/Alerting Rules feature has some limitations with automatic issue assignment in Sentry `9.1.2`. For now, issue assignment will be a manual process responsibility for VSP engineers. Automatic issue assignment is a feature adopted in Sentry `10.0`.

## Sentry team process
In an effort to allow VFS teams to “own” their Sentry teams, VSP engineers are responsible for the following:

* VSP engineers confirm that issue ownership and alerting rules are followed:
    * Make sure VFS teams provide the endpoints and code paths they “own” in relation to alerting rules. As part of the orientation process, the VFS team lead will provide alerting paths/urls to VSP engineers. Once this list of endpoints is finalized, VFS teams will give this list to a backend tools engineer in the `#vfs-platform-support` Slack channel.
    * Make sure that “Issue Owners” exist as a configuration at the project level. VSP engineers will need to maintain issue ownership rules to avoid conflicts with Sentry user permissions and VFS teams: 
    * Review the current definitions of issue ownership before adding a new ownership rule. If an ownership rule currently exists, add the team to the corresponding definition. For example: sentry-team-ownership-rule #team-1 #new-team-here
        * **Note:**  Issue ownership can be a one to many relationship.
        * Review any changes for typos to ensure current rule definitions are in place. The Issue owners section per project can and will be very large. Ownership rules can be path or URL based.
* VSP engineers are NOT responsible for setting up teams, but when a new team is going through orientation, VSP engineers are responsible for answering Sentry related configuration questions in the #vfs-platform-support Slack channel.
* VSP engineers update Sentry on a quarterly basis or when a team leaves the Platform to ensure that teams that exist on the Platform also exist within Sentry.

### VFS team orientation
When a new VFS team goes through orientation, most of the setup process is done by the team or engineering lead. However, VSP engineers are responsible to assign the correct permissions to a team lead or project manager on the new VFS team so they can create and manage a new Sentry team on a per project basis.

### VFS team removal
When a VFS team leaves the Platform, VSP engineers will be responsible for verifying that the Sentry team is removed and team member permissions are adjusted or removed.

## Team naming structure 
Sentry follows the naming conventions and team structuring defined in our current GitHub teams [documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/vsp_user_managment_process.ms).

    team name: vfs-`[team name here]`

## GitHub integration
Sentry allows for “Issue Linking” to GitHub issues. There are [known issues](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/sentry/README.md#known-issues) with the integration process and the GitHub integration is not currently implemented.

## Slack integration
Given the ownership of Senty error alerting, VSP engineers are responsible for monitoring issues and high volume errors in the `#vfs-sentry-alerts` channel. Engineers will triage issues appropriately when not addressed by a VFS team or asked for assistance.

## Alerting rules 
VSP engineers are mainly concerned with “first seen” and “high volume” alerts. VSP engineers are responsible for maintaining alerting rules on a per project basis. Alerting rules can be found in the Sentry project settings.

## Tagging
VSP and VFS engineers will be responsible for complying with our current [tagging standards](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/sentry-tagging-standards.md). A list of existing tags can be found in the Sentry project settings.

## Slack Sentry reaction legend
We currently have a slack emoji reaction legend pinned in the `#vfs-sentry-alerts` channel. This allows developers to acknowledge issues and remove overlap during issue investigation. The legend can be found with the pinned items in `#vfs-sentry-alerts`.
