# Pension Income Questions in the 686/674 Form Flow

- [Milestone](https://github.com/department-of-veterans-affairs/va.gov-team/milestone/1524) for this project.
- [Design files](https://www.figma.com/design/7W55oNwdVXvXOTI9SaFzQ7/686c-Add-or-Remove-Dependents?node-id=5390-102987&t=YbZTPEYFhEHZIpFt-1) for this project.

The pension line of business requested that VA.gov add two income-related questions to the 686/674 interview-style form flow on VA.gov, so dependent changes impacting pension benefits could be more efficiently processed. The y/n answers from those questions were to be sent by VA.gov to RBPS. RBPS would then determine if the claim could be auto-processed or if it needed to be off-ramped for manual review.

Work was done in [#7759](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7759) to add those questions, but there were issues with getting the values to RBPS, and the work was not completed before the original team rolled off the project.

Currently, all dependency pension claims submitted to RBPS off-ramp for manual processing because a person must review income and net worth information. Until VA.gov integrates the income questions and sends the answers to RBPS, these pension claims cannot be processed through RBPS and will continue to be off ramped for manual processing. 

Work done in [#76465](https://github.com/department-of-veterans-affairs/va.gov-team/issues/76465) confirmed that we can leverage and API that identifies if the Veteran is receiving pension benefits, so we can conditionally show the income questions only to Veterans who need to see them. If the API is down or cannot find info on the Veteran, users will see a "backup" question that asks: "Are you claiming or do you already receive Veteran Pensio or Survivors Pension benefits?" y/n.

-----

### Sample questions:

![image](https://github.com/user-attachments/assets/735d560d-1623-4045-a9c7-d1ed674bc112)
- Veterans will be asked this question only if the benefits API fails to connect or if the API cannot determine if the Veteran receives pension benefits. If the Veteran answers "yes", the follow two questions will be conditionally revealed later in the form flow. If the API is working and can locate the Veteran, this question will not appear.

-----

![image](https://github.com/user-attachments/assets/ba77b819-232d-4af7-aea1-22ed571a5170)
- This question is asked for every dependent branch in the form
- If yes, then the claim will off-ramp for manual review where the VBA will usually ask the Veteran a complete income/asset picture via a 21P-0969 or 21P-8416
- If no, the claim will continue through to RBPS

-----

![image](https://github.com/user-attachments/assets/11696ae6-df7c-43f1-9fe0-326148864f4b)
- This question is asked at the end of every form branch
- If yes, the claim will off-ramp for manual review review where the VBA will usually ask the Veteran a complete income/asset picture via a 21P-0969 or 21P-8416
- If no, the claim will continue through to RBPS
-----

From our Pension and Fiduciary Service SME, Jennifer Feuer, about the original intent/design:
> An RBPS auto pension dependency claims processing option has to be a NO to Question 1 and a YES to Question 2 to automatically be processed through RBPS.  The submitter must state that the dependent does NOT have any income for the last 365 days AND that the household net worth IS less than the current threshold.  We did that on purpose so that it wasn’t just all the same answer, and we can make sure the submitter is providing the right responses – essentially making it so that the submitter is having to read and really respond correctly.

**Note:** For an unknown reason, the question regarding net worth was implemented differently than Jennifer originally intended and asks if net worth is GREATER THAN instead of LESS THAN the allowed amount. Because of this, RBPS is expecting a "no" answer rather than a "yes" answer in order to auto process. So, a "no" answer to both income questions will allow a claim to auto-process in RBPS because the Veteran's income does not increase by adding the new dependent.

-----

### Questions
1. Should VA.gov preemptively off-ramp pension-related claims that cannot be processed by RBPS? Or, is RBPS responsible for off-ramping them?
  - VA.gov should preemtively off-ramp pension-related claims that cannot be processed by RBPS. This involves claims where the answers to the income questions are anything other than "no income in the last 365 days" and "no, my income is not over the annual limit".
2. 

### Content Recommendations
1. Considering that we are listing on a preceding page all information that will be asked, we should include 'income status'. User should be prepared to answer, since income is: 
- sensitive
- not usually memorized (time to gather)
- affect benefits

My recommendation is to add a bullet: "Their income status"

_Note: if that question will only apply to certain cases, we can explain that there._

2. We should also inform the user of the process changes that occurs _and why_ if they answer "Yes" 
