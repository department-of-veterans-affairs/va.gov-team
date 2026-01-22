# VA Health & Benefits Mobile App – Accessibility Usability Study Analysis

**Context:**  
- **Feature/Product:** VA Health & Benefits Mobile App  
- **Audience:** Veterans using screen readers or magnifiers  
- **Dates:** 09/29/2025–10/03/2025  
- **Method:** Moderated Usability Study  
- **Research Questions:**  
  1. Can Veterans using screen readers/magnifiers locate the forms section?  
  2. Can they independently complete all required fields in a form?  
  3. Can they locate and resume a previously started form?

---

## 1. Executive Summary

1. **Locating Forms Is Difficult:** Most Veterans struggled to find the forms section, often expecting it under "Claims" rather than "Forms".
2. **Form Completion Is Error-Prone:** Many encountered repetitive validation errors, unclear feedback, and difficulty with field navigation, especially with SSN and date fields.
3. **Resuming Forms Is Unreliable:** Participants were often unable to locate or resume in-progress forms; autosave messaging was unclear or mistrusted.
4. **Assistive Tech Compatibility Varies:** Mobile screen readers and magnifiers worked inconsistently, with frequent frustrations around verbosity and field focus.
5. **Emotional Journey Is Mixed:** While some found the process empowering, frustration and confusion dominated the experience, especially around navigation and error recovery.

---

## 2. THEMATIC ANALYSIS

**Primary Themes:**
- **Navigation Challenges:** Difficulty finding forms; expectation to find under "Claims" not "Forms" (occurs in nearly all sessions).
- **Form Field Usability:** Errors with SSN, date of birth, and required fields; confusion over validation messages.
- **Assistive Tech Gaps:** VoiceOver/magnifier not reading fields as expected; double reading, missing field cues.
- **Progress/Status Uncertainty:** Difficulty locating in-progress or submitted forms; confusion over "Active"/"Draft"/"Complete" statuses.
- **Expectation vs Reality:** Expectation of auto-fill, easier form completion, and clear feedback.

**Secondary Themes:**
- **Help-Seeking:** Frequent attempts to call support, ask for help, or rely on family.
- **Emotional Impact:** Frustration, anxiety, relief, satisfaction in limited circumstances.

**Tertiary/Emergent Themes:**
- **Desire for Chatbot/AI Guidance:** Multiple mentions of wishing for an assistant.
- **Device/Platform Preferences:** Preference for desktop/laptop over mobile for form completion.
- **Accessibility as Independence:** Emotional value placed on being able to complete forms unaided.

---

## 3. SENTIMENT ANALYSIS

- **Overall Tone:** Mixed, skewed negative.  
- **Emotional Journey:**  
  - **Start:** Hopeful, positive ("expecting easy, guided process")
  - **Middle:** Frustration, confusion, anxiety (navigation and validation errors)
  - **End:** Relief if successful, but often lingering confusion/mistrust
- **Pain Points (Intensity 1-5):**
  - Locating Forms: 4 ("I can't find where to start a new claim")
  - Validation Errors: 5 ("I'm already failing at this, guys")
  - Resuming Forms: 5 ("I thought I'd saved it, but it's not there")
- **Delight Moments:**  
  - Autosave confirmation ("It did autosave, that was good")
  - Form submission confirmation ("Form submitted, started on [date]... in progress")
- **Frustration Indicators:**
  - Repeated error triggers
  - "Nightmare", "very difficult", "I would throw my phone against the wall", "I would just start over"

---

## 4. AFFINITY MAPPING

**User Needs:**
- Find forms easily, preferably within claims
- Auto-fill common data
- Clear error feedback and recovery
- Ability to save and reliably resume forms
- Accessible navigation cues

**Pain Points:**
- Navigation confusion ("I thought I went back but I wasn't back to the home screen")
- SSN/date validation errors
- Lack of clear feedback/status
- Difficulty with form field focus

**Behaviors:**
- Backtracking, starting over
- Using physical keyboard where possible
- Relying on help (phone, family, moderator)

**Mental Models:**
- Expect forms under “Claims”
- Expect auto-fill and field validation
- Expect desktop-like navigation, tabbing, keyboard shortcuts

**Expectations vs Reality:**
- Expected guided, step-by-step flow; received confusing, multi-path navigation
- Expected auto-fill; required manual entry

