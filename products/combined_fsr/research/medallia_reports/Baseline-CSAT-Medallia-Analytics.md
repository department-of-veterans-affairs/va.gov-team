## CSAT Baseline Calculations for Financial Management VA Pages (Manage-VA-Debt)

## Introduction

Defining a meaningful baseline for a Customer Satisfaction (CSAT) score requires analyzing historical trends and identifying a stable reference point that accounts for natural fluctuations. 

### It is also important to define what CSAT tells us:

**CSAT Score (as a percentage)**

*The proportion of users who are happy (usually those who rated 4 or 5 on a 5-point scale).*

It is also important to track average scores (mean)

**Average Score (mean)**

*The overall intensity or central tendency of satisfaction across all users, including the nuance of how satisfied or dissatisfied they were.*



## Methodology for CSAT calculations

1. Analyze Historical Data

- Calculated the average CSAT for each year and the overall baseline weighted average.

Next steps: 

- Asses trends—is CSAT improving, declining, or stable?
- Check for seasonality—are there recurring dips or peaks in satisfaction?

2. Determine a Meaningful Baseline
 
**The baseline CSAT scores have been defined based on yearly CSAT scores for years 2023, 2024, and 2025 to date (March 2025).**
 
***The formula is:***
 
> Baseline CSAT= [(CSAT2023​×N2023​)+(CSAT2024​×N2024​)+(CSAT2025​×N2025​)​] / N2023​+N2024​+N2025​
 
***Where:***
 
-   CSATyear​  = Customer Satisfaction Score for that year (in percentage)
    
-   NyearNyear​  = Sample size (number of responses) for that year
 
### Baseline CSAT Scores (weighted averages, calculations based on Y2023, Y2024, YTD-3/2025) for Financial Management Pages only with a comparison across all VA.gov pages
 
|  Baseline CSAT Score (calculations based on Y2023, Y2024, YTD-3/2025) | Financial Management Pages Only (MANAGE-VA-DEBT) | All of VA.gov |
|--|--|--|
|CSAT weighted average: VA.gov Experience Rating  | **49.01%** | 54.94% |
|CSAT weighted average: Overall User Satisfaction With the Site  | **13.61%** | 26.71% |
|CSAT weighted average: Users Understanding of the VA.gov Website  | **49.64%** | 58.89% |
|CSAT weighted average: Users Trust in the VA's Commitment to Veterans  | **64.01%** | 57.76% |
|CSAT weighted average: Users Trust in the VA in General  | **33.33%** | 34.18% |
 
 
*Please note, the center column are the CSAT baseline scores for Financial Management Pages and should be referenced when capturing monthly and quarterly CSAT scores as a comparison to note progress. The right side column are the CSAT baseline scores for ***all of VA.gov*** to compare to. 
 
> 
 
### Baseline CSAT Scores (weighted averages, calculations based on Y2023, Y2024, YTD-3/2025) for Financial Management Pages only with Quarterly CSAT Scores 
 
| Medallia Survey Question  | Financial Management Pages (MANAGE-VA-DEBT) Baseline CSAT Weighted Average | Fiscal Q2 JAN/FEB/MAR 2025 | Fiscal Q1 OCT/NOV/DEC 2024 | 
|--|--|--|--|
| VA.gov Experience Rating  | **49.01%** | **54.17%**, N = 168 | **59.49%**, N = 99 | 
| Overall User Satisfaction With the Site  | **13.61%** | **20.1%**, N = 194 | **9.52%**, N = 147 |
| Users Understanding of the VA.gov Website  | **49.64%** | **57.05%**, N = 149 | **51.72%**, N = 87 |
| Users Trust in the VA's Commitment to Veterans  | **64.01%** | **71.26%**, N = 334| **59.82%**, N = 112 |
| Users Trust in the VA in General  | **33.33%** | **47.66%**, N = 342 | **39.47%**, N = 114 | 

## Recommendations 

I recommend defining a baseline score and tracking **Custom Debt Portal Questionnaire** satisfaction measures for questions that use Likert scale (1-5 range): 

**I was able to easily complete this form online** and
**I would recommend completing this form online instead of paper to another Veteran**

- For perceived ease of use (I was able to easily complete this form online) we will calculate an average. 
- For the question asking Veterans to compare filling out the form online vs on paper we will calculate a CSAT score. 

These scores are not yet available on the Domo Dashboard and a manual review of excel data sets is necessary to define a baseline score for these (2) questions at this time. 

*** 

How you can replicate this report in [Domo CSAT Dashboard](https://va-gov.domo.com/page/1545882322?userId=402957409) to capture yearly CSAT scores:

- Apply Directory filter [manage-va-debt]
- Filter URL Path (make sure all URLs are selected)
- Apply 1 year date filter (example: 1/1/2023 - 12/31/2023)
- Select all Forms (A11, VFS, Debt Questionnaire)

*Resources used: Domo Dashboard, ChatGPT for guidance on calculations, and hand calculations* 

