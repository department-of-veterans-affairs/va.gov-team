May is the homestretch. The primary goal for this "final" month is:

> To ensure that the application is effective and stable. 

RULE #1 = don't make the news.

RULE #2 = raise all the flags, early and often.

TIMELINE / MILESTONES
+ final usability session on the 17th
+ by the 13th we want backend to be connected (meaning application can be sent from vets.gov to ES pre-prod) 
+ NO FRONT-END CHANGES AFTER the 18th w/o discussion 
+ NO BACK-END CHANGES AFTER the 20th w/o discussion 
+ Bug Hunter on the 23rd 

To achieve this, we must:

1. finish all frontend work / changes (update design + content based on outcomes of SF workshop) -- ETA: 5/17
    + DEPENDENCY: EmTav's content changes / lawyers feedback, etc...  
    + DEPENDENCY: Amount / type of work that comes out of usability session on the 17th 

2. connect to the backend

3. test the @#$% out of it
+ functional testing
+ 508 testing
+ usability testing 
+ performance testing 

4. deploy 
        + DEPENDENCY: GovCloud 

This breaks down into 6 main streams of work. These are detailed below, along with their "owner"

### 1. Functional testing -- Alex 
+ browser and device testing 
+ planning sesh with Stacey 

### 2. 508 testing -- Courtney

### 3. Backend -- Alex 
- [ ] Test pushing data to pre-prod (EOD 5/9) - Joe
- [ ] Mapper.js PR needs to be merged in (EOD 5/9) - Joe
- [ ] Prefixing resources with version number (EOD 5/10) - Alex/Robbie
- [ ] Handling response from ES endpoint (EOD 5/10) - Joe
- [ ] Mapper.js needs to be updated with new store structure (5/11) - Alex/Robbie
- [ ] Get deployed to AWS (can't happen until GovCloud is set up on 5/20)
- [ ] Grant GovCloud access to BE team
- [ ] Monitoring (need ticket)
- [ ] Integration testing - Alex

### 4. Frontend -- Anne  
+ Changes from SF
+ Changes from usability testing 
+ Usability testing (2x) -- EmTav 
    + usability 1 
    + UAT 

### 5. Deployment -- Albert 

### 6. Programmatic things (launch prep, etc...) -- EmTav 
+ access to all things VA for Alex and Robbie 

[A list of all to-dos is listed here.] (https://github.com/department-of-veterans-affairs/healthcare-application-team/issues/147) 

NEXT STEPS 
[ ] Set meeting with Jeff, Stacey, and Anne to talk backend and deployment 
        + what do all the backend peeps need access to? 
+ 

# QUESTIONS TO ANSWER
+ what happens on the 30st? __soft launch of the health application IN BETA. this will be framed clearly as a PHASING OUT of the current state, and a PHASING IN of the new process_ 
+ anything preventing us from redirecting all VOA links to vets.gov? _no_
+ anything preventing us from pulling down all 10-10EZs? _no, we can pull these all off of the internet, BUT they must continue to exist in physical form at ROs, VAMCs, etc..._ 
+ anything preventing us from doing a gradual roll-out? _no_ 
+ What is the OMB control number? _we don't have one yet, Marina is working this through OIRA_ 
+ How is the vets.gov control number framed/governed/regulated? 
+ Can one form have more than 1 control number?

