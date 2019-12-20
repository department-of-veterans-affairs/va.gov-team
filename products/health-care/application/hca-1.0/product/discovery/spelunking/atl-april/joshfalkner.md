---
Time: 10am
---

Josh Falkner (OI&T, Texas)
--------------------------

future contacts
---------------

  - 'the actual staff who has to deal with these'
    - stacy echols (actual phonecalls) - found in the GAL
  - magda
  - leroy garcia (income verification) / IVM
  - cory kilts - systems cbosm oi&t reporting defects / change requests
    - for the enrolement system

gripes
------

 - they can make changes to production systems on their own
   - not told when things change
   - **ENSURE HE'S LOOPED IN**
 - fill out all information because it matters if something falls through
   - walk through every section and explain you don't have to fill it out, but
     why you should
   - skip sections (allowed) but not made aware it's not a good thing
 - He'd like access to fix things

notes
-----

 - What is the intake process for Enrollment
 - Only client for VOA is the PDF 1010, (but used to have a 2026)
   - 20* client was Disability, but was killed in March
   - "No official process"
 - Internal SOAP endpoint
   - Enrollment endpoint
   - "Massage the data"
   - SOAP request -> enrollment
     - for an unknown person
     - Go through biz rules to enrollmentle the person
     - to BVA for disability cliam
       - BVA can verify and mark as enrolled
     - look for a military history from vadar
     - enroll them based on eligibility
     - "automatically" means not pending
     - Time: (known to BVA, etc) enrolled in 5 minutes
 - check for
   - pension
   - housebound
   - disability check, how much
   - HL7 - enrolement to message brokers to VBA
 - unhappy path:
   - attempt to verify based on income (not known to VBA/BVA/VADER)
   - if they submit financials
     - dependents and income
     - Does not call to IRS
       - validated through IRS (IVM - income verifcation match)
       - followup over the next quarter
     - 'verified enrolement' until checked later
     - 'lower priority group' - group 5
   - still not met:
     - if they don't submit financials or they're over the line, they'll go
       to the rejected status
      - 'VADER' response is "I don't know this person", and not in a pending
         status
       - "It has a bunch of problems"
         - "Take the word of the medical clerk"
         - "otherwise reject or pending"
       - open work items - still pending after 3 days
       - "look at attachments" / DD214
  - Now, known situation:
    - "Do not add the person"
    - "With a fully qualified ID" and the ID isn't known, the application is
      over with.
      - MVI / shouldn't happen, but it does sometimes
      - weekley update

  - with multiple users with a set of traits it'll fail out
  - Pushes from VBA - claim adjuticated
  - "automatically handle enrolement"
  - "Rated adjuticated claims" - nothing under review
    - application for disability, claim things that they aren't rated for
    - "have to be verified based on income or service"
    - 70% are enrolled automatically
    - remaining are rejected or pending
    - "Get better instructions on the form"
      - "We're not clear on the 1010 - it's important that they input their
        financials"
    - "Most of the ones that end up pending are halfway done with minimum
      amount of information"
    - Things to improve outcomes:
      - "The information will be verified via IRS"
      - "Special factors"
      - "Medicaid medicare"
        - enroll into PG6
      - "Affected by Agent Orange" - take word for it, and follow up when
        verified
      - MSDS - VADER
      - "How common to understate income"
        - Not sure
      - "IVD division"
        - LeRoy Garcia
  - Dane - does custom pulls of data, downfalls, etc

integration
-----------

  - communicate internally
  - certificates
  - TLS peer certs
  - test environment is nearly identical
  - QA/Devel - wide open
  - preprod / prod - locked up
  - "query response method"

verification
------------

  - from vader / dod repository
    - service episodes
  - "employent history" - combat history
  - how do we call vader
    - SOAP service
    - triggered like VBA, creating a new enrolement record
    - pediodic cleanup quarterly, where they'll get a list of people in the
      seam and batch attempt to fix them. about 8% get something new.
    - MVI/VADER/VBA - BGS over HL7
  - if they submit financials above the threshold, they'll be rejected

Renewal
-------

  - "Works pretty similar"
  - Find the person by traits, look for the existing records
  - apply updates to things they can updates
  - can't change things they shouldn't change
  - 1010EZR - DSLOGIN prepopulates things but everything is editable
    - They can change it, but it won't let them
    - enrolement systems will ignore the changed fields

User facing
-----------

  - "Welcome to VA program - callcenter run by HEC"
  - Get a list of enrolees, touch point
  - Sends an email, not worded very well - too technical

VADER
-----
50 per day - about 1% of cases will hit a 3 day timeout with VADER
