# README:  Copilot Research Prompts

This folder contains reusable prompts designed to guide research activities and analyses throughout the entire research lifecycle, leveraging GitHub Copilot to streamline workflows.  The prompts are organized into three categories based on research phases:

---

## Research Discovery

Prompts to help explore past research and inform new research planning.

### 1. [past-research-discovery-prompt.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-discovery/past-research-discovery-prompt.md)
- **Purpose**: Facilitates exploration of research findings and insights within the repository.
- **Key Features**: 
  - Guides users in identifying key outcomes and challenges from past studies. 
  - Suggests areas for additional research. 
  - Provides hyperlinks to relevant materials.
- **Usage**:  Customize the prompt with specific topics or products to navigate the repository effectively.

### 2. [past-research-analysis-for-new-research-plan-prompt.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-discovery/past-research-analysis-for-new-research-plan-prompt.md)
- **Purpose**: Leverages past research findings to inform new research plans. 
- **Key Features**: 
  - Links to relevant studies and extracts insights.
  - Highlights gaps and opportunities for further exploration.
  - Ensures alignment with organizational goals.
- **Usage**: Use the prompt to analyze past research and apply findings to draft new research plans.

---

## Research Review

Prompts to evaluate and strengthen research plans and conversation guides before conducting studies.

### 3. [research-plan-analysis-prompt.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-review/research-plan-analysis-prompt.md)
- **Purpose**: Analyzes completed research plans for strengths, risks, and alignment with goals.
- **Key Features**: 
  - Breaks down each section of the research plan for detailed analysis.
  - Suggests improvements to hypotheses, methodology, and recruitment criteria.
  - Ensures alignment with past research and OCTO priorities.
- **Usage**: Use the structured template to critically evaluate and refine research plans. 

### 4. [conversation-guide-analysis-prompt.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-review/conversation-guide-analysis-prompt.md)
- **Purpose**: Helps evaluate whether a conversation guide aligns with research plan goals and hypotheses.
- **Key Features**:
  - Assesses strengths, gaps, and opportunities within the guide.
  - Provides actionable suggestions for improvement.
  - Addresses accessibility, emotional/cognitive load, and mental models.
- **Usage**:  Paste the provided reusable prompt into GitHub Copilot Chat and refine analysis with iterative questions.

---

## Research Report

Prompts to process and disseminate research findings after completing studies.

### 5. [add-metadata-labels-to-findings-prompt.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-report/add-metadata-labels-to-findings-prompt.md)
- **Purpose**: Helps researchers apply standardized OCTO metadata labels to Key Findings in structured YAML format. 
- **Key Features**:
  - Enables automated pattern detection and aggregation across studies.
  - Uses metadata taxonomy with required (finding_types, severity_levels), recommended (research_themes, product_areas), and optional categories.
  - Provides structured YAML format for GitHub Actions parsing.
  - Includes validation for label values and syntax. 
- **Usage**: Use after finalizing your research findings.  Attach your findings report and the metadata taxonomy file, then paste the prompt to generate labeled YAML blocks for each Key Finding.

### 6. [create-issues-from-research-findings-prompt. md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-report/create-issues-from-research-findings-prompt.md)
- **Purpose**: Converts research recommendations and next steps into actionable GitHub issues with proper structure and traceability. 
- **Key Features**:
  - Automates issue creation through GitHub Copilot's workbench (Claude models only).
  - Creates one issue at a time with option to include code references.
  - Generates structured issue content with Background, Research Insight, Proposed Action, Acceptance Criteria (as checkboxes), and Additional Context.
  - Suggests appropriate labels and priority levels.
  - Includes comprehensive troubleshooting guidance.
- **Usage**: Use Claude Sonnet/Haiku/Opus models in GitHub Copilot.  Attach your research findings document and copy the prompt. Review each draft issue in the workbench before creating. 

### 7. [research-short-story-prompt.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-report/research-short-story-prompt.md)
- **Purpose**: Summarizes research reports into concise, markdown-formatted narratives (maximum 400 words).
- **Key Features**: 
  - Maintains structured layout with specific headers (Title, Byline, tl;dr, What we did, Key insights, etc.).
  - Includes sections like "Between the lines," "Yes, but," "Why it matters," and "What's next."
  - Ensures summaries are accessible, engaging, and actionable.
  - Uses plain language with a clear, confident, and friendly tone.
- **Usage**: Open the research report in GitHub Copilot, paste the provided prompt, review the generated summary, and save as `short-story.md` in your research folder.

---

## Research Lifecycle Workflow

These prompts support the complete research lifecycle:

1. **Discovery Phase** → Use `past-research-discovery-prompt. md` and `past-research-analysis-for-new-research-plan-prompt.md`
2. **Planning Phase** → Use `research-plan-analysis-prompt.md` and `conversation-guide-analysis-prompt.md`
3. **Reporting Phase** → Use `add-metadata-labels-to-findings-prompt.md`, `create-issues-from-research-findings-prompt.md`, and `research-short-story-prompt.md`

---

## Getting Started

Each prompt includes:
- Clear instructions for when and how to use it
- Step-by-step usage guidelines
- Example outputs
- Best practices and tips

**For best results:**
- Follow the prompts in sequence based on your research phase
- Use recommended AI models (especially Claude for issue creation)
- Review and customize outputs for your specific research context
- Attach relevant documents and files when prompted

---
