# Service Blueprint FMP Claims Review with FMP Partners

**3/12/25 **
AttendeeS:
Jamie Fiore, Andrea Merril, Mike Mooney, Rachel Pope, Renata Keck, Andy Szymczak, Richard McKeithan, Leticia Diaz, David Fieselman, Andrea Bingham

## Intro

Reviewing the service blueprint (previously covered - registration process)


## Claims Intake Process



* All mail is going through a consolidated process (CPIM) where it’s scanned and sorted into PEGA. This will follow a similar process to the registration forms


## Translation

How do documents get translated?



* FMP claims examiners determines if documents need translation
* No bubble sheets for FMP claims anymore (all of this happens in PEGA)
* When all documents including claims forms are scanned into PEGA, a lead or CIPM ships them to Translation (Third Party Contractor), they wind up in a “pending translation” work queue
* The Translation Contracting Officer Representative (COR) confirms that all pages are there and comment in which pages need translation
* When complete, reviewed for satisfactory completion, they select from the drop down in PEGA that it is to be sent out to a translator
* Goes into a contractor translator work queue in PEGA to be translated
* When translation is back, Translator COR reviews to make sure it’s clear/concise and send it back to the FMP claims examiners
* Sometimes, the translation team receives docs in the pending folder that include marriage/birth certificates from a foreign country, etc. We send these out and those are sent to DCDM to route to EEV (comments this on the folder).


## Direct Deposit Process

What is the process for determining and paying via direct deposit?



* Soft launch of FMP EFT capability to Veterans’ domestic bank accounts on file with VBA in April
* There’s multiple stakeholders in the EFT
* Veteran has to request reimbursement to themselves and not the provider
* They must already be receiving disability payments through a domestic bank account by direct deposit
* The Financial Services Center (FSC) center will work to create and send the direct deposit
* Foreign bank accounts must go through the Department of Treasury for check payment


## Missing Information

If a Veteran receives a sendback letter (mostly via email requesting) for more information, how does that get resubmitted?



* Sendback letter (request for information, RFI) contains information from the previous submission, including the PDI.
* When a claim gets submitted, it’s tied to the Veteran’s SSN or claim number (PDI#). 
* When a Veteran sends in missing info it is treated as a new claim.  \
During claims processing examiners will always check if there are any previous claims submitted for that service. If they have a pending claim or a RFI outstanding in VISTA, FMP will marry those together.
* When Vista is searched via the Veteran’s SSN it will show all claims submitted by a Veteran. When searched by PDI it will show the specific claim (Possibly a future state to collect the PDI on resubmissions to streamline the resubmission process)
* Veteran usually provides the sendback letter in the resubmission so FMP claims examiners are able to do that work easily (Can we ask for the sendback letter in the form workflow?)


## Single file claims

 Each claim being a singular document/PDF instead of separate documents in PEGA



* This is something the intake team is working on.
* IVC team did discovery work on that, the solution is potentially on our side
* Will provide a timeline for that work when able
* Engineers want to know: Should we include the form first followed by supporting documents within the PDF?
    * Yes, that’s the format FMP wants
