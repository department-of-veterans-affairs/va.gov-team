Plan to amend healthcare application in light of (a) feedback from HEC and ESR about anonymous applications being submitted into MVI, (b) DSVA discovery of [repeat-HCA issue](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/hca%202.0/research/oct-2018), and (c) feedback from HEC regarding MVI failures when bad facility names are submitted via ESR. Research and proposals by Gabriel Zucker, Samara Strauss, David Bao, Matt Self.

Changes due to (a) are originally documented [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/hca-2.0/product/anonymous-hcas.md) and were approved by Josh Faulkner and Serita Rogers in September 2018. General architecture was reviewed with Rainbows.

Changes due to (b) were approved by Garth Miller and Denise Kitts on 10/23/18. These changes should be dovetailed with overhauls of the HEC communication process, but HCA changes will be made regardless.

The issue in (c) was surfaced in November 2018 after the rest of these issues were flagged, and is being added to this document 12/10/18.

[Add'l minor issue raised in December 2018](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/hca%201.0/engineering/separationdatelogic.md), regarding separation dates in the future.


# Background

### Status Quo
+ HCAs are completed on Vets.gov from a logged in or a non-logged-state. Only about 15% of applications are made from a logged-in state.
+ Applications are sent wholesale to Enrollment System (ESR). If logged in, they come with an ICN matched; if not, ESR works with identifiers.
+ ESR searches HCA identities in MVI, without DEERS fallback. Individuals not found are added to MVI without review, with the submitted traits. HEC then reviews these applications to determine healthcare eligibility. Erroneous identifiers are not removed from MVI.
+ Other individuals _are_ found in MVI. If they are _not_ also found in ESR, HEC processes the application as a new application from a known Veteran.
+ If individuals are found in MVI _and_ ESR, the application is processed as a change application. VA is under the impression these applications are primarily intended to change address, income, and preferred facility. However, DSVA research reveals that they are all almost exclusively because the Veteran does not know his/her existing enrollment status, and/or thinks that applying again might change it. The Veteran is never told about his/her existing enrollment/eligibility during the HCA process, or on vets.gov.
  
### Problems
+ Erroneous identities are entered into MVI, when the individuals (a) are not Veterans at all, or (b) _are_ Veterans, but were entered duplicatively.
+ Bad actors could make changes to Veterans' existing VHA patient relationships, since change applications can be made from a non-logged-in state.
+ Veterans do not know their enrollment/eligibility status and waste their time making repeat applications when there is no need to do so.
+ About 40 applications fail every day because the 'proxy add' operation in MVI fails. These are, per Josh Faulkner, exclusively because of outdated facility names in the HCA. MVI does not recognize the facility names and so cannot add the appropriate Vista ID.

# Proposed Solution
## Big Picture
+ Do more to encourage log-ins.
+ Check MVI and ESR status from Vets.gov/VA.gov rather than leaving this to ESR, and serve up the appropriate application accordingly.
+ Do not allow non-logged-in applications for individuals already in ESR.
+ For logged-in Veterans with existing ESR records, show and explain their current status when they navigate to the HCA. Strongly discourage making a repeat application, though leave the possibility open in case there are use cases we have not discovered.
+ Display enrollment/eligibility status on VA.gov dashboard/profile page.
+ Fix facility list in HCA and set up process to keep it up to date.

## Backend dependencies
+ VA.gov needs to be integrated with the ESR database via the E&E web service to look up Veterans and retrieve their enrollment/eligibility information.
+ MVI search must be called from the HCA page; existing MVI integration can be used for this purpose.
+ ESR will be creating a new routing for truly anonymous HCAs (no MVI match found), including accepting an uploaded DD-214. This will require some amendments to the existing VA.gov-ESR connection.

## Dashboard/profile
+ Add functionality on VA.gov dashboard/profile to display a Veteran's current health care status: Enrolled, Not Enrolled, Pending.
+ Both Not Enrolled and Pending statuses should provide more detail about the reasons for those statuses, and possible next steps. E.g., not enrolled due to insufficient time in service would explain the minimum period of service rules, and explain that service connected disability _would_ qualify them for VA healthcare.

## Non-logged-in HCA
+ Everything here applies only to the non-logged-in HCA; see below for logged-in

### Landing Page 
+ Current page lists some benefits of logging in but does not privilege the log-in option from a design perspective.
+ Page should have clear buttons for Log In / Create Account, with weaker option for continue without log in, as in similar private sector applications.
+ Page should clarify that Veterans who have previously applied for VA healthcare _must_ log in to continue.
+ Page should provide more details about log-in benefits, including faster application processing time.

### ID Page
+ Veterans who choose not to log in are routed next to a page that requests _only_ identifiers. This way, Veterans do not fill out the rest of the healthcare application before we determine if they are allowed to continue or not.

### Back-End Checks
+ After submitting identifiers, the HCA performs two backend checks:
  1. _To MVI_, using the vets.gov MVI integration with fallback search to DEERS. Veterans not found are not known to VA/DoD, and are served the application with DD-214 upload potential (see below). Note that this should be the **unattended** search. This means that, if there is more than one plausible match, MVI returns an error. In this case, we should treat these the same as not found, route them to a manual queue, and not attach an ICN.
  2. _To ESR_, via a new connection to the E&E service, which we will have to set up for this use. E&E will reveal whether the Veteran has already applied for VA healthcare / is an existing patient.
  
(There could _also_ be a check on V-type, from MVI (post-V-type-implementation) or eMIS, so as to show DD-214 upload for edge cases where Veteran is in MVI but does not have military record stored; see below.)
  
The checks sort Veterans into three categories:
**Not found in MVI:** provided HCA with DD-214 upload functionality. Routed to new manual ESR queue.
**Found in MVI but not ESR:** provided HCA as is, with no DD-214 upload. Goes to existing ESR queue.
**Found in MVI _and_ ESR:** Blocked from applying (see below).

### Require Log-In
+ Veterans found in ESR cannot continue to HCA without logging in. If they are found in ESR, we show a simple screen saying "We already have a record matching your information. Please log in to continue." This should route them to an account creation page.
+ Because Veteran is not logged in, we do not want to reveal any more detailed information on this page.
+ Even this page does reveal some information to an anonymous user, but the risk is very low. Charles accepts moving forward with this risk, per the following email (10/10/18):

> Which fields would be required to do the check of current enrollment status? Is it full name / DOB / SSN? And are these fields also required to submit the HCA at all?
>
> I think the answer is probably “yes these are required” – and therefore I feel like the risk of divulging whether VA currently has a record of you in the system is low. In this scenario were a bad actor was trying to “exploit” the system, they would only be able to do so if they already had a real SSN / DOB / Full name. If an attacker already had that info, then the mere fact that they are enrolled in VA healthcare or not seems not to add additional risk to the situation. On the flip side, at present an attacker with this information can actually make a change to the Veteran’s data directly and that is much worse than telling the attacker VA already has a record.
> 
> So therefore I agree that we should proceed with number 3 – but design the feature with the awareness that we should not “leak” status information in the message. So instead of saying “looks like you’re already enrolled in VA healthcare” something more like “Looks like we already have a record on file for you. Please create an account or Log In to make an update” --- potentially with some helpful links to the actual tools they SHOULD use to do things like update a mailing address.

### DD-214 Upload
+ Non-logged-in Veterans not found in MVI, and thus making fully anonymous applications, should have the capability to upload a DD-214 to their healthcare application, akin to how it is often done in mail applications. This should be recommended but not required.
+ If we want to get fancy, we would also require this for Veterans found in MVI and not ESR but with a V4 Veteran type, meaning that VADIR does not have a definitive record of their military history.

## HCA: logged in
+ Upon navigating to logged-inn HCA, VA.gov does a backend check in ESR.
+ If the Veteran has an ESR record, the landing page displays the Veteran's current enrollment/eligibility status, with further details and possible next steps, as described in the profile/dashboard section. Landing page discourages submitting a repeat application unless Veteran's information has drastically changed (or other use cases we have not envisioned).
+ If no ESR record, straight to HCA.
+ HCA is same as current logged-in form; pre-filled as much as possible.

## Review Page
+ It was proposed to add a review page to the end of the healthcare application, where the user can view all of the provided information and edit any portion of it. This may be done separately from the other changes envisioned in this document.

## Facility List
Here is Josh Faulkner outlining what needs to be done here:
> From: Faulkner, Joshua I. 
> Sent: Tuesday, November 20, 2018 8:21 PM
> Subject: RE: Updated facility list
>  
> IAM doesn’t maintain the facility listing; it’s a monthly process between VAST, SDS and VistA maint; MVI, ES and others use the same common institution listings. 
>  
> To get HCA in sync, I would suggest starting with the list of parent facilities that are configured in MVI for the proxy add. 
> You can get the list of all the child stations from that -- the proxy add is always issued for the parent. 
> Update your facility pick list on HCA with that result. 

Danny Reed has the MVI parent facilities list, and IAM has an internal service to keep the facility list up to date; see 11/21 emails. He is the contact to get this set up.

More from emails:

> From: Faulkner, Joshua I. 
> Sent: Tuesday, November 20, 2018 8:27 PM
> Subject: FW: SDSIR18du118 Release Announcement
> 
> Reach out to Jonathan to get your team added to this distro when SDS releases come out. 
> I’ll give you some details later on for how to identify the ones that you need to care about from the readme file. 
> 
> From: Carver, Jonathan R. ( Liberty IT Solutions) 
> Sent: Wednesday, November 07, 2018 9:00 AM
> Subject: SDSIR18du118 Release Announcement
> 
> Standard Data Services (SDS) announces data update release - SDSIR18du118 which has been applied to SDS Master and replicated to SDS Local instances, based on AITC schedule. Details of the data updates are attached. This update has been applied to AITC SDS Integration environment (SDST01 and SDST02 database on vahdrtpapp08), AITC SQA Environment (SDST01 & SDST02 database on vahdrtpapp08) and AITC Production Environment (HDRP06 database on hdrdbs2). 
> SDSIR18du118.zip file is also available at the STS SharePoint (http://vaww.oed.portal.va.gov/projects/sts/SDS/Forms/AllItems.aspx?RootFolder=%2Fprojects%2Fsts%2FSDS%2FRelease%2FSDS%5FIR%5F18%2E0&FolderCTID=0x0120004B380C34325FEF408B56106BA7E38D2A&View={35974E9E-5ADB-42AD-A7C7-A5F8744AAFE1}).
> 
> Please feel free to direct any questions directly to Merrill Spendlove.  In courtesy to others on this distribution, please do not use the "Reply All” feature in Outlook.
> 
> Thanks,
> Jon
> Jonathan Carver, RN, MBA


## Separation Date Validation

Minor issue documented here: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/hca%201.0/engineering/separationdatelogic.md.

