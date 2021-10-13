# Original Claims 21-526EZ Fast Tracker Initiative

## The Problem
The disability claim adjudication process is a lenghty one, averaging 120 days or more. Because there are some conditions that don't require the same level of examination, those conditions should be able to be processed faster.


### History
Originally this applciation was on eBenefits. The VA.gov version addressed the primary deficiencies where status could move back and forth and never offer the veteran a view into the "development" stage for a claims adjudicator. 

### User Goals
Allow Veteran hypertension disability claims to be flagged and routed to another team for faster processing.  

### Business Goals
  - Reduced time to process hypertension claims         .

## Assumptions
Our most basic assumptions around the direction of this product feature are:

- Our first-layer API partners (EVSS, BGS) can accept the hypertension flash
- VA will be able to provide resources to manage uptick in submissions
- Veterans are used to using tracker and status tools with significantly more information than the current tool
- The main issues for veterans will be detailed status and some sort of timeframe for their claim/appeal adjudication

## Questions
       

## Solution Approach
We originally went with a greenfield approach and were working towards a new MVP of the Claims Status Tool.  However, as we began to engage with the product and began receiving requests from NCC and others for fixes, we realized it would be more fruitful to work towards some low hanging fixes to the existing application before we worked on the new MVP. Finally, this has evolved to the current approach which will be laid out below.

Our focus will be to incrememntally update the application (not just low hanging bug fixes) and essentially version the CST. This is more in line with true "agile" development and we believe it will solve a number of potential hurdles. First, we will be able to more easily abosrbe the NCC requests. Trying to work on a new version of the application while also making updates to the existing one is not a smooth overlap of work. Second, we believe this approach will avoid the large "waterfall" effect of design/research leading into the implementation (development) acitivies.

### Expected Work
Initial code already developed

#### 1. Adding improved messaging around status
- Discovery
  - This is not a deeper integration with VBMS for more status data.  This is providing some improved wording when (as an example) the status reverts back to a previous state. Some additional information can likely reduce confusion and the need to seek call center support.
  - Find out if there is anything else in the metadata coming back from the currrent endpoints
  - The above said another way, document the current endpoints
  - Determine what types of things should trigger improved wording or additional information for the veteran
- Include USABILITY testing
  - Basic usability to make sure the wording updates make sense in the scenarios we identified and updated
- Includes UI design as well
  - Hi-fi designs

#### 2. Adding better features around document viewing/downloading 
- Discovery
  - Chat with Ebenefits team (Jason Wolf) and connect with the right person in ebenefits platform to determine tech feasibility
  - Find out where data comes from
  - Engage the devs to ping that data on BE (they will be very very happy!)
- Include USABILITY testing
- Previous research review (‘my documents’ initiative by BaM2, co-design session, general CST research)
- Includes UI design as well
  - Hi-fi designs




## Value Propositions


## OKRs and KPIs
- # submissions
- reduction in claims processing time

