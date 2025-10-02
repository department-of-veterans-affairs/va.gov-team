# Initiative Brief: 10-10EZR Form Statuses on VA.gov - WIP
- Last updated by hdjustice 8/21/2025

#### Overview

This initiative focuses on improving the veteran experience by displaying health update form (10-10EZR) statuses on personalized VA.gov pages, providing clear visibility and guidance for veterans updating their health records beyond the current form introduction page.

## Resources

- [EZR Form Statuses Epic #117626](https://github.com/department-of-veterans-affairs/va.gov-team/issues/117626)
- [Figma for on-screen Intro page status messaging](https://www.figma.com/design/FIol4hCGVx9eTrY0AXDmnl/10-10EZR-Production?node-id=2711-51591&t=KDXhIY7IbTMot5EV-1)
- [10-10EZ Form Statuses GitHub Folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/va-application/Form%20Statuses)
- [VFF and MyVA submission statuses research](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues?q=is%3Aissue+label%3A%22DSP%3A+Help%20users%20to%20stay%20informed%20of%20app%20status%22)
- [My VA: Benefit Applications and Forms Use Cases](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/use-cases/benefit-applications-and-forms-use-cases)
- [Figma file on Form Statuses](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=2049-36392&p=f&t=8FmjsddG1O9L4aoJ-0)
- [Form Statuses on MyVA MVP - Project Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/forms-status-on-My-VA/README.md)
- [MyVA Epic #81849](https://github.com/department-of-veterans-affairs/va.gov-team/issues/81849)
---

## Outcome Summary

**Increase veteran awareness and completion rates for health update forms by displaying 10-10EZR form statuses on high-traffic personalized pages like MyVA, ensuring veterans can easily track their health record updates and take necessary actions.**

**Related/Associated product(s)**
- VA Health Update Form (10-10EZR) | [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/health-update-form/10-10EZR%20Product%20Brief%20(standalone%20form).md)
- MyVA Dashboard | [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/README.md)

## Problem

**What is the problem and who is affected?**
Veterans updating their health records through the 10-10EZR form currently have limited visibility into their form status outside of the form's introduction page. Unlike the 10-10EZ healthcare application which displays some status information on MyVA, the 10-10EZR health update form statuses are not shown on commonly accessed personalized pages. This creates a gap in veteran experience where health record updates may be forgotten or delayed due to lack of visibility.

**Why do you think the problem is occurring?**
- Health update form statuses are not visible on the form introduction page
- MyVA displays 10-10EZ application statuses but not 10-10EZR update form statuses
- Veterans may not regularly check form-specific pages after submission
- Lack of proactive notifications about form status changes (saved in-progress, review in-progress, pending more information)
- Inconsistent status display patterns between related healthcare forms

**How does this initiative help further OCTO-DE's mission and goals?**
This initiative supports OCTO-DE's mission by:
- Creating consistent experiences across related healthcare forms
- Reducing veteran burden through proactive status communication
- Improving form completion rates by maintaining veteran awareness
- Building trust through transparent communication about form progress
- Supporting the "Help users to stay informed of app status" design system principle

---

## Measuring Success

### Key Performance Indicators (KPIs)

> 💡 *VA.gov products measure success against Ease of use, Service Completion, Trust/Satisfaction, Health.*

- **Ease of Use**: Reduction in support inquiries about 10-10EZR status | Baseline: [TBD] | Target: 25% reduction
- **Service Completion**: Increase in veterans completing saved 10-10EZR forms | Baseline: [TBD] | Target: 20% improvement
- **Service Completion**: Faster response to "pending more information" requests | Baseline: [TBD] | Target: 30% faster response time
- **Trust/Satisfaction**: Veteran satisfaction scores for health update process | Baseline: [TBD] | Target: 15% improvement
- **Health**: Reduction in outdated health records due to incomplete updates | Baseline: [TBD] | Target: 10% reduction

**Balancing Metrics:**
- MyVA page load performance with additional status displays
- API call volume and performance for status checks
- Veteran cognitive load on personalized dashboard

---

## Discovery

### Assumptions/Risks

**Value Risks** (will people use it):
- Veterans will find 10-10EZR status information valuable on personalized pages
- Status visibility will motivate veterans to complete saved forms
- Clear next-step guidance will reduce abandonment rates
- *Validation*: User research with veterans who have used 10-10EZR forms

**Usability Risks** (can people figure out how to use it):
- Status information integrates well with existing MyVA healthcare section
- Different form statuses are clearly distinguishable and understandable
- Next-step guidance is actionable and clear
- *Validation*: Usability testing of status display designs and messaging

**Technical Feasibility Risks** (can we build it with available tech/data):
- Reliable access to 10-10EZR form status data
- API performance with existing volume (150k pending unverified, 105k pending MT, <20 pending other)
- Integration with existing MyVA form status infrastructure
- Consistency with existing 10-10EZ status display patterns
- *Validation*: Technical spike using existing MyVA form status framework

**Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
- Alignment with existing MyVA form status roadmap and patterns
- Healthcare team coordination for accurate status definitions
- Compliance with health information privacy requirements
- Resource allocation alongside 10-10EZ status work
- *Validation*: Stakeholder alignment sessions and existing research review

### Supporting research

This work is supported by existing research:
- [VFF and MyVA submission statuses research](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues?q=is%3Aissue+label%3A%22DSP%3A+Help%20users%20to%20stay%20informed%20of%20app%20status%22)
- Design Lead (Lois Lewis) request based on identified user needs
- Existing MyVA form status patterns and research from Benefits forms work

**Additional potential research:**
- Veteran mental models for health record updates vs. initial applications
- Optimal notification timing and methods for different 10-10EZR statuses
- Impact assessment of status visibility on form completion rates

### What're you building?

**In scope:**
- Display of 10-10EZR form statuses on appropriate VA.gov personalized pages:
  - 'Form saved-in-progress' with email notifications and MyVA status
  - 'Review In Progress' status on MyVA
  - 'Pending more information' status on MyVA
- Clear guidance on next steps for each status
- Consistency with existing form status display patterns
- Additional notifications through VA Notify, or working with HEC to develop a staff-side process

**Explicitly not included:**
- Changes to the 10-10EZR form itself
- New backend status determination logic
- Historical form submission tracking
- SMS notification capabilities
- Changes to 10-10EZ status displays (separate initiative)

**How this addresses Assumptions & Risks:**
- Leverages existing MyVA form status infrastructure to reduce technical risk
- Builds on established research and design patterns
- Uses proven email notification patterns for saved forms
- Aligns with existing healthcare section design

---

## Launch Planning

### Collaboration Cycle

- Kickoff ticket: [TBD]
- PO Sync: [TBD]
- Design Intent: [TBD]
- Architecture review: [TBD] - To be part of Midpoint review
- Research Review: [TBD] (may leverage existing research)
- Midpoint Review: [TBD]
- Analytics Request: [TBD]
- Contact Center review: [TBD]
- Staging Review: [TBD]
- Privacy & Security Review: [TBD] - To be part of Staging review

### Timeline

**Major milestones:**
- Design alignment with existing MyVA patterns: [TBD]
- Technical implementation using existing infrastructure: [TBD]

* [Link to Release Plan for this Initiative] - TBD

#### Initiative Launch Dates

- **Target Launch Date**: TBD
- **Actual Launch Date**: TBD

---

## Screenshots

### Before
- MyVA dashboard showing application saved with "Draft" label (not yet submitted)
     - <img width="470" height="268" alt="image" src="https://github.com/user-attachments/assets/db619667-c400-4465-baa4-7543d93aeb16" />

- MyVA dashboard showing Health Care section with various links to manage health care details. (Veteran is enrolled, this is what displays)
     - <img width="785" height="314" alt="image" src="https://github.com/user-attachments/assets/ea643314-29f6-45a7-a10e-173c0ab697a1" />

### After
[Mockups of enhanced MyVA with 10-10EZR status displays]
[Email notification designs for saved in-progress forms]

---

#### Communications

*Where will you discuss this initiative?*

<details>

- Team Name: Health Applications Team
- GitHub Label(s): 1010-team, 10-10ezr, 1010-form-status
- Slack channel: 1010-health-apps
- Product POCs: Heather Justice

</details>

#### Stakeholders

*What offices/departments are critical to make this initiative successful?*

<details>

- Office/Department: OCTO-DE Product Owner
     - Contact(s): Patrick Bateman, Premal Shah

- Office/Department: VA Healthcare Enrollment & Eligibility
     - Contact(s): Angela Fulton, Simone Gully, Amanda Scully, April Mims


</details>

---

