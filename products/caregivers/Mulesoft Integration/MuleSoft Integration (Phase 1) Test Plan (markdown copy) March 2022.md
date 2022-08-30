# Test Plan to ensure MuleSoft APIs Operational Readiness
March 2022

### MuleSoft API Description and Status: 
The MuleSoft app offers API’s that allow submission of 1010CG caregiver application and supporting documentation by interfacing between 1010CG app (client) and Salesforce CARMA Caregiver app. 

REST is the method of transport to push data to CARMA. JSON is the format, and the communication will occur over HTTPS connection. 

The physical address for the network server where the API can be invoked from the browser/tools and the credentials to authenticate the service for the actual implementation (non-mock) pointing to the Staging test environment will be found in the new Postman collection Igor is providing to the VA.gov team. The HTTP methods used to classify the APIs based on the types of calls made to the server are defined in the VA. Org Interface 1010CG Definition.PDF. 

VA.gov team will integrate and smoke test in the Pre-prod environment and validate the infrastructure is working as expected. Once the environment has been smoke tested the business will test in the Pre-prod environment for staging prior to the production deployment.

The final credentials for all environments will be available when the implementation is ready for Pre-prod (staging) and provided to the VA.gov team via encrypted email. 

### API Test Team:
- Kevin Musiorski – VA.gov 
- Dillo Raju – VA.gov 
- Igor Khurgin – MuleSoft
- Jubilee Miremba – MuleSoft 
- Paul Kuprionas – Acumen
- Ramesh Dugar – Acumen
- David Wald – OIT 


### Testing and Deployment Dates:
|Test & Deploy Events|Start Date|Finish Date|Comment|
|-------------|-------------------|------------------|----------------|
|Techy Testing by VA.gov and CARMA|2/17/2022|2/22/2022| |
|Pre-prod Testing by the business and VA.gov|2/23/2022|2/28/2022| |
|Business Go/No-Go decision|2/28/2022|2/28/2022| |
|Production Deployment|3/01/2022|3/01/2022| |

### API Test Type Validation:
Service level integration covers the validation of functional, basic sanity, performance, security, and error handling testing. Postman has been chosen as the API testing tool to be used to simulate the client to test transport functions and performance.  

### Performance Testing:
VA.gov will submit requests individually and at the same time to ensure API response time and latency is checked in isolation and under load via basic sanity check. The teams will do this testing in Pre-prod and communicate any issues found using the existing VA.gov Slack channel. 

### Business and DTC Approval:
The business will test in Pre-prod for staging and then make the sign-off decision. Several sample Veterans from MPI Pre-prod will be used to make fake applications and send them through to the VA.gov testing account linked to staging (Pre-prod).

DTC will review the implementation and OIT will set up a call with the MuleSoft DTC team.

### Test Case Validation:
The API test cases will ensure the following key areas are validated while performing the test cases:
- Reliability and Response Time (basic sanity check)
- HTTP Response Status Codes
- Data Accuracy
- API return value (error codes if API returns any error)
- Authorization Checks
- Non-functional testing like security testing, performance

Call sequencing will be well planned, and a subset of the most used input combinations will be covered for maximum test coverage. Test cases are grouped based on their category and API function calls are prioritized for ease of work.

Authentication will ensure the API responds to correct authorization via agreed methods and refuses all unauthorized calls.

Test cases start with typical or expected results and then test for failure conditions to make sure the API fails consistently for negative cases and that exception and error handling functions are tested.

Data integrity and consistency between the existing direct connect and new MuleSoft proxy implementation is being ensured by using the Salesforce Id to verify the records created in CARMA have all the right data. 

### Payload Validation:
When the requests are sent to the API with some input parameters, the response will be analyzed to ensure the data is according to data model (schema validation: field names and field types are as expected; field values are as expected; non-nullable fields are not null, etc). Ensure the output payload set of test results contains the expected data. Ensure that HTTP headers are as expected, including content type, connection, and other standard header fields according to spec. The response will be validated to ensure it is received in a reasonable amount of time. 

### Test Results:
A report with the results of the testing including the following metrics will be recorded in the MuleSoft_Integration_Testing_Scenarios.xls:
- Number of test cases executed
- Number of test cases passed
- Number of test cases failed
- Number of test cases blocked 
- Number of defects deferred
- Number of defects accepted
- Number of defects rejected
- Number of critical defects (severity 1 and 2)

### Test Execution Reporting:
A report will be provided to the business via email of the types of bugs or errors detected by API testing such as security issues, performance issues, multi-threading issues, unused flags, duplicate or missing functionality, reliability issue i.e., difficulty while connecting and getting a response from the API, improper warnings or errors to the caller, unstructured response data, or valid arguments not handled correctly.

### Deployment:
The go/no go decision will be made on 2/28/2022 (based on the outcome of the test effort, our analysis, any other dependencies, risks, etc.). The MuleSoft API is expected to release to production on 3/01/2022 and VA.gov will switch to MuleSoft proxy configuration at that time. 
