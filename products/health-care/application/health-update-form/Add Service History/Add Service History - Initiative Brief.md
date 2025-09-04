# Add Service History - Initiative Brief: 

#### Overview

This initiative focuses on adding service history update capabilities to the 10-10EZR health update form, enabling veterans to self-report new service periods and upload supporting documentation to help VA determine eligibility for new or improved benefits under the PACT Act and healthcare priority group reassessments.

---

## Outcome Summary

**Create a more effective and accessible path for veterans to update their service history online, leading to improved benefit eligibility determinations and healthcare priority group assignments based on the PACT Act and recent service periods.**

**Resources**
- [Add Service History Epic #77527](https://github.com/department-of-veterans-affairs/va.gov-team/issues/77527)
- VA Health Update Form (10-10EZR) | [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/health-update-form/10-10EZR%20Product%20Brief%20(standalone%20form).md)
- VA Healthcare Application (10-10EZ) | [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Health%20Care%20Application%20-%20Product%20Outline.md)

## Problem

**What is the problem and who is affected?**
Veterans who have completed additional service periods after their initial healthcare enrollment may be eligible for new or improved benefits under the PACT Act or higher healthcare priority groups, but currently lack an efficient digital path to update their service history with VA. This affects veterans who:
- Have completed additional military service since their last VA interaction
- May now be eligible for PACT Act benefits based on updated service history
- Could qualify for improved healthcare priority groups with current service information
- Need to provide updated DD-214 documentation for recent service periods

**Why do you think the problem is occurring?**
- The current 10-10EZR form focuses on demographic and insurance updates but doesn't include service history updates
- Veterans must use separate, potentially more complex processes to update service information
- Lack of integrated pathway between service history updates and healthcare benefit reassessment
- Veterans may be unaware that additional service periods could improve their benefit eligibility

**How does this initiative help further OCTO-DE's mission and goals?**
This initiative directly supports the OKR "VA's digital experiences are the easiest and most efficient way to access VA healthcare and benefits" by:
- Providing a seamless digital pathway for service history updates
- Integrating service updates with healthcare benefit reassessment
- Reducing veteran burden through self-service capabilities
- Ensuring veterans receive appropriate benefits based on complete service history

---

## Measuring Success

### Key Performance Indicators (KPIs)

> 💡 *VA.gov products measure success against Ease of use, Service Completion, Trust/Satisfaction, Health.*

- **Ease of Use**: Successful completion rate of service history section in 10-10EZR | Baseline: [TBD] | Target: 85% completion rate
- **Service Completion**: Number of veterans successfully updating service history through 10-10EZR | Baseline: 0 (new feature) | Target: [TBD based on veteran population analysis]
- **Service Completion**: Increase in healthcare priority group reassessments initiated through updated service history | Baseline: [TBD] | Target: 20% increase
- **Trust/Satisfaction**: Veteran satisfaction with service history update process | Baseline: [TBD] | Target: 4.0/5.0 satisfaction score
- **Health**: Number of veterans receiving improved benefits/priority groups due to updated service history | Baseline: [TBD] | Target: [TBD]

**Balancing Metrics:**
- Form completion time (ensure service history additions don't create excessive burden)
- Form abandonment rates at service history section
- Accuracy of self-reported service information vs. official records

---

## Discovery

### Assumptions/Risks

**Value Risks** (will people use it):
- Veterans will understand the value of updating service history for potential benefit improvements
- Veterans have access to recent DD-214 documents or service period information
- Integration with healthcare eligibility review will provide meaningful outcomes
- *Validation*: User research with veterans who have recent service periods

**Usability Risks** (can people figure out how to use it):
- Service history questions are clear and consistent with 10-10EZ patterns
- File upload process is intuitive and accessible
- Veterans understand when and why to provide service updates
- *Validation*: Usability testing of new service history section and file upload flow

**Technical Feasibility Risks** (can we build it with available tech/data):
- Integration with existing 10-10EZ service history components and patterns
- File upload capability expansion beyond current TERA evidence scope
- Data integration with VA systems for service period verification
- Performance impact of additional form sections and file uploads
- *Validation*: Technical assessment using existing 10-10EZ components and file upload infrastructure

**Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
- Healthcare eligibility review processes can accommodate increased service history updates
- PACT Act implementation coordination and requirements
- Data security and privacy compliance for service documentation
- Staff training for processing updated service history information
- *Validation*: Stakeholder engagement with healthcare eligibility and PACT Act teams

### Supporting research

**Research needed:**
- User research with veterans who have completed recent military service
- Understanding of veteran awareness regarding PACT Act eligibility
- Analysis of current service history update processes and pain points
- Assessment of veteran access to recent DD-214 documents
- Usability testing of existing 10-10EZ service history components for reference

**Existing research to leverage:**
- 10-10EZ service history question patterns and usability findings
- File upload user experience research from TERA evidence implementation
- Healthcare eligibility and priority group research

### What're you building?

**In scope:**
- V2 Confirmation Flow design displaying existing last reported service period
- Question asking "Do you have a more recent service period to add?"
- Military Service question page (consistent with 10-10EZ patterns)
- Service history page with checkboxes (consistent with 10-10EZ patterns)
- Enhanced file upload capability for DD-214 documents
- Integration with existing arrayBuilder pattern for service periods
- Responsive design across devices

**Explicitly not included:**
- Changes to backend service history verification processes
- Automatic healthcare priority group reassignment (separate downstream process)
- Historical service record corrections (focuses on new/recent periods)
- Integration with other benefit applications beyond healthcare

**Mobile application consideration:**
Should be designed mobile-first given the form-filling nature of the experience and ensure consistency with existing 10-10EZ mobile patterns.

**How this addresses Assumptions & Risks:**
- Leverages proven 10-10EZ patterns to reduce usability risk
- Uses existing file upload infrastructure to minimize technical risk
- Focuses on recent service periods to maximize value and reduce complexity
- Builds on established form patterns to ensure consistency

#### Go-to-market

**Marketing/Communications:**
- Outreach through PACT Act communication channels about new self-service option
- Integration with existing healthcare enrollment communications
- Coordination with VSO and veteran advocacy groups
- Educational content about PACT Act eligibility and service history importance

**Necessary groups/orgs:**
- PACT Act implementation teams
- Veterans Health Administration (VHA) eligibility teams
- Healthcare enrollment and priority group assessment teams
- Veterans Benefits Administration (for coordination)
- VSOs and veteran advocacy organizations

---

## Launch Planning

### Collaboration Cycle

- Kickoff ticket: [TBD]
- Design Intent: [TBD]
- Research Review: [TBD]
- Midpoint Review: [TBD]
- Staging Review: [TBD]
- Privacy & Security Review: [TBD] (important for DD-214 handling)

### Timeline

**Major milestones:**
- User research with veterans having recent service periods: [TBD]
- Design completion using 10-10EZ patterns: [TBD]
- File upload capability enhancement: [TBD]
- Integration testing with eligibility review processes: [TBD]
- PACT Act coordination and validation: [TBD]

* [Link to Release Plan for this Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

#### Initiative Launch Dates

- **Target Launch Date**: TBD
- **Actual Launch Date**: TBD

---

## Screenshots

### Before
[Screenshots of current 10-10EZR form without service history section]
[Screenshots of current file upload page limited to TERA evidence]

### After
[Mockups of new service history confirmation flow]
[Mockups of military service question page]
[Mockups of enhanced file upload for DD-214 documents]

---

#### Communications

*Where will you discuss this initiative?*

<details>

- Team Name: [Health Update Form Team / Healthcare Application Team]
- GitHub Label(s): [10-10ezr, service-history, pact-act, healthcare-eligibility]
- Slack channel: [TBD]
- Product POCs: [TBD]

</details>

#### Stakeholders

*What offices/departments are critical to make this initiative successful?*

<details>

- Office/Department: Veterans Health Administration (VHA) - Healthcare Eligibility
- Contact(s): [TBD]

- Office/Department: PACT Act Implementation Teams
- Contact(s): [TBD]

- Office/Department: Veterans Benefits Administration (VBA) - Service History Records
- Contact(s): [TBD]

- Office/Department: VA.gov Platform Team
- Contact(s): [TBD]

- Office/Department: Office of Information Technology (OIT) - Data Integration
- Contact(s): [TBD]

</details>

---
