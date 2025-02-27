# Supplemental Claim Notes

tl;dr: The Appeals Intake API likely won't need to handle user-uploaded documents, though it will need to return some kind of identifier that can be used to associate those documents with a particular form submission.

## Evidence in the paper space

The 0995 Supplemental Claim form requires that the claimant provide "new and relevant evidence" to develop their decision review request. When filing a paper form, this would involve submitting two types of documentation:

1. Records or documents in the claimant's possession;
2. Records or documents in medical centers or at federal agencies. (_From the form: "VA MEDICAL CENTER(S) (VAMC), VA TREATMENT FACILITIES, OR FEDERAL DEPARTMENTS OR AGENCIES"_)

The claimant would attach the former directly to the form, and fill in the locations of the latter in the form itself. The form recipient would then scan the submitted evidence into the claimant's eFolder through whatever means available to them.

## Evidence in the digital space

If the claimant were to submit the 0995 online, one implication is that they _should_ be able to upload their new and relevant evidence as well. The "medical or federal" evidence is straightforward inasmuch as it is just form fields, but the evidence in the claimant's possession presents certain challenges. What types of files will be allowed? Can the claimant attach the files at a later time? How is the upload transaction captured in a way that is transparent to the user?

Fortunately, this functionality already exists in the 526 application (https://staging.va.gov/disability/how-to-file-claim/). As part of that process, the claimant can both indicate the location of documents internal and external to the VA, as well as upload their own documents. Some research is necessary to understand how the documents are tagged, categorized, and associated with the decision review request, but the functionality itself is complete.

## Implications for API development

The API under development for establishing Decision Review Requests should be able to handle the structured data from the Supplemental Claim form, but is _not expected to handle the processing of uploaded evidence_. There is an existing EVSS service that handles uploaded files. What this means is that final submission process will likely be a multi-stage one involving, at minimum, 1. submission of uploaded documents to EVSS, and 2. submission of the completed form to the new Appeals Intake API.

That order is probably incorrect, since the EVSS API may need some kind of form receipt identifier in order to associate the uploaded documents with a particular Decision Review Request. So a strawman submission regime could involve:

1. Submit a completed form to Appeals Intake API
2. Receive a submission success token from the Appeals Intake API service
3. Add the token to the metadata of each document
4. Submit the documents to the EVSS Document API

...Which would result in a submitted form and a number of associated documents uploaded to the Veteran's eFolder.

## For Reference: Existing document upload flow

---

![Evidence submission](images/evidence-5.png)

---

![Evidence submission](images/evidence-6.png)

---

![Evidence submission](images/evidence-7.png)

---

![Evidence submission](images/evidence-8.png)

---

![Evidence submission](images/evidence-9.png)

---

## For Reference: Language on the 0995 form

"For your SUPPLEMENTAL CLAIM application to be complete, you must submit additional evidence that is NEW AND RELEVANT
to support granting the benefit(s) sought or you must identify existing relevant records that you would like VA to obtain. 
evidence means information not previously submitted to VA, and RELEVANT evidence means information that tends to prove or
disprove a matter at issue.)

"If you know of evidence not in your possession and want VA to try to get it for you, give VA enough information about the 
so that we can request it from the person or agency that has it. List all relevant evidence in the custody of a VA medical 
(VAMC) or other Federal department or agency in PART II of this application in item 14.A and 14.B. VA will retrieve relevant 
from a Federal facility or VAMC, that you adequately identify and authorize VA to obtain. If the holder of the evidence 
it to VA, asks for a fee to provide it, or otherwise cannot get the evidence, VA will notify you and provide you with an 
submit the information or evidence.

"VA will make every reasonable effort to obtain relevant records not held by a Federal facility that you adequately identify 
authorize VA to obtain. These may include records from State or local governments and privately held evidence and information 
tell us about, such as private doctor or hospital records from current or former employers. Please review your decision 
letter for the appropriate authorization forms to complete and submit those forms to VA with this request form. The form is 
at www.va.gov/vaforms."
