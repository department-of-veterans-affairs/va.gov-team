# Chapter 31 Staging Review Artifacts  

### Staging URL
You can find our form on staging at https://staging.va.gov/temporary/apply-vre-form-28-1900. Please note, this is only a temporary URL for staging. We'll be using the same URL as the current form on production when we release this new form app (i.e., https://www.va.gov/careers-employment/vocational-rehabilitation/).  Cutting over from the current form to the new form is part of our deployment process. We added an alert to the current form, which has been live on production for about 30 days and will remain in place for at least 60 days before we release our new form, letting veterans know about the cutover so they have time to complete their save-in-progress work.

### Test Users & scenarioes
-  LOA3 user who does not have a current Save In Progress VR&E application - vets.gov.user+54@gmail.com | 242SsNrLgPv5
-  LOA3 user who does not have a current Save In Progress VR&E application - vets.gov.user+7@gmail.com | 177SsNrLgPv5
-  LOA3 user who does not have a current Save In Progress VR&E application - vets.gov.user+150@gmail.com | 284SsNrLgPv5
-  LOA3 user who does have a current Save In Progress VR&E application - vets.gov.user+0@gmail.com | 369SsNrLgPv5

-  All users should receive errors when trying to move to next page without required fields or if fields fail validation. Otherwise, users should see a success message after filling out all required fields and submitting the form.

