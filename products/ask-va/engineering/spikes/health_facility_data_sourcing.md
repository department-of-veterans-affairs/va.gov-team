Pulled records from CxDW and Ligthouse and did a comparison to see if all the CRM records are in the Lighthouse.  

[Comparison between facilities Document](https://github.com/department-of-veterans-affairs/ask-va/files/13251702/compare_records_manual_update.xlsx)


Of the 141 health facilities the CRM team passed us: 
* 128 of them matched on facility id and name
* 11 matched on ID but not name
* 2 didn't match on name or id

For the 2 that didn't match on id or name: 
* Northern California Health Care System
  * This is actually a large health care system with multiple medical facilities.  In Lighthouse this is broken down into their individual medical facilities but CRM team groups them into the parent medical facility.  
  * The web shows NCHCS as two VAMCs - we wouldn't include the 'parent' as a facility since there are no PATSR users associated to it
* VHACO
  * VHACO is a CRM only facility (not used in Portal).  It is a default routing location if the AVA agent cant determine what facility to send a request to
