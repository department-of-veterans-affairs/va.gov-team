# [Study] Research Findings - Appointment Reminders Prioritization (Kano analysis) 

**Office of the CTO - Digital Experience (OCTO-DE), Appointments reminders, UAE**

Date: 10/25/2023

[Jenny Wang] [yizhen.wang@va.gov], [Nina Anusavice] [nina.anusavice@va.gov], [Kristen McConnell] [kristen.mcconnell@va.gov]

**Jump to:**

- [Hypotheses and conclusions](#hypotheses-and-conclusions)
- [Key findings - final prioritization ranking](#key-findings-Final-prioritization-ranking)
- [Recommendations](#recommendations)
- [Who we talked to](#who-we-talked-to)
- [Appendix](#Appendix)


## Research Goals

The appointments team is thinking of ways to improve future appointment reminders, which is a crucial part of the authenticated experience for managing their health. We know that Veterans rely on different forms of notifications to be on top of managing their appointments, and staff at VA facilities use different systems to send out reminders. There could be excessive reminders, no reminders, or inconsistent reminders about the same appointment. From past studies, we know that systems are disconnected, and we need to streamline how we send out reminders, which requires additional technical discovery. The focus of this research is to understand Veterans’ preferences on appointment reminders when managing their appointments and appointment-related tasks, which helps our team prioritize what reminders should be built and tested first. 

Here’s a list of appointment reminders that include what exists today and what we expect Veterans might need:

- Routine reminders to schedule appointments (e.g., annual physical exam)
- Request submitted
- Appointments successfully scheduled confirmation (with dates, time, and location and how to modify)
- Referral
- Appointments denied or for some reason could not be scheduled (with next steps, and why (e.g., community care eligibility requirements)
- Unable to contact Veterans to discuss the appointment
- Reminder for upcoming appointments
- Notify early appointment slot openings
- Confirm and fill out pre-check-in and any questionnaires
- Cancellation by VA
- Cancellation confirmation by Veterans
- Any changes to appointments
- Reschedule confirmation
- Updates on pending appointments
- Check-in reminder
- Checked in confirmation
- Next steps for failed check-in
- File for travel reimburse
- Travel claims submission confirmation (submission confirmation and failed submission with next steps)
- Travel claim approved
- AVS ready to view
- Outstanding co-pay bills

The second goal is to find out in what modality (text message, phone call, push notifications, or/and email) and how Veterans would like to receive these appointments and appointment-related reminders, for example, notifications can be sent separately, or notifications can be combined and sent in one email.


## Research Questions

- Which appointment reminders are helpful for Veterans the most and the least?
- What formats (text, email, phone call, or push notifications) do Veterans prefer to receive, and for which reminders?
- How do Veterans feel about receiving appointments and appointment-related reminders?

## Methodology 

Using Optimal Workshop, we conducted an unmoderated Kano study in which participants were invited by email to participate. After accepting the invitation, participants (Veterans and caregivers) were sent a link to a survey activity that contained, respectively, 20-25 questions (or less than 15 mins). We got completed responses from 63 Veterans, in distinct 7 cohorts (fewer than 10 participants per cohort, per PRA). Each cohort accessed the study using a unique URL. The surveys were filled out remotely and asynchronously. 

Kano is a quantitative method for prioritizing work based on satisfaction and functionality. The Kano technique assumes that increasing customer satisfaction is dependent on the level of functionality provided for any given appointment notification. We can measure satisfaction through a survey, and notifications can be classified into four distinct categories (Mandatory, Performance, Attractive, and Indifferent) based on the survey results. There are two primary approaches to analysis, which are discrete analysis and continuous analysis. Leveraging discrete analysis, each reminder is classified by the most frequent result. Leveraging continuous analysis, categories are assigned a numerical coding and each reminder is classified using the average of both functional and dysfunctional forms of the survey question pair. You can get an in-depth explanation of the Kano Model in [this article](https://foldingburritos.com/blog/kano-model/).

We analyzed the survey with both analysis approaches and decided to use the findings based on continuous analysis. While discrete analysis is simpler for categorizing data, the lack of nuances, for example, some preferences from respondents were captured into the selected categories, made the result not make sense, and hard to tell what reminders people preferred. The continuous analysis provided a more precise measurement and better reflected the complexity of the 23 reminders. You can check out the results of the discrete analysis in the [Appendix](#Appendix). 

## Hypotheses and Conclusions

- Veterans will have a clear opinion on the value of each reminder.
    - MAYBE TRUE. Even though the respondents were all able to give a preference for each reminder, it's hard to tell in real situations how they would think and feel about each reminders. This would also depend on personal needs, for example, if someone has never been referred to a different provider, they wouldn't give a fair opinion on Referral reminder.
      
- For a straightforward appointment (without canceling, rescheduling, or other difficulties), Veterans only need 4 notifications. They include a reminder with pre-check-in questions, check-in, AVS, and money-related (e.g., copay and travel pay) notifications.
    - NOT ENOUGH INFORMATION. This may be something our team needs to decide case by case. While this may be true for Veterans with a straightforward appointment (without canceling, rescheduling, or other difficulties), it's not enough to tell with the study whether Veterans want all reminders.
      
- Veterans expect to receive email, text, and phone call notifications. The modality of communication they prefer will be a personal preference.
    - FALSE. The result shows Veterans have reminder modality preferences for each reminder. 


## Key Findings - Final prioritization ranking

| Final prioritization ranking | Reminders |
|----------------|:------:|
| 1 | Appointment request denied |
| 2 | Community care appointment request denied due to ineligibility |
| 3 | VA rescheduled |
| 4 | Travel reimbursement failed |
| 5 | In-person appointment changed to telehealth |
| 6 | Travel reimbursement claim submitted |
| 7 | Not yet checked in |
| 8 | Travel reimbursement claim approved |
| 9 | It's time to file a travel reimbursement claim |
| 10 | Checked in confirmation |
| 11 | Upcoming appointment preparation |
| 12 | Appointment request successfully submitted |
| 13 | AVS ready for view |
| 14 | Referred and need to schedule an appointment for referral |
| 15 | Pre-check-in |
| 16 | Outstanding co-pay for recent appointment |
| 17 | Due for flu shot and remind to make an appointment |
| 18 | Appointment requested has been scheduled |
| 19 | Appointment request has been scheduled at a different date and time |
| 20 | Earlier appointment than scheduled |
| 21 | Appointment cancelled by VA |
| 22 | Appointment cancelled by patient confirmation |
| 23 | Appointment request denied due to unable to contact |


## Details of Findings 



**Finding 1**

Labels: label 1, label 2 

_List all labels that apply to this finding from the [research repository label list](https://github.com/department-of-veterans-affairs/va.gov-research-repository/labels?page=1&sort=name-asc)._

Brief description

> _Supporting data: Quote here_

> _Supporting data: Quote here_


## Additional Insights

_Any additional insights that aren't "key findings." These can be powerful comments from users that don’t represent a pattern in this study, but may be part of one outside this study._


## Recommendations

_Put together initial recommendations here based on your findings along with supporting evidence. Review with your team, then edit as needed._

* Recommendation 1
    * _Supporting evidence_
* Recommendation 2
    * _Supporting evidence_


## Next Steps

_Next steps here. Include owners if appropriate._


## Appendix
[Research plan - survey 1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/appointment-reminders/research/2023-10-notification-kano/research-plan-survey-1-(travel%2C%20pre-check-in%2C%20AVS).md)

[Research plan - survey 2](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/appointment-reminders/research/2023-10-notification-kano/research-plan-survey-2-(appointments%2C%20co-pay%20%26%20combo).md)

[Research plan - survey 3](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/appointment-reminders/research/2023-10-notification-kano/research-plan-survey-3-(appointments-only).md)

[Kano Model Guide](https://foldingburritos.com/blog/kano-model/)

[Discrete analysis](linkhere)

## Tools used for Synthesis

Optimal Workshops and Excel 

## Other supporting documents created

Link to the spreadsheets for calculations


## Who we talked to 

**Recruitment criteria**

- All have a computer or mobile device and are willing to use it to complete the activity.
- All must have been to a VA health care facility for medical appointments for themself or a Veteran that they care for in the last 12 months.
- All must have filed a travel reimbursement claim in the past.

  
|                |Cohort 1|Cohort 2|Cohort 3|Cohort 4|Cohort 5|Cohort 6|Cohort 7|
|----------------|:------:|:------:|:------:|:------:|:------:|:------:|:------:|
|***SEX***       |        |        |        |        |        |        |        |                 
|Male            |        |   9    |        |        |        |        |        |        
|Female          |    9   |        |        |        |        |        |        |            
|       ---      |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |  
|***Age***       |        |        |        |        |        |        |        |           
|18-24 yo        |        |        |    4   |        |        |        |        |        
|25-34 yo        |        |        |    5   |        |        |        |        |      
|35-44 yo        |        |        |        |    4   |        |        |        |       
|45-54 yo        |        |        |        |   5     |        |        |        |       
|55+ yo          |        |        |        |        |     9  |        |        |          
|       ---      |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |  
|***Role*** |        |        |        |        |        |        |        |        
|Veteran    |     9   |   9     |     9   |   9     |    9    |        |   9    |    
|Caregiver    |        |        |        |        |        |    9    |        |      
|       ---      |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |  
|***Education*** |        |        |        |        |        |        |        |        
|High School     |        |        |        |        |        |        |  3     |    
|Some College    |        |        |        |        |        |        |  1     |      
|Associate's     |        |        |        |        |        |        |  1      |      
|Bachelors       |        |        |        |        |        |        |   2     |       
|Masters         |        |        |        |        |        |        |   2    |     
|       ---      |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |  
|***Log In*** |        |        |        |        |        |        |        |        
|MyHealtheVet     |   7     |    7    |    7    |    7    |   7     |        |  7     |  
