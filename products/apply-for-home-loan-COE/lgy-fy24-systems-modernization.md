So there success metrics LGY Leadership provided are more towards their internal employees or process but there are a 1 or 2 for the Vets or Lenders:
Staff.1.3:01.KR1 - Achieve “best place to work” rating of 75% or above through the AES
Ecosystem.2.1:02.KR1 - Reduce manual-based (e.g., data entry, paper based, etc.) processes by 80%
Ecosystem.2.1:02.KR2 - 100% of the loan lifecycle data transmitted by APIs for participating Lenders 
Ecosystem.2.1:03.KR1 - 100% system consolidation by 2028
Ecosystem.2.2:01:KR1 - Enable 100% of participating Lenders ability to submit ULAD via API LGYM-1
Ecosystem.2.2:03:KR1 - 100% of participating Lenders can submit loan application data to LGY via API
Regulations.3.2:01.KR1 - 100% of LGY’s loan lifecycle applicable business rules encoded into business rules engine(s)
Excellence.5.1:02.KR1 - Decrease loan technician phone time by 20%
Excellence.5.2:02.KR1 – Increase Veteran product NPS score by 10+ points
Excellence.5.2:02.KR2 – Increase Lender customer satisfaction NPS score by 10+ points
 
Prioritization of the work would be in this order:
New APIs to be introduced
Endpoints will change as will the way the APIs are exposed to VA.gov (currently Zuul, will be AWS Gateway as part of Modernization)
Updates to the UI and electronic application fields and possibly the screen flow in VA.gov
Add Change Type for the Veteran in the UI and to be passed as part of the electronic app to Eligibility APIs. Will be used to indicate the type of change the Vet is requesting to their Eligibility Approval Letter. Change Types would be:
Data – Name
Data – Biographical/Demographic data (like DOB, Gender, etc)
Data – Contact Info (address, phone, email)
Data – Conditions
FF exemption status change from Non-exempt to Exempt
Restoration of Entitlement (One-Time, regular, cash-out refinance and back to back closing)
New Eligibility and Application Status’ will be returned to VA.gov
Eligibility Status’:
                                                               i.      Initial Eligibility Status – Auto-Approval or Not Auto-Approved will be returned
                                                             ii.      Current Eligibility Status – Approved, Pending or Denied will be returned
Application Status’ options to be returned:
Application Status
Description of Application Status
when Current Eligibility Status =Approved OR 
Current Eligibility Status = Pending or Denied AND Electronic 26-1880/26-1817 dataset has NOT been received
Awaiting Response from Lender or Veteran or SS
when the Current Eligibility Status = Pending AND Eligibility Status Action = Sent to Lender/Vet
Received from Lender or Veteran or SS
when the eligibility status value = Pending received from Lender/Vet
Awaiting  VA Review
when the eligibility status value = Pending and Eligibility Status Action= Sent to VSC, Sent for Escalation, Sent to Team Lead, Sent to Supervisor or Send for Determination
Complete
when the eligibility status value = Denied or Approved
Awaiting Appeal Review
when the eligibility status value = Denied AND Eligibility Status Action =  Pending HLR, SC or BVA Appeal
Appeal Decision Received
when the eligibility status action = Pending Appeal Decision Received
 
Ability at any time to view communications & documents from LGY system in VA.gov related to the eligibility status, change requests or appeals marked as Veteran or Public in the LGY system
Ability at any time to view any supporting documents the Vet uploaded in VA.gov
Ability at any time to check status or refresh eligibility, entitlement amounts, funding fee status, conditions, recommended documents, referral reasons, denial reasons, and incomplete application reasons
Automation of the Eligibility Appeals process (for Higher Level reviews, Supplemental Claims and Board of Veteran Affairs):
Options to request an appeal of a denied eligibility
VA Appeal Forms available to complete electronically and sent to LGY or to the Board of Veteran Appeals
Ability for Vet to check status of appeals and see final decision
Ability to be notified by SMS text and/or email of any changes to their eligibility status, appeals status, change request status, new communication or document through VA.gov
Ability to indicate if they have a disability claim pending (predischarge or after discharge)
Surviving Spouses – does VA.gov have the ability to support Spouses of Vets who was died as a result of a service connected injury (the Souse could also be a Vet as well)
