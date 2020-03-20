# User Management Product Outline (WIP)


#### Communications
- Team Name: VSP Operations
- GitHub Label: Operations
- Slack channel: #vsp-operations
- Product POCs: VSP Operations
- Stakeholders: VSP and VFS


## Problem Statement 


How might we have a better structured source of truth, so that granting access and auditing team membership can be easy for both VSP and VSF teams.


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
We started this approach on VSP by creating and connecting team to access via webhooks to grab user’s SSH key via GitHub. Due to a lack of personal, we deprioritized this work to focus on getting processes in place to organize teams first. We will be rolling back the changes we made on VSP and taking this work on later as part of the Infrastructure Recommit. The initial work that was completed is still moving forward, only there will be chances in how things are implemented. Those changes are iterations on what we learned from our initial work and will be carried out as part of the Infrastructure Recommit. 

Currently, we are creating a [process]( ) to logically organize VSP and VFS teams. Once  this process is in place we then will connect access to both the general and Verified Teams. 

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
