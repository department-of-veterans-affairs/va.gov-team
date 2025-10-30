# VA Research Findings Template Completion Guide

## Overview
This guide instructs Copilot on how to accurately populate the VA research-findings-template.md using completed UX research synthesis and analysis. The goal is to convert synthesized insights into a structured research report while maintaining fidelity to source material and avoiding extrapolation, representative data, or unsupported claims.

**Core Principle**: Every statement, quote, statistic, and recommendation in the completed template must be directly traceable to source research materials. Do not infer, extrapolate, approximate, or create "representative" information.

---

## Front Matter (YAML Metadata)

The front matter section must be completed with factual data directly from research documentation.

### Required Fields

#### `title`
- Format: "[Study Name] Research Findings"
- Use the exact study name as documented in the research plan
- Example: "[Veteran Health Portal Navigation] Research Findings"
- **Do not create a title; use the official study name**

#### `product`
- Insert the exact product name from the Product Outline
- Example: "Veteran Health Portal"
- **Verify against official product naming conventions**

#### `team`
- Insert the exact team name (e.g., "Digital Experience Team", "Veterans Health Services")
- Cross-reference with team documentation
- **Do not abbreviate or create team names**

#### `office`
- Standard: "Office of the CTO - Digital Experience (OCTO-DE)"
- **Do not modify unless explicitly different from official VA structure**

#### `date`
- Format: YYYY-MM-DD
- Use the date research synthesis was completed
- **Not the date data collection began—use completion date**

#### `researchers`
- List all researchers and designers who conducted and synthesized the research
- Format: "First Name Last Name" or "First Last (Role)" if role clarification is needed
- Example: "Sarah Smith (UX Researcher)", "Michael Johnson (Interaction Designer)"
- **Include only people directly involved in this research; do not invent contributors**

#### `research_goals`
- List 3-5 goals directly from the Research Plan document
- Use exact wording from official research documentation when possible
- Example: "Understand how Veterans navigate the health services portal", "Identify barriers to appointment scheduling"
- **Do not paraphrase or interpret goals; copy them directly**

#### `methodology`
- List each research method used in this study
- Examples: "Moderated usability testing", "Semi-structured interviews", "Card sorting"
- Include participant count per method if multiple methods were used
- **Only list methods actually employed; do not include planned but unexecuted methods**

#### `devices_used`
- Count participants who used each device type during research sessions
- Fields: `desktop`, `tablet`, `smartphone`, `assistive_technology`
- Use actual counts from research participant data; do not estimate
- Enter "0" if a device was not used; enter "unknown" if data was not collected
- **These must be verifiable from session notes or participant logs**

#### `participants_total`
- Insert total number of participants who completed the research
- **This is a verifiable fact; do not approximate or estimate**

#### `demographics`
- Populate each demographic category with exact counts from Perigean recruitment survey data
- Enter "0" for any demographic not represented; enter "unknown" for uncollected data
- **Do not estimate or interpolate missing demographic data**
- Include all listed categories: veterans, service_members, caregivers, dependents, VA_staff
- Age, education, location, race, and disability categories must match recruitment survey exactly
- **Each number must be traceable to recruitment data or marked "unknown" or "0"**

---

## Header Section

### Title and Contact Information

```markdown
# [Study] Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), Product Name, Team Name**

**Date:** MM/DD/YYYY

**Contacts:** [Researcher/Designer 1], [Researcher/Designer 2]
```

**Completion Instructions:**
- Replace [Study] with exact study name
- Replace Product Name and Team Name with official names (from Product Outline)
- Replace MM/DD/YYYY with completion date
- List 1-2 primary contact researchers for questions about this study
- **Do not create contact names; use actual researchers on this project**

### Research Readout Link

```markdown
**[Research Readout (PDF)](link-here)**  
*Add a link to your research readout deck, if available.*
```

**Completion Instructions:**
- If a research readout deck exists, insert the GitHub link to the PDF
- Add "user-content-" prefix for keyboard navigation accessibility
- If no readout exists, remove this line entirely; do not leave "link-here" placeholder
- **Verify the link is functional before publishing**

---

## Research Goals Section

### Purpose
Provide context for how this research fits into the Veteran's journey and supports product strategy.

### Completion Instructions

**Include:**
1. **Journey context**: Explain which moments in the Veteran's journey this research addresses
   - Reference the VA Veteran Journey Map
   - Be specific about the life event or service interaction
   - Example: "This research supports Veterans during the 'Schedule and Receive Care' phase of their healthcare journey"

2. **Key moments**: List 2-3 specific moments this tool/feature supports
   - Use direct language from journey maps
   - Connect to actual Veteran behaviors observed in research
   - Example: "Finding a VA facility near their home", "Scheduling an initial appointment"

3. **Intended outcomes**: State what you're trying to achieve for Veterans and stakeholders
   - Outcomes for Veterans: "Reduce time to schedule an appointment from 20 minutes to 5 minutes"
   - Outcomes for VA: "Increase appointment scheduling completion rate from 65% to 85%"
   - **Use only measurable outcomes with specific targets, not vague aspirations**

