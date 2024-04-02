# Feature Brief - DataDog RUM Implementation  


## Objective: 
[Feature #63374](https://app.zenhub.com/workspaces/appointments-product-management-63d2b0c51ad23091ff211acb/issues/gh/department-of-veterans-affairs/va.gov-team/63374) 

The Appointments FE team will work on creating a DataDog RUM dashboard for the appointments online tool on VA.gov

## Prelimary work (tasks): 

- [X] Developer will need to create a Platform support ticket to get write access DataDog RUM (if needed). For view mode users, a [Okta ticket](https://depo-platform-documentation.scrollhelp.site/developer-docs/get-access-to-datadog) will need to be created for read access only. 
- [X] Setup DataDog dashboard (FE engineer) 
- [ ] Setting up the composite dashboard (Ticket #)  
- [X] Product will collect app user data (weekly and monthly - how many Veterans use the app/submission) / OCTO admin ? [See details in ticket #]() 
- [ ] Parameters will be defined by the team. Cannot use Patient ICN since it is PII Sample below.  
      - [ ] Region/user location
      - [ ] Appointment ID
      - [ ] Session ID
      - [ ] URL
      - [ ] Length
      
- [ ] Product will create a user online flow + DataDog flow 
- [ ] Create a feature toggle to mask the data 
- [ ] MVP buildout requirements 
- [ ] List of the VAOS dashboard (Ticket #) 
- [ ] Design documentation - Peter (mask PII/PHI information) 
- [ ] Simi to discuss with the Platform support team (create a token/ID) 
- [ ] Archive (6 months - 1 year) 
- [ ] Connect to slack 
- [ ] FE errors threshold

## In scope: 
- TBD

## Out of scope: 
- TBD

