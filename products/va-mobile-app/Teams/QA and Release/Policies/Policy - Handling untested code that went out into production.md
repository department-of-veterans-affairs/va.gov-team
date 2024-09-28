## Description: 
VAHB Mobile Team has prided itself on the quality of code it provides to Veterans. Part of this is attributed to the time, effort and focus the team prioritizes in testing and validating new code planned for production. This due diligence is critical in providing a quality app that provides app stability, user satisfaction, functionality, compatibility and more. 

This policy covers what happens in the unlikely situation that code is pushed out into production in the VAHB Mobile App that was not tested or reviewd by QA. It is known that QA has limits to testing (analytics, production testing, etc), so this situation is focused on untested code that QA had the ability to test and review

In the event this happens, QA resources from the Team owning that code will stop testing on new development code and prioritize testing of the production untested code. Once testing is completed (no findings, new bugs, etc) then QA resource can return back to new project work. 

## Process: 
1.) Someone identifies code was released that was not tested 

2.) Release Manager is notified of the situation

3.) Release Manager works with QA to write up a ticket 

4.) Release Manager communicates out to Ad Hoc Mobile Leads and impacted Flagship Team PM the situation 

5.) Responsible Flagship Team will be required to review and validate untested production code
   
   * Flagship Team's QA will stop working on Flagship's Team current projects and focus only on untested production code
     
6.) Flagship Team QA completes testing
     
   * If findings then additional bug tickets are opened accordingly, which will follow the standard bug process 
     
   * If no findings, then close out the ticket with remarks
     
7.) Issue resolved, Flagship QA to go back to Testing Flagship Team's new development code 

8.) Release manager updates change log below 



## Change log
| Situation | Date | Results | Other | 
| ----- | ------ | ------ | ------ | 
| H&B pushed out React Query changes that were not tested by QA | Jan - June 2024 | After lots of back and forth, but as of 5/29 RQ transitioned to Global and Mobile Product Lead (Matt) said that Global Team will prioritize when they want to test untested prod code. The plan was to do it after Homescreen Personalization which was said to be 2 weeks but later identified as at least 2 sprints. QA decided to used our Technical Debt Capacity to get it tested vs waiting. Therese completed testing in Sprint 0 and found maintenance bug issues and created a ticket for Flagship to prioritize. | This also resulted in a need for a policy to be created by QA and Release Team |
