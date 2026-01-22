# API Data Validation Logic: POST /inquiries

## 1. Document Metadata
* **API Endpoint:** `POST /ask_va_api/v0/inquiries` and `POST /ask_va_api/v0/inquiries/auth`
* **Version:** 0.0.1
* **Last Updated:** 2025-12-16
* **Common description:** React App (VETS-Website) >> Ruby API (VETS-API)

## 2. Fields, Flow, and Validation

### Fields

The app utilizes the VA Design System and the Forms library to gatther information from the user and submit it via the API.  

| Field Name                         | Object Name                | Type     |
|------------------------------------|----------------------------|----------|
| aboutYourself                      | (root)                     | Object   |
| first                              | aboutYourself              | String   |
| last                               | aboutYourself              | String   |
| suffix                             | aboutYourself              | String   |
| dateOfBirth                        | aboutYourself              | String   |
| socialOrServiceNum                 | aboutYourself              | Object   |
| ssn                                | socialOrServiceNum         | String   |
| serviceNumber                      | socialOrServiceNum         | String   |
| hasPrefillInformation              | (root)                     | Boolean  |
| initialFormData                    | (root)                     | Object   |
| categoryId                         | (root)                     | String   |
| selectCategory                     | (root)                     | String   |
| allowAttachments                   | (root)                     | Boolean  |
| contactPreferences                 | (root)                     | Any      |
| categoryRequiresSignIn             | (root)                     | Boolean  |
| requireSignInLogic                 | (root)                     | Object   |
| category                           | requireSignInLogic         | Boolean  |
| topic                              | requireSignInLogic         | Boolean  |
| personQuestionIsAbout              | requireSignInLogic         | Boolean  |
| selectTopic                        | (root)                     | String   |
| topicId                            | (root)                     | String   |
| topicRequiresSignIn                | (root)                     | Boolean  |
| selectSubtopic                     | (root)                     | String   |
| subtopicId                         | (root)                     | String   |
| whoIsYourQuestionAbout             | (root)                     | String   |
| yourQuestionRequiresSignIn         | (root)                     | Boolean  |
| stateOrResidency                   | (root)                     | Object   |
| schoolState                        | stateOrResidency           | String   |
| residencyState                     | stateOrResidency           | String   |
| stateOfTheSchool                   | (root)                     | Null     |
| yourHealthFacility                 | (root)                     | Object   |
| aboutTheFamilyMember               | (root)                     | Object   |
| first                              | aboutTheFamilyMember       | String   |
| middle                             | aboutTheFamilyMember       | String   |
| last                               | aboutTheFamilyMember       | String   |
| suffix                             | aboutTheFamilyMember       | String   |
| socialOrServiceNum                 | aboutTheFamilyMember       | Object   |
| ssn                                | socialOrServiceNum         | String   |
| dateOfBirth                        | aboutTheFamilyMember       | String   |
| aboutTheVeteran                    | (root)                     | Object   |
| first                              | aboutTheVeteran            | String   |
| middle                             | aboutTheVeteran            | String   |
| last                               | aboutTheVeteran            | String   |
| suffix                             | aboutTheVeteran            | String   |
| isVeteranDeceased                  | aboutTheVeteran            | Boolean  |
| socialOrServiceNum                 | aboutTheVeteran            | Object   |
| ssn                                | socialOrServiceNum         | String   |
| serviceNumber                      | socialOrServiceNum         | String   |
| branchOfService                    | aboutTheVeteran            | String   |
| dateOfBirth                        | aboutTheVeteran            | String   |
| dateOfDeath                        | (root)                     | String   |
| familyMembersLocationOfResidence   | (root)                     | String   |
| familyMembersPostalCodePage        | (root)                     | Object   |
| familyMemberPostalCode             | familyMembersPostalCodePage | String   |
| isQuestionAboutVeteranOrSomeoneElse| (root)                     | String   |
| moreAboutYourRelationshipToVeteran | (root)                     | String   |
| aboutYourRelationshipToFamilyMember| (root)                     | String   |
| relationshipToVeteran              | (root)                     | String   |
| relationshipNotListed              | (root)                     | String   |
| useSchoolInProfile                 | (root)                     | String   |
| searchSchoolsPage                  | (root)                     | Object   |
| school                             | searchSchoolsPage          | String   |
| stateOfFacilityPage                | (root)                     | Object   |
| stateOfTheFacility                 | stateOfFacilityPage        | String   |
| stateOfProperty                    | (root)                     | Object   |
| stateOfProperty                    | stateOfProperty            | String   |
| stateOfSchoolPage                  | (root)                     | Object   |
| stateOfTheSchool                   | stateOfSchoolPage          | String   |
| stateOrFacility                    | (root)                     | String   |
| theirRelationshipToVeteran         | (root)                     | String   |
| theyHaveRelationshipNotListed      | (root)                     | String   |
| theirVRECounselor                  | (root)                     | Object   |
| theirVRECounselor                  | theirVRECounselor          | String   |
| theirVREInformation                | (root)                     | Boolean  |
| useSchool                          | (root)                     | Boolean  |
| veteransLocationOfResidencePage    | (root)                     | Object   |
| veteransLocationOfResidence        | veteransLocationOfResidencePage | String   |
| veteransPostalCode                 | (root)                     | String   |
| yourBranchOfService                | (root)                     | String   |
| phoneNumber                        | (root)                     | String   |
| emailAddress                       | (root)                     | String   |
| businessPhone                      | (root)                     | String   |
| businessEmail                      | (root)                     | String   |
| contactPreference                  | (root)                     | String   |
| preferredName                      | (root)                     | String   |
| yourLocationOfResidence            | (root)                     | String   |
| yourPostalCode                     | (root)                     | String   |
| yourRole                           | (root)                     | String   |
| yourVRECounselorPage               | (root)                     | Object   |
| yourVRECounselor                   | yourVRECounselorPage       | String   |
| yourVREInformation                 | (root)                     | Boolean  |
| files                              | (root)                     | Array    |
| SchoolObj                          | (root)                     | Object   |
| InstitutionName                    | SchoolObj                  | String   |
| SchoolFacilityCode                 | SchoolObj                  | String   |
| StateAbbreviation                  | SchoolObj                  | String   |
| requireSignIn                      | (root)                     | Boolean  |
| onBaseOutsideUS                    | (root)                     | Boolean  |
| country                            | (root)                     | String   |
| address                            | (root)                     | Object   |
| militaryAddress                    | address                    | Object   |
| militaryPostOffice                 | militaryAddress            | String   |
| militaryState                      | militaryAddress            | String   |
| emailAddress                       | (root)                     | String   |
| phoneNumber                        | (root)                     | String   |

