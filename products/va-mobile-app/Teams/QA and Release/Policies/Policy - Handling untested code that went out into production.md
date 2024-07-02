## Description: 
This policy covers what happens in the unlikely event that code is pushed out into the VAHB Mobile App that was not tested or approved by QA. In the even this happens QA resources from the Team that pushed out the untested code will stop testing on new development code and prioritize testing of the production untested code. This will be treated like a Sev-1 or Sev-2 bug. 


## Process: 
1.) Someone identifies code was released that was not tested or approved by QA 

2.) Notifies Release Manager 

3.) Release Manager works with QA to write up a ticket 

4.) Release Manager communicates out to Ad Hoc Mobile Leads and impacted Flagship Team PM

5.) Responsible Flagship Team will be required to review and validate untested production code
     - Flagship Team's QA will stop working on Flagship's Team current projects and focus only on untested production code
     
6.) Flagship Team QA completes testing
     - If findings then additional bug tickets are opened accordingly, which will follow the standard bug process 
     - If no findings, then close out the ticket with remarks
     
7.) Issue resolved, Flagship QA to go back to Testing Flagship Team's new development code 



## Change log
| Situation | Date | Results | Other | 
| ----- | ------ | ------ | ------ | 
| H&B pushed out React Query changes that were not tested by QA | Jan - June 2024 | After lots of back and forth, but as of 5/29 RQ transitioned to Global and Mobile Product Lead (Matt) said that Global Team will prioritize when they want to test untested prod code. The plan was to do it after Homescreen Personalization which was said to be 2 weeks but later identified as at least 2 sprints. QA decided to used our Technical Debt Capacity to get it tested vs waiting, | This also resulted in a need for a policy to be created by QA and Release Team |
