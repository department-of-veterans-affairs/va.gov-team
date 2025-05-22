## CHAMPVA Claims biweekly stakeholder sync
Every other Wednesday at 2:35pm ET

## 05/22/25 CHAMPVA Claims

**Attendees:** Andrea, Jamie, Renata, Mike, Angela P, Melissa, Joie

### Notes:
[Mural board](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1742221275311/1794184f6793a8f3f1a91a54447817403dc39fec) \

IVC identified different types of claims based on past conversations emails: new claim, open claims, existing claim (with missing info), re-opened claim 

A claims submission is a **new claim** 

**Partially processed **claims result in a sendback



* Once a bene provides missing info is there a different term that is used? From Mellssa: An example would be if a bene sent in 2 documents with dates of services at the same time that would count as 2 claims. If only one of those claims can be processed it would result in a partially processed claim. 
* It happens a lot that there are multiple claims within one claim submission that the bene sends. Some benes might submit claims on a monthly basis. 
* It will be considered partially processed if one claim in the packet is missing something.
* A partially processed claim is when some of the claims in the packet were processed.
* If a bene sends in 5 pages and only four were able to get processed, page 5 is going to be a sendback. 
* There are times that they can process a claim with multiple missing items and the system will reject it and create an EOB. 
* CHAMPVA will create a sendback when a claim has two or more missing pieces
* It would be entered in the system and there was placeholder information that was entered in because they were missing info they would have to reopen the claim. 
* Anything complete will be processed, anything incomplete will be sent back (but if user submitted multiple claims, it's not stopping processing for the entire submission)

Renata reviewed current claims form (without online resubmission)
Is there a better term to use rather than “resubmission”? Melissa noted that the sendback letter calls it a “resubmission”. 

**Reopened claims **occurs when the sendback letter and missing items are received \
If some of claim info is the system and it is just missing codes CHAMPVA will reopen the claim 

The current online claim forms suggest only submitting one claim (date of service) at a time.



* Bene are sending multiple claims on the digital form despite it stating to only submit one at a time
* Just as long as the group of visits (dates of service) has the same provider and DX code it can be put in the system as one claim.  \

* If the date spans across 2 calendar years CHAMPVA will break it into the 2 claims in the system
* In the case of multiple visits per claim users should enter the first date service if they are asked for it. 
* If a bene submitted for multiple services each claim will get their own unique ID unless they are all by the same provider and the same DX. 
* CHAMPVA has seen both RX and Medical claims come through in the same online form submission. 

**A resubmission** is resubmitting or adding additional info to a claim \


**Reopen claim** was partially processed and has its own claims number and CHAMPVA EOB

IVC is working on document info verification so it could detect if there is any missing info on the file upload. We would need users to upload each doc separately for this to work properly. 
CHAMPVA will do a demo of a rebsubmission/Reopen next week 5-28/25 \

We still need to ask: 

* Do they need the address and contact info again for resubmission?
* How do they match it back to original resubmission? Can we see a demo of a resubmission? Pega may be able to to do most of the heavy lifting on matching up the claims and resubs
* Does the timeline differ for new claims, resubmits and reopens? 
* What  we are some things that can be missing be won’t result in a sendback or reopen \


## 05/14/25 CHAMPVA Claims

**Attendees:** Andrea, Jamie, Rachel P., Renata, Mike, Katrina, Erick, Angela P., Elizabeth, Arleen, Premal, Amanda

**Agenda**
* CHAMPVA Claims Resubmissions
* Backlog queues
* Any new sendbacks data (not addressed, ask over email)


**CHAMPVA Claims Resubmissions**

* Jamie walks through the simple resubmission mocks
    * Claims folks note that PDI numbers aren't being used anymore, been replaced with the batch number (DATE + an 8 digit code = XX/XX/XXXX-VA111111-001-001)...but as a business rule the letter just includes the VA111111 instead of the rest of the code to make it less complicated
    * Angela P. notes that CHAMPVA needs to change the language on the letter from PDI to batch number
* Complex resubmission mock walkthrough
    * No feedback from CHAMPVA
* Q: Has CHAMPVA claims noticed multiple sendbacks for a single claim happening regularly?
    * It depends. As benes get savvier, they get more accurate. The first few claims can be the least accurate. 
    * Likelihood of multiple sendbacks occurs the more things we're asking them to provide. 
    * CHAMPVA concerned that this shouldn't be designed in too detailed and become a blocker to resubmission. 
    * Benes can request Duty to Assist when filing claims, which is an obligation to support beneficiaries. Maybe we need to steer more complex resubs in the direction of DTA rather than through the form. 
* Q: What information is provided on the sendback? Does it say "DX codes" or an explanation of what that is, where it might be found?
    * A: Letters, especially for pharmacy stuff, gives users context about where to locate missing information on paperwork
       * Angela P to show us a sendback letter that's filled out, plus a checklist (double check where that checklist is located)
* Q: we talked at one point about not requiring the number (PDI or batch) in case people lost the letter. Is that still a possibility?
    * If no PDI/batch number, we need their name and the date of service that's listed on the claim, and the doctor you saw.
        * Angela P. notes that if the claim wasn't already open in the system, there'd be nothing to look up and marry the two halves of the claim
    * It's possible when there's a large batch that some were entered into PEGA and others weren't (the ones that required a sendback letter)


**Backlog queues**

* Team is currently trying to understand the backlog queues right now and delays. We've heard some things take 5-7 days and other take 90 days to process. 
    * **CIPM:** all physical mail received goes through CIPM to be scanned. **This is currently a bottleneck.** 
        * Backlog of physical mail in a warehouse that hasn't been scanned in - for bene claims (about 10% bene claims, the rest of it is appeals and eligibility), that backlog should be cleared soon. Note that provider claims aren't sent the warehouse, they're submitted differently.
        * Note that when the backlog of scanning mail gets resolved, CHAMPVA will be temporarily prioritizing processing those claims first and digitally submitted claims processing will slow down for a time, at least until the scanned mail is caught up, and then everything is handled at the same rate (first in/first out)
    * **PEGA:** where digital submissions go. **No backlog of claims**, they're handled almost as soon as they hit the system (resolved within 2 weeks or less). 
        * Eligibility backlog is also in PEGA, was scanned in already. It's backlogged because of insufficient eligibility staff. More staff modernizing the flow has reduced 60% of the time to input the eligibility queue. 
* 10x as many faxes are received than any kind of mail for claims. Since eligibility went live, fax/mail has dropped 60%
    * Resubmits are expensive in terms of time
    * CHAMPVA claims says digitizing that checklist from Angela P. would be great as a simpler claims submission form (note to team: let's look at the checklist again and think it through). 
* FMP works the same way, but it's a different processing group and different backlog (currently has a higher volume of faxes and handwritten forms so it shortens from days/weeks to input information into the databases so they can process faster).


## 04/30/25
**Attendees:** Premal, Amanda, Arleen, Angela C., Angela P., Melissa, Joie, Andrea, Jamie, Rachel P., Renata

**Agenda**

* Content changes for the CHAMPVA claims supporting docs (Rachel P. demo)
* Review mockups of example EOB and itemized bills (Jamie)
* Processing time of resubmissions


**CHAMPVA claims supporting docs content changes**

* CHAMPVA feedback:
    * We don’t need both office and billing address for the provider, just the address where the services were rendered (that is specific language to follow)
    * Add NPI (national provider identifier) above Tax ID for the provider. This is a unique 10-digit number that they may need to request specifically (it’s not necessarily automatically listed on the EOB or itemized billing statement)
        * Note: TIN/EIN is for the healthcare company or corporate entity, and the NPI is for the provider as an individual
    * To EOB upload: add HCPCs to the CPT code line
    * Asks for “date of service/care” to be consistent across all pages (DOS = date of service)
* CHAMPVA notes that DX/CPT, TIN and NPI codes are very frequently missing and result in sendbacks.
* Jamie notes that CPT codes are from EOBs missing and there will be a description of the procedure. 
    * CHAMPVA does need the CPT codes
    * As long as either superbill OR EOB has the CPT codes, that’s fine
        * Note: CHAMPVA cannot process a claim based on EOB alone (we need to require both the itemized/superbill and the EOB together)
* CHAMPVA notes that sendback rates are quite high under normal circumstances because specific pharmacies or providers will provide documents missing required information
    * Fill date is often missing from pharmacy claims (this is brand new information for the team, and it’s a required piece of information that CHAMPVA needs)
    * Melissa asks if there’s a way to add a checkbox acknowledging the list of items we’re asking them to upload. Team explains how that button won't really ensure any compliance with reading and acknowledging the material.


**Review mockups of example EOB and itemized bills**

* The goal of these pages is to educate users before they touch the form and submit the claim. This should be reinforced through the content that Rachel demoed.
* CHAMPVA feedback:
    * We can also include a sample pharmacy receipt, will need to do research into what those look like
    * Will be meeting with accessibility and content to confirm whether this design will work
* CHAMPVA feedback
    * EOB tends not to include the NPI, just the itemized bill/superbill


**Processing time of resubmissions**

* What are the timeframes around resubmissions, from initially receiving the claim to when the resub is sent back?
* Draft letter going into Box for leads review - timeline unclear
    * Angela has requested that timeline from initial claims leads and supervisors and will get back to us.
    * Note about process: currently these letters are being printed onsite, but soon they will be printed and mailed out by a vendor, which will speed up processing times
        * Also, Box (a cloud-based storage system) is a temporary solution but no timeline on replacement
* Is CHAMPVA considering email or digital versions of the sendback letter?
    * Angela P. says that they currently use emails through Box on appeals, but there’s urgency to digitize notifications at this time
* When someone receives a sendback letter for their claim and they want to send the superbill, when it is mailed to and received by VA, how does CHAMPVA know it’s a resub? Is it mailed to the same address as initial claims?
    * It gets scanned in by review & resolution team (R&R) and then walked through
    * Resubmissions are sent to the same address as initial claims, but sent to the R&R team to find the initial submission and marry the two together, using the PDI. 
    * The sendback letter asks users to submit the sendback letter with the additional supporting docs
    * If the claim is still missing documents, R&R team will draft another sendback
    * 30 days to process the resub from the date it's scanned is the goal for reopening and reprocessing claims (closer to 45 days right now).
        * As of today: working through January resubs

## 04/16/25
**Attendees:** Angela C., Elizabeth L., Erick, Angela D., Melissa, Arleen, Joie, Jina, Andrea, Mike C., Mike M., Jamie, Rachel P., Renata

**Agenda**

-   Updates on the CHAMPVA Claims staged launch
-   Review any questions that have come up from claims submissions

**CHAMPVA Claims updates**

-   Currently holding at 25% in production
-   So far there’s been 5 claims submissions - identified some concerns and want to address those with everyone on the call, and if able to address, then move to 50% in prod before EOD today
**Questions to address before increasing to 50%**

-   Q: Right now the health insurance policy number and phone number are optional fields, not required. Is that a problem or should we make that field required?
    -   **A: Leave as-is policy/phone number, not required**
-   Q: Signer relationship to patient is optional; if anyone other than sponsor is filling out the form, we’re not asking what that relationship is. Do we want to prefill “Sponsor” or ask more detailed information about the relationship between sponsor-bene? Does that relationship matter?
    -   A: The relationship to patient field isn’t really used at all on the backend but we’re assuming it’s a sponsor/parent filling out the form for the bene/child. **Leave as optional**
-   Q (from IVC team): In prior research that a parent can sign for a child for a claim no POA required, but a sponsor can’t sign for another spouse. Do we need that POA established or relationship established?
    -   This is incorrect, and no information will be released to the sponsor. The EOB will still go to the beneficiary spouse. **Leave as optional**
 
**Discussion about increasing to 50%**

- **Good to increase to 50%**
-   Q (from CHAMPVA): Is there anyone on the website explaining in detail what information is listed when they fill out the claims form?
    -   A: We know that 3 claims were submitted that were missing information like DX codes, etc. IVC team did a side-by-side comparison of what information is on the paper form and the digital form, and these errors could have happened equally with either submission type.
    -   Moving forward: IVC team has identified some subsequent improvements to make to the static/intro pages and pages within the claims form to improve this experience and reduce the likelihood of errors
        -   Mike C adds in we could add in specific document type drop-downs within the claims form (that would transfer to the BE) to help with granularity around the types of documents required
-   Q (from CHAMPVA): Are users asked to upload multiple documents (invoices and EOBs separately) or a single, combined PDF (everything together)
    -   A (from Mike C): We generate a PDF of the form itself and each individual file the user uploaded to support the claim


## **04/02/25**

Attendees: Andrea, Richard, Jamie, Melissa, Amanda, Elizabeth L., Angela P., Rachel, Elizabeth S., Mike, Renata

**Agenda**

-   Claims launch update – new timeline and demo of the new screener question
-   Resubmissions questions
-   OHI questions
-   Updates to the CHAMPVA Claims PDF form


**Early/Resubmissions/Duplicate submissions**

-   IVC team updates: getting a couple of updates into the form prior to initial launch! Walkthrough of the roadmap, what's coming after launch. Current timeline for launch (initial announcement to come in the next few days).
-   Walkthrough the initial launch updates enrollment screener question in Figma (updates for launch)
-   Walkthrough of fast-follow updates in Figma
    -   Additional enrollment info in screener
    -   Resub screener question
        -   Question from CHAMPVA claims partners: If a bene submits a document and they attach 2 of 3 documents they needed to attach - would they get a notice to not submit a resubmission right now?
            -   For the time being, they would be stopped by the resub question, until PEGA is ready to receive resubmissions
            -   CHAMPVA claims has noticed that recently, a bene will fax in an entire document, and they're receiving a duplicate submission or resubmission (if the fax didn't go through) the rest of the documents in a different submission under a different PDI number.
            -   IVC team also notes there's a submission confirmation page to help with any uncertainty around a claim going through, and this should minimize duplicate submissions as best as possible.
    -   Terminology on "I have already submitted my claim but haven't received a letter" accordion: Does the language "explanation of benefits letter" capture denials/resub letters? Is there a blanket term used for all communications from CHAMPVA claims?
        -   EOB corresponds to approvals/denials, Send back letter is for resubmissions
        -   AI: Update content corresponding to CHAMPVA claims letters and notify C/IA team


**Online claims resubmissions next steps**

-   Send back letter directs benes to submit online. What is the process like to update that letter to correspond to filing resubs online?
    -   CHAMPVA claims team says updating the send back letters, it would take 1-2 weeks to update that information. "More or less instantaneous"
    -   AI: IVC team to coordinate launch of resubmissions online with CHAMPVA Claims partners to make sure the letters notify benes of the online resub option.


**OHI questions**

-   Do we need the effective date as a separate question on the online form if we are still uploading the cards?
    -   It's possible to transfer that metadata in PEGA so that it's automatic. Having that data field filled out is used downstream, so having it populated is preferable.
-   What would happen if we completely remove the the insurance policy and insurance provider phone number? That is an optional field, and users have gotten stuck on that question in testing the online form.
    -   Same as effective date - useful to have at the time of filing, but we'll fill it in if it's not included.
-   Question from CHAMPVA claims: is OHI form live?
    -   IVC team: confirmed, it's live. Quick mention of in-progress integration work between the 10-10d and the OHI Cert


**Updates to the CHAMPVA Claims PDF form**

-   See the copy [Premal shared in Slack](https://dsva.slack.com/archives/C05UDS77ZPH/p1743529863836499) 4/1/25
    -   PDF contains _desired_ changes, not set in stone. There is no launch date announced.
    -   AI: IVC team to review PDF (Jamie started an initial review) to capture any changes we need to add to the backlog. The goal is to keep parity with the PDF form.

