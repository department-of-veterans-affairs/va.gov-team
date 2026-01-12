---
# Prompt File Metadata
title: "GitHub Copilot Prompt:  Complete Conversation Guide Frontmatter with Metadata"
date:  2026-01-12
last_updated: 2026-01-12
prompt_type: "research-planning"
category: "Research Planning & Execution"
purpose: "Helps researchers complete the YAML frontmatter section of conversation guides using GitHub Copilot"

# Usage Context
target_audience: 
  - "UX Researchers"
  - "Research Leads"
  - "Moderators"
  - "Product Teams"

use_cases:
  - "Creating new conversation guides"
  - "Updating existing conversation guide metadata"
  - "Standardizing conversation guide structure"
  - "Applying research repository tags"

# Related Resources
related_files:
  - file:  "conversation-guide-template.md"
    url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/conversation-guide-template.md"
    description: "The conversation guide template this prompt helps complete"
  - file: "labels.yml"
    url: "https://github.com/department-of-veterans-affairs/va.gov-research-repository/blob/master/.github/labels.yml"
    description: "Source of truth for research repository tags"
  - file: "research-plan-frontmatter-prompt.md"
    url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-discovery/research-plan-frontmatter-prompt.md"
    description: "Related prompt for research plan frontmatter"
  - file: "README.md"
    url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/README.md"
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
  - "conversation-guide"
  - "metadata"
  - "frontmatter"
  - "YAML"
  - "research-repository"
  - "documentation"
  - "automation"
---

# Complete Conversation Guide Frontmatter with Metadata

## Overview

This prompt helps researchers complete the YAML frontmatter section at the beginning of their conversation guide template. The frontmatter contains structured metadata that makes conversation guides searchable, trackable, and properly categorized in the research repository alongside their corresponding research plans.

## When to Use

Use this prompt **when creating a new conversation guide** or **updating an existing conversation guide** where you need to complete or update the frontmatter metadata section.

## How to Use

1. Open your conversation guide file in GitHub (use the [conversation guide template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/conversation-guide-template.md))
2. Open GitHub Copilot Chat
3. Attach your conversation guide file
4. Optionally attach the corresponding research plan to help inform tag selection
5. Copy and paste the prompt below (the prompt includes all available tags from the research repository)
6. Review Copilot's suggestions and modify as needed
7. Copy the completed frontmatter into your conversation guide

## Adding Frontmatter to Your Conversation Guide

1. Copy the generated YAML frontmatter
2. Paste it at the very beginning of your conversation guide file (before any markdown content)
3. Ensure there are three dashes (`---`) at both the start and end of the YAML block
4. Verify the formatting is correct (proper indentation, no extra spaces)
5. Save your file

## Tips

- **Align with your research plan:** Use the same core tags from your research plan, then add specific component/pattern tags based on the tasks in your conversation guide. 
- **Trust the NLP analysis:** Copilot uses natural language processing to understand what's being tested and infer appropriate tags.
- **Analyze task structure:** The specific tasks and "things to watch for" provide clues about which design system components and patterns are being tested.
- **Consider the participant experience:** Tags should reflect what participants will actually interact with during the session.
- **Update after pilot sessions:** If tasks change significantly after your pilot, update the frontmatter tags accordingly. 
- **Include methodology tags:** Add tags for your research method (usability-testing, semi-structured-interviews, etc.).
- **Be specific with components:** If tasks test specific form elements, alert types, or navigation patterns, include those component tags. 
- **Tag for discoverability:** Other researchers should be able to find your conversation guide when searching for similar studies. 
- **Validate YAML syntax:** Improper indentation or formatting can break the YAML parsing.  Use a YAML validator if needed. 
- **Document assistive technology:** If testing with specific assistive technology, mention it in the description or tags.
- **Keep tags consistent:** Tags help connect conversation guides to research plans, findings reports, and other research artifacts. 
- **Review the full taxonomy:** For comprehensive tagging, review the complete labels file at https://github.com/department-of-veterans-affairs/va.gov-research-repository/blob/master/.github/labels.yml
- **Update the last_modified date:** Change this date whenever you make significant updates to the conversation guide. 

---

## Prompt

