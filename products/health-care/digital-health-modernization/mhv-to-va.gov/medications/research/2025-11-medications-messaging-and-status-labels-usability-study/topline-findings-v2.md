# Topline Findings: Medication renewal flow and prescription statuses comprehension study

**Authors:** Athena Bozak, Anneka VanGarza, Cara Frissell  
**Date:** January 6, 2026

---

## On this page
- [Context](#context)
  - [Background](#background)
  - [Overview](#overview)
  - [Research goals and questions](#research-goals-and-questions)
  - [What we learned across research questions](#research-question-coverage)
  - [Screens and paths used in testing](#screens-and-paths-used-in-testing)
- [Insights](#insights)
  - [Insight 1: Status labels were understood, but timing and actions were less clear](#insight-1-status-labels-were-understood-but-timing-and-actions-were-less-clear)
  - [Insight 2: Renewal link discovery varied and often followed familiar paths](#insight-2-renewal-link-discovery-varied-and-often-followed-familiar-paths)
  - [Insight 3: Provider selection introduced uncertainty](#insight-3-provider-selection-introduced-uncertainty)
  - [Insight 4: Prefilled messages supported completion, while missing information disrupted flow](#insight-4-prefilled-messages-supported-completion-while-missing-information-disrupted-flow)
  - [Insight 5: Confirmation cues were not consistently noticed or trusted](#insight-5-confirmation-cues-were-not-consistently-noticed-or-trusted)
- [Experience-wide insights](#experience-wide-insights)
- [Recommendations](#recommendations)
- [Research question mapping](#research-question-mapping)
- [Resources](#resources)

---

## <a name="context"></a>Context

### <a name="background"></a>Background

We are building a new authenticated prescription renewal request flow on VA.gov (via Secure Messaging) to reduce Veterans’ dependence on phone calls and ad hoc communication for renewals. We are also introducing a simplified set of prescription status labels across Oracle Health and VistA to replace existing VistA statuses that are frequently cited as confusing or misleading.

This experience lives within authenticated VA.gov, specifically the Medications management and Secure Messaging experiences within My HealtheVet on VA.gov. The work builds on tools that many Veterans already use. The updated status labels and renewal flow are iterations on existing functionality, not a new product.

---

### <a name="overview"></a>Overview

We conducted remote moderated usability sessions with **12 Veterans** to explore how they interpret prescription status labels and how comfortably they can request a medication renewal using Secure Messaging on VA.gov.

Sessions lasted 60 minutes and followed a think-aloud approach using a Figma prototype and a staging test environment. In addition to task success, this research focused on moments of uncertainty, hesitation, and friction.

Sessions were split into two parts:

**Part 1: Reviewing prescription statuses**  
Participants reviewed medication list screens featuring updated status labels and described what stood out, how they understood each status, and what actions they believed were available.

**Part 2: Requesting a prescription renewal**  
Participants attempted to request a renewal starting from the Medications tool and were routed into Secure Messaging with a prefilled message. A second scenario tested the same flow without prefilled medication details.

---

### <a name="research-goals-and-questions"></a>Research goals and questions

#### Research goals
1. Evaluate whether Veterans understand prescription statuses and where confusion occurs  
2. Evaluate whether Veterans can successfully use the Secure Messaging renewal flow  
3. Identify usability issues that can be addressed through design or content changes  

#### Research questions
1. Do Veterans understand prescription statuses as intended?  
2. Can Veterans complete a renewal request from entry point through confirmation?  
3. Where do Veterans feel uncertain or hesitate?  
4. What aspects of the experience feel clear or reassuring?  
5. What improvements do Veterans suggest?

---

### <a name="research-question-coverage"></a>What we learned across research questions

This study addressed all five research questions. Veterans generally understood prescription status labels, but uncertainty emerged around timing, actionability, and next steps. Most participants completed the renewal flow, though confidence varied based on discovery of the renewal link, presence of prefilled information, and clarity of confirmation.

---

### <a name="screens-and-paths-used-in-testing"></a>Screens and paths used in testing

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

## <a name="insights"></a>Insights

### <a name="insight-1-status-labels-were-understood-but-timing-and-actions-were-less-clear"></a>Insight 1: Status labels were understood, but timing and actions were less clear

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
- **1 participant (P6)** expressed reduced trust based on past experience  

*“Someone is working on it… after it’s done it should be shipped.”* (P1)  
*“I don’t trust in-progress… it went on way too long.”* (P6)

#### Inactive

All **11 of 11 participants** understood **Inactive** as no longer refillable.

- **9 participants** associated Inactive with needing provider follow-up  
- Older or duplicate inactive medications increased cognitive load  

*“You need to call doctor to get a new script.”* (P5)  
*“I got all these medications I used to take… but they’re still there.”* (P5)

---

### <a name="insight-2-renewal-link-discovery-varied-and-often-followed-familiar-paths"></a>Insight 2: Renewal link discovery varied and often followed familiar paths

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

For several participants, the **Start a refill request** CTA acted as a competing entry point. When the medication did not appear there, this led to confusion and task detours, including navigating away from Medications to message a provider. Some participants treated refill and renewal entry points as interchangeable, reflecting uncertainty about which action was appropriate.

---

### <a name="insight-3-provider-selection-introduced-uncertainty"></a>Insight 3: Provider selection introduced uncertainty

Most participants proceeded through provider selection, but several expressed uncertainty about who should receive the request.

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

### <a name="insight-4-prefilled-messages-supported-completion-while-missing-information-disrupted-flow"></a>Insight 4: Prefilled messages supported completion, while missing information disrupted flow

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

### <a name="insight-5-confirmation-cues-were-not-consistently-noticed-or-trusted"></a>Insight 5: Confirmation cues were not consistently noticed or trusted

- **9 of 12 participants** noticed the success alert  
- **3 participants** sought confirmation elsewhere  

*“It says Message sent.”*  
*“I went to messages to confirm it was sent.”* (P1)  
*“Just knowing whether the message went through.”* (P12)

Participants inferred next steps based on past experience.

*“Once the doc approves it, it should appear as in progress.”*  
*“It will take up to three days for the status to change.”*

---

## <a name="experience-wide-insights"></a>Experience-wide insights

Most participants described the experience as familiar or routine.

- **8 of 12 participants** said it was easy or intuitive  

*“It was awesome… easy… simple… to the point.”*  
*“Pretty simple, once you do it a few times.”*

Opportunities remain to reduce cognitive load from inactive medications and clarify status progression.

*“I don’t want to see all those… it’s convoluted.”*  
*“Instead of just ‘In progress,’ say getting ready to ship.”*

---

## <a name="recommendations"></a>Recommendations

- Explore ways to make renewal actions easier to notice  
- Clarify where renewal requests are routed  
- Continue leveraging prefilled medication details  
- Improve communication when information is missing  
- Strengthen confirmation and next-step feedback  
- Reduce cognitive load from inactive medications  
- Clarify refill versus renewal at the point of action  

---

## <a name="research-question-mapping"></a>Research question mapping

| Area | RQ1 | RQ2 | RQ3 | RQ4 | RQ5 |
|------|-----|-----|-----|-----|-----|
| Status labels and timing clarity | ✓ |  | ✓ |  | ✓ |
| Renewal link discovery |  | ✓ | ✓ |  | ✓ |
| Provider selection |  | ✓ | ✓ |  | ✓ |
| Prefilled vs missing information |  | ✓ | ✓ | ✓ | ✓ |
| Confirmation and next steps |  | ✓ | ✓ | ✓ | ✓ |
| Experience-wide clutter and clarity | ✓ |  | ✓ |  | ✓ |

---

## <a name="resources"></a>Resources

- Figma prototype  
- Task-level analysis
