# Original Claims 21-526EZ Fast Tracker Initiative

## The Problem
The disability claim adjudication process is a lenghty one, averaging 120 days or more. Because there are some conditions that don't require the same level of examination, those conditions should be able to be processed faster.


### User Goals
Allow Veteran hypertension disability claims to be flagged and routed to another team for faster processing.  

### Business Goals
  - Reduced the time it takes to process single-issue claims. Piloting hypertension claims since they do not require additional evidence.

## Assumptions
Our most basic assumptions around the direction of this product feature are:

- Our first-layer API partners (EVSS, BGS) can accept the hypertension flash
- VA will be able to provide resources to manage uptick in submissions
- Veterans are used to using tracker and status tools with significantly more information than the current tool
- The main issues for veterans will be detailed status and some sort of timeframe for their claim/appeal adjudication

## Questions
1. Develop within VA.gov or separate implementation?      

## Solution Approach
Our focus will be to incrememntally update the application (not just low hanging bug fixes) and essentially version the CST. This is more in line with true "agile" development and we believe it will solve a number of potential hurdles. First, we will be able to more easily abosrbe the NCC requests. Trying to work on a new version of the application while also making updates to the existing one is not a smooth overlap of work. Second, we believe this approach will avoid the large "waterfall" effect of design/research leading into the implementation (development) acitivies.

### Expected Work
Develop a Sidekiq (background job) that runs when a Veteran submits a single-issue claim for hypertension.

The fast track team talked about making an API in aws lambda that got hypertension info from lighthouse and put it in a pdf that was uploaded to VBMS. The api would take a veteran's ICN. I wondered if it might be just as easy to keep the whole thing in vets-api because we already have a pdf-maker (prawn) and established code to upload files to VBMS through EVSS.


## Value Propositions
- 

## OKRs and KPIs
- number of hypertension submissions received
- reduction in claims processing time

