# Account Activity Log (AAL) Access Policy, Use cases and Hypotheses

**Purpose**

To define when and how users, patients, and designated officials may access the Account Activity Log (AAL) in order to support transparency, compliance with federal regulations, and protection of electronic health information (EHI). \


**Scope**

This policy applies to all system users, patients, their personal representatives, and organizational privacy/security officials who require access to AAL information maintained by the organization’s certified health IT systems.


---


## Policy Requirements

* The organization shall maintain an immutable, tamper-resistant AAL that records all access, use, and disclosure events related to EHI. \

* Access to the AAL shall be provided upon authorized request, consistent with applicable laws and regulations. \

* The AAL is not an open system log; it is disclosed only under the circumstances described below. \

### What do users need to see?


#### 1. Patients / Personal Representatives

* Patients (or their legally authorized representatives) may request a copy of their account activity log to: \

    * Verify access or disclosures of their information. \

    * Investigate potential unauthorized access. \

    * Confirm whether records were transmitted to a third party. \

* The AAL provided to patients shall include: \

    * **Date** and **time** of access. \

    * Identity of the **user** or **entity** accessing the record. \

    * Type of action (**view**, **download**, **transmit**, **update**, **disclosure**). \

    * **Recipient** of transmitted information, where applicable. \

* Requests shall be fulfilled within 30 days of receipt, consistent with HIPAA requirements. \



#### 2. Workforce Members



* Workforce members may request their own activity logs when: \

    * Conducting self-audit of account activity. \

    * Investigating potential errors attributed to their user ID. \

* Requests shall be routed through the Privacy or Security Officer for review and approval. Fulfilled within 15 business days. \



#### 3. Privacy, Security, and Compliance Officers



* Authorized officials shall have unrestricted access to AALs for: \

    * Routine compliance monitoring. \

    * Investigating suspected inappropriate access or breaches. \

    * Preparing for regulatory audits or certification reviews. \

* Access shall be documented and limited to staff with designated oversight roles and fulfilled as required by law or directive. \



### Relevant laws — What laws inform that?

* 45 CFR 170.210(d)/(e) → requires that disclosures and auditable events are logged and retrievable. \

* ASTM E2147-18 §7.1–7.3 → specifies that patients and designated officials must be able to obtain the log. \

* ONC §170.315(d)(2)/(d)(3) → requires systems to provide audit reports and to support patient-facing activity history for VDT.


### What does 3rd Party Integration need to look like?

#### 1. Patient Right of Access


* Patients must be able to **view, download, and transmit (VDT)** their health information to a **3rd party of their choice**. \

* Systems must support **application programming interfaces (APIs)** that enable this without **“special effort”** from the patient. \

* Patients can direct their EHI to consumer apps (e.g., fitness apps, personal health record apps). \

    * Source: 45 CFR 170.315(e)(1) & (g)(10) APIs


#### 2. Patient Authorization & Transparency


* Integration with 3rd party apps requires **explicit patient direction or authorization**. \

* The portal must show an **activity history** (e.g., when data was transmitted, to whom, and by whom). \

    * Source: ONC VDT & activity history requirement \

* Providers must give patients **clear warnings** if apps are **not covered by HIPAA** (consumer apps may fall under FTC instead). \

    * Source: ONC Cures Act Final Rule guidance on 3rd party apps


#### 3. Security & Authentication


* Systems must use **secure authentication and authorization frameworks** (e.g., OAuth 2.0) for 3rd party app connections. \

* Logging requirements apply: the **transmission event** must be recorded in the **Account Activity Log**, including: \

    * Patient ID. \

    * Action type (transmit). \

    * Date/time of transmission. \

    * Identity of the requester. \

    * Destination app/entity. \

    * Source: 45 CFR 170.210(e), ASTM E2147-18, ONC 3rd party guidance


#### 4. Audit & Logging


* Every transmission to a 3rd party app must be logged in the **AAL**, visible both: \

    * Internally (to compliance/privacy officers). \

    * Patient-facing (via portal activity history). \

* The log must be **immutable**, **tamper-resistant**, and **retained** per record retention rules (≥10 years). \

    * Source: ASTM E2147-18; 45 CFR 170.315(d)(2)/(d)(3)


#### 5. No Information Blocking



* Providers/EHRs must not **unreasonably interfere** with a patient’s ability to send their health data to a 3rd party app of choice. \

* Policies must ensure **timely, unimpeded access** unless a legitimate security exception applies. \

    * Source: 45 CFR 171 (Information Blocking Rule)


#### 6. Disclosures & Responsibilities


* If data is sent to a **HIPAA-covered entity** (another provider, health plan), HIPAA rules apply. \

* If data is sent to a **non-HIPAA-covered app**, patients must be informed that HIPAA protections may not apply, and that the app’s **own privacy policy** governs use. \

* Providers/EHR developers are not responsible for what the 3rd party does with the data **after patient-directed transmission**. \

    * Source: ONC Cures Rule FAQ, FTC Health Breach Notification Rule


### What do users not need to see?  


* **Device/workstation/location of access** – useful for security officers, but may confuse or worry patients. \

* **Duration of access** – patients may not understand what it means (e.g., does 30 minutes mean someone was “looking” the whole time?). \

