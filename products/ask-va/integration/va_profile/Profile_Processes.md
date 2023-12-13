# Profile Processes

## Description
When an authenticated user visits the AVA Form, some fields pre-populate.  

The data for a field can come from either the VA Profile or AVA Profile. VA Profile is considered the primary source of profile information, so any field with data in both VA Profile and AVA Profile, or VA Profile alone, will use the data from VA Profile. However, if the field only has data in the AVA Profile, the AVA Form will use that data instead.

No information can be pre-populated for unauthenticated users of the AVA Form.

## Benefits of pre-population
* Reduces friction between user and submitting their inquiry
* VA Profile Benefits:
  *  A user can submit a form in VA.gov and expect the same default information across the system
  *  Updates to profile happen explicitly.
      * They can change things on a per-submission basis without having to worry about changing their default values.
  *  User has a single place to record their preferences.
* AVA Profile Benefits:
  * Information specific to AskVA can be stored.
  * Can be updated implicitly with each form submission.
 
## Flows
### Authenticated Form Flow
```mermaid
flowchart TB
    subgraph AVA CRM
    AVA_CRM-Retrieve-Profile<-->AVA-CRM-Data-Store[(CRM Data Store)]
    end
    subgraph AVA Form Interaction
    business_entity_logic{is business inquiry}-->|yes|AVA_BE-Profile_Retrieval
    business_entity_logic{is business inquiry}-->|no|AVA_Form
    AVA_BE-Profile_Retrieval<-->|user icn|AVA_CRM-Retrieve-Profile
    AVA_BE-Profile_Retrieval-->|AVA profile data|Predefined-AVA-Process{{Pre-Defined Logic For Merging Data Only Found in AVA Profile}}-->AVA_Form
    end
    subgraph VA.gov
    Predefined-Login-Process{{Pre-Defined Process for Login and VA Profile Data Retrieval}}-->Authenticated_User
    Authenticated_User-->|Va Profile Data|business_entity_logic{is business inquiry}
    end
```

### Authenticated Dashboard Flow
```mermaid
flowchart TB
    subgraph AVA Dashboard Interaction
    AVA_BE-Get-Inquiries-->|Inquiry Data that includes distinction for business inquiries|AVA_Dashboard
    end
    subgraph AVA CRM
    AVA_CRM-Retrieve-Inquiries<-->AVA-CRM-Data-Store[(CRM Data Store)]
    end
    subgraph VA.gov
    Predefined-Login-Process{{Pre-Defined Process for Login and VA Profile Data Retrieval}}-->Authenticated_User
    Authenticated_User-->|user ICN|AVA_BE-Get-Inquiries
    AVA_BE-Get-Inquiries<-->|user ICN|AVA_CRM-Retrieve-Inquiries
    end
```

### Pre-Defined Process for Login and VA Profile Data Retrieval
```mermaid
sequenceDiagram
    VA-gov->>IDP: Initiate Login Process
    IDP->>VA-gov: success
    VA-gov->>VA-profile: Initiate retrieval of user profile information
    VA-profile->>VA-gov: Authenticated User's Profile Information
    VA-gov->>AVA_Form: User directs to AVA_Form
```

### Pre-Defined Logic For Merging Data Only Found in AVA Profile
```mermaid
flowchart TB
    subgraph AVA Form Interaction
    question1{What is your question about}-->|Someone else's benefits|Is_Business_Case
    question2{What is your relationship to the Veteran}-->|Connected to the Veteran through my work|Is_Business_Case
    end
```

## Pre-Populated Field Sourcing
| Pre-Populated Field | Source | Source Field |
|:--|:--|:--|
| Submitter DoB | VA Profile |  |
| Submitter SSN | VA Profile |  |
| Submitter First Name | VA Profile |  |
| Submitter Middle Name | VA Profile |  |
| Submitter Last Name | VA Profile |  |
| Preferred Name | VA Profile || 
| Submitter Gender | VA Profile ||
| Submitter Home Address | VA Profile || 
| Submitter Home City | VA Profile || 
| Submitter Home State | VA Profile || 
| Submitter Home Zip  | VA Profile || 
| Submitter Phone  | VA Profile || 
| Submitter Email  | VA Profile || 
| Submitter Branch of Service  | VA Profile || 
| Submitter Service Dates  | VA Profile || 
| Submitter Service Number  | VA Profile || 
| Submitter Business Phone  | AVA Profile || 
| Submitter Business Email  | AVA Profile || 
| Submitter School Facility Code  | AVA Profile || 
| Submitter State of School  | AVA Profile || 
| Suffix | AVA Profile | Suffix |
| Pronouns | AVA Profile | Pronouns I use |
| School State | AVA Profile | School State |
| School Facility | AVA Profile | School Facility Code |
| Service Number | AVA Profile | Service Number |
| Business phone | AVA Profile | Business Phone |
| Business email | AVA Profile | Business Email |


## Resources
* [VA Profile Spike](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/engineering/spikes/va_profile_spike.md)
