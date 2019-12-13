# What if someone starts in eBen, and they come to the page in Vets.gov?
- Can we get a datapoint in the service that indicates whether you have an outstanding claim in eBen or on paper, or with VSO?
- So that we can tell them "you've already started one somewhere else"
- **QUESTION: IFTs have a source tag... could we consume that and be able to include that in the message as well? ^**
- **QUESTION: can someone ever have 2 ITFs for one 526?** <- this might impact our messaging
- **QUESTION: if you've submitted one and it's not rated yet, can you submit a new one for newly rated disabilities**
- **QUESTION: are there different ITFs for the different forms, or are they all the same field?**

# What if someone wants to print before submitting (and for example take to VSO to finish there)? 
- Even if we DO include that in MVP, we won't have EVSS compile the PDF, Vets will do it
- **TO DO: add to feature value grid, and evaluate its priority among other features**
- **QUESTION: is there something special in the way EVSS does this, that would impact our decision to do it ourselves?**

# Need product decision: do we want EVSS to send an email to the Veteran as confirmation when they submit? Or do we want to handle that on the Vets.gov side.
- No, Vets.gov will do that.
- **QUESTION: what value(s) exist in the services that could indicate to us that an alert is necessary? A change to the rating change? Successful creation of EP? Claim Status fields too?**
- **QUESTION: how was rainbows going to listen for submission signal for Education forms?**
- **QUESTION: can nebula prioritize notification/alerts epic be prioritized?**
- Vets.gov will send email
- Value that we get: in the submit API we get back a Claim ID
- Batch processing steps happen afterward like generating PDF and putting in VBMS, and attaching the evidence and stuff. The email is a part of the batch processing. But Tim's research shows. If the doc uploads are unsuccessful, we'll keep retrying in letter queue. If it's never successful, then there's a manual process where someone physically adds it to VBMS UI. So there's no way that the docs won't make it.
- Submit operation: some things happen synchronously and some asynchronously <- this will determine the content of the email.
- What's the data on how often we get back a Claim ID but creation in VBMS fails? EVSS will get this to us.

# Will we have a message center where Veterans can view updates about activity?
- **QUESTION: what value(s) exist in the services that could indicate to us that an alert is necessary? A change to the rating change? Successful creation of EP? Claim Status fields too?**
- **TO DO: get demo of message center in next standup**

# Privacy agreement - can we repurpose from other forms? Can we learn lessons from other products?
- Brad mentioned it was required, not sure if that exact one that's on eBen is necessary.
- **QUESTION: can we do this the same as pension, i.e. linking to the privacy statement in the footer upon submission?**
- **TO DO: compare our global statement to the eBen 526 statement**

# Which reference data services do we want from EVSS, vs which we'll just hard code enum values.
- **TO DO: need to write ticket for Raquel to do that, would be good to consider other products and what they use too**

# What values are available in claim status that we want to use, are there any more that we need to support the design?
- **TO DO: GH issue for Raquel to document the values from both of the services in GH, and then another issue for Alex and Rachael to review the values and see if there's anything in the design that we don't currently get**
- **TO DO: meet with CSRA to dig into the claims part of the 526 and Claims Status swagger and understand the fields**
- **TO DO: FE + BE swagger review of both 526 and Clais Status APIs**

# What features align with other 60-day claims initiatives (eFolder exposure, DRC, etc), what are the requirements for them that would allow them to integrate?
- **TO DO: GH issue to start documenting this in the feature value matrix**

# Expiration Date
- Vets.gov will perform this calculation.
- Note: not required for MVP, but should probably write it in so we're ready

# PID
- Knowing that original claims will be completed in the future, EVSS will include the code in in the way it has already been structured, but only certain scenarios will be enacted and tested.
- Note: this functionalty is not required for MVP
- Right now they use PID to get the past claims, so it's not possible that we'd get claims for a person but not have their PID.

# Military History
- Write/edit will NOT be a part of MVP
- TBD what service we use when we incorporate write functionality into the flow

# VA Office datapoints
- These used to be required fields, maybe relic from the time before NSQ so they used the info to route the claim
- Even if not still required, could be nice to recommend a regional office, if EVSS is already suggesting local offices based on the user's zip code...
- **Do we still need to collect and submit this?**

# Address datapoints
- Different FE loads based on locality

# Disability list and ratings
- need more info from EVSS before we decide if this is better in 526 load vs claim status load
- eBen shows rated disabilities
- **does it show pending claims disabilities?**

# DBQs
- Want to understand the load for fetching those
- MVP we might not need this info, since we're guiding ppl to VA exams and DBQs are out of date

# If VA has bad data about a person (wrong last name for example), and the PDF 526 form comes in w/their updated info (new last name for example), how does VA handle?

# Does EVSS need both VA File and SSN to create the PDF and create the EP?
- 

# If someone changes the selections in the "flashes" section, is there an endpoint that will allow us to submit that info to VA? If no, could we explore sending an email to the right VA division so they can manually add a flash, how could/would VA handle?
- No, VA makes the decision, no way to communicate potential flash needs via a web service

# Mil Serv Hist: what values do we get from eMIS? What values does EVSS requires for submit?
- 

# disabilityId: what exactly is this value? Does the code map to text string condition names? What is that enum?
This is a unique identifier for each condition. A person might have claimed hearling loss 4 times, but we'll only get the most recent one in the load.

# What doc types are most useful for claims processors? 

# When we submit, does EVSS use the doc type tags in the EP creation?
1. Create claim and get claim ID
2. Batch process runs to create contentions
3. If special issues, based on contentionid, then create special issues
4. Send documents to EVSS

We can pass the correct doc type as a part of the submit operation. We can look at swagger to see the current schema, but they're adjusting the architecture of it.

# What is EVSS's doc type enum?
- This will be part of the schema that EVSS gives us in the API contract
- EVSS will try to get it to us

# Does VA allow someone to file an increase for something if they haven't gone to the doctor to get evidence of it since their last rating? How often does that happen?

# When they select their VA Medical Center, what do we need to send to EVSS (or elsewhere) in order to trigger the 21-4142 form, and subsequent record retrieval?
- 

# Tech: Do we get the fwd'ing address in the Address Update endpoint?
- Can only load primary
- Can submit fwd'ing address bc they can to form

# Business: questions re:mil serv hist

# Tech: do we get the mil serv hist addresses and phones on EVSS load?
- Not sure

# Business: for increases is having the mil serv hist address + phone necessary?
- 

# Business: if ppl doing multiple conditions in one claim, do they usually have independent evidence for each, or same doc(s) apply(ies) to all?

# 21-4142 form (auth to disclose info), how does that work right now? what info does it require? could we submit separately from the 526 load and submit via the central mail api that we may have access. (FML, DOB, SSN/VA File, SSN, ). Can we link to privacy act, or do we need to include whole amble somehow? In docs section, need to give option for us to get the private records for them.

# Business question: is there any reason someone applying for an increase should NOT be able to update their address?

# Confirm w/EVSS whether there are any update restrictions (aside from the questionable ones) on the PPIU API?
- Yes rest are in place, just a couple we're unsure of

# Business question: how often do ppl do the ancillaries when claiming an increase?

# Can we can capture changed personal info (mil hist, name, ssn, etc) and send it to EVSS to attach as addendum?
- 
