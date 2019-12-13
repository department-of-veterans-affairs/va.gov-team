#### Background on working with VBMS and BGS teams
- Difficult to get operation set up with VBMS and BGS teams
- Environments: UAT, Dev, Pre-pro, Prod 
  - Getting access to lower ones is much easier than getting access to the higher ones 
  - Start with trying to get access to the lower environments first, explaining that we have an ATO, what we're trying to build, and our release plan
- The earliest we can set up this conversation the better
- Make it as official sounding as possible
- Make sure that Vets.gov-wide ATO will cover us; if not, start working on new ATO
- The Appeals team has asked their product people to commit to a 5% Level of Error (LOE) --> this has helped

#### VBMS
- VBMS endpoints are much more crude (maybe they exist, maybe they don't) and each one is different and has a lot of nuance
  - Things they can do with VBMS: upload/download pdfs to a Veteran's claim record (eFolder), as well as establish claims
- VBMS will have to give us credentials and set up an application in their UAT environment

VBMS UAT:
URL: https://www.uat.vbms.aide.oit.va.gov/vbmsp2

Login Credentials:
Station: 317
User:  VDCTESTERDEV
after you enter that click on the PIV Login button

#### BGS
- BGS has a million services and it's all about finding the right one
- VBMS uses BGS in a big way, so a lot of times things you think you have to do in VBMS you can actually do in BGS
- BGS has far more consumers of their services so they're somewhat more used to accepting new consumers
  - Shane will send us a list of all the different APIs they have
  - BGS has all their endpoints open in UAT

#### Gems/Libraries
- The Appeals team has libraries that help you interact with both VBMS and BGS
  - We'll especially want to use the library for VBMS because they use encryption for their SOAP requests, so they had to write the interaction in jruby
  - [connectvbms gem](https://github.com/department-of-veterans-affairs/connect_vbms)
  - [ruby bgs gem](https://github.com/department-of-veterans-affairs/ruby-bgs)




## Additional Josh notes:
- Environments: Order of deploys: Dev-> UAT-> PreProd-> Prod

  Based on how vets.gov is connected to MVI:
   - vets.gov dev     -> VBMS dev*  -> BGS/BEP Webtest 
   - vets.gov staging -> VBMS UAT   -> BGS/BEP Linktest
   
    *EVSS connects to VBMS UAT for all environments due to the way they've configured themselves with IAM/MVI
    (This causes headaches when integrating - only with EVSS - but also it means that our dev will be connecting with their dev which can change often. Recommended that most work is done within Staging to provide a more stable environment.)
    
   - I can help set up VBMS UAT GUI accounts for folks who need/want it. Will also need to gain access to BGS/BEP testing environments. 
   - No way to set up back end data without pushing it through a mock-business process
   - BGS supplies all services from the CorpDB including to VBMS. VBMS is the GUI sitting on top of the Corporate Database. 
  
  ###BGS - Benefits Gateway Service
   - Lead dev is John Dell. He is not good with email as he is dislexic and prefers phone calls
   - Tina Edwards is the lead on what the services do requirements wise. If you have questions about the services it is best to talk with her first prior to going to their dev folks until after initial discussions
   - Connecting with needed services is relatively easy, if they have what you need. Building or changing services requires a WSCR (Web Service Change Request).
   - Because so many consumers rely on their systems it is quite easy for their services to be strained depending on usage, can cause negative performance.
    - All out of network connections go through PITC before back to AITC CorpDB to then go back to PITC and outbound. (double check, but potentially another reason to go around them if possible)
    - Requires more time upfront to get prioritized into their development sprint. They are not a large team and thus it takes a lot of pushing to get your WSCRs prioritized. The prioritization usually happens by OBPI, however also with consultation from other stakeholders. 
    - Most BGS services are not going to be Pension specific. It will require some digging or conversations with Tina Edwards 
    - OBPI Contacts are useful (as Shane has mentioned): Michael Taylor is a lead analyst on their services staff. He is good to work with though often overextends on the amount of projects he is working on. Mind like a steel trap. His Chief (supervisor) is Kristine Adamo. Both Michael and Kristine live in Austin.
    
   ###VBMS - Veterans Benefits Management System
    - VBMS has a number of subsystems: VBMS Core / VBMS Correspondence / VBMS-R / VBMS-A / VBMS eFolder
    - We're more concerned with Core and the efolder than the others in regards to services.
    - VBMS is now under the OBPI staff (since October), this may shift some interactions the team is used to having with VBMS. At least at the business level. 
   - VBMS owns the efolder where claims processors review claims documentation.
   - Troy (VBMS OIT) is usually fairly easy to work with, though others may drag their heels when it comes to fixing issues for partners that they do not believe to be important
   - VBMS: if we need changes to their services (which requires an ACR) and they make us go through the PMO prioritization process... well... yea...
