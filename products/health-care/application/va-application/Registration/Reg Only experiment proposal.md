# Registration Only - Experiment

## Problem statement
- Veterans do not have a pathway to register for VA health care online.

## Goal of this experiment
- Determine whether there is a Veteran experience use case/need for a registration pathway on the online 10-10EZ

## Potential constraints & risks
- Registration for VA health care is not clearly defined
- Registration is often performed at a facility in person
- There are many registration reasons, however MVP is focusing on one (Service connected disability care)
     - Other common registration reasons are mental health, MST, IVF, etc
- Timing of launch may coincide with end of year holidays, causing reduced application traffic overall


## Implementation
- For Veterans with 10%-40% disability rating, the 10-10EZ will prompt them within the application asking whether they want to seek care for their service-connected disability/injury only or enroll in VA health care for full benefits. If they choose service-connected care only, we will display an on-screen message directing them to call the Health Eligibility & Enrollment center, download the PDF form and mail in or visit a facility to register for service-connected care.
     - The Veteran will have the option to go back within the application and make a different selection to proceed through the application for VA health care enrollment


## Hypothesis
- After providing the option to register, we believe Veterans will have further understanding of registration vs enrollment.
- We believe that Veterans will be more likely to choose enrollment in full health benefits.
- Assumption: No more than 250 Veterans will select Registration per month, and when presented with the options (call, print/mail, in-person), they will exit the form (assuming to do one of those things)



## Timetable
- The experiment will run for 3 months (90 days)
- The target volumes are based on current average traffic to the 10-10EZ, in conjunction with volumes we received from 2019-2023 of registered Veterans obtaining service-connected care only
     - The forecast of 250 registration selections is based on approximately one-third of monthly service-connected care only registration volumes (850-900)
     - The number of 'Back' button clicks, form exits and download link clicks are estimations derived to support our hypothesis.

### Monthly Totals and Average user activity
|Timeblock|# of application starts|# of selection page views|# of accordion clicks|# of Registration selection|# of 'Back' button clicks|# of form exits after Registration selection|# of clicks to download 10-10EZ form|% Register vs Enroll|% Exits after Reg|
|---------|---------------|-------------|----------|---------------|---------------|----------|----------|----------|----------|
|Target Monthly Average | 18,000 | 11,000 |N/A |250 | 200 |50 | 10 |29% | 20% |
|Month 1| 16,718| 567 | 234 | 188 |20 | 135 | 39 |33%|72%|
|Month 2| 19,473 | 808 | 322 | 205 |33 | 101 | 34 |25% | 49% |
|Month 3| 26,198 | 1,094 | 329 | 274 |36 | 264 | 45 |25% | 96% |
|Experiment Monthly Average | 20,796 | 823 | 295 | 222 |30 | 167 | 39 |28% | 72% |
|3-month Total | 62,389 | 2,469 | 885| 667|89 | 500 | 118 |n/a|n/a|

### Monthly totals of users who selected Registration, went back to the question, selected Enroll and moved forward through the form
|Month|# of users on Question Page|# of users on Reg page|# of users back to Question page|# of users select Enroll and move to next page|% of users changed Path|
|---------|---------------|-------------|----------|---------------|---------------|
|Monthly Target|850 |250 |200 |200 |80% |
|October|832|199|56|42|21%|
|November| 985 |179 |65 |54 |30% |
|December| 1,095 |208 |55 |45 |22% |


## Research questions/Supplemental Metrics
- Is there enough interest in registering for service connected care only?
- Is there significant redirection - do Veterans frequently go back after seeing the alert to call or download a paper form?
- How many of these complete the application (after seeing the registration alert) all they way to the confirmation page?
- If Veterans are exiting the form when they reach the Registration information page, where are they going/what are they doing?
     - Are they leaving VA.gov?
     - Are they searching for a facility?
     - Are they looking for another way/more information to get health care without enrolling?
     - Are they looking for more information on what "Register" means?

## Conclusion
- Based on the results, we see that 28% of Veterans have shown interest in the registration pathway, which was right in line with our assumption.  However, we also saw that more than 70% of those Veterans dropped from the Registration page, and subsequently visited other health related and facility pages.
     - This indicates to us that there does seem to be an interest in registering (not enrolling), and that Veterans are seeking more information.
### NOTE
- As of March 7th, the team has descoped the Registration pathway feature work.
     - Reached out to the HOME team, who manages the Registry Exam questionnaire and registry, and found that they no longer need an online solution to register Veterans into the system for purposes of putting them on the Registry.
          - Since August 2024, Veterans are automatically added to the Registery and would need to intentionally opt-out
          - The backlog of registry questionnaires have been reduced from 150k to just 53
          - There is no further need to create a registration path online for Veterans to register (AKA "get in the system") to get a registry exam and be added to the registry
     - Product Owner (Patrick Bateman) would like the team to put this feature in the backlog, and is reaching out to other VA.gov teams to consider making the Registration path as part of other products (such as making an appointment)
          - If a Veteran wants to make an appointment online, they must be registered with a facility, which also would mean they are already "in the system".  The Registration path can would allow a Veteran new to VA to "get in the system" and register with a facility, then immediately be directed through the appointment process.  It could be all one step, rather than separate forms and processes.


## Next Steps - THIS IS NO LONGER APPLICABLE AS OF 3/7/2025.  ADDITIONAL WORK TO IMPLEMENT IN CONJUNCTION WITH APPOINTMENTS OR OTHER SIMILAR WORKFLOWS WOULD BE A FUTURE INITIATIVE
- Initial thoughts (pre-experiment)
     - If there is enough interest in Registration pathway online after month 1 to indicate a trend, then we will run a research session to gain feedback on a previously designed user flow, content and presentation.
     - If there is enough interest in Registration pathway online, then we will consider how to integrate Registration process in the form as well as with VES to accept the data (not currently set up to receive this from VA.gov).
     - If there is not enough interest in Registration pathway online, we will consider removing the experiment from the form.  
          - We may need to confirm policy/regulation requirements from HEC.  What happens if we have to provide "registration" option?
               - If we have to provide a registration option, possible solutions are to leave experiment in the form, or pose the choice in a different way/place in the form.
Additional research questions
- Is there a significant increase in calls from service connected Veterans asking about registration?
- If so, do they end up registering them or does the call center staff encourage the Veteran to enroll instead?
- How do they help the Veteran decide?

- Are Veterans clear and confident in their understanding of the difference (between registration and enrollment) and what they will get?
- What information is missing to help this group of Veterans choose between registration and enrollment?


