## Travel Pay SMOC (Simple Mileage Only Claims) Quantitative Measures of Success
This page contains quantitative data intended to measure whether SMOC was successful. Each metric is defined by a type:

### Metric Description

|Category | Metric | Description | Hypothesis | Numerator | Denominator 
| -------- | ---------- | ---------- | ---------- | -------| -------|
|Engagement|Total submissions |Measures the rate at which Veterans reach the submission page | Veterans successfully move through the flow and submit their travel claim|# of submissions (from DataDog) | |
|Engagement|Claims view rate|Measures the rate at which Veterans view their claim details|Veterans will want more information about their claim than provided|# of SSO link clicks to the claim details page on VA.gov||
|Engagement|PastAppointmentDetails screen views|Measures how often Veterans view the PastAppointmentDetails screen|Veterans will view the past appointment details screen at a higher rate because Veterans want to file for travel reimbursement|# of PastAppointmentDetails screen views|Baseline metric|
|Engagement|Total abandoment rate|Veterans that start filing a travel claim and drop out of the flow for whatever reason|Most users will abandon on the intro screen |# of submissions (from DataDog) |# of InterstitialScreen views|
|Engagement | Abandoment rates/screen (e.g.: to calculate for the intro screen: if 10 intro screen views, and 4 mileage screen views, that is (10-4)/10 or a 60% abandonment rate on the intro screen) |If abandoned during the flow, what screen they abandoned | Most will abandon on the intro screen | current screen views - following screen views | current screen views |
| Performance | Average latency |  | |  |  |
| Retention | Total submissions | How many claims are submitted | As more users learn of the availability of SMOC on Mobile submissions will rise | # of submissions (from DataDog)  |  |

### Metric Tracking
**Engagement** 

| Metric | Baseline | 30 Days from Launch | 60 Days from Launch | 90 Days from Launch |
| -------- | -------- | ---------- | -----------------| -----------------| 
|Total submissions | 91,887 (va.gov June 10 - July 10) | |||
|Claims view rate|||||
|PastAppointmentDetails screen views| 86,240 (June 10 - July 9) ||||
|Total abandoment rate| 53.2% (va.gov - prior week) ||||
|Abandoned: Intro | 52.4% (va.gov - prior week)| ||  |
|Abandoned: Mileage | 3.2% (va.gov - prior week) | ||  |
|Abandoned: Vehicle | .8% (va.gov - prior week) | ||  |
|Abandoned: Address | 2.2% (va.gov - prior week) | ||  |
|Abandoned: Review | 1.9% (va.gov - prior week) | ||  |

**Performance** 
| Metric | Baseline | 30 Days from Launch | 60 Days from Launch | 90 Days from Launch |
| -------- | -------- | ---------- | -----------------| -----------------| 
| Average latency | 10.55s (VA.gov - Jun 10 - July 10) |  | | | 

### Retention Rates 

| Veteran Behavior | 1 Month | 2 Month | 3 Month | 4 Month| 5 Month | 6 Month |
| -------- | -------- | ---------- | ----------------- | -----------------| ----------- | --------- |


