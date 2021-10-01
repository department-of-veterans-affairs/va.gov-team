# Planning Unmoderated Studies
## Introduction
Conducting research for a government project comes with constraints. We must adhere to the Paperwork Reduction Act (PRA), which regulates how the government can collect information from the public. In general, PRA requires that the government must accept and consider public comments and get formal approval from OMB in order to collect information from the public. This is a months-long process. 

Most of the user research we do is considered exempt from PRA because we are conducting [direct observation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/what-is-paperwork-reduction-act.md) (usability testing, interviews, co-design) and asking non-standard questions, as opposed to a survey with identical protocol for each participant. Conducting a statistically significant survey with hundreds or thousands of respondents requires PRA approval. 

In order to be exempt from PRA when conducting unmoderated testing such as card sorts or tree tests, we must adhere to the "fewer than 10" participant rule. That means that when structuring your study, you must: 
- create meaningfully distinct cohorts of participant recruitment (e.g. Cohort A: users enrolled in health care benefits, Cohort B: users enrolled in GI bill benefits)
- include fewer than 10 participants per cohort
- include a **separate study link** for each cohort

### Note on tools
Whether you are doing unmoderated or moderated research, any tool/service you use should be approved by the VA and must be under a paid license -- whether that license is paid for by VA or a contractor team. Using free tools means that service gets your data. Should a research participant inadvertently share PII or PHI, using an unlicensed service puts our research practice at risk.

## How to set up an unmoderated study
1. Read through the [PRA primer](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/what-is-paperwork-reduction-act.md) documentation
2. Create [research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-plan-template.md) with meaningfully distinct cohorts of fewer than 10 participants per cohort
3. Create the card sort/tree test in Optimal Workshop
4. As part of the card sort/tree test, include a short answer question for participants to provide their unique code (given by Perigean during recruitment process)
5. Generate a separate link to the study in Optimal Workshop for each recruitment cohort
6. Add study links to corresponding cohorts in research plan
7. Draft recruitment email that explains what the study is and what the participant can expect
8. Draft instructions email that gives clear, simple directions for completing the study. Perigean will include the appropriate study link for each cohort and a unique participant code. 

## Recruitment process
1. Perigean will send out your recruitment email to Veterans to gauge interest
2. Veterans respond to the email
3. Perigean sends the instruction email, including a link to the sort and unique code
3. Veteran completes the study and provides the code in the questionnaire 
4. Researcher logs into Optimal Workshop and send codes to Perigean every few days to gauge participation
5. Perigean sends continues recruitment as needed 

## Tips and recommendations
- Note that Optimal Workshop is not accessible to users with screen readers
- Write thorough instructions for the sort
   - Many participants mentioned that the OptimalSort instructions were difficult to understand
   - Potentially do a hybrid sort in order to give participants a better understanding of what to do
- Don’t create more than 30 cards
   - The cognitive load for sorting more than 30 cards is heavy and may also result in low esteem from participants and abandonment of the exercise
- Do not attempt a multi-party unmoderated study that requires participants to go to more than one link to complete the activity
   - We have seen decreased participation with this study design
- Plan ahead to optimize time
   - Leave the sort open for 14 days if possible (one sprint) and use the time to work on other initiative while the study is open
- Recruit for double the number of participants you want
   - Abandonment is much higher for unmoderated research
- Communicate regularly with Perigean to measure participation and continue recruitment as needed
