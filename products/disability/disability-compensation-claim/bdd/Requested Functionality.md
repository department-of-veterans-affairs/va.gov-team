From: "Cooper, Barrett E., VBAVACO" <Barrett.Cooper@va.gov>
Date: Monday, December 9, 2019 at 5:20 PM
To: Paul Shute <Paul.Shute@va.gov>, "yroy@governmentcio.com" <yroy@governmentcio.com>, "cvalla@governmentcio.com" <cvalla@governmentcio.com>, "kstachura@governmentcio.com" <kstachura@governmentcio.com>, "Schneider, Andrea Z." <Andrea.Schneider@va.gov>
Cc: "Leal, Karla, VBAVACO" <Karla.Leal@va.gov>, "Washburn, Reginald, VBAVACO" <Reginald.Washburn@va.gov>, "Bullock-Jones, Alohalani, VBAVACO" <Alohalani.Bullock-Jones@va.gov>, "Sanders, Robert, VBAVACO" <Robert.Sanders1@va.gov>, "Moses, Jocelyn, VBAVACO" <Jocelyn.Moses@va.gov>
Subject: RE: BDD on VA.gov

Good Afternoon,
 
As discussed today on the call, below are the details of our requested functionality for submitting BDD claims on VA.gov and the requested BDD external links.
 
BDD Fact Sheet:  https://benefits.va.gov/BENEFITS/factsheets/general/BDDFactSheet.pdf
BDD YouTube Video:  https://www.youtube.com/watch?v=DTSujFDP-58&feature=youtu.be
Pre-Discharge Claim/BDD website:  https://www.va.gov/disability/how-to-file-claim/when-to-file/pre-discharge-claim/
 
Paul, thank you for starting this workgroup and providing the 526EZ information.  I reviewed the 526, and I think the following that are marked yellow (helpful information but not required) should instead be green (required for BDD claims).  Otherwise, looks good.
 
- Box #10:  Telephone number(s)
- Box #12:  Email address
- Box #13:  If you are currently a VA employee, check the box
- Box #14A, 14B, and 14C:  Type of address change, address, and effective date.  Servicemembers (SM) often submit a BDD claim, then go on terminal leave or relocate before they separate.  Therefore, we need this information in order to accurately request the exam in their local area.
- Box 21E:  Current or assigned phone number of unit
 
Here is the BDD/BDD excluded end product (EP) claims establishment guidance
 
BDD
 
If the claim is received within 180 to 90 days before the anticipated release from active duty (RAD)/discharge that the SM provides with their BDD claim, Box #9 of 526EZ, then the diary EP and claim label is:
 
EP 336 – BDD 
 
The EP 336 will be a diary EP with a future date of claim (DOC) of the day after the anticipated RAD (RAD + 1).  A diary EP shows a negative days pending as a countdown to the RAD + 1.  Once the RAD + 1 date occurs, the diary EP will mature to a normal pending EP.  For example, if the RAD is 03/31/2020, then on 4/01/20, the diary EP will mature to a pending EP.  
 
BDD Excluded
 
If the claim is received within 89 to one day before the anticipated RAD, then the claim label will be one of the below rating EPs.  Paul, please let me know if I am missing any of the normal rating EPs.  These will also be a diary EP with a DOC of the day after the anticipated RAD (RAD + 1) .  
 
| EP |	Claim Label|
| --- | --- |
| 010 |	Initial Compensation  Issues|
| 110 |	Initial Compensation 8+ Issues|
| 020 |	New |
| 020	| New/Increase |
 
 
Paul, are you all building functionality to accept and establish EP 030 – Higher level review and EP 040 – Supplemental Claim?
 
Additional Contentions Submitted after a BDD/BDD Excluded Claim Already Submitted 
 
If the SM already has a pending BDD claim and the SM submits more contentions (claimed medical conditions) and, on that date these additional contentions are submitted, the SM has less than 90 days remaining on active duty (89 to one day before RAD), then an additional rating EP will be established based on the below VA manual M21-1 guidance.  
 
If the SM with a BDD claim already pending submits more contentions and the SM still has 180 to 90 days remaining on active duty when those additional contentions are submitted, then, those contentions are included in the already pending BDD claim.  If the SM with a BDD excluded claim already pending submits more contentions, then, those contentions are included in the pending BDD excluded claim.  
 
III.i.2.A.2.i.  EP and Claim Label Options for Additional Contentions by BDD Claimants Less than 90 Days Before Discharge		As noted in M21-1, Part III, Subpart i, 2.A.1.e, additional contentions that are submitted by BDD claimants when there are less than 90 days remaining on active duty at the time the additional contentions are submitted will be processed as BDD-excluded claims. 
 
These claims will be treated as a separate BDD-excluded claim and will be established as indicated in the table below. 
 
| If the pending BDD EP is a(n) ... |	Then ... |
| --- | --- |
| 336	|•	review the evidence to determine if the BDD rating EP will be an EP 010, 110, or 020, and follow the guidance below.|
| •	010 or 110 | an EP 020 with the appropriate claim label.|
| 020	| an EP 021 with the appropriate claim label.|
 
