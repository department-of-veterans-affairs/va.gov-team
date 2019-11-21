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
- [Hypothesis](#hypothesis)
- [Requirements](#requirements)
- [Constraints](#constraints)
- [Decisions](#decisions)
- [How it works](#how-it-works)
- [The Plan](#the-plan)
- [KPIs](#kpis)

# Implementation Information
- [Current Status](#current-status)
- [Solution Narrative](#solution-narrative)
- [Dependentences](#dependentences)
- [Key Words](#key-words)
- [Team](#team)


---
# Executive Summary
We are setting GitHub at the center of user management by using GitHub teams for role/access management, where team changes trigger an external service to provision both AWS IAM users and SSH keys for SOCKS to completely automate access onboarding. 

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
- Giving teams control of their own access, will empower them to make the right chose for them and be actively owning their team access.
- Access Onboarding and Offboarding will be easier and more reliable than the current process. 
  - They will also maintain their GH team by adding and removing users when new members come and go.
  
## Hypothesis
- GH teams will take out the manual steps of access on/offboarding 
- GH team will be more secure than our current process.
- Tightening permission per each team will allow new team members to have access on day 1.

## Requirements  
- Team will be in charge of their own GH team.
- Operations will pre-bake teams, by setting up permissions before handing control to each team. 

## Constraints
- SSH may be done at the VA, but no timeline yet. The switch to SSM is still up in the air.

## Decisions
- Moving forward with using SSH even though we heard that SSH might be on it's way out.
- Starting first with SSH and then moving into AWS.
- Starting and testing with VSP Ops, then VSP Engeeriners, and then VSP as a whole before rolling out to all teams on VA.gov.
- Operations will create and setup permissions of each GH team then hand it off.
- Be open with DVP and Appeals, so they know changes will be happening that can affect them.

## How it works
- Operations will talk with each team to find out what level of access a VFS team needs to accomplish its mission developing on VA.gov. 
  - Because GH is the source of truth, users will need to add their SSH into their GH account.
- Operations will create a GH team with pre set permissions and set two maintainers for each to who will have the power to add and remove members from their GH team. 
- Once members are added to a GH team they can follow these instructions (Place holder) 
  - User will be added to their jumpbox (which are rebuilt every day).
- On deploys, user's SSH keys will be grabbed from Github and added.
- If a user is removed from a GH team the jobs will be run and the user will then revoked access.


## The Plan

[See original plan for user management proposal.] (https://docs.google.com/document/d/1WL6T1Jmt1olJ0Tzi7t05K2H5omjjhsLK-fMQobTlI3o/edit?ts=5d237718&pli=1#)
### Phase 1 MVP rollout GH Team SSH to VSP and VFS.
- Setup VSP Operations as the first test group for SSH integration for accessing the internal tools and jumpboxs. 
- Roll out to VSP Engineers and request for feedback and iterate from this point. 
  - This group is utilizing SSH and internal tools more closely, so this would directly inpack them, so their feedback will be essential before rolling out to VFS Engineers.   
- Roll out to all of VSP, request feedback, and integrate.
- Start the process of rolling out to VFS teams, by the Ops team creating a GH team on the VA repo, setting their permissions, and then giving that GH team to each team for them to manage and own. 

### Phase 2 Iterate with a VA slackbot for offboarding and slack integration
- Setup reminders that alert teams each month, that show them their current roster and asks them to update if the GH team roaster is not correct. 
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
---

# Implementation Information

## Current Status
VSP Operations team is using and testing the GH team model.

## Solution Narrative

- **September 2019**: Proposal  drafted and approved by DSVA
- **10/16/2019**: MVP  demoed locally
- **11/01/2019**: Decisions around next steps after SSH maybe remove from VA
- **11/06/2019**:VSP Operations are the first team to use GH teams.
- **11/18/2019**: Testing and decisions made on implementation. 


## Dependentences

- Github
- Slack
- Ansible 
- AWS
- Jumpboxes 
- Deployments 
- Jenkins Permissions 

## Key Words
- GH teams 
- Github Teams
- GH teams Access Management
- Access Management
- Automated Access Management 

## Team:
- Lead Ops Engineer - Wyatt Walter
- Product Manager - TJ Rice
- Ops Engineer - Taylor Skinner
- Senior Ops Engineer- Nick Walke
- Senior Ops Engineer - Nathan Hruby
- Ops Engineer - Bennie Mosher
- Ops Engineer - Jeremy Britt

Other Member that contribute to our Team's mission
- DevOps Engineer - William Ryan
- DevOps Engineer - Glen Stevenson
