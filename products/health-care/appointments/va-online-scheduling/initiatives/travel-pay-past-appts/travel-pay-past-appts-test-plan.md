# Test Cases - Travel Pay for Past Appointments

## [[Epic] Community Care Direct Scheduling](https://github.com/department-of-veterans-affairs/va.gov-team/issues/62496) 
Added a feature that allows Veterans to submit a simple mileage-only travel reimbursement claim for past VA appointments that have occurred in the past 30 days for in-person appointments, vaccine appointments, or video appointments at a VA facility.

## Business Rules 
- An appointment is eligible for mileage-only travel reimbursement when
        - It occured within the last 30 days
        - It is one of these in-person appointment types:
            - In-person appointment
            - In-person vaccine appointment
            - Video at a VA facility appointment 
- Veterans can file only one mileage-only travel reimbursement claim per day per VA facility

## Wireframes
- [Wireframes](https://www.figma.com/design/RzugGEmu4drhCSHTyQ6hjl/Simple-mileage-only-travel-pay-claim-submission?node-id=2135-3&node-type=canvas&t=URUEyTcnHHThVESn-0)

## Test Users 
- [X] [VAOS test users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-vaos.md)

## Use Cases
 
#### Use Case 1 - Submit Claim
- **Configuration**
  - Test user should have a VA in person appointment scheduled for within the last 30 days for which a travel reimbursement claim has not been submitted for the appointment date & facility

- **Test Steps**
  - Navigate to [Staging](http://staging.va.gov/?next=loginModal&oauth=true)
  - Log in using ID.me and one of the [VAOS test users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-vaos.md)
  - Click Continue
  - Click Continue
  - Navigate to **VA Benefits and Health Care** -> **Health care** -> **Schedule and manage health appointments**
  - Choose **Go to appointments on VA.gov**
  - Click link **Past** to navigate to past appointments
  - Click link **Details** for an in-person or video at VA appointment within the last 30 days to navigate to the appointment details
  - See the number of days left to file for travel reimbursement and verify
  - Choose link **File a travel reimbursement claim** to navigate to the new Simple Mileage-Only Travel Claim form
  - Complete and submit the form (i.e. answer yes to all questions)
  - See confirmation that the claim has been submitted

#### Use Case 2 - View Claim Status
- **Configuration**
  - Test user should have a VA in person appointment scheduled for within the last 30 days and for which a travel reimbursement claim has alreay been submitted for the appointment date & facility

- **Test Steps**
  - Navigate to [Staging](http://staging.va.gov/?next=loginModal&oauth=true)
  - Log in using ID.me and one of the [VAOS test users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-vaos.md)
  - Click Continue
  - Click Continue
  - Navigate to **VA Benefits and Health Care** -> **Health care** -> **Schedule and manage health appointments**
  - Choose **Go to appointments on VA.gov**
  - Click link **Past** to navigate to past appointments
  - Click link **Details** for an in-person or video at VA appointment for which a mileage-only travel claim has already been submitted
  - See content that says a claim has already been filed for this appointment
  - Choose link **Check your claim status** to navigate to the new Travel Claim Status tool
  - Select the claim and view the status
