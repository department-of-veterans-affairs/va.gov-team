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

We are building a new authenticated prescription renewal request flow on VA.gov (via Secure Messaging) to reduce Veterans’ dependence on phone calls and ad-hoc communication for renewals. We are also introducing a new, simplified set of prescription status labels across Oracle Health and VistA to replace existing VistA statuses that are frequently cited as confusing or misleading. We need to understand whether these changes improve Veterans’ ability to understand medication state and manage renewals independently.

The product is situated within authenticated VA.gov, specifically the medications management and Secure Messaging experiences within My HealtheVet on VA.gov. The experience builds on existing My HealtheVet and VA.gov medications and Secure Messaging tools that many Veterans already use. The status labels and the specific renewal flow design are new iterations on existing functionality, not an entirely new product.

---

### <a name="overview"></a>Overview

We conducted remote, moderated usability testing sessions with **12 Veterans** to evaluate how they understand new prescription status labels and use the Secure Messaging–based prescription renewal flow on VA.gov.

Sessions were 60 minutes and used a think-aloud approach, combining a staging environment test user and Figma prototypes to cover both interactions and additional scenarios that could not be reliably tested in staging.

Sessions were divided into two primary parts:

**Part 1: Participants reviewed prescription statuses**  
Participants reviewed medication list screens featuring the new prescription status labels and described what they noticed, how they interpreted each status, and what actions they believed were available. This helped us understand Veterans’ mental models around medication state and where status language or presentation caused confusion or misinterpretation.

**Part 2: Participants attempted to request a prescription renewal**  
Participants attempted to request a medication renewal using the Secure Messaging–based flow, from entry point through confirmation, using a staging test user where the flow was fully functional. A Figma prototype was used to explore additional status and renewal scenarios. This helped us understand whether Veterans could successfully complete the renewal request, where they struggled or hesitated, and what aspects of the flow influenced confidence or uncertainty.

---

### <a name="goals"></a>Research goals

The goals of this research were to:

1. Evaluate whether Veterans understand the meaning of the new prescription statuses and identify which statuses or label elements cause confusion or misinterpretation.

2. Evaluate whether Veterans can successfully and efficiently use the new Secure Messaging renewal flow on VA.gov to request renewals, and identify where they struggle or drop off.

3. Identify pain points, uncertainties, and other usability issues in the new renewal flow and status messaging that can reasonably be addressed through design and content changes.

---

### <a name="testing"></a>Screens and paths used in testing

This study used a combination of **Figma prototypes** and a **staging test environment** to evaluate Veterans’ understanding of medication statuses and their ability to complete a prescription renewal request via Secure Messaging.

#### Version A: Medication status evaluation (Figma)

**Description:**  
Figma prototypes were used to evaluate how Veterans noticed and interpreted medication status labels across different medication states.

<!-- INSERT FIGMA SCREENSHOTS HERE -->
<img width="900" alt="Medication list showing revised status labels" src="LINK" />
<img width="900" alt="Medication list showing expired status variation" src="LINK" />

**Screens and states included:**
- Medication list with revised status labels
- Variations across Active, In Progress, and Expired/Inactive statuses
- Status messaging presented with and without associated actions

---

#### Version B: Secure Messaging renewal flow (staging)

**Description:**  
A staging test environment was used to walk through the end-to-end prescription renewal flow via Secure Messaging, including key steps and potential error states.

<!-- INSERT STAGING SCREENSHOTS HERE -->
<img width="900" alt="Renewal entry point from medication details" src="LINK" />
<img width="900" alt="Secure Messaging renewal message composition" src="LINK" />
<img width="900" alt="Renewal confirmation state" src="LINK" />

**Screens and states included:**
- Medication list and details pages with renewal entry points
- Secure Messaging renewal message composition
- Confirmation states after submitting a renewal request
- Error or missing-information states encountered during the flow

---

## <a name="insights"></a>Insights

> Insights summarize observed patterns in participant behavior and feedback. Each insight should connect back to one or more research goals.

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

## <a name="options"></a>Resources

[Figma prototype for status testing](https://www.figma.com/proto/puYUxsa9cW7KsKDc1ztAOf/Status-Testing?page-id=0%3A1&node-id=1-5845&viewport=243%2C67%2C0.47&t=TX8HR32UqWDF5uF1-1&scaling=min-zoom)

