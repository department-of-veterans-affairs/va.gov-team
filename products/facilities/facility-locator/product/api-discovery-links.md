https://github.com/department-of-veterans-affairs/vets.gov-team/blob/ead0fe129bfee6b8e7eaae59d7f4f681a37dec15/Products/Global/Facilities_Locator/EngFiles/Facility%20Data%20Samples.md

https://github.com/department-of-veterans-affairs/va.gov-team/blob/03dd522fd1036a097d6370fc407d0b95a4a33e24/products/health-care/appointments/engineering/design_to_service_mapping_discovery.md

https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/products/facilities/facility-locator/product/api-discovery-links.md

## People
- Information Architecture: Mikki Northius, @Mikki on Slack

## Cemetery
- Example: https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/facilities/cemetery_data/cems.xml

## Dental
- https://github.com/department-of-veterans-affairs/vets-api/tree/master/lib/facilities/dental_service_data

## Mental Health
- https://github.com/department-of-veterans-affairs/vets-api/tree/master/lib/facilities/mental_health_data

## Facility Websites
- https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/facilities/website_data/websites.csv

## [Facility API](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/ead0fe129bfee6b8e7eaae59d7f4f681a37dec15/Products/Global/Facilities_Locator/EngFiles/API%20Design.md)
- Facility Locator API provides data to the Facility Locator application
- The Facility Locater API itself is stateless, and provides a clean, RESTful interface to one or more GIS systems that are the source of truth for VA facility data. VA stakeholders use these GIS systems as the data management tool to keep facility data up-to-date.
- There are two classes of facility relevant to this tool: VA facilities, and Non-VA "Choice Act" facilities. Information for the two classes of facility are provided by different data sources (both ArcGIS-based) with differing feature schemas.
- This API will align with the rest of vets-api in terms of any API-wide version paths, etc. So a proposed path of /foo should be understood to be relative to any additional vets-api prefix (currently /v0).
- There are two resource paths for this API:
  - Geographic facility search: GET /facilities?<query>
    - Query terms:
    - Geographic extent
    - Facility type - top level filter selecting all/health/benefits/cemeteries
    - Specific services available - filter list of health/benefits service types
  - Facility detail: GET /facilities/<facility_id>
    - Looks up a complete record of an individual facility by its unique ID.
 - The bare GET /facilities endpoint will be forbidden, as opposed to returning a list of all facilities.  
- *The API should define a maximum number of results to return for any given query. Otherwise a client could zoom out to the full extent of the US and generate a request all available VA facilities. The backend GIS API supports a limit parameter, but it is unknown how results are ordered.*
- The backend GIS API returns a single feature type, essentially a large flat JSON object for each facility. We expect we will want to massage this format into something more structured for consumption by the front end application. Exact format is to be determined.
- When a map view is populated by a facility search, it only needs a subset of facility information to populate the map markers. The facility search endpoint can return a smaller record for each facility to cut down on traffic. However, there might be a benefit to returning the full record - the frontend could optimistically use that info for display in a detailed facility view without incurring another round trip. We will assess the relative sizes of the full and reduced records to decide what to do here.
-*VA and Choice Act provider datasets have different lists of provider specialty services. If we want to provide a unified filtering mechansim we need an internal mapping between the service types.*
  