4. **Guiding questions**: List the 2-3 key questions that shaped research design
   - Copy directly from Research Plan when possible
   - Examples: "Do Veterans understand the appointment availability options?", "What information is most critical when choosing a care provider?"
   - **These should be research questions, not philosophical questions**

### What NOT to Include
- Generic mission statements or office values
- Goals that were planned but not actually pursued in this research
- Paraphrased or summarized goals (use exact language)
- Aspirational future states unrelated to this specific study

---

## Research Questions Section

### Purpose
Articulate the specific questions that guided data collection and analysis.

### Completion Instructions

**Format:**
- Use bullet points
- Write as complete questions (start with "Do...", "How...", "What...", "Why...")
- List 3-7 research questions (not more; prioritize the central questions)

**Rules:**
- Copy research questions directly from Research Plan documentation
- **Do not paraphrase or combine multiple questions**
- Each question should be independently answerable through the research conducted
- Questions should map to findings (if a question doesn't lead to findings, it may not belong here)
- **Do not include questions that were asked but not addressed in findings**

**Examples:**
- "How do Veterans currently search for VA benefits?"
- "What terminology do Veterans use when looking for mental health services?"
- "What barriers prevent Veterans from completing the application process?"

---

## Methodology Section

### Purpose
Provide sufficient detail for others to understand how data was collected.

### Completion Instructions

**For each research method used, include:**

1. **Method name**: The research technique employed
   - Examples: "Moderated usability testing", "Semi-structured interviews", "Card sorting", "Tree testing", "A/B test", "Survey"
   - **Use standardized research terminology**

2. **Participant count**: Number of participants in this method
   - Format: "Moderated usability testing (N=12)"
   - **Use exact count; do not approximate**

3. **Brief description**: 1-2 sentences explaining what participants did
   - Example: "Participants completed a 60-minute moderated session where they were asked to schedule a VA appointment using the new portal interface"
   - Include duration if relevant
   - Include key tasks or activities
   - **Be specific about what participants actually did, not what you intended them to do**

4. **Key parameters** (if applicable):
   - Moderated testing: Remote or in-person? Duration?
   - Interviews: Semi-structured or unstructured? Duration?
   - Surveys: Online or paper? Incentive offered?
   - A/B tests: What was tested? Duration? Sample sizes?
   - **Report actual parameters used, not planned parameters**

### What NOT to Include
- Methods that were planned but not executed
- Detailed analysis procedures (save for synthesis tools section)
- Methodological critiques or limitations (save for Further Research Needed section)
- Hypothetical "what if we had done X" scenarios

### Example

```markdown
## Methodology

- **Moderated Usability Testing (N=12)**: Participants completed a 60-minute remote session where they were asked to complete three tasks related to appointment scheduling using a prototype of the new portal. Sessions were conducted over Zoom and recorded with participant consent.

- **Semi-Structured Interviews (N=8)**: Participants engaged in 45-minute interviews exploring their current workarounds for finding VA facilities and their mental models of VA service organization. Interviews were conducted via phone and recorded.

- **Card Sorting (N=15)**: Participants completed an open card sort to organize 24 VA benefit categories using OptimalSort. Session duration averaged 20 minutes.
```

---

## Hypotheses and Conclusions Section

### Purpose
State assumptions tested during research and report findings about whether those assumptions were validated.

### Completion Instructions

**For each hypothesis:**

1. **Hypothesis statement**: 
   - Format: Clear, testable, specific statement
   - Example: "Veterans can complete the new appointment scheduling flow without assistance"
   - Source: Hypotheses should come from Research Plan or pre-research planning documents
   - **Use exact language from planning docs; do not paraphrase**

2. **Conclusion**: 
   - Choose ONE of these conclusions based on research evidence:
     - **Definitely True**: Evidence overwhelmingly supports hypothesis
     - **Likely True**: Evidence generally supports hypothesis with minor qualifications
     - **Likely False**: Evidence generally contradicts hypothesis
     - **Definitely False**: Evidence strongly contradicts hypothesis
     - **Maybe True**: Evidence is mixed or insufficient to determine
     - **Not enough information**: Research did not collect data to answer this hypothesis
   - **Do not use other conclusion types; stick to these six categories**

3. **Supporting evidence**:
   - Cite specific data: task completion rates, quote frequency, statistical results
   - Example: "12 of 12 participants (100%) completed the appointment scheduling task without assistance in under 3 minutes"
   - Include one exact verbatim quote if available, following quotation requirements
   - Reference specific findings that address this hypothesis
   - **Evidence must be directly from research data; do not infer or extrapolate**

### Format Example

```markdown
## Hypotheses and Conclusions

- **Hypothesis:** Veterans can easily understand the appointment availability calendar interface.
  - **Likely True**
  - Supporting evidence: 10 of 12 participants (83%) correctly identified available appointment slots on first attempt. P2 stated, "The calendar is pretty straightforward—I can see which days have openings." However, P7 and P11 initially tried to click on grayed-out dates, suggesting the visual distinction could be stronger.

- **Hypothesis:** Veterans prefer to filter appointments by location before viewing times.
  - **Definitely False**
  - Supporting evidence: All 12 participants filtered by time/availability first, then checked location. P5 commented, "I care about when I can go, the location is less important."
```

### What NOT to Include
- Hypotheses not actually tested in this research
- Conclusions not supported by data
- Hedging language like "it seems" or "one might argue" (use clear conclusion labels instead)
- New hypotheses generated during analysis (those belong in Further Research Needed)

---

## Key Findings Section

### Purpose
Present 5-10 of the most impactful, actionable findings from research synthesis.

### Completion Instructions

**Rules for Key Findings:**

1. **Limit to 5-10 findings** (prioritize; exclude supplementary insights)
   - These should be your highest-priority findings based on the Finding Prioritization Framework
   - If you have more than 10, move lower-priority findings to "Additional Insights" section

2. **Write as stand-alone, scannable statements**
   - Format: "[Who] [does/experiences/needs] [what] [why/context]"
   - Example: "Most participants used the search field to locate forms, often searching for 'veteran health'"
   - Example: "Participants struggled with the secondary caregiver section on the form"
   - **Each finding should be immediately understandable without reading the Details section**

3. **Lead with the insight, not the data**
   - Start with what it means, then support with evidence
   - Avoid: "8 of 12 participants had trouble with the form"
   - Better: "Participants struggled to understand form field labels because they use technical VA terminology"

4. **Write in clear, conversational language**
   - Avoid research jargon
   - Sound like something you'd say to a colleague
   - **Do not write in academic or technical language**

5. **Focus on user needs, pain points, and behaviors**
   - Each finding should relate to participant behavior, experience, or needs
   - Include the "so what"—why this matters
   - **Do not include findings that are interesting but not actionable**

6. **Base each finding on evidence threshold**
   - Trend findings: Affect >30% of participants or multiple research methods
   - Pattern findings: Affect 15-30% of participants
   - Notable findings: Affect <15% but have high severity or represent critical edge cases
   - **Do not include findings without clear evidence basis**

### Format Example

```markdown
## Key Findings

1. **Most Veterans start their search using broad terminology rather than official benefit names.** Participants commonly searched using language like "veteran health," "disability help," or "military retirement" rather than searching by official benefit categories. This suggests that navigation systems should accommodate common language patterns and provide translation to official terms.

2. **The current form layout causes confusion about which fields are optional vs. required.** 7 of 12 participants (58%) skipped fields they believed were optional but were actually required, leading to form submission errors. P3 stated, "I didn't realize that section was required—there's no clear indicator."

3. **Veterans lack mental models for distinguishing between similar benefit types.** When asked to categorize VA benefits, participants frequently confused disability compensation with pension benefits (6 of 8 interview participants), suggesting these categories need clearer differentiation.

4. **Mobile users frequently abandon the application process after the first error message.** In mobile usability sessions, 4 of 6 participants who encountered an error did not attempt to correct it; instead, they closed the browser. In contrast, 10 of 12 desktop users persisted through errors.

5. **Participants value appointment confirmation through multiple channels but don't expect coordination between them.** When asked about appointment communications, participants expected separate email, text, and phone confirmations but did not realize these came from one system, leading to confusion when information conflicted.
```

---

## Details of Findings Section

### Purpose
Provide detailed supporting evidence for each key finding, including quotes and data visualization.

### Completion Instructions

**For each key finding, create a subsection with:**

1. **Heading**: 
   - Format: `### Finding [Number]: [Key insight from above]`
   - Use the exact finding title from Key Findings section

2. **Brief description** (1-2 sentences):
   - Restate the finding in slightly more detail
   - Provide essential context
   - Example: "Veterans rely on informal, colloquial language when searching for benefits rather than official benefit names. This pattern appeared across both online search behavior and interview responses."

3. **Supporting data** (use bullets; include 2-3 supporting elements per finding):

   a. **Exact verbatim quotes**:
   - Format: `_Supporting data: **P[number]**: "[exact quote]" (research method, date)_`
   - Each quote must be EXACT from transcript or written response
   - Include participant identifier and context
   - Example: `_Supporting data: **P4**: "I don't know the difference between 'disability compensation' and 'pension'—they sound the same to me" (semi-structured interview, 2025-10-15)_`
   - **Include 1-2 quotes per finding; do not use representative or paraphrased quotes**

   b. **Statistical data**:
   - Format: `_Supporting data: X of Y participants (Z%) [behavior/experience]_`
   - Use exact counts and percentages from research data
   - Example: `_Supporting data: 7 of 12 participants (58%) skipped at least one field they believed was optional_`
   - **Do not round percentages; use exact calculation**

   c. **Visual evidence**:
   - Format: `_Supporting data: ![description of image](link-to-github-file.png)_`
   - Include screenshots, heatmaps, user flow diagrams, or other visual artifacts
   - Add images to a GitHub folder and link them
   - Provide descriptive alt text for accessibility
   - **Images must be actual research artifacts, not created illustrations**

   d. **Behavioral observations** (from session notes):
   - Format: `_Supporting data: During usability testing, [specific behavior observed across sessions]_`
   - Example: `_Supporting data: During moderated usability testing, all participants using mobile devices attempted to pinch-zoom the form, indicating confusion about the layout_`
   - **Observations must come from session notes or video review; do not infer behavior**

### Format Example

```markdown
### Finding 1: Most Veterans start their search using broad terminology rather than official benefit names

Veterans commonly use informal language like "veteran health," "disability help," or "military retirement" when searching for benefits, rather than searching by official benefit category names. This pattern appeared consistently across both search query analysis and interview responses.

- _Supporting data: **P2**: "I just searched for 'veteran health stuff' and figured out what I needed from there" (usability test, 2025-10-22)_
- _Supporting data: Search analytics show 67% of queries for disability-related benefits use non-official terminology (analysis of past 90 days of search logs)_
- _Supporting data: **P5**, **P8**, and **P11** all used variations of "military retirement" when searching for retirement benefits, even though the official category is "VA Pension"_
```

### What NOT to Include
- Interpretations or conclusions (save for Recommendations)
- Comparative language like "most veterans" without data backing
- Speculative reasoning ("this probably means...")
- Details about individual participants beyond their feedback
- Paraphrased quotes (use only exact verbatim quotes or state "quote unavailable")

---

## Additional Insights Section

### Purpose
Include valuable observations that don't represent patterns but are still worth noting to stakeholders.

### Completion Instructions

**Include:**
- Powerful or memorable user comments that illuminate experience
- Unexpected behaviors or edge cases worth investigating
- Contradictions or outlier experiences
- Observations from only 1-2 participants but with high severity impact
- Unexpected positive moments or delight factors

**Rules:**
- Label as "Additional Insights" to distinguish from Key Findings
- Include exact quotes for individual comments
- Explain why this insight matters despite limited frequency
- **Do not include obvious or trivial observations**

**Format:**

```markdown
## Additional Insights

**One participant mentioned using the mobile app without any training.** P6 reported discovering features through trial and error: "I just started clicking around and figured out where everything was." While this was not a pattern (other participants sought help), it suggests some users are comfortable exploring without guidance.

**A participant with a visual disability found the screen reader support inadequate.** P12 (using NVDA screen reader) stated, "The form fields don't have clear labels, so the screen reader just reads 'input field' over and over. I can't tell which field is which." This represents a critical accessibility gap for the disability community.
```

---

## Recommendations Section

### Purpose
Provide specific, actionable recommendations for design and product decisions grounded in research evidence.

### Completion Instructions

**For each recommendation:**

1. **Recommendation statement**:
   - Format: Start with an action verb: "Implement...", "Update...", "Add...", "Revise...", "Consider...", "Test..."
   - Be specific: name the element, feature, or section you're recommending change to
   - Examples: "Implement synonym matching in search to support colloquial benefit terminology", "Update form field labels to use plain language instead of technical VA terms"
   - **Do not use vague language like "improve the user experience"**

2. **Supporting evidence**:
   - Reference the specific finding this recommendation addresses
   - Example: "This addresses Finding 3: Veterans lack mental models for distinguishing between similar benefit types"
   - Cite the data: "7 of 12 participants (58%) confused [X] with [Y]"
   - Include a quote if available: "As P3 noted, '[quote]'"
   - **Evidence must directly connect recommendation to research finding**

3. **Specific implementation details** (when applicable):
   - Reference specific VADS patterns, components, or systems
   - Example: "Use the VADS 'Alert' component to highlight required fields, updating the visual treatment from [current] to [proposed]"
   - Consider VA's existing tools and constraints
   - Example: "Implement within current form builder parameters; does not require new infrastructure"
   - Include success criteria or how to test
   - Example: "Test with 8-10 Veterans to validate that >80% identify all required fields without error"
   - **Be specific enough that a designer could implement without follow-up questions**

4. **Priority** (if you have multiple recommendations):
   - Label as "High Priority", "Medium Priority", or "Low Priority"
   - High Priority: Blocking task completion, critical usability issue, affects >30% of participants
   - Medium Priority: Affects 15-30% of participants or impacts user satisfaction
   - Low Priority: Affects <15% of participants or nice-to-have improvement

### Format Example

```markdown
## Recommendations

1. **Implement synonym matching in the search functionality to support colloquial benefit terminology** (High Priority)
   - Supporting evidence: This addresses Finding 1. Search analytics show 67% of queries use non-official terminology. As P2 noted, "I just searched for 'veteran health stuff' and figured out what I needed from there."
   - Implementation: Update the search algorithm to map common search terms ("health," "retirement," "mental health care") to official benefit categories. Use the existing search index but add a synonym layer in the current search service. This can be tested with the next 100 search queries by measuring whether searches using colloquial terms return relevant benefits.

2. **Revise form field labels to use plain language instead of technical VA terminology** (High Priority)
   - Supporting evidence: This addresses Finding 2. 7 of 12 participants (58%) skipped required fields, and P3 stated, "I didn't realize that section was required—there's no clear indicator." During accessibility testing, P12 (screen reader user) reported, "The form fields don't have clear labels, so the screen reader just reads 'input field' over and over."
   - Implementation: Update all form field labels in the VADS form component system. Use plain language labels (e.g., "When do you want to start receiving benefits?" instead of "Effective date of claim"). Include clear required/optional indicators using both visual treatment (red asterisk) and programmatic labels for assistive technology. Pair with VBA team to ensure terminology aligns with backend systems. Test with at least 8 Veterans and 2 assistive technology users to validate that >85% correctly identify required fields and understand field purpose.

3. **Design a mobile-specific error recovery pattern** (High Priority)
   - Supporting evidence: This addresses Finding 4. In mobile usability sessions, 4 of 6 participants (67%) who encountered an error abandoned the application, whereas 10 of 12 desktop users (83%) persisted through errors.
   - Implementation: Create a new VADS mobile alert component that includes: (1) plain-language error message, (2) specific instruction on how to fix the error, (3) option to save progress and return later. Test with 6 mobile users to validate that >50% successfully recover from an error without abandonment.
```

### What NOT to Include
- Recommendations without supporting evidence
- Generic or aspirational recommendations ("make it better")
- Recommendations not grounded in findings
- Implementation details you cannot verify are feasible
- Recommendations that require speculation about technical constraints

---

## Product User and Business Outcomes Section

### Purpose
Connect research findings to the product's strategic goals and explain how this research supports desired outcomes.

### Completion Instructions

**Refer to the Product Outline for stated goals.**

**For Desired User Outcome:**
1. State the desired outcome from your Product Outline
   - Example: "Veterans can schedule appointments in under 5 minutes without assistance"
2. Explain how findings and recommendations support this outcome
   - Connect specific findings to progress toward this outcome
   - Example: "This research identified that [specific barrier] currently prevents this. Our recommendations to [specific changes] directly address this barrier. If implemented, [metrics] should improve."
3. **Do not create outcomes; use stated Product Outline outcomes**
4. **Only claim support for outcomes directly addressed by this research**

**For Desired Business Outcome:**
1. State the desired outcome from your Product Outline
   - Example: "Increase appointment scheduling completion rate from 65% to 85%"
2. Explain how findings support measurement or achievement of this outcome
   - Connect research to specific KPIs
   - Example: "Our findings on [barrier] and recommendations for [solution] directly address the top reason for abandonment. Implementation should increase completion rate by approximately [X]%."
3. **Use only business outcomes stated in Product Outline**
4. **Do not invent business metrics or projected impacts**

### Format Example

```markdown
## Product User and Business Outcomes

### Desired User Outcome
Enable Veterans to schedule VA appointments in under 5 minutes without assistance.

This research directly supports this outcome by identifying specific barriers that extend the scheduling time. Finding 2 identified that unclear form field labels cause Veterans to skip required fields, leading to submission errors and restarts. Finding 4 showed that mobile users abandon the process after encountering errors. Our recommendations to implement clearer labeling and mobile-specific error recovery directly address these time barriers. If implemented, we project the average time to completion will decrease from 8.3 minutes to under 5 minutes.

### Desired Business Outcome
Increase appointment scheduling completion rate from 65% to 85%.

This research supports achievement of this goal by identifying the top three abandonment points: (1) confusion about required fields (Finding 2), (2) lack of error recovery on mobile (Finding 4), and (3) unclear appointment selection interface (Finding 3). Each of our recommendations directly addresses one of these barriers. Based on the frequency of these issues, addressing all three should increase completion rate by approximately 15-20 percentage points.
```

---

## Key Performance Indicators Section

### Purpose
Explain how research findings will inform KPI measurement and demonstrate progress.

### Completion Instructions

**Refer to the Product Outline for listed KPIs.**

**For each relevant KPI:**

1. **State the KPI** (from Product Outline):
   - Example: "Task completion rate for appointment scheduling"
   - Example: "Average time to schedule an appointment"
   - Example: "Mobile vs. desktop completion rate"

2. **Explain how research supports measurement of this KPI**:
   - How will findings inform what to measure?
   - Example: "This research revealed that mobile users have a 67% abandonment rate vs. 17% for desktop users. We should establish separate completion rate KPIs for mobile and desktop to track whether our mobile-specific error recovery improves mobile completion."
   - Example: "Our finding that form field confusion causes 58% of participants to skip required fields demonstrates that measuring 'required field completion accuracy' is a critical KPI. We recommend establishing a baseline and tracking whether labeling improvements increase this metric."

3. **Connect to specific findings**:
   - Reference which finding motivated this KPI measurement
   - **Do not create new KPIs; only explain how to measure existing KPIs better**

4. **Do not project outcomes**; only explain measurement strategy

### Format Example

```markdown
## Key Performance Indicators

### KPI 1: Task Completion Rate for Appointment Scheduling
This research revealed distinct completion patterns between mobile and desktop users, with mobile users abandoning 67% of the time vs. 17% for desktop users (Finding 4). We recommend separating the overall completion rate KPI into mobile and desktop metrics to accurately track performance by platform. This will allow us to measure whether our mobile-specific error recovery recommendation improves mobile completion rates.

### KPI 2: Average Time to Schedule an Appointment
This research identified three barriers that extend scheduling time: unclear form labels, error recovery friction, and confusing appointment selection. We recommend establishing a baseline time-to-completion for the current interface (currently 8.3 minutes average), then tracking whether our recommendations reduce this time. We specifically recommend tracking time-to-completion by device (mobile vs. desktop) given the significant differences revealed in this research.

### KPI 3: Form Abandonment Rate by Point of Exit
This research pinpointed specific form sections where abandonment occurs (Finding 2: required field confusion; Finding 3: appointment selection confusion). We recommend implementing analytics to track where users exit the form. This will allow us to measure whether our recommendations for clearer labels and appointment interface improvements reduce abandonment at these specific points.
```

---

## Next Steps Section

### Purpose
Outline immediate, concrete actions based on findings, including owners and timeline.

### Completion Instructions

**For each recommended action:**

1. **Action**: State the specific next step
   - Example: "Schedule design team meeting to prioritize recommendations"
   - Example: "Create design spec for revised form labels using VADS components"
   - Example: "Request access to VADS component library for mobile error handling patterns"

2. **Owner**: Assign responsibility to a specific person or role
   - Example: "[Name], Product Manager"
   - Example: "Design Team Lead"
   - **Use actual names and roles; do not leave as "TBD"**

3. **Timeline**: Provide realistic timeline
   - Example: "Week of October 25"
   - Example: "2 weeks"
   - Example: "By end of Q4"
   - **Be specific; do not use vague timelines like "soon"**

4. **Success criteria**: How will you know this step is complete?
   - Example: "Design spec completed and reviewed by stakeholders"
   - Example: "Test session scheduled with 6 participants"

### Format Example

```markdown
## Next Steps

| Action | Owner | Timeline | Success Criteria |
|--------|-------|----------|------------------|
| Schedule 90-minute design team meeting to prioritize and sequence the three recommendations | Sarah Smith, Product Manager | Week of October 25 | Meeting held; recommendations prioritized; roadmap created |
| Create detailed design specification for revised form labels (Finding 2), including VADS component updates and plain language content | Michael Johnson, Interaction Designer | 2 weeks (November 8) | Design spec reviewed by Product Manager, Content Designer, and VBA stakeholder |
| Conduct accessibility audit of mobile error recovery recommendation with screen reader and magnification users | Accessibility Lead | 3 weeks (November 15) | Audit complete; accessibility requirements documented |
| Schedule 2-week design validation test with 6-8 Veterans to validate revised labeling (Finding 2) | Sarah Smith, Product Manager | 4 weeks (November 22) | Participants recruited; test protocol finalized; session dates confirmed |
```

---

## Further Research Needed Section

### Purpose
Identify gaps in the current research and areas requiring additional investigation to make informed design decisions.

### Completion Instructions

**For each research gap:**

1. **Gap or question**: What remains unknown or ambiguous?
   - Example: "Whether Veterans on mobile devices would benefit from a 'save and return later' option more than desktop users"
   - Example: "How many different search terms Veterans use for disability-related benefits (only found 5 variations in current sample)"
   - Example: "Whether the form field label confusion affects all Veteran demographics equally or if it's specific to certain age groups or education levels"
   - **Do not include areas already thoroughly addressed in this research**

2. **Why this matters**: Why is this gap important?
   - Business impact: "This would inform whether to develop mobile-specific features"
   - User impact: "This would help us serve [user segment] better"
   - Strategic impact: "This would validate our approach before scaling"

3. **Suggested research approach** (optional):
   - "Follow-up study with [sample size] mobile users"
   - "Search analytics review for [specific query patterns]"
   - "A/B test [variation 1] vs. [variation 2] with [timeframe]"
   - **Do not detail full research plans; only suggest method and sample**

4. **Underrepresented groups**:
   - List demographic groups or user segments not adequately studied
   - Example: "Rural Veterans" (only 2 of 12 participants)
   - Example: "Veterans over 65" (only 1 of 12 participants)
   - Example: "Veterans using mobile devices exclusively" (conducted mainly on desktop in sessions)
   - **These should be populated from actual participant demographics**

### Format Example

```markdown
## Further Research Needed

### Research Gaps

- **Mobile-specific user needs**: This research primarily tested desktop and mobile use in lab settings. We need to understand mobile usage in real-world contexts (commuting, waiting for appointments). Suggested approach: Mobile diary study with 8-10 Veterans using the mobile app in their natural environment over 2 weeks.

- **Appointment selection mental models**: We found Veterans confused between appointment types but didn't deeply explore how they differentiate between in-person, virtual, and phone appointments. This matters for designing the appointment selection interface. Suggested approach: Follow-up interviews with 6-8 Veterans exploring their understanding of appointment type differences.

- **Search term variations**: Search analytics showed 67% of queries use non-official terminology, but we only identified 5 common variations in our sample. We need comprehensive search term analysis to ensure synonym mapping covers the full range. Suggested approach: Analytics review of past 6 months of search logs to identify all unique search term patterns.

### Underserved Groups Not Yet Studied

- **Rural Veterans**: Only 2 of 12 participants were from rural areas. Rural Veterans may have different constraints (limited facility options, travel distance) affecting appointment scheduling prioritization.
- **Veterans over 65**: Only 1 of 12 participants was over 65. This group may have different technical proficiency or accessibility needs.
- **Veterans with cognitive disabilities using assistive technology**: No participants in this study used speech input technology. This group may face additional barriers.
- **Non-English speaking Veterans**: No non-English speakers were included. Language may affect understanding of field labels and error messages.
```

---

## Appendix Section

### Purpose
Provide supporting documentation and resources.

### Completion Instructions

**Research Documents:**
- List all primary research documents
- Include GitHub links to:
  - Product Outline (link to official product doc)
  - Research Plan (link to research-plan.md)
  - Conversation Guide or Interview Protocol (link to your guide)
  - Interview Transcripts (link to folder; mark as restricted if necessary)
  - Usability Test Session Notes (link to folder)
- **Only link to documents that actually exist; do not create placeholder links**

**Tools Used for Synthesis:**
- List analytical tools and techniques actually employed
- Examples: "Mural affinity mapping", "Thematic analysis coding in Dovetail", "Excel data aggregation", "Journey mapping workshop"
- **Do not list tools you planned to use but didn't; only tools actually used**

**Pages and Applications Tested:**
- Link to prototypes, staging URLs, or live pages tested during sessions
- Include the commit SHA or version tested if applicable
- Example: "[VA Appointment Scheduler Prototype](link) (version tested: commit abc123)"
- **Verify links are still functional or note if no longer available**

**Other Supporting Documents:**
- List any additional materials created during this research:
  - Personas or user segments defined during analysis
  - User journey maps or flow diagrams
  - Heuristic evaluation results
  - Competitor analysis
  - Search analytics reports
- Include brief description and link

**Secondary Research:**
- List any secondary research sources used to contextualize findings
- Examples: "VA.gov web analytics for past 90 days", "Previous form field usability study (2024)", "Industry benchmarks for form completion rates"
- Include link or source citation
- **Only include secondary research actually referenced in this document**

### Format Example

```markdown
## Appendix

### Research Documents
- [Product Outline - VA Appointment Scheduler](link-to-product-outline)
- [Research Plan - Appointment Scheduling Usability Study](link-to-research-plan)
- [Conversation Guide - Semi-Structured Interviews](link-to-conversation-guide)
- [Interview Transcripts](link-to-transcripts-folder) (restricted access)
- [Usability Test Session Notes](link-to-session-notes-folder)

### Tools Used for Synthesis
- Mural affinity mapping (clustering findings by theme)
- Dovetail for qualitative coding and analysis
- Excel data aggregation for participant demographics and task completion rates
- Journey mapping workshop with design team to connect findings to user experience

### Pages and Applications Tested
- [VA Appointment Scheduler Prototype](link-to-prototype) (version: commit 047f96e)
- [Current VA Appointment Scheduling Interface (production)](link-to-live-page)

### Other Supporting Documents
- [User Personas for Veteran Appointment Scheduling](link-to-personas)
- [Appointment Scheduling User Journey Map](link-to-journey-map)
- Search analytics report showing query patterns (July-September 2025)

### Secondary Research
- VA.gov analytics for past 90 days showing form abandonment points
- 2024 study: "Form Field Label Best Practices for Government Services"
- Industry benchmark: Average form completion rate for healthcare scheduling (78%)
```

---

## Research Participants Section

### Purpose
Provide complete demographic information for participants, including representation of underserved groups.

### Completion Instructions

**Participant Count:**
- State total number of participants in format: "We talked to **X participants.**"
- **Use exact count; do not round or estimate**

**Audience Segment:**
- List breakdown by role/audience
- Examples: Veterans, Caregivers, Family members of Veterans
- Use exact counts from Perigean recruitment survey
- Include only segments actually included in this study

**Demographics:**
Complete each demographic category using data directly from Perigean recruitment survey:

- **Gender**: Count each category reported
- **LGBTQ+**: Count each category reported (Transgender, Nonbinary/gender fluid, Gay/lesbian/bisexual)
- **Devices**: Count participants by device (Desktop, Tablet, Smartphone, Assistive Technology)
- **Age**: Provide exact count in each age bracket from survey
- **Education**: Exact count in each education level from survey
- **Geographic Location**: Urban/Rural counts
- **Race**: Count in each race category from survey
- **Disability and Assistive Technology**: Exact count for each AT type used

**Rules:**
- Use exact counts from recruitment data; do not estimate or round
- Enter "0" if no participants in that category
- Enter "unknown" if data was not collected
- **Every number must be traceable to recruitment survey**

### Underserved Groups Section

**Use VA's Recruitment Checker Spreadsheet:**
1. Duplicate the "Template" worksheet from [VA recruitment checker](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit#gid=1221033726)
2. Enter your participant information following Template Instructions
3. Take screenshot of completed cells
4. Use GitHub Copilot Chat to convert to accessible markdown table:
   - Prompt: "I want to convert these spreadsheet cells into a table in markdown:"
   - Paste cells from completed recruitment checker
   - Copy resulting markdown table
5. Paste markdown table into this section

**List underserved groups:**
- Identify all groups shown in RED from the recruitment checker (meaning you recruited below target numbers)
- Example: "Rural Veterans (recruited 2, target 8)", "Veterans with hearing disabilities (recruited 0, target 5)"
- Explain research impact: "This means our findings may not fully represent [group]'s needs and experiences"

**Example:**

```markdown
## Research Participants

### Recruitment Criteria
Participants were recruited through Perigean to reflect Veterans of diverse ages, education levels, technology comfort, and geographic locations. We specifically targeted participants with and without assistive technology experience to ensure accessibility perspectives were included in the research.

We talked to **12 participants.**

### Demographics

**Audience Segment:**
* Veterans: 11
* Caregivers: 1

**Gender:**
* Male: 8
* Female: 4

**LGBTQ+:**
* Transgender: 1
* Nonbinary, gender fluid, gender queer: 1
* Gay, lesbian, or bisexual: 2

**Devices Used During Study:**
* Desktop: 8
* Tablet: 2
* Smartphone: 6
* Assistive Technology: 2

**Age:**
* 25-34: 1
* 35-44: 2
* 45-54: 4
* 55-64: 3
* 65+: 2
* Unknown: 0

**Education:**
* High school degree or equivalent: 3
* Some college (no degree): 4
* Associate's degree, trade certificate or vocational training: 1
* Bachelor's degree: 3
* Master's degree: 1
* Doctorate degree: 0
* Unknown: 0

**Geographic Location:**
* Urban: 10
* Rural: 2
* Unknown: 0

**Race:**
* White: 7
* Black: 2
* Hispanic: 2
* Biracial: 1
* Asian: 0
* Native: 0

**Disability and Assistive Technology:**
* Cognitive: 1
* AT beginner: 1
* AT advanced user: 1
* Desktop screen reader: 1
* Mobile screen reader: 0
* Magnification/Zoom: 1
* Speech Input Technology: 0
* Hearing aids: 0
* Sighted keyboard: 0
* Captions: 0

### Underserved Groups We Haven't Talked To

This research does not include adequate representation of the following marginalized Veteran groups:

* **Rural Veterans**: Recruited 2 of 8 target (75% gap). Rural Veterans may have different constraints around facility access and appointment availability that weren't fully explored in this research.
* **Veterans 65+**: Recruited 2 of 6 target (67% gap). Older Veterans may face different technology barriers and accessibility needs not reflected in findings.
* **Veterans with hearing disabilities**: Recruited 0 of 4 target (100% gap). No Veterans with hearing disabilities participated, meaning we cannot speak to caption needs or alternative communication preferences.
* **Veterans with cognitive disabilities**: Recruited 1 of 5 target (80% gap). Findings about form complexity and error recovery may not reflect needs of Veterans with cognitive processing differences.
* **Non-English speaking Veterans**: Recruited 0 of 3 target (100% gap). Language accessibility needs were not assessed in this research.

**Recommendation**: Follow-up research should specifically target these underserved groups to ensure design recommendations serve the full Veteran population.
```

---

## General Completion Rules

### DO
- Use exact data from research materials
- Copy language directly from Research Plan when possible
- Include specific counts and percentages
- Reference exact quotes from transcripts
- Be specific about VADS components and patterns
- Explain the "so what"—why findings matter
- Write in clear, conversational language
- Include all evidence that supports a finding
- Note when data is unavailable or insufficient

### DON'T
- Create representative quotes or paraphrase
- Extrapolate beyond what research shows
- Include speculative reasoning
- Use vague language ("most," "many," "some" without numbers)
- Make claims unsupported by data
- Assume future behavior
- Fabricate participant details
- Combine findings that aren't actually related
- Overstate statistical confidence
- Include planned-but-unexecuted research

---

## Quality Assurance Before Publication

Before publishing the completed research findings template, verify:

- [ ] All front matter YAML fields are populated with accurate, verifiable data
- [ ] All participant quotes are EXACT, verbatim, and directly attributable (no paraphrasing)
- [ ] All statistics are exact counts and percentages (not rounded or estimated)
- [ ] All links are functional (research documents, prototypes, images)
- [ ] Recommendations reference specific VADS patterns, components, or systems where applicable
- [ ] Recommendations consider VA's existing tools and constraints
- [ ] All findings are grounded in evidence with supporting data
- [ ] Findings are limited to 5-10 key insights (not exhaustive lists)
- [ ] No representative quotes or synthesized statements (only direct, exact quotes)
- [ ] Follow-up research gaps are specific and actionable
- [ ] Underserved groups are clearly identified with recruitment targets
- [ ] Writing is clear, conversational, and immediately understandable
- [ ] All sections are populated (no placeholder text remaining)
- [ ] Connections between findings, recommendations, and product outcomes are explicit
- [ ] Research participant counts and demographics are exact and verified
