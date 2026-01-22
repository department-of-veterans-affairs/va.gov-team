# Decision Reviews Onramp Product Guide

**Edition:** 1.0
**Product Owner:** Amy Lai
**Launch Date:** [TBD]
**Department of Veterans Affairs**

---

## Table of contents

1. [Product overview](#product-overview)
2. [User access](#user-access)
3. [Navigation](#navigation)
4. [Functionality](#functionality)
   - 4.1 [Introduction page](#41-introduction-page)
   - 4.2 [Section 1: Eligibility screening](#42-section-1-eligibility-screening)
   - 4.3 [Section 2: Situation-specific questions](#43-section-2-situation-specific-questions)
   - 4.4 [Results pages](#44-results-pages)
   - 4.5 [Tool features](#45-tool-features)
5. [Major issues and error messages](#major-issues-and-error-messages)
6. [Table of figures](#table-of-figures)

---

## Product overview

### What is the Decision Reviews Onramp tool?

The Decision Reviews Onramp is an interactive questionnaire that helps Veterans choose the correct decision review pathway when they disagree with a VA disability compensation decision.

**Purpose:** Reduce confusion and form abandonment by guiding Veterans to the right pathway based on their specific situation.

**Who uses it:** Veterans who have received a VA decision on a disability compensation claim and disagree with that decision.

**How it works:**
1. Veteran answers a series of questions about their situation
2. Tool uses branching logic to show different questions based on previous answers
3. Tool analyzes answers and recommends one of three pathways:
   - Supplemental Claim (VA Form 20-0995)
   - Higher-Level Review (VA Form 20-0996)
   - Board Appeal / Notice of Disagreement (VA Form 10182)
4. Recommendation includes explanation and direct link to appropriate form

### Three decision review pathways

**Supplemental Claim:**
- For Veterans who have new and relevant evidence
- Different reviewer examines original evidence plus new evidence
- Average timeline: ~125 days

**Higher-Level Review:**
- For Veterans who believe there was an error but have no new evidence
- Senior reviewer examines existing evidence only
- Average timeline: ~125 days

**Board Appeal:**
- For Veterans who want a Veterans Law Judge to review their case
- Three options: Direct Review, Evidence Submission, or Hearing
- Average timeline: 400+ days

### Key features

- **Unauthenticated:** No login required
- **Mobile-friendly:** Works on all devices
- **Plain language:** Complex terms explained with help text
- **Branching logic:** Questions adapt to Veteran's situation
- **Personalized:** Recommendation based on individual circumstances

---

## User access

### Account requirements

**None required.** The Decision Reviews Onramp is completely unauthenticated. Veterans do not need to log in or create an account to use the tool.

### Prerequisites for use

**Veterans must:**
- Have received a VA decision on a disability compensation claim
- Be within the filing deadline (typically 1 year from decision date, though tool addresses exceptions)

**The tool works for:**
- Disability compensation decision reviews only
- Initial claim decisions
- Prior Supplemental Claim decisions
- Prior Higher-Level Review decisions
- Prior Board Appeal decisions

**The tool does NOT work for:**
- Education benefit decisions
- Pension decisions
- Healthcare decisions
- Other non-disability compensation claims
- Legacy appeals (filed before February 2019)

### Additional access notes

- Tool does not require personal information to use
- Veterans cannot save progress (must complete in one session)
- No account creation or authentication needed at any point
- Recommendation cannot be saved within tool (Veterans should screenshot or bookmark result page)

---

## Navigation

### How Veterans find the tool

**Primary access point:** [PLACEHOLDER: Production URL]

#### From VA.gov homepage

**[FIGURE 1: Screenshot - VA.gov homepage with Decision Reviews navigation highlighted]**

Veterans can access the tool from the main VA.gov homepage:
1. Navigate to VA.gov
2. Scroll to "Disability" section
3. Click "Manage your VA decision reviews and appeals"
4. Click "Find out which decision review option is right for you"

#### From Decision Reviews hub page

**[FIGURE 2: Screenshot - Decision Reviews hub page with Onramp link]**

URL: https://www.va.gov/decision-reviews/

From the Decision Reviews main page:
1. Scroll to "Choose a decision review option" section
2. Click "Find out which decision review option is right for you"

#### From decision letter

Veterans may be directed to the tool from their VA decision letter, which includes information about their right to request a decision review.

#### Direct URL

**[PLACEHOLDER: Production URL]**

Veterans can go directly to this URL if they have it (from decision letter, contact center, VSO, etc.)

### Mobile access

**[FIGURE 3: Screenshot - Onramp tool on mobile device]**

The tool is fully responsive and works on mobile devices. Veterans can access it from smartphones or tablets using the same URLs.

---

## Functionality

This section documents every screen and question in the Decision Reviews Onramp tool in the order Veterans typically encounter them.

### 4.1 Introduction page

**URL:** [PLACEHOLDER: /introduction]

**[FIGURE 4: Screenshot - Introduction page full view]**

**What Veterans see:**

**Heading:** "Find out which decision review option is right for you"

**Introduction text explains:**
- What decision reviews are
- The three pathway options available
- That this tool will help choose the right option
- Estimated time: 5-10 minutes
- No login required

**"Start" button** - Begins the questionnaire

**Additional information on page:**
- What to know before starting
- Link to "What if I need help?" accordion
- Link to more information about decision reviews

### 4.2 Section 1: Eligibility screening

This section asks 3-5 initial questions to determine basic eligibility and timeline factors.

#### Question 1: Decision status

**URL:** [PLACEHOLDER: /decision-status]

**[FIGURE 5: Screenshot - Q1 Decision status]**

**Question:** "Have we sent you a decision on your claim yet?"

**Answer options:**
- "I've received a decision for the issue I want to review"
- "I haven't received a decision for the issue yet"

**Help text available:** Explains what a decision letter looks like and typical timeframes

**What happens next:**
- **If "received decision"** → Continue to Q2 (Timeline)
- **If "no decision yet"** → Branch to Q1A (Disability claim filed?)

---

#### Question 1A: Disability claim filed? (appears if no decision received)

**URL:** [PLACEHOLDER: /disability-claim-filed]

**[FIGURE 6: Screenshot - Q1A Disability claim filed]**

**Question:** "Have you filed a disability claim for this condition?"

**Answer options:**
- "I've filed a disability claim and I'm waiting for a decision"
- "I haven't filed a disability claim for this condition yet"

**What happens next:**
- **If "filed and waiting"** → RESULT PAGE: "Wait for your decision"
- **If "haven't filed"** → RESULT PAGE: "File a disability claim first"

---

#### Question 2: Claim decision timeline

**URL:** [PLACEHOLDER: /claim-decision-timeline]

**[FIGURE 7: Screenshot - Q2 Timeline]**

**Question:** "Was your claim decided less than a year ago?"

**Answer options:**
- "I got my decision less than a year ago"
- "I got my decision a year or more ago"

**Help text available:** Explains the 1-year deadline and how to calculate from decision date

**What happens next:**
- **If "less than 1 year"** → Continue to Q3 (Contested claim)
- **If "1 year or more"** → Branch to service connection path (Q4)

---

#### Question 3: Contested claim

**URL:** [PLACEHOLDER: /contested-claim]

**[FIGURE 8: Screenshot - Q3 Contested claim]**

**Question:** "Is your claim contested?"

**Explanation text:** "Contested claims are rare. For example, your claim may be contested if there's a dispute about who should receive benefit payments."

**Answer options:**
- "My claim is contested"
- "My claim is not contested"

**Help text available:** More details about contested claims (attorney fees, dependent claims, etc.)

**What happens next:**
- **If "contested"** → Ask about 60-day timeline
- **If "not contested"** → Continue to Section 2 questions

### 4.3 Section 2: Situation-specific questions

These questions vary based on previous answers. Veterans will see different questions depending on their situation.

#### Question 4: Service connection (Variant A - for claims over 1 year old)

**URL:** [PLACEHOLDER: /service-connected-condition-a]

**[FIGURE 9: Screenshot - Q4 Service connection]**

**Question:** "Did we decide that your condition is service connected?"

**Explanation text:** "We'll only pay disability compensation if we decide your condition is related to your service."

**Answer options:**
- "Yes, my condition is service connected"
- "No, my condition isn't service connected"

**Help text available:** Detailed explanation of service connection with PACT Act examples

**What happens next:**
- **If "yes"** → Ask if condition has worsened
- **If "no"** → Ask about law or policy changes

---

#### Question 5: Condition worsened

**URL:** [PLACEHOLDER: /condition-worsened]

**[FIGURE 10: Screenshot - Q5 Condition worsened]**

**Question:** "Has your service-connected condition gotten worse since you filed this claim?"

**Answer options:**
- "Yes, my condition has gotten worse"
- "No, my condition hasn't gotten worse"

**What happens next:**
- **If "yes"** → Ask if they disagree with decision
- **If "no"** → Ask about law or policy changes

---

#### Question 6: Disagree with decision

**URL:** [PLACEHOLDER: /disagree-with-decision]

**[FIGURE 11: Screenshot - Q6 Disagree]**

**Question:** "Do you disagree with any part of our decision?"

**Help text available:** Explains what parts of a decision Veterans can disagree with:
- The effective date
- Your disability rating
- Whether your condition is service connected

**Answer options:**
- "I disagree with the decision"
- "I don't disagree with the decision, I just want to report that my condition has gotten worse"

**What happens next:**
- **If "disagree"** → Path toward claim for increase options
- **If "just reporting worse"** → RESULT: File new claim for increase

---

#### Question 7: Law or policy change

**URL:** [PLACEHOLDER: /law-policy-change]

**[FIGURE 12: Screenshot - Q7 Law change]**

**Question:** "Are you requesting a review because of a change in law or VA policy?"

**Help text available:** Examples include:
- PACT Act expanded benefits
- Court decisions changing eligibility
- New VA regulations

**Answer options:**
- "Yes, I'm requesting a review because of a change in law or VA policy"
- "No"

**What happens next:**
- **If "yes"** → RESULT: Supplemental Claim (law change)
- **If "no"** → Continue to evidence questions

---

#### Question 8: New and relevant evidence

**URL:** [PLACEHOLDER: /new-evidence]

**[FIGURE 13: Screenshot - Q8 New evidence]**

**Question:** "Do you have new and relevant evidence?"

**Explanation:** "New and relevant evidence is information that we didn't have before that's related to your case and could help prove or disprove your claim."

**Help text available:** Detailed explanation of what counts as "new" evidence

**Answer options:**
- "I have new and relevant evidence"
- "I don't have new and relevant evidence"

**Note:** This question appears multiple times throughout the tool in different contexts depending on the Veteran's path.

**What happens next:**
- **If "yes"** → Path toward Supplemental Claim
- **If "no"** → Path toward Higher-Level Review or Board Appeal

---

#### Question 9: Prior decision type

**URL:** [PLACEHOLDER: /prior-decision-type]

**[FIGURE 14: Screenshot - Q9 Decision type]**

**Question:** "What type of decision do you want us to review?"

**Answer options:**
- "An initial claim decision"
- "A Supplemental Claim decision"
- "A Higher-Level Review decision"
- "A Board Appeal decision"

**Help text available:** Explains each decision type

**What happens next:** This creates different branching paths depending on which type of prior decision. The tool asks different follow-up questions based on the pathway history.

---

#### Question 10: Hearing preference (if Board Appeal is possible)

**URL:** [PLACEHOLDER: /hearing-preference]

**[FIGURE 15: Screenshot - Q10 Hearing]**

**Question:** "Do you want to have a hearing with a Veterans Law Judge?"

**Explanation text:** Explains that a hearing allows Veterans to present their case in person (virtually or in-person) to a judge.

**Answer options:**
- "I want to have a hearing"
- "I don't want a hearing"

**Help text available:**
- Virtual vs in-person hearings
- Timeline differences (approximately 2 years with hearing, 1 year without)
- What happens at a hearing

**What happens next:**
- Both options can lead to Board Appeal recommendation
- Answer affects which Board docket is recommended (Hearing vs Evidence Submission/Direct Review)

---

#### Additional questions in Section 2

Depending on the Veteran's path through the tool, they may see additional questions about:
- Whether they've already filed a decision review
- Specific details about their disagreement
- Timeline considerations for contested claims
- Other situation-specific factors

**[FIGURE 16-20: Screenshots - Additional questions as appropriate]**

Each question follows the same format:
- Clear question text
- Plain language explanation when needed
- Help text available via expandable sections
- 2-4 answer options
- Large, clear buttons for selection

### 4.4 Results pages

After completing the questions, Veterans see one of several possible results pages.

#### Result: Supplemental Claim recommendation

**URL:** [PLACEHOLDER: /results/supplemental-claim]

**[FIGURE 21: Screenshot - SC recommendation full page]**

**What Veterans see:**

**Heading:** "Based on your answers, you may want to file a Supplemental Claim"

**Content includes:**
- Why this pathway was recommended based on their answers
- What a Supplemental Claim is (brief explanation)
- Timeline (~125 days)
- That new evidence is required
- What happens during the review

**"File a Supplemental Claim" button** - Links directly to VA Form 20-0995

**Additional information:**
- "What if I don't agree with this recommendation?" accordion
- "What are my other options?" accordion
- Link to find an accredited representative
- Link to more information about decision reviews

---

#### Result: Higher-Level Review recommendation

**URL:** [PLACEHOLDER: /results/higher-level-review]

**[FIGURE 22: Screenshot - HLR recommendation full page]**

**What Veterans see:**

**Heading:** "Based on your answers, you may want to file a Higher-Level Review"

**Content includes:**
- Why this pathway was recommended based on their answers
- What a Higher-Level Review is (brief explanation)
- Timeline (~125 days)
- That NO new evidence is allowed (emphasized)
- Optional informal conference
- What happens during the review

**"File a Higher-Level Review" button** - Links directly to VA Form 20-0996

**Additional information:**
- "What if I don't agree with this recommendation?" accordion
- "What are my other options?" accordion
- Link to find an accredited representative
- Link to more information about decision reviews

---

#### Result: Board Appeal recommendation

**URL:** [PLACEHOLDER: /results/board-appeal]

**[FIGURE 23: Screenshot - Board Appeal recommendation full page]**

**What Veterans see:**

**Heading:** "Based on your answers, you may want to file a Board Appeal"

**Content includes:**
- Why this pathway was recommended based on their answers
- What a Board Appeal is (brief explanation)
- Timeline warning (400+ days)
- Three docket options explained (Direct Review, Evidence Submission, Hearing)
- What happens during the review
- Veterans Law Judge decision

**"File a Board Appeal" button** - Links directly to VA Form 10182

**Additional information:**
- "What if I don't agree with this recommendation?" accordion
- "What are my other options?" accordion
- Link to find an accredited representative
- Link to more information about decision reviews

---

#### Result: Wait for decision

**URL:** [PLACEHOLDER: /results/wait-for-decision]

**[FIGURE 24: Screenshot - Wait for decision page]**

**Appears when:** Veteran indicated they filed a claim but haven't received a decision yet

**What Veterans see:**

**Heading:** "Wait for your decision"

**Content explains:**
- Decision reviews are for disagreeing with a decision VA has already made
- They need to wait for their initial decision first
- Typical timeframes for decisions
- How they'll receive their decision (letter)
- What to do when they receive the decision

**Links provided:**
- Check claim status
- More information about the decision review process

---

#### Result: File initial claim first

**URL:** [PLACEHOLDER: /results/file-initial-claim]

**[FIGURE 25: Screenshot - File initial claim page]**

**Appears when:** Veteran indicated they haven't filed a disability claim yet

**What Veterans see:**

**Heading:** "File a disability claim first"

**Content explains:**
- Decision reviews are for disagreeing with a decision VA has already made
- They need to file an initial disability claim first
- What a disability claim is
- How to file

**"File a disability claim" button** - Links to disability compensation application

**Links provided:**
- More information about filing disability claims
- How to get help from an accredited representative

---

#### Result: May need to file new claim

**URL:** [PLACEHOLDER: /results/file-new-claim]

**[FIGURE 26: Screenshot - File new claim page]**

**Appears when:** Decision is over 1 year old and specific conditions apply

**What Veterans see:**

**Heading:** "Your available options"

**Content explains:**
- Their decision was over 1 year ago (outside typical decision review timeline)
- Options available:
  - File a new claim (especially if condition has worsened)
  - Contact an accredited representative for guidance
  - Information about claim for increase if service-connected

**Links provided:**
- File a new disability claim
- Find an accredited representative
- More information about claims for increase

---

#### Result: Contact representative for guidance

**URL:** [PLACEHOLDER: /results/contact-representative]

**[FIGURE 27: Screenshot - Contact representative page]**

**Appears when:** Veteran's situation is complex or tool cannot make a clear recommendation

**What Veterans see:**

**Heading:** "We recommend contacting an accredited representative"

**Content explains:**
- Why their situation may require personalized guidance
- What an accredited representative is
- How they can help
- Types of representatives (VSOs, attorneys, claims agents)

**"Find an accredited representative" button** - Links to representative search tool

**Additional information:**
- General decision review information
- Direct links to all three decision review forms if they want to proceed without representative

### 4.5 Tool features

#### Help text

**[FIGURE 28: Screenshot - Help text collapsed and expanded states]**

**Every question includes help text** accessible by:
- Clicking "i" icon
- Clicking "More information about [topic]" link
- Accordion-style expansion

**Help text provides:**
- Plain language explanations of complex VA terms
- Examples to illustrate concepts
- PACT Act information where relevant
- Additional context for decision-making

#### Progress indicator

**[FIGURE 29: Screenshot - Progress indicator]**

Tool shows Veterans where they are in the process:
- Question number
- Visual progress bar (if applicable)
- Section indicator (Eligibility Screening vs Situation-Specific Questions)

#### Navigation

**[FIGURE 30: Screenshot - Back button and navigation]**

**Veterans can:**
- Click "Back" button to return to previous question and change answers
- Restart the tool at any time from any page
- Navigate forward only by answering the current question

**Note:** Tool does not save progress. If Veteran leaves and returns, they must start over.

#### Mobile responsiveness

**[FIGURE 31: Screenshot - Mobile view of question]**

**On mobile devices:**
- Single column layout
- Large, touch-friendly buttons
- Help text remains accessible
- All functionality preserved
- Vertical scrolling for longer content

---

## Major issues and error messages

This section documents common issues Veterans may encounter and how to resolve them.

### Issue 1: Tool not loading / blank page

**[FIGURE 32: Screenshot - Blank page or loading error]**

**What Veterans see:** Blank screen, "Page not found," or indefinite loading spinner

**Cause:**
- Browser compatibility issue
- Connection timeout
- Cached data conflict
- Server issue

**Resolution:**
1. Refresh the page (F5 or Ctrl+R)
2. Try a different browser (Chrome, Firefox, Edge, Safari)
3. Clear browser cache and cookies
4. Check internet connection
5. Try again in 15-30 minutes if server issue

**Escalation:** If problem persists across browsers and after cache clearing, report technical issue to [PLACEHOLDER: Contact/process]

---

### Issue 2: Tool freezes or gets stuck on a question

**[FIGURE 33: Screenshot - Page frozen, buttons not responding]**

**What Veterans see:** Cannot click buttons, page unresponsive, spinner continues indefinitely

**Cause:**
- JavaScript error
- Connection issue mid-session
- Browser incompatibility

**Resolution:**
1. Wait 30 seconds to see if page responds
2. Refresh the page (will restart tool from beginning)
3. Try different browser
4. Disable browser extensions that might interfere
5. Check browser console for errors (if technically savvy)

**Note:** Veterans cannot save progress, so refreshing means starting over

**Escalation:** Report persistent freezing issues with browser version and operating system details

---

### Issue 3: Questions don't make sense to Veteran

**[FIGURE 34: Screenshot - Question with confusing terminology]**

**What Veterans see:** Question text with VA terminology they don't understand

**Cause:** Complex VA-specific terminology even with plain language efforts

**Resolution:**
1. Click help text icon or "More information" link on the question
2. Read expanded explanation and examples
3. Contact Contact Center for explanation (1-800-827-1000)
4. Consult with accredited representative for personalized guidance

**Not an error:** Tool is working as designed; Veteran needs clarification

**Note:** Document which questions are confusing for future improvements

---

### Issue 4: Link to recommended form is broken

**[FIGURE 35: Screenshot - 404 or broken link error after clicking form link]**

**What Veterans see:** Error page after clicking "File a [pathway]" button from results page

**Cause:**
- Form URL changed
- Temporary form system outage
- Network routing issue

**Resolution:**
1. Provide direct URL to form:
   - Supplemental Claim: [PLACEHOLDER: URL to 20-0995]
   - Higher-Level Review: [PLACEHOLDER: URL to 20-0996]
   - Board Appeal: [PLACEHOLDER: URL to 10182]
2. Veteran can also search for form number on VA.gov
3. Try again in 15-30 minutes if form system issue

**Escalation:** Report broken link immediately to [PLACEHOLDER: Contact] for urgent fix

---

### Issue 5: Recommendation doesn't match what Veteran expected

**[FIGURE 36: Screenshot - Result page with recommendation Veteran disagrees with]**

**What Veterans see:** Recommendation for pathway different from what they thought they needed

**Cause:**
- Veteran misunderstood a question
- Veteran's situation doesn't match their self-assessment
- Veteran has incomplete understanding of pathway requirements
- Tool logic may not cover edge cases

**Resolution:**
1. Veteran can click "What if I don't agree with this recommendation?" accordion on results page
2. Veteran can retake the tool and review their answers
3. Veteran can choose a different pathway - tool is guidance only, not binding
4. Recommend consulting accredited representative for personalized advice
5. Contact Center can explain why tool made that recommendation based on answers

**Not an error:** Tool provides guidance based on answers given. Veterans have final choice.

**Note:** If multiple Veterans report similar disagreements with specific question paths, may indicate tool logic issue to investigate

---

### Issue 6: Mobile display problems

**[FIGURE 37: Screenshot - Mobile display issue example]**

**What Veterans see:** Text overlapping, buttons cut off, can't click elements, strange formatting

**Cause:**
- Browser compatibility on mobile
- Specific device/OS combination issue
- Viewport sizing issue

**Resolution:**
1. Rotate device to landscape mode
2. Zoom out if page appears too large
3. Try different mobile browser
4. Use desktop/laptop if available
5. Ensure mobile OS and browser are updated

**Escalation:** Report specific device model, OS version, and browser version for devices with persistent issues

---

### Issue 7: Can't save progress / tool makes Veteran start over

**[FIGURE 38: Screenshot - Veteran returns to tool and must start from beginning]**

**What Veterans see:** Return to tool after leaving, must answer all questions again from start

**Cause:** This is how the tool is designed - it does not save progress

**Resolution:**
1. Explain tool does not save progress for privacy reasons
2. Veteran should complete tool in one sitting (5-10 minutes)
3. Veteran can bookmark or screenshot results page when finished
4. If Veteran needs to leave, they'll need to restart when returning

**Not an error:** Tool is working as designed

**Potential workaround:** Veteran could take notes on answers to quickly re-enter if interrupted

---

### Issue 8: Accessibility issues (screen reader, keyboard navigation, contrast)

**[FIGURE 39: Screenshot - Accessibility feature in use]**

**What Veterans see:** Screen reader not reading content correctly, can't navigate with keyboard, text too low contrast

**Cause:** Accessibility bug or limitation

**Resolution:**
1. Verify browser accessibility features are enabled
2. Try different screen reader or assistive technology
3. Increase browser text size or use browser zoom
4. Enable high contrast mode in OS settings
5. Contact accessibility team for specific issues

**Escalation:** Report accessibility issues to [PLACEHOLDER: Accessibility team contact] with:
- Specific assistive technology used (screen reader name/version)
- Browser and version
- Nature of accessibility barrier
- Page/question where issue occurs

**Priority:** Accessibility issues should be escalated quickly for remediation

---

## Table of figures

1. Figure 1: VA.gov homepage with Decision Reviews navigation highlighted
2. Figure 2: Decision Reviews hub page with Onramp link
3. Figure 3: Onramp tool on mobile device
4. Figure 4: Introduction page full view
5. Figure 5: Q1 - Decision status
6. Figure 6: Q1A - Disability claim filed
7. Figure 7: Q2 - Claim decision timeline
8. Figure 8: Q3 - Contested claim
9. Figure 9: Q4 - Service connection (Variant A)
10. Figure 10: Q5 - Condition worsened
11. Figure 11: Q6 - Disagree with decision
12. Figure 12: Q7 - Law or policy change
13. Figure 13: Q8 - New and relevant evidence
14. Figure 14: Q9 - Prior decision type
15. Figure 15: Q10 - Hearing preference
16. Figure 16: Additional question example 1
17. Figure 17: Additional question example 2
18. Figure 18: Additional question example 3
19. Figure 19: Additional question example 4
20. Figure 20: Additional question example 5
21. Figure 21: Supplemental Claim recommendation full page
22. Figure 22: Higher-Level Review recommendation full page
23. Figure 23: Board Appeal recommendation full page
24. Figure 24: Wait for decision result page
25. Figure 25: File initial claim first result page
26. Figure 26: File new claim result page
27. Figure 27: Contact representative result page
28. Figure 28: Help text collapsed and expanded states
29. Figure 29: Progress indicator
30. Figure 30: Back button and navigation
31. Figure 31: Mobile view of question
32. Figure 32: Blank page or loading error
33. Figure 33: Page frozen, buttons not responding
34. Figure 34: Question with confusing terminology
35. Figure 35: Broken link error after clicking form link
36. Figure 36: Result page with recommendation
37. Figure 37: Mobile display issue example
38. Figure 38: Tool restart after leaving
39. Figure 39: Accessibility feature in use

---

**END OF GUIDE**

**Document Information:**
- **Version:** 1.0 DRAFT
- **Last Updated:** [Date]
- **Product Owner:** Amy Lai
- **For questions or updates:** [PLACEHOLDER: Contact information]

**Conversion Notes for Word:**
- Add VA logo to title page
- Convert all [FIGURE X] placeholders to actual high-resolution screenshots
- Create bookmarks for each figure
- Make Table of Contents clickable with links to sections
- Make Table of Figures clickable with links to bookmarked figures
- Use Arial font throughout
- Figure captions in 9-point italic
- Ensure consistent header/subhead sizing
- Add page numbers
- Consider VA letterhead/branding on first page
