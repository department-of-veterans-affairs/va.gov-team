# SEP SME Notes 

**VSA eBenefits Team | October 2021** 

`Candy Clark, designer` 

--- 

 

## Primary Features 

- Manage Representation  

    - receive requests 

    - accept requests 

    - decline requests with comment 

- Represent Veterans 

    - search for veteran records (can view anyone represented by the POA codes associated with my account 

    - view records 

    - submit claims and documents on behalf of veterans 

    - coordinate submission of claims between County Service Officers and National Service Officers 

 

## Things to consider 

- One Veteran has multiple representatives 

    - The only known case where this happens is when a veteran has a claim that goes to an appeal. They can have a private attorney for the claim and a VSO for everything else. 

    - Not common 

    - Many VSOs will drop clients if they go with a private attorney because it makes everything more complicated. 

    - CorpDB has only one slot for a POA code, so multiple POAs must be handled manually 

- Only 21-22 can be submitted through SEP. All 21-22a forms (for private attorneys and claims agents) have to be mailed in. 

    - Needs to have an attorney fee associated with it. 

    - Attorneys also have a specific contact at regional offices (Attorney Fee Coordinators) that they correspond with.  

    - Private attorneys do not have the POA code in CorpDB assigned to them, they get a 099 and don’t show up in SEP. It’s a manual record update.  

- Board of Veteran Appeals has their own database. SEP only checks CorpDB. 

- Claim status in va.gov also has appeals status, which pulls from VBA systems.  

    - Could potentially split that out because private attorneys would need to be allowed access only to the appeals they are involved in while a VSO that is representing a veteran for claims would have access to everything in VBMS. 

    - Bigger issue is getting access to CorpDB 

- If the VSO does not actively use SEP, representation request stays pending. 

    - Can we identify by whether someone in the organization has an active SEP account with log ins that they use and respond to representation requests? 

    - It is worth telling a veteran they need to mail it in because it won’t be addressed [if they choose a VSO that does not use SEP]. 

- There was a lot of interest in SEP in the beginning, but less after launch 

    - VSOs generally found it harder to use SEP, so they don’t 

    - Some demanded additional features, like the work queue 

   - It was intended to have additional functionality (like Compensation, Education, and Health) that was not built out after launch. 

- VSOs are not happy they don’t have full social or file numbers 

    - That’s PII (Personal Identifiable Information) and they haven’t accepted the request.  

    - Did compromise by revealing phone numbers so VSOs could contact before accepting. 

- Work queue allows organizations to collaborate between local and national levels. 

    - DAV uses heavily 

    - County Service Officer (CSO) will start claim, but cannot submit. They will send to National Service Officer (NSO) for review by setting the “Application Status” If NSO approves, they will submit. If not, they will send back by changing the workflow status. 

    - Veterans get a notification when status changes, but there is no notification for the VSO. The hope that they are communicating internally. 

- If a request is accepted by VSO, they immediately have access to claim view tools in SEP. 

    - Does not update VBMS immediately (to be verified).  

    - VSOs that tie into VBMS don’t need SEP because they have access to everything already. 

    - Many County Service Officers (CSO) do not have that level of access in VBMS so they rely on SEP.  

    - Smaller organizations (like Wounded Warriors) rely on SEP.  

    - Can also decline with a note. 

- If the Veteran decides they don’t want to wait on their VSO, they can go in and submit applications by themselves. 

- Representation Requests and VSO Work Queue tabs are not available to private attys or claim agents. 

- File number terminal – last 2 digits of claim number (so they can narrow down search results) 

- VSO can belong to multiple organizations.  

- When a VSO registers for SEP they have to provide their accreditation number. 

- Data is inconsistent between systems 

    - OGC search does not pull from corpDB, ebenefits does (maybe)  

    - Assigned rep stored in corpDB.  

    - You can find Veteran Service Officers by name in the OGC search, but not through the eBenefits search because eBenefits would only pull up the org name. 

    - There is no actual link between the OGC database and anything except the SEP log in. All updates to OGC are manual. OGC is a standalone access database, not a transactional db. 

- How do we know which organization someone belongs to? Accreditation Number comes from OGC’s database and SEP looks for it at log in to make sure the user is still valid. POA code comes from corpDB. POA code is associated with the organization. Accreditation numbers are associated with the individual. 

- Some Veteran Service Officers are associated with 4-6 Organizations. 
