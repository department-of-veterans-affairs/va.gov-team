# Product Outline Debt Resolution- FSR 



## Overview
The Financial Status Report (FSR) is currently a paper form that  must be printed out, filled out, signed and mailed to the Debt Management Center (DMC) by the veteran in order to start the process for request for debt resolution; debt compromise, waver or monthly offsets/payments. This product will allow the Veteran to fill out the form on-line. A companion required document is a letter that the veteran is asked to write to justify why they should be granted a waiver, compromise or monthly payments.  

As we develop this product, the global covid-19 pandemic has led to a suspension of debt collection from 3/2020 to 12/2020 during which time collection of debt was put on hold by the DMC, while historical data can be used as a guide, such widespread suspension makes it difficult to model the impact and associated  KPIs.

## Problem Statement
If a Veteran has debt with the VA that they cannot pay, they can ask for debt resolution which can be debt waver, compromise or a monthly offset/payment they can afford.  The gatekeeper to start the debt resolution process is filling out and mailing or faxing in the FSR. The form is very confusing and while there is a how to guide for filling it out on va.gov/debtman, it is no less confusing. The process of printing, filling out and mailing/faxing in FSR form prevents Veterans from starting the process to resolving debts, which potentially leads to devastating benefits deductions and debt getting written off ruining credit. In addition to the FSR, the Veteran must write a letter explaining why they should be granted a waver, compromise or monthly payment plan which can be confusing and overwhelming, there are currently no guidelines or help as to what the letter must contain, or examples given. 

Since the form and letter are confusing, the contact center gets many calls with questions about the FSR which increases volume and wait times. We have found out from research that many times the DMC is unable to assist the Veteran with the FSR and they get referred to local VSOs for assistance. Many times the FSR is sent back and forth my mail because there is omitted information and fields. 
## Desired User Outcomes

- Allow the Veteran to fill out the form on-line 
- Provide helpful, contextual help to the veteran to assist in filling out the form
- Allow the Veteran to write a justification letter on-line to submit along with FSR and provide contextual assistance to include relevant information. 
- Reduce the volume to returned forms for incomplete data, miscalculations and omissions by utilizing field validation and auto-calculated fields. 


## Undesired User Outcomes

 - Veterans not being able to fill out form online as tracked by abandon rates. 
 - Not providing enough helpful content at every step to where the veteran still has to call contact center. 
 - Allow disabled veterans to fill out form by having full 508 compliance - currently it is a paper form and the only way a veteran can fill it out is to visit VSO or have caregiver assistance. 

## Desired Business Outcomes

- Increase the number of Veterans that start resolution process, so less debt is written off.
- Decrease the times a form is returned to veteran for omissions and errors. 
- Decrease calls to contact center asking for help filling out FSR

## Undesired Business Outcomes

 - None identified

---
## Measuring Success

### Key Performance Indicators (KPIs)

-20% of FSRs filled out on line in first month with 5% MoM inclease 

-10% QoQ in bad addresses (letters returned) 

-<15% abandon rate from start of form, but track 48 hours after form start since there is save in progress option

-Track how long it takes to complete the form and where Veterans abandon 

-Would like to measure how many FSR forms are returned for corrections - will need DMC tracking on this 
#### Baseline KPI Values
 Since the suspension of debt collection for covid-19 global pandemic the historical baseline values may be skewed as the debt suspension for the pandemic. 

-**FSR requests** per month -3100 per month (at a minimum)

-**Compromise requests** and approval ratio -Compromises: 122 average per month -Approval: 29%

-**Waiver requests** and approval ratio -3800 per month received-2500 per month granted-65% granted

-**What % of our addresses are correct?** -Bad address mail – 10,409 average per month

-**How many addresses changes do we get a month?** -3,896 average per month

### Objectives and Key results (OKRs)


- Objective: Make it easy and intuitive for Veterans to fill out FSR on-line increasing the number of veterans that pursue resolutions. If a veteran takes the step to resolve debt, the debt will not be written off or they will not have offsets that are devastating to surviving
  - Key result: Increase in FSRs being filled out and Veterans funneled into resolution flow 
  - Key result: Decrease in calls to contact center asking for assistance in filling out form 


