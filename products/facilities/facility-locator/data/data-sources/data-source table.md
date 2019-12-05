# Data sources

https://github.com/department-of-veterans-affairs/vets-contrib/blob/master/products/APIs/facility-locator/facilities-datasources.md

| **Division** | **Facility types available in legacy directory** |
| --- | --- | 
| VA Health | VISN, VA Health Care System, VA Medical Centers, Domiciliary, Integrated Clinical Facility, Outpatient Clinic, Community Service Programs, Community Based Outpatient Clinic, Vet Center |
| Benefits | Regional Benefit Offices, Records Management, Regional Loan Center, Intake Sites (Pre-discharge Claims Assistance) |
| Vet Center | |
| National Cemetery | District Office, National Cemeteries | National Cemeteries, Government Lots, Soldier Lots, Office
| Central Office | |

| **Source** | **Contains** | **Owner** | **Notes** |
| --- | --- |--- | --- |
| GIS | VHA facility basic info (address, hours, lat/long, name, type) | | Pulled daily through a Sidekiq job into the vets-api Postgres database |
| [ArcGIS](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/research/discovery-sprints/data-sources/arcgis-data-discovery.md)  | VBA facility basic info (address, hours, lat/long, name, type) | ESRI Support, GeoBISL POC is Michael Villeneuve (michael.villeneuve@va.gov) | Pulled daily through a Sidekiq job into the vets-api Postgres database. Backed by a "Facility locator" table in CDW with information provided by the VSSC team. |  
| ArcGIS | NCA facility basic info (address, hours, lat/long, name, type) | ESRI Support, GeoBISL POC is Michael Villeneuve (michael.villeneuve@va.gov)  | Pulled daily through a Sidekiq job into the vets-api Postgres database. Backed by a "Facility locator" table in CDW with information provided by the VSSC team. |  
| ArcGIS | Vet Center facility basic info (address, hours, lat/long, type) | ESRI Support, GeoBISL POC is Michael Villeneuve (michael.villeneuve@va.gov) | Pulled daily through a Sidekiq job into the vets-api Postgres database. Backed by a "Facility locator" table in CDW with information provided by the VSSC team. |  
| ~~SQL52~~ | Mental health phone number |  | ~~Pulled daily through a Sidekiq job after the GIS pull and stitched into the services for VHA facilities in base_facilities.~~ (_per Jeff Dunn, this work was not completed_)|
| [Access to Care](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/research/discovery-sprints/data-sources/vha-data-source.md) | Wait times, satisfaction scores, services provided (except dental) | Project Manager: Theresa Baamonde (Theresa.Baamonde@microsoft.com) | Pulled daily through a Sidekiq job, temporarily placed in Redis, and then stitched into base_facilities table in Postgres. |
| Dental Services CSV | Dental services | | Built from information in the old ArcGIS endpoint about which facilities offered Dental. In the future, this will be integrated into the CMS |
| Website URL CSV| Website URLs | Lighthouse maintains spreasheet | Pulled daily from Lighthouse spreadsheet into vets-api. Merged daily by Sidekiq with base_facilities data in Postgres after the GIS/ArcGIS jobs run | |
| State Cemetery XL | Info on state cemeteries not managed by VA | External team maintains XML, updating it every 3 mos | Pulled daily from an XML file that is checked into vets-api. Sidekiq transforms and inserts the data into base_facilities in Postgres. |
| [PPMS](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/research/discovery-sprints/ppms-data-discovery.md) | Provider info | | Web service | 

| **Source** | **URL** | **Access** |
| --- | --- | --- |
| VHA |  https://gis.va.gov/server/rest/services/VA/FacilitySitePoint_VHA/FeatureServer/0 | VA Network Access |
| NCA |  https://services3.arcgis.com/aqgBd3l68G8hEFFE/ArcGIS/rest/services/NCA_Facilities/FeatureServer/0 | Public |
| VBA |  https://services3.arcgis.com/aqgBd3l68G8hEFFE/ArcGIS/rest/services/VBA_Facilities/FeatureServer/0 | Public |
| Vet Centers |  https://services3.arcgis.com/aqgBd3l68G8hEFFE/ArcGIS/rest/services/VHA_VetCenters/FeatureServer/0 | Public |
| Dental | | VA Network Access |
| Satisfaction | https://www.accesstopwt.va.gov/ | Public |
| Wait times | https://www.accesstocare.va.gov/ | Public |
| State cemeteries | https://www.cem.va.gov/cems/cems.xml | Public |
| PPMS| https://np.dws.ppms.va.gov/v1.0/$metadata | VA Network Access | 
