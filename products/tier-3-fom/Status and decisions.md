# Status and decisions - Tier 3 FOM office templates MVP 1.0

## 06/24/2021

Meeting - weekly FOM call w/Janet Schiller

__Agenda:__ 

Change management and comms - Janet's history on FOM change management, comms, policy memo. 

Started 2010, with a Deputy Ass't Sec task force comprising representatives of the parent orgs (VBA, VHA, NCA, plus each 14 VACO offices). 
Initially created with a BAH contract. Contract expired in 2013, and Janet took over management of it as a team of one, fixing inconsistencies, bad formatting, etc. Over the years, using gentle persuasion to get more offices to comply. 

__Change management/comms for recent transition to digitizing the FOM in Salesforce:__

Janet managed that solo by convening all 17 parent FOM coordinators on a weekly basis to let them know of changes happening and to work with them on new Salesorce entry process; and other issues as arising, like VIEWS hierarchy updates. (Workflow tracking still in VIEWS, also Sf.)

__Purpose of FOM information - to enable Congress and VA to know what we do, what orgs we have, where we have it, what its mandates are, who is responsible/accountable for what. FOM is typically used for or by:__

- Essential transition document (when new Secretary onboards)
- Onboarding document for senior leaders, SESs
- Used by OALC (Office of Acquisition, Logistics, and Construction) for management purposes
- by OIT for the Global Address Directory
- QA people in OMB - Office of Management and Budget
- by VA Enterprise Architecture for the business reference model - to map business functions to offices, how many ppl or departments doing similar functions, etc. - to review/assess best org structure
- by HR - as a source of data for their work, esp wrt org changes - when people/roles move from one office to another --> subsequent HR, legal, and other administrative updates that have to happen
- by OIG. 

Janet quote: "We're way too big of an agency not to know what we have and what we do." 

## 06/17/2021

Meeting - weekly FOM call w/Janet Schiller

__Agenda:__ 

What happens to the office data when the office becomes closed or merged/consolidated with another office? 

__Summary of call:__

- When an office is closed/deprecate, it gets flagged "Archived" in Salesforce, and the the In FOM data changes from yes to no: __In-FOM:No__ . Its relationships (parent connection) also get removed. 
- When an office is merged with another office, the primary account's Account ID is maintained (TBC by Janet). In Salesforce, the FOM POC will use the "Merge" feature; TBC if merged accounts are flagged by some backend meta data as being merged/consolidated - merged-xyz-primary, merged-xyz. _Janet confirmed: no merged meta data_ 
- Most common use case for merges: administrative corrections (e.g., duplicative entries)
- Less common use case for merges: due to a real org change; Salesforce steps are the same, but also requires an org change request by the office to Human Resources to address legal, HR, staffing, and other needs.
- Offices that are active in the FOM hierarchy but NOT part of the VIEWS correspondence workflow tracking are flagged "Inactive" in Salesforce. (They are still "Active" in FOM; just inactive in VIEWS.)  Ask: change flag name to "VIEWS Inactive" or "VIEWS:False" instead of "Inactive."

- FOM coordinator: coordinates FOM reviews/approvals on the business/office side
- FOM POC: person who enters the FOM data for the business/office. 
- FOM Approver: 1st line of approver - person who validates the entered FOM data. (After the FOM Approver approves, the final real world approval takes place outside of the system via wet signature from the business/office's leadership or executive management. 
- "Account hierarchy" and FOM "Hierarchy" the same: list view of the FOM hierarchy

__Action items:__

1/ Question: When 2 or more offices get merged, does the merged office get a new Account ID or does the ‘primary’ account’s Account ID used going forward as the record? {TBC by Janet}

2/ Read-Only Access to FOM and VIEWS – for myself jennifer.lee27@va.gov  and our Platform engineer Mike Chelen Michael.Chelen@va.gov 

3/ I’ll set up a recurring weekly on Thursdays at 11 am for us. We can always cancel if no agenda/questions to discuss.  {done}


## 06/10/2021 

Meeting - initial dive into Salesforce FOM data. 

__Action items:__

1.	CSV data dump/dictionary of FOM data fields from Salesforce (@Navarra, Daniel D. will provide to Jen)

2.	Check if the Service Now API for the Salesforce FOM data is something that we can also use to consume FOM data (@Navarra, Daniel D.will check in with SNOW team)

3.	Provide Janet, Dan, and Demetrius on any data points our team needs that may not be in Salesforce today (@Lee, Jennifer Y. will review the data dictionary and then provide info)

__Call summary:__

Confirmed that minimally the following are available as data in Sf:

•	FOM hierarchy (Org level, parent org, related offices)

•	Org account ID (this is essentially the office record number)

•	Official org name

•	Official org acronym

•	Mission text content (optional but exists as a field for all orgs)

•	Business function overview text content

•	Activities

•	Authorities (not freeform, but field based from a database of authorities)

__Next:__

Jen to find half hour with Janet next week – deeper look into what happens when offices are consolidated/closed/otherwise deprecated. 


__Attendees:__ 

Janet Schiller, OEI, FOM project manager/editor-in-chief

Jen Lee, OCTO digital service (product & content design)

Dan Navarro, OIT project manager, Salesforce

Demetrius Hicks, OIT project manager


## 06/08/2021

RE: All organizations index search - functionality

Mike Chelen and I looked under the hood at the Gov.uk's org search https://www.gov.uk/government/organisations . We tried conducting the search off the internet and the search still functioned, indicating that they are using a client-side approach like the json cached [resources and support search](https://www.va.gov/resources). 

For VA organizations index search, this approach should also work fine. Their search logic also appears to be searching on just one field - the org name - which also makes sense for org search. 

Since we'll also want to provide a way to filter by VA/CO + administrations, we may need to provide a little addiitional logic on top of org name field text search. 

__Decision:__

- Recommend client-side approach for the all org index search. 
- Recommend text searching on org name field. 
- Design: enable filtering by VA and central offices / VHA / VBA / NCA tags.  

## 06/07/2021

Kick-off meeting with OEI stakeholders and SMEs re proposal to collaborate to use the FOM as foundation for tier 3 office content. 

### [Kick-off deck](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/tier-3-fom/FOM-and-tier-3-proposal-OCTO-OEI-060421.pdf)

Agenda: Proposal - use the FOM data in Salesforce and the FOM mandated content as the source for modernizing baseline office content templates and have a fair system of 'migrating' offices. 

Conclusion: OEI is supportive of this effort and will work with OCTO with SME assistance vis-a-vis FOM - Janet Schiller and Dan Navarro. Janet is the content author/manager of the FOM; Dan is OIT and involved with the Salesforce side of the FOM.

Next steps: Set up first working session call with Janet. 

__Attendees:__

Jennifer Jessup, OEI Chief of Staff

John Medve, OEI SES Policy and Directives

Janet Schiller, OEI SME, content author/manager of FOM

Megan Albright Paulter, OEI - formerly involved in establishing FOM taxonomy in VIEWS; now w/ data governance team. (Attended to provide background history if needed.) 

__Invited, not present:__

Matt Bristol, OEI, Strategic Communications (reports to Jen Jessup)

Ken Wagner, OEI, Policy, reports to John Medve




