# Logging Product Outline
---

## Overview
We are implementing Loki with fluentd as a logging solution for teams working on VA.gov.   

## Problem Statement
Right now logging  is not a  great experience on VA.gov.  All  the logs are within cloudwatch logs  in  AWS which requires AWS consul access to view. That process can take months and even after getting access it is not a full logging experience. It is difficult to search logs, it is difficult to correlate logs from multiple services, and hampers troubleshooting and auditing. Another method that is being used is Sentry, which  is not meant to be a logging tool. This leads to confusion and having logging all over the place and hard to access. It also have been identified as a top pain point for both VSP and VFS teams.

How might we create a better logging experience on VA.gov that can  make logging easy, accessible, scalable, and a more enjoyable experience. 
 
## Desired User Outcomes

- Users can access logging soon after they go through orientation
- Logging is easy to use
- Logs can be exported if need be
- Easier to search logs 

## Undesired User Outcomes
- Keep using old logging methods after this implementation
- Didn’t like Grafana, so won’t like Loki using Grafana UI

## Desired Business Outcomes
- Developers can solve problems on their own faster due to logging access sooner
- Having logging separated by environment improves reliability/ accessibility of logs. 
- Developers will save time due to more straight forward logging 
- Development speed will increase
- Higher quality code

## Undesired Business Outcomes
- Not being used and therefor not helping

---
## Objectives and Key Results (OKRs) and Key Performance Indicators (KPIs)

### KPIs
* (Most Important) Decrease in amount of time it takes for a developer to access logs
* Increase in number of users using Loki
* Decrease number of logging  info in Sentry  
* Less requests around logging issues
* Service Design receives less pain points around logging
* Include links to Domo or Google Analytics Dashboards/Reports_
	* TBD

#### Baseline KPI Values
* Time it takes a user to access cloudWatch ~2 weeks- 1+month 

---

## Assumptions
- Having Loki that works in Grafana will make adoption easier because most developers are familiar with Grafana already 
- We are able to speed up the time for users to access their logs 
- Loki is the best tool for right now
- Logging each environment will remove the risk of if logging is down it is down for all environments. 

## Solution Approach

- We are building out Loki with fluent bit and fluent D in our current Infra and testing there. 
- Now that we are using Far gate/ ECS we can build this outside of BRD in our current infra.
- Depending on User feedback during and after rollout we will iterate on this solution. 

--- 

## Go-to-market Strategy
- We will be working with both VSP and VFS teams to help them understand the new logging model. We will also provide documentation and work with other teams in VSP to boost our communication. 
- We need to let all developers working on VA.gov know this change will happen a good bit before the launch .
- [Link to Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/logging/release_plan.md) 

## Launch Dates
- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - tbd
- *What date will you evaluate impact after launch?*
  - 
---

## Solution Narrative

### Current Status
Loki is being buildout in ECS/Far Gate 

### Key Decisions
- We will be moving forward with Loki because it address our and users needs plus is lightweight
- Met with VSP BE tools to go over options 
- Now that we are using AWS products we can build out this in the current infra useing ECS/ Far gate. 
- Each environment will have it’s own Loki and Fluentd implementation, to keep the logs separate and to distribute the load across the entire infrastructure.
- We will be rolling out by environment and testing with VSP users. 


---
   
## Screenshots

### Before

### After

---

#### Communications

- Team Name: VSP Operations
- GitHub Label: Operations
- Slack channel: [#vsp-operations](https://dsva.slack.com/channels/vsp-operations)
- Product POCs:   VSP Operations
- Stakeholders: All teams on VA.gov



