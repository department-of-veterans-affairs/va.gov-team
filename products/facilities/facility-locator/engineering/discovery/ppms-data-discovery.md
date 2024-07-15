# PPMS = Provider Profile Management System
_Last update: 2019-12-24_

## [PPMS 4.0 Data Web Service](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/community-care/data/data-web-service-icd-2019-4-26.docx)
- Document contains:
  - Resources, endpoints, requests and responses exposed in the PPMS data web service
  - Models & Functions currently available to access through the PPMS data web service. Additionally, this document contains 
- Sample JSON responses (sample data). 
- Available metadata for PPMS via the Data Web Service can be referenced here: [DWS Metadata](https://np.dws.ppms.va.gov/v1.0/$metadata)
  
## Example Facility Locator request: 
- Miami, FL as the starting address with a radius of 50 miles, a max drive time of 25 Minutes, max 25 results returned. The Request is also filtering on providers who are specialized in Urology, Internal Medicine, or Ophthamology, are with any network and any gender.
- Results returned in ascending order by Driving distance in miles
  - Miles": 2.194,
  - "Minutes": 7.567,
  - "ProviderName": "UMDC DEPARTMENT OF UROLOGY",
  - "ProviderSpecialty": "Urology"
  - "SpecialtyCode": "208800000X",
  - "CareSite": "1150 NW 14TH ST, MIAMI, FL, 33136",
  - "CareSiteAddress": "1150 NW 14TH ST MIAMI, FL 33136",
  - "WorkHours": null,
  - "ProviderGender": "NotSpecified",
  - "ProviderNetwork": "Provider Agreement",
  - "NetworkId": 8,
  - "ProviderAcceptingNewPatients": false,
  - "ProviderPrimaryCare": false,
  - "QualityRanking": 0,
  - "ProviderIdentifier": "1154371458",
  - "Latitude": 25.787531,
  - "Longitude": -80.213232

  
## PPMS Data Values
- Provider Resource	
- Provider Contacts Resource
- Provider Credentials Resource	
- Provider License Resource	
- Provider Identifier Resource	
- Provider Networks Resource	
- Provider Privileges Resource	
- Provider Services Resource	
- Provider Specialties Resource	
- Specialties Resource	
- Care Sites Resource	
- Facilities Resource	
- Agreement Providers Resource	
- Institutions Resource	
- Provider Agreements Resource	
- Service Availabilities Resource	
- VISNs	
- VA Provider Relationships	
- Batch Processing
- VA Facility Locator Function
- Provider Locator Function
- Relationship Values
- Affiliation Values
- Network Values

# VA Facility Locator Function 
- Provides the ability to return VA Facilities based on their distance from a given address within a radius. 
- The function can also filter VA Facilities based on multiple Facility types. 
## Function
/VAFacilityLocator?Address={string}&Radius={int}&FacilityType1={int}&FacilityType2={int}&FacilityType3={int}&FacilityType4={int}
## Parameter/Types
Address(String),Radius(int),FacilityType{int}
### Value = Facility Type
- 0 = No Preference
- 1 = VAMC
- 2 = PC CBOC
- 3 = OOS
- 4 = MS CBOC
- 5 = HCC

# Provider Locator Function
- The Provider Locator Function provides the ability to return Providers based on their distance from a given address. This function takes an address, radius, and other filtering attributes and returns Providers sorted by shortest driving distance. All the parameters are required so there are default values which must be set.  
## Function
/ProviderLocator?Address={‘string’}&Radius={int}&driveTime={int}&SpecialtyCode={‘string’}&Network={int}&Gender={int}&PrimaryCare={bool}&AcceptingNewPatients={bool}
## Parameter/Types
Address(String),Radius(int),DriveTime{int}SpecialtyCode(string),Network(int),Gender(int),PrimaryCare(bool),AcceptingNewPatients(bool)
- Address Parameter: Must be a string value with single quotes.
- Radius Parameter: Must be an int32 value (Miles).
- DriveTime Parameter: Must be an int32 value (Minutes).
- MaxResults Parameter: Must be an int32 value no greater than 625.
- Network Parameter: See Network Values Section.
### Value = Gender
- 0 = No Preference
- 1 = Male
- 2 = Female
### Value = Primary Care Status
- 0 = No Preference
- 1 = Is Primary Care Physician
- 2 = Is NOT Primary Care Physician
### Value = Accepting New Patients Parameter
- 0 = No Preference
- 1 = Is Accepting new VA Patients
- 2 = Is NOT Accepting new VA Patients
### Speciality Code Parameter example
- null = Any speciality
- '207L0000X' = Anesthesiology
# Relationship
### Value = Associated Relationship example
- 1 = CCN
# Affilitation Type
### Value = Associated Relationship Type example
- 1 = Choice
# Network Values
### Value = Associated Network example
- 0 = Any Network






