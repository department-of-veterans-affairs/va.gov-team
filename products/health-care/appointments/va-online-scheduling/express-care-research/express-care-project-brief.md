# Express Care project brief

## Overview: 
VA devloped Express Care to enable virtual access between Veteran patients and their medical providers ("PACTs"). However, Express Care as a service is not utilized by providers or patients and research needs to be conducted to better understand why and how the VA can improve this service, especially during a time when a Veteran may need medical attention, but be seen at a physical location.

The problem we are focused on is: understanding when, why, and how a Veteran seeks care that they deem "urgent", "immediate", and "now" through VA digital channels. We specifically want to understand:
 + when do Veterans seek "urgent" "immediate" "same day" care
 + what types of care do Veterans seek "urgent" "immediate" "same day" care / how do they define same day care
 + would Veterans use an online method for receiving same day care / do Veterans know what services are available to them for same day care through VA

## Problem Statement:
Veterans have medical needs that may either be resolved without an in-person appointment and/or want guidance about how seek additional care for a medical concern, yet may not demand a trip to the ER. For various reasons, the Veteran may not be able to go into a physical location for this care. In both cases, however, the Veteran needs to talk to a medical professional *today*.

Currently, "Express Care" is a care option developed by VA for immediate, same day evaluation via VA Video Connect (VA's proprietary telehealth platform). However, Express Care is not utilized by VA providers or patients and we believe the business rules in place prevent this platform from being a preferred option by providers and patients, alike.

This problem may also be a subset to a larger problem statement - Veterans have access to various types of care which can make it difficult to understand what kind of care to access and how to access it. This is especially true when considering the different VA digital access points to accessing care.

Additionally, with the recent outbreak of the COVID-19 pandemic, there is an urgent need to give Veterans fast, safe access to care and evaluation via telehealth either as an alternative to in office, face-to-face visits. The VAOS team believes Express Care can serve as a tool to facilitate immediate access to remote medical care as well as provide VA providers a remote mechanism for screening patients who suspect they have COVID-19.

## Goal:
We want to perform usability research with Veterans to learn more about:
 + Veterans undertanding of what appointment types are available to them through VA, specifically for telemedicine and same-day appointments
  + how might Veterans seek same-day care (either through VA or other sources)
  + how might Veterans go about receiving immediate care at the VA, with emphasis on understanding use of 'telehealth' or online care options. 

## Current Hypothesis:
We believe there are two major hinderances to Express Care as a service for urgent/same-day appointments for Veteran patients:
 + Veterans only have access to Express Care if and when their PACT enables Express Care. Express Care is only an option if and *only if* their PACT enables Express Care *and* makes availability during normal business hours. As a result, Veterans are unaware of Express Care as an option for scheduling an appointment, due to unavailability from providers.
 + Veterans don't think to make an Express Care appointment the same way as other types of VA appointments because of the timeliness of the appointment.
 
For the purpose of this usability research, we aim to focus largely on solving for when Veterans would make and Express Care appointment and how they would do so. 

We believe the existing option for same day care, "Express Care" online, is overlooked by VA patients as an option for recieving care because of how appointment scheduling online is facilitated through VA Online Schedule. Due to the nature of Express Care being urgent online consultation/care is same day and not future facing like VA Online Scheduling, it needs to exist outside of the VAOS ecosystem. 

For example, the flow could be surfaced/launched from our VAOS "view your appointments" landing page, but there may be a better entry point. What might that entry point be?

## Research Questions:
 + _Add questions here to supplement Research Plan_
 + How do Veterans define Express Care (could this type of care be considered within a 24-hour period or must it be same day?)
 + Why/when do Veterans seek out telehealth or telemedicine appointments? 
 + What types of appointments do Veterans consider using telehealth appointments for? 
 + Where would Veterans look to schedule/access this type of same day care (phrasing: How would you make a telehealth appointment? To be seen the same day?)
 + Are Veterans willing/able to use online methods for same day care
 + What devices/platforms do you have access to? Are you familiar with or do you currently use any video conferencing apps? If so, which ones? Are you familiar with any from VA?
 + What type of devices/platforms have Veterans used to receive similar type of access (if at all?)
 + Where can we contextually redirect Veterans to appropriate access points based on need (e.g., if immediate need vs future facing need such as scheduled appointment)
 + What (if any) of the existing digital tools would a Veteran assume they'd use to receive immediate, same day digital care?
 + Is "same-day" care the same thing as scheduling an appointment? If not, how is this different?
 + Have you ever made a same-day appointment
 + Explain your current process for getting a same-day appointment
 + What is the latest time of day a Veteran should be able to get "same-day" care? // *I think this is a business question as written, but we should ask Veterans about when they expect they should be seen for same day visits*
 + We do not want to show express care/same day options to Veterans who do not have access to it. Right now there are a lot of rules around who can use existing "express care." Technical research - are there ways to conditionally show this potential care option to Veterans who are eligible to access it? // *we could either show a bare bones wireframe or have them walk us through their experience currently: "Show us how you would make this appointment..."


*******
## Appendix
  
### Related research documentation
+ [Urgent Care Usability Study (2019)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/community-care/urgent-care/research/jun-2019/findings.md) - specific to urgent care benefit eligibility and finding urgent care facilities covered under VA benefits
   + [Usability Testing Notes via Mural](https://app.mural.co/t/adhocvetsgov9623/m/adhocvetsgov9623/1560946920965/4bb321f266f232e3e1d91559b168a0f3c11fe84f)
+ [Facility locator research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/research/user-research/urgent-care/research-plan.md)
+ [Facility locator research findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/research/user-research/urgent-care/research-findings.md) 
+ [VAOS research findings for VA and community care requests](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/research/sept19-usability-testing-new-ux/request_usability/requesting%20research%20documentation%20.pdf)
 + [Get Care Research (Fall 2019)](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/patient-portal/get-care) -- Has some overlap with the broader question her of 'care access and digital tools.' They dabbled a bit in talking online health/telehealth.
 
 ### Related Background Information
 + Current Veteran Care Access points/ecosystem:
  + VA Mobile Apps
       + VA Health Chat
  + MyHealtheVet (MHV) -- _Veterans comfortable using this digital place for all health related needs_
   + Secure Messaging
     + Secure messaging currently used to accomplish wide variety of tasks
     + High % of Veterans use Secure Message (need to get exact numbers)
    + Legacy VAOS (for now)
  + VA.gov
    + VAOS-R (new VA Online Scheduling on VA.gov)
  + VA Facility Locator
  + Telehealth
    + CVT
    + VVC (VA Video Connect) -- current focus Primary Care & Mental Health
      + Current initiative to increase VVC by providers for PC and MH care capable
 + Notes from Get Care research:
   + Veterans prefer face to face interactions
   + Veterans are not aware of online services
   + Veterans trust online services promoted/used by their primarcy care provider, however, there was expressed hesitancy associated with new technology. Veterans expressed first interaction with tech key and Veteran willingness to try if it can help their provider. 
  + Veterans are calling for items that could be handled online
  + Missed appointments high
  + High call volumes at call centers
  + High appointment request volume
  + Multiple tools exist to accomplish same tasks
  + Some VHA resources are _overutilized_ (e.g. call center volume)
