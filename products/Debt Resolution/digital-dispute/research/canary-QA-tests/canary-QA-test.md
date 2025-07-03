
## Canary/QA Tests

**Objective**

The team is hosting canary/QA tests of the Digital Dispute Form with Veterans who have active VBA overpayment debts. 

These tests will allow our researchers, designers, and engineers to preview the environment before it goes live. 

**Sessions:**
 - [ ] 7/1/2025 - 8am PT/11am ET - 

**Notes:**

Veteran previewed environment, I asked participant to not submit the form since BE still in development

Form looks as expected, error messages work, review page can be edited (loops back and requires Veterans to fill out the form again from the question they are editing onwards - known platform limitation) 

Session hosted by: Charlotte
 
 - [x] 7/2/2025 - 9:30am PT/12:30pm ET

**Notes**       
Veteran did not have active overpayment debt as indicated on screening. 
He was able to view:
- Debt Portal summary page
- Dispute form intro page
- Dispute form personal info page
- Dispute form contact page and edit section
- Dispute form select a debt page

Pages on production matched staging. Some improvements have not been launched to staging/production yet. 

The dispute form- select a debt page did not have the updated plain text zero debt message. This update had not been launched by the time the Veteran saw the page. The message shown on the select a debt page did not communicate that the Veteran had zero debts, instead it had an error message that stated "We can't access your debt records right now."

<img width="488" alt="Screenshot 2025-07-02 at 12 53 26 PM" src="https://github.com/user-attachments/assets/fdb66feb-8038-4955-b3b5-3fb8e4945b1b" />


Session hosted by: Megan

     
 - [ ] Session 3

## *Recruitment Request*

2-3 Veterans who have an  **active**  VBA overpayment debt on their account (not the same as a copay bill)

Please confirm that they are comfortable with signing in to their personal [VA.gov](http://va.gov/) account and sharing their email address login with our engineer who will be on the call

Please confirm that they are comfortable submitting the digital dispute form, knowing that we will delete their submission after the call

Note to Perigean: Please ask the Veteran to verify this before the session by logging in to their account: ​​[https://www.va.gov/manage-va-debt/](https://www.va.gov/manage-va-debt/)

An active debt will look like this on their account (taken from mock data):

[Screenshot]

**After session email:**

Dear [name]

We want to confirm that your submission of the digital dispute form has been deleted in our system.

We greatly appreciate your help!

Best regards

**Timeline**

Monday, June 30th  - Thursday, July 3rd (anytime between 8am - 1pm PT / 11am - 4pm ET)

45 minutes

## *Conversation guide*

**Hello/Welcome, introduction, informed consent**

Thank you so much for your time today. My name is Charlotte and I work at [VA.gov](http://va.gov/) as a consultant - it’s nice to meet you! I’ll be hosting this interview today.

How are you today?

I work at VA.gov to help improve access to benefits and services for Veterans like you and today we’d like your help for a walkthrough on the debt portal to verify that a new feature that is going live looks as expected.

I want to let you know that our call with you today is not going to be recorded.

I’d like to introduce one of our engineers on the call who will be on the call and asking you questions as well – Andrew. I’d also like to introduce one of our designers on the call who will be on the call and asking you questions as well – Megan.

This is not a research study and we will not be asking for feedback on the experience, we just want to make sure everything looks as expected.

We will be asking you to do a walk-through of a form to dispute your debt

We will delete the submission the end of the day of our session with you today.

Is this something you are comfortable with? [ask for informed consent]

**A few questions:**

- What email do you use to login? (if not shared previously)

[Share link to the digital dispute form – take through experience, verify all UI elements work, actions work as intended, error messages also work]

Asking Veterans to clearly write in the reason for dispute page:

-   **_On [Date of QA test and time] this form was submitted during a QA (quality assurance test) on behalf of a VA consulting team_**

Thank you for your time today!
