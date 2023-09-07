# Things to know about the 10-10EZR
This document contains tidbits, odds & ends, and information about the 10-10EZ form, development, testing and anything else that isn't captured in other documents.

### Abbreviations
- ES = Enrollment System/Service
- EE/E&E = Eligibility and Enrollment
- HEC = Heathcare Enrollment Services
- HCA - Health Care Application (AKA 10-10EZ)
- VOA - Veteran Online Application (AKA 10-10EZ)
- VistA - Legacy health record source, in process of deprecating - Enrollment Systen will be the main source of data

Systems used by Application Processing teams
- VIS - Veteran Information Solution 
     - Provides consolidated view of comprehensive eligibility from VBA and DoD.  Used to locate combat dates, activation period, South West Asia (SWA), active duty military service, service-connected disability, pension, amount, etc
- HINQ - Hospital Inquiry System
     - Provides verificatoin information to include active duty periods, active duty for training only, and service-connected disabilities
- SHARE - 
     - Automatically creates claim data in the Benefit Delivery Network and VBA corporate database to support case managment of Compensation & Pension claims
- VBMS - Veterans Benefit Management System
     - Should only be used on a need-to-know basis.
     - e-folder contains every document the Veteran has ever sent to the Veterans Benefits Administration (VBA) in addition to determiniations.  Thie info may include DD-214/215 and Award Letters.
- DPRIS - Defense Personnel Records Information Retrieval System
     - Used to obtain documents such as DD-214 and DD-215

### Development
- x/xx/23 - Placeholder Text.


### Testing
- xx/xx/22 Placeholder Text.

### Business Processes
- 9/7/2023 - Confirmation received from Joshua Faulkner
     - When the Enrollment System receives the submitted EZR, a generic email is triggered and sent to the email address within the form, stating that the submitted form has been received.
- 9/7/2023 - Confirmation received from Simone Gully and Ambroja Watson
     - EZR Processing is 5 business days.  Online submission _should_ be same day unless there is an error or inconsistency
     - Current process:
          - When the Priority Group (PG) changes, the VA health care handbook is sent with a letter insert on the change
          - If there is no change, there is no communication sent to the Veteran.
     - Future process (we will be notified when in place):
          - Any time the Priority Group (PG) changes or any determination is made regarding Priority Group and/or Copay status, a letter will be sent out notifying the Veteran of the change
 
### Miscellaneous
