# Initiative Brief – Adding edit functionality to Profile/Health care contacts

## Outcome Summary

Veterans using VA.gov's Profile product to check their personal health care contacts should be able to immediately make changes and see them reflected on VA.gov. 

**Related/Associated product(s)**
- Profile / Health care contacts
  - [Product link](https://www.va.gov/profile/contacts/)
  - [Link to product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-health-care-contacts/README.md) 

## Problem

The demand from Veterans to edit their next-of-kin and emergency contacts is very clear: we get a lot of feedback (via VSignals/Medallia) that Veterans want an edit capability. Veterans have shared their frustration at having to make time to call the VA, where they frequently encounter long wait times.

Veterans are also sometimes confused by the latency between requesting a contact change and seeing that change appear on VA.gov. (We believe this occurs when they request the change at a facility, where VistA systems update VES (Veteran Enrollment System) on a scheduled basis.)

Adding edit functionality to the product will serve OCTO's goals of saving Veterans time and making services more available and accessible.

---
## Measuring Success

### Key Performance Indicators (KPIs)
> 💡 *VA.gov products measure success against Ease of use, Service Completion, Trust/Satisfaction, Health.*<sup>1</sup>\
> 💡 *Identify balancing metrics to ensure you're not bringing about undesired outcomes.*

 | Product KPI | Baseline | Target | Link to data source (e.g. GA, Domo) |

---

## Discovery
### Assumptions/Risks

- **Value Risks** (will people use it): 
  - The demand from Veterans is very clear; we get a lot of feedback that Veterans want an edit capability where today the product is read-only
- **Usability Risks** (can people figure out how to use it):
  - VADS should cover us; we shouldn't even need to do research
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - No known issues; the API exists and VA Profile has said we can use it  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - Edit capability will reduce phone calls across facilities and the Health Enrollment Center

### What're you building
We are adding the capability to edit health care contacts within the contacts product using the VA design system.

#### Go-to-market 

N/A

--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- Kickoff ticket

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*

* Link to Release Plan for this Initiative ( [template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md))

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

- Team Name: Cartographers / MHV-on-VA.gov
- GitHub Label(s): Cartographers
- Slack channel: #mhv-on-vagov-cartography-team
- Product POCs: Wes Rowe (PM), Patrick Bateman (PO)

</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>
  
- Office/Department: VA Profile team
- Contact(s): Michael Richard (architect)
 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
