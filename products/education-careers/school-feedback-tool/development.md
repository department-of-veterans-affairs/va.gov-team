## GI Bill School Feedback Tool Development

- Translations:
  1. rename anonymousEmail/applicantEmail to email
  2. serviceDateRange (from, to) must be flattened/renamed to enteredDuty & releaseFromDuty (both type: date)
  3. issue object must be converted into an array of strings 
  4. educationDetails.assistance: must be converted into an array of strings 
  5. educationDetails.programs: must be converted into an array of strings 
  6. facilityCode: should be used to obtain educationDetails.school.address
  7. international school address values for street, street2, state and postal code should be condensed into only the address and address2 fields

- Errata:
  - School address accepts country values other than 'US', maxLength 255
  - DOB removed

- [vets-json-schema](https://github.com/department-of-veterans-affairs/vets-json-schema/pull/228) (includes notes on UI and BE validation, translation for submit, outstanding questions/ongoing conversation)

- Case object mapping (includes extraneous attributes, these have been kept for reference/record)

| Case Object Field                                                              | Va.gov Field(s)                                                             | Was required on original tool | Is required on new tool | Case Type               | Va.gov Field Type | Values                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|--------------------------------------------------------------------------------|-------------------------------------------------------------------------------|-------------------------------|-------------------------|-------------------------|---------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| EDU_Complaints_Who_is_Filing__c                                                | Filing Information                                                            | No                            | Yes                     | Text (255 limit)        | Radio buttons       | Myself;Someones Else;Anonymous                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| EDU_Complaints_Service_Affiliation                                             | Service Affiliation Your Service Affiliation                                  | No                            | Yes                     | Text (255 limit)        | Dropdown            | Service Member;Spouse or Family Member;Veteran;Other                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| EDU_Complaints_Branch__c                                                       | Your Branch                                                                   | No                            | No                      | Text (255 limit)        | Dropdown            | Army;Navy;Marines;Air Force;Coast Guard;NOAA/PHS;                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| EDU_Complaints_Age__c                                                          | Age                                                                           | No                            | No                      | Text                    | Dropdown            | Less than 20 years old;20-29 years old;30-39 years old;40-49 years old;50-59 years old;60 years old and over;Do not wish to disclose;                                                                                                                                                                                                                                                                                                                                                                         |
| Prefix__c                                                                      | Prefix                                                                        | No                            | No                      | Picklist                | Dropdown            | Mr.;Mrs.;Ms.;Dr.;Other;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Submitted_First_Name__c                                                        | First Name                                                                    | No                            | Yes                     | Text (100 limit)        | Text                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Submitted_Middle_Name__c                                                       | Middle Name                                                                   | No                            | No                      | Text (100 limit)        | Text                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Submitted_Last_Name__c                                                         | Last Name                                                                     | No                            | Yes                     | Text (100 limit)        | Text                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Suffix__c                                                                      | Suffix                                                                        | No                            | No                      | Picklist                | Dropdown            | Jr.;III;IV;Sr.;Other;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Last_4_digits_of_SSN__c                                                        | SSN (last 4 digits)                                                           | N/A                           | N/A                     | Text                    | Text                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| EDU_Complaints_Date_EOD__c                                                     | Entered On Duty (EOD)                                                         | No                            | No                      | Date                    | Date                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| EDU_Complaints_Date_RAD__c                                                     | Release from Active Duty (RAD)                                                | NO                            | No                      | Date                    | Date                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Submitted_Address__c                                                           | Street address 1 + Steet address 2 (Optional)                                 | No                            | Yes                     | Text (1000 limit)       | Text                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| City__c                                                                        | City                                                                          | No                            | Yes                     | Text (25 limit)         | Text                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| State__c                                                                       | State                                                                         | No                            | Yes                     | Picklist                | Dropdown            | Alabama;Alaska;Arizona;Arkansas;California;Colorado;Connecticut;Delaware;District of Columbia;Florida;Georgia;Hawaii;Idaho;Illinois;Indiana;Iowa;Kansas;Kentucky;Louisiana;Maine;Maryland;Massachusetts;Michigan;Minnesota;Mississippi;Missouri;Montana;Nebraska;Nevada;New Hampshire;New Jersey;New Mexico;New York;North Carolina;North Dakota;Ohio;Oklahoma;Oregon;Pennsylvania;Rhode Island;South Carolina;South Dakota;Tennessee;Texas;Utah;Vermont;Virginia;Washington;West Virginia;Wisconsin;Wyoming; |
| VIEWS_Zip_Code__c                                                              | ZIP                                                                           | NO                            | Yes                     | Text (5)                | Text                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| EDU_Complaints_School_Name__c                                                  | School                                                                        | Yes                           | Yes                     | Text (255 limit)        | Text                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| EDU_Complaints_School_Address__c                                               | Street address 1 + Steet address 2 (Optional)                                 | No                            | Yes                     | Text (255 limit)        | Text                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| EDU_Complaints_School_City__c                                                  | City                                                                          | No                            | Yes                     | Text (255 limit)        | Text                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| EDU_Complaint_School_State__c                                                  | State                                                                         | No                            | Yes                     | Picklist                | Picklist            | Alabama;Alaska;Arizona;Arkansas;California;Colorado;Connecticut;Delaware;District of Columbia;Florida;Georgia;Hawaii;Idaho;Illinois;Indiana;Iowa;Kansas;Kentucky;Louisiana;Maine;Maryland;Massachusetts;Michigan;Minnesota;Mississippi;Missouri;Montana;Nebraska;Nevada;New Hampshire;New Jersey;New Mexico;New York;North Carolina;North Dakota;Ohio;Oklahoma;Oregon;Pennsylvania;Rhode Island;South Carolina;South Dakota;Tennessee;Texas;Utah;Vermont;Virginia;Washington;West Virginia;Wisconsin;Wyoming; |
| VIEWS_Zip_Code__c                                                              | ZIP                                                                           | No                            | Yes                     | Text (255 limit)        | Text                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| EDU_Complaints_Level_of_Study__c                                               | Level of Study                                                                | N/A                           | N/A                     | Text                    | Picklist            | Certificate/Diploma;Associates;Bachelors;Graduate/Professional;On-the-Job Training/Apprenticeship;                                                                                                                                                                                                                                                                                                                                                                                                            |
| EDU_Complaints_Government_Tuition_Credit__c                                    | Government Tuition Credit                                                     | N/A                           | N/A                     | Text                    | Picklist            | Less than $1,000;$1,000-$4,999;$5,000-$9,999;$10,000-$19,000;$20,000-$29,000;More than $30,000;                                                                                                                                                                                                                                                                                                                                                                                                               |
| EDU_Complaints_Out_of_Pocket_Tuition__c                                        | Out of Pocket Tuition                                                         | N/A                           | N/A                     | Text                    | Picklist            | Less than $1,000;$1,000-$4,999;$5,000-$9,999;$10,000-$19,000;$20,000-$29,000;More than $30,000;                                                                                                                                                                                                                                                                                                                                                                                                               |
| EDU_Complaints_VA_Education_Program__c                                         | Education Benefit(s) Used                                                     | Yes                           | Yes                     | Text (255 limit)        | Checkbox            | VA Education Programs (e.g. GI Bill);Post-9/11 GI Bill (Ch. 33);Montgomery GI Bill - Active Duty (MGIB) (Ch. 30);Montgomery GI Bill - Selected Reserve (MGIB-SR) (Ch. 1606);Tuition Assistance Top-Up;Survivors & Dependents Assistance (DEA) (Ch. 35);Vocational Rehabilitation and Employment (VR&E) (Ch. 31);                                                                                                                                                                                              |
| EDU_Complaints_VA_Mil_Tuition_Assitance__c                                     | VA Military Tuition Assistance (Title 10)                                     | No                            | No                      | Text (255 limit)        | Checkbox            | Federal Tuition Assistance (TA);State Funded Tuition Assistance (TA) for Service members performing Active Guard and Reserve (AGR) duties;Military Spouse Career Advancement Accounts (MyCAA);Federal Financial Aid;                                                                                                                                                                                                                                                                                          |
| EDU_Complaints_Issue__c                                                        | Describe Your Issue Which best describes your issue? (Select all that apply)* | Yes                           | Yes                     | Picklist (Multi-Select) | Checkbox            | Recruiting/Marketing Practices;Student Loans;Quality of Education;Transfer of Credits;Accreditation;Post-graduation;Job Opportunities;Grade Policy;Refund Issues;Financial Issues (e.g. Tuition/Fee charges);Change in degree plan/requirements;Release of Transcripts;                                                                                                                                                                                                                                       |
| Description__c                                                                 | Describe what happened so we can understand the issue.                        | Yes                           | Yes                     | Long Text (32000 limit) | Text                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Case_Resolution_Description__c                                                 | What do you think would be a fair resolution to your issue?                   | No                            | Yes                     | Long Text (1000 limit)  | Text                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| WebEmail                                                                       | Email address of vets.gov user                                                | No                            | Yes (if not anonymous)  | Email                   |                     | Captured by VIC information?                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Description__c                                                                 |                                                                               |                               |                         |                         |                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|                                                                                |                                                                               |                               |                         |                         |                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Set Case Origin to Web picklist option for all incoming feedback from Vets.gov |                                                                               |                               |                         |                         |                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |


- Example request JSON
```
{
  "on_behalf_of": "Myself",
  "service_branch": "Army",
  "service_affiliation": "Spouse or Family Member",
  "entered_duty":"2000-01-01",
  "release_from_duty":"2000-01-01",
  "dob":"2000-01-01",
  "full_name": {
    "prefix": "Mr.",
    "first": "Test",
    "middle": "middle",
    "last": "User",
    "suffix": "Jr."
  },
  "address": {
    "street": "123 Main St",
    "street2": "apt 1",
    "city": "Milwaukee",
    "postal_code": "53130",
    "state": "WI",
    "country": "US"
  },
  "profile_data": {
    "active_ICN":"1234567890",
    "historical_ICN": [
      "7598562344",
      "999999999"
    ],
    "sec_ID":"dn49hd743hnf07423hr",
    "SSN":"123-45-6789"
  },
  "education_details": {
    "school": {
      "name":"Test University",
      "address": {
        "street": "123 Maple St",
        "street2": "apt 1",
        "city": "Milwaukee",
        "postal_code": "53130",
        "state": "WI",
        "country": "US"
      }
    },
    "programs": [
      "Post-9/11 GI Bill (Ch. 33)",
      "Survivors & Dependents Assitance (DEA) (Ch. 35)"
    ],
    "assistance": [
      "Federal Tuition Assistance (TA)",
      "Federal Financial Aid"
    ]
  },
  "issue": [
    "student_loans",
    "credit_transfer",
    "financial_issues"
  ],
  "issue_description": "Test issue description",
  "issue_resolution": "Test issue resolution",
  "phone": "5555555555",
  "email":"foo@foo.com"
}
```
- Example response
```
{
  "original_request": {
    "on_behalf_of": "Myself",
    "service_branch": "Army",
    "service_affiliation": "Spouse or Family Member",
    "entered_duty":"2000-01-01",
    "release_from_duty":"2000-01-01",
    "dob":"2000-01-01",
    "full_name": {
      "prefix": "Mr.",
      "first": "Test",
      "middle": "middle",
      "last": "User",
      "suffix": "Jr."
    },
    "address": {
      "street": "123 Main St",
      "street2": "apt 1",
      "city": "Milwaukee",
      "postal_code": "53130",
      "state": "WI",
      "country": "US"
    },
    "profile_data": {
      "active_ICN":"1234567890",
      "historical_ICN": [
        "7598562344",
        "999999999"
      ],
      "sec_ID":"dn49hd743hnf07423hr",
      "SSN":"123-45-6789"
    },
    "education_details": {
      "school": {
        "name":"Test University",
        "address": {
          "street": "123 Maple St",
          "street2": "apt 1",
          "city": "Milwaukee",
          "postal_code": "53130",
          "state": "WI",
          "country": "US"
        }
      },
      "programs": [
        "Post-9/11 GI Bill (Ch. 33)",
        "Survivors & Dependents Assitance (DEA) (Ch. 35)"
      ],
      "assistance": [
        "Federal Tuition Assistance (TA)",
        "Federal Financial Aid"
      ]
    },
    "issue": [
      "student_loans",
      "credit_transfer",
      "financial_issues"
    ],
    "issue_description": "Test issue description",
    "issue_resolution": "Test issue resolution",
    "phone": "5555555555",
    "email":"foo@foo.com"
  },
  "case_id":"500000000000000AAA",
  "case_number":"00000000",
  "message":"Success"
}
```
