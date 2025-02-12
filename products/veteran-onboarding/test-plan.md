# Release Scope

Are there new features being released in this version? 
Yes, when an LOA3 user logs in and is missing at least one out of three of their pieces of profile contact information, then they will be shown a ‘Your Profile is Missing Contact Information, Complete your Profile’ message with a link to do so.  The link will take you to a new form with three fields: Ph #, Mailing Address, Email Address, which you can edit individually

### What are the risk areas?

An error occurring when a user logs in to VA.gov and the Missing contact info message does not appear (this will not impede the veteran from doing anything on VA.gov, though)
IF there were an error with the feature and we had to regress, veterans could still update their contact information via their Profile page

### What type of release is it? Is this a maintenance release that includes bug fixes? Is this a minor feature release? Is this a major feature release?

Major feature release that will allow veterans to update their contact information easily, up front and in the open, which will set them up to be able to apply for benefits quickly

### What does being “done” actually look like for your team?

Being ‘done’ with this first iteration means that an LOA3 verified user will be able to log in to VA.gov and if they are missing a piece of their contact information, they will be able to successfully update it via our new form

## Functional Testing Objectives

Ensure the software works as it should. Goals for this objective include: Validating user workflows, data processing, and verifying input/output parameters.

## Approach

Take an LOA3 test user missing a phone number in their profile contact information, log in with them, ensure that we see the new Update your contact information message with the link to the form.  Proceed to the link and ensure that the link takes us to the form where we can now edit the phone number that is missing.  This should take us to another page where we will edit only the phone number and then click save.  Once we verify this information has been saved, our test will be successful.
We need to repeat this process exactly for an LOA3 user that has a missing mailing address and then again for one that is missing their email address to ensure that all fields are functioning correctly.
