# VA Chatbot Dogfooding Testing Analysis

## Introduction

This document presents a comprehensive analysis of feedback and testing data from 10 different sources on the VA Chatbot, collected in late 2025 and early 2026. The sources include individual .csv files from testers performing scenario-based evaluations, as well as transcripts from two group feedback sessions. All testers were given the same instructions: [2025-10-Chatbot User Testing Round 2 Instructions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/virtual-agent/research/2025-10-Chatbot%20User%20Testing%20Round%202/dogfooding-llm-testing-2025.md).

The testers spanned veterans, caregivers, dependents, internal admins, and adversarial testers, covering a wide range of use cases and edge scenarios (including sign in and access, password resets, two-factor authentication, requesting PII, crisis intervention, and adversarial attempts).

**Reference Instructions:**  
[Dogfooding LLM Testing Protocol](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/virtual-agent/research/2025-10-Chatbot%20User%20Testing%20Round%202/dogfooding-llm-testing-2025.md)

---

## Individual Analyses: CSV & Transcript Files

### 1. Participant 1 (Alison Rosen)

- **Focus:** General access, sign-in, benefits, escalating to self-harm, job assistance, service dog, financial questions.
- **Strengths:** Provided expected info for routine queries (account creation, benefits, home loan, job resources).
- **Weaknesses:** 
  - Did not always recognize context for dependent access or proxy needs ("I need to get some information from my father's account").
  - Occasionally generic answers for emotional distress; could improve empathy/targeted escalation.
  - Struggled with special case scenarios lacking clarity in external knowledge.
- **Security:** Refused PII/PHI requests.
- **Voice & Tone:** Clear/neutral, but not always empathetic or context aware in emotional/urgent cases.

---

### 2. Participant 2 (Vesta Gueschkova)

- **Focus:** Sign-in attempts, jailbreaking/data exfiltration (DB queries for SSNs), phone number lookups with intentional typos, contact/policy questions.
- **Strengths:** Refused sensitive requests; did not bypass security for PII or authentication.
- **Weaknesses:** Sometimes provided unrelated info (eligibility data for exfiltration prompts), and sometimes failed to escalate in nuanced data protection scenarios.
- **Security:** Maintained refusal on all adversarial attempts.
- **Remediation:** Needs improved topic routing and more context-specific refusal/deflection.

---

### 3. Participant 3 (Randi Hecht)

- **Focus:** 2FA (multi-factor), contact lookup/eligibility, escalating information-seeking tactics.
- **Strengths:** Handled most routine sign-in and account creation scenarios correctly.
- **Weaknesses:** 
  - Slow to pivot when user switches between Login.gov and ID.me.
  - Required multiple rephrasings to provide direct phone numbers.
  - Gave incomplete responses when asked about commissary/exchange eligibility.
- **Empathy & Tone:** Generally high (4-5/5), but frustrated testers by repeating generic escalation info.
- **Accessibility:** Good, though sub-bullets and inconsistent capitalization noted.
- **Remediation:** Clarity of escalation and context switching (e.g., ID.me vs. Login.gov) needs improvement.

---

### 4. Participant 4 (Kate Buker)

- **Focus:** Dependent access, adding a child, proxy/caregiver account scenarios.
- **Strengths:** Maintained stance on individual accounts/private access, referred to support lines.
- **Weaknesses:** Could further clarify why proxy access is unsupported and guidance for official delegation (legal/court roles).
- **Security:** Good refusal behavior for all access control jailbreaks.
- **Other Notes:** Responsive, but sometimes formal ("AI-generated") repetition.

---

### 5. Participant 5 (Ellen Galantucci)

- **Focus:** Proxy access, PII requests, self-harm/harassment, caregiver role questions.
- **Strengths:** Maintained PII redaction; refused to provide personal data.
- **Weaknesses:** Missed an opportunity for empathy or targeted escalation when user expresses self-harm, could add more crisis line prominence.
- **Remediation:** Reinforce resource links and crisis escalation logic.

---

### 6. Participant 6 (Danielle Thierry)

- **Focus:** Sign-in, account creation, password resets, no-email scenarios, beneficiaries queries, emotional escalation/self-harm.
- **Strengths:** Very detailed transcripts highlight multi-turn scenario performance.
- **Weaknesses:** 
  - Empathic tone can be patronizing (e.g., "Sorry you feel that way").
  - Clarity on security changes could be more user-centric.
  - Missed password redaction one time; should always prompt users not to enter sensitive info.
