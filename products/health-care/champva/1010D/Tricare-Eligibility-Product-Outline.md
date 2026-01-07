# CHAMPVA Tricare Eligibility Check Product Outline

## Overview
Applicants seeking CHAMPVA benefits must complete and submit VA Form 10-10d to enroll. A significant percentage of applicants are later denied because they are eligible for Tricare, which makes them ineligible for CHAMPVA. Today, users often only learn this after completing the full application and waiting for adjudication.

This project proposes introducing an early, soft eligibility check—prior to application submission—to help users understand whether Tricare eligibility may affect their CHAMPVA application. The solution may include content-based guidance, branching logic, and/or a soft technical eligibility check leveraging DoD systems (e.g., EDS/DEERS), depending on feasibility.

The goal is to reduce unnecessary application submissions, lower processing backlog, and improve user experience by setting expectations earlier in the flow.

---

## Problem Statement
A large portion of CHAMPVA applications are rejected because the applicant is eligible for Tricare. This creates several challenges:

- Users spend significant time completing an application that will ultimately be denied.
- Processing teams must review and reject applications that could have been avoided.
- Backlogs increase, slowing down approvals for eligible applicants.

Currently, the CHAMPVA application flow does not sufficiently screen for Tricare eligibility early in the experience, nor does it clearly guide users away from applying when Tricare eligibility is likely.

- How might we help users understand potential Tricare eligibility before they begin or complete a CHAMPVA application?
- How can we reduce ineligible applications without performing a definitive eligibility determination?

---

## Desired User Outcomes
- Users understand whether Tricare eligibility may impact their ability to receive CHAMPVA benefits.
- Users avoid spending time on applications that are likely to be denied.
- Users feel informed, respected, and supported—even when guided away from applying.
- Users can confidently decide whether to proceed with or stop the application.

## Undesired User Outcomes
- Users feel blocked, denied, or confused by eligibility guidance.
- Users misunderstand guidance as a formal denial of benefits.
- Users lose trust due to unclear or overly technical explanations.
- Users abandon the site without understanding next steps.

---

## Desired Business Outcomes
- Reduce the percentage of CHAMPVA applications rejected due to Tricare eligibility.
- Reduce processing backlog caused by clearly ineligible submissions.
- Improve efficiency for CHAMPVA processing teams.
- Increase overall satisfaction with the CHAMPVA application experience.

## Undesired Business Outcomes
- Incorrectly discouraging eligible users from applying.
- Increased support inquiries due to confusing eligibility messaging.
- Introducing compliance, security, or policy risks by overstepping eligibility authority.
- Overengineering a technical solution when content-based guidance would suffice.

---

## Measuring Success

### Key Performance Indicators (KPIs)

#### Baseline KPI Values
To be established using current CHAMPVA operational data.
- Percentage of CHAMPVA applications denied due to Tricare eligibility
- Total number of CHAMPVA applications submitted
- Average processing time per application
- User drop-off rates early in the application flow

### Objectives and Key Results (OKRs)

- Objective: Reduce ineligible CHAMPVA applications
  - Key result: Decrease percentage of applications rejected due to Tricare eligibility
  - Key result: Decrease total number of clearly ineligible submissions

- Objective: Improve user experience and confidence
  - Key result: Lower reported frustration in user feedback
  - Key result: Reduced support contacts related to eligibility confusion

- Objective: Validate feasibility of technical eligibility screening
  - Key result: Clear understanding of EDS/DEERS integration requirements
  - Key result: Decision on whether a soft API check is viable for future phases

---

## Assumptions
- Applicants prefer early guidance over late-stage rejection.
- A meaningful portion of Tricare-ineligible users can be identified through self-reported information.
- A soft check can provide guidance without acting as a formal eligibility decision.
- Access to DoD systems (EDS/DEERS) may be limited or delayed, requiring a phased approach.

---

## Solution Approach
This initiative will explore and potentially implement one or more complementary approaches to early eligibility guidance.

### 1. Content / UI / Branching Logic
- Add clear, plain-language explanations of the difference between CHAMPVA and Tricare.
- Introduce early questions that strongly correlate with Tricare eligibility.
- Use branching logic to guide users to informational content when Tricare eligibility is likely.
- Ensure messaging is supportive, non-blocking, and policy-compliant.

### 2. Soft Eligibility Check via DoD API
- Investigate feasibility of using the Eligibility and Demographics Service (EDS) backed by DEERS.
- Explore available inquiry types (Person, Family, Family Member) and relevant business contexts (Eligibility / EligibilityLite).
- Assess:
  - Authentication and PKI requirements
  - Required user inputs
  - Response reliability and performance
  - Security and compliance implications
- This check would provide guidance only, not a definitive eligibility decision.

---

## Launch Strategy
- Internal reviews with Design Sync and CHAMPVA stakeholders.
- Open C/IA ticket if technical integration is pursued.
- Monitor early metrics closely and iterate based on findings.

### Incident Response / Rollback
- Feature flags used for all new eligibility logic.
- Ability to disable guidance or checks immediately if issues arise.
- Standard 1–3 day triage and fix window for issues.

---

## Launch Dates
- Target Launch Date: TBD
- Actual Launch Date: TBD
- Impact Review: TBD (post-launch data review)

---

## Solution Narrative

### Current Status
- Discovery and design exploration in progress.
- Follow-on work from Design tickets #120382 and #121513.
- Initial investigation into EDS / DEERS capabilities completed at a high level.
- UX-first approach prioritized while API feasibility is assessed.

### Key Decisions
- This work will not provide a definitive eligibility determination.
- Early guidance is preferable to late-stage rejection.
- Technical integration will proceed only if it clearly improves outcomes without adding risk.

---

## Screenshots

### Before

### After

---

## Communications
- Team Name: IVC Forms team
- GitHub Label: ivc-forms
- Slack channel: ivc-forms
- Product POCs: Mike Mooney
- Stakeholders: CHAMPVA Program, Design, Platform, Security

## Team Members
- DEPO Lead: Premal Shah
- PM: Mike Mooney
- Engineering: Kyle Brost, Derrick Ellerbie, Steve Long
- Research/Design: Renata Keck, Hieu Vo, Jessica Stump
