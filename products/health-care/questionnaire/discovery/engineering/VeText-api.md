The VEText SMS Messaging API allows for creating message templates and sending SMS (text) messages to veterans, staff, or other customers.

Workflow
The workflow for a customer of the VEText SMS API is as follows:

Use the Message Template API to create a template for a specific use-case.
Use the Send Message API to send a message to a customer.
Modify templates as needed to meet changing business needs.
 
Message Templates
The Message Template API calls allow for retrieving and updating the message templates used with the VVC messages.

A message template is used with the SMS Send API.  Message templates can have placeholders for values that are supplied when calling the SMS Send API.

A GET request retrieves an existing template:

/api/vetext/pub/sms/template/{sid}
The sid parameter is the unique ID of the message template.

Example:

curl --user user:pass -G \
https://vetext-server/api/vetext/pub/sms/template/6ee4c7956c77450a81e4d3a72f6f94c7
Sample response:

{
  "messageTemplate": "Your VA Provider would like you to answer some questions on how you are doing. Please visit BHL_URL",
  "name": "BHL Template",
  "sid": "6ee4c7956c77450a81e4d3a72f6f94c7"
}
An example of a placeholder is the BHL_URL parameter in the message template.  The value of this parameter would be supplied when calling the SMS Send API using this template.

A more complex message template with multiple placeholders (i.e. the capitalized parameters) follows:

{
  "messageTemplate": "You have a VA video appointment @ LOCATION_NAME, LOCATION_ADDRESS, LOCATION_CITY, LOCATION_STATE LOCATION_ZIP on APPOINTMENT_DATE at APPOINTMENT_TIME.\r\n\r\nUse code CODE to join your video visit from the computer @ LOCATION_NAME\r\n\r\nIf you are unable to make the appointment in person, you may join from your own device using:\r\nVVC_URL",
  "name": "VVC Test ATLAS Template",
  "sid": "2c6140f749994f7dbf7dd72321c9fdd6"
}
Note that the format of the placeholders is arbitrary, and any format may be used.  For example, the placeholders could be book-ended by percents (e.g. %LOCATION_NAME%) or brackets (e.g. {location_name}), etc.  The placeholders are case-sensitive.

A PUT request creates or updates the template.

Example:

curl --user user:pass -X PUT -H "Content-Type: application/json" -d "{\"name\":\"My Template\",\"messageTemplate\":\"This is a new message template with a placeholder for DATE_TIME.\"}" https://vetext-server/api/vetext/pub/sms/template/save
The above API call would create a new template with the name and template content supplied.  The response of this call returns the template SID which is used when updating the template and when using the SMS Send API.

Note:  This API currently creates an inactive message template that must then be reviewed and activated by the VEText team.  Once the template has been reviewed and activated then it will be available for use with the SMS Send API.

To update a message template invoke the same call but include the template sid:

curl --user user:pass -X PUT -H "Content-Type: application/json" -d "{\"sid\":\"6ee4c7956c77450a81e4d3a72f6f94c7\",\"name\":\"My Template\",\"messageTemplate\":\"This is the updated text of the message template.\"}" https://vetext-server/api/vetext/pub/vvc/template/save
 

Sending SMS Messages
The SMS Send API allows for sending text messages using message templates created using the Message Template API.

The API is invoked via a POST request to the following path:

/api/vetext/pub/sms/send
The API expects a JSON document as the payload of the request specifying the sid of the message template, the values for the placeholders in the template, and the customer to whom the message will be sent.

The following is an example of the JSON payload for an SMS send request:

{ 
    "templateSid": "6ee4c7956c77450a81e4d3a72f6f94c7",
    "templateValues": {
        "BHL_URL": "https://bhl.va.gov/as1R3Af"
    },
    "customer": {        
        "stationNo": "605",
        "dfn": "99999"
    }
}
In the above example, the value for the BHL_URL placeholder is provided, which the API will use to create the message with the supplied parameter.

