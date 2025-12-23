# Standalone Travel Test Data Setup (Oracle Health)

This guide explains how to set up test data and validate the standalone travel claims process for Oracle Health in the staging environment.

---

## Overview

Standalone Travel for Oracle Health lets veterans file travel claims for appointments. It stores appointment data in LoROTA and uses **VeText** for patient notifications.

For OH test users: https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/medications/test-accounts.md

---

## Setting Up Test Data for Staging

### Prerequisites

- Access to the staging Oracle Health system (server **B1930**).
- A test patient with a phone number you can receive SMS messages on.
- Patient's **last name** and **date of birth** for authentication.

---

### Test Steps

1. **Set Up Appointment**
   - Log in to staging Oracle Health.
   - Create a **booked, in-person appointment** for your test patient, with your SMS-accessible phone number and note the last name and DOB.

2. **Text 'travel'**
   - On the appointment day, text `travel` to:
     ```
     707-200-7446
     ```
   - VeText will search for a matching patient and appointment.

3. **Watch for Response**
   - If everything matches, you’ll get a link via SMS.
   - If not, VeText will send a failure message like "Phone number not found."

4. **File the Claim**
   - Open the link and complete the process.
   - You should see a success message if the claim is accepted.

5. **Final Notification**
   - Later, a follow-up text will confirm if the claim was submitted successfully (may take a minute).

---

## Travel Claim Eligibility and Link Sending Logic

### Patient/Phone Requirements

1. **Phone Match**
   - The user's phone number must exactly match one (and only one) patient in the system.
   - If **no patient** is found with the phone:  
     _Respond:_ "Sorry, this phone number isn't in our records. Please try again. Or ask a staff member for help."
   - If **multiple patients** are found for the phone number:  
     _Respond:_ "Unable to process travel claim: Multiple patients found for phone ..."

2. **Home Address**
   - The matched patient must have a non-empty home address on file.
   - If **missing:**  
     _Respond:_ "Sorry, your home address isn't in our records. Ask a staff member or call your VA facility for help."

---

### Appointment Requirements

3. **Appointments Present**
   - The (unique) patient must have at least one appointment scheduled for **today**, within the window:  
     [start of today − 4 hours] through [end of today + 4 hours].
   - If **none found:**  
     _Respond:_ "Sorry, we're unable to find an appointment for you today.  
     Here's how to file for reimbursement: https://va.gov/health-care/get-reimbursed-for-travel-pay/"

4. **Appointment Status**
   - Only appointments with statuses other than **cancelled**, **entered-in-error**, and **no-show** are eligible.
   - These statuses are ineligible for a travel claim and are filtered out.

5. **Appointment Service Type / Travel Eligibility**
   - At least one appointment must have a `serviceTypeGroupName` of:
     - `IN_PERSON_VA_ONSITE` or
     - `TELEHEALTH_VA_ONSITE`
   - If none qualify:  
     _Respond:_ "Online travel pay isn't available at your clinic.  
     Here's how to file for reimbursement at https://va.gov/health-care/get-reimbursed-for-travel-pay/"

---

### Pilot

6. **Is the station in pilot**
   - The appointment's station needs to be included in the pilot(hard coded list in chip)
   - If none qualify:
     _Respond:_ "Sorry, this phone number isn't in our records. Please try again. Or ask a staff member for help."

---

### Result: Sending the Travel Claim Link

- If all the above requirements are met:
  - The system creates a travel claim request and receives a response with a unique URL.
  - The user receives a message:
    ```
    Eligible for travel pay? File a claim for today's appointments: %TRAVEL_CLAIM_URL%

    This link works until the end of today.
    ```

- If the "CHIP" feature is disabled in VeText (by "ffj4"), a mock response and link are used instead.

---

### Summary Table

| Requirement                       | If Not Met                                                   | Eligible for Claim?           |
|------------------------------------|--------------------------------------------------------------|-------------------------------|
| Phone matches 1 patient           | Error message: Not in records or multiple matches            | No                            |
| Home address on file               | Error message: Address not in records                        | No                            |
| At least 1 appointment today       | Error message: No appointment for today                      | No                            |
| Appointment valid status           | Ineligible appointments filtered                             | No (if none left)             |
| Service type is eligible           | Only `IN_PERSON_VA_ONSITE` or `TELEHEALTH_VA_ONSITE` qualify | No (if none left)             |
| Appointment's station is in pilot  | Ineligible appointments filtered                             | No (if none left)             |

_Only if all requirements are satisfied will a travel claim URL be sent to the user._

---

## Troubleshooting

- **No link received:** Reach out to VeText they may have turned off notifications for the testing service, or some other connectivity issue.
- **Failure SMS from VeText:** Compare appointment details to eligibility requirements above.
- **No final status:** Some error may have occured with the BTSSS api, Check datadog vagov datadog for error logs.

---

## Notes

- The **initiateTravelPay** backend checks these requirements before issuing a claim link.
- Most QA issues are due to appointment data not matching one of these rules.
- For exact validation logic, see the `initiateTravelPay` Lambda in the CHIP codebase.

---
