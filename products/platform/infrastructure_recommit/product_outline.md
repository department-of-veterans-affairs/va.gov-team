# Infrastructure Recommit Initiative Outline

#### Communications
- Team Name: Operations
- GitHub Label: Operations
- Slack channel: vsp-operations
- Stakeholders: VSP, CMS, GIDS, VA.gov, Lighthouse


## Overview
The current VA.gov infrastructure was born from the idea of supporting the first site it was designed for Vets.gov. The original plan was to serve a few teams developing on the site to support our end users the Veterans by enabling them to learn about, apply, interact, and manage their VA benefits and services with ease. Now on VA.gov that underlying mission still hasn’t changed, but the size of the teams that want to work on our Platform has. In order to support a growing number of teams developing on the Platform and maintain our current quality of service, our infrastructure needs a complete overhaul to meet the ever increasing demand.


## Problem Statement
/We do not have a scalable self-service infrastructure in place to handle the desired growth of VFS and VSP teams over the next year on VA.gov./

How might we create a platform that enables self-service teams, that allows for a decrease in complexity and use modern practices for continuous delivery, while addressing the desired growth of VSP. 

## Background
The Platform is supporting 13 different teams with a goal by next year to have 30, but VA.gov’s infrastructure was not built for supporting multiple teams and services. We are already at a point where things are at their max, and if nothing changes, our infrastructure will make it harder for teams to develop on our Platform and hinder future teams from joining.
Currently, our infrastructure leads to many problems: 
Very long build times Steep learning curve making onboarding difficult 
Lack of direct feedback from the system about deploy and service health state (is my change live, and did it break the site? ) 
Increasing network and downstream dependency complexity (VAEC, TGW, DNS, VPN, TIC, several proxy layers, etc…) 
Arduous process to onboard things that don’t fit BRD process exactly (CMS) 
Environment specific implicit configuration (difficult to spin up DVP Sandbox as an example, how can we get more?) 
Configuration bifurcation (authoritative configuration lives in multiple repos with multiple team owners) 
Local development Close coupling of system and service deployment (kernel patches go out with application deploys)
 
## Desired User Outcomes
- Reduce complexity building operation components on the platform
- Reduce complexity using operation components to build on va.gov 
- Deployments should be faster, easier to run, and teams should be deploying more. 
- Faster Builds and feedback loop
- More autonomy for teams
- Faster feedback for everyone
- Foundations for greater self-service efforts
- Have true Continuous Deployment 

## Undesired User Outcomes
- A dramatic increase in complexity that does not lead to self-service
- User frustration over the change in infrastructure 
- NPS decrees
- Users don’t care

## Desired Business Outcomes
- Increase in development on VA.gov
- Infrastructure can support more teams on the Platform 
- More efficient Platform with less friction
- Ability to gather better metrics 
- A flexible infrastructure 

## Undesired Business Outcomes
- Development speed stays the same or decreases 
- Users don’t want to develop on a new platform


## Assumptions
- Users want true continuous deployment (most risky)
- Making a flexible infrastructure will help the Platform adapt to different needs 
- Development will increase 
- The sentiment of complexity will decrease  

## Solution Approach
We will work in a discovery sprint then four different phases: 
- Discovery sprint
	- Research and speak with people working on and with the Platform to better understand the pain points
	- Make [recommendations around findings](https://docs.google.com/presentation/d/1mESrMGEn5nGG9M0HUIkoBfIUCtk9ZrdV7FkMsWOH4XE/edit#slide=id.g76a7f82c07_0_303)
- Urgent Quality Problems
	- Address quality issues in current infrastructure that are blockers or enforce artificial limits on other VSP and VFS teams.
	-  Work is scoped to “buy” enough time and stability in the current Platform in order to safely begin investing in overhaul work.
- Devise and Test
	- Devise an overhauled “golden path” for continuous delivery and build out a test model.  
	- Solicit feedback by establishing a focus group with shareholders that will follow the process and provide feedback. 
- Implementation
	- Build or overhaul infrastructure and processes using iterated design. Adjust services to use it, removing old stuff along the way. 
	-  Incorporate Focus group to solicit feedback and iterate 

## Implementation Milestones
[Super Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3463)
- Local and Playground Buildout  [#6541](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6541) 
- Dev, Stage, & Prod Buildout
- New Services
- Service Migrations

## KPIs
- Team sentiment of complexity (decrease)
- Staff retention rate (increase)
- Cycle time for work (decrease)
- Have empirical data to feed OKRs (increase)
- DevOps support for routine tasks (decrease)
- DevOps engaged early in new projects (increase)
- Total elapsed time for deploy (decrease)
- Deploys triggered by teams (increase)
- Number of outdated software packages in use (decrease)
- Lifetime of individual systems (decrease)

---

## Solution Narrative
- *12/10/2020*: RFC is created and communicated out.
- *1/13/2020*: Started Discovery Sprint 
- *1/17/2020*: Finished Discovery sprint
- *1/31/2020*: Discovery Readout to Leadership and DEPO
- *1/2020*: Work started to address Urgent Quality Problems
- *2/7/2020*: Discovery readout to VSP team leads
-  *2/11/2020*: Updated review instances  are live
- *2/21/2020*: Internal diagrams and team discussions
- *2/27/2020*: Ops team using and demoing sample app
- *3/2/2020*: Focus group meeting and demo  


### Current Status
- Local and Playground Buildout


