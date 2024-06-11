# Request & Support Process MVP

## Overview: 

Top Goals:  One of our 2024 OKRs is develop an Identity Team Request & Support process for va.gov, which will help us help other teams far more efficiently than currently.

* Create an intake process for feature requests, updates, bug fixes, data requests, etc.
* Allow folks to self-service and learn about the team (access pre-existing materials/answers/FAQ's as much as possible)
* Ability to view all requests together.
* Create metrics to measure support

Create solutions to manage & fulfill requests from other va.gov Product Teams, including:
* Intake form
* Summation of the work we need to do

NOTE: As we started doing research, we realized that it would be best to do a MVP (Minimum Viable Product) with a small number of requests in order to test and learn from it. Ideally, how Identity supports other va.gov teams will evolve over time.

## Problem Statement: 
The Identity team has products that other teams require our assistance with to do their jobs properly. Over time, the number of requests have increased to the point where it is no longer feasible to manage these requests manually. So we need to develop a formal process in order to intake and resolve requests as efficiently as possible.

## Relevant Documents:
- [UX Brainstorm & Research](https://app.mural.co/t/oddballinternal7486/m/oddballinternal7486/1706233585959/51586c97a249268a2ff9a709024dcd9df18dc6f8?sender=u8f85d3b7f2143f85bb7a9248) 
- [Request & Support Epic](https://app.zenhub.com/workspaces/identity-5f5bab705a94c9001ba33734/issues/gh/department-of-veterans-affairs/va.gov-team/74622)
- [Requesting Support From The Identity Team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Support%20Documents/requesting-support-from-Identity.md)
- [GitHub Support Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=Identity&projects=&template=1identity-help.yaml)
- [Satisfaction Survey](https://dj540s05.optimalworkshop.com/questions/52low0ey)
- [Identity Support Dashboard in Domo](https://va-gov.domo.com/page/680596002)
- [Figma with Dashboard Screenshots and feedback about the DOMO dashboard](https://www.figma.com/board/UfSdYLDCEj8gsIJMGxf3UJ/Identity-Support-Service-GitHub-Metrics-and-Satisfaction-Survey?node-id=43-524&t=hHGltKzvpqVFaSvk-0)
- [Communications plan for slackbot release ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Support%20Process/slackbot%20release%20comms%20plan.md)
- [Using the Support Process Satisfaction Survey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Support%20Process/user-guide_support-satisfaction-survey.md)


## What's In Scope (MVP): 

### Slackbot Support

For this first iteration, the focus will be on developing the processes as needed to support other teams' requests. For MVP, we've focused on these types of requests
- PR Review
- Data pulls
- Test User Authentication Issues

NOTE: because we piggybacked off of the slackbot developed for Sign-in-Service, it's also a choice in the Slackbot.

These were originally chosen because these are requests that our team unambiguously fulfills, and we believe that if we run these cases through the full request and support process, we can then expand it to understand other kinds of requests.

### Holistic Support

While the slackbot is the outward-facing manifestation of our support process, it's not the only manifestation, as the team looked at the concept of support from a more holistic standpoint and created many different avenues of support, including:

- Github support forms for people who don't have Slack.
  - [Product Support](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Support%20Process/product-issue-template-example.md)
  - [Engineering Support](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Support%20Process/engineer-issue-template-example.md)
- [Office Hours for questions or pairing.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Support%20Process/identity-office-hours.md)
- Documentation
  - [Who we are and what we do and don't support](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Support%20Process/identity-resources-for-authentication-support.md)
  - [Authentication Issues](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Troubleshooting_logging/troubleshooting_signin.md)
  - [About Sign-in Service](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Products/Sign-In%20Service)
  - [How to use the Slackbot](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Support%20Process/Identity-Slackbot-documentation.md)
  - [Canvas in #vsp-identity channel](https://dsva.slack.com/canvas/CSFV4QTKN)
    - Contains links to most of the above documentation

### Ticket Tracking

All of the tickets created by the slackbot (or from github) are tagged so that we can view those tickets in ZenHub, and act upon them in a timely manner. An Epic will be created for reporting purposes.
- [Support Tickets in Zenhub](https://app.zenhub.com/workspaces/identity-5f5bab705a94c9001ba33734/board?epics=Z2lkOi8vcmFwdG9yL0VwaWMvMTEzNjc3NQ&labels=identity-slackbot)
- [Identity Slackbot Requests Epic](https://app.zenhub.com/workspaces/identity-5f5bab705a94c9001ba33734/issues/gh/department-of-veterans-affairs/va.gov-team/80440)



### Initial Metrics

There are two types of things we are initially measuring.

- Tickets
  - New Tickets Submitted Monthly
  - Current Open Tickets
  - Total Tickets by Status
  - Tickets by Team requesting
- Support Satisfaction Survey
  - Based upon the [Identity Support Feedback Survey](https://dj540s05.optimalworkshop.com/questions/0d31ff0dc545c064f822b28f7ccc1724)

We will be able to view all of the metrics together in a dashboard set up in Domo:

- [Domo Dashboard](https://va-gov.domo.com/page/680596002?userId=904436429)
- [How to use the survey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Support%20Process/user-guide_support-satisfaction-survey.md)


## Out of Scope (MVP): 
*  Request types that aren't the three listed above.
*  Communication from Github to the ID Bot
   * Notifying the thread automatically when someone picked up the ticket
* Findings from the UAT research that weren't quick wins.
     
     

     

## Use Cases:
| User          | Problem       | Solution to their Problem |
| :------------- |:------------- | :----- |
|Va.gov product team member | I want to ask a data pull| Slackbot form will standardize data pull request   |
|Va.gov product team member | I want to ask for PR review  | Slackbot form will standardize PR review request | 
|Va.gov product team member  | I'm having issues with Mock Auth   | Slackbot form will standardize Mock Auth issue request
|Va.gov product team member  | I'm not sure if I need to engage the Identity Team | Create page to explain who we are and what we do |
|Va.gov product team member  | I want to make a request from the identity team but I don't have Slack access | Github forms to take requests |
|Va.gov product team member  | I want to have a conversation with an Identity Team lead | Office hours scheduler |
|Va.gov product team member  | I want to give feedback on my experience with the Identity Team | Customer Satisfaction Survey |
|Identity Team Member  | I want to see all of the support requests | Tagged tickets in Github |
|Identity Team Member  | I want to see statistics on our requests | Ticket dashboard in Domo |
|Identity Team Member  | I want to customer satisfication levels | CSR dasboard in Domo |



## Assumptions:
* We leverage previous experience supporting other teams to create this process.

## Solution Approach: 
* We piggyback off of the slackbot developed for the SiS Project and use it to expand the range of requests captured. The slackbot will respond to the _/identity-support_ command in the #vsp-identity channel. For MVP, it will have the following choices:
  - Test User Authentication Help
  - Sign-In Service Integration
  - PR Review Request
  - Data Request
  - Other

We obviously won't worry about Sign-In Service, as that has its own flow, but "Other" will be useful in determining what choices we want to add next.

* We create other pathways to support, including documentation and non-slack forms.
* We create labels for the tickets to properly track them in ZenHub
* We create a user satisfaction survey

  
## Technical Considerations:
| Issue         | Notes         | 
| ------------- |:-------------:| 
| Slackbot / Github Connection | Right now, we can have slack can write to github, but not vice versa        |
| Potential Move to Jira | If/when we move to Jira, how much of this work will be duplicated? |

## UX/ Research Ideas Considerations:
| Issue         | Notes         | 
| ------------- |:-------------:| 
| Gather Metrics from Slack  |               |
| Survey from Team  |               |
| Inventory of Methods used for intake across VA teams  |               |


## Measuring Success:
Measuring the success of the Request & Support process was originally part of the focus of an entire project: O4KR2 - Establish and publish monthly metrics around response times for VA.gov product teams. Which also fed into O4KR3: Establish a 70% CSR rating. 

However, we decided to do it as part of this project.

Here are the intitial things we are measuring
| KPI           | Notes         | 
| ------------- |:-------------| 
| Number of requests | On a monthly basis, we track how many requests were fulfilled via the Request & Support | 
| Customer Satisfaction | Use the Customer Satisfaction survey



# Milestones:
* UX Research Completed
* Process flowchart completed
* Communication language developed
* Slackbot beta
* Survey built
* Process for specific requests captured
* Slackbot released
* UAT
* Comms
  


## Future Scope:
* [Request & Support Process Post-MVP (Draft)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Support%20Process/Post-MVP%20Product%20Brief.md)
