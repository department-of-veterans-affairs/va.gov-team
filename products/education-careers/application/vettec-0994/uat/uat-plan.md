# UAT Plan for form 0994 - VET TEC
UAT is scheduled to begin on March 7th, 2019 through March 11, 2019
We would like 6-10 participants to be engaged in UAT

## Questions
### Where will we be testing on March 6, 2019 when UAT begins?
- Production ~~or Staging?~~

~~If~~ Production:
- Approvals
  - What needs to occur in order to go to production? OMB Approval? DS Approval?
  - Work with DevOps to have PW protected Prod instance (Ryan Luu)
    - VET TEC: Deploy VetTec tool to production (Internal Engineer)#17089
    - VET TEC: Create a password protected feature flag for VetTec URL (FE)#17088
- Test Participants
  - Real Veterans submitting real applications for VET TEC? We will not be utilizing veterans who want to submit real applications in this phase
    - Assume these veterans (recruiting within Booz Allen) could submit real applications to be processed. Is that correct?
    - Pete has a list of veterans to utilize 
  - Real Veterans submitting test applications for VET TEC with fake data to be deleted by claims processesors?
    - If this, can we have the veterans recruited by the recruiting firm submit?
    - If this, then what should be the process for flagging and intercepting fake data?
    - Matt prefers this method but Shay says this will make it more complicated to remove the fake data from TIMS. 
      - Shay wants Pete and Ricardo to confirm. **Pete confirmed that fake data can be easily removed from TIMS**
  
-~~If Staging:~~
- ~~Would testing on staging be sufficient if awaiting an approval prevented us from moving to Production?-~~
- ~~If yes, then assume we'll be using veterans recruited by recruiting firm~~

### Who will be supporting these sessions?
- ~~We need representation from Education to be able to answer questions and assist with the application because we're using real veterans.~~
- ~~Who can I include on the sessions to support in this capacity?~~
  - This is not necessary because the veterans we are working with for UAT are submitting test applications for the program. 
  
### Messaging
- ~~Can someone share messaging regarding the program and how to advise veterans on selecting a program?~~
  - This is not necessary because the veterans we are working with for UAT are submitting test applications for the program. 
