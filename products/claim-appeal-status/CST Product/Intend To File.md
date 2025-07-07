# Initiative Brief: Display Intent to File (ITF) Status in the Claims Status Tool (CST)

## Overview
An Intent to File (ITF) is a notice to the VA that a Veteran plans to file a benefits claim. Submitting an ITF protects the claim’s effective date for up to one year, meaning if the formal claim is filed within that year, any benefits awarded can be backdated to the ITF date. 

However, if no claim is submitted in time, the ITF expires and the Veteran may lose out on retroactive compensation. Given this significance, clear visibility into ITF status (whether an ITF is on file and when it expires) is crucial for Veterans.

Veterans frequently report confusion around whether they have an active ITF on record and when it expires. This initiative proposes surfacing ITF status information directly in the Claims Status Tool (CST) to help Veterans track their filing window and build trust in VA systems.

## Outcome Summary
**Goal:** Increase visibility of Intent to File (ITF) status for Veterans by surfacing active ITF data and expiration date in CST.  
**Impact:** Reduce Veteran confusion and support timely claim submissions.

### Target Metrics
- Increase in ITF status views in CST (baseline TBD)
- Decrease in ITF-related call center inquiries (baseline TBD)
- Increase in claims submitted within ITF window (baseline TBD)

## Related/Associated Product(s)
- Claims Status Tool (CST)

## Problem
Veterans currently lack a clear way to view whether they have an active ITF or when it expires. Today, the only ways to confirm ITF status are:
- Call VA
- Receive a letter or email
- Continue a draft application or start a new claim
- Read claim letters for an acknowledgment letter

These methods are inconsistent and not intuitive, especially for such a critical step in the benefits timeline.

### Root Causes
- No UI element in VA.gov or CST showing current ITF status
- No standardized reminders or alerts for expiration dates
- During some form starts, an ITF cannot be generated successfully, leaving the user unsure whether an ITF is active

This confusion has led to:
- Missed benefit opportunities due to expired ITFs
- Duplicate ITFs filed out of uncertainty
- Frustration and mistrust in VA digital services

This initiative aligns with OCTO-DE’s mission by addressing known usability gaps and enhancing transparency and trust in digital benefit tools.

## Measuring Success
- TBD

## Discovery

### Assumptions & Risks

**Risk Type: Value Risk (Will Veterans use it?)**  
**Identified Risks:** Veterans may not visit CST frequently enough to see their ITF status.  
**Mitigation Approach:** Consider incorporating notification banners or integrating email notifications to proactively alert Veterans.

**Risk Type: Usability Risk**  
**Identified Risks:** Veterans may not understand what an ITF is or why it matters.  
**Mitigation Approach:** Use plain language and provide tooltips or contextual links to explain the purpose and importance of ITFs.

**Risk Type: Technical Feasibility**  
**Identified Risks:** ITF data must be reliably pulled from upstream systems such as VBMS or a dedicated ITF API.  
**Mitigation Approach:** Engage with upstream data owners early, document dependencies clearly, and identify risks to data availability or consistency.

**Risk Type: Organizational Viability**  
**Identified Risks:** Displaying ITF status may require validation by VBA or other stakeholders to confirm data accuracy.  
**Mitigation Approach:** Start with read-only ITF display to build buy-in and validate data sources across teams.

## What You're Building

### In Scope
- Show active ITF status (if available) when Veteran logs into CST
- Display expiration date and submission/potential effective date
- Show what type of ITF is on file (Compensation, Veteran’s Pension, Survivor’s Pension/DIC)
- Empty state if no ITF exists (optionally include a link to learn more)

### Out of Scope
- ITF submission functionality within CST
- Notifications or alerts (to be explored in future phases)

This solution directly addresses value and usability risks by making ITF status accessible and understandable.

## Open Questions
- If a new ITF is submitted when one is already on file, how should that be displayed or handled?
- How do we handle claims with multiple ITFs, partial decisions, or merged claims?
- If an ITF is about to expire, do we show a warning or take action?
- Do we show past/expired ITFs for historical context?

## Go-to-Market
- Collaborate with VBA's Office of Benefits Automation (OBA) on Veteran outreach and communication strategy
- Coordinate with VBA, VEO, and VSOs for outreach and education
- Contact Center enablement to reference CST for ITF-related inquiries
- Launch Planning: Coordinate with Contact Center and OBA

## Launch Planning
- **Kickoff Ticket:** TBD
- **UI/UX Prototypes:** TBD
- **Accessibility Review:** TBD
- **Data Integration Testing:** TBD

## Timeline

| Milestone               | Status |
|-------------------------|--------|
| Discovery Complete      | TBD    |
| Dev Kickoff             | TBD    |
| Integration & QA        | TBD    |
| Soft Launch             | TBD    |
| Full Rollout            | TBD    |

**Link to Release Plan:** TBD

## Initiative Launch Dates
- **Target Launch Date:** TBD
- **Actual Launch Date:** TBD

## Communications
Will be shared via:
- `#benefits-management-tool` Slack channel
- Stakeholder syncs
- Sprint reviews

## Stakeholders
- **Primary:** OCTO-DE / CST Product Team
- **Additional:** VBA, VBMS ITF Data Team, VEO, VA.gov Platform Team