### Flow and Validation

- [Your Personal Information](https://github.com/department-of-veterans-affairs/vets-website/blob/b3bccacfa202c36dfe4c0f63a0c33de51ec341e0/src/applications/ask-va/components/YourPersonalInformationAuthenticated.jsx)

| Field Name            | Object Name         | Type     | Brief Logic                                                                                                |
|-----------------------|--------------------|----------|------------------------------------------------------------------------------------------------------------|
| aboutYourself | (root) | Object | aboutYourself object with name, date of birth, SSN, and serviceNumber | 
| first                 | aboutYourself      | String   | User's first name, from formData.aboutYourself.first                                                        |
| last                  | aboutYourself      | String   | User's last name, from formData.aboutYourself.last                                                          |
| dateOfBirth           | aboutYourself      | String   | ISO string for date of birth, from formData.aboutYourself.dateOfBirth                                       |
| socialOrServiceNum    | aboutYourself      | Object   | Object containing social security and/or service number fields                                               |
| ssn                   | socialOrServiceNum | String   | User's SSN, shown as masked except last 4 digits if present, from formData.aboutYourself.socialOrServiceNum.ssn |
| serviceNumber         | socialOrServiceNum | String   | User's service number (alternative to SSN), from formData.aboutYourself.socialOrServiceNum.serviceNumber     |

- [Reusable About Yourself](https://github.com/department-of-veterans-affairs/vets-website/blob/b3bccacfa202c36dfe4c0f63a0c33de51ec341e0/src/applications/ask-va/config/schema-helpers/personalInformationHelper.js#L50)

| Field Name               | Object Name          | Type     | Required                                                                          | Pattern     | MinLength | Max Length |
|--------------------------|---------------------|----------|------------------------------------------------------------------------------------|-------------|-----------|------------|
| first                    |                     | string   | yes (personalInformationFormSchemas, aboutYourselfGeneralSchema)                   | ^[^0-9]*$   | 1         | 30         |
| middle                   |                     | string   | no                                                                                 | ^[^0-9]*$   | 1         | 30         |
| last                     |                     | string   | yes (personalInformationFormSchemas, aboutYourselfGeneralSchema)                   | ^[^0-9]*$   | 1         | 30         |
| suffix                   |                     | string   | no                                                                                 |             |           |            |
| isVeteranDeceased        |                     | boolean  | no                                                                                 |             |           |            |
| socialOrServiceNum       |                     | object   | no                                                                                 |             |           |            |
| ssn                      | socialOrServiceNum  | string   | no (see schema)                                                                    | (from ssnSchema) |      |            |
| serviceNumber            | socialOrServiceNum  | string   | no (see schema)                                                                    | (from serviceNumberSchema)| |           |
| dateOfBirth              |                     | string   | yes*                                                                               | (from dateOfBirthSchema) | |           |
| branchOfService          |                     | string   | yes*                                                                               |             |           |            |


- [Select Category](https://github.com/department-of-veterans-affairs/vets-website/blob/b3bccacfa202c36dfe4c0f63a0c33de51ec341e0/src/applications/ask-va/containers/CategorySelectPage.jsx)

| Field Name             | Object Name           | Type     | Brief Logic                                                                                                                     |
|------------------------|----------------------|----------|----------------------------------------------------------------------------------------------------------------------------------|
| hasPrefillInformation  |                      | Boolean  | Result of hasPrefillInformation(formData)                                                                                        |
| initialFormData        |                      | Object   | Cloned as {...formData} or {...formData.initialFormData}; keeps initial state                                                    |
| categoryId             |                      | String   | The selected category's id                                                                                                       |
| selectCategory         |                      | String   | The name of the selected category                                                                                                |
| allowAttachments       |                      | Boolean  | Pulled from selected.attributes.allowAttachments; whether the category allows attachments                                        |
| contactPreferences     |                      | Any      | Pulled from selected.attributes.contactPreferences; passes-through value from the selected category                              |
| categoryRequiresSignIn |                      | Boolean  | True if category requires authentication and user is not LOA3 (i.e., selected.attributes.requiresAuthentication && !isLOA3)      |
| requireSignInLogic     |                      | Object   | Logic-tracking object for requirements to sign in for different form sections                                                    |
| category              | requireSignInLogic    | Boolean  | Tracks if selected.attributes.requiresAuthentication for category                                                                |
| topic                 | requireSignInLogic    | Boolean  | Always set to false when initializing from scratch; otherwise preserved from formData.requireSignInLogic.topic                  |
| personQuestionIsAbout  | requireSignInLogic   | Boolean  | Always set to false when initializing from scratch; otherwise preserved from formData.requireSignInLogic.personQuestionIsAbout  |

- [Select Topic](https://github.com/department-of-veterans-affairs/vets-website/blob/b3bccacfa202c36dfe4c0f63a0c33de51ec341e0/src/applications/ask-va/containers/TopicSelectPage.jsx)

| Field Name             | Object Name          | Type     | Brief Logic                                                                                                      |
|------------------------|---------------------|----------|------------------------------------------------------------------------------------------------------------------|
| selectTopic            |                     | String   | Set to the value of the selected topic (`selectedValue`) or '' if nothing is selected                            |
| topicId                |                     | String   | Set to the selected topic's ID or null if nothing is selected                                                    |
| topicRequiresSignIn    |                     | Boolean  | True if the selected topic requires authentication and the user is not LOA3; otherwise, false                    |
| contactPreferences     |                     | Any      | Set to `selected.attributes.contactPreferences` of the selected topic                                            |
| requireSignInLogic     |                     | Object   | An object with keys category, topic, personQuestionIsAbout: indicates which field(s) require authentication      |
| category             | requireSignInLogic  | Boolean  | False when requireSignInLogic is created for a topic selection                                                   |
| topic                | requireSignInLogic  | Boolean  | Set to whether the selected topic requires authentication                                                        |
| personQuestionIsAbout| requireSignInLogic  | Boolean  | False when requireSignInLogic is created for a topic selection                                                   |

- [Select Subtopic](https://github.com/department-of-veterans-affairs/vets-website/blob/b3bccacfa202c36dfe4c0f63a0c33de51ec341e0/src/applications/ask-va/containers/SubTopicSelectPage.jsx)

| Field Name     | Object Name | Type    | Brief Logic                                                                                           |
|----------------|-------------|---------|-------------------------------------------------------------------------------------------------------|
| selectSubtopic |             | String  | Set to the selected subtopic's name from the radio button selection.                                   |
| subtopicId     |             | String  | Set to the selected subtopic's `id` value from the API data.                                           |


- [Who Is Your Question About](https://github.com/department-of-veterans-affairs/vets-website/blob/b3bccacfa202c36dfe4c0f63a0c33de51ec341e0/src/applications/ask-va/containers/WhoIsYourQuestionAboutCustomPage.jsx)

| Field Name                | Object Name           | Type    | Brief Logic                                                                                                                                                                                                                                  |
|---------------------------|----------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| whoIsYourQuestionAbout    |                      | String  | Set to the selected radio value (label) from whoIsYourQuestionAboutLabels                                                                                                                             |
| yourQuestionRequiresSignIn|                      | Boolean | True if selected value is "Myself" or "Someone else" and not LOA3; otherwise false                                                                                                                    |
| requireSignInLogic        |                      | Object  | An (possibly new) object storing sign-in requirement logic fields                                                                                                                                    |
| personQuestionIsAbout     | requireSignInLogic   | Boolean | True if selected value is "Myself" or "Someone else". Always set (either when object exists, or in a new object initialized with {category: false, topic: false, ...})                                |
| category                  | requireSignInLogic   | Boolean | Only set to false if a new requireSignInLogic object is created (not present otherwise)                                                                        |
| topic                     | requireSignInLogic   | Boolean | Only set to false if a new requireSignInLogic object is created (not present otherwise)                                                                        |

- [School State or Residency State](https://github.com/department-of-veterans-affairs/vets-website/blob/b3bccacfa202c36dfe4c0f63a0c33de51ec341e0/src/applications/ask-va/containers/SchoolStateOrResidencyStatePage.jsx)

| Field Name           | Object Name        | Type    | Brief Logic                                                                                   |
|----------------------|-------------------|---------|-----------------------------------------------------------------------------------------------|
| stateOrResidency     |                   | Object  | Added/spread into formData; contains selected school and residency states                      |
| schoolState          | stateOrResidency  | String  | Value selected from the "School state" VaSelect dropdown                                      |
| residencyState       | stateOrResidency  | String  | Value selected from the "Residency state" VaSelect dropdown                                   |
| stateOfTheSchool     |                   | null    | Always set to null when either schoolState or residencyState selection changes                |

- [Your VA Health Facility](https://github.com/department-of-veterans-affairs/vets-website/blob/b3bccacfa202c36dfe4c0f63a0c33de51ec341e0/src/applications/ask-va/containers/YourVAHealthFacility.jsx)

| Field Name         | Object Name         | Type     | Brief Logic                                                                           |
|--------------------|--------------------|----------|---------------------------------------------------------------------------------------|
| yourHealthFacility |                    | Object      | See /health_facilities in the API             |

- Chapter 3 Conditional Forms
  - The required attributes is only required if the form is invoked
  - From the API perspective, these are optional, but could be required based on the scenarios

- [aboutTheFamilyMember](https://github.com/department-of-veterans-affairs/vets-website/blob/b3bccacfa202c36dfe4c0f63a0c33de51ec341e0/src/applications/ask-va/config/chapters/personalInformation/aboutTheFamilyMember.js#L49)

| Field Name          | Object Name           | Type     | Required                | Pattern     | MinLength | Max Length |
|---------------------|----------------------|----------|-------------------------|-------------|-----------|------------|
| aboutTheFamilyMember|                      | Object   | yes (overall object)    |             |           |            |
| first               | aboutTheFamilyMember | String   | no (schema), yes (UI)   | ^[^0-9]*$   | 1         | 30         |
| middle              | aboutTheFamilyMember | String   | no                      | ^[^0-9]*$   | 1         | 30         |
| last                | aboutTheFamilyMember | String   | no (schema), yes (UI)   | ^[^0-9]*$   | 1         | 30         |
| suffix              | aboutTheFamilyMember | String   | no                      |             |           |            |
| socialOrServiceNum  | aboutTheFamilyMember | Object   | no                      |             |           |            |
| ssn                 | socialOrServiceNum   | String   | yes                     | (from ssnSchema) |      |            |
| dateOfBirth         | aboutTheFamilyMember | String   | yes                     | (from dateOfBirthSchema) | |            |

- [aboutTheVeteran](https://github.com/department-of-veterans-affairs/vets-website/blob/b3bccacfa202c36dfe4c0f63a0c33de51ec341e0/src/applications/ask-va/config/chapters/personalInformation/aboutTheVeteran.js#L119)

| Field Name           | Object Name         | Type     | Required                                                               | Pattern    | MinLength | Max Length |
|----------------------|--------------------|----------|------------------------------------------------------------------------|------------|-----------|------------|
| aboutTheVeteran      |                    | Object   | yes (object itself)                                                    |            |           |            |
| first                | aboutTheVeteran    | String   | yes                                                                    | ^[^0-9]*$  | 1         | 30         |
| middle               | aboutTheVeteran    | String   | no                                                                     | ^[^0-9]*$  | 1         | 30         |
| last                 | aboutTheVeteran    | String   | yes                                                                    | ^[^0-9]*$  | 1         | 30         |
| suffix               | aboutTheVeteran    | String   | no                                                                     |            |           |            |
| isVeteranDeceased    | aboutTheVeteran    | Boolean  | yes                                                                    |            |           |            |
| socialOrServiceNum   | aboutTheVeteran    | Object   | no                                                                     |            |           |            |
| ssn                  | socialOrServiceNum | String   | no                                                                     | (pattern in ssnSchema) |      |            |
| serviceNumber        | socialOrServiceNum | String   | no                                                                     | (pattern in serviceNumberSchema) |      |            |
| branchOfService      | aboutTheVeteran    | String   | no (depends on isBranchOfServiceRequired(formData))                    | Enum (branchesOfService) |   |            |
| dateOfBirth          | aboutTheVeteran    | String   | yes                                                                    | (pattern in dateOfBirthSchema)   |      |            |

- [aboutYourselfRelationshipFamilyMember](https://github.com/department-of-veterans-affairs/vets-website/blob/b3bccacfa202c36dfe4c0f63a0c33de51ec341e0/src/applications/ask-va/config/chapters/personalInformation/aboutYourselfRelationshipFamilyMember.js#L61)

| Field Name         | Object Name           | Type     | Required                                    | Pattern    | MinLength | Max Length |
|--------------------|----------------------|----------|---------------------------------------------|------------|-----------|------------|
| aboutYourself      |                      | Object   | yes                                         |            |           |            |
| first              | aboutYourself        | string   | yes                                         | ^[^0-9]*$  | 1         | 30         |
| middle             | aboutYourself        | string   | no                                          | ^[^0-9]*$  | 1         | 30         |
| last               | aboutYourself        | string   | yes                                         | ^[^0-9]*$  | 1         | 30         |
| suffix             | aboutYourself        | string   | no                                          |            |           |            |
| socialOrServiceNum | aboutYourself        | Object   | no (but `ssn` inside is required)           |            |           |            |
| ssn                | socialOrServiceNum   | string   | yes                                         | (from ssnSchema) |     |      |
| dateOfBirth        | aboutYourself        | string   | yes                                         | (from dateOfBirthSchema) |   |    |

- [deathDate](https://github.com/department-of-veterans-affairs/vets-website/blob/b3bccacfa202c36dfe4c0f63a0c33de51ec341e0/src/applications/ask-va/config/chapters/personalInformation/deathDate.js#L40)

| Field Name     | Object Name | Type   | Required                              | Pattern | MinLength | Max Length |
|----------------|-------------|--------|---------------------------------------|---------|-----------|------------|
| dateOfDeath    |  | string | yes                                   |         |           |            |


- [familyMembersLocationOfResidence](https://github.com/department-of-veterans-affairs/vets-website/blob/b3bccacfa202c36dfe4c0f63a0c33de51ec341e0/src/applications/ask-va/config/chapters/personalInformation/familyMembersLocationOfResidence.js#L18)

| Field Name                         | Object Name                        | Type    | Required                                | Pattern | MinLength | Max Length |
|-------------------------------------|------------------------------------|---------|-----------------------------------------|---------|-----------|------------|
| familyMembersLocationOfResidence    |                                    | string  | yes (required in root object)           |         |           |            |

- [familyMembersPostalCode](https://github.com/department-of-veterans-affairs/vets-website/blob/b3bccacfa202c36dfe4c0f63a0c33de51ec341e0/src/applications/ask-va/config/chapters/personalInformation/familyMembersPostalCode.js#L21)

| Field Name             | Object Name | Type    | Required | Pattern                           | MinLength | Max Length |
|------------------------|-------------|---------|----------|-----------------------------------|-----------|------------|
| familyMembersPostalCodePage |             | Object  |          |                                   |           |            |
| familyMemberPostalCode | familyMembersPostalCodePage | String  | yes      | ^[0-9]{5}(?:-[0-9]{4})?$         |           | 10         |

- [isQuestionAboutVeteranOrSomeoneElse](https://github.com/department-of-veterans-affairs/vets-website/blob/b3bccacfa202c36dfe4c0f63a0c33de51ec341e0/src/applications/ask-va/config/chapters/personalInformation/isQuestionAboutVeteranOrSomeoneElse.js#L21)

| Field Name                           | Object Name  | Type     | Required                                                         | Pattern | MinLength | Max Length |
|--------------------------------------|--------------|----------|------------------------------------------------------------------|---------|-----------|------------|
| isQuestionAboutVeteranOrSomeoneElse  |              | string   | yes (required in schema: ['isQuestionAboutVeteranOrSomeoneElse'])|         |           |            |

- [moreAboutYourRelationshipToVeteran](https://github.com/department-of-veterans-affairs/vets-website/blob/b3bccacfa202c36dfe4c0f63a0c33de51ec341e0/src/applications/ask-va/config/chapters/personalInformation/moreAboutYourRelationshipToVeteran.js#L49)

| Field Name                         | Object Name                          | Type     | Required                                                                 | Pattern | MinLength | Max Length |
|------------------------------------|--------------------------------------|----------|--------------------------------------------------------------------------|---------|-----------|------------|
| moreAboutYourRelationshipToVeteran |                                      | string   | yes (always required by schema and uiSchema)                             |         |           |            |
| relationshipNotListed              |                                      | string   | yes (required if not collapsed/expanded, i.e., when "NOT_LISTED" chosen) |         |           |            |

- [relationshipToFamilyMember](https://github.com/department-of-veterans-affairs/vets-website/blob/b3bccacfa202c36dfe4c0f63a0c33de51ec341e0/src/applications/ask-va/config/chapters/personalInformation/relationshipToFamilyMember.js#L50)

| Field Name                           | Object Name | Type    | Required                                                                             | Pattern | MinLength | Max Length |
|--------------------------------------|-------------|---------|--------------------------------------------------------------------------------------|---------|-----------|------------|
| aboutYourRelationshipToFamilyMember  |             | String  | yes                                                                                  |         |           |            |
| relationshipNotListed                |             | String  | Conditionally required if aboutYourRelationshipToFamilyMember === 'NOT_LISTED'        |         |           |            |

- [relationshipToVeteran](https://github.com/department-of-veterans-affairs/vets-website/blob/b3bccacfa202c36dfe4c0f63a0c33de51ec341e0/src/applications/ask-va/config/chapters/personalInformation/relationshipToVeteran.js#L47)

| Field Name              | Object Name | Type   | Required | Pattern | MinLength | Max Length |
|-------------------------|-------------|--------|----------|---------|-----------|------------|
| relationshipToVeteran   |             | String | yes      |         |           |            |

- [schoolInYourProfile](https://github.com/department-of-veterans-affairs/vets-website/blob/b3bccacfa202c36dfe4c0f63a0c33de51ec341e0/src/applications/ask-va/config/chapters/personalInformation/schoolInYourProfile.js#L21)

| Field Name           | Object Name | Type    | Required            | Pattern | MinLength | Max Length |
|----------------------|-------------|---------|---------------------|---------|-----------|------------|
| useSchoolInProfile   |             | String  | yes                 |         |           |            |

- [searchSchools](https://github.com/department-of-veterans-affairs/vets-website/blob/b3bccacfa202c36dfe4c0f63a0c33de51ec341e0/src/applications/ask-va/config/chapters/personalInformation/searchSchools.js#L18)

| Field Name  | Object Name | Type   | Required                         | Pattern | MinLength | Max Length |
|-------------|-------------|--------|----------------------------------|---------|-----------|------------|
| searchSchoolsPage |             | Object |                                  |         |           |            |
| school      | searchSchoolsPage | String | yes (required: ['school'])        |         |           |            |

- [stateOfFacility](https://github.com/department-of-veterans-affairs/vets-website/blob/b3bccacfa202c36dfe4c0f63a0c33de51ec341e0/src/applications/ask-va/config/chapters/personalInformation/stateOfFacility.js#L15)

| Field Name           | Object Name           | Type    | Required             | Pattern | MinLength | Max Length |
|----------------------|----------------------|---------|----------------------|---------|-----------|------------|
| stateOfFacilityPage  |                      | Object  |                      |         |           |            |
| stateOfTheFacility   | stateOfFacilityPage  | string  | yes (required array) |         |           |            |

- [stateOfProperty](https://github.com/department-of-veterans-affairs/vets-website/blob/b3bccacfa202c36dfe4c0f63a0c33de51ec341e0/src/applications/ask-va/config/chapters/personalInformation/stateOfProperty.js#L20)

| Field Name         | Object Name       | Type     | Required               | Pattern | MinLength | Max Length|
|--------------------|------------------|----------|------------------------|---------|-----------|-----------|
| stateOfProperty    |                  | Object   |                        |         |           |           |
| stateOfProperty    | stateOfProperty  | string   | yes                    |         |           |           |

- [stateOfSchool](https://github.com/department-of-veterans-affairs/vets-website/blob/b3bccacfa202c36dfe4c0f63a0c33de51ec341e0/src/applications/ask-va/config/chapters/personalInformation/stateOfSchool.js#L16)

| Field Name         | Object Name        | Type   | Required               | Pattern | MinLength | Max Length |
|--------------------|-------------------|--------|------------------------|---------|-----------|------------|
| stateOfSchoolPage  |                   | Object |                        |         |           |            |
| stateOfTheSchool   | stateOfSchoolPage | String | yes (required in page) |         |           |            |

- [stateOrFacility](https://github.com/department-of-veterans-affairs/vets-website/blob/b3bccacfa202c36dfe4c0f63a0c33de51ec341e0/src/applications/ask-va/config/chapters/personalInformation/stateOrFacility.js#L20)

| Field Name        | Object Name        | Type     | Required           | Pattern | MinLength | Max Length |
|-------------------|-------------------|----------|--------------------|---------|-----------|------------|
| stateOrFacility   |                   | String   | yes                |         |           |            |

- [theirRelationshipToVeteran](https://github.com/department-of-veterans-affairs/vets-website/blob/b3bccacfa202c36dfe4c0f63a0c33de51ec341e0/src/applications/ask-va/config/chapters/personalInformation/theirRelationshipToVeteran.js#L50)

| Field Name                        | Object Name | Type    | Required                                                                          | Pattern | MinLength | Max Length |
|-----------------------------------|-------------|---------|-----------------------------------------------------------------------------------|---------|-----------|------------|
| theirRelationshipToVeteran        |             | string  | yes (always required)                                                              |         |           |            |
| theyHaveRelationshipNotListed     |             | string  | yes (required when 'theirRelationshipToVeteran' is 'NOT_LISTED')                  |         |           |            |

- [theirVRECounselor](https://github.com/department-of-veterans-affairs/vets-website/blob/b3bccacfa202c36dfe4c0f63a0c33de51ec341e0/src/applications/ask-va/config/chapters/personalInformation/theirVRECounselor.js#L21)

| Field Name         | Object Name         | Type    | Required                       | Pattern | MinLength | Max Length |
|--------------------|--------------------|---------|--------------------------------|---------|-----------|------------|
| theirVRECounselor  |                    | Object  | Yes                            |         |           |            |
| theirVRECounselor  | theirVRECounselor  | String  | Yes (parent: theirVRECounselor)|         |           |            |

- [theirVREInformation](https://github.com/department-of-veterans-affairs/vets-website/blob/b3bccacfa202c36dfe4c0f63a0c33de51ec341e0/src/applications/ask-va/config/chapters/personalInformation/theirVREInformation.js#L18)

| Field Name            | Object Name           | Type    | Required                                 | Pattern | MinLength | Max Length |
|---------------------- |----------------------|---------|------------------------------------------|---------|-----------|------------|
| theirVREInformation   |                      | Boolean | yes (in root object `theirVREInformationPage`) |         |           |            |

- [useThisSchool](https://github.com/department-of-veterans-affairs/vets-website/blob/b3bccacfa202c36dfe4c0f63a0c33de51ec341e0/src/applications/ask-va/config/chapters/personalInformation/useThisSchool.js#L21)

| Field Name  | Object Name | Type    | Required | Pattern | MinLength | Max Length |
|-------------|-------------|---------|----------|---------|-----------|------------|
| useSchool   |             | Boolean | yes      |         |           |            |

- [veteransLocationOfResidence](https://github.com/department-of-veterans-affairs/vets-website/blob/b3bccacfa202c36dfe4c0f63a0c33de51ec341e0/src/applications/ask-va/config/chapters/personalInformation/veteransLocationOfResidence.js#L18)

| Field Name                     | Object Name                    | Type    | Required                          | Pattern | MinLength | Max Length |
|--------------------------------|-------------------------------|---------|-----------------------------------|---------|-----------|------------|
| veteransLocationOfResidencePage |                               | Object  |                                   |         |           |            |
| veteransLocationOfResidence     | veteransLocationOfResidencePage | String  | yes                               |         |           |            |

- [veteransPostalCode](https://github.com/department-of-veterans-affairs/vets-website/blob/b3bccacfa202c36dfe4c0f63a0c33de51ec341e0/src/applications/ask-va/config/chapters/personalInformation/veteransPostalCode.js#L21)

| Field Name           | Object Name           | Type    | Required | Pattern                            | MinLength | Max Length |
|----------------------|----------------------|---------|----------|-------------------------------------|-----------|------------|
| veteransPostalCode   |                      | string  | yes      | ^[0-9]{5}(?:-[0-9]{4})?$            |           | 10         |

- [yourBranchOfService](https://github.com/department-of-veterans-affairs/vets-website/blob/b3bccacfa202c36dfe4c0f63a0c33de51ec341e0/src/applications/ask-va/config/chapters/personalInformation/yourBranchOfService.js#L19)

| Field Name           | Object Name    | Type    | Required                | Pattern | MinLength | Max Length |
|----------------------|---------------|---------|-------------------------|---------|-----------|------------|
| yourBranchOfService  |               | string  | yes                     |         |           |            |

- [yourContactInformation](https://github.com/department-of-veterans-affairs/vets-website/blob/b3bccacfa202c36dfe4c0f63a0c33de51ec341e0/src/applications/ask-va/config/chapters/personalInformation/yourContactInformation.js#L155)

| Field Name        | Object Name | Type     | Required                                   | Pattern          | MinLength | Max Length |
|-------------------|-------------|----------|--------------------------------------------|------------------|-----------|------------|
| phoneNumber       |             | string   | yes                                        |                  |           |            |
| emailAddress      |             | string   | yes                                        |                  |           |            |
| businessPhone     |             | string   | no                                         |                  |           |            |
| businessEmail     |             | string   | no                                         |                  |           |            |
| contactPreference |             | string   | yes                                        |                  |           |            |
| preferredName     |             | string   | yes                                        | ^[^0-9]*$        | 1         | 30         |

- [yourLocationOfResidence](https://github.com/department-of-veterans-affairs/vets-website/blob/b3bccacfa202c36dfe4c0f63a0c33de51ec341e0/src/applications/ask-va/config/chapters/personalInformation/yourLocationOfResidence.js#L20)

| Field Name              | Object Name               | Type    | Required | Pattern | MinLength | Max Length |
|------------------------ |--------------------------|---------|----------|---------|-----------|------------|
| yourLocationOfResidence |                          | string  | yes      |         |           |            |

- [yourMailingAddress](https://github.com/department-of-veterans-affairs/vets-website/blob/b3bccacfa202c36dfe4c0f63a0c33de51ec341e0/src/applications/ask-va/config/chapters/personalInformation/yourMailingAddress.js#L13)

| Field Name | Object Name | Type   | Required | Pattern | MinLength | Max Length |
|------------|-------------|--------|----------|---------|-----------|------------|
| address    |             | Object | yes      |         |           |            |

- [yourPostalCode](https://github.com/department-of-veterans-affairs/vets-website/blob/b3bccacfa202c36dfe4c0f63a0c33de51ec341e0/src/applications/ask-va/config/chapters/personalInformation/yourPostalCode.js#L26)

| Field Name     | Object Name | Type   | Required | Pattern                      | MinLength | Max Length |
|----------------|-------------|--------|----------|------------------------------|-----------|------------|
| yourPostalCode |             | String | yes      | ^[0-9]{5}(?:-[0-9]{4})?$     |           | 10         |

- [yourRole](https://github.com/department-of-veterans-affairs/vets-website/blob/b3bccacfa202c36dfe4c0f63a0c33de51ec341e0/src/applications/ask-va/config/chapters/personalInformation/yourRole.js#L20)

| Field Name  | Object Name | Type     | Required     | Pattern | MinLength | Max Length |
|-------------|-------------|----------|--------------|---------|-----------|------------|
| yourRole    |             | string   | yes          |         |           |            |

- [yourRoleEducation](https://github.com/department-of-veterans-affairs/vets-website/blob/b3bccacfa202c36dfe4c0f63a0c33de51ec341e0/src/applications/ask-va/config/chapters/personalInformation/yourRoleEducation.js#L20)

| Field Name  | Object Name | Type   | Required | Pattern | MinLength | Max Length|
|-------------|-------------|--------|----------|---------|-----------|-----------|
| yourRole    |             | String | yes      |         |           |           |

- [yourRoleVRECounselor](https://github.com/department-of-veterans-affairs/vets-website/blob/b3bccacfa202c36dfe4c0f63a0c33de51ec341e0/src/applications/ask-va/config/chapters/personalInformation/yourVRECounselor.js#L21)

| Field Name           | Object Name           | Type    | Required      | Pattern | MinLength | Max Length |
|----------------------|----------------------|---------|--------------|---------|-----------|------------|
| yourVRECounselorPage |                      | Object  |              |         |           |            |
| yourVRECounselor     | yourVRECounselorPage | String  | yes (required)|         |           |            |

- [yourVREInformation](https://github.com/department-of-veterans-affairs/vets-website/blob/b3bccacfa202c36dfe4c0f63a0c33de51ec341e0/src/applications/ask-va/config/chapters/personalInformation/yourVREInformation.js#L18)

| Field Name            | Object Name           | Type    | Required                    | Pattern | MinLength | Max Length |
|-----------------------|----------------------|---------|-----------------------------|---------|-----------|------------|
| yourVREInformation    |                      | Boolean | yes (required at root level)|         |           |            |

- [Transform state prior to Submitting to API](https://github.com/department-of-veterans-affairs/vets-website/blob/b3bccacfa202c36dfe4c0f63a0c33de51ec341e0/src/applications/ask-va/config/submit-transformer.js#L49))
  - Anything that has been saved to the formData property goes
  - formData is a property that is extracted from state and mutated at several points through the flow

| Field Name                         | Object Name      | Type     | Brief Logic                                                                                                    |
|------------------------------------|------------------|----------|----------------------------------------------------------------------------------------------------------------|
| files                              |                  | Array    | Created by mapping uploadFiles, each file with FileName and FileContent fields.                                |
| SchoolObj                          |                  | Object   | Contains school-related details - InstitutionName, SchoolFacilityCode, StateAbbreviation.                      |
| InstitutionName                    | SchoolObj        | String   | Set to school name parsed from formData.school or formData.schoolInfo.schoolName.                              |
| SchoolFacilityCode                 | SchoolObj        | String   | Set to code parsed from formData.school or formData.schoolInfo.schoolFacilityCode.                             |
| StateAbbreviation                  | SchoolObj        | String   | Comes from stateOfTheSchool, stateOfTheFacility, or stateOrResidency.schoolState in formData.                  |
| requireSignIn                      |                  | Boolean  | True if any value in formData.requireSignInLogic is true; otherwise false.                                     |
| onBaseOutsideUS                    |                  | Boolean  | Set to address.isMilitary if formData.address exists; otherwise undefined.                                     |
| country                            |                  | String   | Set to address.country if formData.address exists; otherwise undefined.                                        |
| address                            |                  | Object   | Returns formData.address (augmented) if present, otherwise null.                                               |
| militaryAddress                    | address          | Object   | Populated if address.isMilitary; contains militaryPostOffice & militaryState from address.city and address.state. |
| militaryPostOffice                 | militaryAddress  | String   | Set to address.city if address.isMilitary, else null.                                                          |
| militaryState                      | militaryAddress  | String   | Set to address.state if address.isMilitary, else null.                                                         |
| emailAddress                       |                  | String   | Overwritten by businessEmail if relationshipToVeteran is WORK                                                  |
| phoneNumber                        |                  | String   | Overwritten by businessPhone if relationshipToVeteran is WORK                                                  |

- [Send to /auth when logged in or the request requires Sign In](https://github.com/department-of-veterans-affairs/vets-website/blob/b3bccacfa202c36dfe4c0f63a0c33de51ec341e0/src/applications/ask-va/utils/reviewPageUtils.js#L195)
  - Determines if the API request is sent to /ask_va_api/v0/inquiries or /ask_va_api/v0/inquiries/auth
