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
  - [Insight 1: Prescription statuses were largely understood; refill vs. renewal understanding varied](#insight-1-prescription-statuses-were-largely-understood-refill-vs-renewal-understanding-varied)
  - [Insight 2: Renewal link discovery varied and often followed familiar paths](#insight-2-renewal-link-discovery-varied-and-often-followed-familiar-paths)
  - [Insight 3: Participants had questions about who would receive the renewal request](#insight-3-participants-had-questions-about-who-would-receive-the-renewal-request)
  - [Insight 4: Prefilled messages supported completion, but missing information caused participants to stumble](#insight-4-prefilled-messages-supported-completion-but-missing-information-caused-participants-to-stumble)
  - [Insight 5: Confirmation cues were generally noticed and increased confidence, but did not fully resolve uncertainty](#insight-5-confirmation-cues-were-generally-noticed-and-increased-confidence-but-did-not-fully-resolve-uncertainty)
- [Experience-wide insights](#experience-wide-insights)
- [Recommendations](#recommendations)
- [Research question mapping](#research-question-mapping)
- [Resources](#resources)

---

## <a name="context"></a>Context

### <a name="background"></a>Background

We are building a new authenticated prescription renewal request flow on VA.gov (via Secure messaging) to reduce Veterans’ dependence on phone calls and ad hoc communication for renewals. We are also introducing a simplified set of prescription status labels across Oracle Health and VistA to replace existing VistA statuses that are frequently cited as confusing or misleading.

This experience lives within authenticated VA.gov, specifically the Medications management and Secure messaging experiences within My HealtheVet on VA.gov. The work builds on tools that many Veterans already use. The updated status labels and renewal flow are iterations on existing functionality, not a new product.

---

### <a name="overview"></a>Overview

We conducted remote moderated usability sessions with **12 Veterans** to explore how they interpret prescription status labels and how comfortably they can request a medication renewal using Secure Messaging on VA.gov.

Sessions lasted 60 minutes and followed a think-aloud approach using a Figma prototype and a staging test environment. In addition to task success, this research focused on moments of uncertainty, hesitation, and friction.

**Study structure**

- **Part 1: Reviewing prescription statuses**  
  Participants reviewed medication list screens featuring updated status labels and described what stood out, how they understood each status, and what actions they believed were available.

- **Part 2: Requesting a prescription renewal**  
  Participants attempted to request a renewal starting from the Medications tool and were routed into Secure Messaging with a prefilled message. A second scenario tested the same flow without prefilled medication details.

---

### <a name="research-goals-and-questions"></a>Research goals and questions

#### Research goals
1. Evaluate whether Veterans understand the meaning of the new prescription statuses and identify which statuses or label elements cause confusion or misinterpretation.
2. Evaluate whether Veterans can successfully and efficiently use the Secure Messaging renewal flow on VA.gov to request renewals, and identify where they struggle or drop off.
3. Identify pain points, uncertainties, and other usability issues that can reasonably be addressed through design or content changes.

#### Research questions
1. Do Veterans understand the revised prescription statuses as intended, particularly around refill vs. renewal?
2. Can Veterans successfully complete a medication renewal request using Secure Messaging from entry point through confirmation?
3. Where do Veterans feel uncertain, confused, or stuck—and why?
4. What aspects of the experience are most reassuring or supportive?
5. What improvements would better support how Veterans manage medications today?

---

### <a name="screens-and-paths-used-in-testing"></a>Screens and paths used in testing

#### Figma: Medication status evaluation

<img
  width="600"
  alt="Medication list showing prescription status variations"
  src="https://github.com/user-attachments/assets/829fbc55-5813-408b-93cd-e65b1561ec78"
/>

- Expanded filter view showing medication statuses  
- Medication list with individual medication cards  
- Medication cards shown with and without a visible **Send a renewal request message** link  

---

#### Staging: Secure Messaging renewal flow

<img
  width="100%"
  alt="Secure Messaging renewal flow screens"
  src="https://github.com/user-attachments/assets/e7df5640-f9f2-4a06-a458-53ab68c6c551"
/>

1. Medications list with an eligible prescription card  
2. Exit modal indicating the Veteran is leaving Medications  
3. Care team selection screen  
4. Prefilled renewal request message  
5. Success alert confirming the request was sent  

---

### <a name="summary-of-key-findings"></a>Summary of key findings

Veterans generally understood prescription status labels, but clarity broke down around timing, available actions, and what would happen next. Most participants were able to complete the renewal flow once they found the correct entry point, though paths varied based on prior habits and expectations.

Confidence was shaped by link visibility, clarity around provider routing, the presence of prefilled information, and confirmation cues. Differences in experience were driven more by mental models and wayfinding than by difficulty completing the renewal request itself.

---

## <a name="insights"></a>Insights

*Note: Not all participants completed every task. Task-level counts vary due to prototype and staging constraints that occasionally limited access to specific screens or flows.*

---

### <a name="insight-1-prescription-statuses-were-largely-understood-refill-vs-renewal-understanding-varied"></a>Insight 1: Prescription statuses were largely understood; refill vs. renewal understanding varied

**Veterans understood what prescription statuses meant, but did not always understand what actions were available or when to take them.**

#### Active

All **11 of 11 participants** understood **Active** as a medication they are currently taking.

- **7 of 11 participants** assumed Active implied refillability  
- **4 of 11 participants** viewed Active as informational only  
- Several participants wanted clearer signals when no refills remained  

*“Something’s active, so you have refills.”*  
*“What I don’t see is whether it has refills.”*

#### In Progress

All **11 of 11 participants** interpreted **In Progress** as a medication being actively worked on.

- **9 participants** expected it to be short-lived  
- **1 participant (P6)** described reduced confidence based on a past experience  

*“Someone is working on it… after it’s done it should be shipped.”*  
*“I don’t trust in-progress… it went on way too long [sharing prior experience].”*

#### Inactive

All **11 of 11 participants** understood **Inactive** as no longer refillable.

- **9 participants** associated Inactive with needing provider follow-up  
- Older or duplicate inactive medications increased cognitive load  

*“You need to call doctor to get a new script.”*  
*“I got all these medications I used to take… but they’re still there.”*

---

#### Refill vs. renewal comprehension was mixed

**Veterans had mixed understanding of the difference between refill and renewal. Some clearly differentiated the two, while others used the terms interchangeably.**

**8 of 12 participants** (P1, P3, P4, P6, P8, P9, P11, P12) clearly differentiated the two concepts. These participants generally described refill as continuing an existing prescription with refills remaining, and renewal as requiring provider review or action once refills had run out or a prescription had expired. Several framed renewal as involving the entire medication rather than an incremental refill.

*“Refill means you have refill medications and can order anytime.”*  
*“Renewal most likely I need a new order for it.”*  
*“…they know a renewal is the entire medication. A refill is, like, oh, they ran out of refills.”*  
*“Because some, some, medications expire.”*

**4 participants** (P2, P5, P10, P14) showed uncertainty or used the terms interchangeably. Some described renewal as simply “getting more medication,” were unsure who requests were routed to, or stated there was no meaningful difference between the two terms.

*“Refill and what? [renewal]”*  
*“Medication may or may not be active, however, you still may need the medication.”*  
*“Could be either one.”*  
*“Refill and renewal is basically the same thing.”*

---

### <a name="insight-2-renewal-link-discovery-varied-and-often-followed-familiar-paths"></a>Insight 2: Renewal link discovery varied and often followed familiar paths

**Veterans did not consistently notice the renewal link and often relied on familiar refill or messaging paths instead.**

Participants varied in how easily they discovered the renewal link, often defaulting to familiar paths first. Discovery of the renewal link was mixed and strongly shaped by participants’ existing mental models for requesting medications.

#### When Veterans found the renewal link

**7 of 12 participants** noticed the renewal link organically once they reached the correct medication card. These participants typically scrolled through the medication list and interpreted the link as a natural next step for getting more medication.

*“That’s… I’ve not seen that before, that’s a new thing for me.”*  
*“It says Send a renewal request message, I don’t think I’ve seen that!”*

For these participants, discovery occurred **within the Medications list**, without needing to navigate away from the page.

#### When Veterans did not find the renewal link

**5 of 12 participants** did not initially notice the renewal link and instead relied on familiar, previously learned behaviors to request medications. These participants did not recognize the renewal link as actionable or as something they had used before.

When the renewal link was not immediately visible or recognized, participants commonly:

- Used the **Start a refill request** CTA  
- Navigated directly to the **Secure messaging** tool to send a message outside of the renewal flow  
- Looked for a **phone number to call**  
- Scrolled the page without recognizing the renewal link as an available action  

*“I would just send a secure message.”*  
*“Send a secure message to your care team.”*

For several participants, the **Start a refill request** CTA acted as a competing entry point. When the medication did not appear there, this led to confusion and task detours, including navigating away from Medications to message a provider. Some participants treated refill and renewal entry points as interchangeable, relying on past experience rather than cues on the page to determine the correct path.

---

### <a name="insight-3-participants-had-questions-about-who-would-receive-the-renewal-request"></a>Insight 3: Participants had questions about who would receive the renewal request

**Veterans were able to proceed, but did not consistently understand who renewal requests were routed to.**

Most participants proceeded through provider selection, but several expressed questions about who would receive the request.

*“Hopefully it’s my doctor, but it doesn’t tell you.”*  
*“I don’t know who it directs it to.”*

Participants often relied on medication type to infer the correct care team.

#### Modal supported a clear transition to Secure messaging

**The modal effectively communicated a transition to Secure messaging and did not prevent participants from continuing the flow.**

Most participants interpreted the modal as informational and proceeded without hesitation.

*“It means I’m going to a different screen, but I’m still logged in.”*  
*“It’s telling me I’m leaving this page.”*  
*“Instead of me coming out of the medication and going into the messages, it put me in there.”*

A small number of participants briefly questioned whether the modal was a warning or error, but still continued.

*“I always wonder if it’s just a warning or if I did something wrong.”*  
*“I appreciate having a message letting me know I’m going to a different page.”*

---

### <a name="insight-4-prefilled-messages-supported-completion-but-missing-information-caused-participants-to-stumble"></a>Insight 4: Prefilled messages supported completion, but missing information caused participants to stumble

**Prefilled messages made the renewal process easier and more efficient; however, missing medication details introduced hesitation and briefly disrupted progress.**

**10 of 12 participants** explicitly noticed and valued the prefilled message.

*“Oh everything’s already there, I love it.”*  
*“That saves people a lot of time.”*

All **12 participants** reviewed at least part of the prefilled content.

- **9 participants** sent the message as-is  
- **3 participants** wanted optional personalization  

*“I’d just send it and be done with it.”*  
*“Everything is already there.”*  
*“I would add my phone number for faster processing.”*

When required medication details were missing, participants paused and questioned whether they could proceed, creating a brief but noticeable stumble in the flow.

*“There’s nothing to be sent.”*  
*“You don’t know the medication unless you have it with you.”*

---

### <a name="insight-5-confirmation-cues-were-generally-noticed-and-increased-confidence-but-did-not-fully-resolve-uncertainty"></a>Insight 5: Confirmation cues were generally noticed and increased confidence, but did not fully resolve uncertainty

**Pre-filled information and clear confirmation cues reassured most Veterans that their request was sent, however, some still sought additional reassurance or made assumptions about next steps that did not always match how the system works**

**9 of 12 participants** noticed the success alert and recognized it as confirmation that their request was sent.

*“It says Message sent.”*  
*“Just knowing whether the message went through.”*

Several participants described visible confirmation cues—such as the green *“Message sent”* alert—as a clear signal that their request had gone through.

*“Seems very intuitive and very basic.”*  
*“When it says message sent, it went… 99% of the time.”*

**3 participants** sought confirmation elsewhere, such as navigating to **Secure messaging** to verify the message had been sent.

*“I went to messages to confirm it was sent.”*

Even when confirmation cues were noticed, participants often relied on prior experience to infer what would happen next. These expectations did not always match the actual behavior of the renewal flow.

*“Once the doc approves it, it should appear as in progress.”*  
*“It will take up to three days for the status to change.”*

---

## <a name="experience-wide-insights"></a>Experience-wide insights

### Clear feedback and familiar patterns helped resolve moments of uncertainty

**Participants experienced moments of uncertainty at different points in the experience, most often related to who renewal requests were sent to, how prescription statuses worked, and what would happen next after taking an action. These moments were generally brief and situational rather than persistent, and reassurance typically came from clear feedback, automation, and familiar VA interaction patterns.**

Most participants (**9 of 12: P1, P2, P3, P4, P5, P6, P9, P10, P12**) expressed at least one moment of uncertainty during the session. Common sources included:

- Distinguishing between **refill versus renewal** actions (P1, P2, P4)  
- Understanding **status transitions** such as *Inactive* or *In Progress* (P3, P6, P9)  
- Knowing **who would receive a renewal request** (P1, P2)  
- Not seeing expected medications due to **filters being applied** or viewing a **refill-only list** instead of the full medications list (P1, P2, P5, P10)

*“I don’t know who it directs it to.”*  
*“It could get confusing if there is a difference between them [refill vs renewal].”*

---

### Overall impressions were positive, with consistent opportunities to reduce cognitive load

**Participants generally described the medication statuses and renewal flow as familiar and easy to use. Most felt confident completing the renewal request and did not view the flow itself as difficult.**

**8 of 12 participants** (**P1, P2, P4, P5, P6, P9, P10, P14**) described the overall experience as easy, simple, or intuitive.

*“It was awesome… easy… simple… to the point.”*  
*“Pretty simple, once you do it a few times.”*  
*“Seems very intuitive and very basic.”*

At the same time, participants consistently identified opportunities to reduce cognitive load and improve clarity—particularly around information density and wayfinding. Several participants (**P1, P3, P6, P9**) found very old, inactive, or duplicate medications overwhelming and suggested clearer separation or alternative organization for inactive medications.

*“I don’t want to see all those… it’s convoluted.”*  
*“You can have a separate screen for inactive medications.”*

---

### Familiarity reduced friction for experienced users

**A smaller group of participants (**P8, P14**) reported little to no confusion at any point, describing the experience as fully familiar based on prior use of VA tools. For these participants, the renewal flow largely met expectations without requiring additional guidance.**

*“So far, it’s already familiar.”*  
*“Nothing. No… I love this system. It works very well.”*

---

## <a name="recommendations"></a>Recommendations

**Clarify when to use refill vs renewal in the Medications experience:** Help Veterans understand the difference between refill and renewal and recognize when each is appropriate—supporting confident selection through clearer cues, such as surfacing refills remaining on med cards.

**Clarify where renewal requests are routed:** Provide clearer cues about who receives renewal requests so Veterans feel confident their message is reaching the right care team.

**Continue leveraging prefilled medication details:** Prefilled content consistently reduced effort and supported confidence during the renewal process.

**Set clearer expectations when additional information may be required:** Signal earlier when missing prescription information could affect progress, so Veterans can anticipate what’s needed.

**Provide clearer guidance after submitting a renewal request:** Use the confirmation alert to help Veterans understand what happens next (i.e., expected timing, whether a response is anticipated, and how status updates may appear.)

**Reduce cognitive load from inactive and historical medications:** Consider approaches such as default filters or clearer grouping that help Veterans focus on current, actionable prescriptions first.

---

## <a name="research-question-mapping"></a>Research question mapping

| Area | RQ1 | RQ2 | RQ3 | RQ4 | RQ5 |
|------|-----|-----|-----|-----|-----|
| Status labels and timing clarity | ✓ |  | ✓ |  | ✓ |
| Renewal link discovery | ✓ | ✓ | ✓ |  | ✓ |
| Provider routing clarity |  | ✓ | ✓ | ✓ | ✓ |
| Prefilled vs missing information |  | ✓ | ✓ | ✓ | ✓ |
| Confirmation and next steps |  | ✓ | ✓ | ✓ | ✓ |
| Cognitive load and clarity | ✓ |  | ✓ |  | ✓ |

---

## <a name="resources"></a>Resources

- Figma prototype  
- [Task-level findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medications/research/2025-11-medications-messaging-and-status-labels-usability-study/task-)
