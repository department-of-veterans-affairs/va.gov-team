---
# Prompt File Metadata
title: "GitHub Copilot Prompt: Complete Research Findings Frontmatter with Metadata"
date: 2026-01-13
last_updated: 2026-01-13
prompt_type: "research-reporting"
category: "Research Report & Synthesis"
purpose: "Helps researchers complete the YAML frontmatter section of research findings reports using GitHub Copilot"

# Usage Context
target_audience: 
  - "UX Researchers"
  - "Research Leads"
  - "Product Teams"
  - "Design Teams"

use_cases:
  - "Creating new research findings reports"
  - "Documenting completed research studies"
  - "Standardizing research findings structure"
  - "Applying research repository tags to findings"
  - "Tracking participant demographics"

# Related Resources
related_files:
  - file:  "research-findings-template.md"
    url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/sharing-research/research-findings-template.md"
    description: "The research findings template this prompt helps complete"
  - file: "labels.yml"
    url: "https://github.com/department-of-veterans-affairs/va.gov-research-repository/blob/master/. github/labels.yml"
    description: "Source of truth for research repository tags"
  - file: "research-plan-frontmatter-prompt.md"
    url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-discovery/research-plan-frontmatter-prompt.md"
    description: "Related prompt for research plan frontmatter"
  - file: "conversation-guide-frontmatter-prompt.md"
    url: "https://github.com/department-of-veterans-affairs/va. gov-team/blob/master/platform/research/copilot-prompts/research-planning/conversation-guide-frontmatter-prompt.md"
    description: "Related prompt for conversation guide frontmatter"
  - file: "add-metadata-labels-to-findings-prompt.md"
    url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-report/add-metadata-labels-to-findings-prompt.md"
    description: "Related prompt for adding metadata labels to individual key findings"
  - file: "README.md"
    url: "https://github.com/department-of-veterans-affairs/va. gov-team/blob/master/platform/research/copilot-prompts/README.md"
    description: "Overview of all research Copilot prompts"

# Prompt Characteristics
ai_capabilities_required:
  - "Natural Language Processing"
  - "Semantic analysis"
  - "Context inference"
  - "Metadata extraction"
  - "Taxonomy matching"
  - "Demographic data parsing"

# Maintenance
version: "1.0"
status: "active"
maintainer: "Platform Research Operations"

tags:
  - "copilot-prompt"
  - "research-reporting"
  - "research-operations"
  - "research-findings"
  - "metadata"
  - "frontmatter"
  - "YAML"
  - "research-repository"
  - "documentation"
  - "automation"
  - "demographics"
---

# Complete Research Findings Frontmatter with Metadata

## Overview

This prompt helps researchers complete the YAML frontmatter section at the beginning of their research findings report template. The frontmatter contains structured metadata including participant demographics, research goals, methodologies, key findings, and recommendations that make findings reports searchable, trackable, and properly categorized in the research repository.

## When to Use

Use this prompt **after completing your research study and drafting your findings report** where you need to complete or update the frontmatter metadata section with study details and participant demographics. 

## How to Use

1. Open your research findings report file in GitHub (use the [research findings template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/sharing-research/research-findings-template.md))
2. Open GitHub Copilot Chat
3. Attach your research findings report file
4. Optionally attach the corresponding research plan and conversation guide to help inform metadata
5. Copy and paste the prompt below (the prompt includes all available tags from the research repository)
6. Review Copilot's suggestions and modify as needed
7. Copy the completed frontmatter into your research findings report

## Adding Frontmatter to Your Research Findings Report

1. Copy the generated YAML frontmatter
2. Paste it at the very beginning of your research findings report file (before any markdown content)
3. Ensure there are three dashes (`---`) at both the start and end of the YAML block
4. Verify the formatting is correct (proper indentation, no extra spaces)
5. Verify all demographic counts are accurate
6. Save your file

## Tips

