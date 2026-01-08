# Add Service History - Initiative Brief

#### Overview

This initiative focuses on adding service history update capabilities to the 10-10EZR health update form, enabling veterans to self-report new service periods and upload supporting documentation to help VA determine eligibility for new or improved benefits under the PACT Act and healthcare priority group reassessments.

---

## Outcome Summary

**Create a more effective and accessible path for veterans to update their service history online, leading to improved benefit eligibility determinations and healthcare priority group assignments based on the PACT Act and recent service periods.**

**Resources**
- Add Service History [Epic #77527](https://github.com/department-of-veterans-affairs/va.gov-team/issues/77527)
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
- The current online 10-10EZR form doesn't include service history updates
- Veterans must use a separate paper form to update service information
- Veterans believe that VA and DOD data is shared, and that VA should already know the Veteran has a more recent service period
- Lack of integrated pathway between service history updates and healthcare benefit reassessment
- Veterans may be unaware that additional service periods could improve their benefit eligibility

**How does this initiative help further OCTO-DE's mission and goals?**
This initiative directly supports the OKR "VA's digital experiences are the easiest and most efficient way to access VA healthcare and benefits" by:
- Providing a seamless digital pathway for service history updates
- Integrating service updates with healthcare benefit reassessment
- Ensuring Veterans receive appropriate benefits based on complete service history

---

## Measuring Success

### Key Performance Indicators (KPIs)

- Data source
  - TBD

#### Objective: Veterans will update their service history details
- Result #1: At least 10% of submissions will show the Veteran updating their service history
- Result #2: Supporting documentation uploads will increase by 10%

| Product KPI | Baseline | Target | Post-Launch 1 week |Post-Launch 1 month|
|------------- |---------|-------|-------------- |------------- |
| Service history updates |NEW|-------|-------------- |------------- |
| Supporting docs uploads |TBD|-------|-------------- |------------- |

#### Objective: Veterans will move through the form easily without excessive burdon or abandonment
- Result #1: Average completion time will not increase more than 10% of current time
- Result #2: Abandonment rates will not increase

| Product KPI | Baseline | Target | Post-Launch 1 week |Post-Launch 1 month|
|------------- |---------|-------|-------------- |------------- |
| Form completion time |TBD|-------|-------------- |------------- |
| Abandonment rates |TBD|-------|-------------- |------------- |
| Service History section Abandonment rates |TBD|-------|-------------- |------------- |

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

### Supporting research

**Possible Research:**
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
- Integrating with VA Profile as the data source for military service history
- V2 Confirmation Flow design displaying existing service periods
- Question referencing service period and whether the most recent is accurate.
- Military Service question page (consistent with 10-10EZ patterns)
- Service history page with checkboxes (consistent with 10-10EZ patterns)
- Enhanced file upload capability for DD-214/other military documents
- Responsive design across devices

     - **Decisions made**
          - We will have a single file upload page conditional upon whether the Veteran answers Yes to adding service history (either/or) TERA questions
          - 1/8/2026 - Decision made to use VA Profile as data source

**Explicitly not included:**
- Historical service record corrections (focuses on new/recent periods)
     - Any DOD records that need corrections can only be initiated by the Veteran through specific channels
- Integration with other benefit applications beyond healthcare

**Mobile application consideration:**
Should be designed mobile-first given the form-filling nature of the experience and ensure consistency with existing 10-10EZ mobile patterns.

---

## Launch Planning
- Release Plan - TBD ‼️

### Timeline

**Major milestones:**
- [Design](https://www.figma.com/design/tggcJk382w9yQ0ElwKfh3N/10-10EZR-Working-Files?node-id=10484-61369&p=f&t=7DffyK9pHaYtYyH4-0) completion displaying previous history and existing 10-10EZ question pages patterns: [Prior to Dec 2025 - finalized decisions 12/18/2025]
- File upload capability enhancement/content changes: [TBD]
- Integration testing: [TBD]

#### Initiative Launch Dates

- **Target Launch Date**: December 2025
- **Actual Launch Date**: TBD

---

## Screenshots

### Before
- Copy of most recent PDF 10-10EZR form
     - <img width="957" height="249" alt="image" src="https://github.com/user-attachments/assets/37f297f1-dca1-4b55-82d7-d36dba065d4b" />


### After
TBD

---

#### Communications

*Where will you discuss this initiative?*

<details>

- Team Name: Health Application Team
- GitHub Label(s): 10-10ezr, military-info
- Slack channel: #health-apps
- Product POCs: Heather J (PM)

</details>

#### Stakeholders

*What offices/departments are critical to make this initiative successful?*

<details>

- Office/Department: DSD
- Contact(s): Lauren A, Premal S

</details>

---
