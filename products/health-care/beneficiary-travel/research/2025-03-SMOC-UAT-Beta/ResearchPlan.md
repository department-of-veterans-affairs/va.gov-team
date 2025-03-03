## **SMOC UAT Beta**


## **Background**

The goal of the Beneficiary Travel Pay team is to empower users to do more with their travel reimbursement claims on VA.gov.  This step is to allow users to submit for simple mileage only claims on VA.gov.  This user acceptance test will ensure that the build functions as designed in key scenarios and allow the team to address any issues prior to rolling out further.  

[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/5ce919720bf75d41c4a62aa1e4f86ecf2cd991d5/products/veteran-status/product.md).


### **OCTO Priorities**

Objective 1: Our digital experiences are the best way to access VA health care and benefits.
* Key Result 1: CSAT for our web products have increased by 5 points.
* Key Result 3: All new products have a faster transaction time than those they replaced.


### **Veteran Journey**

1. Starting up
2. Taking care of myself
3. Putting down roots
4. Retiring


## **Research Goals**

Test that the build functions as designed for the following scenarios on VA.gov.  As we go through these scenarios, we will work with our engineering team to document what failures in the API transfer we run into so as to ensure that we have 

1. Entry points: Can users - new or established claimants - find where to submit for a simple mileage-only claim on VA.gov? Can participants identify what 
    appointments are eligible for travel reimbursement?

2. New claimant submits (starts and completes) a simple mileage-only claim for a past VA appointment

3. Established claimant submits (starts and completes) a simple mileage-only claim for a past VA appointment

4. Claimant (new or established) starts claim submission on VA.gov but fails to meet criteria for adjudication on VA.gov (e.g., the claimant wants to 
   submit a claim that includes receipts and so answers ‘no’ to one of the 3 qualifying questions) and the claimant is successfully redirected to BTSSS

5. Established claimant confirms that they have already submitted a claim for a past VA appointment 


### **Outcome**

Confirm that the SMOC build functions as designed.  Allow the team to document any errors in implementation.  


### **Research questions**



1. Does what users expect to be able to do related to submitting for Travel Pay on VA.gov match what they are able to do once on VA.gov?
2. Do participants find the entry point to submission from past Appointments?
3. Do participants understand that they can only submit for simple mileage reimbursement on VA.gov?

    a. Does being redirected to a second system (BTSSS) confuse participants?
   
    b. When participants are redirected to BTSSS, do they understand why they are being redirected?
   
4. Do participants know if, when, and where to submit their complex claims?

   a. Do participants know how to go to BTSSS? 

   b. Do participants recognize that they are being redirected to BTSSS?
   
6. Are participants accurately re-directed if they are trying to submit a complex claim?
7. Are participants able to complete a simple mileage-only claim submission if applicable?
8. Can participants differentiate between starting a claim and confirming that a claim has already been submitted? 


## **Methodology**

60 minute interviews using the live website with key functionality behind the feature flag.   Recruit 20 Veterans for **12 completed sessions**.


### **Location**

Zoom


### **Research materials**

[Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/research/2025-03-SMOC-UAT-Beta/ConversationGuide.md)

