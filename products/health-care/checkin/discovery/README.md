
# Kickoff 

## Preliminary Roadmap – Veteran-Facing Capabilities

### MVP
- Ability to check in for appointments
  - VA flagship app
  - VA.gov  - authenticated 
  - “ I am Here” via VEText
- Update contact information, next of kin, emergency contact (VA flagship app or VA.gov)
- Complete pre-check in forms (limited) via VA.gov 
  - Consent form (preliminary)
  - Reason for visit
- Indicate change in insurance 
- HIPPA and 508 Compliance
- English only

### Needs Further Assessment & LOE
- Ability to check in for appointments
  - Unauthenticated  (e.g. using veteran phone number , SSN, DOB,  VHIC or combination)
- Link to  Beneficiary Travel Self-Service System (BTSSS)

### Scoping Questions
- What is actually being sunset? Is it the kiosk themselves or just the VetLink software? 
  - If it is the kiosk itself, what is the replacement for: 
    - Users, who don’t have/forget their phone
    - Locations where WiFi is bad
  - **ANSWER: The kiosk themselves and the VetLink software will be sunset. There are no real plans at this time for another physical device solution. If no phone or Wifi, Veterans will be routed to probably in-person check-in.**
  - Interesting fact: 40% of check-ins system-wide are done by kiosk. 58% are in-person.
  - If it is the VetLink software what is the plan for the provider portion of the workflow. What will our va.gov solution be connecting to, in order to help facilitate rooming/queuing.
    - **ANSWER: TBD.** 
      - **Four current options:**
        - **Leave VetLink active for a while and connect MVP to that.**
        - **Connect to VeText. VeText already did a lot of this work for “I am here?”**
        - **Salesforce. Discussed the work done with the Cleveland Call Centers and how that could be leveraged.**
        - **Another tool.**
- What do we mean by appointment in the MVP list? What about labs, which could just be a walk-in?
  - What about imaging? Are those actual appointments or do they take walk-ins as well? What is the check-in process for imaging?
  - **ANSWER: Focus on appointments and no walk-ins (they call it queueing). Imaging is its own system, so it is out of scope.**
- I heard in yesterday’s meeting some dates and I wanted to check what I heard. They said sunsetting is beginning this month with some expectation that something will be released in December. 
  - **ANSWER: The December date I heard is correct.**
- How solidified is the MVP list?
  - **ANSWER: Really would like to hit the current MVP list for December. We discussed GeoLocation and e-signatures. Probably not GeoLocation for MVP (base just on time). The kiosk stakeholders did discuss moving some parts of “Check-in” to a “Pre check-in,” which aligns with Questionnaires**
- Who are our stakeholders for this? 
  - **ANSWER: Add invite list from meeting. Erica is the Deputy Director. Shawn is product - based in Portland. Shawn oversees an Office Hour, where sites can call in about anything kiosk related. Ming is trying to get us invited to the Office Hour.**
 - About the kiosk system, are there any user flow documents that I could see? It would help me understand all the different scenarios and branching strategies of the major check-in questionnaires. Beyond just a demo.
  - **ANSWER: Check out the VetLink folder inside this discovery folder.**
- I’d like to understand more about the entire ecosystem. Can I get access to any documentation, test environments, or demos of “I am here?” and “Get Care.” I could pair this documentation with findings from user research to pull the “best” ideas from each solution to put into the va.gov solution.
  - **ANSWER: Ming will look into this. She isn’t too sure about “Get Care.” She says it isn’t really released yet. Current Virtual appointments use VCC, which sends an email with a URL to both the provider and the Veteran. She wants to ask Dr. Burns (spelling) at our meeting with him about the virtual workflow more. I asked if these show up in VAOS (because I think I saw some wireframes with them in it). I will talk to the VAOS designer, Peter Russo.**

## Things to think about for MVP
- E-signature solutions elsewhere in the VA. Traditionally, HIPAA forms need a real signature.

## Non-MVP Check-in Ideas
- Geo location. Not being able to access check-in until a particular timeframe and in a particular location. Pushing check-in flow.
- Other systems were looking into taking a picture of insurance card and using that to help auth in.
- Proxy check-ins?
