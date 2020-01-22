# Infrastructure Overhaul Initiative Outline

## Points of Contact
- GitHub Label: none
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
The current VA.gov infrastructure was born from the idea of supporting the first site it was designed for Vets.gov. The original idea was to serve a few teams developing on the site in order to support our end users the Veterans by enabling them to learn about, apply, interact, and manage their VA benefits and services with ease. Now on VA.gov that underlying mission still hasn’t changed, but the size of the teams that want to work on our platform has. In order to support a growing number of teams developing on the platform and maintain our current quality of service, our infrastructure needs a complete overhaul to meet the growing demand.

## User Problem Statement
_We do not have a scalable infrastructure in place to handle the desired growth of VFS and VSP teams over the next year on VA.gov._

The platform is supporting 13 different teams with a goal by next year to have 30, but VA.gov's infrastructure was not built for supporting multiple teams and services. We are already at a point where things are at their max and if nothing changes our infrastructure will make it harder for teams to develop on our platform and hinder future teams from joining.

Currently, our infrastructure leads to many problems:
Very long build times
Steep learning curve making onboarding difficult
Lack of direct feedback from the system about deploy and service health state (is my change live and did it break the site? )
Increasing network and downstream dependency complexity (VAEC, TGW, DNS, VPN, TIC, several proxy layers, etc…)
Arduous process to onboard things that don’t fit BRD process exactly (CMS)
Environment specific implicit configuration (difficult to spin up DVP Sandbox as an example, how can we get more?)
Configuration bifurcation (authoritative configuration lives in multiple repos with multiple team owners)
Local development
Close coupling of system and service deployment (kernel patches go out with application deploys)

### User Story
“As a team developing on VA.gov, I want to have a stable platform that allows my team and others to grow at our rate, empowering us to develop using best practices, so that we can create and expand upon great services for our Veterans.” 

## Solution Goals
By separating services from the underlying infrastructure and adding service-centric tooling we can enhance the developer’s experience of the deployment lifecycle and provide a path to grow.

### User Goals
****Deployments should:
- Be Fast
- Be Obvious
- Degrade Gracefully
- Empower Teams

### Business Goals
Have a platform that can meet and adapt to the demand of the teams that built on it. 

## Assumptions
- Service-centric Deployment process is right for VA.gov. 
- Developers want to be empowered on VA.gov
- Service-centric deployment process we will be able to support VA.gov’s needs.
- Teams will want more deployments

## Requirements  
TBD

## Constraints
TBD

## Decisions
- Created RFC to take a guess at the high-level architecture that needs to be in place to address our issues.
- Conduct Discovery to find out how people are currently operating and understand current pain points in interacting with our Platform.
- [WIP] Created Roadmap of intended work and mapping to an MVP. 

## How it works
TBA


## The Plan
Due to the scale of this initiative, we will be rolling it out in a few phases as laid out below.

### Phase 1 Discovery 
Conducted a discovery sprint on January 13th - 17th. Including Nathan Hruby, Bill Ryan, Emily Waggoner, and TJ Rice. The discovery sprint team interviewed 8 Individuals from across the VA includes members of VFS teams, VSP teams, CMS team, and DEPO. A survey to gather additional data was also sent out to gather more data from users. 

The feedback and information received during discovery were synthesized into Pains and risks, which was organized [here](https://docs.google.com/spreadsheets/d/1RcUN1qCuuzfb73PmpiwttVEpc8Ts0LX7KtpKehHPX9g/edit#gid=946480136).  

TBD: Add info from the overview slide and link here.

### Phase 2 


## KPIs


### Objective
TBD

### Tracking
TBD

---

# Implementation Information

## Current Status

## Solution Narrative
- **12/10/2020**: RFC is created and communicated out. 
- **1/7/2020**: Finished Discovery sprint 
- **1/31/2020**: Discovery Readout to Leadership and DEPO

## Dependencies


## Key Words
- Infrastructure Overhaul




