---
# Prompt File Metadata
title: "GitHub Copilot Prompt: Complete Research Plan Frontmatter with Metadata"
date:  2026-01-12
last_updated: 2026-01-12
prompt_type: "research-planning"
category: "Research Discovery & Planning"
purpose: "Helps researchers complete the YAML frontmatter section of research plans using GitHub Copilot"

# Usage Context
target_audience: 
  - "UX Researchers"
  - "Research Leads"
  - "Product Teams"
  - "Platform Teams"

use_cases:
  - "Creating new research plans"
  - "Updating existing research plan metadata"
  - "Standardizing research plan structure"
  - "Applying research repository tags"

# Related Resources
related_files:
  - file:  "research-plan-template.md"
    url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-plan-template.md"
    description: "The research plan template this prompt helps complete"
  - file: "labels.yml"
    url: "https://github.com/department-of-veterans-affairs/va.gov-research-repository/blob/master/.github/labels.yml"
    description: "Source of truth for research repository tags"
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

# Maintenance
version: "1.0"
status: "active"
maintainer: "Platform Research Operations"

tags:
  - "copilot-prompt"
  - "research-planning"
  - "research-operations"
  - "metadata"
  - "frontmatter"
  - "YAML"
  - "research-repository"
  - "documentation"
  - "automation"
---

# Complete Research Plan Frontmatter with Metadata

## Overview

This prompt helps researchers complete the YAML frontmatter section at the beginning of their research plan template. The frontmatter contains structured metadata that makes research plans searchable, trackable, and properly categorized in the research repository.

## When to Use

Use this prompt **when starting a new research plan** or **updating an existing research plan** where you need to complete or update the frontmatter metadata section.

## How to Use

1. Open your research plan file in GitHub (use the [research plan template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-plan-template.md))
2. Open GitHub Copilot Chat
3. Attach your research plan file
4. Copy and paste the prompt below (the prompt includes all available tags from the research repository)
5. Review Copilot's suggestions and modify as needed
6. Copy the completed frontmatter into your research plan

## Adding Frontmatter to Your Research Plan

1. Copy the generated YAML frontmatter
2. Paste it at the very beginning of your research plan file (before any markdown content)
3. Ensure there are three dashes (`---`) at both the start and end of the YAML block
4. Verify the formatting is correct (proper indentation, no extra spaces)
5. Save your file

## Tips

