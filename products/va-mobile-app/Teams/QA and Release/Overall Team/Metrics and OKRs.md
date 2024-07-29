# Draft and Thoughts

# [Actual Goals found here ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/platform/Metrics-and-Goals/Q1-Mobile-Platform-Teams-OKRs.md)



## Notes: 
 - Some limitations for bugs - QA can identify and report them however its up to individual teams to prioritize and allocate resources to complete bug work
    - QA has set-up guidelines on timing of bug resolution for Sev 2 and Sev 1 ; Sev 3 up to each team; each team encouraged to allocate % of each sprint capacity to work technical debt  
 - Fatal errors - Mobile can only control how our system works ; fatal errors upstream that impact Mobile are out of scope
    - QA will implement proper testing to ensure Mobile does not release a fatal error into our product
 - Mobile's deployment frequency is out of scope given the need to follow Mobile App release processes - which cannot be on demand like web
 - Some metrics and their improvements will require QA and Release's DevOp's role to be filled in order to make progress and change  

## OCTO Objectives Relevant to QA and Release
###  Fatal Error:
 - QA and testing quality to prevent Mobile from introducing a fatal error
    - Excludes if an upstream fatal error forces a client user (mobile) to experience a fatal error
    - However if we do and we handle it poorly then need to correct  

### DORA 
 - Built with Web in mind
     - Deplyoment frequency won't be measured.
     - MTTR (mean time to recover) pushing out changes requires users to get the latest version
        - Track usage of feature toggles (outside of QA), AF, and hotfixes
     - Chagne Failure usage of hotfix, AF 
     - Lead time changes
        - Could track out long pipline takes to execute builds
        - Track failed builds due to testing failures  
   
### OCTO Objectives Applicable for QA and Release Team
 - Objective 1 - Better Experiences
    - #4 - No transactions accept by our products have a fatal error
 - Objective 2 - Stronger platforms
    - Elite Level DORA on deployment frequency, lead time for changes, change failure rate, and time to restore service  

## 2024 Office of CTO Applicable for QA and Release Team
### Stability - enable teams to build with confidence
Bugs 
 - Caught during release testing / nightly build 
 - New bugs in production post release
 - Open bugs by severity

Hotfix / Availability Framework usage
  - Track usage times and also root cause 

### Productivity - Enable teams to build faster 
PR time 
 - Type from request to completion by QA and for other teams on QA request 
Documentation: 
 - Onboarding
 - QA process and expectations
 - Coverage / findability  

Automation
 - % of items tha can be automated are automated - reduce manual intervention 
 - Broken detox tests at merge

### Efficiency - Enable teams to build more with less - less input, more output
 ???? 

### 2024 Office of CTO Applicable for QA and Release Team
 - Stability - enable teams to build with confidence
    - QA will focus on 1 and 2
    - Not relevant to QA
       - #3 - dependent on the team to complete the bug work
       -  #4 and #5 are managed on the Global Team in the Flagship App
 -  Productivity - Enable teams to build faster 
    - QA will focus on 
       - #1 can focus on QA's PR Review time and expectations on teams reviewing ours - others out of scope
       - #2 can focus on documentation, onboarding , focus 
    - Not relevant to QA
      -  #3 User happniess trending currently cannot be tied to release management this will be managed by Flagship App team 
 - Efficiency - Enable teams to build more with less - less input, more output
    - QA could focus on 
    - Not relevant to QA
       - #1 Not involved in Cloud cost
       - #2 Off the shelf tool cost - since we use Detox tool - lean on Engineering Discipline Lead on this but QA can provide feedback
       - #3 Platform cost - lean on Program Management to oversee but QA can provide feedback








## OCTO Objectives Relevant to QA and Release

<img width="539" alt="image (3)" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/1f525de4-e27a-4e68-a9ae-97f701cf1f3c">
<img width="530" alt="image (5)" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/e5cfc69e-6ff7-439d-9b8a-99b96692652b">
<img width="396" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/df8562c9-b01a-495f-bec5-14c5dde62b97">
<img width="516" alt="image (8)" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/7bcb86de-6a22-4d88-80b9-e13c55654d4b">
<img width="539" alt="image (3)" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/4d06a936-75d7-4737-a5b9-03ee447e9dec">



## 2024 Office of CTO Objectives - VA Platform Mobile Tools and Services OKRs
<img width="696" alt="image (11)" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/bbf09cff-5b04-4c35-9fb7-287cc1622c13">
<img width="743" alt="image (12)" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/995ec0ed-10c5-44ba-bf99-272367d241f4">
<img width="700" alt="image (13)" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/29e212d5-f4da-4e5c-973b-62783b80fae3">
<img width="708" alt="image (14)" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/be06038a-3c58-467f-984d-c415ffed7825">