A more complex JSON payload with multiple placeholders follows:

{ 
    "templateSid": "2c6140f749994f7dbf7dd72321c9fdd6",
    "templateValues": {
        "LOCATION_NAME": "Your Town Walmart",
        "LOCATION_ADDRESS": "123 Main Street",
        "LOCATION_CITY": "Your Town",
        "LOCATION_STATE": "TX",
        "LOCATION_ZIP": "12345",
        "APPOINTMENT_DATE": "AUG 3",
        "APPOINTMENT_TIME": "10:30 EST",
        "CODE": "5150",
        "VVC_URL": "https://care.va.gov/vvc-app"
    },
    "customer": {
        "stationNo": "605",
        "ssn": "000001234"
    }
}
The placeholders are passed as a list of key-value pairs in the "templateValues" section, and must exactly match the placeholders in the corresponding message template with respect to case and format.

The client must pass either an ICN or a station number in combination with either a DFN or SSN in the "customer" section. The API will verify a DFN or SSN with VistA and an ICN is verified against VA Profile.  

The cell phone # is optional, but if it is included then VEText will use it over what is in either VA Profile or VistA. If the cell phone # is not included then the cell phone # will be obtained either from VA Profile (ICN) or from VistA (station # and DFN/SSN).

The following is an example of sending a message with a single placeholder and with an ICN specified (no station number is required for the ICN).  In this case VEText will look up the patient's cell phone number in VA Profile.

curl --user user:pass -X POST -H "Content-Type: application/json" -d "{\"templateSid\": \"6ee4c7956c77450a81e4d3a72f6f94c7\",\"templateValues\": {\"BHL_URL\": \"https://bhl.va.gov/as1R3Af\"},\"customer\": {\"icn\": \"10034829847\"}}" https://vetext-server/api/vetext/pub/sms/send
Sample response:

{
  "accountSid": "BD7843E8F04F446xxxxxxxxxxxx",
  "cellPhone": "9090004321",
  "dateSent": "2020-07-26 16:57:41",
  "dfn": "99999",
  "message": "Your VA Provider would like you to answer some questions on how you are doing. Please visit https://bhl.va.gov/as1R3Af",
  "messageSid": "SMb77a2fde177843deb60aa32fe76e9461",
  "stationNo": "605",
  "templateSid": "6ee4c7956c77450a81e4d3a72f6f94c7"
}
If an error occurs, for example if the patient identifiers were invalid or the phone number provided was not valid, the error information is returned in the "errorCode" and "errorMessage" fields:

{
  "accountSid": "BD7843E8F04F446xxxxxxxxxxxx",
  "cellPhone": "9090001234",
  "dateSent": "2020-07-26 15:05:05",
  "dfn": "99999",
  "errorCode": "21211",
  "errorMessage": "Not a valid phone number.",
  "message": "Your VA Provider would like you to answer some questions on how you are doing. Please visit https://bhl.va.gov/as1R3Af",
  "stationNo": "605",
  "templateSid": "6ee4c7956c77450a81e4d3a72f6f94c7"
}
 
Errors
Access Denied (HTTP 403) - Invalid authentication credentials.
Invalid Template SID (HTTP 400) - The template SID passed to the API was not valid.
No Template SID Specified (HTTP 400) - The required template SID was not passed to the API.
Inactive Message Template (HTTP 400) - The message template has not been activated or has been deactivated.
No Customer Specified (HTTP 400) - The Customer section of the payload is missing.
Invalid Patient Identifier (HTTP 400) - Could not identify a patient based on the identifiers passed to the API.
No Phone Number Found (HTTP 400) - Could not find a phone number for the identifiers passed to the API.
Invalid Phone Number (HTTP 200) - SMS gateway reports that the phone number is not a mobile phone (this is in the errorMessage field)
 
Authentication
The VEText SMS Messaging REST API service is secured with basic authentication.

 

More Info
For more information or technical assistance please contact the VEText Team at vhalomvetext@va.gov.