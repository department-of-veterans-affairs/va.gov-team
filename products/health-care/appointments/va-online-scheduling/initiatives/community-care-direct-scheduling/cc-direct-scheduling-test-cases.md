# Test Cases - Community Care Direct Scheduleing 

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
 
 ### Error Case 1 - Already Have an Appointment at Selected Time
 ![image](https://github.com/user-attachments/assets/0ea8286b-e6bc-4079-b63a-5751cb340cd7)
 
 ### Error Case 2 - Couldn't Schedule Selected Appointment
 ![image](https://github.com/user-attachments/assets/3ebcd2e6-4572-4d04-ac7f-80c8c5620a4e)
 ![image](https://github.com/user-attachments/assets/3fcc9a04-7238-426a-a560-b48c2a8c5370)
 ![image](https://github.com/user-attachments/assets/5f24fdef-c171-4760-a5a1-3d9c611dc2ac)

 ### Error Case 3 - Can't Get Referral Information
 ![image](https://github.com/user-attachments/assets/cf73f0ba-0968-4271-90f3-1dffa93e58ae)

 ### Error Case 4 - Referral has Expired
 ![image](https://github.com/user-attachments/assets/d53d8386-f7fc-4443-8783-804992ecfc49)

 ### Error Case 5 - No Time Slots Available
 ![image](https://github.com/user-attachments/assets/c174cd5b-3c63-4416-bd44-e47cc4a7825b)
 
