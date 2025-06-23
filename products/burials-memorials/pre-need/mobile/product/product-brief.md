# Pre-Need Burial Product Brief

## Overview

Veterans and their family members who want to be buried in a VA national cemetery (excluding Arlington National Cemetery or the United States Soldiers and Airmen’s Home National Center) can complete VA Form 40-10007 within the authenticated section of VA.gov to see if they are eligible. The VA Form 40-10007 is to be completed before the time of need and is a way for Veterans and their families to plan their burial.

According to the VA.gov website, VA Form 40-10007 has a respondent burden of 20 minutes and requires Veterans to provide the following information: 

* Personal information (Social Security number, date and place of birth)  
* Military history (Service dates, discharge papers)  
* The name of the VA national cemetery

Eligibility decisions are sent via mail or phone and no digital versions are accessible in Veterans’ accounts. 

## Problem Statement

Veterans engaging with form 40-10007 do not have a way to find, track, and get statuses in the mobile app, forcing them to use VA.gov to access this information. How might we be able to provide Veterans with more information and transparency about pre-need burial and a Veteran’s eligibility status within the mobile app?

## Bets to be Informed by Research

* Many Veterans will not have heard of the pre-need burial benefit.  
* Filling out the pre-need burial form will be too cumbersome for the app because of the paperwork that needs to be uploaded.   
* Veterans will want to see updates of the application status in the app.  
* Veterans will want to have decision letters available within their VA.gov account instead of relying on physical letters to keep track of.  
* Veterans will want to be able to share the decision letter with those that will assist in planning their burials. 


### Supporting OCTO OKRs:

O1: VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.


## Questions

* Is the [Veteran experience](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/PreNeed%20Burial%20Claim/PreNeedBurialClaim.md#veteran-experience) outlined in the 2023 documentation still the same today?  
* There are a number of MVP ideas and assumptions in the 2023 brief \- are these still accurate? (ex. Not building the ability to submit via mobile)

## Important Notes/Decisions/Background

* Pre-need burial work came to the MFS team by way of a startup conversation between Jeff Barnes and Rachel Han in October 2024\.  
* There is no specific initiative or timeframe for this work.  
* The original core mobile product brief from September 2023 is [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/PreNeed%20Burial%20Claim/PreNeedBurialClaim.md)  
* In June 2017, VA launched VA form-40-10007 (Application for Pre-need Determination of Eligibility for Burial in a VA National Cemetery) on Vets.gov, later VA.gov, which allows Veterans to discover, apply for, track, and manage this claim.  
* As of 2023, focus had only been on maintaining this feature, with no planned work scheduled. However the expectation at the time was that a new team would spin up with a focus on all Burial products.  
* Pre-need decision letters are not needed for service members on active duty.  
* Pre-need Burial does not appear in the Claims Status Tool, as these are not claims.  
* [Pre-Need Burial on VA.gov](https://www.va.gov/burials-memorials/pre-need-eligibility/)  
* [Burials/Memorials Repo](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/burials-memorials)  
* [Form 40-10007](https://www.va.gov/find-forms/about-form-40-10007/#:~:text=Use%20VA%20Form%2040%2D10007,a%20Veteran%20or%20service%20member.)  
* [March 2023 Analytics](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/burials-memorials/pre-need/discovery/Pre-Need_Analytics_Mar2023.pdf)  
* [February 2025 Research Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/burials-memorials/pre-need/mobile/research/2025-03_research-plan.md)  
* Significant work was done in this in the past (see links in old MFS product brief) but it’s old (ex. [this from 2017](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/burials-memorials/pre-need/jun-2017-mvp/vets.gov-pre-need-burial-charter-6.23.17.pdf)) and seems to be focused on web, not mobile  
* Looks like there’s a more recent product outline from a newer team [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/burials-memorials/pre-need/README-2023.md#user-problem-statement) (last updated Jan 2025\)

## Research Outcomes and Recommendations

The research outcomes were posted in OCTO Slack on May 5th, 2025 are linked below: 
* [Research report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/burials-memorials/pre-need/mobile/research/research-report.md): This provides details of the research goals, background, methodology, key findings, and recommendations. 
* [Slides](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/burials-memorials/pre-need/mobile/research/pre-need-findings.pdf): This is a presentation of the research report.  

The recommendations that were discovered during research for the mobile app include:
* Provide a timeline for the process of pre-need eligibility determination
* Add status updates to My VA and the app
* Add decision letter to MY VA and the app
* Provide a method for family members and other designated people of Veterans to access their pre-need eligibility decision. Possibly allow Next of Kin to be added?

## Technical Limitations

Currently, the only feasible mobile app functionality is the submission of pre-need eligibility forms. No development is planned for the service that provides pre-need burial data, as that system (EOAS) is being phased out. EOAS is expected to be replaced later this year by CaMEO, a Salesforce-based service. Once CaMEO is in place, we can reassess which APIs will be available for further development.

