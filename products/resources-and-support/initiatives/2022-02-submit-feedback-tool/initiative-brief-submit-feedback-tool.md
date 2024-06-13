# Submit Feedback Tool (Medallia for Articles) Product Outline
Feb 2022

---

## Overview
*The Search and Discovery team would like suggest moving away from having a separate feedback tool (Good/Bad Rating) and use Medallia. Medallia will offer a combined experience for the Veterans as well streamline operations internally. Additionally Medallia already has analytics capabilities that the S&D team can build off of. Medallia's Feedback Survey Tool that we are interested in utilizing will allow users to rate multiple article pages on R&S.*

## Problem Statement
*Currently the Resources and support article pages have the option for a veteran to submit whether their experience on the page was good or bad. 
The S&D team have been discussing adding additional canned messages for selection so we can futher analyze the reason for the selection i.e why it was good or bad. 
VA.gov also has a feedback survey selection on the right hand of the application. When we look to adding quetions for article experience we have a couple options to explore. All options require working with Jason Woodman's team to maket the appropriate decision for the path forward.*

*Some of the options that exist could include combining the survey experiences, displaying them individually on the correct pages/articles, working towards if this then that decision trees, etc...*
 
## Desired User Outcomes
- *Users will have a consistent experience when providing feedback*
- *Feedback button will be located in a consistent part of the page and users will know where to look on a page in order to provide feedback* 
- *Solving the issue of multiple surveys could provide less frustration, more efficiency, ability to submit issues, and just an overall improved experience for the Veterans*

## Undesired User Outcomes
- *Creating a frustrating experience for the Veterans*
- *Creating a more time consuming experience for the Veterans*
- *Veterans may be confused why they are asked different questions on different pages on the website note- research to validate*
- *Inconsistent UI for submitting feedback*
- *Users feel interrupted and/or frustrated by attempts to collect feedback*

## Desired Business Outcomes
- *Streamlined sensible process for Veterans to submit feedback*
- *Product/content owners are able to quickly and easily access user feedback*
- *Product/content owners are able to understand user feedback in order to make improvements*
- *Utiliziation of Medallia since it is already implemented and provides analytics*

## Undesired Business Outcomes
- *Additional similar processes in different groups*
- *Additional reporting tool creations*
- *User feedback is hard to access and/or understand*
- *The type of feedback collected is not helpful to the product/content owner*

---
## Measuring Success
- *Utilization of the solution implemented will determine the success of using Medallia vs. the existing good/bad feedback tool. 

### Key Performance Indicators (KPIs)
*Data that will be collected are: 
 *1. # of responses
 *2. # of good vs bad responses
 *3. highest and lowest selected additional reasons for the experience*
     *- see below
* _The most important metrics to collect are the responses from the Veterans_
* _Nicole to check with Jason to ensure we can use the same dashboard they have in MVP and build off of it._


* _**Limit 5-6 KPIs per product**__

| Category | Ease of use | Service completion | Trust/Satisfaction | Health |
|----------|-------------|--------------------|--------------------|--------|
| KPI      |             |                    |                    |        |
| KPI      |             |                    |                    |        |

#### Baseline KPI Values
* _Baseline values for those most critical metrics. These may come from other systems other than VA.gov e.g. eBenefits._

### Objectives and Key results (OKRs)
_What are the measurable targets you're aiming for that delivers value for Veterans?_

- Objective:
  - Key result: 
  - Key result: 


---

## Assumptions
- *Medallia can be enabled/disabled on certain pages*
- *S&D could have a separate set of questions or add questions to Medallia and have those presented on the appropriate article pages*
- *Medallia's Intercept Tool allows users to submit feedback only once and will not reappear until 90 days later. We will not be utilizing this tool*

## Solution Approach

- *Create one combined feedback mechanism for Veterans*
- *This makes more sense then having good/bad and Medallia because it is confusing to Veterans as to why there are two surveys and also inefficient from a development, maintenance and KPI's perspective*
- *We have decided to limit the additional feedback responses so that it is quick for the Veterans*
- *The solution could be built upon by other crews after we do the intial combination with Jason's team and our team*

