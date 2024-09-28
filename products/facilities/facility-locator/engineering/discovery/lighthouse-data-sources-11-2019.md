## VA Lighthouse Facilities API Datasources
Received 11/2019

### Datasources diagam and description
- [facilities-datasources.md](https://github.com/department-of-veterans-affairs/vets-contrib/blob/master/products/APIs/facility-locator/facilities-datasources.md)

### Datasource URLs
- [VHA - GIS Server](https://gis.va.gov/server/rest/services/VA/FacilitySitePoint_VHA/FeatureServer/0) (VA network only, sourced from VAST in CDW)
- [NCA - ArcGIS Server](https://services3.arcgis.com/aqgBd3l68G8hEFFE/ArcGIS/rest/services/NCA_Facilities/FeatureServer/0) (NCA basic info, sourced from NCA-maintained CDW resource)
- [VBA - ArcGIS Server](https://services3.arcgis.com/aqgBd3l68G8hEFFE/ArcGIS/rest/services/VBA_Facilities/FeatureServer/0) (VBA basic info, sourced from VBA-maintained CDW resource)
- [Vet Center ArcGIS Server](https://services3.arcgis.com/aqgBd3l68G8hEFFE/ArcGIS/rest/services/VHA_VetCenters/FeatureServer/0) (Vet Center basic info, sourced from VAST in CDW)
- [Non-NCA cemeteries xml](https://www.cem.va.gov/cems/cems.xml) (Updated manually and periodically)
- Mental health phone numbers (Updated manually and periodically from CDW resource
- OMHSPPERCShare.DOEx.FieldDataEntry_MHPhone)
- [VHA/NCA/VBA Website URLs csv](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/facilities/website_data/websites.csv) (manually updated as necessary – we are the data owner for these)
- [Dental services csv](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/facilities/dental_service_data/dental_services.csv) (manually updated as necessary – we are the data owner for these)
- [Access to Care](https://www.accesstopwt.va.gov/Shep/getRawData?location=*) (satisfaction)
- [Healthcare services offered at VHA facilities](https://www.accesstopwt.va.gov/Shep/getRawData?location=*)
- [Access to Care (wait times)](https://www.accesstocare.va.gov/atcapis/v1.1/patientwaittimes)

### Field by Field breakdown

**Basic info**
- Name
- id-
- Facility type
- classification
- address
- hours
- lat
- lng
- mobile
- active_status
**Phone #s**
- main
- fax
- pharmacy
- after_hours
- patient advocate
- Enrollment coodinator

Basic info and phone number fields above originate from: 
- VHA: VHA GIS Server
- NCA: CDW -> NCA ArcGIS Server
- VBA: CDW -> VBA ArcGIS Server
- Vet Center: CDW -> Vet Center ArcGIS Server
- Non-NCA cemeteries: Non-NCA cemeteries xml

**Mental health phone #s**
- mental_health-clinic
- Originate from CDW resource OMHSPPERCShare.DOEx.FieldDataEntry_MHPhone

** website URLs** 
- website 
- Originates from VHA/NCA/VBA Website URLs csv

**VHA healthcare services (all except dental)**
- services
- Originate from Access to care

**VHA available services  (dental)**
- services
- Originate from Dental services.csv

**Satisfaction scores**
- satisfaction
- Originate from Access to Care (safisfaction)

**Wait times**
- wait_times
- Originate from Access to Care (Wait times)



