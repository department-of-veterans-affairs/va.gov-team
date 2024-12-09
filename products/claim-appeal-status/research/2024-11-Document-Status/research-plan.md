# Research Plan for Claim Status Tool, Document Status

Benefits Team 1 · November 2024

## Background

The file upload experience in the Claim Status Tool on VA.gov needs improvement, as the upload status is unclear for Veterans. This uncertainty can lead to frustration about whether the file was successfully uploaded, particularly in cases of Silent Failures. Our designs aim to provide Veterans with real-time transparency into the status of their evidence submissions. We believe this visibility will reduce anxiety, while clear and actionable feedback on failures will boost Veterans' confidence in the process and enable immediate resolution. This approach is also expected to reduce support inquiries to CST.

Silent Failures occur when a Veteran submits a document, but it fails to reach downstream services or owners of record. When the submission fails, the Veteran isn’t notified of this problem. This lack of real-time updates creates confusion, delays corrective action, increases support inquiries, and can lead to repeated failed attempts.

[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/CST%20Product/Document%20Status%20Initiative.md).

### OCTO Priorities 

Which [OCTO priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202024.md) does this research support? Work with your VA lead and product manager as needed.

* Our platforms are the best way to deliver products at VA.

### Veteran Journey
* This work supports a Veteran whenever they are filing a disability compensation claim, which could occur across a wide swath of the Veteran journey, ranging all the way from "Getting out" to "Aging."

## Research Goals

1. Validate the design patterns for a successful file upload scenario.  
2. Ensure the design patterns effectively address a Type 1 failure (submission fails immediately).  
3. Ensure the design patterns effectively address a Type 2 failure (submission fails in downstream services).  
4. Evaluate the user journey to determine whether Veterans make a connection between receiving failure notifications via email and viewing in-app alerts for Type 1 and Type 2 failures.

### Outcome

Our research will reveal whether real-time status updates are helpful to Veterans. Additionally, we aim to identify any obstacles Veterans face from receiving a failure notification to sending in their physical documents.

### Research questions

* Is the "In progress" state useful - do they understand that the document hasn't been completely uploaded to their claim?		
* Do Veterans make the connection between the email content and the "In progress" states?		
* Do Veterans understand what to do after seeing the email and in-app alerts for failed uploads?
* Do Veterans feel confident in VA's ability to properly process their mailed-in documents?

### Hypothesis

* The proposed design makes it clear what the status of the uploaded document is.
* Veterans will know what to do in scenarios where document uploads were successful and scenarios where document uploads failed.
* Users will find that real-time in-app status updates enhance the overall service experience by complementing the information provided via email, offering additional clarity and reassurance during the document upload process.
* Providing Veterans with clarity via in-app status updates will reduce the need for support inquiries.

## Methodology	
Describe the method you’re planning. You should be able to explain why this method is appropriate for the goals of the research and maturity of the design. 

Semi-structured interviews

### Location
Remote on Zoom

### Research materials

For moderated usability tests: 
- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/research/2024-11-Document-Status/converstation-guide.md)
- [Link to prototype](url goes here)
	
## Recruitment	

### Recruitment approach
The intended audience is Veterans who at some point filed a disability compensation claim with VA in the last 5 years.

We intend to use Maximum Variation Sampling as a recruitment strategy. Below is the demographic breakdown of participants we would like:

10 total participants:

* 5 Black Veterans
* 5 Veterans age 55-64+
* 4 Veterans without a degree
* At least 5 women Veterans
* The participants must be using a desktop device during the study.

#### Primary criteria (must-haves)
- Veterans must have filed a (standard, non-FDC) disability compensation claim with the VA within the past 5 years.

#### Screener questions
- Have you filed a disability compensation claim with the VA in the last 5 years? **Should be yes**
- Have you uploaded files using the claim status tool on VA.gov?

### Pilot
A pilot session is required. Please indicate the date and name of a mock participant for a pilot session. 
* Pilot participant email: Rocio De Santiago
* Date and time of pilot session: Jan 6, 2024 at 11 AM

### Research sessions
* Planned dates of research: 7-10 and 13, 2025

### Length of sessions

* Session length: 1 hour
* Buffer time between sessions: 1 hour 
* Maximum Sessions per day: 2 sessions per day

### Availability

Monday - Friday: 9 AM ET - 3:30 PM ET
	
## Team Roles	

- Moderator: Gary Homidas
- Research guide writing and task development: Gary Homidas, Skyler Schain
- Participant recruiting & screening: Perigean
- Project point of contact: Gary Homidas, Jacob Worrell
- Participant(s) for pilot test: Rocio De Santiago
- Accessibility specialist (for sessions where support for assistive technology may be needed):	David Kennedy
- Note-takers/Observers: Skyler Schain, Jacob Worrell, David Kennedy, Peri McLaren, Jerek Shoemaker, Sam Cormier, Julie Strothman