---

## Assumptions
- At this time, we do not know how (or if)  the paper forms are processed, if they are entered into any BE system and how they trigger a backend process - this will be part of discovery and iterative approach to implement the solution. 
- We do not know if filled out form is stored in vbms or other system of record. 
- The Veteran contact information will be pre-filled either using the vets API or the DMC contact DB - potentially, a combination of the two if the file number comes form DMC and contact information from vets API, this will be decided in discovery 

## Solution Approach

- It is clear that the form needs to be available on-line as printing out, faxing or mailing puts much undue hardship on the Veteran. See Assumptions above- at this time there are unknowns, that will will be topic of discovery. 

--- 

## Go-to-market Strategy
- DMC will handle all the press releases, social media etc. 

## Launch Dates
- *Target Launch Date*
  - Q1 2021
- *Actual Launch Date* 
  - tbd
- *Number of FSRs filled out online, reduction in calls to contact center requesting help to fill out 
  - 
---

## Solution Narrative

### Current Status

### Key Decisions

---
   
## Screenshots

### Before

### After

---

#### Communications


## Implementation Team Benefits and Memorials Two (BAM2)

***Team Slack Channel***-------    [**vsa-bam-2**](https://dsva.slack.com/archives/CPE4AJ6Q0)
***Github Label***----------------[**Benefits and Memorials 2**](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/board?labels=vsa-benefits-2&notFullScreen=false&repos=133843125&showPipelineDescriptions=false)

**

## Meet the BAM2 Team



||Name|Role|eMail | Github
---|----|----|----|---|
![enter image description here](https://ca.slack-edge.com/T03FECE8V-U8QNXN7JP-44773900c8df-512)|Matthew Self| DSVA Lead| matthew.self2@va.gov|@mattpointzxer0 
![enter image description here](https://ca.slack-edge.com/T03FECE8V-UTP7S3UNM-ad2a095e6f0e-512)|Leah Keeler | Product Manager|lkeeler@governmentcio.com|@leahkeeler
![enter image description here](https://ca.slack-edge.com/T03FECE8V-UMFKNV6B1-5b245744a40d-512)|Cameron Testerman | BE Engineer|cameron@oddball.io|@camerontesterman 
[Brad is camera shy](https://ca.slack-edge.com/T03FECE8V-UP88PJRSN-g88ef24acb45-512)|Brad Conley | FE Engineer|bconley@governmentcio.com|@bradl3yC 
|![enter image description here](https://ca.slack-edge.com/THYGV9KQU-U014M3QCSAE-37980e85b5b2-512)|Craig Wheeler | FE Engineer|[cwheeler@governmentcio.com](mailto:cwheeler@governmentcio.com)|@craigwheeler
![enter image description here](https://ca.slack-edge.com/T025UGMV9-UMBESQFGV-3161a56f1374-512)|Riley Orr | Designer|riley@amida.com|@rileyorr 
![enter image description here](https://ca.slack-edge.com/T025UGMV9-UP59LSZE0-f471c711fc47-512)|Becca Walsh | Designer|rebecca.walsh@adhocteam.us|@rebeccawalsh 

We follow a 2 week SCRUM development cycle 

2020 Calendar: 

| Sprint  | Date  |
|--|--|
|27|  7/29-8/11|
|28|8/12-8/25|
|29|8/26-9/8|
|30|9/9-9/22|
|31|9/23-10/6|
|32|10/7-10/20|
|33|10/21-11/3|
|34|11/4-11/17|
|35|11/18-12/1|
|36|12/2-12/15|
|37|12/16-12/29|

**SCRUM Ceremonies** 
|Ceremony   |Day  |   Time|
|--|--|--|
| Daily Stand-up |M-F  |10:00am CT
|Backlog Grooming|Wednesdays mid-sprint|1:00pm CT|--|
|Sprint Planning|Wednesday start of sprint|12:30pm CT|
|Sprint Retro|Wednesday start of sprint|10:15am CT|--|




