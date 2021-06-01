
# What is LoROTA?
 Low Risk One Time Authentication, or LoROTA, is a simple service that uses a unique encrypted string passed between a user and various services to authenticate that user for certain low risk activities, like form submission.

##  LoROTA does two things:  

- it receives information, generates a unique encrypted string that represents the received information, and returns the encrypted string to the caller

- it receives an encrypted string, verifies that the encrypted string is authentic, and returns the decrypted information to the caller

## Why use LoROTA?
###  Applications that use LoROTA do so for two reasons: 

1. The uniqueness of a LoROTA encrypted string can be used to verify that the a user moving between modalities (i.e. text message to web) is the same user. 
2. The ability to securely store information in the encrypted string enables application to pass around sensitive information via open means (i.e. a URL parameter) without needing to create and store copies of the sensitive information in one or more places. 

## An Example Use Case:
### What is Clipboard?
- Clipboard is a VA.gov product that a patients uses to supply information to a clinician before, during, or after a visit. The patient arrives at Clipboard via a URL that is included with a pre-visit or after-visit text message reminder. Currently, to use Clipboard, a user must login on VA.gov using a credential (ID.me, DSLogon, MHV). Once that user is logged in, Clipboard displays all open questionnaires that their provider would like them to complete (e.g. a mental health screening questionnaire, or “Any changes in medication since your last visit?“). 

### How might Clipboard use LoROTA?
- Authentication. Replace VA.gov login with a LoROTA encrypted string for carrying user authentication from text message to web. When a pre-visit or after-visit text message is sent that includes a Clipboard-based questionnaire URL, encode the LoROTA encrypted string in the URL. When the user opens the URL in the browser, the VA.gov backend can verify the encrypted string, thus establishing that the user who was sent the text message is highly likely the user who is now trying to access Clipboard on VA.gov

- Cross-modality data sharing. Encode location and organization (i.e. facility and clinic) information in the LoROTA encrypted string so it is immediately available to Clipboard. This allows Clipboard to drop the user directly into the correct questionnaire that is associated with the pre-visit or after-visit text message that was sent.
