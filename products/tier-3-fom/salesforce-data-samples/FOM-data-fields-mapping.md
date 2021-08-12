# Example FOM Salesforce data mapping to CMS/FE fields

This is a preliminary field mapping, and will need fleshing out and refining during data migration from Salesforce. 

## The POCs for the FOM Salesforce data are:

- Dan Navarro, technical PM, Office of Enterprise Integration
- Janet Schiller, FOM manager, Office of Enterprise Integration

## Preliminary FOM info we want to use in Tier 3 experiences
These are the pieces of info that we know so far we need: 

Required = * 

- * Plain Language Name of the org/office
- The Administration it belongs to or the parent central staff office
- Mission text
- * Overview text
- * Authorities text (as it appears in the FOM document which is a concatenation/formula of multiple fields)
- * Activities text
- * What child offices that report directly to it – i.e., 1 level immediately below it
- What parent office it belongs to – 1 level immediately above it
- The org chart hierarchy in a text list/outline form 
- * Archived meta data – e.g., we would want the content management system to know from the “archived” meta data that the office webpage in the CMS should also be archived/unpublished from the website. Example: a new archived meta data generates a notification to the office page editor, office POC, and the administration web comms team that their office page needs to be archived from the website.  
- Merged meta data – e.g., if an office is archived in the FOM because it got merged with another office record.  
- * In-FOM meta data – we want to use only active FOM records to populate the ‘all orgs/offices in VA’ index.
- * FOM Coordinator – e.g., POC for the office page editor if they see something in the mandated FOM info that needs to be updd in Salesforce.
- * External website URL – If an office has an external website off of the VA.gov new tier 3 organization experience. We want to pull this information from Salesforce to dynamically generate an alert message and a link to that office’s external  site. (For transparency and to know who has what, where.)



| __Salesforce FOM field  | Maps to this CMS field | Maps to this FE content field__ |
| ------------- | ------------- | ------------- |
| Content Cell  | Content Cell  | Content Cell  |
| Content Cell  | Content Cell  | Content Cell  |
