# Veteran Status Card Product Brief: Surfacing for All Users

## Overview

The IIR team has built out the Veteran Status Card functionality in the mobile app (their product brief is [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/veteran-status/v1/veterans-status-web-product-outline.md)), and they have asked us to support a piece of this effort as outlined below.

## Problem Statement

Mobile app users do not know the Veteran Status Card exists in the mobile app if they are not eligible. How might we ensure that mobile app users are aware of the Veteran Status Card, whether or not they are eligible, while also ensuring that ineligible users know where to go for additional support?

## Desired Outcomes

* Mobile app users are presented with the Proof of Veteran Status button whether or not they are eligible for the Veteran Status Card  
* Mobile app users who are not eligible are presented with one of three new ineligibility/error messages  
* The VA Profile API is NOT removed from the mobile app and therefore additional supporting work by the IIR team is not disrupted

## Measuring Success

### Key Performance Indicators (KPIs)

Adoption is our key performance indicator. We’ll track Veteran engagement and interaction as follows:

* Total number of views of the Proof of Veteran Status Card. We expect this to increase over the baseline, which will be updated once numbers are provided by Alex, per month.   
* Views of each error message. We expect this to be a non-zero amount across all error messages and will track the number of times each error message is surfaced to determine whether additional granularity could be helpful in the future.

### Supporting OCTO OKRs:

O1: VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.

## Assumptions

* We assume all the background, research, direction etc. provided by the IIR team is accurate

## Important Notes/Decisions/Background

* In order to support the new error message functionality, the IIR team has determined that the app needs to be updated to use Lighthouse’s [Veteran Service History and Eligibility API](https://developer.va.gov/explore/api/veteran-service-history-and-eligibility) (it is currently using the VA Profile API); HOWEVER, the Profile API may be used elsewhere and should not be removed from the app   
* IIR has a desire for mobile app logging to be separate from the web logging if possible  
* Notes from IIR/MFS handoff: [here](https://github.com/department-of-veterans-affairs/va-mobile-feature-support/issues/209#issuecomment-2654834565) and [here](https://dsva.slack.com/archives/C07SD9P7XB9/p1739394087892769)  
* Monitoring for the web app is tracked in \#vet-status-card-alerts

## Solution Approach

* Back end development will need to be completed ahead of front end development, though some work can be done in tandem  
* General overview of approach: API integration \> error message surfacing \> enable for all users  
* Ticketed work: see [the epic for this work](https://github.com/department-of-veterans-affairs/va-mobile-feature-support/issues/83)
