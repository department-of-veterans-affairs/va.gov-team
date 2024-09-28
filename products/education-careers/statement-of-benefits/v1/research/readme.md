# Synthesis

# Post-911 Enrollment Status Project Brief | Unicorns

## Problem Statement

As a veteran, I need to know how much money I have to spend on education and when I need to spend it by so that I can plan for my education. 

## Roles

- Product Lead: Julie Meloni
- Tech Lead: Robbie Holmes
- Research Lead: Laura Cochran
- Notetaker: Sophia Dengo 
- Observer: Raquel Ramono

## Timeline

- Planning: May 1 to May 10
- Interviews: May 10 to May 12
- Synthesis: May 15
- Shareout: May 16

## Assumptions

- *TRUE* Veterans want to know how much of their education benefit is remaining. 
- *TRUE, but not from this page* Veterans want to apply to get this education benefit. 
- *TRUE* Veterans are looking for this information under education benefits. 
- *FALSE* Veterans visit this page at the beginning of their education to plan their education path. 
- *TRUE* Veterans revisit this page when there is a disruption in their plan. 
- *TRUE* Veterans know they are eligible for this benefit before they search for this information.

## What We Wanted to Learn

Why do veterans come to this page? 

Veterans come to this page when someone asks them to show their current eligibility information for the Post 9/11 GI Bill benefit. 

An aspirational goal for people is to be able to come to this page to see: 

- What I am getting for my benefit? How much value am I squeezing out of it?
- How am I progressing towards my goal?

- Are they coming to get proof of eligibility? 
   - Yes. Certifying Officers want to know:
      - When eligibility begins and ends. 
      - How many months of their benefit are remaining. 
      - What is their reimbursement rate?
      - When they used the benefit last. 
- Are they coming to track claims?
   - No
- How much benefit you have remaining?
   - Yes
- When you can begin using it?
   - No
- When you need to use it by?
   - Yes
- Transferring benefits?
   - Yes 
   - Add call to action to transfer remaining benefit. 

Is personal information on the page the most important information? 
   - No, but important to have it there so Certifying Officer knows the benefit is for that person.

What information is available from the API that is missing on the UI?

How much benefit do I have? How much is remaining?
   - Yes

How does a person land on this page?

Data would be much better at answering this question for us. However, for the stories we heard, people come to this page when someone asks them to show their current eligibility -- expiration date, remaining months and benefit level. 

- Do veterans typically log in, then get redirected to dashboard? Other option is the authenticated homepage. 
- Do veterans come through search?
- Do veterans use the main nav, side nav, footer?

Does a user get messages about their GI Bill status?

Vets are mailed an eligibility update once a month according to Abby. Josh is verifying this information. 

- Snail mail
- In person office visits with base education counselors
- In person office visits with Certifying Officers 

When do veterans need to submit proof of GI Bill eligibility?

Each time you enroll for a new training, or semester, you have to submit proof. 

- How do veterans get requests to prove eligibility and enrollment status? 
   - Certifying Officers request it when the student applies for benefits. 
- How do they submit proof?
   - Share letter that was mailed. 
   - Give 1990 confirmation number
   - Screenshot eBenefits status page
- Who requests proof?
   - Certifying Officers
- Do veterans print copies of screens on eBenefits?
   - Yes. Also, email.

Who is looking for GI Bill benefits?

- Veterans in transiton that need an income while they figure out what is next. 
- Veterans wanting to get trained for a job and get out. 

## Content Hierarchy

Primary users of this page need to know:

- Who is eligible
- Benefit enrollment eligibility start and end date
- Benefit Level
- Today's date so that they know when this is a snapshot of

Secondary users of this page need to know: 

- What they are getting for their benefit
- How they are progressing towards their goal


## Suggested Content

_CTA’s_

View your Post-9/11 GI Bill® education enrollment usage and your reimbursement rate.

_Post-9/11 GI Bill® Enrollment_

View your Post-9/11 GI Bill® education enrollment usage and your reimbursement rate. The information shown on this page is the same information contained in your Certificate of Eligibility (COE) letter. In lieu of a COE letter, you can print a copy of this screen for benefit and eligibility verification.


_Personal Information_

- Name
- Date of birth
- VA file number
- Regional Processing office

_Enrollment Information_ 

Eligibile to receive benefits between [Post-9/11 GI Bill Eligibility Date] and [Delimiting Date].

Benefit Level: 100%

_Enrollment History_

[First Name] has [remaining months] to use as of [today]. He has used [used months] of [entitled months].

[University Enrollment Most Recent Descending]

Enrollment history does not include flight training, on-the-job training, apprenticeship training, or correspondence training.

HARRISBURG AREA COMMUNITY COLLEGE (14925438)

Enrollment Period: 09/01/2009 - 12/01/2009  
Months Enrolled: [extract from enrollment period rounding up months] 

On Campus Courses: If true show 
Online Courses: If true show
Type of Change: If true show
Change Effective Date: If true show

This school belongs to the Yellow Ribbon GI Education Enhancement Program (Yellow Ribbon Program or YRP). The Yellow Ribbon Program allows institutions of higher learning in the United States to voluntarily enter into an annual agreement with VA to fund tuition expenses that exceed the highest public in-state undergraduate tuition rate. The institution can contribute up to 50% of those expenses and VA will match the same amount as the institution. The Yellow Ribbon Program is a provision of the Post-9/11 Veterans Educational Assistance Act of 2008. If a Yellow Ribbon appears next to the enrollment dates, your school contributed Yellow Ribbon funds for this term. See more information about the program.


## Mission: Remove Glossary

Currently Disallowed: You are not currently eligible for Post 9/11 GI Bill benefits. Additional service time could change this determination.
   - Lets create a state for when someone lands on this page and isn't eligible for the benefit. Or, can we remove the link from their profile if they are not eligible?

Delimiting Date: The end date of your eligibility period. Benefits are not payable on or after this date.
   - Change to Eligibile to receive benefits between [Post-9/11 GI Bill Eligibility Date] and [Delimiting Date].

Facility Code: A code used by VA to identify training facilities.

Residence Hours: Credit hours that are taken in residence (in a classroom).
   - Change to On campus
Distance Hours: Credit hours that are not taken in residence such as independent study or on-line courses.
   - Change to Online




