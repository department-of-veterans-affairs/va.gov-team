# Profile Processes

## Description
When an authenticated user visits the AVA Form, some fields pre-populate.  

The data for a field can come from either the VA Profile or AVA Profile. VA Profile is considered the primary source of profile information, so any field with data in both VA Profile and AVA Profile, or VA Profile alone, will use the data from VA Profile. However, if the field only has data in the AVA Profile, the AVA Form will use that data instead.

No information can be pre-populated for unauthenticated users of the AVA Form.

## Login Flow
```mermaid
sequenceDiagram
    VA-gov->>IDP: Initiate Login Process
    IDP->>VA-gov: success
    VA-gov->>VA-profile: Initiate retrieval of user profile information
    VA-profile->>VA-gov: Authenticated User's Profile Information
    VA-gov->>AVA_Form: User directs to AVA_Form
```

## Authenticated Form Flow
```mermaid
flowchart TB
    Predefined-Login-Process{{Pre-Defined Process for Login and VA Profile Data Retrieval}}-->Authenticated_User
    Authenticated_User-->|pre populates with va profile data|AVA_Form
    AVA_Form-->business_entity_logic{is business inquiry}
    business_entity_logic{is business inquiry}-->AVA_Profile_Retrieval
    AVA_Profile_Retrieval-->Predefined-AVA-Process{{Pre-Defined Logic For Merging Data Only Found in AVA Profile}}-->AVA_Form
```

## Authenticated Dashboard Flow
```mermaid
flowchart TB
    Predefined-Login-Process{{Pre-Defined Process for Login and VA Profile Data Retrieval}}-->Authenticated_User
    Authenticated_User-->AVA_Dashboard
    AVA_Dashboard-->|user identifier|AVA_BE-Retrieve-Inquiries
    AVA_BE-Retrieve-Inquiries-->|Inquiry Data that includes distinction for business inquiries|AVA_Dashboard
```

## Pre-Populated Field Sourcing
| Pre-Populated Field | Source | Source Field |
|:--|:--|:--|
| Suffix | AVA Profile | Suffix |
| Pronouns | AVA Profile | Pronouns I use |
| School State | AVA Profile | School State |
| School Facility | AVA Profile | School Facility Code |
| Service Number | AVA Profile | Service Number |
| Business phone | AVA Profile | Business Phone |
| Business email | AVA Profile | Business Email |
| Suffix | AVA Profile | Suffix |
