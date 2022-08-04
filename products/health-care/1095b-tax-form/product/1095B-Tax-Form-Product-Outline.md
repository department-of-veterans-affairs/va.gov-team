# 1095-B Tax Form Product Outline


## Overview

IRS form 1095-B reports the months a person had qualifying minimum essential health coverage to the IRS. VA sends this form to Veterans to show what months they were covered under the VA healthcare system. 

In most cases, it is simply a form for one's records. However, some states still have an individual coverage mandate, and in those states, the form is necessary for filing taxes. The form is not required by the IRS, but it is required to be sent by health care providers as of 2019.


## Problem Statement

Currently, the IRS form 1095-B is mailed to Veterans and dependents who receive health care through VA. Sending it by mail costs VA approximately $1.5M/year, and an additional $400,000/year to print and send corrected forms. 

Since the form isn't available online, if a Veteran or dependent were to lose the form, they have no easy way to get an immediate replacement. If they need to change an address or other information on the form, they currently need to wait to have it printed and mailed out to them. 

- How might we make the digital 1095-B  form easily accessible to Veterans?
- How might we provide Veterans a clear resolution path if there's an error on the form?
- How might we let Veterans choose to only receive a digital version of the form?


## Desired User Outcomes

As a Veteran or dependent with health care, I:

- Can easily access my 1095-B form while logged into my VA.gov account
- Know how to address an error on the form



## Desired Business Outcomes

- Users who need changes receive a corrected 1095-B faster
- Decreased costs of printing and sending physical mail

* * *


## Measuring success

**Measuring business success**

- The expense of sending the forms decreases
- The amount of calls to the call center about the form decreases

**Analytics: Finding the form**

- Number of users who find the page through online search (like Google)
- Number of users who search for the form on VA.gov
- Track the navigation from entering VA.gov to getting to the 1095-B page

**Analytics: Accessing the form**

- Page views
- % of users who land on the page and download the form
- Number (or percentage) of users who download the text form vs the PDF

* * *


## Assumptions

- Users who need a screen-readable version of the form, will know to use the text version
- Veterans and dependents will download the corrected form if they need changes
- Veterans will access the digital version of 1095-B


## Solution Approach

_What are you going to build now, and why have you decided to start there?_

We’re making the 1095-B form available digitally for the first time through the VA. It will be available on VA.gov. There will be two formats of the form:

- A PDF version for printability and familiarity
- A text version for assisted reading devices

Because the PDF version comes from the IRS, it has proved impossible to make it accessible (hence the text version). 

We’ve started here because we have to first make the form available digitally, before we can encourage Veterans and dependents to opt-in to paperless delivery (saving VA mailing costs). 

_Why this solution / approach over other solutions / approaches?_

There are no other approaches to providing the form in a digital format.

_What have you explicitly decided to not include in this initial set of functionality, and why?_

We’re making the form available online first, before building out opt-in to paperless delivery functionality. This allows us to test the form generation, availability and landing page. Opting-in to paperless delivery requires the form to work correctly first. 

_How will the solution / approach evolve after this initial build (knowing that this will likely change as you learn from users along the way)?_

- Making the 1095-B form available digitally will not change. 
- We’ll fast follow this MVP with adding a feature toggle. We don’t need it for the initial testing, but anticipate needing it later. 
- We know from usability testing that most Veterans and dependents like the availability of paperless delivery.  The opt-in to paperless delivery design and development is underway. That’ll be the next iteration of this product. 
- We’re planning on launching in ‘dark mode’ which  mean the 1095-B page will not be linked to from anywhere on VA.gov. Once paperless delivery is enabled, there will be the ability to navigate to the 1095-B page through the Records hub. 
- Eventually, tax forms are usually available for multiple previous years at a time.

**Go-to-market Strategy**

Currently, there is no go-to-market strategy recommended until the next iteration where we’ll have the ability to opt-in to paperless delivery. However, customer service representatives will direct Veterans and dependents to download corrected forms using this product. 


## Launch Dates

- _Target Launch Date_

  - August 22nd, 2022

- _What date will you evaluate impact after launch (and when do you expect to have your Impact Review)?_

  - The 1095-B isn’t required until tax season. We’ll have to evaluate the impact of having the form available online after April 18th 2023. 

* * *


## Handoff

- When the following year's 1095-B tax form is available, the 1095-B owner will need to ensure they're using the IRS blank 1095-B pdf and text version for the current tax year. The new PDF and text version should be added to the code once the form is available.

* * *


#### Communications

- Team Name: MOVE
- GitHub Label: 1095b-Tax-Form
- Slack channel: #cedar-1095b
- Product POCs: Tracey Mulrooney (VA), Jeanette Cantrell (MOVE),  Munish Sikka (MOVE), Tamera (Tami) Corson (MOVE)
- Stakeholders: Tarsha Tremble (Business owner/HEC)

* * *


#### Team Members

- DEPO Lead: Tracey Mulrooney
- PM: Munish Sikka, Jeanette Cantrell, Tamera (Tami) Corson (MOVE)
- Engineering: Shashank Khandelwal / Teagan Stephenson / Dan Smith
- Research/Design: Thomas McCue / Carolyn Williams / Carl Dickerson (content)

* * *


#### Stakeholders

- Tarsha Tremble, Health Enrollment Center (HEC)

