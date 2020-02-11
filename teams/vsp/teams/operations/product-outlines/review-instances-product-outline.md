# Review Instances Product Outline

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
- [User Feedback and Findings](#user-feedback-and-findings)
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

There are two types of review instances we use on VA.gov. the first is for testing content or any visual changes (Heroku instance) that may need to be made. The second is a way to test a service or application on VA.gov or a backend change. These review instances are a deployment of a combination of vets.api and vets-website at specified versions.

The work we are undertaking is to make improvements to the second, in order to give the ability to developers to test against live backends in staging in order to improve the testing experience overall. 

## User Problem Statement
Today, review instances (instances of the website spun up when mailing out PRs, but before merging it) are in "dev", which has some networking implications but also the backend connections are mocked out and As a developer or designer on VA.gov it is very hard to see and test tools and test the interaction with a live backend in staging without merging to master.

## Solution Goals

Point review instances to staging and allow those instances to test pre-production backends. Also, make accessing review instances easier. 

### User Goals
- Reviewers can test their code/functionality against live backends rather than mocks
- Accessing review instances will be easier.

### Business Goals
- Developers can test easier before sending their changes to the master branch
- Will help keep the master branch in a more deployable state
- Help increase the rate of development on VA.gov

## Assumptions
- People will use these updated review instances
- We will be able to track who accesses their instance
- This will greatly help improve the testing experience
- Downstream partners will be ok with this.

## Requirements  


## Constraints


## User Feedback and Findings
Prior to this work review instances were in a broken state for months and no one even noticed. 

### Direct mentions
- https://dsva.slack.com/archives/CBU0KDSB1/p1581361696135200
- https://dsva.slack.com/archives/CBU0KDSB1/p1579639667123500?thread_ts=1579636704.123000&cid=CBU0KDSB1

## Decisions


## How it works
Right now when a PR is created a link to the review instance will be populated in the PR that can be clicked and directed to the review instance. 

### How to access
- Please see instructions [here.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/backend/review-instances.md)

## The Plan

### Phase 1 

### Phase 2 


## KPIs
### Objective
Review instances are useful and fulfilling devs testing needs.

### Tracking
- Number of users accessing review instances (increase)
- Testing satisfaction using review instances (increases) 
  - Working with Service Design team to gather this data


---

# Implementation Information


## Current Status
- currently working on implementing changes to review instances.

## Solution Narrative
- **November 2019**: Review instances became broken 
- **December 2019 and January 2020**: Service Design and Ops discovery uncover pain points around testing
- **December 2019**: custom requests come in for testing and custom solutions are made per case. 
- **January 2020**: talked with many teams about testing needs and decided to invest time in review instances
- **January 21**: Mention review instance work on ToTs and teams reach out to find more. Conversations continue.
- **January 31**: VFS and VSP meeting on review instances to provide more information and hear needs.
- **February 5**: review instance demoed for VSP
- **February 11**: Live, but some clean up needs done

## Dependencies


## Key Words
- review instance

