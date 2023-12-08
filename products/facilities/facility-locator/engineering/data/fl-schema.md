```json
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

```
