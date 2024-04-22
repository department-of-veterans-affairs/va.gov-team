## 10-10EZ List of errors, causes and resolutions/actions to take

|Error| System used to get this error | What causes this error?| Solution | Action to take| Notes |
|-----| ------------------- | --------------------| -------------------- | -----------------|-----------|
|Invalid format for Last Service Discharge Date| Sentry | Discharge date entered is the next day| N/A | Submission is received by ES, routed to manual review|The submission had a future Discharge date of the next day (9/17), and It was submitted in the evening of 9/16.  The data sent to ES included the Character (aka Discharge type), which is normally stripped out with future dates.  However, because it was so close in timing that the Discharge type did not get stripped.|
|Invalid Veteran date of birth| Sentry | Still unclear| N/A | Submission is received by ES, routed to manual review| N/A |
|Net::HTTPPayloadTooLarge: Request Entity Too Large| Datadog | Payload (User input plus any uploaded attachments) exceeds 150mb? | TBD | Obtain Veteran contact info and send to VHA HEC EED Administrators via encrypted email from VA email address/Outlook | N/A |
|Missing required fields (Child DOB, SSN and Dependent date)| Sentry | Save-In-Progress function does not work with current Multi-response pattern | Pending fix for this | Obtain Veteran contact info and send to VHA HEC EED Administrators via encrypted email from VA email address/Outlook | N/A | 
|NoMethodError: undefined method `[]' for nil:NilClass| Sentry and Datadog | More information missing from Dependents | solution | Action | N/A |
|Missing Name of Insurance company| Sentry | User entered spaces in the field | Fix implemented to not allow "whitespace" in the fields | Obtain Veteran contact info and send to VHA HEC EED Administrators via encrypted email from VA email address/Outlook | N/A |
|Aws::KMS::Errors::ValidationException.   1 validation error detected: Value at 'plaintext' failed to satisfy constraint: Member must have length less than or equal to 4096| Datadog | Input string exceeds limitation | limit expanded | Obtain Veteran contact info and send to VHA HEC EED Administrators via encrypted email from VA email address/Outlook | N/A |
|Error| System | causes | solution | Action | Notes |
|Error| System | causes | solution | Action | Notes |
|Error| System | causes | solution | Action | Notes |
|Error| System | causes | solution | Action | Notes |
|Error| System | causes | solution | Action | Notes |
|Error| System | causes | solution | Action | Notes |
|Error| System | causes | solution | Action | Notes |



|Why would a submission fail?	| Failure occurence |	System response |	Applicant Action|
|-----| ------------------- | --------------------| -------------------- |
|**VA.gov submission failures (FE to BE)**	|   |   |   |
|Data Validation errors (sometimes, but not often)	|Sometimes, not often	|	| Try again later|
|Database error - Connection pool error (db not available, Harddrive full)	| Has not been seen in a long time	|	| Try again later|
|Network error (not often)	| Not often|		|Try again later|
|**Vets-api to ES submission failures**|	|   |   |
|503 error (Service Unavailable - ES down or busy)|		|Retries|	After retry fails, Email to Veteran to try again|
|Validation error (not matching ES validation) [Data mismatch? (Mexico example?)]	|	|Retries	|After retry fails, Email to Veteran to try again|
|Cant save (dont know what the error is)	|		   |   |   |
|Network error between VA and ES (RevProxy could break)	|		   |   |   |
|**Response from Josh F - Submissions that make it to ES and then fail	In that order for how frequent they are among each other** |  |   |   |	
|Person already exist in an Ineligible or Deceased status| | |	None - they will all go into manual registration by HEC.|
|mulitple matches found in the anonymous flow	| | |	None - they will all go into manual registration by HEC.|
|proxy add or retrieve fails to MVI| | |	None - they will all go into manual registration by HEC.|
|any kind of unexpected error	| | |	None - they will all go into manual registration by HEC.|
