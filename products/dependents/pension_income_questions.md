# Pension Income Questions in the 686/674 Form Flow

[Milestone](https://github.com/department-of-veterans-affairs/va.gov-team/milestone/1524) for this project.

The pension line of business requested that VA.gov add two income-related questions to the 686/674 interview-style form flow on VA.gov, so dependent changes impacting pension benefits could be more efficiently processed. The y/n answers from those questions were to be sent by VA.gov to RBPS. RBPS would then determine if the claim could be auto-processed or if it needed to be off-ramped for manual review.

Work was done in [#7759](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7759) to add those questions, but there were issues with getting the values to RBPS, and the work was not completed before the original team rolled off the project.

Currently, all dependency pension claims submitted to RBPS off-ramp for manual processing because a person must review income and net worth information. Until VA.gov integrates the income questions and sends the answers to RBPS, these pension claims cannot be processed through RBPS and will continue to be off ramped for manual processing. 

Work done in [#76465](https://github.com/department-of-veterans-affairs/va.gov-team/issues/76465) confirmed that we can leverage and API that identifies if the Veteran is receiving pension benefits, so we can conditionally show the income questions only to Veterans who need to see them.

Sample questions:

![image](https://github.com/user-attachments/assets/ba77b819-232d-4af7-aea1-22ed571a5170)
- This question is asked for every dependent branch in the form
- If yes, then the claim will off-ramp for manual review where the VBA will usually ask the Veteran a complete income/asset picture via a 21P-0969 or 21P-8416
- If no, the claim will continue through to RBPS

![image](https://github.com/user-attachments/assets/11696ae6-df7c-43f1-9fe0-326148864f4b)
- This question is asked at the end of every form branch
- If yes, the clainm will continue through to RBPS
- If no, the claim will off-ramp for manual review review where the VBA will usually ask the Veteran a complete income/asset picture via a 21P-0969 or 21P-8416

From our Pension and Fiduciary Service SME, Jennifer Feuer:
> An RBPS auto pension dependency claims processing option has to be a NO to Question 1 and a YES to Question 2 to automatically be processed through RBPS.  The submitter must state that the dependent does NOT have any income for the last 365 days AND that the household net worth IS less than the current threshold.  We did that on purpose so that it wasn’t just all the same answer, and we can make sure the submitter is providing the right responses – essentially making it so that the submitter is having to read and really respond correctly.So, an RBPS auto pension dependency claims processing option has to be a NO to Question 1 and a YES to Question 2 to automatically be processed through RBPS.  The submitter must state that the dependent does NOT have any income for the last 365 days AND that the household net worth IS less than the current threshold.  We did that on purpose so that it wasn’t just all the same answer, and we can make sure the submitter is providing the right responses – essentially making it so that the submitter is having to read and really respond correctly.
