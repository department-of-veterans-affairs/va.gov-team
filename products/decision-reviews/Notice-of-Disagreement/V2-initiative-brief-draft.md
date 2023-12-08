# Request a Board Appeal VA Form 10182 (Notice of Disagreement): Post-Launch Initiative Brief
#### Overview
 
 - *Product: Request a Board Appeal VA Form 10182 (Notice of Disagreement)*
 - The Request a Board Appeal form, commonly reffered to as the Notice of Disagreement (NOD), was launched in 2022. The initial release completed the goal of form digitization. Looking ahead, we want to deliver greater value to Veterans by understanding how users engage with the form experience today. 
 
---

## Outcome Summary
> *Brief statement describing opportunity you're pursuing e.g. "Increase Use of Search Tools on VA.gov." Include measurable outcome (i.e. metric) you're trying to affect.*

Today, Veterans use the online experience to accomplish a variety of goals. At a high-level, the online experience does not adequately respond to the mental model that Veterans have about how an NOD can or cannot meet their needs. Our proposed product outcome is:

Veterans have the information to their use case to quickly decide if filing an NOD is their best choice.
* Increase the % of digital form submissions.
* Reduce the % of early abandonments.
* Reduce the % of duplicate submissions.
* Reduce the % of hearing selections that contribute to longer decision times.

Veterans are more confident in the quality of their submission. 
* Increase in the confidence rating during usability testing
* Increase in Medallia score

The product outcomes for the NOD form contribute to broader outcomes for decision review pathways:

* Veterans can quickly meet their decision review goals on VA.gov.
* Reduce Veteran behaviors that contribute to longer decision times.

**Related/Associated product(s)**
- Request a Board Appeal VA Form 10182 (Notice of Disagreement) | [Link to product outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/decision-reviews/Notice-of-Disagreement)

## Problem
> *Describe the challenge / pain point you seek to address.:* 

#### What is the problem and who is affected? And, what evidence do we have of the problem?
Our research suggests that today's form experience does not adequately respond to the mental model that Veterans have about how an NOD can or cannot meet their needs. Veterans face challenges in these areas:
* Difficulty keeping track of filing deadlines
* Confusion between an NOD and a HLR
* Conflicting or misleading information from personal research

#### Why do you think the problem is occurring? Other reasons why this might be occurring?
Think about choosing to file an NOD (or any decision review) as an open system, with a range of variables that contribute to the problem. Our research revealed that the most impactful variables are:
* Poor navigation - The current VA.gov experience does not provide clear navigation for users interested in submitting an NOD, resulting in confusion about how to find the forms and no entry point into critical content about the NOD option. Users that are visiting for research purposes have no way to quickly navigate to the content they need. 
* Lack of transparency - Users cannot see the digital form in advance, and don't know what they will be asked to provide or how long the task will take.
* Conflicting research - Before deciding to file an appeal, Veterans visit a number of resources to gather information about the appeal process and plan their strategy for acheiving a desired outcome. Some of these resources are not validated by the VBA, and may contain conflicting guidance.
* Lost and delayed correspondence letters - Many Veterans shared stories about how their correspondence letters arrived late or did not arrive in time to take action, resulting in delays and restarts. This also contributes to a lack of trust in VA.
* Poor quality initial claim experience - Misconceptions from the initial claim experience set the foundation for the behavior that Veterans model when choosing and developing their appeal. This carries over actions that don't benefit the Veteran. 

