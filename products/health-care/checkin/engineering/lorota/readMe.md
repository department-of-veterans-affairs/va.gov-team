
# What is LoROTA?
 Low Risk One Time Authentication, or LoROTA, is a simple service that uses a unique key (UUID)passed between a user and various services to authenticate that user for certain low risk activities, like form submission.

##  LoROTA does two things:  

- it receives information, generates a UUID, encrypts and stores the information in a datastore using UUID as the key and returns the UUID to the caller

- it receives a UUID, verifies that the UUID is authentic, and returns the decrypted information to the caller

[Sequence Diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/engineering/lorota/Lorota_simple_Sequence.png)

## A simple explanation of LoRota
LoRota acts as both an auth source and data store for check-in/pre-check-in. For check-in and pre-check-in we store appointment and demographics data in LoRota but this data is not related to authentication at all. The only auth part of LoRota is the UUID, last name, and DOB.

LoRota entries are created from a request from VEText. VEText sends the auth details and data to be stored in LoRota and gets a UUID in return. On a GET endpoint using the UUID a read.basic payload is returned to indicate that the UUID exists and has an entry that can be authenticated into. On a POST endpoint using the UUID and last name/DOB in the payload, the read.full payload is returned if the DOB and last name are correct. The read.full payload consists of veteran and appointment data as well as any other contextual data related to the entry. 

This combination of texting from a known number and entering the correct last name and DOB is the entire low auth solution. 

## Why use LoROTA?
###  Applications that use LoROTA do so for two reasons: 

1. The uniqueness of a LoROTA UUID can be used to verify that the a user moving between modalities (i.e. text message to web) is the same user. 
2. The ability to securely store and retrieve information using the UUID enables application to pass around access to sensitive information via open means (i.e. a URL parameter) without exposing the sensitive data (encrypted or not) to end users. 

## Example Use Cases:
### What is Clipboard?
- Clipboard is a VA.gov product that a patients uses to supply information to a clinician before, during, or after a visit. The patient arrives at Clipboard via a URL that is included with a pre-visit or after-visit text message reminder. Currently, to use Clipboard, a user must login on VA.gov using a credential (ID.me, DSLogon, MHV). Once that user is logged in, Clipboard displays all open questionnaires that their providers would like them to complete, for all upcoming appointments (e.g. a mental health screening questionnaire, or “Any changes in medication since your last visit?“). 

### How might Clipboard use LoROTA?
- Authentication. Replace VA.gov login with a LoROTA UUID for carrying user authentication from text message to web. When a pre-visit or after-visit text message is sent that includes a Clipboard-based questionnaire URL, encode the LoROTA UUID in the URL. When the user opens the URL in the browser, the VA.gov backend can verify the UUID by calling LoROTA, thus establishing that the user who was sent the text message is highly likely the user who is now trying to access Clipboard on VA.gov

- Cross-modality data sharing. Encode location and organization (i.e. facility and clinic) information in the LoROTA datastore so it is returned to Clipboard upon successful validation of the UUID. This allows Clipboard to know which appointment forms should be displayed, and thus drop the user directly into the correct questionnaire that is associated with the pre-visit or after-visit text message that was sent.


### What is Check In Experience?
- Check In Experience (near term MVP) is a VA.gov product that will allow a Veteran with an appointment to check in for that appointment from va.gov. 

### How might Check In Experience use LoROTA Light?
The Check In Experience workflow begins with the Veteran sending an SMS text message to VeText indicating that they are in the clinic and ready to check in. VeText sends a POST to LoROTA that includes the minimal amount of data required to check in to an appointment.  LoROTA encrypts and stores the data and returns a UUID to VeText. VeText sends a SMS response to the user containing a link to VA.gov Check In Experience that includes the LoROTA UUID. When the Veteran clicks the link, the VA.gov Check In Experience page loads, extracts the UUID from the URL paramaters, passes it to vets-api where a GET request is sent to LoROTA to validate the UUID. Upon validation, the data stored by LoROTA will be decrypted and returned to vets-api, and minimal appointment data will be displayed to the user, along with a `Check in` button.  When the `Check in` button is clicked and a successful response returned, a DELETE request is sent to LoROTA to ensure the UUID is invalidated and the data removed. 

## Other Details

### How might the application originating the data control how the data is used?

When the originating application sends the POST to LoROTA containing the sensitive information, a configuration file will also be sent.  This configuration file can include any parameters needed between the Originating and Consuming applicaitons, and at a minumum the following will be required:
- validStart: This is the dateTime that the data can begin to be accessed.
- validEnd: This is the dateTime that the data will be removed and the UUID invalidated, if not already. 
- timeToLive: This is an integer representing the duration this data should be available from the first time it is accessed. When this expires the data will be deleted and the UUID invalidated.
- canRefresh: This is a boolean indicating if the timeToLive property can be refreshed when the data is accessed.
- additionalValidation: This is a string or object representing the additional validation checks the consuming application should take before presenting the senstive data to the user (e.g.: Date of Birth, Last 4 of SSN).

### How will the originating and consuming applications verify that they are authorized to access LoROTA endpoints
This can be accomplished in any standard way using API keys.  All access to LoROTA endpoints will be secured and only authorized applications will be able to access the endpoints. 
