# RETRIEVE

1.      Check for PID / Add Person:
- Should the consumer or EVSS service add the Person Record to Corp DB if the service detects the PID is empty? That is, should the service expect the PID to exist prior to processing the Retrieve request?
- If a user is logged in to vets.gov and starts a VR&E application, but for some reason doesn't have a PID in CorpDB, should the service insert the user into CorpDB in addition to submitting the form?<br>
-- None of our other form submission endpoints alter user profile data based on information in the form, so we are recommending no.<br>
-- PID is the unique identifier for CorpDB, is stored in MVI and used as the correlationID for CorpDB

**ACTION**
- eBenefits uses PID to identify if they are enrolled in Chapter 31 and 36
- yes we will need this to do some checking
- We are not interested in updating corpDB
- If PID is not available, then service will throw back error


2.       Retrieve personal and contact info:
- Since there are existing services to retrieve personal and contact info, should the consumer retrieve the personal and contact info separately from retrieving the VRE info, or should the EVSS service for VRE include retrieving the personal and contact info?

Here are the list of fields that we are thinking of having on the VR&E Forms.  * Indicate prefill.

*Chapter 31: Apply for Vocational Rehabilitation*

Chapter 1: Veteran Information		
- First name*
- Middle name*
- Last name*
- SSN*
- VA file number*
- Date of birth*
- VA office where records are located
		
Chapter 2: Military History		
- Service Number (same as VA file number)
- Branch of service*
- Date entered active service*
- Date left active service*
- Type of separation or discharge*
- Did you serve in
		
Chapter 3: Work Information		
- Are you working
- Name of employer
- Address of employer: Street 1
- Address of employer: Street 2
- Address of employer: City
- Address of employer: State
- Address of employer: Zipcode
- Duties of your job
- Monthly salary and wages
		
Chapter 4: Education and Vocational Rehab Information		
- Number of years of education
- Vocational rebab program
- Vocational rebab date		
		
Chapter 5: Disability Information		
- Are you hospitalized right now
- Name of hospital
- Address of hospital: Street 1
- Address of hospital: Street 2
- Address of hospital: City
- Address of hospital: State
- Address of hospital: Zipcode
- What is your disability rating
- Nature of your disability
- Disable transition assistance program?
		
Chapter 6: Contact Information		
- Mailing address: Street 1*
- Mailing address: Street 2*
- Mailing address: City*
- Mailing address: State*
- Mailing address: Zipcode*
- Are you moving within the next 30 days?
- New address: Street 1
- New address: Street 2
- New address: City
- New address: State
- New address: Zipcode
- Daytime phone number*
- Evening phone number*
- Email*
- Confirm Email
 
  ---------

*Chapter 36: Apply for Vocational Rehabilitation Career Counseling*

Chapter 1: Applicant Information		
- Are you a Servicemember/Veteran applying for counseling service?
- First name
- Middle name
- Last name
- Relationship of applicant to Veteran
- SSN
- Gender
- Are you a hanicapped child, 14 years or older, spouse or surviving spouse seeking special restorative training?
- Are you a handicapped child, spouse, or surviving spouse seeking special vocationing training?
- Have you received an informational pamphlet explaining survivor's and dependents' educational assistance benefits?
		
Chapter 2: Veteran Information		
- First name
- Middle name
- Last name
- VA file number
- Date of birth
- Branch of service
- service number
- Date of death or date listed as missing in action or POW
- SSN
		
Chapter 3: Additional Information		
	19	Is a divorce or annulment pending?
	20	Have you remarried since his or her death?
	21	What was your age at time of remarriage?(how is this used?)
	22	Have you ever applied for any of the following VA benefits?
	23	Name of Veteran on whose account you preciously claimed benefits (Would it ever be different from form 11?)
	24	Veteran's file number or SSN
		
Chapter 4: Applicant's military service		
	25	Have you ever served on active duty in the armed forces?
	26	Branch of service*
	27	Date entered active duty*
	28	Date separated from active duty*
	29	Character of discharge*
		