- **Trust the NLP analysis:** Copilot uses natural language processing to understand context and make intelligent inferences about appropriate tags. 
- **Review the reasoning:** Check Copilot's explanation of tag selections to ensure they align with your research intent.
- **Be specific with tags:** Select all relevant tags from the taxonomy provided in the prompt.  More specific tags make your research more discoverable.
- **Review the full taxonomy:** For comprehensive tagging, review the complete labels file at https://github.com/department-of-veterans-affairs/va.gov-research-repository/blob/master/.github/labels.yml
- **Update dates:** Remember to update the `last_updated` field whenever you make significant changes to the plan.  
- **Verify OCTO priorities:** Check the current [OCTO-DE Priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202025.md) to ensure alignment.  
- **Link previous research:** Including links to related previous studies helps build on existing knowledge.  
- **Keep it current:** Update the frontmatter as your research plan evolves (methodology changes, dates shift, participant numbers adjust).
- **Validate YAML syntax:** Improper indentation or formatting can break the YAML parsing.  Use a [YAML validator](https://www.yamllint.com/) if needed.  
- **Tag generously:** It's better to include more relevant tags than to under-tag. This helps others find your research.  
- **Document uncertainty:** Use "TBD" for dates or information that isn't finalized yet rather than leaving fields blank. 
- **Question the AI:** If a suggested tag doesn't make sense, ask Copilot to explain its reasoning or suggest alternatives. 

---

## Prompt

```
I need help completing the YAML frontmatter section at the top of my research plan.    

**INSTRUCTIONS:  Use natural language processing to analyze the attached research plan content.  Understand the context, intent, and meaning of the research to:**
- Extract key metadata even when not explicitly labeled
- Infer appropriate tags based on content meaning and research focus, not just keyword matching
- Identify relevant audiences, benefits, products, and patterns based on what the research is actually studying
- Make intelligent connections between the research objectives and the tag taxonomy
- Detect implicit information (e.g., if the research mentions "updating banking information," infer the "DSP:  Ask users for direct deposit" tag)
- After generating the frontmatter, also provide:  
1. A brief explanation of your tag selections and the reasoning behind each inference
2. Any questions about unclear information that needs clarification
3. Suggestions for improving any weak areas in the plan
4. A note about any tags you considered but didn't include, and why

Please analyze the content of my research plan and generate a complete frontmatter section based on the following structure:

**Research Plan Metadata:**
- title:   (Format as "Research Plan for [Team, Product, Date]")
- date: (Today's date in YYYY-MM-DD format)
- last_updated: (Today's date in YYYY-MM-DD format)
- team: (Extract from my plan or ask if unclear)
- product: (Extract from my plan or ask if unclear)
- product_area: (Determine if authenticated/unauthenticated based on plan)

**Background Context:**
- problem_statement: (Summarize what problem the product is solving)
- product_location:   (Where on VA.gov, e.g., authenticated experience, benefits hub)
- user_familiarity: (Is this a new product or iteration on existing?)
- product_brief_url:  (Include if mentioned in plan)

**Research Design:**
- methodology: (Extract from plan, e.g., usability testing, semi-structured interviews, card sort)
- research_format: 
  - location: (remote, in-person, or hybrid)
  - moderated: (true or false)

**Research Goals & Questions:**
- research_goals: (List up to 3 primary research goals from plan)
- research_questions:   (List research questions from plan)
- hypotheses:  (List hypotheses from plan)
- expected_outcomes: (How findings will advance the product)

**Recruitment & Participants:**
- recruitment:  
  - recruiting_partner: (Usually "Perigean")
  - approach: (e.g., "lean maximum variation")
  - primary_criteria: (Must-have criteria from plan)
  - secondary_criteria: (Nice-to-have criteria from plan)
  - screener_questions:   (List any screener questions)
- participants:  
  - veterans: (Number)
  - caregivers: (Number)
  - dependents: (Number)
  - total_recruited: (Total number)
  - completed_sessions_goal: (Target completed sessions)

**Timeline & Sessions:**
- timeline:  
  - pilot_date: (Date from plan or "TBD")
  - pilot_participant: (Name or "TBD")
  - research_dates: (Date range)
  - research_review_submission: (Date or "TBD")
- session_details: 
  - duration_minutes: (Session length)
  - buffer_minutes:   (Buffer between sessions)
  - max_sessions_per_day: (Maximum daily sessions)

**Strategic Alignment:**
- octo_priorities:  (List relevant OCTO objectives from the plan with their key results)
- veteran_journey_phases: (List relevant journey phases, e.g., Getting Out, Starting Up, Taking Care of Myself)

**Research Repository Tracking:**
- related_research: 
  - previous_studies: (List any previous related research links)
- tags: (This is CRITICAL - use natural language processing to identify all relevant tags based on research content, context, and intent)

---

**TAGS TAXONOMY**

For the tags section, use natural language processing to understand the research context and select all relevant tags from these categories.  Look beyond exact keyword matches - understand what the research is actually about and what it's testing: 

**AUDIENCE TAGS (AUD: )**
- AUD:  Attorneys
- AUD:  Caregivers
- AUD:  Claims Agents
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

**BENEFIT TAGS (BNFT:  )**
- BNFT: Disability
- BNFT: Education
- BNFT: Employment
- BNFT:  Finances
- BNFT:  Healthcare
- BNFT:  Housing
- BNFT: Life Insurance
- BNFT:   Memorialization
- BNFT:   Pension
- BNFT: Records

**DESIGN SYSTEM COMPONENT TAGS (DSC: )** - Use when testing specific components:  
- DSC: Accordions
- DSC: Alert Boxes
- DSC: Button
- DSC: Card
- DSC:  Checkbox
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
- (See full list at:   https://github.com/department-of-veterans-affairs/va.gov-research-repository/blob/master/.github/labels.yml)

**DESIGN SYSTEM PATTERN TAGS (DSP: )** - Use when testing specific patterns: 
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
- DSP:   Notifications
- (See full list at:  https://github.com/department-of-veterans-affairs/va.gov-research-repository/blob/master/.github/labels.yml)

**HARDWARE TAGS (HDW:)**
- HDW: Desktop
- HDW: Flip-phone
- HDW: Kiosk
- HDW:   Laptop
- HDW: Smartphone
- HDW: Tablet

**PRODUCT TAGS (PRDT: )** - Select the specific product(s) being researched:
- PRDT:  1990 Application for VA Ed.   Benefits
- PRDT:  21P-0969 Income and Assets Statement
- PRDT: 26-1880 COE Certificate of Eligibility
- PRDT:   Accredited-Reps
- PRDT: Ask VA (AVA)
- PRDT: Benefit-letters
- PRDT: Benefit Hubs
- PRDT:   Burials-memorials
- PRDT:  Caregivers
- PRDT:   CHAMPVA
- PRDT:   Claim-status-tool
- PRDT: Contact us
- PRDT: Content
- PRDT: COVID-vaccine-distribution
- PRDT:  Debt-portal
- PRDT: Decision-reviews
- PRDT: Direct-deposit
- PRDT:   Discharge-upgrade-wizard
- PRDT: eBenefits
- PRDT:   Facilities
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
- MHV:   Pharmacy
- MHV: Secure Messaging

**INITIATIVE TAGS:**
- Initiative: CX Executive Order
- Initiative:   PACT Act
- Initiative:  Toxic Exposure

**OTHER RELEVANT TAGS:**
- Accessibility (use when including accessibility testing)
- Internal Research:  Platform Research
- (Add methodology tags like:   usability-testing, semi-structured-interviews, card-sort, etc.)

**Note:** For a complete list of all available tags, researchers can review the source file at: 
https://github.com/department-of-veterans-affairs/va.gov-research-repository/blob/master/.github/labels.yml

---

**IMPORTANT:   Format your response as a complete YAML frontmatter block that can be copied directly into the research plan.**

Use this exact structure:

```yaml
---
# Research Plan Metadata
title: "Research Plan for [Team, Product, Date]"
date:   YYYY-MM-DD
last_updated: YYYY-MM-DD
team: "[Team Name]"
product: "[Product Name]"
product_area: "[authenticated/unauthenticated]"

# Background Context
background:  
  problem_statement: "[Problem description]"
  product_location:  "[Location on VA.gov]"
  user_familiarity: "[New/iteration]"
  product_brief_url: "[URL if available]"

# Research Design
methodology: "[Methodology type]"
research_format: 
  location: remote # Options: remote, in-person, hybrid
  moderated: true # Options: true, false
  
# Research Goals & Questions
research_goals: 
  - goal_1:   "[First goal]"
  - goal_2:  "[Second goal]"
  - goal_3: "[Third goal]"

research_questions:
  - "[Question 1]"
  - "[Question 2]"
  - "[Question 3]"

hypotheses:
  - "[Hypothesis 1]"
  - "[Hypothesis 2]"

expected_outcomes:   "[Expected outcomes]"

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "[Approach type]"
  
  primary_criteria: 
    - "[Criterion 1]"
    - "[Criterion 2]"
    
  secondary_criteria: 
    - "[Criterion 1]"
    
  screener_questions:
    - question:  "[Question text]"
      qualifying_response:  "[Expected answer]"
      
participants:
  veterans: 0
  caregivers: 0
  dependents: 0
  total_recruited: 0
  completed_sessions_goal: 0
  
# Timeline & Sessions
timeline:
  pilot_date: "YYYY-MM-DD"
  pilot_participant: "[Name or TBD]"
  research_dates: "YYYY-MM-DD to YYYY-MM-DD"
  research_review_submission: "YYYY-MM-DD"
  
session_details: 
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 0
  
# Strategic Alignment
octo_priorities:
  - objective: "Objective 1"
    key_results: 
      - "[Specific KR]"
      
veteran_journey_phases:
  - "[Journey phase]"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "[Link to related research]"
    
tags:
  - "[tag-from-taxonomy-above]"
  - "[tag-from-taxonomy-above]"
  - "[tag-from-taxonomy-above]"
---
```


## Example Output

Here's an example of a completed frontmatter section: 

---



```yaml
---
# Research Plan Metadata
title: "Research Plan for Authenticated Experience, Direct Deposit, January 2026"
date:  2026-01-12
last_updated: 2026-01-12
team: "Authenticated Experience"
product: "Direct Deposit for Disability Compensation"
product_area: "authenticated"

# Background Context
background:  
  problem_statement: "Veterans need an easy and secure way to update their direct deposit information online without calling or visiting a VA facility."
  product_location: "VA.gov Profile, authenticated experience"
  user_familiarity: "Iteration on existing direct deposit feature"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/README.md"

# Research Design
methodology: "usability testing"
research_format: 
  location: remote
  moderated: true
  
# Research Goals & Questions
research_goals: 
  - goal_1: "Understand how Veterans currently update their direct deposit information and pain points in the current flow"
  - goal_2: "Evaluate the usability of the new direct deposit update interface"
  - goal_3: "Identify any accessibility barriers for screen reader users"

research_questions:  
  - "How do Veterans currently manage their direct deposit information?"
  - "What security concerns do Veterans have about updating banking information online?"
  - "Can Veterans successfully complete the direct deposit update flow?"
  - "What challenges do screen reader users face in the current interface?"
  - "How do Veterans verify that their update was successful?"

hypotheses:
  - "Veterans will prefer updating direct deposit online vs calling or visiting"
  - "Veterans will have security concerns that need to be addressed with clear messaging"
  - "Screen reader users will encounter barriers with form validation"

expected_outcomes: "Findings will inform design improvements to the direct deposit update flow and identify accessibility fixes needed before launch."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "lean maximum variation"
  
  primary_criteria: 
    - "Must be receiving VA disability compensation payments"
    - "Must have updated direct deposit information in the past 2 years"
    
  secondary_criteria:
    - "Mix of screen reader users and non-assistive technology users"
    - "Range of ages and technical comfort levels"
    
  screener_questions:  
    - question: "Do you currently receive disability compensation payments from the VA?"
      qualifying_response: "Yes"
    - question: "Have you updated your direct deposit information with the VA in the past 2 years?"
      qualifying_response:   "Yes"
      
participants:
  veterans: 15
  caregivers: 0
  dependents: 0
  total_recruited: 15
  completed_sessions_goal: 10
  
# Timeline & Sessions
timeline:
  pilot_date:   "2026-01-20"
  pilot_participant: "Jane Smith"
  research_dates: "2026-01-22 to 2026-01-29"
  research_review_submission: "2026-01-15"
  
session_details:  
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 3
  
# Strategic Alignment
octo_priorities:
  - objective: "Objective 1: VA's digital experiences are the easiest and most efficient way to access VA health care and benefits"
    key_results: 
      - "Improve satisfaction with our web and mobile products by 5 points"
      
veteran_journey_phases:
  - "Taking Care of Myself"
  - "Putting Down Roots"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/discovery-research/README.md"
    
tags:
  - "AUD: Veterans"
  - "BNFT: Disability"
  - "BNFT: Finances"
  - "PRDT: Direct-deposit"
  - "Accessibility"
  - "DSC: Form"
  - "DSP: Ask users for direct deposit"
  - "HDW: Desktop"
  - "HDW: Smartphone"
  - "usability-testing"
  - "authenticated-experience"
---
```

**Tag Selection Rationale (using NLP analysis):**
- **AUD: Veterans** - Explicitly mentioned as primary audience
- **BNFT: Disability** - Research focuses on disability compensation payments (inferred from "receiving VA disability compensation payments")
- **BNFT: Finances** - Direct deposit relates to financial management and payment methods (semantic connection)
- **PRDT: Direct-deposit** - Primary product being tested
- **Accessibility** - Explicit mention of screen reader testing and identifying accessibility barriers
- **DSC: Form** - The interface involves form elements for updating information (inferred from "direct deposit update interface")
- **DSP: Ask users for direct deposit** - This pattern specifically addresses collecting banking information (semantic match with "update their direct deposit information")
- **HDW: Desktop, HDW: Smartphone** - Remote usability testing typically covers multiple devices; not explicitly stated but standard practice (contextual inference)
- **usability-testing** - Explicitly stated methodology
- **authenticated-experience** - Product is located in VA.gov Profile, which requires authentication (contextual inference)

**Tags considered but not included:**
- **AUD: Caregivers** - Not mentioned as participants (0 caregivers listed)
- **DSC: Button** - Too granular; form components are covered by DSC: Form
- **Initiative: CX Executive Order** - No explicit connection to this initiative mentioned

---
