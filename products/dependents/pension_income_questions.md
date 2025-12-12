# Pension Income Questions in the 686/674 Form Flow

- [Milestone](https://github.com/department-of-veterans-affairs/va.gov-team/milestone/1524) for this project.
- [Design files](https://www.figma.com/design/7W55oNwdVXvXOTI9SaFzQ7/686c-Add-or-Remove-Dependents?node-id=5390-102987&t=YbZTPEYFhEHZIpFt-1) for this project.
- [Question logic](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1690311086208/96d5f59b299912bc8c69542e6943d5b2213b9c72?wid=3-1750949761424)

The pension line of business requested that VA.gov add two income-related questions to the 21-686c interview-style form flow on VA.gov that are not on the pdf, so dependent additions impacting pension benefits could be more efficiently processed. The y/n answers from those questions are sent by VA.gov to RBPS. RBPS then determines if the claim can be auto-processed or if it needs to be off-ramped for manual review. If the new dependent has any impact on the Veteran's net worth, the claim is off-ramped by RBPS for manual review. If the dependent addition does not have an impact on the Veteran's net worth, the claim is auto-processed by RBPS.

Prior to the implementation of these questions on VA.gov, all 686c claims from VA.gov that impacted pension benefits were off-ramped by RBPS for manual processing, so the VA could to review the Veteran's new net worth. Dependent removals from pension benefits will continue to be off-ramped for manual review. 

-----

### Pension-Related Questions

#### Q0
![image](https://github.com/user-attachments/assets/735d560d-1623-4045-a9c7-d1ed674bc112)
- Veterans will be asked this question only if the benefits API fails to connect or if the API cannot determine if the Veteran receives pension benefits. If the API is working and can locate the Veteran, this question will not appear.
   - For the 686 add dependent flow:
      - If the Veteran answers "yes", BOTH of the following two questions (Q1 and Q2) will be conditionally revealed later in the form flow. The Veteran is required to answer those questions.
      - If the Veteran answers "no", Q1 and Q2 will not appear.
   - For the 674 flow:
      - If the Veteran answers "yes", the following questions will not appear, but the student income section of the form flow will appear.
      - If the Veteran answers "no", the following questions will not appear, and the student income section will not appear.

-----
#### Q1
![image](https://github.com/user-attachments/assets/ba77b819-232d-4af7-aea1-22ed571a5170)
- This question is asked when a dependent is being added via a 21-686c

-----
#### Q2
![image](https://github.com/user-attachments/assets/11696ae6-df7c-43f1-9fe0-326148864f4b)
- This question is asked at the end of all dependent addition branches in the 686 flow.
- VA.gov will flip the answer before sending to RBPS for reasons outlined in [historical context section](https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/products/dependents/pension_income_questions.md#historical-context). (If the user answered Y, VA.gov will send RBPS N, etc.)
- The net worth limit is updated each year in October. VA.gov leverages an API to automatically update the limit within this question, but the pdf (overflow) and the backup quesiton if the API fails need to be manually updated each year.

-----

### Functionalty Overview
- If a Veteran who receives pension is adding a dependent (686), they should see the income and net worth questions.
- If a Veteran who receives pension is removing a dependent (686), they should not see the income and net worth questions. All dependent removals that might impact pension benefits are manually reviewed by the VBA.
- If a Veteran who receives pension is only adding an exsting depndent as a student through the 674-only flow, they should not see the dependent income or net worth questions. The 674 already contains income questions that are used to process student changes that may impact a Veteran's pension benefits, and that section will be conditionally shown based on the Veteran's pension status (determined through the API or throught Q0).
- RBPS expects an answer of "Y", "N", or "NULL". In cases where the Veteran is not in receipt of pension and does not see/answer the questions, RBPS does not require a value to be passed.
- DIC benefits are not considered pension in this case and a Veteran in receipt of DIC (but not pension) does not need to see these questions.

Conditional Question Behavior in 686c Flow
| In receipt of Pension? Q0 | See Q1 | See Q2  |
| ------------------------- | ------ | ------- |
| Yes                       | Y      | Y       |
| No                        | N      | N       |

Values sent to RBPS for Net Worth Question (Q1)
| Question language | VA.gov GUI | RBPS         | PDF/eFolder | CRM-UDO   |
| ----------------- | ---------- | ------------ | ----------- | --------- |
| Question language | less than  | greater than | less than   | less than |
| Yes answer to Q1  | Y          | N            | Y           | Y         |
| No answer to Q1   | N          | Y            | N           | N         |

Values sent to RBPS for Dependent Income Question (Q2)
| Q2                | VA.gov GUI | RBPS         | PDF/eFolder | CRM-UDO |
| ----------------- | ---------- | ------------ | ----------- | ------- |
| Yes answer to Q2  | Y          | Y            | Y           | Y       |
| No answer to Q2   | N          | N            | N           | N       |


-----

### Automate Annual Net Worth Limit
The annual net worth limit is [automatically updated](https://github.com/department-of-veterans-affairs/va.gov-team/issues/96876) each year in October. The updated limit will automatically appear with in the net worth question on VA.gov, but VA.gov still needs to manually update the limit that appears on the pdf overflow page and within the fall-back question on VA.gov if the API fails and VA.gov cannot get the net worth limit value.

-----

### Questions
1. Should VA.gov preemptively off-ramp pension-related claims that cannot be processed by RBPS? Or, is RBPS responsible for off-ramping them?
  - [This work](https://github.com/department-of-veterans-affairs/va.gov-team/issues/112500) was put on hold to evaluate if RBPS can handle all off-ramping.

### Historical Context
- Work was done in [#7759](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7759) to add those questions, but there were issues with getting the values to RBPS, and the work was not completed before the original team rolled off the project.
- Work done in [#76465](https://github.com/department-of-veterans-affairs/va.gov-team/issues/76465) confirmed that we can leverage and API that identifies if the Veteran is receiving pension benefits, so we can conditionally show the income questions only to Veterans who need to see them. If the API is down or cannot find info on the Veteran, users will see a "backup" question that asks: "Are you claiming or do you already receive Veteran Pensio or Survivors Pension benefits?" y/n.
- Net worth question language:
   - From our Pension and Fiduciary Service SME, Jennifer Feuer, about the ORIGINAL intent/design:
   > An RBPS auto pension dependency claims processing option has to be a NO to Question 1 and a YES to Question 2 to automatically be processed through RBPS.  The submitter must state that the dependent does NOT have any income for the last 365 days AND that the household net worth IS less than the current threshold.  We did that on purpose so that it wasn’t just all the same answer, and we can make sure the submitter is providing the right responses – essentially making it so that the submitter is having to read and really respond correctly.
   - For an unknown reason,  RBPS implemented logic that expects the Veteran to answer if their net worth was LESS THAN the allowed amount. Because of this, RBPS is looks for a "no" answer to the net worth question to auto-process the claim rather than a "yes" answer. To accomodate this, VA.gov originally implemented the question to ask if net worth is GREATER THAN the allowed amount, but the feature was never fully launched in production. The questions were implemented correctly in the VA Call Center's CRM-UDO system, where it asks the Veteran if their net worth is less than the allowed amount. To align with the Call Center's implementation, VA.gov [reverted the language](https://github.com/department-of-veterans-affairs/va.gov-team/issues/120615) of the net worth question to ask if net income is LESS THAN the allowed amount, and then [flipped the answer](https://github.com/department-of-veterans-affairs/va.gov-team/issues/120615) in the json payload to RBPS. So, if a Veteran indicated that "yes" their net worth was less than the allowed amount, VA.gov would send a N to RBPS bc RBPS is looking for whether or not the net worth is greater than the limit.
   - The decision to align the VA.gov net worth question langauge with the CRM-UDO system and reverse the question answer sent to RBPS was made on 2025.09.29 by Sanja Bajovic (OCTO PO) and Jennifer Feuer (P&FS). Factors that led to this decision:
      - The VA Call Center's CRM-UDO system implemented the "less than" question in 2022, but it was never successful in sending the answers to RBPS (for unknown reasons). At the time VA.gov launched these pension-related questions in 2025, CRM-UDO did not have a maintenance team, and there was no timeline on when it may start sending values to RBPS.
      - RBPS has a backlog of issues and it was unclear when/if it could fix the implementation of this feature and correct the logic to look for a Y answer to the net worth question.

### Content Recommendations
1. Considering that we are listing on a preceding page all information that will be asked, we should include 'income status'. User should be prepared to answer, since income is: 
- sensitive
- not usually memorized (time to gather)
- affect benefits

The Content Team's recommendation is to add a bullet: "Their income status"

_Note: if that question will only apply to certain cases, we can explain that there._

2. We should also inform the user of the process changes that occurs _and why_ if they answer "Yes" 
