# User Management Approach for VSP

## GitHub Team Process

### Creating a GitHub Team 

* Work with your DEPO, Tech, and Team Lead to change an existing team to meet the requirements below or [create](https://help.github.com/en/enterprise/2.19/admin/user-management/creating-teams) a *Verified GitHub Team* on VA.gov. 
    * All *Verified GitHub Team* names should start with a prefix that indicates the type of team this is. Examples of this are `vfs-*` (Veteran-facing Services) for teams working on an application, building tools, and/or services on VA.gov. Another is `vsp-*` (Veteran-facing Services Platform) for teams working on the platform supporting VFS teams. Examples would be `vsp-operations` or `vfs-public-website`. 
    * Select the team name after `vfs-*` or `vsp-*`, an example would be `vfs-[team name here]`, then choose a name that will not change and is approved by DEPO. Team names should be connected to the team’s work and not the contractor working on the contract. 
    * Each GitHub team must have their DEPO lead as a Maintainer/Admin, who can add and remove users.    
    * Maintainers should add all members to the team including both engineers and nonengineers. 
* Inform the VSP Platform Support and the VSP Operations team of any new GitHub team by posting in the #vfs-platform-support  channel. 

### Maintaining GitHub Teams 

* Any new team members will need to be added to the `vfs-all-teams` GitHub team by a member of the Platform team as part of onboarding. This team will grant them base access to tools. New team members will not be allowed to join their *Verified GitHub Team* until after their SAC adjudication returns a “favorable” response. For more information about the approval process, please see the [request for tools documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/request-access-to-tools.md#additional-orientation-steps-for-developers). 
* Teams are responsible for adding and removing members from a *Verified GitHub Team*. 
    * Once approved, new team members, should be added by the *Verified GitHub Team’s* maintainers. 
    * If a team member leaves a *Verified GitHub Team* they need to be removed within three days of departing the team by one of the team’s maintainers and then: 
        * Use the GitHub issue template “Offboarding Request” in the [va.gov-team repo](https://github.com/department-of-veterans-affairs/va.gov-team) to remove any access from the user.

### Making Naming and Maintainer Changes to a Verified GitHub Team

* No changes to a *Verified GitHub Team* name can be made unless approved by DEPO, the VSP Platform Support, and the VSP Operations team.
    * To request a *Verified GitHub Team* name change, please post in the  #vfs-platform-support channel and provide:
        * The existing and new team names
        * An explanation for the name change
        * A DEPO point of contact.  
* A replacement maintainer needs to be appointed before any other maintainer on a team leaves their team to ensure there is at least one maintainer per team at any time.