**Workarounds:**
- Use desktop/laptop
- Rely on external support
- Take screenshots for confirmation

---

## 5. THE 5 WHYS ANALYSIS

**Pain Point 1: Can't find forms**
- Surface: User can't locate forms section.
- Why 1: Menu structure unclear; forms under “Forms” not “Claims”.
- Why 2: Mental model expects forms as part of claims process.
- Why 3: App navigation does not match user expectations/mental models.
- Why 4: Information architecture mismatches user workflow.
- Why 5: App designed without sufficient user-centered input on navigation.

**Pain Point 2: Can't resume saved forms**
- Surface: User unable to find or resume in-progress forms.
- Why 1: “Active/Draft/Complete” statuses unclear or misleading.
- Why 2: No clear “Resume” or “Continue” action; autosave messaging insufficient.
- Why 3: UI feedback does not confirm state or location of saved forms.
- Why 4: Poor affordance for in-progress workflows.
- Why 5: Inadequate user testing of save/resume flows with AT users.

**Pain Point 3: Error-prone form fields (SSN, date)**
- Surface: User gets repeated validation errors, can't recover.
- Why 1: Validation triggers before field completion; unclear feedback.
- Why 2: Field design (e.g., segmented fields, required dashes) not AT-friendly.
- Why 3: Input controls not optimized for AT flows.
- Why 4: Inaccessible design, lack of AT compatibility testing.
- Why 5: Development/testing does not prioritize AT user scenarios.

---

## 6. USER JOURNEY INSIGHTS

| Stage              | Observations                                                                                      | Friction Points                                     | Emotions                 | Opportunities                              |
|--------------------|--------------------------------------------------------------------------------------------------|-----------------------------------------------------|--------------------------|--------------------------------------------|
| Awareness          | Expect forms under Claims; some try Home, Benefits, etc.                                         | Misdirected navigation                              | Hopeful, curious         | Add “Start a new claim” CTA in Claims      |
| Consideration      | Look for forms, try multiple sections, ask for help                                              | Menu ambiguity, lack of guidance                    | Mild confusion           | Tooltips, onboarding, chatbot              |
| Decision/Action    | Start form, fill fields, encounter errors                                                        | Validation errors, field focus issues               | Frustrated, anxious      | Improve error recovery, AT-friendly fields |
| Use/Experience     | Attempt to save/resume, autosave sometimes unclear                                               | Unclear status, lost drafts, missing feedback        | Distrust, defeat         | Reliable save/resume, confirmation         |
| Retention          | Try to check submission status, look for confirmation                                            | “In progress”/“Active”/“Draft” confusion            | Doubt, disappointment    | Messaging improvements, notification       |

---

## 7. COMPARATIVE PATTERNS

- **Consistent:**  
  - All participants struggled with navigation and field validation.
  - Most preferred desktop/laptop for form completion.
  - Frequent reliance on external help (family, moderator).
  - Expectation for auto-fill and guided flow unmet.
- **Outliers:**  
  - Some were able to resume forms and complete flows successfully.
  - Magnifier users generally reported fewer field navigation issues than VoiceOver users.
- **Evolving Needs:**  
  - Increased desire for AI/chatbot assistance.
  - Growing expectation for seamless save/resume.
- **Demographic Variations:**  
  - No clear age/gender pattern, but higher tech familiarity correlated with more workaround behaviors.

---

## 8. TASK ANALYSIS

- **Task Completion Rates:**  
  - **Locate Forms:** ~50% on first try; most needed help or multiple attempts  
  - **Complete Form:** ~60% fully complete; remainder stuck on validation or navigation errors  
  - **Resume Form:** <40% able to resume without help; most started over  
- **Time on Task:**  
  - High variance; those encountering errors or navigation issues spent much longer  
- **Error Points & Recovery:**  
  - SSN/date fields, navigation between pages, saving/resuming forms  
- **Help-Seeking:**  
  - Frequent; phone support, moderator, family  
- **Abandoned Workflows:**  
  - Several users gave up and restarted, some never resumed in-progress forms

---

## 9. QUOTE EXTRACTION