- **Parse demographics carefully:** The demographics section has nested objects - ensure proper YAML indentation and accurate counts. 
- **Extract key findings concisely:** Keep each finding to one clear sentence in the frontmatter array.
- **Align with research plan:** Use the same core tags from your research plan, then add findings-specific tags based on what you discovered.
- **Trust the NLP analysis:** Copilot uses natural language processing to understand findings themes and infer appropriate tags.
- **Count devices accurately:** Count each device type used by participants from the demographics section. 
- **Identify unmet needs:** Look for opportunity areas mentioned in findings and recommendations. 
- **Document research gaps:** Note underserved groups that weren't included for future research planning. 
- **Include synthesis tools:** List all tools used for analysis (Mural, Dovetail, Excel, etc.).
- **Connect to KPIs:** Reference specific KPIs from your product outline that this research informs.
- **Be honest about limitations:** Document demographic groups you didn't reach and areas needing further research. 
- **Update after synthesis:** If synthesis reveals new themes, update the frontmatter tags accordingly. 
- **Validate YAML syntax:** Complex nested objects require careful indentation - use a YAML validator if needed. 
- **Use the recruitment checker:** Complete the VA recruitment checker spreadsheet and reference it in the frontmatter. 
- **Tag for patterns:** If findings reveal patterns like "navigation issues" or "trust concerns," include relevant theme tags. 
- **Consider assistive technology:** Tag specifically for AT types used (screen readers, magnification, speech input).
- **Include research phase:** Tag whether this was discovery, evaluative, generative, or validation research.
- **Review the full taxonomy:** For comprehensive tagging, review [`labels.yml`](https://github.com/department-of-veterans-affairs/va.gov-research-repository/blob/master/.github/labels.yml)
- **Layer your metadata:** Use this frontmatter prompt for report-level tags, then use [`add-metadata-labels-to-findings-prompt.md`](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-report/add-metadata-labels-to-findings-prompt.md) for individual key finding labels.

---

## Prompt

```
I need help completing the YAML frontmatter section at the top of my research findings report. 

**INSTRUCTIONS:  Use natural language processing to analyze the attached research findings report content.  Understand the context, intent, and meaning of the research study to:**
- Extract key metadata from all sections of the findings report
- Parse participant demographic information from the "Research participants" section
- Identify research goals, methodologies, key findings, and recommendations
- Infer appropriate tags based on content meaning, what was studied, and who participated
- Make intelligent connections between findings, participants, products, and the tag taxonomy
- Detect implicit information from hypotheses, findings details, and recommendations
- Count and categorize devices used, assistive technology, and demographic breakdowns
- Identify opportunity areas and unmet needs mentioned in findings
- After generating the frontmatter, also provide: 
1. A brief explanation of your tag selections and the reasoning behind each inference
2. How the tags align with the key findings and participant demographics
3. Any questions about unclear information that needs clarification
4. A note about any tags you considered but didn't include, and why
5. Recommendations for ensuring tags align with the corresponding research plan and conversation guide
6. Suggestions for additional demographic details if the "Research participants" section was incomplete

Please analyze the content of my research findings report and generate a complete frontmatter section based on the following structure:

**Research Findings Metadata:**
- title:  (Format as "[Study Name] Research Findings")
- product: (Product name being studied)
- team: (Team name)
- office: (Usually "Office of the CTO - Digital Experience (OCTO-DE)")
- date: (Date of report in YYYY-MM-DD format)
- researchers: (Array of researcher names)

**Research Context:**
- research_goals: (Array of research goals from the report)
- methodology: (Array of methods used, e.g., "usability testing", "semi-structured interviews")
- devices_used: (Object with counts for desktop, tablet, smartphone, assistive_technology)
- participants_total:  (Total number of participants)

**Demographics:**
Extract from the "Research participants" section and structure as:
- demographics: 
  - veterans: (count)
  - service_members: (count)
  - caregivers: (count)
  - dependents: (count)
  - VA_staff: (count)
  - age:  (object with age ranges and counts)
  - education: (object with education levels and counts)
  - location: (object with urban/rural/unknown counts)
  - race: (object with race categories and counts)
  - disability: (object with disability and AT types and counts)

**Key Results:**
- key_findings: (Array of concise key findings - extract top-level findings)
- recommendations: (Array of actionable recommendations)

**Strategic Alignment:**
- kpi_alignment: (Array of KPIs this research supports)
- outcomes:
  - user: (Desired user outcome)
  - business: (Desired business outcome)

**Research Gaps:**
- opportunity_areas: (Array of unmet needs or opportunity areas identified)
- further_research_needed: (Array of areas needing additional research)
- underserved_groups_missing: (Array of demographic groups not included)

**Synthesis Methods:**
- secondary_research: (Array of secondary research sources used, e.g., "web analytics", "SME interviews")
- synthesis_tools_used:  (Array of tools used, e.g., "Mural", "Affinity Mapping", "Dovetail")

**Tags:**
(This is CRITICAL - use natural language processing to identify all relevant tags based on: 
- What was studied (products, features, patterns, components)
- Who participated (audiences, demographics, assistive technology users)
- What was learned (findings themes, usability issues, unmet needs)
- Research methodology used)

---

**TAGS TAXONOMY**

For the tags section, use natural language processing to understand the research findings context and select all relevant tags from these categories.  Analyze the findings, participant demographics, and recommendations to understand what was actually tested and discovered: 

**AUDIENCE TAGS (AUD:)**
- AUD: Attorneys
- AUD: Caregivers
- AUD: Claims Agents
- AUD: Clinicians
- AUD: Contact Center
- AUD: Dependents
- AUD: Family Member
- AUD: Internal VA Stakeholders
- AUD: National Guard
- AUD: Reserves
- AUD: School Certifying Officials (SCO)
- AUD: Service Members
- AUD: Surviving Family
- AUD: Travel Office Staff
- AUD: VA Staff
- AUD: Veterans
- AUD: Veteran Service Office (VSO)

**BENEFIT TAGS (BNFT:)**
- BNFT: Disability
- BNFT: Education
- BNFT: Employment
- BNFT: Finances
- BNFT: Healthcare
- BNFT: Housing
- BNFT: Life Insurance
- BNFT: Memorialization
- BNFT: Pension
- BNFT: Records

**DESIGN SYSTEM COMPONENT TAGS (DSC:)** - Use when findings mention specific components: 
- DSC: Accordions
- DSC: Alert Boxes
- DSC: Button
- DSC: Card
- DSC: Checkbox
- DSC: Form
- DSC: Form - Date Input
- DSC: Form - File Input
- DSC: Form - Radio Button
- DSC: Form - Select
- DSC: Form - Text Area
- DSC: Links
- DSC: Modal
- DSC: Pagination
- DSC: Search Input
- DSC: Table
- DSC: Tabs
- (See full list at:  https://github.com/department-of-veterans-affairs/va.gov-research-repository/blob/master/.github/labels.yml)

**DESIGN SYSTEM PATTERN TAGS (DSP:)** - Use when findings mention specific patterns:
- DSP: Ask users for a single response
- DSP: Ask users for addresses
- DSP: Ask users for contact preferences
- DSP: Ask users for dates
- DSP: Ask users for direct deposit
- DSP: Ask users for email address
- DSP: Ask users for feedback
- DSP: Ask users for files
- DSP: Ask users for multiple responses
- DSP: Ask users for names
- DSP: Ask users for phone numbers
- DSP: Ask users for signature
- DSP: Content Presentation
- DSP: Contextual Help
- DSP: Error Message Guide
- DSP: Form Templates
- DSP: Help users to check answers
- DSP: Help users to navigate a long list
- DSP: Help users to sign in
- DSP: Notifications
- (See full list at: https://github.com/department-of-veterans-affairs/va.gov-research-repository/blob/master/.github/labels.yml)

**HARDWARE TAGS (HDW:)**
- HDW: Desktop
- HDW: Flip-phone
- HDW: Kiosk
- HDW: Laptop
- HDW: Smartphone
- HDW: Tablet

**PRODUCT TAGS (PRDT:)** - Select the specific product(s) studied:
- PRDT: 1990 Application for VA Ed.  Benefits
- PRDT: 21P-0969 Income and Assets Statement
- PRDT: 26-1880 COE Certificate of Eligibility
- PRDT: Accredited-Reps
- PRDT: Ask VA (AVA)
- PRDT: Benefit-letters
- PRDT: Benefit Hubs
- PRDT: Burials-memorials
- PRDT: Caregivers
- PRDT: CHAMPVA
- PRDT: Claim-status-tool
- PRDT: Contact us
- PRDT: Content
- PRDT: COVID-vaccine-distribution
- PRDT: Debt-portal
- PRDT: Decision-reviews
- PRDT: Direct-deposit
- PRDT: Discharge-upgrade-wizard
- PRDT: eBenefits
- PRDT: Facilities
- PRDT: Find-a-va-form
- PRDT: Find-a-yellow-ribbon-school
- PRDT: Form 10-10 EZ
- PRDT: Form 21-686c
- PRDT: Form 22-1995
- (See full list at: https://github.com/department-of-veterans-affairs/va.gov-research-repository/blob/master/.github/labels.yml)

**MY HEALTH / MHV TAGS:**
- MHV: Admin Portal
- MHV: Appointments
- MHV: National Portal/Access
- MHV: MyHealth (Health Hub)
- MHV: Personal Health Records/Medical Records
- MHV: Pharmacy
- MHV: Secure Messaging

**INITIATIVE TAGS:**
- Initiative: CX Executive Order
- Initiative: PACT Act
- Initiative: Toxic Exposure

**OTHER RELEVANT TAGS:**
- Accessibility (use when accessibility testing was included or accessibility findings emerged)
- Internal Research:  Platform Research
- (Add methodology tags like:  usability-testing, semi-structured-interviews, card-sort, tree-test, etc.)
- (Add research phase tags like: discovery, evaluative, generative, etc.)

**Note:** For a complete list of all available tags, researchers can review the source file at: 
https://github.com/department-of-veterans-affairs/va.gov-research-repository/blob/master/.github/labels.yml

---

**IMPORTANT:  Format your response as a complete YAML frontmatter block that can be copied directly into the research findings report.**

Use this exact structure:

```yaml
---
title: "[Study Name] Research Findings"
product: "Product Name"
team: "Team Name"
office: "Office of the CTO - Digital Experience (OCTO-DE)"
date: "YYYY-MM-DD"
researchers: 
  - "Researcher Name 1"
  - "Researcher Name 2"
research_goals:
  - "Goal 1"
  - "Goal 2"
methodology:
  - "Method 1"
  - "Method 2"
devices_used:
    desktop: X
    tablet: X
    smartphone: X
    assistive_technology: X
participants_total: X
demographics:
  veterans: X
  service_members:  X
  caregivers: X
  dependents: X
  VA_staff: X
  age: 
    "25-34":  X
    "35-44":  X
    "45-54":  X
    "55-64":  X
    "65+": X
    unknown: X
  education: 
    high_school: X
    some_college: X
    associates: X
    bachelors:  X
    masters: X
    doctorate: X
    unknown: X
  location: 
    urban: X
    rural:  X
    unknown: X
  race:
    white: X
    black: X
    hispanic: X
    biracial: X
    asian: X
    native:  X
  disability:
    cognitive: X
    AT_beginner: X
    AT_advanced: X
    screen_reader_desktop: X
    screen_reader_mobile: X
    magnification_zoom: X
    speech_input: X
    hearing_aids: X
    sighted_keyboard: X
    captions: X
key_findings:
  - "Finding 1"
  - "Finding 2"
  - "Finding 3"
recommendations:
  - "Recommendation 1"
  - "Recommendation 2"
kpi_alignment:
  - "KPI 1"
  - "KPI 2"
outcomes:
  user: "Desired user outcome"
  business: "Desired business outcome"
opportunity_areas:
  - "Unmet need 1"
  - "Research gap 1"
further_research_needed:
  - "Area 1"
  - "Area 2"
underserved_groups_missing:
  - "Group 1"
  - "Group 2"
secondary_research:
  - "Web analytics"
  - "SME interviews"
synthesis_tools_used:
  - "Mural"
  - "Affinity Mapping"
tags:
  - "tag-from-taxonomy-above"
  - "tag-from-taxonomy-above"
  - "tag-from-taxonomy-above"
---
```

---

## Example Output

Here's an example of a completed frontmatter section: 

```yaml
---
title: "Direct Deposit Update Flow Research Findings"
product: "Direct Deposit for Disability Compensation"
team: "Authenticated Experience"
office: "Office of the CTO - Digital Experience (OCTO-DE)"
date: "2026-02-05"
researchers:
  - "Jane Smith"
  - "John Doe"
research_goals:
  - "Understand how Veterans currently update their direct deposit information and pain points in the current flow"
  - "Evaluate the usability of the new direct deposit update interface"
  - "Identify any accessibility barriers for screen reader users"
methodology:
  - "usability testing"
  - "semi-structured interviews"
devices_used: 
    desktop: 5
    tablet: 0
    smartphone: 5
    assistive_technology: 3
participants_total: 10
demographics:
  veterans: 10
  service_members: 0
  caregivers: 0
  dependents: 0
  VA_staff: 0
  age:
    "25-34": 1
    "35-44": 2
    "45-54": 3
    "55-64":  2
    "65+": 2
    unknown: 0
  education:
    high_school: 1
    some_college: 2
    associates: 1
    bachelors: 4
    masters: 2
    doctorate: 0
    unknown: 0
  location:
    urban: 7
    rural: 3
    unknown: 0
  race: 
    white: 5
    black: 2
    hispanic: 2
    biracial: 1
    asian: 0
    native: 0
  disability:
    cognitive: 2
    AT_beginner: 1
    AT_advanced: 2
    screen_reader_desktop:  2
    screen_reader_mobile:  1
    magnification_zoom: 0
    speech_input: 0
    hearing_aids: 0
    sighted_keyboard: 0
    captions: 0
key_findings:
  - "Veterans successfully updated direct deposit information but expressed security concerns about entering banking details online"
  - "Screen reader users encountered significant barriers with form validation error messages"
  - "Mobile users struggled with the routing number field on smaller screens"
  - "Participants expected immediate confirmation that their update was successful but found the confirmation messaging unclear"
  - "Veterans with cognitive disabilities needed additional time to understand banking terminology"
recommendations:
  - "Add prominent security messaging near banking input fields to address Veteran concerns"
  - "Improve error message accessibility by ensuring screen reader compatibility and clear instructions"
  - "Optimize mobile form field layout for easier data entry on smaller screens"
  - "Redesign confirmation messaging to be more explicit about successful updates"
  - "Add plain language explanations for banking terms like 'routing number' and 'account type'"
kpi_alignment:
  - "Improve satisfaction with our web and mobile products by 5 points"
  - "Reduce time Veterans spend completing direct deposit updates"
outcomes:
  user: "Veterans can quickly and confidently update their direct deposit information online without needing to call or visit a VA facility"
  business: "Reduce call center volume for direct deposit update requests and improve digital transaction success rates"
opportunity_areas: 
  - "Veterans need clearer guidance on when direct deposit changes take effect"
  - "Opportunity to proactively notify Veterans when payment details may need updating"
further_research_needed:
  - "Test with Veterans who have limited English proficiency"
  - "Conduct follow-up study on confirmation notification preferences"
  - "Research Veterans' mental models around payment security and fraud protection"
underserved_groups_missing:
  - "Veterans with limited English proficiency"
  - "Veterans using magnification/zoom assistive technology"
  - "Veterans identifying as LGBTQ+"
secondary_research:
  - "Google Analytics data on direct deposit page traffic"
  - "Call center data on direct deposit inquiries"
  - "SME interviews with VA payment operations staff"
synthesis_tools_used: 
  - "Mural"
  - "Affinity Mapping"
  - "Dovetail"
tags:
  - "AUD: Veterans"
  - "BNFT: Disability"
  - "BNFT:  Finances"
  - "PRDT: Direct-deposit"
  - "Accessibility"
  - "DSC: Form"
  - "DSC: Form - Text Area"
  - "DSC: Alert Boxes"
  - "DSP: Ask users for direct deposit"
  - "DSP: Error Message Guide"
  - "DSP: Help users to check answers"
  - "HDW: Desktop"
  - "HDW: Smartphone"
  - "usability-testing"
  - "semi-structured-interviews"
  - "authenticated-experience"
  - "screen-reader-testing"
  - "evaluative-research"
  - "mobile-usability"
---
```

**Tag Selection Rationale (using NLP analysis):**

**Audience & Benefit Tags:**
- **AUD: Veterans** - All 10 participants were Veterans (from demographics)
- **BNFT: Disability** - Study focused on direct deposit for disability compensation payments (contextual knowledge)
- **BNFT: Finances** - Direct deposit relates to payment and financial management (semantic connection)

**Product Tags:**
- **PRDT: Direct-deposit** - Primary product studied in findings report

**Component & Pattern Tags:**
- **Accessibility** - Findings explicitly mention screen reader barriers and testing with AT users (demographics show 3 AT users)
- **DSC: Form** - Findings mention form fields, validation, and data entry (inferred from findings details)
- **DSC: Form - Text Area** - Findings reference input fields for banking information (specific component inference)
- **DSC: Alert Boxes** - Recommendations mention confirmation messaging and error messages (inferred from findings)
- **DSP: Ask users for direct deposit** - Pattern specifically for collecting banking information (semantic match)
- **DSP: Error Message Guide** - Key finding about error message barriers; recommendation to improve error messaging
- **DSP: Help users to check answers** - Findings mention confirmation and verification needs (pattern inference)

**Hardware Tags:**
- **HDW:  Desktop** - Demographics show 5 desktop users
- **HDW: Smartphone** - Demographics show 5 smartphone users; findings mention mobile usability issues

**Methodology & Research Type Tags:**
- **usability-testing** - Listed in methodology array
- **semi-structured-interviews** - Listed in methodology array
- **authenticated-experience** - Direct deposit in Profile requires authentication (contextual knowledge)
- **screen-reader-testing** - Demographics show screen reader users; findings mention screen reader barriers
- **evaluative-research** - Testing existing/new interface (research phase inference)
- **mobile-usability** - Key finding specifically addresses mobile user struggles

**Tag Alignment with Research Artifacts:**
These tags should align with the research plan and conversation guide frontmatter.  The findings report includes more specific findings-based tags like "mobile-usability" and "evaluative-research" that emerged from the study results.

**Tags considered but not included:**
- **AUD:  Caregivers** - No caregivers participated (0 in demographics)
- **Initiative: PACT Act** - No connection to this initiative mentioned
- **DSC: Button** - While buttons are present, not a primary focus of findings
- **BNFT: Healthcare** - Study focused on payments, not healthcare services

**Missing Demographic Groups:**
The frontmatter correctly identifies underserved groups not included: 
- Veterans with limited English proficiency
- Veterans using magnification/zoom
- LGBTQ+ Veterans

**Recommendations:**
1. Ensure these tags align with your research plan and conversation guide frontmatter
2. Consider adding "cognitive-disability" tag if that was a significant finding theme
3. Update tags if additional synthesis reveals new patterns
4. Use the "add-metadata-labels-to-findings-prompt. md" to add more granular labels to individual key findings

---
 
