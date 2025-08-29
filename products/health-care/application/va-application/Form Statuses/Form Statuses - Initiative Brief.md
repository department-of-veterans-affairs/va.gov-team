# Initiative Brief: 10-10EZ Form Statuses on VA.gov - WIP
- Last updated by hdjustice 8/21/2025

#### Overview

This initiative focuses on improving the veteran experience by displaying healthcare application statuses on personalized VA.gov pages beyond the current form introduction page, providing clear guidance on next steps based on application status.

## Resources

- [EZ Form Statuses Epic #95313](https://github.com/department-of-veterans-affairs/va.gov-team/issues/95313)
- [Figma for on-screen Intro page status messaging](https://www.figma.com/design/FIol4hCGVx9eTrY0AXDmnl/10-10EZR-Production?node-id=2711-51591&t=KDXhIY7IbTMot5EV-1)
- [10-10EZR Form Statuses GitHub Folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/health-update-form/Form%20Statuses)
- [VFF and MyVA submission statuses research](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues?q=is%3Aissue+label%3A%22DSP%3A+Help%20users%20to%20stay%20informed%20of%20app%20status%22)
- [My VA: Benefit Applications and Forms Use Cases](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/use-cases/benefit-applications-and-forms-use-cases)
- [Figma file on Form Statuses](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=2049-36392&p=f&t=8FmjsddG1O9L4aoJ-0)
- [Form Statuses on MyVA MVP - Project Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/forms-status-on-My-VA/README.md)
- [MyVA Epic #81849](https://github.com/department-of-veterans-affairs/va.gov-team/issues/81849)
---

## Outcome Summary

**Increase veteran confidence and clarity in healthcare application process by displaying application statuses on high-traffic personalized pages like MyVA, reducing confusion and support requests.**

**Related/Associated product(s)**
- VA Healthcare Application (10-10EZ) | [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Health%20Care%20Application%20-%20Product%20Outline.md)

## Problem

**What is the problem and who is affected?**
Veterans applying for VA healthcare currently have limited visibility into their application status outside of the form's introduction page. This creates confusion and anxiety as veterans are unsure of their application progress and what actions they need to take next. The problem affects all veterans who have submitted healthcare applications and are waiting for processing or need to take additional action.

**Why do you think the problem is occurring?**
- Application statuses are only displayed on the form introduction page, which veterans may not frequently visit
- MyVA dashboard only shows limited status information (started but not submitted applications, and enrolled status)
- Critical statuses like "application being reviewed" and "declined" are not visible on commonly accessed pages
- Lack of clear guidance on next steps for each status creates uncertainty

**How does this initiative help further OCTO-DE's mission and goals?**
This initiative directly supports OCTO-DE's mission to deliver seamless, proactive, and personalized experiences by:
- Reducing veteran burden through proactive status communication
- Improving service completion rates by providing clear next steps
- Building trust through transparent communication about application progress

---

## Measuring Success

### Key Performance Indicators (KPIs)

> 💡 *VA.gov products measure success against Ease of use, Service Completion, Trust/Satisfaction, Health.*

- **Ease of Use**: Reduction in support calls related to healthcare application status inquiries | Baseline: [TBD] | Target: 20% reduction
- **Service Completion**: Increase in veterans completing required follow-up actions | Baseline: [TBD] | Target: 15% increase
- **Trust/Satisfaction**: Veteran satisfaction scores for healthcare application process | Baseline: [TBD] | Target: 10% improvement
- **Health**: Reduction in time from application submission to enrollment completion | Baseline: [TBD] | Target: 5% reduction

**Balancing Metrics:**
- Page load performance on MyVA (ensure new status displays don't impact performance)
- Error rates for status data retrieval

---

## Discovery

### Assumptions/Risks

**Value Risks** (will people use it):
- Veterans will find status information on personalized pages more useful than current placement
- Clear next-step guidance will reduce veteran anxiety and confusion
- *Validation*: User research and usability testing with veterans

**Usability Risks** (can people figure out how to use it):
- Status information and next steps are presented clearly and understandably
- Integration with existing MyVA design doesn't create confusion
- *Validation*: Usability testing and A/B testing of different presentation approaches

**Technical Feasibility Risks** (can we build it with available tech/data):
- Reliable access to real-time healthcare application status data
- API performance with volume of status checks (150k pending unverified, 105k pending MT)
- Integration capabilities with existing MyVA infrastructure
- *Validation*: Technical spike and API performance testing

**Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
- Stakeholder alignment on status display locations and messaging
- Compliance with VA healthcare privacy requirements
- Coordination with healthcare enrollment teams for accurate status definitions
- *Validation*: Stakeholder interviews and compliance review

### Supporting research

This work is requested by Design Lead (Lois Lewis) based on identified user needs. Additional user research should be conducted to:
- Validate veteran preferences for status information placement
- Test comprehension of status messaging and next steps
- Understand veteran mental models for application progress
- Identify any additional statuses or information veterans need

### What're you building?

**In scope:**
- Display of healthcare application statuses ('In Process,' 'Enrolled,' 'Declined,' 'Pending more information') on appropriate VA.gov personalized pages
- Clear guidance on next steps for each status
- Integration with existing MyVA healthcare section
- Responsive design that works across devices

**Explicitly not included:**
- Changes to the actual healthcare application form
- Modifications to backend status determination logic
- New notification systems (email/SMS alerts)
- Historical status tracking or timeline views

**Mobile application consideration:**
Building for VA Health and Benefits mobile app should be considered as a future iteration to ensure consistent experience across platforms.

**How this addresses Assumptions & Risks:**
- User research will validate value and usability assumptions
- Technical spikes will address feasibility concerns
- Stakeholder engagement will ensure organizational viability

#### Go-to-market

**Marketing/Communications:**
- Announcement through VA communication channels about improved status visibility
- Training for VA call center staff on new status display locations
- Documentation updates for veteran-facing support materials

**Necessary groups/orgs:**
- VA Healthcare Enrollment teams
- MyVA product team
- VA.gov Platform team
- Veterans Experience Office (VEO)

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
- User research completion: [TBD]
- Design and technical approach finalization: [TBD]
- Development completion: [TBD]
- Staged rollout beginning: [TBD]

* [Link to Release Plan for this Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md) - TBD

#### Initiative Launch Dates

- **Target Launch Date**: TBD
- **Actual Launch Date**: TBD

---

## Screenshots

### Before
[Screenshots of current MyVA healthcare section and form introduction page status display]

### After
[Mockups of enhanced status display on personalized pages]

---

#### Communications

*Where will you discuss this initiative?*

<details>

- Team Name: [Health Applications Team]
- GitHub Label(s): [1010-team, 10-10ezr, 1010-form-status]
- Slack channel: [1010-health-apps]
- Product POCs: [Heather Justice]

</details>

#### Stakeholders

*What offices/departments are critical to make this initiative successful?*

<details>

- Office/Department: OCTO-DE MyVA Team / Personalization
- Contact(s): [TBD]

- Office/Department: VA Healthcare Enrollment & Eligibility
- Contact(s): [Angela Fulton, Simone Gully, Amanda Scully, April Mims]

</details>

---

