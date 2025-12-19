# Standalone Travel Test Data Setup (Oracle Health)

This guide explains how to set up test data and validate the standalone travel claims process for Oracle Health in the staging environment.

---

## Overview

Standalone Travel for Oracle Health lets veterans file travel claims for appointments. It stores appointment data in LoROTA and uses **VeText** for patient notifications.

---

## Setting Up Test Data for Staging

### Prerequisites

- Access to the staging Oracle Health system (often server **B1930**).
- Phone number you can receive SMS messages on.
- Patient's **last name** and **date of birth**.

---

### Appointment Requirements

For a claim to be valid, the appointment must meet all of the following:

- **In-person** appointment (**not telehealth**).
- **Status:** `booked` or `Confirmed`.
- **Date:** Must be scheduled for **today**.
- **Facility:** Must be at a site included in the pilot.
- **Phone:** Patient record must include the phone number you will use.
- **Required Fields:** Standard fields like `id`, `startDate`, `status`, `stationNo`, `timezone`, `serviceType` are needed in the backend payload (these are generally handled by Oracle Health).

---

### Test Steps

1. **Set Up Appointment**
   - Log in to staging Oracle Health.
   - Create a **booked, in-person appointment** for your test patient, with your SMS-accessible phone number and note the last name and DOB.

2. **Text 'travel'**
   - On the appointment day, text `travel` to:
     ```
     469-606-3390
     ```
   - VeText will search for a matching patient and appointment.

3. **Watch for Response**
   - If everything matches, you’ll get a link via SMS.
   - If not, VeText will send a failure message like "Phone number not found."

4. **File the Claim**
   - Open the link and complete the process.
   - You should see a success message if the claim is accepted.

5. **Final Notification**
   - Later, a follow-up text will confirm if the claim was submitted successfully (may take some time).

---

## Troubleshooting

- **No link received:** Double-check the phone, date, status, and in-person type.
- **Failure SMS from VeText:** Compare appointment details to eligibility requirements above.
- **No final status:** The claim process is async; delays are normal.

---

## Notes

- The **initiateTravelPay** backend checks these requirements before issuing a claim link.
- Most QA issues are due to appointment data not matching one of these rules.
- For exact validation logic, see the `initiateTravelPay` Lambda in the CHIP codebase.

---
