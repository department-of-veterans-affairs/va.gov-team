# Ask VA: Initiative Brief for VADS Inbox Sort/Filter Patterns
This document provides an overview of the Ask VA initiative to implement the **VADS Inbox Sort/Filter Patterns**. 

To view **Ask VA's Product Outline** go here, [in this GitHub doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/product/Product%20outline.md).

| Initiative Start Date | Initiative Launch Date | CC Kick-off Submission Date |
|----------|----------|----------|
| 2025 | TBD | TBD/Feb 2026 |

**Jump to:**
- [Overview](#overview)
- [Problem statement](#problem-statement)
- [Outcomes](#Outcomes)
- [Measuring success](#measuring-success)
- [Release plan](#release-plan)
- [Team and VA partners](#team-and-va-partners)

## Overview
Ask VA users submit questions at, https://www.va.gov/contact-us/ask-va/introduction.  An authenticated (logged in) user can view a personalized inbox of their submitted questions, progress statuses, and received replies.  

In 2025 the Ask VA team executed an Inbox Usability Study, https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/ask-va/design/User%20research/2025-10%20Form%20and%20Inbox%20Usability%20Study. 
Key findings support implementing enhancements to the current inbox experience.

- Current Inbox Experience (as of 1/27/2026)

<img width="1010" height="1248" alt="image" src="https://github.com/user-attachments/assets/606652ea-92f7-4b7c-8fef-863e4ac129eb" />




During design activities, VA Design System (VADS) guidance was identified for Ask VA to adopt the new standard https://design.va.gov/components/search-filter.

## Problem statement
**Background**

Ask VA users want to easily and quickly view their submitted questions using; search, filter and sort tooling. The current inbox experience displays submitted questions (also referred to as "inquiries") in a grid format, with a card representing each inquiry.  The cards do not display in a user friendly way, often leaving users confused of the order their information is displayed.  Users want the ability to filter their inquiries by category type, status and sort by newest to oldest or oldest to newest.

**Solution**

Update the Ask VA inbox by implementing the VADS guidance and new standard, https://design.va.gov/components/search-filter.

## Outcomes - HERE AND BELOW STEPHANIE IS REVISING
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
