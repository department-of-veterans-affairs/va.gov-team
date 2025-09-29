**BDS integration notes**

**Overview**

The data that BDS requires is more detailed than the information than we ask in our questionnaire. Unfortunately this makes an accurate data translation impossible; we would need to make assumptions that have very little to no information to back it up. For example, we collect the total number of years served, but BDS requires the start date, end date, and branch served for every military service.

**Data we do not collect**

*   DOB
    
*   Disability rating (The actual number)
    
*   Individual service history
    
    *   Start date
        
        *   We only have total time served. This is an issue for benefits that require service during a specific period.
            
    *   End date
        
    *   Discharge status
        
        *   We only keep track of the highest discharge status. We should ask for the discharge for every time in the service.
            
    *   Branch of service
        
*   Purple Heart recipient dates
    

**Data BDS does not support**

*   Branch components
    
*   Goals/category
    
*   Currently serving
    
*   Expected separation
    
*   Benefit IDs
    
*   Learn more links
    

**Prerequisites**

*   Wait on BDS to create vets-api gateway to their API
    
*   Have BDS create us an APP passcode and API key
    

**BDS Endpoints**

*   All benefits
    
*   Get recommended benefits
    
*   Example API input data:

```
{
  "dateOfBirth": "1995-01-01",
  "disabilityRating": 60,
  "serviceHistory": [
    {
      "startDate": "2002-03-15",
      "endDate": "2006-08-31",
      "dischargeStatus": "HONORABLE_DISCHARGE",
      "branchOfService": "NAVY"
    },
    {
      "startDate": "2007-04-03",
      "endDate": "2010-12-31",
      "dischargeStatus": "GENERAL_DISCHARGE",
      "branchOfService": "ARMY"
    }
  ],
  "purpleHeartRecipientDates": [
    "2003-02-01",
    "2005-05-13"
  ]
}
```

**Resources**

*   [BDS benefit eligibility rules](https://github.com/department-of-veterans-affairs/ves-benefits-discovery-service/blob/main/rules.md#healthbenefiteligibility)
    
*   [BDS GitHub repo](https://github.com/department-of-veterans-affairs/ves-benefits-discovery-service)
    
*   [Eligibility mapping mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1753280444533/71d73d6a1a75df619578d261ef981393158a24a7)
    
*   [BDS API documentation](https://effective-adventure-ozmrjm3.pages.github.io/)
