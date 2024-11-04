# Monitoring Toxic Exposure Release

**Office of the CTO - Digital Experience (OCTO-DE), 526EZ, DBEX 1**

**Dates:** August-October 2024

**Product/UX:** Jared Pace [Jared.pace@agile6.com] & Evelyn Hilbrich Davis [evelyn@cityfriends.tech] 

**Jump to:**
- [Background](#background)
- [Reporting Schedule](#reporting-schedule)
- [526ez Success Metrics](#526ez-success-metrics)
    - [Validating our metrics](#success-metric-validation)
- [Top UX Takeaways](#Top-Takeaways)
    - [ Medallia Survey Data Trends](#Medallia-Data)
    - [Contact Center Data Trends](#Contact-Center-MyVA-4110-Data)
- [Appendix](#appendix)
  
## Background
We are monitoring the 1.0 and 1.1 release of the new Toxic Exposure feature for the 526ez, starting at 5% in late August 2024. By tracking interactions and gathering feedback, we will identify any issues with TE early so we can make data-driven improvements. 

This reporting will seek to keep all stakeholders informed of the rollout's progress. Beyond this documentation, DBEX Team 1 will monitor the TE release daily to identify bugs/challenges and make informed decisions about pacing the rollout. Any resulting concerns will be immediately escalated to OCTO/VBA via slack. 
<details>
  <summary>Click to expand Background </summary>
    
- This report will document GA4, Data Dog, Contact Center, and Medallia survey data over the course of the release.
- Relevant tickets: [(#90466)](https://app.zenhub.com/workspaces/disability-benefits-experience-team-1-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/90466) and [(#88714)](https://app.zenhub.com/workspaces/disability-benefits-experience-team-1-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/88714)

## Guiding Questions for UX Monitoring
1. What portion of Veterans are choosing to answer the TE questions? [opt-in %]
2. When are Veterans abandoning the TE flow? Are we seeing more drop-offs than baseline at later points in the form?
3. What challenges (usability issues, bugs, general pain points) are Veterans encountering with the feature? 
4. How satisfied are Veterans with the overall performance of the feature?[Intercept and Feedback customer satisfaction]
5. What impact does the new feature have on Veteran trust in VA?

## Goals & Impact
1. Monitoring the release will help us determine if and when we need to pause the incremental release of TE. We will be looking for major technical blockers or patterns of very negative open response feedback in the data to inform our decision-making.
2. Reviewing Medallia data will help us focus our upcoming usability research on the new feature. We will leverage early findings in monitoring to shape the research plan and hypotheses.

**Note:** We will be responsive to the release, updating our monitoring approach as we learn more/better!
 </details>   

## Reporting Schedule
Success metrics from GA4 will be updated in this document at the end of each increment of the rollout, starting with 5%. 

Medallia and MyVA411 data will reviewed throughout the rollout at 1.0 25%, 1.0 100%, and 1.1 75%. 

For dates of the rollout, please see the [release plan calendar](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1721757550661/f347c9e1144d8093a8b75d4da6dae2b9c0bd42ad?sender=u9f3830b1ee3516bdcf2e2000).


## Top Takeaways
<details>
  <summary>Click to expand UX Insights for 5-25% rollout of 1.0 </summary>    
    
_These takeaways for the 1.0 rollout 5-25% (or 8/28-9/20) will gather weave together insight across Contact Center (MyVA 411), Medallia, and GA4 to highlight trends in user experience of the new Toxic Exposure feature._    
### #1: Early success metrics indicate that half of Veterans are entering the Toxic Exposure flow--and that very few abandon.
- TE Opt-in rate for 25% was 48%, a 10% increase over 5% canary. Furthermore, TE page abandonment was low, averaging just 1.3%
- We are also seeing that overall form abandonment (44.2%) is lower than the baseline (46.7%) and remains steady at +/- 2%.
   
### #2: Although it is too early to evaluate the success of Toxic Exposure from our 25% qualitative data, we expect more specific insight as the rollout continues.
- At this stage in the rollout, seeing any volume of user feedback on less-than-blocking pain points would be like finding a needle in a haystack.
- Lighthouse indicates that 63,078 Veterans filed using the 526ez between 8/28-9/24. 5,900 of them saw the 2022 version of the PDF and 2,382 opted in to the Toxic Exposure flow. 
- As we get more data from more veterans who have access to the toxic exposure flow, we anticipate being able to make more definitive claims about the Toxic Exposure user experience.
- However, the Contact Center, Medallia, and GA4 data reviewed up until the 25% rollout confirms hypotheses and findings identified in the pre-launch Medalia data. Findings below echo those surfaced in the [pre-launch data analysis of Medallia.]([url](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2024-08-Toxic-Exposure/Toxic%20Exposure%20Pre-Launch%20Review%20of%20Medallia%20Data.md)) 

### #3. Veterans call the Contact Center with a high volume of questions about the PACT Act.
- The [volume of the Contact Center data--over 1700 entries--](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2024-08-Toxic-Exposure/TE-Monitoring.md#contact-center-myva-411-data) gave us stronger sense of some of the trends we were already seeing in the much smaller Medallia data set.
- We are embarking on discovery to learn how to best quickly and efficiently process Contact Center data in the future-- there is no thematic coding available for this data set. [Review here on Sharepoint.](https://dvagov-my.sharepoint.com/:x:/g/personal/evelyn_davis3_va_gov/Eati06vqxD9MhBnbZgQ3g_gB38EQDDopf0zLkYXlEUOuNA?e=cQQTqc)
> "Veteran calling in about a text he received about Vietnam Veterans being eligible for Compensation and wants to know more about it." **- Contact Center Employee**

### #4. There is a strong demand for clear guidance on where to file for the PACT Act.
Once Veterans understand the Pact Act and think they might be eligible, they are looking for outlets to apply for compensation-- including online.
 > "Simply trying to claim additional compensation for presumptive exposure to airborne pathogens during Desert Storm, but cannot find specific it or information to do so." **-Medallia Veteran Feedback**
> 
 > "Veteran received a message from the VA concerning the  Pact Act and would like to apply for disability compensation. Veteran believes he has a va.gov account, but does not remember password. Agent offered to help Veteran create an account, which Veteran declined at this time." **-Contact Center Employee**
> 
 > "Caller is the spouse of the Veteran and wants to apply for the PACT Act for Agent Orange." **-Contact Center Employee**
     
### #5: One Veteran filing for Toxic Exposure could not find the In Progress Form they had started previously.
We still see the in progress form as a potential hotspot for problems with veterans who fill in all of the data for toxic exposure, but then find that they don't know how to recover their work. 
> "I'm trying to finish my PACT ACT application. The system is not bringing me back to where I was in the process and it appears to be starting a new claim." -**Medallia Feedback from Veteran on RNG page**
>
</details>

## UX Insights for 1.0 100% 

### #1. Even at 100%, we are receiving minimal direct feedback about the toxic exposure questions from the Medallia surveys. 
- In the first week at 100% (10/21-27), only 4 out of 90 responses originated from Toxic Exposure urls (Herbicide and Additional Exposure pages). 
- Veterans left low to neutral satisfaction ratings on the pages, but we do not have open test responses to explain the numbers. We are meeting with the Contact Center next week to ensure that we are not missing data from the time period.

### #2. The MyVA411 data from the same period did not report any problems with the toxic exposure questions.
- In the first week at 100% (10/21-27), **none** of 325 MyVA411 calls logged with a "Disability Claim Application" case type focused on issues with the new feature. 10 calls were tagged as the PACT Act, but all were general requests for where to file and how to upload documents.

### #3. We suspect that this silence in the Medallia and MyVA411 data demonstrates that Veterans are not experiencing major blockers in the toxic exposure flow. 
- Veterans typically leave Medallia feedback or call MyVA411 when they are dealing with large blockers that prevent them from completing the form (examples include document uploads or BIRLS ID error).
- We also know from GA4 that very few Veterans are leaving toxic exposure mid-flow after opting in, further supporting our hypothesis that Veterans are not getting stuck and requiring help mid flow. 

### #4.  We expect to learn more about the user experience and non-blocking issues with the flow in upcoming usability testing. 
- Based on toxic exposure usability testing in 2023, we presume that Veterans are facing non-blocking challenges to the feature.  We have started to plan for our upcoming Veteran research to evaluate the new feature, which we will run in early December.


## 526ez Success Metrics
| Product KPI | Baseline  | Target | 5% | 10%| 25%| 50%|75% |100%| Data Source |
|--|--|--|--|--|--|--|--|--|--|
| TE Abandonment rates| - | - | 0% | 1.8% |1.7% |2.7% |n/a |2.58%|TE Opt-in rate|
| TE Opt-in rate* | - | - | 38% | 48% |46.1% | 44.8% | n/a |45.19% |TE Opt-in rate|
| % of submissions that use normal path| 99.04% | ≤99.04%  | 94.34% | 88.9% | 97.7% |99.57%|n/a|98.7%| database queries |
| % of uses of backup path | 0.94% | ≤0.94% | 5.66% | 11.07% | 2.03% |0.42% |n/a|1.16%| database queries |
| % of complete failure | 0.0001% | ≤0.0001% | 0% | 0% | .27% |0% |n/a |.001%| database queries |

*For Veterans who saw the 2022 form version.

### Toxic Exposure Abandonment By Section
 
| Step # | TE Page| 5% | 10%| 25%| 50%|75% |100%| Data Source |
|--|--|--|--|--|--|--|--|--|
|Step 1| Gulf War 1990 | 0%| 3.6%  | 3.3%| 3.3% |n/a|3.08%|GA TE Abandonment By Section|
|Step 2| Gulf War 2001 |0% | 0.29% | 0.2% | 0.34% |n/a |0.17%|GA TE Abandonment By Section|
|Step 3| Herbicide | 0% | 1.4% | 0.6%| 0.68% |n/a |0.81%|GA TE Abandonment By Section|
|Step 4| Additional Exposures | 0%| 0.73% | 0.4%| 0.8% |n/a |0.82%|GA TE Abandonment By Section|
|Step 5| Additional Disabilities | 0%| 0.63% |0.4%| 0.12% |n/a |0.26%|GA TE Abandonment By Section|

### Overall Form Abandonment
**Alternative approaches we're considering:** Removing all steps that are not seen by all Veterans (such as claim type) or exploring other non-funnel models for understanding the data. 

| Step # | 526 Page | Baseline | 5% | 10% | 25% | 50% | 75% | 100% |Data Source |
|--|--|--|--|--|--|--|--|--|--|
|Step 1| Introduction | 41.83% | 46.73% | 44.24% | 41.6%| 44.01% | n/a | 44.27% |GA 526 Overall Form Abandonment|
|Step 7| Confirmation | - | - |  | | |  | |GA 526 Overall Form Abandonment|


### Success Metric Validation
<details>
  <summary>We are regularly evaluating our top success metrics to make sure we can trust them. Click to expand findings below. </summary>

### TE Abdanonment and Overall 526 Abandonment 
||**Toxic Exposure Abandonment** |**Overall 526 Abandonment**|
|--------------|--------------|---|
|**Definition**|_Percentage of people drop-off in the TE flow and don't continue to the next page (measured by change in page views)._|_Percentage of people drop-off at each page in the 526 and don't continue to the next page (measured by change in page views)_
|**Takeaways from 5%**|- "Close to zero abandonment was observed in raw database data as well as GA4. We are wary of absolutely no abandonment and will continue to track this metric as the release continues.| - "The data at 5% did not align with expected behavior for abandonment. We are revisiting the approach to see if we can get better data.| 
|**Takeaways from 10%**|- We view it as a positive sign that abandonment rate with the TE flow is low, 1.33% on average.| 0 Overall abandonment rate at 10% increment is lower than the baseline, and remains steady +/-2%.
|**Takeaways from 25%**|_To be added_|_To be added_|
|**Limitations**|None noted.|- We know from past discovery that measuring drop off throughout the 526 is difficult to manage with the 10 step limit to GA4. <br> Because so many pages are conditional, it is also hard to find pages at regular intervals that all Veterans see. 
|**Any next steps**|Closely monitor as the release continues| -Christine and Jared decided to use a more blunt means of measing overall abandonment <br> -Selecting just the Introduction and Confirmation page since conditional logic issues are cirvumvented when using these two pages.

### TE opt in and Top 10 TE page views
||**Toxic Exposure opt in** |**Top 10 Toxic Exposure page views**|
|--------------|--------------|---|
|**Definition**|_What portion of Veterans are choosing to answer the TE questions?_|_Report that shows the 10 top TE page views._ | 
|**Takeaways from 5%**|- We see 39% opt-in for the submission record (Aurora looked at raw database data) and GA4. <br> -We see this match up as evidence that we can use GA4 to measure ""opt-in"" throughout the release. <br> - 117 TE clams in EVSS around Aug 28th. Having more data improves overall accuracy.|- Christine generated this during our discovery to validate the 5% numbers. It is a straightforward count of page views.|
|**Takeaways from 10%**|-TE opt-in, currently at 48% is 10% greater than at the 5% increment.| -75% of Veterans viewing Toxic Exposure pages use a desktop browser, 24.6% use a mobile device. <br> -Page views of gulf war 1990, 2001, herbicide, and additional exposures are the most viewed and views across these pages are consistent, with only a 12.42% difference in page views between these pages.<br> -Other and MOS additional exposures were the least viewed of all Toxic Exposure pages, representing just 5% of total views.|
|**Takeaways from 25%**|_To be added_|_To be added_|
|**Limitations**|- # of submissions isn't going to equal number of GA4 active users since GA4 does not track the same user across multiple sessions or devices. <br> -Submissions will be lower than page views. Some users may take more than one session to go back and forth in the form.|None noted. |
|**Any next steps**|-Measure how many Veterans completed the TE questions at end of 1.0 and 1.1. -This will tell us what percentage of Veterans submitted vs. viewed TE questions, which could help inform research design. <br> -This is a nice-to-have addition. |We wonder if we could use this report down the road to calculate a rough average number of pages that a Veteran sees in the TE flow. |
</details>


## Medallia Data 
Before launch, we reviewed Medallia survey data **from July 1-August 9** to help set a baseline for the 526ez user experience. This 6 week period of data will appear in charts as "Pre-launch." [See full report here.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2024-08-Toxic-Exposure/Toxic%20Exposure%20Pre-Launch%20Review%20of%20Medallia%20Data.md))

All Medalia survey data is reported as a % of 4+5 answers.

### Success Metrics
|**Data point**|**Baseline (1/1-6/30/24)**|**Pre-Launch**| **1.0 25% (8/28-9/20)** |**1.0 100% (10/21-27)** | **1.1 75%**|
|--|--|--|--|--|--|
|**Total Intercept Responses**| **282** |**86** |**22**|**17**|
|CSAT-Intercept| 36.2%|41.9% | 68% |33%|
|Trust Overall|41% |52% |61%|29%|
|**Total Feedback Responses**|**2,289**|**455**|**225**|**73**|
|Feedback satisfaction|21.6%| 34.2%| 26% |35%|
|Task completion| 23% | 44.5% |36%| 42%|


### Thematic Tags 
I coded all qualitative user feedback--see Appendix for full list of codes/themes and definitions. 

|Rank|Pre-launch (6 weeks)|**1.0 - 25% (8/28-9/20)** |**1.0 - 100%** [no tagging] | **1.1 - 75%**|
|--|--|--|--|--|
|Total responses| 462| 207|
|1|Usability (n=33)|Submission Issues (9)|N/A|||
|2|Navigation (n=33)|Evidence Upload (7) |N/A|
|3|PACT (n=26)|  PACT (7)|N/A|
|4|Error (n=26)|In Progress Form Issues (6)|N/A||
|5|Getting help (n=23)|BIRLS error (4)|N/A|


## Contact Center MyVA 411 Data
Data from the MyVA411 information line (800-698-2411) is logged in Salesforce by call center agents, then requested by researchers to review. 
<details>
  <summary> Click to see tables highlighting trends below. </summary>

**Note:** Because we changed our approach to requesting MyVA411 data for 100%, this table does not provide useful insight into trends over time during the rollout. 
|Case type| Case Category| **1.0 - 25% (8/28-9/20)** |**1.0 - 100% (10/21-27)**|**1.1 - 75%**|
|--|--|--|--|--|
|**PACT Act**|Directory Assistance| 1358| Not requested |
|**PACT Act**| General Information | 365| Not requested |
|**Disability Claim Application**| Application submission issue| 10 | 121 |
| **PACT Act (Concern)**| Concern VBA | 7 | Not requested |
|**Disability Claim Application**| Navigation Issues | 4 | 42 |
|**Disability Claim Application**| Upload/Download documents | 3| 109 |
|**Disability Claim Application**| Intent to File Issue| 3 | 17 |

</details>

## Appendix     

### Codebook
<details>
  <summary>Click to expand</summary>
|Code|Definition|
|--|--|
|Usability|Responses that describe specific usability issues not encompassed by other tags. Examples include character limits, inability to update prefill, not being able to continue, etc.|
|PACT| Responses that reference Toxic Exposure or the PACT Act|
|Error| Responses that describe an error message they came across in the form |
|Navigation| Responses that describe moving from one part of the application to another and wayfinding |
|Getting help| Responses that describe seeking help from the hotline, VSOs, professionals, or other sources|
|Evidence/evidence upload|Responses that describe evidence or medical records, uploading or downloading|
|Pain point| Responses that express distress or frustration, but don’t fall into another tag |
|Submission|Responses that describe submitting their form and/or the confirmation page|
|Intent to File| Responses that reference Intent to File or upcoming ITF deadlines|
| Bright spot| Positive feedback or something that’s working well|
|General|Responses that included non-specific qualitative information, such as "filing"|
</details>
