# Moving VHA Facilities Datasources

 
The Facilities API (in vets-api, not Lighthouse) is changing the sources of its VHA data (and likely other types in the future). The above chart shows where data will come from post-switchover. Each of the sources is queried once per day by a Sidekiq job that transforms the data and stores it in vets-api's Postgres database. The jobs are somewhat order dependent. The GIS job needs to come after jobs that cache services data in Redis but before jobs that update the website URL and mental health phone number. More context about each backing service and what it provides is below.


## New Datasources
![New data sources](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/images/lh-new-datasources.PNG)

GIS
* VHA Facilities basic information, including fields like address, hours, lat/lng, name, type, and more.
* Pulled daily through a Sidekiq job into the vets-api Postgres database
* Requires VA network access to reach: https://gis.va.gov/server/rest/services/VA/FacilitySitePoint_VHA/FeatureServer/0

SQL52
* Mental health phone number
* Pulled daily through a Sidekiq job after the GIS pull and stitched into the services for VHA facilities in base_facilities.
* SQL52 is populated by an ETL job from DOEx.FieldDataEntry_MHPhone on A01
* Requires VA network access
Access to Care
* Information about wait times and satisfaction scores for various services offered by VHA facilities. These scores are also used to understand which services VHA facilities provide. This source is not used to determine Dental services.
* Pulled daily through a Sidekiq job, temporarily placed in Redis, and then stitched into base_facilities table in Postgres.
* Accessible via the public internet
* Satisfaction: https://www.accesstopwt.va.gov/
* Wait times: https://www.accesstocare.va.gov/
Dental Services CSV
* Information about Dental Services
* Built from information in the old ArcGIS endpoint about which facilities offered Dental. In the future, this will be integrated into the CMS.
Website URL CSV
* Website URLs for facilities pulled daily from a spreadsheet that Lighthouse maintains checked into vets-api.
* Merged daily by Sidekiq with base_facilities data in Postgres after the GIS/ArcGIS jobs run. 
ArcGIS
* Basic facility information for VBA/NCA, including fields like address, hours, lat/lng, name, type, and more.
* Pulled daily through a Sidekiq job into the vets-api Postgres database.
* Accessible via the public internet
* Backed by a "Facility locator" table in CDW with information provided by the VSSC team
* Eventually the plan is for Vet Centers to also come from GIS instead of ArcGIS.
* NCA from: https://services3.arcgis.com/aqgBd3l68G8hEFFE/ArcGIS/rest/services/NCA_Facilities/FeatureServer/0
* VBA from: https://services3.arcgis.com/aqgBd3l68G8hEFFE/ArcGIS/rest/services/VBA_Facilities/FeatureServer/0
* Vet Centers: https://services3.arcgis.com/aqgBd3l68G8hEFFE/ArcGIS/rest/services/VHA_VetCenters/FeatureServer/0
State Cemetery XML
* Information about state cemeteries that are not directly managed by VA. 
* Pulled daily from an XML file that is checked into vets-api (https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/facilities/cemetery_data/cems.xml). Sidekiq transforms and inserts the data into base_facilities in Postgres.
* An external team has committed to updating the XML file every three months. That file is found, here: https://www.cem.va.gov/cems/cems.xml
* Accessible via the public internet


## Old Datasources
 
![old data sources](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/images/lh-old-data-sources.PNG)

The Facilities API previously pulled most of its data, including VHA, from a series of publicly available ArcGIS endpoints. In addition to basic facility information listed above, these endpoints also contained information about website URLs and VHA Dental, Mental, and Primary Care services.