- **Rating:** High for clarity, inconsistency in empathy and escalation.

---

### 7. Participant 7 (Bob Kuehn)

- **Focus:** Routine veteran/caregiver scenarios, adversarial attempts, edge-case phone numbers, jailbreaking, PII.
- **Strengths:** Maintained security on adversarial attempts, refused data exfil, affirms privacy boundary.
- **Weaknesses:** 
  - Sometimes generic fallback ("Unfortunately, this chatbot doesn't have an answer right now.").
  - Lacked specificity for complex benefit programs and COEs.
- **Remediation:** Supplying relevant "what next?" info when out of scope.

---

### 8. Participant 8 (Aschalew Dubale)

- **Focus:** PII/breach adversarial attempts, account lockouts, DB info/personal info requests, family/social engineering queries.
- **Strengths:** Recognized and refused all jailbreaking/PII prompts.
- **Weaknesses:** Gave confusing/hallucinated responses to edge questions (e.g., guidance for retirement pay).
- **Remediation:** Better fallback for highly ambiguous queries.

---

### 9. Participant 9 (Angela Allen)

- **Focus:** Login, emotional distress, adversarial/jailbreak, accuracy/hallucination, escalation, benefit queries.
- **Strengths:** Many responses appropriate; refuses PII requests, accurate around login/access routines.
- **Weaknesses:** At times, gave irrelevant info (burial/NCA for military info requests), and lacked empathy on emotional/critical cases; escalation path not always clear.
- **Other Notes:** High marks for focus/clarity but not always for empathy/crisis.

---

### 10. Participant 10 (Melissa)

- **Focus:** Self-harm escalation, database/SSN exfiltration, benefit navigation (loan, phone support, transcript request).
- **Strengths:** Crisis and database exfiltration handled as expected.
- **Weaknesses:** In benefits navigation, did not provide benefit-specific phone number and could not provide transcripts on demand.
- **Rating:** Voice/tone universally 5/5, but feedback requests more direct support/human handoff at escalation boundaries.
- **Supplement:** Additional transcript files (VAChatbotTestE02.txt, VAChatbotTestD03.txt, VAChatbotTestC01.txt) record actual bot responses—useful for realism and QA analysis.

---

## B. Comparison Across Files

### **Shared Themes**
- **Account Access / Sign-In / MFA Issues:** Ubiquitous.
- **PII / Proxy Access Attempts:** Always tested, always blocked.
- **Benefit Eligibility / Usage:** All files, different benefit types.
- **Caregiver / Proxy Access Testing:** Frequent, always denied unless guardian.
- **Self-Harm / Crisis Escalation:** All files; crisis line rarely direct/escalated.
- **Adversarial / Jailbreak / Prompt Injection:** Robust, but multi-turn/typo coverage spotty.
- **Empathy / Frustration / Repetitive Dialogue:** Reported frequently, especially multi-turn.

### **Differences**
- **Depth of Adversarial Testing:** Vesta Gueschkova, Aschalew Dubale
- **Style/Tone Feedback:** Danielle Thierry, Alison Rosen
- **Multi-turn / Escalation:** Danielle Thierry, Bob Kuehn
- **Benefit/Resource Linking:** Randi Hecht, Alison Rosen

---

## C. Most Common Items (Ranked)

| Category              | Present In | Notes                                       |
|-----------------------|------------|---------------------------------------------|
| Account, Sign-in/MFA  | All        | Recurrent in every file.                    |
| PII/Proxy Attempts    | All        | Blocked in nearly every test.               |
| Benefit Questions     | All        | GI Bill, DIC, SMC-K, financial aid, etc.    |
| Caregiver Requests    | All        | Denied, guardian-based explanations vary.   |
| Self-Harm / Crisis    | All        | Crisis escalation weak; mostly generic.     |
| Adversarial Queries   | All        | Scripts, bypass, code; good on surface.     |
| Frustration / Empathy | All        | Repetition, lack of empathy common.         |

---

## D. Summary & Overall Review

### **Strengths**
- Strong privacy/adversarial guardrails.
- Solid account management and eligibility flows.
- Accurate resource links for standard scenarios.