#[Facility Locator Schema] (https://github.com/department-of-veterans-affairs/vets.gov-team/blob/ead0fe129bfee6b8e7eaae59d7f4f681a37dec15/Products/Global/Facilities_Locator/EngFiles/FL%20Schema.md)
  {
  "data": [
    {
      "id": "[prepend administration type on the REST ID]",
      "type": "facilities",
      "attributes": {
        "name": "FULL_NAME",
        "unique_id": "CEMETERY_I",
        "facility_type": "va_cemetery",
        "classification": "CEM_TYPE",
        "lat": "Latitude",
        "long": "Longitude",
        "address": {
          "physical": {
            "physical_address_1": "CEMETERY_A",
            "physical_address_2": "CEMETERY_1",
            "physical_address_3": "",
            "physical_city": "CEMETERY_C",
            "physical_state": "CEMETERY_S",
            "physical_zip": "CEMETERY_Z"
          },
          "mailing": {
            "mailing_address_1": "MAIL_ADDRE",
            "mailing_address_2": "MAIL_ADD_1",
            "mailing_address_3": "",
            "mailing_city": "MAIL_CITY",
            "mailing_state": "MAIL_STATE",
            "mailing_zip": "MAIL_ZIP"
          }
        },
        "phone": {
          "main_phone": "PHONE",
          "after_hours_phone": "",
          "patient_advocate_phone": "",
          "enrollment_phone": "",
          "pharmacy_phone": "",
          "mental_health_phone": "",
          "main_fax": "FAX"
        },
        "hours": {
          "monday_hours": "",
          "tuesday_hours": "",
          "wednesday_hours": "",
          "thursday_hours": "",
          "friday_hours": "",
          "saturday_hours": "",
          "sunday_hours": "",
          "hours_notes": ""
        },
        "services": {
          "cemetery": {},
          "benefits": {},
          "health": {}
        }
      },
      "id": "[prepend administration type on the REST ID]",
      "type": "facilities",
      "attributes": {
        "name": "FacilityName",
        "unique_id": "FacilityNumber",
        "facility_type": "va_benefits_facility",
        "classification": "",
        "lat": "Latitude",
        "long": "Longitude",
        "address": {
          "physical": {
            "physical_address_1": "AddressLine1",
            "physical_address_2": "AddressLine2",
            "physical_address_3": "",
            "physical_city": "City",
            "physical_state": "State",
            "physical_zip": "ZipCode"
          },
          "mailing": {
          }
        },
        "phone": {
          "main_phone": "PhoneNumber",
          "after_hours_phone": "",
          "patient_advocate_phone": "",
          "enrollment_phone": "",
          "pharmacy_phone": "",
          "mental_health_phone": "",
          "main_fax": "FaxNumber"
        },
        "hours": {
          "monday_hours": "MondayHours",
          "tuesday_hours": "TuesdayHours",
          "wednesday_hours": "WednesdayHours",
          "thursday_hours": "ThursdayHours",
          "friday_hours": "FridayHours",
          "saturday_hours": "SaturdayHours",
          "sunday_hours": "SundayHours",
          "hours_notes": "HoursComments"
        },
        "services": {
          "cemetery": {},
          "benefits": {
              "standard": [
                "ApplyingForBenefits",
                "CareerCounseling",
                "SchoolAssistance",
                "VocationalRehabilitationCareerAssistance",
                "TransitionAssistance",
                "Pre-dischargeAssistance",
                "EmploymentAssistance",
                "FinancialCounseling",
                "HousingAssistance",
                "DisabilityClaimAssistance",
                "EducationClaimAssistance",
                "InsuranceClaimAssistance",
                "VocationalRehabilitationClaimAssistance",
                "SurvivorClaimAssistance",
                "UpdatingContactInformation",
                "UpdatingDirectDepositInformation",
                "BurialClaimAssistance",
                "eBenefitsLogonAssistance",
                "IntegratedDisabilityEvaluationSystem",
                "HomelessAssistance"
                ],
            "other": "OtherServicesOffered"
           },
          "health": {}
        }
      },
      "id": "[prepend administration type on the REST ID]",
      "type": "facilities",
      "attributes": {
        "name": "StationNam",
        "unique_id": "StationNum",
        "facility_type": "va_health_facility",
        "classification": "CocClassif",
        "lat": "Latitude",
        "long": "Longitude",
        "physical": {
          "physical_address_1": "Street",
          "physical_address_2": "Building",
          "physical_address_3": "Suite",
          "physical_city": "City",
          "physical_state": "State",
          "physical_zip": "[Zip - Zip4]"
        },
        "mailing": {
        }
      },
      "phone": {
        "main_phone": "MainPhone",
        "after_hours_phone": "AfterHours",
        "patient_advocate_phone": "PatientAdv",
        "enrollment_phone": "Enrollment",
        "pharmacy_phone": "PharmacyPh",
        "mental_health_phone": "",
        "main_fax": "MainFax"
      },
      "hours": {
        "monday_hours": "Monday",
        "tuesday_hours": "Tuesday",
        "wednesday_hours": "Wednesday",
        "thursday_hours": "Thursday",
        "friday_hours": "Friday",
        "saturday_hours": "Saturday",
        "sunday_hours": "Sunday",
        "hours_notes": ""
      },
      "services": {
        "cemetery": {},
        "benefits": {},
        "health": [
          {
            "L1": "Audiology",
            "L2": []
          },
          {
            "L1": "ComplementaryAlternativeMed",
            "L2": []
          },
          {
            "L1": "DentalServices",
            "L2": []
          },
          {
            "L1": "DiagnosticServices",
            "L2": [
              "ImagingAndRadiology",
              "LabServices"
            ]
          },
          {
            "L1": "EmergencyDept",
            "L2": []
          },
          {
            "L1": "EyeCare",
            "L2": []
          },
          {
            "L1": "MentalHealthCare",
            "L2": [
              "OutpatientMHCare",
              "OutpatientSpecMHCare",
              "VocationalAssistance"
            ]
          },
          {
            "L1": "OutpatientMedicalSpecialty",
            "L2": [
              "Podiatry",
              "AllergyAndImmunology",
              "CardiologyCareServices",
              "DermatologyCareServices",
              "Diabetes",
              "Dialysis",
              "Endocrinology",
              "Gastroenterology",
              "Hematology",
              "InfectiousDisease",
              "InternalMedicine",
              "Nephrology",
              "Neurology",
              "Oncology",
              "PulmonaryRespiratoryDisease",
              "Rheumatology",
              "SleepMedicine"
            ]
          },
          {
            "L1": "OutpatientSurgicalSpecialty",
            "L2": [
              "CardiacSurgery",
              "ColoRectalSurgery",
              "ENT",
              "GeneralSurgery",
              "Gynecology",
              "Neurosurgery",
              "Orthopedics",
              "PainManagement",
              "PlasticSurgery",
              "Podiatry",
              "ThoracicSurgery",
              "Urology",
              "VascularSurgery"
            ]
          },
          {
            "L1": "PrimaryCare",
            "L2": []
          },
          {
            "L1": "Rehabilitation",
            "L2": []
          },
          {
            "L1": "UrgentCare",
            "L2": []
          },
          {
            "L1": "WellnessAndPreventativeCare",
            "L2": []
          }
        ]
      }
    }
  ]
}
