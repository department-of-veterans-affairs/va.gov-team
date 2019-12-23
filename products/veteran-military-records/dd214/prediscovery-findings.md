# DD214 PreDiscovery Findings

- [DD214 Info](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/veteran-military-records/dd214/dd214-info.md)
- [Public Access to the DD214](#public)
- [Veteran ID Card](#vic)
- [DD214 Notes from Slack, includes Action Items](https://dsva.slack.com/files/U6ZQCPD2B/F8BCLBDK4/DD214_Notes)

## <a name="meeting0109"></a>Meeting Notes 01/09/2018: Marvo, Josh Q.
Goal: Quick pull-up to learn more about BIRLS, and the other various databases and services and their VA Business Owners

Discussion:
- VIC has been reaching out to VetVerify which consists of NARA and Service Branches
    - VetVerify is owned by Army and Airforce Exchange Service in DoD
- DD214 copies 2 and 3 go to Federal and State VAs
- BIRLS does not have complete information from DD214; also comes from VADIR and manual entry
    - used with BGS service
- DEERS -> VADIR: eDD214 using the EDIPI, which is the correlation ID stored in MVI
    - they're starting to use EDIPIs on CACs (the DoD version on PIVs)
    - other correlation IDs are identified with VistA, the Corporate Database (updated via BIRLS or manually), etc.
- eMIS got up and running in 2017
- Service Branches also information to VADIR (older Veterans i.e. discharged before 1980, National Guard, Reserves) not necessarily validated or complete
- Veteran Information Solution - a WebApp
- Vets360 wanted VADIR and eMIS to be comprehensive source
    - need NARA
    - need Service Branches
- Suggests that what's needed is a way to correct VADIR for a particular record
- Jim has a list of current gaps
- Question: how often does backfill happen from BIRLS to VADIR
- **Big Question: Who is the authoritative source for Military Service History?**
    - Suggests Data Governance Council Chairs - Susan Sullivan *and* OI&T
- Is it technically feasible to have downstream businesses write to VADIR?
    - This would be needed because businesses update their databases but this information doesn't get back to VADIR
    
#### Vets360 possible contacts   
Business | Role/notes | OI&T | Role/notes
--- | --- | --- | ---
Denise Kitts |SES | | 
Michelle Rowe | Product Owner | Sherry-Lynn Smith | can be stubborn
Rebecca (Becky) Pass | |Courtney Swanson | OI&T Project Manager
Laurie Baker | knows services | Josh Lindsay | Contractor/knowledgeable
Mark Shaughnessy | hit or miss | | 
    
    


## <a name="meeting_1228"></a>Meeting Notes 12/28/2017: Marvo, Susan Sullivan - Deputy Assistant Secretary for Data Governance and Analytics
Goal: Learn about VA Data Governance efforts, particularly related to data from DoD

Discussion:
- Susan provided an overview of her office's work, and in particular the Data Governance Council. Related materials [here](https://www.vapulse.net/groups/data-management-council).
    - The Office of Enterprise Integration used to be the Office of Policy and Planning
    - A new top-level person is Melissa Glin
    - Susan's office does work across VA, specifically data **about** veterans; they focus on Veteran Analytics whether they use VA or not
    - On the other hand, each administration has their own data efforts focused on how Veterans use their services adn aimed at budget prohjections
    - Susan's shop also focuses on VA Open Data eforts
    - Co-chairs the VA Data Governance Council, which she restarted when she got into her current role ~ 2 years ago; there's no longer an OI&T lead; they're establishin Data Stewards; they're focused on Government Information Management and the primary people who do this at VA sit in OI&T
    - Thinks the VA Data Management Lifecycle should apply to VIP
- Had a number of thoughts about VADIR, including agreeing whole-heartedly that it's a good idea to work on fixing it despite the fact that it will be a heavy lift
    - Thinks VADIR needs a strong government lead and perhaps we can help Mark Shaughnessy (who may not be as technically proficient as needed) and Denise Kitts in this regard (she's a new SES and Jim Jones (the contractor who is the end all be all of VADIR) is seen as a bully)
    - [ ] We need to figure out what our priorities are regarding fixing VADIR:
        - Do we have evidence that it's not correct
        - What are the key fields and what should be in them
        - What is our governance model and does it include stakeholders
        - Susan recommends using DGQ Terminology e.g. 7 Data Quality dimensions: accuracy. completeness, consistency, timeliness, traceability, uniqueness, and validity
    - [ ] Figure out who the COTR is in OI&T who manages Jim (note that Jim is likely to blame DoD for the problems)
    
Outcomes:
- Susan offered up two of her team members to answer any questions that come up as we work on fixing VADIR, so... 
    - [ ] Marvo will send an email requesting an introduction when we're ready.

## <a name="meeting2_1220"></a>Meeting Notes 12/20/2017: Marvo, Robbie, Gabriel
Goal: Learn what Gabriel knows about the DD214 and VA efforts to fet Veterans access to it.

Discussion: 
- DEERS updated irregularly; VADIR
- DD214 information does change
- **Reggie Yaeger is in charge of discharge stuff**
- Person who made VADIR: Jim Jones (like-minded to DS)
- Intuition for getting info from DoD: make VADIR right and Robbie agrees
    - **Keep in mind next stage of discovery needs to involve downstream app developers via VADIR owners**
- Questions to keep in mind: 
    - Does fixing VADIR make sense?
    - What has been done to take this data from DEERS to VADIR?
    - We have to validate: is this the whole thing or only the tip of the iceberg?

Outcomes: 
- Enough information has now been gathered to complete the [DD214 Pre-Discovery Deck](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/veteran-military-records/dd214/2018-01-11-final-dd214-prediscovery-readout-deck-.pptx)
- [X] Gabriel will introduce Marvo to Jim Jones after... 
    - [X] Marvo reminds him with a summary email in early January 2018.

## <a name="meeting1_1220"></a>Meeting Notes 12/20/2017: Marvo, Samara, Karl Pfanzelter VBA BAS
Goal: Learn more about the VA's efforts to get Veterans access to a digital version of the DD214.

Discussion: 
- Karl walked us through the contents of Member Copy 4 (long version) of the DD214 and how it differs from Member Copy 1 (short version). The short copy does **not** contain separation and re-entry codes or narrative reason for discharge - all items that savvy employers like to get a look at before hiring a Veteran.
- It appears to be relatively simple to request a copy of your DD214 (although it might take a few days because it's via DPRIS) **IF** you have an eBenefits account. Otherwise there doesn't appear to be a VA-facilitated way to easily procure a copy.
- There is a VA/DoD Working Group on a Paperless DD214. The VA rep is a VHA person currently detailed to the VA - Mark Shaughnessy. He's also working on the TAP-VADIR project. If more information is found out about this, it will be linked here.

Outcome: Marvo asked the DSVA team about Mark Shaughnessy and he apparently works with us on other projects. Kerry provided an introduction via email including a request for a meeting by early January 2018.

## <a name="public"></a>Public Access to the DD214
[*Source*](http://www.dd214.us/entitlement.html)

The public has access to the following pieces of military service information without the Veteran's authorization:
- Name
- Service Number
- Dates of Service
- Branch of Service
- Rank and Date of Rank
- Salary *
- Assignments and Geographical Locations
- Source of Commission *
- Military Education
- Promotion Sequence Number *
- Awards and decorations (Eligibility only, not actual medals)
- Duty Status
- Photograph
- Transcript of Court-Martial Trial
- Place of entrance and separation

Items marked with * are rarely available from the National Personnel Records Center (National Archives, NPRC).

## <a name="vic"></a>Veteran ID Card
[*Source*](http://www.dd214.us/Veterans_ID.html)
- Veterans have literally tried to miniaturize their DD214 so they can carry it around in their wallet
- Local county governments have issued ID cards. This required the Veteran to:
    - appear in person
    - present their DD214
    - pay
- A company called [Touchstone Research](http://www.touchstoneresearchgroup.com/catalog/dd214-veterans-card-p-79.html?affiliate_banner_id=10&ref=1000) appears to have solved the problem of the fact that the State produced Veteran ID cards are easily forged
    - they require Veterans to fill out a form so that they can get a copy of the DD214 directly from the government
- *Thoughts*:
    - *since we ARE the government, we should also be able to get DD214 information*
    - *note that the card they provide does not contain PII like reason for discharge etc.*
    - ~this is their business, so any work we do in this space would be a threat to them, which is fine, but if we could get an idea of any supporters they have, that might be for the best~
    
