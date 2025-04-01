# Ask VA: Prefill topic questions with NLP data model	
This doc gives an overview of the **Prefill topic questions with NLP data model** Ask VA initiative. View Ask VA's product outline [in this GitHub doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/product/Product%20outline.md).

- Start date: July 2024
- Launch date: June 30, 2025

**Jump to:**
- [Overview](#overview)
- [Problem statement](#problem-statement)
- [Outcomes](#Outcomes)
- [Measuring success](#measuring-success)
- [Release plan](#release-plan)
- [Team and VA partners](#team-and-va-partners)

## Overview
Submitters have to answer many questions in the Ask VA form than the typical contact form. There's opportunity to use an AI/NLP data model to accurate predict queue given question text and other variables that determine queue routing.

As a first step to test, if the model is successful, we could present predicted Category, Topic, and Subtopic answers to the submitter. The submitter can then simply review the prefilled information rather than answer these questions. Answers to these questions currently determine routing of the inquiry.

Originally, we thought this could also improve resolution time. After conducting an [analysis on queue and resolution time](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/product/prefill-nlp%20June%202025/Queue%20analysis.md), we determined that an AI model that returns an Ask VA queue given question text would likely only minimally impacts resolution time.

## Problem statement
**Background**: Only 1/3 of Veterans, family members, and other people with questions for VA who visit the current Ask VA landing page (ask.va.gov) end up completing the support request. Ask VA's CSAT score is at 23%, compared to VA.gov's 29% CSAT score. User research has identified form burden as a barrier for Veterans to receiving answers to their inquiries. To expediently get Veterans the healthcare & benefits answers they deserve, VA is simplifying the process. 

**Solution**: We'll reduce unnecessary Veteran inputs by auto-classifying the categories, topics, and subtopics needed to route Veteran inquiries to the right place. This is expected to improve satisfaction and reduce friction in the direct healthcare and benefits process.

## Outcomes
- **User experience outcomes**: Ensure users have an easy and accessible interaction with Ask VA.
- **Functional outcomes**: Ensure the system operates correctly and efficiently with Ask VA.
- **Business outcomes**: Ensures increased efficiency for VA customer support. 

### User experience outcomes
|Outcome|Description|
|:---|:---|
|Quick to complete|Users complete the form quicker because they don't have to review long lists of topics.|
|Clear instructions and information|Users understand how the information was prefilled and what to do next.|

### Functional outcomes
|Outcome|Description|
|:---|:---|
|Form submission (CRM integration)|All form submissions are correctly routed and include the user's selected topic from the data model.|
|Successful integrations with data model|Ask VA receives a predicted topic(s) from the data model without a long load time.|

### Business outcomes
|Outcome|Description|
|:---|:---|
|Improved customer support efficiency|Current topic lists remain the same for agents, while users can get a better experience through reviewing predicted topic(s).|
|Improved user satisfaction|Users are more satisfied with Ask VA.|
|Improved trust in VA|Users trust VA and VA services more.|

## Measuring success
Objectives and Key results (OKRs) help us measure success of specific targeted objectives for a specific initiative or time period. 

This initiative aligns with the following 2025 OCTO OKRs: 
- Objective 1: VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.
   - Key result 1 (Satisfaction): Improve satisfaction with our web and mobile products by 5 points.

It also includes these OKRs: 
- Objective: Users complete the form more easily
   - Key result (Form completion rate): Increase the percentage of successfully sent questions by 5 points
   - Key result (Time to submit form): Decrease time it takes to submit the form by X
- Objective: Data model predicts topic accurately
   - Key result: Develop data model that predicts topics accurately at 80%
- Objective: Frontend communicates with data model
   - Key result: Low latency on the form page(s) that loads the data model's topic response
	
|Key result|Baseline (ask.va.gov)|After X months|
|:---|:---|:---|
|Satisfaction|January 2025: 23%|x|
|Form completion rate|[May to October (6 months)](https://dvagov.sharepoint.com/:x:/s/AskVA/EZEzfaI8u3lJvPx3il1VOFIBEHvGZXQmDr7aZrCwQMeZyg?e=absywx): 35%|x|
|Time to submit form|x|x|

## Release plan
[input release plan]

## Team and partners
### Our team
|Role|Assigned|Contact|
|:---|:---|:---|
|Product owner (OCTO), Designer|Becky Phung||
|Product manager|Ariel Martinez|ariel.martinez@thoughtworks.com|
|Lead engineer|Joseph Hall|joe.hall@thoughtworks.com|
|Frontend engineer|Hemesh Patel|hemesh.patel@docme360.com|
|Data engineer (part-time)|Jacob Cheriathundam|jacob@docme360.com|
|UX designer|Thomas Michaud|thomas.michaud@oddball.io|
|UX researcher & designer|Tyler Gindraux|tyler@bluetiger.digital|

### VA partners
|Role|Assigned|Contact|
|:---|:---|:---|
|Product owner (VES)|Jaime Rocha||
|AI lead (OCTO)|Alexander Kharbush|x|
|Data/AI Digital Corps Fellow|Lylybell Teran||
