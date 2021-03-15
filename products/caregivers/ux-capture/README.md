# Recordings of 10-10CG UI/UX Error states
This page is a snapshot of the [Online 10-10CG](https://www.va.gov/family-member-benefits/apply-for-caregiver-assistance-form-10-10cg) user experiance. This information is based the **Review Instance** enviornment and was last captured on **March 12, 2021**.

## UX
### On Submission
This table lists the different errors that a user can encounter, and the experience (page and state) that they are directed to when it occurs.

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
<!-- #### Review and Submit > Data-Error (back-end) -->
#### Review and Submit > Loading
#### Review and Submit > Generic Error
##### Review and Submit > Generic Error > PDF Download Loading
##### Review and Submit > Generic Error > PDF Download Error
#### Review and Submit > Client Internet Error
### Successful Submission
