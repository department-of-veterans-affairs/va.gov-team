# Github Team Automated Access Management Product Outline

## Points of Contact
- GitHub Label: None
- Slack channel: #vsp-operations

 
---

### Table of Contents

# Executive Summary 
- [User Problem Statement](#user-problem-statement)
- [Solution Goals](#solution-goals)
- [Assumptions](#assumptions)
- [Requirements](#requirements)
- [Constraints](#constraints)
- [Decisions](#decisions)
- [How it works](#how-it-works)
- [The Plan](#the-plan)
- [KPIs](#kpis)

# Implementation Information
- [Current Status](#current-status)
- [Solution Narrative](#solution-narrative)
- [Dependencies](#Dependencies)
- [Key Words](#key-words)


---
# Executive Summary
We are setting GitHub at the center of user management by using GitHub teams for role/access management, where team changes trigger an external service to provide both AWS IAM users and SSH keys for SOCKS to completely automate access onboarding. 

## User Problem Statement
The process for access is very manual and time-intensive for both VSP Operations and the users requesting access. Right now, to get access, a user needs to follow instructions and fill out a ZH issue. The issue needs to have a member of the VSP tag DEPO for review. Then once approved, the user will be added to very confusing Ansible groups that are maintained by three different Infrastructure teams. To be granted access, it takes at a minimum of about one sprint for a user to gain access.

_"As a VFS or VSP team member, I want to see an easy, fast, and secure access onboarding experience with little to no manual steps, so that I can quickly get the tools I need to start helping Veterans on VA.gov."_

## Solution Goals
_Automate access Onboarding to ensure this process is easy and does not take time away from admins, Operations, VSP or VFS teams to complete._

### User Goals
_VFS or VSP team members have instant access once they are approved and their GH team is the source of truth._

### Business Goals
_Access is not a barrier or burden for any team developing on VA.gov_

## Assumptions
- Teams want fast, easy, and secure access.
- Having GH teams be the center of truth makes the most sense.
- Even with the push away from SSH, we will be continuing to move forward because change will need to happen no matter what, and this work is already underway. The work to move from SSH to SSM will be the same amount of work if we do it now vs later. 
- Giving teams control of their own access, will empower them to make the right choice for them and be actively owning their team access.
- Access Onboarding and Offboarding will be easier and more reliable than the current process. 
  - They will also maintain their GH team by adding and removing users when new members come and go.
- GH teams will take out the manual steps of access on/offboarding 
- GH team will be more secure than our current process.
- Tightening Jenkins permission per each team will allow new team members to have access on day 1.

## Requirements  
- Team will be in charge of their own GH team.
- Operations will pre-bake teams, by setting up permissions before handing control to each team. 

## Constraints
- SSH may be done at the VA, but no timeline yet. The switch to SSM is still up in the air.

## Decisions
- Moving forward with using SSH even though we heard that SSH might be on it's way out.
- Starting first with SSH and then moving into AWS.
- Starting and testing with VSP Ops, then VSP Engeeriners, and then VSP as a whole before rolling out to all teams on VA.gov.
- Validating we can tighten permissions in Jenkins so teams can only see jobs, but not run them 
   - Only Operations, BE and FE tools will have the ability to run jobs in Jenkins. New members to these teams will need to go through need to be added to the general Parent Team (with just SOCKS and Jenkins read permissions) before getting added to their team (this is because those teams will have higher level of access to jenkins and once approved they can be added to the team).
   - Use Nested teams to male it easier for granting group access, ie Parent team has SOCKs access, so all the children will get that access. 
   - New VFS members can be added to the teams on day 1 after Jenkins permissions are tightened to only read access to Jenkins. Got the green light from Patrick after we demo this functionality, to use this plan and start rolling out to VFS teams.
        - Certain VFS team members that need access will be granted access via a nested team. (May need to go through an all-clear process similar for AWS access, need to confirm with Depo.)  
- Make VSA the first group we roll out to after VSP, because they are an organized group we can get feedback from.
- Operations will create and setup permissions of each GH team then hand it off.
- Be open with DVP and Appeals, so they know changes will be happening that can affect them.

## How it works
- Operations will talk with each team to find out what level of access a VFS team needs to accomplish its mission developing on VA.gov. 
  - Because GH is the source of truth, users will need to add their SSH into their GH account.
- Operations will create a GH team with pre-set permissions and set two maintainers for each team. They will have the power to add and remove members from their GH team. 
- Parent teams will be used for general access purposes and the nested teams will be used for more granular permissions.
- Once members are added to a GH team they can follow these instructions (Place holder, need to update documentation) 
  - Users will be added to their jump boxes (which are rebuilt every day).
- On deploys, the user's SSH keys will be grabbed from Github and added.
- If a user is removed from a GH team the jobs will be run and the user will then revoked access.
- If a user changes their SSH, they will need to be removed then readded to the team. 
- Only Operations, BE and FE tools teams will have access to run jobs in Jenkins. (Some others will depending on needs)
- If teams need to change their name the whole team will need to be deleted and a new one will need to be created. ( need to verify this now that we are using nested teams.)****


## The Plan

[See original plan for user management proposal.](https://docs.google.com/document/d/1WL6T1Jmt1olJ0Tzi7t05K2H5omjjhsLK-fMQobTlI3o/edit?ts=5d237718&pli=1#)
### Phase 1 MVP rollout GH Team SSH to VSP and VFS.
Step 1: 
- Setup VSP Operations as the first test group for SSH integration for accessing the internal tools and jumpboxs. 
   - Notes: Made some corrections as we found them.

Step 2:
- Roll out to VSP Engineers and request feedback and iterate from this point. 
  - Notes: 
       - This group is utilizing SSH and internal tools more closely, so this would directly impact them, so their feedback will be essential before rolling out to VFS Engineers.
      - Testing went well and all Engineers are using it with no problems. The only issues were if people had encrypted SSH keys or a very specific setup. These would not work correctly.

Step 3:
- Roll out to all of VSP, request feedback, and integrate.
  - Notes:
     - Identified some issues with non Engineers using this. Feedback can be found [here:](https://docs.google.com/document/d/1-yElavrSzL67vrdKyDXnCmI93yXtZySD0LqEgyqFXeY/edit) along with areas that need to be updated for documentation. 
- Ensure Jenkins permissions are set correctly before rolling out to VFS team.
  - notes: 
    - This is the security concern for giving people access sooner in the process (SOCKs access). Speaking with Partick if we can prove that we can tighten permissions so users can’t run jobs in Jenkins then we have the green light for rolling GH teams out to VFS team and SOCKs access can be given right away. AWS and SOCKs for VSP Operations, Tools BE, and Tools FE still need to go through a review process (others may need access as well depending on the needs). 

Step 4:
- Start the process of rolling out to VFS teams by the Ops team creating a GH team on the VA repo, setting their permissions, and then giving that GH team to each team for them to manage and own. 
- We will mimic the VSP rollout plan with VSA. We plan to roll out to all the VSA Engineers, request feedback, and give them time to utilize the feature and assist with any questions or concerns. 

Step 5:
- Roll out to all of VSA, request feedback, and integrate.

Step 6: 
- Roll out to other VFS teams, request feedback, and integrate. 

### Phase 2 Iterate with a VA slackbot for offboarding and slack integration
- Idea: Setup reminders that alert teams each month, that show them their current roster and asks them to update if the GH team roaster is not correct. 
- Idea: Iterating VA Slackbot to automatically audit current users by inactivity in DSVA slack, in order to remove inactive users to ensure only active users have access. 
- Idea: allow slackbot to add new users to channels where their team is, so when they are approved and added into their GH team Slack bot will invite them to all the channels their team operates. 

### Phase 3 Iterating AWS to GH team
- Connect GH teams with AWS. 

### Rollback Plan
- During the rollout, we will be maintaining the previous version of access management via Ansible groups, so that we can switch back in case there are any issues. This ensures we will not be disrupting any of the teams work.

## KPIs
### Objective
- All VSP and VFS users that should have access developing on VA.gov do have access.

### Tracking
- How long it takes users to be granted access and access to be removed.
  - Currently SOCKs access can take a least 8 days. 
---

# Implementation Information

## Current Status
VSP Operations team has rollout at to all of VSA Engineers.

## Solution Narrative

- **September 2019**: Proposal  drafted and approved by DSVA
- **10/16/2019**: MVP  demoed locally
- **11/01/2019**: Decisions around next steps after SSH maybe remove from VA
- **11/06/2019**: VSP Operations are the first team to use GH teams.
- **11/18/2019**: Testing and decisions made on implementation. 
- **12/10/2019**: GH teams is rolled out to all VSP Engineers
- **12/31/2019**: GH teams is rolled out to of VSP (except Design)
- **1/6/2020**: Approval from Patrick that if Jenkins permissions are tighten and demoed then Ops have the green light to roll out to VFS teams, with instant SOCKs access.
- **1/21/2020**: Green lighted to roll out to VSA and approval for new access guidelines. 

## Dependencies

- Github
- Github Teams feature
- Slack
- Ansible 
- AWS
- Jumpboxes 
- Deployments 
- Jenkins Permissions 

## Key Words
- GH teams 
- Github Teams
- SOCKs Access
- AWS Access
- GH teams Access Management
- GitHub teams Access Management
- Access Management
- Automated Access Management 

