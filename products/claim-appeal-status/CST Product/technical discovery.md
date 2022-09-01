## Decision Letter Technical Discovery
### Current Problems (from Michel McDonald)
1. Generic name of "Notification Letter", and not all notification letters in the efolder are "Decision Letters", all of these are named "Notification Letter", but only some of them are actual Decision Letters
2. There isn't a great way to tie "Notification Letters" to a specific claim. Nothing in the efolder file metadata(doc type, etc), not even in the letter pdf text itself, mention anything about claim ID or anything like that, at all. I got the above list by looking at the claim and using the claims open "date" and "close" date. That might kind of work, but if the vet has multiple open claims at the same time it's going to have to be a fuzzy match based on the claims issues I guess. I'd have to parse the PDF and see what issues are mentioned.
3. Parsing PDFs is not great, at all. PDFs really don't care about paragraphs and such, so, for example, in decision letters all the letter text and the right column generic boilerplate text is mixed up.
4. I did eventually make contact with someone from the VA that is on the decision letter creation side, his email is [Michael.Palmer5@va.gov](mailto:Michael.Palmer5@va.gov). If we pick up this work again, he seemed like someone who might be able to help us get the va to add a claim_id or some other info to the decision letter file name that would help us tie the multiple decision letters in the vets efolder to a specific VA claim(the same claims we show in CST). Update From Jacob Worrel: "I mentioned this idea to Matt and it seems like there are more political and legal blockers to doing this than actual tech-blockers, but it seems like those blockers may come down soon."

## eFolder Documentation
- From Michel: No, there isn't any eFolder documentation. Once I figured out that the decision letters are supposed to be in a Veterans efolder, I cobbled together these script to go after them, mostly I just looked at existing code in vets-api to get these going, [they are rough](https://github.com/department-of-veterans-affairs/va.gov-team/issues/44836#issuecomment-1194533297)

## Connect_vbms
- Discovered the connect_vbms module which may allow us to create some additional e-folder endpoints within vets-api
 - This potentially allows us to return the:
  - Document type
  - Document subject
  - When the VA received the document (not just upload date)
  - A string containing the content of the document (possibly allowing for a summarized preview of document contents?)
  - These potentials still need to be verified
- [Documentation](https://github.com/department-of-veterans-affairs/connect_vbms/blob/master/docs/requests.rst)

## Stakeholder Interview w/ Paul Schute
### eFolder
- VFS will push to VBMS
- Centralized mail portal will associate them with eFolder
- They typically get added via the centralized mail portal 
- Users can manually upload documents to a specific user/specific claim but most of the time it’s done further upstream (CST or centralized mail portal are main avenues to document uploads)
- Who uses VMBS? VSRs (Veteran Service Representative)
- Who uploads decision letter to eFolder? That happens automatically when the decision is made, it all happens within VMBS - there is no upload. VSR takes that action. 
- Who are VSRs? Mostly internal to VA. Veteran is probably not interacting with them. VSRs are claims adjudicators. 
- There are lots of letters named notification letters. Some are decision letters, some are other things. What are the other things? 
 - Document indexing values isn’t super accurate, sounds like. As VSRs are gathering evidence, they are corresponding with Veterans and some of those things might get classified as Notification Letters. Someone else from the VBMS team might have a more accurate explanation of this.
- Notification letters do not exist currently on the front end. One of the core distinguishing factors of NLs is that they are official correspondence that gets sent through physical mail. They don’t live on VA.gov today. 
- Paul: They moved to a centralized printing capability, I was hopeful there was an API. Jacob: BGS facilitates interaction between user interface and corpDB. It also sends claims data to end points. 
- Any letter that gets generated gets generated via multiple end products. Generating a decision notice should have relational connection to the end product, according to Paul. Sam: it would be so much better if we had an API that had relational data, rather than going into the eFolder. If there’s a way to change that, it would give us so much more to work with. 
- Jacob: it might be hard to work with BGS. But we should try.
- Paul says the #1 IT priority project for VBA for upcoming fiscal year is VA.gov enhancements to support claims automation — pretty broad, so if we need to use that to get some urgency, let’s point at that
- Before we evolved there was another system called PGCL(?) and it did require uploading letters manually, so the notification letters might not be totally standardized for that reason. 
- Analysts can pull some reports, we can try to replicate data complexity in a non-production environment (UAT, pre-production)
- We should maybe ask VBMS how they determine the “Document Type” for the documents in eFolder. Paul hopes general notification letter has been pretty standard throughout. 
- Jacob: Where is official developer documentation for eFolder kept? Paul: We’d have to ask someone. Nate Carlson perhaps, from Booz Allen (lead developer). The ITPMs often want to be involved in the discussion.

## BGS and CorpDB
- Most elegant solution would require more collaboration with other teams (BGS and CorpDB). 
- BGS seems to have limited bandwidth to engage. How would you (Paul) advise us to engage with them? 
- Paul: BGS team will require service requests for everything you’re looking for. Recommended to identify these as high-priority initiative. Maybe we can tack the CST work onto PACT Act, get customer success manager within VBA who leases with OINT to make sure we’re not getting blocked along the way. 
- Jack Goldberg  is head of CorpDB (program manager)— if we can get to that level and express the importance and urgency of the work, say we have success managers to help guide along the way that should help us. John Dell too.

## Metrics
- It would be nice to be able to track: Avg number of days between when a veteran files and claim and when they choose a disagreement pathway. Paul says we should be able to get historical data for that.
- Avg # of days between request for evidence and when evidence is submitted. Paul says we should have that too. 
- Are there separate track items for after a C&P exam is requested, are there separate items for when it is scheduled and when it is completed? 
- We would love to expose exam management system data in CST (in addition to the mobile app).  We can decide which data we want to show. 
- We can reach out to the exam management system team for more info on this. Medical Disability Examination office. 
- We do a lot of the VA claim exams through contract exam schedulers. 
- Veterans aren’t allowed to self-schedule claim exams
- Vendors are supposed to call and try to contact the veteran by phone (to schedule exams). 
- We would love to see a C&P exam request immediately — in CST or via text, and point them to something that they could actually do to take that action. We would like to see avg # of days between C&P request and scheduling going down. 
- One things that impacts Veteran experience a lot is that they get calls from random vendors who they don’t know. Even just telling Veterans to expect to hear from these vendors would help. 

## Follow-up 
- What are the other types of Notification Letters? Might need to talk to someone at VBMS (or a VSR?).
- Can we work with BGS to get better relational data?
- Paul can set us up with an analyst
- Paul can have members on his team draft up data requests to get us raw data

## Takeaways
- We can potentially work with Michael Palmer to add a claim id to each file name, however legal and political blockers are preventing this for now.
- We have code that can retrieve the files, but we have no way to differentiate Decision Letters from other Notification Letters, and no way to tie them to specific claims.
- We have access to the upload date of the document, so we can use that to put in the titles we display
- So, for now, we have to show all Notification Letters (with their upload dates) and let the user download them to figure out what is what.
