# Example FOM Salesforce data mapping to CMS/FE fields

This is a preliminary field mapping, and will need fleshing out and refining during data migration from Salesforce. 

## The POCs for the FOM Salesforce data are:

- Dan Navarro, technical PM, Office of Enterprise Integration
- Janet Schiller, FOM manager, Office of Enterprise Integration

## Preliminary FOM info we want to use in Tier 3 experiences
These are the pieces of info that we know so far we need: 

Required for tier 3 experience = * 

- The complete Levels 0 - 6 org hierarchy data *  (Hierarchy info will be pulled from/is created by multiple data fields.)
- Office/org name *  (Currently, the account name field has an alphanumeric prefix like 'OEI-008' attached to the office name; Dan's Salesforce team is creating a plain language name-only field for us, without the prefix.) 
- Office account record ID * (This is the unique identifier.)
- The Administration it belongs to or the parent central staff office *
- Mission text * (Mission field is optional in Salesforce. We will pull Mission data in and IF the office has it filled out in Salesforce, include it in the FE; IF this data is empty for the office in SF, we'll hide this field in the FE.)
- Overview text *
- Authorities text * (as it appears in the FOM document which is a concatenation/formula of multiple fields)
- Activities text *
- What child offices that report directly to it * – i.e., 1 level immediately below it
- What parent office it belongs to – 1 level immediately above it
- The org chart hierarchy in a text list/outline form 
- Archived meta data * – e.g., we would want the content management system to know from the “archived” meta data that the office webpage in the CMS should also be archived/unpublished from the website. Example: a new archived meta data generates a notification to the office page editor, office POC, and the administration web comms team that their office page needs to be archived from the website.  
- Merged meta data – e.g., if an office is archived in the FOM because it got merged with another office record.  
- In-FOM * meta data – we want to use only active FOM records to populate the ‘all orgs/offices in VA’ index.
- FOM Coordinator * – e.g., POC for the office page editor if they see something in the mandated FOM info that needs to be updd in Salesforce.
- External website URL * – If an office has an external website off of the VA.gov new tier 3 organization experience. We want to pull this information from Salesforce to dynamically generate an alert message and a link to that office’s external  site. (For transparency and to know who has what, where.)



| __Salesforce FOM field  | Maps to this CMS field | Maps to this FE content field__ |
| ------------- | ------------- | ------------- |
| TBD: Dan's team has a ticket to create a name-only extract field for our use  | Content Cell  | Office Name  |
| Account ID  | Content Cell  | will not be used for FE, but need it to uniquely identify each office in the CMS  |
| FOM_Mission__c  | Content Cell  | Mission and vision |
| FOM_Overview__c  | Content Cell  | Overview under "Our business function and mandates" section  |
| Full__title__c {this is a concatenated formula field; and it is the one that will give us the exact way this information appears in the FOM doc} | Content Cell  | Authorities  |
| Authority Junction ID {this field in the Authorities data connects an Authority to a specific office} | Content Cell  | {may need this data to display the Authorities for the right office} |
| FOM_Functions_and_Activities__c  | Content Cell  | Activities  |
| Parent Account: ParentId  | Content Cell  | {not used as a FE field, but can use to identify immediate parent (1 level up) of an office}  |
| Child Account: ChildAccounts  | Content Cell  | {not used as a FE field, but can use to identify immediate child (1 level down) of an office}  |
| Office_Archived__c    | Content Cell  | {not used as a FE field; needed to identify what office's POC needs to be notified so they can archive/unpublish their org page on VA.gov} |
| Merged data flag TBD: Dan's team   | Content Cell  | {not used in the FE as a field; but desired to identify which offices have been archived by merging, so the relevant offices can be notified to manually consolidate their web pages or depreciate one}  |
| In_FOM__c | Content Cell  | {not used as a FE field but needed to validate office is a valid and active functional organization; we will dynamically populate a default org landing page only for In-FOM__c active offices}  |
| FOM_Coordinator__c  | Content Cell  | {not used as a FE field; need in CMS to help site editors/POC identify who to contact if they have missing FOM info that needs to be added in Salesforce} |
| VA_Organization_Acronym__c | Content Cell  | {corresponds to the Administrations VHA, VBA, NCA. VACO offices get their own acronym like OIT; VACO acronyms will not be used, as they should always show a roll up to the Office of the SecVA}  |
| FOM_Level_0__c  | Content Cell  | {corresponds to Level 0 in the hierarchy: Department of VA}  |
| FOM_Level_1__c  | Content Cell  | {corresponds to Level 1 in the hierarchy: Office of the SecVA}  |
| FOM_Level_2__c  | Content Cell  | {corresponds to Level 2 in the hierarchy - parent VACO offices like OIT, OALC, OIG, Human Resources, and the VHA/VBA/NCA Under Secretary offices}  |
| FOM_Level_3__c  | Content Cell  | {corresponds to Level 3 in the hierarchy - like the Patient Advocate Office under VHA} |
| FOM_Level_4__c  | Content Cell  | {corresponds to Level 4 in the hierarchy} |
| FOM_Level_5__c  | Content Cell  | {corresponds to Level 5 in the hierarchy} |
| FOM_Level_6__c  | Content Cell  | {corresponds to Level 6 in the hierarchy} |
| Website {See note below}  | Content Cell  | {to display the office's external website if they choose to maintain an external custom site rather than being on va.gov} |

__Website field note:__ 
This Salesforce field isn't currently used by a lot of offices, and sometimes include intranet URLs. The idea behind extracting a website URL from Salesforce is: if some offices choose to create a custom external site, they will still get the required default FOM office landing page; however, we can generate an alert message or banner on their page that links users to their custom website. In order for that to happen, the office would need to enter their custom website URL in their Salesforce account, for transparency and traceability. See this example on Gov.uk: https://www.gov.uk/government/organisations/advisory-committee-on-animal-feedingstuffs 
If this field were to be used for this purpose, we would need to 1/ ask the FOM team (Janet and Dan) to specify in Salesforce for offices to begin using that field for this purpose; 2/ communicate via Janet's FOM coordinators and the VACO digital comms teams to offices that if offices want a custom site, they'll need to record that site's URL in Salesforce.

__Example of how FOM Levels work:__

(0) Department of Veterans Affairs
- (1) Office of the Secretary of Veterans Affairs
  -  (2) Office of Information Technology OIT 
    -  (3) Office of the CTO 
          -(4) DEPO  
            - {DEPO has no child/sub offices} 
