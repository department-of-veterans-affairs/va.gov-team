# **Topline Findings: Medication statuses and Secure Messaging renewal flow**

**Authors:** Athena Bozak, Anneka VanGarza, Cara Frissell  
**Date:** January 1, 2026

---

## On this page
- [Context](#context)
  - [Background](#background)
  - [Overview](#overview)
  - [Research goals](#goals)
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

We conducted remote, moderated usability sessions with **12 Veterans** to better understand how they interpret new prescription status labels and how confidently they can request a prescription renewal using Secure messaging on VA.gov. Sessions were 60 minutes and followed a think-aloud approach, using Figma prototypes and a staging test environment.

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

---

### <a name="testing"></a>Screens and paths used in testing

This study used a combination of **Figma prototypes** and a **staging test environment** to support different parts of the evaluation.

#### Version A: Medication status evaluation (Figma)
  
A Figma prototype was used to focus on how Veterans noticed and interpreted medication status labels across different medication states, without requiring them to complete a renewal task.

<!-- INSERT FIGMA SCREENSHOTS HERE -->
<img width="900" alt="Medication list showing revised status labels" src="LINK" />
<img width="900" alt="Medication list showing expired status variation" src="LINK" />

**Screens and states included:**
- Medication list with revised status labels  
- Variations across Active, In Progress, and Expired/Inactive statuses  
- Status messaging shown both with and without a visible renewal link
  
---

#### Version B: Secure Messaging renewal flow (staging)

A staging test environment was used to walk through the end-to-end prescription renewal flow, beginning in the Medications tool and continuing into Secure Messaging.

<!-- INSERT STAGING SCREENSHOTS HERE -->
<img width="900" alt="Renewal entry point from medication details" src="LINK" />
<img width="900" alt="Secure Messaging renewal message composition" src="LINK" />
<img width="900" alt="Renewal confirmation state" src="LINK" />

**Screens and states included:**
- Medication list and details pages with renewal entry points  
- Secure Messaging renewal message composition (pre-populated and non-pre-populated states)  
- Confirmation states after submitting a renewal request  
- Error or missing-information states encountered during the flow  

---

## <a name="insights"></a>Insights

> Insights summarize observed patterns in participant behavior and feedback. Each insight connects back to one or more research goals.

### <a name="insight-1"></a>Insight 1: [Insight title]

[Insight summary]

---

### <a name="insight-2"></a>Insight 2: [Insight title]

[Insight summary]

---

### <a name="insight-3"></a>Insight 3: [Insight title]

[Insight summary]

---

### <a name="insight-4"></a>Insight 4: [Insight title]

[Insight summary]

---

### <a name="insight-5"></a>Insight 5: [Insight title]

[Insight summary]

---

## <a name="recommendations"></a>Recommendations

1. **Recommendation:** [Actionable recommendation tied to insights]  
2. **Recommendation:** [Actionable recommendation tied to insights]  
3. **Recommendation:** [Actionable recommendation tied to insights]  

---

## <a name="resources"></a>Resources

[Figma prototype for status testing](https://www.figma.com/proto/puYUxsa9cW7KsKDc1ztAOf/Status-Testing?page-id=0%3A1&node-id=1-5845&viewport=243%2C67%2C0.47&t=TX8HR32UqWDF5uF1-1&scaling=min-zoom)
