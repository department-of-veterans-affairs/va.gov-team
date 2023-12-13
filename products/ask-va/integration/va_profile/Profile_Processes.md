# Profile Processes

## Description

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
## Notes
* Current system allows for directly updating profile.
    * If we are using VA Profile, maybe we can create/update a profile when the user submits their first inquiry.  This will allow us to collect the information we need to create a profile and allow the user to update their profile information as needed.
    * Alternatively, we redirect the user to VA Profile if they want to update their profile information.
