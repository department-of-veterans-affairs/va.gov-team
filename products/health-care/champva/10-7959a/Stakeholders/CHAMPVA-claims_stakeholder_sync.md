# 3/19/25 CHAMPVA claims stakeholder call
## Agenda
- Questions on resubmissions and the sendback letter
- Demo of digital form before staged launch begins
- OHI/CHAMPVA Claims overall user expereince- should we be collecting OHI during claims submissions


### Questions on resubmissions and the sendback letter



* Melissa will email us over a over a blank sendback letter for the designers to reference
* The sendback letters directs the bene to mail their missing documents to the new CHAMPVA Claims address (PO Box). 
* Should we create an electronic submission option on the sendback letter? CHAMPVA said it would be nice for benes that have a simple set of documents to send in.
* Occasionally claims can be more complex which happens when they send in multiple claims at one time. 
* CHAMPVA will send back only the documents that are missing info. 
* It would make it easier if the bene can send everything over as one packet. 
* CHAMPVA agrees it would be a good option to allow for digital resubmission if we can keep the process and the format that they would receive the documents simple. 
* PDI number would be present on the sendback letters from Pega (example PDI #**03/16/2025-PG051500-007-001).**
    * **PDI# would have different letters associated with them based on how they received them:**
    * **PG=Digital Uploads -Recieved Fax Date/not Doc Batch Number**
    * **CM-CIPM-Mail sent to Pennsylvania**
    * **FX-Faxes automatically ingested into to PEGA**
    * **CA- Online Applications**


### Demo of digital form before staged launch begins \




* Gave a demo of the claims form in staging and also showed the UI of the form in PEGA
    * IVC will fix the document type being unidentifiable when showing in PEGA
* IVC is 2 sprints away from going into production with the CHAMPVA claims form
* Asked partners to test the form in the staging to give feedback. 
* CHAMPVA asked what happens if someone submits a claim online prior to their CHAMVPA enrollment being completed?
* The digital claims form doesn’t have a gate to stop users from submitting claims on the va.gov if they haven’t received their enrollment packet/ A card yet
* VES may have a way to check for benes’ CHAMPVA enrollment status prior to submitting a claim  \
IVC asks, What do we do with now if they receive a claim submission before the bene is enrolled. The VE (Voucher Examiner) is not allowed to process the claim if the bene is  not in the CHAMPVA system.  \
As of now have not received any claims submissions prior to enrollment being submitted. 
* This issue may be low risk because the welcome packet and CHAMPVA A card has not been sent to bene yet so they don’t have the information needed to submit a claim
* There’s a possible higher risk of receiving the claim before the enrollment is completed with the claim form being live on VA.gov because the information is more exposed. 
* There are possible solutions on the UX side. We would still need a plan on the CHAMPVA backend to handle “orphan claims”. 
* Is there a way to cross reference VISTA for eligibility?This is possible when VES goes live. VES should go live in August. 
* How comfortable is CHAMPVA with releasing without a solution for this? We decided to let the form go live without and monitor it. It should not be a huge percentage that we would receive orphan forms. 


#### Action Items:



* IVC to continue to solution a way for bene’s to resubmit their claims on online
* IVC to solution a way to create friction on the claims form  if a bene’s enrollment has not been complete 
