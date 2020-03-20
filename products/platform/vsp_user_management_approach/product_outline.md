# User Management Product Outline 


#### Communications
- Team Name: VSP Operations
- GitHub Label: Operations
- Slack channel: #vsp-operations
- Product POCs: VSP Operations
- Stakeholders: VSP and VFS


## Problem Statement 

The process for access is very manual and time-intensive for both VSP Operations and the users requesting access. Right now, to get access, a user needs to follow instructions and fill out a ZH issue. Then VSP Operations will manually process each request. Depending on the type of access, DEPO may need to approve the request. Additionally, the process of auditing users on VA.gov is time-consuming and unclear, because VSP Operations needs to check with each team to verify if a user is active. This process is very cumbersome for all parties involved.

Now we want to create a clearer process to better help organize teams, so users can see where they are in the access process. Finally, once that process is in place we will work to address the task of automating access on VA.gov.

**How might we have a better structure user management, so that auditing team membership, granting and automating team access  can be easy Va.gov.**

### Top Pain points:
- The time it takes to get access
- Transparency during the access process
- Manual and time-intensive
- Auditing is time-consuming and slow 

## Desired User Outcomes
- Team has more control over access
- Access is quicker and less manual  
- Better feedback into the process

## Undesired User Outcomes
- Interrupts work flow
- Access is more complex

## Desired Business Outcomes
- Access is more secure 
- Auditing can be done faster and easier
- Platform team will save time 

## Undesired Business Outcomes
- Does not improve the current access process
- Increase in unnecessary amount of work
- compromise in security 

## Assumptions
- Having GitHub teams be the center of truth makes the most sense
- Users and Platform want a source of truth for access
- Improving the Process first then resolving the access issues is the best order of operation
- DEPO will own access per Verified team 
- The current process is not scalable   

## Solution Approach
We started this approach on VSP by creating and connecting teams to access via webhooks to grab the user’s SSH key via GitHub. Due to changes, these plans needed to be adjusted. We found that not only was access a problem, but so was auditing, offboarding, and general user management was as well. We decided to speak with more teams to have a better understanding of the problem space and iterate on what we learned from our initial work. This resulted in working with DEPO to shorten the time it took to grant users SOCKS access from 8+ days to 1. Now we are creating a clearer process to better help organize teams and clear user management structure. We also will be rolling back the automated changes we made on VSP and taking on access automation as part of the Infrastructure Recommit. 

Currently, we are creating a [process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/vsp_user_managment_process.md) to logically organize VSP and VFS teams. Once  this process is in place we then will connect access to both the general and Verified Teams. 

* By organizing teams first and having a process in place this will make user management easier. 
* Using GitHub Teams as the source of truth, because that is where all out work is now and teams are familiar with how GitHub works.
* Have a General team for all users working with and on the Platform, along with individual project teams. 
* Connect user access to verified GitHub teams as part of the Infrastructure Recommit work.
* Allow DEPO to be the Admins of verified GitHub teams.

## KPIs
- All VSP and VFS users should be on a Verified GitHub team.
- User time to access granted (decreases)
- Platform time spend on access requests (decreases)
- Time it takes for auditing (decreases) 
- No legacy users on the Platform 

---

## Solution Narrative
* **September 2019**: Proposal drafted and approved by DSVA
* **10/16/2019**: MVP demoed locally
* **11/01/2019**: Decisions around next steps after hearing the VA may do away with SSH
* **11/06/2019**: VSP Operations are the first team to use GH teams
* **11/18/2019**: Testing and decisions made on implementation
* **12/10/2019**: GH teams is rolled out to all VSP Engineers
* **12/31/2019**: GH teams is rolled out to all of VSP (except Design)
* **1/6/2020**: Approval from Patrick that if Jenkins permissions are tighten and demoed then Ops have the green light to roll out to VFS teams, with instant SOCKs access.
* **2/10/2020**: Lost Engineer and work needed to be rescoped.
* **2/21/2020**: Talking through the rescope of the work. 
* **3/4/2020**: Started defining the process for user management  

### Current Status
* Defining the VSP user management process 
