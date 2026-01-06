# Topline Findings: Medication renewal flow and statuses comprehension study

**Authors:** Athena Bozak, Anneka VanGarza, Cara Frissell  
**Date:** January 6, 2026

---

## On this page
- [Context](#context)
  - [Background](#background)
  - [Overview](#overview)
  - [Research goals and questions](#research-goals-and-questions)
  - [Research question coverage](#research-question-coverage)
  - [Screens and paths used in testing](#screens-and-paths-used-in-testing)
- [Insights](#insights)
  - [Insight 1: Active](#insight-1-active)
  - [Insight 2: In Progress](#insight-2-in-progress)
  - [Insight 3: Inactive](#insight-3-inactive)
  - [Insight 4: Renewal link discovery](#insight-4-renewal-link-discovery)
  - [Insight 5: Prefilled message and missing information](#insight-5-prefilled-message-and-missing-information)
  - [Insight 6: Confirmation and next steps](#insight-6-confirmation-and-next-steps)
- [Additional observations](#additional-observations)
- [Recommendations](#recommendations)
- [Appendix: Research question mapping](#appendix-research-question-mapping)
- [Resources](#resources)

---

## Context

### Background

We are building a new authenticated prescription renewal request flow on VA.gov (via Secure Messaging) to reduce Veterans’ dependence on phone calls and ad hoc communication for renewals. We are also introducing a simplified set of prescription status labels across Oracle Health and VistA to replace existing VistA statuses that are frequently cited as confusing or misleading.

This experience lives within authenticated VA.gov, specifically the Medications management and Secure Messaging experiences within My HealtheVet on VA.gov. The work builds on tools that many Veterans already use. The updated status labels and renewal flow are iterations on existing functionality, not a new product.

---

### Overview

We conducted remote moderated usability sessions with **12 Veterans** to explore how they interpret new prescription status labels and how comfortably they can request a prescription renewal using Secure Messaging on VA.gov.

Sessions lasted 60 minutes and followed a think-aloud approach using a Figma prototype and a staging test environment. In addition to task success, this research focused on moments of uncertainty, hesitation, and friction.

Sessions were split into two parts:

**Part 1: Reviewing prescription statuses**  
Participants reviewed medication list screens featuring the new status labels. They described what stood out, how they understood each status, and what actions they believed were available.

**Part 2: Requesting a prescription renewal**  
Participants attempted to request a renewal starting from the Medications tool. After selecting the renewal link, they were routed into Secure Messaging with a prefilled message. We also tested a scenario where the message was not prefilled to understand how missing information affected confidence and completion.

---

### Research goals and questions

#### Research goals

1. Evaluate whether Veterans understand the new prescription statuses and where confusion occurs.
2. Evaluate whether Veterans can successfully and efficiently use the Secure Messaging renewal flow.
3. Identify usability issues that can be addressed through design or content changes.

#### Research questions

1. Do Veterans understand the revised prescription statuses as intended, particularly around refill versus renewal?
2. Can Veterans complete a renewal request from entry point through confirmation?
3. Where do Veterans feel uncertain, confused, or stuck?
4. What aspects of the experience feel clear or reassuring?
5. What improvements do Veterans suggest based on how they manage medications today?

---

### Research question coverage

his study addressed all five research questions. Veterans generally understood the updated prescription statuses, but their expectations varied around when they could take action, how long things should take, and what would happen next. Most were able to complete the Secure Messaging renewal flow, though confidence was closely tied to finding the renewal link, having details prefilled, and receiving clear confirmation. Moments of confusion tended to stem from limited visibility of key information, competing entry points, and reliance on prior experience. Recommendations are based on these observations and Veteran feedback.

---

### Screens and paths used in testing

This research used a combination of a Figma prototype and a staging test environment.

#### Figma: Medication status evaluation

<img
  width="600"
  alt="Medication list showing prescription status variations"
  src="https://github.com/user-attachments/assets/829fbc55-5813-408b-93cd-e65b1561ec78"
/>

- Expanded filter view showing medication statuses  
- Medication list with individual medication cards displaying different statuses (Active, In Progress, Expired)  
- Medication cards shown with and without a visible “Send a renewal request message” link  

---

#### Staging: Secure Messaging renewal flow

<img
  width="100%"
  alt="Secure Messaging renewal flow screens"
  src="https://github.com/user-attachments/assets/e7df5640-f9f2-4a06-a458-53ab68c6c551"
/>

1. Medications list with an eligible prescription card displaying a “Send a renewal request” link  
2. Exit modal indicating the Veteran is leaving Medications  
3. Care team selection screen in Secure Messaging  
4. Prefilled renewal request message  
5. Success alert confirming the renewal request was sent  

---

## Insights

---

### Insight 1: Active
<a name="insight-1-active"></a>

Veterans generally understood what “Active” meant, but differed on whether it signaled they could take action.

All participants interpreted **Active** as a medication they are currently taking. Where understanding diverged was whether Active implied that a refill or renewal action was available.

- All 11 participants understood Active as current and in use.
- **7 participants** assumed Active meant the medication was refillable.
- **4 participants** viewed Active as informational and did not assume refills were available.

Several Veterans expected to take action once they saw an Active status. When refills were not available, that expectation broke down.

---

### Insight 2: In Progress
<a name="insight-2-in-progress"></a>

Veterans understood “In Progress,” but relied on their own timing expectations to decide when to follow up.

All participants interpreted **In Progress** as a medication being actively worked on.

- **9 participants** expected In Progress to last 2 to 7 days.
- Most expected the next step to be “Shipped.”
- One participant noted timing depends on availability.
- One participant expressed reduced trust due to a past experience where In Progress lasted too long.

Veterans used time spent in this status as their primary signal for action.

---

### Insight 3: Inactive
<a name="insight-3-inactive"></a>

“Inactive” was clearly understood, but the volume of inactive medications made next steps harder to identify.

All participants interpreted **Inactive** as finished, expired, discontinued, or no longer refillable. Most associated it with needing provider follow-up.

Very old or duplicate inactive medications increased cognitive load, and inconsistent renewal link visibility created uncertainty.

---

### Insight 4: Renewal link discovery
<a name="insight-4-renewal-link-discovery"></a>

Finding the renewal link was inconsistent, and many Veterans defaulted to familiar paths.

- **6 of 13 participants** noticed the renewal link organically.
- **7 of 13 participants** relied on familiar behaviors such as refill requests or direct messaging.

Competing entry points reduced confidence even after the link was discovered.

---

### Insight 5: Prefilled message and missing information
<a name="insight-5-prefilled-message-and-missing-information"></a>

The prefilled message was a strong success, but missing information quickly disrupted momentum.

- **10 of 12 participants** explicitly noticed and appreciated the prefilled message.
- When information was missing, many did not notice the alert and felt blocked.
- Some participants abandoned the flow entirely.

---

### Insight 6: Confirmation and next steps
<a name="insight-6-confirmation-and-next-steps"></a>

Most Veterans understood their request was sent, but next steps were inferred rather than explained.

- **9 of 12 participants** noticed the confirmation alert.
- **3 participants** checked Sent Messages to confirm submission.

Expectations about what would happen next came from prior experience, not on-screen guidance.

---

## Additional observations

### Refill vs renewal confusion

Participants varied in how clearly they distinguished refill from renewal.

- **8 of 12 participants** clearly differentiated the two.
- **5 participants** used the terms interchangeably or were unsure.

This confusion influenced how confidently participants navigated renewal actions.

---

## Recommendations

- Show refill counts alongside Active status.
- Add timing or next-step guidance to In Progress status.
- Reduce clutter from very old inactive medications.
- Increase visibility and consistency of renewal links.
- Make missing-information alerts more prominent and actionable.
- Clarify refill versus renewal through labels or help text.
- Expand confirmation messaging to explain what happens next and expected timelines.

---

## Appendix: Research question mapping

| Insight | Research questions addressed |
|-------|-------------------------------|
| Insight 1: Active | RQ1, RQ3 |
| Insight 2: In Progress | RQ1, RQ3, RQ4 |
| Insight 3: Inactive | RQ1, RQ3 |
| Insight 4: Renewal link discovery | RQ2, RQ3 |
| Insight 5: Prefilled message | RQ2, RQ3, RQ4 |
| Insight 6: Confirmation | RQ2, RQ4 |
| Additional observations | RQ1, RQ5 |
| Recommendations | RQ5 |

---

## Resources

- [Figma prototype for status testing](https://www.figma.com/proto/puYUxsa9cW7KsKDc1ztAOf/Status-Testing?page-id=0%3A1&node-id=1-5845&viewport=243%2C67%2C0.47&t=TX8HR32UqWDF5uF1-1&scaling=min-zoom)
