# Spike Writeup: Tracking Drop-offs After Failures

**Issue**: [#120624](https://github.com/department-of-veterans-affairs/va.gov-team/issues/120624)

**Epic**: [#120479](https://github.com/department-of-veterans-affairs/va.gov-team/issues/120479)

**Team**: BMT Team 2 (Bee's Knees)

**Author**: @dfitchett

**Date**: 11/12/2025

**Related Resources**:
- **GitHub Issue**: https://github.com/department-of-veterans-affairs/va.gov-team/issues/120624
- **Related Epic**: https://github.com/department-of-veterans-affairs/va.gov-team/issues/120479
- **Slack Discussion**: https://dsva.slack.com/docs/T03FECE8V/F09GXF90CDQ
- **Additional Resources**: [Add any other relevant links]
---

## Executive Summary

### Objective
This spike explores options for tracking whether Veterans exit the Claim Status Tool (CST) after encountering a document submission failure, and investigates whether such exits indicate abandonment or expected offline resubmission behavior. The goal is to assess whether Google Analytics funnel analysis or another approach can meaningfully distinguish between these two very different user behaviors.

### Key Findings
GA Funnel exploration could be used to determine actions taken after the user has a failed upload (Type 1) and after the user sees
their document that failed to get to VBMS via Lighthouse (Type 2).

#### Recommended Events
Currently the presence of Type 2 errors do not fire off events, however it could be interesting to record an event when the user navigates to CST and sees it. This would require adding a new event (maybe named `claims-upload-failure-type-2`) that includes the number of failed documents. Then implement the second funnel below.

#### Recommended Funnels
**Type 1 Drop-off (navigation away from page)**
1. User Navigates to CST Files page or Evidence Request Page
1. User uploads file(s) (fires off `claims-upload-start` event)
1. One or more file(s) fail to upload showing Type 1 Unknown Error message (fires off `claims-upload-failure` event)
1. User navigates away from CST Files page or Evidence Request Page

**Type 1 Retry**
1. User Navigates to CST Files page or Evidence Request Page
1. User uploads file(s) (fires off `claims-upload-start` event)
1. One or more file(s) fail to upload showing Type 1 Unknown Error message (fires off `claims-upload-failure` event)
1. User retries one or more of the same file(s) that failed (fires off the `claims-upload-start` event, comparing the file name and size)

**Type 2 Drop-off (navigation away from CST - Status Tab or Files Tab)**
1. User Navigates to CST Status Tab
1. User sees Type 2 Error (fires off new `claims-upload-failure-type-2`event)
1. User navigates away OR navigates to `/files-we-couldnt-receive` page

**Type 2 Retry**
1. User Navigates to CST Status Tab
1. User sees Type 2 Error (fires off new `claims-upload-failure-type-2` event)
1. User tries to upload any of the failed uploads on that claim matching the file name and size (fires off the `claims-upload-start` event)

---

## Background & Context

### Problem Statement
- We want to measure what happens after a Veteran encounters a failure message in the document submission flow
- There is ambiguity around what an "exit" means: does it indicate abandonment (a negative outcome), or is it expected behavior when Veterans are instructed to resubmit offline (particularly for Type 2 errors)?
- Currently, exits could reflect two very different things — discouraged users giving up, or users appropriately following offline instructions

### Current State

- **Type 2 Errors & Offline Flow**: Type 2 errors instruct Veterans to resubmit documents offline, which means some exits after these errors are expected and appropriate user behavior.

### Goals
- Meaningfully differentiate between abandonment and expected offline resubmission behavior
- Assess whether GA funnel analysis or another approach can reliably distinguish between these cases
- This work ties to Epic #120479 – Document Status Refinements and Clarifications, specifically supporting the Analytics & Metrics Refinements goal

---

## Technical Findings

### Google Analytics Funnel Analysis Capabilities

#### Current Setup
- **Existing Analytics/Tracking**:
  - claims-upload-start
  - claims-upload-cancel
  - claims-upload-failed
  - claims-upload-success
  - page paths (status tab, files tab, needed-from-you, etc.,)

#### Feasibility Assessment
- GA funnels track can track abandonment drop-offs after errors. What it cannot do is determine why the veteran decided to move on (logout)
- To get more granularity on the number of documents uploads success/failed (Type 1 only), we can update the current recorded events to include that data
- Type 2 errors do not currently fire off any events when the veteran sees the alert

### Platform Analytics Analysis
[TBD]

### Error Type Analysis

#### Type 1 vs Type 2 Errors
- **Type 1**: If the file upload fails before it reaches Lighthouse, we can provide immediate feedback to the Veteran that the file was not successfully uploaded. This error is displayed when we are unable to identify what went wrong in the upload attempt. We already provide a variety of specific messages when we know the cause (e.g., duplicate file error). This work doesn't replace existing upload errors.
  - Fires off the GA event `claims-upload-failure`.
- **Type 2**: If there is a Type 2 failure, this is typically because the upload has failed between Lighthouse and the eFolder (although not always – see Eng Note). In this case, we will likely not know right away. The Veteran will initially see the "Submission in progress" message (See Successful Submission Flow) and the file will be represented as a card under the "File submissions in progress" section. Once the file fails, which could be up to a few days later, the Veteran will (currently) receive an email telling them their file as failed. For this work, we will add the below alerts to CST to indicate that the failure has occurred. This will trigger a "Files we couldn't receive" section to appear on the page as well.
  - Does not currently fire off any event (recommendation: add `claims-upload-failure-type-2` event with failed document count)

#### Exit Patterns
- **What Constitutes an "Exit"**: User navigates away from or leaves va.gov (logout, close window, etc.,)

### Data Classification Challenges

#### Abandonment Indicators
- What signals might indicate a Veteran gave up:
  - Leaves the screen where they upload
  - Logs out
- Can these be reliably distinguished from expected exits?
  - No, the veteran could just be following directions and will submit documents manually.


#### Expected Offline Resubmission Indicators
- Veteran could submit another route, but there's no reliable way to tie that to a failed document upload
- If veteran navigates to the `/track-claims/your-claims/{claim_id}/#other-ways-to-send-your-documents` section and then navigates away, then maybe we can assume they will go do that?

---

## Data Gaps & Dependencies

### Analytics Gaps
- Missing an event for Type 2 indication (i.e., veteran has failed uploads)

### Support Requirements

#### vfs-analytics Team
- GA funnel setup may require vfs-analytics support

#### Backend/Contact Center Integration
- May need backend data to cross-check offline submissions
- Contact Center data could help validate whether Veterans who exited after errors actually completed offline resubmissions

---

## Risk Assessment

### Metric Reliability Risk
- **Risk**: Funnel results may be misleading if exits can't be differentiated between abandonment and expected offline resubmission behavior
- **Impact**: Could lead to incorrect conclusions about user experience and misguided product decisions. For example, a high "drop-off" rate after Type 2 errors might actually indicate Veterans successfully following offline instructions, not a problem to fix

---

## Recommendations

### Primary Recommendation

**Recommendation**: Pursue GA funnel tracking with acknowledgment of limitations

**Rationale**:
- GA funnel analysis is feasible with existing infrastructure and can provide valuable insights into user behavior after document submission failures
- Adding a new event (`claims-upload-failure-type-2`) for Type 2 errors will enable tracking of both failure types
- While we cannot definitively distinguish between abandonment and expected offline resubmission behavior, the data will still reveal patterns and volumes of exits after failures, which is useful for understanding the overall user experience
- The metric will be most valuable when combined with other data sources (e.g., Contact Center feedback, offline submission data if available)

### Implementation Approach

#### Step 1: Add New GA Event for Type 2 Errors
- **Event Name**: `claims-upload-failure-type-2`
- **Trigger**: When a Veteran navigates to CST and sees a Type 2 error (document failed between Lighthouse and eFolder)
- **Purpose**: Enable funnel tracking for Type 2 error drop-offs, which currently have no event tracking
- **Metadata to Include**:
  - Number of documents that failed (e.g., `'failed-document-count': 3`)

#### Step 2: Set Up Two Funnels

**Type 1 Drop-off Funnel (Immediate Upload Failure)**
1. User navigates to CST Files page or Evidence Request Page
2. User uploads file(s) → `claims-upload-start` event fires
3. One or more file(s) fail to upload showing Type 1 Unknown Error message → `claims-upload-failure` event fires
4. User navigates away from CST Files page or Evidence Request Page

**Type 1 Retry**
1. User navigates to CST Files page or Evidence Request Page
2. User uploads file(s) → `claims-upload-start` event fires
3. One or more file(s) fail to upload showing Type 1 Unknown Error message → `claims-upload-failure` event fires
4. User uploads **same** file(s) → `claims-upload-start` event fires

**Type 2 Drop-off Funnel (Silent/Delayed Failure)**
1. User navigates to CST Status Tab
2. User sees Type 2 Error → `claims-upload-failure-type-2` event fires (new)
3. User navigates away OR navigates to `/files-we-couldnt-receive` page

**Type 2 Retry**
1. User navigates to CST Status Tab
2. User sees Type 2 Error → `claims-upload-failure-type-2` event fires (new)
3. User uploads a file matching the name and size of a failed evidence submission → `claims-upload-start` event fires

### Success Criteria

**Data Quality Indicators**:
- Events fire consistently when expected (Type 1 and Type 2 errors)
- Funnel data populates in GA within expected timeframes
- No significant data gaps or missing events

**Actionable Insights**:
- Baseline drop-off rates established for both error types
- Volume trends identified (e.g., how many Veterans encounter each error type, how many documents typically fail)
- Comparison of behavior patterns between Type 1 vs Type 2 errors
- Ability to track changes in drop-off rates after UI/UX improvements
- Document count metadata provides granularity on failure severity (single vs. multiple document failures)

**Known Limitations**:
- Cannot definitively distinguish abandonment from offline resubmission behavior
- Type 2 funnel may show high "drop-off" rates that actually represent Veterans appropriately following instructions to submit offline
- Interpretation requires contextual analysis and potentially qualitative research to understand intent

---

## Next Steps

### Immediate Actions

#### Technical Implementation
- [ ] **Add `claims-upload-failure-type-2` event** to fire when Veterans see Type 2 errors in CST
  - Identify where Type 2 errors are displayed in the UI
  - Import and call `recordEvent` with appropriate event name and metadata
  - Include the number of failed documents in the event data (e.g., `'failed-document-count': numberOfFailedDocs`)
  - Test locally to confirm event fires correctly with accurate document count
- [ ] **Enhance existing event data** (optional): Consider adding document count metadata to `claims-upload-start`, `claims-upload-failure`, and `claims-upload-success` events for more granular analysis
- [ ] **Review event naming conventions** with vfs-analytics team to ensure consistency

#### Analytics Setup
- [ ] **Consult with vfs-analytics team** on GA funnel configuration
  - Recommended funnel structures (Type 1 and Type 2)
  - Confirm event names and funnel step definitions
  - Determine if custom dimensions or additional metadata are needed
- [ ] **Set up funnels in Google Analytics**
  - Set up dashboard views for ongoing monitoring

#### Documentation & Communication
- [ ] **Document implementation** in relevant places
  - Add analytics event documentation to team wiki/docs
  - Update this spike document with final implementation details
- [ ] **Share findings with stakeholders**
  - Present spike findings and recommendations to team
  - Align with Product Owner on success criteria and limitations
  - Brief Contact Center team on what metrics we'll be tracking

### Future Considerations
- [ ] **Qualitative research**: Consider user interviews or surveys to better understand intent behind exits after failures
- [ ] **Backend integration**: Explore feasibility of tracking offline submission data to correlate with online failures
- [ ] **Contact Center analysis**: Review Contact Center data for patterns related to document submission issues
