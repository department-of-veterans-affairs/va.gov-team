# Education Facility Data Sourcing

## Description
The current AVA Form allows users to enter in education facility information.  Currently they keep a manual listing of educational facilities that gets updated on demand and get published to the form in a release cycle.  The education facility id is used to 
VA.gov has a [GI Bill Comparison Tool](https://www.va.gov/education/gi-bill-comparison-tool) that contains a definitive list of Educational Facilities recognized by the VA.  

## Task
We need to determine if VA.gov can be used to retrieve education facility information.  The primary considerations for this decision are: 
1.  Would there be any gap in data elements if we switched from CRM Manual list to VA.gov?
2.  If we transitioned, will there be any impact to routing of inquiries?

## Data 
The two system sources we evaluated were the GI Bill and the CRM Team (existing AVA application).  
* [AVA Education Facility ID Data](https://github.com/department-of-veterans-affairs/ask-va/files/13270732/ava-data-clean-0.txt)
* [VA Gov GI Bill Education Facility ID Data](https://github.com/department-of-veterans-affairs/ask-va/files/13270733/va-data-clean-0.txt)

The data between the two systems matches up outside of two entries.  Those two entries are not valid education facility ids and seem to be ids that are used to test submissions to the CRM team.  The CRM team mentioned that they have hidden ids (ids that are not presented to the front end user) that are used to test different functionality on the CRM side (i.e. routing).    

The CRM Team and the GI Bill team source their data from WEAMS.  WEAMS is the system of record for education facilities.  WEAMS does NOT have an API currently available.  An API is on the roadmap but not a priority so there is no definitive date for when it will be available. 

The GI Bill's search tool is named GIDS (GIBCT Direct Service) that exists in vets-api.  Per Brian Grubb, current (12/11/2023) lead of the GI Bill Comparison Tool: 
"GIBCT Data Service (GIDS) compiles data from a variety of federal CSV-formatted sources into a set of institution profiles that provide school metrics of value to veterans. It also offers a query-based institution search mechanism, houses GI Bill education benefit parameters, and serves as a repository for the federal CSV source files. Secondarily, institution information may be exported as a CSV for regulatory reporting purposes."  

## Recommendation
To address the Tasks directly: 
1) There would be no gap between CRM Manual list and VA.gov.  However, there is no API available to pull the information from VA.gov so using VA.gov would require us building and supporting another component to pull and process data. This is NOT recommended.
2) If we transitioned, there would be no impact to routing. 

Considerations for recommendation: 
*  Since both systems (GI Bill and CRM API) source their data from WEAMS, there will be no difference in the data if we used either one.  
*  The GI Bill does NOT currently have an API available to pull data from their repository.  There IS a CSV file that would require either a separate manual step or service created to consume that data into our system.
*  The CRM Team has agreed to create an API endpoint to provide education facilities to us.
*  WEAMS, the system of record, does NOT have an API available currently.


Our recommendation is to use the CRM Team API Endpoint for education facilities.  It is sourced from WEAMS and would reduce the complexity of the backend of AVA which would ease long term maintenance and reduce any possibilities of errors or mismatched data. 

## Decision
We will pull data directly from the CRM Team endpoint.