* **Queries/search events** – technical detail that may not be meaningful to end-users.


### Technical requirements


#### 1. Scope of Logging

* Log **all user interactions** with electronic health information (EHI), including: \

    * User ID and patient ID. \

    * Date/time of access (log-in and log-out). \

    * Duration of access where feasible. \

    * Type of action (view, create, update, delete, transmit, copy/print, query, or permission change). \

    * What data or record section was accessed. \

    * Device/workstation/location of access. \

* Log changes to user privileges while system is in use. \

* For disclosures (treatment, payment, operations): record date/time, patient ID, user ID, and disclosure description. \


#### 2. System Behavior



* Logging must be **enabled by default**. \

* Audit records must be **immutable**: no ability to overwrite, alter, or delete. \

* Must detect and record when audit logging is disabled or altered, and when encryption/security status changes.
* Record required fields per ASTM E2147 §7.1 and related sections referenced by ONC (170.210(e)). \

* Only a **limited set of authorized users** can disable logging. \

* **Tamper detection evidence** (i.e., system should show when logs are altered, disabled, or unavailable).


#### 3. Reporting & Access


* System must generate **audit reports** for defined timeframes. \

* Reports must be sortable by each logged field (e.g., by user, patient, action). \

* Support ad-hoc and exception/variance reporting. \

* **Patients** (or their representatives) must be able to request access history showing who accessed their information, when, and why (if reason logged). \

* **Privacy/security officers** must have access to full audit logs. \

* **Role-based restrictions**: e.g., staff shouldn’t see other staff members’ logs without authorization. \


#### 4. Retention


* Logs must be retained at least as long as the patient’s medical record. \

* **Never less than 10 years**, or for minors, **until 2 years after reaching age 18**. \

* Logs must be maintained in a **self-authenticating, trustworthy format**. \

* Copies of AAL reports released to patients or staff shall be retained for 6 years as part of the organization’s disclosure log. \



#### 5. Patient Portal / VDT Requirement



* Activity history shown in the portal must include: \

    * Action taken (view, download, transmit). \

    * Date/time of activity. \

    * Identity of the person/entity who performed it. \

    * Recipient of transmitted information.


#### Laws that inform:

* ONC 170.315(d)(2)/(3) requires recording auditable events per 170.210(e), default-on logging, tamper detection, and audit reports. ASTM E2147 defines the content and operational expectations those sections reference. \

* ONC also requires logging TPO disclosures (170.210(d)). \

* For patient portals, ONC’s VDT criterion expects an activity history visible to the patient (view/download/transmit metadata).


## Use Cases (in what situations a user might need this)


### For Patients (or Personal Representatives)



1. Check for Unauthorized Access ("Snooping") \

    * Patient suspects someone (e.g., staff, ex-partner, or employer) looked at their record without permission. \

2. Verify a Disclosure or Transmission \

    * Confirm that their records were transmitted to another provider, insurance company, or third party. \

3. Transparency & Peace of Mind \

    * Simply to see who has viewed their data and when, as part of exercising their right to know how their health information is handled. \

4. Support a Complaint or Legal Case \

    * Patient is filing a privacy complaint or involved in legal proceedings and needs evidence of access patterns. \

5. Care Coordination \

    * Patient wants to verify that a new specialist, hospital, or care team member accessed their information as expected. \



### For Workforce Members (Clinicians, Staff, or Contractors)



1. Investigating Data Entry Errors \

    * Something appears in a patient’s chart under their user ID that they don’t recall entering. \

2. Self-Audit / Role Change \

    * Staff member wants to confirm what access is attributed to them, especially when transitioning roles or departments. \

3. Suspected Account Misuse \

    * Concern that their login credentials were shared or misused by another individual. \

4. Security or Compliance Review \

    * Asked to review their own activity in the context of an internal audit or investigation. \



### For Privacy, Security, or Compliance Officers



1. Breach Investigation 

    * Reviewing who accessed a record after a privacy complaint, security alert, or suspected inappropriate access. 

2. Regulatory Response 

    * Preparing records for HIPAA audit, ONC certification review, or legal discovery. 

3. Ongoing Monitoring 

    * Spot-checking logs for anomalous patterns, e.g., excessive access to VIP or celebrity records. 

4. Disciplinary or Workforce Oversight 

    * Reviewing staff activity logs during HR or compliance investigations.


## Hypotheses (what do we hypothesize are the problems to solve, constraints, etc) \


* Do users understand “Account Activity Log,” or should it be framed as “Who Has Looked at My Record?” \

* Patients want to see the *actual staff member’s name*, not just a role or user ID. \

* Duration of access is confusing and may not add value. \

* Do patients want to see *all events* (e.g., “Dr. Smith viewed chart”) or just *disclosures/transmissions*? \

* Placement in the portal (Profile vs. Privacy vs. Health Records) will affect discoverability.
    * Since this is Medical Records related, would being linked from medical records make more sense?  \

    * Since this is related to the user, would it make sense for it to be in the profile? \

    * Given the use cases around “snooping” would this make sense in Privacy?  \

* How should the system communicate that once data is sent to a non-HIPAA app, the provider isn’t responsible?
