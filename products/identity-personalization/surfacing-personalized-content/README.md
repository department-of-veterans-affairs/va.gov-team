# Surfacing personalized content on VA.gov
Last update: 5/25/2023

## Overview
We [completed research in April 2023]([va.gov-team/products/information-architecture/research-and-analytics/2023-generative-logged-in-research at master · department-of-veterans-affairs/va.gov-team · GitHub](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/information-architecture/research-and-analytics/2023-generative-logged-in-research#research-outline-identifying-issues-and-challenges-people-have-finding-tasks-when-they-are-signed-in-to-vagov)) and identified an opportunity to improve how we are surfacing personalized content and educating Veteran’s about My VA along key points on their path to their tasks ([findings summary](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/information-architecture/research-and-analytics/2023-generative-logged-in-research/comprehensive-research-summary.md#problems-weve-identified-with-the-logged-in-experience)). 

We’d like to experiment with two approaches to increase personalization on the site:
- surfacing personalized content from My VA on tool landing pages, and possibly other content pages that makes sense
- promoting My VA at the end of key flows, like applying for benefits

## Problem Statement
As a Veteran, I want to see personalized information when I am logged-in to VA.gov so I can easily know the status of my benefits and services.

## User outcomes
### Desired User Outcomes
Veterans have increased access to personalized content, whether that is through My VA or in the benefit hubs
### Undesired User Outcomes
* Veterans are confused about where to find their personalized information
* Veterans experience slower page load times on important tools

## Business outcomes
### Desired Business Outcomes
* Decreased time on site for logged-in users

### Undesired Business Outcomes
* 
## Measuring success
TBD

## Solution approach
### Requirements
- We’ll focus this work on pages that are **not** related to health care, or benefit hub pages, since those have technical complexities that would greatly increase the LOE for this work

### In scope
- Updating non-health tool landing pages
- Updating submission confirmation pages

### Out of scope
- Changes to the site header, including navigation or the mega menu
- Changes to health or benefit hub pages
- Changes to Drupal templates

### Key dates
TBD

## Backend
TBD

## Frontend
- For instances where we’re surfacing personalized content similar to how we do on My VA, the Auth Exp team will provide React widgets to the content team (Randi Hecht), to be placed within the Drupal pages
- To add content at the end of a form flow, we’ll have to work with the specific team that manages that flow

## Design
TBD
