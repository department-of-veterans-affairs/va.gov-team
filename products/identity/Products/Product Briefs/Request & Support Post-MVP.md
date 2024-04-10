# Request & Support Process Post-MVP

## Overview: 

Top Goals:  One of our 2024 OKRs is develop an Identity Team Request & Support process for va.gov, which will help us help other teams far more efficiently than currently.

* Create an intake process for feature requests, updates, bug fixes, data requests, etc.
* Allow folks to self-service (access pre-existing materials/answers/FAQ's as much as possible)
* Ability to view all requests holistically
  
For the MVP we leveraged the Slackbot (aka ID Bot) already in development for Sign-In Service requests, and added the following kinds of requests:
- PR Review
- Data pulls
- Test User Authentication Issues

These were chosen because these are requests that our team unambiguously fulfills, making them ideal to understand the process of creating intake forms and documenting fulfillment of those requests. 

In addition, we created:
- A Github page to to explain how to request support from identity.
- Github Support Template
- Documentation that explained how we supported each of the three kinds of requests detailed above.
- A customer satisfaction survey


## Problem Statement: 
Once we have the initial Request & Support identity slackbot out into the world, we need to iterate on it so that it covers all of the request types, as well as update our branding and documentation.

## Relevant Documents:

- [Request & Support Post-MVP Epic](https://app.zenhub.com/workspaces/identity-5f5bab705a94c9001ba33734/issues/gh/department-of-veterans-affairs/va.gov-team/79499)
- [UX Research Shareout](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Request%20%26%20Support%20Process/Identity%20Support%20Process%20Research%20share%20out%20(from%20Mural).png)
- [Requesting Support From The Identity Team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Support%20Documents/requesting-support-from-Identity.md)
- [GitHub Support Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=Identity&projects=&template=1identity-help.yaml)
- [Satisfaction Survey](https://dj540s05.optimalworkshop.com/questions/52low0ey)
- [Slackbot Documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Support%20Process/Identity-Slackbot-documentation.md)
- [Identity Engineer Support Request](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Support%20Process/engineer-issue-template-example.md)
- [Engineer Support Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Support%20Process/engineer-support-process.md)


## Potential deliverables:
- New Request Types in ID Bot.
- New Request Type Fulfillment Processes in Github.
- Automation of ID Bot responses to certain situations in process flow.

## What's In Scope:
* Adding the following Request Types in ID Bot & Github:
  * Bug Fixes
  * Feature Requests
  * Task Request
  * Help Request
  * USiP Questions
* Slackbot message automation.
   * When a request is assigned.
   * When a request is closed.
* Slackbot posts conversation in Slack thread into Github ticket
* Identity Team branding updates
* Identity Team documentation updates.
* Letting the world know there are new choices in the slackbot

## Out of Scope: 
* External publishing of metrics garnered from Satisfaction Survey
  * This will be part of the upcoming "Publishing all of the Metrics" project.
     

## Use Cases:
| User          | Problem       | Solution to their Problem |
| :------------- |:------------- | :----- |
|Va.gov product team member| There's a bug I I'd like the ID team to fix | Bug fix choice in ID Bot   |
|Va.gov product team member | There's a feature I want to ID team to implement. | Feature request choice in ID Bot  | 
|Va.gov product team member  | There's a task I'd like the ID team to do.  | Feature request choice in ID Bot  |
|Va.gov product team member | I need the ID team's help with an issue I'm having | Feature request choice in ID Bot  | 
|Va.gov product team member  | I have questions about USiP. | USiP choice in ID Bot  |
|VA.gov product team member | I would like to have GitHub be the source of truth for my request | Slack convos get added to GitHub
|Identity team member | I'd like to automatically let users know when their project has been assigned to someone | "The project has been assigned" update from Github to ID Bot |
|Identity team member | I'd like to automatically let users know when their project finished | "The project has been closed" update from Github to ID Bot  |
|Identity team member | I'd like to reduce the % of requests we get that are for other teams | Identity Team branding as deflection |
|Identity team member | I'd like to reduce the % of requests we get that could be self-service | Identity Team documentation updates |


## Assumptions:
* We would learn enough from the simple process of releasing the MVP in order to do a fast-follow.


## Solution Approach: 
- Determine the questions we need to ask for each new request type
- Learn how to have GitHub talk to Slack
  


  
## Technical Considerations:
| Issue         | Notes         | 
| ------------- |:-------------:| 
| Slackbot / Github Connection | Right now, we can have slack can write to github, but not vice versa        |
| Potential Move to Jira | If/when we move to Jira, how much of this work will be duplicated? |

## UX/ Research Ideas Considerations:
| Issue         | Notes         | 
| ------------- |:-------------:| 
|  Dashboard |               |
|  |               |
|   |               |


## Measuring Success:
Measuring the success of the Request & Support process project will be part of the focus of an entire project: O4KR2 - Establish and publish monthly metrics around response times for VA.gov product teams.

[Identity Monthly Metrics Product Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Product%20Briefs/Identity%20Monthly%20Metrics.md)



## Milestones:

  


## Future Scope:
* There might be future request types to add.
