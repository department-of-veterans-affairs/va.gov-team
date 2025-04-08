# VA.gov Open Text Analysis Guide

This guide outlines a reproducible process for analyzing open-ended feedback from VA.gov surveys to identify user experience (UX) issues, performance pain points, and cross-device friction. The approach is designed for teams working with large volumes of user comments and includes metadata fields such as CSAT rating, device type, operating system, and URL path.

This guide is intended to help research and product teams start from raw feedback and move toward structured insights that improve the VA.gov user experience. The methods discussed here are evolving and this guide will change as new / better methods are established. 


> **Note:** ChatGPT and other conversational LLMs are not designed for reliable comment-by-comment tagging at scale. To tag large volumes of comments, further external analysis is required using programmatic methods (e.g., local classifiers, batch OpenAI API calls, or dedicated NLP pipelines). A pipeline for this stage is still under development. 

> Similarly, powering dashboards or interactive tools with tagged comment data requires external tooling, such as Python-based scripts, notebooks, or data visualization frameworks Power BI and DOMO.


## Overview

**Goal:** Extract meaningful patterns from open text feedback to improve VA.gov user experience, inform product strategy, and surface systemic usability or access problems.

**Inputs:**
- A dataset of cleaned user comments (e.g. from intercept surveys)
- Structured fields including:
  - `Comment_Cleaned`
  - `CSAT_Rating`
  - `Device` (e.g., Desktop, Mobile Phone, Tablet)
  - `Operating_System`
  - `URL: Path`

**Outputs:**
- A refined tag set for UX themes
- Summary of common pain points and success areas
- Foundations for training or prompting NLP models

## Step 1: Initial Data Cleaning (Assumed Complete)

Ensure the data has:
- PII redacted or removed
- Text standardized (e.g., lowercased, punctuation stripped if needed)
- Null values handled

## Step 2: Exploratory Sampling

Sample 500 to 5000 comments at random from the dataset. Skim to get a sense of:
- Repeated user issues
- Positive or negative tone
- Emotional intensity
- Emerging product- or feature-specific problems

### Suggested GPT Prompt
```text
Please read the following 100 user comments from VA.gov surveys and identify recurring themes or UX issues.
Provide a list of proposed categories (tags) that could be used to classify the feedback.
```

## Step 3: Refine a VA.gov-Specific Tag Set

Use your sampled analysis to draft a tag list. Here's a recommended tag set derived from reviewing 5000+ comments. Below are sample tags from an analysis
run on 6 months of Medallia comments.

### UX & Technical Tags
- Login & Verification Issues
- Navigation & Looping Bugs
- Performance & Stability
- Usability & Interface Confusion
- Notification / Messaging Clarity

### Product/Task-Oriented Tags
- Appointments & Health Services
- Claims & Benefits – Access / Updates
- Claims & Benefits – Delays
- Travel & Reimbursement
- Health Records / Lab Data
- Education & GI Bill
- Customer Support / Contact Channels

### Cross-Cutting Tags
- Mobile-Specific Friction
- Positive Feedback
- Frustrated / Escalated Tone
- Other / Unclear

## Step 4: Use Metadata to Enrich the Analysis

Even before labeling, metadata fields provide valuable context. When downloading medallia data, these fields are included in the output. 

### CSAT Rating
- Compare low-CSAT vs high-CSAT comment content
- Identify tags that correlate with dissatisfaction

### Device Type
- Segment feedback by Mobile vs Desktop
- Example: mobile users may mention verification difficulty; desktop users cite navigation dead-ends

### Operating System
- Spot clusters of issues by OS (e.g., iOS login problems)

### URL Path (Contextual Only)
- Indicates where the survey was triggered, but not necessarily the user's full task journey
- Use for context, not attribution. 

## Step 5: Document Patterns

Even without external tools, exploratory sampling and metadata filtering can produce actionable insights to guide further analysis.

### Examples of Emergent Themes From Manual Analysis

**Login & Verification Issues**
- "I couldn’t get through ID.me, it just kept spinning"
- "Too many steps to sign in on mobile"
- "Hard to log in on iPhone, works better on desktop"

**Claims Delays**
- "It’s been 10 months and no update on my claim"
- "My claim sits on the same step for over 6 months"

**Navigation Confusion**
- "I just go in circles trying to find where to refill my meds"
- "Dead-end pages when I try to schedule an appointment"

**Positive Feedback**
- "Very easy to use and straightforward"
- "I’ve always received outstanding service"

**Mobile-Specific Friction**
- "Hard to verify my ID on a phone"
- "Site doesn’t render well on my tablet"

**Performance & Stability**
- "The website keeps sending me in circles"
- "System down again, couldn’t check benefits"

## Optional Next Phase: Tagging the Full Dataset (guide to come)

Once the tag set is stable:
- Fine-tune a BERT model using a labeled sample
- Or use Azure OpenAI with a consistent prompt structure to tag all rows

> **Note:** ChatGPT and other conversational LLMs are not designed for reliable comment-by-comment tagging at production scale. To accurately and consistently tag large volumes of comments, further external analysis is required using programmatic methods (e.g., local classifiers, batch OpenAI API calls, or dedicated NLP pipelines). 

> Similarly, powering dashboards or interactive tools with tagged comment data requires external tooling, such as Python-based scripts, notebooks, or data visualization frameworks Power BI and DOMO.

## Appendix A: Sample Prompts for GPT Tagging

### Tagging Prompt
```text
You are analyzing user feedback from the VA.gov website. Based on the content of the following comment, assign the most appropriate UX-related tag from this list:

[List all tags]

Only return the most appropriate tag, nothing else.

Comment: "[comment text]"
Tag:
```

### Tone Classification Prompt
```text
Please classify the emotional tone of the following comment as Positive, Neutral, or Frustrated.

Comment: "[comment text]"
Tone:
```

---

