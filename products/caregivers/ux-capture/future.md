# 10-10CG UI/UX for Submission Errors
Please see issue [#21214](https://github.com/department-of-veterans-affairs/va.gov-team/issues/21214) for additional context.

## Summary of changes
We have three errors states that a user can experience when submitting an online 10-10CG:
- [Review and Submit > Data-Error](#review-and-submit--data-error)
- [Review and Submit > Generic Error > Without Retry](#review-and-submit--generic-error--without-retry)
- [Review and Submit > Generic Error > With Retry](#review-and-submit--generic-error--with-retry)


The **Review and Submit > Data-Error** will appear if the data is invalid or incomplete whether or not this validation happens on the front- or back-end.

We'll have two states for **Review and Submit > Generic Error**. One that informs the user that they cannot resubmit (**Without Retry**) and one that provides the ability for the user to resubmit (**With Retry**). The only time the **Review and Submit > Generic Error > Without Retry** will appear is when the user experiences a *503 Service Unavailable* back-end error. All other errors will result in the user seeing **Review and Submit > Generic Error > With Retry** state which will allow them to either reattempt the submission or downlaod a completed PDF to sign and mail in.

### Justification
#### Review and Submit > Data-Error
- If data is invalid or incomplete, we should provide the same user experience whether the validation occured on the front-end or backend.
- The back-end can (and does) provide a list of errors for each invalid field which may help the user troubleshoot the error. Even though it's VA.gov's fault for the error occuring (because all data should be sent to the server as valid), directing the user to the erroneous field may help them circumvent the error.
- Offering the user the ability to download the PDF during this error will provide an opportunity for them to submit an application when encountering a bug that they cannot work around (vs the alternative of not being able to do anything...).

#### Review and Submit > Generic Error > Without Retry
- Preventing a user to resubmit when we know that it will not go through is still useful for the case that it's described in this document.

#### Review and Submit > Generic Error > With Retry
- This can be our catch-all error that provides a user with a next step no matter what type of error is occuring
- This allows them to retry a submission and if unsuccessful, they can download the pre-filled PDF to mail in; always providing a next step.

### Technical Changes
- [Review and Submit > Data-Error](#review-and-submit--data-error)
  - The backend (if possible) should send error messages in a map where the property key is mapped to the error message (vs just a list of messages).
  - The front-end will need to handle the 422 error the same as a front-end data validation failure.
  - The PDF download data validation must be made less strict, ignoring missing or invalid fields and making a best effort attempt to do the pre-fill.

- [Review and Submit > Generic Error > With Retry](#review-and-submit--generic-error--with-retry)
  - This message will now need to be dynamic: based on whether resubmission is available or not.
  - The language of the error message must be generic to accomidate all error conditions (since this is our new default).
  - The PDF download data validation must be made less strict, ignoring missing or invalid fields and making a best effort attempt to do the pre-fill.

## UX
### Submission Errors
This table lists the errors that a user can encounter when submitting the online 10-10CG. Each row describes the user's experience when the given error occurs.

|Error Source|Status Code|Error Desc.|Error Reasoning|UI Result|
|:---|---:|:---|:---|:---|
|Front-end|(N/A)|Invalid Data Error|The data provided by the user is not valid against the [10-10CG schema](https://github.com/department-of-veterans-affairs/vets-json-schema/blob/master/dist/10-10CG-schema.json).|[Review and Submit > Data-Error](#review-and-submit--data-error)|
|Reverse Proxy|504|Gateway Timeout|The API did not send a response back to the user within 60 seconds.|(TBD)|
|API|200|Success|The submission was processed successfuly.|Successful Submission|
|API|400|Bad Request|The front-end made an invalid request to the back-end.|[Review and Submit > Generic Error > With Retry](#review-and-submit--generic-error--with-retry)|
|API|401|Unauthorized|The user is not authenticated (or has an invalid csrf cookie).|[Review and Submit > Generic Error > With Retry](#review-and-submit--generic-error--with-retry)|
|API|403|Forbidden|The user is not authorized to make this request.|[Review and Submit > Generic Error > With Retry](#review-and-submit--generic-error--with-retry)|
|API|422|Unprocessable Entity|The data provided by the front-end is not valid against the [10-10CG schema](https://github.com/department-of-veterans-affairs/vets-json-schema/blob/master/dist/10-10CG-schema.json).|[Review and Submit > Data-Error](#review-and-submit--data-error)|
|API|500|Internal Server Error|Something (on the back-end) went wrong processing this request.|[Review and Submit > Generic Error > With Retry](#review-and-submit--generic-error--with-retry)|
|API|503|Service Unavailable|The a dependent external service, or the back-end itself, is not available to process requests.|[Review and Submit > Generic Error > Without Retry](#review-and-submit--generic-error--without-retry)|
|API|504|Gateway Timeout|The back-end, when acting as a proxy, did not receive a response from the target service.|[Review and Submit > Generic Error > With Retry](#review-and-submit--generic-error--with-retry)|

## UI

### Review and Submit

#### Review and Submit > Data-Error
- Summary
  When the data provided by the user is determined invalid by either the front-end, or back-end:
  - a message explains their data is invalid or incomplete
  - the list of errors is listed in the message
  - the erroneous fields are highlighted
  - the user can edit and resubmit

- Next Steps
  - ✔️ Can edit their information
  - ✔️ Can re-submit
  - ✔️ Can download completed PDF to mail in

- CTA
  - Check your data is complete and accurate
  - Update your information
  - Re-submit

- Message
- Designs

#### Review and Submit > Generic Error

##### Review and Submit > Generic Error > With Retry
- Next Steps
  - ✔️ Can edit information
  - ✔️ Can re-attempt submission
  - ✔️ Can download pre-filled PDF of application

- CTA
  - Directed try again
  - (If resubmissions fail) directed to download pre-filled PDF and mail to HEC.

- Message
  > ❗ **We didn't receive your online application**
  > 
  > We're sorry. Something went wrong when you tried to submit your
  > online application. Please try agian.
  > 
  > If your application fails to go through online, please mail in your application 
  > by completing the instructions below.
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

##### Review and Submit > Generic Error > Without Retry
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

- Designs
