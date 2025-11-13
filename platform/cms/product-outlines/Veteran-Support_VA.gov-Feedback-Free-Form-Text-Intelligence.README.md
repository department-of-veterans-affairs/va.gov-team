# Product Outline 

Title: VA.gov Feedback Free-Form Text Intelligence  
Owner: Elijah Walker (AI/ML Manager)  
Status: Draft  
Last Updated: 11-12-2025
Related Epic: Leverage VA.gov User Feedback Free-Form Text for Actionable Insights  

---
## Overview
VA.gov collects free-form text feedback from Veterans and users via the “Feedback” button across confirmation pages and site components. While this input provides a direct channel for understanding user experience, the data is currently underutilized.
This product aims to convert unstructured feedback into structured, actionable insights through Natural Language Processing (NLP) and Machine Learning (ML). The output will inform product improvements, sentiment tracking, and leadership reporting aligned with Veteran Support’s data standardization initiatives.*

## Problem Statement
The VA receives thousands of qualitative feedback submissions each month through VA.gov. These entries contain valuable information about user frustrations, requests, and positive experiences.
However:
There is no systematic classification of this text data.
Manual review is inconsistent and unsustainable.
Insights are not integrated into Domo, Medallia, or other analytics dashboards.
As a result, teams lack visibility into emerging trends, usability issues, and satisfaction drivers at scale.

## 🎯 Goals
List the primary objectives of this product.

- [ ] Convert feedback text into structured data
- [ ] Identify sentiment, emotion, intent, themes
- [ ] Integrate results into Domo dashboards
- [ ] Surface recurring issues proactively
- [ ] Reduce manual review burden

                                                                                       
## Desired User Outcomes
- *Transform qualitative feedback into structured data fields (e.g., category, sentiment, emotion, intent).
- Quantify Veteran sentiment trends over time with confidence intervals.
- Identify top pain points and topics driving feedback.
- Integrate outputs into existing dashboards (Domo, Medallia, GA) for cross-channel analysis.
- Enable Veteran Support, VEO, and OCTO to make data-driven decisions based on user voice.*

## Undesired User Outcomes
- Fragmented analysis pipelines with inconsistent categorization.
- Low model accuracy due to limited training data or unclear labels.
- Privacy or compliance issues when handling sensitive user input.
- Manual dependence on analytics teams for ad-hoc feedback reports.

## Desired Business Outcomes

- *Establish a repeatable AI-driven feedback analysis process within the VA.
- Reduce manual review time by 75%.
- Improve identification of systemic issues and correlate feedback with page performance metrics.
- Strengthen evidence for prioritization of VA.gov improvements and Veteran-centric initiatives.Why would your business want this to exist?*
- *With this problem solved, what should your business be able to do/achieve that they couldn't before?*

## Undesired Business Outcomes
- Feedback data remains siloed or unanalyzed.
- Insights are generated but not operationalized or shared across platforms.
- No measurable improvement in user experience or issue resolution speed.

---
## Measuring Success

| KPI                                             | Target | Description  |
| ----------------------------------------------- | ------ | ------------ |
| Percentage of feedback automatically classified | 100%   | ☐      |
| Model accuracy                                  | ≥85%   | ☐      |
| Manual review reduction                         | ≥75%   | ☐      |
| Trend detection increase                        | +25%   | ☐      |
| Dashboard published                             | 1+     | ☐      |


### Key Performance Indicators (KPIs)

| Metric                           | Target | Description                                         |
| -------------------------------- | ------ | --------------------------------------------------- |
| Feedback items processed monthly | 100%   | All new Feedback entries analyzed automatically     |
| Sentiment accuracy               | ≥85%   | Model confidence validated through sampling         |
| Time to generate insights        | ↓75%   | Compared to manual review                           |
| New issues identified            | +25%   | % increase in insights shared with Product/CX teams |
| Dashboards published             | ≥1     | Integrated view in Domo or Power BI                 |

---

## Assumptions
- The Feedback data is accessible and stored in a structured system (e.g., database, API, or CSV export).
- Data fields will not include PII beyond free-form text.
- VA data governance allows use of NLP models under existing FedRAMP boundaries.
- Model training and testing can occur within approved environments or sandbox instances.

## Solution Approach

**Discovery & Inventory**
- Identify all Feedback sources, formats, and access points (Medallia, VA.gov backend, etc.).
- Audit historical data and assess quality, duplicates, and null entries.

**Data Preparation & Feature Definition**
- Clean and normalize text (remove stopwords, duplicates, symbols).
- Define target NLP features such as:
- Sentiment (positive/negative/neutral)
- Emotion (anger, frustration, gratitude, confusion, etc.)
- Intent (complaint, suggestion, inquiry, praise)
- Entities (products, pages, services)
- Confidence intervals

**Model Experimentation**
- Compare existing ML tools (AWS Comprehend, spaCy, OpenAI embeddings).
- Develop a proof of concept (PoC) to evaluate classification accuracy.

**Integration & Visualization**
- Transform results into structured schema for import into Domo or Power BI.
- Visualize trends, clusters, and correlation with GA metrics.

**Compliance & Documentation**
- Validate data security, anonymization, and VA data use policies.
- Document pipeline, assumptions, and results in GitHub.

### Supporting research

- VA.gov Feedback Form implementation and endpoint documentation
- Medallia VSignals data model (qualitative comment field alignment)
- Prior NLP efforts across VA or GSA feedback systems
- Public NLP benchmarking datasets for fine-tuning sentiment models

--- 
#### Communications

<details>

- Team Name: Veteran Support
- GitHub Label: https://github.com/orgs/department-of-veterans-affairs/projects/1403
- Slack channel: #vsp-contact-center-support - https://dsva.slack.com/archives/CNCEXNXK4
- Product POCs: Chante Lantos-Swett, Anita Middleton, Elijah Walker 

#### Team Members
- Chante Lantos-Swett
- Anita Middleton
- Elijah Walker
- Camille Green
  
 - DEPO Lead: Chante Lantos-Swett
 - PM: Anita Middleton
 - Engineering: Elijah Walker
 - Research/Design: Camille Green
 
#### Stakeholders
**Primary Users**
- Veteran Support Product Team (OCTO)
- AI/ML Manager & Engineering
- Analytics & Domo Dashboard Team

**Secondary Users**
- Cross-functional VA.gov product teams
- OCTO leadership
- Medallia/VSignals teams
                         
