# Manual-UI Test Plan - Travel Pay for Past Appointments -------- DRAFT ------------------

## Project Summary Epic [[Epic] Community Care Direct Scheduling](https://github.com/department-of-veterans-affairs/va.gov-team/issues/62496) 
Added a feature that allows Veterans to submit a simple mileage-only travel reimbursement claim for past VA appointments that have occurred in the past 30 days.

## Business Rules 
- Veterans can file a travel reimbursement claim for up to 30 days after the appointment date
- Veterans can only file a travel reimbursement claim for appointments that occurred at a VA facility
- Veterans can file only one travel reimbursement claim per day per VA facility

### Use Cases
 
- [ ] Use Case 1 - Submit simple mileage-only travel reimbursement claim

* **Configuration**
  - [ ] Test user should have a VA in person appointment scheduled for within the last 30 days for which a travel reimbursement claim has not been submitted

* **Test Steps**
  - Navigate to [Staging](http://staging.va.gov/?next=loginModal&oauth=true)
  - Log in using ID.me and one of the [VAOS test users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-vaos.md)
  - Navigate to **VA Benefits and Health Care** -> **Health care** -> **Schedule and manage health appointments**
  - Choose **Go to appointments on VA.gov**
  - Choose link **Past** to navigate to past appointments
  - Choose link **Details** for an appointment within the last 30 days to navigate to the appointment details
    - See the number of days left to file for travel reimbursement (see wireframes)
  - Choose link **File a travel reimbursement claim** to navigate to the new Simple Mileage-Only Travel Claim form
  - TBD.........

### Wireframes
- [Wireframes](https://www.figma.com/design/RzugGEmu4drhCSHTyQ6hjl/Simple-mileage-only-travel-pay-claim-submission?node-id=2135-3&node-type=canvas&t=jLGyVxAHgNZE13q2-0)

### Test Users 
- [X] [VAOS test users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-vaos.md)

### Summary Defect Report
- TBD

### Traceability Report 
- [X] [VAOS](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/frontend-support-dashboard/unit-test-coverage-report/)

### E2E tests 
- [X] File path: `vets-website/src/applications/vaos/appointment-list/components/AppointmentsPageV2`
- [X] [Product's code link](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/vaos/appointment-list/components/AppointmentsPageV2)

### Code coverage
- [X] File path: `vets-website/src/applications/vaos/appointment-list/components/AppointmentsPageV2`
- [X] [Product's code link](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/vaos/appointment-list/components/AppointmentsPageV2)
