# Delegate Access in the Private Sector
**Edge Case**: [Delegates & Caregivers](https://jira.devops.va.gov/browse/SITEC-1)\
**Created**: 9 September 2024\
**Last Updated:** 13 May 2025  
**Contributors**: Matthew Declercq

## Background  
As part of the VA’s sign-in transition effort, the VA is interested in understanding how Court-Appointed Guardians are handled in the private healthcare sector. To better craft a desirable experience for Veterans and their Guardians, we will assess how guardians gain access to records and digital systems from private sector providers and insurance companies.

## Scope of Exploration  
- Kaiser Permanente  
- Anthem Blue Cross Blue Shield  
- Athena Health  
- My Chart by Epic  
- UP Health System  

## Private Sector  

### Legal Documentation  
The guardian would first ensure they have all necessary legal documentation proving their guardianship. This usually includes a court order or letters of guardianship issued by the court.

### Requesting Information & Access from Providers  

#### Hospitals and Clinics  
The guardian would come in person to the medical records department or health information management department of hospitals, clinics, or any healthcare provider where the ward has records. They present their court-appointed guardianship documents. Many healthcare providers have forms or procedures for guardians or those with power of attorney to access medical records.

#### Electronic Health Records (EHR)  
If the provider uses an EHR system, the guardian might need to be registered within that system. Some systems allow for proxy access, where guardians can have their own login credentials to access the patient's records.

### Requesting Information & Access from Insurance Companies  

#### Authorization Forms and Legal Proof  
Guardians might need to fill out specific authorization forms required by the insurance company to access any digital health information or billing records. Similar to healthcare providers, insurance companies will require legal proof of guardianship before granting access to any records or information systems.

#### Claims, Billing, EOBs, Etc  
Similar to EHRs from providers, guardians may be able to gain proxy access to the digital systems.

### Digital Platforms and Portals  
The guardian would:
- Register or gain access to the patient's account, using their legal authority. This might involve setting up an account or getting the credentials from the patient if they had one set up before incapacity.
- If the platform supports it, there might be features for caregivers or guardians, allowing them separate access levels.

## Summary  
Due to the fragmentation in private sector health, the process and access can vary depending on the state, insurance company, and provider. Generally, documents and identity are verified in person before any digital access is granted.

![High-Level User Journey | Private Sector Court-Appointed Guardian](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/sign-in-transition/Product/Edge%20Cases/Guardians/High%20Level%20User%20Journey%20-%20Private%20Sector%20Court-Appointed%20Guardian.png)


## VA

### Problem
A guardian role is only appointed when a veteran is unable to speak for themselves. This may not be that they literally can't speak (though it can be), but it could be something like the person has Alzheimer's and while they can speak, they don't know what is going on. So these veterans cannot verify themselves.

### Who needs to be supported?
- Support existing veterans whose court-appointed guardians authenticate on their behalf
- Create a new feature to allow for court-appointed guardians to perform delegate actions on a veteran's behalf

### How the OGC wants it handled
- A court-appointed guardian creates their own Login.gov or ID.me account
- We then somehow link that to the veteran's information.

### Requirements
- Court-appointed guardians must present documentation in person in order to be authenticated as the guardian by the health system
  - VERA functions similarly, requiring the guardian to present documents in person every time a transaction is done on behalf of the Veteran

### Use Cases
- Veteran that has a guardian
- Veteran that is a guardian
- Are they asked to go to their account or their guardian's account?
  - Profile switch

### Future Considerations for VA
The Identity (Oddball) team is evaluating technical requirements currently. There is a future opportunity to evaluate the user experience once technical capability and requirements have been identified to determine an adapted pathway for guardians impacted by the credential migration.

The considerations below are the “happy” paths that might be considered and would require vetting against the current technical capabilities on VA.gov.

#### 1. Guardianship Already Established
  - Online Proxy is tracked on IAM, based on identities.
  - Preserve MHV Premium flag for approved guardians (completed authentication and relevant documents, if digital copies are required) on MHV Benefits view, even though sign-in changes.

#### 2. Feature Builds
  - Authenticate and include a note that flags the Veteran account with guardian access.
    - Every sign-in with Veteran credentials prompts a person to indicate they are a guardian. All activity is tagged as guardian actions on behalf of the Veteran.
  - Feature build on VA.gov to link between guardian accounts.
    - Requirement is that the patient and guardian have the same verified credential.
    - UI feature to switch views.
    - Clarity on the in-person process to authenticate and admin access to update approval and link accounts.

