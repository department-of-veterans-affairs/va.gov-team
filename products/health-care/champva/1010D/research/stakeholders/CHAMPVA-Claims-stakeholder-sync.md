## CHAMPVA Claims biweekly stakeholder sync
Every other Wednesday at 2:35pm ET

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

