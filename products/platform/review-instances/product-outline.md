# Product Outline Template

#### Communications
- Team Name: VSP Operations, Tools BE, and Tools FE
- GitHub Label: None



 For information on how to use review instances see this [doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/backend/review-instances.md).

---


## Overview
There are two types of review instances we use on VA.gov. the first is for testing content or any visual changes (Heroku instance) that may need to be made. The second is a way to test a service or application on VA.gov or a backend change. These review instances are a deployment of a combination of vets.api and vets-website at specified versions.

The work we are undertaking is to make improvements to the second, in order to give the ability to developers to test against live backends in staging in order to improve the testing experience overall. 

In the past, review instances (instances of the website spun up when mailing out PRs, but before merging it) were in "dev", which had some networking implications but also the backend connections were mocked out. Now they are pointing to staging and connected to pre-production live backends. 


## Problem Statement
Testing on VA.gov can be changeling for both VFS and VSP teams. A poor testing experience can slow down development and prevent  features reaching veterans in a timely manner. 

How might we make testing a pleasant, easy, and self severice experience for all, so that teams can have a faster and more stable launch of their products. 

## Desired User Outcomes
Users find review instances make testing easier and some pain points around testing are resolved. 

- *Why would a user want to use this?*
- *With this problem solved, what should users be able to do/achieve that they couldn't before?*

## Undesired User Outcomes
Review instances are not useful and don’t address any of the problems that were raised by VFS teams.

## Desired Business Outcomes
Review instances allows for faster testing, which in turn allows for faster development on VA.gov. 

- *Why would your business want this to exist?*
- *With this problem solved, what should your business be able to do/achieve that they couldn't before?*

## Undesired Business Outcomes
Review instances don’t work for most use cases and will have no future on VA.gov.

## Assumptions
- Teams are using review instances
- Teams find review instances useful for testing
- Down stream partners are unaffected by us connecting to their preproduction backends
- Review instances will increase development on VA.gov

- *Include indication of which assumption you think is most risky. Your Solution Approach (next section) should describe how you'll validate that assumtion w/your initial set of functionality*

## Solution Approach
After having conversation with multiple teams and information from Operations and Service Design discovery sprints. The VSP Operations team saw a need to address the testing problem on VA.gov. Up to this point Operations were creating custom one off solutions for users who needed testing environment support. These solutions were not scalable or sustainable, so the Operations team looked into possible ways to address this problem. 

Review instances at the time where broken for a month and even though they were utilized on vets.gov, review instances had become a resource that VFS and VSP forgot or didn’t utilize. After some discovery, speaking with users, and testing, Operations found that they point review instances to staging and then connect them to preproduction backends  for a better testing experience. The Operations team decided to only work towards this goal, because the assumption was it would address the current users needs. Although the Operations team at the same time realized that a lot more work could be done to expand and improve upon this work. 

Now that we achieved this goal we will be working with both the  Backend and Frontend tools teams to make improvements and shape the future roadmap for review instances. This will be done by soliciting feedback, discovery, and iterating on the current solution. 


## KPIs
- Number of users accessing review instances (increase)
- Testing satisfaction (increases) 
  - Working with Service Design team to gather this qual data


## Solution Narrative
- **November 2019**: Review instances became broken 
- **December 2019 and January 2020**: Service Design and Ops discovery uncover pain points around testing
- **December 2019**: custom requests come in for testing and custom solutions are made per case. 
- **January 2020**: talked with many teams about testing needs and decided to invest time in review instances
- **January 21**: Mention review instance work on ToTs and teams reach out to find more. Conversations continue.
- **January 31**: VFS and VSP meeting on review instances to provide more information and hear needs.
- **February 5**: review instance demoed for VSP
- **February 11**: Live, but some clean up needs done

### Current Status
Review instances are connected to preproduction backends and pointing to staging. 

### Key Decisions
- Review instances could be the product to address some of the testing needs 
- Focusing on qualitative date from VFS teams to drive discussions on review instances. 
- Operations are only working to address the current need and will bring in Backend and Frontend Tools to help shape the future of review instances. 


### Feedback 
- https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/product-discovery/misc-research/review-instances-feedback.md
- https://dsva.slack.com/archives/CBU0KDSB1/p1581361696135200
- https://dsva.slack.com/archives/CBU0KDSB1/p1579639667123500?thread_ts=1579636704.123000&cid=CBU0KDSB1
- Launch of new review instances: https://dsva.slack.com/archives/CBU0KDSB1/p1581452208147200
