# Health Facility Data Sourcing

## Description
The CRM team relies on health care facility ids and names to route inquiries.  Currently they keep a manual listing of health care facilities that gets updated on demand and get published to the form in a release cycle.  

The VA has the Lighthouse API which is supposed to be the definitive source of VA information.  [Lighthouse has a Facilities API](https://developer.va.gov/explore/api/va-facilities/docs?version=current) for retrieving facility information.  

## Task
We need to determine if Lighthouse can be used to retrieve health care facility information.  The primary considerations for this decision are: 
1.  Would there be any gap in data elements if we switched from CRM Manual list to Lighthouse?
2.  If we transitioned, will there be any impact to routing of inquiries?

## Data 
Pulled records from CxDW and Ligthouse and did a comparison to see if all the CRM records are in the Lighthouse.  

[Comparison between facilities Document](https://github.com/department-of-veterans-affairs/ask-va/files/13251702/compare_records_manual_update.xlsx)

Of the 141 health facilities the CRM team passed us: 
* 128 of them matched on facility id and name
* 11 matched on ID but not name
* 2 didn't match on name or id

For the 2 that didn't match on id or name: 
* Northern California Health Care System
  * This is actually a large health care system with multiple medical facilities.
  * Lighthouse breaks the system down into multiple sub facilities that each denote NCHCS as their respective parent.
  * For the CRM perspective: The web shows NCHCS as two VAMCs - we wouldn't include the 'parent' as a facility since there are no PATSR users associated to it
* VHACO
  * VHACO is a CRM only facility (not used in Portal).  It is a default routing location if the AVA agent cant determine what facility to send a request to

## Recommendation
The recommendation would be to use the Lighthouse API for HealthCare facilities. The data from there should be the most up to date information available and would remove any need for a manual updating of the list availble. 

We would deal with any health facilities that are NOT included in our Lighthouse results by using the VHACO facility Id that CRM Team uses today.

For NCHCS, we would use the facilities that CRM Team uses today.  
