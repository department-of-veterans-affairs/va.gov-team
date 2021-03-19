# Future 10-10CG UI/UX for Submission Errors

Please see issue [#21214](https://github.com/department-of-veterans-affairs/va.gov-team/issues/21214) for additional context.

## UX
### Submission Errors
This table lists the errors that a user can encounter when submitting the online 10-10CG. Each row describes the user's experience when the given error occurs.

|Error Source|Status Code|Error Desc.|Error Reasoning|UI Result|
|:---|---:|:---|:---|:---|
|Front-end|(N/A)|Invalid Data Error|The data provided by the user is not valid against the [10-10CG schema](https://github.com/department-of-veterans-affairs/vets-json-schema/blob/master/dist/10-10CG-schema.json).|[Review and Submit > Data-Error](#review-and-submit--data-error)|
|Reverse Proxy|504|Gateway Timeout|The API did not send a response back to the user within 60 seconds.|(TBD)|
|API|200|Success|The submission was processed successfuly.|[Successful Submission](#successful-submission)|
|API|400|Bad Request|The front-end made an invalid request to the back-end.|[Review and Submit > Generic Error > With Retry](#review-and-submit--generic-error--with-retry)|
|API|401|Unauthorized|The user is not authenticated (or has an invalid csrf cookie).|[Review and Submit > Generic Error > With Retry](#review-and-submit--generic-error--with-retry)|
|API|403|Forbidden|The user is not authorized to make this request.|[Review and Submit > Data-Error](#review-and-submit--data-error)|
|API|422|Unprocessable Entity|The data provided by the front-end is not valid against the [10-10CG schema](https://github.com/department-of-veterans-affairs/vets-json-schema/blob/master/dist/10-10CG-schema.json).|(TBD)|
|API|500|Internal Server Error|Something (on the back-end) went wrong processing this request.|[Review and Submit > Generic Error > With Retry](#review-and-submit--generic-error--with-retry)|
|API|503|Service Unavailable|The a dependent external service, or the back-end itself, is not available to process requests.|[Review and Submit > Generic Error > Without Retry](#review-and-submit--generic-error--without-retry)|
|API|504|Gateway Timeout|The back-end, when acting as a proxy, did not receive a response from the target service.|[Review and Submit > Generic Error > No Retry](#review-and-submit--generic-error--no-retry)|

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

- Message:
- Images:

#### Review and Submit > Generic Error

##### With Retry
- Next Steps
- CTA
- Message
- Images

#### Without Retry
- Next Steps
- CTA
- Message
- Images

### Successful Submission
- Next Steps
- CTA
- Message