```
I need help completing the YAML frontmatter section at the top of my conversation guide. 

**INSTRUCTIONS:  Use natural language processing to analyze the attached conversation guide content.  Understand the context, intent, and meaning of the research session to:**
- Extract key metadata even when not explicitly labeled
- Infer appropriate tags based on content meaning and research focus, not just keyword matching
- Identify relevant audiences, benefits, products, patterns, and methodologies based on what the conversation guide is testing
- Make intelligent connections between the session tasks and the tag taxonomy
- Detect implicit information (e.g., if tasks involve testing a form flow, infer relevant form component and pattern tags)
- Analyze the types of questions being asked to identify research themes (e.g., navigation, comprehension, task completion)
- After generating the frontmatter, also provide: 
1. A brief explanation of your tag selections and the reasoning behind each inference
2. How the tags align with the tasks and research objectives
3. Any questions about unclear information that needs clarification
4. A note about any tags you considered but didn't include, and why
5. Recommendations for ensuring the conversation guide tags match the corresponding research plan tags

Please analyze the content of my conversation guide and generate a complete frontmatter section based on the following structure:

**Conversation Guide Metadata:**
- title: (Format as "Conversation Guide for [Team, Product, Date]" - match the research plan if available)
- author: (Full name of the primary moderator/author)
- date_created: (Today's date in YYYY-MM-DD format, or the actual creation date if updating)
- last_modified: (Today's date in YYYY-MM-DD format)
- tags: (This is CRITICAL - use natural language processing to identify all relevant tags based on conversation guide content, tasks, and research focus)
- description: (Brief 1-2 sentence description of what this conversation guide covers)

---

**TAGS TAXONOMY**

For the tags section, use natural language processing to understand the conversation guide context and select all relevant tags from these categories.  Analyze the tasks, warm-up questions, and post-task interview to understand what is actually being tested: 

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

**DESIGN SYSTEM COMPONENT TAGS (DSC:)** - Use when tasks test specific components: 
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

**DESIGN SYSTEM PATTERN TAGS (DSP:)** - Use when tasks test specific patterns:
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

**PRODUCT TAGS (PRDT:)** - Select the specific product(s) being tested:
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
- Accessibility (use when including accessibility testing or assistive technology)
- Internal Research:  Platform Research
- (Add methodology tags like:  usability-testing, semi-structured-interviews, card-sort, tree-test, etc.)

**Note:** For a complete list of all available tags, researchers can review the source file at: 
https://github.com/department-of-veterans-affairs/va.gov-research-repository/blob/master/.github/labels.yml

---

**IMPORTANT:  Format your response as a complete YAML frontmatter block that can be copied directly into the conversation guide.**

Use this exact structure: 

```yaml
---
title: "Conversation Guide for [Team, Product, Date]"
author:  "[AUTHOR NAME]"
date_created:  "[YYYY-MM-DD]"
last_modified: "[YYYY-MM-DD]"
tags: 
  - "[tag-from-taxonomy-above]"
  - "[tag-from-taxonomy-above]"
  - "[tag-from-taxonomy-above]"
description: "A conversation guide for [brief description of what is being tested]."
---
```

---

## Example Output

Here's an example of a completed frontmatter section:

```yaml
---
title: "Conversation Guide for Authenticated Experience, Direct Deposit, January 2026"
author: "Jane Smith"
date_created: "2026-01-12"
last_modified: "2026-01-12"
tags:
  - "AUD:  Veterans"
  - "BNFT: Disability"
  - "BNFT:  Finances"
  - "PRDT: Direct-deposit"
  - "Accessibility"
  - "DSC: Form"
  - "DSC: Form - Text Area"
  - "DSC: Alert Boxes"
  - "DSP: Ask users for direct deposit"
  - "DSP: Error Message Guide"
  - "HDW: Desktop"
  - "HDW:  Smartphone"
  - "usability-testing"
  - "authenticated-experience"
  - "screen-reader-testing"
description: "A conversation guide for testing the direct deposit update flow in the VA. gov Profile, including accessibility testing with screen reader users."
---
```

**Tag Selection Rationale (using NLP analysis):**
- **AUD: Veterans** - Primary participant audience based on screener questions
- **BNFT:  Disability** - Context mentions disability compensation payments (inferred from warm-up questions about service-connected disability)
- **BNFT: Finances** - Direct deposit relates to managing payment information (semantic connection)
- **PRDT: Direct-deposit** - Primary product being tested in tasks
- **Accessibility** - Tasks explicitly mention testing with screen reader users
- **DSC: Form** - Tasks involve interacting with form fields for updating banking information (inferred from task descriptions)
- **DSC: Form - Text Area** - Task asks users to enter bank account details (specific component inference)
- **DSC: Alert Boxes** - "Things to watch for" mentions user reactions to error messages/alerts (implicit reference)
- **DSP: Ask users for direct deposit** - Pattern specifically for collecting banking information (semantic match)
- **DSP: Error Message Guide** - Tasks include testing error states and validation messaging (inferred from task flow)
- **HDW: Desktop, HDW: Smartphone** - Remote testing typically includes multiple devices; tasks mention mobile responsiveness (contextual inference)
- **usability-testing** - Session structure follows usability testing format with tasks and observations
- **authenticated-experience** - Direct deposit in Profile requires authentication (contextual knowledge)
- **screen-reader-testing** - Explicitly mentioned in session objectives and recruitment

**Tag Alignment with Research Plan:**
These tags should match the corresponding research plan tags.  The conversation guide adds more specific component and pattern tags based on actual tasks being performed (e.g., DSC: Form - Text Area, DSP: Error Message Guide).

**Tags considered but not included:**
- **AUD: Caregivers** - Not mentioned as participants
- **DSC: Button** - While buttons are present, not the primary focus of testing
- **MHV:  Pharmacy** - Not related to direct deposit testing
- **Initiative:  PACT Act** - No connection to this initiative

**Recommendations:**
- Ensure these tags align with your research plan frontmatter
- If testing on specific assistive technology (JAWS, NVDA, VoiceOver), consider adding those details to the description
- Update tags if tasks change during pilot testing

---