[Use feature flag on live VA.gov website](https://www.va.gov/)


## **Recruitment**


### **Recruitment approach**

12 completed sessions required.  Recruit 20 Veterans using Perigean recruiting services and the Perigean participant pool.  We will have a kickoff call with Perigean the week of **Monday, 3/3/25** and aim to start testing the week of **Monday, 3/17/25.** We will work with VTP and Perigean to begin the process of setting up a separate database of participants who come in through Travel Pay VSOs that can be used going forward.  The logistics of this will be addressed in the kickoff call with Perigean. 

We will partner with Perigean to recruit Veterans. We request a 30 minute kickoff meeting with Perigean to align on what is needed and desired from the sample. Availability for potential kickoff meeting times with Perigean, depending on their availability is below.  Additional times can be made available based on Perigean's schedule.  

Thursday, 3/6 1:30pm EST

Thursday, 3/6 4pm EST

Friday, 3/7 11:30am EST



### Recruitment criteria

*Primary criteria (must-haves)*



* All have VA health care as a benefit
* All must have traveled for a medical appointment at least once in the past year
* All participants must have had a VA medical appointment within the 30 days prior to their interview session 
* 5 must be new claimant with a complex claim for an appointment dated 2/22/25 - 3/24/25 that has not yet been submitted
* 5 must be new claimant with a simple mileage only claim for an appointment dated 2/22/25 - 3/24/25 that has not yet been submitted
* 5 must be established claimant with simple mileage only claim for an appointment dated 2/22/25 - 3/24/25 that has not yet been submitted
* 4 must be established claimant with a complex claim for an appointment dated 2/22/25 - 3/24/25 that has not yet been submitted
* 1 must be an established claimant with a recently submitted claim
  

*Secondary criteria (nice-to-haves)*


* 10 of 20 participants are aged 55 years or older 
* 10 of 20 participants live in a rural area
* 5 of 20 participants are women
* 5 of 20 participants have a high school diploma as their highest level of education
* 5 of 20 participants have no degree 


### Screener



1. Have you traveled for a medical appointment at a VA facility (VA Medical Center or VA Outpatient Clinic) at least one or more times in the last 6 months?
    * Yes, within the past 6 months
    * No, longer than 6 months ago [does not meet criteria for study)
      
2. Have you **ever** filed for travel reimbursement for your VA facility (VA Medical Center or VA Outpatient Clinic) or authorized care in the community medical appointments? You could have filed in paper, using an onsite kiosk, on your mobile phone at Check-in, or using the Beneficiary Travel Self-Service System website (BTSSS).
    * Yes, I have filed for travel reimbursement [meets established claimant criteria]
    * No, I have never filed for travel reimbursement [meets new claimant criteria]

3. Did you complete or do you intend to complete a medical appointment at a VA Medical Center or VA Outpatient Clinic between the dates of Saturday, 2/22/25 - Monday, 3/24/25?
    * Yes, I have already completed the appointment
    * Yes, I have an appointment upcoming within those dates that I intend to complete
    * No [not eligible for study]
      
4. Have you filed for travel reimbursement for your medical appointment at a VA Medical Center or VA Outpatient Clinic between the dates of Saturday, 2/22/25 - Monday, 3/24/25 ?
    * Yes [meets criteria for confirm submission] 
    * No, the appointment has happened but I have not submitted for travel reimbursement [meets criteria]
    * No, I have not submitted for travel reimbursement as the appointment has not yet happened [meets criteria]
      
5.  What was the date of your last medical appointment at a VA Medical Center or VA Outpatient Clinic?
   Open end

6. Considering your most recent trip to a VA Medical Center or VA Outpatient Clinic for a medical appointment, which of the following, if any, would you file for? Select all that apply.
    * Reimbursement **only** for gas mileage from my house to the clinic [meets criteria for simple mileage only claimant]
    * **In addition to other costs**, reimbursement for gas mileage from my house to the clinic [meets criteria for complex claimant]
    * Reimbursement for tolls or parking I had to use to get to the clinic [meets criteria for complex claimant]
    * Reimbursement for a hotel accommodation used for my appointment [meets criteria for complex claimant]
    * Reimbursement for public transportation or taxi [meets criteria for complex claimant]
    * None [not eligible for study] 

## **Timeline**


### **Prepare**



* Pilot participant email: TBD
* Date and time of pilot session: TBD 


### **Research sessions**



* Planned dates of research: Tuesday 3/18 - Thursday 3/27


### **Length of sessions**



* Session length: 60 min
* Buffer time between sessions: 30 minutes 
* Maximum Sessions per day: 5

**Availability**

**Tuesday, 3/18**

10am EST - 11am EST

11:30am EST - 12:30 pm EST

1pm EST - 2pm EST

2:30pm EST - 3:30 pm EST 

4pm EST - 5pm EST 

**Wednesday, 3/19**

10am EST - 11am EST

11:30am EST - 12:30 pm EST

1pm EST - 2pm EST

2:30pm EST - 3:30 pm EST 

4pm EST - 5pm EST 

**Thursday, 3/20**

10am EST - 11am EST

11:30am EST - 12:30 pm EST

1pm EST - 2pm EST

2:30pm EST - 3:30 pm EST 

4pm EST - 5pm EST 

**Friday, 3/21**

10am EST - 11am EST

11:30am EST - 12:30 pm EST

1pm EST - 2pm EST

2:30pm EST - 3:30 pm EST 

4pm EST - 5pm EST 

**Monday, 3/24**

10am EST - 11am EST

11:30am EST - 12:30 pm EST

1pm EST - 2pm EST

2:30pm EST - 3:30 pm EST 

4pm EST - 5pm EST 

**Tuesday, 3/25**

10am EST - 11am EST

11:30am EST - 12:30 pm EST

1pm EST - 2pm EST

2:30pm EST - 3:30 pm EST 

4pm EST - 5pm EST 

**Wednesday, 3/26**

10am EST - 11am EST

11:30am EST - 12:30 pm EST

1pm EST - 2pm EST

2:30pm EST - 3:30 pm EST 

4pm EST - 5pm EST 

**Thursday, 3/27**

10am EST - 11am EST

11:30am EST - 12:30 pm EST

1pm EST - 2pm EST

2:30pm EST - 3:30 pm EST 

4pm EST - 5pm EST 


## **Team Roles**



* Moderator: Cara Frissell, Micah Taylor
* Research guide writing and task development: Cara Frissell
* Participant recruiting & screening: Perigean
* Project point of contact: Cara Frissell
* Participant(s) for pilot test: TBD
* Accessibility specialist (for sessions where support for assistive technology may be needed): n/a
* Note-takers: Micah Taylor, Cara Frissell 
* Observers: At least 1 engineer
