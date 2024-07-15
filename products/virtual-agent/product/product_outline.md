# VA Chatbot

#### Communications
* **Github Label**: [va-virtual-agent](https://github.com/department-of-veterans-affairs/va-virtual-agent)
* **Slack channel**: [#va-virtual-agent-public](https://join.slack.com/share/enQtNTk5NzM1NDM2ODUxOC02NDRjNmZlYWJiYWJhOWU4Y2ViNDI1OWUyMzI5YTI4OTUwMzFkODE2OWUzOGNlOGY1M2NjOWJjMjc1MTc4YzJk), [#va-virtual-agent-platform](https://join.slack.com/share/enQtNjAwNjQ0ODU2MTA0NC0wM2IzYWQ2MWRiZTc1MTliMjExNDU1MGEyNmZjNmY5OTM0MjQ2NDIyYjhkZjAxYjQ1YTQ3ODk1ODQyOTU5M2Y5)

#### Point of Contacts
* **OCTO-DE Product Lead**: Luciana Morais, Nathalie Rayter (VES)
* **Product Manager**: Joy Elizabeth
* **Project Manager**: Zinal Patel
* **Technical Lead**: Karan Krishnani
* **Quality Analyst**: Swapna Krishnankutty

#### Platform Partners
| Team                 | Feature                  | Initiative Brief         | Dates        |
| :---------           | :---------               | :---------          | :---------    |
| VHA Office of Connected Care (OCC) | Prescriptions Skill and Health Chat Integration | [Initiative Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/virtual-agent/product/rx-initiative-brief.md) | April 2023 - January 2024 | 
|  |  |  |  |

### Overview

Created in 2021, the VA Chatbot is a well-developed and maintained virtual agent that helps users solve problems and complete tasks on their own with little to no human involvement at any time of day, resulting in decreased time Veterans spend waiting for an outcome, and ultimately decreased call center calls – especially for calls involving simple questions and/or solutions. 

Ultimately, the problem we solve with our virtual agent is to help the Veteran self-serve and find information more easily. While the ultimate goal is to reduce call volumes, due to the amount of content that is available and needs to be rewritten in conversational format, the Chatbot began by targetting smaller targetted content.

The areas we address:

1. Giving the Veteran more direct access to the dense content available at va.gov 
2. Providing the Veteran with another channel to interact with the VA that is available 24 hours 
3. Providing other VA teams to integrate with our bot

### VA Chatbot Features

Up until now, the bot has been trained in the following pages for general knowledge questions: 

* Healthcare
* Disability
* PACT
* Authentication
* Compensation claims and appeals
* Decision Letters
* Sign-in Support

Our current feature in progress is the [Prescriptions Skill](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/virtual-agent/product/rx-initiative-brief.md) in partnership with OCC with the goal of allowing Veterans to list, track, and refill their prescriptions through the Chatbot. This feature is set to have a preliminary launch in October of 2023 and a Health Chat MVP launch by January 2024.

###  Analytics
* [VA Chatbot DOMO Dashboard](https://va-gov.domo.com/page/939649897?userId=111029849)
* Google Analytics

The VA Chatbot measures KPIs through Google Analytics and our dashboard on DOMO. Some of our most used and/or desired measurements of success include: 
- Engagement rates
- Satisfaction rates
- Perceived human-requirements
- Content requests

### Design/Research
* [Github](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/virtual-agent/research) 
* [Sharepoint](https://dvagov.sharepoint.com/sites/OmnichannelExperience/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FOmnichannelExperience%2FShared%20Documents%2FVirtual%20Agent%2FDesign%20%26%20Research&viewid=ede15a95%2D8b03%2D4038%2Db83c%2Da7f7fc49159a)


### Incident Response
* PoC: `#va-virtual-agent-public` Slack channel (DSVA Slack)
* Dependent VA backends
  * vets-api
  * Lighthouse API
* Dahsboards to help identify and debug application issues
  * [Sentry](http://sentry.vfs.va.gov/organizations/vsp/dashboard/17/?environment=production&project=3)



### Release Plan

Upcoming releases: 
- Prescriptions Skill MVP: October 2023
- Health Chat Integration MVP: January 2024

PoV Launch: June 2021
