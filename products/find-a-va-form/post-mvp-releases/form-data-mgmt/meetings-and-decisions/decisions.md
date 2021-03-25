# Decisions Related to Form Data Management

## Duplicate Data Records

### Background: 
- When the Find a VA Form MVP intially launched, there was no mechanism for maintaining a history of deleted documents. In addition, deletes by the VA did not cascade down to the  Forms API, so they ended up orphaned in the Forms API Postgres data source, and continued to appear in search results, but because the PDFs had been removed, the PDF download links would cause a 404 error.  
- At some point in fall 2019, the VA removed all DBQ forms due to a high incidence of fraud.  Because of this event, ~100 forms remained orphaned in the Postgres data source, causing significant errors.  This event caused the Find a VA Form team to ask the forms DBA manager (Kevin Reid at the time) to add a "Deleted" flag so that we could know that the VA had deleted it vs. it just mysteriously disppearing from the CMS.  We added logic in late 2020 to also display a different message for deleted forms so that the user would know that it was a valid form at one time, vs. making it seem it was an invalid form.
