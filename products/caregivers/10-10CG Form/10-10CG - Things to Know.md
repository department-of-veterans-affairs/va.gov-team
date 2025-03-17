# Things to know about the 10-10CG
This document contains tidbits, odds & ends, and information about the 10-10CG form, development, testing and anything else that isn't captured in other documents.

### Abbreviations
- CG = Caregiver
- CSC = Caregiver Support Coordinator
- CSP = Caregiver Support Program

### Development
- Originally, VA.gov vets-api was directly connected with CARMA, which is the system used to process the CG application.  In March 2022, MuleSoft was introduced as a middleware to reduce CARMA failures due to timeouts.  The decision to use Mulesoft was made in early 2021, there is not alot of documentation around this decision.  In the summer of 2022, it was decided to implement both Mulesoft queuing and vets-api retry capabilities to mitigate outages, failures and timeouts from both sides. Production release September 23, 2022. Reference this [Impact Review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/Product/OCTO_DE%20Impact%20Review%20-%2010-10CG%20MuleSoft%20Integration%20-%201-6-2023.pptx) for details and metrics
- ...


### Testing
- User #36 can be used for testing in all environments
     - first name: WESLEY
     - last name: FORD
     - Use the [Staging users document](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv) or [Test User Dashboard (TUD)](https://tud.vfs.va.gov/) for additional Password, SSN, DOB information


### Miscellaneous
- 8/10/22 Sign as a Representative language was worked on for most of 2021 to include references to POAs with medical stipulations being acceptable, and general POAs are not. About 30% of documents uploaded for this purpose were acceptable, the language update in February saw an increase to 60% acceptable documents.  Since February, we have had phased releases, increasing the population over several months, reaching 100% on 7/6/222.  With this population increase, we are also seeing a trend of unacceptable documents increasing. On [8/5/22 during the routine meeting](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/Meeting%20Notes/8-05-2022%20CG%20Stakeholder%20Touchbase.md), the CG Stakeholder team informed us that they have been given approvals to accept general POAs for Veterans without the medical stipulation.  We will remove the medical language from the Sign as a Rep pages, and anticipate a rise in acceptable documents being received.  The change was made to the online form in early September 2022.
     - Note: We also anticipate still receiving incomplete documents, and others such as Driver licenses, Marriage certificates, images, and random miscellaneous documents that do not pertain to Veteran representation.  We expect this volume to be lower.
     - The CG team was able to accept general POA documents for the month of July.  This raised the acceptance rate to 68% for the month.
 - 03/17/2025 - Once the team implemented the dynamic facility search functionality, we found some issues that needed special attention to ensure the proper facilities were presented in the search results.  See the [Facility Filtering document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/eng-docs/Facility%20filtering.md) for details
