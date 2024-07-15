Following are sample objects returned from the VA Health Facility endpoint and the Choice Act Provider endpoint. We are still awaiting endpoints for VA Benefits and Cemetery facilties. 

Note the different semantics between the two services - the VA endpoint returns *facilities* with all the services available at that facility. The Choice Act endpoint returns *providers*, i.e. individual doctors/physician's assistants/etc; specifically each record identifies a single specialty of an individual provider at a single location. These individual records will need to be merged to create a useful record for map display. 

The two endpoints have different default spatial references (coordinate systems), but it is possible to override both input (for query parameters) and output (for results) spatial references when submitting a query. 

## VA Health Facility (VHA) Object
- Endpoint: https://maps.va.gov/server/rest/services/PROJECTS/Facility_Locator/MapServer/0
- Total record count (where 1=1): 1176
- Default Spatial Reference: 4326
- `StationID` is a unique identifier across all health facilities.
```
{
   "attributes": {
    "OBJECTID": 1736,
    "FacilityDataDate": "8-19-2016",
    "OutpatientServicesDataDate": 1472428800000,
    "StationID": 538,
    "VisnID": 20,
    "StationNumber": "648",
    "StationName": "Portland VA Medical Center",
    "CommonStationName": "Portland",
    "CocClassification": "VA Medical Center (VAMC)",
    "CocClassificationAttribute": "Firm",
    "Building": "",
    "Street": "3710 Southwest US Veterans Hospital Road",
    "Suite": null,
    "City": "Portland",
    "State": "OR",
    "Zip": "97239",
    "Zip4": "2964",
    "MainPhone": "503-721-1498 x",
    "MainFax": "503-273-5319 x",
    "AfterHoursPhone": "503-220-8262 x",
    "PatientAdvocatePhone": "503-273-5308 x",
    "EnrollmentCoordinatorPhone": "503-273-5069 x",
    "PharmacyPhone": "503-273-5183 x",
    "Monday": "24/7",
    "Tuesday": "24/7",
    "Wednesday": "24/7",
    "Thursday": "24/7",
    "Friday": "24/7",
    "Saturday": "24/7",
    "Sunday": "24/7",
    "Latitude": 45.497461450000003,
    "Longitude": -122.68287208,
    "Audiology": "YES",
    "ComplementaryAlternativeMed": "NO",
    "DentalServices": "YES",
    "DiagnosticServices": "YES",
    "ImagingAndRadiology": "YES",
    "LabServices": "YES",
    "EmergencyDept": "YES",
    "EyeCare": "YES",
    "MentalHealthCare": "YES",
    "OutpatientMHCare": "YES",
    "OutpatientSpecMHCare": "YES",
    "VocationalAssistance": "YES",
    "OutpatientMedicalSpecialty": "YES",
    "AllergyAndImmunology": "NO",
    "CardiologyCareServices": "YES",
    "DermatologyCareServices": "YES",
    "Diabetes": "YES",
    "Dialysis": "YES",
    "Endocrinology": "YES",
    "Gastroenterology": "YES",
    "Hematology": "YES"`
    "InfectiousDisease": "YES",
    "InternalMedicine": "YES",
    "Nephrology": "YES",
    "Neurology": "YES",
    "Oncology": "YES",
    "PulmonaryRespiratoryDisease": "YES",
    "Rheumatology": "YES",
    "SleepMedicine": "YES",
    "OutpatientSurgicalSpecialty": "YES",
    "CardiacSurgery": "NO",
    "ColoRectalSurgery": "NO",
    "ENT": "YES",
    "GeneralSurgery": "YES",
    "Gynecology": "YES",
    "Neurosurgery": "YES",
    "Orthopedics": "YES",
    "PainManagement": "YES",
    "PlasticSurgery": "YES",
    "Podiatry": "YES",
    "ThoracicSurgery": "NO",
    "Urology": "YES",
    "VascularSurgery": "YES",
    "PrimaryCare": "YES",
    "Rehabilitation": "YES",
    "UrgentCare": "NO",
    "WellnessAndPreventativeCare": "YES"
   },
   "geometry": {
    "x": -122.68288655824787,
    "y": 45.497466912945164
   }
  }
