# Service-centric Deployment Initiative Outline

## Points of Contact
- GitHub Label: none
- Slack channel: #vsp-operations

 
---

### Table of Contents

# Executive Summary 
- [User Problem Statement](#user-problem-statement)
- [Solution Goals](#solution-goals)
- [Assumptions](#assumptions)
- [Hypothesis](#hypothesis)
- [Requirements](#requirements)
- [Decisions](#decisions)
- [How it works](#how-it-works)
- [The Plan](#the-plan)
- [KPIs](#kpis)

# Implementation Information
- [Current Status](#current-status)
- [Solution Narrative](#solution-narrative)
- [Dependentences](#dependentences)
- [Key Words](#key-words)


---
# Executive Summary
The current VA.gov infrastructure was born from the idea of supporting the first site it was designed for Vets.gov. The original idea was to serve a few teams developing on the site in order to support our end users the Veterans by enabling them to learn about, apply, interact, and manage their VA benefits and services with ease. Now on VA.gov that underlying mission still hasn’t changed, but the size of the teams that want to work on our platform has. In order to support a growing number of teams developing on the platform and maintain our current quality of service our infrastructure needs a complete overhaul to meet the growing demand.

## User Problem Statement
"The platform is supporting 13 different teams with a goal by next year to have 30, but VA.gov's infrastructure was not built for supporting multiple teams and services. We are already at a point where things are at their max and if nothing changes our infrastructure will make it harder for teams to develop on our platform and hinder future teams from joining."

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
By separating services from the underlying infrastructure and adding service centric tooling we can enhance developer’s experience of the deployment lifecycle and provide a path to grow.

### User Goals
Deployments should
Be Fast
Be Obvious
Degrade Gracefully
Empower Teams

### Business Goals
Have a platform that can meet or exceed the demand of the teams that built on it. 

## Assumptions
Service-centric Deployment process is right for VA.gov. 
Developers want to be empowered on VA.gov
  
## Hypothesis
If take steps toward a Service-centric deployment process we will be able to support VA.gov’s needs.

## Requirements  


## Decisions
We need to do user reacher before building out proof of concepts. 

## How it works
TBA


## The Plan

### Phase 1 Discovery 


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


## Dependentences


## Key Words





