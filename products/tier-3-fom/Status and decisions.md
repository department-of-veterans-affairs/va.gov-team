# Status and decisions - Tier 3 FOM office templates MVP 1.0

## 8/6/2021 - placeholder - briefing with VBA, VHA, NCA, OPIA, and OEI comms teams


## 8/2/2021 

Internal walk through - strategy and WIP wireframes. 

Attendees: 
Ryan Thurlwell
Martha Wilkes
Beth Potts
Danielle Thierry
Meg Peters
Neil Hastings
Kevin Walsh
Dave Conlon
Chris Johnston
Steve Wirt
Jen Lee
Mikki Northuis


## 7/14/2021

Presented tier 3 strategy proposal to the Digital Modernization Council's "deep dive." 

Deck (PDF): https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/tier-3-fom/VA-Tier-3-Strategy-OCTO-071421.pdf


## 07/09/2021

Meeting with Dan Navarro, technical PM, Dan's program manager, Derek Creary; Hal Haislip, contractor; and Janet Schiller

### Purpose:

Purpose was to provide context to Dan's manager why/for what OCTO is looking to use the Salesforce FOM data. 

### Outcome: 

Derek agreed to provide the support we need in our request/asks to better understand the data. Dan will take the list of data we think we need -- based on the desired system logic and frontend experience -- and will consult their architect who will be able to advise us what pieces of data fields we should draw from. 

__This is the list provided to Dan and Janet via email:__

Follow up from today’s call. Thanks Dan for your advice on the reverse engineering approach. I think some of this may be easier to discuss with a walk through of the kind of experience we’d like to build. It’s hard to flatten the UX into text, but I’ll do my best. 

Cliff Notes/high level description FOM information we want to display and organizational content experiences:

1/ We want to include the specific mandated FOM information for each office – these will not necessarily be on one page, so don’t try to attach these to a page per se. For instance something like the Administration info we want to use as a meta tag across many experiences (like the office about us page, but also as a way to filter searches for instance). So we know we would at minimum need:

•	Plain Language Name of the Org (without appended codes like OFE-008a)

•	Administration it belongs to (or the central office parent it belongs to)

•	Mission text

•	Overview text

•	Authorities text (as it appears in the FOM document)

•	Activities text

•	What child office/s that report directly to it (or that it oversees) – i.e.,  one immediate level below it

•	What parent office it belongs to – one level immediately above it

•	The org chart hierarchy in a text list/outline form

•	Archived meta data – e.g., we would want the content management system to know from the “archived” meta data that the office page should also be archived/unpublished/withdrawn from the website – whether this happens automatically or the meta data is used simply to generate a notification to the office page's editor is TBD. 

•	Merged meta data – e.g., if an office is technically archived in the FOM because it got merged with another office record, we would want the system to know this granular level of archiving, so that we can properly consolidate the office web pages – either by automatically updating the contents (pubs, reports, blog posts) of the deprecated office with the correct office’s meta data or by auto notifying the page editor to manually consolidate whatever may need to be merged on their web page. 

•	Active FOM or In-FOM meta data – we want to use only active FOM records to populate the ‘all orgs in VA’ searchable/filterable index experience.

•	The FOM Coordinator – e.g., if the page editor sees something in the mandated FOM info that’s outdated or missing and should be added/updated in Salesforce

•	External custom website URL – If an office has a custom website that they wish to use (or create) off of the official VA.gov new tier 3 experience, we want to pull this information from Salesforce to dynamically generate a message and a link to that office’s external custom site from their official landing page. 


2/ Please see question notes in the highlighted rows of this spreadsheet. A few of most critical questions are summarized in this email: 
https://dvagov-my.sharepoint.com/:x:/g/personal/jennifer_lee27_va_gov/EQU4_Jiq9ylHkw_h7UM9RYgBMgPJ23vjVOogHqfvmZzsvA?e=sksdam

•	What is the field that identifies each FOM org as a unique record? (EX: Account Name, Account ID, other?)

•	Is there a plain language office name field – i.e., without the xxx-nnn (e.g., OEI-008) prefix that’s welded to the name in the Account Name field?

•	What field/formula field/combination of fields map to the org chart hierarchy that we can show as a text list (outline) view? 

