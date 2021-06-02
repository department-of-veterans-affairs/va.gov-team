
# What is LoROTA?
 Low Risk One Time Authentication, or LoROTA, is a simple service that uses a unique encrypted string passed between a user and various services to authenticate that user for certain low risk activities, like form submission.

##  LoROTA does two things:  

- it receives information, generates a unique encrypted string that represents the received information, and returns the encrypted string to the caller

- it receives an encrypted string, verifies that the encrypted string is authentic, and returns the decrypted information to the caller

## Why use LoROTA?
###  Applications that use LoROTA do so for three reasons: 

1. The uniqueness of a LoROTA encrypted string can be used to verify that the a user moving between modalities (i.e. text message to web) is the same user. 
2. The ability to securely store information in the encrypted string enables application to pass around sensitive information via open means (i.e. a URL parameter) without needing to create and store copies of the sensitive information in one or more places. 
3. The ability to store authorization details related to what the user is authorized to do within the workflow.

## An Example Use Case:
### What is Clipboard?
- Clipboard is a VA.gov product that a patients uses to supply information to a clinician before, during, or after a visit. The patient arrives at Clipboard via a URL that is included with a pre-visit or after-visit text message reminder. Currently, to use Clipboard, a user must login on VA.gov using a credential (ID.me, DSLogon, MHV). Once that user is logged in, Clipboard displays all open questionnaires that their provider would like them to complete (e.g. a mental health screening questionnaire, or “Any changes in medication since your last visit?“). 

### How might Clipboard use LoROTA?
- Authentication. Replace VA.gov login with a LoROTA encrypted string for carrying user authentication from text message to web. When a pre-visit or after-visit text message is sent that includes a Clipboard-based questionnaire URL, encode the LoROTA encrypted string in the URL. When the user opens the URL in the browser, the VA.gov backend can verify the encrypted string, thus establishing that the user who was sent the text message is highly likely the user who is now trying to access Clipboard on VA.gov

- Cross-modality data sharing. Encode location and organization (i.e. facility and clinic) information in the LoROTA encrypted string so it is immediately available to Clipboard. This allows Clipboard to drop the user directly into the correct questionnaire that is associated with the pre-visit or after-visit text message that was sent.

- Authorization. Prevent the user from completing any other forms within Clipboard except those specifically related to this workflow. 

# What is LoROTA Light?
LoROTA Light is a subset of LoROTA with the primary difference being that instead of passing an encrypted string containing sensitive data as a unique identifier, a simple UUID is passed. 

## Why use LoROTA Light?
### Applications that use LoROTA Light do so for one reason:
1. The uniqueness of a LoROTA encrypted string can be used to verify that the a user moving between modalities (i.e. text message to web) is the same user.

## An Example Use Case:
### What is Check In Experience?
- Check In Experience (near term MVP) is a VA.gov product that will allow a Veteran with an appointment to check in for that appointment from va.gov. 

- [Sequence Diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/engineering/lorota/Lorota_Light_Sequence.png)

### How might Check In Experience use LoROTA Light?
The Check In Experience workflow begins with the Veteran sending an SMS text message to VeText indicating that they are in the clinic and ready to check in. VeText sends a SMS response containing a link to VA.gov Check In Experience that includes a LoROTA Light UUID. When the Veteran clicks the link, the VA.gov Check In Experience page loads. The current scope of this product is to display minimal appointment data and a `Check In` button.  This workflow mimics a pattern established by VeText and the `I Am Here` application, with the primary difference being the change in modality from SMS to Web. When the `Check In` button is clicked and the request received by VeText, the UUID is invalidated. 
