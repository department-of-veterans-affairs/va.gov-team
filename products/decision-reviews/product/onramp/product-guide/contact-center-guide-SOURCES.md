# Contact Center Product Guide - Sources Reference

**Date Created:** 2025-10-20
**Purpose:** Document all source materials used in creating the Contact Center Product Guide for the Onramp to Decision Review Selection tool

---

## Primary Sources Used

### 1. Enhanced DR Onramp Initiative Brief
**File:** `products/decision-reviews/Enhanced-DR-Onramp-Initiative Brief.md`

**Sections Using This Source:**
- **I. Product Overview** - Problem statement, tool definition, scope
- **I.C. Success Metrics** - Current abandonment rates, pathway switching data, improvement goals
- **III. The Onramp Tool: How It Works** - What We're Building section, design principles
- **III.E. Key Design Principles** - Mobile-first, plain language, unauthenticated access

**Key Content Extracted:**
- Form abandonment rates: 43.9% overall, SC 54.3%, HLR 37.1%, NOD 40.9%
- Pathway switching baseline: 4.8%
- Tool scope: Disability compensation only, unauthenticated
- Design approach: Interactive questionnaire with contextualized help

**Content Type:** Direct quotes and metrics adapted into guide format

---

### 2. HLR Call Center Video Script
**File:** `products/decision-reviews/higher-level-review/product-guide/call-center-video-script.md`

**Sections Using This Source:**
- **II. Background: What is a Decision Review?** - Introduction, context setting, three options
- **IV.B. Higher-Level Review** - When to use, requirements, what happens, informal conference
- **IV.B. Common Questions** - HLR-specific FAQ adapted from script
- **Overall Structure** - Section organization, tone, step-by-step approach

**Key Content Extracted:**
- "What a veteran does when they disagree with VA's decision" framing
- Explanation of three decision review options under AMA
- Informal conference description and purpose
- Plain language explanations of complex concepts
- Q&A format for common scenarios

**Content Type:** Structure template, explanatory language adapted, FAQ questions repurposed

**Notes:** This was the primary model for guide structure and tone. Not a video - repurposed written script for Contact Center training.

---

### 3. Prior Research Copilot Summary
**File:** `products/decision-reviews/research/decision-reviews-onramp-2025/prior-research-copilot-summary.md`

**Sections Using This Source:**
- **V.C. Common Veteran Questions** - About choosing pathway, confusion points
- **VI.B. Veteran Uncertainty/Confusion** - Common situations and what to do

**Key Content Extracted:**
- Veterans struggle to differentiate between pathways
- Evidence confusion is primary pain point
- Timeline vs. appropriateness trade-offs
- Need for human assistance when tool can't cover edge cases

**Content Type:** Research insights synthesized into FAQ and troubleshooting guidance

---

### 4. Board Appeal Existing Data Discovery (Medallia)
**File:** `products/decision-reviews/Notice-of-Disagreement/Research/042023 NoD Evaluative Research/Board Appeal Existing Data Discovery.md`

**Sections Using This Source:**
- **IV.A. Supplemental Claim Common Questions** - Evidence-related FAQ
- **IV.C. Board Appeal Common Questions** - NOD-specific issues
- **V.C. Common Veteran Questions - About Evidence** - What counts as "new" evidence

**Key Content Extracted:**
- Veterans not finding their issues listed
- No space to elaborate on disagreement
- Evidence submission confusion
- Document upload issues
- Satisfaction ratings (median 2, average 2.8)

**Content Type:** Real Veteran feedback adapted into FAQ format

---

### 5. Decision Reviews Research Strategy
**File:** `products/decision-reviews/research/decision-reviews-onramp-2025/decision-reviews-research-strategy.md`

**Sections Using This Source:**
- **I.B. Why It Exists** - Problem validation
- **II.B. Quick Comparison Table** - Framework for comparison

**Key Content Extracted:**
- Research-validated pain points
- Evidence as key differentiator between pathways
- User confusion leading to pathway switching

**Content Type:** Research context supporting problem statement

---

## Additional Context Sources

### 6. Session Log: VA Docs MCP Setup
**File:** `va-docs-mcp/docs/development/session-logs/2025-10-20-session-log-claude-code-mcp-setup.md`

**Purpose:** Documented the MCP server setup process that enabled this research

**Not directly cited in guide, but enabled:**
- Comprehensive search across VA docs repository
- Retrieval of all source documents
- Cross-referencing multiple research files

---

## Content Creation Matrix

| Guide Section | Primary Source | Secondary Sources | Content Type |
|---------------|----------------|-------------------|--------------|
| I. Product Overview | Initiative Brief | Research Strategy | Direct + Adapted |
| II. Background | HLR Video Script | Research Strategy | Adapted |
| III. Onramp Tool | Initiative Brief | HLR Video Script | Direct + Created |
| IV.A. Supplemental Claim | HLR Video Script | Medallia Data | Adapted + Created |
| IV.B. Higher-Level Review | HLR Video Script | Prior Research | Direct + Adapted |
| IV.C. Board Appeal | Medallia Data | HLR Video Script | Adapted + Created |
| V. Assisting Veterans | Prior Research | All sources | Created from synthesis |
| VI. Troubleshooting | HLR Video Script | Prior Research | Created |
| VII. Resources | Initiative Brief | - | Created structure |

