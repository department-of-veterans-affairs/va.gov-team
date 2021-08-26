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
| Full__title__c  | Content Cell  | Authorities  |
| FOM_Functions_and_Activities__c  | Content Cell  | Activities  |
| Parent Account: ParentId  | Content Cell  | {not used as a FE field, but needed to identify (in reverse) the immediate children of an office}  |
| Office_Archived__c    | Content Cell  | {not used as a FE field; needed to identify what office's POC needs to be notified so they can archive/unpublish their org page on VA.gov |
| Merged data flag TBD: Dan's team   | Content Cell  | {not used in the FE as a field; but desired to identify which offices have been archived by merging, so the relevant offices can be notified to manually consolidate their web pages or depreciate one}  |
| In_FOM__c | Content Cell  | {not used as a FE field but needed to validate that the office is a valid active office in the FOM hierarchy}  |
| FOM_Coordinator__c  | Content Cell  | {not used as a FE field; need in CMS to help site editors/POC identify who to contact if they have missing FOM info that needs to be added in Salesforce} |
| FOM_Level_0__c  | Content Cell  | {corresponds to Level 0 in the hierarchy: Department of VA}  |
| FOM_Level_1__c  | Content Cell  | {corresponds to Level 1 in the hierarchy: Office of the SecVA}  |
| FOM_Level_2__c  | Content Cell  | {corresponds to Level 2 in the hierarchy - parent VACO offices like OIT, OALC, OIG, Human Resources, and the VHA/VBA/NCA Under Secretary offices}  |
| FOM_Level_3__c  | Content Cell  | {corresponds to Level 3 in the hierarchy - like the Patient Advocate Office under VHA} |
| FOM_Level_4__c  | Content Cell  | {corresponds to Level 4 in the hierarchy} |
| FOM_Level_5__c  | Content Cell  | {corresponds to Level 5 in the hierarchy} |
| FOM_Level_6__c  | Content Cell  | {corresponds to Level 6 in the hierarchy} |