### Initiatives
*Neither a initiative brief or previous product outline exists for good/bad component as it was intended to be an enduring component as it was a stop gap build based on the fact Medallia rolling on to VA.gov and once that was completed our intention was to revert back to a Medallia like CSAT capture*



--- 

## Go-to-market Strategy
- *Currently the good/bad component rating is available on article pages and the Medallia survey is on the side bar of the site. Currently Good/Bad is just that without no supporting information. Medallia has the ability for VA.gov to streamline the survey results to one experience and should be marketed as such.*
- * TBD- This will need to be decided with Dave Conlon as well as Jason Woodman and his team to ensure a seamless rollout that enhances the user experience. Additionally when rolled out we will want to make sure we are very clear and consise to the Veteran about what they are responding to i.e an article, page. etc...What marketing, outreach, or communications are necessary for this product to be successful?*
- TBD- [Link to Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

## Launch Dates
- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - tbd
- *What date will you evaluate impact after launch (and when do you expect to have your Impact Review)?*
  - tbd

---

## Solution Narrative
<a href="https://github.com/department-of-veterans-affairs/va.gov-team/issues/35364">Q&A with Jason Woodman, #35364</a>

*What will users see after they click the blue feedback button near the footer? Currently a modal appears when a user clicks the blue button on the right side of the page, is anything changing after a user clicks the blue button?* A modal with the three standard Feedback survey questions we currently serve; nothing in that regard is changing right now.

*Can you share more details on the release/testing plan? And can R&S article pages be a part of testing?* Yes, we do plan to test functionality on staging for each template and also run general 508 accessibility tests. This can be included in this. We need to make sure that Jason confirmed this

*Is this userflow possible with Medallia?* If a user rates the page poorly a list of issues (such as "Typo") with checkboxes will appear to allow users to report problems with the page. I do believe this is possible, though will likely require a fair amount of customization (i.e. engineering) on our side. This type of scenario would also likely need to go through our experimental design process. This is supported but will be implemented towards Q1. 

### Wireframes/User flow
<details>
  <summary>Option 1 - Content team will need development time for this option (click to expand)</summary>
<img src="https://user-images.githubusercontent.com/95870427/151209907-3ffdc676-accc-41f2-8c79-7eb5aef61e32.png" width="700">
</details>
 
<details>
  <summary>Option 2 (click to expand)</summary>
<img src="https://camo.githubusercontent.com/45c4ddeda368f82d6ed5b811d9382e7f52fa5a7f0cb266571b845e0f294e37f4/68747470733a2f2f696d616765732e7a656e68756275736572636f6e74656e742e636f6d2f3566393164653139336130616332336634396437626638392f65393730663461332d653734342d346536392d393836332d316639356634393263353030" width="400">
</details>


### Questions/Input fields
<a href="https://github.com/department-of-veterans-affairs/va.gov-team/issues/35813#issuecomment-1027111723">Comment from Beth Potts, #35813</a>. *This type of feedback (see bullets below) about the content would help us improve pages. I'm not sure if these are similar to already approved language that we could use instead, but I didn't see them in the spreadsheet attached to this ticket. I'd like to change "Report a problem on this page" to a more conversational and PL "Tell us more so we can make this page better." Also, @joshkimux Could I get your input on how to phrase the last bullet? Thanks!*!

* There’s too much information on this page
* The text is hard to understand
* The text has errors
* There’s a broken link
* I couldn’t find the information I was looking for
* My screen reader had trouble with this page



### Current Status
* Good/Bad exists*
* Sam completed the dev for additional questions and it is sitting on the shelf if we want to roll to production*
* We need to figure out the PRA process; Dave has provided the link. Jason and I agreed to work together on this but his team will own it.*

### Key Decisions

---
   
## Screenshots

### Before

### After

---

#### Communications

<details>

- Team Name: 
- GitHub Label: 
- Slack channel: 
- Product POCs:
- Stakeholders: 

</details>

#### Team Members

<details>
 
 - DEPO Lead: 
 - PM: 
 - Engineering:
 - Research/Design: 
 
</details>


#### Stakeholders

<details>
 
_What offices/departments are critical to make this initiative successful?_
 
</details>

