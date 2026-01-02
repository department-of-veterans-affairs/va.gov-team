# **Topline Findings: Medication statuses and Secure messaging renewal flow**

**Authors:** Athena Bozak, Anneka VanGarza, Cara Frissell  
**Date:** January 1, 2026

---

## On this page
- [Context](#context)
  - [Background](#background)
  - [Overview](#overview)
  - [Research goals and questions](#goals)
  - [Screens and paths used in testing](#testing)
- [Insights](#insights)
  - [Insight 1](#insight-1)
  - [Insight 2](#insight-2)
  - [Insight 3](#insight-3)
  - [Insight 4](#insight-4)
  - [Insight 5](#insight-5)
- [Recommendations](#recommendations)
- [Resources](#resources)

---

## <a name="context"></a>Context

### <a name="background"></a>Background

We are building a new authenticated prescription renewal request flow on VA.gov (via Secure messaging) to reduce Veterans’ dependence on phone calls and ad-hoc communication for renewals. We are also introducing a new, simplified set of prescription status labels across Oracle Health and VistA to replace existing VistA statuses that are frequently cited as confusing or misleading. We need to understand whether these changes improve Veterans’ ability to understand medication state and manage renewals independently.

The product is situated within authenticated VA.gov, specifically the Medications management and Secure messaging experiences within My HealtheVet on VA.gov. The experience builds on existing My HealtheVet and VA.gov Medications and Secure messaging tools that many Veterans already use. The status labels and the specific renewal flow design are new iterations on existing functionality, not an entirely new product.

---

### <a name="overview"></a>Overview

We conducted remote moderated usability sessions with **12 Veterans** to explore how they make sense of new prescription status labels and how comfortably they can request a prescription renewal using Secure messaging on VA.gov.

Sessions were 60 minutes and followed a think-aloud approach using a Figma prototype and a staging test environment. Beyond whether participants could complete the flow, this research looked at where the experience felt unclear and what aspects of the designs created friction that could be improved in future iterations.

Sessions were divided into two parts:

**Part 1: Reviewing prescription statuses**  
Participants reviewed medication list screens featuring the new prescription status labels using a Figma prototype. They described what stood out, how they understood each status, and what actions they believed were available. This helped us understand Veterans’ mental models around medication state, whether renewal-related actions were noticeable, and where status language or presentation introduced confusion or uncertainty.

**Part 2: Requesting a prescription renewal**  
Participants attempted to request a medication renewal starting from the Medications tool using a staging test user. After selecting the renewal link, they were routed into Secure Messaging with a pre-populated renewal request message. This allowed us to observe whether participants noticed the renewal link, how they interpreted what would happen next, and how easily they were able to move from Medications into Secure Messaging to complete the request. We also tested an error state where the renewal message was not pre-populated. This helped us understand how participants responded to missing information, how confident they felt continuing without guidance, and whether this experience introduced hesitation or reduced trust in the flow.

---

### <a name="goals"></a>Research goals

The goals of this research were to:

1. Evaluate whether Veterans understand the meaning of the new prescription statuses and identify which statuses or label elements cause confusion or misinterpretation.
2. Evaluate whether Veterans can successfully and efficiently use the new Secure messaging renewal flow on VA.gov to request renewals, and identify where they struggle or drop off.
3. Identify pain points, uncertainties, and other usability issues in the new renewal flow and status messaging that can reasonably be addressed through design and content changes.

### Research questions
1. Do Veterans understand the revised prescription statuses as we intend, and if not, how are they interpreting them (especially around refill vs. renewal)?

2. Can Veterans successfully and easily complete a medication renewal request using the new Secure Messaging flow on VA.gov, from entry point through confirmation?

3. At what points in the renewal flow or when viewing statuses do Veterans feel uncertain, confused, or stuck, and what is driving that confusion (e.g., wording, layout, navigation)?

4. What aspects of the new statuses and renewal flow (e.g., clarity of language, visibility of key information, guidance on next steps) make the experience easier or more reassuring for Veterans?

5. What changes or improvements do Veterans suggest to the statuses, messaging, or renewal flow to better support how they actually manage their medications today?
---

### <a name="testing"></a>Screens and paths used in testing (Figma and Staging)

This research used a combination of a Figma prototype and a staging test environment to support different parts of the study.

#### Figma: Medication status evaluation

A prototype was used to focus on how Veterans noticed and interpreted medication status labels across different medication states, without requiring them to complete a renewal task.

<img
  width="600"
  alt="Medication list showing prescription status variations"
  src="https://github.com/user-attachments/assets/829fbc55-5813-408b-93cd-e65b1561ec78"
/>

- Expanded filter view showing medication statuses
- Medication list with individual medication cards each displaying a different status (Active, In Progress, or Expired)
- Medication cards shown both with and without a visible "send a renewal request message" link

---

#### Staging: Secure messaging renewal flow

A staging environment was used to walk through the end-to-end prescription renewal flow starting in the Medications list, routing into Secure Messaging, and returning to the Medications list after the message was successfully sent.

<img width="2874" height="1774" alt="image" src="https://github.com/user-attachments/assets/e7df5640-f9f2-4a06-a458-53ab68c6c551" />

1. Medications list with an eligible prescription card displaying a “Send a renewal request” link
2. Exit modal informing the Veteran they are leaving the Medications tool to send a secure message
3. Care team selection screen in Secure messaging after initiating the renewal request
4. Pre-populated renewal message in Secure messaging including medication details
5. Success alert displayed after the Veteran is routed back to the Medications list page confirming the renewal request message was sent

---

## <a name="insights"></a>Insights

### <a name="insight-1"></a>Insight 1:
---

### <a name="insight-2"></a>Insight 2:
---

### <a name="insight-3"></a>Insight 3:
---

### <a name="insight-4"></a>Insight 4:
---

### <a name="insight-5"></a>Insight 5:
---

## <a name="recommendations"></a>Recommendations

1. **Recommendation:** 
2. **Recommendation:** 
3. **Recommendation:**  

---

## <a name="resources"></a>Resources

[Figma prototype for status testing](https://www.figma.com/proto/puYUxsa9cW7KsKDc1ztAOf/Status-Testing?page-id=0%3A1&node-id=1-5845&viewport=243%2C67%2C0.47&t=TX8HR32UqWDF5uF1-1&scaling=min-zoom)
