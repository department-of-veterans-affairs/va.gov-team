## May 5, 2023 CG Stakeholder Touchbase

### Notes (outstanding questions answered!!)
- VA Org migration to new Instance - VA Gov 1010CG Communication
     - There is DTC led effort where salesforce infrastructure level migration is happening for the whole main VA SF Org to new pod (instance). This is different from the CARMA Org migration.
     - Salesforce Org where CARMA resides will go Read-only from **June 24, 11pm - June 25, 2am ET**  (3 Hour window).
     - There should be _**no impacts to vets API layer**_ as Mulesoft will queue requests and retry automatically. This is just for awareness.
          - We do have retries on Mulesoft and API layer
     - **Ranga** to update on the dates - if there is any change from June 24th
     - Any testing needed from Va.Gov? 
          - if needed Ranga to add them into the support call - POC - Lihan/Heather
 

- VA Gov, Updates on Facility Selection page 
     - VA Gov starting development on the Facility Selection page, however there is still dependency on the Lighthouse Facility API v1 release, which should be in the next couple weeks, but able to start working on implementing the UI designs into the code.
