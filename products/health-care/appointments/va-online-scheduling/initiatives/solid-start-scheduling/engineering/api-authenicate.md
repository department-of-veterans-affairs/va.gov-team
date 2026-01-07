## API Authentication: OTP Flow Authentication with VASS API

The One-Time Code (OTP) flow is designed for scenarios where users access VA scheduling services through a direct invitation—not via a full va.gov sign-in. Instead of authenticating with standard credentials, users validate their identity using brief personal details and an emailed OTC, enabling secure access to appointment scheduling.

**How the OTP flow works with VASS API:**

1. **Invitation:**  
   The VASS backend system emails an invitation to the user, containing a unique scheduling link (with UUID and cohort ID).  

2. **Identity Validation:**  
   When the user clicks the scheduling link, they're prompted to enter their last name and date of birth.  
   VASS and Vets API coordinate to confirm these details and validate the last name, date of birth, and UUID.

3. **One-Time Code Generation:**  
   After initial validation, the Vets API generates an OTP and sends it to the user's email via VANotify.

4. **Authentication and Appointment Access:**  
   The user enters the OTP in the browser.
   Vets API verifies the code.  
   Upon successful verification, the user can access appointment scheduling features (view availability, book/cancel, etc.) without needing full SSO.

5. **Scoped Access:**  
   The OTP is single-use and grants time-limited, purpose-specific access for scheduling activities, ensuring security without requiring session tokens from va.gov's Sign-In Service.  
   All subsequent API calls to VASS for scheduling actions are authorized based on this OTP validation.

**For a visual and step-by-step breakdown, see:**  
[OTP Flow Sequence Diagrams](./sequence-diagrams)
