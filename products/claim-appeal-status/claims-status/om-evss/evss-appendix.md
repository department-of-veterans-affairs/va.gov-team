# Claims Status Operations and Maintenance Agreement

Vets.gov will interface with EVSS to make service calls to APIs provided by eBenefits. This document lays out that operations and maintenance relationship between those systems to support a positive Veteran experience.

The overall relationship between vets.gov and the VA stakeholders and systems will be governed by the relevant vets.gov product charter. This document should not supersede any items already established in the charter. Currently Claim Status allows Veterans to view all claims that are currently available on eBenefits (disability, compensation, pension) with the exception of VR&E.

## Customer Support

Vets.gov is supported by the Health Resource Center (HRC) customer support center, which provides phone, email, and eventually chat support through eGain. HRC provides all Tier 1 support for vets.gov features and functionality.

All vets.gov tickets will be routed from HRC to vets.gov for triage. Vets.gov will provide operations and maintenance for Vets.gov infrastructure and application break/fix only. If the customer issue is not directly related to Vets.gov infrastructure or application code, then the issue will be routed to EVSS for Tier 2/3 support on their end.

Specific examples that will not be handled by vets.gov and will be routed to EVSS support include:

- Issues with incorrect data, claims status, or other information that is returned by eBenefits to Vets.gov through their service relationship.
- High priority or congressional issues that will need be addressed in the EVSS daily calls.
- Any issues whose root cause is determined to be the EVSS infrastructure or application code, to include outages or bugs.

### Trouble Ticketing Software

Vets.gov will use the NSD SDM issue ticketing system to handle user reported issues to HRC with an expected transition to Microsoft Dynamics when it becomes available. EVSS will be given direct access to the vets.gov ticketing system to handle ticket escalations.

### Tier 2/3+ Issues to EVSS

For tickets handled by vets.gov as Tier 2 issues that require assistance from support personnel for EVSS, vets.gov will transfer or escalate them according to the following procedure:

The vets.gov on call personnel will use assign the tickets to EVSS in SDM by (TBD with EVSS).

The following information is required on that ticket before routing to EVSS:

*Information required in JIRA:*
-Help Desk of origin: Vets.gov
-EDIPI:
-Login method:
-User’s Name:
-User’s Phone Number:
-User’s Email Address:
-Function Impacted: Claim Status
-Found in Release:
-SR (or vets.gov ticket number):
-Date/Time Reported:
-How long experiencing issue (approximate date/time issue began):
-Browser Type (If IE What Version?):
-Approximate date of claim(s) user is attempting view:

Once the ticket is routed to EVSS, the vets.gov team will monitor the ticket as needed.

### Customer contact

If the EVSS support team needs to contact the customer, they can do so using their normal communication methods. Vets.gov requests that the branding on emails (e.g., sending email address) reflect vets.gov to prevent confusion. The following template is approved for use in those communications:


Good Afternoon,
We believe the issue has been resolved that you experienced using the Vet.gov website in ticket «COM-Key», and SR«vets.gov_Tracking_Number». If you are still experiencing this issue, please call the Vets.gov hotline and reference the ticket numbers.

Thank you so much,
Vets.Gov Support Team Member
Vet.Gov HELP DESK


## Development support

Each system agrees to provide interconnectivity and access to less than production level environments (e.g., development, testing, integration, staging) as needed and requested by the other party to support development and testing activities. The creation of test or mock data in those environments will be reviewed and approved by the system's operators prior to the other side entering it into the system, in order to prevent any unforeseen issues.

Each side agrees to provide access to architecture, development or operation personnel to answer questions on a best effort basis, taking into account the workloads and priorities on each side.

## Operations support

Due to the system interconnectivity, each side agrees to inform the other of planned system outages, maintenance windows, or environment changes that will affect any environment (e.g., development, integration, staging, production) in which the systems are connected. Each system will provide such notifications in accordance with its existing standard operation procedures, ensuring that the other party is included in such notifications.

If you're experiencing issues in the production environment contact all of the EVSS support staff below:
Brett.Kippes2@va.gov
Donald.Vanderveer@va.gov
Giang.Nguyen1@va.gov

## Operational monitoring

Each system will monitor its system's operations, performance, and connectivity in accordance with its own standard operating procedures. That information will be made available to the other system on an as needed basis for troubleshooting or incident response using the escalation procedures for Tier 2+ issues noted above.


## Service Level Agreements (SLA)

The vets.gov and EVSS teams will provide issue and incident support in line with their existing standard operating procedures, contractual requirements, policies, and other requirements.
