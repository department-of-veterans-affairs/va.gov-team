# Expected User Load: VA.gov Travel Pay Status Page
## Approximate Travel Pay Status Page User Load
- Low User Load per hour: 1000
- Medium User Load per hour: 4000
- High User Load per hour: 7000

Our phased rollout plan for these adjustments looks like:

|Feature Flag Allowed % Max.| # Users per hour| Duration|
|---|---|---|
|5%|350|2 days|
|25%|1750|2 days|
|50%|3500|2 days|
|75%|5250|2 days|
|100%|7000|2 days|

### How we got these numbers
The VA.gov Disability Claim Status Tool provides similar funWe gathered user load from an existing application in a similar domain (claims status) and factored in the lower-visibility of the Travel Claim Status page.

#### Claim Status Tool (CST) User Load Numbers
Information gathered from VA.gov Disability Claims Status Tool Google Analytics

- Users per day (approx): 140,000
- Users per hour during peak times (approx): 13,000
- Peak user times: Weekdays between 9a ET and 5p ET

## Approximate User Load: VA.gov Overall
Information gathered from VA.gov Google Analytics

- Users per day (approx): 1 million
- Users per hour during peak times (approx): 100,000
- Peak user times: Weekdays between 9a ET and 5p ET

## How Feature Toggles Impact Load
VA.gov feature toggles allow only a certain percentage of logged in users to have access to a feature. Our goal is to slowly roll out the Travel Pay status page on VA.gov in phases.

For example, if we were to include ALL possible logged in VA.gov users in the rollout:

***NOTE: this is NOT the expected load of the travel pay status feature***

|Feature Flag Allowed %|Max. # Users per hour|Duration|
|---|---|---|
|5%|5000|2 days|
|25%|25000|2 days|
|50%|50000|2 days|
|75%|75000|2 days|
|100%|100000|2 days|

This is not the expected load because these numbers represent all users in an hour visiting VA.gov, Natrually, not all users will need/want to visit their travel claim status page all the time. 
We’ve adjusted our estimated user load numbers to err on the high side to account for the expected lower load using estimates from other active pages.
