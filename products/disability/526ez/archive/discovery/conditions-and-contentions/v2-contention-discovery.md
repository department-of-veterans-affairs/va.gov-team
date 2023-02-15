

## Stakeholder Meeting Notes:

After meeting with Robin Schoelerman at VBA, we learned more about the process for rating and making decisions about claims based on specific symptoms and diagnositic scenarios.

We discussed our strategy for identifying  a new condition for 526 v2 in January. Our current approach allows veterans to enter their symptoms or diagnoses freely or via dropdown,
but in future releases as prioritized we will begin to layer on more questions that can help reviewers identify the correct contention classification code for claimed conditions.

Robin understood this approach and was supportive of the iterative approach, but requested that we document the xml for our submissions with versioning to track the changes over time.

## Suggested Documentation:
- IAPD - architecture and XML folder; EVSS may be able to provide this?

We worked through multiple case-by-case scenarios for different conditions to try and identify the happy path. 
Reference Docs:
  - Excel spreadsheet
  - Mural Board
  
## Testing:
There are certain critical test cases that we need to ensure translate properly to VBMS
  - Claiming secondary to something that hasn’t been rated yet
  - Claim secondary to something that has been rated

## Possible Changes:
  - Include a ‘not on this list’ option for Secondary dropdown

## Things to Validate:
**PTSD**
We need to make sure that Personal Trauma (PTSD and non-PTSD) is being categorized and routed appropriately.
There seems to be some differentiation between how physical trauma versus non-physical trauma is interpreted and adjudicated.
This applies to our v2 New contention effort, but needs to also be checked with Paul and BAH to ensure that ancillary forms slated for January
release are accurately driven.

What we need to do:
- Re-organize the spreadsheet so that it's scalable
- Continue to work with Mural Board and make sure that the two documents are in synch
- We'll try tree-testing the top 4 [Most Common Disabilities](/Products/Disability/Disability%20526EZ/discovery/conditions-and-contentions/FY17-Compensation.pdf) first (Hearing Loss, Tinnitus, PTSD, scars); Objective - complete by Dec 26

