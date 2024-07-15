# Travel Reimbursement Discovery Findings 

## Landing Date

MVP Targeting Fall/Winter 2022

## Research

### Previous Research on BTSSS Ecosystem
- [Final Presentation - 18F - VA Travel Reimbursement PA.pdf](https://github.com/department-of-veterans-affairs/va.gov-team/files/12822170/Final.Presentation.-.18F.-.VA.Travel.Reimbursement.PA.pdf)
- [Final Report - 18F Path Analysis on Beneficiary Travel Self-Service System (BTSSS).pdf](https://github.com/department-of-veterans-affairs/va.gov-team/files/12822171/Final.Report.-.18F.Path.Analysis.on.Beneficiary.Travel.Self-Service.System.BTSSS.pdf)
- [18F & VA Travel Reimbursement PA Mid-Point.pdf](https://github.com/department-of-veterans-affairs/va.gov-team/files/12822172/18F.VA.Travel.Reimbursement.PA.Mid-Point.pdf)

### Research Findings from Check In
- [Travel Reimbursement Findings from Interview with VA Bay Pines Healthcare System ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/discovery/travel-reimbursement/bay-pines-interview-notes.md)<br>
- [Research Synthesis from Bay Pines (Mural)](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1677531778271/c07cb27bbf026415d07a1fc0ae39b972954ecf5c?sender=u37bb983bd3fc3cc00c7d3286)
- [Research Findings from Bay Pines](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/veteran-facing/bay-pines-in-person-uat/research-findings.md#details-of-findings)
- [Travel Reimbursement Findings from Interview with VA Texas Valley Health Care](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/discovery/travel-reimbursement/tx-valley-interview-notes.md)
- [Travel Reimbursement MVP in eCheck-in Research Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/veteran-facing/travel-reimbursement-mvp-remote-test/research-plan.md)<br>
- [Travel Reimbursement MPV in eCheck-in Research Synthesis (Mural)](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1677531174556/4f4a8f04d34bde856e78d316e3b233b705714a3c?sender=u37bb983bd3fc3cc00c7d3286)
- [Travel Reimbursement MPV in eCheck-in Research Report (PDF)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/veteran-facing/travel-reimbursement-mvp-remote-test/PCI%20Travel%20Reimbursement%20Research%20Report.pdf)
- [Travel Reimbursement MPV in eCheck-in Research Report Findings (Markdown)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/veteran-facing/travel-reimbursement-mvp-remote-test/research-findings.md#recommendations)
- [Research Findings from Wilkes-Barre](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/2022-12%20Patient%20Check%20In%20Travel%20Reimbursement%20Veteran%20Intercept%20at%20Wilkes-Barre/research-findings.md#key-findings)
- [Wilkes-Barre Metrics Reports](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/2022-12%20Patient%20Check%20In%20Travel%20Reimbursement%20Veteran%20Intercept%20at%20Wilkes-Barre/research-presentation.md)

### Design Artifacts for Travel Reimbursement MVP in eCheck-in Research  
- [Initial user flow options (Sketch)](https://www.sketch.com/s/42a478e7-cb38-49e5-9500-9b21182873da/a/dlAA519)
- [Initial user flow diagrams for prototypes (Mural)](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1677531429305/6b986c4b53c47cd6da2809f5af30ad28a87644bb?sender=u37bb983bd3fc3cc00c7d3286)
- [Prototype D (Post-research) (Sketch)](https://www.sketch.com/s/38819fc4-18ef-4958-a330-a699785301d6)

## MVP Requirements 

- As a Veteran, During the check in flow, a Veteran can submit a claim for travel that is `round trip`, `mileage only` travel from their `home address` to the BTSSS system. 
- As a Veteran, I should be shown my Claim Number during check in so that I can track the claim in the BTSSS system. 
- As a Veteran, I should see this current claims list in the existing Travel Pay system. 
- As the Product team, we should able to track a claim through the whole system from end to end and determine `average time to paid`

### MVP Assumptions

- We are displaying the question for all users. 
- During the check in process, We have access to the Veterans ICN, the veterans home address and the facility address. 
- No staff facing enhancements are happening for MVP 
- Little flexibility in the BTSSS API, assumed  none until something is needed. 
- If a claim is submitted before an appoinment is checked out, the claim will go into manual review 

## Future Ideas

- Asycnronous Claim Submission
- Veteran notifiction
- Performance Tweaks 
- Filter Eligilbity 
- Better feedback for veterans (textin/portal)
- Add more expenses to the claim

## Production 
- [eCheck-in with travel reimbursement production design (Sketch)](https://www.sketch.com/s/231af204-0959-46b4-80f0-eebb94922744/p/A6E73D11-A95C-4EC0-A3B7-792CE5799C59/canvas)
- [Userflow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1677531124203/5edcfd3ea4b1eaf1ef082d56782a8b3291ef3932?sender=u37bb983bd3fc3cc00c7d3286)

## Future Releases & Artifacts

- [Userflow that includes Bene Travel Agreement](https://www.sketch.com/s/231af204-0959-46b4-80f0-eebb94922744/p/0157CB5C-B33B-4324-B375-AC686EFA3B4A/canvas)
- [Impact vs Feasibility Matrix for filing for past appointments](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1692898808732/d9ae369abf85caa6afdc24b2743dba0989171eee?sender=u37bb983bd3fc3cc00c7d3286)
- [Past appointments userflow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1695774555765/73dec2c323f80ae6cb2a6e0a646221e2aeb680c4?sender=u37bb983bd3fc3cc00c7d3286)
- [Research Plan for Past Appointments](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/2023-11%20Past%20Appointments%20Travel%20Reimbursement%20Generative%20Usability%20Study/research-plan.md)
