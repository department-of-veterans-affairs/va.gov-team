# Dashboard MVP Requirements

_May 2018_

In this document:

- [Functionality](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Dashboard/MVP%20Requirements.md#functionality)
- [User scenarios](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Dashboard/MVP%20Requirements.md#user-scenarios)

## Functionality

### Continue applications

**What appears here:**
- Applications the user has saved in progress, and which have not expired or been deleted by the user

**If the user has no saved applications:**
- Hide section

### Track claims

**What appears here:**
- Updates to any of the user's claims and appeals that have occurred within the last 30 days
- Link to /track-claims to view all claims

**If there are no recent updates:**
- Empty state with placeholder messaging

**If the user has no claims or appeals at all (open or closed) or doesn't have access to the tool:**
- Hide section

### Check messages

**What appears here:**
- Unread secure messages
- Link to /health-care/messaging to view all messages

**If the user has no unread messages:**
- Empty state with placeholder messaging

**If the user is not a VA patient or doesn't have access to the tool:**
- Hide section

### Prescription refills

**What appears here:**
- Prescription refills in progress within the last 30 days (status = `active`, `in process`, or `submitted`) and link to view information on the prescription
- Prescription shipments that have occurred within the last 30 days (attribute = `isTrackable`) and link to view tracking information
- Link to /health-care/prescriptions to view all prescriptions

**If the user has no recent updates:**
- Empty state with placeholder messaging

**If the user is not a VA patient or doesn't have access to the tool:**
- Hide section

### Explore Our Most Used Benefits

**What appears here:**
- Links to top benefit areas
- Appears in place of Claims, Messages, and Prescriptions when **all 3** sections are hidden on the user's dashboard; otherwise this section is not shown

### Verify identity CTA

**What appears here:**
- Call to action to verify identity 
- Shown only to LOA1 users

### Resolve records CTA

**What appears here;**
- Call to action to resolve issues with VA records
- Shown only to LOA3 users whoa re not found in MVI

## User scenarios

### LOA3 + found in MVI

#### What we know about them

- We know who they are
- We know their VA records and the services they use

#### What are their primary objectives, and what are our opportunities to assist them?

**Scenario A:** active with at least 1 benefit at VA
- Primary objective: manage the benefits and services they use
- Opportunities: surface track/manage/request tools to help them get their job done efficiently

**Scenario B:** not active with any benefits, may have identity proofed only to apply for Veteran Identity Card
- Primary objective: apply for VIC (done)
- Opportunities: aid discovery of other benefits and services available to them

#### Available functionality

##### Status widgets

- Saved applications
- Claim status
- Secure messages
- Prescription refills

##### Additional resources
- Links to manage health & benefits, request records
- Links to explore & apply (in the absence of any dashboard widgets)

### LOA3, not found in MVI

#### What we know about them

- We know who they are
- We don't know anything about their VA records or the services they use - identity mismatch prevents us from making this connection

#### What are their primary objectives, and what are our opportunities to assist them?

**Scenario A:** active with at least 1 benefit at VA
- Primary objective: manage the benefits and services they use
- Opportunities: point to the Help desk to resolve identity issues, so they can use track/manage/request tools

**Scenario B:** not active with any benefits, may have identity proofed only to apply for Veteran Identity Card
- Primary objective: apply for VIC (done)
- Opportunities: aid discovery of other benefits and services available to them

#### Available functionality

##### Status widgets

- Saved applications

##### Additional resources
- Information to help resolve identity mismatch issues so they can use use track/manage/request tools
- Links to explore & apply

### LOA1

#### What we know about them

- We know who they are
- We don't know anything about their VA records or the services they use - identity mismatch prevents us from making this connection

#### What are their primary objectives, and what are our opportunities to assist them?

**Scenario A:** actively use VA benefits, just signed up and not yet aware they need to identity-proof to manage their benefits
- Primary objective: manage the benefits and services they use
- Opportunities: prompt to verify identity to use track/manage/request tools

**Scenario B:** not active with VA, signed up out of curiosity **or** to fill out an application (health care, education, etc)
- Primary objective: apply for VIC (done)
- Opportunities: aid discovery of other benefits and services available to them

#### Available functionality

##### Status widgets

- Saved applications

##### Additional resources
- Prompt to verify identity, preview of services available once identity-proofed
- Links to explore & apply