#### How does this initiative help further OCTO-DE's mission and goals?
This initiative supports [OCTO-DE's 2023 priority bet to "make the claimant experience drastically better"](https://dsva.slack.com/archives/C055573C508/p1686775020433759) by:
* Ensuring parity with recent form updates and new requirements stipulated by changes in law
* Ensuring application and decision review workflows set clear expectations about the process and length of time it may take
* Helping Veterans understand the right information and supporting documents to provide in support of claims
* Improve the structure, organization, and language of application workflows to make them more intuitive and easier to complete, ideally in a single sitting
* Leaning in to logic and automation to determine eligibility instantly where possible

## Desired User Outcomes
- Veterans are able to complete and submit the Board Appeal form for all contentions (not just disability)
- Veterans have considered all three AMA decision review pathways before deciding to apply for Board Appeals
- Veterans understand what is required of the application process before starting the request

## Undesired User Outcomes
- Veterans entering the form and leaving, because they realize it’s not the right form for them
- Veterans selecting issues that are not eligible (within deadline) without a reason for extension
- Veterans submitting a duplicate application by mail or digitally, because they are unsure if the form’s been received
- Veterans having to restart the initial claims process because they missed a deadline
- Veterans stopping the process because they don’t have a way to explain their reason for appealing
- Veterans switching to using the paper form because there is a mismatch between the paper and digital form

## Desired Business Outcomes
- Each Veteran’s appeal is timely docketed and tracked throughout the appeals process
- Each Veteran receives a timely hearing by a Veterans Law Judge upon request
- Each Veteran receives a timely decision on their appeal
  
## Undesired Business Outcomes
- Increase in error prone submissions
- Increase in duplicate submissions
  
---
## Measuring Success

### Key Performance Indicators (KPIs)
> 💡 *VA.gov products measure success against Ease of use, Service Completion, Trust/Satisfaction, Health.*<sup>1</sup>\
> 💡 *Identify balancing metrics to ensure you're not bringing about undesired outcomes.*

- % of long timeline hearing selections | Baseline | Target | [BVA Dashboard](https://www.bva.va.gov/bva/decision-wait-times.asp)
- % of form submissions | 39% | Target | [Domo](https://va-gov.domo.com/page/447193050)
- % of duplicate submissions | Baseline | Target | [Domo](https://va-gov.domo.com/page/447193050)
- % of early abandonments (view Veteran Details) | 42% | Target | [Domo](https://va-gov.domo.com/page/447193050)
- % of late abandonments (view contestable issues) | 44% | Target | [Domo](https://va-gov.domo.com/page/447193050)

---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - Changing the navigation structure and nudges for the NOD digital experience will result in behaviors like increased form submission or finding relevent content, which Veterans will find valulable.
  - Incorporating save-in-progress and expectation-setting functions will result in behavior like increased form submission and decreased abandonment, which Veterans will find valuable.
- **Usability Risks** (can people figure out how to use it):
  - Simplifying the form content and providing better supporting guidance will reduce confusion and lack of transparency that leads to form abandonment.
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - We can easily surface relevent data from important correspondence letters (as needed).
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
    - BVA intake team will see a reduction in duplicate submissions and lengthy hearing selections from VA.gov. 

### Solution approach
> *What opportunities are you considering with this initiative? Describe key features/flows.
Recommendations:
* Create an indicator for the in-progress forms on myVA. Also, address the opportunity to notify Veterans that they have an in-progress form at a certain drop-off point.
* Reconsider the objective of the deadline screen, and clarify the definition of contested claims.
* Add in a deadline extension option to the digital form (already available on the paper form), and remove the limitation of showing contentions with a decision date within the year.
* Provide a space on the form for Veterans to explain the reason for their disagreement (available as an optional attachment on the paper form).
* Work with IA to provide more accessible points to the Decision Review pathways, with the consideration that there are Veterans who want to learn more about the forms vs Veterans who know exactly which pathway they want to pursue.
* Allow Veterans to self-identify their goal to funnel learners and doers into the right flows.
* Set expectations with Veterans about what to expect (steps in the form, completion time). Share stats about decision speed, and auto-establishment ahead of form entry.
* Surface crucial information in correspondence letters to aid the submission process.
* Highlight misunderstandings and VA processing guidelines that prevent undesirable outcomes that Veterans fear.
* Add conditional logic in the HTML to prompt users on outdated browsers.

> *What have you explicitly decided to **not** include and why?*
* TBD 

#### Go-to-market 
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*

--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- Kickoff ticket

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*

* [Link to Release Plan for this Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

#### Initiative Launch Dates
- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - tbd

---
   
## Screenshots

### Before

### After

---

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: 
- GitHub Label(s): 
- Slack channel: 
- Product POCs:

</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>
  
- Office/Department:
- Contact(s): 
 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
