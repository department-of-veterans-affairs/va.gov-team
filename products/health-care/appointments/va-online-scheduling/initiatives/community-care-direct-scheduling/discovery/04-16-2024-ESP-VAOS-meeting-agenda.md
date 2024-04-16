# EPS-VAOS (CC Direct Scheduling) Meeting Agenda 04-16-2024

## End-to-end CC scheduling journey map 

<img width="1000" alt="End-to-end CC scheduling journey map" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/101129355/ed14bda5-c9d4-49b4-a1ae-067f4029a7fb">

## Implementation notes

- The goal is that EPS will write appointment status back to CCRA, and then CCRA will write back to other systems for VA staff to review, e.g., HSRM, VistA Scheduling, Cerner Rev Cycle, Oracle Workflow Management, etc. The EPS Team is aware that work needs to be completed to write data to CCRA, but it has not been developed yet. The CCRA Team is aware of their needs, but we don't have timing around this yet.
- There will need to be fallback solutions if there's no programatic way to retrieve authorized referrals from CCRA (for VAOS) **and** to write the appointment status back to CCRS (for EPS Team with CCRA support). E.g., daily exports made available to staff to download.
- We discussed that we'll potentially need to decide on an MVP as it relates to SEOCs. For example, should CC direct scheduling be piloted for a specialty or referral type that is typically just 1 appointment vs. authorization for 10 appts? **For now, design should assume it's for 1 appointment until we discuss otherwise.**
- Based on other conversations Rob has been a part of, it's been discussed that the specialty OT/PT will be 1 of 2 specialties for the pilot, and narrowed to LA and Columbia sites. TBD what external sites that's referring to. 

## Other to-do's
- VAOS needs to Rob's help to identify POC for CCRA that we (VAOS) can have conversations with about timing of this work, plus discuss work needed to capture authorized referrals programatically and understand business requirements around SEOCs, patient preferences in CTB, etc. In addition, discuss what the staff-facing process will be for reviewing new CC direct scheduled appts and sending medical records, etc. to external providers.
- Ben to schedule call with Access Standards (Jami) to understand requirements for drive time calculations, etc.
- Waiting on WellHive sandbox. Sooner the better. 
