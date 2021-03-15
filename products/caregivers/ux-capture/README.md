# Recordings of 10-10CG UI/UX
This page is a snapshot of the [Online 10-10CG](https://www.va.gov/family-member-benefits/apply-for-caregiver-assistance-form-10-10cg) user experiance. This information is based the **Review Instance** enviornment and was last updated on **March 12, 2021**.

## TOC
- [UX](#ux)
  - [Submission Errors](#submission-errors)
- [UI](#ui)
  - [Review and Submit](#review-and-submit)
    - [Data-Error (front-end)](#review-and-submit--data-error-front-end)
    - [Loading](#review-and-submit--loading)
    - [Client Internet Error](#review-and-submit--client-internet-error)
    - [Generic Error](#review-and-submit--generic-error)
      - [PDF Download Loading](#review-and-submit--generic-error--pdf-download-loading)
      - [PDF Download Error](#review-and-submit--generic-error--pdf-download-error)
  - [Successful Submission](#successful-submission)

## UX
### Submission Errors
This table lists the errors that a user can encounter when submitting the online 10-10CG. Each list item maps the experience (page and state) that the user is directed to when the specified error occurs.

|Error Source|Status Code|Error Desc.|Error Reasoning|UX Result|
|:---|---:|:---|:---|:---|
|Front-end|(N/A)|(N/A)|The data provided by the user is not valid against the [10-10CG schema](https://github.com/department-of-veterans-affairs/vets-json-schema/blob/master/dist/10-10CG-schema.json).|[Review and Submit > Data-Error (front-end)](#review-and-submit--data-error-front-end)|
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

#### Review and Submit > Loading

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

##### Review and Submit > Generic Error > PDF Download Loading
- Message
  >
  > ... (content same as above, truncated for brevity.)
  > 
  > :spinner: Downloading PDF...
  > 

##### Review and Submit > Generic Error > PDF Download Error

### Successful Submission
