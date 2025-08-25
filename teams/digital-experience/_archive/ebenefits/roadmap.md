# Migration Portfolio Roadmap

## _WIP_: Please PR with changes

## Features In Planning and Development

_Targets are dates in FY2020 unless otherwise noted, and indicated by fiscal quarters (Q2 = Jan, Feb, Mar 2020, etc.)_

| Feature                                             | Portfolio     | Discovery | Design    | Dev       | Launch    | Notes 
| --------------------------------------------------- | ------------- | --------- | --------- | --------- | --------- | -----
| Submit Disability Comp (526ez Original Claim)       | vsa-bam-1     | Q1        | --        | Q2        | Q3        | **(COMPELETE 07072020)**
| Submit BDD Claim (526ez)                            | vsa-bam-1     | Q1        | Q3        | Q3        | Q4        | **(COMPELETE 15112020)**
| View Rated Disabilities                             | vsa-ebenefits | Q1        | Q1        | Q1        | Q2        | **(COMPELETE 05022020)**; redev to BGS FY2021
| BGS Platform Integration                            | vsa-ebenefits | Q1        | --        | Q2        | Q2 FY2021 | Must complete for Dependency Claims, Payments, and other features
| View Dependents on Award                            | vsa-ebenefits | Q1        | Q1        | Q2        | Q2 FY2021 | Launch with Modify Dependents
| Modify Dependents (686c/ 674)                       | vsa-ebenefits | Q2        | Q2        | Q2        | Q2 FY2021 | New dev on full 2018 686c (EBN using 2014 686c), BGS integration
| Dependency Verification                             | vsa-ebenefits | Q4        | Q4        | Q1 FY2021 | Q2 FY2021 | New CFO priority as of Q4, depends on Modify Dependents
| Pension Automation: Dependency Claims               | vsa-ebenefits | Q4        | Q4        | Q1 FY2021 | Q2 FY2021 | New USB priority as of Q4, inflates scope of Modify Dependents
| View My Payments                                    | vsa-ebenefits | Q2        | Q2        | Q3        | Q1 FY2021 | **(COMPELETE 28122020)**
| Apply for PCPG CH36 (8832)                          | vsa-ebenefits | Q3        | Q3        | Q3        | Q2 FY2021 | **(COMPELETE 28122020)** Jan 4 2021 launch for program alignment
| Apply for VRE CH31 (1900)                           | vsa-ebenefits | Q3        | Q3        | Q3        | Q2 FY2021 | New VRE (CMS) integration required; Apr 19 MVP launch for program alignment
| Orientation for VRE CH31                            | vsa-ebenefits | Q4        | Q4        | Q1 FY2021 | Q2 FY2021 | New VRE business requirement as of Q4; Apr 19 MVP launch for program alignment
| Update Direct Deposit (EDU)                         | vsa-authd-exp | Q1 FY2021 | Q1 FY2021 | Q1 FY2021 | Q2 FY2021 | BGS Integration, new research
| View My Documents                                   | vsa-bam-2     | Q3        | Q3        | Q4        | Q1 FY2021 | Partially complete in Claim Status Tool, requires research on deltas
| View POA (Representative)                           | vsa-ebenefits | Q4        | Q4        | Q1 FY2021 | Q2 FY2021 | Lighthouse integration (BGS)
| Search for POA                                      | vsa-ebenefits | Q4        | Q4        | Q1 FY2021 | Q2 FY2021 | OGC System integration
| Modify POA (22/ 22a)                                | vsa-ebenefits | Q4        | Q4        | Q1 FY2021 | Q2 FY2021 | Lighthouse integration (BGS)
| Order Hearing Aid Batteries (2346)                  | vsa-bam-2     | Q2        | Q2        | Q2        | Q4        | **(COMPELETE 07202020)**
| Order Prosthetic Socks (2345)                       | vsa-bam-2     | Q2        | Q2        | Q2        | Q4        | **(COMPELETE 07202020)** Deprecated with launch of Hearing Aids
| Calculate Home Loan Benefit                         | vsa-ebenefits | Q1 FY2021 | Q2 FY2021 | Q2 FY2021 | Q2 FY2021 | Requires Discovery, possible new LGY integration required
| Apply for Certificate of Eligibility (1880)         | vsa-ebenefits | Q1 FY2021 | Q2 FY2021 | Q2 FY2021 | Q2 FY2021 | Requires Discovery, possible new LGY integration required
| View Specially Adapted Housing Grant Status         | vsa-ebenefits | Q1 FY2021 | Q2 FY2021 | Q2 FY2021 | Q2 FY2021 | Requires Discovery, possible new LGY integration required
| Apply for Specially Adapted Housing Grant (4555)    | vsa-ebenefits | Q1 FY2021 | Q2 FY2021 | Q2 FY2021 | Q2 FY2021 | Requires Discovery, possible new LGY integration required
| View Dependent Benefits Letter                      | commibation   | Q2 FY2021 | --        | --        | --        | Requires Discovery and Documentation
| _SEP Features Placeholder_                          | TBD           | --        | --        | --        | --        | Requires Discovery and Documentation


## Complete: Applications and Features

| Feature
| ------
| View My Payments 28122020
| Apply for PCPG CH36 (8832) 28122020
| View Rated Disabilities 05022020
| Discover State Benefit info 23062020
| Order Hearing Aid Batteries (2346) 07202020
| View Claim Status
| View DIC Claim Status 
| View Appeal Status                         
| View Decision Review Status                    
| Apply for Disability Compensation (Prior Claimant)
| Upload Supporting Documents for Disability Claim
| Update Personal Contact Information 
| Update Direct Deposit (Comp & Pen)
| Download VA Letters
| View Post GI Bill Enrollment Status and Entitlement

## Complete: Links to Other Systems

| Feature
| ------
| VGLI/ SGLI Policy Management
| WAVE Enrollment Verification
| Join Burn Pit Registry
| Transfer Post-911 GI Bill Benefits

## WIP: EVSS Roadmap

| Service                                             | Notes 
| --------------------------------------------------- | -----
| dependents                                          | May be deprecated as part of 686c work
| disability_compensation_form                        | Needs migration plan
| gi_bill_status                                      | Needs migration plan
| intent_to_file                                      | Matching BGS service
| letters                                             | Needs migration plan
| pciu                                                | Migrate to fallback strategy of VA-Profile > BGS::EbenefitsAddressUpdateWebService
| pciu_address                                        | Migrate to fallback strategy of VA-Profile > BGS::EbenefitsAddressUpdateWebService
| ppiu                                                | Matching BGS service for both Comp and Ch33
| reference_data                                      | Needs migration plan
| vso_search                                          | May be deprecated as part of 21-22/a work