---

## Placeholder Categories

Content requiring user input (not available in VA docs):

### URLs and Access
- **Sections:** III.B, IV.A-C, VII.A
- **Examples:** Production URL for Onramp tool, direct form links, navigation paths
- **Reason:** Tool not yet in production, URLs not finalized

### Operational Details
- **Sections:** VI.A, VI.C, VII.C
- **Examples:** Tech support procedures, escalation contacts, known issues
- **Reason:** Contact Center operational procedures not in product documentation

### Policy Clarifications
- **Sections:** V.C, IV.A-C
- **Examples:** Withdrawing pathway, evidence resubmission rules, progress saving
- **Reason:** Requires VA policy expert or legal review

### Timelines
- **Sections:** I, IV.A-C
- **Examples:** Launch date, current processing times, phased rollout plan
- **Reason:** Time-sensitive information, confirm with VA before publishing

### Training Materials
- **Sections:** VII.D, Appendices
- **Examples:** Training videos, job aids, quick reference cards
- **Reason:** May not exist yet, or not in va.gov-team repository

---

## Methodology Notes

### Research Process
1. **Initial MCP Search:** Broad queries for "Decision Review", "Contact Center", "product guide"
2. **Targeted Retrieval:** Specific document reads based on search results
3. **Cross-Reference:** Checked multiple sources for consistency
4. **Gap Identification:** Noted where documentation was silent on needed topics

### Content Adaptation Approach
- **Direct quotes:** Used for metrics, specific policy statements
- **Adapted language:** Simplified technical language for Contact Center audience
- **Synthesized content:** Combined insights from multiple sources
- **Created content:** Structure, transitions, troubleshooting scenarios
- **Placeholders:** Marked all gaps requiring user input or verification

### Quality Checks
-  Verified all metrics against source documents
-  Cross-referenced pathway details across multiple sources
-  Maintained consistency with VA plain language standards
-  Flagged unverified assumptions as placeholders
-  Preserved source document language for critical definitions

---

## Files Modified/Created

### New Files Created (2025-10-20)
1. `contact-center-product-guide-OUTLINE.md` - Detailed structure with annotations
2. `contact-center-product-guide-DRAFT.md` - Full draft with placeholders
3. `contact-center-guide-SOURCES.md` - This file

### Files Read (VA Docs Repository)
1. `products/decision-reviews/Enhanced-DR-Onramp-Initiative Brief.md`
2. `products/decision-reviews/higher-level-review/product-guide/call-center-video-script.md`
3. `products/decision-reviews/research/decision-reviews-onramp-2025/prior-research-copilot-summary.md`
4. `products/decision-reviews/Notice-of-Disagreement/Research/042023 NoD Evaluative Research/Board Appeal Existing Data Discovery.md`
5. `products/decision-reviews/research/decision-reviews-onramp-2025/decision-reviews-research-strategy.md`

### MCP Searches Conducted
- "Contact Center product guide"
- "Decision Review call center"
- "Supplemental Claim documentation"
- "Higher-Level Review guide"
- "Board Appeal research"
- "Medallia feedback Decision Review"
- "Onramp tool"

---

## Recommendations for Next Steps

### Before Finalizing Guide
1. **Verify all metrics** with latest data (sources show data through 2023-2024)
2. **Confirm URLs** when Onramp tool reaches production
3. **Review placeholders** with Contact Center operations team
4. **Validate policy answers** with VA legal/policy experts
5. **Update timelines** with current processing time data

### Potential Additional Sources
Not yet reviewed but may contain useful content:
- `/products/decision-reviews/Supplemental-Claims/` - SC-specific documentation
- `/platform/contact-center/` - If exists, may have CC guide templates
- `/products/decision-reviews/research/` - Other research files not yet reviewed

### Style and Format
- Guide follows HLR Video Script structure (proven effective)
- Plain language aligned with VA content style guide
- Tables and callouts for Contact Center quick reference
- FAQ format for common scenarios (based on Medallia data)

---

## Document Lineage

```
VA Docs Research (MCP Search)
    |
5 Primary Source Documents
    |
Outline (annotated structure)
    |
Draft Guide (content with placeholders)
    |
Sources Reference (this document)
    |
[User Review & Placeholder Fill-In]
    |
[Microsoft Word Formatting]
    |
[Chief of Staff Claude Review]
    |
Final Contact Center Product Guide
```

---

**Status:** Research phase complete. Ready for user review and placeholder completion.

**Total Placeholders:** 40+ markers across all sections requiring user input

**Estimated Completion Time:** 2-4 hours to fill placeholders and format in Word (user effort)

---

*This sources document ensures transparency in content creation and enables future updates by clearly mapping guide sections to authoritative VA documentation.*
