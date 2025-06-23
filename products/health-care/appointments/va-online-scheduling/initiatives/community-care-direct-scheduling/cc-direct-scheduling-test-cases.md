# Test Cases - Community Care Direct Scheduling 

## [[Epic] Community Care Direct Scheduling](https://github.com/department-of-veterans-affairs/va.gov-team/issues/62496) 
Allows Veterans who have indicated their preference to directly schedule their community care appointments to schedule their appointment on VA.gov

## Wireframes
- [Wireframes](https://www.figma.com/design/DsRXEFiYLCFnY5nBkp9Dc4/CC-Referral-%7C-Appointments-FE?node-id=2490-44318&node-type=canvas&t=Yp56YEzCJdBOliAu-0)

## Test Users 
- [VAOS test users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-vaos.md)

## Test Cases
 
### Test Case 1 - Schedule via Push Notification
- **Configuration**
  - Test user should have an approved, non-expired referral for which they have not already scheduled an appointment

- **Test Steps**
  - Click the link received that prompts you to schedule you CC appointment
  - Navigate to [Staging](http://staging.va.gov/?next=loginModal&oauth=true)
  - Log in using ID.me and one of the [VAOS test users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-vaos.md)
  - View the task card that prompts you to schedule your CC appointment
  - Click "Go to your referral details to start scheduling"
  - View your rerferral details
  - Click "Schedule your appointment"
  - Choose an available date and time
  - Click "Continue"
  - Review your appointment information
  - Click "Confirm"
  - View your appointment details

### Test Case 2 - Schedule via VA.gov
- **Configuration**
  - Test user should have an approved, non-expired referral for which they have not already scheduled an appointment

- **Test Steps**
  - Navigate to [Staging](http://staging.va.gov/?next=loginModal&oauth=true)
  - Log in using ID.me and one of the [VAOS test users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-vaos.md)
  - View your appointments
  - Click "Review requests and referrals"
  - View all of your request and referrals
  - Select a referral for which to schedule an appointment and click "Schedule your appointment"
  - View your rerferral details
  - Click "Schedule your appointment"
  - Choose an available date and time
  - Click "Continue"
  - Review your appointment information
  - Click "Confirm"
  - View your appointment details
 
 ## Error Cases

 ### [Error Case 1 - Already scheduled the appointment in question](https://www.figma.com/design/DsRXEFiYLCFnY5nBkp9Dc4/CC-Referral-%7C-Appointments-FE?node-id=8800-17583&t=sQMaNfMSmDTNRp2w-4)
 
 ### [Error Case 2 - Already Have an Appointment at Selected Time](https://www.figma.com/design/DsRXEFiYLCFnY5nBkp9Dc4/CC-Referral-%7C-Appointments-FE?node-id=3713-15752&t=zYW9p1FINcaVJRSF-4)
 
 ### [Error Case 3 - Couldn't Schedule Selected Appointment](https://www.figma.com/design/DsRXEFiYLCFnY5nBkp9Dc4/CC-Referral-%7C-Appointments-FE?node-id=5585-5236&t=zYW9p1FINcaVJRSF-4)
  
 ### [Error Case 4 - Can't Get Referral Information](https://www.figma.com/design/DsRXEFiYLCFnY5nBkp9Dc4/CC-Referral-%7C-Appointments-FE?node-id=3707-7921&t=zYW9p1FINcaVJRSF-4)
 
 ### [Error Case 5 - Referral has Expired](https://www.figma.com/design/DsRXEFiYLCFnY5nBkp9Dc4/CC-Referral-%7C-Appointments-FE?node-id=3707-8119&t=zYW9p1FINcaVJRSF-4)
 
 ### [Error Case 6 - No time slots available](https://www.figma.com/design/DsRXEFiYLCFnY5nBkp9Dc4/CC-Referral-%7C-Appointments-FE?node-id=5844-9400&t=sQMaNfMSmDTNRp2w-4)

 ### [Error Case 7 - No online scheduling available](https://www.figma.com/design/DsRXEFiYLCFnY5nBkp9Dc4/CC-Referral-%7C-Appointments-FE?node-id=5610-51751&t=sQMaNfMSmDTNRp2w-4)

 ### [Error Case 8 - EPS error when booking appointment](https://www.figma.com/design/DsRXEFiYLCFnY5nBkp9Dc4/CC-Referral-%7C-Appointments-FE?node-id=5616-5716&t=sQMaNfMSmDTNRp2w-4)

 ### [Error Case 9 - Alert after 30 seconds of loading](https://www.figma.com/design/DsRXEFiYLCFnY5nBkp9Dc4/CC-Referral-%7C-Appointments-FE?node-id=6477-13801&t=sQMaNfMSmDTNRp2w-4)

 ### [Error Case 10 - Alert if EPS returns an error while loading](https://www.figma.com/design/DsRXEFiYLCFnY5nBkp9Dc4/CC-Referral-%7C-Appointments-FE?node-id=6477-14056&t=sQMaNfMSmDTNRp2w-4)

 ### [Error Case 11 - Referrals and requests, entire page error](https://www.figma.com/design/DsRXEFiYLCFnY5nBkp9Dc4/CC-Referral-%7C-Appointments-FE?node-id=6750-7680&t=sQMaNfMSmDTNRp2w-4)

 ### [Error Case 12 - Referrals and requests, Referrals error](https://www.figma.com/design/DsRXEFiYLCFnY5nBkp9Dc4/CC-Referral-%7C-Appointments-FE?node-id=6750-7699&t=sQMaNfMSmDTNRp2w-4)

 ### [Error Case 13 - Referrals and requests, Requests error](https://www.figma.com/design/DsRXEFiYLCFnY5nBkp9Dc4/CC-Referral-%7C-Appointments-FE?node-id=6750-7634&t=sQMaNfMSmDTNRp2w-4)
 
