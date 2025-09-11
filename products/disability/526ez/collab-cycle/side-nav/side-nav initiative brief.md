# 526ez - Side Navigation Initiative Brief 
#### Overview

<details>
 
 *There is roughly a 1:many relationship between products and initiatives, or our attempts to improve a product/achieve Veteran outcomes. The same goes for product outlines and initiative briefs. This template can be used as product documentation for the Collaboration Cycle, especially when iterating an existing product. In addition, the Brief is an important communication tool within a team and between the team and Crew Chief/PO/other teams.* 
 
</details>

<details>
 <Summary>Examples:</Summary>
 
 - *Product: On-site Search* 
   - *Initiatives: Type-ahead, [Search Landing Page](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/initiatives/search-landing/initiative-brief.md), [Surfacing Other Search Tools](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/initiatives/surfacing%20other%20search%20tools/initiative-%20brief.md)*
 - *Product: VA.gov Profile*
   - *Initiatives: Combine Account & Profile, Direct Deposit for Disability, Candidate Address Validation, Direct Deposit for Education, Notification Preferences*
 - *Product: Disability Claims*
   - *Initiatives: Original Claims, Benefits Delivery at Discharge (BDD)*
 
 </details>
 
 > 💡 Helpful guidance/tips
 
---

## Outcome Summary
> *Brief statement describing opportunity you're pursuing e.g. "Increase Use of Search Tools on VA.gov." Include measurable outcome (i.e. metric) you're trying to affect.*

