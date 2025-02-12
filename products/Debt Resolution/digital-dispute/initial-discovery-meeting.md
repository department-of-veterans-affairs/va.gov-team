# Online disputes debt portal feature - initial discovery
----- 
June 14th, 2021 | 12:00 PM EST 

## Background
If a Veteran disagrees with the amount of their debt or the debt itself, they can submit a dispute. The existing process consists of Veterans either mailing or faxing a dispute statemet to DMC, and the DMC routes it to VBA for processing. This feature would allow Veterans to dispute their debt online. 

This goal's meeting was to understand the process at a high level 

**Knowledge prior to meeting**

* Disputes come to DMC \> DMC acknowledges receipt \> updates systems \> routes to VBA for processing
* Decision review/appeal options:
  * Supplemental Claim (New and relevant evidence submitted)
  * Higher-level review (More senior reviewer looks at the case)
  * Board appeal (Appeals to Veterans Law Judge at the Board of Veterans' Appeals)

**Questions prior to meeting**

* DMC \> VBA \> ?
  * Answer: VBA reviews the debt and is supposed to send a response to Veteran and send a notification back to DMC via email
* Are Veterans able to submit any of the 3 modernized appeal processes?
  * Answer: The Veteran can submit a dispute directly to the RO. However, they _must_ submit a dispute directly to DMC within 30-90 days of receiving their debt in order to put collection on hold
* What correspondence does the Veteran receive once an appeal is processed? Do they receive correspondence from DMC, VBA, both?
  * Answer: VBA is supposed to send a response to the Veteran; I believe DMC also sends correspondence but need to confirm 
* Is there a status code?
  * TBD 

## Notes

### Process

> "I have this debt. You said I wasn't married for 32 years because I didn't send a form in. You don't think I've been married the last 2 years, so I owe a debt. I'm going to dispute so you can correct the debt"
* Disputes are processed before waiver

**C&P Steps:**
1. Document mailed in to dispute: can be FSR, a piece of paper, whatever
2. The document is either:
  * Scanned in through mail room (mailed)
  * Uploaded directly (fax)
3. Indexed within Pega
4. Someone goes into Pega and write/fax it to Janesville
5. Janesville is supposed to send it to the correct Regional Office (RO)
6. RO is supposed to work it, send it back through Ops box (?); also sends letter out to Veteran
7. Uploaded again into Pega
8. Is put into special diary code, may stop collections based on how quick

**Education steps**
1. Fax, email, mail
2. There's a special SharePoint site between DMC and regional offices, the information is entered into SharePoint, the document is uploaded with dispute information
3. Similar steps to C&P
* If Veterans disagree w/ the amount or reason, they can contact DMC directly
* Example of why someone would dispute: Debt says they didn't attend class, but they did

* In waiver they're asking for forgiveness, a dispute is that they disagree and the amount is incorrect or shouldn't exist


**Glitch:** When Janesville gets the dispute document(s) they may send it back to DMC instead of uploading to national work queue
  * "What happens when they send it back?"
    * DMC has a spreadsheet
    * DMC sees if they can find it on VBMS and clears it
    * Sends the document(s) twice
    * Currently trying to figure out if it's a training issue at Janesville
    * Also tracked in Salesforce in CALC cases

"How do they dispute it now?"
* There isn't a specific form required for DMC
* Sometimes it may be written on an FSR, but the dispute has nothing to do with their financial status
* Sometimes it's written on the statement in support of claim form 

* "Can they upload documents, supporting documentation, or is it a statement?"
  * They might upload a document (example: if they didn't fill out the form stating they're still married to the spouse they might upload it as part of submission)
  * Unsure what the RO's requirements are for documents
  * **"There are a million and two reasons why they might dispute a debt"**
  * They may choose to send DMC the documents, but the RO has to receive and process it. **Best way to proceed is to send the documents to the RO separately. If they send the form to DMC first, it'll delay it getting to where it needs to go** and they don't want to be the ones sending documents
 * If sent within the 30-90 day timeframe, DMC will stop collectioon
  * There's legislation to extend collection pause to a year

**The existing wizard:**
* There needs to be content that makes it clear that they really have proof that it's incorrect
* The DMC is required to send the documents to Janesville, but it doesn't always necessarily change anything
* The DMC and RO processes potentially overlap; Veterans can dispute with DMC 30-90 days after receiving debt notification, but dispute with RO after that time period has passed
* We'll need to update that content
  * DMC doesn't get any notification from ROs about suspending collection, so in order to suspend collection with the debt Veterans need to do it through DMC
  * When disputing with DMC within 30-90 day timeline they stop collection
  * The other appeal process:
    * If outside DMC's dispute timeline then there's no benefit in sending disputes to DMC, so Veterans should send them directly through RO
  * Only reason they should send a dispute to DMC is if they want the collection to be stopped

* "How many disputes you get in per time period pre-COVID?"
  * Will look at what C&P had 2 years ago and send us the stats

### Technical discussion
* Solution: Web experience that make it more standardized?
* Backend: Pega, etc. is changing to Salesforce in November
* The goal is if the documents are in FileNet the case would be automatically created; they're manually created through VAMS
* Timing: Should align with when Salesforce is being implemented (November)
* Jill will talk to the Salesforce team about integrations for this project

### Next steps
* DMC will send stats about how many Veterans submitted disputes pre-COVID
* In the short term our team can update the wizard content to reflect the DMC's dispute process
* Project will ramp up in Autumn 2021 as the Salesforce launch gets closer 
