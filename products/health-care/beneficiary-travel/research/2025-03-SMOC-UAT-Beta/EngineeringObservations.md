# Engineering Observations 

This page documents technical issues observed during UAT Beta sessions.  Reach out to Kevin Duensing if you have questions about the content of this page.



### Participant 3

- **Issue**: Unexpected status ==> In Manual Review

- **Reason**: Failed rules engine: > 2 days in the past, not marked as closed

- **Status**: As expected

- **Notes**: Not sure why it was not marked as closed, but no control over that
-----------------------

### Participant 5

- **Issue**: Failed submission

- **Reason**: Missing appointment data from API

- **Status**: Handed off to API team

- **Notes**: Tim to talk to Base Team regarding plugin -> VistA authorization error
-----------------------

### Participant 6

- **Issue**: Unexpected status ==> In Manual Review

- **Reason**: Claim doesn't have a received date

- **Status**: Handed off to API team

- **Notes**: Claim failed a recently added rules engine feature
-----------------------

### Participant 7

- **Issue**: Failed submission

- **Reason**: Failed attaching expense (500 from API)

- **Status**: Handed off to API team

- **Notes**: Failed attaching mileage expense due to missing home address geocodes.
-----------------------

### Participant 12

- **Issue**: Link to SMOC on appointment more than 30 days old

- **Reason**: Logic around showing the link did not include a 30 days check

- **Status**: Handed off to check in team

- **Notes**: On the Intro page it did show an alert informing the user that they could not file for that appointment.
-----------------------

### Participant 14

- **Issue**: Failed submission

- **Reason**: Missing appointment data from API. Logs show same errors as Participant 5.

- **Status**: Reviewed by VA.gov team

- **Notes**: Tim to talk to Base Team regarding plugin -> VistA authorization error
-----------------------

### Participant 17

- **Issue**: Failed submission

- **Reason**: Missing appointment data from API. Datadog logs show same errors as Participant 5.

- **Status**: Reviewed by VA.gov team and handed off to API team

- **Notes**: Facility did not have a record in BTSSS so the appointment wasn't added to Dynamics.
-----------------------

### Participant 18

- **Issue**: Unexpected status ==> In Manual Review

- **Reason**: Failed 2 rules: Facility for claim was not listed as the claimant's home facility; appointment not marked as "complete"

- **Status**: As expected for home facility

- **Notes**: Not sure why appointment was not marked as completed/closed, but no control over that.

