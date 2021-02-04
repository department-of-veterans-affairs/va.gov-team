# Design System Documenation Product Outline 

#### Communications

- Team Name: Design System Team
- GitHub Label: #vsp-design-system

---


## Overview

A important part of the VA Design System, is the documentation that describes design guidelines and code to help teams quickly create usable, accessible, and consistent digital services on the VA.gov platform. Its primary audience includes designers, content writers, and front-end developers who work on VA.gov.


## Problem Statement

Currently, there are parts of the current Design System are not documented (ie. form patterns library) so VFS designers and developers do not have clear steps on proper application of the design system. 

How might we provide guidelines and sample code to help teams quickly create usable, accessible, and consistent digital services on the VA.gov platform

## Desired User Outcomes

Users find guidelines and sample code of design patterns, components and other features in the design system documentation to apply to applications they are buildling. If more teams are leveraging the design system,  teams will be able to more quickly create scalable, accessible, and consistent digital services on the VA.gov platform

## Undesired User Outcomes



## Desired Business Outcomes 

- Design system can help improve consistency, quality and scalability 
- Design syste can lead to faster development on VA.gov

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

- Number of users accessing design system documentation 
- Testing satisfaction (increases) 
  - Working with Service Design team to gather this qual data



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