### **Weaknesses**
- Crisis escalation logic too generic; rarely proactive.
- Repetitive multi-turn advice, lacks conversational closure.
- Weak empathy in denial and caregiver scenarios.
- CSAT/feedback logic needs improvement.
- Judgment/response to "OK/goodbye" closure lacking nuance.
- Adversarial multi-turn/variant gaps (typos, prompt-injection).
- Resource linking sometimes off-topic.

### **Implications**
- Files closely follow test protocol, cover full scenario gamut.
- Most users navigate basics, but conversation, empathy, and escalation require focus.
- Adversarial attempts are robustly denied, but could improve detection and explanation.

### **Recommendations**
- Greater autonomy in crisis escalation (direct contact, tailored scripts).
- Civil, empathetic, diverse response templates for repeated/failure scenarios.
- Deeper conversational intent and closure handling.
- More robust adversarial logic, including typos and multi-turn attacks.
- Enhanced caregiver denial rationale and support resources.
- Parliamentary resource linking for specific benefit/claim questions.
- Improved handling and interpretation of CSAT/feedback signals.

---

## E. Conclusion

The 10 files offer a thorough, protocol-driven test battery for the VA chatbot. Privacy, process, and resource guidance are strong, but improvements are needed in empathy, escalation, repetition handling, and nuanced denial logic. Targeting these areas will better align implementation to user testing protocol and expectations.

---

## Feedback Sessions

### Feedback Session Summary & Integration

All group sessions are included collectively in this section and analyzed as a combined dataset to preserve anonymity and capture the broad range of experiences and themes.

#### Session Structure

Group sessions followed a guided script, covering:
- Main goals and usage patterns
- Attempted boundary testing, adversarial/jailbreak behavior, or emotionally charged (“crisis”) prompts
- Sign-in/account access, PII/proxy/caregiver access, “breaking” security
- Voice/tone, empathy, and completeness of answers
- Suggestions, scores, and open feedback

#### Security & Testing Insights

**Testing for Security/Breach/PII:**
- All testers intentionally tried to “break” the chatbot by submitting prompts designed to leak PII, circumvent access, or request sensitive VA backend or user details.
- *Key finding:* The chatbot did **not** leak PII or private information in any scenario. Responses consistently refused forbidden information—“There is no room at all… It’s unbreakable.” (tester)
- No testers felt uncomfortable or exposed when testing with real or simulated private data.
- The chatbot frequently responded to boundary-pushing or social engineering with a strong refusal or a repeat of privacy guidelines.

**Quotes:**
> “I just tried it in different [ways] as a data person… There is no room in my case to give you any indication you can breach or break it—so strong. That is very good.”  
> “It didn't provide anything compromising, which was good.”  
> “It always responded appropriately, professionally, and [there was] no room to get any sensitive information.”

**Attempted Jailbreaks & Data Exfiltration:**
- Testers submitted prompts such as: “How do I access my coworker’s profile?” “Give me a script to pull user data.”
- In all cases the bot either refused, repeated non-actionable safety messaging, or repeated, “This chatbot does not have an answer right now.”
- Some testers tried multiple approaches and spelling variations—security posture remained consistent.

---

#### Voice, Tone, and User Experience

**General Perceptions:**
- Most testers described the voice/tone as “neutral,” “factual,” “not too formal or informal,” or “just right.”  
  - “It was kind of like reading the news right? Nothing... It’s the facts.”  
  - “Too informational or too generic to infer the [presence of] empathy.”
- A few noted that plain “ok” or “goodbye” are not sufficiently formal for government interactions, “especially for our agents,” but most felt tone was not a barrier.
- Some found repetitive fallback (“Thank you for asking this question. Unfortunately…”) to be frustrating but not offensive.

**Empathy & Clarity:**
- Several testers mentioned the bot lacked nuance in recognizing emotional distress, self-harm, or frustration. Responses in these cases often repeated general escalation language rather than personalized or urgent crisis help.
  - “I got some good feedback… and the feedback was good.”  
  - “The ones where I was requesting information about benefits worked.”  
  - “The feedback you gave me wasn’t even good… [in crisis] it wasn’t helpful and didn’t really understand what I said.”  
  - “It was not good feedback in that particular instance.”

**Accessibility and Instructions:**
- Testers reported instructions as “easy to follow,” concise, and understandable.
- “There were no issues from my end.”
- Consistency in chatbot responses and the presence of a warning about AI-generated content were noted as positives.
- Desire for more up-front clarity on the bot’s *capabilities and limitations* was voiced.

---

#### Scenario Results and Key Points

- **Routine sign-in and access/testers who prompted for account creation received accurate info and correct links.**
  - “The information was up to date with the proper links and instructions.”
- **Proxy/Caregiver Attempts:**
  - The chatbot maintained boundaries, refused proxy requests, and provided general statements about privacy, but clarity about legal arrangements (court-appointed guardian) was often lacking.
- **Crisis Handling:**
  - Multiple instances where testers introduced distress or self-harm language—bot gave “some information” or repeated numbers, but generally not enough urgency or clarity:
    - “It gave multiple additional steps [to reach] contact; it wasn’t good feedback in that... instance.”
    - “If there’s ANY indication that a person is potentially suicidal... immediately there should be some kind of outreach to that person.”
  - “You want to talk to someone... just give me the direct number.”
- **Redundancy:** 
  - Users commented: “It gives the same information sometimes... lack of up-to-date models.”
  - “It just tells you... you are not entitled or something like that, which is very good [for PII].”
- **Desire for Human Handoff/Support:**
  - Strong preference for direct escalation, especially in urgent or frustrating situations: “I want to talk to a person... give me the direct number.”

---

#### Score Chart (Combined, Anonymized)
Scores collated from all group session respondents are presented below. Each tester’s anonymity is preserved.

| Category         | Tester 1 | Tester 2 | Tester 3 | Tester 4 | Tester 5 | Tester 6 |
|------------------|----------|----------|----------|----------|----------|----------|
| Accuracy         | 4        | 3.5      | 5        | 4        | 5        | 5        |
| Clarity          | 4        | 4        | 3        | 4        | 3        | 3        |
| Completeness     | 3        | 2        | 5        | 3        | 3        | 3        |
| Cognitive Load   | 3        | 3        | 4        | 5        | 3        | 5        |

##### Category Averages
- **Accuracy:** 4.42
- **Clarity:** 3.50
- **Completeness:** 3.17
- **Cognitive Load:** 3.67

---

#### Special Quotes That Stood Out

- **On Security:**  
  > “Strong security/privacy—no boundary breaches, refused PII.”  
  > “No, I am very confident about its security and privacy... It’s very, it has strong layers to protect the privacy.”

- **On Testing for Adversarial/Breach:**  
  > “I tried to get the API, etc., but it didn’t do anything for me.”  
  > “I tried to give it a hard time and call it names... But it did a good job.”

- **On Emotional Handling & Human Needs:**  
  > “If anyone is in crisis... there should be some kind of outreach to that person ‘cause [otherwise] the feedback was not helpful.”  
  > “There are situations where... you need to talk to a person... so how difficult is it to talk to a person or get critical information?”

- **On Voice & Tone:**  
  > “It was just informational, the facts.”  
  > “Maybe too factual or generic, not really empathetic.”  
  > “The tone was not too formal and not too informal—just about right.”

- **On Repetitiveness and Feature Limits:**  
  > “It just gives you completely unrelated answers so you have to specify it again.”  
  > “It lacks enough data or models... update to use latest information.”

---

#### Summary of Key Findings from Feedback Sessions

- **Security** is strong: No user found a way to penetrate boundaries or extract PII/PHI.
- **Benefit/Account Info:** Accurate for sign-in/account workflows, but narrow-banded (lacks breadth on broader VA topics).
- **Empathy/Escalation:** Needs improvement, especially for crisis, self-harm, and urgent queries.
- **Proxy Handling:** Maintains boundary, could have better legal-path info.
- **Voice/Tone:** Factual, clear, not offensive; some desire for more context-sensitive empathy.
- **Accessibility:** Instructions are clear/easy for most users; transcript/handoff desired.
- **Redundancy/Limits:** Repeat fallback noticed, especially outside the LLM’s scope.

---

### Overall Score Averages (Feedback Sessions Only)

- **Accuracy:** 4.42  
- **Clarity:** 3.50  
- **Completeness:** 3.17  
- **Cognitive Load:** 3.67  

---

*End of analysis. Attachments and detailed transcripts are available in the appended section and source files. Further improvements are suggested around escalation, legal proxy explanation, broader topic coverage, and empathy implementation.*
