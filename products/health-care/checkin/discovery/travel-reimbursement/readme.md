# Travel Reimbursement Discovery Findings 

## Landing Date

MVP Targeting Fall/Winter 2022


### Meetings & Decisions 
- [Meeting Notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/discovery/travel-reimbursement/meeting-notes.md)
- [Decision Register](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/discovery/travel-reimbursement/decision-register.md)

### Questions
- [Running List of Answers to Questions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/discovery/travel-reimbursement/answers-to-questions.md)

### Research
- [Travel Reimbursement Findings from Interview with VA Bay Pines Healthcare System ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/discovery/travel-reimbursement/bay-pines-interview-notes.md)<br>
- [Research Synthesis from Bay Pines (Mural)](https://app.mural.co/t/vfscie8528/m/agilesixapplications0942/1656596645401/9bd88630ea05258119a5fa523233b1979a996531?sender=u83bc52d7fa73658f84f27755)<br>
- [Travel Reimbursement Findings from Interview with VA Texas Valley Health Care](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/discovery/travel-reimbursement/tx-valley-interview-notes.md)
- [Travel Reimbursement Veteran Remote Study Synthesis (Mural)](https://app.mural.co/t/vfscie8528/m/vfscie8528/1661533294973/772d372cc95132227efcf5b3391ed1a02e41e7df?sender=u83bc52d7fa73658f84f27755)

### Design Artifacts
- [Initial user flow options (Sketch)](https://www.sketch.com/s/42a478e7-cb38-49e5-9500-9b21182873da/a/dlAA519)
- [Initial user flow diagrams for prototypes (Mural)](https://app.mural.co/t/vfscie8528/m/vfscie8528/1658844568873/93ba988aed6312d43533b8feaed365529b836332?sender=u83bc52d7fa73658f84f27755)
- [Initial Prototype A "Interested Question"](https://www.sketch.com/s/e79a827e-42cf-4a82-b554-874c75b5c70e/prototype/a/19E0B04F-D95E-4CC1-B15A-543FF487AA3E)<br>
- [Initial Prototype B "No Interested Question"](https://www.sketch.com/s/e79a827e-42cf-4a82-b554-874c75b5c70e/prototype/a/E032CDED-B46C-437E-8592-D47A595CB4DD)<br>
- [Initial Prototype C "Single-Question Flow"](https://www.sketch.com/s/e79a827e-42cf-4a82-b554-874c75b5c70e/prototype/a/E3C109B2-DA3E-46CD-8A98-52C09ADD1944)<br>

## Happy Path (MVP)

- During the check in flow, a veteran who is doing a `round trip`, `mileage only` travel from their `home address` can submit the BTSSS claim for the them automatically.
- This claim should show up in their current claims list. 
- Should not increase staff workload


## Current assumptions

- We are displaying the question for all users. 
- During the check in process, We have access to the Veterans ICN, the veterans home address and the facility address. 
- No staff facing enhancements are happening for MVP 
- Little flexibility in the BTSSS API, assumed  none until something is needed. 

## Future Iterations Initiatives

- Asyncronous Calls
- Performance Tweaks 
- Filter Eligilbity 
- Better feedback for veterans (textin/portal)
- Add more expenses to the claim
