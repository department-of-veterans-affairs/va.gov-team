# Initiative Brief - PDF Certificate Alert
#### Overview

The VA and Adobe have an agreement that enables Veterans to use premium features within the free Acrobat Reader application in order to fill out filable PDFs. Adobe is changing the way that licensing is checked on the Internet. On January 7, PDFs that were saved by VA Forms Managers _before March 2, 2022,_ will no longer be fillable; PDFs saved after March 2 will check licenses using the new certificate/method and thus work as intended.

Forms Managers anticipate having re-saved all PDFs by mid-Dec 2022, in which case all forms provided to Veterans through Find-a-form (FaF) will work fine. But communication is needed around the FaF product since Veterans often obtain PDFs from third parties (e.g., VSOs) or other locations on the Internet that may have been saved before March 2, 2022, and thus could produce the error.

Our proposed solution involves two [Informatinal Alerts](https://design.va.gov/components/alert):
1) A more general message on the Find-a-form Search page
2) A message on Form Detail pages that may be more specific to the form on that page

The messaging will also change as we pass certain milestones:
- Before mid-December 2022 – the re-saving/updating process is still ongoing
- Mid-Dec thru Jan 7 – A message that all forms are updated
- Post-Jan 7 – Adjust message to acknowledge that some forms obtained outside of VAgov may not work
 
---

## Outcome Summary

If we are successful, these informational alerts will reinforce messaging elsewhere such that Veterans trust the PDFs available through Find-a-form and do not experience issues with filling out PDFs downloaded there.

**Related/Associated product(s)**
- Find-a-form | [Link to product outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/find-a-va-form) 

## Problem
> *Describe the challenge / pain point you seek to address.:* 
* Veterans may lose trust in PDF forms if they don't get guidance
* This informational campaign should build trust and enable efficiency

<!--
## Desired User Outcomes
- *Why would a user want to use this?*
- *With this problem solved, what should users be able to do/achieve that they couldn't before?*

## Undesired User Outcomes
## Desired Business Outcomes

- *Why would your business want this to exist?*
- *With this problem solved, what should your business be able to do/achieve that they couldn't before?*

## Undesired Business Outcomes
-->

---
## Measuring Success

### Key Performance Indicators (KPIs)
> 💡 *VA.gov products measure success against Ease of use, Service Completion, Trust/Satisfaction, Health.*<sup>1</sup>\
> 💡 *Identify balancing metrics to ensure you're not bringing about undesired outcomes.*

- Product KPI | Baseline | Target | Link to data source (e.g. GA, Domo)

---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - no risks, it's used passively.
- **Usability Risks** (can people figure out how to use it):
  - no "use" required.
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - For conditionally displayed messaging on Form Detail pages, we are consulting with Forms Managers to confirm that the Issue_date field that is migrated to Drupal from the Forms DB accurately reflects when the PDF obtained the relevant certificate/metadata.
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - None; external stakeholders have been aligned with this approach.

### What're you building
We're using Informational Alerts from the design system component `<va-alert>`.

#### Go-to-market 
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*

--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- [Kickoff ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/49217)

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*

* [Link to Release Plan for this Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

#### Initiative Launch Dates
- *Target Launch Date*
  - mid-November, 2022
- *Actual Launch Date* 
  - tbd

---
   
## Mock-ups

### FaF Search Page
<img width="632" alt="image" src="https://user-images.githubusercontent.com/4054752/199585851-88dc2b79-bf4f-4fba-8051-2f92682285a1.png">

### FaF Detail Page
<img width="625" alt="image" src="https://user-images.githubusercontent.com/4054752/199587060-70fdd087-8214-48b8-9e0c-3eba1df1d647.png">



---

#### Communications
*Where will you discuss this initiative?*

- [Epic for this effort](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/10956)


<details>

- Team Name: Sitewide Public Websites
- GitHub Label(s): 
- Slack channel: #sitewide-public-websites
- Product POCs: Fran Cross (@FranECross)

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
