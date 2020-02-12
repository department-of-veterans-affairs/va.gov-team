# Summary
TL;DR of what we are learning and doing in ATL. 

### Key Take-Aways 
+ the HEC currently processes about 7% of applications. This is because ~ 93% come through the highly decentralized paper process via mail and medical facilities 
+ most of the pending queue is related to Vista
+ about 70% of applications coming through VOA are automated
+ YES, there are fast paths. They are:
    + anyone with a service connection (checks VBA) 
    + anyone who meets one of the military service categories (checks DoD -- DD214) 
+ means test is done asynchronously, via quarterly check with IRS 
+ there is a pilot rolling out at the end of May getting VAMCs to use the ES instead of Vista to enroll Vets for care--could we add vets.gov to this pilot? 
+ it is possible to see what the STATUS IS (via the submission #) just no one has used it 
+ application / eligibility needs have been combined with registration needs... this has led to the collection of more data than ACTUALLY necessary in the application process. Yes, hospitals need particular information about a veteran, but they don't need it at the point of application. 
+ there are two pending queues: eligibility and means test 
+ financial check (determining $ threshold) is done against SSA and IRS 
+ there are two financial thresholds: national and geographic threshold + C+P exam creates applications in VISTA, which creates pending applications in the pending queue... many veterans getting the C+P have no desire for VA care, and are only doing it for their disability rating.
+ the only reason the PDF was created in the first place was to give the business control of the system 

### Concerns 
+ contractor is changing--HUGE RED FLAG 
+ ES is not broken, but there are a lot of things it's not doing super well
+ not load-tested 
+ be careful of how we load data into the system 
+ no one at the HEC is technical--only one technical is 


### Opportunities
+ improve the content of the letters 
+ UX UX UX UX UX 
+ content, clarity 
+ ACA-type exemption to access IRS data automatically
+ provide status via mobile (submission #) 
+ add vets.gov to the May pilot moving away from Vista
+ tag onto Ft. Riley pilot
+ decouple what is needed to DETERMINE eligibility and to actually register someone for care
        + only questions needed for eligibility in the application  
        + all other questions collected after eligibility has been granted
+ make it possible to track the 7131 (OtH request to VBA) through VBMS 
+ get them a programmer at the HEC (via Schedule A) 


# Day 1

+ 9 -- team brief
+ 10:30-12 -- Josh Faulkner (ES, technical perspective) 
+ 12:30-1:30 -- Lunch
+ 2:15 - 3:15 -- Jim (ES, business perspective)
+ 4:30 -- Demo of ES (Josh) 
+ Dinner / debrief

### Questions from Day 1
+ if 70% of online are automated, what happens to the other 30%? 
+ What is required to verify a human is already in the system? 
+ How do we communicate decisions to vets?
+ Will integrating with BGS be possible? 
    + Load?
    + Paperwork? 
+ Does anything NOT land in the enrollment system? 
+ Can we add this to the Kiosks? Other public PCs at the medical centers? (Mike Davis) 
+ Could we add vets.gov to the pilot? 
    + Asheville, central TX, north TX, 
+ Business diagnostic (L6s) end to end process map – ID gaps, document the risks, and ID deficiencies 

## 9am: Josh Faulkner, ES 101

+ There is no intake process… only client is the 10-10EZ. 
+ Posts Window platform (webserver) >> application server >> final SOAP XML (ES) 

#### NEW APPLICATION (anon path)
+ ES doesn’t know this 
+ Add to MVI, generate an ICN
    + Updates weekly 
    + If no unique match, application fails 
+ Get an auto response about the failure, with recommended next step 
+ Add enrollment record
+ Business rules kick in
    + Does this person have a claim? 
    + Military service episode on file?
+ If YES, Try to automatically enroll – “not go into a pending status…” 
    + If person is known to VA, enrolled in 5 min 
        + Service-connection? 
        + Pension 
+ Querying VBA: HL7 >> enrollment >> message broker 1 >> message broker 2 >> VBA >> return
    + How is the call triggered? New enrollment created. 1st time we get an application… can also re-trigger manually. 
    + ONLY get decisions back – nothing under review
+ If YES, they are enrolled
    + mail packet “welcome to VA” 
    + HRC personally calls new vets each week 
+ IF NO, verification based on income… 
    + Dependents
    + Income 
    + Family size 


+ We take their word for it when they submit… means test is validated with IRS (through IVM)
+ QUARTERLY CHECK WITH IRS (could revoke status) 


VADR has issues 
+ Failed queries 
+ If it comes from a VAMC, take their word

??? DS LOGON… identity doesn’t get added like it’s suppose to… ??? 
SYSTEMS integrating 	
+ MVI 
+ VADR

70% are enrolled automatically.  How many of these are later revoked?
-	most come from authoritative services, VBA or MSDS (VADR) 

Give better instructions on the form… 

Most that end up in pending are just about ½ way done… what’s missing/could be more clear?
+ Financial 
+ Special factors (PG 6) 
+ Medicade/care (PG 5) 

RENEW APPLICATION (anon path)
+ VOA currently allows for updates to fields 

#### WANTS 
+ More clarity 
+ More ownership, access, ability to fix things… 

#### NEXT STEPS 
+ Access to the ES – send Josh 
+ ~~Weekly data from Mehedi~~ 
+ ~~Demo of end-to-end processing~~ 
+ Get intros to the BGS team from Paul 
+ Talk to:
    + Leroy Garcia (income verification) – takes place outside of ES (IVM validates to SSA and IRS to validate the person’s income) 
    + Dane (data / stats)
+ Magda (ES) 
+ Kori Kittles (works with OIT on defects and requests, largely new requirements) 
+ Stacy Echols (processing applications) 

## 2:15 -- Jim (ES) 

### Main issues with VOA
+ Some don’t transmit from VOA to ES, and they have to be manually released 
+ Transmit, but require manual intervention
+ UX… what’s more of an issue is the “online application” 
+ Correspondence is unclear, confusing, etc… 
+ Info needed from VBA
    + OtH (interim fix, file of determinations that are then checked against the ES) 
+ Info from DoD 
    + Auto-enrollment into VA care for those getting DoD mental HC 
    + Pay information from Dimers 
    + New MSDS 

### What IS the pending queue?
+ Missing information
    + Missing financial information
    + Missing military service data 
+ MVI enumerated records into the system
+ Records that go from Vista to the ES 
    + All facilities now have a list of their own pending records
+ VA employee sought care
+ Decoupling registration from enrollment (FY16 release) 
+ C+P exam 

Many/most items in the pending queue come from facilities / VISTA 
PILOT: VAMCs using enrollment system only

+ Registration = signing in
    + Can still provide care 
    + Charged at the “humanitarian rate” 
+ Enrollment = actually in a PG, with co-pay 

### Next Steps 
+ How do we sunset other entry points responsibly? 
+ ~~Set meetings with:~~
    + Kori Kittles (new VOA lead) + Magda
    + Dane 
    + LeRoy
    + Elizabeth Taylor (manual processing) + Stacy Echoles (Enrollment process, end-to-end) 
+ Does anything NOT land in the enrollment system? 
+ Can we add this to the Kiosks? Other public PCs at the medical centers? (Mike Davis) 
+ Could we add vets.gov to the pilot? 
    + Asheville, central TX, north TX, 
+ Business diagnostic (L6s) end to end process map – ID gaps, document the risks, and ID deficiencies 

There is a lot of manual intervention and rework, b/c systems don’t talk to each other, bad data, etc… (9-13 system that the clerks go to for validation—all manual) 
+ eFolder 
+ HINQ (kicked off in VISTA)
+ MVI  (currently dates of death IPT, address management)

#### What is misunderstood?
+ Vets
    + Priority groups 
    + How decisions are made 
    + How being enrolled relates to ACA 
+ 3rd parties 
    + HEC only processes about 7% of applications – want to flip this. 
    + Processing = inputting + processing to final decision 

Pilot with Ft. Riley – 10-10AD 

Why do VAMCs use VISTA to enroll veterans? 
•	Mandate 

### Wants 
+ Everything else is shutdown
+ Vets.gov is the central location for application 
+ People actually use it
+ July 5th – all can enroll via phone 


## 4:30 -- DEMO of ES

There IS a Submission ID 
+ Submission status 
+ It’s possible to see what the STATUS IS – just no one has used it 
+ Use this number in the call, and should be good. 
+ Collect cell number and provide status via mobile—Twillio? 

There are 4 active contracts on the ES
+ Choice (CSRA)
+ le jeune (HP)  
+ tech refresh (short-term, kicked off last month) SRA 
+ sustainment 

> “they might get rolled up into one… in May” 

QUESTIONS
+ What real production endpoints? 
+ 400K per night (new and updates) 

# Day 2
+ 9 -- LeRoy (financial disclosures)
+ 9 -- Corrie Kittles + Magda
+ 11 -- Lorelle, Elizabeth, Chris (manual processing)
+ 12-12:45 -- Lunch
+ 1 -- Dane (data)
+ 2-5 -- workshoping 
        + redesigning the form (emtav and anne) 
        + testing (paultag, alex, and joe)
+ Dinner / debrief

## 9am: Corrie, Magda
+ there are two pending queues: eligibility and means test 
+ financial check (determining $ threshold) is done against SSA and IRS 
+ there are two financial thresholds: national and geographic threshold 
+ 10% increase each year thresholds 
+ C+P exam creates applications in VISTA, which creates pending applications in the pending queue... many veterans getting the C+P have no desire for VA care, and are only doing it for their disability rating.
+ the genesis of the pending queue is a law that was passed in 1996 about enrollment, which led to the creation of the enrollment system in 2008, that grandfathered in anyone who had sought care for a particular time period around 1996... 
+ related to the pending queue as well: there was a data migration in 2007-2008 that was not done well, and led to mismatches in data fields, lost cases, and alot of residual impact. 

> "...the laws and rules are so complex + convoluted that it's impossible for the systems to keep up."

## 9am: LeRoy

## 11am: Lorelle, Elizabeth, Chris
Focus of this meeting was on understanding the manual process related to unverified applications. 

+ each morning the Enrollment System generates a list of enrollments (ADR – automated data repository) 
+ list is manually reviewed by management analyst 
    + this generates an email from informatics team 
+ anything that is not “verified” is pulled out manually and inputted into WRAP 
+ analyst (of which there is 1...) manually tracks down the record
+ if nothing is found, they generate a pending letter 

### what ends up NOT verified?
-	means test 
-	purple heart 
-	outright rejections 

### are there any errors that are preventable? 
-	leaving a spouse off  (incorrect financials) 
-	confuse it with medicade (PG 5)  
    + you need to provide medicade proof
    + backbilled  
-	clarity on what “service-connected” means 
    + 10% or greater AND compensable (incurred or aggravated) 
- financial assessment 
-	general input errors (review feature) 

### what's behind the submission errors? (talk to Mehedi) 
-	characters 
-	“hung up in transmission” 

### what is the MVI issue? 
-	new registration >> check ES to avoid duplicate >> queries MVI >> 

### % that are POA?

### Ideal
-	already verified --- as automated as possible 
-	able to attach documents 

- about 30% w/o DD214s don’t send it in… 
-	WW2 generally have them 
-	Vietnam generally don’t 
-	DPRS (defense personelle retrieval system) 

MAKE IT SIMPLE UX UX UX UX UX 

2011 version was different – 2015 cut out a bunch of information


## 1pm: Dane 

-	design of the system is weak…  
-	what actually CAUSED the enrollment? 
    + NON-PENDING enrollment decision was made 
-	About 2 minutes to process 
-	VOA doesn’t feed into a workload – feeds into the ES and then enrollments are batched 
-	Not all submissions through VOA are NEW… many are updates? (about 50%) 
-	Updates… ES doesn’t know what they were trying to update (have to cross-reference all the data fields) EVERYTHING gets resubmitted. 
-	“there’s a lot of noise in the enrollment system” 
-	130 VISTA systems … in the field 
-	most of the work is currently done in Vista… (~75% walk into a VAMC) 
-	ES doesn’t capture the application method 
-	Transmission failures b/w Vista 
-	Submission failures (10-20%)  78 submissions yesterday, 58
    + Never been below 10% 
-	We collect more information than we need 
    + We need basic demo… 
    + We GET the mil serv data – we don’t use anything else from the military service
-	“they explain all the inefficiencies away… the fact that they understand it, is part of the problem.” 
-	There’s a belief that a lot of things happen automatically. 
-	Assumption that there is follow-up… once it’s in pending, it’s just sitting there… there’s some pilot work happening for case-management 
-	If it takes more than 1 day, forget about it… pending… 
    + we either need 1 day, or forget it
    + what would a veteran need to do to follow up… call and find out what is missing… 
-	Most veterans DO need to submit additional information… (what 
-	PGs 1, 2, 3, most 4s, 6s… should be able to be automated
-	About 50% of vets applying for HC are already in the VBA system 
-	Biggest obstacles is Veteran verification (“there’s a long list of systems… probably at least 10, and each one is good for different types of Veterans.”) 

_“we design a lot of these systems for US instead of the customer…”_

combat veteran “clean-up” project 

+ Are you Veteran?
+ Are you service-disabled?  **
    + What % 
    + [query VBA] 
    + most combat vets 
+ Military service qualifications? 
+ Financial…? 
+ Attach supporting documentation? 


### WANTS
+ Better systems to confirm military service 
    + MSDS is good for recent veterans 
+ Ability to attach DD214

## Demo with Matt and Ryan
+ ADD help desk number 
+ Map out landing page, include 
+ REMOVE ACA question: how many people were enrolling for care, who would not have applied otherwise for VA care
+ is there something about attesting/agreeing to usage for 3rd party providers 
+ medicade / medicare are required fields -- why? 
+ can we provide live feedback / probability? 
+ turn extra copy into hovers 
+ why do we need their financial information? 
+ make the edit button work 
+ how's the font? 
+ why are we collecting medical facility information 
+ add gender identity for the spouse 
+ indicate that there's still a need to SUBMIT 

feedback page:
+ you will get a phonecall within one week with your response: enrolled, pending
+ 222-vets 

for tomorrow:
+ make the edit button work 
+ financial copy 
+ add an upload button

NEXT STEPS 
+ what should be on the feedback page? 
+ talk to spangtos about the pilot 
+ 

DEMO
+ usability videos
+ demo 
+ mobile!
+ what to expect in May
+ next steps 
+ ASK: send us vets for usability research