We are implementing the [side navigation component](https://design.va.gov/components/sidenav) into the 526ez form. The side navigation will contain the 6 main steps of the form: (1) Veteran details (2) Conditions (3) Mental health (4) Suppporting evidence (5) Additional information (6) Review and submit. By implementing the `side navigation` we intend on giving Veterans the ability to skip sections and navigate back to sections without having to hit the `back` or `continue` button multiple times. Providing a navigation feature will also provide Veterans with an overview of all form section and help them have a stronger sense of progress across sections. By implementing the `side navigation` we will reduce the number of clicks it takes for a Veteran to complete the form, consequently making the act of filling out the form quicker and more efficient.

#### Initial lo-fi image of proposed initiative:

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/collab-cycle/side-nav/screenshots/SideNavMVP.png" alt="Screenshot" style="max-width: 600px; width: 40%;">

**Related/Associated product(s)**
- Product | Link to product outline 

## Problem
> *Describe the challenge / pain point you seek to address.:* 
### What is the problem and who is affected? And, what evidence do we have of the problem?
**The following issues have been surfaced during Shadow Research conducted on 11/2023 and Toxic Exposure Research conducted on 11/2024** 
* Veterans cannot currently move to any section of the form at any time, and have to click the back button and continue button excessively to get to different sections of the form.
* Veterans cannot review or edit previous answers easily without losing my place or progress, and cannot easily correct mistakes.
* Veterans cannot navigate between form pages to preview the form’s structure before engaging with the content.
* Veterans may not trust the form’s built-in such back button and may use the browser back button to get to another section of the form.
  
### Why do you think the problem is occurring? Other reasons why this might be occurring?
* These problems occur because there is no way for a Veteran to navigate the form and skip pages or sections other than using the `back` or `continue` buttons.

### How does this initiative help further OCTO-DE's mission and goals?
This initiative supports the following OCTO strategy and Objectives because it would allow Veterans to build trust in our form by supporting better navigation and improves the efficiency and time it would take for Veterans to fill out the form.
- `Make the dang form work`: improve known issues like unintuitive flow and navigation, clear moments of friction like lack of prefill or confusing UX errors, keep up with underlying service migrations, etc.
- `VA’s digital experiences are the easiest and most efficient way` to access VA health care and benefits. 
    1. 1.1 Improve satisfaction with our web and mobile products by 5 points.
- `OCTO’s platforms are the fastest, most efficient`, and most secure way to deliver products at VA.
  
## Desired User Outcomes
**Why would a user want to use this?**
- To move to any section of the form at any time, so that I don’t waste clicks or have to backtrack unnecessarily.
- To review or edit previous answers easily without losing my place or progress, so that I can correct mistakes without frustration.
- To independently and efficiently navigate between form pages to understand the form’s structure before engaging with the content, so that I can approach it with confidence.
- To trust the form’s built-in navigation controls (such as the back button) rather than relying on the browser’s back button, so that I know my progress and data will be preserved.

**With this problem solved, what should users be able to do/achieve that they couldn't before?**
- Easily navigate to different sections of the form. 
- Review or edit previous answers without losing their place or progress. 
- Preview what is on the form by having access to different sections of the form via navigation.

## Undesired User Outcomes
- Increased confusion on how the form works.
- Loss of data because the form might not save what the user entered when they navigate away from the page. 

## Desired Business Outcomes
**Why would your business want this to exist?**
- To support `making the dang form work` and `supporting the digital experience to be the easiest and most efficient way` to access VA health care and benefits and `OCTO's platforms are the fastest, most efficient`.

**With this problem solved, what should your business be able to do/achieve that they couldn't before?**
- Decrease the amount of time that Veterans take to fill out the form. 
- Increase trust in the VA.

## Undesired Business Outcomes
- Decreased trust in the VA because of poorly implemented navigation and bugs. 
- Increasing the amount of time it takes Veterans to fill out the form because of long loading times or confusion. 

---
## Measuring Success

### Key Performance Indicators (KPIs)
> 💡 *VA.gov products measure success against Ease of use, Service Completion, Trust/Satisfaction, Health.*<sup>1</sup>\
> 💡 *Identify balancing metrics to ensure you're not bringing about undesired outcomes.*

- Product KPI | Baseline | Target | Link to data source (e.g. GA, Domo)
- We will work with our OCTO PO to determine KPIs and CSAT scores that would allow us to track metrics. This is captured in the related [Super Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/116289)

---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

**Value Risks** (will people use it): 
- Users may continue to not trust VA's buttons and navigation and continue to use their browser back button.  
- The side nav component on mobile becomes an accordion that lives that the top of the page. Our form's "Review and Submit" summarizes the information that the user entered in multiple accordions. Users may get confused and not use the navigation component on this page because the number of stacked accordions might be confusing. 

**Usability Risks** (can people figure out how to use it):
- The side nav component on mobile becomes an accordion that lives that the top of the page. This might be challenging for users to figure out. 
- Our form's "Review and Submit" summarizes the information that the user entered in multiple accordions. Users may get confused and not use the navigation component on this page because the number of stacked accordions might be confusing. 

**[Technical] Feasibility Risks** (can we build it with available tech/data):
- Risk of invalid or incomplete data if a user navigates mid-entry and the system saves improperly.
- The current form schema is inconsistent—some chunks are grouped under a single object, others spread out. This may affect how Side Nav maps sections and impacts stability. There is a risk that Side Nav can’t align cleanly with existing schema structure.
- Navigation must respect existing conditional logic (e.g., hiding/showing sections like 0781). There is a risk if Side Nav doesn’t dynamically adjust as state changes.
- Risk of poor user experience if navigation isn’t predictable (e.g., landing in the wrong sub-page).
- Potential accessibility risks if Side Nav doesn’t integrate well with existing navigation and back button behaviors.
  
**Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
- We are trying to minimize organizational viability risks and constraints by using the side nav platform component and starting with an MVP implementation that encompasses providing navigation to the landing pages of the 6 main sections vs. also providing navigation to sub sections.

### Supporting research

 **This work will include user research. We hope to learn the following:**
 - Navigation Clarity: Do users understand the difference between the Side Nav and in-page accordions (especially on mobile), and can they reliably use it to move between sections without confusion?
 - Progress & Orientation: Does the Side Nav help users feel oriented in the form and understand what they’ve completed, what’s in progress, and what’s left to do?
 - Sequential Flow & Guardrails: How do users respond when they try to skip ahead or jump to restricted sections, and does the system’s handling of this feel clear and supportive (vs. frustrating)?
 - Data Persistence & Trust: Do users trust that their data is saved when navigating with the Side Nav (desktop or mobile), and do they feel confident resuming where they left off
 - Usability Across Devices: How usable is the Side Nav experience across desktop and mobile, particularly regarding layout balance (desktop) and accordion overload/confusion (mobile)?

### What're you building?
**What's in scope for you to build with this initiative? Describe key features/flows.**
- We are going to include the 6 major steps of our form in the side nav: (1) Veteran details (2) Conditions (3) Mental health (4) Supporting evidence (5) Additional Information (6) Submit and review.

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/collab-cycle/side-nav/screenshots/SideNavMVP.png" alt="Screenshot" style="max-width: 600px; width: 40%;">

 
 **What have you explicitly decided to **not** include and why?**
 - We ARE NOT going to include any sub sections or nested sections within the side navigation because we want to first understand how the MVP functions and any technical constraints we may come across during it's implementation. We need to do more work to understand the number of header levels that are included in the navigation and how to map pages of our form to those header levels. There is more IA work to be done before we implement the nested side nav.  

> *Are you building for the VA Health and Benefits mobile application? Explain why or why not.*

We are not building for the VA Health and Benefits mobile application. This is going to be for the MyVA site. The mobile application is out of scope. 

> *How does this solution address your Assumptions & Risks?*

We will conduct user testing and we will start with an MVP version of implementation. This approach allows us to identify user pain points early, and limit the scope of the solution to what is most viable so that we can learn from implementation while using fewer resources. 

#### Go-to-market 

> *What marketing, outreach, or communications are necessary for this product to be successful?*

We do not need marketing, outreach, or communications for this initiative. 

> *Which groups/orgs are necessary to make this happen?*

- Platform Design System

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
There is no previous navigation component, so there is no "before" image.

### After
<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/collab-cycle/side-nav/screenshots/SideNavMVP.png" alt="Screenshot" style="max-width: 600px; width: 40%;">



---

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: Disability Benefits Core Form Team 
- GitHub Label(s): disability-benefits
- Slack channel: https://dsva.slack.com/archives/C04KW0B46N5
- Product POCs:Andrew Belov

</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>
  
- Office/Department: OCTO
- Contact(s): Emily Theis, Elizabeth Lantz
 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
