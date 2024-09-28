# Initiative Brief – Translated Forms for Apps 

## Overview

We have established an approach for supporting static content pages and as part of our recommendations for a longer-term, more scalable solution we need to create and implement a solution for on-line forms. We've recently completed our initial technical discovery sprint to determine how to support this within VA.gov's existing architecture and gauge the type and level of effort required.
As our next step, we plan to translate an existing form application and launch to the production environment. This will enable us to test and confirm that our approach is sound in the live environment and begin to establish metrics and customer satisfaction for translated apps.


## Problem

What is the problem and who is affected? 

- Veterans and their family members with limited English proficiency (LEP) don't have access to essential VA online content in their native language. This includes applying for benefits they are eligible to receive.
- On-line applications provide an electronic footprint that reassures users that their application was correctly submitted, and the VA has received it.
- Can’t save progress and pick back up where you left off (true??)


Which Veteran/organizational segments are most affected by the problem?

- Any VA.gov users (Veterans, caregivers, family members) who are LEP or non-English speakers and want to fill out an application for a benefit on-line without needing to go to a VSO for assistance or engage an interpreter.

What evidence do we have of the problem?

- VA has existing guidance for complying with Executive Order 13166, Improving Access to Services for Persons with Limited English Proficiency, 65 Fed. 50,121 (Aug. 16, 2000).

- (**TO BE ADDED: Research study results for LEP spanish Veterns/caregivers/family members)**

How does this initiative help further OCTO-DE's mission and goals?

- VA North Star:

  - Veteran satisfaction with VA.gov site
  - Veterans and their families can apply for benefits online
  - Drive to self service tools and faster times to outcomes
  

## Desired User Outcomes

Why would a user want to use this?

- On-line applications are more efficient and accurate. Providing translated applications will increase awareness of available benefits and enable Veterans/family members/caregivers to receive their benefits more quickly. 

- During the Caregiver's Research and Discovery phase the team noted the following:

  - "An online form allows applicants to legibly complete at their own pace, save progress, and take breaks as needed, which some expressed difficulties with using the PDF online".

  - "Many Veterans and Caregivers expressed they have poor handwriting, so an online application eases the workload for VA personnel processing applications".

Further related to this, a recent research effort on "Find a Form/PDF Downloads"* showed that particpants have difficulty using PDFs for a number of reasons, summarized below:

**Summary of Key Findings**

- Most participants ignored the instructions provided
- Most participants were unable to fill out and digitally sign any of the forms without
help
  -  Impossible on mobile devices because the forms require a version of Adobe Acrobat only available on desktop
  -  Digital signature field was invisible to screen reader users
  -  Form fields were difficult to fill out using a screen reader

- Research Results*: [Research Study PDFs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-post-mvp-releases/research/readout-short-for-sprint-demo.pdf)

With this problem solved, what should users be able to do/achieve that they couldn't before?

- We should see an increase in on-line form applications from the spanish speaking population, a reduction in errors, quicker time for approvals (note: subject to change as it will depend on form chosen).

## Undesired User Outcomes

-	Veterans, family members and caregivers can't easily find or use translated content.
-	Usage of translated form doesn't increase with time and awareness efforts.

## Desired Business Outcomes

-	Meet federal/agency requirements for providing translated benefit information.
-	VA demonstrates to Congress that we are continuing to make progress on providing critical information in spanish while working on our longer-term recommendations.
-	VA provides relevant, easy-to-find, high-quality content for LEP Veterans and their families in the languages they most need (spanish first).


## Undesired Business Outcomes

-	VA can't demonstrate progress on translation efforts for key content types in a timely way.

---
## Measuring Success (TBD)

-	Once we determine the form application that will be translated, we will undertake a discovery effort to determine the appropriate metrics to use for our KPI's. If possible, we would like to include some, or all, of the following:

- Reduced error rate compared to existing PDF
- Faster benefit approval timeframe for on-line submissions vs PDF submissions
- Higher customer satisfaction score 

### Key Performance Indicators (KPIs)
> 💡 *VA.gov products measure success against Ease of use, Service Completion, 
Trust/Satisfaction, Health.*<sup>1</sup>\

- Month over month increase in usage
- Improved satisfaction scores as measured by Medallia

---

## Discovery

There are several considerations in determining which on-line application form to translate and offer in spanish:

-	Whether the current on-line application form has a corresponding english tool (must-have)
-	The form is not overly complex/long or has unique complexities that would result in an extended delivery timeline (must-have)
- Form requires minimal updates/changes over the next 6-8 months (must-have)
-	Evidence of a high need exists (must-have)
-	Unauthenticated (must-have)
-	Has existing spanish PDF (nice-to-have)
- English app doesn’t have established baseline metrics that we can use to set KPIs
-	**TBD: other technical considerations and/or value?**

### Assumptions/Risks

- **Value Risks** (will people use it): spanish LEP Veterans/family members/caregivers value an on-line translated application process for benefits on par with the english version
  
- **Usability Risks**: findings from our user research and analysis are representative of Veterans across the Veteran journey. We'll
 expect to see a higher completion rate and satisfaction score with this offering. Low-risk since we will be using an all-ready published form.

- **[Technical] Feasibility Risks**: On-line application form is limited to 1 form for launch that maps to the considerations noted above.

- **Organizational Viability Risks/Constraints**: This is part of on-going effort to support Congressional request and EO.
  - Risk that IAA agreement won’t be in place by the time we are ready to kick-off project

- **Viability**: the form selected is being actively maintained by the VA to ensure content is relevant and accurate and there is a process defined for updating the translated version along with any english updates.

Before undertaking this effort, we will have completed additional technical discoverability including specific LOE for the selected tool, system dependencies/constraints, translation service availability to enable us to start with a very high confidence level that we can build and ship within set timeframe.

We will also gain a better understanding of how to scale translation for Forms from this effort. 

### Prioritization
> *Describe the team's competing solution hypotheses/ideas. Prioritize them accounting for reach, impact/value, effort, and confidence.*

The team has considered doing other work first, which includes automating translation files to improve workflow and building entity reference fields to associate translated pages. However, we've determined that this is the highest priority because of the need to quickly garner a more detailed understanding of  content other than static content. 

### Solution Scope
> *What's in scope for you to build with this initiative? Describe key features/flows. What have you explicitly decided to **not** include and why?*

--- 

## Launch Planning

### Collaboration Cycle

- Kickoff ticket

### Go-to-market 
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*

* [Link to Release Plan for this Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

#### Initiative Launch Dates
- Target Launch Date
  - tbd
- Actual Launch Date
  - tbd

---
   
## Screenshots

### Before

### After

---
### Translation Recommendations Product Outline

- [Translation Recommendation Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/content-localization/product-outline-working-drafts/markdown-version.md)

#### Communications
Where will you discuss this initiative?

<details>
  

- Team Name: Content & Localization
- GitHub Label(s): vsa-content-localization
- Slack channel: https://dsva.slack.com/archives/C01GCADCMQT 

</details>

#### Stakeholders
What offices/departments are critical to make this initiative successful?

<details>
  
- Office/Department: DEPO
- Contact(s): Danielle Thierry
Team Members:
  - DEPO Product Lead: Danielle Thierry
  - DEPO Engineering Lead: Michelle Steigerwalt
  - Team Product Manager: Sharon Kasimow
  - UX/Research: n/a
  - Front-End Engineering: Adam Whitlock
  - Consultant: Eunice Garcia

 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg

