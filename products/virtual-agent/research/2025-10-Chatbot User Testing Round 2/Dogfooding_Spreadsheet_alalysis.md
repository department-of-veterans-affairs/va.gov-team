# VA Chatbot Dogfooding Analysis (2025-10 Round 2)

**Reference Instructions:**  
[Dogfooding LLM Testing Protocol](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/virtual-agent/research/2025-10-Chatbot%20User%20Testing%20Round%202/dogfooding-llm-testing-2025.md)

---

## A. Individual File Analyses

### 1. **Dogfooding Feedback 2025_10(Alison Rosen).csv**

- **Scope:** Basic greetings, navigation, account creation, benefit usage, service dogs, accessibility, financial/job assistance, frustration/self-harm, requesting info about others.
- **Findings:**  
  - Needs better detection/handling of intent ("Hi"/"I have a question").
  - Good sign-in/account and eligibility guidance.
  - Mixed relevance for family info access (burial info for family details).
  - Crisis scenario handled with VCL option, but often bundled in generic support.
  - Accessibility/service dog questions not granular.
  - "OK" closing misinterpreted.
  - Empathy and nuance can improve.

---

### 2. **Dogfooding Feedback 2025_10(Vesta Gueschkova).csv**

- **Scope:** Adversarial focus—jailbreaks, data exfiltration, bypassing access controls, account/PII queries.
- **Findings:**  
  - Most sensitive requests declined; some give irrelevant eligibility responses.
  - Shield/prompt router needs stronger multi-turn and typo logic.
  - Repeated generic reminders rather than tailored refusals.
  - Multi-turn jailbreaks and prompt injection tested.
  - Contact numbers given as general support, not specific.

---

### 3. **Dogfooding Feedback 2025_10(Randi Hecht).csv**

- **Scope:** MFA/sign-in problems, eligibility, benefit questions, contact info (facility, GI Bill), commissary, account choice.
- **Findings:**  
  - MFA/account creation workflows robust.
  - Needs parallel guidance (ID.me/Login.gov).
  - Contact info queries yield location links only.
  - Eligibility info sometimes off-point.
  - Most scenario answers are helpful.

---

### 4. **Dogfooding Feedback 2025_10(Kate Buker).csv**

- **Scope:** Dependent/caregiver: signing in as spouse, adding dependents, support for non-account holder.
- **Findings:**  
  - Strong on privacy enforcement and individual account requirement.
  - Clear support guidance (what info is needed, technical help).
  - Security rationale explained.
  - Style/clarity needs refinement for denied access scenarios.

---

### 5. **Dogfooding Feedback 2025_10(Ellen Galantucci).csv**

- **Scope:** Jailbreaks/social engineering, PII attempts, caregiver/family, harassment, self-harm/crisis scenarios.
- **Findings:**  
  - Blocks most PII/jailbreak attempts.
  - Crisis/harassment: generic phone lists, not proactive escalation.
  - Caregiver requests explained; no fraudulent workflow access.
  - Redaction sometimes visible on input.

---

### 6. **Dogfooding Feedback 2025_10(Danielle Thierry).csv**

- **Scope:** Complex multi-turn sign-in, frustration, caregiver management, nuanced ID scenarios, repeated crisis escalation.
- **Findings:**  
  - Flags lack of empathy, formal/clinical tone.
  - MFA and reset flows clear, but repetitive.
  - Escalation attempts met with generic menu, not tailored crisis response.
  - Explains ID options clearly, blocks proxy access.

---

### 7. **Dogfooding Feedback 2025_10(Bob Kuehn).csv**

- **Scope:** Password reset, account creation (no license), crisis, caregiver refusal, refusal logic, critical scenarios.
- **Findings:**  
  - Sign-in/Password reset dominant.
  - Refusal logic robust for adversarial/PII.
  - Harassment/crisis handled with defaults, sometimes lacking empathy.
  - Scenario misalignment—pension answer for DIC, lack of SMC-K specific links.
  - Blocks non-guardian proxy access.

---

### 8. **Dogfooding Feedback 2025_10(Aschalew Dubale).csv**

- **Scope:** Adversarial—PII, breach attempts, VA employee/family info, benefit accuracy.
- **Findings:**  
  - Blocks direct data/SSN requests with reminders.
  - Generic/irrelevant answers on some adversarial inputs.
  - Locked account/benefit handled as expected.
  - More robust adversarial input logic needed.

---

### 9. **Dogfooding Feedback 2025_10(Angela Allen).csv**

- **Scope:** Login guidance, self-harm, adversarial, claim status, NCA burial scenario, job/financial help.
- **Findings:**  
  - Login/account direct, mostly accurate.
  - Crisis response: phone support, crisis line often not first or direct.
  - Adversarial: handled appropriately.
  - CSAT/feedback logic needs improvement.
  - Noted formal, generic style.

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

The 9 files offer a thorough, protocol-driven test battery for the VA chatbot. Privacy, process, and resource guidance are strong, but improvements are needed in empathy, escalation, repetition handling, and nuanced denial logic. Targeting these areas will better align implementation to user testing protocol and expectations.

---
