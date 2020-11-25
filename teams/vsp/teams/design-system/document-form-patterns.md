# Document Established Form Patterns Product Outline

#### Communications
- Team Name: Design System Team
- GitHub Label: design-system-team
- Slack channel: vsp-design-system (for general communications) and vfs-platform-support (for support)
- Product POCs: Carol Wong


---


## Overview
The Design System Team mission statement is to provide simple, scalable, high quality tools and guidelines that enable teams to rapidly build and improve the Veteran facing digital applications provided by VA. Currently the established form patterns are not documented or are documented poorly. 


## Problem Statement
As stated above, the existing patterns in the forms library either aren't documented at all or aren’t well documented. This problem has resulted in the following:

- VFS engineers encountering challenges when implementing and/or VFS designers creating new patterns.  
- VSA team has created their own documentation for form patterns which is  internal to their own team. 
- The lack of documentation leads to a knowledge gap between designers and developers and wasted time spent on designing and building a form pattern that already exists. 
- Current form templates are out of date 


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
