# Migration Portfolio Roadmap

## _WIP_: Please PR with changes

## Features In Planning and Development

_Targets are dates in FY2020 unless otherwise noted, and indicated by fiscal quarters (Q2 = Jan, Feb, Mar 2020, etc.)_

| Feature                                             | Portfolio     | Discovery | Design    | Dev       | Launch    | Notes 
| --------------------------------------------------- | ------------- | --------- | --------- | --------- | --------- | -----
| Submit Disability Comp (526ez Original Claim)       | vsa-bam-1     | Q1        | --        | Q2        | Q3        | 
| Submit BDD Claim (526ez)                            | vsa-bam-1     | Q1        | Q3        | Q3        | Q3        | 
| View Rated Disabilities **(COMPELETE 05022020)**    | vsa-ebenefits | Q1        | Q1        | Q1        | Q2        | Launch on EVSS; redev to BGS Q4
| View Dependents on Award                            | vsa-ebenefits | Q1        | Q1        | Q2        | Q3        | Launch with Modify
| Modify Dependents (686c/ 674)                       | vsa-ebenefits | Q2        | Q2        | Q2        | Q3        | New dev on full 2018 686c (EBN using 2014 686c)
| View My Payments                                    | vsa-ebenefits | Q2        | Q2        | Q3        | Q3        | BGS integration
| Apply for PCPG CH36 (8832)                          | vsa-ebenefits | Q3        | Q3        | Q3        | Q4        | Submit to Central Mail; Oct 2020 launch for alignment
| Apply for VRE CH31 (1900)                           | vsa-ebenefits | Q3        | Q3        | Q3        | Q4        | New VRE (CMS) integration required
| View POA (Representative)                           | vsa-ebenefits | Q3        | Q3        | Q3        | Q3        | Likely Lighthouse integration (BGS), launch with Modify
| Search for POA                                      | vsa-ebenefits | Q3        | Q3        | Q3        | Q3        | Likely Lighthouse integration (OGC System), launch with Modify
| Modify POA (22/ 22a)                                | vsa-ebenefits | Q3        | Q3        | Q3        | Q4        | Likely Lighthouse integration (BGS)
| View My Documents (eFolder)                         | TBD           | Q3        | Q3        | Q3        | Q4        | VBMS integration, may parallel DMC effort
| Order Hearing Aid Batteries (2346)                  | vsa-bam-2     | Q2        | Q2        | Q2        | Q3        | New DLC integration required (pushed due to COVID)
| Order Prosthetic Socks (2345)                       | vsa-bam-2     | Q2        | Q2        | Q2        | Q3        | New DLC integration required (pushed due to COVID)
| Calculate Home Loan Benefit                         | TBD           | Q3        | Q3        | Q4        | Q4        | Requires Discovery, possible new LGY integration required
| Apply for Certificate of Eligibility (1880)         | TBD           | Q3        | Q3        | Q4        | Q4        | Requires Discovery, possible new LGY integration required
| View Specially Adapted Housing Grant Status         | TBD           | Q3        | Q3        | Q4        | Q4        | Requires Discovery, possible new LGY integration required
| Apply for Specially Adapted Housing Grant (4555)    | TBD           | Q3        | Q3        | Q4        | Q4        | Requires Discovery, possible new LGY integration required
| Update Direct Deposit (EDU)                         | vsa-ebenefits | --        | --        | --        | --        | BGS Integration
| View Dependent Benefits Letter                      | vsa-ebenefits | --        | --        | --        | --        | Requires Discovery and Documentation
| Discover State Benefit Info                         | vsa-ebenefits | --        | --        | --        | --        | Requires Discovery and Documentation
| _SEP Features Placeholder_                          | vsa-ebenefits | --        | --        | --        | --        | Requires Discovery and Documentation


## Complete: Applications and Features

| Feature
| ------
| View Rated Disabilities
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


