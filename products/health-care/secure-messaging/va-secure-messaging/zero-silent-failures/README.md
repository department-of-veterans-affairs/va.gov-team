# Zero Silent Failures 

## Highlights

- All Veteran facing processes synchronous 
- The SM API has technical debt around error handling 

## Questions Answered

### Some SM API  Discovery

> Where does the file scanning happen? Is that a different server or the same server?
--> Scanning happens in K8S ClamAV service running, which is invoked by SM Patient APIs.
> Just to confirm, all the file processing,  scanning, and saving happens synchronously in the request?
--> Yes
> To expand this, it looks like all the operations from the Veteran clicking send to the saving the message (and attachments) all happen synchronously. Can you confirm there is no background workers that get fired when a Veteran sends a message?
--> There are no background workers.
> Where are the file data saved? Database? external File server?
--> Encrypted tablespace in the Database.
> For emails, if the email fails do we any sort of response from the SMTP server?
--> If the email is not sent out by VA SMTP server or email bounces back, VA SMTP server would not send anything back.
> My impression of this code is if an error happens inside that try statement, we are logging it (awesome!) and carrying on like normal essentially swallowing the error. Is that correct?
--> Correct, If there are any exceptions while creating a thread/creating a message, catch block logs exception for troubleshooting and on the client response, client has to make sure the response JSON object has message id (generated) to confirm that the message is successfully created or not in the API along with 200 response.
