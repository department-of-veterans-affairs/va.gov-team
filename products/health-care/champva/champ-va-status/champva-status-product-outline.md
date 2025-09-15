
# Product Outline: Integrating CHAMPVA Applications into the Claim and Appeal Status Tool (CST)

## Overview
We will integrate CHAMPVA applications into the existing Claim and Appeal Status Tool (CST) to enhance transparency, reduce delays, and improve the overall user experience for veterans and their families. This solution aims to provide real-time access to application statuses, streamline documentation workflows, and reduce call center volume.

## Problem Statement
Veterans and their families enrolled in CHAMPVA currently lack digital infrastructure to manage their application status, relying heavily on paper mail and manual processes. This results in delays, backlogs, and a high volume of status inquiries. Approximately 80% of calls to the CHAMPVA helpdesk are status inquiries, leading to significant wait times.

**How might we** provide a seamless digital interface for CHAMPVA applications that enhances transparency, reduces delays, and decreases call center volume through efficient and automated processes without compromising user trust?

## Desired User Outcomes
- **Real-Time Access:** Users can view real-time CHAMPVA application statuses. 
- **Seamless Document Handling:** Users can upload documents digitally, and it is routed directly to the applicants file for review by the VA.
- **Centralized Tracking:** Users can track the entire lifecycle of their application in one place.

## Undesired User Outcomes
- **Process Inefficiencies:** Continued reliance on traditional mail causing delays.
- **User Confusion:** Complicated or unclear digital interfaces leading to errors.
- **Duplicate Submissions:** Lack of feedback leading to multiple unnecessary submissions.

## Desired Business Outcomes
- **Efficiency Increase:** Reduced manual processing and paper mail handling.
- **Improve the call center experience:** Lowered call center volume for claims status, allowing for reduced wait times.
- **Improved Metrics:** Faster application resolution times and reduced backlog.
- **Enhanced User Trust:** Increased satisfaction and trust in VA systems.

## Undesired Business Outcomes
- **Increase in Errors:** Poor system integration might lead to processing errors.
- **Resource Overload:** Initial system integration might temporarily increase workload.

## Measuring Success

### Key Performance Indicators (KPIs)
Current Application Resolution Time
% of call center volume for application status
% of duplicate applications from VA.gov
Backlog volume of miscellaneous document

#### Baseline KPI Values
Current Application Resolution Time
% of call center volume for application status
% of duplicate applications from VA.gov
Backlog volume of miscellaneous document

### Objectives and Key Results (OKRs)
- **Objective:** VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits (ties to OCTO objective 1)
  - **Key result:** Duplicate submissions are reduced by 50% in the first 6 months of deployment
  - **Key result:** Reduce call center inquiries related to application status by 30% within 6 months.

## Assumptions
- Users will prefer digital solutions over traditional mail.
- Digital notifications will increase response times, reducing delays.
- Backend systems can be integrated without major errors.
- The solution includes security measures to protect PHI and PII compliance.

## Solution Approach
- **Initial Build:**
  - Integrate CHAMPVA application status within CST, reusing existing UI components.
  - Show basic status's for each applicant **TBD**
- **Rationale:**
  - Utilizing existing CST infrastructure ensures consistency and speeds up development.
  - Provides a comprehensive solution immediately addressing the major pain points.
- **- **Future Iterations:**
  - Real time notification to applicants via email
  - Allow document uploads

### Supporting Research
- **User Research:**
  - Existing studies on CST user satisfaction and pain points.
  - Planned research to validate assumptions and inform iterative improvements.
- **Citations:**
  - [VA.gov research repo](https://github.com/department-of-veterans-affairs/va.gov-research-repository)
- **Future Research:**
  - Continuous user testing to refine features and improve user experience.

## Launch Strategy
- Veterans and their families will be informed through:
  - Email campaigns and newsletters.
  - Updates on VA.gov.
  - Social media outreach and webinars.
- **Release Plan:** [Link to Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

## Launch Dates
- **Target Launch Date:** TBD
- **Actual Launch Date:** TBD
- **Impact Review Date:** TBD after launch

## Solution Narrative

### Current Status
- Initial planning and requirement gathering phase.

### Key Decisions
- Reuse existing CST components to maintain consistency.
- Prioritize features that directly address user pain points.

## Screenshots

### Before
- Current manual status tracking and document submission processes.

### After
- Proposed screenshots of integrated CHAMPVA applications within CST.

## Communications

<details>

- **Team Name:** CST Integration Team
- **GitHub Label:** CHAMPVA-CST
- **Slack channel:** #cst-integration
- **Product POCs:** (Name, Title, Contact Information)
- **Stakeholders:** VA Benefits Office, CHAMPVA Program Office

</details>

## Team Members

<details>

- **DEPO Lead:** (Name, Contact Information)
- **PM:** (Name, Contact Information)
- **Engineering:** (Name, Contact Information)
- **Research/Design:** (Name, Contact Information)

</details>

## Stakeholders

<details>
_What offices/departments are critical to making this initiative successful?_

- **Departments:**
  - VA Benefits Office
  - CHAMPVA Program Office
  - Call Center Operations

</details>


