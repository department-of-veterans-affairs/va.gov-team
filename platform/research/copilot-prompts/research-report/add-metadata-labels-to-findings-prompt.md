# Apply OCTO Metadata Labels to Research Findings

## Overview

This prompt helps researchers apply standardized OCTO metadata labels to their Key Findings in a structured YAML format.  These labels enable automated pattern detection, aggregation across studies, and connection to VES Unmet Needs. 

## When to Use

Use this prompt **after** you have drafted your research findings report and finalized your Key Findings. The metadata labels are applied to Key Findings, not during synthesis.

## How to Use

1. Open your draft research findings report in GitHub
2. Open GitHub Copilot Chat
3. Attach your research findings report
4. Attach the metadata labels taxonomy file:  [va.gov-research-repository/research-findings-metadata-labels.yml](https://github.com/department-of-veterans-affairs/va.gov-research-repository/blob/master/.github/research-findings-metadata-labels.yml)
5. Copy and paste the prompt below
6. Review Copilot's suggestions and accept/modify as appropriate
7. Add the YAML label blocks to your findings report

---

## Prompt

```
I need help applying OCTO metadata labels to the Key Findings in my research findings report. 

For each Key Finding in my report, analyze the content and suggest appropriate labels from the attached metadata taxonomy file (research-findings-metadata-labels.yml).

For each Key Finding, provide labels from these categories (as applicable):

**Required:**
- finding_types (e.g., usability_issue, accessibility_barrier, unmet_need)
- severity_levels (critical, high, medium, low, enhancement)

**Recommended (when applicable):**
- research_themes (e.g., navigation_wayfinding, form_completion)
- product_areas (e.g., health_care, benefits, claims_appeals)
- journey_stages (e. g., discovery, application, ongoing_management)
- user_characteristics (e.g., first_time_user, low_digital_literacy)

**Optional (when relevant):**
- emotional_states (e. g., frustrated, confused, anxious)
- life_events (e.g., retiring_military, health_crisis)
- trust_factors (e.g., confirmation_needed, status_uncertainty)
- channel_switching (e.g., digital_to_phone, digital_to_facility)
- temporal_patterns (e.g., recurring_issue, emerging_trend)
- design_system_patterns (e.g., form_validation, error_messaging)

**IMPORTANT:  Format your response as a YAML code block for each Key Finding.**

The YAML block must use this exact structure so it can be parsed by GitHub Actions:

```yaml key-finding-labels
finding_id: 1
finding_title: "[Exact title of the finding]"
labels:
  finding_types:
    - [label]
  severity_levels:  [label]
  research_themes:
    - [label1]
    - [label2]
  product_areas: 
    - [label]
  journey_stages:
    - [label]
  user_characteristics:
    - [label]
  emotional_states: 
    - [label]
  life_events:
    - [label]
  trust_factors: 
    - [label]
  channel_switching:
    - [label]
  temporal_patterns:
    - [label]
  design_system_patterns:
    - [label]
service_journey_mapping: 
  - [VES Service Journey name, if applicable]
pattern_triggers:
  - [Pattern name if this finding contributes to a known pattern]
```

Repeat for each Key Finding. 

After providing individual labels, also identify any **pattern combinations** that might trigger automated pattern detection (refer to the "Automated Pattern Recognition System" section of the metadata labels file).
```

---

## Example Output

### Key Finding 1: Veterans struggle to find the correct form for their disability claim type

```yaml key-finding-labels
finding_id: 1
finding_title: "Veterans struggle to find the correct form for their disability claim type"
labels:
  finding_types: 
    - usability_issue
    - content_confusion
  severity_levels: high
  research_themes:
    - navigation_wayfinding
    - content_comprehension
  product_areas: 
    - disability_compensation
    - claims_appeals
  journey_stages:
    - application
  user_characteristics: 
    - first_time_user
  emotional_states:
    - confused
    - frustrated
service_journey_mapping: 
  - "Apply for Benefits"
pattern_triggers:
  - "Eligibility Confusion Cascade"
```

**Rationale:** This finding describes navigation and comprehension challenges during the application journey, with emotional impact on users.  Marked as high severity because it may prevent task completion.  Maps to the "Apply for Benefits" VES Service Journey.

---

### Key Finding 2: Mobile users frequently abandon the application process after the first error message

```yaml key-finding-labels
finding_id: 2
finding_title:  "Mobile users frequently abandon the application process after the first error message"
labels:
  finding_types:
    - usability_issue
    - accessibility_barrier
  severity_levels: critical
  research_themes:
    - mobile_experience
    - error_handling
    - form_completion
  product_areas:
    - benefits
  journey_stages: 
    - application
  user_characteristics:
    - low_digital_literacy
  emotional_states: 
    - frustrated
    - overwhelmed
  design_system_patterns: 
    - error_messaging
    - form_validation
service_journey_mapping: 
  - "Apply for Benefits"
pattern_triggers:
  - "Digital Literacy Abandonment"
  - "Form Validation Cascade"
```

**Rationale:** This finding describes a critical mobile-specific issue causing task abandonment. The combination of mobile experience + error handling + low digital literacy triggers the "Digital Literacy Abandonment" pattern. 

---

## Adding Labels to Your Findings Report

After reviewing Copilot's suggestions, add the YAML label blocks directly after each Detail of Finding in your report:

```markdown
### Finding 1: Veterans struggle to find the correct form for their disability claim type

Veterans commonly search using informal language rather than official benefit category names, leading to confusion about which form to complete. 

```yaml key-finding-labels
finding_id: 1
finding_title: "Veterans struggle to find the correct form for their disability claim type"
labels:
  finding_types:
    - usability_issue
    - content_confusion
  severity_levels: high
  research_themes:
    - navigation_wayfinding
    - content_comprehension
  product_areas: 
    - disability_compensation
  journey_stages: 
    - application
  user_characteristics: 
    - first_time_user
  emotional_states:
    - confused
    - frustrated
service_journey_mapping:
  - "Apply for Benefits"
pattern_triggers:
  - "Eligibility Confusion Cascade"
```

- _Supporting data: 7 of 12 participants (58%) could not identify the correct form on first attempt_
- _Supporting data: **P3**:  "I don't know if I need the 526 or the 21-22, they all look the same to me"_

```

---

## YAML Block Requirements

For the GitHub Action to correctly parse your labels, ensure: 

1. **Use the exact code block header:** ` ```yaml key-finding-labels `
2. **Include finding_id:** Sequential number matching your finding order
3. **Include finding_title:** Exact title of the finding (for validation)
4. **Use valid label values:** Only use labels from the official taxonomy
5. **Use arrays for multi-value fields:** `finding_types`, `research_themes`, etc. 
6. **Use single value for severity:** `severity_levels` takes one value only
7. **Include service_journey_mapping:** Map to VES Service Journey when applicable
8. **Include pattern_triggers:** Note if this finding contributes to a known pattern

---

## Validation

The GitHub Action will validate your YAML blocks and flag: 
- ❌ Invalid label values (not in taxonomy)
- ❌ Missing required fields (finding_types, severity_levels)
- ❌ Malformed YAML syntax
- ⚠️ Missing service_journey_mapping (warning only)

---

## Tips

- **Don't over-label:** Focus on the most relevant labels.  3-7 labels per finding is typical. 
- **Severity is required:** Every finding should have exactly one severity level. 
- **Be specific:** Choose the most specific label that applies.
- **Consider patterns:** If a finding relates to vulnerable populations, trust issues, or recurring problems, include pattern_triggers. 
- **Map to Service Journeys:** This enables VES Unmet Needs integration. 
- **Review the taxonomy:** Familiarize yourself with the full label set. 