•	What field maps to the Administration level (VBA, VHA, NCA)? 

•	What field maps to Department of Veterans Affairs – Central Staff Office  level? 

•	To display an org’s Authorities, do we also need the Junction ID field?  


## 07/07/2021

Meeting: Ryan Thurlwell, Jen Lee; and members of the Gov.uk's Government Digital Service team (Markland, Head of Content Design; Stephen, Head of Design)

### Purpose: 

Informational call to discuss how GDS approached tier 3/org content, change management. 

### Summary from conversation - in no particular order: 

GDS has multiple CMSs that they built themselves and now maintain. This was not a strategic decision, but something that happened organically over time. It is – in their words – “a spaghetti mess” under the hood. Since they themselves manage all of the CMSs, it does enable them to have strong governance (centralized model). 

Gov.uk defines customer-constituent facing content and tools “mainstream” content, and corporate/organizational information “Whitehall” content. They too use a content strategy that separates mainstream stuff from Whitehall stuff via IA. Everything that’s Whitehall content lives under /government. 

### Whitehall content has a shallow IA – no more than 2 levels deep: 

BLUF: Much of this tracks to the approach Ryan and I have already been following, so it was validating to get details on some of their approach and backend functionality. We are actually in a slightly more favorable position in that the VA org hierarchy taxonomy is available to us in the form of Salesforce data. GDS didn’t have a data source to draw from and had to manually create the organizational taxonomy for Whitehall content.

•	There are only 2 office pages – an office landing page > and a more detailed ‘about us’ page that’s optional (not all offices choose to use the ‘about us’ page template). 

•	Everything else is tagged content pages via the taxonomy – i.e., links to the bio page, to press releases, featured stories, annual reports… These are not in the “office website IA” but instead are dynamically linked to the office page via taxonomy based tags. 

•	They also use the taxonomy tags to power pre-filtered search listing pages.

- They do not use conventional nav on Whitehall content – everything is taxonomy-based meta data driven from within the CMS. The taxonomy creates tags that link to related pages or content types like documents, bios, press releases, etc. GDS team manages the taxonomy in the CMS. Businesses have a way to submit requests to the GDS team to add or modify the taxonomy, but GDS makes the decision. 

•	They had support at a fairly high executive ministerial level for their approach. And although the situation was ‘you need to do this regardless’ (it was not optional but required to have an office presence on their Whitehall product, for transparency purposes), they still a) provided 'nice-to-have' component capabilities for the business, and b) chose to work first with friendly departments to create momentum. (Some orgs are “still raw.” This is inevitable and we should be aware that we will also face orgs who are not pleased about changing.) 

•	They’ve reached a critical mass now, that orgs that do not use the gov.uk platform look like the "odd man out."

•	GDS team has a formal waiver process in place for requesting permission to have an external website. They reject about 80% of requests. The criteria for assesment is rigid and include a review of contract dollars and spend controls. 

•	Some orgs do maintain external, custom websites, but they still get a default, required Whitehall org landing page for transparency. (Like this: https://www.gov.uk/government/organisations/advisory-committee-on-animal-feedingstuffs ) 

### 508/WCAG 2.0:
They’ve created a kind of HTML shell template pages for document assets. Each shell template is associated with a content type meta data – press release, report, announcement, speech, policy statement, so on--as well as additional taxonomy tags (like the office or offices it belongs to). 

•	They haven’t figured it out yet, but they are striving to get contents out of PDFs and Word documents, so that everything has an HTML version if not replaced by the HTML page. Going forward, obviously, they want businesses to simply create that information IN the html template to start. 

•	(Note to self: This is distantly like the form landing pages we have, but taking it many steps further for a web-only future – very exciting.)


### Search apps - They have several internal search apps:

•	Site search which is keyword based searching. 

•	And pre-filtered search experiences they call “Finders.” These are basically search results list pages for specific types of content types – office pages has its own Finder; bios has a bios Finder; documents has its own Finder with pre-filtered landing pages (ex: all press releases tagged “X Office”) where you can further filter by other taxonomy tags like topics, people, etc.). They are the same tool but with different searchable index files – one for bios only searches bios, so on. 



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
- QA people in VA's Office of Management.
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




