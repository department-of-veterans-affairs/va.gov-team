## UX decisions for Secure Messaging on vets.gov

### API limitations
Due to API limitations, the following UX decisions were made for the vets.gov MVP launch on Veterans day:
- Users will not be able to perform bulk operations, such as moving multiple messages between folders at once and deleting multiple messages at once. 
- Users cannot rename folders. 
- Users will not be able to sign up to receive email notifications when clinicians respond to their messages.
- Users will not be able to create an email signature to be added at the end of each of their messages.
- Users are only able to search a single folder at a time, but not across all their messages
- Users can search messages by the content in the to/from and subect line fields, as well as the date the message was sent or received, but not by the content in the body of the message or attachments. 
- Messages are removed from the user interface after 365 days

If the API were changed to add any of the above features, we would also add the functionality for vets.gov users.  

### Purposeful Choices
The below were conscious UX decisions that were not driven by the API:

- We placed a 2000 character limit on messages, as requested by stakeholders.
- We changed the layout of threads and replying to messages to utilize common design patterns seen in modern email clients that Veterans use today. 
- We collapsed more detailed information about a message, when a Veteran views a message, so that  the message would be higher up for the Veteran to read. 
- We took out the autofill of the subject line when a subject is selected from the dropdown because it was redundant and didn't add more information to the message. Instead we let the Veteran select a subject and if they want to add more information they can in the text field next to the dropdown which would then be appended to the subject.
- We added a modal when a Veteran deletes a draft to know that it will permanently deleted, not moved to the deleted folder. 
- We made the advanced search clearer by stacking the form fields so it’s easier for the Veteran to fill out the fields. 

### Stakeholder Feedback
Based on feedback from the stakeholders, we made the changes outlined here:
https://github.com/department-of-veterans-affairs/kudos-team/blob/master/SecureMessaging/SM-stakeholder-review.md
