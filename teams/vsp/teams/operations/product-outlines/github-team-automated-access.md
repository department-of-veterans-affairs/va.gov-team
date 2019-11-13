# Github Team Automated Access Management Product Outline

## Points of Contact
- GitHub Label: None
- Slack channel: #vsp-operations

 
---

### Table of Contents

# Executive Summary 
- [User Problem Statement](#user-problem-statement)
- [Solution Goals](#solution-goals)
- [Hypothesis](#hypothesis)
- [Requirements](#requirements)
- [Constraints](#constraints)
- [Decisions](#decisions)
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
We are setting GitHub at the center of user management by using GitHub teams for role/access management, where team changes trigger an external service to provision both AWS IAM users and SSH keys for SOCKS in order to completely automatie onboarding. 

## User Problem Statement
_"As a VFS or VSP team member, I want to see an easy, fast, and secure onboarding experience with little to no manual steps, so that I can quickly get the tools I need to start helping Veterans on VA.gov."_

## Solution Goals
_Automate Onboarding to ensure this process is easy and does not take time away from admins, Operations, or VFS teams to complete._

### User Goals
_VFS or VSP team members have instant access once they are approved and their GH team is the source of truth._

### Business Goals
_Access is not a barrier or burden for any team developing on VA.gov_

## Hypothesis
- Teams want fast, easy, and secure access.
- Having GH teams be the center of truth makes the most sense.
- Even with the push away from SSH, we will be continuing to move forward because change will need to happen no matter what. 
- Onboarding and Offboarding will be easier and more reliable than the current process. 
- Giving teams control of their own access, will empower them to make the right chose for them and be actively owning their team access.

## Requirements  
- Having team own their own GH team so that there are less manual steps for onboarding.

## Constraints
- SSH may be done at the VA, but no timeline yet. The switch to SSM is still up in the air.


## Decisions
- Moving forward with using SSH even though we heard that SSH may be on it's way out.
- Starting first with SSH and then moving into AWS.
- Starting and testing with VSP Ops, then VSP Engeeriners, and then VSP as a whole before rolling out to all teams on VA.gov.
- Operations will create and setup permissions of each GH team then hand it off.
- Be open with DVP and Appeals, so they know changes will be happening that can affect them.

## The Plan

[See original plan for user management proposal.] (https://docs.google.com/document/d/1WL6T1Jmt1olJ0Tzi7t05K2H5omjjhsLK-fMQobTlI3o/edit?ts=5d237718&pli=1#)
### Phase 1 MVP rollout GH Team SSH to VSP and VFS.
- Setup VSP Operations as the first test group for SSH integration for accessing the internal tools and jumpboxs. 
- Roll out to VSP Engineers and request for feedback and iterate from this point. 
  - This group is utilizing SSH and internal tools more closely, so this would directly him pack them, so their feedback will be very important before rolling out to VFS Engineers.   
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
- All users on the platform should be working on the platform.
### Tracking
- How long it takes users to be onboard and offboarded.

---

# Implementation Information

## Current Status
VSP Operations team is using and testing the GH team model.

## Solution Narrative

- **September 2019**: Proposal  drafted and approved by DSVA
- **10/16/2019**: MVP  demoed locally
- **11/01/2019**: Decisions around next steps after SSH maybe remove from VA
- **11/06/2019**:VSP Operations are the first team to use GH teams. Testing testing testing


## Dependentences

- Github
- Slack
- Ansible 
- AWS

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