Notes:  
- All additional contentions that are received for BDD claimants with less than 90 days remaining on active duty will be included and processed under the BDD-excluded EP 020 or 021 as noted above.

- If a new contention(s) is submitted after discharge, and the original BDD EP (010, 110, or 020) is still pending, work the additional claim under a separate EP 020 or 021 as noted above, since the service member does not have at least 90 days remaining on active duty at the time the new contention(s) is submitted.

The EP 020 or 021 claim label will be New or New/Increase as shown above.
Currently, when a SM with a pending claim submits more contentions electronically one of the below EP 400s are auto-established.  Then, the claims processor reviews the EP 400 and takes the appropriate EP action detailed above.
- 400 - eBenefits 526EZ-Pre-Discharge (400), and
- 400 - D2D-Pre-Discharge (400).
Here is the M21-1 guidance for CESTing BDD and BDD excluded claims which is needed to properly route BDD and BDD excluded claims by NWQ.
 
III.i.2.A.2.a. Placing BDD and BDD-Excluded Claims Under Diary EP Control		Upon receipt of a BDD or BDD-excluded claim, intake sites must place the claim under control by establishing the appropriate diary EP in VBMS.  As illustrated in the image below, this procedure includes 
- selecting Pre-Discharge as the CLAIM TYPE
- selecting the proper PRE-DISCHARGE TYPE
 - - BDD for BDD claims
 - - QUICK START for BDD-excluded claims
- entering the day following the anticipated date of separation from active duty as the SUSPENSE DATE
- checking the ALLOW POA ACCESS TO DOCUMENTS box, if applicable
- selecting the appropriate INTAKE SITE
- assigning the claim to the BDD (NATIONAL) lane in VBMS for BDD claims only, and
-	utilizing the EP and claim label provided in
-	utilizing the EP and claim label provided in
- -	M21-1, Part III, Subpart i, 2.A.2.c for BDD claims, or
- -	M21-1, Part III, Subpart i, 2.A.2.h for BDD-excluded claims.
Example:  
 
Important:  For foreign claims in which the service member is remaining overseas, enter the Foreign Claim corporate flash.  This is essential for proper National Work Queue (NWQ) routing of foreign claims.
 
If the claim is BDD-excluded, then the segmented lane will be Core (3 or more contentions), Express (1-2 contentions), or Priority Processing based on what the SM claims as shown below.  EMS is Exam Management System which is included in VBMS, the electronic claims folder VA system.
 
Priority Processing lane includes:
·   a participant in the Fully Developed Claim Program
·   homeless
·   terminally ill
·   former POW (FPOW)
·   experiencing extreme financial hardship
·   more than 85 years old 
·   VSI/SI very seriously injured or seriously injured
·   ALS (amyotrophic lateral sclerosis)
·   Medal of Honor, or
·   Purple Heart 
 
For all BDD-excluded claims, claims processors must add BDD-Excluded special issue indicator under one contention requiring an examination.  This is important to ensure the examination request is routed correctly in EMS.
 
 
 
Please let me know if you have any questions.
 
Thank you,
 
Barry Cooper
Program Analyst – BDD 
Pre-Discharge & Interagency Collaborations (212) 
Compensation Service
U.S. Department of Veterans Affairs
Phone: 202-461-1415 
Email: barrett.cooper@va.gov
 
From: Shute, Paul J., VBAVACO <Paul.Shute@va.gov> 
Sent: Tuesday, November 26, 2019 9:20 AM
To: Cooper, Barrett E., VBAVACO <Barrett.Cooper@va.gov>
Cc: Leal, Karla, VBAVACO <Karla.Leal@va.gov>
Subject: BDD on VA.gov
 
Good morning Barry,
 
Thanks for helping to support bringing the BDD program onto VA.gov. In preparation for those discussions, we’d like to confirm what information on the 526EZ is required for BDD claims. This will help ensure that we can get the Servicemember through the application interview process as quickly and painlessly as possible.
 
We also want to capture questions on the form that are helpful in the processing of BDD claims. Although many of these items are not “required,” they may lead to operational efficiencies when VA is processing the claims (military retired pay info, Guard/Reserve service, etc.)
 
I’ve attached a copy of the 526EZ and highlighted things that I think are required for BDD claim in green. I’ve also highlighted things that may be helpful in yellow. Could you take a look and confirm whether or not I’ve marked up the 526EZ correctly?
 
Also, we want to start exploring what EP, claim labels, and other attributes (special issues, flashes, etc.) that we want to pass to VBMS when the claim is submitted. I know eBenefits doesn’t pass the EPs that the BDD wants in every situation, so now’s our time to correct that! 😊
 
I look forward to working with you on this project and please let me know if you have any questions or would like to discuss further.
 
Thank you,
 
Paul Shute
Chief of Operational Innovation
Veterans Benefits Administration
Compensation Service
Work: (202)461-9682
Cell: (202)894-0995
 
 
