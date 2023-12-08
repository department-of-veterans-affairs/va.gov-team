---- 


# We've moved our docs!

### This document is no longer maintained.

### Please visit the [Platform website](https://depo-platform-documentation.scrollhelp.site/) for the latest information or contact the Platform Support Team via [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1).


----
# User Management Approach for VSP (WIP)

## Overview
All teams working on VA.gov need to have a *Verified GitHub Team*, which is for team based access, auditing of users, and roasters. 

## GitHub Team Process

### Creating a GitHub Team 

* Work with your DEPO, Tech, and Team Lead to change an existing team to meet the requirements below or [create](https://help.github.com/en/enterprise/2.19/admin/user-management/creating-teams) a *Verified GitHub Team* on VA.gov. 
    * All *Verified GitHub Team* names should start with a prefix that indicates the type of team this is. Examples of this are `vfs-*` (Veteran-facing Services) for teams working on an application, building tools, and/or services on VA.gov. Another is `vsp-*` (Veteran-facing Services Platform) for teams working on the platform supporting VFS teams. Examples would be `vsp-operations` or `vfs-public-website`. 
    * Select the team name after `vfs-*` or `vsp-*`, an example would be `vfs-[team name here]`, then choose a name that will not change and is approved by DEPO. Team names should be connected to the team’s work and not the contractor working on the contract. 
    * Each VFS GitHub team must have their DEPO lead as a Maintainer/Admin, who can add and remove users.    
    * Maintainers should add all members to the team including both engineers and nonengineers. 
* Inform the VSP Platform Support and the VSP Operations team of any new GitHub team by posting in the [#vfs-platform-support](https://dsva.slack.com/channels/vfs-platform-support)  channel. 

### Maintaining GitHub Teams 

* Any new team members will need to be added to the `vfs-all-teams` GitHub team by a member of the Platform team as part of onboarding. This team will grant them base access to tools. New team members will not be allowed to join their *Verified GitHub Team* until after their SAC adjudication returns a “favorable” response. For more information about the approval process, please see the [request for tools documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/request-access-to-tools.md#additional-orientation-steps-for-developers). 
* Teams are responsible for [adding and removing members](https://help.github.com/en/enterprise/2.19/admin/user-management/adding-people-to-teams) from a *Verified GitHub Team*. 
    * Once approved, new team members, should be added by the *Verified GitHub Team’s* [maintainers](https://help.github.com/en/enterprise/2.19/user/github/setting-up-and-managing-organizations-and-teams/giving-team-maintainer-permissions-to-an-organization-member). 
    * If a team member leaves a *Verified GitHub Team* they need to be removed within three days of departing the team by one of the team’s maintainers and then: 
        * Use the GitHub issue template [Offboarding Request](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=product+support%2C+operations%2C+Offboarding%2C+analytics-insights&template=offboarding-request.md&title=Offboarding+of+%5Bindividual%5D) in the va.gov-team repo to remove any access from the user.

### Making Naming and Maintainer Changes to a Verified GitHub Team

* No changes to a *Verified GitHub Team* name can be made unless approved by DEPO, the VSP Platform Support, and the VSP Operations team.
    * To request a *Verified GitHub Team* name change, please post in the  [#vfs-platform-support](https://dsva.slack.com/channels/vfs-platform-support) channel and provide:
        * The existing and new team names
        * An explanation for the name change
        * A DEPO point of contact.  
        * Note: No name changes can be made without approval.  
* A replacement maintainer needs to be appointed before any other maintainer on a team leaves their team to ensure there is at least one maintainer per team at any time.
