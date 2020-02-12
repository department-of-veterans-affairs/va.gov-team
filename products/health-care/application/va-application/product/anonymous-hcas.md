***** EDIT 10/23/18 *****

Overtaken by [new plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/hca-2.0/product/181023hcachanges.md)

***** EDIT 10/10/18 *****

The below plan envisions that we block anonymous applications for anyone who _is_ found in MVI and _does_ have an existing online account or ESR record. The idea here was to not _just_ block ESR-record-people, but also a fairly arbitrary group of other users, so that the HCA wasn't revealing suggestive information about who is a patient. However, at present, we cannot check if users have DS Logon or vets.gov ID.me accounts, only MHV, meaning this doesn't really solve the problem it sets out to.

Per Charles's email 10/10, we will move forward with an alternate plan that does not check whether an individual has an existing account. Rather for those found in MVI, we simply check if there _is_ an ESR record; if so, we require log-in, if not, we do not. This does allow malicious actors to determine if an individual has applied for VA healthcare, but this is not a major vulnerability; and it would require the malicious actor to already have an individual's name/DOB/SSN, which would lead to much greater vulnerabilities than the marginal issue introduced here.

Charles:

> Which fields would be required to do the check of current enrollment status? Is it full name / DOB / SSN? And are these fields also required to submit the HCA at all?
>
> I think the answer is probably “yes these are required” – and therefore I feel like the risk of divulging whether VA currently has a record of you in the system is low. In this scenario were a bad actor was trying to “exploit” the system, they would only be able to do so if they already had a real SSN / DOB / Full name. If an attacker already had that info, then the mere fact that they are enrolled in VA healthcare or not seems not to add additional risk to the situation. On the flip side, at present an attacker with this information can actually make a change to the Veteran’s data directly and that is much worse than telling the attacker VA already has a record.
> 
> So therefore I agree that we should proceed with number 3 – but design the feature with the awareness that we should not “leak” status information in the message. So instead of saying “looks like you’re already enrolled in VA healthcare” something more like “Looks like we already have a record on file for you. Please create an account or Log In to make an update” --- potentially with some helpful links to the actual tools they SHOULD use to do things like update a mailing address.

I will update the body of this document shortly to reflect this change. -GZ

***************



Provisional plan to amend healthcare application in light of feedback from HEC and ESR about anonymous applications being submitted into MVI.

## Background: Status Quo
+ HCAs are completed on Vets.gov from a logged in or a non-logged-state. Only about 15% of applications are made from a logged-in state.
+ Applications are sent wholesale to Enrollment System (ESR). If logged in, they come with an ICN matched; if not, ESR works with identifiers.
+ ESR searches HCA identities in MVI, without DEERS fallback. Individuals not found are added to MVI without review, with the submitted traits. HEC then reviews these applications to determine healthcare eligibility. Erroneous identifiers are not removed from MVI.
+ Other individuals _are_ found in MVI. If they are _not_ also found in ESR, HEC processes the application as a new application from a known Veteran.
+ If individuals are found in MVI _and_ ESR, the application is processed as a change application. This represents over 50% of applications, and Josh Faulkner reports these are mainly changes to address, income, or preferred VAMC.
  + We have not directly validated whether these applications are what Josh says they are.
  
### Problems
+ Erroneous identities are entered into MVI, when the individuals (a) are not Veterans at all, or (b) _are_ Veterans, but were entered duplicatively.
+ Bad actors could make changes to Veterans' existing VHA patient relationships, since change applications can be made from a non-logged-in state.

## Proposed Solution
### Big Picture
+ Do more to encourage log-ins
+ Check MVI and ESR status from Vets.gov/VA.gov rather than leaving this to ESR, and serve up the appropriate application accordingly.
+ Do not allow non-logged-in applications for existing patients or existing online account holders.
+ Do more user research before creating targeted functionality for users making changes to existing applications; we are not convinced we know enough about these Veterans or what they are trying to do.

![Proposed Flow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/hca-2.0/product/anonhcas.jpg)

### Landing Page
+ Current page lists some benefits of logging in but does not privilege the log-in option from a design perspective.
+ Page should have clear buttons for Log In / Create Account, with weaker option for continue without log in, as in similar private sector applications.
+ Page should clarify that Veterans (a) with existing VHA relationships or (b) with existing VA online accounts must log in to continue.
+ Page should provide more details about log-in benefits, including faster application processing time.

### ID Page
+ Veterans who choose not to log in are routed next to a page that requests _only_ identifiers. This way, Veterans do not fill out the rest of the healthcare application before we determine if they are allowed to continue or not.

### Back-End Checks
+ After submitting identifiers, the HCA performs three backend checks:
  1. _To MVI_, using the vets.gov MVI integration with fallback search to DEERS. Veterans not found are not known to VA/DoD, and are served the application with DD-214 upload potential (see below). Note that this should be the **unattended** search. This means that, if there is more than one plausible match, MVI returns an error. In this case, we should treat these the same as not found, route them to a manual queue, and not attach an ICN.
  2. _To existing account stores_ (Vets.gov/VA.gov accounts; MHV accounts). Veterans with existing accounts will have to log on.
  3. _To ESR_, via a new connection to the E&E service, which we will have to set up for this use. E&E will reveal whether the Veteran has already applied for VA healthcare / is an existing patient. If so, he/she will have to log on to continue. If not, they are served the application without DD-214 upload.

### Require Log-In For Certain Veterans
+ There is a privacy concern about requiring log-in only for those Veterans seeking to change their existing relationsihps with VHA, because a log-in required error would effectively reveal to potentially unauthorized visitors that an individual Veteran receives VA healthcare.
+ To mitigate this issue, we will require log-in for a wider universe of Veterans: those who have ever placed any kind of VHA application, or who have an existing online account with VA. These Veterans will face a lower bar to logging in than others, and can be safely required to do so.
+ Under this scenario, a log-in requirement reveals only that the Veteran is in some way known to VA, which _is_ safe to release to outside users.

### DD-214 Upload
+ Non-logged-inn Veterans not found in MVI, and thus making fully anonymous applications, should have the capability to upload a DD-214 to their healthcare application, akin to how it is often done in mail applications.

### Logged In Users: Returning Vs. New
+ Logged in users may be making new or returning applications.
+ In the short run, both sets of users will be served the same pre-filled HCA, to make any needed changes and (re)submit.
+ In the long run, we may want to develop targeted functionality for returning users simply making amendments to existing applications. However, we want to do user research on this population and their needs before doing so. It seems fishy that 60% of people using the online healthcare application are doing so explicitly so as to, e.g., change their address. Without talking directly to these users we do not necessarily trust the assessment we have so far.

### Review Page
+ It was proposed to add a review page to the end of the healthcare application, where the user can view all of the provided information and edit any portion of it. This may be done separately from the other changes envisioned in this document.

### Send to ESR
+ Logged-in applications and applications matched to MVI are sent to ESR the way logged-in applications currently are, with the ICN attached.
+ Anonymous applications not successfully mapped to MVI are sent to a new ESR queue that manually reviews them before entering into MVI; as with mail applications.
