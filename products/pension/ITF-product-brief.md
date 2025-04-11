# Intent to File Approach 
### March 2025 
### Introduction 
VA has the concept of an Intent to File (ITF), which enables Veterans to establish a potential start date for benefit payments up to a year before they submit their claim. It is especially helpful for Veterans who expect to take some time to gather evidence to complete and submit a benefit claim, and want to maximize their opportunity for back pay. It is a common first step for VSOs to take on behalf of their Veteran clients for this reason.

The ITF is optional; in the event there is no ITF, the date of claim submission or receipt is typically used as the potential start date for benefits payments, although there are exceptions to this rule. However, regulations 38 CFR 5.155b  (excerpted below) allow  certain online, “interview style” forms to automatically file an ITF on behalf of the Veteran if they do not already have one. This function is mainly helpful for those who do not know to separately log an ITF if they’re planning to take time to gather evidence,  Veterans who do not start with a VSO,  or Veterans who take more than one session/one day to complete their online application. 

Currently the forms affected are the 526ez (Disability compensation); 527ez (Veteran’s Pension); 0996 (Supplemental); the stand-alone 0966 (Intent to File); and Intent to File for VSO users (planned). Intent to file is also applicable to Survivor’s Pension/DIC (Form 534) but that is not yet digitized on VA.gov and was not considered in the decisions below.

### [38 CFR 3.155b](https://www.ecfr.gov/current/title-38/chapter-I/part-3/subpart-A/subject-group-ECFR7629a1b1e9bf6f8/section-3.155#p-3.155(b)) 
(1) An intent to file a claim can be submitted in one of the following three ways: 
(i) Saved electronic application. When an application otherwise meeting the requirements of this paragraph (b) is electronically initiated and saved in a claims-submission tool within a VA web-based electronic claims application system prior to filing of a complete claim, VA will consider that application to be an intent to file a claim. 
 
## Tl;dr recommended pattern 
For forms that automatically set ITFs, the recommended pattern is as follows: 
### New application/claim 
1.	When a new form is started, make a synchronous call to check for an existing active ITF (GET). If no ITF exists, make a synchronous call to establish an ITF (POST).  
a.	Note that a 404 response is an expected response for the initial GET request if the Veteran does not have an active ITF 
2.	Based on the GET/POST results, communicate the ITF date and its expiration date for the user. 
3.	If either of these actions fail, notify the user that they can continue with their form, but if they want to check their ITF date or create an ITF, they should call the contact center. If the GET fails because the system is down (versus no ITF found), do not create a new ITF/call for a POST. 
### Return to in progress form 
1.	When a user returns to an in progress form, make a synchronous call to check for an existing ITF (GET). If no ITF exists, DO NOT make a synchronous call to establish an ITF (POST).  
2.	Based on the GET/POST results, display the ITF date and its expiration date for the user. 
3.	If either of these actions fail, notify the user that they can continue with their form, but if they want to check their ITF date or create an ITF, they should call the Contact Center. 
Teams should not try to remedy the failure of GET and/or POST through either a) an asynchronous process that continues in the background or b) by generating an 0966 PDF and sending it to the Central Mail Portal as a backup. The number of failures is too small to justify the added UX and engineering complexity. In addition, as of March 2025, PDF form versions of the intent to file form sent through the LH Benefits Intake API to the Centralized Mail Portal take an average of 11 days to reach VBMS status. We make the assumption that it is much faster for Veterans to call the contact center to check or create an ITF. 
 In future if error rates move higher, and we are unable to resolve the issues in the endpoint, alternates may be reconsidered.  
The endpoint establishes the ITF directly into VBMS if successful, and there is no requirement to also generate a PDF and upload it to the eFolder, as is common for other forms.  
An updated UX for the recommended sequence is being worked on by the Pensions & Burials team. 
More details below. 
## Other ITF success factors 
The ability to successfully create an ITF also depends on a few additional factors:  
1.	Users must be logged in as LOA3, which is the level at which they have verified their identity and comes with an associated ICN.  
2.	VA must have a participant ID (PID) on file, which is created with the Veteran’s first claim of any benefit type. 
3.	ITF retrieval and creation will error out during regular VBMS/Corp DB maintenance windows. 
Trying to GET or POST an ITF without these IDs will result in failures, so the recommended solution is to check IDs prior to calling ITF services. Forms that do not require LOA3 should not attempt to create an ITF or communicate about an ITF if a user is not logged in as LOA3. In addition, it is recommended that users be prevented from using the form during regular maintenance windows. 
Lighthouse is creating an endpoint to enable creation of a PID, which may be needed to allow an LOA3 authenticated Veteran doing an original claim to proceed with their claim without having to call the contact center. 
## UX and policy considerations 
Ideally, the user experience would:  
•	Be as frictionless as possible.  

