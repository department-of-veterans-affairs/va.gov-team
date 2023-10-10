# Profile: Enhanced Military Information MVP - Stakeholder Interview Summary

October 6, 2023

Interview conducted by Liz Lantz, Authenicated Experience Profile team

## Table of contents
- [Participants](#participants)
- [Interview summary](#interview-summary)
- [Interview details](#interview-details)  
  - [ILER](#iler)
  - [Military exposure data](#military-exposure-data)
  - [Other considerations](#other-considerations)
- [Timelines](#timelines)
- [Next steps](#next-steps)
## Participants
### Melissa Rebstock
- Branch chief in the channel strategies and engagement (CSE) division within the multi-channel technology directive in the Veterans Experience Office
- Within the CSE, her team handles the digital experience and is involved with anything that goes into VA.gov that touches customers 
- Works a lot with Samara Strauss (Authenticated Experience Product Owner)
- For the military information initiative, she got involved because it started with ILER (Individual Longitudinal Exposure Record).  Knowing that they want to expand beyond ILER. VEO wants to take a broader approach because this is really military exposure information.

### Angela Allen
- Business owner for military information for data coming from DoDC (Department of Defense) into any of our systems at VA
- DoD owns the data but some of the systems we own within VA make them authoritative for military information within VA.
- DoD receives the information from all the different branches. They typically consolidate or replicate it for VA, and send different file for business needs within VA.

### Emily Gupta
- Recently joined for the military info side. 
- Works closely with Angela Allen. Intended purpose is for her to be Angela’s back-up if she goes out of office, she can be there to step in.
- I’m part of the customer data management branch under MCT

***
## Interview summary
- This work started due to legislature being passed requiring VA to give Veterans access to their Individual Longitudinal Exposure Record (ILER).
  - ILER is a complication of approximately 30 different authoritative data sources.  If an update is made to an ILER, it doesn’t necessarily get updated in the authoritative data source or downstream systems.
- 2 phases of discovery work were done, and a 3rd was planned but not executed because of the focus of the work shifted from the ILER to exposure data.
- VEO’s focus shifted because it was determined that it is more helpful to the claims process, and therefore to Veterans, to surface their exposure data.
- We’re navigating a few different stakeholder priorities:
  - Defense Health Agency (DHA) wants to get the link to the ILER PDF to Veterans ASAP.
  - VBA isn’t concerned with ILER and instead wants to access to 8 specific exposure data points to help the claims process.
  - Regardless of VBA calling out specific exposure data points, VEO wants data elements surfaced to be supported and driven by Veteran feedback to shape the user experience. 
- There is a PDF generated that VBA has access to that we can link to; unknown whether or not it’s accessible and ready to put on VA.gov
  - There are conversations about creating an API with VA Profile coming up.
- VEO hypothesizes exposure data will be most useful to Veterans if it’s surfaced in the context of eligibility or applying for benefits
- No research has been done so far to evaluate how Veterans understand or use their exposure data, and VEO feels it is important that we conduct this research. 
- VEO feels that if the data is not relevant to a Veteran, we shouldn’t show it.
## Interview details
### ILER
#### Goals of discovery work
VEO worked with a Booz Allen Hamilton (BAH) team to accomplish the following goals, sparked by a legislative mandate that VA has to show Veterans their ILER record.
1. Gain an internal understanding from stakeholders what they thought ILER was, why they thought it was important and who is responsible for correcting records.
2. Understanding the stakeholder perspective around what military data is important to expose
3. Determine whether or not Veterans understand what ILER is, how it relates to a claim, and what they can do with it.

#### Discovery work completed
The team did one round of discovery with stakeholders (finding summary) and one round of discovery with Veterans (finding summary).  After the Veteran-facing discovery work, the BAH team created a prototype (link) with ILER data for a second round of interview with Veterans.  The prototype was never meant to be built out. Instead, it was created as a conversation facilitation tool because the actual ILER is not at all user-friendly.  The prototype attempted to present ILER data in a user-friendly to try to get a reaction from Veterans about what they thought. 
- One thing Melissa really liked about this prototype was the potential exposure aspect, because it would nudge Veterans to submit a claim. 

During these phases of work, the team realized ILER is a repository of about 30 different streams of data, so it isn’t an authoritative data source. If a Veteran needs to correct data in their ILER, they can’t update it. Instead, they’d have to track down the data stream to be sure it’d be updated across systems.

Once the team realized Veterans benefit more from their exposure data than their ILER, they stopped pursuing further work specifically related to ILER to focus on the exposure data.

#### Generating an ILER PDF and providing access to Veterans
There is an ILER application owned by DoD’s Defense Health Agency (DHA), that a person can log into and generate a PDF.   
- Training is required to maneuver the ILER application, and isn’t something suitable to give Veterans.
- The PDF used to be 300+ pages, but has now been improved upon and extremely reduced.  
- We don’t know whether or not the PDF is 508 compliant or accessible.
- DHA has been adamant that we don’t replicate ILER for Veterans because DHA wants to manage the Veteran access. 

VBA and VBMS is starting conversations around integrating with ILER. Instead of pulling the PDF, they’re going to pull the PDF into VBMS and they’re talking about using an API through VA Profile to pull the needed data and generate the PDF.

### Pivoting from ILER to military exposure data
The team consulted with Veterans Benefit Administration (VBA) to determine how does ILER actually help a Veteran with a claim, and VBA identified 8 data points within ILER that is relevant to a claim.  They don’t need ILER, but we still need to give Veterans access to a printable ILER PDF. Ultimately, VEO feels a better Veteran experience is to surface exposure data to aid the claims process.

### Military exposure data
These 8 data points are more useful to VBA to surface than the whole ILER, because these are what VBA looks at when processing PACT claims, or TERA (Toxic exposure related activity). 
- Dates of, and branches of, service
  - These will be on a discharge document
- Units with which the Veteran or Service member served
  - Specifically, we know you were in a unit that had toxic exposure
- Deployment locations and start and end dates of deployments
  - Specifically, we know you were in a location that had toxic exposure
- Military occupational specialties 
- Training courses
- Military awards and decorations
- Non-military deployment data
  - Melissa has heard different things around this. Sometimes it means you were a contractor that worked overseas in an area that had toxic exposure, or it could be related to Camp LeJune if you had family members there
- A registry that verifies participation in a TERA
  - We know the airborne open hazards and burn pit registry is one of them, and VA submits that to ILER. 
  - There are a few other registries that VA submits to ILER

#### How will surfacing these data points improve the Veteran experience?

VEO feels this data would be most useful on VA.gov from a personalization standpoint, by using the data we have about them and suggesting they file a claim when and where it’s helpful.  They also feel that Veteran feedback should drive the information that’s shown.

> With deployment information, if you have a deployment area in a Veteran record that you know is part of the PACT act activity, somehow, hint to them somewhere that you were deployed here. Say, “consider filing a claim”. That’s how I see that being related and helpful to a Veteran. If a Veteran doesn’t feel like it’s relevant or helpful, then I would question whether or not we should show it. I still think Veteran feedback needs to drive the information that’s shown. - Melissa Restock

Surfacing this data would also help the front line VBA claims adjudicators because of the research they’re currently having to do to verify a Veterans ILER. If we’re pulling that information in one place it helps a lot to improve the claims process for Veterans and the VBA.

There are also potential opportunities to improve the health care experience if VA medical professionals have access to the data in an ILER.
- Could benefit epidemiological research
- Providers can better treat patients
- Veterans can better advocate for themselves with access to this data, and their families can be better informed. Toxic exposure can impact children as well.

#### What do we already know about how Veterans are using this exposure data?
VEO hasn’t talked to Veterans about exposure data yet, so we don’t know much. They hypothesize that if we were to put this information out there for Veterans to see, it’s not going to be meaningful unless it is somehow tied to potential eligibility, and lets them know they need to apply for something.   VEO feels it’s critical to conduct research with Veterans to really understand how we can make this useful to them.

When a Veteran submits a claim, all they know is that they were exposed.  The onus is not on the Veteran to prove exposure; rather it’s on VBA.

#### What do we know about how VBA uses this exposure data?
Currently, they pull the ILER record after a claim is submitted to validate the exposure data. The do a TERA memo to see if it’s TERA-related and then they put that in the record.

#### Is the VA.gov profile the right place to surface exposure data?
In BAH’s research, Veterans shared that they expected information related to exposures to be available with their other VA records, especially health records. 

VEO didn’t decide this data should go in the Veteran profile; this is an OCTO decision that we can revisit amongst ourselves if needed. The profile is where military information lives right now, so that’s where updates would live.  We can talk about IA or other ways to make it findable.

VEO is open to displaying the data wherever it makes sense, even if it’s not the VA.gov profile.

### Other considerations
#### There’s been some contention between VEO and DHA on how this work is approached. 
A lot of care has been taken, but the DHA perception is that easiest solution is to simply give Veterans their ILER, and VEO is arguing for something more usable and less confusing.
> We don’t even understand it [ILER]. DHA has even said ‘We don’t know how we’re going to explain this to them, other than giving them a user guide.’ - Melissa Restock

#### Getting data corrected is a long process.
We need to be mindful about creating confusion if corrections can’t be completed in a timeline fashion. 
> You better have a way to update it if you’re going to put it in front of them. As soon as they start seeing it, we’re going to get feedback that it’s incorrect and I think it’s going to be more of an issue if we don’t have a means to efficiently update it.  - Angela Allen

#### Other folks to possibly talk to
- Mike Bowers, who is with Office of Enterprise Integration, could be someone to talk to further who is helping lead the ILER IPT. 
- Bill Spears brought in someone from Office of General Counsel and the information that person was helping was very helpful in clarifying about the language around the legislation.

### Timelines
Getting Veterans ILER access is the priority from DHA, but there isn’t a hard deadline. We need to let Melissa know what is feasible and she can help navigate that.

## Next steps
1. Melissa will look into whether or not the ILER PDF is 508 compliant/accessible.
2. Melissa is working on POCs for conversations about creating an ILER API with VA Profile, and will loop our team in.
3. The profile team will regroup to align on their next steps.
4. We may want to include DHA as observers in the research we do with Veterans.
