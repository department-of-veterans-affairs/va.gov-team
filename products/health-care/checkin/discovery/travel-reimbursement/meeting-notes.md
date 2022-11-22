# MEETING NOTES - TRAVEL REIMBURSEMENT

## 11/2/2022 - MVP Meeting with Shawn Adams
- Attendees
    - Lori Pusey
    - Ben Brasso
    - Stephen Barrs
    - Mark Dewey
    - ~Patrick Bateman~
    - Adrian Rollett
    - ~Shawn Adams~
- Agenda
    - Discuss the [MVP](https://app.mural.co/t/vfscie8528/m/vfscie8528/1667222840454/ada0c417b71c922895f1750cd32d869f6213e129?sender=ud3aa760e30b39bcf436d4473)
        - Related [Slack conversation](https://dsva.slack.com/archives/C022AC2STBM/p1667308849059459)
- Concerns
    - Determining eligibility to file a travel claim to limit who gets to file
    - No ability to file when have multiple appointments
        - CVT appointments
        - Multiple in-person appts
- Questions
    - Do we have the business rules for determining eligibility? 
        - [list](https://www.va.gov/health-care/get-reimbursed-for-travel-pay/)
        - What about caregivers eligibility?
        - What about if they have direct-deposit set up?
        - When does the TO folks check a Veteran's eligibility?    
    - Do we know where to find all of the eligibility questions via an API
    - Do we want to ask the Veteran?
    - Are we concerned if or when Veterans don't know the answers to those questions? Is it a deterrent? 
- Outcome
    - BTSSS API - Mark was told that anything submitted via the BTSSS API would be held for 24 hours and then go through an eligibility check and thrown into manual review if not eligible
        - There is a batch process that runs nightly & checks a few times and then defaults to manual 
    - We do not need to check for eligibility as part of eCheck-in
    - We would like an BTSSS API endpoint to tell us if they are eligible and why if they are not, including
        - Beneficiary travel eligibility
        - Have a BTSSS Account
        - Have a direct deposit account for travel claims

## 9/22/2022 - MVP Meeting with Business & API Teams
- Attendees
    - Lori Pusey
    - Chester Peyton
    - Kristen McConnell
    - Adrian Rollett
    - Matthew Byers
    - Ben Brasso
    - Daryl Richardson
    - Zach Park
    - Brian Seek
    - John Woolshlager
    - Kanchana Suriyamoorthy
    - Stephen Barrs
    - Mark Dewey
    - Ben Williams
    - Gaurav Gupta
    - Lesley Brown
    - Justin Kramer
    - ? Bowman

- Agenda
    - Demo of the MVP prototype
        - Identified these Veteran needs during the research study
            - Expect the VA to know if they are eligible or tell them where to go to find out
            - Expect confirmation when claim is submitted
            - Need to know what to expect after submitting a claim
        - Will put logic in place to bypass travel questions if Veteran has multiple appointments on the same day (API doesn't support this scenario)    
        - Want to test the MVP with a few clinics (maybe ones with same Travel Office) and evaluate Veteran use and impact to the Travel Office
    - Discussions
        - Darryl: Could we ask them the eligibility questions to bypass if they are not eligible?
        - Darryl: This is going to tremendously cut down on paper claims
        - Ben W.: 
            - Super simple, all steps make sense
            - Can look into the data to see which sites are doing a good job to decide who to test MVP with
            - For those Veterans who are not using mobile check-in, is there plans for a staff-facing app that does the same thing?
        - Justin:
            - Love provide info for BTSSS
            - Can we update the "need help" to tell people to contact the travel office for claim questions
        - M Byers:
            - Can anyone submit a claim who uses eCheck-in?
            - Ben/Lori: yes, we would like to be able to know (via API) who is eligible and who is not
        - Ben W:
            - Can we put eCheck-in on a tablet or something in the waiting room?
        
    - Action Items
        - UX look at "Need Help" section


## 9/14/2022
- Attendees
    - ![image](https://user-images.githubusercontent.com/86678742/190229427-a32679f9-e2e6-482e-b56a-641633fa2971.png)

- Questions 
    - We don’t believe we have a way of knowing if a Veteran has created a profile in BTS3. Is that assumption correct? And, if we don’t, then what will happen if we submit a claim for a Veteran that doesn’t have a matching “icn” in BTS3? Would we receive a response back from the API? What actually happens to that claim? 
      - LB: True but API will attempt to create a profile if one does not exist
      - LB: 200 response back means a claim was created 
      - BS: is there latency in the scenario where the Vet doesn't have a profile acct?
        - LB: API is not very fast
      - AR: what do you mean not fast?
        - LB: who knows....
      - MD: how quickly would a claim get approved?
        - LB: depends; no API to query claim status
    - Are there plans to allow Clients using the API in the future to query the BTS3 database for existing Veterans/profiles? If so, when? 
      - LB: can be but doesn't now
    - For the MileageExpense.TripType field, we were thinking of always using the “RoundTrip” value because all of our submissions will be for appointments at VA health facilities vs. Community Care appointments. Is that a correct assumption? If not, how do we determine the MileageExpense.TripType value for the Veteran/claim? 
      - LB: have to ask a business person
    - Can Veterans see the value.claimNumber string in BTS3? If so, it’s something we’re potentially interested in providing to Veterans once we submit their claim using the API. So, when (e.g., immediately, 24 hours after, etc.) would the claim appear within the portal relative to when the claim is submitted using the API? (I.e., whether it’s approved or denied.)  
      - LB: yes, same claimID
      - BB: we wanted to show the claimNumber to the Veteran; how quickly will the claimNumber show up i the Veteran portal 
        - LB: within 15 minutes; initial status is "In Process" --> "Manual Review" or "Approved for Payment"
    - We have Veterans using the Patient Check In product with multiple appointments on the same day. If we’re following the API documentation correctly, we can have Veterans submit multiple claims on the same day, but it will result in a 400 Bad Request and no claim will be created. Is that correct? Is there a plan to support multiple claims on the same day in the future? If so, when? In the meantime, if a Veteran submits a second or third claim on the same day, how quickly will we receive a response back to let the Veteran know that their claim couldn’t be created? Is it immediate?  
      - LB: doesn't know which appt is the right one; API doesn't currently support
      - LB: the API is a proof of concept
      - MD: there are teams onboarding now to expand
      - LP: is the current API production ready
        - MO: what's out there now is in production but not being used by anyone
    - Are there plans to allow Client using the API in the future to query the BTS3 database for any existing claims for a Veteran on a specific day? What about specific appointment time? 
      - LB: no plans right now
    - Are there any limitations in the number of submissions or requests that we make using the API per day? Per hour? Anything like that? 
How do/will Clients of the BTS3 API be notified of changes or new additions? 
      - LB: no limitations but API is not super fast
    - Do you know of any exceptions for specific VA health facilities that don’t reimburse Veterans? Or will the VA process any eligible claim no matter the VA health facility? 
      - LB: don't really know, ask the business folks
    - MD: We heard that the appointment must be checked-out before it can be filed; what's the process for this?
      - LB: yes, must be checked-out; they do not hold it for any period of time
    - SB: manual review is when a Travel Clerk would see it come up in the staff interface
      - LB: claims generated by the system would be no different than if a Travel Clerk hand entered it
- Next Steps
  - CIE will define the MVP & get together with the Travel Office folks

## 9/6/2022
- Questions
  - Ben will advance these this coming sprint
- API
  - We can authenticate!
  - Having conversations around test data

## 8/30/2022
- API: Do have access but access is not working
  - Leslie has Word doc for everything they have
  - API only has 1 function to submit a claim
  - API only supports 1 claim submission per day
- Questions
  - What happens if we submit a claim and Vet has no BTSSS account?
  - Can we test sending a claim to the API? 
      - MD: there is an environment for testing
  - How many claims can be submitted? 
      - BB: Once per day.
