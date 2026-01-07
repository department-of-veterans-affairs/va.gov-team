# Topline Findings: Medication renewal flow and prescription statuses study

**Authors:** Athena Bozak, Anneka VanGarza, Cara Frissell  
**Date:** January 6, 2026

---

## On this page
- [Context](#context)
  - [Background](#background)
  - [Overview](#overview)
  - [Research goals and questions](#research-goals-and-questions)
  - [Screens and paths used in testing](#screens-and-paths-used-in-testing)
  - [Summary of key findings](#summary-of-key-findings)
- [Insights](#insights)
  - [Insight 1: Status labels were generally understood, with questions about timing and actions](#insight-1-status-labels-were-generally-understood-with-questions-about-timing-and-actions)
  - [Insight 2: Renewal link discovery varied and often followed familiar paths](#insight-2-renewal-link-discovery-varied-and-often-followed-familiar-paths)
  - [Insight 3: Participants had questions about who would receive the renewal request](#insight-3-participants-had-questions-about-who-would-receive-the-renewal-request)
  - [Insight 4: Prefilled messages supported completion; missing information slowed progress](#insight-4-prefilled-messages-supported-completion-missing-information-slowed-progress)
  - [Insight 5: Confirmation cues were not consistently noticed](#insight-5-confirmation-cues-were-not-consistently-noticed)
- [Experience-wide insights](#experience-wide-insights)
- [Recommendations](#recommendations)
- [Research question mapping](#research-question-mapping)
- [Resources](#resources)

---

## Context

### Background

We are building a new authenticated prescription renewal request flow on VA.gov (via Secure messaging) to reduce Veterans’ dependence on phone calls and ad hoc communication for renewals. We are also introducing a simplified set of prescription status labels across Oracle Health and VistA to replace existing VistA statuses that are frequently cited as confusing or misleading.

This experience lives within authenticated VA.gov, specifically the Medications management and Secure messaging experiences within My Healthevet on VA.gov. The work builds on tools that many Veterans already use. The updated status labels and renewal flow are iterations on existing functionality, not a new product.

---

### Overview

We conducted remote moderated usability sessions with **12 Veterans** to explore how they interpret prescription status labels and how comfortably they can request a medication renewal using Secure Messaging on VA.gov.

Sessions lasted 60 minutes and followed a think-aloud approach using a Figma prototype and a staging test environment. In addition to task success, this research focused on moments of uncertainty, hesitation, and friction.

Sessions were split into two parts:

**Part 1: Reviewing prescription statuses**  
Participants reviewed medication list screens featuring updated status labels and described what stood out, how they understood each status, and what actions they believed were available.

**Part 2: Requesting a prescription renewal**  
Participants attempted to request a renewal starting from the Medications tool and were routed into Secure Messaging with a prefilled message. A second scenario tested the same flow without prefilled medication details.

---

### Research goals and questions

#### Research goals
1. Evaluate whether Veterans understand the meaning of the new prescription statuses and identify which statuses or label elements cause confusion or misinterpretation.
2. Evaluate whether Veterans can successfully and efficiently use the new Secure Messaging renewal flow on VA.gov to request renewals, and identify where they struggle or drop off.
3. Identify pain points, uncertainties, and other usability issues in the new renewal flow and status messaging that can reasonably be addressed through design and content changes.

#### Research questions
1. Do Veterans understand the revised prescription statuses as we intend, and if not, how are they interpreting them (especially around refill vs. renewal)?
2. Can Veterans successfully and easily complete a medication renewal request using the new Secure Messaging flow on VA.gov, from entry point through confirmation?
3. At what points in the renewal flow or when viewing statuses do Veterans feel uncertain, confused, or stuck, and what is driving that confusion (e.g., wording, layout, navigation)?
4. What aspects of the new statuses and renewal flow (e.g., clarity of language, visibility of key information, guidance on next steps) make the experience easier or more reassuring for Veterans?
5. What changes or improvements do Veterans suggest to the statuses, messaging, or renewal flow to better support how they actually manage their medications today?

---

### Screens and paths used in testing

Testing used a combination of a Figma prototype (status evaluation) and a staging environment (renewal flow).

#### Figma: Medication status evaluation

<img
  width="600"
  alt="Medication list showing prescription status variations"
  src="https://github.com/user-attachments/assets/829fbc55-5813-408b-93cd-e65b1561ec78"
/>

- Expanded filter view showing medication statuses  
- Medication list with individual medication cards displaying different statuses  
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

### Summary of key findings

This study addressed all five research questions.

Veterans generally understood the prescription status labels, though questions emerged around timing, what actions were available, and what would happen next. Most participants were able to complete the renewal flow once they found the appropriate entry point, but the path they took varied based on prior habits and expectations.

Participants’ sense of confidence was shaped by several factors, including how easily they noticed the renewal link, whether it was clear who would receive the request, the presence of prefilled information, and the visibility of confirmation cues after sending a message. Overall, differences in experience were driven more by way-finding and mental models than by difficulty completing the renewal request itself.

---

## Insights
Note: Not all participants completed every task. Task-level counts vary due to prototype and staging constraints that occasionally limited access to specific screens or flows.

### Insight 1: Status labels were generally understood, with questions about timing and actions

Participants generally understood what each prescription status meant, but questions emerged around how long statuses last, when action is needed, and what actions are available.

#### Active

All **11 of 11 participants** understood **Active** as a medication they are currently taking.

- **7 of 11 participants** assumed Active implied refillability  
- **4 of 11 participants** viewed Active as informational only  
- Several participants wanted clearer signals when no refills remained  

*“Something’s active, so you have refills.”* (P1)  
*“What I don’t see is whether it has refills.”* (P12)

#### In Progress

All **11 of 11 participants** interpreted **In Progress** as a medication being actively worked on.

- **9 participants** expected it to be short-lived  
- **1 participant (P6)** described reduced confidence based on a past experience  

*“Someone is working on it… after it’s done it should be shipped.”* (P1)  
*“I don’t trust in-progress… it went on way too long.”* (P6)

#### Inactive

All **11 of 11 participants** understood **Inactive** as no longer refillable.

- **9 participants** associated Inactive with needing provider follow-up  
- Older or duplicate inactive medications increased cognitive load  

*“You need to call doctor to get a new script.”* (P5)  
*“I got all these medications I used to take… but they’re still there.”* (P5)

---

### Insight 2: Renewal link discovery varied and often followed familiar paths

Participants varied in how easily they discovered the renewal link, often defaulting to familiar paths first. Discovery of the renewal link was mixed and strongly shaped by participants’ existing mental models for requesting medications.

**7 of 12 participants** noticed the renewal link organically once they reached the correct medication card. These participants typically scrolled through the medication list and interpreted the link as a natural next step for getting more medication.

*“That’s… I’ve not seen that before, that’s a new thing for me.”*  
*“It says Send a renewal request message, I don’t think I’ve seen that!”*

**5 of 12 participants** did not initially notice the renewal link and instead relied on familiar behaviors, including:

- Using the **Start a refill request** CTA  
- Navigating directly to **Secure Messaging**  
- Looking for a **phone number to call**  
- Scrolling the page without recognizing the renewal link as actionable  

*“I would just send a secure message.”*  
*“Send a secure message to your care team.”*

For several participants, the **Start a refill request** CTA acted as a competing entry point. When the medication did not appear there, this led to confusion and task detours, including navigating away from Medications to message a provider. Some participants treated refill and renewal entry points as interchangeable.

---

### Insight 3: Participants had questions about who would receive the renewal request

Most participants proceeded through provider selection, but several expressed questions about who would receive the request.

*“Hopefully it’s my doctor, but it doesn’t tell you.”* (P1)  
*“I don’t know who it directs it to.”* (P2)

Participants often relied on medication type to infer the correct care team.

#### Modal as a transition to Secure Messaging

Most participants understood the modal as an informational transition and continued without hesitation.

*“It means I’m going to a different screen, but I’m still logged in.”*  
*“It’s telling me I’m leaving this page.”*  
*“Instead of me coming out of the medication and going into the messages, it put me in there.”*

A small number briefly questioned whether it was a warning or error.

*“I always wonder if it’s just a warning or if I did something wrong.”*  
*“I appreciate having a message letting me know I’m going to a different page.”*

---

### Insight 4: Prefilled messages supported completion; missing information slowed progress

**10 of 12 participants** explicitly noticed and valued the prefilled message.

*“Oh everything’s already there, I love it.”* (P1)  
*“That saves people a lot of time.”* (P2)

All **12 participants** reviewed at least part of the prefilled content.

- **9 participants** sent the message as-is  
- **3 participants** wanted optional personalization  

*“I’d just send it and be done with it.”*  
*“Everything is already there.”*  
*“I would add my phone number for faster processing.”*

When medication details were missing, participants hesitated and expressed uncertainty about whether they could proceed without additional information.

*“There’s nothing to be sent.”* (P1)  
*“You don’t know the medication unless you have it with you.”* (P2)

---

### Insight 5: Confirmation cues were not consistently noticed

- **9 of 12 participants** noticed the success alert  
- **3 participants** sought confirmation elsewhere  

*“It says Message sent.”*  
*“I went to messages to confirm it was sent.”* (P1)  
*“Just knowing whether the message went through.”* (P12)

Participants inferred next steps based on past experience.

*“Once the doc approves it, it should appear as in progress.”*  
*“It will take up to three days for the status to change.”*

---

## Experience-wide insights

### Clear feedback and familiar patterns helped resolve moments of uncertainty

Participants experienced moments of uncertainty at different points in the experience—most often related to who renewal requests were sent to, how prescription statuses worked, and what would happen next after taking an action. These moments were generally brief and situational rather than persistent, and reassurance typically came from clear feedback, automation, and familiar VA interaction patterns.

Most participants (**9 of 12: P1, P2, P3, P4, P5, P6, P9, P10, P12**) expressed at least one moment of uncertainty during the session. Common sources included:

- Distinguishing between **refill versus renewal** actions (P1, P2, P4)  
- Understanding **status transitions** such as *Inactive* or *In Progress* (P3, P6, P9)  
- Knowing **who would receive a renewal request** (P1, P2)  
- Not seeing expected medications due to **filters being applied** or viewing a **refill-only list** instead of the full medications list (P1, P2, P5, P10)

*“I don’t know who it directs it to.”*  
*“It could get confusing if there is a difference between them [refill vs renewal].”*

---

### Automation and confirmation cues increased confidence

Reassurance most often came from automation and clear feedback rather than explanatory text alone. The prefilled renewal message was repeatedly described as calming and confidence-building (**P1, P2, P4, P9, P11**), particularly when it included the medication name and provider details.

*“Everything’s already there, I love it.”*  
*“That saves people a lot of time.”*

Visible confirmation cues also helped reduce doubt. Several participants described the green *“Message sent”* alert as a clear signal that their request had gone through.

*“Seems very intuitive and very basic.”*  
*“When it says message sent, it went… 99% of the time.”*

---

### Overall impressions were positive, with consistent opportunities to reduce cognitive load

Participants generally described the medication statuses and renewal flow as familiar and easy to use, especially when compared to past VA experiences. Most felt confident completing the renewal request and did not view the flow itself as difficult.

**8 of 12 participants** (**P1, P2, P4, P5, P6, P9, P10, P14**) described the overall experience as easy, simple, or intuitive.

*“It was awesome… easy… simple… to the point.”*  
*“Pretty simple, once you do it a few times.”*  
*“Seems very intuitive and very basic.”*

At the same time, participants consistently identified opportunities to reduce cognitive load and improve clarity—particularly around information density and wayfinding. Several participants (**P1, P3, P6, P9**) found very old, inactive, or duplicate medications overwhelming and suggested clearer separation or alternative organization for inactive medications.

*“I don’t want to see all those… it’s convoluted.”*  
*“You can have a separate screen for inactive medications.”*

---

### Clearer status progression and stronger visual cues were common suggestions

Clarity around status progression and timing was a recurring theme. Participants wanted clearer indicators for what *“In Progress”* means, whether shipping has started, and when to expect the next update (**P1, P4, P5**).

*“Instead of just ‘In progress,’ say getting ready to ship.”*  
*“Show me the progress...really that simple.”*

Several participants also suggested stronger visual emphasis and clearer guidance for actions, including making CTAs more prominent, clarifying the difference between refill and renewal, and surfacing renewal actions more clearly within the medications list (**P2, P6**).

*“Making them a little bit bigger [CTAs] would help.”*  
*“Maybe just… the difference between refill and renewal.”*

---

### Familiarity reduced friction for experienced users

A smaller group of participants (**P8, P14**) reported little to no confusion at any point, describing the experience as fully familiar based on prior use of VA tools. For these participants, the renewal flow largely met expectations without requiring additional guidance.

*“So far, it’s already familiar.”*  
*“Nothing. No… I love this system. It works very well.”*

---

## Recommendations

- Explore ways to make renewal actions easier to notice  
- Clarify where renewal requests are routed  
- Continue leveraging prefilled medication details  
- Improve communication when information is missing  
- Strengthen confirmation and next-step feedback  
- Reduce cognitive load from inactive medications  
- Clarify refill versus renewal at the point of action  

---

## Research question mapping

| Area | RQ1 | RQ2 | RQ3 | RQ4 | RQ5 |
|------|-----|-----|-----|-----|-----|
| Status labels and timing clarity | ✓ |  | ✓ |  | ✓ |
| Renewal link discovery | ✓ | ✓ | ✓ |  | ✓ |
| Provider selection and routing clarity |  | ✓ | ✓ | ✓ | ✓ |
| Prefilled vs missing information |  | ✓ | ✓ | ✓ | ✓ |
| Confirmation and next steps |  | ✓ | ✓ | ✓ | ✓ |
| Experience-wide clutter and clarity | ✓ |  | ✓ |  | ✓ |

---

## Resources

- Figma prototype  
- [Task-level findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medications/research/2025-11-medications-messaging-and-status-labels-usability-study/task-level-findings.md)