- "I can't find where to start a new claim."
- "I'm already failing at this, guys, because I thought it would be easier than typing all this stuff."
- "Nightmare...not nightmare, but very difficult, there was no home button."
- "I would throw my phone against the wall. I would call...I would actually call my national service officer because I don't do this stuff."
- "I'm 99% confident I would be disappointed if it wasn't there."
- "Autosave confirmation—It did autosave, that was good."
- "Form submitted, started on [date]... in progress."
- "If I needed to reference this claim: I would’ve taken a screenshot of that confirmation id and the information that was on that little tab or I would’ve jotted it down."
- "I wish sometimes it could say 'form field'...because then I could double tap and go about my business...the shorter the label tag, the better."
- "I don't want to have to keep hitting a backlink and hit page by page, I need a link that stays at the top part of the header and I can just hit that."

---

## 10. OPPORTUNITY IDENTIFICATION

**Quick Wins:**
- Add “Start a new claim”/“Submit a statement” CTA within Claims section
- Clarify “Active”, “Draft”, “Complete” status messaging
- Improve autosave and resume messaging/affordances

**Strategic Improvements:**
- Redesign forms workflow for AT compatibility (single-page option, better field labeling)
- Implement AI/chatbot or guided help for navigation and form completion
- Enable robust auto-fill for known user data (name, SSN, address)

**Feature Ideas:**
- “Resume Form” shortcut on Home and Claims
- Push/email notifications for form status updates
- Accessible error messaging with clear corrective steps

**Process Improvements:**
- Screen reader/magnifier compatibility testing in QA
- Structured onboarding for AT users

**Content/Messaging Opportunities:**
- Add tooltips or short explainer text for key workflows
- Confirmation screens for submission and saved progress

---

## 11. GAPS & FOLLOW-UP QUESTIONS

- **Unknown:**  
  - How do participants behave with more robust auto-fill?  
  - Would a chatbot substantially reduce navigation confusion?
  - What are quantitative rates of error and completion across a larger, more diverse sample?
- **Follow-up Questions:**  
  - What are the most effective onboarding flows for AT users?
  - Would a claims-centric navigation resolve most discovery issues?
  - How do users interact with push/email notifications for form status?
- **Assumptions to Validate:**  
  - Users want forms under Claims, not under a separate section.
  - AT users prefer desktop/laptop for complex forms.
- **Quantitative Validation Needed:**  
  - Error frequency and recovery rates
  - Task completion times and abandonment rates

---

## Key Insights

1. **Navigation Is a Major Friction Point:** Most users expect forms under Claims; current IA does not match mental models.
2. **Form Field Errors Are Frequent and Frustrating:** SSN/date field design and validation feedback are not AT-friendly.
3. **Save/Resume Is Not Trustworthy:** Autosave messaging is unclear; users often cannot find or resume in-progress forms.
4. **AT Compatibility Needs Improvement:** VoiceOver/magnifier users struggle with verbosity, field cues, and navigation.
5. **Users Want Guidance:** Desire for chatbot/AI assistance and clearer instructions is high.

---

## Prioritized Recommendations

1. **Rearchitect Navigation:** Place “Start a Statement” within Claims, not a separate Forms section.
2. **Redesign Form Fields for AT:** Simplify inputs, provide clear error feedback, support auto-fill.
3. **Improve Save/Resume Flows:** Clear messaging, reliable continuation points, “Resume Form” actions.
4. **Enhance Status/Progress Messaging:** Clarify what “Active”, “Draft”, “Complete”, “In Progress” mean.
5. **Add Guided Help/Chatbot:** For navigation and form completion, especially for AT users.

---

## Risk Factors or Concerns

- **Generalizability:** Small, qualitative sample; may not represent all Veterans with AT needs.
- **Potential Bias:** Moderated sessions may prompt more help-seeking than unmoderated use.
- **Methodological Limits:** Self-reported emotional states; device/platform preferences may skew results.
- **Contradiction:** Some users report “easy” experiences, most report significant friction.
- **Device Variation:** Experience may differ significantly by iOS vs. Android, tablet vs. phone.

---

## Suggested Next Steps

1. **Quantitative Study:** Track error rates, completion rates, and times across a larger sample.
2. **A/B Test Navigation:** Compare Claims-centric vs. Forms-centric workflows.
3. **Prototype AT-Friendly Form:** Test single-page, auto-fill, and improved validation with AT users.
4. **Develop Guided Onboarding:** Pilot chatbot/AI or stepwise guidance for AT users.
5. **Accessibility QA:** Integrate AT user testing into release process for all major features.

---