Chapter 5: Contact Information		
	30	Mailing address: Street 1*
	31	Mailing address: Street 2*
	32	Mailing address: City*
	33	Mailing address: State*
	34	Mailing address: Zipcode*
	35	Primary phone
	36	Other phone
	37	Email
	38	Confirm email

**ACTION**
- Verified with Steve K and Ryan Backer that VR&E forms fields pre-fill from the same source as other applications on vets.gov
- EVSS currently pulls from CorpDB, same infomration that is displayed in the PCIU feature


3.       Retrieve CH31/CH36 ‘previously applied’ indicator:
- Presently, EVSS captures a record for each electronic VRE application that is submitted. When viewing VRE info in eBenefits, EVSS retrieves a ‘VRE previously applied’ Y/N indicator for the front-end to consider. 
- Does the consumer need the VRE service to provide the ‘VRE previously applied (in EVSS)’ Y/N indicator? How might the consumer use that information?

We need the service to indicate that the person has previously applied as we do not want to allow them to apply again until the application has been completed / closed.  

Confirmated with business owner (Bettye) that users cannot re-apply until their application has been processed as legally the team is required to process each application submitted even if 1 veteran submitted 10x, so better that they submit 1 application at a time.

- Today EVSS records so can display history
- We know only that they have applied (not status of the application), we think that this might be important
- We likely need all the information
	- Y/N
	- Application Record
	- Entire History
	
- Action - Follow up with Bettye on how they expect to note an application is completed (maybe just knowing it was submitted is enough?)
- Status not available / accurate
- Rolling out new caseflow system
- Processing never begin / no status to track
- Some start but never stop
 

4.       Response:
- Does EVSS need to send back PII info since the consumer should have it thru other sources? 
- Vets.gov does not expect EVSS to send back PII but the answer was not definitive.


**ACTION**
- Verify with Steve that we do not want to write the info to CorpDB received from the user as part of either VR&E application


# SUBMIT

1.       Validate Inputs:
To process a submit request, the consumer must provide the EVSS service the ‘Application Type’. What should the ‘Application Type’ input be – something like “CH31” or “CH36” that EVSS translates to an ‘L code’ which is what VBMS expects for the PDF document type, or the VBMS ‘L code’ itself?

Per Josh Q, each document type in VBMS has an LCode (or shot hand) so that VBMS knows what type of document it is.

**ACTION**
- Ask EVSS to track down latest LCodes as the EVSS service will likely need to translate in order to submit the PDF document


2.       Submission:
a.       VRE Application History:
- Should EVSS continue to capture a record of each application submitted? Considerations: a) Audit records for EVSS services will be captured for every request and response; b) whether the data is needed for display to an end user or for reporting to PA&I; whether the consumer will begin capturing these records going forward.

Lump this with our discovery and decision in RESPONSE 3.a. above. And find out from stakeholders what PA&I reporting is and if we need to do it.  

Confirmed with Bettye that we do not need the application history in Vets.gov.

**ACTION**
- Verify with Bettye that team will use PA&I reporting

 - Should EVSS send vets.gov<>http://vets.gov<> all the VRE application history when the EVSS feature is turned off, so vets.gov<>http://vets.gov<> has the entire history available?

- Verify with Ryan / Rainbows team how we plan to store application history (assuming will be like other applications)

b.      Generate PDF:
Does the VA want EVSS to produce the PDF going forward? (prior vets.gov<>http://vets.gov<> response suggested they wanted to consider a different approach)

We prefer to use Central Mail API but that API is stalled from going live in production. Note that, VR&E does not normally use VBMS and only use now for PDF collection because there was no other place for the applications to be sent to.  Sending PDF to Cnetralized Mail was the plan but Bettye needs to confirm for us.  

**ACTION**
- Verify with Bettye how the regional offices expect to receive process the submitted applications (VBMS, Central Mail, or CRM)

 ii.      If yes:
- Should EVSS send an error response if the PDF fails to generate? We think yes, because else VRE will not have the personal and contact info of the application handy to begin processing.

Yes, if we decide to generate a PDF and it fails to generate (causing a submission failure), the API should return an error. This should all be explicitly specified in the swagger docs and any supplementary documentation.



