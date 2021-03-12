# Recordings of 10-10CG UI/UX
## UX
### On Submission
These are recordings of the user-experience when submitting a 10-10CG. This was done on the **Review Instance** enviornment on **March 12, 2021**.

|Error Source|Status Code|Error Desc.|Error Reasoning|UX Result|User's Next Steps|User can Re-submit?|
|:---|---:|:---|:---|:---|---|---|
|Front-end|(N/A)|(N/A)|The data provided by the user is not valid against the [10-10CG schema](https://github.com/department-of-veterans-affairs/vets-json-schema/blob/master/dist/10-10CG-schema.json).||||
|Reverse Proxy|504|Gateway Timeout|The API did not send a response back to the user within 60 seconds.|||
|API|200|Success|The submission was processed successfuly.|||
|API|400|Bad Request|The front-end made an invalid request to the back-end.|||
|API|401|Unauthorized|The user is not authenticated.|||
|API|403|Forbidden|The user is not authorized to make this request.|||
|API|422|Unprocessable Entity|The data provided by the front-end is not valid against the [10-10CG schema](https://github.com/department-of-veterans-affairs/vets-json-schema/blob/master/dist/10-10CG-schema.json).|||
|API|500|Internal Server Error|Something (on the back-end) went wrong processing this request.|||
|API|503|Service Unavailable|The a dependent external service, or the back-end itself, is not available to process requests.|||
|API|504|Gateway Timeout|The back-end, when acting as a proxy, did not receive a response from the target service.|||

## UI
### Review and Submit
#### Review and Submit > Pre-submit
#### Review and Submit > Data-Error (front-end)
<!-- #### Review and Submit > Data-Error (back-end) -->
#### Review and Submit > Loading
#### Review and Submit > Generic Error - Download PDF
##### Review and Submit > Generic Error - Download PDF > PDF Download Error
#### Review and Submit > Client Internet Error
