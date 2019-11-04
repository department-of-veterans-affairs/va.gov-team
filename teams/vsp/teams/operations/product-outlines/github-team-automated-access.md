# Github Team Automated Access Management Product Outline

## Points of Contact
- GitHub Label: None
- Slack channel: #vsp-operations

## Product Key Words
- GH teams 
- GH teams Access Management
- Access Management
- Automated Access Management   

## Overview 
The GH Teams project is 

## User Problem Statement
_"As a VFS or VSP team member, I want to see an easy, fast, and secure onboarding experience with little to no manual steps, so that I can quickly get the tools I need to start helping Veterans on VA.gov."_

Managing AWS IAM (Identity and Access Management) users currently is highly manual. Users and group memberships are managed via Terraform which strongly enforces permissions and membership. This is useful, but slow and burdensome for staff needing to onboard lots of users at once.

VSP currently has users in many systems:

GitHub
Slack
AWS IAM
SSH keys (for SOCKS and dev SSH access)
Sentry
Grafana
Jenkins

Users are manually added to GitHub and Slack already. For GitHub, a user must be added to the appropriate groups to ensure the right permissions. Slack permissions are far less granular, with a user either being a member (full access to any public channels) or a guest with access to only the channels they’ve been invited to by an administrator.


### User Goal
- VFS or VSP team members have instant access once they are approved and their GH team is the source of truth. 


## The Plan

[See original plan for user management proposal.] (https://docs.google.com/document/d/1WL6T1Jmt1olJ0Tzi7t05K2H5omjjhsLK-fMQobTlI3o/edit?ts=5d237718&pli=1#)
### Phase 1 MVP rollout GH Team SSH to VSP and VFS.
- Setup VSP Operations as the first test group for SSH integration for accessing the internal tools and jumpboxs. 
- Roll out to VSP Engineers and request for feedback and iterate from this point. 
  - This group is utilizing SSH and internal tools more closly so this would directly, so their feedback will be very important before rolling out to VFS Engineers.   
- Roll out to all of VSP, request feedback, and integrate.
- Start the process of rolling out to VFS teams, by the Ops team creating a GH team on the VA repo, setting their permissions and then giving that GH team to each to for them to manage and own. 

### Phase 2 Integrating AWS to GH team
- Connect GH teams with AWS. 

### Rollback Plan
- During the rollout we will be maintaining the previous version of access management via Ansible groups, so that we can switch back in case there are any issues.

# The Solution
- Set GitHub at the center of user management by using GitHub teams for role/access management, where team changes trigger an external service to provide both AWS IAM users and SSH keys for SOCKS.

## Narrative
- Proposal was drafted and approved by DSVA.
- MVP was demoed locally on 10/16. 
- PR was merged to make VSP Operations team the first group to use, so testing can be done.

## Dependentences

Github
Slack
Ansible 
AWS
  
## Current Status
- PR Merged that makes VSP Operations team the first team to use the GH teams approach. 
- Testing, Testing, Testing 