### Known Issues
- [VBMS Uploader is using wrong pdf form - BE](https://github.com/department-of-veterans-affairs/va-iir/issues/1803)
     - [PR for this Bug](https://github.com/department-of-veterans-affairs/vets-api/pull/22881)
- [Additional Cypress Testing](https://github.com/department-of-veterans-affairs/va-iir/issues/1808)
- [Update transformForSubmit function to modify all three telephone inputs to remove dashes](https://github.com/orgs/department-of-veterans-affairs/projects/1360/views/1?pane=issue&itemId=117281433&issue=department-of-veterans-affairs%7Cva-iir%7C1809)

### CAIA intake ticket
- https://github.com/department-of-veterans-affairs/va.gov-team/issues/75169
  
### Accessibility Test Artifact

- [Accessibility Test Artifact](https://github.com/department-of-veterans-affairs/va.gov-team/issues/112905)

### **Regression Testing Plan for VA Form 28-1900 Launch**

**Product/Feature:** Veteran Benefit Form – VA Form 28-1900

**Environment:** Dev → Staging → Production

**Owner:** \[Mike King\], Product Manager

**Date:** \[7/22/25\]

---

#### **1\. Purpose**

Ensure that the new 28-1900 form and associated features do not negatively affect existing functionality across VA.gov and that the form works as expected across platforms, devices, and common user paths.

---

#### **2\. Scope of Regression Testing**

**In-Scope:**

* Form rendering, validation, submission, and confirmation  
* Authentication flow (ID.me / Login.gov)  
* VA.gov form platform functionality  
* Form download, print, and save-in-progress behaviors  
* Error handling and alert banners  
* Analytics events (GA / DataDog)  
* Downstream processing in VA back-end systems (covered under UAT/Integration testing)

**Out of Scope:**

* Non-related VA.gov pages

---

#### **3\. Test Scenarios**

| Test Area | Scenario Description | Expected Result |
| ----- | ----- | ----- |
|  |  |  |
| **Form Access** | Navigate to [staging.va.gov/temporary/apply-vre-form-28-1900](https://staging.va.gov/temporary/apply-vre-form-28-1900) while logged out | Redirect to login or allow guest access depending on flow |
| **Authentication** | Test sign-in with each supported credential provider | User is authenticated and returned to form |
| **Form Load** | Form loads with no errors | All components render properly |
| **Field Validation** | Leave required fields empty and try to continue | Error messages display appropriately |
| **Conditional Logic** | Select options that reveal conditional fields | Conditional fields show/hide properly |
| **Form Submission** | Complete form and submit | Success page is shown with confirmation |
| **Save in Progress** | Start form, save, sign out, return later | Draft is preserved |
| **Accessibility (a11y)** | Use screen reader to navigate and fill out form | Form is screen-reader compatible |
| **Download/Print** | Try to download or print the form | File prints or downloads correctly |
| **Analytics** | Confirm events fire on form start, field entry, and submission | Events log to analytics tools as expected |

---

#### **4\. Regression Dependencies**

* Platform updates (VA.gov form system)  
* Identity/authentication systems  
* Analytics trackers  
* RES Downstream System

---

#### **5\. Roles & Responsibilities**

| Role | Name | Responsibility |
| ----- | ----- | ----- |
| Product Manager | Mike King | Own test scope and final approval |
| Designer | Ian Hilton | Verify UI/UX alignment |
| Developer | John Rodriguez, Nick Sayre, Kyle Henson | Fix issues, support debugging |

---

#### **6\. Test Execution Timeline**

| Phase | Dates | Notes |
| ----- | ----- | ----- |
| Regression on Staging | 6/25/25 |  |
| Fixes & Revalidation | 7/24/25 |  |
| Final UAT / Smoke Test | 7/29/25 |  |
| Production Deployment | 8/4/25 | Follow-up smoke test on prod |

---

#### **7\. Exit Criteria**

* All critical bugs resolved or mitigated  
* A11y checks complete (AXE/VoiceOver)  
* Analytics validated  
* Sign-off from PM and QA

### Test Plan
- All new vets-website apps and form apps use a value in content-build called vagovprod that gets turned from false to true to display on va.gov. At release we will manually verify and document all aspects of the product including the following test scenarios. All of these have been verified in Staging.
   - As a Veteran, I want to have a positive experience when completing the online form. - happy path, successful submission of application.
   - As a Veteran, I don't want to be able to submit an incomplete form, so I would like to not be allowed to submit the form unless completed.
   - As a Veteran, I would like to be able to have Save In Progress functionality available in case I cannot finish the form after I have started and do not want to restart all over from the beginning.
   - As a Veteran, I would want the online form to be accessibility friendly.
   - As a Veteran, I would like to receive error messages telling me when something has happened that is not normal or if I cannot proceed at the current time for any reason.
   - As a Veteran, I would like to be able to successfully enter subsequent information if there is any conditional aspects of the form where I could potentially go down one route or another depending on my answer.

### **Test Case 1**

**Title:** User can submit the VA Form 28-1900 successfully

**Steps:**

1. Navigate to https://staging.va.gov/temporary/apply-vre-form-28-1900  
2. Sign in using a valid VA.gov credential (e.g., ID.me, Login.gov)  
3. Click “[**Apply for Veteran Readiness and Employment with VA Form 28-1900**](https://staging.va.gov/careers-employment/vocational-rehabilitation/apply-vre-form-28-1900/)”  
4. Complete all required fields on the form, including:  
   * Personal information (Name, DOB)  
   * Contact information (Country, Physical Address, Email Address, Phone \#)  
   * Highest Level of Education  
   * Are you moving in next 30 days (yes/no)  
   * How would you like VA to contact you?  
5. Click “Continue” to advance through all form sections  
6. Review all entered information on the summary page  
7. Read Privacy Policy (opens in new tab)  
8. Click checkbox that you have read and accept the privacy policy  
9. Click “Submit Application”

 **Expected Result:**

* The form is submitted successfully and a confirmation message appears:   
* “Thank you for submitting your application”.  VR\&E (VA Form 28-1900) For: (Your Name)       
* Date Submitted: (Month/day/year)   
* Option to Print Page  
* Explanation of what happens after you apply and how long it will take

---

### **Test Case 2**

**Title:** User is prevented from submitting incomplete form

**Steps:**

1. Navigate to https://staging.va.gov/temporary/apply-vre-form-28-1900  
2. Sign in using a valid VA.gov credential (e.g., ID.me, Login.gov)  
3. Click “[**Apply for Veteran Readiness and Employment with VA Form 28-1900**](https://staging.va.gov/careers-employment/vocational-rehabilitation/apply-vre-form-28-1900/)”  
4. Leave the “Name” and “Date of Birth” fields blank  
5. Attempt to click “Continue”

    **Expected Result:**

    Error messages appear under the blank required fields indicating “This field is required, you must provide a response.” User cannot proceed until fields are completed.

---

### **Test Case 3**

**Title:** User can save application in progress and return later

**Steps:**

1. Navigate to https://staging.va.gov/temporary/apply-vre-form-28-1900  
2. Sign in using a valid VA.gov credential (e.g., ID.me, Login.gov)  
3. Click “[**Apply for Veteran Readiness and Employment with VA Form 28-1900**](https://staging.va.gov/careers-employment/vocational-rehabilitation/apply-vre-form-28-1900/)”  
4. Complete the first two sections of the form  
5. Click “Finish this application later” toward the bottom of the page  
6. Sign out  
7. Return to the form URL and sign in again

    **Expected Result:**

   User can find their saved application after logging back into their account and scrolling down on the ‘My VA’ page until they see ‘Benefit applications and forms’, which will show a Draft card of the VR\&E application that was saved.  The user will be able to continue with the form from the point where they left off.

---

### **Test Case 4**

**Title:** Form responds correctly to conditional input

**Steps:**

1. Navigate to https://staging.va.gov/temporary/apply-vre-form-28-1900  
2. Sign in using a valid VA.gov credential (e.g., ID.me, Login.gov)  
3. Click “[**Apply for Veteran Readiness and Employment with VA Form 28-1900**](https://staging.va.gov/careers-employment/vocational-rehabilitation/apply-vre-form-28-1900/)”  
4. On the additional information page, select “Yes” to indicate you are moving in the next 30 days  
5. Observe the next set of required fields

    **Expected Result:**

    Additional questions or fields appear asking about your new address.

---

### **Test Case 5**

**Title:** User sees an error message when server is unavailable

**Steps:**

1. Simulate a backend outage (or use staging environment with disabled submission endpoint)  
2. Navigate to https://staging.va.gov/temporary/apply-vre-form-28-1900  
3. Complete and submit the form

    **Expected Result:**

   User sees an error message at submission: “We’re sorry. Something went wrong while submitting your application. Please try again later.”


### Coverage for References
- Functionality has been verified via test users for all user stories - 100%
- User Story 1 verified by Test Case 1
- User Story 2 verified by Test Case 2
- User Story 3 verified by Test Case 3
- User Story 4 verified by Test Case 1-5
- User Story 5 verified by Test Case 5
- User Story 6 verified by Test Case 4

### Summary (Defects) Reports
- We found logging failures when testing the Ch 31 form submission in Staging - Fixed with [this ticket](https://github.com/department-of-veterans-affairs/va-iir/issues/1741)
- While testing in Staging, we found that under certain circumstances, the correct signature would not be accepted - Fixed with [this ticket](https://github.com/department-of-veterans-affairs/va-iir/issues/1796)
- While testing in Staging we found that our payload which we have to send to the RES service (external), was failing its asynch process - Fixed with [this ticket](https://github.com/department-of-veterans-affairs/va-iir/issues/1843)

### E2E Tests
- Our end-to-end tests live here: [Ch31 E2E Tests](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/new-28-1900/tests/e2e). The axe checks are not yet implemented, and are covered in [this ticket](https://github.com/department-of-veterans-affairs/va-iir/issues/1808).

### Unit Test Coverage
- We have met the 80% minimum requirement. Here are the percentages:
    - Lines = 95.65%
    - Functions = 95%
    - Statements = 95.86%
    - Branches = 88.57%

<img alt="Unit test coverage" src="https://github.com/user-attachments/assets/fa839022-956d-4cb5-a5f9-8939aac071fb" />

 
### Endpoint Monitoring
- Playbook is linked here: https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/b95f85ecde584a9fcaecb2e0c2d1b560f8651c2a/teams/benefits/playbooks/vre-form-28-1900.md

### Logging Silent Failures
- [Silent Failure Logging Potential](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/vre/submit1900_job.rb#L18): Statsd metrics can be found on the app [Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/94e-cku-2aq). This includes the "Sidekiq job (Submit1900Job) queues, dequeues, and errors)", "Errors by status", and the multiple alert widgets there.
  - This Job kicks off a Monitor that inhereits from ZeroSilentFailures::Monitor and implements the [logging of silent failures](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/vre/monitor.rb#L20).
- This product makes use of VA Notify to send action needed emails [here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/models/saved_claim/veteran_readiness_employment_claim.rb#L299), [here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/models/saved_claim/veteran_readiness_employment_claim.rb#L317), and [here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/models/saved_claim/veteran_readiness_employment_claim.rb#L347). All of these VA Notify implementations have logic in place to make sure the email sends properly and if it does not, it logs an error. We have a widget on the Dashboard that tracks these logs.