•	Not block users from completing their application when the ITF service is unavailable.

•	Provide an alternate way to secure an ITF if the service is unavailable.

•	Be transparent and clear about what we are doing, since the ITF is a concept users may know about or hear about out in the real world. 

We know from research that ITF as a concept can be difficult for Veterans to understand, so clear, plain language content is key. We also know that the current implementation of the UX for the recommended path can feel abrupt because it reports the result of an action the system took without the user’s knowledge and users are more intent on filling out the claim than they are with creating or checking an ITF. Work is being done to improve this experience; we’ll link back to this when available. 

From a policy perspective, we do not want to flood the system with duplicate ITFs or confuse users about their ITF date by creating a new ITF when we aren’t sure if one already exists. Therefore, we recommend not creating a new ITF if the GET service is unavailable. 
 
## Decision log 
Multiple solutions were considered before coming to these recommendations, including: 

•	Synchronous GET/POST calls, non-blocking and with a message to call the Contact Center if the service is down or erroring (the recommended solution). 

•	Completely asynchronous process, resulting in emails or other communications to the Veteran for success (in certain circumstances) or for asynchronous process failure. 

•	Dual synchronous and asynchronous process, where the GET and/or POST is first tried synchronously, then tried asynchronously if there was an error, with emails or other communications on ultimate success or failure.  

The Portfolio has had issues with asynchronous processes in the past in that they can silently fail; to prevent silent failures, asynchronous solutions require additional engineering to ensure that the system knows if they fail (e.g., by polling) and additional pathways (e.g., emails or manual remediation) in the case that they do.  

At the time of this decision, the error rate for synchronous ITFs was less than .1% for forms 526ez and 0995, and about 3.5% for form 527ez (see this ITF Datadog dashboard). The higher rate on the 527ez was found to be the result of a regular weekend system outage for maintenance, during which the 526ez and 0995 prevent users from continuing the form, but the 527ez form does not. In addition, the 526ez and 0995 check for the VA IDs needed for ITF creation prior to the form calling the ITF service, leading to fewer errors based on IDs (527ez allows LOA1 log ins and does not pre-check IDs before calling the service). 
The decision was made not to take the additional steps to asynchronously correct errors because the additional engineering and maintenance did not seem warranted for such a small error rate, which is also lower than the OCTO standard.

We also considered the failure backup solution of generating a PDF and sending it to Central Mail Portal. However, we found out that it takes an average of a 12 days to get those PDFs into VBMS. It is much faster for Veterans to call the Contact Center. This solution also incurs potential for silent failure. 
Here’ a long slack post (locked) about this issue that resulted in this document. 
 
## Potential future work 
Some options for future discovery and prioritization include the following: 

•	Display the ITF in multiple places (such as on the confirmation page and in the Claims Status Tool) 

•	Notify Veterans who have an in-progress form and an upcoming ITF expiration to encourage them to complete their claim. 

•	We still have the open issue that if someone starts a form when the ITF service is down, does not call the Contact Center to establish their ITF, and then has a totally failed submission, they will miss out on having their submission date online substitute for their ITF. The failure email also tells people to call and establish an Intent to File. 

 
## Resources 
Here’s what VA.gov says about ITF (https://www.va.gov/resources/your-intent-to-file-a-va-claim/, About Form 0966). 

Current ITF data and error rates are in this [ITF Datadog dashboard](https://vagov.ddog-gov.com/account/login?next=%2Fdashboard%2Ftym-cck-5uw%2Fbenefits-itf-disabilitysupplemental%3FfromUser%3Dtrue%26refresh_mode%3Dsliding%26from_ts%3D1738006736048%26to_ts%3D1740685136048%26live%3Dtrue). 

ITF GET/POST from Lighthouse endpoint X.  
 

