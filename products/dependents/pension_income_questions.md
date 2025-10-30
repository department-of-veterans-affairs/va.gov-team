# Pension Income Questions in the 686/674 Form Flow

- [Milestone](https://github.com/department-of-veterans-affairs/va.gov-team/milestone/1524) for this project.
- [Design files](https://www.figma.com/design/7W55oNwdVXvXOTI9SaFzQ7/686c-Add-or-Remove-Dependents?node-id=5390-102987&t=YbZTPEYFhEHZIpFt-1) for this project.
- [Question logic](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1690311086208/96d5f59b299912bc8c69542e6943d5b2213b9c72?wid=3-1750949761424)

The pension line of business requested that VA.gov add two income-related questions to the 686/674 interview-style form flow on VA.gov, so dependent changes impacting pension benefits could be more efficiently processed. The y/n answers from those questions were to be sent by VA.gov to RBPS. RBPS would then determine if the claim could be auto-processed or if it needed to be off-ramped for manual review.

Work was done in [#7759](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7759) to add those questions, but there were issues with getting the values to RBPS, and the work was not completed before the original team rolled off the project.

Currently, all dependency pension claims submitted to RBPS off-ramp for manual processing because a person must review income and net worth information. Until VA.gov integrates the income questions and sends the answers to RBPS, these pension claims cannot be processed through RBPS and will continue to be off ramped for manual processing. 

Work done in [#76465](https://github.com/department-of-veterans-affairs/va.gov-team/issues/76465) confirmed that we can leverage and API that identifies if the Veteran is receiving pension benefits, so we can conditionally show the income questions only to Veterans who need to see them. If the API is down or cannot find info on the Veteran, users will see a "backup" question that asks: "Are you claiming or do you already receive Veteran Pensio or Survivors Pension benefits?" y/n.

-----

### Sample questions

#### Q0
![image](https://github.com/user-attachments/assets/735d560d-1623-4045-a9c7-d1ed674bc112)
- Veterans will be asked this question only if the benefits API fails to connect or if the API cannot determine if the Veteran receives pension benefits. If the API is working and can locate the Veteran, this question will not appear.
   - For the 686 add dependent flow: If the Veteran answers "yes", BOTH of the following two questions will be conditionally revealed later in the form flow. The Veteran is required to answer those questions. If the Veteran answers "no", the questions will not appear.
   - For the 674 flow: If the Veteran answers "yes", the following questions will not appear, but the student income section of the form flow will appear. If the Veteran answers "no", the following questions will not appear, and the student income section will not appear.

-----
#### Q1
![image](https://github.com/user-attachments/assets/ba77b819-232d-4af7-aea1-22ed571a5170)
- This question is asked when a dependent is being added. The question is not asked when a Veteran is only submitting a 674 or removing a dependent.
- If yes, the claim will continue through to RBPS.
   - RBPS did ask VA.gov to off-ramp the claim for manual review review because the VA needs a complete income/asset picture via a 21P-0969 or 21P-8416
- If no, the claim will continue through to RBPS

-----
#### Q2
![image](https://github.com/user-attachments/assets/11696ae6-df7c-43f1-9fe0-326148864f4b)
- This question is asked at the end of all dependent addition branches in the 686 flow.
- NOTE: VA.gov originally implemented language that asked if the Veteran's net worth was "greater than" the allowed limit because RBPS is looking for a "no" answer to auto-process these claims, but Jennifer Feuer from Pension and Fiduciary Services flagged that PF&S originally wanted the question to ask if the net worth was "less than" the allowed amount and RBPS would auto process claims that answered "yes". Given the discrepency between the original requirements (yes answer) and what RBPS implemented (no answer). The decision was made on 2025.09.29 by Sanja Bajovic and Jennifer Feuer to align the language of the questions on VA.gov to match what was implemented in the VA Call Center's CRM-UDO system and ask the Veteran if their net worth was "less than" the allowed amount. VA.gov will then reverse the question's answer in the json file that is sent to RBPS to align with the logic implemented in RBPS. If a Veteran indicates that "yes" their net worth is less than the allowed amount, VA.gov will reverse the answer and send a "no" to RBPS, which will allow RBPS to auto process the claim (as long as the answer to Q1 was also "no". Factors that led to this decision:
   - The VA Call Center's CRM-UDO system implemented the "less than" question in 2022, but it was never successful in sending the answers to RBPS (for unknown reasons). At the time VA.gov launched these pension-related questions in 2025, CRM-UDO did not have a maintenance team, and there was no timeline on when it may start sending values to RBPS.
   - RBPS has a backlog of issues and it was unclear when/if it could fix the implementation of this feature and correct the logic to look for a Y answer to the net worth question.
- If no, the claim will continue through to RBPS, but VA.gov will flip the answer and send a Y to RBPS for reasons outlined above.
   - RBPS did ask VA.gov to off-ramp the claim for manual review review because the VA needs a complete income/asset picture via a 21P-0969 or 21P-8416, but Sanja opted to [put that work on hold](https://github.com/department-of-veterans-affairs/va.gov-team/issues/112500).
- If yes, the claim will continue through to RBPS, but VA.gov will flip the answer and send a N to RBPS for reasons outlined above.
-----

From our Pension and Fiduciary Service SME, Jennifer Feuer, about the ORIGINAL intent/design:
> An RBPS auto pension dependency claims processing option has to be a NO to Question 1 and a YES to Question 2 to automatically be processed through RBPS.  The submitter must state that the dependent does NOT have any income for the last 365 days AND that the household net worth IS less than the current threshold.  We did that on purpose so that it wasn’t just all the same answer, and we can make sure the submitter is providing the right responses – essentially making it so that the submitter is having to read and really respond correctly.

**Note:** For an unknown reason, RBPS implemented logic that looks for a "no" answer to the net worth question to auto-process the claim rather than a "yes" answer. Because of this VA.gov originally implemented the question to ask if net worth is GREATER THAN the allowed amount, but the feature was never fully launched in production. The questions were implemented correctly in the VA Call Center's CRM-UDO system, where it asks the Veteran if their net worth is less than the allowed amount. To align with the Call Center's implementation, VA.gov [reverted the language](https://github.com/department-of-veterans-affairs/va.gov-team/issues/120615) of the net worth question to ask if net income is LESS THAN the allowed amount, and then [flipped the answer](https://github.com/department-of-veterans-affairs/va.gov-team/issues/120615) in the json payload to RBPS. So, if a Veteran indicated that "yes" their net worth was less than the allowed amount, VA.gov would send a N to RBPS bc RBPS is looking for whether or not the net worth is greater than the limit.

-----

### Functionalty Overview
- If a Veteran who receives pension is adding a dependent (686), they should see the income and net worth questions.
- If a Veteran who receives pension is removing a dependent, they should not see the income and net worth questions. All dependent removals that might impact pension benefits are manually reviewed by the VBA.
- If a Veteran who receives pension is only adding an exsting depndent as a student through the 674-only flow, they should not see the dependent income or net worth questions. The 674 already contains income questions that are used to process student changes that may impact a Veteran's pension benefits, and that section will be conditionally shown based on the Veteran's pension status (determined through the API or throught Q0).
- RBPS expects an answer of "Y", "N", or "NULL". In cases where the Veteran is not in receipt of pension and does not see/answer the questions, RBPS does not require a value to be passed.
- DIC benefits are not considered pension in this case and a Veteran in receipt of DIC (but not pension) does not need to see these questions.

-----

### Automate Annual Net Worth Limit
The (same?) API can be leveraged to pull in the annual net worth limit and [auto-populate the value](https://github.com/department-of-veterans-affairs/va.gov-team/issues/96876) within the text of the net worth question, so VA.gov does not need to update the value each year (in October).

-----

### Questions
1. Should VA.gov preemptively off-ramp pension-related claims that cannot be processed by RBPS? Or, is RBPS responsible for off-ramping them?
  - VA.gov should preemtively off-ramp pension-related claims that cannot be processed by RBPS. This involves claims where the answers to the income questions are anything other than "no income in the last 365 days" and "no, my income is not over the annual limit". Baha Khaled confirmed on 6/17/25 in an email to Sanja Bajovic that VA.gov should preemptively off-ramp these claims for manual processing rather than send them to RBPS.
  - Sanja put [this work](https://github.com/department-of-veterans-affairs/va.gov-team/issues/112500) on hold to prioritize higher impact work.
2. 

### Content Recommendations
1. Considering that we are listing on a preceding page all information that will be asked, we should include 'income status'. User should be prepared to answer, since income is: 
- sensitive
- not usually memorized (time to gather)
- affect benefits

My recommendation is to add a bullet: "Their income status"

_Note: if that question will only apply to certain cases, we can explain that there._

2. We should also inform the user of the process changes that occurs _and why_ if they answer "Yes" 
