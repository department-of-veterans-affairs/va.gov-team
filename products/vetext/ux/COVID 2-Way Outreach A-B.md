# COVID 2-Way Outreach Initial Message A/B Testing (March 2021)

Goal: In an effort to improve response rate and schedule rate for COVID vaccine appointments, we are reevaluating the language in the initial outreach message in the COVID 2-Way Direct Scheduling workflow, and testing it against the existing message in small batch tests within a single site. 

## March 9-10, 2021
Shorten message, move action step to end of message for increased visibility. 

### March 9, One site, ~5000 messages per condition.

A (current message):
> %FACILITY_NAME% is offering COVID-19 vaccines to Veterans who receive care at VA.  
> 
> To schedule an appointment, please reply with a date and time you would be available from %START_DATE% to %END_DATE%
> 
> Please respond within 24 hours. More info about COVID-19 vaccines: https://go.usa.gov/xASD8  Send STOP to end messages.

B (reordered, shortened message): 
> You can now get a COVID-19 vaccine at %Facility_Name%. More info about COVID-19 vaccines at VA: https://go.usa.gov/xASD8
> 
> To schedule your first dose of the COVID-19 vaccine, reply to this message within 24 hours. Send us a text with a date and time you're available from %start_date& to %end_date%.

**Results:** 
B performed worse than A by a statistically *insignificant* 12.42% on successful scheduling, and better by a statistically *insignificant* 2.99% on response rate.

| **3/9/2021**                    |      |      |        |         |            |
| --------------------------- | ---- | ---- | ------ | ------- | ---------- |
| Two-sided, 95%              | **A**    | **B**    | **power**  | **p-value** | **Difference** |
| **Responses received**      | 234  | 241  | 7.07%  | 0.371   | 2.99%      |
| \- Responded, scheduled     | 153  | 134  | 39.06% | 0.8725  | \-12.42%   |
| \- Responded, not scheduled | 81   | 107  | 79.70% | 0.0278  | 32.10%     |
| **No response received**    | 4766 | 4759 |        |         |            |
| **Total Messages Sent**     | 5000 | 5000 |        |         |

Screenshot of raw data:
![March9AB](https://user-images.githubusercontent.com/77640565/110707193-cdfa7280-81ad-11eb-8baa-e07e9c2547df.png)

### March 10, One site, ~5000 messages per condition.

A (current message):
> %FACILITY_NAME% is offering COVID-19 vaccines to Veterans who receive care at VA.  
>
>  To schedule an appointment for your first dose, please reply with a date and time you would be available from %START_DATE% to %END_DATE%
> 
> Please respond within 24 hours. More info about COVID-19 vaccines: https://go.usa.gov/xASD8  Send STOP to end messages.

B (reordered, shortened message): 
> You can now get a COVID-19 vaccine at %Facility_Name%. More info about COVID-19 vaccines at VA: https://go.usa.gov/xASD8
> 
> To schedule your first dose of the COVID-19 vaccine, reply to this message within 24 hours. Send us a text with a date and time you're available from %start_date& to %end_date%.

**Results:** 
B performed worse than A by a statistically significant 27.37% on successful scheduling, and worse by a statistically significant 27.61% on response rate.

| **3/10/2021**                   |      |      |        |         |            |
| --------------------------- | ---- | ---- | ------ | ------- | ---------- |
| Two-sided, 95%              | **A**    | **B**    | **power**  | **p-value** | **Difference** |
| **Responses received**      | 257  | 186  | 99.79% | **0.9997**  | \-27.61%   |
| \- Responded, scheduled     | 157  | 114  | 96.47% | **0.996**  | \-27.37%   |
| \- Responded, not scheduled | 100  | 72   | 87.68% | **0.9843**  | \-27.99%   |
| **No response received**    | 4675 | 4745 |        |         |            |
| **Total Messages Sent**     | 4932 | 4931 |        |         |

Screenshot of Raw Data:

![March10AB](https://user-images.githubusercontent.com/77640565/110706779-3bf26a00-81ad-11eb-8703-0287a5bb5889.png)

## March 11
Hypothesis: The addition of VAX and PASS response options for the initial message would improve Veteran experience by 1) reducing the number of Veterans who receive a message that is mismatched with their situation,  and 2) increasing response rate due to clear response options for folks who are not interested in scheduling. 

### March 11, One site, ~5000 messages per condition.

A (current message):
> %FACILITY_NAME% is offering COVID-19 vaccines to Veterans who receive care at VA.  
>
> To schedule an appointment for your first dose, please reply with a date and time you would be available from %START_DATE% to %END_DATE%
> 
> Please respond within 24 hours. More info about COVID-19 vaccines: https://go.usa.gov/xASD8  Send STOP to end messages.
> 

B (added responses for VAX and PASS)
> %FACILITY_NAME% is offering COVID-19 vaccines. To schedule an appointment, please reply with a DATE & TIME you would be available from %START_DATE% to %END_DATE%
> 
> If you have already received, or are scheduled to receive, the vaccine: Reply VAX
> 
> If you are not interested at this time: Reply PASS
> 
> More info about COVID-19 vaccines: https://go.usa.gov/xASD8 Send STOP to end messages.
> 

**Results:** 
B performed better than A by a statistically significant 164.81% on response rate, and B performed worse by an insignificant 6% on successful schedule.

| **3/11/2021**                                 |      |      |         |         |            |
| ----------------------------------------- | ---- | ---- | ------- | ------- | ---------- |
| Two-sided, 95%                            | **A**    | **B**    | **power**   | **p-value** | **Difference** |
| **Responses received**                        | 155  | 409  | 100.00% | **0.0000**  | 164.56%    |
| \- Responded, scheduled                   | 100  | 94   | 9.26%   | 0.6616  | \-5.75%    |
| \- Responded, VAX                         | 0    | 119  |         |         |            |
| \- Responded, PASS                        | 0    | 157  |         |         |            |
| \- Responded, not scheduled, not vax/pass | 55   | 39   | 69.08%  | 0.9501  | \-28.91%   |
| **No response received**                      | 4838 | 4571 |         |         |            |
| **Total Messages Sent**                       | 4993 | 4980 |         |         |

Screenshot of Raw Data:
![March11AB2](https://user-images.githubusercontent.com/77640565/111341224-8d2fad00-8636-11eb-9dbf-0f60ad2dfb17.png)

**Next Actions:**
National 2-way direct schedule messages were updated to include VAX/PASS options. Extended to include one-way week of Mar 21.

## March 16, 2021
Hypothesis: Adding "VA: Hi %PATIENT_FIRST_NAME%" to beginning of message will add personalization and validity to message, increasing overall response rate.

### March 16, One site, ~5000 messages per condition.

A (current message):
>
>  %FACILITY_NAME% is offering COVID-19 vaccines. To schedule an appointment, please reply with a DATE & TIME you would be available from %START_DATE% to %END_DATE%
> 
> If you have already received, or are scheduled to receive, the vaccine: Reply VAX
> 
> If you are not interested at this time: Reply PASS
> 
> More info about COVID-19 vaccines: https://go.usa.gov/xASD8 Send STOP to end messages.

B (added VA: Hi, Firstname):
>
> VA: Hi, %PATIENT_FIRST_NAME%, %FACILITY_NAME% is offering COVID-19 vaccines. To schedule an appointment, please reply with a DATE & TIME you would be available from %START_DATE% to %END_DATE%
> 
> If you have already received, or are scheduled to receive, the vaccine: Reply VAX
> 
> If you are not interested at this time: Reply PASS
> 
> More info about COVID-19 vaccines: https://go.usa.gov/xASD8 Send STOP to end messages.
> 


