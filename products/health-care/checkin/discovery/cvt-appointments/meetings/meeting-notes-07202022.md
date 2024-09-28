# 07/20/2022

## Participants
- Lori Pusey
- Shawn Adams
- Adrian Rollett
- Ben Brasso

## Discussions
- What are CVT appointments?
  - CVT - first intro to telehealth (before smart phones)
  - Patient can be seen by a PCP other than at the location where the Doctor is located (seen virtually)
  - Provider side appt; at VA center, has a web cam; giving instructions to the PCP that is with the patient
  - Patient side appt; patient goes to CBOC, check-in, maybe a PCP sitting in room with them with a web cam
- How do they work?
  - VISTA
    - Patient side appt on the hour
    - Provider side appt 0 to 5 minutes after the patient-size appt (0 if different VistAs)
    - How linked? Nothing really; 
      - Patient side
        - CVT and PAT in clinic name
      - Doctor side
        - PRO in clinic name or for doctor
        - Has stop code that is telehealth
    - How created? Manually create 2 different appointments
    - How denoted? Appt Type? Both considered in-person appt?
    - Need to check both appointments in?
- How do we want them to appear in Pre-Check-in and Check-in?
  - Only show the patient appointment to the Vet
  - When Check-in, do check-in for both the patient appointment and the doctor appointment
- Logic
  - If there are 2 appts for same patient on same day that are 0-5 minutes appart (probably 95%) (VAOS & My Healthy Vet)
    - If one has a telehealth stop code
      - Don't display the one that has the telehealth stop code
      - Do display the other 
      - When check-in then do check-in for both of them
- Are there down sides
  - Logic is all in clinic naming conventions and stop codes and not programmatic variables
- How important is this? (1-10)
  - Getting regular inquiries from Vets about why they are seeing multiple appointments
  - Seeing duplciate appointments?
- What is VAOS calling these appointments for vet-facing applications? (in person, CVT, other?)
- Next Stpes
  - Bring the above logic to Kay & VAOS and confirm that we/CHIP should implement this
  - Explore how VAOS handles other appointment types (VVC, ATLAS, etc.)
  - Ask what logic we could use to filter out community care appointments where we have created a fake VistA appointment to indicate that the Vet has a communicate care appointment

![image](https://github.com/user-attachments/assets/799b738f-e8da-47ce-96a8-545e5f7220e6)





