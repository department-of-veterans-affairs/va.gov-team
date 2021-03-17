# Current 10-10CG UI/UX for Submission Errors
This page is a snapshot of the [Online 10-10CG](https://www.va.gov/family-member-benefits/apply-for-caregiver-assistance-form-10-10cg) user experiance. This information is based the **Review Instance** and **Staging** enviornments and was last recorded on **March 15, 2021**.

This document seeks to answer the following questions:
- What types of errors that can occur?
- What the status code for each type of error?
- What message does the user see for each error type?
- What next steps are users encouraged to take?

Please see issue [#21213](https://github.com/department-of-veterans-affairs/va.gov-team/issues/21213) for additional context.

## TOC
- [UX](#ux)
  - [Submission Errors](#submission-errors)
- [UI](#ui)
  - [Review and Submit](#review-and-submit)
    - [Data-Error (front-end)](#review-and-submit--data-error-front-end)
    - [Client Internet Error](#review-and-submit--client-internet-error)
    - [Generic Error](#review-and-submit--generic-error)
      - [PDF Download Loading](#review-and-submit--generic-error--pdf-download-loading)
      - [PDF Download Error](#review-and-submit--generic-error--pdf-download-error)
  - [Successful Submission](#successful-submission)

## UX
### Submission Errors
This table lists the errors that a user can encounter when submitting the online 10-10CG. Each row describes the user's experience when the given error occurs.

|Error Source|Status Code|Error Desc.|Error Reasoning|UI Result|
|:---|---:|:---|:---|:---|
|Front-end|(N/A)|Invalid Data Error|The data provided by the user is not valid against the [10-10CG schema](https://github.com/department-of-veterans-affairs/vets-json-schema/blob/master/dist/10-10CG-schema.json).|[Review and Submit > Data-Error (front-end)](#review-and-submit--data-error-front-end)|
|Reverse Proxy|504|Gateway Timeout|The API did not send a response back to the user within 60 seconds.|[Review and Submit > Client Internet Error](#review-and-submit--client-internet-error)|
|API|200|Success|The submission was processed successfuly.|[Successful Submission](#successful-submission)|
|API|400|Bad Request|The front-end made an invalid request to the back-end.|[Review and Submit > Generic Error](#review-and-submit--generic-error)|
|API|401|Unauthorized|The user is not authenticated (or has an invalid csrf cookie).|[Review and Submit > Generic Error](#review-and-submit--generic-error)|
|API|403|Forbidden|The user is not authorized to make this request.|[Review and Submit > Generic Error](#review-and-submit--generic-error)|
|API|422|Unprocessable Entity|The data provided by the front-end is not valid against the [10-10CG schema](https://github.com/department-of-veterans-affairs/vets-json-schema/blob/master/dist/10-10CG-schema.json).|[Review and Submit > Generic Error](#review-and-submit--generic-error)|
|API|500|Internal Server Error|Something (on the back-end) went wrong processing this request.|[Review and Submit > Generic Error](#review-and-submit--generic-error)|
|API|503|Service Unavailable|The a dependent external service, or the back-end itself, is not available to process requests.|[Review and Submit > Generic Error](#review-and-submit--generic-error)|
|API|504|Gateway Timeout|The back-end, when acting as a proxy, did not receive a response from the target service.|[Review and Submit > Generic Error](#review-and-submit--generic-error)|

## UI

### Review and Submit

#### Review and Submit > Data-Error (front-end)
- Next Steps
  - ✔️ Can edit information
  - ✔️ Can resubmit

- CTA
  - Directed to review information for completness.

- Message:
  > ❗ **We're sorry. Some infromation in your application is missing or**  
  > **not valid**  
  > 
  > Please check each section of your application to make sure you've  
  > filled out all the information that is required.  
  > 

- Images

|Pre-Submission|Loading|On Error|Error Message|
|:---:|:---:|:---:|:---:|
|<img width="240" alt="Front-end Data Error Image - Pre-submission" src="https://user-images.githubusercontent.com/7391284/111173687-3c0fb280-857d-11eb-8895-16956a90dad7.png">|(N/A)|<img width="240" alt="Front-end Data Error Image -  On Error" src="https://user-images.githubusercontent.com/7391284/111173719-416cfd00-857d-11eb-99a6-ee2387d36ef2.png">|<img width="240" alt="Front-end Data Error Image - Error Message" src="https://user-images.githubusercontent.com/7391284/111173741-4631b100-857d-11eb-88ac-39e9a67352e3.png">|

<!-- #### Review and Submit > Data-Error (back-end) -->

#### Review and Submit > Client Internet Error
- Next Steps
  - ✔️ Can edit information
  - ✔️ Can resubmit

- CTA
  - Check their interenet connection
  - Resubmit

- Message:
  > ❗ **We're sorry, there was an error connecting to VA.gov.**
  > 
  > Please check your Internet connection and try again.
  > 

- Images

|Pre-Submission|Loading|On Error|Error Message|
|:---:|:---:|:---:|:---:|
|<img width="240" alt="Client Error Image - Pre-submission" src="https://user-images.githubusercontent.com/7391284/111172469-38c7f700-857c-11eb-9d8d-b0fe029c02e8.png">|<img width="240" alt="Client Error Image - Loading submission" src="https://user-images.githubusercontent.com/7391284/111172544-4aa99a00-857c-11eb-9006-541e1804cc60.png">|<img width="240" alt="Client Error Image - On Error" src="https://user-images.githubusercontent.com/7391284/111172608-585f1f80-857c-11eb-9ac1-1c4939ee36e8.png">|<img width="240" alt="Client Error Image - Error Message" src="https://user-images.githubusercontent.com/7391284/111172672-6614a500-857c-11eb-84ae-6fd2faf1ebff.png">|

#### Review and Submit > Generic Error
- Next Steps
  - ✔️ Can edit information
  - ✖️ Cannot resubmit
  - ✔️ Can download pre-filled PDF of application

- CTA
  - Directed to Download PDF, sign, and mail it to HEC.

- Message
  > ❗ **We didn't receive your online application**
  > 
  > We're sorry. Something went wrong when you tried to submit your
  > online application. You won't be able to resubmit the form online.
  > 
  > **What you can do now**
  > 
  > Please review your application to make sure you entered your
  > information correctly. Then download, print, and sign a copy of your
  > completed application.
  > 
  > Mail your application to:
  > 
  > > **Program of Comprehensive Assistance for Family Caregivers**  
  > > Health Eligibility Center  
  > > 2957 Clairmont Road NE, Ste 200  
  > > Atlanta, GA 30329-1647
  > 
  > If you have trouble downloading your application, call
  > our [VA.gov](#) help desk at [800-698-2411](#) (TTY: 711). We're here Monday
  > through Friday, 8:00 a.m. to 8:00 p.m. ET.
  > 
  > ⬇️ [Download your completed application(PDF)](#)
  > 

- Images

|Pre-Submission|Loading|On Error|Error Message|
|:---:|:---:|:---:|:---:|
|<img width="240" alt="Client Error Image - Pre-submission" src="https://user-images.githubusercontent.com/7391284/111198537-0a571580-8596-11eb-82dc-2c44a54132b9.png">|<img width="240" alt="Client Error Image - Loading" src="https://user-images.githubusercontent.com/7391284/111198693-3d010e00-8596-11eb-9a70-b3d59dd97585.png">|<img width="240" alt="Client Error Image - On Error" src="https://user-images.githubusercontent.com/7391284/111198720-44c0b280-8596-11eb-8dcf-533c91aa2b23.png">|<img width="240" alt="Client Error Image - Error Message" src="https://user-images.githubusercontent.com/7391284/111198763-4ee2b100-8596-11eb-8914-6b9ded0608af.png">|

##### Review and Submit > Generic Error > PDF Download Loading
- Message
  > 
  > :spinner: Downloading PDF...
  > 

- Images

|Pre-Download|Loading|Ready|Downloaded|Opened|Contents|
|:---:|:---:|:---:|:---:|:---:|:---:|
|<img width="240" alt="PDF Download - Pre-Download" src="https://user-images.githubusercontent.com/7391284/111198693-3d010e00-8596-11eb-9a70-b3d59dd97585.png">|<img width="240" alt="PDF Download - Loading" src="https://user-images.githubusercontent.com/7391284/111198720-44c0b280-8596-11eb-8dcf-533c91aa2b23.png">|<img width="240" alt="PDF Download - Ready" src="https://user-images.githubusercontent.com/7391284/111198763-4ee2b100-8596-11eb-8914-6b9ded0608af.png">|<img width="240" alt="PDF Download - Downloaded" src="https://user-images.githubusercontent.com/7391284/111199440-011a7880-8597-11eb-9150-54564523e147.png">|<img width="240" alt="PDF Download - Opened" src="https://user-images.githubusercontent.com/7391284/111199523-1c858380-8597-11eb-971f-59bd3749b7d7.png">|<img width="240" alt="PDF Download - Contents" src="https://user-images.githubusercontent.com/7391284/111199573-2ad39f80-8597-11eb-9796-83d8184539b4.png">|n/a|


##### Review and Submit > Generic Error > PDF Download Error

### Successful Submission
- Next Steps
  - ✖️ Cannot edit information
  - ✖️ Cannot resubmit
  - ✔️ Must wait to be contacted by a Caregiver Support Coordinator
  - ✔️ Can print the page
  - ✔️ Can contact VA Caregiver Support Line by phone or email

- CTA
  - Print this page
  - (if you have any questions) Contact Contact VA Caregiver Support Line by phone or email
  - Go back to VA.gov

- Message
  > ✅ **You’ve successfully submitted your application.**  
  > 
  > Once we’ve reviewed your application, a Caregiver Support Coordinator will  
  > contact you to discuss next steps.  
  > 

  > **Application for the Program of Comprehensive Assistance for**  
  > **Family Caregivers (VA Form 10-10CG)**  
  > For Veteran: Tamara E Ellis  
  > 
  > **Date received**  
  > March 15, 2021
  > 
  > [Print this page](#)
  > 

  > **What happens after I apply?**  
  > 
  > If we need you to provide more information or documents, we will contact you.
  > 
  > A member of the Caregiver Support Program team at the medical center where the  
  > Veteran plans to receive care will contact you to discuss the application process and next  
  > steps in determining eligibility. If you aren’t eligible for PCAFC you may be eligible for the  
  > Program of General Caregiver Support Services (PGCSS).
  > 
  > If you have questions about your application, what to expect next, or if you are interested  
  > in learning more about the supports and services available to support Veterans and  
  > caregivers, you may contact the VA Caregiver Support Line at [855-260-3274](#) or  
  > visit [www.va.caregiver.gov](https://staging.va.gov/family-member-benefits/apply-for-caregiver-assistance-form-10-10cg/www.va.caregiver.gov).  
  > 

- Images

|Pre-Submission|Loading|On Success|Message|
|:---:|:---:|:---:|:---:|
|<img width="240" alt="Successful Submission - Pre-Submission" src="https://user-images.githubusercontent.com/7391284/111196562-ce22b580-8593-11eb-8048-80e305053125.png">|<img width="240" alt="Successful Submission - Loading" src="https://user-images.githubusercontent.com/7391284/111196590-d5e25a00-8593-11eb-8714-384827869449.png">|<img width="240" alt="Successful Submission - On Success" src="https://user-images.githubusercontent.com/7391284/111196612-de3a9500-8593-11eb-838c-7f9459741209.png">|<img width="240" alt="Successful Submission - Message" src="https://user-images.githubusercontent.com/7391284/111196639-e4307600-8593-11eb-849d-da07384a1dce.png">|