```
## VA Cemetery (NCA) Object
- Endpoint: https://services3.arcgis.com/aqgBd3l68G8hEFFE/ArcGIS/rest/services/NCA_Facilities/FeatureServer/0
- Total Record Count: 140
- Default Spatial Reference: 102100
- `CEMETERY_I` (Cemetery ID) is a stable facility identifier. There are a couple of records with duplicate IDs due to cemeteries that have multiple disjoint parcels represented with distinct records. 
- Note separate facility address and mailing address. 
```
    {
      "attributes" : {
        "FID" : 11, 
        "FULL_NAME" : "San Francisco National Cemetery", 
        "SHORT_NAME" : "San Francisco", 
        "CEMETERY_A" : "1 Lincoln Blvd", 
        "CEMETERY_1" : "Presidio of San Francisco", 
        "CEMETERY_S" : "San Francisco", 
        "CEMETERY_Z" : "94129", 
        "MAIL_ADDRE" : "1300 Sneath Ln", 
        "MAIL_ADD_1" : "\u003cNull\u003e", 
        "MAIL_CITY" : "San Bruno", 
        "MAIL_STATE" : "CA", 
        "MAIL_ZIP" : "94066", 
        "PHONE" : "650-589-7737", 
        "FAX" : "650-873-6578", 
        "GOVERNING_" : 895, 
        "COMMENTS" : " ", 
        "CEMETERY_C" : "San Francisco", 
        "CEMETERY_I" : "903", 
        "CEM_TYPE" : "National Cemetery", 
        "DISTRICT" : "Pacific District", 
        "STATUS" : "Cremation Only"
      }, 
      "geometry" : 
      {
        "x" : -13632376.772085346, 
        "y" : 4551367.5563852191
      }
    },
```

## Choice Act Provider Object
- Endpoint: https://services3.arcgis.com/aqgBd3l68G8hEFFE/arcgis/rest/services/ChoiceActProviders/FeatureServer/0
- Total record count (where 1=1): 792859
- Default Spatial Reference: 102100
- `UniqueProviderCode` is *not* a unique identifier for a record or even a facility. It identifies a provider (i.e. a doctor/nurse/etc), but a query for a given UniqueProviderCode may return multiple records for a provider with different addresses (if that provider works at multiple offices) or multiple records with the same address and different Specialty categories (if that provider is e.g. both a family nurse pracititioner and a certified nurse midwife). [This example query](https://services3.arcgis.com/aqgBd3l68G8hEFFE/arcgis/rest/services/ChoiceActProviders/FeatureServer/0//query?where=UniqueProviderCode%3D%27J4MS0IUSFV%27&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=&units=esriSRUnit_Meter&outFields=*&returnGeometry=false&multipatchOption=&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnDistinctValues=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&quantizationParameters=&sqlFormat=none&f=pjson&token=) has both types of duplication - same address/multiple specialties, and different address/same specialties. 
- UniqueProviderCode sometimes starts with backslash, unknown whether that's intentional.
- It looks like providers with multiple specialties are represented as above - with separate records under the same address. We will generate a full list of all specialty values once some more API integration is in place.
```
{
      "attributes" : {
        "OBJECTID" : 11932, 
        "UniqueProviderCode" : "\\001VNFQR8", 
        "AddressLine" : "10502 NE WASCO ST", 
        "AddressLine2" : null, 
        "City" : "PORTLAND", 
        "State" : "OR", 
        "Zip_1" : "97220", 
        "ProviderSurName" : "BALEN", 
        "ProviderFirstName" : "ROBERT", 
        "ProviderSuffix" : "", 
        "Degree" : "MD", 
        "Sex" : "M", 
        "SpecialtyVACategories" : "OPHTHALMOLOGY", 
        "SpecialtyTPACategories" : "OPHTHALMOLOGY", 
        "SpecGroup" : "PROFESSIONAL", 
        "GroupName" : "GATEWAY EYE CLINIC PC", 
        "PrescribingProvider" : "Y", 
        "Lat" : 45.53183, 
        "Long" : -122.554451
      }, 
      "geometry" : 
      {
        "x" : -13642698.90143537, 
        "y" : 5705668.3899728954
      }
    }
```
